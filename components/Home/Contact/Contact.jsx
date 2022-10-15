import React from "react";
import useCursorStyle from "../../../hooks/useCursorStyle";
import AnimateOnScreen from "../../AnimateOnScreen";
import SocialMedia from "../../SocialMedia";
import { ContactSection } from "./styles";

const Contact = () => {
  const { addCursorBorder, removeCursorBorder } = useCursorStyle();

  return (
    <AnimateOnScreen>
      <ContactSection>
        <div className="column">
          <a
            className="contact-text"
            href="tel:+3938917832XX"
            onMouseEnter={addCursorBorder}
            onMouseLeave={removeCursorBorder}
          >
            +39 389 178 32XX
          </a>
          <br />
          <a
            className="contact-text"
            href="mailto:cmdc.business@gmail.com"
            onMouseEnter={addCursorBorder}
            onMouseLeave={removeCursorBorder}
          >
            cmdc.business@gmail.com
          </a>
        </div>
        <address className="column contact-text">
          15 Camburhill Ct Unit C<br /> Charlottetown, PE C1E 0E2
        </address>
        <SocialMedia className="column" />
      </ContactSection>
    </AnimateOnScreen>
  );
};

export default React.memo(Contact);
