import * as React from "react";
import Cta from './cta';
import { formatPhoneNumber, formatPhoneNumberIntl } from 'react-phone-number-input';

const Banner = (props:any) => {
  const { name, site, photo, mainPhone } = props;
  var primaryColor = site.c_primaryColor;
  var secondaryColor = site.c_secondaryColor;

  var dynlUrl = photo.replace("a.mktgcdn.com", "dynl.mktgcdn.com");
  var extension = photo.slice(-4);
  var small = dynlUrl.slice(0, dynlUrl.lastIndexOf("/")) + "/400x400" + extension;
  var medium = dynlUrl.slice(0, dynlUrl.lastIndexOf("/")) + "/400x400" + extension;

  return (
    <>
      <div className="">
        <div className="flex flex-col items-center space-y-10 sm:flex sm:flex-row sm:justify-evenly">
          <div className="px-12 mx-auto space-y-4">
            <div className="text-xl">Welcome to</div>
            <div className="text-5xl font-bold text-stone-700">{name}</div>
          </div>
          <div className="flex flex-col text-center gap-y-5 pr-20">
            <Cta buttonText="Make an Appointment" url="#" fontColor='white' backgroundColor={primaryColor} backgroundHover={secondaryColor} fontHoverColor="white"></Cta>
            <p>or call</p>
            <Cta buttonText={formatPhoneNumber(mainPhone)} url="#" backgroundColor="" fontColor='black' backgroundHover={secondaryColor} fontHoverColor='white'></Cta>
          </div>
        </div>
        <img className="section" src={photo}></img>
      </div>
    </>
  );
};

export default Banner;
