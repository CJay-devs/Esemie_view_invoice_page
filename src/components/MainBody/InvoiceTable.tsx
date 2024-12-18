import { useEffect } from "react";
import useInvoiceStore from "../../store/useInvoiceStore";

const InvoiceTable = () => {
    const { invoiceData, loadInvoiceData } = useInvoiceStore();

    useEffect(() => {
        loadInvoiceData();
    }, [loadInvoiceData]);

    if (!invoiceData) {
        return <div className="h-[90vh] w-[90%] fixed flex justify-center items-center">Loading ...</div>;
    }
    return (
        <section className="mt-10 max-md:m-0">
            <table className="w-full max-md:hidden">
                <thead className="max-md:hidden">
                    <tr className="bg-gray-50 h-12 text-left">
                        <th className="font-semibold pl-3">Item</th>
                        <th className="font-semibold pl-3">Rate</th>
                        <th className="font-semibold pl-3">Quantity</th>
                        <th className="font-semibold pl-3">Total</th>
                    </tr>
                </thead>
                <tbody>
                    {invoiceData.inventories.map((item) => (
                        <tr key={item.id} className="border-b border-gray-200 h-16 hover:bg-sky-50">
                            <td className="pl-3 w-1/3">{item.name}</td>
                            <td className="pl-3">{`₦${item.rate.toLocaleString()}`}</td>
                            <td className="pl-3">{item.quantity}</td>
                            <td className="pl-3">{`₦${(item.rate * item.quantity).toLocaleString()}`}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="w-full flex flex-col gap-4 md:hidden border">
                {invoiceData.inventories.map((item) => (
                    <div key={item.id} className={`flex justify-between items-center p-3 font-semibold hover:bg-sky-50`}>
                        <div className="flex flex-col gap-1">
                            <span className="">{item.name}</span>
                            <span className="font-medium text-slate-500">
                                {item.quantity} x {`₦${item.rate.toLocaleString()}`}
                            </span>
                        </div>
                        <span className="">{`₦${(item.rate * item.quantity).toLocaleString()}`}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default InvoiceTable;
