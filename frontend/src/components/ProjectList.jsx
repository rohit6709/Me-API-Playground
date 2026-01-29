const ProjectList = ({ projects }) => {
  if (!projects.length) return <p>No projects found.</p>;

  return (
    <div>
      {projects.map((project) => (
        <div key={project._id} style={{ border: "1px solid #ccc", padding: 10, marginBottom: 10 }}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <p><b>Skills:</b> {project.skill.join(", ")}</p>

          {project.links.map((link, i) => (
            <a key={i} href={link} target="_blank">Link {i + 1} </a>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
