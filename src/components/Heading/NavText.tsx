import { FaChevronRight } from "react-icons/fa6";

type NavTextProps = {
    text: string;
    isTextDark: boolean;
    showIcon: boolean;
};

const NavText = ({ text, isTextDark, showIcon }: NavTextProps) => {
    return (
        <div className="flex items-center gap-3">
            <h3 className={isTextDark ? "text-black font-medium" : "text-gray-500"}>{text}</h3>
            {showIcon && <FaChevronRight color="#98A2B3" size={12} />}
        </div>
    );
};

export default NavText;
