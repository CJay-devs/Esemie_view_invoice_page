import BankAccount from "./BankAccount";

const BankDetails = () => {
    return (
        <div className="flex flex-col gap-3 w-96 max-md:w-full max-md:mt-0">
            <h3 className="p-3 text-lg font-medium bg-slate-100 rounded max-md:hidden">Payment Details</h3>
            <BankAccount isMobileView={true} />
        </div>
    );
};

export default BankDetails;
