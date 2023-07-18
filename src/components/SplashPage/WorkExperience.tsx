import { roles } from "../constants/roles"

const WorkExperience = () => (
    <div className="text-sm font-light">
        <p className="text-black dark:text-white">Work experience</p>
        <div className="grid gap-6 mt-3">
            {roles.map((role) => (
                <div className="text-neutral-500 items-start grid grid-cols-1 md:grid-cols-3">
                    <div>
                        <p className="text-neutral-400 dark:text-neutral-400">{role.date}</p>
                    </div>
                    <div className="md:col-span-2 w-full">
                        <p className="text-black dark:text-white">
                            <a
                                href={role.link}
                                className="underline hover:no-underline duration-200 after:content-['_↗']"
                            >
                                {role.title}
                            </a>
                        </p>
                        <p className="">{role.location}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
)

export default WorkExperience
