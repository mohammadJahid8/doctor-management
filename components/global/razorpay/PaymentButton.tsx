import axios from "axios";
import { useEffect } from "react";
import Razorpay from "razorpay";
import api from "@/utils/axiosInstance";
import { useAppContext } from "@/lib/context";
import * as crypto from "crypto";
import { toast } from "sonner";

const PaymentButton = ({
  planId,
  planName,
}: {
  planId: string;
  planName: string;
}) => {
  const { user, setUserRefetch } = useAppContext();

  useEffect(() => {
    if (planId !== "free-plan") {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, [planId]);

  const handlePayment = async () => {
    if (!user?.email) {
      toast.error("User email not found.");
      return;
    }

    try {
      if (planId === "free-plan") {
        // ✅ Handle free plan: Skip payment, directly save subscription
        const data = {
          planName,
          planId,
          subscriptionId: "FREE_PLAN", // Optional placeholder
          status: "Not Subscribed",
        };

        const res = await api.post(`/users/save-subscription/${user.email}`, data);

        if (res.status === 200) {
          setUserRefetch(true);
          toast.success("Subscribed to Free Plan", {
            position: "top-center",
          });
        } else {
          toast.error("Failed to activate free plan");
        }

        return;
      }

      // 🔁 Paid plan workflow
      const res = await api.post("/users/create-subscription", { planId });

      if (res.data) {
        const subId = res.data.data;

        const options = {
          key: "rzp_live_1ekqDWQCIFywTl",
          subscription_id: subId,
          name: "Doctor Management.",
          description: planName,
          image: "/your_logo.jpg",
          handler: async function (response: any) {
            const {
              razorpay_payment_id,
              razorpay_subscription_id,
              razorpay_signature,
            } = response;

            const shasum = crypto.createHmac("sha256", "Vvu1BMTkWvRyvj4lj7WsUVzz");
            shasum.update(razorpay_payment_id + "|" + razorpay_subscription_id);
            const digest = shasum.digest("hex");

            if (digest === razorpay_signature) {
              const data = {
                planName,
                planId,
                subscriptionId: razorpay_subscription_id,
                status: "Active",
              };

              const saveRes = await api.post(
                `/users/save-subscription/${user.email}`,
                data
              );

              if (saveRes.status === 200) {
                setUserRefetch(true);
                toast.success(`Subscribed`, {
                  position: "top-center",
                });
              }
            }
          },
          prefill: {
            name: user.name,
            email: user.email,
          },
          theme: {
            color: "#F37254",
          },
        };

        const rzp1 = new window.Razorpay(options);
        rzp1.open();
      }
    } catch (error) {
      console.error(error);
      toast.error("Payment or subscription failed.");
    }
  };

  return (
    <button
      id="rzp-button1"
      className="py-4 px-8 bg-green-500 flex justify-center items-center rounded"
      onClick={handlePayment}
    >
      {planId === "free-plan" ? "START FREE PLAN" : "SUBSCRIBE"}
    </button>
  );
};

export default PaymentButton;
