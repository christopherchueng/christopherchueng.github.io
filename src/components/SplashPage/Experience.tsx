import { roles } from "../constants/roles"

const Experience = () => (
    <div className="text-sm font-light">
        <p className="text-black dark:text-white">Experience</p>
        <div className="grid gap-6 mt-3">
            {roles.map((role) => (
                <div className="text-neutral-500 items-start grid grid-cols-1 md:grid-cols-3">
                    <div>
                        <p className="text-neutral-400 dark:text-neutral-400">{role.date}</p>
                    </div>
                    <div className="md:col-span-2 w-full">
                        <p className="flex flex-row group text-black dark:text-white hover:text-neutral-500">
                            <a
                                href={role.link}
                                className="transition ease-in-out flex flex-row"
                            >
                                {role.title}
                            </a>
                            <p className="transition pl-1 mt-0.5 ease-in-out group-hover:text-neutral-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</p>
                        </p>
                        <p>{role.location}</p>
                        <ul className="flex flex-row flex-wrap">
                            {role.technologies.map(technology => (
                                <li key={technology} className="text-xs font-medium self-center border border-neutral-400 rounded-full py-1 px-3 mr-2 my-2 first:ml-0 last:mr-0 whitespace-nowrap">
                                    {technology}
                                </li>
                            ))}
                        </ul>
                        <p>{role.description}</p>
                    </div>
                </div>
            ))}
            <a href="/resume.pdf" className="group flex flex-row items-center hover:text-neutral-500">
                <p>View Full Resume</p>
                <p className="pl-2 text-xs transition ease-in-out group-hover:translate-x-1 group-hover:text-neutral-500">⟶</p>
            </a>
        </div>
    </div>
)

export default Experience
