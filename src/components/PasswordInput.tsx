import { useRef, useState } from "react";

const PasswordInput = ({ placeholder = "Password", ...restProps }) => {
  const [isVisible, setVisible] = useState(false);

  const inputElement = useRef<HTMLInputElement>(null);
  const toggle = async () => {
    setVisible(!isVisible);
    handleInputFocus();
  };

  const handleInputFocus = async () => {
    await inputElement.current?.setSelectionRange(
      inputElement.current?.value?.length,
      inputElement.current?.value?.length
    );

    inputElement.current?.focus();
  };

  return (
    <div className="password-input-container">
      <input
        ref={inputElement}
        type={!isVisible ? "password" : "text"}
        placeholder={placeholder}
        {...restProps}
      />
      <span
        role="button"
        className="change-visibility"
        onClick={() => {
          toggle();
        }}
        style={{ cursor: "pointer" }}
      >
        {isVisible ? "HIDE" : "SHOW"}
      </span>
    </div>
  );
};

export default PasswordInput;
