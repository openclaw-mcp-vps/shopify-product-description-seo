export default function Home() {
  const faqs = [
    {
      q: "How does the competitor analysis work?",
      a: "We scrape competitor product pages and extract key SEO signals — keywords, structure, and metadata — then use AI to rewrite your descriptions to outrank them."
    },
    {
      q: "Does it work with any Shopify store?",
      a: "Yes. Connect your Shopify store via API key and we sync your product catalog automatically. Bulk edits push back to your store in one click."
    },
    {
      q: "Can I cancel anytime?",
      a: "Absolutely. No contracts, no lock-in. Cancel from your billing dashboard and your subscription ends at the current period."
    }
  ];

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          E-commerce SEO
        </span>
        <h1 className="text-4xl font-bold text-white leading-tight mb-4">
          SEO-optimize Shopify product descriptions{" "}
          <span className="text-[#58a6ff]">automatically</span>
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          Analyze competitor pages, generate AI-powered descriptions, and bulk-push updates to your Shopify store — all from one dashboard.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start for $13/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-3">No contracts. Cancel anytime.</p>
      </section>

      {/* Features strip */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-20">
        {[
          { icon: "🔍", title: "Competitor Analysis", desc: "Scrape rival product pages for winning keywords and structure" },
          { icon: "✍️", title: "AI Rewrites", desc: "Generate SEO-optimized descriptions tuned for Google rankings" },
          { icon: "⚡", title: "Bulk Push", desc: "Update hundreds of products in your Shopify store in seconds" }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">{f.icon}</div>
            <div className="text-white font-semibold mb-1">{f.title}</div>
            <div className="text-[#8b949e] text-sm">{f.desc}</div>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$13</div>
          <div className="text-[#8b949e] text-sm mb-6">/month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited product rewrites",
              "Competitor page scraping",
              "Bulk Shopify sync",
              "SEO score dashboard",
              "Priority support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-[#c9d1d9] text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Get started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="text-white font-semibold mb-2">{faq.q}</div>
              <div className="text-[#8b949e] text-sm leading-relaxed">{faq.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs mt-20">
        &copy; {new Date().getFullYear()} ShopifyDescriptionSEO. All rights reserved.
      </footer>
    </main>
  );
}
