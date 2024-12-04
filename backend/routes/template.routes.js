import express from 'express';
import { getTemplates, createTemplate, updateTemplate,  } from '../controller/template.controller.js';

const router = express.Router();

router.get('/templates', getTemplates);
router.post('/templates', createTemplate);
router.put('/templates/:id', updateTemplate);

export default router;
