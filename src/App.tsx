import Heading from "./components/Heading/Heading";
import ActionButtonGroup from "./components/MainBody/ActionButtonGroup";
import BankAccount from "./components/MainBody/BankAccount";
import MainBody from "./components/MainBody/MainBody";
import PaymentHistory from "./components/MainBody/PaymentHistory";
import SideBar from "./components/Sidebar/SideBar";

function App() {
    return (
        <>
            <SideBar />
            <Heading />
            <MainBody />
            <BankAccount hide={false} />
            <ActionButtonGroup />
            <PaymentHistory />
        </>
    );
}

export default App;
