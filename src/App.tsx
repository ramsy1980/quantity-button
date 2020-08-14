import * as React from "react";
import QuantityButton from "./components/quantity-button";
import QuantityInput from "./components/quantity-input";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`;

const QuantityComponent = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 25px;
`;

const DEFAULT_TIMEOUT = 3000;

export default function App() {
  const [quantity, setQuantity] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const [showInputField, setShowInputfield] = React.useState(false);

  const timeoutRef: React.MutableRefObject<any> = React.useRef();

  const timerCallback = (action: Function, callback: Function) => {};

  const increment = () => {
    // action
    clearTimeout(timeoutRef.current);

    setOpen(true);
    setQuantity(prevState => prevState + 1);

    timeoutRef.current = setTimeout(() => {
      // callback
      setOpen(false);
      setShowInputfield(true);
    }, DEFAULT_TIMEOUT);
  };
  const decrement = () => {
    // action
    clearTimeout(timeoutRef.current);

    setOpen(true);
    setQuantity(prevState => prevState - 1);

    timeoutRef.current = setTimeout(() => {
      // callback
      setOpen(false);
    }, DEFAULT_TIMEOUT);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setQuantity(Number(event.target.value));

  const handleClickInput = () => {
    // action
    clearTimeout(timeoutRef.current);

    setOpen(true);
    setShowInputfield(false);

    timeoutRef.current = setTimeout(() => {
      // callback
      setOpen(false);
    }, DEFAULT_TIMEOUT);
  };

  const inBonus = false;
  const showInput = quantity > 0 && open;

  return (
    <Container>
      <div className="col-6">
        <QuantityComponent>
          {showInputField ? (
            <QuantityInput
              className="mr-0"
              inBonus={inBonus}
              value={quantity}
              onChange={handleChange}
              onClick={handleClickInput}
            />
          ) : (
            showInput && (
              <React.Fragment>
                <QuantityButton
                  quantity={quantity}
                  buttonType="decrement"
                  inBonus={inBonus}
                  onClick={decrement}
                />
                <QuantityInput
                  inBonus={inBonus}
                  value={quantity}
                  onChange={handleChange}
                />
              </React.Fragment>
            )
          )}
          {!showInputField && (
            <QuantityButton
              className={showInput ? "" : "ml-auto"}
              buttonType="increment"
              inBonus={inBonus}
              onClick={increment}
            />
          )}
        </QuantityComponent>
      </div>
    </Container>
  );
}
