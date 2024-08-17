import { useParams } from "react-router-dom";
import abouts from "./about-content";
import NotFoundPage from "./NotFoundPage";

const AboutInfoPage = () => {
  const { aboutId } = useParams();
  const about = abouts.find((about) => about.name === aboutId);

  if (!about) return <NotFoundPage />;
  return (
    <div className="px-28 py-4">
      <div>
        <h1 className="text-2xl text-red-500 font-semibold mb-4">
          {about.title}
        </h1>
        {about.content.map((paragraph, i) => (
          <div key={i}>
            <p className="text-slate-800 leading-8 text-justify">{paragraph}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutInfoPage;
