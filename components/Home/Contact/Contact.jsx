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
            title="Phone Number"
            className="contact-text"
            href="tel:+3938917832XX"
            onMouseEnter={addCursorBorder}
            onMouseLeave={removeCursorBorder}
          >
            +39 389 178 32XX
          </a>
          <br />
          <a
            title="Email"
            className="contact-text"
            href="mailto:cmdc.business@gmail.com"
            onMouseEnter={addCursorBorder}
            onMouseLeave={removeCursorBorder}
          >
            cmdc.business@gmail.com
          </a>
        </div>
        <a
          title="Map Position"
          href="https://www.google.com/maps?q=Potenza,+85100"
          onMouseEnter={addCursorBorder}
          onMouseLeave={removeCursorBorder}
          className="column contact-text"
        >
          Via XX Settembre
          <br /> PZ
        </a>
        <SocialMedia className="column" />
      </ContactSection>
    </AnimateOnScreen>
  );
};

export default React.memo(Contact);
