export type Inventory = {
    id: string;
    name: string;
    rate: number;
    quantity: number;
};

export type CustomerInfo = {
    lastName: string;
    firstName: string;
    address: string;
    city: string;
    state: string;
    id: string;
    phone: string;
    email: string;
};

export type Annotation = {
    action: string;
    cognitoUserId: string;
    timestamp: string;
    name: string;
};

export type BankAccount = {
    bankName: string;
    currency: string;
    id: string;
    accountNumber: string;
    isActive: boolean;
    accountName: string;
};

export type InvoiceData = {
    currency: string;
    issueDate: string;
    invoiceDueAt: string;
    status: string;
    totalPaid: number;
    id: string;
    exchangeRate: number;
    invoiceNumber: string;
    shouldSendEmail: boolean;
    total: number;
    createdAt: string;
    isPaymentCompleted: boolean;
    shouldSendWhatsApp: boolean;
    shouldSendSMS: boolean;
    invoiceType: string;
    updatedAt: string;
    inventories: Inventory[];
    customer: CustomerInfo;
    balanceDue: number;
    customerId: string;
    annotations: Annotation[];
    bankAccounts: BankAccount[];
};

export type PaymentData = {
    invoiceNumber: string;
    entityType: string;
    companyId: string;
    entityId: string;
    status: string;
    createdAt: string;
    // outletIdStatus: string; // Adjusted name to match your JSON
    paymentDate: string;
    amount: number;
    id: string;
    paymentMethod: string;
    paymentType: string;
    customerId: string;
};
