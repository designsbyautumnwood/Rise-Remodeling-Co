import nodemailer from 'nodemailer';
import type { InsertContact } from '@shared/schema';

interface EmailConfig {
  user: string;
  pass: string;
  to: string;
}

export async function sendContactEmail(contactData: InsertContact, config: EmailConfig) {
  // Create transporter using Gmail SMTP
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: config.user,
      pass: config.pass,
    },
  });

  // Format the email content
  const emailContent = `
    New Contact Form Submission - Rise Remodeling Co.
    
    Customer Information:
    Name: ${contactData.firstName} ${contactData.lastName}
    Email: ${contactData.email}
    Phone: ${contactData.phone}
    
    Project Details:
    Project Type: ${contactData.projectType || 'Not specified'}
    Budget: ${contactData.budget || 'Not specified'}
    Timeline: ${contactData.timeline || 'Not specified'}
    
    Message:
    ${contactData.message}
    
    ---
    Submitted from: Rise Remodeling Co. Website
    Time: ${new Date().toLocaleString()}
  `;

  const mailOptions = {
    from: config.user,
    to: config.to,
    subject: `New Contact Form Submission - ${contactData.firstName} ${contactData.lastName}`,
    text: emailContent,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #1e40af; border-bottom: 2px solid #60a5fa; padding-bottom: 10px;">
          New Contact Form Submission
        </h2>
        
        <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #334155; margin-top: 0;">Customer Information</h3>
          <p><strong>Name:</strong> ${contactData.firstName} ${contactData.lastName}</p>
          <p><strong>Email:</strong> <a href="mailto:${contactData.email}">${contactData.email}</a></p>
          <p><strong>Phone:</strong> <a href="tel:${contactData.phone}">${contactData.phone}</a></p>
        </div>
        
        <div style="background: #f1f5f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #334155; margin-top: 0;">Project Details</h3>
          <p><strong>Project Type:</strong> ${contactData.projectType || 'Not specified'}</p>
          <p><strong>Budget:</strong> ${contactData.budget || 'Not specified'}</p>
          <p><strong>Timeline:</strong> ${contactData.timeline || 'Not specified'}</p>
        </div>
        
        <div style="background: #ffffff; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #334155; margin-top: 0;">Message</h3>
          <p style="white-space: pre-wrap;">${contactData.message}</p>
        </div>
        
        <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; color: #64748b; font-size: 14px;">
          <p>Submitted from: Rise Remodeling Co. Website</p>
          <p>Time: ${new Date().toLocaleString()}</p>
        </div>
      </div>
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
}