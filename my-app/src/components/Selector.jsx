import React from "react";
import styled from "styled-components";

export default function Selector() {
  return (
    <StyledSelector>
      <div>
        <div className="anchor">Today</div>
        <div className="anchor">Week</div>
      </div>
    </StyledSelector>
  );
}

const StyledSelector = styled.div`
  div {
    display: flex;
    justify-content: flex-start;
    align-items: stretch;
    align-content: center;
    border: 1px solid black;
    border-radius: 30px;

    .anchor {
      position: relative;
      top: 0;
      left: 0;
      z-index: 1;
    }
  }
`;
