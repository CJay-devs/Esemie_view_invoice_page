// PaymentHistory.tsx
import { useEffect } from "react";
import useInvoiceStore from "../../store/useInvoiceStore";
import DateFormatter from "./DateFormatter";
import { AiOutlineDownload } from "react-icons/ai";

const PaymentHistory = () => {
    const { paymentData, loadPaymentData } = useInvoiceStore();

    useEffect(() => {
        loadPaymentData(); // Load payment data on component mount
    }, [loadPaymentData]);

    return (
        <section className="mt-10 ml-main-body-ml mr-8 mb-16  border-2 border-b-0 border-gray-100 rounded-t-2xl max-lg:hidden">
            <h2 className="p-6 text-lg font-semibold">Record Payment History</h2>
            <table className="w-full">
                <thead className="max-md:hidden">
                    <tr className="bg-gray-50 h-12 font-medium text-left border">
                        <th className="font-medium pl-3">Invoice Number</th>
                        <th className="font-medium pl-3">Payment Type</th>
                        <th className="font-medium pl-3">Payment Method</th>
                        <th className="font-medium pl-3">Date</th>
                        <th className="font-medium pl-3">Amount</th>
                        <th className="font-medium pl-3"></th>
                    </tr>
                </thead>
                <tbody>
                    {paymentData ? (
                        paymentData.map((item) => (
                            <tr key={item.id} className="border-b border-slate-200 h-20 hover:bg-sky-50">
                                <td className="pl-3">None</td> {/* Assuming entityId is the invoice number */}
                                <td className="pl-3">{item.paymentType}</td>
                                <td className="pl-3">{item.paymentMethod}</td>
                                <td className="pl-3">{<DateFormatter date={item.paymentDate} />}</td>
                                <td className="pl-3">{`₦${item.amount.toLocaleString()}`}</td>
                                <td className="w-20 mx-4">
                                    <button className="w-[50px] p-4 flex justify-center items-center bg-slate-100 rounded-md hover:bg-slate-200">
                                        {<AiOutlineDownload />}
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={5} className="text-center">
                                Loading payment data...
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </section>
    );
};

export default PaymentHistory;
