import "../../index.css";
import Input from "./Input";

export default {
  title: "Input",
  component: Input,
};

const Template = (args: any) => <Input {...args} />;

export const blue: any = Template.bind({});
export const green: any = Template.bind({});
export const red: any = Template.bind({});

blue.args = {
  id: "button",
  name: "button-input",
  placeholder: "submit",
  theme: "bg-blue-400 p-2",
};

green.args = {
  id: "button",
  name: "button-input",
  placeholder: "submit",
  theme: "bg-green-400 p-2",
};

red.args = {
  id: "button",
  name: "button-input",
  placeholder: "submit",
  theme: "bg-red-400 p-2",
};
