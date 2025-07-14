import React from "react";
import "../../styles/team.css";

type TeamMember = {
  imageUrl: string;
  alt: string;
  name: string;
  role: string;
  description: string;
};

const teamData: TeamMember[] = [
  {
    imageUrl:
      "https://t3.ftcdn.net/jpg/02/48/15/86/360_F_248158608_0ErNeAWWx6GZVDCg66jNRoPGEhHCSpaJ.jpg",
    alt: "Arjun Image",
    name: "Arjun Mehta",
    role: "Chief Executive Officer",
    description:
      "Leads the company with a strategic vision and ensures sustainable growth across all departments.",
  },
  {
    imageUrl:
      "https://media.istockphoto.com/id/1399565382/photo/young-happy-mixed-race-businessman-standing-with-his-arms-crossed-working-alone-in-an-office.jpg?s=612x612&w=0&k=20&c=buXwOYjA_tjt2O3-kcSKqkTp2lxKWJJ_Ttx2PhYe3VM=",
    alt: "Rahul Image",
    name: "Rahul Iyer",
    role: "Chief Technology Officer",
    description:
      "Architects and drives all technology initiatives while leading the engineering teams.",
  },
  {
    imageUrl:
      "https://media.istockphoto.com/id/1310814041/photo/portrait-of-a-businesswoman-standing-in-a-a-modern-office.jpg?s=612x612&w=0&k=20&c=rLDYEGaGfbFq6mJPLc2FHjc6KBKyJETu38y4a3x11cM=",
    alt: "Anita Image",
    name: "Anita Rao",
    role: "Chief Operations Officer",
    description:
      "Oversees daily operations and ensures seamless coordination between departments.",
  },
  {
    imageUrl:
      "https://media.istockphoto.com/id/1364917563/photo/businessman-smiling-with-arms-crossed-on-white-background.jpg?s=612x612&w=0&k=20&c=NtM9Wbs1DBiGaiowsxJY6wNCnLf0POa65rYEwnZymrM=",
    alt: "Karthik Image",
    name: "Karthik Sharma",
    role: "Head of Product Development",
    description:
      "Leads the design and development of innovative products aligned with user needs.",
  },
];

const Team: React.FC = () => {
  return (
    <div className="leaders-container">
      <h1 className="leaders-heading">Meet Our Members</h1>
      <div className="leaders-image-con">
        {teamData.map((leader, idx) => (
          <div className="image-card" key={idx}>
            <img src={leader.imageUrl} alt={leader.alt} />
            <div className="card-description-overlay">
              <p>{leader.description}</p>
            </div>
            <div className="image-label">
              <h3>{leader.name}</h3>
              <p>{leader.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
