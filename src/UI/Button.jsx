export default function Button({
  children,
  className,
  isSelected,
   ...props
}) {
  const btnStyle = `btn ${className}`;

  return (
    <button
      className={`${btnStyle} ${isSelected ? "active" : null}`}
      {...props}
     
    >
      {children}
    </button>
  );
}
