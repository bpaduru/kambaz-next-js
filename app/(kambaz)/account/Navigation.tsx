import Link from "next/link";

export default function AccountNavigation() {
    return (
        <div id="wd-account-navigation" className="flex flex-col gap-1">
            <Link href="signin" className="rounded px-2 py-1 text-sm text-red-700 no-underline">
                Signin
            </Link>
            <Link href="signup" className="rounded px-2 py-1 text-sm text-red-700 no-underline">
                Signup
            </Link>
            <Link href="profile" className="rounded px-2 py-1 text-sm text-red-700 no-underline">
                Profile
            </Link>
        </div>
    );
}