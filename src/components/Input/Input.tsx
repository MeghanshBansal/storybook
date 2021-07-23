import React from "react";

interface Props {
    type?: "button" | "checkbox" | "email | password | radio",
    id: string,
    name: string,
    placeholder: string,
    width?:"w-screen"|"w-full"|"w-2/4",
    theme: string,
}

const Input: React.FC<Props> = ({type, id, name, placeholder, width, theme}) => {
    const style = theme + "  placeholder-white " + width;
  return (<form>
      <input className={style} type = {type} id = {id} name={name}  placeholder = {placeholder}/>
  </form>);
};

export default Input;
