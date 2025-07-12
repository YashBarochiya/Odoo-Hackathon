import mongoose from 'mongoose';
import mailSender from '../utils/mailSender.js';
import emailTemplate from '../mail/emailVerificationTemplate.js';

const otpSchema = new mongoose.Schema({
	email: {
		type: String,
		required: true,
	},
	otp: {
		type: String,
		required: true,
	},
	createdAt: {
		type: Date,
		default: Date.now,
		expires: 5 * 60, // 5 minutes
	},
});

async function sendVerificationEmail(email, otp) {
	try {
		await mailSender(email, 'Verification Email', emailTemplate(otp));
        // console.log("Mail sended successfully__________________________");
	} catch (error) {
		console.log("Error occurred while sending email:", error);
		throw error;
	}
}

otpSchema.pre('save', async function (next) {
	if (this.isNew) {
		await sendVerificationEmail(this.email, this.otp);
	}
	next();
});

const OTP = mongoose.model('OTP', otpSchema);
export default OTP;
