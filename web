# Project: jkom.lu — Next.js + Tailwind (Dark Tech)

This single-file project snapshot contains the essential files to launch a modern dark-themed Next.js website for jkom.lu with **Stripe (Apple/Google Pay)** + **PayPal** integration. Paste the files into a repo, install dependencies, configure environment variables, and deploy to Vercel.

---

=== file: package.json ===
{
  "name": "jkom-lu",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "14.0.0",
    "react": "18.2.0",
    "react-dom": "18.2.0",
    "stripe": "11.0.0",
    "@paypal/react-paypal-js": "8.0.0"
  },
  "devDependencies": {
    "autoprefixer": "10.4.14",
    "postcss": "8.4.23",
    "tailwindcss": "4.0.0",
    "eslint": "8.0.0",
    "eslint-config-next": "14.0.0"
  }
}

=== file: tailwind.config.js ===
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0ea5a4',
        accent: '#7c3aed',
        surface: '#0b0f14',
        muted: '#94a3b8'
      }
    }
  },
  darkMode: 'class'
}

=== file: postcss.config.js ===
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {}
  }
}

=== file: pages/_app.tsx ===
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#020617] to-[#081126] text-gray-100">
      <Header />
      <main className="container mx-auto px-6 py-12">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  )
}

=== file: styles/globals.css ===
@tailwind base;
@tailwind components;
@tailwind utilities;

html, body, #__next { height: 100%; }

body {
  @apply bg-surface font-sans;
}

=== file: components/Header.tsx ===
import Link from 'next/link'
export default function Header(){
  return (
    <header className="py-6 border-b border-gray-800">
      <div className="container mx-auto flex items-center justify-between px-6">
        <Link href="/">
          <a className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center font-bold">JK</div>
            <div>
              <div className="text-xl font-semibold">jkom.lu</div>
              <div className="text-sm text-muted">VPN & Tech Services</div>
            </div>
          </a>
        </Link>
        <nav className="flex gap-6">
          <Link href="/features"><a className="hover:underline">Features</a></Link>
          <Link href="/pricing"><a className="hover:underline">Pricing</a></Link>
          <Link href="/about"><a className="hover:underline">About</a></Link>
          <Link href="/contact"><a className="hover:underline">Contact</a></Link>
        </nav>
      </div>
    </header>
  )
}

=== file: components/Footer.tsx ===
export default function Footer(){
  return (
    <footer className="mt-16 py-10 border-t border-gray-800">
      <div className="container mx-auto px-6 text-center text-sm text-muted">© {new Date().getFullYear()} jkom.lu — Secure VPN & Tech Services</div>
    </footer>
  )
}

=== file: components/PricingCard.tsx ===
export default function PricingCard({title, price, features, stripePriceId}:{title:string, price:string, features:string[], stripePriceId?:string}){
  return (
    <div className="bg-[#071025] p-6 rounded-2xl shadow-lg border border-gray-800">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <div className="text-3xl font-bold mb-4">{price}</div>
      <ul className="mb-6 text-sm space-y-2">
        {features.map((f,i)=> <li key={i} className="text-muted">• {f}</li>)}
      </ul>
      <div className="flex gap-3">
        <form action="/api/stripe/create-checkout-session" method="POST">
          <input type="hidden" name="priceId" value={stripePriceId || ''} />
          <button type="submit" className="px-4 py-2 bg-primary rounded-md font-medium">Subscribe</button>
        </form>
        <div id={`paypal-button-${title.replace(/\s+/g,'')}`}></div>
      </div>
    </div>
  )
}

=== file: pages/index.tsx ===
import Link from 'next/link'
export default function Home(){
  return (
    <section className="text-center py-20">
      <h1 className="text-4xl font-extrabold mb-4">Secure, Fast VPN for Your Privacy</h1>
      <p className="text-muted max-w-2xl mx-auto mb-8">High-speed servers, no-logs policy, apps for all devices. Perfect for remote teams and privacy-conscious users.</p>
      <div className="flex justify-center gap-4">
        <Link href="/pricing"><a className="px-6 py-3 bg-primary rounded-md font-semibold">View Plans</a></Link>
        <Link href="/features"><a className="px-6 py-3 border border-gray-700 rounded-md">See Features</a></Link>
      </div>
    </section>
  )
}

=== file: pages/features.tsx ===
export default function Features(){
  return (
    <section>
      <h2 className="text-3xl font-bold mb-4">Features</h2>
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <li className="p-6 bg-[#071025] rounded-lg border border-gray-800">Advanced encryption (AES-256)</li>
        <li className="p-6 bg-[#071025] rounded-lg border border-gray-800">Global servers in 50+ countries</li>
        <li className="p-6 bg-[#071025] rounded-lg border border-gray-800">No-logs privacy policy</li>
      </ul>
    </section>
  )
}

=== file: pages/pricing.tsx ===
import dynamic from 'next/dynamic'
import PricingCard from '../components/PricingCard'
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js'

export default function Pricing(){
  const clientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || ''
  return (
    <section>
      <h2 className="text-3xl font-bold mb-6">Pricing</h2>
      <div className="grid md:grid-cols-3 gap-6">
        <PricingCard title="Basic" price="€3/mo" features={["1 Device","Standard Speeds"]} stripePriceId="price_1_BASIC" />
        <PricingCard title="Pro" price="€6/mo" features={["5 Devices","High Speed Servers"]} stripePriceId="price_1_PRO" />
        <PricingCard title="Enterprise" price="Contact" features={["Custom Solutions","Dedicated Support"]} stripePriceId="price_1_ENTERPRISE" />
      </div>

      <div className="mt-10">
        <h3 className="text-xl mb-3">PayPal demo</h3>
        <PayPalScriptProvider options={{ 'client-id': clientId, components: 'buttons' }}>
          <div id="paypal-container"></div>
        </PayPalScriptProvider>
      </div>
    </section>
  )
}

=== file: pages/about.tsx ===
export default function About(){
  return (
    <section>
      <h2 className="text-3xl font-bold mb-4">About jkom.lu</h2>
      <p className="text-muted">We provide privacy-first VPN solutions and professional technology services to individuals and businesses in Luxembourg and EU.</p>
    </section>
  )
}

=== file: pages/contact.tsx ===
export default function Contact(){
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Contact</h2>
      <p className="text-muted mb-6">Email: support@jkom.lu</p>
      <form className="grid gap-4 max-w-xl">
        <input className="p-3 bg-[#06121c] rounded" placeholder="Your name" />
        <input className="p-3 bg-[#06121c] rounded" placeholder="Email" />
        <textarea className="p-3 bg-[#06121c] rounded" placeholder="Message" rows={6}></textarea>
        <button className="px-4 py-2 bg-primary rounded">Send</button>
      </form>
    </section>
  )
}

=== file: lib/stripe.ts ===
import Stripe from 'stripe'
export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', { apiVersion: '2024-11-01' })

=== file: pages/api/stripe/create-checkout-session.ts ===
import { NextApiRequest, NextApiResponse } from 'next'
import { stripe } from '../../../lib/stripe'

export default async function handler(req: NextApiRequest, res: NextApiResponse){
  if (req.method !== 'POST') return res.status(405).end()
  const { priceId } = req.body || req.query
  try{
    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      payment_method_types: ['card'],
      line_items: [{ price: priceId || 'price_1_PRO', quantity: 1 }],
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/?success=true`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/?canceled=true`
    })
    res.redirect(303, session.url!)
  }catch(err){
    console.error(err)
    res.status(500).json({ error: 'Unable to create session' })
  }
}

=== file: pages/api/stripe/webhook.ts ===
import { buffer } from 'micro'
import type { NextApiRequest } from 'next'
import { stripe } from '../../../lib/stripe'

export const config = { api: { bodyParser: false } }

export default async function handler(req: NextApiRequest, res:any){
  const sig = req.headers['stripe-signature']!
  const buf = await buffer(req)
  try{
    const event = stripe.webhooks.constructEvent(buf.toString(), sig as string, process.env.STRIPE_WEBHOOK_SECRET!)
    // handle event types (invoice.paid, customer.subscription.created, etc.)
    console.log('Stripe event:', event.type)
    res.json({ received: true })
  }catch(err:any){
    console.error(err.message)
    res.status(400).send(`Webhook Error: ${err.message}`)
  }
}

=== file: public/.well-known/apple-developer-merchantid-domain-association ===
# (REGISTERED WITH STRIPE) - PLACE STRING FROM STRIPE DASHBOARD HERE

=== file: README.md ===
# jkom.lu — Next.js dark site (Stripe + PayPal)

## Quick start
1. Copy files into a new Git repo.
2. `npm install` or `pnpm install`
3. Create environment variables in Vercel or local `.env`:

```
NEXT_PUBLIC_SITE_URL=https://jkom.lu
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_XXX
STRIPE_SECRET_KEY=sk_live_XXX
STRIPE_WEBHOOK_SECRET=whsec_XXX
NEXT_PUBLIC_PAYPAL_CLIENT_ID=YOUR_PAYPAL_CLIENT_ID
PAYPAL_SECRET=YOUR_PAYPAL_SECRET
```

4. For Apple Pay (Stripe):
   - In Stripe Dashboard > Settings > Apple Pay, add your domain `jkom.lu` and upload the file `public/.well-known/apple-developer-merchantid-domain-association` contents provided by Stripe.

5. Deploy to Vercel and set environment variables in the Vercel dashboard. Vercel will provide automatic HTTPS.

## Notes on payments
- This example uses Stripe Checkout for subscriptions (server-side) and PayPal Buttons for one-off payments.
- Create Products & Prices in Stripe (monthly/yearly) and use the `price_xxx` IDs in the front-end / forms.
- Add your Stripe webhook endpoint in the Stripe dashboard: `https://jkom.lu/api/stripe/webhook` and copy the webhook secret into `STRIPE_WEBHOOK_SECRET`.

## Deploying
- Push to GitHub and import the repo in Vercel. Set environment variables, then click Deploy.

## Security
- Never commit `STRIPE_SECRET_KEY` or `PAYPAL_SECRET` to git.
- Use Vercel environment variables.

---

=== file: VERCEL.md ===
# Vercel specifics
1. Connect GitHub repo to Vercel.
2. Set ENV vars in Project Settings > Environment Variables.
3. For Apple Pay domain verification, use the file in `public/.well-known/` and then verify in Stripe.
4. Set the build command: `npm run build` and framework to Next.js.

---

End of project snapshot. Replace placeholder keys with your real Stripe/PayPal credentials before deploying.
