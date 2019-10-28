import { configure } from "@storybook/react";
import "gsap";
import "sanitize.css";
import "style/index.styl";
configure(require.context("../src", true, /\.stories\.js$/), module);
