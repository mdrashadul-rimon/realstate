// pages/LoginPage.js

import LoginForm from '../components/LoginForm';

const LoginPage = () => {
  const handleSubmit = (formData) => {
    // Here you can handle form submission, e.g., send data to your backend for authentication
    console.log('Form submitted with data:', formData);
  };

  return (
    <div>
      <h1>Login Page</h1>
      <LoginForm onSubmit={handleSubmit} />
    </div>
  );
};

export default LoginPage;
