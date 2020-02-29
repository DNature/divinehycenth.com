import * as React from "react";
import { NextPage } from "next";
import RenderPostContainer from "./RenderPost";
//@ts-ignore
import Markdown from "./fourth.md";

const RenderPost: NextPage = () => {
  
  return (
    <>
      <RenderPostContainer post="second">
        <Markdown />
      </RenderPostContainer>
    </>
  );
};

export default RenderPost;
