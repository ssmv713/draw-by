import { useCustomMediaQuery } from "@/common/theme/screen";

import {
  FirstSection,
  MainSection,
  MobileMainSection,
  SecondSection,
  ThirdSection,
} from "./sections";

export const UploadView = () => {
  const { isSmall } = useCustomMediaQuery();
  return (
    <div>
      {isSmall ? <MobileMainSection /> : <MainSection />}
      <FirstSection />
      <SecondSection />
      <ThirdSection />
    </div>
  );
};

const sx = {};
