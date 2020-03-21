import * as React from "react";
import PropTypes from "prop-types";

interface Props {
  placeholder?: string;
  type: string;
  id: string;
  name: string;
  value: string;
  handleChange: (e: any) => void;
}

const CustomInput = ({
  placeholder,
  type,
  name,
  id,
  value,
  handleChange
}: Props): JSX.Element => {
  return (
    <input
      className="bg-white my-4 focus:outline-none bg-gray-200 focus:bg-white focus:shadow-xl rounded-sm py-2 px-4 block w-full appearance-none leading-normal"
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      onChange={handleChange}
      value={value}
    />
  );
};

CustomInput.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func
};

export default CustomInput;
