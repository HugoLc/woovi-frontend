import { PaymentMethod, PixCreditCard } from "../types";

export const paymentMethod: PaymentMethod = {
  userName: "João",
  paymentOptions: [
    {
      optionType: "Pix",
      installments: [
        {
          quantity: 1,
          total: 3050000,
          cet: 0,
          value: 3050000,
          highlight: "🤑 R$ 300,00 de volta no seu Pix na hora",
        },
      ],
    },
    {
      optionType: "Pix Parcelado",
      installments: [
        {
          quantity: 2,
          total: 1530000,
          cet: 0.5,
          value: 3060000,
        },
        {
          quantity: 3,
          total: 1019666,
          cet: 0.5,
          value: 3062000,
        },
        {
          quantity: 4,
          total: 772500,
          cet: 0.5,
          value: 3090000,
          highlight: "-3% de juros: Melhor opção de parcelamento",
        },
        {
          quantity: 5,
          total: 630000,
          cet: 0.5,
          value: 3150000,
        },
        {
          quantity: 6,
          total: 528333,
          cet: 0.5,
          value: 3169998,
        },
        {
          quantity: 7,
          total: 454285,
          cet: 0.5,
          value: 3180000,
        },
      ],
    },
  ],
};

export const pixCreditCard: PixCreditCard = {
  id: "2c1b951f356c4680b13ba1c9fc889c47",
  userName: "João",
  pixQrCode: "/",
  timeline: new Date(),
  selectedPayment: {
    optionType: "Pix Parcelado",
    installment: {
      quantity: 2,
      total: 1530000,
      cet: 0.5,
      value: 3060000,
    },
  },
};
