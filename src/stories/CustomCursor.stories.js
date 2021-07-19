import React from "react";
import { storiesOf } from "@storybook/react";
import { CustomCursor } from "../components/CustomCursor";
import Logo1 from "./assets/test1.svg";

const stories = storiesOf("App Test", module);

stories.add("App", () => {
  return <CustomCursor component={Logo1} width="a" />;
});
