import React, { useState } from 'react';

const Profile = ({ user, onUpdatePassword }) => {
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleChangePassword = () => {
    if (newPassword.trim() === '') {
      setMessage('Please enter a new password.');
      return;
    }
    onUpdatePassword(newPassword); // Update password via prop function
    setMessage('Password updated successfully.');
    setNewPassword('');
  };

  return (
    <div>
      <h2>Profile</h2>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>Username: {user.username}</p>
      <div>
        <label>New Password:</label>
        <input
          type="password"
          placeholder="Enter new password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <button onClick={handleChangePassword}>Change Password</button>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Profile;
