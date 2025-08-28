  import '../../styles/components/Card.css';
 type CardProps = {
  img: string;
  title: string;
  desc: string;
};
 export default function Card({ img, title, desc }: CardProps)
 {
return (
 
 <div className="card ">
    <img src={img} alt="Sample Image" />
    <div className="card-content">
      <h2 className="card-title">{title}</h2>
      <p className="card-description">
        {desc}
      </p>
    </div>
  </div>
 )}