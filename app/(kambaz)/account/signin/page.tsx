import Link from "next/link";

export default function Signin() {
    return (
        <div id="wd-signin-screen" className="max-w-sm">
            <h3 className="mb-3 text-xl font-semibold">Sign in</h3>
            <input
                placeholder="username"
                className="mb-2 w-full rounded border border-gray-300 p-2"
            />
            <input
                placeholder="password"
                type="password"
                className="mb-3 w-full rounded border border-gray-300 p-2"
            />
            <Link
                href="/dashboard"
                id="wd-signin-btn"
                className="block w-full rounded bg-red-700 p-2 text-center text-white no-underline"
            >
                Sign in
            </Link>
            <Link href="signup" id="wd-signup-link" className="mt-2 block text-center text-sm text-red-700 no-underline">
                Sign up
            </Link>
        </div>
    );
}