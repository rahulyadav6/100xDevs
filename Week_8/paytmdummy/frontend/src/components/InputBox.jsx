export function InputBox({label, placeholder, changeHandler}){
    return <div>
        <div className="text-sm font-medium text-left py-2">
            {label}
        </div>
        <input onChange={changeHandler} placeholder={placeholder} className=" w-full px-2 py-1" />
    </div>
}