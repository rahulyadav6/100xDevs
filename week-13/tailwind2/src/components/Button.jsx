function Button({ disabled, children, onClick}){
    return(
        <>
            <span onClick={onClick} className={`text-white px-32 py-2 cursor-pointer rounded-2xl text-2xl ${disabled? "bg-blue-200" : "bg-green-400"}`}>
                {children} 
            </span>
        </>
    );
}
export default Button;
