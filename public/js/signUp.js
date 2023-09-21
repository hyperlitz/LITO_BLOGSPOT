const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#username-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (username && password) {
    if (password.length < 6) {
      // Display a SweetAlert error message
      Swal.fire({
        icon: 'error',
        title: 'Password Length Error',
        text: 'Password must be at least 6 characters long.',
      });
      return; // Prevent the request from being sent
    }

    try {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        // Display a SweetAlert success message
        Swal.fire({
          icon: 'success',
          title: 'Sign Up Success',
          text: 'You have successfully signed up!',
        });

        // Redirect to the dashboard upon successful signup
        document.location.replace('/dashboard');
      } else {
        const errorData = await response.json();
        console.error('Failed to sign up:', errorData);

        // Display a SweetAlert error message
        Swal.fire({
          icon: 'error',
          title: 'Sign Up Error',
          text: errorData.message || 'An error occurred.',
        });
      }
    } catch (err) {
      console.error('An error occurred during signup:', err);

      // Display a SweetAlert error message
      Swal.fire({
        icon: 'error',
        title: 'An Error Occurred',
        text: 'An error occurred during signup. Please try again later.',
      });
    }
  }
};

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);
