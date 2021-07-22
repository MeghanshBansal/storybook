import Alert from "./Alerts";
import "../../index.css";

export default {
  title: "Alert",
  component: Alert,
}

const Template= (args: any) => (
  <Alert {...args}></Alert>
);

export const blue: any = Template.bind({});
export const green: any = Template.bind({});
export const red: any = Template.bind({});

blue.args = {
  theme: "bg-blue-600 text-white p-3",
  content: "hello this is blue writing",
};

green.args = {
  theme: "bg-green-600 text-white p-3",
  content: "hello this is green writing",
};

red.args = {
    theme: "bg-green-600 text-white p-3",
    content: "hello this is red writing",
  };