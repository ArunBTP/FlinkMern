// Using SendGrid integration for email functionality
import { MailService } from '@sendgrid/mail';
import 'dotenv/config';

if (!process.env.SENDGRID_API_KEY) {
  console.warn("SENDGRID_API_KEY environment variable not set - email functionality will be disabled");
}

const mailService = new MailService();
if (process.env.SENDGRID_API_KEY) {
  mailService.setApiKey(process.env.SENDGRID_API_KEY);
}

interface EmailParams {
  to: string;
  from: string;
  subject: string;
  text?: string;
  html?: string;
}

export async function sendEmail(params: EmailParams): Promise<boolean> {
  if (!process.env.SENDGRID_API_KEY) {
    console.log('Email would be sent:', params);
    return true; // Return true in dev mode for testing
  }

  try {
    await mailService.send({
      to: params.to,
      from: params.from,
      subject: params.subject,
      text: params.text ?? "",
      html: params.html ?? "",
    });
    return true;
  } catch (error) {
    console.error('SendGrid email error:', error);
    return false;
  }
}

export function createContactNotificationEmail(submission: any): EmailParams {
  const { name, email, company, service, message } = submission;
  
  return {
    to: "flinkconnect@gmail.com", // Company email
    from: "flinkconnect@gmail.com", // Verified sender
    subject: `New Contact Form Submission from ${name}`,
    text: `
New contact form submission received:

Name: ${name}
Email: ${email}
Company: ${company || 'Not specified'}
Service: ${service || 'Not specified'}
Message: ${message}

Submitted at: ${new Date().toLocaleString()}
    `,
    html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <h2 style="color: #2563eb;">New Contact Form Submission</h2>
  
  <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
    <p><strong>Company:</strong> ${company || 'Not specified'}</p>
    <p><strong>Service:</strong> ${service || 'Not specified'}</p>
  </div>
  
  <div style="background: #ffffff; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
    <h3>Message:</h3>
    <p style="white-space: pre-wrap;">${message}</p>
  </div>
  
  <p style="color: #64748b; font-size: 14px; margin-top: 20px;">
    Submitted at: ${new Date().toLocaleString()}
  </p>
</div>
    `
  };
}

export function createAutoReplyEmail(submission: any): EmailParams {
  const { name, email } = submission;
  
  return {
    to: email,
    from: "flinkconnect@gmail.com",
    subject: "Thank you for contacting Flink!",
    text: `
Hi ${name},

Thank you for reaching out to Flink! We've received your message and will get back to you within 24 hours.

Our team is excited to discuss how we can help with your technology needs, whether it's web development, MERN stack solutions, SAP BTP cloud services, or AI integration.

Best regards,
The Flink Team
    `,
    html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <div style="background: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%); color: white; padding: 30px; text-align: center;">
    <h1 style="margin: 0; font-size: 32px;">Flink</h1>
    <p style="margin: 10px 0 0; opacity: 0.9;">Technology Solutions</p>
  </div>
  
  <div style="padding: 30px;">
    <h2 style="color: #1f2937;">Hi ${name},</h2>
    
    <p>Thank you for reaching out to Flink! We've received your message and will get back to you within 24 hours.</p>
    
    <p>Our team is excited to discuss how we can help with your technology needs, whether it's:</p>
    
    <ul style="color: #4b5563;">
      <li>Web Development</li>
      <li>MERN Stack Solutions</li>
      <li>SAP BTP Cloud Services</li>
      <li>AI Integration</li>
    </ul>
    
    <p>In the meantime, feel free to explore our services on our website.</p>
    
    <div style="margin: 30px 0; padding: 20px; background: #f8fafc; border-radius: 8px;">
      <p style="margin: 0; color: #4b5563;">
        <strong>Questions?</strong> Reply to this email or call us at +1 (555) 123-4567
      </p>
    </div>
    
    <p>Best regards,<br>
    <strong>The Flink Team</strong></p>
  </div>
</div>
    `
  };
}