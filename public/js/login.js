const loginFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#username-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (username && password) {
    try {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        // Redirect to the dashboard upon successful login
        document.location.replace('/dashboard');
      } else {
        const errorData = await response.json();
        console.error('Failed to log in:', errorData);

        // Display a SweetAlert error message
        Swal.fire({
          icon: 'error',
          title: 'Login Error',
          text: errorData.message || 'An error occurred during login.',
        });
      }
    } catch (err) {
      console.error('An error occurred during login:', err);

      // Display a SweetAlert error message
      Swal.fire({
        icon: 'error',
        title: 'An Error Occurred',
        text: 'An error occurred during login. Please try again later.',
      });
    }
  }
};

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
