import mongoose from 'mongoose';

const templateSchema = new mongoose.Schema({
  name: { type: String, required: true },
  content: { type: String, required: true },
  creationDate: { type: Date, default: Date.now },
  type: { type: String, enum: ['library', 'user-created'], required: true }
});

const Template = mongoose.model('Template', templateSchema);
export default Template;
