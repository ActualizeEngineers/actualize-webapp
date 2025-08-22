import React from "react";
import "../../styles/team.css";
import Navbar from "../../layouts/Navbar";
import Harish from "../../assets/team/Harish.jpg";
import Akhilesh from "../../assets/team/Akhilesh.jpg";

type TeamMember = {
  imageUrl: string;
  alt: string;
  name: string;
  role: string;
  description: string;
};

const teamData: TeamMember[] = [
  {
    imageUrl: Harish,
    alt: "Harish",
    name: "Harish",
    role: "XXXXXX",
    description:
      "Leads the company with a strategic vision and ensures sustainable growth across all departments.",
  },
  {
    imageUrl: Akhilesh,
    alt: "Akhilesh",
    name: "Akhilesh",
    role: "XXXXXX",
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
    <>
      <div className="team-container">
        <Navbar />
      </div>
      <div className="leaders-container">
        <div className="container">
          <h2 className="section-title text-center mb-5">
            Meet Our <span className="highlight">Members</span>
          </h2>
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
      </div>
    </>
  );
};

export default Team;
