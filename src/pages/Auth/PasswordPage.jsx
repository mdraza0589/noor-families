import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { familyPassword } from "../../data/familyData";

const PasswordPage = () => {
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = () => {
        if (password === familyPassword) {
            localStorage.setItem("family-auth", "true");
            navigate("/home");
        } else {
            setError("Incorrect Password");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-slate-900 to-indigo-900">
            <div className="bg-white p-8 rounded-xl shadow-xl w-80">
                <h1 className="text-2xl font-bold text-center mb-4">Family Access</h1>

                <input
                    type="password"
                    placeholder="Enter Password"
                    className="w-full border rounded-lg px-3 py-2 mb-3"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

                <button
                    onClick={handleSubmit}
                    className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700"
                >
                    Enter
                </button>
            </div>
        </div>
    );
};

export default PasswordPage;
