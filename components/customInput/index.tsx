import * as React from 'react'
import PropTypes from 'prop-types'

interface Props {
    placeholder?: string;
    type: string;
    id: string;
    name: string;
}

const CustomInput =  ({placeholder, type, name, id}: Props): JSX.Element => (
  <input
    className="bg-white my-4 focus:outline-none bg-gray-200 focus:bg-white focus:shadow-xl rounded-full py-2 px-4 block w-full appearance-none leading-normal"
    type={type}
    name={name}
    id={id}
    placeholder={placeholder}
  />
);

CustomInput.propTypes = {
    placeholder: PropTypes.string,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
}

export default CustomInput