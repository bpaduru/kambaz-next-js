import Link from "next/link";

export default function TOC() {
    return (
        <>
            <p>Web development Labs</p>
            <ul>
                <li>
                    <Link href="/labs">Home</Link>
                </li>
                <li>
                    <Link href="/labs/lab1">Lab 1</Link>
                </li>
                <li>
                    <Link href="/labs/lab2">Lab 2</Link>
                </li>
                <li>
                    <Link href="/labs/lab3">Lab 3</Link>
                </li>
                <li>
                    <Link href="/book/ch1" id="wd-toc-book-link">
                        Chapter 1
                    </Link>
                </li>
            </ul>
        </>
    );
}