import cls from "./button.module.scss";

const Button = (props) => {
    const {onClick, children} = props;
    return (
        <button className={cls.button} onClick={onClick}>
            {children}
        </button>
    );
}
 
export {Button};