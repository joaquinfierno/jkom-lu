import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-6">
      <h1 className="text-5xl font-bold mb-6 text-accent">jkom.lu</h1>
      <p className="text-lg mb-8 text-gray-300 text-center max-w-md">
        Secure your connection with JKOM VPN. Privacy-focused. High speed. No logs.
      </p>
      <Link href="/pricing">
        <a className="bg-accent px-6 py-3 rounded-xl text-white font-semibold hover:bg-blue-500 transition">
          Subscribe Now
        </a>
      </Link>
    </main>
  )
}
