import React from 'react';
import '../../styles/team.css';
import Harish from '../../assets/team/Harish.jpg'
import Akhilesh from '../../assets/team/Akhilesh.jpg'

type TeamMember = {
  name: string;
  role: string;
  image: string;
};

const teamData: TeamMember[] = [
  {
    name: 'Harish',
    role: 'Founder',
    image: Harish,
  },
  {
    name: 'Akhilesh',
    role: 'Founder',
    image: Akhilesh,
  },
  {
    name: 'Harish',
    role: 'Non-Executive Chairman',
    image: Harish,
  },
  {
    name: 'Akhilesh',
    role: 'Executive Director & CEO',
    image: Akhilesh,
  }
];

const Team: React.FC = () => {
  return (
    <div className="team-page container py-5">
      <h2 className="text-center mb-4 team-title">Meet Our Leadership</h2>
      <div className="row">
        {teamData.map((member, index) => (
          <div className="col-md-4 col-lg-3 mb-4" key={index}>
            <div className="team-card text-center">
              <img src={member.image} alt={member.name} className="img-fluid rounded shadow-sm team-photo" />
              <h5 className="mt-3 fw-bold">{member.name}</h5>
              <p className="text-muted">{member.role}</p>
              <div className="team-bio">
                A visionary leader with decades of experience in engineering transformation and industry innovation.
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
