import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const SelectSmall = ({label, value, options = [], onChange})=> {

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small-label">{label}</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={value}
        label="Age"
        onChange={onChange}
      >
        {options.map(({label, value})=> <MenuItem value={value}>{label}</MenuItem>)}
      </Select>
    </FormControl>
  );
}

export default SelectSmall;