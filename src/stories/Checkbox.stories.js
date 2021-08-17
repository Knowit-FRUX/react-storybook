import Checkbox from "../components/atoms/Checkbox";

export default {
  title: "Atoms/Checkbox",
  component: Checkbox,
  argTypes: {},
};

const Template = (args) => <Checkbox {...args} />;

export const singleCheckbox = Template.bind({});

singleCheckbox.args = {
  disabled: false,
  id: "tomato",
  label: "Tomato",
  checked: false,
};
