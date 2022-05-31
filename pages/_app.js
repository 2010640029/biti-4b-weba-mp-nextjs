import '../css/style.css'
import '../css/form.css'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../public/logo.png'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>BITI-4B-WEBA-MP Pet Care App</title>
      </Head>
      
        <Image
          id="title"
          src={Logo}
          alt="pet care logo"
          width="100"
          height="100"
        />
        
      <div className="top-bar">
        <div className="nav">
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/new">
            <a>Add Pet</a>
          </Link>
        </div>

      </div>
      <div className="grid wrapper">
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp
