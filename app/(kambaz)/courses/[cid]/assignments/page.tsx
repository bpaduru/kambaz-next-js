export default function Assignments() {
    return (
        <div id="wd-assignments">
            <div className="mb-3 flex gap-2">
                <input
                    placeholder="Search for Assignments"
                    id="wd-search-assignment"
                    className="flex-1 rounded border border-gray-300 p-2 text-sm"
                />
                <button id="wd-add-assignment-group" className="rounded border border-gray-400 px-3 py-2 text-sm">
                    + Group
                </button>
                <button id="wd-add-assignment" className="rounded bg-red-700 px-3 py-2 text-sm text-white">
                    + Assignment
                </button>
            </div>
            <div className="rounded border border-gray-300">
                <h3 id="wd-assignments-title" className="border-b border-gray-300 bg-gray-100 p-2 font-semibold">
                    ASSIGNMENTS 40% of Total
                </h3>
                <ul id="wd-assignment-list" className="m-0 list-none p-0">
                    <li className="wd-assignment-list-item border-b border-gray-200 p-2">
                        <a
                            href="/courses/1234/assignments/123"
                            className="wd-assignment-link text-red-700 no-underline"
                        >
                            A1 - ENV + HTML
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}