export default function Button({children, className, ...props}){
    const btnStyle = `btn ${className}`;

    return (
        <button className={btnStyle} {...props}>
            {children}
        </button>
    )
}