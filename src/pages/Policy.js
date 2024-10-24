


import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p>1)Please Input valid userid , password and details.</p>
          <p>2)PantryPal will never misuse your personal information</p>
          <p>3)All rights are reserved</p>
          <p>4)Any disputes may be handled to Mumbai juridisction only</p>
          <p>5)Images may not resemble the actual product</p>
          <p>6)Read the user manual carefully</p>
          <p>7)Made with love:- Team TuTa</p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
