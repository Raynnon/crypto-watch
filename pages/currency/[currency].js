import Layout from "../../components/Layout";
import Image from "next/image";

export default function Currency({ cryptoData }) {
  return (
    <div>
      <Layout page={`Crypto Watch - ${cryptoData.name}`}>
        <div className="relative hover:shadow md p-8 border border-blue-300 sm:rounded-3xl bg-blue-100 md:w-auto flex-1 mx-5">
          <div className="text-center">
            <Image
              src={cryptoData.logo_url}
              alt={`${cryptoData.name}-logo`}
              width={150}
              height={150}
            />
          </div>
          <h2 className="text-2xl mb-6 uppercase tracking-wider">
            {cryptoData.name}
          </h2>
          <p>{cryptoData.description}</p>
          <p className="pt-5 text-blue-500">
            <a href={cryptoData.reddit_url} target="_blank" rel="noreferrer">
              {cryptoData.reddit_url}
            </a>
          </p>
        </div>
      </Layout>
    </div>
  );
}

export async function getServerSideProps({ query }) {
  try {
    const res = await fetch(
      `https://api.nomics.com/v1/currencies?key=bc293d9511c159f5f7e2249bc645ba8f442c971d&ids=${query.currency}&attributes=id,name,logo_url,description,reddit_url`
    );

    const cryptoData = await res.json();

    return { props: { cryptoData: cryptoData[0] } };
  } catch (e) {
    console.error(e);
  }
}
