document.addEventListener('DOMContentLoaded', function() {
  // DOM Elements
  const editProfileBtn = document.getElementById('editProfileBtn');
  const cancelEditBtn = document.getElementById('cancelEditBtn');
  const saveProfileBtn = document.getElementById('saveProfileBtn');
  const profileForm = document.getElementById('profileForm');
  const formInputs = profileForm.querySelectorAll('input, select, textarea');
  
  // Original form data storage
  let originalFormData = {};
  
  // Enable edit mode
  editProfileBtn.addEventListener('click', function() {
    // Store original values
    formInputs.forEach(input => {
      originalFormData[input.id] = input.value;
    });
    
    // Enable all form fields
    formInputs.forEach(input => {
      input.disabled = false;
    });
    
    // Show cancel and save buttons
    cancelEditBtn.classList.remove('hidden');
    saveProfileBtn.classList.remove('hidden');
    
    // Hide edit button
    editProfileBtn.classList.add('hidden');
  });
  
  // Cancel edit mode
  cancelEditBtn.addEventListener('click', function() {
    // Restore original values
    formInputs.forEach(input => {
      input.value = originalFormData[input.id];
      input.disabled = true;
    });
    
    // Show edit button
    editProfileBtn.classList.remove('hidden');
    
    // Hide cancel and save buttons
    cancelEditBtn.classList.add('hidden');
    saveProfileBtn.classList.add('hidden');
  });
  
  // Save profile changes
  profileForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Here you would typically send the data to the server
    // For demonstration, we'll just disable the form again
    
    // Disable all form fields
    formInputs.forEach(input => {
      input.disabled = true;
    });
    
    // Show success message (in a real app, you'd want to verify the server response first)
    alert('Profile updated successfully!');
    
    // Show edit button
    editProfileBtn.classList.remove('hidden');
    
    // Hide cancel and save buttons
    cancelEditBtn.classList.add('hidden');
    saveProfileBtn.classList.add('hidden');
  });
  
  // Change password button functionality
  const changePasswordBtn = document.querySelector('button:contains("Change Password")');
  if (changePasswordBtn) {
    changePasswordBtn.addEventListener('click', function() {
      // In a real app, this would open a modal or redirect to a password change page
      alert('Password change functionality would open here');
    });
  }
  
  // Enable 2FA button functionality
  const enable2faBtn = document.querySelector('button:contains("Enable 2FA")');
  if (enable2faBtn) {
    enable2faBtn.addEventListener('click', function() {
      // In a real app, this would open a 2FA setup process
      alert('Two-factor authentication setup would begin here');
    });
  }
});
