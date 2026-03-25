import Footer from './Footer';
import Navbar from './Navbar';
import AnimatedBackground from './AnimatedBackground';

export default function Layout({ children }) {
  return (
    <>
      <AnimatedBackground />
      <Navbar />
      <main className="mx-auto max-w-6xl px-6 pt-10">{children}</main>
      <Footer />
    </>
  );
}
