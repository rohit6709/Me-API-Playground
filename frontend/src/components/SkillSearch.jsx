const SkillSearch = ({ onSearch }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Enter skill (e.g. React)"
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};

export default SkillSearch;
