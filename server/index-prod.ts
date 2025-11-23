import fs from "node:fs";
import path from "node:path";
import express from "express";
import { app } from "./app";
import { storage } from "./storage";
import { insertContactMessageSchema } from "../shared/schema";

// Register API routes directly
app.post("/api/contact", async (req, res) => {
  try {
    const validatedData = insertContactMessageSchema.parse(req.body);
    const message = await storage.createContactMessage(validatedData);
    
    res.json({ 
      success: true, 
      message: "Message received successfully",
      id: message.id 
    });
  } catch (error) {
    console.error("Error creating contact message:", error);
    res.status(400).json({ 
      success: false, 
      message: "Invalid request data" 
    });
  }
});

app.get("/api/contact/messages", async (req, res) => {
  try {
    const messages = await storage.getAllContactMessages();
    res.json({ success: true, messages });
  } catch (error) {
    console.error("Error fetching contact messages:", error);
    res.status(500).json({ 
      success: false, 
      message: "Failed to fetch messages" 
    });
  }
});

const distPath = path.resolve(process.cwd(), "dist");

// Serve static files
app.use(express.static(distPath));

// Fallback to index.html for SPA routing
app.use("*", (_req, res) => {
  const indexPath = path.resolve(distPath, "index.html");
  if (fs.existsSync(indexPath)) {
    res.sendFile(indexPath);
  } else {
    res.status(404).send("Build files not found");
  }
});

// Export the Express app as a Vercel serverless function
export default app;
