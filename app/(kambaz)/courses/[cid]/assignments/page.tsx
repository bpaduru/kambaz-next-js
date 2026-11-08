"use client";
import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { FaPlus, FaSearch, FaTrash } from "react-icons/fa";
import { useAssignmentsStore } from "../../../store/assignmentsStore";

export default function Assignments() {
    const { cid } = useParams();
    const router = useRouter();
    const assignments = useAssignmentsStore((state) => state.assignments);
    const deleteAssignment = useAssignmentsStore((state) => state.deleteAssignment);
    const courseAssignments = assignments.filter((a) => a.course === cid);
    const [confirmId, setConfirmId] = useState<string | null>(null);

    return (
        <div id="wd-assignments">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                <div className="relative">
                    <FaSearch className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-neutral-500" />
                    <input placeholder="Search for Assignments" id="wd-search-assignment" className="rounded border py-1.5 pr-3 pl-9 text-sm" />
                </div>
                <button
                    id="wd-add-assignment"
                    type="button"
                    className="inline-flex items-center gap-1 rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
                    onClick={() => router.push(`/courses/${cid}/assignments/new`)}
                >
                    <FaPlus /> Assignment
                </button>
            </div>
            <h3 id="wd-assignments-title" className="mb-3 rounded bg-neutral-200 p-3 text-lg">
                ASSIGNMENTS 40% of Total
            </h3>
            <ul id="wd-assignment-list" className="m-0 list-none p-0">
                {courseAssignments.map((assignment) => (
                    <li key={assignment._id} className="wd-assignment-list-item flex items-center justify-between border-b border-gray-200 p-2">
                        <button
                            type="button"
                            className="wd-assignment-link bg-transparent p-0 text-left text-red-700 underline"
                            onClick={() => router.push(`/courses/${cid}/assignments/${assignment._id}`)}
                        >
                            {assignment.title}
                        </button>
                        <button
                            type="button"
                            className="rounded bg-red-600 px-2 py-0.5 text-sm text-white"
                            onClick={() => setConfirmId(assignment._id)}
                        >
                            <FaTrash />
                        </button>
                    </li>
                ))}
            </ul>
            {confirmId && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
                    <div className="w-full max-w-sm rounded-lg bg-white p-4 shadow-lg">
                        <p className="mb-4">Are you sure you want to remove this assignment?</p>
                        <div className="flex justify-end gap-2">
                            <button type="button" className="rounded border px-3 py-1.5 text-sm" onClick={() => setConfirmId(null)}>
                                No
                            </button>
                            <button
                                type="button"
                                className="rounded bg-red-600 px-3 py-1.5 text-sm text-white"
                                onClick={() => {
                                    deleteAssignment(confirmId);
                                    setConfirmId(null);
                                }}
                            >
                                Yes
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}