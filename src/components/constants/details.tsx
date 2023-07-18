export type Template = {
    link: string
    title: string
    location: string
    date: string
    description: string
}

const one: Template = {
    link: "https://getmulberry.com",
    title: "Mulberry Technologies",
    location: "New York (Remote)",
    date: "Dec 2022 - Mar 2023",
    description: ''
}

export const bytitle = {
    one,
}

export const details = Object.values(bytitle)
