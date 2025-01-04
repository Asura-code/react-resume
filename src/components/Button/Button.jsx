import classes from "./Button.module.css";

export default function Button({
  children,
  onClicked,
  isActive,
  disabled,
  isRandom,
}) {
  return (
    <button
      disabled={disabled}
      onClick={onClicked}
      style={
        isRandom
          ? { backgroundColor: "#0b8926", marginRight: "0.5rem" }
          : { marginRight: "0.5rem" }
      }
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
