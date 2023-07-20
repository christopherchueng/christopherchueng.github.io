import { Link } from "react-router-dom";
import { projects } from "../constants/projects";

const Projects = () => (
  <section>
    <div className="text-sm font-light">
      <p className="font-semibold text-black transition duration-300 ease-in-out dark:text-white">
        PROJECTS
      </p>
      <div className="mt-3 grid gap-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="grid grid-cols-1 items-start text-neutral-500 md:grid-cols-3"
          >
            <Link to={project.link}>
              <img
                loading="lazy"
                src={project.image}
                alt={`${project.title} project`}
                className="my-1.5 h-auto w-56 transition duration-300 ease-in-out hover:scale-110 md:w-36 lg:w-36"
              />
            </Link>
            <div className="w-full md:col-span-2">
              <p className="group flex w-fit flex-row text-black hover:text-neutral-500 dark:text-white">
                <Link
                  to={project.link}
                  className="flex flex-row transition ease-in-out group-hover:text-neutral-500"
                >
                  {project.title}
                  <p className="mt-0.5 pl-1 transition ease-in-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-neutral-500">
                    ↗
                  </p>
                </Link>
              </p>
              <ul className="flex flex-row flex-wrap">
                {project.technologies.map((technology) => (
                  <li
                    key={technology}
                    className="my-2 mr-2 self-center whitespace-nowrap rounded-full border border-neutral-400 px-3 py-1 text-xs font-medium transition duration-300 ease-in-out first:ml-0 last:mr-0 dark:text-white"
                  >
                    {technology}
                  </li>
                ))}
              </ul>
              <p className="dark:text-neutral-400">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
