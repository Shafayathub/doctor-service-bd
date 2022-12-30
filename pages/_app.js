import '../styles/globals.css';
import Footer from './Footer';
import Navbar from './Navbar';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar></Navbar>
      <Component {...pageProps} />
      <Footer></Footer>
    </>
  );
}
