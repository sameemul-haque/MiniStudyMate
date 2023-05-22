import React, { useState } from "react";
import data from "../data/module.json";
import "../css/module.css";

function Module() {
  const [selectedModule, setSelectedModule] = useState(null);
  const [selectedTopic, setSelectedTopic] = useState(null);

  const handleModuleClick = (module) => {
    setSelectedModule(module === selectedModule ? null : module);
  };

  const handleTopicClick = (topic) => {
    setSelectedTopic(topic === selectedTopic ? null : topic);
  };

  return (
    <div className="module-container">
      {data.modules.map((module) => (
        <div key={module.id}>
          <button
            className="module-button"
            onClick={() => handleModuleClick(module)}
            style={{
              fontWeight: module === selectedModule ? "bold" : "normal",
            }}
          >
            {module.name}
          </button>
          {module === selectedModule && (
            <div className="topics">
              {module.topics.map((topic) => (
                <div key={topic.id} className="topic">
                  <h4 onClick={() => handleTopicClick(topic)}>{topic.name}</h4>
                  {topic === selectedTopic && (
                    <ul>
                      {topic.videos.map((video) => (
                        <li key={video.id}>
                          <a href={video.url}>
                            <div className="video-details">
                              {video.title}
                              <span>{video.views} views</span>
                              <div className="video-thumbnail">
                                <img src={video.thumbnail} alt={video.title} />
                              </div>
                            </div>
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
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
