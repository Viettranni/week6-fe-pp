import useLogin from "../hooks/useLogin";
import useField from "../hooks/useField";

const LoginComponent = ({ setIsAuthenticated }) => {
  const emailField = useField("email");
  const passwordField = useField("password");
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { handleLogin } = useLogin(setIsAuthenticated);
  const handleSubmit = (event) => {
    event.preventDefault();
    handleLogin(emailField.value, passwordField.value);
  };
  return (
    <div>
      <h2>Login</h2>
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

export default LoginComponent;
