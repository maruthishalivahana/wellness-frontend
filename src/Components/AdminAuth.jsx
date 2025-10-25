import React from 'react'
import { Mail, Lock } from "lucide-react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const AdminAuth = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();


        try {
            const res = await axios.post("http://localhost:5000/admin/login", {
                email,
                password,
            });

            if (!email || !password) {
                alert("Please fill all the fields");
                return;
            }
            console.log(res.data);

            if (res.data.message) {
                alert(res.data.message);
            }

            if (res.status === 200) {
                alert("Login successful!");
                navigate("/addDoctorForm");
            }
        } catch (err) {
            console.error(err);
            alert(err.response?.data?.message || "Login failed. Please try again.");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 transition-transform hover:scale-[1.02]">
                <h2 className="text-3xl font-semibold text-center mb-6 text-[#223366]">
                    Admin Login
                </h2>

                <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">
                            Email
                        </label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-3 text-gray-400" size={18} />
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="admin@example.com"
                                className="w-full pl-10 pr-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#223366]/60 transition"
                                required
                            />
                        </div>
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">
                            Password
                        </label>
                        <div className="relative">
                            <Lock className="absolute left-3 top-3 text-gray-400" size={18} />
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="••••••••"
                                className="w-full pl-10 pr-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#223366]/60 transition"
                                required
                            />
                        </div>
                    </div>

                    {/* Button */}
                    <button
                        type="submit"
                        className="w-full py-2.5 rounded-xl bg-[#223366] text-white font-semibold hover:bg-[#1b2a55] transition-all duration-200 shadow-md hover:shadow-lg"
                    >
                        Sign In
                    </button>
                </form>

                <p className="text-center text-sm text-gray-500 mt-6">
                    © {new Date().getFullYear()} Admin Dashboard
                </p>
            </div>
        </div>
    );
}

export default AdminAuth;
