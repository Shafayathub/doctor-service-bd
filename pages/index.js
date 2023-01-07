import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import Link from 'next/link';
import logo from '../pages/images/docotr-service-bd-logo.png';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import banner1 from './images/banner/banner1.jpg';
import banner2 from './images/banner/banner2.jpg';
import banner3 from './images/banner/banner3.jpg';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Doctor Service BD</title>
        <meta name="description" content="Doctor Service BD" />
        <meta name="keyword" content="Doctor Service BD" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-slate-900">
        <div className="z-10 flex flex-wrap items-center justify-evenly p-5 text-orange-400">
          <Image
            className="w-48 md:w-72"
            src={logo}
            alt="Doctor Service BD Logo"
            priority
          />
          <h4>Mobile: +880171xxxxxxx</h4>
          <h4>Email: example@gmail.com</h4>
        </div>

        <Carousel autoPlay infiniteLoop>
          <div>
            <Image src={banner1} alt="banner" />
          </div>
          <div>
            <Image src={banner2} alt="banner" />
          </div>
          <div>
            <Image src={banner3} alt="banner" />
          </div>
        </Carousel>

        <div className="grid lg:grid-cols-4 gap-5 text-center z-10 pb-20 pl-10 pr-10">
          <Link
            href={'./doctors'}
            className="border border-orange-400 rounded-xl text-orange-400  hover:bg-orange-500 hover:text-white p-2">
            <h2 className="font-semibold text-2xl">
              Doctors <span>-&gt;</span>
            </h2>
            <p className="text-xs">Find Best Professionals.</p>
          </Link>

          <Link
            href={'./hospitals'}
            className="border border-orange-400 rounded-xl text-orange-400  hover:bg-orange-500 hover:text-white p-2">
            <h2 className="font-semibold text-2xl">
              Diagnostics <span>-&gt;</span>
            </h2>
            <p className="text-xs">Find Best Health Care Centers For You.</p>
          </Link>

          <Link
            href={'./about'}
            className="border border-orange-400 rounded-xl text-orange-400  hover:bg-orange-500 hover:text-white p-2">
            <h2 className="font-semibold text-2xl">
              About Us <span>-&gt;</span>
            </h2>
            <p className="text-xs">We Care About Your Health.</p>
          </Link>

          <Link
            href={'./contact'}
            className="border border-orange-400 rounded-xl text-orange-400  hover:bg-orange-500 hover:text-white p-2">
            <h2 className="font-semibold text-2xl">
              Contact Us <span>-&gt;</span>
            </h2>
            <p className="text-xs">We are here for you 24/7.</p>
          </Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
          <iframe
            className="mx-auto pb-10 w-80"
            src="https://www.youtube.com/embed/oCNZVy5Njms"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
          <iframe
            className="mx-auto pb-10 w-80"
            src="https://www.youtube.com/embed/ieme9Kv2poQ"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
          <iframe
            className="mx-auto pb-10 w-80"
            src="https://www.youtube.com/embed/hUHCadgWZO8"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
        </div>
      </main>
    </>
  );
}
