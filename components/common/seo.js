import Head from "next/head";
import { useContext } from "react";
import { GlobalContext } from "../../pages/_app";

const Seo = ({ seo }) => {
  //const { defaultSeo, siteName } = useContext(GlobalContext);

  const fullSeo = {
    // Add title
    metaTitle: `cmdc`,
    // Add description
    metaDescription:
      "the best way to code is search a thing already done, and play like Lego game",
    // Get full image URL
    shareImage: `/facivon.png`,
    // Keywords
    metaKeyword: `it consultant, cmdc, full stack, developers`,
    // Author
    metaAuthor: `cmdc`,
  };

  return (
    <Head>
      {fullSeo.metaTitle && (
        <>
          <title>{fullSeo.metaTitle}</title>
          <meta property="og:title" content={fullSeo.metaTitle} />
          <meta name="twitter:title" content={fullSeo.metaTitle} />
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
        </>
      )}
      {fullSeo.article && <meta property="og:type" content="article" />}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="description" content={fullSeo.metaDescription} />
      <meta name="keywords" content={fullSeo.metaKeyword} />
      <meta name="author" content={fullSeo.metaAuthor} />
    </Head>
  );
};

export default Seo;
