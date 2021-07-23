import Button from "./Button";
import "../../index.css";

export default {
  title: "Button",
  component: Button,
};

const Template = (args: any) => <Button {...args}></Button>;

export const blue: any = Template.bind({});
export const green: any = Template.bind({});
export const red: any = Template.bind({});
export const bluehollow: any = Template.bind({});
export const greenhollow: any = Template.bind({});
export const redhollow: any = Template.bind({});

blue.args = {
  theme: "bg-blue-600 text-white p-2 rounded-2xl",
  children: "hello",
};

green.args = {
  theme: "bg-green-600 text-white p-2 rounded-2xl",
  children: "sign in",
};

red.args = {
  theme: "bg-green-600 text-white p-2 rounded-2xl",
  children: "sign in",
};

bluehollow.args = {
  theme: "border-blue-600 border-2 text-black p-2 shadow-sm rounded-2xl",
  children: "hello",
};
greenhollow.args = {
  theme: "border-green-600 border-2 text-black p-2 shadow-sm rounded-2xl",
  children: "hello",
};
redhollow.args = {
  theme: "border-red-600 border-2 text-black p-2 shadow-sm rounded-2xl",
  children: "hello",
};
