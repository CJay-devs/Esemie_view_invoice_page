import esemieIcon from "../../assets/esemie_icon.png";
import SideBarIcon from "./SideBarIcon";

// Sidebar Icons
import { RiHome5Fill } from "react-icons/ri";
import { IoReceiptOutline } from "react-icons/io5";
import { PiMoneyWavy } from "react-icons/pi";
import { IoPersonOutline } from "react-icons/io5";
import { CgNotes } from "react-icons/cg";
import { LuChartLine } from "react-icons/lu";
import { BsPersonPlus } from "react-icons/bs";
import { TbSettings2 } from "react-icons/tb";

const SideBar = () => {
    return (
        <aside className="absolute w-sidebar-size h-sidebar-height bg-sidebar-bg flex flex-col items-center p-6 max-md:hidden">
            <div className="bg-main-logo-bg w-12 h-12 p-1 mb-14 border-blue-400 flex justify-center items-center rounded-lg">
                <img src={esemieIcon} alt="Sidebar Icon" />
            </div>
            <nav className="flex flex-col gap-5">
                <SideBarIcon icon={RiHome5Fill} isActive={true} />
                <SideBarIcon icon={IoReceiptOutline} isActive={false} />
                <SideBarIcon icon={PiMoneyWavy} isActive={false} />
                <SideBarIcon icon={IoPersonOutline} isActive={false} />
                <SideBarIcon icon={CgNotes} isActive={false} />
                <SideBarIcon icon={LuChartLine} isActive={false} />
                <SideBarIcon icon={BsPersonPlus} isActive={false} />
                <SideBarIcon icon={TbSettings2} isActive={false} />
            </nav>
        </aside>
    );
};

export default SideBar;
