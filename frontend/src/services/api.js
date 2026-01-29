export const getProfile = async () => {
  const res = await fetch(`${import.meta.env.VITE_BASE_URL}/profile`);
  return res.json();
};

export const getProjectsBySkill = async (skill) => {
  const res = await fetch(`${import.meta.env.VITE_BASE_URL}/project?skill=${skill}`);
  return res.json();
};