import React from "react";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <>
      <div className="p-3 bg-dark text-light">
        <div className="row">
          <div className="col-lg-6">
            <p className="mt-2"> @2023 Abhijeet Mane</p>
            <div className="row">
              <div className="mt-4 col-lg-2">
                <FacebookRoundedIcon />
              </div>
              <div className="mt-4 col-lg-2">
                <InstagramIcon />
              </div>
              <div className="mt-4 col-lg-2">
                <TwitterIcon />
              </div>
              <div className="mt-4 col-lg-2">
                <LinkedInIcon />
              </div>
            </div>
          </div>
          <div className='mt-2 text-end col-lg-6' >
                <p>Contact details:</p>
                <p>abhi.mane@gmail.com</p>
                <p>Enjoy Shoping!</p>
            </div>
        </div>
      </div>
     
    </>
  );
};

export default Footer;
