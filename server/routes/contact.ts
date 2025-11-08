import { RequestHandler } from "express";

export const handleContact: RequestHandler = (req, res) => {
  const { name, email, message } = req.body || {};
  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }
  // In production, forward to email/CRM. For now, log and return success.
  console.log("Contact form submission:", { name, email, message });
  return res.status(200).json({ ok: true });
};
