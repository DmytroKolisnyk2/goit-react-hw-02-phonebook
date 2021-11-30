import React from 'react';
import { nanoid } from 'nanoid';

const filterId = nanoid();

export default function Filter({onChange,value}) {
  return (
    <div className="filter">
      <h3 className="phonebook__headline">Find contact by name</h3>
      <label className="filter__title" htmlFor={filterId}>
        <input value={value} onChange={onChange} className="filter__input" type="text" name="filter" id={filterId} />
      </label>
    </div>
  );
}
