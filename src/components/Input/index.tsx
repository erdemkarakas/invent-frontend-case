import React from "react";
import "./Input.scss";

interface InputProps {
  value: string | number | readonly string[] | undefined;
  name: string;
  placeholder: string;
  label?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
  onChange,
  name,
  placeholder,
  value = "",
}) => {
  return (
    <div className="label__wrapper">
      <label className="label__text">{placeholder}</label>
      <input
        className="input"
        onChange={onChange}
        name={name}
        placeholder={placeholder}
        value={value}
      />
    </div>
  );
};

export default Input;
