import Link from "next/link";
import { useEffect } from "react";
import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import { useThemeContext } from "../../context/theme";
import useStyledTheme from "../../hooks/useStyledTheme";

const IndexCookieConsent = () => {
  const theme = useStyledTheme();
  const [state] = useThemeContext();

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
        backgroundColor: state.theme === "dark" ? "#2b2b2b" : "#f3f4f6",
        opacity: 0.65,
        paddingTop: "1rem",
        paddingBottom: "0.75rem",
        background: "#fffff",
        alignItems: "center",
        paddingLeft: "1.75rem",
        paddingRight: "1.75rem",
      }}
      overlay={false}
      buttonStyle={{
        background: theme.colors.cmdc,
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
      contentStyle={{
        backgroundColor: state.theme === "dark" ? "#2b2b2b" : "#f3f4f6",
        color: state.theme === "dark" ? "#ffffff" : "#000000",
      }}
      containerClasses="bg-gray-100 dark:bg-black sm:flex md:h-40"
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
