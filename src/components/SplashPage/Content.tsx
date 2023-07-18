import { details } from "../constants/details"
import { contacts, Contact, icons } from "../constants/contacts"

const Content = () => (
    <section>
        <div className="mx-auto max-w-7xl px-8 py-12">
            <div className="mx-auto max-w-xl">
                <div className="grid gap-12 md:gap-24">
                    <div className="text-sm font-light">
                        <p className="text-black dark:text-white">Work experience</p>
                        <div className="grid gap-6 mt-3">
                            {details.map((template) => (
                                <div className="text-neutral-500  items-start grid grid-cols-1 md:grid-cols-3">
                                    <div>
                                        <p className="text-neutral-400 dark:text-neutral-400">{template.date}</p>
                                    </div>
                                    <div className="md:col-span-2 w-full">
                                        <p className="text-black dark:text-white">
                                            <a
                                                href={template.link}
                                                className="underline hover:no-underline duration-200 after:content-['_↗']"
                                            >
                                                {template.title}
                                            </a>
                                        </p>
                                        <p className="">{template.location}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="text-sm font-light">
                        <p className="text-black dark:text-white">Contact</p>
                        <div className="flex flex-row gap-6 mt-3">
                            {contacts.map((contact: Contact, index: number) => (
                                <div key={contact.title} className="text-neutral-500 items-start">
                                    <a href={contact.link} className="text-neutral-400 dark:text-neutral-400">{icons[index]}</a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
)

export default Content
