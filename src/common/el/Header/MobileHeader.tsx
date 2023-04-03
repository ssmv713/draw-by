import { Logo, PurpleLogo } from "../logo";
import menu from "@/assets/icons/menu.png";
import Image from "next/image";
import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import menu_black from "@/assets/icons/menu_black.png";

export const MobileHeader = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };
  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
  });
  return (
    <div css={sx.root} className={scrollPosition < 62 ? "" : "headerBg"}>
      {scrollPosition < 62 ? <Logo /> : <PurpleLogo />}
      {scrollPosition < 62 ? (
        <Image src={menu} alt="menu" width={24} height={24} />
      ) : (
        <Image src={menu_black} alt="menu" width={24} height={24} />
      )}
    </div>
  );
};

const sx = {
  root: css`
    display: flex;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
    padding: 16px;
    width: 100%;
    align-items: center;
    &.headerBg {
      background-color: #fff;

      box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.05);
    }
  `,
};
