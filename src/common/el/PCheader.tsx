import { css } from "@emotion/react";
import { Typography } from "@mui/material";
import { Color } from "../theme/colors";
import arrowDown from "@/assets/icons/arrow_down.png";
import Image from "next/image";
import { Logo } from "./logo";
import { Mq } from "../theme/screen";

export const Pcheader = () => {
  return (
    <div css={sx.root}>
      <div css={sx.inner}>
        <Logo />
        <ul css={sx.nav}>
          <li>
            <Typography variant="body2" color={Color.WhiteText}>
              업로드
            </Typography>
          </li>
          <li>
            <Typography variant="body2" color={Color.WhiteText}>
              채팅
            </Typography>
          </li>{" "}
          <li>
            <Typography variant="body2" color={Color.WhiteText}>
              PDF관리
            </Typography>
          </li>{" "}
          <li>
            <Typography variant="body2" color={Color.WhiteText}>
              요금제
            </Typography>
          </li>
        </ul>
        <div css={sx.nameBtn}>
          <Typography variant="body2" color={Color.WhiteText}>
            홍길동님
          </Typography>
          <Image src={arrowDown} alt="down" width={9} height={5} />
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
