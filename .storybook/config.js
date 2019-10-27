import { configure } from "@storybook/react";
import "sanitize.css";
import "style/index";
configure(require.context("../src", true, /\.stories\.js$/), module);
