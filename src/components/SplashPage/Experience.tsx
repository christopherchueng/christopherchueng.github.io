import { roles } from "../constants/roles";

const Experience = () => (
  <section>
    <div className="text-sm font-light">
      <p className="font-semibold text-black dark:text-white">EXPERIENCE</p>
      <div className="mt-3 grid gap-6">
        {roles.map((role) => (
          <div
            key={role.title}
            className="grid grid-cols-1 items-start text-neutral-500 md:grid-cols-3"
          >
            <p className="text-neutral-400 dark:text-neutral-400">
              {role.date}
            </p>
            <div className="w-full md:col-span-2">
              <p className="group flex flex-row text-black hover:text-neutral-500 dark:text-white">
                <a
                  href={role.link}
                  className="flex flex-row transition ease-in-out group-hover:text-neutral-500"
                >
                  {role.title}
                </a>
                <p className="mt-0.5 pl-1 transition ease-in-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-neutral-500">
                  ↗
                </p>
              </p>
              <p className="dark:text-neutral-400">{role.location}</p>
              <ul className="flex flex-row flex-wrap">
                {role.technologies.map((technology) => (
                  <li
                    key={technology}
                    className="my-2 mr-2 self-center whitespace-nowrap rounded-full border border-neutral-400 px-3 py-1 text-xs font-medium first:ml-0 last:mr-0 dark:text-white"
                  >
                    {technology}
                  </li>
                ))}
              </ul>
              <p className="dark:text-neutral-400">{role.description}</p>
            </div>
          </div>
        ))}
        <a
          href="/resume.pdf"
          className="group flex w-fit flex-row items-center text-neutral-500 hover:text-neutral-500 dark:text-neutral-400"
        >
          <p className="text-black transition ease-in-out hover:text-neutral-500 dark:text-white">
            View Full Resume
          </p>
          <p className="pl-2 text-xs text-black transition ease-in-out group-hover:translate-x-1 group-hover:text-neutral-500 dark:text-white">
            ⟶
          </p>
        </a>
      </div>
    </div>
  </section>
);

export default Experience;
