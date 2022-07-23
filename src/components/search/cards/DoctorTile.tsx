import {
  CardProps,
  renderHighlightedValue,
} from "@yext/answers-react-components";
import * as React from "react";
import Img, { Image } from "../../Img";

const DoctorTile = ({ result }: CardProps) => {
  const title = (result.highlightedFields?.name ?? result.name) as string;
  const headshot = result.rawData.headshot as Image;
  const url = headshot.url;
  return (
    <a
      className="border rounded-md flex flex-col overflow-hidden search-card bg-white"
      href={result.rawData.slug as string}
    >
      {headshot && (
        <div className="">
          <img src={headshot.url}></img>
          {/* <Img
            image={headshot}
            className=""
            aspectRatio={1}
            layout="full-width"
          /> */}
        </div>
      )}
      <div className="p-4">
        {title && <div>{renderHighlightedValue(title)}</div>}
        {/* <pre>{JSON.stringify(result.rawData, null, 2)}</pre> */}
      </div>
    </a>
  );
};

export default DoctorTile;
