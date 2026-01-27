import { SideBarToggle } from "../icons/SideBarToggle";

function Sidebar({sideBarOpen, setSideBarOpen}){
    if(!sideBarOpen){
        return(
            <div className="fixed top-0 left-0">
                <div className="cursor-pointer hover:bg-slate-200" onClick={()=>{
                    setSideBarOpen(!sideBarOpen);
                }}>
                    <SideBarToggle/>
                </div>
            </div>
        );
    }
return(
    <div className="w-80 h-screen bg-red-100 fixed top-0 left-0 md:relative">
        <div>
            <div className="cursor-pointer hover:bg-slate-200" onClick={()=>{
                setSideBarOpen(!sideBarOpen);
            }}>
                <SideBarToggle/>
            </div>
        </div>
    </div>
);
}
export default Sidebar;