import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../styles/templateList.css';
import BASE_URL from '../config';

const TemplateList = () => {
  const [templates, setTemplates] = useState([]);
  const [activeTab, setActiveTab] = useState('library');

  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/templates`)
      .then((res) => setTemplates(res.data))
      .catch((err) => console.error(err));
  }, []);

  const filteredTemplates = templates.filter((template) => template.type === activeTab);

  return (
    <div>
      <nav className="navbar">
        <div className="nav-left">
          <button
            onClick={() => setActiveTab('library')}
            className={activeTab === 'library' ? 'active' : ''}
          >
            Template Library
          </button>
          <button
            onClick={() => setActiveTab('user-created')}
            className={activeTab === 'user-created' ? 'active' : ''}
          >
            Saved Templates
          </button>
        </div>
        <div className="nav-right">
          <Link to="/create" className="create-btn">
            Create 
          </Link>
        </div>
      </nav>

      <div className="template-list">
        <div className="cards">
          {filteredTemplates.map((template) => (
            <div key={template._id} className="card">
              <h3>{template.name}</h3>
              <p>{template.content.slice(0, 50)}...</p>
              <span>{new Date(template.creationDate).toLocaleDateString()}</span>
              <Link to={`/edit/${template._id}`} className="edit-btn">
                Edit
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TemplateList;
