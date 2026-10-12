export default function CourseStatus() {
    return (
        <div
            id="wd-course-status"
            className="hidden w-48 shrink-0 border-l border-gray-300 p-3 lg:block"
        >
            <h4 className="mb-2 text-base font-semibold">Course Status</h4>
            <div className="flex flex-col gap-2">
                <button className="rounded border border-gray-400 px-2 py-1 text-sm">
                    Unpublish
                </button>
                <button className="rounded border border-gray-400 px-2 py-1 text-sm">
                    Publish
                </button>
                <button className="rounded border border-gray-400 px-2 py-1 text-sm">
                    View Course Notifications
                </button>
            </div>
        </div>
    );
}