import React from "react";
import styled from "styled-components";
import { QuantityInputProps } from "../types";

const QuantityInput = styled.input`
  width: 3rem;
  border-radius: 25px;
  margin-left: auto;
  margin-right: auto;
  border: ${(props: QuantityInputProps) =>
    props.inBonus ? "1px solid #ff7900" : "1px solid #33bdeb"};
  text-align: center;
  &:focus {
    /* border-color: inherit; */
    outline: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
`;

export default (props: QuantityInputProps) => {
  const { value, onChange, inBonus, className, onClick } = props;

  return (
    <QuantityInput
      className={className}
      inBonus={inBonus}
      onChange={onChange}
      onClick={onClick}
      value={value}
    />
  );
};
