<html>

<head>
  <link rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
  <script src="https://unpkg.com/react/umd/react.development.js"></script>
  <script src="https://unpkg.com/react-dom/umd/react-dom.development.js">
  </script>
  <script src="https://unpkg.com/@babel/standalone/babel.js"></script>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    body {
      font-family: 'Arial', sans-serif;
    }
  </style>
</head>

<body>
  <div id="root"></div>
  <script type="text/babel">
    const App = () => {
        return (
          <div className="bg-gradient-to-b from-gray-900 to-gray-800 text-white justify-between items-center">
            <header className="flex justify-between items-center p-6">
              <div className="text-3xl font-bold">Moonex</div>
              <nav className="space-x-4">
                <a href="#" className="hover:text-yellow-500">Home</a>
                <a href="#" className="hover:text-yellow-500">About Us</a>
                <a href="#" className="hover:text-yellow-500">Roadmap</a>
                <a href="#" className="hover:text-yellow-500">FAQs</a>
                <a href="#" className="hover:text-yellow-500">Contact Us</a>
              </nav>
              <button className="bg-yellow-500 text-black px-4 py-2 rounded">Connect Wallet</button>
            </header>
            <main className="text-center py-20">
              <h1 className="text-5xl font-bold">Trusted Multi-Chain DEX Platform</h1>
              <p className="mt-4 text-lg">Trade, earn, and own crypto on the all-in-one multi-chain DEX</p>
              <div className="mt-8 space-x-4">
                <button className="bg-yellow-500 text-black px-6 py-2 rounded">Connect Wallet</button>
                <button className="bg-yellow-500 text-black px-6 py-2 rounded">Trade Crypto</button>
              </div>
            </main>
            <section className="py-20 text-center">
              <h2 className="text-3xl font-bold">Why MoonEX?</h2>
              <table className="mx-auto mt-8 border border-yellow-500">
                <thead>
                  <tr>
                    <th className="border border-yellow-500 px-4 py-2">Comparison</th>
                    <th className="border border-yellow-500 px-4 py-2">Moonex</th>
                    <th className="border border-yellow-500 px-4 py-2">Uniswap</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-yellow-500 px-4 py-2">1. Point no one</td>
                    <td className="border border-yellow-500 px-4 py-2 text-center">✔</td>
                    <td className="border border-yellow-500 px-4 py-2 text-center">✖</td>
                  </tr>
                  <tr>
                    <td className="border border-yellow-500 px-4 py-2">2. Point no two this</td>
                    <td className="border border-yellow-500 px-4 py-2 text-center">✔</td>
                    <td className="border border-yellow-500 px-4 py-2 text-center">✖</td>
                  </tr>
                  <tr>
                    <td className="border border-yellow-500 px-4 py-2">3. Point no two this</td>
                    <td className="border border-yellow-500 px-4 py-2 text-center">✔</td>
                    <td className="border border-yellow-500 px-4 py-2 text-center">✖</td>
                  </tr>
                  <tr>
                    <td className="border border-yellow-500 px-4 py-2">4. Point no two this</td>
                    <td className="border border-yellow-500 px-4 py-2 text-center">✔</td>
                    <td className="border border-yellow-500 px-4 py-2 text-center">✖</td>
                  </tr>
                  <tr>
                    <td className="border border-yellow-500 px-4 py-2">5. Point no two this</td>
                    <td className="border border-yellow-500 px-4 py-2 text-center">✔</td>
                    <td className="border border-yellow-500 px-4 py-2 text-center">✖</td>
                  </tr>
                </tbody>
              </table>
            </section>
            <section className="py-20 text-center">
              <h2 className="text-3xl font-bold">Our Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
                <div className="bg-gray-700 p-6 rounded">
                  <i className="fas fa-money-bill-wave text-yellow-500 text-3xl"></i>
                  <h3 className="mt-4 font-bold">Cheapest TXs</h3>
                  <p>Exchange popular digital currencies at the cheapest possible transaction price.</p>
                </div>
                <div className="bg-gray-700 p-6 rounded">
                  <i className="fas fa-shield-alt text-yellow-500 text-3xl"></i>
                  <h3 className="mt-4 font-bold">CerTIK</h3>
                  <p>We are Audited by Certik. Certik is the leading security-focused ranking platform to.</p>
                </div>
                <div className="bg-gray-700 p-6 rounded">
                  <i className="fas fa-ban text-yellow-500 text-3xl"></i>
                  <h3 className="mt-4 font-bold">No Contract Sells</h3>
                  <p>No contract sells to fund the marketing wallets.</p>
                </div>
                <div className="bg-gray-700 p-6 rounded">
                  <i className="fas fa-exchange-alt text-yellow-500 text-3xl"></i>
                  <h3 className="mt-4 font-bold">CrossDex Support</h3>
                  <p>Exchange popular digital currencies at the cheapest possible transaction price.</p>
                </div>
              </div>
            </section>
            <section className="py-20 text-center">
              <h2 className="text-3xl font-bold">FAQs</h2>
              <div className="mt-8">
                <div className="border-b border-gray-600 py-4">
                  <h3 className="font-bold">How do I get a Referral Code?</h3>
                  <p className="text-gray-400">You receive your rewards in ETH instantly once someone you refer makes a transaction!</p>
                </div>
                <div className="border-b border-gray-600 py-4">
                  <h3 className="font-bold">Do I get rewarded in tokens or ETH when I refer buyers?</h3>
                  <p className="text-gray-400">You receive your rewards in ETH instantly once someone you refer makes a transaction!</p>
                </div>
                <div className="border-b border-gray-600 py-4">
                  <h3 className="font-bold">How do I get a Referral Code?</h3>
                  <p className="text-gray-400">You receive your rewards in ETH instantly once someone you refer makes a transaction!</p>
                </div>
              </div>
            </section>
            <footer className="py-10 text-center">
              <div className="flex justify-center space-x-4">
                <a href="#" className="hover:text-yellow-500">About Us</a>
                <a href="#" className="hover:text-yellow-500">Roadmap</a>
                <a href="#" className="hover:text-yellow-500">FAQs</a>
                <a href="#" className="hover:text-yellow-500">Contact Us</a>
              </div>
              <div className="mt-4">
                <i className="fab fa-telegram hover:text-yellow-500"></i>
                <i className="fab fa-twitter hover:text-yellow-500 ml-4"></i>
              </div>
            </footer>
          </div>
        );
      };

      ReactDOM.render(<App />, document.getElementById('root'));
    </script>
</body>

</html>