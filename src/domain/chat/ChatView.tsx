import { Pcheader } from "@/common/el";
import { css } from "@emotion/react";

import { Color } from "@/common/theme/colors";

import { ChatFromMe } from "./el/ChatText";
import { ChatFromAI } from "./el/ChatText";

import { ChatFrame } from "./el/CharFrame";
import { HeaderView } from "@/common/el/Header/HeaderView";

export const ChatView = () => {
  return (
    <div css={sx.root}>
      <HeaderView />
      <ChatFrame>
        <div>
          <ChatFromMe textFromMe="오늘 날씨 어때?" />
          <ChatFromAI textFromAI="오늘 날씨는 맑아요" />
          <ChatFromMe
            textFromMe="가나다라마바사아자차카타파하 가나다라마바사아자차카타파하
가나다라마바사아자차카타파하."
          />
          <ChatFromAI
            textFromAI="가나다라마바사아자차카타파하 가나다라마바사아자차카타파하
가나다라마바사아자차카타파하."
          />
          <ChatFromMe textFromMe="오늘 날씨 어때?" />
          <ChatFromAI textFromAI="오늘 날씨는 맑아요" />
          <ChatFromMe textFromMe="오늘 날씨 어때?" />
        </div>
      </ChatFrame>
    </div>
  );
};

const sx = {
  root: css`
    background-image: url(/assets/bg/chat_bg.png);
    background-position: center;
    padding-top: 62px;
    position: relative;
  `,

  chatBottom: css`
    border: solid 1px #fff;
    padding-left: 20px;
  `,
  message: css`
    &::placeholder {
      color: ${Color.WhiteText} !important;
    }
  `,
  send: css`
    padding: 20px;
    height: 100%;
    border-left: solid 1px #fff;
  `,
};
