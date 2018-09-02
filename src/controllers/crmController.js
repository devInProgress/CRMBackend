import mongoose from 'mongoose';
import { ContactSchema } from "../models/crmModel";

const Contact = mongoose.model('Contact', ContactSchema);

export const addNewContact = async (req, res) => {
  const newContact = new Contact(req.body);

  try {
    const savedContact = await newContact.save();
    res.send(savedContact);
  }
  catch (error) {
    console.error(error);
    res.send(error);
  }
}