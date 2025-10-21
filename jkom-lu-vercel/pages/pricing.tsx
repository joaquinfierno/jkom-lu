import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js"
import { useRouter } from "next/router"

export default function Pricing() {
  const router = useRouter()
  const clientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || "ATrAplSz7peVCFrzQcdYYHPy_jipLSOM5aQe7m2eLD68sYCNF4cODgAsmDHYboSjTzJgPA2fj3Mtv7MN"
  const planId = process.env.NEXT_PUBLIC_PAYPAL_PLAN_ID || "P-50U015304N7970514ND3URQI"

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6 bg-dark text-white">
      <h2 className="text-4xl font-bold mb-8">Monthly Subscription</h2>
      <div className="bg-[#071025] p-8 rounded-2xl shadow-lg border border-gray-800 w-full max-w-md text-center">
        <h3 className="text-2xl font-semibold mb-2">VPN Access</h3>
        <div className="text-3xl font-bold mb-4">€6.99 / month</div>
        <ul className="mb-6 text-gray-400 space-y-2 text-sm">
          <li>✔ Unlimited Devices</li>
          <li>✔ No Logs Policy</li>
          <li>✔ High-Speed Servers</li>
        </ul>

        <PayPalScriptProvider options={{ "client-id": clientId, currency: "EUR", intent: "subscription" }}>
          <PayPalButtons
            style={{ layout: "vertical", color: "blue", shape: "rect", label: "subscribe" }}
            createSubscription={(data, actions) => {
              return actions.subscription.create({
                plan_id: planId,
              })
            }}
            onApprove={(data) => {
              router.push("/success?subscriptionID=" + data.subscriptionID)
            }}
          />
        </PayPalScriptProvider>
      </div>
    </main>
  )
}
