import express from 'express';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

const router = express.Router();
dotenv.config();

// Configure email transporter with better error handling
const createTransporter = () => {
  // Check if environment variables are defined
  if (!process.env.MAIL_USER || !process.env.MAIL_PASS) {
    console.error('Email configuration is missing! Check your environment variables.');
    return null;
  }

  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
    // Add debug option to get more information
    debug: process.env.NODE_ENV === 'development',
  });
};

// Send order details email
router.post('/send-order-details', async (req, res) => {
  try {
    // Validate required fields
    const { orderId, email, userId, orderDetails } = req.body;
    
    if (!email) {
      return res.status(400).json({
        success: false,
        message: 'Email address is required'
      });
    }
    
    if (!orderDetails || !orderDetails.items) {
      return res.status(400).json({
        success: false,
        message: 'Order details are required'
      });
    }
    
    // Optional: Verify the order belongs to this user
    if (orderId && userId) {
      try {
        const order = await Order.findById(orderId);
        if (!order) {
          return res.status(404).json({
            success: false,
            message: 'Order not found'
          });
        }
        
        if (order.userId.toString() !== userId) {
          return res.status(403).json({
            success: false,
            message: 'Unauthorized access to this order'
          });
        }
      } catch (dbError) {
        console.error('Database error:', dbError);
        return res.status(500).json({
          success: false,
          message: 'Failed to verify order',
          error: dbError.message
        });
      }
    }
    
    // Get currency symbol from order details or use default
    const currencySymbol = orderDetails.currency || '$';
    
    // Create HTML content for the email
   // Modified part of the /send-order-details route in emailRoutes.js
// Create HTML content for the email
const htmlContent = `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <h2 style="color: #333;">Your Order Has Been Dispatched!</h2>
  <p>Great news! Your order has been dispatched and is on its way to you.</p>
  
  <div style="background-color: #f7f7f7; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
    <p><strong>Order Date:</strong> ${new Date(orderDetails.date).toLocaleDateString()}</p>
    <p><strong>Order Status:</strong> ${orderDetails.status}</p>
    <p><strong>Payment Method:</strong> ${orderDetails.paymentMethod || 'Not specified'}</p>
    ${orderDetails.awbNumber ? `<p><strong>Tracking Number (AWB):</strong> ${orderDetails.awbNumber}</p>` : ''}
  </div>
  
  <h3 style="color: #333;">Items Dispatched</h3>
  ${orderDetails.items.map(item => `
    <div style="border-bottom: 1px solid #eee; padding: 10px 0;">
      <p><strong>${item.productName || 'Product'}</strong></p>
      <p>Price: ${currencySymbol}${item.price} | Quantity: ${item.quantity || 1} | Size: ${item.size || 'Standard'}</p>
    </div>
  `).join('')}
  
  <div style="margin-top: 20px; text-align: right;">
    <p><strong>Total:</strong> ${currencySymbol}${orderDetails.total.toFixed(2)}</p>
  </div>
  
  ${orderDetails.awbNumber ? `
  <div style="margin-top: 20px; padding: 15px; background-color: #e8f4ff; border-radius: 5px;">
    <h3 style="margin-top: 0; color: #0056b3;">Track Your Package</h3>
    <p>You can track your package using the AWB number: <strong>${orderDetails.awbNumber}</strong></p>
    <p>Depending on your shipping carrier, you may be able to track your package on their website.</p>
  </div>
  ` : ''}
  
  <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
    <p>If you have any questions about your order, please contact our customer support.</p>
    <p>Thank you for your business!</p>
  </div>
</div>
`;
    // Create transporter
    const transporter = createTransporter();
    if (!transporter) {
      return res.status(500).json({
        success: false,
        message: 'Email service configuration error'
      });
    }
    
    // Configure email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: `Your Order Details ${orderId ? `- Order #${orderId}` : ''}`,
      html: htmlContent,
    };
    
    // Send the email with better error handling
    try {
      await transporter.sendMail(mailOptions);
      
      res.status(200).json({
        success: true,
        message: 'Order details email sent successfully'
      });
    } catch (mailError) {
      console.error('Nodemailer error:', mailError);
      res.status(500).json({
        success: false,
        message: 'Failed to send email',
        error: mailError.message
      });
    }
    
  } catch (error) {
    console.error('Email sending error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send email',
      error: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
});

export default router;