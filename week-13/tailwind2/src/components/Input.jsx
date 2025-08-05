function Input({onClick, type, placeholder }){
    return(
        <>
            <span onClick={onClick} className={`px-2 py-2 cursor-pointer text-2xl bg-blue-500 `}>
                <input type={type} placeholder={placeholder} className="bg-blue-500 text-white outline-none p-4 rounded-2xl"></input>
            </span>
        </>
    );
}
export default Input;
