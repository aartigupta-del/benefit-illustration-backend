const bcrypt = require('bcryptjs');

const plainPassword = 'admin@123';

// Generate a salt (typically 10 rounds)
bcrypt.genSalt(10, (err, salt) => {
  if (err) {
    console.error('Error generating salt:', err);
    return;
  }
  
  // Hash the password using the generated salt
  bcrypt.hash(plainPassword, salt, (err, hash) => {
    if (err) {
      console.error('Error hashing password:', err);
      return;
    }
    
    // Output the hashed password
    console.log('Plaintext Password:', plainPassword);
    console.log('Hashed Password:', hash);
  });
});
