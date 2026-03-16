import { useState } from "react";

function Experience() {
  const [isEditing, setIsEditing] = useState(true);
  const [exp, setExp] = useState({
    company: "",
    position: "",
    responsibilities: "",
    from: "",
    until: "",
  });

  return (
    <div className="section-container">
      <h2>Practical Experience</h2>
      {isEditing ? (
        <div className="edit-mode">
          <input
            placeholder="Company Name"
            value={exp.company}
            onChange={(e) => setExp({ ...exp, company: e.target.value })}
          />
          <input
            placeholder="Position Title"
            value={exp.position}
            onChange={(e) => setExp({ ...exp, position: e.target.value })}
          />
          <textarea
            placeholder="Main Responsibilities"
            value={exp.responsibilities}
            onChange={(e) =>
              setExp({ ...exp, responsibilities: e.target.value })
            }
          />
          <input
            placeholder="From (Date)"
            value={exp.from}
            onChange={(e) => setExp({ ...exp, from: e.target.value })}
          />
          <input
            placeholder="Until (Date)"
            value={exp.until}
            onChange={(e) => setExp({ ...exp, until: e.target.value })}
          />
          <button onClick={() => setIsEditing(false)}>Submit</button>
        </div>
      ) : (
        <div className="display-mode">
          <p>
            <strong>Company:</strong> {exp.company}
          </p>
          <p>
            <strong>Position:</strong> {exp.position}
          </p>
          <p>
            <strong>Responsibilities:</strong> {exp.responsibilities}
          </p>
          <p>
            <strong>Period:</strong> {exp.from} - {exp.until}
          </p>
          <button className="edit-btn" onClick={() => setIsEditing(true)}>
            Edit
          </button>
        </div>
      )}
    </div>
  );
}

export default Experience;
