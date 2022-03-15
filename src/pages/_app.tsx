import Head from "next/head";

/* Import Tailwind CSS */
import "tailwindcss/tailwind.css";

/* Import types */
import type { AppProps } from "next/app";

const PersonalPortfolio = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
      <title>Eli_Pnqe</title>
      <meta name="title" content="Eli_Pnqe" />
      <meta name="description" content="Front-end developer from The Philippines. I'm currenty in High School. I hope that I'll be able to learn full-stack in the near future." />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://epnq.railway.app/" />
      <meta property="og:title" content="Eli_Pnqe" />
      <meta property="og:description" content="Front-end developer from The Philippines. I'm currenty in High School. I hope that I'll be able to learn full-stack in the near future." />
      <meta property="og:image" content="/banner.jpg" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://epnq.railway.app/" />
      <meta property="twitter:title" content="Eli_Pnqe" />
      <meta property="twitter:description" content="Front-end developer from The Philippines. I'm currenty in High School. I hope that I'll be able to learn full-stack in the near future." />
      <meta property="twitter:image" content="/banner.jpg" />
      </Head>

      <Component {...pageProps} />
    </>
  );
};

export default PersonalPortfolio;
