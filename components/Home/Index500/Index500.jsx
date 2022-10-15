import React from "react";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import AnimateOnScreen from "../../AnimateOnScreen";
import { ContentSection, TextWrapper } from "./styles";

const Index500 = () => {
  return (
    <AnimateOnScreen>
      <ContentSection style={{ marginTop: "15rem" }}>
        <TextWrapper>
          <h2>Error 500</h2>
          <h2>Server Error</h2>
          <p>Sorry, we have a problem. We are working on it.</p>
          <p>
            <Link href="/">
              <a style={{ marginTop: "2rem" }}>
                Go back home
                <ArrowRightIcon
                  style={{ width: "2.25rem", height: "2.25rem" }}
                />
              </a>
            </Link>
          </p>
        </TextWrapper>
      </ContentSection>
    </AnimateOnScreen>
  );
};

export default React.memo(Index500);
