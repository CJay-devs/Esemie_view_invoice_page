type CustomIconProps = {
    IconComponent: React.ElementType;
    size?: number;
};

const CustomIcon = ({ IconComponent, size = 24 }: CustomIconProps) => {
    return <IconComponent size={size} />;
};

export default CustomIcon;
