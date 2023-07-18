import { contacts, Contact, icons } from "../constants/contacts"

const SocialLinks = () => (
    <div className="flex flex-row gap-6 mt-2">
        {contacts.map((contact: Contact, index: number) => (
            <div key={contact.title} className="text-neutral-500 items-start">
                <a href={contact.link} className="text-neutral-400 dark:text-neutral-400">{icons[index]}</a>
            </div>
        ))}
    </div>
)

export default SocialLinks
