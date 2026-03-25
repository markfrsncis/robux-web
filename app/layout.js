import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AnimatedBackground from '../components/AnimatedBackground';
import CustomCursor from '../components/CustomCursor';
import PageTransition from '../components/PageTransition';

export const metadata = {
  title: 'Nova Atelier Portfolio',
  description: 'Award-style creative developer portfolio'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark">
      <body>
        <CustomCursor />
        <AnimatedBackground />
        <Navbar />
        <main className="mx-auto max-w-6xl px-6 py-10">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
