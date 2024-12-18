import InvoiceId from "../MainBody/InvoiceId";
import Navigation from "./Navigation";
import { FaChevronLeft } from "react-icons/fa6";

const Heading = () => {
    return (
        <header className="ml-sidebar-size px-8 py-6 max-md:mx-0 max-md:p-0">
            <Navigation />
            <div className="mt-6 px-4 flex items-center justify-between max-md:mt-0 max-md:py-2 max-md:pr-8 max-md:border-b">
                <div className="md:hidden p-4 rounded-md cursor-pointer hover:bg-slate-100">{<FaChevronLeft />}</div>
                <h2 className="font-semibold text-xl py-1 pb-2 max-md:text-center max-md:ml-8">View invoice</h2>
                <button className="md:hidden px-3 py-2 rounded-md text-red-600 font-semibold hover:bg-red-50">Cancel</button>
            </div>
            <div className="max-md:hidden">
                <InvoiceId isMobileView={false} hide={false} />
            </div>
        </header>
    );
};

export default Heading;
