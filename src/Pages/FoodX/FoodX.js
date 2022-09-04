import React from "react";
import Button from "../../components/Button/Button";
import FeatureCard from "../../components/Card/FeatureCard";
import { feature } from "../../data/feature";
import "./FoodX.css";
import AppInfo1 from "../../components/AppInfo/AppInfo1"
import AppInfo2 from "../../components/AppInfo/AppInfo2";

import {
  textAnimation,
  topContainerAnimation,
  videoAnimation,
  reasonsAnimation,
} from "./../../utils/Animations";
import { motion } from "framer-motion/dist/framer-motion";
import { useScroll } from "../../components/UseScroll/UseScroll";

function FoodX() {
  const [element, controls] = useScroll();
  return (
    <>
      <div className="foodX__banner_container">
        <div className="FoodX__banner_circle1"></div>
        <div className="FoodX__banner_circle2"></div>
        <div className="foodX__banner_text">
          <div className="foodX__banner_H3">
            <h2>Order food directly from the comfort of your home</h2>
          </div>
          <div className="foodX__banner_P">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              vel tempus varius mi in purus maximus vulputate. Cras sit amet
              dignissim enim. amet consectetur adipiscing elit. Aliquam vel
              neque nec ex efficitur tempus.
            </p>
          </div>
          <div className="banner_btn">
            <Button text="Get Started" btnStyle="btn__white" />
          </div>
        </div>

        <div className="FoodX__banner_image">
          <div className="foodX__banner_phone">
            <img src={"./hero section image.png"} alt="phone" />
          </div>
        </div>
      </div>

      <div className="features_text">
        <h2> Features</h2>
      </div>
      <motion.div
        className="feature__card_container"
        ref={element}
        variants={textAnimation}
        animate={controls}
        transition={{
          duration: 1,
        }}
      >
        {feature.map((cur, i) => {
          return (
            <FeatureCard
              key={i}
              title={cur.title}
              description={cur.description}
            />
          );
        })}
      </motion.div>

      <div className="customers__text">
        <h2>Our Customers</h2>
        <div className="customers_carousel">
          {/* TODO: Create a  custom carousel to display customers*/}
        </div>
      </div>

      <AppInfo1/>
      <AppInfo2/>
      <AppInfo1/>
      

      <div className="pricing__text">
        <h2>PRICING</h2>
      </div>

      <div className="pricing__container">
        <div className="pricing__card">
          <h4>Free</h4>
          <p>Get started with a free account for your business</p>
          <div className="horizontal__line"></div>
          <h3>$0</h3>
          <p>/Per month billed anually</p>
          <p>$0</p>
          <p>/Per month billed monthly</p>
          <Button text="Sign up" btnStyle="btn__primary" />
          <div className="horizontal__line"></div>
          <p className="pricing__feature">
            <span>
              <svg
                width="10"
                height="9"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.04254 8.59107L6.82254 14.9829C10.74 8.86607 15.1386 3.505 19.125 0.412501C20.0185 -0.412285 21.393 0.06889 20.4308 0.962322C15.9633 5.56696 12.5273 10.7905 9.0219 18.9691C7.64733 19.9313 6.06654 20.4125 5.31047 19.5189L0.3619 10.6529C-0.325314 9.55325 2.08008 7.01036 3.04229 8.59107H3.04254Z"
                  fill="#000"
                />
              </svg>
            </span>
            Contact and account management
          </p>
          <p className="pricing__feature">
            <span>
              <svg
                width="10"
                height="9"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.04254 8.59107L6.82254 14.9829C10.74 8.86607 15.1386 3.505 19.125 0.412501C20.0185 -0.412285 21.393 0.06889 20.4308 0.962322C15.9633 5.56696 12.5273 10.7905 9.0219 18.9691C7.64733 19.9313 6.06654 20.4125 5.31047 19.5189L0.3619 10.6529C-0.325314 9.55325 2.08008 7.01036 3.04229 8.59107H3.04254Z"
                  fill="#000"
                />
              </svg>
            </span>
            Contact and account management
          </p>
          <p className="pricing__feature">
            <span>
              <svg
                width="10"
                height="9"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.04254 8.59107L6.82254 14.9829C10.74 8.86607 15.1386 3.505 19.125 0.412501C20.0185 -0.412285 21.393 0.06889 20.4308 0.962322C15.9633 5.56696 12.5273 10.7905 9.0219 18.9691C7.64733 19.9313 6.06654 20.4125 5.31047 19.5189L0.3619 10.6529C-0.325314 9.55325 2.08008 7.01036 3.04229 8.59107H3.04254Z"
                  fill="#000"
                />
              </svg>
            </span>
            Contact and account management
          </p>
          <p className="pricing__feature">
            <span>
              <svg
                width="10"
                height="9"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.04254 8.59107L6.82254 14.9829C10.74 8.86607 15.1386 3.505 19.125 0.412501C20.0185 -0.412285 21.393 0.06889 20.4308 0.962322C15.9633 5.56696 12.5273 10.7905 9.0219 18.9691C7.64733 19.9313 6.06654 20.4125 5.31047 19.5189L0.3619 10.6529C-0.325314 9.55325 2.08008 7.01036 3.04229 8.59107H3.04254Z"
                  fill="#000"
                />
              </svg>
            </span>
            Contact and account management
          </p>
          <div className="vertical__line">
            {/* #TODO: This should be used to divide the pricing */}
          </div>
        </div>
        <div className="pricing__card">
          <h4>Basic</h4>
          <p>Get started with a free account for your business</p>
          <div className="horizontal__line"></div>
          <h3>$15</h3>
          <p>/Per month billed anually</p>
          <p>$18</p>
          <p>/Per month billed monthly</p>
          <Button text="Sign up" btnStyle="btn__primary" />
          <div className="horizontal__line"></div>
          <p className="pricing__feature">
            <span>
              <svg
                width="10"
                height="9"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.04254 8.59107L6.82254 14.9829C10.74 8.86607 15.1386 3.505 19.125 0.412501C20.0185 -0.412285 21.393 0.06889 20.4308 0.962322C15.9633 5.56696 12.5273 10.7905 9.0219 18.9691C7.64733 19.9313 6.06654 20.4125 5.31047 19.5189L0.3619 10.6529C-0.325314 9.55325 2.08008 7.01036 3.04229 8.59107H3.04254Z"
                  fill="#000"
                />
              </svg>
            </span>
            Contact and account management
          </p>
          <p className="pricing__feature">
            <span>
              <svg
                width="10"
                height="9"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.04254 8.59107L6.82254 14.9829C10.74 8.86607 15.1386 3.505 19.125 0.412501C20.0185 -0.412285 21.393 0.06889 20.4308 0.962322C15.9633 5.56696 12.5273 10.7905 9.0219 18.9691C7.64733 19.9313 6.06654 20.4125 5.31047 19.5189L0.3619 10.6529C-0.325314 9.55325 2.08008 7.01036 3.04229 8.59107H3.04254Z"
                  fill="#000"
                />
              </svg>
            </span>
            Contact and account management
          </p>
          <p className="pricing__feature">
            <span>
              <svg
                width="10"
                height="9"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.04254 8.59107L6.82254 14.9829C10.74 8.86607 15.1386 3.505 19.125 0.412501C20.0185 -0.412285 21.393 0.06889 20.4308 0.962322C15.9633 5.56696 12.5273 10.7905 9.0219 18.9691C7.64733 19.9313 6.06654 20.4125 5.31047 19.5189L0.3619 10.6529C-0.325314 9.55325 2.08008 7.01036 3.04229 8.59107H3.04254Z"
                  fill="#000"
                />
              </svg>
            </span>
            Contact and account management
          </p>
          <p className="pricing__feature">
            <span>
              <svg
                width="10"
                height="9"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.04254 8.59107L6.82254 14.9829C10.74 8.86607 15.1386 3.505 19.125 0.412501C20.0185 -0.412285 21.393 0.06889 20.4308 0.962322C15.9633 5.56696 12.5273 10.7905 9.0219 18.9691C7.64733 19.9313 6.06654 20.4125 5.31047 19.5189L0.3619 10.6529C-0.325314 9.55325 2.08008 7.01036 3.04229 8.59107H3.04254Z"
                  fill="#000"
                />
              </svg>
            </span>
            Contact and account management
          </p>
          <div className="vertical__line">
            {/* #TODO: This should be used to divide the pricing */}
          </div>
        </div>
        <div className="pricing__card">
          <h4>Enterprise</h4>
          <p>Get started with a free account for your business</p>
          <div className="horizontal__line"></div>
          <h3>$20</h3>
          <p>/Per month billed anually</p>
          <p>$28</p>
          <p>/Per month billed monthly</p>
          <Button text="Sign up" btnStyle="btn__primary" />
          <div className="horizontal__line"></div>
          <p className="pricing__feature">
            <span>
              <svg
                width="10"
                height="9"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.04254 8.59107L6.82254 14.9829C10.74 8.86607 15.1386 3.505 19.125 0.412501C20.0185 -0.412285 21.393 0.06889 20.4308 0.962322C15.9633 5.56696 12.5273 10.7905 9.0219 18.9691C7.64733 19.9313 6.06654 20.4125 5.31047 19.5189L0.3619 10.6529C-0.325314 9.55325 2.08008 7.01036 3.04229 8.59107H3.04254Z"
                  fill="#000"
                />
              </svg>
            </span>
            Contact and account management
          </p>
          <p className="pricing__feature">
            <span>
              <svg
                width="10"
                height="9"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.04254 8.59107L6.82254 14.9829C10.74 8.86607 15.1386 3.505 19.125 0.412501C20.0185 -0.412285 21.393 0.06889 20.4308 0.962322C15.9633 5.56696 12.5273 10.7905 9.0219 18.9691C7.64733 19.9313 6.06654 20.4125 5.31047 19.5189L0.3619 10.6529C-0.325314 9.55325 2.08008 7.01036 3.04229 8.59107H3.04254Z"
                  fill="#000"
                />
              </svg>
            </span>
            Contact and account management
          </p>
          <p className="pricing__feature">
            <span>
              <svg
                width="10"
                height="9"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.04254 8.59107L6.82254 14.9829C10.74 8.86607 15.1386 3.505 19.125 0.412501C20.0185 -0.412285 21.393 0.06889 20.4308 0.962322C15.9633 5.56696 12.5273 10.7905 9.0219 18.9691C7.64733 19.9313 6.06654 20.4125 5.31047 19.5189L0.3619 10.6529C-0.325314 9.55325 2.08008 7.01036 3.04229 8.59107H3.04254Z"
                  fill="#000"
                />
              </svg>
            </span>
            Contact and account management
          </p>
          <p className="pricing__feature">
            <span>
              <svg
                width="10"
                height="9"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.04254 8.59107L6.82254 14.9829C10.74 8.86607 15.1386 3.505 19.125 0.412501C20.0185 -0.412285 21.393 0.06889 20.4308 0.962322C15.9633 5.56696 12.5273 10.7905 9.0219 18.9691C7.64733 19.9313 6.06654 20.4125 5.31047 19.5189L0.3619 10.6529C-0.325314 9.55325 2.08008 7.01036 3.04229 8.59107H3.04254Z"
                  fill="#000"
                />
              </svg>
            </span>
            Contact and account management
          </p>
          <div className="vertical__line">
            {/* #TODO: This should be used to divide the pricing */}
          </div>
        </div>
      </div>
      <div className="footer__cta">
        <h5>Start today, and enjoy our fee trial</h5>
        <p>Start your 7-day free trial. No credit card required</p>
        <Button text="Start free trial" btnStyle="btn__primary" />
      </div>
    </>
  );
}

export default FoodX;
