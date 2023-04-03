import { Button, Dialog, Stack, Typography } from "@mui/material";
import Image from "next/image";
import closeIcon from "@/assets/icons/close.png";
import { Color } from "@/common/theme/colors";
import { css } from "@emotion/react";
import check from "@/assets/icons/check.png";
type DetailDialogType = {
  open: boolean;
  onClose: () => void;
};

export const EditDialog = ({ open, onClose }: DetailDialogType) => {
  return (
    <Dialog open={open} fullWidth>
      <Stack p="60px">
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="h2">{"파일명 수정"}</Typography>
          <Button onClick={onClose}>
            <Image src={closeIcon} alt="close" width={48} height={48} />
          </Button>
        </Stack>
        <Stack my="40px" css={sx.fileName} gap="6px" pb="8px">
          <Typography color={Color.GrayText} variant="body2">
            {"신규 파일명"}
          </Typography>
          <Typography variant="body1" color={Color.GrayText2}>
            {"FileName.pdf"}
          </Typography>
        </Stack>
        <Stack direction="row" gap="10px" justifyContent="flex-end">
          <Image src={check} alt="check" width={24} height={24} />
          <Typography variant="body2" color={Color.Navy}>
            수정하기
          </Typography>
        </Stack>
      </Stack>
    </Dialog>
  );
};

const sx = {
  fileName: css`
    border-bottom: solid 1px ${Color.LightGrayText};
  `,
};
