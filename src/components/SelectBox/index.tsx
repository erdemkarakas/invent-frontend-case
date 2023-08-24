import React from "react";
import "./SelectBox.scss";

interface Option {
  value: string;
  label: string;
}

interface SelectBoxProps {
  options: Option[];
  label?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectBox: React.FC<SelectBoxProps> = ({
  options,
  value,
  label,
  onChange,
}) => {
  return (
    <div className="select-box-wrapper">
      <label className="select-box__label"> {label} </label>
      <select className="select-box" value={value} onChange={onChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectBox;
