export type Role = {
    link: string
    title: string
    location: string
    date: string
    description: string
}

const one: Role = {
    link: "https://getmulberry.com",
    title: "Mulberry Technologies",
    location: "New York (Remote)",
    date: "Dec 2022 - Mar 2023",
    description: ''
}

export const bytitle = {
    one,
}

export const roles = Object.values(bytitle)
