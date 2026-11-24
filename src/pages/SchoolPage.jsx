import { useParams } from "react-router-dom";
import { getSchoolBySlug } from "../utils/schoolUtils";

import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Sections from "../components/Sections/Sections";
import Academics from "../components/Academics/Academics";
import Faculty from "../components/Faculty/Faculty";
import Achievements from "../components/Achievements/Achievements";
import Gallery from "../components/Gallery/Gallery";
import Testimonials from "../components/Testimonials/Testimonials";
import Admission from "../components/Admission/Admission";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";

function SchoolPage() {
  const { slug } = useParams();
  const school = getSchoolBySlug(slug);

  if (!school) return <div>School Not Found</div>;

  return (
    <div
      className="school-website"
      style={{
        "--primary": school.theme.primary,
        "--secondary": school.theme.secondary,
        "--accent": school.theme.accent,
        "--background": school.theme.background,
        "--text": school.theme.text,
      }}
    >
      <Header school={school} slug={slug} />
      <Hero school={school} />
      <About school={school} />
      <Sections school={school} />
      <Academics school={school} />

      <Faculty school={school} />
      <Achievements school={school} />
      <Gallery school={school} />

      <Testimonials school={school} />
      <Admission school={school} />
      <Contact school={school} />
      <Footer school={school} />
    </div>
  );
}

export default SchoolPage;
