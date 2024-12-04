import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/templateEdit.css'
import BASE_URL from '../config';

const TemplateEditor = () => {
  const { id } = useParams();
  const [template, setTemplate] = useState({ name: '', content: '', type: 'user-created' });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();  

  useEffect(() => {
    if (id) {
      console.log('Template ID:', id); 
      axios.get(`${BASE_URL}/api/templates/${id}`)
        .then(res => {
          setTemplate(res.data);
          console.log('Template data:', res.data); 
        })
        .catch(err => {
          console.error('Error fetching template:', err);
        });
    }
  }, [id]);

  const handleChange = (e) => {
    setTemplate({
      ...template,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    setLoading(true);
    const request = id
      ? axios.put(`${BASE_URL}/api/templates/${id}`, template)
      : axios.post(`${BASE_URL}/api/templates`, template);

    request
      .then(res => {
        console.log('Template saved' , res.data);
        navigate('/');  
      })
      .catch(err => {
        console.error('Error saving template:', err);
        setLoading(false);
      });
  };

  return (
    <div className="editor-container">
      <h2>{id ? 'Edit' : 'Create'} Template</h2>
      <input
        type="text"
        name="name"
        value={template.name || ""}
        onChange={handleChange}
        placeholder="Template Name"
      />
      <textarea
        name="content"
        value={template.content || ""}
        onChange={handleChange}
        placeholder="Template Content"
      />
      <select name="type" value={template.type} onChange={handleChange}>
        <option value="library">Library</option>
        <option value="user-created">User-Created</option>
      </select>
      <button onClick={handleSave} disabled={loading}>Save</button>
      <button onClick={() => navigate('/')}>Cancel</button> 
    </div>
  );
};

export default TemplateEditor;
