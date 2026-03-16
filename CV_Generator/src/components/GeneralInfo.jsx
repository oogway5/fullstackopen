import { useState } from "react";

function GeneralInfo() {
  const [isEditing, setIsEditing] = useState(true);
  const [info, setInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };

  if (!isEditing) {
    return (
      <div className="section-container">
        <h2>General Information</h2>
        <p>
          <strong>Name:</strong> {info.name}
        </p>
        <p>
          <strong>Email:</strong> {info.email}
        </p>
        <p>
          <strong>Phone:</strong> {info.phone}
        </p>
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </div>
    );
  }

  return (
    <div className="section-container">
      <h2>General Information</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setIsEditing(false);
        }}
      >
        <input
          name="name"
          placeholder="Name"
          value={info.name}
          onChange={handleChange}
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={info.email}
          onChange={handleChange}
        />
        <input
          name="phone"
          placeholder="Phone"
          value={info.phone}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default GeneralInfo;
