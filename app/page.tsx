import Head from 'next/head'
import Footer from './footer'
import HeroSection from './hero-section'
import HowItWorks from './how-it-works'

export default function Home() {
  return (
    <>
      <Head>
        <title>Bottled Clarity</title>
        <meta
          name="description"
          content="This is an awesome Next.js application."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <section>
        <HeroSection />
        <HowItWorks />
        <Footer />
      </section>
    </>
  )
}
