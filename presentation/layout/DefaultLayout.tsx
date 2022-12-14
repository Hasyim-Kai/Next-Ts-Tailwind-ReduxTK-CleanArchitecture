import Head from "next/head";
import { selectGlobalState } from "../../app/GlobalSlice";
import { useAppSelector } from "../../app/store";
import { selectUserState } from "../../app/UserSlice";

type Props = { children: JSX.Element | JSX.Element[] | null, additionalStyle?: string, pageTitle?: string }

export default function DefaultLayout({ children, additionalStyle = '', pageTitle = 'Healme' }: Props) {
  const { isLoggedIn, userInfo } = useAppSelector(selectUserState);

  return <>
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className={`w-full min-h-screen overflow-hidden ${additionalStyle}`}>
      {children}
    </main>
  </>
}