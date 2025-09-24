import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema } from "@shared/schema";
import { sendEmail, createContactNotificationEmail, createAutoReplyEmail } from "./email";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate request body

      console.log("✅ Received POST /api/contact:", req.body);

      const validationResult = insertContactSubmissionSchema.safeParse(req.body);
      
      if (!validationResult.success) {
        return res.status(400).json({
          error: "Invalid form data",
          details: validationResult.error.errors
        });
      }

      const submissionData = validationResult.data;

      // Store submission in storage
      const submission = await storage.createContactSubmission(submissionData);

      // Send notification email to company
      const notificationEmail = createContactNotificationEmail(submission);
      const notificationSent = await sendEmail(notificationEmail);

      // // Send auto-reply email to user
      const autoReplyEmail = createAutoReplyEmail(submission);
      const autoReplySent = await sendEmail(autoReplyEmail);

      // Log email status
      console.log('Contact form submission processed:', {
        id: submission.id,
        notificationSent,
        autoReplySent
      });

      res.status(200).json({
        success: true,
        message: "Thank you for your message! We'll get back to you soon.",
        submissionId: submission.id
      });

    } catch (error) {
      console.error('Contact form submission error:', error);
      res.status(500).json({
        error: "Failed to process your message. Please try again."
      });
    }
  });

  // Get contact submissions endpoint (for admin use)
  app.get("/api/contact-submissions", async (req, res) => {
    try {
      const submissions = await storage.getContactSubmissions();
      res.json({ submissions });
    } catch (error) {
      console.error('Error fetching contact submissions:', error);
      res.status(500).json({ error: "Failed to fetch submissions" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
