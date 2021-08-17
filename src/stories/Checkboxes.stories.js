import React from "react";
import Checkboxes from "../components/molecules/Checkboxes";

export default {
  title: "Molecules/Checkboxes",
  component: Checkboxes,
};

const Template = (args) => <Checkboxes {...args} />;

const data = [
  {
    defaultChecked: true,
    disabled: false,
    id: "tomato",
    label: "Tomato",
  },
  {
    defaultChecked: true,
    disabled: false,
    id: "lettuce",
    label: "Lettuce",
  },
  {
    defaultChecked: true,
    disabled: false,
    id: "mustard",
    label: "Mustard",
  },
];

export const CheckboxGroup = Template.bind({});

CheckboxGroup.args = {
  label: "Hamburger ingredients",
  data,
};
