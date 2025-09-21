import ProjectCard from "../components/ProjectCard";
import "./Projects.css";

import NHBA from "../assets/NHBA.jpeg";
import recipeRecommender from "../assets/recipe-recommender.jpg";

function Projects() {
  const projects = [
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
      languages: ["React", "JavaScript", "Vite", "CSS"],
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
