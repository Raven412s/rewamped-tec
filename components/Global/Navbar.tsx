"use client";

import {QuotationDrawer} from "@/components/Custom/QuotationDrawer";
import Rounded from "@/components/Custom/RoundedButton/index";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"; // Shadcn's Sheet
import gsap from "gsap";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";
import { useWindowScroll } from "react-use";
import { Button } from "../ui/button";

const navItems = ["Home", "Gallery", "About Us"];

const Navbar = () => {
  const navContainerRef = useRef<HTMLDivElement>(null);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const { y: currentScrollY } = useWindowScroll();
  const router = useRouter();
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  useEffect(() => {
    if (currentScrollY === 0) {
      setIsNavVisible(true);
      navContainerRef?.current?.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      setIsNavVisible(false);
      navContainerRef?.current?.classList?.add("floating-nav");
    } else if (currentScrollY < lastScrollY) {
      setIsNavVisible(true);
      navContainerRef.current?.classList.add("floating-nav");
    }
    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);

  const handleNavigation = (path: string) => {
    if(path === "/home"){
        router.push("/")
    } else {
        router.push(path);
    }
    setIsSheetOpen(false); // Close sheet after routing
  };

  return (
    <div
      ref={navContainerRef}
      className="fixed inset-x-0 top-1 z-50 h-16 px-4 sm:px-6 border border-gold/60 bg-background/30 backdrop-blur-md shadow-lg shadow-black/10 rounded-md transition-all duration-700"
    >
      {/* Mobile Navigation */}
      <header className="flex items-center justify-between h-full">
        {/* Logo and Main Button */}
        <div className="flex items-center gap-6">
          <Link href="/">
            <Image
              src="/images/the-elevator-company.png"
              alt="The Elevator Company Logo"
              width={64}
              height={64}
              priority
              className="w-16 h-auto"
            />
          </Link>
          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex gap-6 items-center">
            <Rounded>
              <p onClick={() => handleNavigation("/products")} className="flex gap-3 items-center">
                Products <TiLocationArrow />
              </p>
            </Rounded>
            {navItems.map((item) => (
              <Button
               variant={"link"}
                key={item}
                onClick={() =>
                    handleNavigation(`/${item.toLowerCase().replace(/\s+/g, "-")}`)
                  }
                className="nav-hover-btn min-w-max text-sm"
              >
                {item}
              </Button>
            ))}
            <QuotationDrawer />
          </div>
        </div>

        {/* Mobile Heading */}
        <h1 className="text-md sm:text-3xl md:text-4xl uppercase md:capitalize font-display tracking-wider text-gold brightness-150 text-center lg:hidden">
          <strong>The Elevator Company</strong>
        </h1>

        {/* Mobile Menu */}
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger asChild>
            <Button size={"icon"} variant={"link"} className="p-2 block lg:hidden">
                <Menu className="text-gold "/>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="left"
            className="bg-white/10 backdrop-blur-md border border-white/10 flex flex-col gap-6 p-6"
          >
            <div className="flex items-center gap-4 mb-4">
              <Image
                src="/images/the-elevator-company.png"
                alt="The Elevator Company Logo"
                width={48}
                height={48}
                loading="lazy"
                className="w-12 h-auto"
              />
              <p className="text-lg font-bold">The Elevator Company</p>
            </div>
            {navItems.map((item) => (
              <Button
                variant={"link"}
                key={item}
                onClick={() =>
                  handleNavigation(`/${item.toLowerCase().replace(/\s+/g, "-")}`)
                }
                className="nav-hover-btn max-w-max text-sm text-left "
              >
                {item}
              </Button>
            ))}
            <Rounded>
              <p onClick={() => handleNavigation("/products")} className="flex gap-3 items-center">
                Products <TiLocationArrow />
              </p>
            </Rounded>
            <QuotationDrawer />
          </SheetContent>
        </Sheet>
      </header>
    </div>
  );
};

export default Navbar;
