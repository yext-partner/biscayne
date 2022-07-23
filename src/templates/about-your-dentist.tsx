import * as React from "react";
import Markdown from 'markdown-to-jsx';

// Pages components
import Header from "../components/header";
import Footer from "../components/footer";

import "../index.css";
import {
 Template,
 GetPath,
 GetRedirects,
 TemplateConfig,
 TemplateProps,
 TemplateRenderProps,
 GetHeadConfig,
 HeadConfig,
} from "@yext/pages";
 

 export const config: TemplateConfig = {
  stream: {
    $id: "about-your-dentist",
    filter: {
     entityIds: [
       'about-your-dentist'
     ],
   },
    fields: [
      'id',
      'uid',
      'meta',
      'name',
      'c_relatedFacility.c_relatedDoctors.name',
      'c_relatedFacility.c_relatedDoctors.headshot',
      'c_relatedFacility.c_relatedDoctors.c_richTextDescription'
    ],
    localization: {
      locales: ["en"],
      primary: false,
    },
  },
};
 
 export const getPath: GetPath<TemplateProps> = ({document}) => {
  return `about-your-dentist`;
 };
 
 export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = ({relativePrefixToRoot, path, document}): HeadConfig => {
  return {
     title: `
      About Your Dentist | 
      ${document.name} | 
      ${document._site.c_relatedFacility[0].address.city}, 
      ${document._site.c_relatedFacility[0].address.region}`,
     charset: "UTF-8",
     viewport: "width=device-width, initial-scale=1",
     tags: [
       {
         type: "meta",
         attributes: {
           description: "About your dentist page description!",
         },
       },
     ],
   };
 };
 

 const AboutYourDentist: Template<TemplateRenderProps> = ({relativePrefixToRoot, path, document}) => {
   const {
     _site,
     c_relatedFacility
   } = document;

   const doctorDivs = c_relatedFacility[0].c_relatedDoctors.map((doc:any) => (    
        <div className="section">
          <div className="grid gap-y-7 grid-cols-1 gap-x-10 md:grid-cols-3 border-b-2 pb-6">
              <h2 className="font-semibold md:hidden">{doc.name}</h2>
              <img className="rounded-xl drop-shadow-xl  w-3/5 mx-auto md:col-span-1 md:w-full" src={doc.headshot.url} alt={doc.headshot.alternateText} height={doc.headshot.height} width={doc.headshot.width}></img>
              <div className="space-y-5 md:col-span-2">
                <h2 className="hidden font-semibold text-center md:block">{doc.name}</h2>
                <Markdown className="space-y-5">{doc.c_richTextDescription}</Markdown>
              </div>
          </div>
        </div>  
  ));

   return (
     <>
       <body className="font-main">
         <Header site={_site}></Header>
           <div className="centered-container">
           <div className="breadcrumbs flex space-x-5 py-5">
              <a href="/" className="font-semibold hover:underline">Home</a>
              <span>/</span>
              <span>About Your Dentist</span>
            </div>
            <div className="section">
              <div className="">
                {doctorDivs}
              </div>
            </div>
           </div>
         <Footer site={_site}></Footer>
       </body>
     </>
   );
 };
 
 export default AboutYourDentist;
 