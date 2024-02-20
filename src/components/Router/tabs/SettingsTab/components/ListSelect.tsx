import * as React from "react";
import { styled } from "@mui/material/styles";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { FormLabel, SxProps, TextField, Theme } from "@mui/material";
import { SelectInputProps } from "@mui/material/Select/SelectInput";

const BootstrapFormControl = styled(FormControl)(() => ({
  flexDirection: "row",
  alignItems: "center",
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
}));

const BootstrapTextField = styled(TextField)(() => ({
  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
  "& .MuiInputBase-root .MuiSelect-select": {
    paddingRight: "5px !important",
    textAlign: "right",
  },
  "& .MuiInputBase-root .MuiSvgIcon-root": {
    color: "rgba(0, 0, 0, 0.45)",
  },
}));

export interface ListSelectValueItem {
  label: string;
  value: string | number | readonly string[];
}

export type ListSelectValue = ListSelectValueItem[];

export interface ListSelectProps {
  id: string;
  label: string;
  values: ListSelectValue;
  value: string | number;
  defaultValue?: string | number;
  onChange: SelectInputProps<unknown>["onChange"];
  sx?: SxProps<Theme>;
}

export const ListSelect = ({
  id,
  label,
  value,
  values,
  onChange,
  sx,
}: ListSelectProps) => {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <BootstrapFormControl variant="standard">
        <FormLabel
          id={id}
          onClick={handleOpen}
          // sx={{ position: "absolute", left: 0 }}
        >
          {label}
        </FormLabel>
        <BootstrapTextField
          id={id}
          select
          size="medium"
          sx={sx}
          SelectProps={{
            open,
            value,
            onClose: handleClose,
            onOpen: handleOpen,
            onChange,
            IconComponent: () => <ArrowForwardIosIcon fontSize="small" />,
          }}
        >
          {values.map(({ label, value }) => (
            <MenuItem key={label} value={value}>
              {label}
            </MenuItem>
          ))}
        </BootstrapTextField>
      </BootstrapFormControl>
    </>
  );
};
