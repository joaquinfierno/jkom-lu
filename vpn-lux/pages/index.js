import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-12">
      <header className="w-full flex justify-between items-center mb-12">
        <h1 className="text-3xl font-bold text-accent">VPN Luxembourg</h1>
        <nav className="space-x-6">
          <a href="#features" className="hover:text-highlight">Features</a>
          <a href="#download" className="hover:text-highlight">Download</a>
        </nav>
      </header>

      <section className="text-center max-w-3xl mb-24">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Fast & Secure VPN with Luxembourg IP
        </h2>
        <p className="text-lg mb-6">
          Enjoy a blazing fast connection and total privacy while browsing. Connect from Luxembourg or anywhere in the world.
        </p>
        <a
          href="#download"
          className="px-8 py-4 bg-accent text-primary font-semibold rounded-lg hover:bg-highlight transition"
        >
          Get Started
        </a>
        <div className="mt-12">
          <Image
            src="/technology.png"
            alt="Technology illustration"
            width={600}
            height={400}
          />
        </div>
      </section>

      <section id="features" className="w-full max-w-5xl grid md:grid-cols-3 gap-8 mb-24">
        <div className="bg-[#1e293b] p-6 rounded-xl shadow-lg text-center">
          <h3 className="text-xl font-bold mb-2">Fast Connection</h3>
          <p>Low latency servers ensure smooth browsing and streaming.</p>
        </div>
        <div className="bg-[#1e293b] p-6 rounded-xl shadow-lg text-center">
          <h3 className="text-xl font-bold mb-2">Luxembourg IP</h3>
          <p>Access content as if you’re browsing from Luxembourg.</p>
        </div>
        <div className="bg-[#1e293b] p-6 rounded-xl shadow-lg text-center">
          <h3 className="text-xl font-bold mb-2">Secure & Private</h3>
          <p>Your data is encrypted with military-grade security.</p>
        </div>
      </section>

      <section id="download" className="text-center">
        <h2 className="text-3xl font-bold mb-6">Download Now</h2>
        <a
          href="#"
          className="px-8 py-4 bg-highlight text-white font-semibold rounded-lg hover:bg-accent transition"
        >
          Download VPN
        </a>
      </section>

      <footer className="mt-24 text-center text-gray-400">
        &copy; 2025 VPN Luxembourg. All rights reserved.
      </footer>
    </main>
  );
}