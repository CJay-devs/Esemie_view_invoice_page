import React from "react";
import CustomIcon from "../CustomIcon";

type SideBarIconProps = {
    icon: React.ElementType;
    isActive: boolean;
};

const SideBarIcon = ({ icon, isActive }: SideBarIconProps) => {
    return (
        <div
            className={`w-12 h-12 flex justify-center items-center rounded-lg cursor-pointer transition-colors duration-200 hover:bg-sky-200 hover:text-sidebar-bg ${
                isActive ? "bg-sky-200 text-sidebar-bg" : "text-white"
            }`}
        >
            <CustomIcon IconComponent={icon} />
        </div>
    );
};

export default SideBarIcon;
