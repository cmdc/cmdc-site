import React from "react";
import items from "../../../utils/constants/services-items";
import useCursorStyle from "../../../hooks/useCursorStyle";
import AnimateOnScreen from "../../AnimateOnScreen";
import {
  ContentSection,
  TextWrapper,
  ServicesWrapper,
  AccordionToggle,
  AccordionContent,
} from "./styles";

const About = () => {
  const [selectedItem, setSelectedItem] = React.useState(0);
  const { addCursorBorder, removeCursorBorder } = useCursorStyle();

  const handleMouseEnter = React.useCallback(
    (curr) => {
      if (curr === selectedItem) return;

      addCursorBorder();
    },
    [selectedItem, addCursorBorder]
  );

  const handleMouseLeave = React.useCallback(
    (curr) => {
      if (curr === selectedItem) return;

      removeCursorBorder();
    },
    [selectedItem, removeCursorBorder]
  );

  return (
    <AnimateOnScreen>
      <ContentSection>
        <TextWrapper>
          <h2>
            cmdc is an IT Consultant, we follow our customers with passion and
            dedication
          </h2>
          <p>
            our best advertising is the testimonials of ours customers. We
            follow different types of reality, and we are not afraid of to
            experiment. Over time we have developed expertise in design and
            implementation of IT solutions, skills for the system engineering of
            company networks, numerical control systems for the manufacturing,
            artificial intelligence AI and internet of things IOT. Do you want
            to know us? contact us!
          </p>
        </TextWrapper>
        <ServicesWrapper>
          <h3>Services</h3>
          {items.map(([item, services], itemIndex) => (
            <React.Fragment key={item}>
              <AccordionToggle
                aria-expanded={itemIndex === selectedItem}
                onClick={() => setSelectedItem(itemIndex)}
                onMouseEnter={() => handleMouseEnter(itemIndex)}
                onMouseLeave={() => handleMouseLeave(itemIndex)}
              >
                {item}
              </AccordionToggle>
              <AccordionContent
                animate={{ height: itemIndex === selectedItem ? "100%" : "0" }}
                transition={{ duration: 0.7, ease: [0, 0.7, 0.29, 0.97] }}
              >
                {services.map((service, serviceIndex) => (
                  <p key={`${itemIndex}_${serviceIndex}`}>{service}</p>
                ))}
              </AccordionContent>
            </React.Fragment>
          ))}
        </ServicesWrapper>
      </ContentSection>
    </AnimateOnScreen>
  );
};

export default React.memo(About);
