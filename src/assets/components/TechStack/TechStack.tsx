import React from "react";
import { skills, displayedSkills, SkillName } from "../../../config/skills";

const TechStack: React.FC = () => {
  const getIdFromSkill = (skill: string) =>
    skill.toLowerCase().replace(/\./g, "");

  const TechItem: React.FC<{ skill: SkillName }> = ({ skill }) => (
    <div
      className="techItem interactive-surround"
      id={getIdFromSkill(skill)}
      data-skill-name={skills[skill].fullName}
    >
      {skills[skill].icon}
    </div>
  );

  return (
    <div className="item">
      <div className="pointer observe fade delay-5" />
      <div className="info observe fade delay-10">
        <div className="title">Some technologies I'm familiar with...</div>
        <div className="techStack">
          {displayedSkills.reduce((pairs, skill, index) => {
            if (index % 2 === 0) {
              pairs.push(
                <div className="pair" key={index}>
                  <TechItem skill={skill as SkillName} />
                  {displayedSkills[index + 1] && (
                    <TechItem skill={displayedSkills[index + 1] as SkillName} />
                  )}
                </div>
              );
            }
            return pairs;
          }, [] as JSX.Element[])}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
