import React from "react";
import CardLayout from "../CardLayout";
import Skill, { SkillType } from "../Skill";

export interface WilderType {
  image: string;
  name: string;
  city: string;
  skills: SkillType[];
}

const Wilder: React.FC<WilderType> = (wilder) => {
  return (
    <CardLayout>
      <>
        <img src={"./" + wilder.image} alt={wilder.name + "'s profil image"} />
        <h2>{wilder.name}</h2>
        <h3>{wilder.city}</h3>
        <h2>Skills</h2>
        {wilder.skills.map((skill) => (
          <Skill
            key={wilder.name + skill.title}
            title={skill.title}
            votes={skill.votes}
          ></Skill>
        ))}
      </>
    </CardLayout>
  );
};

export default Wilder;
