import { FiGithub } from "react-icons/fi";
import { RxOpenInNewWindow } from "react-icons/rx";
import { skills } from "../../../config/skills";

export type ProjectProps = {
  name: string;
  description: string;
  techStack: string[];
  image: string;
  featured: boolean;
  githubLink?: string;
  websiteLink: string;
  color?: string;
};

const Project = ({
  name,
  description,
  techStack,
  image,
  featured,
  githubLink,
  websiteLink,
  color,
}: ProjectProps) => {
  return (
    <div className="item">
      <div className="pointer observe fade delay-0"></div>
      <div className="info observe fade delay-8">
        <div className="project">
          {featured && (
            <div
              className="featured outfit"
              style={{ color: color ? color : "white" }}
            >
              Featured Project
            </div>
          )}
          <div className="title">{name}</div>
          <div className="links">
            <a href={websiteLink} target={"_blank"}>
              Website
              <RxOpenInNewWindow></RxOpenInNewWindow>
            </a>
            {githubLink && (
              <a href={githubLink} target={"_blank"}>
                Code
                <FiGithub></FiGithub>
              </a>
            )}
          </div>
          <div className="line"></div>
          <div className="description">{description}</div>
          <div className="techStack">
            {techStack.map((tech) => {
              return skills[tech].icon;
            })}
          </div>

          <div className="display">
            <img src={image} alt="" />
            <div className="border"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
