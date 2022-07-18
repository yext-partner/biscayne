 import * as React from "react";
 import Banner from "../components/banner";
 import Header from "../components/header";
 import Footer from "../components/footer";
 import Promo from '../components/promo';
 import Doctors from '../components/doctors';
 import FeaturedServices from '../components/featured-services';
 import OfferedServices from '../components/offered-services';
 import Insurances from '../components/insurances';
 import Markdown from 'markdown-to-jsx';
 import "../index.css";
 import {
   Default,
   GetPath,
   TemplateConfig,
   TemplateProps,
   GetHeadConfig,
   HeadConfig,
 } from "@yext/yext-sites-scripts";
 
 export const config: TemplateConfig = {
   stream: {
     $id: "index-stream",
     filter: {
      savedFilterIds: [
        '933983808'
      ],
    },
     fields: [
       'id',
       'uid',
       'meta',
       'name',
       'address',
       'hours',
       'mainPhone',
       'geocodedCoordinate',
       'logo',
       'photoGallery',
       'insuranceAccepted',
       'websiteUrl',
       'c_primaryColor',
       'c_secondaryColor',
       'c_richTextDescription',
       'c_featuredServices.id',
       'c_featuredServices.name',
       'c_featuredServices.description',
       'c_featuredServices.slug',
       'c_offeredServices.name',
       'c_offeredServices.slug',
       'c_offeredServices.c_subTopics.name',
       'c_offeredServices.c_subTopics.slug',
       'c_relatedDoctors.name',
       'c_relatedDoctors.headshot',
       'c_relatedDoctors.slug',
       'c_promotion'
     ],
     localization: {
       locales: ["en"],
       primary: false,
     },
   },
 };
 
 // 
 export const getPath: GetPath<TemplateProps> = (props) => {
  return `index.html`;
};
 
//
 export const getHeadConfig: GetHeadConfig<TemplateProps> = (props): HeadConfig => {
   return {
     title: props.document.name,
     charset: "UTF-8",
     viewport: "width=device-width, initial-scale=1",
     tags: [
       {
         type: "meta",
         attributes: {
           description: "This site was generated by the Yext SSG",
         },
       },
     ],
   };
 };
 

 const Index: Default<TemplateProps> = (props) => {
   const { document } = props;
   const {
     _site,
     name,
     address,
     description,
     c_richTextDescription,
     hours,
     mainPhone,
     geocodedCoordinate,
     logo,
     photoGallery,
     insuranceAccepted,
     c_primaryColor,
     c_secondaryColor,
     websiteUrl,
     c_featuredServices,
     c_relatedDoctors,
     c_offeredServices,
     c_promotion
   } = document;
 
   return (
     <>
       <body className="fonty-main">
         <Header site={_site}></Header>
         <Banner name={name} site={_site} photo={photoGallery[0].image.url} mainPhone={mainPhone}></Banner>
         {c_promotion && <Promo text={c_promotion}></Promo>}
          <div className="centered-container">
            <Doctors doctors={c_relatedDoctors}></Doctors>
            <FeaturedServices name={name} services={c_featuredServices} address={address} phone={mainPhone} backgroundColor={_site.c_secondaryColor}></FeaturedServices>
            <OfferedServices services={c_offeredServices} color={_site.c_secondaryColor}></OfferedServices>
            <Insurances list={insuranceAccepted}></Insurances>
            <div className="section space-y-5">
              <Markdown className="space-y-5">{c_richTextDescription}</Markdown>
            </div>
          </div>
         <Footer site={_site}></Footer>
       </body>
     </>
   );
 };
 
 export default Index;
 