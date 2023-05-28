import Head from 'next/head';
import { ReactNode } from 'react';
import { Footer } from '../footer';
import { Navbar } from '../navbar';

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
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
