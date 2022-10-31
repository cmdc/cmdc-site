import React from "react";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import AnimateOnScreen from "../../AnimateOnScreen";
import { ContentSection, TextWrapper } from "./styles";

const Index404 = () => {
  return (
    <AnimateOnScreen>
      <ContentSection style={{ marginTop: "15rem" }}>
        <TextWrapper>
          <h2>Error 404</h2>
          <h2>Page not found</h2>
          <p>
            Sorry, the page you are looking for does not exist. Try going back
            or visiting a different link.
          </p>
          <p>
            <Link href="/" style={{ marginTop: "2rem" }}>
              Go back home
              <ArrowRightIcon style={{ width: "2.25rem", height: "2.25rem" }} />
            </Link>
          </p>
        </TextWrapper>
      </ContentSection>
    </AnimateOnScreen>
  );
};

export default React.memo(Index404);
