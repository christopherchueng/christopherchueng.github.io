export type Role = {
    link: string
    title: string
    location: string
    date: string
    technologies: string[]
    description: string
}

const one: Role = {
    link: "https://getmulberry.com",
    title: "Mulberry Technologies",
    location: "New York (Remote)",
    date: "Dec 2022 - Mar 2023",
    technologies: ["Typescript", "React", "Tailwind CSS", "Python"],
    description: "Iterated and debugged Mulberry’s core product (browser extension) with a team of 6 engineers to successfully complete JIRA tickets in 2-week sprints.",
}

export const bytitle = {
    one,
}

export const roles = Object.values(bytitle)
