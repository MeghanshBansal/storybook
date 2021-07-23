import StackedAvatars from "./StackedAvatars";
import "../../index.css";

export default {
  title: "StackedAvatars",
  component: StackedAvatars,
};

const Template = (args: any) => <StackedAvatars {...args}></StackedAvatars>;

export const normal: any = Template.bind({});

normal.args = {
  imageurl: [
    "https://cdn.pixabay.com/photo/2012/06/19/10/32/owl-50267__340.jpg",
    "https://cdn.pixabay.com/photo/2018/08/12/16/59/ara-3601194__340.jpg",
    "https://cdn.pixabay.com/photo/2013/11/01/11/13/dolphin-203875__340.jpg",
    "https://cdn.pixabay.com/photo/2018/07/31/22/08/lion-3576045__340.jpg",
    "https://cdn.pixabay.com/photo/2015/03/30/12/37/jellyfish-698521__340.jpg",
    "https://cdn.pixabay.com/photo/2017/10/20/10/58/elephant-2870777__340.jpg",
    "https://cdn.pixabay.com/photo/2015/03/26/09/54/pug-690566__340.jpg",
  ],
  diameter: "20",
  bordercolor: "white",
  borderWidth: "4",
  stackNumber: "8",
};
