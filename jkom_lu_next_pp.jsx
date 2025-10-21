# Updated project for jkom.lu — only PayPal monthly payment (€6.99)
# Next.js + Tailwind dark tech theme, simplified for single PayPal subscription.

=== file: package.json ===
{
  "name": "jkom-lu-paypal-only",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  },
  "dependencies": {
    "next": "14.0.0",
    "react": "18.2.0",
    "react-dom": "18.2.0",
    "@paypal/react-paypal-js": "8.0.0"
  },
  "devDependencies": {
    "autoprefixer": "10.4.14",
    "postcss": "8.4.23",
    "tailwindcss": "4.0.0"
  }
}

=== file: pages/pricing.tsx ===
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js'

export default function Pricing(){
  const clientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || ''

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-6 text-center">Pricing</h2>
      <div className="flex justify-center">
        <div className="bg-[#071025] p-6 rounded-2xl shadow-lg border border-gray-800 text-center">
          <h3 className="text-xl font-semibold mb-2">Monthly Plan</h3>
          <div className="text-3xl font-bold mb-4">€6.99 / month</div>
          <ul className="mb-6 text-sm space-y-2 text-muted">
            <li>Unlimited devices</li>
            <li>High-speed servers</li>
            <li>No-logs privacy policy</li>
          </ul>
          <PayPalScriptProvider options={{ 'client-id': clientId, currency: 'EUR', intent: 'subscription' }}>
            <PayPalButtons 
              style={{ layout: 'vertical', color: 'blue', shape: 'rect', label: 'subscribe' }}
              createSubscription={(data, actions) => {
                return actions.subscription.create({
                  plan_id: process.env.NEXT_PUBLIC_PAYPAL_PLAN_ID
                })
              }}
              onApprove={(data, actions) => {
                alert('Subscription successful! ID: ' + data.subscriptionID)
              }}
            />
          </PayPalScriptProvider>
        </div>
      </div>
    </section>
  )
}
