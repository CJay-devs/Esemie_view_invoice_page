import { useEffect } from "react";
import useInvoiceStore from "../../store/useInvoiceStore";

const AccountDetails = () => {
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
                <div key={item.id} className="border-b border-gray-200 h-16">
                    {/* <td className="pl-3">{`₦${(item.rate * item.quantity).toLocaleString()}`}</td> */}
                </div>
            ))}
        </>
    );
};

export default AccountDetails;
