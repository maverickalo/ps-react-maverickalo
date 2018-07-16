import React from "react";
import styled from "styled-components";

function Eyeball() {
  return (
    <g transform="matrix(.02146 0 0 .02146 1 1)" fill="#4d4d4d">
      <path d="m466.07 161.53c-205.6 0-382.8 121.2-464.2 296.1-2.5 5.3-2.5 11.5 0 16.9 81.4 174.9 258.6 296.1 464.2 296.1 205.6 0 382.8-121.2 464.2-296.1 2.5-5.3 2.5-11.5 0-16.9-81.4-174.9-258.6-296.1-464.2-296.1m0 514.7c-116.1 0-210.1-94.1-210.1-210.1 0-116.1 94.1-210.1 210.1-210.1 116.1 0 210.1 94.1 210.1 210.1 0 116-94.1 210.1-210.1 210.1" />
      <circle cx="466.08" cy="466.02" r="134.5" />
    </g>
  );
}

function WheelChair() {
  return (
    <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4z" />
  );
}

/** SVG Eye Icon */
function Icon(props) {
  const { width, height, type } = props;
  const SVG = styled.svg`
    width: ${props => (width ? width : "16px")};
    height: ${props => (height ? height : "16px")};
  `;
  // Attribution: Fabián Alexis at https://commons.wikimedia.org/wiki/File:Antu_view-preview.svg
  return (
    <SVG viewBox="0 0 22 22" {...props}>
      {props.type === "wheelchair" ? <WheelChair /> : <Eyeball />}
    </SVG>
  );
}

export default Icon;
