import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { getSession, signOut, useSession } from "next-auth/react";
import "../styles/globals.css"

const Home: NextPage = () => {
  const { data: session } = useSession();
  return (
    <>
      <Head>
        <title>BlockEase</title>
        <link rel="icon" type="image/png" href="../public/favicon-32x32.png" />
      </Head>

      {session && (
        <>
          <button className="w-10 h-10" onClick={() => signOut()}>
            sign out
          </button>
        </>
      )}
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req }: any) => {
  const session = await getSession({ req });

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
};

export default Home;
