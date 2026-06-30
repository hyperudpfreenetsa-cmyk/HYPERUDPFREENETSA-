const mockConfigs = [
  { id: 1, network: "Vodacom", type: "UDP", status: "Working", expires: "2026-04-10", creator: "HyperSA" },
  { id: 2, network: "MTN", type: "HTTP Custom", status: "Expired", expires: "2026-04-01", creator: "Ghost" },
  { id: 3, network: "Cell C", type: "TLS", status: "Working", expires: "2026-04-15", creator: "HyperSA" },
]

export default function Home() {
  return (
    <main className="min-h-screen p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold text-neon mb-1">HYPER UDP FREENET SA</h1>
      <p className="text-xs text-white/60 mb-4">Free Configs. Beta Test Only.</p>

      <div className="glass p-3 mb-4 border-yellow-500/30 text-xs text-yellow-300">
        ⚠️ Use at own risk. Test with 50MB first.
      </div>

      <div className="flex gap-2 mb-4 overflow-x-auto pb-1">
        <button className="glass px-3 py-1 text-xs whitespace-nowrap">All</button>
        <button className="glass px-3 py-1 text-xs whitespace-nowrap">Vodacom</button>
        <button className="glass px-3 py-1 text-xs whitespace-nowrap">UDP</button>
        <button className="glass px-3 py-1 text-xs whitespace-nowrap">Working</button>
      </div>

      <div className="space-y-3">
        {mockConfigs.map(c => (
          <div key={c.id} className="glass p-4 border-white/10">
            <div className="flex justify-between items-start mb-2">
              <span className="font-semibold text-sm">{c.network} • {c.type}</span>
              <span className={`text-xs px-2 py-0.5 rounded-full font-bold ${c.status==='Working'? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                {c.status}
              </span>
            </div>
            <p className="text-xs text-white/60 mb-3">Exp: {c.expires} | By: @{c.creator}</p>
            <button 
              onClick={() => navigator.clipboard.writeText(`HYPER_${c.network}_${c.type}_${c.id}`)}
              className="w-full bg-neon text-bg font-bold py-2 rounded-xl text-sm active:scale-95">
              Copy Config
            </button>
          </div>
        ))}
      </div>
    </main>
  )
      }
