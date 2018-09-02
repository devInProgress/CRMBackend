import mongoose from 'mongoose';
import { ContactSchema } from "../models/crmModel";

const Contacts = mongoose.model('Contact', ContactSchema);

export const addNewContact = async (req, res) => {
  const newContact = new Contacts(req.body);

  try {
    const savedContact = await newContact.save();
    res.json(savedContact);
  }
  catch (error) {
    console.error(error);
    res.send(error);
  }
}

export const getContacts = async (req, res) => {
  try {
    const allContacts = await Contacts.find({});
    res.json(allContacts);
  }
  catch (error) {
    console.error(error);
    res.send(error);
  }
}

export const getContactById = async (req, res) => {
  try {
    const contactWithId = await Contacts.find({_id: req.params.contactId});
    res.json(contactWithId);
  }
  catch (error) {
    console.error(error);
    res.send(error);
  }
}