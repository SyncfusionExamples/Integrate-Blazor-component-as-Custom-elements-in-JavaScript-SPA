const target = "https://localhost:7039/"  // Blazor application hosted URL

const PROXY_CONFIG = [
  {
    context: [
      "/_content",
      "/_framework",
      "/_blazor"
   ],
    target: target,
    secure: false,
    headers: {
      Connection: 'Keep-Alive'
    },
    ws: true
  }
]

module.exports = PROXY_CONFIG;

