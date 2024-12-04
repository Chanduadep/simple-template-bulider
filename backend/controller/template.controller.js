import Template from '../models/templatemodel.js';

export const getTemplates = async (req, res) => {
  try {
    const templates = await Template.find();
    res.json(templates);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching templates', error });
  }
};

export const createTemplate = async (req, res) => {
  const { name, content, type } = req.body;

  try {
    const newTemplate = new Template({ name, content, type });
    await newTemplate.save();
    res.status(201).json(newTemplate);
  } catch (error) {
    res.status(500).json({ message: 'error creating template', error });
  }
};

export const updateTemplate = async (req, res) => {
  const { name, content, type } = req.body;
  const { id } = req.params;

  try {
    const updatedTemplate = await Template.findByIdAndUpdate(id, { name, content, type }, { new: true });
    if (!updatedTemplate) {
      return res.status(404).json({ message: 'Template is not found' });
    }
    res.json(updatedTemplate);
  } catch (error) {
    res.status(500).json({ message: 'error updating template', error });
  }
};
