"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAccountContext } from "../AccountContext";

export default function Signup() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { setCurrentUser } = useAccountContext();
    const router = useRouter();

    const signup = () => {
        if (!username || !password) return;
        setCurrentUser({
            _id: crypto.randomUUID(),
            username,
            password,
            firstName: "",
            lastName: "",
            email: "",
            role: "STUDENT",
            loginId: "",
            section: "",
            lastActivity: "",
            totalActivity: "",
        });
        router.push("/account/profile");
    };

    return (
        <div id="wd-signup-screen" className="max-w-sm">
            <h3 className="mb-3 text-xl font-semibold">Sign up</h3>
            <input
                id="wd-username"
                placeholder="username"
                className="mb-2 w-full rounded border border-gray-300 p-2"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                id="wd-password"
                placeholder="password"
                type="password"
                className="mb-3 w-full rounded border border-gray-300 p-2"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="button" onClick={signup} id="wd-signup-btn" className="block w-full rounded bg-red-700 p-2 text-center text-white">
                Sign up
            </button>
            <Link href="/account/signin" id="wd-signin-link" className="mt-2 block text-center text-sm text-red-700 no-underline">
                Sign in
            </Link>
        </div>
    );
}