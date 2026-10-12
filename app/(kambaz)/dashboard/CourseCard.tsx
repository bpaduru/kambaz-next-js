import Link from "next/link";
import Image from "next/image";

export default function CourseCard({
                                       id,
                                       name,
                                       description,
                                       image,
                                   }: {
    id: string;
    name: string;
    description: string;
    image: string;
}) {
    return (
        <div className="wd-dashboard-course w-full p-2 md:w-1/2 lg:w-1/3 xl:w-1/4">
            <div className="h-full overflow-hidden rounded-md border border-gray-300 bg-white shadow-sm">
                <Link href={`/courses/${id}/home`} className="wd-dashboard-course-link block no-underline">
                    <Image
                        src={image}
                        width={300}
                        height={160}
                        alt={name}
                        className="h-40 w-full object-cover"
                    />
                    <div className="p-3">
                        <h5 className="wd-dashboard-course-title mb-1 truncate font-semibold text-black">
                            {name}
                        </h5>
                        <p className="wd-dashboard-course-description mb-2 h-10 overflow-hidden text-sm text-gray-500">
                            {description}
                        </p>
                        <button className="rounded bg-red-700 px-3 py-1 text-sm text-white">
                            Go
                        </button>
                    </div>
                </Link>
            </div>
        </div>
    );
}