import React from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

export const DynamicSelect = ({ label, options, value, onChange }) => {
  return (
    <FormControl
      sx={{
        minWidth: 160,
        fontSize: "small",
      }}
      size="small"
      className="w-auto"
    >
      <InputLabel id="demo-select-small-label">{label}</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={value}
        label={label}
        onChange={onChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export const SelectByDefault = ({
  value,
  handleChange,
  label,
  options,
  name,
}) => {
  return (
    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
      {/* <InputLabel id="demo-simple-select-standard-label">
        {formLabel}
      </InputLabel> */}
      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        value={value}
        onChange={handleChange}
        label={label}
        name={name}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};