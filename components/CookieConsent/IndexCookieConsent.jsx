import Link from "next/link";
import { useEffect } from "react";
import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";

const IndexCookieConsent = () => {
  const handleAcceptCookie = () => {
    window.gtag("consent", "update", {
      ad_storage: "granted",
      analytics_storage: "granted",
    });
    //window.fbq('consent', 'grant')
  };

  useEffect(() => {
    getCookieConsentValue() ? handleAcceptCookie() : null;
  }, []);

  return (
    <CookieConsent
      disableStyles={false}
      location={"bottom"}
      style={{
        background: "#fffff",
        alignItems: "center",
        paddingLeft: "1.75rem",
        paddingRight: "1.75rem",
      }}
      overlay={false}
      buttonStyle={{
        background: "#D6BA4B",
        margin: "0rem",
        marginBottom: "1rem",
        borderRadius: "9999px",
        color: "#FFF",
        boxShadow:
          "0 10px 15px -3px rgb(0 0 0 / 10%), 0 4px 6px -2px rgb(0 0 0 / 5%)",
      }}
      declineButtonStyle={{
        background: "#474747",
        margin: "0rem",
        marginBottom: "1rem",
        borderRadius: "9999px",
        color: "#FFF",
        boxShadow:
          "0 10px 15px -3px rgb(0 0 0 / 10%), 0 4px 6px -2px rgb(0 0 0 / 5%)",
      }}
      containerClasses="bg-gray-100 dark:bg-black sm:flex md:h-40"
      contentClasses="bg-gray-100 dark:bg-black text-black dark:text-white"
      buttonWrapperClasses="bg-gray-100 dark:bg-black mdMax:w-full"
      buttonClasses="w-full lg:w-48 px-3 py-1 bg-gray-300 hover:bg-gray-200 hover:underline rounded text-gray-700 mr-2 mb-5 uppercase tracking-widest text-xs font-bold"
      declineButtonClasses="w-full lg:w-48 px-3 py-1 bg-gray-300 hover:bg-gray-200 hover:underline rounded text-gray-700 mr-2 mb-5 uppercase tracking-widest text-xs font-bold"
      buttonText="Accept"
      onAccept={(acceptedByScrolling) => {
        return acceptedByScrolling
          ? handleAcceptCookie()
          : handleAcceptCookie();
      }}
      enableDeclineButton
      declineButtonText="Decline"
      onDecline={() => {
        alert("Cookies Declined!");
        //resetCookieConsentValue()
      }}
      expires={150}
    >
      We use cookies to improve your experience on our site.{" "}
      <Link href="/legacy/cookie">Cookie policy</Link>
      {" and "}
      <Link href="/legacy/policy">Privacy policy</Link>
    </CookieConsent>
  );
};

export default IndexCookieConsent;
