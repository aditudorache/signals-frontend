import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import { Select as AscSelect } from '@amsterdam/asc-ui';

const SelectOptions = ({ name, options, optionKey, optionName, optionValue }) =>
  options.map(option => (
    <option key={`${name}-${option[optionKey]}`} value={option[optionValue]}>
      {option[optionName]}
    </option>
  ));

const Select = forwardRef(
  (
    {
      label,
      onChange,
      id,
      name,
      value,
      options,
      optionKey = 'key',
      optionValue = 'value',
      optionName = 'name',
      groups,
      emptyOption,
    },
    ref
  ) => (
    <AscSelect id={id} value={value} onChange={onChange} data-testid={name} label={label} name={name} ref={ref}>
      {emptyOption && (
        <option key={`${name}-${emptyOption[optionKey]}`} value={emptyOption[optionValue]}>
          {emptyOption[optionName]}
        </option>
      )}

      {groups?.length > 1 ? (
        groups.map(group => (
          <optgroup key={group.name} label={group.name}>
            <SelectOptions
              name={name}
              options={options.filter(option => option.group === group.value)}
              optionKey={optionKey}
              optionValue={optionValue}
              optionName={optionName}
            />
          </optgroup>
        ))
      ) : (
        <SelectOptions
          name={name}
          options={options}
          optionKey={optionKey}
          optionValue={optionValue}
          optionName={optionName}
        />
      )}
    </AscSelect>
  )
);

const optionType = PropTypes.shape({
  key: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  value: PropTypes.oneOfType([PropTypes.bool, PropTypes.string, PropTypes.number]).isRequired,
  group: PropTypes.string,
});

Select.propTypes = {
  label: PropTypes.node,
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(optionType.isRequired).isRequired,
  optionKey: PropTypes.string,
  optionName: PropTypes.string,
  optionValue: PropTypes.string,
  value: PropTypes.string,
  groups: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      value: PropTypes.string,
    })
  ),
  emptyOption: optionType,
};

export default Select;
