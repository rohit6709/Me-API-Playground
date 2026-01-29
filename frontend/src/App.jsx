import { useEffect, useState } from "react";
import Profile from "./components/Profile.jsx";
import SkillSearch from "./components/SkillSearch.jsx";
import ProjectList from "./components/ProjectList.jsx";
import { getProfile, getProjectsBySkill } from "./services/api.js";

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProfile().then(data => setProjects(data.projects));
  }, []);

  const handleSearch = async (skill) => {
    if (!skill) return;
    const result = await getProjectsBySkill(skill);
    setProjects(result);
  };

  return (
    <div style={{ padding: 30 }}>
      <h1>Me API Playground</h1>

      <Profile />

      <hr />

      <h2>Search Projects by Skill</h2>
      <SkillSearch onSearch={handleSearch} />

      <h2>Projects</h2>
      <ProjectList projects={projects} />
    </div>
  );
}

export default App;
