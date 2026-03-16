import { useState } from "react";

function Education() {
  const [isEditing, setIsEditing] = useState(true);
  const [edu, setEdu] = useState({
    school: "",
    title: "",
    date: "",
  });

  if (!isEditing) {
    return (
      <div className="section-container">
        <h2>Education</h2>
        <p><strong>School:</strong> {edu.school}</p>
        <p><strong>Title:</strong> {edu.title}</p>
        <p><strong>Date:</strong> {edu.date}</p>
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </div>
    );
  }

  return (
    <div className="section-container">
      <h2>Education</h2>
      <input 
        placeholder="School Name" 
        value={edu.school} 
        onChange={(e) => setEdu({...edu, school: e.target.value})} 
      />
      <input 
        placeholder="Title of Study" 
        value={edu.title} 
        onChange={(e) => setEdu({...edu, title: e.target.value})} 
      />
      <input 
        placeholder="Date" 
        value={edu.date} 
        onChange={(e) => setEdu({...edu, date: e.target.value})} 
      />
      <button onClick={() => setIsEditing(false)}>Submit</button>
    </div>
  );
}

export default Education;