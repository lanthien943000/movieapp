import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";

function FormTextField({ name, id, control, ...other }) {
  return (
    <Controller
      name={name}
      id={id}
      control={control}
      render={({ field, fieldState: { error } }) => {
        return (
          <TextField
            fullWidth
            id={id}
            {...other}
            error={!!error}
            helperText={error?.message}
            {...field}
          />
        );
      }}
    />
  );
}

export default FormTextField;
