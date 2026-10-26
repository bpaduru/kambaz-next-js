import Link from "next/link";

export default function AssignmentItem({
                                           cid,
                                           aid,
                                           title,
                                           details,
                                       }: {
    cid: string;
    aid: string;
    title: string;
    details: string;
}) {
    return (
        <li className="wd-assignment-list-item border-b border-gray-200 p-2">
            <Link
                href={`/courses/${cid}/assignments/${aid}`}
                className="wd-assignment-link text-red-700 no-underline"
            >
                {title}
            </Link>
            <div className="text-sm text-neutral-500">{details}</div>
        </li>
    );
}