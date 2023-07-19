import { projects } from "../constants/projects"

const Projects = () => (
    <section>
        <div className="text-sm font-light">
            <p className="text-black dark:text-white">Projects</p>
            <div className="grid gap-6 mt-3">
            {projects.map((project) => (
                    <div key={project.title} className="text-neutral-500 items-start grid grid-cols-1 md:grid-cols-3">
                        <img className="w-56 md:w-36 lg:w-36 h-auto mt-1.5" src={project.image} alt={`${project.title} project`} />
                        <div className="md:col-span-2 w-full">
                            <p className="flex flex-row group text-black dark:text-white hover:text-neutral-500">
                                <a
                                    href={project.link}
                                    className="transition ease-in-out flex flex-row"
                                >
                                    {project.title}
                                </a>
                                <p className="transition pl-1 mt-0.5 ease-in-out group-hover:text-neutral-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</p>
                            </p>
                            <ul className="flex flex-row flex-wrap">
                                {project.technologies.map(technology => (
                                    <li key={technology} className="text-xs font-medium self-center border border-neutral-400 rounded-full py-1 px-3 mr-2 my-2 first:ml-0 last:mr-0 whitespace-nowrap">
                                        {technology}
                                    </li>
                                ))}
                            </ul>
                            <p>{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
)

export default Projects
