import { useEffect } from "react";
import useInvoiceStore from "../../store/useInvoiceStore";

const TotalAmount = () => {
    const { invoiceData, loadInvoiceData } = useInvoiceStore();

    useEffect(() => {
        loadInvoiceData();
    }, [loadInvoiceData]);

    if (!invoiceData) {
        return <div className="h-[90vh] w-[90%] fixed flex justify-center items-center">Loading ...</div>;
    }

    const zero = "₦0.00";
    const discount = "0%";
    const vat = "0%";

    return (
        <div className="w-full max-w-[450px] pt-3 text-lg font-medium border-t max-md:border-t-0 max-md:max-w-full max-md:font-medium max-md:text-slate-600 max-md:text-base">
            <div className="flex items-center justify-between py-1 px-4 mb-1 max-md:px-3">
                <span>Sub-total</span>
                <span className="font-semibold max-md:text-black">{`₦${invoiceData.total.toLocaleString()}`}</span>
            </div>
            <div className="flex items-center justify-between py-1 px-4 mb-1 max-md:px-3">
                <div className="flex items-center gap-3 py-2 ">
                    <span>Discount</span>
                    <span className="bg-slate-50 text-slate-400 border rounded-md p-1 w-16 text-center max-md:hidden">{discount}</span>
                </div>
                <span className="font-semibold max-md:text-black">{discount}</span>
            </div>
            <div className="flex items-center justify-between py-1 px-4 mb-1 max-md:px-3">
                <div className="flex items-center gap-3 py-2">
                    <span>VAT</span>
                    <span className="bg-slate-50 text-slate-400 border rounded-md p-1 w-16 text-center max-md:hidden">{vat}</span>
                </div>
                <span className="font-semibold max-md:text-black">{zero}</span>
            </div>
            <div className="flex justify-between p-4 mt-2 bg-sidebar-bg max-md:p-3 max-md:bg-transparent border-t">
                <span className="font-semibold text-white max-md:text-black">Total amount</span>
                <span className="font-semibold text-white max-md:text-black">{`₦${invoiceData.total.toLocaleString()}`}</span>
            </div>
        </div>
    );
};

export default TotalAmount;
