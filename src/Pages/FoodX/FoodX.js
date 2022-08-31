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
          <h3>STOCK UPDATING</h3>
          <p className="app__info2_heading">Quick updating of items on sale</p>
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

      <div className="app__info__container">
        <div className="app__info_text">
          <h3>CUSTOMER FEEDBACK</h3>
          <p className="app__info_heading">
            Check your customers favourites and know what they like
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
          <img src={"./phone3.png"} alt="" className="app__info_phone" />
        </div>
      </div>

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
        <Button text="Start free trial" btnStyle = "btn__primary"/>
      </div>
    </>
  );
}

export default FoodX;
