import Head from 'next/head';
import { ReactNode } from 'react';
import { Footer } from '../footer';
import { Navbar } from '../navbar';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>Nextjs Template</title>
        <meta charSet="UTF-8" />

        {/* <!-- Viewport --> */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* <!--  Primary --> */}
        <meta name="title" content="Nextjs Template" />
        <meta name="description" content="Nextjs Template" />
        <meta
          name="keywords"
          content="Nextjs Template, Nextjs, TypeScript, Tailwind CSS and Tanstack Query Template"
        />
        <meta name="author" content="Eryscode7, @mozoerys@gmail.com" />
        <meta name="application_name" content="Nextjs Template" />

        {/* <!--  Open Graph / Facebook --> */}
        <meta property="og:title" content="Nextjs Template Website" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Nextjs Template Website" />
        <meta property="og:url" content="https://nextjs-template-eryscode7.vercel.app/" />
        <meta property="og:image" content="/next.svg" />
        <meta property="og:image:width" content="650" />
        <meta property="og:image:height" content="350" />
        <meta property="og:description" content="Nextjs Template Website" />
      </Head>
      <>
        {/* HEADER OR NAVBAR */}
        <Navbar />

        {/* MAIN PAGE */}
        <main>{children}</main>

        {/* FOOTER */}
        <Footer />
      </>
    </>
  );
};

export default Layout;
