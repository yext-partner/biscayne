import * as React from "react";
import Hours from '../components/hours';
import { formatPhoneNumber } from 'react-phone-number-input';
import Markdown from 'markdown-to-jsx';

var currentTime = new Date()
var year = currentTime.getFullYear()

const Footer = (props:any) => {
  const { site } = props;
  const name = site.name 
  const footer = site.c_footer;
  const address = site.c_relatedFacility[0].address;
  const mainPhone = site.c_relatedFacility[0].mainPhone; 
  const hours = site.c_relatedFacility[0].hours; 
  const services = site.c_relatedFacility[0].c_offeredServices;
  const primaryColor = site.c_primaryColor;
  const secondaryColor = site.c_secondaryColor;
  const accessibility = site.c_accessibilityDescription;

  const footerLinks = footer.map((link:any) => (
    <div>
      <a key="uRL" href={link.uRL} className="no-underline font-semibold text-black hover:underline">
        {link.label}
      </a>
    </div>
  ));

  services.sort();
  const serviceDivs = services.map((service:any) => (
    <a className="text-black text-lg no-underline" href={service.slug}>{service.name}</a>
  ));

  var localizedAccessibility = accessibility;
  localizedAccessibility = localizedAccessibility.replaceAll("{{name}}", name);
  localizedAccessibility = localizedAccessibility.replaceAll("{{address.city}}", address.city);
  localizedAccessibility = localizedAccessibility.replaceAll("{{address.region}}", address.region);
  localizedAccessibility = localizedAccessibility.replaceAll("{{mainPhone}}", formatPhoneNumber(mainPhone));

  return (
    <>
      <div className="bg-stone-300">
        <div className="centered-container pt-5">
          <footer className="space-y-5 ">
            <div id="Row 1 - Services" className="section space-y-5">
              <div className="text-2xl font-bold">Services We Offer</div>
              <div className="grid grid-cols-4 gap-y-2">
                {serviceDivs}
              </div>
            </div>
            <div className="section grid grid-cols-3">
              <div id="Row 2 - Address + Phone" className="space-y-10">
                <div className="space-y-2">
                  <div className="text-xl font-bold">{name}</div>
                  <div>
                    <p>{address.line1}</p>
                    <p>{address.line2}</p>
                    <p>{address.city}, {address.region}</p>
                  </div>
                </div>
                <div className="text-xl font-bold">
                  {formatPhoneNumber(mainPhone)}
                </div>
              </div>
              <div id="Row 2 - Hours" className="space-y-2">
                <Hours title="Hours" hours={hours}></Hours>
              </div>
              <div>
                <img src="https://m.media-amazon.com/images/I/712Ub5FLAJL._AC_SL1500_.jpg"></img>
              </div>
            </div>
            <div className="section py-5 leading-8">
              <Markdown>{localizedAccessibility}</Markdown>
            </div>
            <div className="flex flex-col flex-wrap justify-center text-center p-5 gap-y-10 md:flex-col">
              <div className="flex justify-center space-x-5 underline">{footerLinks}</div>
            </div>
            <div className="w-full px-8 mt-4 rounded-b-lg bg-blueGray-50">
              <div className="container inline-flex flex-col flex-wrap items-center px-5 py-6 mx-auto sm:flex-row">
                <p className="mx-auto text-sm text-center text-black sm:text-left "> © {year} </p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Footer;
