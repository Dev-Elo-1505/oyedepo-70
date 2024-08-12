import { Link } from "react-router-dom";

interface AboutItem {
    name: string;
    title: string;
    content: string[];
}

interface Props {
    about: AboutItem[];
}

const About = ({ about }: Props) => {
    return (
    <section>
        {about.map((item, index) => (
            <div key={index}>
            <h2>{item.title}</h2>
            <p>{item.content[0].substring(0, 150)}...</p>
            <button><Link to={`/about/${item.name}`}>Read More</Link></button>
            </div>
        ))}
        
    </section>
)
}

export default About