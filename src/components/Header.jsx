import Image from "next/image";
import Link from "next/link";
import "./Header.css";

export default function Header() {
  return (
    <header className="header glass-panel">
      <div className="container header-container">
        <div className="logo-container">
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Image
              src="/Logo.jpg"
              alt="Elite Research Solutions Logo"
              width={160}
              height={160}
              className="logo-img"
              unoptimized={true}
              priority
            />
            <span className="brand-name">ELITE RESEARCH SOLUTIONS</span>
          </Link>
        </div>
        <nav className="desktop-nav">
          <Link href="#who-we-are" className="nav-link">About</Link>
          <Link href="#services" className="nav-link">Services</Link>
          <Link href="#experts" className="nav-link">Experts</Link>
          <Link href="#contact" className="nav-link btn-primary">Contact Us</Link>
        </nav>
      </div>
    </header>
  );
}
