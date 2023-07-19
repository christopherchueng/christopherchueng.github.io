import SocialLinks from "./SocialLinks"
import Experience from "./Experience"

const Content = () => (
    <section>
        <div className="mx-auto max-w-7xl px-8 py-12">
            <div className="mx-auto max-w-xl">
                <div className="grid gap-12 md:gap-24">
                    <Experience />
                    <div className="text-sm font-light">
                        <p className="text-black dark:text-white">Contact</p>
                        <SocialLinks />
                    </div>
                </div>
            </div>
        </div>
    </section>
)

export default Content
