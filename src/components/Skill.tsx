import React from "react";

export interface SkillType {
  title: string;
  votes: number;
}

const Skill: React.FC<SkillType> = ({ title, votes }) => {
  return (
    <div>
      {title}: {votes}
    </div>
  );
};

export default Skill;
