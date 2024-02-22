import cls from "./PageLoader.module.scss";

const PageLoader = () => {
    return (
        <>
            <div className={cls.pageLoader}>
                <div className={cls.ldsDualRing}></div>
            </div>
        </>
    );
}
 
export {PageLoader};