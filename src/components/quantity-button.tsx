import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import styled from "styled-components";

interface CircleButtonProps {
  inBonus?: boolean;
  buttonType: string;
}

interface QuantityButtonProps {
  buttonType?: "increment" | "decrement";
  onClick: () => void;
  inBonus?: boolean;
  quantity?: number;
  className?: string;
}

export const CircleButton = styled.button`
  color: ${(props: CircleButtonProps) =>
    props.inBonus
      ? props.buttonType === "decrement"
        ? "#ff7900"
        : "white"
      : props.buttonType === "decrement"
      ? "#00ade6"
      : "white"};
  width: 30px;
  height: 30px;
  padding: 6px 0px;
  border-radius: 15px;
  text-align: center;
  font-size: 12px;
  line-height: 1.42857;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: ${(props: CircleButtonProps) =>
    props.inBonus
      ? props.buttonType === "decrement"
        ? "#ffebd9"
        : "#ff7900"
      : props.buttonType === "decrement"
      ? "#d9f3fb"
      : "#00ade6"};
  &:hover {
    background: ${(props: CircleButtonProps) =>
      props.inBonus
        ? props.buttonType === "decrement"
          ? "#ff7900"
          : "#ff9433"
        : props.buttonType === "decrement"
        ? "#33bdeb"
        : "#00ade6"};
    color: white;
  }
`;

export default (props: QuantityButtonProps) => {
  const { buttonType = "increment", inBonus, onClick, className } = props;

  const showTrash = props.quantity === 1;

  return (
    <CircleButton
      buttonType={buttonType}
      inBonus={inBonus}
      className={`btn btn-default btn-circle ${className}`}
      onClick={onClick}
    >
      <FontAwesomeIcon
        icon={
          buttonType === "increment" ? faPlus : showTrash ? faTrashAlt : faMinus
        }
      />
    </CircleButton>
  );
};
