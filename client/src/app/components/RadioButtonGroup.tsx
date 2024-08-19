import { FormControl, FormControlLabel, Radio, RadioGroup } from "@mui/material";


interface Props {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    options: any[];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onChange: (event:any) => void;
    selectedValue:string; 
}

export default function RadioButtonGroup({options, onChange,selectedValue} : Props) {
    return (
        <FormControl>
              <RadioGroup onChange={onChange} value={selectedValue}>
                {options.map(({ value, label }) => (
                  <FormControlLabel
                    value={value}
                    control={<Radio />}
                    label={label}
                    key={value}
                  />
                ))}
              </RadioGroup>
            </FormControl>
    )
}