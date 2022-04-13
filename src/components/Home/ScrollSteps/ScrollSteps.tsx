import React, { useEffect, useState } from "react";

import TextHeader from "../../Utils/TextHeader/TextHeader";
import DesktopView from "./modules/DesktopView";

import MobileView from "./modules/MobileView";

const ScrollSteps = () => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(typeof window !== undefined ? true : false);
  }, []);

  return (
    <>
      <TextHeader
        title="We guide you through the process"
        category="Transactions"
        description="Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam
          voluptatum cupiditate veritatis in accusamus quisquam."
        className="my-16"
      />

      {isBrowser && (
        <>
          <DesktopView />
          <MobileView />
        </>
      )}
    </>
  );
};

export default ScrollSteps;
