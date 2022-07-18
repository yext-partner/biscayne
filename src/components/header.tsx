import * as React from "react";
import Cta from "../components/cta";


const Header = (props:any) => {

  const { site } = props;
  const name = site.name 
  const address = site.c_relatedFacility[0].address;
  const logo = site.c_logoURL;
  const primaryColor = site.c_primaryColor;
  const secondaryColor = site.c_secondaryColor;


  return (
    <>
      <div style={{ background: '#fffff' }}>
        <div className="centered-container">
          <nav className="py-6 flex items-center justify-between text-black">
            <div className="flex items-center space-x-5">
              <a className="" href="/"><img className="invert" src={logo} width="120" height="120"/></a>
              <a className="link hidden md:block" href="/about-your-dentist">About Your Dentist</a>
              <a className="link hidden md:block" href="/payment-options">Payment Options</a>
              <a className="link hidden md:block" href="/new-patients">New Patients</a>
            </div>
            <div>
              <p>{address.line1}</p>
              <p>{address.line2}</p>
              <p>{address.city}, {address.region}</p>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
