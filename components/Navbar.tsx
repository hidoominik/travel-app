import Link from "next/link";
import Image from "next/image";
const Navbar = () => {
  return (
    <nav className="border-2 border-red-500 max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/hilink-logo.svg" width={74} alt="logo" height={29} />
      </Link>
    </nav>
  );
};

export default Navbar;
