import { useRouter } from "next/router";
import React from "react";
import Seo from "../../components/common/seo";

const Home = () => {
  const router = useRouter();
  // COUNT SCAN
  // UPDATE COLLECTIONS DB
  // REDIRECT
  return (
    <>
      <Seo />
      QR
    </>
  );
};

export default React.memo(Home);
