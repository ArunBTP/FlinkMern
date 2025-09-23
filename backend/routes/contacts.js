const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

const { sendEmail, createContactNotificationEmail, createAutoReplyEmail } = require('../server/email');

// Create new contact submission
router.post('/', async (req, res) => {
  try {
    const { name, email, company, phone, service, message } = req.body;

    // Validate required fields
    if (!name || !email || !service || !message) {
      return res.status(400).json({
        success: false,
        message: 'Please fill in all required fields'
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Please enter a valid email address'
      });
    }

    // Create new contact
    const contact = new Contact({
      name,
      email,
      company,
      phone,
      service,
      message
    });

    await contact.save();

    // --- NEW EMAIL LOGIC ---
    // 1. Send the notification email to your company
    const companyEmailParams = createContactNotificationEmail(contact);
    sendEmail(companyEmailParams); // Use await if you want to wait for it, but not required here

    // 2. Send the auto-reply email to the user
    const autoReplyEmailParams = createAutoReplyEmail(contact);
    sendEmail(autoReplyEmailParams); // Use await if you want to wait for it, but not required here
    // --- END NEW EMAIL LOGIC ---

    res.status(201).json({
      success: true,
      message: 'Thank you for contacting us! We will get back to you soon.',
      data: contact
    });

  } catch (error) {
    console.error('Error creating contact:', error);
    res.status(500).json({
      success: false,
      message: 'Something went wrong. Please try again.'
    });
  }
});

// Get all contacts (for admin purposes)
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json({
      success: true,
      data: contacts
    });
  } catch (error) {
    console.error('Error fetching contacts:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching contacts'
    });
  }
});

module.exports = router;