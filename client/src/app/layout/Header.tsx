import { AppBar, Switch, Toolbar, Typography } from "@mui/material";
import React from "react";

interface Props {
  onChange: (checked: boolean) => void;
}

export const Header = ({ onChange }: Props) => {
  return (
    <AppBar position="static" sx={{ mb: 4 }}>
      <Toolbar>
        <Typography variant="h6">RE-STORE</Typography>
        <Switch
          onChange={(data, checked) => {
            onChange(checked);
          }}
        />
      </Toolbar>
    </AppBar>
  );
};
