import React from "react";

const Input = (props) => {
  return (
    <>
      <label for={props.id} class="form-label">
        {props.lable}
      </label>
      <input
        type={props.type}
        class="form-control"
        id={props.id}
      />
    </>
  );
};

export default Input;
