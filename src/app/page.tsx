import Head from 'next/head';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ArticleSection from '../components/ArticleSection';
import Footer from '../components/Footer';

const Home = () => (
  <>
    <Head>
      <title>IDN Slot</title>
      <meta name="description" content="Welcome to IDN Slot" />
      <meta property="og:title" content="IDN Slot" />
      <meta property="og:description" content="Welcome to IDN Slot" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.idnslot.com" />
      <meta property="og:image" content="https://www.idnslot.com/images/og-image.jpg" />
    </Head>
    <Header />
    <main className="pt-16">
      <HeroSection />
      <ArticleSection />
    </main>
    <Footer />
  </>
);

export default Home;
