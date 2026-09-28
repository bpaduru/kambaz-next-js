import Link from "next/link";

export default function Signin() {
    return (
        <div id="wd-signin-screen">
            <h3>Sign in</h3>
            <input placeholder="username" /> <br />
            <input placeholder="password" type="password" />
            <br />
            <Link href="/dashboard" id="wd-signin-btn"> Sign in </Link> <br />
            <Link href="signup"> Sign up </Link>
        </div>
    );
}