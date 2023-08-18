import ReactImg from "../assets/react.png";
import NodeImg from "../assets/nodejs.png";
import SQLImg from "../assets/SQL.png";
import MongoImg from "../assets/mongo.png";
import GitImg from "../assets/git.png";
import DockerImg from "../assets/docker.png";
import LinuxImg from "../assets/Linux.png";
import AWSImg from "../assets/aws.png";
import { DataItem } from "../interfaces/Linkdata";

export const skillsData: DataItem[] = [
  { image: ReactImg, label: "React" },
  { image: NodeImg, label: "Node.js" },
  { image: SQLImg, label: "PostgreSQL" },
  { image: MongoImg, label: "MongoDB" },
  { image: GitImg, label: "Git" },
  { image: DockerImg, label: "Docker" },
  { image: LinuxImg, label: "Linux" },
  { image: AWSImg, label: "AWS" },
];
