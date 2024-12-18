// useInvoiceStore.ts
import { create } from "zustand";
import { InvoiceData, PaymentData } from "./storeDataTypes"; // Import both types
import invoiceDataJson from "../../public/invoiceData.json";
import paymentDataJson from "../../public/paymentData.json";

type InvoiceStore = {
    invoiceData: InvoiceData | null;
    paymentData: PaymentData[] | null; // Use the new PaymentData type
    loadInvoiceData: () => void;
    loadPaymentData: () => void;
};

const useInvoiceStore = create<InvoiceStore>((set) => ({
    invoiceData: null,
    paymentData: null,
    loadInvoiceData: () => {
        set({ invoiceData: invoiceDataJson as InvoiceData });
    },
    loadPaymentData: () => {
        set({ paymentData: paymentDataJson as PaymentData[] });
    },
}));

export default useInvoiceStore;
