import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { getSession, signOut, useSession } from "next-auth/react";
import Sidebar from "../components/Home/Sidebar";
import Balance from "./../components/Dashboard/Balance";
import Graph from "../components/Home/Graph";
import Convertion from "../components/Home/Convertion";
import Profile from "./../components/Dashboard/Profile";


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
					<div className="h-[100vh] w-[100vw] overflow-hidden flex space-x-3">
						<div className="my-[5rem] w-fit">
							<Sidebar />
						</div>
						<div className="flex flex-col justify-center mx-auto w-full mt-8 h-[100vh] overflow-y-scroll overflow-x-hidden scrollbar-hide ">
							<Balance />
							<div className="grid grid-cols-1 space-y-4 md:grid-cols-2 lg:grid-cols-3 ">
								<Graph />
								<Convertion />
								<Profile
									mailid={session.user?.email}
									name={session.user?.name}
									img={session.user?.image}
								/>
							</div>
						</div>
					</div>
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
