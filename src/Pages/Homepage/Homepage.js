import React from "react";
import "./Homepage.css";
import Button from "../../components/Button/Button";
import { product } from "../../data/product";
import ProductCard from "../../components/Card/ProductCard";

function Homepage() {
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

      <div className="products_heading">
        <h2>Our Products</h2>
      </div>

      <div className="product__cards_container">
        {product.map((cur, i) => {
          return (
            <ProductCard
              key={i}
              title={cur.title}
              description={cur.description}
            />
          );
        })}
      </div>
    </>
  );
}

export default Homepage;
