import React, { useEffect, useState } from "react";
import "../css/module.css";

export default function Topics({ topics }) {
  const [selectedModule, setSelectedModule] = useState(null);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [data, setdata] = useState();
  const handleModuleClick = (module) => {
    setSelectedModule(module === selectedModule ? null : module);
  };

  const handleTopicClick = (topic) => {
    setSelectedTopic(topic === selectedTopic ? null : topic);
  };

  useEffect(() => {
    Promise.all(topics)
      .then((results) => {
        setdata(results);
      })
      .catch((error) => {
        // Handle the error
        console.error(error);
      });
  }, [topics]);
  return (
    <div className="topics">
      {data &&
        data.map((topic) => (
          <div key={topic.id} className="topic">
            <h4 onClick={() => handleTopicClick(topic)}>{topic.name}</h4>
            {topic === selectedTopic && (
              <ul className="topicul">
                {topic.videos ? (
                  topic.videos.map((video) => {
                    return (
                      <li className="topicli" key={video.id}>
                        <a href={`https://www.youtube.com/watch?v=${video.id}`}>
                          <div className="video-details">
                            <div className="video-thumbnail">
                              <img
                                src={video.thumbnails.url}
                                alt={video.title}
                              />
                            </div>
                            <div className="video-info">
                              <p>{video.title}</p>
                              <span>{video.views} views</span>
                            </div>
                          </div>
                        </a>
                      </li>
                    );
                  })
                ) : (
                  <div>Loading...</div>
                )}
              </ul>
            )}
          </div>
        ))}
    </div>
  );
}
