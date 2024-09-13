import React from "react";
import { skills, displayedSkills } from "../../../config/skills";

const TechStack: React.FC = () => {
  const getIdFromSkill = (skill: string) => {
    return skill.toLowerCase().replace(/\./g, "");
  };

  return (
    <div className="item">
      <div className="pointer observe fade delay-5"></div>
      <div className="info observe fade delay-10">
        <div className="title">Some technologies I'm familiar with...</div>
        <div className="techStack" >
          {displayedSkills.map(
            (skill, index) =>
              index % 2 === 0 && (
                <div className="pair" key={index}>
                  <div
                    className="techItem interactive-surround"
                    id={getIdFromSkill(skill)}
                    data-skill-name={skills[skill].fullName}
                  >
                    {skills[skill].icon}
                  </div>
                  {displayedSkills[index + 1] && (
                    <div
                      className="techItem interactive-surround"
                      id={getIdFromSkill(displayedSkills[index + 1])}
                      data-skill-name={skills[displayedSkills[index + 1]].fullName}
                    >
                      {skills[displayedSkills[index + 1]].icon}
                    </div>
                  )}
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
