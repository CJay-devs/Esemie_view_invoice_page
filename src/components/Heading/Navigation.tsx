import NavText from "./NavText";

const Navigation = () => {
    return (
        <nav className="flex items-center gap-3 px-4 max-md:hidden">
            <NavText text="Home" isTextDark={false} showIcon={true} />
            <NavText text="Invoice" isTextDark={false} showIcon={true} />
            <NavText text="View invoice" isTextDark={true} showIcon={false} />
        </nav>
    );
};

export default Navigation;
