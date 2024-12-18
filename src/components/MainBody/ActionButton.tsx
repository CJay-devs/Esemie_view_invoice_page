import React from "react";

type ActionButtonProps = {
    iconName: React.ElementType;
    buttonText: string;
    iconSize?: number;
};

const ActionButton = ({ iconName: Icon, buttonText, iconSize = 24 }: ActionButtonProps) => {
    return (
        <button className="flex gap-3 items-center text-nowrap text-action-button font-semibold border border-action-button rounded px-4 py-2 max-md:w-16 max-md:flex-col max-md:text-[13px] max-md:border-none transition duration-100 md:hover:bg-sidebar-bg md:hover:text-white">
            <span className="max-md:p-3 max-md:rounded-full max-md:bg-gray-50 max-md:hover:bg-slate-100">
                <Icon size={iconSize} />
            </span>
            <span className="max-md:px-3 max-md:py-2 max-md:transition max-md:duration-150 max-md:rounded-md max-md:hover:border-action-button max-md:hover:bg-blue-50">
                {buttonText}
            </span>
        </button>
    );
};

export default ActionButton;
