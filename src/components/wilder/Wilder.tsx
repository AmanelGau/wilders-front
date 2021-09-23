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
  const styles: any = {
    profilImage: {
      width: "100%",
    },
    title: {
      color: "#ff5467",
    },
    skillList: {
      display: "flex",
      flexWrap: "wrap",
      listStyle: "none",
      padding: 0,
      justifyContent: "space-evenly",
    },
    skill: {
      border: "1px solid #ff5467",
      borderRadius: "1em",
      margin: 2,
      padding: 5,
      paddingLeft: 10,
      paddingRight: 10,
    },
  };

  return (
    <CardLayout>
      <>
        <img
          src={"./" + wilder.image}
          alt={wilder.name + "'s profil image"}
          style={styles.profilImage}
        />
        <h3 style={styles.title}>{wilder.name}</h3>
        <p>
          {"City: "}
          {wilder.city}
        </p>
        <h5 style={styles.title}>Skills</h5>
        <ul style={styles.skillList}>
          {wilder.skills.map((skill) => (
            <li key={wilder.name + skill.title} style={styles.skill}>
              <Skill title={skill.title} votes={skill.votes}></Skill>
            </li>
          ))}
        </ul>
      </>
    </CardLayout>
  );
};

export default Wilder;
