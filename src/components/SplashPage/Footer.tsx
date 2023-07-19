import SocialLinks from "./SocialLinks"

const Footer = () => (
    <footer>
        <div className="mx-auto max-w-7xl px-8 py-12">
            <div className="mx-auto max-w-xl">
                <div className="text-sm font-light">
                    <p className="text-black dark:text-white font-semibold">CONTACT</p>
                    <SocialLinks />
                </div>
            </div>
        </div>
    </footer>
)

export default Footer