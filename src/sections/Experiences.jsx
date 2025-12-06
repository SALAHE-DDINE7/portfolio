import { Timeline } from "../components/Timeline";
import { experiences } from "../constants";
const Experiences = () => {
  return (
    <section id="work" className="c-space section-spacing w-full">
      <Timeline data={experiences} />
    </section>
  );
};

export default Experiences;
