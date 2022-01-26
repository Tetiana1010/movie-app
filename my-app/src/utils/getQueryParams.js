import queryString from "query-string";

export default function getQueryParams(myQueryString){
  return queryString.parse(myQueryString);
};