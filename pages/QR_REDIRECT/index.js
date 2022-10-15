import React from "react";
import Seo from "../../components/common/seo";

const QR = () => {
  // COUNT SCAN
  // UPDATE COLLECTIONS DB
  // REDIRECT
  return (
    <>
      <Seo />
      <>QR</>
    </>
  );
};

QR.getInitialProps = async ({ res }) => {
  const targetURL = "/";
  if (res) {
    res.writeHead(307, { Location: targetURL });
    res.end();
    /* await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(res.writeHead(307, { Location: targetURL }) && res.end());
      }, 2000);
    }); */
  } else {
    window.location = targetURL;

    await new Promise((resolve) => {});
  }

  return {};
};

export default QR;
