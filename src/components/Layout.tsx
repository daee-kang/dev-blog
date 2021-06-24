import Head from "next/head";
import Navigation from "./Navigation";

type Props = {
  children: React.ReactNode;
  noNav?: boolean
};
export default function Layout({ children, noNav = false }: Props) {
  return (
    <div className="root">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <meta name="theme-color" content="#fff" />
      </Head>
      {!noNav && <nav>
        <Navigation />
      </nav>
      }
      <main>{children}</main>
      <style jsx>
        {`
          .root {
            display: block;
            box-sizing: border-box;
            height: 100vh;
          }
          main {
            display: flex;
            min-height: 100%;
          }
          @media (min-width: 769px) {
            .root {
              display: flex;
              flex: 1 0 auto;
            }
            main {
              flex: 1 0 auto;
            }
          }
        `}
      </style>
    </div>
  );
}
