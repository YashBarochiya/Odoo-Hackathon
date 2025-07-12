import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();

const mailSender = async (email, title, body) => {
	try {
		let transporter = nodemailer.createTransport({
			host: process.env.MAIL_HOST,
			auth: {
				user: process.env.MAIL_USER,
				pass: process.env.MAIL_PASS,
			},
		});

		let info = await transporter.sendMail({
			from: 'Zestfood - by Bhargav',
			to: email,
			subject: title,
			html: body,
		});

		return info;
	} catch (error) {
		console.log("MailSender Error:", error.message);
		throw error;
	}
};

export default mailSender;
