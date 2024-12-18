import { useEffect } from "react";
import useInvoiceStore from "../../store/useInvoiceStore";

type BankAccountProps = {
    isMobileView?: boolean;
    hide?: boolean;
};

const BankAccount = ({ isMobileView = false, hide = true }: BankAccountProps) => {
    const { invoiceData, loadInvoiceData } = useInvoiceStore();

    useEffect(() => {
        loadInvoiceData();
    }, [loadInvoiceData]);

    if (!invoiceData) {
        return <div className="h-[90vh] w-[90%] fixed flex justify-center items-center">Loading ...</div>;
    }
    return (
        <>
            {invoiceData.bankAccounts.map((item) => (
                <div
                    key={item.id}
                    className={`flex flex-col p-3 bg-slate-100 text-sm text-gray-700 rounded max-md:font-medium max-md:text-base max-md:gap-2 max-md:bg-slate-50 max-md:m-5 max-md:px-4 max-md:rounded-xl ${
                        !isMobileView && "md:hidden"
                    } ${hide && "max-md:hidden"}`}
                >
                    <span className="max-md:hidden">{item.bankName}</span>
                    <span className="max-md:text-black">{item.accountNumber}</span>
                    <p className="max-md:flex">
                        {item.accountName}
                        <span className="md:hidden mx-2 text-slate-400 font-light translate-y-[-1px]">|</span>
                        <span className="md:hidden">{item.bankName}</span>
                    </p>
                </div>
            ))}
        </>
    );
};

export default BankAccount;
