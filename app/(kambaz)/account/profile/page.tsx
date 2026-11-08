"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAccountContext, type User } from "../AccountContext";

export default function Profile() {
    const [profile, setProfile] = useState<User | null>(null);
    const { currentUser, setCurrentUser } = useAccountContext();
    const router = useRouter();

    useEffect(() => {
        if (!currentUser) {
            router.push("/account/signin");
            return;
        }
        setProfile(currentUser);
    }, [currentUser, router]);

    const signout = () => {
        setCurrentUser(null);
        router.push("/account/signin");
    };

    if (!profile) return null;

    return (
        <div id="wd-profile-screen" className="max-w-sm">
            <h3 className="mb-3 text-xl font-semibold">Profile</h3>
            <label htmlFor="wd-username" className="mb-1 block text-sm font-medium">Username</label>
            <input
                id="wd-username"
                className="mb-2 w-full rounded border border-gray-300 p-2"
                value={profile.username}
                onChange={(e) => setProfile({ ...profile, username: e.target.value })}
            />
            <label htmlFor="wd-password" className="mb-1 block text-sm font-medium">Password</label>
            <input
                id="wd-password"
                type="password"
                className="mb-2 w-full rounded border border-gray-300 p-2"
                value={profile.password}
                onChange={(e) => setProfile({ ...profile, password: e.target.value })}
            />
            <label htmlFor="wd-first-name" className="mb-1 block text-sm font-medium">First name</label>
            <input
                id="wd-first-name"
                className="mb-2 w-full rounded border border-gray-300 p-2"
                value={profile.firstName}
                onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}
            />
            <label htmlFor="wd-last-name" className="mb-1 block text-sm font-medium">Last name</label>
            <input
                id="wd-last-name"
                className="mb-2 w-full rounded border border-gray-300 p-2"
                value={profile.lastName}
                onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}
            />
            <label htmlFor="wd-email" className="mb-1 block text-sm font-medium">Email</label>
            <input
                id="wd-email"
                className="mb-2 w-full rounded border border-gray-300 p-2"
                value={profile.email}
                onChange={(e) => setProfile({ ...profile, email: e.target.value })}
            />
            <label htmlFor="wd-role" className="mb-1 block text-sm font-medium">Role</label>
            <select
                id="wd-role"
                className="mb-3 w-full rounded border border-gray-300 p-2"
                value={profile.role}
                onChange={(e) => setProfile({ ...profile, role: e.target.value as User["role"] })}
            >
                <option value="USER">User</option>
                <option value="ADMIN">Admin</option>
                <option value="FACULTY">Faculty</option>
                <option value="STUDENT">Student</option>
            </select>
            <button type="button" onClick={signout} id="wd-signout-btn" className="block w-full rounded bg-red-700 p-2 text-center text-white">
                Sign out
            </button>
        </div>
    );
}