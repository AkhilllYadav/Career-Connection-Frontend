import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const Dropdown = ({
    id,
    value,
    handleChange,
    name,
    label,
    options,
    defaultValue,
    ...props
}) => {
    return (
        <FormControl fullWidth>
            <InputLabel id={id}>{label}</InputLabel>
            <Select
                labelId={id}
                id={id}
                value={value}
                onChange={handleChange}
                name={name}
                defaultValue={defaultValue || ""}
                {...props}
            >
                <MenuItem value="" disabled>
                    {defaultValue || `Select ${label}`}
                </MenuItem>
                {options.map((option) => (
                    <MenuItem key={option} value={option}>
                        {option}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

export default Dropdown;
