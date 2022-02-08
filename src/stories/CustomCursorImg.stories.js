import React from "react";
import { storiesOf } from "@storybook/react";
import CustomCursor from "../components/CustomCursor/CustomCursor";
import Logo2 from "./assets/test2.png";

const stories = storiesOf("App Test", module);

stories.add("Cursor PNG", () => {
  return <CustomCursor component={Logo2} />;
});
