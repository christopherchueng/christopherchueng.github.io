import { roles } from "../constants/roles"

const Experience = () => (
    <section>
        <div className="text-sm font-light">
            <p className="text-black dark:text-white font-semibold">EXPERIENCE</p>
            <div className="grid gap-6 mt-3">
                {roles.map(role => (
                    <div key={role.title} className="text-neutral-500 items-start grid grid-cols-1 md:grid-cols-3">
                        <p className="text-neutral-400 dark:text-neutral-400">{role.date}</p>
                        <div className="md:col-span-2 w-full">
                            <p className="flex flex-row group text-black dark:text-white hover:text-neutral-500">
                                <a
                                    href={role.link}
                                    className="transition ease-in-out flex flex-row group-hover:text-neutral-500"
                                >
                                    {role.title}
                                </a>
                                <p className="transition pl-1 mt-0.5 ease-in-out group-hover:text-neutral-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</p>
                            </p>
                            <p className="dark:text-neutral-400">{role.location}</p>
                            <ul className="flex flex-row flex-wrap">
                                {role.technologies.map(technology => (
                                    <li key={technology} className="text-xs dark:text-white font-medium self-center border border-neutral-400 rounded-full py-1 px-3 mr-2 my-2 first:ml-0 last:mr-0 whitespace-nowrap">
                                        {technology}
                                    </li>
                                ))}
                            </ul>
                            <p className="dark:text-neutral-400">{role.description}</p>
                        </div>
                    </div>
                ))}
                <a href='/resume.pdf' className="group flex flex-row items-center text-neutral-500 dark:text-neutral-400 hover:text-neutral-500">
                    <p className="transition ease-in-out text-black dark:text-white hover:text-neutral-500">View Full Resume</p>
                    <p className="pl-2 text-xs transition ease-in-out group-hover:translate-x-1 text-black dark:text-white group-hover:text-neutral-500">⟶</p>
                </a>
            </div>
        </div>
    </section>
)

export default Experience
