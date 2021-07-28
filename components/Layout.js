import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function Layout({ children, page }) {
  return (
    <div className="bg-blue-50 pt-5 text-center min-h-screen">
      <Head>
        <title>{page}</title>
      </Head>
      <header className="container-lg">
        <h1 className="text-5xl mb-2"> CRYPTO WATCH</h1>
        <div className="inline-grid grid-cols-2 gax-x-10 p-4">
          <Link href="/" passHref>
            <button className="bg-blue-200 p-3 m-2 rounded-3xl hover:shadow-md border-2 border-blue-300">
              Accueil
            </button>
          </Link>
          <Link href="/about" passHref>
            <button className="bg-blue-200 p-3 m-2 rounded-3xl hover:shadow-md border-2 border-blue-300">
              À propos
            </button>
          </Link>
        </div>
        <div>
          <Image
            src="/bitcoin.jpg"
            alt="bitcoin"
            width="500"
            height="100"
            className="rounded-3xl object-cover"
            quality={10}
          />
        </div>
      </header>
      <main className="pt-4 mx-20">{children}</main>
      <footer className="p-10">
        <Image
          src="/crypto.jpg"
          alt="crypto"
          width="1500"
          height="100"
          className="rounded-3xl object-cover"
          quality={50}
        />
        <ul className="pt-10 pb-4 flex justify-around">
          <li>À propos</li>
          <li>Qui sommes-nous</li>
          <li>Florian Assante - 2021</li>
        </ul>
        <p>
          Hac ita persuasione reducti intra moenia bellatores obseratis undique
          portarum aditibus, propugnaculis insistebant et pinnis, congesta
          undique saxa telaque habentes in promptu, ut si quis se proripuisset
          interius, multitudine missilium sterneretur et lapidum.
        </p>
      </footer>
      <style jsx>{`
        p {
          color: grey;
        }
      `}</style>
    </div>
  );
}
