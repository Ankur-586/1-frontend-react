import { useState } from "react";
import LoginForm from "../components/LoginForm";

function Login() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLoginSuccess = () => {
        setIsLoggedIn(true);  // Update the login state
    };

    return <LoginForm route="/api/token/" method="login" onLoginSuccess={handleLoginSuccess} />;
}

export default Login;