import * as React from "react";
import { NextPage } from "next";
import RenderPostContainer from "./RenderPost";
//@ts-ignore
import Markdown from "./fourth.md";
import components from "../../lib/components";

const RenderPost: NextPage = () => {
  return (
    <>
      <RenderPostContainer post="second">
        <Markdown component={components} />
      </RenderPostContainer>
    </>
  );
};

export default RenderPost;
