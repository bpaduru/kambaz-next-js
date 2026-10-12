import Link from "next/link";
import { AiOutlineHome } from "react-icons/ai";
import { LiaBookSolid } from "react-icons/lia";
import { FaRegMessage, FaVideo } from "react-icons/fa6";
import { MdOutlineAssignment } from "react-icons/md";
import { BsFileText } from "react-icons/bs";
import { FaRegAddressBook } from "react-icons/fa";

export default function CourseNavigation() {
    return (
        <div
            id="wd-courses-navigation"
            className="w-40 shrink-0 border-r border-gray-300 bg-gray-50"
        >
            <Link
                href="/courses/1234/home"
                className="flex items-center gap-2 border-b border-gray-200 px-3 py-2 text-sm text-red-700 no-underline"
            >
                <AiOutlineHome /> Home
            </Link>
            <Link
                href="/courses/1234/modules"
                className="flex items-center gap-2 border-b border-gray-200 px-3 py-2 text-sm text-red-700 no-underline"
            >
                <LiaBookSolid /> Modules
            </Link>
            <Link
                href="/courses/1234/piazza"
                className="flex items-center gap-2 border-b border-gray-200 px-3 py-2 text-sm text-red-700 no-underline"
            >
                <FaRegMessage /> Piazza
            </Link>
            <Link
                href="/courses/1234/zoom"
                className="flex items-center gap-2 border-b border-gray-200 px-3 py-2 text-sm text-red-700 no-underline"
            >
                <FaVideo /> Zoom
            </Link>
            <Link
                href="/courses/1234/assignments"
                className="flex items-center gap-2 border-b border-gray-200 px-3 py-2 text-sm text-red-700 no-underline"
            >
                <MdOutlineAssignment /> Assignments
            </Link>
            <Link
                href="/courses/1234/quizzes"
                className="flex items-center gap-2 border-b border-gray-200 px-3 py-2 text-sm text-red-700 no-underline"
            >
                <BsFileText /> Quizzes
            </Link>
            <Link
                href="/courses/1234/grades"
                className="flex items-center gap-2 border-b border-gray-200 px-3 py-2 text-sm text-red-700 no-underline"
            >
                <BsFileText /> Grades
            </Link>
            <Link
                href="/courses/1234/people/table"
                className="flex items-center gap-2 px-3 py-2 text-sm text-red-700 no-underline"
            >
                <FaRegAddressBook /> People
            </Link>
        </div>
    );
}