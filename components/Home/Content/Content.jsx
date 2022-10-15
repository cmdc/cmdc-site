import React from "react";
import AnimateOnScreen from "../../AnimateOnScreen";
import { ContentSection, TextWrapper, Text } from "./styles";

const Content = () => {
  return (
    <AnimateOnScreen>
      <ContentSection>
        <TextWrapper>
          <Text>
            IT Consultant
            <br /> we have been in the game for years and are able to help you
            bring your ideas and projects to life from A to Z
          </Text>
        </TextWrapper>
      </ContentSection>
    </AnimateOnScreen>
  );
};

export default Content;
