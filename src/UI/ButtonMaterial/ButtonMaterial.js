import React from "react";
import Button from "@mui/material/Button";
const ButtonMaterial = (props) => {
    return (
    <>
      <Button type={props.type} variant="contained" startIcon={props.icon ? props.icon : ""}>
        {props.text}
      </Button>
    </>
  );
};

export default ButtonMaterial;
