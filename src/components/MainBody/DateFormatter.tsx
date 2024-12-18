type InvoiceDateProps = {
    date: string;
    isShortMonth?: boolean;
};

const DateFormatter = ({ date, isShortMonth = true }: InvoiceDateProps) => {
    function formatDate(dateString: string, isShortMonth: boolean = true): string {
        const date = new Date(dateString);
        const options: Intl.DateTimeFormatOptions = {
            year: "numeric",
            month: isShortMonth ? "short" : "long", // Change month format based on screen size
            day: "numeric",
        };
        const formattedDate = date.toLocaleDateString("en-US", options);
        const day = date.getDate();
        const suffix = getDaySuffix(day);
        return `${day}${suffix}, ${formattedDate.split(" ")[0]} ${formattedDate.split(", ")[1]}`;
    }

    function getDaySuffix(day: number): string {
        if (day > 3 && day < 21) return "th";
        switch (day % 10) {
            case 1:
                return "st";
            case 2:
                return "nd";
            case 3:
                return "rd";
            default:
                return "th";
        }
    }
    return <>{formatDate(date, isShortMonth)}</>;
};

export default DateFormatter;
