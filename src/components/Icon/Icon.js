import React from "react";
import styled from "styled-components";

function Eyeball(props) {
  return (
    <g transform="matrix(.02146 0 0 .02146 1 1)" fill="#4d4d4d">
      <path d="m466.07 161.53c-205.6 0-382.8 121.2-464.2 296.1-2.5 5.3-2.5 11.5 0 16.9 81.4 174.9 258.6 296.1 464.2 296.1 205.6 0 382.8-121.2 464.2-296.1 2.5-5.3 2.5-11.5 0-16.9-81.4-174.9-258.6-296.1-464.2-296.1m0 514.7c-116.1 0-210.1-94.1-210.1-210.1 0-116.1 94.1-210.1 210.1-210.1 116.1 0 210.1 94.1 210.1 210.1 0 116-94.1 210.1-210.1 210.1" />
      <circle cx="466.08" cy="466.02" r="134.5" />
    </g>
  );
}

/** SVG Eye Icon */
function Icon(props) {
  const { width, height } = this.props;
  const SVG = styled.svg`
    border: 1px solid red;
    width: ${props => (props.width ? props.width : "16px")};
    height: ${props => (props.height ? props.height : "16px")};
  `;
  // Attribution: Fabián Alexis at https://commons.wikimedia.org/wiki/File:Antu_view-preview.svg
  return (
    <SVG viewBox="0 0 22 22" {...props}>
      <Eyeball />
    </SVG>
  );
}

export default Icon;
