import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import movieApi from "../../services/movieApi.js";

export default function Reviews() {
  const { id } = useParams();

  const [reviws, setReview] = useState([]);

  useEffect(() => {
    movieApi.fetchReviewsWithQuery(id).then((response) => setReview(response));
  }, []);

  return (
    <ReviewStyled>
      <h1>Reviews ({reviws.length}):</h1>
      {reviws.length > 1 &&
        reviws.map((reviw) => (
          <div key={reviw.id} className="review">
            <h3>{reviw.author}</h3>
            <p>{reviw.content}</p>
          </div>
        ))}
    </ReviewStyled>
  );
}

const ReviewStyled = styled.div`
  margin: 1rem;
  .review {
    padding: 0.3rem 1rem;
    margin: 1rem 0;
    -webkit-box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.1);
    box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.1);
  }
`;
