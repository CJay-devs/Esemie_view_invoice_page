import mainLogo from "../../assets/esemie_logo.png";
import InvoiceId from "./InvoiceId";
import InvoiceDate from "./InvoiceDate";
import InvoiceTable from "./InvoiceTable";
import { useEffect } from "react";
import useInvoiceStore from "../../store/useInvoiceStore";
import PaymentDetails from "./PaymentDetails";

const MainBody = () => {
    const { invoiceData, loadInvoiceData } = useInvoiceStore();

    useEffect(() => {
        loadInvoiceData();
    }, [loadInvoiceData]);

    if (!invoiceData) {
        return <div className="h-[90vh] w-[90%] fixed flex justify-center items-center">Loading ...</div>;
    }
    const companyAddress = "3, Ogusanya drive, Surulere, Lagos";
    const phoneNumber = "07058857363";
    return (
        <main className="ml-main-body-ml mr-8 my-10 py-14 px-6 border-2 border-gray-100 rounded-3xl max-md:m-5 max-md:mb-20 max-md:p-0 max-md:rounded-xl">
            <InvoiceId isMobileView={true} />
            <section className="flex justify-between items-center max-md:gap-10 max-md:p-3 max-md:items-start max-md:border-b">
                <address className="not-italic">
                    <img src={mainLogo} className="h-10 max-md:h-5" alt="Esemie Logo" />
                    <div>
                        <h2 className="text-xl font-semibold my-2 max-md:text-base">Epsilon</h2>
                        <p className="text-lg font-medium text-text-body max-md:text-base">
                            {companyAddress}
                            <br />
                            {phoneNumber}
                        </p>
                    </div>
                </address>
                <div className="text-right">
                    <h1 className="font-semibold text-3xl max-md:hidden">INVOICE</h1>
                    <h3 className="font-semibold text-xl pt-4 pb-3 max-md:hidden">{invoiceData.invoiceNumber}</h3>
                    <h4 className="font-semibold text-xl text-gray-500 text-nowrap max-md:font-medium max-md:text-base">Balance due</h4>
                    <h2 className="font-semibold text-2xl text-nowrap mt-1 max-md:text-base">
                        {invoiceData.currency} {invoiceData.balanceDue.toLocaleString()}
                    </h2>
                </div>
            </section>

            <section className="flex justify-between items-center mt-20 max-md:gap-10 max-md:mt-0 max-md:p-3 max-md:border-b">
                <address className="not-italic">
                    <h2 className="text-xl font-semibold mb-2 max-md:font-semibold max-md:text-base">Billed to</h2>
                    <p className="text-lg font-medium text-text-body max-md:text-base">
                        <span className="max-md:font-semibold max-md:text-black">
                            {invoiceData.customer.firstName} {invoiceData.customer.lastName}
                        </span>
                        <br />
                        <span className="max-md:text-gray-500">{invoiceData.customer.address}</span>
                        <br />
                        <span className="max-md:text-gray-500">{invoiceData.customer.city},</span>
                        <br />
                        <span className="max-md:text-gray-500">{invoiceData.customer.state} State</span>
                    </p>
                </address>
                <div className="self-end flex flex-col gap-3">
                    <InvoiceDate dateType="Invoice date" date={invoiceData.issueDate} />
                    <InvoiceDate dateType="Due date" date={invoiceData.invoiceDueAt} />
                </div>
            </section>
            <InvoiceTable />
            <PaymentDetails />
        </main>
    );
};

export default MainBody;
