import Layout from "../components/Layout";
import Link from "next/link";
import Image from "next/image";

export default function Home({ cryptoData }) {
  return (
    <Layout page={"Crypto Watch - Accueil"}>
      <ul className="flex justify-aroud py-10">
        {cryptoData.map((crypto, index) => {
          return (
            <li
              key={index}
              className="relative hover:shadow-md p-8 border border-blue-300 rounded-3xl bg-blue-100 md:w-auto flex-1 mx-5"
            >
              <Link
                href={{
                  pathname: `/currency/[currency]`,
                  query: { currency: crypto.id },
                }}
              >
                <a className="rounded-md">
                  <div className="text-center">
                    <Image
                      src={crypto.logo_url}
                      alt={crypto.name}
                      height="100"
                      width="100"
                    />
                  </div>
                  <h2 className="text-2xl mb-6 uppercase tracking-wider">
                    {crypto.name}
                  </h2>
                  <h3 className="font-bold text-2xl mb-4">
                    {parseFloat(crypto.price).toFixed(2)} $
                  </h3>
                  <p>
                    1 jour:{" "}
                    <span className="font-bold">
                      {parseFloat(crypto["1d"].price_change_pct * 100).toFixed(
                        2
                      ) + "%"}
                    </span>
                    {crypto["1d"].price_change_pct < 0 ? (
                      <span className="text-red-500">&#x2798;</span>
                    ) : (
                      <span className="text-green-500">&#x279A;</span>
                    )}
                  </p>
                  <p>
                    30 jour:{" "}
                    <span className="font-bold">
                      {parseFloat(crypto["30d"].price_change_pct * 100).toFixed(
                        2
                      ) + "%"}
                    </span>
                    {crypto["30d"].price_change_pct < 0 ? (
                      <span className="text-red-500">&#x2798;</span>
                    ) : (
                      <span className="text-green-500">&#x279A;</span>
                    )}
                  </p>
                  <p>
                    365 jour:{" "}
                    <span className="font-bold">
                      {parseFloat(
                        crypto["365d"].price_change_pct * 100
                      ).toFixed(2) + "%"}
                    </span>
                    {crypto["365d"].price_change_pct < 0 ? (
                      <span className="text-red-500">&#x2798;</span>
                    ) : (
                      <span className="text-green-500">&#x279A;</span>
                    )}
                  </p>
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </Layout>
  );
}

export async function getStaticProps() {
  try {
    const res = await fetch(
      "https://api.nomics.com/v1/currencies/ticker?key=bc293d9511c159f5f7e2249bc645ba8f442c971d&ids=BTC,ETH,XRP&interval=1d,30d,365d"
    );

    const cryptoData = await res.json();

    return { props: { cryptoData } };
  } catch (e) {
    console.error(e);
  }
}
