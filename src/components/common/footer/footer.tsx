import type { NextPage } from "next";

type Props = {};

const Footer: NextPage<Props> = () => {
  const date = new Date().getFullYear();

  return (
    <footer>
      <div>
        <h2>Nextjs Template ©{date}. All rights reserved</h2>
      </div>
    </footer>
  );
};

export default Footer;
