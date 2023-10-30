import  Main  from "./components/main";
import  Header from "./components/header";
import 'bootstrap/dist/css/bootstrap.css';
import Head from 'next/head'
export default function Home() {
  return (
    <div>
      <Head>
        <title>Pexel api</title>
        <link rel="shortcut icon" href="img/camara.png" />
      </Head>
      <Header />
      <Main />
    </div>
  )
}
