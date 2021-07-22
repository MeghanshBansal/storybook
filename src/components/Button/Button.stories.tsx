import Button from "./Button";
import "../../index.css";

export default {
  title: "Button",
  component: Button,
}

const Template= (args: any) => (
  <Button {...args}></Button>
);

export const blue: any = Template.bind({});
export const green: any = Template.bind({});
export const red: any = Template.bind({});

blue.args = {
  theme: "bg-blue-600 text-white p-2",
  children: "hello",
};

green.args = {
  theme: "bg-green-600 text-white p-2",
  children: "sign in",
};

red.args = {
    theme: "bg-green-600 text-white p-2",
    children: "sign in",
  };

