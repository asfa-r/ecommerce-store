import { useState } from "react";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});

    function handleSubmit(event) {
        event.preventDefault();

        const newErrors = {};

        if (!email) {
            newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            newErrors.email = "Please enter a complete and valid email address";
        }
        if (!password) {
            newErrors.password = "Password is required";
        } else if (password.length < 6) {
            newErrors.password =
                "Password must be at least 6 characters";
        } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
            newErrors.password =
                "Password must contain at least one special character";
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            alert("Login form submitted successfully!");

            setEmail("");
            setPassword("");
        }
    }

    return (
        <main>
            <div className="login-container">
                <h1>Login</h1>

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Email</label>

                        <input
                            type="text"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            placeholder="Enter your email"
                        />

                        {errors.email && (
                            <p className="form-error">{errors.email}</p>
                        )}
                    </div>

                    <div className="form-group">
                        <label>Password</label>

                        <input
                            type="password"
                            value={password}
                            onChange={(event) =>
                                setPassword(event.target.value)
                            }
                            placeholder="Enter your password"
                        />

                        {errors.password && (
                            <p className="form-error">
                                {errors.password}
                            </p>
                        )}
                    </div>

                    <button type="submit">Login</button>
                </form>
            </div>
        </main>
    );
}

export default Login;