import Experience from "./Experience";
import Projects from "./Projects";

const Content = () => (
  <section>
    <div className="mx-auto max-w-7xl px-8 py-12">
      <div className="mx-auto max-w-xl">
        <div className="grid gap-12 md:gap-24">
          <Experience />
        </div>
      </div>
    </div>
    <div className="mx-auto max-w-7xl px-8 py-12">
      <div className="mx-auto max-w-xl">
        <div className="grid gap-12 md:gap-24">
          <Projects />
        </div>
      </div>
    </div>
  </section>
);

export default Content;
