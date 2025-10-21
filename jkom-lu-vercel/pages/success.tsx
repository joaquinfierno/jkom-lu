import { useRouter } from "next/router"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Success() {
  const router = useRouter()
  const [subscriptionID, setSubscriptionID] = useState<string | null>(null)

  useEffect(() => {
    if (router.query.subscriptionID) {
      setSubscriptionID(router.query.subscriptionID as string)
    }
  }, [router.query])

  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-6 bg-dark text-white text-center">
      <h1 className="text-5xl font-bold text-green-400 mb-4">Subscription Successful!</h1>
      <p className="text-gray-300 mb-6">Thank you for joining JKOM VPN.</p>

      {subscriptionID && (
        <p className="text-sm text-gray-500 mb-8">
          Your Subscription ID: <span className="font-mono">{subscriptionID}</span>
        </p>
      )}

      <Link href="/">
        <a className="bg-accent px-6 py-3 rounded-xl text-white font-semibold hover:bg-blue-500 transition">
          Back to Home
        </a>
      </Link>
    </main>
  )
}
