import { ReactComponent as Gmail } from '../../icons/gmail.svg'
import { ReactComponent as GitHub } from '../../icons/github.svg'
import { ReactComponent as LinkedIn } from '../../icons/linkedin.svg'

export type Contact = {
    link: string
    title: string
    image: string
}

const one: Contact = {
    link: "mailto:christopherchueng@gmail.com",
    title: "Email",
    image: 'gmail-bw.png',
}

const two: Contact = {
    link: "https://www.linkedin.com/in/christopher-chueng",
    title: "LinkedIn",
    image: 'linkedin-bw.png',
}

const three: Contact = {
    link: "https://www.github.com/christopherchueng",
    title: "GitHub",
    image: 'github-bw.png',
}

export const bytype = {
    one,
    two,
    three,
}

export const icons = [
    <Gmail className='w-4 h-4 transition ease-in-out hover:scale-125 duration-200' />,
    <LinkedIn className='w-4 h-4 transition ease-in-out hover:scale-125 duration-200' />,
    <GitHub className='w-4 h-4 transition ease-in-out hover:scale-125 duration-200' />
]

export const contacts = Object.values(bytype)
