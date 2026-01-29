import { useEffect, useState } from "react";
import { getProfile } from "../services/api.js";

const Profile = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    getProfile().then(setProfile);
  }, []);

  if (!profile) return <p>Loading profile...</p>;

  return (
    <div>
      <h2>{profile.name}</h2>
      <p><b>Email:</b> {profile.email}</p>
      <p><b>Education:</b> {profile.education}</p>
      <p><b>Skills:</b> {profile.skills.join(", ")}</p>

      <p>
        <a href={profile.links.github} target="_blank">GitHub</a>{" | "}
        <a href={profile.links.linkedin} target="_blank">LinkedIn</a>{" | "}
        <a href={profile.links.portfolio} target="_blank">Portfolio</a>
      </p>
    </div>
  );
};

export default Profile;
