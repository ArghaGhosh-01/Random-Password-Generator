import React, { useState } from 'react';

const generateRandomPassword = (length) => {
  const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }
  return password;
};

const PasswordGenerator = () => {
  const [passwordLength, setPasswordLength] = useState(8);
  const [generatedPassword, setGeneratedPassword] = useState("");

  const handleGeneratePassword = () => {
    const password = generateRandomPassword(passwordLength);
    setGeneratedPassword(password);
  };

  return (
    <div>
      <h1>Random Password Generator</h1>
      <label>
        Password Length:
        <input className='input'
          type="number"
          value={passwordLength}
          onChange={(e) => setPasswordLength(e.target.value)}
          min="1"
        />
      </label>
      <button onClick={handleGeneratePassword}>Generate Password</button>
      {generatedPassword && (
        <div>
          <h2>Generated Password:</h2>
          <input
            type="text"
            value={generatedPassword}
            readOnly
          />
        </div>
      )}
    </div>
  );
};

export default PasswordGenerator;
