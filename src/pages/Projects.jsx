import ProjectCard from "../components/ProjectCard";
import "./Projects.css";

import NHBA from "../assets/NHBA.jpeg";
import recipeRecommender from "../assets/recipe-recommender.jpg";
import JournalMe from "../assets/JournalMe.png";
import AltruistsVsEgoists from "../assets/alt_ego_simulation.jpg";

function Projects() {
  const projects = [
    {
      title: "JournalMe",
      image: JournalMe,
      description:
        "A journaling app that lets users create daily entries with text, images, and tags, track streaks, and organize content.",
      languages: ["TypeScript", "React", "Vite", "Django", "Python", "JWT", "HTML", "CSS"],
      url: "https://github.com/CaboozledPie/journal-me"
    },
    {
      title: "Egoists vs. Altruists",
      image: AltruistsVsEgoists,
      description:
        "Evolutionary simulation of Altruists, Egoists, and Halfway Houses in public goods games. Built as a Research Assistant for Susanne Lohmann's 'Ethics & AI' project, modeling group interactions and survival dynamics.",
      languages: ["Python", "FastAPI", "React", "Vite", "JavaScript", "HTML", "CSS"],
      url: "https://github.com/samyaw-li/egoists_sim"
    },
    {
      title: "Recipe Recommender",
      image: recipeRecommender,
      description:
        "Streamlit app that recommends recipes by matching your pantry ingredients using TF-IDF and cosine similarity.",
      languages: ["Python", "Streamlit", "scikit-learn", "NLTK"],
      url: "https://github.com/samyaw-li/recipe-recommender"
    },
    {
      title: "Official Club Website",
      image: NHBA,
      description: 
        "A responsive website with multi-page navigation, SEO-optimized content, and dynamic sections to showcase club events and services.",
      languages: ["React", "JavaScript", "Vite", "HTML", "CSS"],
      url: "https://newhopebadminton.com"
    },
  ];

  return (
    <>
      <h1 className="page-title">Projects</h1>
      <div className="projects-container">
        {projects.map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </div>
    </>
  );
}

export default Projects;
