import { useParams } from "react-router-dom";
import abouts from "./about-content";
import NotFoundPage from "./NotFoundPage";

const AboutInfoPage = () => {
    const { aboutId } = useParams();
    const about = abouts.find((about) => about.name === aboutId);

    if (!about) return <NotFoundPage />
    return (
    <div>
        <h1>{about.title}</h1>
        {about.content.map((paragraph, i) => (<p key={i}>{paragraph}</p>))}
    </div>
)
}

export default AboutInfoPage