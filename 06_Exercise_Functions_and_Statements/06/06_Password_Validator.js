function validatePassword(password) {
    let isValid = true;
    let messages = [];
  
    // Check password length
    if (password.length < 6 || password.length > 10) {
      isValid = false;
      messages.push("Password must be between 6 and 10 characters");
    }
  
    // Check if password consists only of letters and digits
    if (!password.match(/^[a-zA-Z0-9]+$/)) {
      isValid = false;
      messages.push("Password must consist only of letters and digits");
    }
  
    // Check if password has at least 2 digits
    let digitCount = 0;
    for (let i = 0; i < password.length; i++) {
      if (!isNaN(parseInt(password[i]))) {
        digitCount++;
      }
    }
    if (digitCount < 2) {
      isValid = false;
      messages.push("Password must have at least 2 digits");
    }
  
    if (isValid) {
      return "Password is valid";
    } else {
      return messages.join("\n");
    }
  }