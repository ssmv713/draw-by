import { HeaderView } from "@/common/el/Header/HeaderView";
import { Color } from "@/common/theme/colors";
import { css } from "@emotion/react";
import { Button, LinearProgress, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { DetailDialog, EditDialog, uploadModels } from "./el";

export const ManageView = () => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [editOpen, setEditOpen] = useState(false);
  const handleEditOpen = () => {
    setEditOpen(true);
    setOpen(false);
  };
  const handleEditClose = () => {
    setEditOpen(false);
    setOpen(true);
  };
  const title = {
    main: "PDF 파일 관리",
    desc: "PDF 파일을 클릭하시면, 파일의 이름을 수정하거나, 파일을 삭제할 수 있어요.",
  };

  return (
    <div css={sx.root}>
      <HeaderView />
      <DetailDialog
        open={open}
        onClose={handleClose}
        handleEditOpen={handleEditOpen}
      />
      <EditDialog open={editOpen} onClose={handleEditClose} />

      <Stack p="60px" css={sx.dialog}>
        <Typography variant="h2" color={Color.BlackText}>
          {title.main}
        </Typography>
        <Typography variant="body2" mt="10px" mb="40px" color={Color.GrayText}>
          {title.desc}
        </Typography>
        <div css={sx.menu}>
          <span css={sx.menuTitle}>파일명</span>
          <span css={sx.menuTitle}>업로드 일치</span>
          <span css={sx.menuTitle}>파일 ID</span>
        </div>
        {uploadModels.map((it, index) => (
          <Button css={sx.button} key={index} onClick={handleClickOpen}>
            <Typography color={Color.BlackText} variant="body2">
              {it.fileName}
            </Typography>
            <Typography color={Color.GrayText3} variant="body2">
              {it.dates}
            </Typography>
            <Typography color={Color.GrayText3} variant="body2">
              {it.ID}
            </Typography>
          </Button>
        ))}
        <Stack direction="row" p="20px" justifyContent="space-between">
          <Typography variant="body1" color={Color.BlackText}>
            {"스토리지 사용량"}
          </Typography>
          <Stack direction="row">
            <Typography color={Color.BrandMain}>300MB </Typography>
            <Typography color={Color.BlackText}>{"사용중"}</Typography>
            <Typography color={Color.GrayText}>{" / 총 1,000MB"}</Typography>
          </Stack>
        </Stack>
        <LinearProgress
          variant="determinate"
          value={35}
          color="secondary"
          sx={{
            backgroundColor: Color.chatBackground,
            "& .MuiLinearProgress-bar": {
              borderRadius: 10,
              overflow: "hidden",
            },
            "& .MuiLinearProgress-bar1Buffer": {
              borderRadius: 10,
              overflow: "hidden",
            },
          }}
        />
      </Stack>
    </div>
  );
};

const sx = {
  root: css`
    background-image: url(/assets/bg/chat_bg.png);
    background-position: center;
    width: 100%;
    height: 100%;
    padding-top: 62px;
    padding-bottom: 100px;
  `,
  dialog: css`
    max-width: 1000px;
    background-color: #fff;
    border-radius: 20px;
    margin: 100px auto;
  `,
  menu: css`
    padding: 10px 20px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    font-family: "Pretendard-Regular";
  `,
  menuTitle: css`
    color: ${Color.GrayText};
    font-size: 12px;
  `,
  button: css`
    display: grid !important;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: flex-start;
    width: 100%;
    padding: 20px;
    border-top: solid 1px ${Color.LightGrayText};
    p {
      display: flex;
    }
  `,
};
