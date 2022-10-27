import React from "react";
import useCursorStyle from "../../hooks/useCursorStyle";
import { Instagram, Facebook, Linkedin } from "../Icons";
import StickyCursor from "../StickyCursor";
import { Container, Link } from "./styles";

const medias = [
  {
    component: Instagram,
    title: "Instagram",
    url: "https://www.instagram.com/cmdcbusiness/",
  },
  {
    component: Linkedin,
    title: "Linkedin",
    url: "https://www.linkedin.com/company/cmdcbusiness/",
  },
];

const SocialMedia = (props) => {
  const { addCursorBorder, removeCursorBorder } = useCursorStyle();

  return (
    <Container {...props}>
      {medias.map(({ component: Component, url, title }) => (
        <StickyCursor key={url}>
          <Link
            target="_blank"
            rel="noopener"
            href={url}
            title={title}
            onMouseEnter={addCursorBorder}
            onMouseLeave={removeCursorBorder}
          >
            <Component />
          </Link>
        </StickyCursor>
      ))}
    </Container>
  );
};

export default React.memo(SocialMedia);
