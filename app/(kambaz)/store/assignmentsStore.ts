"use client";
import { create } from "zustand";
import assignmentsJson from "../database/assignments.json";

export type Assignment = (typeof assignmentsJson)[number];

const emptyAssignment: Assignment = {
    _id: "0",
    title: "New Assignment",
    course: "",
    points: 100,
    due: "2024-06-01",
    available: "2024-05-25",
    description: "New Description",
};

type AssignmentsStore = {
    assignments: Assignment[];
    addAssignment: (assignment: Assignment) => void;
    deleteAssignment: (assignmentId: string) => void;
    updateAssignment: (assignment: Assignment) => void;
    findAssignment: (assignmentId: string) => Assignment | undefined;
};

export const useAssignmentsStore = create<AssignmentsStore>((set, get) => ({
    assignments: assignmentsJson,
    addAssignment: (assignment) =>
        set((state) => ({
            assignments: [
                ...state.assignments,
                { ...emptyAssignment, ...assignment, _id: crypto.randomUUID() },
            ],
        })),
    deleteAssignment: (assignmentId) =>
        set((state) => ({
            assignments: state.assignments.filter((a) => a._id !== assignmentId),
        })),
    updateAssignment: (assignment) =>
        set((state) => ({
            assignments: state.assignments.map((a) =>
                a._id === assignment._id ? assignment : a,
            ),
        })),
    findAssignment: (assignmentId) =>
        get().assignments.find((a) => a._id === assignmentId),
}));

export { emptyAssignment };