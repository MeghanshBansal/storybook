import ProgressBar from "./ProgressBar";
import "../../index.css";

export default {
  title: "ProgressBar",
  component: ProgressBar,
}

const Template= (args: any) => (
  <ProgressBar {...args}></ProgressBar>
);

export const blue: any = Template.bind({});
export const green: any = Template.bind({});
export const red: any = Template.bind({});
const PossibleValues = Array.from(Array(101).keys())
blue.args = {
  value: 50,
  color:"blue",
};

green.args = {
    value: 50,
    color:"green",
};

red.args = {
    value: 50,
    color:"red",
  };