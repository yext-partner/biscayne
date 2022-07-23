import * as React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Cta from "../components/cta";
import Markdown from 'markdown-to-jsx';
import { formatPhoneNumber } from 'react-phone-number-input';
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
   $id: "campaign",
   filter: {
    savedFilterIds: [
      '981468013'
    ],
  },
   fields: [
     'id',
     'uid',
     'meta',
     'name',
     'slug',
     'richTextDescription',
     'photoGallery',
     'c_primaryCTA',
     'c_secondaryCTA'
   ],
   localization: {
     locales: ["en"],
     primary: false,
   },
 },
};

export const getPath: GetPath<TemplateProps> = ({document}) => {
  return `${document.slug.toString()}`;
};

export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = ({relativePrefixToRoot, path, document}): HeadConfig => {
  return {
    title: `${document.name}`,
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
    tags: [
      {
        type: "meta",
        attributes: {
          description: `${document._site.name} | ${document.name} campaign page!`,
        },
      },
    ],
  };
};


const Campaign: Template<TemplateRenderProps> = ({relativePrefixToRoot, path, document}) => {
  const {
    _site,
    name,
    richTextDescription,
    photoGallery,
    c_primaryCTA,
    c_secondaryCTA
  } = document;

  // Rich Text Localization Transforms
  var updatedRTD = richTextDescription;
  updatedRTD = updatedRTD.replaceAll("{{name}}", _site.c_relatedFacility[0].name);
  updatedRTD = updatedRTD.replaceAll("{{address.city}}", _site.c_relatedFacility[0].address.city);
  updatedRTD = updatedRTD.replaceAll("{{address.region}}", _site.c_relatedFacility[0].address.region);
  updatedRTD = updatedRTD.replaceAll("{{mainPhone}}", formatPhoneNumber(_site.c_relatedFacility[0].mainPhone));

  // Photo Sourcesets
  var dynlUrl = photoGallery[0].image.url.replace("a.mktgcdn.com", "dynl.mktgcdn.com");
  var extension = photoGallery[0].image.url.slice(-4);
  var small = dynlUrl.slice(0, dynlUrl.lastIndexOf("/")) + "/400x400" + extension;

  return (
    <>
      <body className="font-main">
        <Header site={_site}></Header>
          <div className="centered-container">
            <div className="breadcrumbs flex space-x-5 py-5">
              <a href="/" className="font-semibold hover:underline">Home</a>
              <span>/</span>
              <span>{name}</span>
            </div>
            <h1 className="section text-center font-semibold">{name}</h1>
            <div className="section">
              <Markdown className="space-y-5">{updatedRTD}</Markdown>
            </div>
            <div className="section flex flex-col gap-y-5 text-center md:flex-row md:justify-center md:gap-x-10">
              <Cta buttonText={c_primaryCTA.label} url={c_primaryCTA.url} backgroundColor={_site.c_secondaryColor} fontColor='white' backgroundHover="" fontHoverColor="black"></Cta>
              <Cta buttonText={c_secondaryCTA.label} url={c_secondaryCTA.url} backgroundColor={_site.c_secondaryColor} fontColor="white" backgroundHover="" fontHoverColor="black"></Cta>
            </div>
            <img 
              className="section"
              src={photoGallery[0].image.url}
            />  
          </div>
        <Footer site={_site}></Footer>
      </body>
    </>
  );
};

export default Campaign;
