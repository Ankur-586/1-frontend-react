import { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import "../styles/Form.css";
import LoadingIndicator from "./LoadingIndicator";

function RegisterForm({ route, method }) {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [ConfirmPassword, setPassword1] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const name = "Register";

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        if (method === "register" && password !== ConfirmPassword) {
            setError("Passwords do not match");
            setLoading(false);
            return;
        }

        try {
            const data = method === "register"
                ? {
                    email,
                    username,
                    password,
                    password2: ConfirmPassword,
                    first_name: firstName, // Match backend field
                    last_name: lastName,   // Match backend field
                }
                : {
                    username,
                    password
                };

            const res = await api.post(route, data);

            if (res.status === 201) {
                navigate("/login");
            } else {
                setError(res.data?.detail || "An error occurred. Please try again.");
            }
        } catch (error) {
            // Check if the error response exists
            if (error.response && error.response.data) {
                const backendErrors = error.response.data;
                // Format the error messages
                const errorMessages = Object.values(backendErrors).flat().join(", ");
                setError(errorMessages || "An error occurred. Please try again.");
            } else {
                setError("An error occurred. Please try again.");
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="form-container">
            <h1>{name}</h1>
            {error && <div className="error-message">{error}</div>}
            <input
                className="form-input"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required={method === "register"}
            />
            <input
                className="form-input"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                required
            />
            <input
                className="form-input"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First Name"
                required={method === "register"}
            />
            <input
                className="form-input"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last Name"
                required={method === "register"}
            />
            <input
                className="form-input"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
            />
            <input
                className="form-input"
                type="password"
                value={ConfirmPassword}
                onChange={(e) => setPassword1(e.target.value)}
                placeholder="Confirm Password"
                required={method === "register"}
            />
            {loading && <LoadingIndicator />}
            <button className="form-button" type="submit" disabled={loading}>
                {name}
            </button>
        </form>
    );
}

export default RegisterForm;
