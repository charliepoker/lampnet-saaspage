import React from "react";
import Button from "../../components/Button/Button";
import FeatureCard from "../../components/Card/FeatureCard";
import { feature } from "../../data/feature";
import "./FoodX.css";

function FoodX() {
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
      <div className="feature__card_container">
        {feature.map((cur, i) => {
          return (
            <FeatureCard
              key={i}
              title={cur.title}
              description={cur.description}
            />
          );
        })}
      </div>

      <div className="customers__text">
        <h2>Our Customers</h2>
        <div className="customers_carousel">
          {/* TODO: Create a  custom carousel to display customers*/}
        </div>
      </div>

      <div className="app__info__container">
        <div className="app__info_text">
          <h3>IN-APP MONITORING</h3>
          <p className="app__info_heading">
            Monitor deliveries and orders all from one place
          </p>
          <p className="app__info_content">
            Lorem ipsum dolor sit amet, consectetur adipiscing Aliquam vel neque
            nec ex tempus varius mi in purus Cras sit amet di issim enim.
            Loremipsumsit amet consectetur adipiscing elit. Aliquam vel neque
            nec varius mi in purus maximus vulputate. Cras sit ameconsectetur
            adipiscing elit. Aliquam vel neque nec.
          </p>
          <h6>
            Explore this feature{" "}
            <span>
              <svg
                width="24"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.4297 5.92993L20.4997 11.9999L14.4297 18.0699"
                  stroke="#000"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3.5 12H20.33"
                  stroke="#000"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>{" "}
          </h6>
        </div>
        <div className="app__info_img">
          <div className="app__info_circle"></div>
          <img src={"./phone1.png"} alt="" className="app__info_phone" />
        </div>
      </div>

      <div className="app__info2__container">
        <div className="app__info2_img">
          <img src={"./phone2.png"} alt="" className="app__info_phone" />
        </div>
        <div className="app__info2_text">
          <h3>Quick updating of items on sale</h3>
          <p className="app__info2_heading">
            Monitor deliveries and orders all from one place
          </p>
          <p className="app__info2_content">
            Lorem ipsum dolor sit amet, consectetur adipiscing Aliquam vel neque
            nec ex tempus varius mi in purus Cras sit amet di issim enim.
            Loremipsumsit amet consectetur adipiscing elit. Aliquam vel neque
            nec varius mi in purus maximus vulputate. Cras sit ameconsectetur
            adipiscing elit. Aliquam vel neque nec.
          </p>
          <h6>
            Explore this feature{" "}
            <span>
              <svg
                width="24"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.4297 5.92993L20.4997 11.9999L14.4297 18.0699"
                  stroke="#000"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3.5 12H20.33"
                  stroke="#000"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>{" "}
          </h6>
        </div>
      </div>
    </>
  );
}

export default FoodX;
