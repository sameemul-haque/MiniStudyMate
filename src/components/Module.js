import React, { useEffect, useState } from "react";
import data from "../data/module.json";
import Topics from "./Topics";
import "../css/module.css";

function Module({modules}) {
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
      {modules.map((module) => (
        <div key={module.id} className="module-wrapper">
          {" "}
          {}
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
            <Topics topics = {module.topics}/>
          )}
        </div>
      ))}
    </div>
  );
}

export default Module;
