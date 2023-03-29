import { Logo } from "./logo";
import menu from "@/assets/icons/menu.png";
import Image from "next/image";
import { css } from "@emotion/react";

export const MobileHeader = () => {
  return (
    <div css={sx.root}>
      <Logo />
      <Image src={menu} alt="menu" width={24} height={24} />
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
  `,
};
