"use client";
import { useState } from "react";
import CourseCard from "./CourseCard";
import {
    emptyCourse,
    useCoursesStore,
    type Course,
} from "../store/coursesStore";
import { useEnrollmentsStore } from "../store/enrollmentsStore";
import { useAccountContext } from "../account/AccountContext";

export default function Dashboard() {
    const courses = useCoursesStore((state) => state.courses);
    const addCourse = useCoursesStore((state) => state.addCourse);
    const updateCourse = useCoursesStore((state) => state.updateCourse);
    const [course, setCourse] = useState<Course>(emptyCourse);
    const { currentUser } = useAccountContext();
    const enrollments = useEnrollmentsStore((state) => state.enrollments);
    const enroll = useEnrollmentsStore((state) => state.enroll);
    const unenroll = useEnrollmentsStore((state) => state.unenroll);
    const [showAllCourses, setShowAllCourses] = useState(true);

    const isEnrolled = (courseId: string) =>
        !!currentUser &&
        enrollments.some((e) => e.user === currentUser._id && e.course === courseId);

    const visibleCourses =
        currentUser && !showAllCourses
            ? courses.filter((c) => isEnrolled(c._id))
            : courses;

    return (
        <div id="wd-dashboard">
            <div className="flex items-center justify-between">
                <h1 id="wd-dashboard-title">Dashboard</h1>
                {currentUser && (
                    <button
                        type="button"
                        id="wd-enrollments-toggle"
                        className="rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white"
                        onClick={() => setShowAllCourses(!showAllCourses)}
                    >
                        Enrollments
                    </button>
                )}
            </div>
            <hr />
            <h5 className="flex flex-wrap items-center gap-2">
                New Course
                <button type="button" className="rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white" id="wd-add-new-course-click" onClick={() => addCourse(course)}>
                    Add
                </button>
                <button type="button" className="rounded bg-yellow-400 px-3 py-1.5 text-sm font-medium" id="wd-update-course-click" onClick={() => updateCourse(course)}>
                    Update
                </button>
            </h5>
            <input className="mb-2 mt-2 block w-full max-w-xl rounded border border-neutral-300 px-3 py-1.5" value={course.name} onChange={(e) => setCourse({ ...course, name: e.target.value })} id="wd-course-name" />
            <textarea className="mb-2 block w-full max-w-xl rounded border border-neutral-300 px-3 py-1.5" rows={3} value={course.description} onChange={(e) => setCourse({ ...course, description: e.target.value })} id="wd-course-description" />
            <input className="mb-2 block w-full max-w-xl rounded border border-neutral-300 px-3 py-1.5" value={course.number} onChange={(e) => setCourse({ ...course, number: e.target.value })} id="wd-course-number" placeholder="Course number" />
            <input type="date" className="mb-3 block w-full max-w-xl rounded border border-neutral-300 px-3 py-1.5" value={course.startDate} onChange={(e) => setCourse({ ...course, startDate: e.target.value })} id="wd-course-start-date" />
            <hr />
            <h2 id="wd-dashboard-published">Published Courses ({visibleCourses.length})</h2>
            <hr />
            <div id="wd-dashboard-courses" className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
                {visibleCourses.map((c) => (
                    <div key={c._id} className="flex flex-col gap-2">
                        <CourseCard course={c} onEdit={() => setCourse(c)} />
                        {currentUser && (
                            <button
                                type="button"
                                className={
                                    isEnrolled(c._id)
                                        ? "rounded bg-red-600 px-3 py-1 text-sm font-medium text-white"
                                        : "rounded bg-green-600 px-3 py-1 text-sm font-medium text-white"
                                }
                                onClick={() =>
                                    isEnrolled(c._id)
                                        ? unenroll(currentUser._id, c._id)
                                        : enroll(currentUser._id, c._id)
                                }
                            >
                                {isEnrolled(c._id) ? "Unenroll" : "Enroll"}
                            </button>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}