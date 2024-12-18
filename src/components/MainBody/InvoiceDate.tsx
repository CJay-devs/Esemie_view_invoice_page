import DateFormatter from "./DateFormatter";

type InvoiceDateProps = {
    dateType: string;
    date: string;
};

const InvoiceDate = ({ dateType, date }: InvoiceDateProps) => {
    const isShortMonth = window.innerWidth < 768; // Check if the screen size is less than 768px (max-md)

    return (
        <div className="flex items-end gap-3 justify-end max-md:flex-col max-md:gap-0 max-md:items-start">
            <p className="text-base text-gray-500 font-medium">{`${dateType}:`}</p>
            <h3 className="text-base text-black font-semibold">{<DateFormatter date={date} isShortMonth={isShortMonth} />}</h3>
        </div>
    );
};

export default InvoiceDate;
