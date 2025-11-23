import { VercelRequest, VercelResponse } from '@vercel/node';
import { storage } from "../server/storage";
import { insertContactMessageSchema } from "../shared/schema";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Handle CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Get the path segments from the catch-all route
  // For /api/contact, req.query will be { '...': ['contact'] }
  // For /api/contact/messages, req.query will be { '...': ['contact', 'messages'] }
  const segments = (req.query['...'] as string[]) || [];
  const path = '/' + segments.join('/');

  // Handle POST /api/contact
  if (req.method === 'POST' && segments.length === 1 && segments[0] === 'contact') {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      const message = await storage.createContactMessage(validatedData);
      
      return res.json({ 
        success: true, 
        message: "Message received successfully",
        id: message.id 
      });
    } catch (error) {
      console.error("Error creating contact message:", error);
      return res.status(400).json({ 
        success: false, 
        message: "Invalid request data" 
      });
    }
  }

  // Handle GET /api/contact/messages
  if (req.method === 'GET' && segments.length === 2 && segments[0] === 'contact' && segments[1] === 'messages') {
    try {
      const messages = await storage.getAllContactMessages();
      return res.json({ success: true, messages });
    } catch (error) {
      console.error("Error fetching contact messages:", error);
      return res.status(500).json({ 
        success: false, 
        message: "Failed to fetch messages" 
      });
    }
  }

  return res.status(404).json({ message: 'Not found' });
}

