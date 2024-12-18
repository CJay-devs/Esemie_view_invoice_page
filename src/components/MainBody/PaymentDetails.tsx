import BankDetails from "./BankDetails";
import TotalAmount from "./TotalAmount";

const PaymentDetails = () => {
    return (
        <section className="flex justify-between items-center md:gap-16 mt-10 py-20 max-md:flex-col-reverse max-md:p-0 max-md:mt-0">
            <BankDetails />
            <TotalAmount />
        </section>
    );
};

export default PaymentDetails;
