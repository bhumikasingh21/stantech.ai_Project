import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/global.css"; // Import the global CSS file
import Button from "../common/Button";

const About = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  return (
    <div className="container center-content">
      <h2>About Us</h2>

      <p>
        Sustainability lies at the core of Stantech AI, with our vision being to
        empower organisations to derive actionable insights, effectuating a
        smarter way of working. We operate on the premise that each firm is
        unique and as such, requires its own idiosyncratic solutions. Putting
        this principle into practice: I. We undertake extensive due diligence on
        the client’s incumbent operations and future expansion plans; II. The
        resulting acuity is thereafter translated to digital solutions that
        streamline and optimise the underlying workflows. III. Finally, we
        introduce and integrate the solutions with an intent that they will
        permeate throughout the organisation and through time. It is our mission
        to iron out such inefficiencies with the help of data and generate value
        for all stakeholders. We have assembled an incredible team of
        professionals and together we are developing avant-garde machine
        learning models that closely track our clients’ digitalisation
        requirements. We strongly believe in the doing well by doing good
        approach and aim to make the world a better place. “The most sustainable
        way is to not make things. The second most sustainable way is make
        something very useful, to solve a problem that hasn’t been solved” –
        Thomas Sigsgaard
      </p>
      <Button className="grayBtn" onClick={goToHome}>
        Go to Home
      </Button>
    </div>
  );
};

export default About;
