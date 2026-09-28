import Link from "next/link";
import Image from "next/image";

export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (3)</h2> <hr />
            <div id="wd-dashboard-courses">
                <div className="wd-dashboard-course">
                    <Link href="/courses/1234/home" className="wd-dashboard-course-link">
                        <Image src="/images/reactjs.jpg" width={200} height={150} alt="React JS" />
                        <div>
                            <h5>CS1234 React JS</h5>
                            <p className="wd-dashboard-course-title">
                                Full Stack software developer
                            </p>
                            <button>Go</button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link href="/courses/5678/home" className="wd-dashboard-course-link">
                        <Image src="/images/nextjs.jpg" width={200} height={150} alt="Next JS" />
                        <div>
                            <h5>CS5678 Next.js</h5>
                            <p className="wd-dashboard-course-title">
                                Full Stack Web Development
                            </p>
                            <button>Go</button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link href="/courses/9012/home" className="wd-dashboard-course-link">
                        <Image src="/images/mongodb.jpg" width={200} height={150} alt="MongoDB" />
                        <div>
                            <h5>CS9012 MongoDB</h5>
                            <p className="wd-dashboard-course-title">
                                Database Design and Applications
                            </p>
                            <button>Go</button>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}