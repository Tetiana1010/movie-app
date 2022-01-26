import React from "react";
import { Rating } from "@mui/material";
import styled from "styled-components";

export default function Rate({ rate }) {
  return (
    <RateStyling>
      <Rating
        name="simple-controlled"
        value={rate / 2}
        precision={0.1}
        disabled={true}
      />
    </RateStyling>
  );
}

const RateStyling = styled.div`
  padding-top: 0.5rem;
  height: 30px;
`;
