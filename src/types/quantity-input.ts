import { ChangeEvent } from "react";

export interface QuantityInputProps {
  className?: string;
  inBonus?: boolean;
  value: number;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onClick?: () => void;
}
