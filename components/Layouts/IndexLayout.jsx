import React, { useState } from "react";
import Seo from "../common/seo";
import { useContext } from "react";

const IndexLayout = ({ children, seo }) => {
  const [smMatches, setSmMatches] = useState(false);

  return (
    <>
      <Seo seo={seo} />
      {children}
    </>
  );
};

export default IndexLayout;
