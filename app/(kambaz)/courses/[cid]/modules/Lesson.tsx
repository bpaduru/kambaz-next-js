import { ReactNode } from "react";

export default function Lesson({
                                   title,
                                   children,
                               }: {
    title: string;
    children?: ReactNode;
}) {
    return (
        <li className="border-b border-gray-200 p-2 last:border-b-0">
            <div className="font-medium">{title}</div>
            {children && (
                <ul className="m-0 mt-1 list-disc pl-6 text-sm text-gray-700">
                    {children}
                </ul>
            )}
        </li>
    );
}