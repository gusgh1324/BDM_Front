import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { loadPaymentWidget, ANONYMOUS } from "@tosspayments/payment-widget-sdk";

const generateRandomString = () =>
  window.btoa(Math.random().toString()).slice(0, 20);

export function CheckoutPage() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const planName = searchParams.get("name");
  const planPrice = Number(searchParams.get("price"));

  const paymentWidgetRef = useRef<any>(null);
  const paymentMethodsWidgetRef = useRef<any>(null);
  const agreementWidgetRef = useRef<any>(null);

  useEffect(() => {
    (async () => {
      const paymentWidget = await loadPaymentWidget(
        "test_gck_docs_Ovk5rk1EwkEbP0W43n07xlzm",
        ANONYMOUS,
      );

      if (paymentWidgetRef.current == null) {
        paymentWidgetRef.current = paymentWidget;
      }

      const paymentMethodsWidget =
        paymentWidgetRef.current.renderPaymentMethods(
          "#payment-method",
          { value: planPrice.toString() },
          { variantKey: "DEFAULT" },
        );

      agreementWidgetRef.current = paymentWidgetRef.current.renderAgreement(
        "#agreement",
        { variantKey: "DEFAULT" },
      );

      paymentMethodsWidgetRef.current = paymentMethodsWidget;
    })();
  }, [planPrice]);

  return (
    <div className="page-container">
      <div className="content-container py-40">
        <div id="payment-method" className="w-full" />
        <div id="agreement" className="w-full" />
        <div className="px-6 w-full">
          <button
            className="px-5 py-2.5 border-none rounded-lg bg-blue-500 text-blue-50 font-semibold text-base cursor-pointer w-full"
            onClick={async () => {
              const paymentWidget = paymentWidgetRef.current;
              try {
                await paymentWidget?.requestPayment({
                  orderId: generateRandomString(),
                  orderName: planName || "구독 결제",
                  customerName: "김토스",
                  customerEmail: "customer123@gmail.com",
                  amount: planPrice,
                  successUrl:
                    window.location.origin +
                    "/sandbox/success" +
                    window.location.search,
                  failUrl:
                    window.location.origin +
                    "/sandbox/fail" +
                    window.location.search,
                });
              } catch (error) {
                // TODO: 에러 처리
              }
            }}
          >
            결제하기
          </button>
        </div>
      </div>
    </div>
  );
}
