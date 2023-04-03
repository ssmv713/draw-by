import { Button, Dialog, DialogTitle, Stack, Typography } from "@mui/material";
import { css } from "@emotion/react";
import closeIcon from "@/assets/icons/close.png";
import Image from "next/image";
import { Color } from "@/common/theme/colors";
import { detailModels } from "./model";
import edit from "@/assets/icons/edit.png";
import trash from "@/assets/icons/trash.png";
import { EditDialog } from "./editDialog";
import { useState } from "react";

type DetailDialogType = {
  open: boolean;
  onClose: () => void;
  //   setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleEditOpen: () => void;
};

export const DetailDialog = ({
  open,
  onClose,
  handleEditOpen,
}: DetailDialogType) => {
  return (
    <Dialog open={open} fullWidth css={sx.root}>
      <div css={sx.dialog}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="h2">{"파일 상세"}</Typography>
          <Button onClick={onClose}>
            <Image src={closeIcon} alt="close" width={48} height={48} />
          </Button>
        </Stack>
        <ul>
          {detailModels.map((it, index) => (
            <li css={sx.list} key={index}>
              <Typography variant="h5" color={Color.GrayText}>
                {it.title}
              </Typography>
              <Typography variant="h5" color={Color.BlackText}>
                {it.desc}
              </Typography>
            </li>
          ))}
        </ul>
        <Stack direction="row" mt="48px" justifyContent="flex-end" gap="48px">
          <Button onClick={handleEditOpen}>
            <Stack direction="row" gap="13px" alignItems="center">
              <Image src={edit} alt="edit" width={24} height={24} />
              <Typography color={Color.Navy} variant="body1">
                수정하기
              </Typography>
            </Stack>
          </Button>
          <Stack direction="row" gap="13px" alignItems="center">
            <Image src={trash} alt="edit" width={24} height={24} />
            <Typography color={Color.BrandMain} variant="body1">
              삭제하기
            </Typography>
          </Stack>
        </Stack>
      </div>
    </Dialog>
  );
};

const sx = {
  root: css`
    .MuiPaper-root {
      min-width: 822px;
    }
  `,
  dialog: css`
    width: 100%;
    padding: 60px;
  `,
  list: css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 20px;
    border-bottom: solid 1px ${Color.LightGrayText};
  `,
};
