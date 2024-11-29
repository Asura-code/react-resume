import classes from "./Button.module.css";

export default function Button({ children, onClicked, isActive, disabled }) {
  return (
    <button
      disabled={disabled}
      onClick={onClicked}
      style={{ marginRight: "0.5rem" }}
      className={
        isActive && !disabled
          ? `${classes.button} ${classes.active}`
          : classes.button
      }
    >
      {children}
    </button>
  );
}
