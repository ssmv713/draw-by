import {
  Button,
  Input,
  Stack,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { Color } from "@/common/theme/colors";
import { css } from "@emotion/react";
import menu from "@/assets/icons/menu.png";
import openIcon from "@/assets/icons/openFile.png";
import send from "@/assets/icons/send.png";
import { blue } from "@mui/material/colors";
import { UploadDialog } from "./uploadDialog";
import { useState } from "react";
import { Mq, useCustomMediaQuery } from "@/common/theme/screen";

type ChatFrameType = {
  children: React.ReactElement;
};

export const ChatFrame = ({ children }: ChatFrameType) => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const { isSmall } = useCustomMediaQuery();

  return (
    <Stack css={sx.chat}>
      <UploadDialog open={open} onClose={handleClose}></UploadDialog>
      <Stack css={sx.topChat} direction="row" justifyContent="space-between">
        <Stack direction="row" alignItems="center" gap="13px">
          <Button css={sx.menuBtn} onClick={handleClickOpen}>
            <Image src={menu} alt="menu" width={18} height={18} />
          </Button>
          <Typography color={Color.WhiteText}>
            {"filename 와(과) AI 채팅 중"}
          </Typography>
        </Stack>
        <Button css={sx.pdfButton}>
          <Stack
            css={sx.openFile}
            direction="row"
            alignItems="center"
            gap="12px"
          >
            {isSmall ? null : (
              <Typography color={Color.WhiteText}>{"PDF 파일보기"}</Typography>
            )}
            <Image src={openIcon} alt="open" width={16} height={16} />
          </Stack>
        </Button>
      </Stack>
      <Stack css={sx.chatContent}>{children}</Stack>
      <Stack
        css={sx.chatBottom}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <TextField
          css={sx.message}
          multiline
          variant="standard"
          placeholder="메시지를 입력하세요."
          InputProps={{
            disableUnderline: true,
            style: { color: "white" },
          }}
        />

        <div css={sx.send}>
          <Button css={sx.sendbtn}>
            <Image src={send} alt="send" width={24} height={24} />
          </Button>
        </div>
      </Stack>
    </Stack>
  );
};

const sx = {
  chat: css`
    max-width: 1000px;
    margin: 0 auto;
  `,
  topChat: css`
    border: solid 1px #fff;
    padding: 0 23px;
  `,
  menuBtn: css`
    min-width: 0;
    &:hover {
      background-color: rgba(0, 0, 0, 0.2);
    }
  `,
  pdfButton: css`
    padding: 0;
    min-width: fit-content;
    &:hover {
      background-color: transparent;
    }
  `,
  openFile: css`
    border-left: solid 1px #fff;
    height: 100%;
    padding: 17px 0 17px 20px;
  `,
  chatContent: css`
    padding: 60px;
    border-left: solid 1px #fff;
    border-right: solid 1px #fff;
    @media ${Mq.sm} {
      padding: 40px 20px 120px 20px;
    }
  `,
  chatBottom: css`
    border: solid 1px #fff;
    padding-left: 20px;
  `,
  message: css`
    width: 100%;
    outline: none;
    padding-right: 20px;
    /* border-right: solid 1px #fff; */
  `,
  send: css`
    padding: 20px;
    height: 100%;
    border-left: solid 1px #fff;
    width: 63.99px;
    display: flex;
  `,
  sendbtn: css`
    min-width: fit-content;
    padding: 0;
  `,
};
