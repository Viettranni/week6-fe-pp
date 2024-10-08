import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useSignup = function (setIsAuthenticated) {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (email, password, password2) => {
    try {
      if (password === password2) {


        const response = await fetch("api/users/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
          const user = await response.json();
          sessionStorage.setItem("user", JSON.stringify(user));
          console.log("User signed up successfully!");
          setIsAuthenticated(true);
          navigate("/");
        } else {
          console.error("Signup failed");
        }
      }
      else {
        console.log("Password do not match")
      }
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };

  return {
    // email,
    // setEmail,
    // password,
    // setPassword,
    handleSignup,
  };
};

export default useSignup;
