function MainContent(){
    return(
        <div className="w-full">
            <div className="h-36 bg-black hidden md:block"></div>
            <div className="grid grid-cols-10 gap-7 p-10">
                <div className=" hidden md:block h-60 rounded-2xl shadow-lg bg-red-200 md:col-span-2 -translate-y-20 col-span-10"></div>
                <div className="h-96 rounded-2xl shadow-lg bg-green-200 md:col-span-5 col-span-10"></div>
                <div className="h-60 rounded-2xl shadow-lg bg-yellow-200 md:col-span-3 col-span-10"></div>
            </div>
        </div>
    );
}
export default MainContent;