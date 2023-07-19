import { contacts, Contact, icons } from "../constants/contacts";

const SocialLinks = () => (
  <div className="mt-2 flex flex-row gap-6">
    {contacts.map((contact: Contact, index: number) => (
      <div key={contact.title} className="items-start text-neutral-500">
        <a
          href={contact.link}
          className="text-neutral-400 dark:text-neutral-400"
        >
          {icons[index]}
        </a>
      </div>
    ))}
  </div>
);

export default SocialLinks;
