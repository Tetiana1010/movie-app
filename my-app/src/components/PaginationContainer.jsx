import React from "react";
import { useSearchParams } from "react-router-dom";
import { Pagination } from "@mui/material";

export default function PaginationContainer({ total_pages }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = (_, number) => {
    setSearchParams({
      ...Object.fromEntries(searchParams.entries()),
      page: number,
    });
    window.location.reload();
  };

  return (
    <div>
      <Pagination
        count={total_pages}
        onChange={handleChange}
        page={searchParams.has("page") ? parseInt(searchParams.get("page")) : 1}
      />
    </div>
  );
}
