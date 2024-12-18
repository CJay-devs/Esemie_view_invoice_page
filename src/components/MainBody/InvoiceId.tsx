// InvoiceId.tsx
import { useEffect } from "react";
import { FaChevronLeft } from "react-icons/fa6";
import { BiTimeFive } from "react-icons/bi";
import { AiOutlineLink } from "react-icons/ai";
import useInvoiceStore from "../../store/useInvoiceStore";

type InvoiceIdProps = {
    isMobileView?: boolean;
    hide?: boolean;
};

const InvoiceId = ({ isMobileView = false, hide = true }: InvoiceIdProps) => {
    const { invoiceData, loadInvoiceData } = useInvoiceStore();

    useEffect(() => {
        loadInvoiceData();
    }, [loadInvoiceData]);

    if (!invoiceData) {
        return <div className="h-[90vh] w-[90%] fixed flex justify-center items-center">Loading ...</div>;
    }

    return (
        <section
            className={`mt-16 flex justify-between max-md:mt-0 max-md:p-4 max-md:border-b ${isMobileView && "max-md:mt-0 max-md:p-4 max-md:border-b"} ${
                hide && "md:hidden"
            }`}
        >
            <div className="flex max-md:flex-col max-md:gap-2">
                <h1 className="font-semibold text-xl md:hidden">INVOICE</h1>
                <h2 className="text-xl flex items-center gap-4 font-semibold max-md:text-base max-md:font-semibold max-md:text-gray-500">
                    <span className="max-md:hidden">{<FaChevronLeft size={15} />}</span>
                    {invoiceData.invoiceNumber}
                </h2>
            </div>
            <div className="flex flex-col gap-10 max-md:items-end">
                <div className="flex items-center gap-4">
                    <p className={`px-2 py-1 font-medium ${invoiceData.status === "paid" ? "text-green-500 bg-green-100" : "text-overdue bg-overdue-bg"} rounded-md`}>
                        {invoiceData.status.charAt(0).toUpperCase() + invoiceData.status.slice(1)}
                    </p>
                    <div className="flex justify-center items-center border border-gray-300 p-1 rounded-md">
                        <BiTimeFive size={20} color="#344054" />
                    </div>
                </div>
                <button className="flex items-center gap-1 text-sm font-semibold md:hidden">
                    <AiOutlineLink size={19} color="#044E97" />
                    <p className="text-[#044E97]">Copy payment link</p>
                </button>
            </div>
        </section>
    );
};

export default InvoiceId;
