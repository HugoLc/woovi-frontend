export type PaymentMethod = {
  userName: string;
  paymentOptions: PaymentOption[];
};

export type PaymentOption = {
  optionType: string;
  installments: Installment[];
};

export type Installment = {
  quantity: number;
  value: number;
  total: number;
  cet: number;
  highlight?: string;
};

///

export type PixCreditCard = {
  id: string;
  userName: string;
  pixQrCode: string;
  timeline: Date;
  selectedPayment: SelectedPaymentOption;
};

export type SelectedPaymentOption = {
  optionType: string;
  installment: Installment;
};
