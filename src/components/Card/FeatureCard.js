import React from "react";
import "./FeatureCard.css";
import { motion } from "framer-motion/dist/framer-motion";

function FeatureCard({ title, description, variants, animate }) {
  return (
    <>
      <div
        className="card__container"
        
      >
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </>
  );
}


export default FeatureCard;
