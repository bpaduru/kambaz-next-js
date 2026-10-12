export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor" className="max-w-2xl">
            <label htmlFor="wd-name" className="mb-1 block text-sm font-medium">
                Assignment Name
            </label>
            <input
                id="wd-name"
                defaultValue="A1 - ENV + HTML"
                className="mb-4 w-full rounded border border-gray-300 p-2"
            />
            <label className="mb-1 block text-sm font-medium">Description</label>
            <textarea
                id="wd-description"
                rows={5}
                defaultValue="The assignment is available online. Submit a link to the landing page of"
                className="mb-4 w-full rounded border border-gray-300 p-2"
            />
            <div className="flex items-center gap-3">
                <label htmlFor="wd-points" className="text-sm font-medium">
                    Points
                </label>
                <input
                    id="wd-points"
                    defaultValue={100}
                    className="w-24 rounded border border-gray-300 p-2"
                />
            </div>
            <div className="mt-4 flex gap-2">
                <button className="rounded bg-red-700 px-4 py-2 text-sm text-white">
                    Save
                </button>
                <button className="rounded border border-gray-400 px-4 py-2 text-sm">
                    Cancel
                </button>
            </div>
        </div>
    );
}