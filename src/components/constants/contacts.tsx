import { ReactComponent as Gmail } from "../../icons/gmail.svg";
import { ReactComponent as GitHub } from "../../icons/github.svg";
import { ReactComponent as LinkedIn } from "../../icons/linkedin.svg";

export type Contact = {
  link: string;
  title: string;
  image: string;
};

const one: Contact = {
  link: "mailto:christopherchueng@gmail.com",
  title: "Email",
  image: "gmail-bw.png",
};

const two: Contact = {
  link: "https://www.linkedin.com/in/christopher-chueng",
  title: "LinkedIn",
  image: "linkedin-bw.png",
};

const three: Contact = {
  link: "https://www.github.com/christopherchueng",
  title: "GitHub",
  image: "github-bw.png",
};

export const contacts = [one, two, three];

export const icons = [
  <Gmail className="h-4 w-4 transition duration-200 ease-in-out hover:scale-125" />,
  <LinkedIn className="h-4 w-4 transition duration-200 ease-in-out hover:scale-125" />,
  <GitHub className="h-4 w-4 transition duration-200 ease-in-out hover:scale-125" />,
];
