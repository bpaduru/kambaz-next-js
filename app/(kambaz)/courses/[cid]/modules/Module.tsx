import { ReactNode } from "react";

export default function Module({
                                   title,
                                   children,
                               }: {
    title: string;
    children?: ReactNode;
}) {
    return (
        <div className="mb-3 rounded border border-gray-300">
            <div className="border-b border-gray-300 bg-gray-100 p-2 font-semibold">
                {title}
            </div>
            {children && <ul className="m-0 list-none p-0">{children}</ul>}
        </div>
    );
}