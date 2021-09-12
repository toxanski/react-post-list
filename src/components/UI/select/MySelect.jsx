import React from 'react';

const MySelect = ({defaultValue, options, value, onChange}) => {
    return (
        <select value={value} onChange={event => onChange(event.target.value)}>

            <option disabled value="">{defaultValue}</option>

            {options.map(optionItem => (
                <option value={optionItem.value} key={optionItem.value}>
                    {optionItem.name}
                </option>
            ))}
        </select>
    );
};

export default MySelect;