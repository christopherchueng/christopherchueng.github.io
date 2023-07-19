import SocialLinks from "./SocialLinks"

const Header = () => (
    <section>
        <div className="mx-auto max-w-7xl px-8 py-12 lg:pt-24">
            <div className="mx-auto max-w-xl">
                <div>
                    <div className="flex md:items-center justify-center md:space-x-5">
                        <div className="flex items-center space-x-5">
                            <div className="flex-shrink-0">
                                <div className="relative">
                                    <img
                                        className="h-16 w-16 lg:h-24 lg:w-24 rounded-full border border-white/10"
                                        src="/images/avatar.png"
                                        alt="profile icon"
                                    />
                                    <span
                                        className="absolute inset-0 rounded-full shadow-inner"
                                        aria-hidden="true"
                                    ></span>
                                </div>
                            </div>
                            <div className="pt-1.5">
                                <h1 className="lg:text-xl text-black dark:text-white">
                                    Christopher Chueng
                                </h1>
                                <p className="text-sm font-light text-neutral-500">
                                    Software Engineer
                                </p>
                                <SocialLinks />
                            </div>
                        </div>
                    </div>
                    <div className="mt-24 text-sm font-light">
                        <p className="text-black dark:text-white">About</p>
                        <div className="text-neutral-500 dark:text-neutral-400 space-y-3 mt-3">
                            <p>
                                "You are a culmination of all the skills you have developed throughout your life." - my dad
                            </p>
                            <p>
                                Channeling my artistic creativity on the frontend honed from my passions in dance and fashion, I design and create user-centered applications.
                                Utilizing my knowledge in mathematics on the backend, I apply complex data structures and algorithms to problem solve with an analytical and curious mindset.
                                With my bookkeeping skills sharpened from my accounting background, I stay organized by writing and refactoring code for efficiency and readability.
                                Finally, embodying my own teaching philosophies in the classrooms, I provide guidance when necessary, collaborate,
                                and communicate effectively to deliver concepts in a clear and concise manner.
                                All of these experiences have continuously put me in fast-paced environments to learn and perform on the spot while maintaining accuracy
                                and have shaped me into the software engineer that I am today!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
)

export default Header
