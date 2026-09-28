import Link from "next/link";

export default function Signup() {
    return (
        <div id="wd-signup-screen">
            <h3>Sign up</h3>
            <input placeholder="username" /><br />
            <input placeholder="password" type="password" /><br />
            <input placeholder="verify password" type="password" /><br />
            <Link href="profile"> Sign up </Link><br />
            <Link href="signin"> Sign in </Link>
        </div>
    );
}