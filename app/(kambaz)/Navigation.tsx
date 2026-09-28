import Link from "next/link";

export default function KambazNavigation() {
    return (
        <div id="wd-kambaz-navigation">
            <a href="https://www.northeastern.edu/" target="_blank" rel="noreferrer">Northeastern</a><br />
            <Link href="/account">Account</Link><br />
            <Link href="/dashboard">Dashboard</Link><br />
            <Link href="/dashboard">Courses</Link><br />
            <Link href="/calendar">Calendar</Link><br />
            <Link href="/inbox">Inbox</Link><br />
            <Link href="/labs">Labs</Link><br />
        </div>
    );
}