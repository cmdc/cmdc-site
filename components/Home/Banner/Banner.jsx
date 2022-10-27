import React from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import useCursorStyle from "../../../hooks/useCursorStyle";
import useWindowSize from "../../../hooks/useWindowSize";
import useStyledTheme from "../../../hooks/useStyledTheme";
import CanvasEraser from "../../CanvasEraser";
import { BannerSection, BannerTitle, VideoContainer } from "./styles";

const Video = dynamic(import("../../common/video"), {
  ssr: false,
});

const titleAnimation = {
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemTitleAnimation = {
  initial: { y: "100vh" },
  animate: {
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

const seoH1 = {
  position: "absolute",
  width: "1px",
  height: "1px",
  padding: 0,
  margin: "-1px",
  overflow: "hidden",
  clip: { rect: [0, 0, 0, 0] },
  whiteSpace: "nowrap",
  borderWidth: 0,
};

const Banner = () => {
  const canvasRef = React.useRef(null);
  const windowSize = useWindowSize();
  const theme = useStyledTheme();
  const { addCursorBorder, removeCursorBorder } = useCursorStyle();

  return (
    <BannerSection style={{ height: windowSize.height }}>
      <VideoContainer>
        <Video src="/videos/cmdc.mp4" height="100%" width="100%" />
      </VideoContainer>
      <CanvasEraser
        ref={canvasRef}
        width={windowSize.width}
        height={windowSize.height}
        size={120}
        background={theme.background}
        onMouseEnter={addCursorBorder}
        onMouseLeave={removeCursorBorder}
      />
      <BannerTitle
        variants={titleAnimation}
        initial="initial"
        animate="animate"
      >
        {/* <motion.span variants={itemTitleAnimation}>DIG</motion.span> */}
        <motion.span variants={itemTitleAnimation}>cmdc</motion.span>
      </BannerTitle>
      <h1 style={seoH1}>
        cmdc is an it consulting specialized in projects development, analysis
        and projectation of software solutions, cloud technology and native
        applications
      </h1>
      <h3 style={seoH1}>
        coding is a passion for us and make thing well its a must
      </h3>
    </BannerSection>
  );
};

export default React.memo(Banner);
