import Head from "next/head";
import { useContext } from "react";
import { GlobalContext } from "../../pages/_app";

const Seo = ({ seo }) => {
  //const { defaultSeo, siteName } = useContext(GlobalContext);

  const fullSeo = {
    // Add title
    metaTitle: `cmdc | the best way to code`,
    // Add description
    metaDescription:
      "the best way to code is search a thing already done, and play like Lego game",
    // Get full image URL
    shareImage: `https://cmdc.it/social.jpg`,
    // Keywords
    metaKeyword: `it consultant, cmdc, full stack, developers`,
    // Author
    metaAuthor: `cmdc`,
    // URL
    metaUrl: `https://cmdc.it`,
  };

  return (
    <Head>
      {fullSeo.metaTitle && (
        <>
          <title>{fullSeo.metaTitle}</title>
          <meta property="og:title" content={fullSeo.metaTitle} />
          <meta name="twitter:title" content={fullSeo.metaTitle} />
          <meta property="og:image:alt" content={fullSeo.metaTitle} />
          <meta property="og:site_name" content={fullSeo.metaTitle} />
        </>
      )}
      {fullSeo.metaDescription && (
        <>
          <meta name="description" content={fullSeo.metaDescription} />
          <meta property="og:description" content={fullSeo.metaDescription} />
          <meta name="twitter:description" content={fullSeo.metaDescription} />
        </>
      )}
      {fullSeo.shareImage && (
        <>
          <meta property="og:image" content={fullSeo.shareImage} />
          <meta name="twitter:image" content={fullSeo.shareImage} />
          <meta name="image" content={fullSeo.shareImage} />
          <meta property="og:image:height" content="1200" />
          <meta property="og:image:width" content="630" />
        </>
      )}
      {fullSeo.metaUrl && <meta property="og:url" content={fullSeo.metaUrl} />}
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary"></meta>
      <meta name="keywords" content={fullSeo.metaKeyword} />
      <meta name="author" content={fullSeo.metaAuthor} />
    </Head>
  );
};

export default Seo;
