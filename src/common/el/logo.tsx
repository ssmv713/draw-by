import { css } from "@emotion/react";

import { Typography } from "@mui/material";
import { Color } from "../theme/colors";

export const Logo = () => {
  return (
    <>
      <div css={sx.logo}>
        <div css={sx.logoImg}></div>
        <Typography color={Color.WhiteText} variant="body1">
          DrawBy
        </Typography>
      </div>
    </>
  );
};

const sx = {
  logo: css`
    display: flex;
    gap: 10px;
  `,
  logoImg: css`
    width: 30px;
    height: 30px;
    background-color: #fff;
    border-radius: 50%;
  `,
};
