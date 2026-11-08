"use client";
import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { emptyAssignment, useAssignmentsStore } from "../../../../store/assignmentsStore";

export default function AssignmentEditor() {
    const { cid, aid } = useParams();
    const router = useRouter();
    const findAssignment = useAssignmentsStore((state) => state.findAssignment);
    const addAssignment = useAssignmentsStore((state) => state.addAssignment);
    const updateAssignment = useAssignmentsStore((state) => state.updateAssignment);

    const isNew = aid === "new";
    const existing = !isNew ? findAssignment(String(aid)) : undefined;
    const [assignment, setAssignment] = useState(
        existing ?? { ...emptyAssignment, course: String(cid) },
    );

    const save = () => {
        if (isNew) {
            addAssignment(assignment);
        } else {
            updateAssignment(assignment);
        }
        router.push(`/courses/${cid}/assignments`);
    };

    return (
        <div id="wd-assignments-editor" className="max-w-2xl">
            <label htmlFor="wd-name" className="mb-1 block text-sm font-medium">Assignment Name</label>
            <input
                id="wd-name"
                value={assignment.title}
                onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
                className="mb-4 w-full rounded border border-gray-300 p-2"
            />
            <label className="mb-1 block text-sm font-medium">Description</label>
            <textarea
                id="wd-description"
                rows={5}
                value={assignment.description}
                onChange={(e) => setAssignment({ ...assignment, description: e.target.value })}
                className="mb-4 w-full rounded border border-gray-300 p-2"
            />
            <div className="mb-4 flex items-center gap-3">
                <label htmlFor="wd-points" className="text-sm font-medium">Points</label>
                <input
                    id="wd-points"
                    type="number"
                    value={assignment.points}
                    onChange={(e) => setAssignment({ ...assignment, points: Number(e.target.value) })}
                    className="w-24 rounded border border-gray-300 p-2"
                />
            </div>
            <div className="mb-4 flex items-center gap-3">
                <label htmlFor="wd-due-date" className="text-sm font-medium">Due</label>
                <input
                    id="wd-due-date"
                    type="date"
                    value={assignment.due}
                    onChange={(e) => setAssignment({ ...assignment, due: e.target.value })}
                    className="rounded border border-gray-300 p-2"
                />
            </div>
            <div className="mb-4 flex items-center gap-3">
                <label htmlFor="wd-available-from" className="text-sm font-medium">Available from</label>
                <input
                    id="wd-available-from"
                    type="date"
                    value={assignment.available}
                    onChange={(e) => setAssignment({ ...assignment, available: e.target.value })}
                    className="rounded border border-gray-300 p-2"
                />
            </div>
            <div className="flex gap-2">
                <button type="button" onClick={save} id="wd-save" className="rounded bg-red-700 px-4 py-2 text-sm text-white">
                    Save
                </button>
                <button
                    type="button"
                    onClick={() => router.push(`/courses/${cid}/assignments`)}
                    id="wd-cancel"
                    className="rounded border border-gray-400 px-4 py-2 text-sm"
                >
                    Cancel
                </button>
            </div>
        </div>
    );
}