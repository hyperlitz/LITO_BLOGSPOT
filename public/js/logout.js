const logout = async () => {
  // Display a confirmation message using SweetAlert
  const confirmation = await Swal.fire({
    icon: 'question',
    title: 'Confirm Logout',
    text: 'Are you sure you want to log out?',
    showCancelButton: true,
    confirmButtonText: 'Yes, logout',
    cancelButtonText: 'Cancel',
  });

  if (confirmation.isConfirmed) {
    const response = await fetch('/api/users/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // Redirect to the homepage upon successful logout
      document.location.replace('/');
    } else {
      const errorData = await response.json();
      console.error('Failed to log out:', errorData);
      
      // Display a SweetAlert error message
      Swal.fire({
        icon: 'error',
        title: 'Logout Error',
        text: errorData.message || 'An error occurred during logout.',
      });
    }
  }
};

document.querySelector('#logout').addEventListener('click', logout);