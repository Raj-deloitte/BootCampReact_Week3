import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import text from "../mockData/Assesment.json";
import "./Assessment.css";

const Assessment = () => {
  const [activeKey, setActiveKey] = useState(null);
  const handleAccordionToggle = (eventKey) => {
    setActiveKey(activeKey === eventKey ? null : eventKey);
  };
  return (
    <div className="accordion_section">
      <h2>Assessments</h2>
      <Accordion
        activeKey={activeKey}
        onSelect={handleAccordionToggle}
        className="accord"
      >
        {text.map((item, i) => (
          <Accordion.Item
            className="accordion_item"
            eventKey={i.toString()}
            key={i}
          >
            <div className="accordion_header">
              <div className="header_content">
              <Accordion.Header>{item.topic}</Accordion.Header>
                <span className="lock_icon">
                  <i class="fa-solid fa-lock"></i>
                </span>
              </div>
            </div>
            <Accordion.Body>{item.brief}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
};

export default Assessment;
