import React, { useState } from 'react';
import data from '../data/module.json';
import '../css/module.css'

function Module() {
  const [selectedModule, setSelectedModule] = useState(null);

  const handleModuleClick = (module) => {
    setSelectedModule(module === selectedModule ? null : module);
  };

  return (
    <div>
      {data.modules.map((module) => (
        <div key={module.id}>
          <button
            className="module-button"
            onClick={() => handleModuleClick(module)}
            style={{ fontWeight: module === selectedModule ? 'bold' : 'normal' }}
          >
            {module.name}
          </button>
          {module === selectedModule && (
            <div className="topics">
              <h3>Topics</h3>
              {module.topics.map((topic) => (
                <div key={topic.id} className="topic">
                  <h4>{topic.name}</h4>
                  <p>{topic.description}</p>
                  <ul>
                    {topic.videos.map((video) => (
                      <li key={video.id}>
                        <a href={video.url}>{video.title}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Module;
