import * as React from "react";

type Cta = {
  display?: string;
  buttonText: string;
  url: string;
  backgroundColor?: string;
  backgroundHover?: string;
  fontColor?: string;
  fontHoverColor?: string;
  hoverFont?: string;
};

const Cta = (props: Cta) => {
  const { display, buttonText, url, backgroundColor, backgroundHover, fontColor, fontHoverColor } = props;

  function MouseOver(event:any) {
    event.target.style.background = backgroundHover;
    event.target.style.color = fontHoverColor;
  }
  function MouseOut(event:any){
    event.target.style.background = backgroundColor;
    event.target.style.color = fontColor;
  }  

  return (
    <a
      href={url}
      className={`${display} text-${fontColor} py-4 px-6 text-2xl font-bold rounded-lg border-4 border-gray-800 hover:cursor-pointer`}
      style={{ background: backgroundColor, color: fontColor }}
      onMouseOver={MouseOver}
      onMouseOut={MouseOut}
      rel="noopener noreferrer"
    >
      {buttonText}
    </a>
  );
};

export default Cta;
