import ActionButton from "./ActionButton";
import { PiMoneyWavy } from "react-icons/pi";
import { GrDocumentUpload } from "react-icons/gr";
import { BsPrinter } from "react-icons/bs";
import { AiOutlineDownload } from "react-icons/ai";

const ActionButtonGroup = () => {
    const isShortMonth = window.innerWidth < 768; // Check if the screen size is less than 768px (max-md)
    return (
        <div className="flex justify-end flex-wrap gap-5 mx-8 py-6 pl-sidebar-size pr-2 max-md:justify-between max-md:px-4 max-md:mb-10 md:max-lg:mb-10">
            <ActionButton iconName={PiMoneyWavy} buttonText="Record payment" />
            <ActionButton iconName={GrDocumentUpload} buttonText={`${isShortMonth ? "Reminder" : "Send Reminder"}`} />
            <button className="flex gap-3 items-center text-nowrap text-action-button font-semibold border border-action-button rounded px-4 py-2 transition duration-100 hover:bg-sidebar-bg hover:text-white max-md:hidden">
                {<BsPrinter />} Print
            </button>
            <ActionButton iconName={AiOutlineDownload} buttonText="Download" />
            <button className="text-red-600 font-semibold border border-red-600 rounded px-4 py-2 transition duration-100 hover:bg-red-100 max-md:hidden">Cancel</button>
        </div>
    );
};

export default ActionButtonGroup;
