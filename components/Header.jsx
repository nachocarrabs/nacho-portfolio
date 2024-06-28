import Link from "next/link";
import Nav from "./Nav.jsx";
import { Button } from "./ui/button.jsx";
import MobileNav from "./MobileNav.jsx";

const Header = () => {
  const nacho = "<nacho"
  const cierre = "/>"

  return (
    <header className=" py-8 xl:py-12 text-white ">
      <div className="container mx-auto flex justify-between items-center">
        {/* <nacho */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            {nacho}
            <span className="text-accent">Dev</span>
            {cierre}
          </h1>
        </Link>
      {/*desktop nav & hire me button*/}
      <div className="hidden xl:flex items-cente gap-8">
        <Nav />
        <Link href="/contact">
            <Button>Hire me</Button>
        </Link>
      </div>

        {/*mobile nav*/}
        <div className="xl:hidden">
            <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
