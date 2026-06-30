const mockConfigs = [
  { id: 1, network: "Vodacom", type: "UDP", status: "Working", expires: "2026-04-10", creator: "HyperSA" },
  { id: 2, network: "MTN", type: "HTTP Custom", status: "Expired", expires: "2026-04-01", creator: "Ghost" },
  { id: 3, network: "Cell C", type: "TLS", status: "Working", expires: "2026-04-15", creator: "HyperSA" },
]

export default function Home() {
  return (
    <main style={{minHeight:'100vh',background:'#0A0F1E',color:'#fff',padding:'16px',maxWidth:'480px',margin:'0 auto',fontFamily:'system-ui'}}>
      <h1 style={{fontSize:'24px',fontWeight:'800',color:'#00F5FF',margin:'0 0 4px 0'}}>HYPER UDP FREENET SA</h1>
      <p style={{fontSize:'12px',opacity:0.6,margin:'0 0 16px 0'}}>Free Configs. Beta Test Only.</p>

      <div style={{background:'#111829',padding:'12px',borderRadius:'12px',marginBottom:'16px',border:'1px solid rgba(255,255,255,0.1)'}}>
        ⚠️ Use at own risk. Test with 50MB first.
      </div>

      <div style={{display:'flex',gap:'8px',marginBottom:'16px',overflowX:'auto'}}>
        <button style={{background:'#111829',border:'1px solid rgba(255,255,255,0.1)',color:'#fff',padding:'6px 12px',borderRadius:'12px',fontSize:'12px'}}>All</button>
        <button style={{background:'#111829',border:'1px solid rgba(255,255,255,0.1)',color:'#fff',padding:'6px 12px',borderRadius:'12px',fontSize:'12px'}}>Vodacom</button>
        <button style={{background:'#111829',border:'1px solid rgba(255,255,255,0.1)',color:'#fff',padding:'6px 12px',borderRadius:'12px',fontSize:'12px'}}>UDP</button>
      </div>

      <div>
        {mockConfigs.map(c => (
          <div key={c.id} style={{background:'#111829',padding:'16px',borderRadius:'16px',marginBottom:'12px',border:'1px solid rgba(255,255,255,0.1)'}}>
            <div style={{display:'flex',justifyContent:'space-between',marginBottom:'8px'}}>
              <span style={{fontWeight:600,fontSize:'14px'}}>{c.network} • {c.type}</span>
              <span style={{fontSize:'12px',padding:'2px 8px',borderRadius:'999px',fontWeight:'700',background: c.status==='Working' ? 'rgba(34,197,94,0.2)' : 'rgba(239,68,68,0.2)', color: c.status==='Working' ? '#4ade80' : '#f87171'}}>
                {c.status}
              </span>
            </div>
            <p style={{fontSize:'12px',opacity:0.6,margin:'0 0 12px 0'}}>Exp: {c.expires} | By: @{c.creator}</p>
            <button 
              onClick={() => navigator.clipboard.writeText(`HYPER_${c.network}_${c.type}_${c.id}`)}
              style={{width:'100%',background:'#00F5FF',color:'#0A0F1E',fontWeight:800,padding:'10px',borderRadius:'12px',fontSize:'14px',border:'none'}}>
              Copy Config
            </button>
          </div>
        ))}
      </div>
    </main>
  )
    }
