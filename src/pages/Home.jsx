import { Link } from "react-router-dom";
import "./Home.css";
function Home() {
  return (
    <div>
      <h1 className="page-title">Samuel Li</h1>
      <p className="section-text">
        Hi, I'm Samuel! I am an undergraduate student at the University of California, Los Angeles 
        studying mathematics and computer science at the University of
        California, Los Angeles. Currently, I’m currently learning full-stack development 
        and just figuring things out.
      </p>

      <p className="section-text">
        My coursework can be found {" "}
        <Link to="/ucla">here.</Link>
      </p>

      <h2>Contact</h2>
      <p className="section-text">
        Reach out at <a href="mailto:samueli@g.ucla.edu">samuelli@g.ucla.edu.com</a>.
      </p>

      <p className="section-text">
        Check out my <Link to="/projects">Projects</Link> here or on{" "}
        <a
          href="https://github.com/samyaw-li"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>.
      </p>
    </div>
  );
}

export default Home;
