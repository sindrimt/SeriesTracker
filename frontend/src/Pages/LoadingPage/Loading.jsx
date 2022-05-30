import React from "react";

import Lottie from "lottie-react";
import loadingAnimation from "../../Assets/Lotties/loading.json";
import { LoadingOuter } from "./LoadingStyles";

const Loading = () => {
  return (
    <LoadingOuter>
      <Lottie animationData={loadingAnimation} />
    </LoadingOuter>
  );
};

export default Loading;
