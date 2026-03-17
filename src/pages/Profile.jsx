import { useState, useEffect } from "react";

const Profile = () => {

  const [user, setUser] = useState({
    name: "",
    email: "",
    address: ""
  });

  useEffect(() => {
    const savedUser = localStorage.getItem("userProfile");

    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const saveProfile = () => {
    localStorage.setItem("userProfile", JSON.stringify(user));
    alert("Profile saved successfully");
  };

  return (
    <div className="container">

      <h2>User Profile</h2>

      <div className="profile-form">

        <label>Name</label>
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleChange}
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
        />

        <label>Address</label>
        <textarea
          name="address"
          value={user.address}
          onChange={handleChange}
        />

        <button onClick={saveProfile}>
          Save Profile
        </button>

      </div>

    </div>
  );
};

export default Profile;