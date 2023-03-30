import { css } from "@emotion/react";
import { Typography } from "@mui/material";
import { Color } from "../theme/colors";
import arrowDown from "@/assets/icons/arrow_down.png";
import Image from "next/image";
import { Logo, PurpleLogo } from "./logo";
import { Mq } from "../theme/screen";
import { useEffect, useState } from "react";
import arrowDown_black from "@/assets/icons/arrowDown_black.png";

export const Pcheader = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };
  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
  });

  return (
    <div css={sx.root} className={scrollPosition < 62 ? "" : "headerBg"}>
      <div css={sx.inner}>
        {scrollPosition < 62 ? <Logo /> : <PurpleLogo />}
        <ul css={sx.nav}>
          <li>
            <Typography
              variant="body2"
              color={scrollPosition < 62 ? Color.WhiteText : Color.BlackText}
            >
              업로드
            </Typography>
          </li>
          <li>
            <Typography
              variant="body2"
              color={scrollPosition < 62 ? Color.WhiteText : Color.BlackText}
            >
              채팅
            </Typography>
          </li>{" "}
          <li>
            <Typography
              variant="body2"
              color={scrollPosition < 62 ? Color.WhiteText : Color.BlackText}
            >
              PDF관리
            </Typography>
          </li>{" "}
          <li>
            <Typography
              variant="body2"
              color={scrollPosition < 62 ? Color.WhiteText : Color.BlackText}
            >
              요금제
            </Typography>
          </li>
        </ul>
        <div css={sx.nameBtn}>
          <Typography
            variant="body2"
            color={scrollPosition < 62 ? Color.WhiteText : Color.BlackText}
          >
            홍길동님
          </Typography>
          <Image
            src={scrollPosition < 62 ? arrowDown : arrowDown_black}
            alt="down"
            width={9}
            height={5}
          />
        </div>
      </div>
    </div>
  );
};

const sx = {
  root: css`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    &.headerBg {
      background-color: #fff;
      color: ${Color.BlackText};
      box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.05);
    }
  `,
  inner: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 20px 0;
    max-width: 1000px;
    margin: 0 auto;
    @media ${Mq.xl} {
      padding: 20px 60px;
    }
  `,
  nav: css`
    display: flex;
    gap: 2.083vw;
  `,
  nameBtn: css`
    display: flex;
    align-items: center;
    gap: 11px;
  `,
};
