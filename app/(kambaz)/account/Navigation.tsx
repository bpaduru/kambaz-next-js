"use client";
import Link from "next/link";
import { useAccountContext } from "./AccountContext";

export default function AccountNavigation() {
    const { currentUser } = useAccountContext();
    const links = currentUser
        ? (["profile"] as const)
        : (["signin", "signup"] as const);

    return (
        <div id="wd-account-navigation" className="flex flex-col gap-1">
            {links.map((link) => (
                <Link
                    key={link}
                    href={`/account/${link}`}
                    className="rounded px-2 py-1 text-sm text-red-700 no-underline"
                >
                    {link === "signin" ? "Signin" : link === "signup" ? "Signup" : "Profile"}
                </Link>
            ))}
        </div>
    );
}