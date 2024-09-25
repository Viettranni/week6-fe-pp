import useSignup from "../hooks/useSignup";
import useField from "../hooks/useField";

const SignupComponent = ({ setIsAuthenticated }) => {
  const { handleSignup } = useSignup(setIsAuthenticated);
  const emailField = useField("email");
  const passwordField = useField("password");
  const handleSubmit = (event) => {
    event.preventDefault();
    handleSignup(emailField.value, passwordField.value);
  };
  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input {...emailField} />
        </div>
        <div>
          <label>Password:</label>
          <input {...passwordField} />
        </div>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignupComponent;
