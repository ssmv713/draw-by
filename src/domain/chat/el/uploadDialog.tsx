import { Button, Dialog, DialogTitle, Stack } from "@mui/material";
import closeIcon from "@/assets/icons/close.png";
import Image from "next/image";
import { css } from "@emotion/react";

type UploadDialogType = {
  open: boolean;
  onClose: () => void;
};

export const UploadDialog = ({ open, onClose }: UploadDialogType) => {
  return (
    <Dialog open={open} fullWidth css={sx.root}>
      <div css={sx.dialog}>
        <Stack direction="row" mb="4px" justifyContent="space-between">
          <DialogTitle variant="h2">문서 목록</DialogTitle>
          <Button onClick={onClose}>
            <Image src={closeIcon} alt="close" width={48} height={48} />
          </Button>
        </Stack>
        <Stack direction="row"></Stack>
      </div>
    </Dialog>
  );
};

const sx = {
  root: css`
    .MuiPaper-root {
      min-width: 822px;

      box-sizing: border-box;
    }
  `,
  dialog: css`
    width: 100%;
    padding: 60px;
  `,
};
