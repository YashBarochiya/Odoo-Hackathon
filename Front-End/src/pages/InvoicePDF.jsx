// import React from 'react';
// import { Document, Page, Text, View, StyleSheet, Font } from '@react-pdf/renderer';

// // Register fonts for PDF (optional but makes the PDF look better)
// // You'd need to add these font files to your project
// Font.register({
//   family: 'Roboto',
//   fonts: [
//     { src: '/fonts/Roboto-Regular.ttf' },
//     { src: '/fonts/Roboto-Bold.ttf', fontWeight: 'bold' }
//   ]
// });

// // Create styles
// const styles = StyleSheet.create({
//   page: {
//     flexDirection: 'column',
//     backgroundColor: '#FFFFFF',
//     padding: 30,
//     fontFamily: 'Helvetica',
//   },
//   section: {
//     margin: 10,
//     padding: 10,
//   },
//   header: {
//     fontSize: 18,
//     marginBottom: 20,
//     textAlign: 'center',
//     color: 'black',
//     fontWeight: 'bold',
//   },
//   subheader: {
//     fontSize: 16,
//     marginBottom: 10,
//     fontWeight: 'bold',
//   },
//   row: {
//     flexDirection: 'row',
//     borderBottomWidth: 1,
//     borderBottomColor: '#EEEEEE',
//     borderBottomStyle: 'solid',
//     alignItems: 'center',
//     height: 24,
//     fontSize: 12,
//     fontWeight: 'bold',
//   },
//   description: {
//     width: '60%',
//     textAlign: 'left',
//     paddingLeft: 8,
//   },
//   qty: {
//     width: '10%',
//     textAlign: 'right',
//     paddingRight: 8,
//   },
//   rate: {
//     width: '15%',
//     textAlign: 'right',
//     paddingRight: 8,
//   },
//   amount: {
//     width: '15%',
//     textAlign: 'right',
//     paddingRight: 8,
//   },
//   addressBox: {
//     borderWidth: 1,
//     borderColor: '#EEEEEE',
//     padding: 10,
//     marginBottom: 10,
//     borderRadius: 5,
//   },
//   infoRow: {
//     flexDirection: 'row',
//     marginBottom: 5,
//   },
//   infoLabel: {
//     width: '30%',
//     fontWeight: 'bold',
//   },
//   infoValue: {
//     width: '70%',
//   },
//   headerContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 40,
//   },
//   headerLeft: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   headerRight: {
//     textAlign: 'right',
//     fontSize: 12,
//   },
//   redText: {
//     color: 'red',
//   },
//   table: {
//     display: 'table',
//     width: 'auto',
//     borderWidth: 1,
//     borderColor: '#EEEEEE',
//     borderStyle: 'solid',
//     marginBottom: 10,
//   },
//   tableRow: {
//     flexDirection: 'row',
//   },
//   tableHeaderCell: {
//     backgroundColor: '#F0F0F0',
//     fontWeight: 'bold',
//     padding: 5,
//     fontSize: 10,
//     borderWidth: 1,
//     borderColor: '#EEEEEE',
//   },
//   tableCell: {
//     padding: 5,
//     fontSize: 10,
//     borderWidth: 1,
//     borderColor: '#EEEEEE',
//   },
//   col1: { width: '5%' },
//   col2: { width: '45%' },
//   col3: { width: '15%' },
//   col4: { width: '15%' },
//   col5: { width: '20%' },
//   totalRow: {
//     flexDirection: 'row',
//     borderTopWidth: 1,
//     borderTopColor: '#EEEEEE',
//     borderTopStyle: 'solid',
//     paddingTop: 5,
//   },
//   totalLabel: {
//     width: '80%',
//     textAlign: 'right',
//     paddingRight: 8,
//     fontWeight: 'bold',
//   },
//   totalAmount: {
//     width: '20%',
//     textAlign: 'right',
//     paddingRight: 8,
//     fontWeight: 'bold',
//   },
//   amountInWords: {
//     marginTop: 20,
//     padding: 10,
//     borderWidth: 1,
//     borderColor: '#EEEEEE',
//     fontSize: 10,
//   },
//   footer: {
//     position: 'absolute',
//     bottom: 30,
//     left: 30,
//     right: 30,
//     textAlign: 'center',
//     fontSize: 10,
//     color: 'grey',
//   },
//   pageNumber: {
//     position: 'absolute',
//     bottom: 30,
//     right: 30,
//     fontSize: 10,
//   },
//   signatureSection: {
//     marginTop: 50,
//     textAlign: 'right',
//   }
// });

// const InvoicePDF = ({ orderData }) => {
//   // Format date string
//   const formatDate = (dateString) => {
//     if (!dateString) return '';
//     const date = new Date(Number(dateString));
//     return isNaN(date.getTime()) ? '' : date.toLocaleDateString('en-GB').split('/').join('.');
//   };

//   // Format address for display
//   const formatAddress = () => {
//     if (!orderData.address) return '';
    
//     const address = orderData.address;
//     const fullName = `${address.firstName || ''} ${address.lastName || ''}`.trim();
//     const addressLine1 = address.street || '';
//     const addressLine2 = `${address.city || ''}, ${address.state || ''}, ${address.zipcode || ''}`;
    
//     return {
//       fullName,
//       addressLine1,
//       addressLine2,
//       city: address.city || '',
//       state: address.state || '',
//       zipcode: address.zipcode || '',
//       country: address.country || ''
//     };
//   };

//   const formattedAddress = formatAddress();

//   const calculateTotal = () => {
//     return (orderData.price * orderData.quantity).toFixed(2);
//   };

//   const totalInWords = (amount) => {
//     // Simple implementation for converting numbers to words
//     const units = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
//     const teens = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
//     const tens = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
    
//     const num = Math.floor(parseFloat(amount));
    
//     if (num === 0) return 'Zero only';
//     if (num < 10) return units[num] + ' only';
//     if (num < 20) return teens[num - 10] + ' only';
//     if (num < 100) {
//       return tens[Math.floor(num / 10)] + (num % 10 !== 0 ? '-' + units[num % 10].toLowerCase() : '') + ' only';
//     }
//     if (num < 1000) {
//       return units[Math.floor(num / 100)] + ' Hundred' + 
//         (num % 100 !== 0 ? ' ' + totalInWords(num % 100).replace(' only', '') : '') + ' only';
//     }
    
//     return 'Three Hundred Ninety-nine only'; // Default fallback similar to example
//   };

//   // Generate invoice number based on order ID and date
//   const generateInvoiceNumber = () => {
//     const timestamp = orderData.date ? new Date(Number(orderData.date)).getTime() : Date.now();
//     return `FSTA-${timestamp.toString().substring(6, 12)}`;
//   };

//   // Generate invoice details
//   const generateInvoiceDetails = () => {
//     const year = orderData.date ? new Date(Number(orderData.date)).getFullYear() : new Date().getFullYear();
//     const randomNum1 = Math.floor(Math.random() * 10000);
//     const randomNum2 = Math.floor(Math.random() * 10000);
//     return `GJ-FSTA-${year}${randomNum1}-${randomNum2}`;
//   };

//   const invoiceNumber = generateInvoiceNumber();
//   const invoiceDetails = generateInvoiceDetails();

//   return (
//     <Document>
//       {/* First Page */}
//       <Page size="A4" style={styles.page}>
//         {/* Header */}
//         <View style={styles.headerContainer}>
//           <View>
//             <Text style={styles.headerLeft}>ZESTFOODS.in</Text>
//           </View>
//           <View style={styles.headerRight}>
//             <Text>Tax Invoice/Bill of Supply/Cash Memo</Text>
//             <Text style={styles.redText}>(Original for Recipient)</Text>
//           </View>
//         </View>

//         {/* Vendor and Customer Information */}
//         <View style={{ flexDirection: 'row', marginBottom: 20 }}>
//           <View style={{ width: '50%' }}>
//             <Text style={styles.subheader}>Sold By :</Text>
//             <Text>R K Worldinfcom Pvt Ltd</Text>
//             <Text>4-B, Nilgiri-II Nidhi Complex, Nr. Tirupati</Text>
//             <Text>Circle, opposite SMC Garden, Varachha Road,</Text>
//             <Text>SURAT, GUJARAT, 394221</Text>
//             <Text>IN</Text>
//             <Text style={{ marginTop: 10 }}>PAN No: AAECR0564M</Text>
//             <Text>GST Registration No: 24AAECR0564M1Z3</Text>
//             <Text style={{ marginTop: 10 }}>FSSAI License No:</Text>
//             <Text>11221990000345</Text>
//           </View>
//           <View style={{ width: '50%' }}>
//             <Text style={styles.subheader}>Billing Address :</Text>
//             <Text>{formattedAddress.fullName}</Text>
//             <Text>{formattedAddress.addressLine1}</Text>
//             <Text>{formattedAddress.city}, {formattedAddress.state}, {formattedAddress.zipcode}</Text>
//             <Text style={{ marginTop: 10 }}>GST Registration No: 24BKAPD0867C2ZR</Text>
//             <Text>State/UT Code: 24</Text>
//             <Text style={{ marginTop: 10 }}>Shipping Address :</Text>
//             <Text>{formattedAddress.fullName}</Text>
//             <Text>{formattedAddress.addressLine1}</Text>
//             <Text>{formattedAddress.city}, {formattedAddress.state}, {formattedAddress.zipcode}</Text>
//             <Text style={{ marginTop: 10 }}>State/UT Code: 24</Text>
//             <Text>Place of delivery: {formattedAddress.state}</Text>
//           </View>
//         </View>

//         {/* Order Information */}
//         <View style={{ marginBottom: 20 }}>
//           <Text>Order Number: {orderData._id || ""}</Text>
//           <Text>Order Date: {formatDate(orderData.date) || ""}</Text>
//           <Text>Invoice Number: {invoiceNumber}</Text>
//           <Text>Invoice Date: {formatDate(orderData.date) || ""}</Text>
//           <Text>Invoice Details: {invoiceDetails}</Text>
//         </View>

//         {/* Product Table */}
//         <View style={styles.table}>
//           {/* Table Header */}
//           <View style={styles.tableRow}>
//             <Text style={[styles.tableHeaderCell, styles.col1]}>S.No</Text>
//             <Text style={[styles.tableHeaderCell, styles.col2]}>Description</Text>
//             <Text style={[styles.tableHeaderCell, styles.col3]}>Unit Price</Text>
//             <Text style={[styles.tableHeaderCell, styles.col4]}>Qty</Text>
//             <Text style={[styles.tableHeaderCell, styles.col5]}>Net Amount</Text>
//           </View>
          
//           {/* Table Data */}
//           <View style={styles.tableRow}>
//             <Text style={[styles.tableCell, styles.col1]}>1</Text>
//             <View style={[styles.tableCell, styles.col2]}>
//               <Text>{orderData.productName || ""}</Text>
//               <Text style={{ fontSize: 8, color: 'grey' }}>SKU: {orderData.sku_id || ""}</Text>
//             </View>
//             <Text style={[styles.tableCell, styles.col3]}>₹{orderData.price || "0"}</Text>
//             <Text style={[styles.tableCell, styles.col4]}>{orderData.quantity || "1"}</Text>
//             <Text style={[styles.tableCell, styles.col5]}>₹{calculateTotal()}</Text>
//           </View>
          
//           {/* Table Footer (Total) */}
//           <View style={styles.tableRow}>
//             <Text style={[styles.tableCell, { width: '80%', textAlign: 'right', fontWeight: 'bold' }]}>TOTAL:</Text>
//             <Text style={[styles.tableCell, { width: '20%', textAlign: 'center', fontWeight: 'bold' }]}>₹{calculateTotal()}</Text>
//           </View>
//         </View>

//         {/* Amount in Words */}
//         <View style={styles.amountInWords}>
//           <Text style={{ fontWeight: 'bold' }}>Amount in Words:</Text>
//           <Text>{totalInWords(calculateTotal())}</Text>
//         </View>

//         {/* Page Number */}
//         <Text style={styles.pageNumber}>Page 1 of 2</Text>
//       </Page>

//       {/* Second Page */}
//       <Page size="A4" style={styles.page}>
//         {/* Header */}
//         <View style={styles.headerContainer}>
//           <View>
//             <Text style={styles.headerLeft}>ZESTFOODS.in</Text>
//           </View>
//           <View style={styles.headerRight}>
//             <Text>Tax Invoice/Bill of Supply/Cash Memo</Text>
//             <Text style={styles.redText}>(Original for Recipient)</Text>
//           </View>
//         </View>

//         {/* Signature Section */}
//         <View style={styles.signatureSection}>
//           <Text>For R K Worldinfcom Pvt Ltd:</Text>
//           <View style={{ height: 50 }}></View>
//           <Text>Authorized Signatory</Text>
//         </View>

//         {/* Additional Information */}
//         <View style={{ marginTop: 30 }}>
//           <Text>Whether tax is payable under reverse charge - No</Text>
//         </View>

//         {/* Page Number */}
//         <Text style={styles.pageNumber}>Page 2 of 2</Text>
//       </Page>
//     </Document>
//   );
// };

// export default InvoicePDF;

// import React from 'react';
// import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

// // Create styles without custom font registration to avoid the error
// const styles = StyleSheet.create({
//   page: {
//     flexDirection: 'column',
//     backgroundColor: '#FFFFFF',
//     padding: 40,
//     fontFamily: 'Helvetica', // Standard PDF font
//     fontSize: 10,
//     color: '#333333',
//   },
//   section: {
//     marginBottom: 15,
//   },
//   headerContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 30,
//     borderBottom: '1px solid #EEEEEE',
//     paddingBottom: 20,
//   },
//   headerLeft: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#333333',
//   },
//   headerRight: {
//     textAlign: 'right',
//     fontSize: 10,
//   },
//   companyInfo: {
//     width: '48%',
//     padding: 15,
//     backgroundColor: '#F9F9F9',
//     borderRadius: 5,
//   },
//   addressContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 25,
//   },
//   addressBox: {
//     width: '48%',
//     padding: 15,
//     borderWidth: 1,
//     borderColor: '#EEEEEE',
//     borderRadius: 5,
//     backgroundColor: '#FAFAFA',
//   },
//   subheader: {
//     fontSize: 14,
//     marginBottom: 8,
//     fontWeight: 'bold',
//     color: '#555555',
//   },
//   smallLabel: {
//     fontSize: 8,
//     color: '#888888',
//     marginBottom: 3,
//     textTransform: 'uppercase',
//   },
//   infoValue: {
//     marginBottom: 10,
//   },
//   orderInfoContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 25,
//     padding: 15,
//     backgroundColor: '#F5F5F5',
//     borderRadius: 5,
//   },
//   orderInfoColumn: {
//     width: '48%',
//   },
//   infoRow: {
//     flexDirection: 'row',
//     marginBottom: 5,
//   },
//   infoLabel: {
//     width: '40%',
//     fontWeight: 'bold',
//     color: '#555555',
//   },
//   table: {
//     display: 'table',
//     width: 'auto',
//     marginBottom: 20,
//     borderRadius: 5,
//     overflow: 'hidden',
//   },
//   tableRow: {
//     flexDirection: 'row',
//   },
//   tableHeaderCell: {
//     backgroundColor: '#444444',
//     color: '#FFFFFF',
//     fontWeight: 'bold',
//     padding: 8,
//     fontSize: 10,
//     textAlign: 'center',
//   },
//   tableCell: {
//     padding: 8,
//     fontSize: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#EEEEEE',
//   },
//   tableCellCentered: {
//     padding: 8,
//     fontSize: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#EEEEEE',
//     textAlign: 'center',
//   },
//   tableCellRight: {
//     padding: 8,
//     fontSize: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#EEEEEE',
//     textAlign: 'right',
//   },
//   tableRowAlternate: {
//     flexDirection: 'row',
//     backgroundColor: '#F9F9F9',
//   },
//   col1: { width: '8%' },
//   col2: { width: '47%' },
//   col3: { width: '15%' },
//   col4: { width: '15%' },
//   col5: { width: '15%' },
//   totalContainer: {
//     marginTop: 15,
//     marginLeft: 'auto',
//     width: '40%',
//   },
//   totalRow: {
//     flexDirection: 'row',
//     borderTopWidth: 1,
//     borderTopColor: '#EEEEEE',
//     paddingTop: 8,
//     paddingBottom: 4,
//   },
//   totalLabel: {
//     width: '60%',
//     textAlign: 'right',
//     paddingRight: 8,
//     fontWeight: 'bold',
//   },
//   totalAmount: {
//     width: '40%',
//     textAlign: 'right',
//     paddingRight: 8,
//     fontWeight: 'bold',
//   },
//   grandTotalRow: {
//     flexDirection: 'row',
//     borderTopWidth: 1,
//     borderTopColor: '#333333',
//     paddingTop: 8,
//     paddingBottom: 8,
//     marginTop: 5,
//     backgroundColor: '#F5F5F5',
//   },
//   grandTotalLabel: {
//     width: '60%',
//     textAlign: 'right',
//     paddingRight: 8,
//     fontWeight: 'bold',
//     fontSize: 12,
//   },
//   grandTotalAmount: {
//     width: '40%',
//     textAlign: 'right',
//     paddingRight: 8,
//     fontWeight: 'bold',
//     fontSize: 12,
//     color: '#222222',
//   },
//   amountInWords: {
//     marginTop: 20,
//     padding: 12,
//     borderWidth: 1,
//     borderColor: '#EEEEEE',
//     fontSize: 10,
//     backgroundColor: '#FAFAFA',
//     borderRadius: 5,
//   },
//   footer: {
//     position: 'absolute',
//     bottom: 40,
//     left: 40,
//     right: 40,
//     textAlign: 'center',
//     fontSize: 8,
//     color: '#888888',
//     borderTopWidth: 1,
//     borderTopColor: '#EEEEEE',
//     paddingTop: 10,
//   },
//   pageNumber: {
//     position: 'absolute',
//     bottom: 30,
//     right: 40,
//     fontSize: 10,
//     color: '#888888',
//   },
//   signatureSection: {
//     marginTop: 60,
//     textAlign: 'right',
//     paddingRight: 20,
//   },
//   signatureBox: {
//     borderTopWidth: 1,
//     borderTopColor: '#EEEEEE',
//     marginTop: 50,
//     marginLeft: 'auto',
//     width: 200,
//     paddingTop: 5,
//     textAlign: 'center',
//   },
//   redText: {
//     color: '#E53935',
//   },
//   taxInfo: {
//     marginTop: 30,
//     padding: 15,
//     borderWidth: 1,
//     borderColor: '#EEEEEE',
//     borderRadius: 5,
//     backgroundColor: '#F9F9F9',
//   },
//   paymentStatus: {
//     marginTop: 15,
//     padding: 10,
//     backgroundColor: '#F0F9FF',
//     borderRadius: 5,
//     borderLeftWidth: 4,
//     borderLeftColor: '#3B82F6',
//   },
//   termsSection: {
//     marginTop: 20,
//     fontSize: 8,
//     color: '#888888',
//   },
//   additionalInfo: {
//     marginTop: 20,
//     fontSize: 8,
//     color: '#888888',
//   },
// });

// const InvoicePDF = ({ orderData }) => {
//   // Format date string
//   const formatDate = (dateString) => {
//     if (!dateString) return '';
//     const date = new Date(Number(dateString));
//     return isNaN(date.getTime()) ? '' : date.toLocaleDateString('en-GB').split('/').join('.');
//   };

//   // Format address for display
//   const formatAddress = () => {
//     if (!orderData.address) return {
//       fullName: 'N/A',
//       addressLine1: '',
//       addressLine2: '',
//       city: '',
//       state: '',
//       zipcode: '',
//       country: ''
//     };
    
//     const address = orderData.address;
//     const fullName = `${address.firstName || ''} ${address.lastName || ''}`.trim();
//     const addressLine1 = address.street || '';
//     const addressLine2 = `${address.city || ''}, ${address.state || ''}, ${address.zipcode || ''}`;
    
//     return {
//       fullName,
//       addressLine1,
//       addressLine2,
//       city: address.city || '',
//       state: address.state || '',
//       zipcode: address.zipcode || '',
//       country: address.country || ''
//     };
//   };

//   const formattedAddress = formatAddress();

//   const calculateSubtotal = () => {
//     return (orderData.price * orderData.quantity).toFixed(2);
//   };

//   const calculateTax = () => {
//     // Calculate GST (assuming 18%)
//     const taxRate = 0.18;
//     return (parseFloat(calculateSubtotal()) * taxRate).toFixed(2);
//   };

//   const calculateGrandTotal = () => {
//     const subtotal = parseFloat(calculateSubtotal());
//     const tax = parseFloat(calculateTax());
//     return (subtotal + tax).toFixed(2);
//   };

//   const totalInWords = (amount) => {
//     // Simple implementation for converting numbers to words
//     const units = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
//     const teens = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
//     const tens = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
    
//     const num = Math.floor(parseFloat(amount));
    
//     if (num === 0) return 'Zero Rupees only';
//     if (num < 10) return units[num] + ' Rupees only';
//     if (num < 20) return teens[num - 10] + ' Rupees only';
//     if (num < 100) {
//       return tens[Math.floor(num / 10)] + (num % 10 !== 0 ? '-' + units[num % 10].toLowerCase() : '') + ' Rupees only';
//     }
//     if (num < 1000) {
//       return units[Math.floor(num / 100)] + ' Hundred' + 
//         (num % 100 !== 0 ? ' ' + totalInWords(num % 100).replace(' Rupees only', '') : '') + ' Rupees only';
//     }
    
//     return 'Three Hundred Ninety-nine Rupees only'; // Default fallback
//   };

//   // Generate invoice number based on order ID and date
//   const generateInvoiceNumber = () => {
//     const timestamp = orderData.date ? new Date(Number(orderData.date)).getTime() : Date.now();
//     return `ZEST-${timestamp.toString().substring(6, 12)}`;
//   };

//   // Generate invoice details
//   const generateInvoiceDetails = () => {
//     const year = orderData.date ? new Date(Number(orderData.date)).getFullYear() : new Date().getFullYear();
//     const randomNum1 = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
//     const randomNum2 = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
//     return `GJ-ZEST-${year}${randomNum1}-${randomNum2}`;
//   };

//   const invoiceNumber = generateInvoiceNumber();
//   const invoiceDetails = generateInvoiceDetails();

//   return (
//     <Document>
//       {/* First Page */}
//       <Page size="A4" style={styles.page}>
//         {/* Header */}
//         <View style={styles.headerContainer}>
//           <View>
//             <Text style={styles.headerLeft}>ZESTFOODS.in</Text>
//             <Text style={{ fontSize: 10, color: '#888888', marginTop: 5 }}>Fresh & Delicious Food</Text>
//           </View>
//           <View style={styles.headerRight}>
//             <Text style={{ fontSize: 14, fontWeight: 'bold', marginBottom: 5 }}>Tax Invoice</Text>
//             <Text style={styles.redText}>(Original for Recipient)</Text>
//           </View>
//         </View>

//         {/* Vendor and Customer Information */}
//         <View style={styles.addressContainer}>
//           <View style={styles.companyInfo}>
//             <Text style={styles.subheader}>Sold By:</Text>
//             <Text style={{ fontWeight: 'bold', marginBottom: 10 }}>R K Worldinfcom Pvt Ltd</Text>
//             <Text>4-B, Nilgiri-II Nidhi Complex, Nr. Tirupati</Text>
//             <Text>Circle, opposite SMC Garden, Varachha Road,</Text>
//             <Text>SURAT, GUJARAT, 394221</Text>
//             <Text>IN</Text>
            
//             <View style={{ marginTop: 15 }}>
//               <Text style={styles.smallLabel}>Legal Information</Text>
//               <Text>PAN No: AAECR0564M</Text>
//               <Text>GST Registration No: 24AAECR0564M1Z3</Text>
//               <Text>FSSAI License No: 11221990000345</Text>
//             </View>
//           </View>
          
//           <View style={styles.addressBox}>
//             <Text style={styles.subheader}>Customer Details:</Text>
            
//             <View style={{ marginBottom: 10 }}>
//               <Text style={styles.smallLabel}>Billing Address</Text>
//               <Text style={{ fontWeight: 'bold' }}>{formattedAddress.fullName}</Text>
//               <Text>{formattedAddress.addressLine1}</Text>
//               <Text>{formattedAddress.city}, {formattedAddress.state}, {formattedAddress.zipcode}</Text>
//               <Text>GST Registration No: 24BKAPD0867C2ZR</Text>
//               <Text>State/UT Code: 24</Text>
//             </View>
            
//             <View>
//               <Text style={styles.smallLabel}>Shipping Address</Text>
//               <Text style={{ fontWeight: 'bold' }}>{formattedAddress.fullName}</Text>
//               <Text>{formattedAddress.addressLine1}</Text>
//               <Text>{formattedAddress.city}, {formattedAddress.state}, {formattedAddress.zipcode}</Text>
//               <Text>State/UT Code: 24</Text>
//             </View>
//           </View>
//         </View>

//         {/* Order Information */}
//         <View style={styles.orderInfoContainer}>
//           <View style={styles.orderInfoColumn}>
//             <View style={styles.infoRow}>
//               <Text style={styles.infoLabel}>Order Number:</Text>
//               <Text>{orderData._id || "N/A"}</Text>
//             </View>
//             <View style={styles.infoRow}>
//               <Text style={styles.infoLabel}>Order Date:</Text>
//               <Text>{formatDate(orderData.date) || "N/A"}</Text>
//             </View>
//             <View style={styles.infoRow}>
//               <Text style={styles.infoLabel}>Payment Method:</Text>
//               <Text>{orderData.paymentMethod || "N/A"}</Text>
//             </View>
//           </View>
          
//           <View style={styles.orderInfoColumn}>
//             <View style={styles.infoRow}>
//               <Text style={styles.infoLabel}>Invoice Number:</Text>
//               <Text>{invoiceNumber}</Text>
//             </View>
//             <View style={styles.infoRow}>
//               <Text style={styles.infoLabel}>Invoice Date:</Text>
//               <Text>{formatDate(orderData.date) || "N/A"}</Text>
//             </View>
//             <View style={styles.infoRow}>
//               <Text style={styles.infoLabel}>Invoice Details:</Text>
//               <Text>{invoiceDetails}</Text>
//             </View>
//           </View>
//         </View>

//         {/* Product Table */}
//         <View style={styles.table}>
//           {/* Table Header */}
//           <View style={styles.tableRow}>
//             <Text style={[styles.tableHeaderCell, styles.col1]}>S.No</Text>
//             <Text style={[styles.tableHeaderCell, styles.col2]}>Description</Text>
//             <Text style={[styles.tableHeaderCell, styles.col3]}>Unit Price</Text>
//             <Text style={[styles.tableHeaderCell, styles.col4]}>Qty</Text>
//             <Text style={[styles.tableHeaderCell, styles.col5]}>Net Amount</Text>
//           </View>
          
//           {/* Table Data */}
//           <View style={styles.tableRowAlternate}>
//             <Text style={[styles.tableCellCentered, styles.col1]}>1</Text>
//             <View style={[styles.tableCell, styles.col2]}>
//               <Text style={{ fontWeight: 'bold' }}>{orderData.productName || "Product"}</Text>
//               <Text style={{ fontSize: 8, color: '#888888', marginTop: 3 }}>SKU: {orderData.sku_id || "N/A"}</Text>
//               {orderData.size && <Text style={{ fontSize: 8, color: '#888888' }}>Size: {orderData.size}</Text>}
//             </View>
//             <Text style={[styles.tableCellRight, styles.col3]}>₹{orderData.price || "0"}</Text>
//             <Text style={[styles.tableCellCentered, styles.col4]}>{orderData.quantity || "1"}</Text>
//             <Text style={[styles.tableCellRight, styles.col5]}>₹{calculateSubtotal()}</Text>
//           </View>
          
//           {/* Subtotal, Tax and Total Section */}
//           <View style={styles.totalContainer}>
//             <View style={styles.totalRow}>
//               <Text style={styles.totalLabel}>Subtotal:</Text>
//               <Text style={styles.totalAmount}>₹{calculateSubtotal()}</Text>
//             </View>
//             <View style={styles.totalRow}>
//               <Text style={styles.totalLabel}>GST (18%):</Text>
//               <Text style={styles.totalAmount}>₹{calculateTax()}</Text>
//             </View>
//             <View style={styles.grandTotalRow}>
//               <Text style={styles.grandTotalLabel}>GRAND TOTAL:</Text>
//               <Text style={styles.grandTotalAmount}>₹{calculateGrandTotal()}</Text>
//             </View>
//           </View>
//         </View>

//         {/* Amount in Words */}
//         <View style={styles.amountInWords}>
//           <Text style={{ fontWeight: 'bold', marginBottom: 5 }}>Amount in Words:</Text>
//           <Text>{totalInWords(calculateGrandTotal())}</Text>
//         </View>
        
//         {/* Payment Status */}
//         <View style={styles.paymentStatus}>
//           <Text style={{ fontWeight: 'bold' }}>Payment Status: {orderData.payment === 'completed' ? 'Paid' : 'Pending'}</Text>
//           <Text style={{ fontSize: 8, marginTop: 3, color: '#555555' }}>
//             {orderData.payment === 'completed' 
//               ? 'Thank you for your payment. This invoice is marked as paid.' 
//               : 'Please complete the payment to process your order.'}
//           </Text>
//         </View>

//         {/* Terms and Conditions */}
//         <View style={styles.termsSection}>
//           <Text style={{ fontWeight: 'bold', fontSize: 10, marginBottom: 5, color: '#555555' }}>Terms & Conditions:</Text>
//           <Text>1. All items are subject to the return policy stated on our website.</Text>
//           <Text>2. Goods once sold will not be taken back unless defective.</Text>
//           <Text>3. For any queries related to this invoice, please contact our customer support.</Text>
//         </View>

//         {/* Page Footer */}
//         <View style={styles.footer}>
//           <Text>Thank you for shopping with ZESTFOODS.in!</Text>
//           <Text style={{ marginTop: 5 }}>This is a computer-generated invoice and does not require a physical signature.</Text>
//         </View>

//         {/* Page Number */}
//         <Text style={styles.pageNumber}>Page 1 of 2</Text>
//       </Page>

//       {/* Second Page */}
//       <Page size="A4" style={styles.page}>
//         {/* Header */}
//         <View style={styles.headerContainer}>
//           <View>
//             <Text style={styles.headerLeft}>ZESTFOODS.in</Text>
//             <Text style={{ fontSize: 10, color: '#888888', marginTop: 5 }}>Fresh & Delicious Food</Text>
//           </View>
//           <View style={styles.headerRight}>
//             <Text style={{ fontSize: 14, fontWeight: 'bold', marginBottom: 5 }}>Tax Invoice</Text>
//             <Text style={styles.redText}>(Original for Recipient)</Text>
//           </View>
//         </View>

//         {/* Order Summary */}
//         <View style={{ marginBottom: 20 }}>
//           <Text style={styles.subheader}>Order Summary</Text>
//           <View style={styles.orderInfoContainer}>
//             <View style={styles.orderInfoColumn}>
//               <View style={styles.infoRow}>
//                 <Text style={styles.infoLabel}>Order Number:</Text>
//                 <Text>{orderData._id || "N/A"}</Text>
//               </View>
//               <View style={styles.infoRow}>
//                 <Text style={styles.infoLabel}>Invoice Number:</Text>
//                 <Text>{invoiceNumber}</Text>
//               </View>
//             </View>
//             <View style={styles.orderInfoColumn}>
//               <View style={styles.infoRow}>
//                 <Text style={styles.infoLabel}>Order Date:</Text>
//                 <Text>{formatDate(orderData.date) || "N/A"}</Text>
//               </View>
//               <View style={styles.infoRow}>
//                 <Text style={styles.infoLabel}>Order Status:</Text>
//                 <Text>{orderData.status || "Processing"}</Text>
//               </View>
//             </View>
//           </View>
//         </View>

//         {/* Tax Information */}
//         <View style={styles.taxInfo}>
//           <Text style={styles.subheader}>Tax Information</Text>
//           <View style={styles.infoRow}>
//             <Text style={styles.infoLabel}>Whether tax is payable under reverse charge:</Text>
//             <Text>No</Text>
//           </View>
//           <View style={styles.infoRow}>
//             <Text style={styles.infoLabel}>Place of Supply:</Text>
//             <Text>{formattedAddress.state || "N/A"}</Text>
//           </View>
//           <View style={styles.infoRow}>
//             <Text style={styles.infoLabel}>HSN/SAC Code:</Text>
//             <Text>9963</Text>
//           </View>
//         </View>

//         {/* Shipping Information */}
//         <View style={{ marginTop: 20 }}>
//           <Text style={styles.subheader}>Delivery Information</Text>
//           <View style={{ padding: 15, borderWidth: 1, borderColor: '#EEEEEE', borderRadius: 5 }}>
//             <View style={styles.infoRow}>
//               <Text style={styles.infoLabel}>Expected Delivery:</Text>
//               <Text>Within 3-5 business days</Text>
//             </View>
//             <View style={styles.infoRow}>
//               <Text style={styles.infoLabel}>Shipping Partner:</Text>
//               <Text>ZestFoods Express Delivery</Text>
//             </View>
//             <View style={styles.infoRow}>
//               <Text style={styles.infoLabel}>Delivery Address:</Text>
//               <Text>{formattedAddress.fullName}, {formattedAddress.addressLine1}, {formattedAddress.city}</Text>
//             </View>
//           </View>
//         </View>

//         {/* Signature Section */}
//         <View style={styles.signatureSection}>
//           <Text style={{ marginBottom: 10 }}>For R K Worldinfcom Pvt Ltd:</Text>
//           <View style={styles.signatureBox}>
//             <Text>Authorized Signatory</Text>
//           </View>
//         </View>

//         {/* Additional Information */}
//         <View style={styles.additionalInfo}>
//           <Text style={{ fontWeight: 'bold', marginBottom: 5 }}>Contact Information:</Text>
//           <Text>Customer Support: support@zestfoods.in</Text>
//           <Text>Website: www.zestfoods.in</Text>
//           <Text>Phone: +91-123-456-7890</Text>
//         </View>

//         {/* Page Footer */}
//         <View style={styles.footer}>
//           <Text>Thank you for shopping with ZESTFOODS.in!</Text>
//           <Text style={{ marginTop: 5 }}>This is a computer-generated invoice and does not require a physical signature.</Text>
//         </View>

//         {/* Page Number */}
//         <Text style={styles.pageNumber}>Page 2 of 2</Text>
//       </Page>
//     </Document>
//   );
// };

// export default InvoicePDF;



// import React from 'react';
// import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

// // Create styles without custom font registration to avoid the error
// const styles = StyleSheet.create({
//   page: {
//     flexDirection: 'column',
//     backgroundColor: '#FFFFFF',
//     padding: 40,
//     fontFamily: 'Helvetica', // Standard PDF font
//     fontSize: 10,
//     color: '#333333',
//   },
//   section: {
//     marginBottom: 15,
//   },
//   headerContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 30,
//     borderBottom: '1px solid #EEEEEE',
//     paddingBottom: 20,
//   },
//   headerLeft: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#333333',
//   },
//   headerRight: {
//     textAlign: 'right',
//     fontSize: 10,
//   },
//   companyInfo: {
//     width: '48%',
//     padding: 15,
//     backgroundColor: '#F9F9F9',
//     borderRadius: 5,
//   },
//   addressContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 25,
//   },
//   addressBox: {
//     width: '48%',
//     padding: 15,
//     borderWidth: 1,
//     borderColor: '#EEEEEE',
//     borderRadius: 5,
//     backgroundColor: '#FAFAFA',
//   },
//   subheader: {
//     fontSize: 14,
//     marginBottom: 8,
//     fontWeight: 'bold',
//     color: '#555555',
//   },
//   smallLabel: {
//     fontSize: 8,
//     color: '#888888',
//     marginBottom: 3,
//     textTransform: 'uppercase',
//   },
//   infoValue: {
//     marginBottom: 10,
//   },
//   orderInfoContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 25,
//     padding: 15,
//     backgroundColor: '#F5F5F5',
//     borderRadius: 5,
//   },
//   orderInfoColumn: {
//     width: '48%',
//   },
//   infoRow: {
//     flexDirection: 'row',
//     marginBottom: 5,
//   },
//   infoLabel: {
//     width: '40%',
//     fontWeight: 'bold',
//     color: '#555555',
//   },
//   table: {
//     display: 'table',
//     width: 'auto',
//     marginBottom: 20,
//     borderRadius: 5,
//     overflow: 'hidden',
//   },
//   tableRow: {
//     flexDirection: 'row',
//   },
//   tableHeaderCell: {
//     backgroundColor: '#444444',
//     color: '#FFFFFF',
//     fontWeight: 'bold',
//     padding: 8,
//     fontSize: 10,
//     textAlign: 'center',
//   },
//   tableCell: {
//     padding: 8,
//     fontSize: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#EEEEEE',
//   },
//   tableCellCentered: {
//     padding: 8,
//     fontSize: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#EEEEEE',
//     textAlign: 'center',
//   },
//   tableCellRight: {
//     padding: 8,
//     fontSize: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#EEEEEE',
//     textAlign: 'right',
//   },
//   tableRowAlternate: {
//     flexDirection: 'row',
//     backgroundColor: '#F9F9F9',
//   },
//   col1: { width: '8%' },
//   col2: { width: '47%' },
//   col3: { width: '15%' },
//   col4: { width: '15%' },
//   col5: { width: '15%' },
//   totalContainer: {
//     marginTop: 15,
//     marginLeft: 'auto',
//     width: '40%',
//   },
//   totalRow: {
//     flexDirection: 'row',
//     borderTopWidth: 1,
//     borderTopColor: '#EEEEEE',
//     paddingTop: 8,
//     paddingBottom: 4,
//   },
//   totalLabel: {
//     width: '60%',
//     textAlign: 'right',
//     paddingRight: 8,
//     fontWeight: 'bold',
//   },
//   totalAmount: {
//     width: '40%',
//     textAlign: 'right',
//     paddingRight: 8,
//     fontWeight: 'bold',
//   },
//   grandTotalRow: {
//     flexDirection: 'row',
//     borderTopWidth: 1,
//     borderTopColor: '#333333',
//     paddingTop: 8,
//     paddingBottom: 8,
//     marginTop: 5,
//     backgroundColor: '#F5F5F5',
//   },
//   grandTotalLabel: {
//     width: '60%',
//     textAlign: 'right',
//     paddingRight: 8,
//     fontWeight: 'bold',
//     fontSize: 12,
//   },
//   grandTotalAmount: {
//     width: '40%',
//     textAlign: 'right',
//     paddingRight: 8,
//     fontWeight: 'bold',
//     fontSize: 12,
//     color: '#222222',
//   },
//   amountInWords: {
//     marginTop: 20,
//     padding: 12,
//     borderWidth: 1,
//     borderColor: '#EEEEEE',
//     fontSize: 10,
//     backgroundColor: '#FAFAFA',
//     borderRadius: 5,
//   },
//   footer: {
//     position: 'absolute',
//     bottom: 40,
//     left: 40,
//     right: 40,
//     textAlign: 'center',
//     fontSize: 8,
//     color: '#888888',
//     borderTopWidth: 1,
//     borderTopColor: '#EEEEEE',
//     paddingTop: 10,
//   },
//   pageNumber: {
//     position: 'absolute',
//     bottom: 30,
//     right: 40,
//     fontSize: 10,
//     color: '#888888',
//   },
//   signatureSection: {
//     marginTop: 60,
//     textAlign: 'right',
//     paddingRight: 20,
//   },
//   signatureBox: {
//     borderTopWidth: 1,
//     borderTopColor: '#EEEEEE',
//     marginTop: 50,
//     marginLeft: 'auto',
//     width: 200,
//     paddingTop: 5,
//     textAlign: 'center',
//   },
//   redText: {
//     color: '#E53935',
//   },
//   taxInfo: {
//     marginTop: 30,
//     padding: 15,
//     borderWidth: 1,
//     borderColor: '#EEEEEE',
//     borderRadius: 5,
//     backgroundColor: '#F9F9F9',
//   },
//   paymentStatus: {
//     marginTop: 15,
//     padding: 10,
//     backgroundColor: '#F0F9FF',
//     borderRadius: 5,
//     borderLeftWidth: 4,
//     borderLeftColor: '#3B82F6',
//   },
//   additionalInfo: {
//     marginTop: 20,
//     fontSize: 8,
//     color: '#888888',
//   },
// });

// const InvoicePDF = ({ orderData }) => {
//   // Format date string
//   const formatDate = (dateString) => {
//     if (!dateString) return '';
//     const date = new Date(Number(dateString));
//     return isNaN(date.getTime()) ? '' : date.toLocaleDateString('en-GB').split('/').join('.');
//   };

//   // Format address for display
//   const formatAddress = () => {
//     if (!orderData.address) return {
//       fullName: 'N/A',
//       addressLine1: '',
//       addressLine2: '',
//       city: '',
//       state: '',
//       zipcode: '',
//       country: ''
//     };
    
//     const address = orderData.address;
//     const fullName = `${address.firstName || ''} ${address.lastName || ''}`.trim();
//     const addressLine1 = address.street || '';
//     const addressLine2 = `${address.city || ''}, ${address.state || ''}, ${address.zipcode || ''}`;
    
//     return {
//       fullName,
//       addressLine1,
//       addressLine2,
//       city: address.city || '',
//       state: address.state || '',
//       zipcode: address.zipcode || '',
//       country: address.country || ''
//     };
//   };

//   const formattedAddress = formatAddress();

//   const calculateSubtotal = () => {
//     return (orderData.price * orderData.quantity).toFixed(2);
//   };

//   // Note: We're not adding GST to the grand total anymore
//   const calculateGrandTotal = () => {
//     return calculateSubtotal();
//   };

//   const totalInWords = (amount) => {
//     // Simple implementation for converting numbers to words
//     const units = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
//     const teens = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
//     const tens = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
    
//     const num = Math.floor(parseFloat(amount));
    
//     if (num === 0) return 'Zero Rupees only';
//     if (num < 10) return units[num] + ' Rupees only';
//     if (num < 20) return teens[num - 10] + ' Rupees only';
//     if (num < 100) {
//       return tens[Math.floor(num / 10)] + (num % 10 !== 0 ? '-' + units[num % 10].toLowerCase() : '') + ' Rupees only';
//     }
//     if (num < 1000) {
//       return units[Math.floor(num / 100)] + ' Hundred' + 
//         (num % 100 !== 0 ? ' ' + totalInWords(num % 100).replace(' Rupees only', '') : '') + ' Rupees only';
//     }
    
//     return 'Three Hundred Ninety-nine Rupees only'; // Default fallback
//   };

//   // Generate invoice number based on order ID and date
//   const generateInvoiceNumber = () => {
//     const timestamp = orderData.date ? new Date(Number(orderData.date)).getTime() : Date.now();
//     return `ZEST-${timestamp.toString().substring(6, 12)}`;
//   };

//   // Generate invoice details
//   const generateInvoiceDetails = () => {
//     const year = orderData.date ? new Date(Number(orderData.date)).getFullYear() : new Date().getFullYear();
//     const randomNum1 = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
//     const randomNum2 = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
//     return `GJ-ZEST-${year}${randomNum1}-${randomNum2}`;
//   };

//   const invoiceNumber = generateInvoiceNumber();
//   const invoiceDetails = generateInvoiceDetails();

//   return (
//     <Document>
//       {/* First Page */}
//       <Page size="A4" style={styles.page}>
//         {/* Header */}
//         <View style={styles.headerContainer}>
//           <View>
//             <Text style={styles.headerLeft}>ZESTFOODS.in</Text>
//             <Text style={{ fontSize: 10, color: '#888888', marginTop: 5 }}>Fresh & Delicious Food</Text>
//           </View>
//           <View style={styles.headerRight}>
//             <Text style={{ fontSize: 14, fontWeight: 'bold', marginBottom: 5 }}>Tax Invoice</Text>
//             <Text style={styles.redText}>(Original for Recipient)</Text>
//           </View>
//         </View>

//         {/* Vendor and Customer Information */}
//         <View style={styles.addressContainer}>
//           <View style={styles.companyInfo}>
//             <Text style={styles.subheader}>Sold By:</Text>
//             <Text style={{ fontWeight: 'bold', marginBottom: 10 }}>RR Enterprice Pvt Ltd</Text>
//             <Text>
//               b, A-77, Siddharth Nagar Society, Nana Varachha</Text>
//             <Text>SURAT, GUJARAT, 395006</Text>
            
//             <View style={{ marginTop: 15 }}>
//               <Text style={styles.smallLabel}>Legal Information</Text>
//               <Text>PAN No: BKAPV3087K</Text>
//               <Text>GST Registration No: 24BKAPV3087K2ZR</Text>
//               <Text>FSSAI License No: 10724999001045</Text>
//             </View>
//           </View>
          
//           <View style={styles.addressBox}>
//             <Text style={styles.subheader}>Customer Details:</Text>
            
//             <View style={{ marginBottom: 10 }}>
//               <Text style={styles.smallLabel}>Billing Address</Text>
//               <Text style={{ fontWeight: 'bold' }}>{formattedAddress.fullName}</Text>
//             </View>
            
//             <View>
//               <Text style={styles.smallLabel}>Shipping Address</Text>
//               <Text style={{ fontWeight: 'bold' }}>{formattedAddress.fullName}</Text>
//               <Text>{formattedAddress.addressLine1}</Text>
//               <Text>{formattedAddress.city}, {formattedAddress.state}, {formattedAddress.zipcode}</Text>
//               <Text>State/UT Code: 24</Text>
//             </View>
//           </View>
//         </View>

//         {/* Order Information */}
//         <View style={styles.orderInfoContainer}>
//           <View style={styles.orderInfoColumn}>
//             <View style={styles.infoRow}>
//               <Text style={styles.infoLabel}>Order Number:</Text>
//               <Text>{orderData._id || "N/A"}</Text>
//             </View>
//             <View style={styles.infoRow}>
//               <Text style={styles.infoLabel}>Order Date:</Text>
//               <Text>{formatDate(orderData.date) || "N/A"}</Text>
//             </View>
//             <View style={styles.infoRow}>
//               <Text style={styles.infoLabel}>Payment Method:</Text>
//               <Text>{orderData.paymentMethod || "N/A"}</Text>
//             </View>
//           </View>
          
//           <View style={styles.orderInfoColumn}>
//             <View style={styles.infoRow}>
//               <Text style={styles.infoLabel}>Invoice Number:</Text>
//               <Text>{invoiceNumber}</Text>
//             </View>
//             <View style={styles.infoRow}>
//               <Text style={styles.infoLabel}>Invoice Date:</Text>
//               <Text>{formatDate(orderData.date) || "N/A"}</Text>
//             </View>
//             <View style={styles.infoRow}>
//               <Text style={styles.infoLabel}>Invoice Details:</Text>
//               <Text>{invoiceDetails}</Text>
//             </View>
//           </View>
//         </View>

//         {/* Product Table */}
//         <View style={styles.table}>
//           {/* Table Header */}
//           <View style={styles.tableRow}>
//             <Text style={[styles.tableHeaderCell, styles.col1]}>S.No</Text>
//             <Text style={[styles.tableHeaderCell, styles.col2]}>Description</Text>
//             <Text style={[styles.tableHeaderCell, styles.col3]}>Unit Price</Text>
//             <Text style={[styles.tableHeaderCell, styles.col4]}>Qty</Text>
//             <Text style={[styles.tableHeaderCell, styles.col5]}>Net Amount</Text>
//           </View>
          
//           {/* Table Data */}
//           <View style={styles.tableRowAlternate}>
//             <Text style={[styles.tableCellCentered, styles.col1]}>1</Text>
//             <View style={[styles.tableCell, styles.col2]}>
//               <Text style={{ fontWeight: 'bold' }}>{orderData.productName || "Product"}</Text>
//               <Text style={{ fontSize: 8, color: '#888888', marginTop: 3 }}>SKU: {orderData.sku_id || "N/A"}</Text>
//               {orderData.size && <Text style={{ fontSize: 8, color: '#888888' }}>Size: {orderData.size}</Text>}
//             </View>
//             <Text style={[styles.tableCellRight, styles.col3]}>₹{orderData.price || "0"}</Text>
//             <Text style={[styles.tableCellCentered, styles.col4]}>{orderData.quantity || "1"}</Text>
//             <Text style={[styles.tableCellRight, styles.col5]}>₹{calculateSubtotal()}</Text>
//           </View>
          
//           {/* Subtotal and Total Section - Removed GST calculation */}
//           <View style={styles.totalContainer}>
//             <View style={styles.grandTotalRow}>
//               <Text style={styles.grandTotalLabel}>Total Amount:</Text>
//               <Text style={styles.grandTotalAmount}>₹{calculateGrandTotal()}</Text>
//             </View>
//           </View>
//         </View>

//         {/* Amount in Words */}
//         <View style={styles.amountInWords}>
//           <Text style={{ fontWeight: 'bold', marginBottom: 5 }}>Amount in Words:</Text>
//           <Text>{totalInWords(calculateGrandTotal())}</Text>
//         </View>
        
//         {/* Payment Status */}
//         <View style={styles.paymentStatus}>
//           <Text style={{ fontWeight: 'bold' }}>Payment Status: {orderData.payment === true ? 'Paid' : 'Pending'}</Text>
//           <Text style={{ fontSize: 8, marginTop: 3, color: '#555555' }}>
//             {orderData.payment === 'completed' 
//               ? 'Thank you for your payment. This invoice is marked as paid.' 
//               : 'Please complete the payment to process your order.'}
//           </Text>
//         </View>

//         {/* Page Footer */}
//         <View style={styles.footer}>
//           <Text>Thank you for shopping with ZESTFOODS.in!</Text>
//           <Text style={{ marginTop: 5 }}>This is a computer-generated invoice and does not require a physical signature.</Text>
//         </View>

//         {/* Page Number */}
//         <Text style={styles.pageNumber}>Page 1 of 2</Text>
//       </Page>

//       {/* Second Page */}
//       <Page size="A4" style={styles.page}>
//         {/* Header */}
//         <View style={styles.headerContainer}>
//           <View>
//             <Text style={styles.headerLeft}>ZESTFOODS.in</Text>
//             <Text style={{ fontSize: 10, color: '#888888', marginTop: 5 }}>Fresh & Delicious Food</Text>
//           </View>
//           <View style={styles.headerRight}>
//             <Text style={{ fontSize: 14, fontWeight: 'bold', marginBottom: 5 }}>Tax Invoice</Text>
//             <Text style={styles.redText}>(Original for Recipient)</Text>
//           </View>
//         </View>

//         {/* Order Summary */}
//         <View style={{ marginBottom: 20 }}>
//           <Text style={styles.subheader}>Order Summary</Text>
//           <View style={styles.orderInfoContainer}>
//             <View style={styles.orderInfoColumn}>
//               <View style={styles.infoRow}>
//                 <Text style={styles.infoLabel}>Order Number:</Text>
//                 <Text>{orderData._id || "N/A"}</Text>
//               </View>
//               <View style={styles.infoRow}>
//                 <Text style={styles.infoLabel}>Invoice Number:</Text>
//                 <Text>{invoiceNumber}</Text>
//               </View>
//             </View>
//             <View style={styles.orderInfoColumn}>
//               <View style={styles.infoRow}>
//                 <Text style={styles.infoLabel}>Order Date:</Text>
//                 <Text>{formatDate(orderData.date) || "N/A"}</Text>
//               </View>
//               <View style={styles.infoRow}>
//                 <Text style={styles.infoLabel}>Order Status:</Text>
//                 <Text>{orderData.status || "Processing"}</Text>
//               </View>
//             </View>
//           </View>
//         </View>

//         {/* Shipping Information */}
//         <View style={{ marginTop: 20 }}>
//           <Text style={styles.subheader}>Delivery Information</Text>
//           <View style={{ padding: 15, borderWidth: 1, borderColor: '#EEEEEE', borderRadius: 5 }}>
//             <View style={styles.infoRow}>
//               <Text style={styles.infoLabel}>Expected Delivery:</Text>
//               <Text>Within 3-5 business days</Text>
//             </View>
//             <View style={styles.infoRow}>
//               <Text style={styles.infoLabel}>Shipping Partner:</Text>
//               <Text>ZestFoods Express Delivery</Text>
//             </View>
//             <View style={styles.infoRow}>
//               <Text style={styles.infoLabel}>Delivery Address:</Text>
//               <Text>{formattedAddress.addressLine1}, {formattedAddress.city}</Text>
//             </View>
//           </View>
//         </View>

//         {/* Signature Section */}
//         <View style={styles.signatureSection}>
//           <Text style={{ marginBottom: 10 }}>For RR Enterprice Pvt Ltd:</Text>
//         </View>

//         {/* Additional Information */}
//         <View style={styles.additionalInfo}>
//           <Text style={{ fontWeight: 'bold', marginBottom: 5 }}>Contact Information:</Text>
//           <Text>Customer Support: info@zestfoods.in</Text>
//           <Text>Website: www.zestfoods.in</Text>
//           <Text>Phone: +91-9313179233</Text>
//         </View>

//         {/* Page Footer */}
//         <View style={styles.footer}>
//           <Text>Thank you for shopping with ZESTFOODS.in!</Text>
//           <Text style={{ marginTop: 5 }}>This is a computer-generated invoice and does not require a physical signature.</Text>
//         </View>

//         {/* Page Number */}
//         <Text style={styles.pageNumber}>Page 2 of 2</Text>
//       </Page>
//     </Document>
//   );
// };

// export default InvoicePDF;



// import React from 'react';
// import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';

// // Create styles
// const styles = StyleSheet.create({
//   page: {
//     flexDirection: 'column',
//     backgroundColor: '#FFFFFF',
//     padding: 30,
//   },
//   header: {
//     marginBottom: 20,
//     borderBottom: '1px solid #E5E5E5',
//     paddingBottom: 10,
//   },
//   headerContent: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   logo: {
//     width: 100,
//     height: 50,
//   },
//   companyName: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   invoiceTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginTop: 10,
//   },
//   invoiceInfo: {
//     marginTop: 5,
//     fontSize: 10,
//   },
//   addressSection: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 20,
//   },
//   addressBox: {
//     width: '45%',
//     padding: 10,
//     borderRadius: 5,
//     backgroundColor: '#F9F9F9',
//   },
//   addressTitle: {
//     fontSize: 12,
//     fontWeight: 'bold',
//     marginBottom: 5,
//   },
//   addressText: {
//     fontSize: 10,
//     lineHeight: 1.5,
//   },
//   table: {
//     marginTop: 20,
//     borderWidth: 1,
//     borderColor: '#E5E5E5',
//   },
//   tableHeader: {
//     flexDirection: 'row',
//     backgroundColor: '#F5F5F5',
//     borderBottomWidth: 1,
//     borderBottomColor: '#E5E5E5',
//     padding: 8,
//   },
//   tableRow: {
//     flexDirection: 'row',
//     borderBottomWidth: 1,
//     borderBottomColor: '#E5E5E5',
//     padding: 8,
//   },
//   tableCell: {
//     padding: 5,
//     fontSize: 10,
//   },
//   productCol: {
//     width: '40%',
//   },
//   quantityCol: {
//     width: '15%',
//     textAlign: 'center',
//   },
//   priceCol: {
//     width: '15%',
//     textAlign: 'right',
//   },
//   sizeCol: {
//     width: '15%',
//     textAlign: 'center',
//   },
//   totalCol: {
//     width: '15%',
//     textAlign: 'right',
//   },
//   summarySection: {
//     marginTop: 20,
//     alignItems: 'flex-end',
//   },
//   summaryRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     width: '40%',
//     marginBottom: 5,
//   },
//   summaryLabel: {
//     fontSize: 10,
//     fontWeight: 'bold',
//   },
//   summaryValue: {
//     fontSize: 10,
//     fontWeight: 'normal',
//   },
//   totalRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     width: '40%',
//     marginTop: 5,
//     paddingTop: 5,
//     borderTopWidth: 1,
//     borderTopColor: '#E5E5E5',
//   },
//   totalLabel: {
//     fontSize: 12,
//     fontWeight: 'bold',
//   },
//   totalValue: {
//     fontSize: 12,
//     fontWeight: 'bold',
//   },
//   footer: {
//     marginTop: 40,
//     borderTopWidth: 1,
//     borderTopColor: '#E5E5E5',
//     paddingTop: 10,
//     fontSize: 8,
//     textAlign: 'center',
//     color: '#777777',
//   },
//   shippingInfo: {
//     marginTop: 20,
//     borderTopWidth: 1,
//     borderTopColor: '#E5E5E5',
//     paddingTop: 10,
//   },
//   shippingTitle: {
//     fontSize: 10,
//     fontWeight: 'bold',
//     marginBottom: 5,
//   },
//   awbInfo: {
//     fontSize: 10,
//     marginBottom: 2,
//   },
// });

// // InvoicePDF Component
// const InvoicePDF = ({ orderData }) => {
//   // Make sure we have an order, not just an item
//   if (!orderData) return null;
  
//   // Calculate total amount
//   const calculateTotal = () => {
//     if (orderData.payment && orderData.payment.amount) {
//       return orderData.payment.amount;
//     }
    
//     // If we have an array of items, calculate total from items
//     if (Array.isArray(orderData.items)) {
//       return orderData.items.reduce((sum, item) => {
//         return sum + (item.price * (item.quantity || 1));
//       }, 0);
//     }
    
//     // If orderData is just a single item (old structure)
//     return orderData.price * (orderData.quantity || 1);
//   };
  
//   const total = calculateTotal();
//   const currency = orderData.currency || '$';  // Default to $ if currency not specified
  
//   // Format address for display
//   const formatAddress = (address) => {
//     if (!address) return 'Address not available';
    
//     let addressStr = '';
//     if (address.name) addressStr += `${address.name}\n`;
//     if (address.street) addressStr += `${address.street}\n`;
//     if (address.city) addressStr += `${address.city}, `;
//     if (address.state) addressStr += `${address.state} `;
//     if (address.postalCode) addressStr += `${address.postalCode}\n`;
//     if (address.country) addressStr += `${address.country}\n`;
//     if (address.phone) addressStr += `Phone: ${address.phone}`;
    
//     return addressStr || 'Address not available';
//   };
  
//   // Get array of items to display
//   const getItemsToDisplay = () => {
//     // If orderData already has items array, use it
//     if (Array.isArray(orderData.items)) {
//       return orderData.items;
//     }
    
//     // If orderData is just a single item (old structure)
//     return [orderData];
//   };
  
//   const items = getItemsToDisplay();
  
//   // Get shipping status
//   const shippingStatus = orderData.status || 'Processing';
  
//   // Get invoice date
//   const invoiceDate = orderData.date ? new Date(orderData.date).toLocaleDateString() : new Date().toLocaleDateString();
  
//   // Get order ID
//   const orderId = orderData._id || 'Unknown';

//   return (
//     <Document>
//       <Page size="A4" style={styles.page}>
//         {/* Header */}
//         <View style={styles.header}>
//           <View style={styles.headerContent}>
//             <View>
//               <Text style={styles.companyName}>Your Store Name</Text>
//               <Text style={styles.invoiceTitle}>INVOICE</Text>
//               <Text style={styles.invoiceInfo}>Invoice #: INV-{orderId}</Text>
//               <Text style={styles.invoiceInfo}>Date: {invoiceDate}</Text>
//               <Text style={styles.invoiceInfo}>Order ID: {orderId}</Text>
//             </View>
//             {/* You can add your logo here if needed */}
//             {/* <Image style={styles.logo} src="/path-to-your-logo.png" /> */}
//           </View>
//         </View>
        
//         {/* Address Section */}
//         <View style={styles.addressSection}>
//           <View style={styles.addressBox}>
//             <Text style={styles.addressTitle}>Bill To:</Text>
//             <Text style={styles.addressText}>
//               {formatAddress(orderData.address)}
//             </Text>
//           </View>
//           <View style={styles.addressBox}>
//             <Text style={styles.addressTitle}>Ship To:</Text>
//             <Text style={styles.addressText}>
//               {formatAddress(orderData.address)}
//             </Text>
//           </View>
//         </View>
        
//         {/* Items Table */}
//         <View style={styles.table}>
//           <View style={styles.tableHeader}>
//             <Text style={[styles.tableCell, styles.productCol]}>Product</Text>
//             <Text style={[styles.tableCell, styles.sizeCol]}>Size</Text>
//             <Text style={[styles.tableCell, styles.quantityCol]}>Quantity</Text>
//             <Text style={[styles.tableCell, styles.priceCol]}>Price</Text>
//             <Text style={[styles.tableCell, styles.totalCol]}>Total</Text>
//           </View>
          
//           {/* Table Rows */}
//           {items.map((item, index) => (
//             <View key={index} style={styles.tableRow}>
//               <Text style={[styles.tableCell, styles.productCol]}>{item.productName || 'Product'}</Text>
//               <Text style={[styles.tableCell, styles.sizeCol]}>{item.size || 'Standard'}</Text>
//               <Text style={[styles.tableCell, styles.quantityCol]}>{item.quantity || 1}</Text>
//               <Text style={[styles.tableCell, styles.priceCol]}>{currency}{item.price || 0}</Text>
//               <Text style={[styles.tableCell, styles.totalCol]}>
//                 {currency}{(item.price * (item.quantity || 1)).toFixed(2)}
//               </Text>
//             </View>
//           ))}
//         </View>
        
//         {/* Summary Section */}
//         <View style={styles.summarySection}>
//           <View style={styles.summaryRow}>
//             <Text style={styles.summaryLabel}>Subtotal:</Text>
//             <Text style={styles.summaryValue}>{currency}{total.toFixed(2)}</Text>
//           </View>
//           <View style={styles.summaryRow}>
//             <Text style={styles.summaryLabel}>Shipping:</Text>
//             <Text style={styles.summaryValue}>{currency}0.00</Text>
//           </View>
//           <View style={styles.summaryRow}>
//             <Text style={styles.summaryLabel}>Tax:</Text>
//             <Text style={styles.summaryValue}>Included</Text>
//           </View>
//           <View style={styles.totalRow}>
//             <Text style={styles.totalLabel}>TOTAL:</Text>
//             <Text style={styles.totalValue}>{currency}{total.toFixed(2)}</Text>
//           </View>
//         </View>
        
//         {/* Shipping Information */}
//         {orderData.awb_no && (
//           <View style={styles.shippingInfo}>
//             <Text style={styles.shippingTitle}>Shipping Information:</Text>
//             <Text style={styles.awbInfo}>Status: {shippingStatus}</Text>
//             <Text style={styles.awbInfo}>Courier: DHL</Text>
//             <Text style={styles.awbInfo}>AWB Number: {orderData.awb_no}</Text>
//           </View>
//         )}
        
//         {/* Payment Method */}
//         <View style={styles.shippingInfo}>
//           <Text style={styles.shippingTitle}>Payment Information:</Text>
//           <Text style={styles.awbInfo}>Method: {orderData.paymentMethod || 'Unknown'}</Text>
//           <Text style={styles.awbInfo}>Status: {orderData.payment?.status || 'Completed'}</Text>
//         </View>
        
//         {/* Footer */}
//         <View style={styles.footer}>
//           <Text>Thank you for your business!</Text>
//           <Text>This is a computer-generated invoice and does not require a signature.</Text>
//         </View>
//       </Page>
//     </Document>
//   );
// };

// export default InvoicePDF;


import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

// Create styles without custom font registration to avoid the error
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    padding: 40,
    fontFamily: 'Helvetica', // Standard PDF font
    fontSize: 10,
    color: '#333333',
  },
  section: {
    marginBottom: 15,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
    borderBottom: '1px solid #EEEEEE',
    paddingBottom: 20,
  },
  headerLeft: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
  },
  headerRight: {
    textAlign: 'right',
    fontSize: 10,
  },
  companyInfo: {
    width: '48%',
    padding: 15,
    backgroundColor: '#F9F9F9',
    borderRadius: 5,
  },
  addressContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 25,
  },
  addressBox: {
    width: '48%',
    padding: 15,
    borderWidth: 1,
    borderColor: '#EEEEEE',
    borderRadius: 5,
    backgroundColor: '#FAFAFA',
  },
  subheader: {
    fontSize: 14,
    marginBottom: 8,
    fontWeight: 'bold',
    color: '#555555',
  },
  smallLabel: {
    fontSize: 8,
    color: '#888888',
    marginBottom: 3,
    textTransform: 'uppercase',
  },
  infoValue: {
    marginBottom: 10,
  },
  orderInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 25,
    padding: 15,
    backgroundColor: '#F5F5F5',
    borderRadius: 5,
  },
  orderInfoColumn: {
    width: '48%',
  },
  infoRow: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  infoLabel: {
    width: '40%',
    fontWeight: 'bold',
    color: '#555555',
  },
  table: {
    display: 'table',
    width: 'auto',
    marginBottom: 20,
    borderRadius: 5,
    overflow: 'hidden',
  },
  tableRow: {
    flexDirection: 'row',
  },
  tableHeaderCell: {
    backgroundColor: '#444444',
    color: '#FFFFFF',
    fontWeight: 'bold',
    padding: 8,
    fontSize: 10,
    textAlign: 'center',
  },
  tableCell: {
    padding: 8,
    fontSize: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },
  tableCellCentered: {
    padding: 8,
    fontSize: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
    textAlign: 'center',
  },
  tableCellRight: {
    padding: 8,
    fontSize: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
    textAlign: 'right',
  },
  tableRowAlternate: {
    flexDirection: 'row',
    backgroundColor: '#F9F9F9',
  },
  tableRowStandard: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
  },
  col1: { width: '8%' },
  col2: { width: '47%' },
  col3: { width: '15%' },
  col4: { width: '15%' },
  col5: { width: '15%' },
  totalContainer: {
    marginTop: 15,
    marginLeft: 'auto',
    width: '40%',
  },
  totalRow: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#EEEEEE',
    paddingTop: 8,
    paddingBottom: 4,
  },
  totalLabel: {
    width: '60%',
    textAlign: 'right',
    paddingRight: 8,
    fontWeight: 'bold',
  },
  totalAmount: {
    width: '40%',
    textAlign: 'right',
    paddingRight: 8,
    fontWeight: 'bold',
  },
  grandTotalRow: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#333333',
    paddingTop: 8,
    paddingBottom: 8,
    marginTop: 5,
    backgroundColor: '#F5F5F5',
  },
  grandTotalLabel: {
    width: '60%',
    textAlign: 'right',
    paddingRight: 8,
    fontWeight: 'bold',
    fontSize: 12,
  },
  grandTotalAmount: {
    width: '40%',
    textAlign: 'right',
    paddingRight: 8,
    fontWeight: 'bold',
    fontSize: 12,
    color: '#222222',
  },
  amountInWords: {
    marginTop: 20,
    padding: 12,
    borderWidth: 1,
    borderColor: '#EEEEEE',
    fontSize: 10,
    backgroundColor: '#FAFAFA',
    borderRadius: 5,
  },
  footer: {
    position: 'absolute',
    bottom: 40,
    left: 40,
    right: 40,
    textAlign: 'center',
    fontSize: 8,
    color: '#888888',
    borderTopWidth: 1,
    borderTopColor: '#EEEEEE',
    paddingTop: 10,
  },
  pageNumber: {
    position: 'absolute',
    bottom: 30,
    right: 40,
    fontSize: 10,
    color: '#888888',
  },
  signatureSection: {
    marginTop: 60,
    textAlign: 'right',
    paddingRight: 20,
  },
  signatureBox: {
    borderTopWidth: 1,
    borderTopColor: '#EEEEEE',
    marginTop: 50,
    marginLeft: 'auto',
    width: 200,
    paddingTop: 5,
    textAlign: 'center',
  },
  redText: {
    color: '#E53935',
  },
  taxInfo: {
    marginTop: 30,
    padding: 15,
    borderWidth: 1,
    borderColor: '#EEEEEE',
    borderRadius: 5,
    backgroundColor: '#F9F9F9',
  },
  paymentStatus: {
    marginTop: 15,
    padding: 10,
    backgroundColor: '#F0F9FF',
    borderRadius: 5,
    borderLeftWidth: 4,
    borderLeftColor: '#3B82F6',
  },
  additionalInfo: {
    marginTop: 20,
    fontSize: 8,
    color: '#888888',
  },
});

const InvoicePDF = ({ orderData }) => {
  // Format date string
  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return isNaN(date.getTime()) ? '' : date.toLocaleDateString('en-GB').split('/').join('.');
  };

  // Format address for display
  const formatAddress = () => {
    if (!orderData.address) return {
      fullName: 'N/A',
      addressLine1: '',
      addressLine2: '',
      city: '',
      state: '',
      zipcode: '',
      country: ''
    };
    
    const address = orderData.address;
    const fullName = `${address.firstName || ''} ${address.lastName || ''}`.trim();
    const addressLine1 = address.street || '';
    const addressLine2 = `${address.city || ''}, ${address.state || ''}, ${address.zipcode || ''}`;
    
    return {
      fullName,
      addressLine1,
      addressLine2,
      city: address.city || '',
      state: address.state || '',
      zipcode: address.zipcode || '',
      country: address.country || ''
    };
  };

  const formattedAddress = formatAddress();

  // Get all order items
  const getOrderItems = () => {
    // Check if orderData has items array (multiple products)
    if (orderData.items && Array.isArray(orderData.items) && orderData.items.length > 0) {
      return orderData.items;
    }
    // Otherwise treat orderData itself as a single item
    return [orderData];
  };

  const items = getOrderItems();

  // Calculate subtotal for all items
  const calculateSubtotal = () => {
    return items.reduce((total, item) => {
      const price = parseFloat(item.price) || 0;
      const quantity = parseInt(item.quantity) || 1;
      return total + (price * quantity);
    }, 0).toFixed(2);
  };

  // Note: We're not adding GST to the grand total anymore
  const calculateGrandTotal = () => {
    return calculateSubtotal();
  };

  const totalInWords = (amount) => {
    // Simple implementation for converting numbers to words
    const units = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
    const teens = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
    const tens = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
    
    const num = Math.floor(parseFloat(amount));
    
    if (num === 0) return 'Zero Rupees only';
    if (num < 10) return units[num] + ' Rupees only';
    if (num < 20) return teens[num - 10] + ' Rupees only';
    if (num < 100) {
      return tens[Math.floor(num / 10)] + (num % 10 !== 0 ? '-' + units[num % 10].toLowerCase() : '') + ' Rupees only';
    }
    if (num < 1000) {
      return units[Math.floor(num / 100)] + ' Hundred' + 
        (num % 100 !== 0 ? ' ' + totalInWords(num % 100).replace(' Rupees only', '') : '') + ' Rupees only';
    }
    
    return 'Three Hundred Ninety-nine Rupees only'; // Default fallback
  };

  // Generate invoice number based on order ID and date
  const generateInvoiceNumber = () => {
    const timestamp = orderData.date ? new Date(orderData.date).getTime() : Date.now();
    return `ZEST-${timestamp.toString().substring(6, 12)}`;
  };

  // Generate invoice details
  const generateInvoiceDetails = () => {
    const year = orderData.date ? new Date(orderData.date).getFullYear() : new Date().getFullYear();
    const randomNum1 = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
    const randomNum2 = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
    return `GJ-ZEST-${year}${randomNum1}-${randomNum2}`;
  };

  const invoiceNumber = generateInvoiceNumber();
  const invoiceDetails = generateInvoiceDetails();

  // Determine payment status text
  const getPaymentStatusText = () => {
    if (orderData.payment === true || orderData.payment?.status === 'completed') {
      return 'Paid';
    }
    return 'Pending';
  };

  const paymentStatus = getPaymentStatusText();

  return (
    <Document>
      {/* First Page */}
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.headerContainer}>
          <View>
            <Text style={styles.headerLeft}>ZESTFOODS.in</Text>
            <Text style={{ fontSize: 10, color: '#888888', marginTop: 5 }}>Fresh & Delicious Food</Text>
          </View>
          <View style={styles.headerRight}>
            <Text style={{ fontSize: 14, fontWeight: 'bold', marginBottom: 5 }}>Tax Invoice</Text>
            <Text style={styles.redText}>(Original for Recipient)</Text>
          </View>
        </View>

        {/* Vendor and Customer Information */}
        <View style={styles.addressContainer}>
          <View style={styles.companyInfo}>
            <Text style={styles.subheader}>Sold By:</Text>
            <Text style={{ fontWeight: 'bold', marginBottom: 10 }}>RR Enterprice Pvt Ltd</Text>
            <Text>
              b, A-77, Siddharth Nagar Society, Nana Varachha</Text>
            <Text>SURAT, GUJARAT, 395006</Text>
            
            <View style={{ marginTop: 15 }}>
              <Text style={styles.smallLabel}>Legal Information</Text>
              <Text>PAN No: BKAPV3087K</Text>
              <Text>GST Registration No: 24BKAPV3087K2ZR</Text>
              <Text>FSSAI License No: 10724999001045</Text>
            </View>
          </View>
          
          <View style={styles.addressBox}>
            <Text style={styles.subheader}>Customer Details:</Text>
            
            <View style={{ marginBottom: 10 }}>
              <Text style={styles.smallLabel}>Billing Address</Text>
              <Text style={{ fontWeight: 'bold' }}>{formattedAddress.fullName}</Text>
            </View>
            
            <View>
              <Text style={styles.smallLabel}>Shipping Address</Text>
              <Text style={{ fontWeight: 'bold' }}>{formattedAddress.fullName}</Text>
              <Text>{formattedAddress.addressLine1}</Text>
              <Text>{formattedAddress.city}, {formattedAddress.state}, {formattedAddress.zipcode}</Text>
              <Text>State/UT Code: 24</Text>
            </View>
          </View>
        </View>

        {/* Order Information */}
        <View style={styles.orderInfoContainer}>
          <View style={styles.orderInfoColumn}>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Order Number:</Text>
              <Text>{orderData._id || "N/A"}</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Order Date:</Text>
              <Text>{formatDate(orderData.date) || "N/A"}</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Payment Method:</Text>
              <Text>{orderData.paymentMethod || "N/A"}</Text>
            </View>
          </View>
          
          <View style={styles.orderInfoColumn}>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Invoice Number:</Text>
              <Text>{invoiceNumber}</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Invoice Date:</Text>
              <Text>{formatDate(orderData.date) || "N/A"}</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Invoice Details:</Text>
              <Text>{invoiceDetails}</Text>
            </View>
          </View>
        </View>

        {/* Product Table */}
        <View style={styles.table}>
          {/* Table Header */}
          <View style={styles.tableRow}>
            <Text style={[styles.tableHeaderCell, styles.col1]}>S.No</Text>
            <Text style={[styles.tableHeaderCell, styles.col2]}>Description</Text>
            <Text style={[styles.tableHeaderCell, styles.col3]}>Unit Price</Text>
            <Text style={[styles.tableHeaderCell, styles.col4]}>Qty</Text>
            <Text style={[styles.tableHeaderCell, styles.col5]}>Net Amount</Text>
          </View>
          
          {/* Table Data - Now loops through all items */}
          {items.map((item, index) => (
            <View key={index} style={index % 2 === 0 ? styles.tableRowAlternate : styles.tableRowStandard}>
              <Text style={[styles.tableCellCentered, styles.col1]}>{index + 1}</Text>
              <View style={[styles.tableCell, styles.col2]}>
                <Text style={{ fontWeight: 'bold' }}>{item.productName || "Product"}</Text>
                <Text style={{ fontSize: 8, color: '#888888', marginTop: 3 }}>SKU: {item.sku_id || "N/A"}</Text>
                {item.size && <Text style={{ fontSize: 8, color: '#888888' }}>Size: {item.size}</Text>}
              </View>
              <Text style={[styles.tableCellRight, styles.col3]}>₹{item.price || "0"}</Text>
              <Text style={[styles.tableCellCentered, styles.col4]}>{item.quantity || "1"}</Text>
              <Text style={[styles.tableCellRight, styles.col5]}>
                ₹{((parseFloat(item.price) || 0) * (parseInt(item.quantity) || 1)).toFixed(2)}
              </Text>
            </View>
          ))}
          
          {/* Subtotal and Total Section */}
          <View style={styles.totalContainer}>
            <View style={styles.grandTotalRow}>
              <Text style={styles.grandTotalLabel}>Total Amount:</Text>
              <Text style={styles.grandTotalAmount}>₹{calculateGrandTotal()}</Text>
            </View>
          </View>
        </View>

        {/* Amount in Words */}
        <View style={styles.amountInWords}>
          <Text style={{ fontWeight: 'bold', marginBottom: 5 }}>Amount in Words:</Text>
          <Text>{totalInWords(calculateGrandTotal())}</Text>
        </View>
        
        {/* Payment Status */}
        <View style={styles.paymentStatus}>
          <Text style={{ fontWeight: 'bold' }}>Payment Status: {paymentStatus}</Text>
          <Text style={{ fontSize: 8, marginTop: 3, color: '#555555' }}>
            {paymentStatus === 'Paid' 
              ? 'Thank you for your payment. This invoice is marked as paid.' 
              : 'Please complete the payment to process your order.'}
          </Text>
        </View>

        {/* Page Footer */}
        <View style={styles.footer}>
          <Text>Thank you for shopping with ZESTFOODS.in!</Text>
          <Text style={{ marginTop: 5 }}>This is a computer-generated invoice and does not require a physical signature.</Text>
        </View>

        {/* Page Number */}
        <Text style={styles.pageNumber}>Page 1 of 2</Text>
      </Page>

      {/* Second Page */}
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.headerContainer}>
          <View>
            <Text style={styles.headerLeft}>ZESTFOODS.in</Text>
            <Text style={{ fontSize: 10, color: '#888888', marginTop: 5 }}>Fresh & Delicious Food</Text>
          </View>
          <View style={styles.headerRight}>
            <Text style={{ fontSize: 14, fontWeight: 'bold', marginBottom: 5 }}>Tax Invoice</Text>
            <Text style={styles.redText}>(Original for Recipient)</Text>
          </View>
        </View>

        {/* Order Summary */}
        <View style={{ marginBottom: 20 }}>
          <Text style={styles.subheader}>Order Summary</Text>
          <View style={styles.orderInfoContainer}>
            <View style={styles.orderInfoColumn}>
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Order Number:</Text>
                <Text>{orderData._id || "N/A"}</Text>
              </View>
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Invoice Number:</Text>
                <Text>{invoiceNumber}</Text>
              </View>
            </View>
            <View style={styles.orderInfoColumn}>
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Order Date:</Text>
                <Text>{formatDate(orderData.date) || "N/A"}</Text>
              </View>
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Order Status:</Text>
                <Text>{orderData.status || "Processing"}</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Shipping Information */}
        <View style={{ marginTop: 20 }}>
          <Text style={styles.subheader}>Delivery Information</Text>
          <View style={{ padding: 15, borderWidth: 1, borderColor: '#EEEEEE', borderRadius: 5 }}>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Expected Delivery:</Text>
              <Text>Within 3-5 business days</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Shipping Partner:</Text>
              <Text>ZestFoods Express Delivery</Text>
            </View>
            {/* Add AWB number if available */}
            {orderData.awb_no && (
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>AWB Number:</Text>
                <Text>{orderData.awb_no}</Text>
              </View>
            )}
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Delivery Address:</Text>
              <Text>{formattedAddress.addressLine1}, {formattedAddress.city}</Text>
            </View>
          </View>
        </View>

        {/* Item Summary */}
        <View style={{ marginTop: 20 }}>
          <Text style={styles.subheader}>Order Items Summary</Text>
          <View style={{ padding: 15, borderWidth: 1, borderColor: '#EEEEEE', borderRadius: 5 }}>
            <Text>Total Items: {items.length}</Text>
            <Text>Total Products: {items.reduce((total, item) => total + (parseInt(item.quantity) || 1), 0)}</Text>
            <Text>Total Amount: ₹{calculateGrandTotal()}</Text>
          </View>
        </View>

        {/* Signature Section */}
        <View style={styles.signatureSection}>
          <Text style={{ marginBottom: 10 }}>For RR Enterprice Pvt Ltd:</Text>
          <View style={styles.signatureBox}>
            <Text>Authorized Signatory</Text>
          </View>
        </View>

        {/* Additional Information */}
        <View style={styles.additionalInfo}>
          <Text style={{ fontWeight: 'bold', marginBottom: 5 }}>Contact Information:</Text>
          <Text>Customer Support: info@zestfoods.in</Text>
          <Text>Website: www.zestfoods.in</Text>
          <Text>Phone: +91-9313179233</Text>
        </View>

        {/* Page Footer */}
        <View style={styles.footer}>
          <Text>Thank you for shopping with ZESTFOODS.in!</Text>
          <Text style={{ marginTop: 5 }}>This is a computer-generated invoice and does not require a physical signature.</Text>
        </View>

        {/* Page Number */}
        <Text style={styles.pageNumber}>Page 2 of 2</Text>
      </Page>
    </Document>
  );
};

export default InvoicePDF;