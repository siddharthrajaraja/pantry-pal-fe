


import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
           PantryPal is an ecommerce platform for grocery ordering.We provide premium quality items at an affordable price range.We cover variety of products.PantryPal is now available with a separate user and admin portal.
           Made with love:- Team TuTa (Tushar and Tanish).
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
