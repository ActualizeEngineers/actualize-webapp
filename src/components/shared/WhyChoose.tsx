import React from "react";
import "../../styles/whyChoose.css";
import innovationIcon from "../../assets/icons/innovation.png";
import teamIcon from "../../assets/icons/team.png";
import globalIcon from "../../assets/icons/global.png";
import customer_support from "../../assets/icons/customer-support.png";
import Card from "./Card.tsx";

const WhyChoose: React.FC = () => {
  return (
    // <section className="why-choose-section">
    //   <h2 className="section-title">Why Choose <span className="brand-name">Actualize?</span></h2>
    //    <div className="why-choose-grid">
    //     <Card img={innovationIcon} title="Innovation at Core" desc="Modern solutions with a problem-solving mindset."/>
    //    <Card img={teamIcon} title="Experienced Team" desc="Passionate engineers, consultants, and developers."/>
    //   <Card img={customer_support} title="Customer-Centric Approach" desc="We prioritize client success with tailored, collaborative solutions."/>
    //   <Card img={globalIcon} title="Global Delivery" desc="Based in US, Germany, and India with global agility."/>
    //    </div>
    // </section>

    // <section className="py-5 bg-light why-choose-section">
    //   <div className="container">
    //     <h2 className="section-title text-center mb-5">
    //       Why Choose <span className="brand-name">Actualize?</span>
    //     </h2>

    //     <div className="row g-4 justify-content-center">
    //       <div className="col-12 col-sm-6 col-lg-3">
    //         <div className="card h-100 text-center border-0 shadow-sm p-3">
    //           <img
    //             src={innovationIcon}
    //             alt="Innovation"
    //             className="mx-auto mb-3"
    //             style={{ height: "60px" }}
    //           />
    //           <h5 className="fw-semibold">Innovation at Core</h5>
    //           <p className="text-muted small">
    //             Modern solutions with a problem-solving mindset.
    //           </p>
    //           <br/>
    //         </div>
    //       </div>

    //       <div className="col-12 col-sm-6 col-lg-3">
    //         <div className="card h-100 text-center border-0 shadow-sm p-3">
    //           <img
    //             src={teamIcon}
    //             alt="Team"
    //             className="mx-auto mb-3"
    //             style={{ height: "60px" }}
    //           />
    //           <h5 className="fw-semibold">Experienced Team</h5>
    //           <p className="text-muted small">
    //             Passionate engineers, consultants, and developers.
    //           </p>
    //         </div>
    //       </div>

    //       <div className="col-12 col-sm-6 col-lg-3">
    //         <div className="card h-100 text-center border-0 shadow-sm p-3">
    //           <img
    //             src={customer_support}
    //             alt="Customer Support"
    //             className="mx-auto mb-3"
    //             style={{ height: "60px" }}
    //           />
    //           <h5 className="fw-semibold">Customer-Centric Approach</h5>
    //           <p className="text-muted small">
    //             We prioritize client success with tailored, collaborative
    //             solutions.
    //           </p>
    //         </div>
    //       </div>

    //       <div className="col-12 col-sm-6 col-lg-3">
    //         <div className="card h-100 text-center border-0 shadow-sm p-3">
    //           <img
    //             src={globalIcon}
    //             alt="Global Delivery"
    //             className="mx-auto mb-3"
    //             style={{ height: "60px" }}
    //           />
    //           <h5 className="fw-semibold">Global Delivery</h5>
    //           <p className="text-muted small">
    //             Based in US, Germany, and India with global agility.
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>

    <section className="services-showcase">
          <h2 className="section-title">
            Why Choose <span className="highlight">Actualize?</span>
          </h2>
          <div className="services-grid">
            <div className="service-tile innovation">
              <div className="overlay">
                <h2>Innovation at Core</h2>
                <p>
                  Modern solutions with a problem-solving mindset.
                </p>
              </div>
            </div>
            <div className="service-tile team">
              <div className="overlay">
                <h2>Experienced Team</h2>
                <p>Passionate engineers, consultants, and developers.</p>
              </div>
            </div>
            <div className="service-tile support">
              <div className="overlay">
                <h2>Customer-Centric Approach</h2>
                <p> We prioritize client success with tailored, collaborative.</p> 
              </div>
            </div>
            <div className="service-tile global">
              <div className="overlay">
                <h2>Global Delivery</h2>
                <p> Based in US, Germany, and India with global agility.</p>
              </div>
            </div>
          </div>
        </section>
  );
};

export default WhyChoose;
