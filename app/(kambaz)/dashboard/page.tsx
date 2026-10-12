import CourseCard from "./CourseCard";

export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1>
            <hr />
            <h2 id="wd-dashboard-published">Published Courses (3)</h2>
            <hr />
            <div id="wd-dashboard-courses" className="flex flex-wrap -mx-2">
                <CourseCard
                    id="1234"
                    name="CS1234 React JS"
                    description="Full Stack software developer"
                    image="/images/reactjs.jpg"
                />
                <CourseCard
                    id="5678"
                    name="CS5678 Next.js"
                    description="Full Stack Web Development"
                    image="/images/nextjs.jpg"
                />
                <CourseCard
                    id="9012"
                    name="CS9012 MongoDB"
                    description="Database Design and Applications"
                    image="/images/mongodb.jpg"
                />
            </div>
        </div>
    );
}