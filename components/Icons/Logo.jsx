import Image from "next/image";
import React from "react";
import { useThemeContext } from "../../context/theme";
import useCursorStyle from "../../hooks/useCursorStyle";
import useStyledTheme from "../../hooks/useStyledTheme";

const Logo = ({ buttonProps = {}, ...rootProps }) => {
  const theme = useStyledTheme();
  const [, dispatch] = useThemeContext();
  const {
    addCursorBorder,
    removeCursorBorder,
    addCursorColor,
    resetCursorColor,
  } = useCursorStyle();

  const handleToggleTheme = React.useCallback(
    (event) => {
      event.preventDefault();
      dispatch({ type: "TOGGLE_THEME" });

      // reset the cursor color so that it uses the theme text color as default
      addCursorColor(null);
    },
    [dispatch, addCursorColor]
  );

  return (
    <div
      onMouseEnter={addCursorBorder}
      onMouseLeave={removeCursorBorder}
      onClick={handleToggleTheme}
      {...rootProps}
    >
      <Image
        unoptimized
        alt={"cmdc logo motion"}
        src={"/cmdc-motion.svg"}
        role={"button"}
        fill
        priority
        sizes="(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          33vw"
        onMouseEnter={() => addCursorColor(theme.text)}
        onMouseLeave={resetCursorColor}
        {...buttonProps}
      />
    </div>
  );
};

export default Logo;
