"use client";
import { MdOutlinePolicy } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FaBook, FaCamera, FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { DotBg } from "../Assets/DotBg";
import {QuotationDrawer} from "../Custom/QuotationDrawer";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../ui/card";
import FAQModal from "./FAQModal";
import { Separator } from "../ui/separator";
import { ReceiptText } from "lucide-react";

export default function Footer() {
    const [copied, setCopied] = useState(false);
    const email = "vikas@thelevatorcompany.com"; // Replace with your email

    const handleCopy = () => {
      navigator.clipboard.writeText(email).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Reset after 2 sec
      });
    };

    return (
        <section className="h-full relative shadow-lg w-full min-h-[400px] bg-neutral-900/10 backdrop-blur-sm border border-neutral-800 p-6 pb-0 rounded-lg flex flex-col items-center text-center lg:text-left mt-4 lg:items-stretch lg:justify-between overflow-hidden">
            <div className="flex flex-col size-full p-3 space-y-6 ">
                {/* Top Section */}
                <div className="flex flex-col lg:flex-row w-full border-2 border-gold z-20 overflow-hidden rounded-2xl p-4 relative">
            {/* Left - Description */}
            <div className="flex items-center w-full lg:w-2/5">
                <Card className="w-full bg-transparent border-none">
                    <CardHeader>
                        <h1 className="text-2xl font-bold">
                            Elevate Excellence with The Elevator Company – India's Premier
                            Elevator Manufacturer & Service Provider
                        </h1>
                        <p className="text-gray-600">
                            Step into the future of vertical mobility with The Elevator Company, a proudly
                            Indian brand redefining elevator manufacturing and servicing with cutting-edge
                            technology, superior craftsmanship, and unwavering commitment to safety.
                        </p>
                    </CardHeader>
                    <CardContent>
                        <p>
                            From luxury high-rises to commercial hubs and residential spaces, our elevators
                            blend innovation, efficiency, and aesthetics, ensuring a smooth, reliable, and
                            stylish ride every time. Backed by world-class engineering and a dedicated service
                            network, we provide customized solutions tailored to your needs, keeping your spaces
                            seamlessly connected and your journeys effortless.
                        </p>
                    </CardContent>
                    <CardFooter>
                        <p className="font-semibold">Experience the next level of vertical transportation—Elevate with The Elevator Company!</p>
                    </CardFooter>
                </Card>
                <DotBg />
            </div>
            {/* Right - Banner Image (Visible only on large screens) */}
            <div className="hidden lg:flex lg:w-3/5 relative items-center justify-center">
                <Image
                    src="/images/hero-bg.webp"
                    alt="Modern Elevator in a High-Rise Building"
                    width={900}
                    height={600}
                    priority
                    quality={80}
                    className="rounded-md object-cover"
                />
            </div>
                 </div>

                {/* Bottom Section */}
                <div className="relative w-full">
                    <div className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-gold via-gold to-neutral-900 brightness-150 py-2 absolute left-1/2 -translate-x-1/2 top-0 w-full uppercase tracking-wide">
                        The Elevator Company
                    </div>
                    <div className="pt-16 flex flex-col md:flex-row gap-4 items-center justify-between h-auto ">
                        {/* Logo Section */}
                        <div className="flex items-center justify-start">
                            <div className="w-64 aspect-square">
                                <Image
                                    src="/images/the-elevator-company.png"
                                    alt="The Elevator Company Logo"
                                    width={256}
                                    height={256}
                                    loading="lazy"
                                    quality={60}
                                    className="object-contain"
                                />
                            </div>
                        </div>

                        {/* Navigation Links */}
                        <div className="w-4/5 flex flex-col justify-start gap-6 ">
                            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 place-items-center justify-items-start">
                                {/* About Us */}
                                <div className="flex flex-col gap-2 text-center md:text-left justify-start h-full">
                                    <div className="font-bold">About Us</div>
                                    <Link href="/about-us#our-story">
                                        <span className="flex gap-2 flex-row items-center justify-center sm:justify-start">
                                            <FaBook /> Our Story
                                        </span>
                                    </Link>
                                    <Link href="/gallery">
                                        <span className="flex gap-2 flex-row items-center justify-center sm:justify-start">
                                            <FaCamera /> Gallery
                                        </span>
                                    </Link>
                                </div>

                                {/* Socials */}
                                <div className="flex flex-col gap-2 text-center md:text-left justify-start h-full">
                                    <div className="font-bold">Socials</div>
                                   <Link href={"https://www.facebook.com/share/1DtocsgwPX/"} target="_blank">
                                   <span className="flex gap-2 flex-row items-center justify-center sm:justify-start">
                                        <FaFacebook /> Facebook
                                    </span>
                                   </Link>
                                    <Link href="https://www.instagram.com/thelevatorcompany?igsh=b3B0YzQ5Y3ZiN3hi" target="_blank">
                                        <span className="flex gap-2 flex-row items-center justify-center sm:justify-start">
                                            <FaInstagram /> Instagram
                                        </span>
                                    </Link>
                                    <Link href="https://wa.me/+919310229056?text=Hello%20there!%20I%20wanted%20to%20contact%20you." target="_blank">
                                        <span className="flex gap-2 flex-row items-center justify-center sm:justify-start">
                                            <FaWhatsapp /> WhatsApp
                                        </span>
                                    </Link>
                                    <Link href="https://www.linkedin.com/company/the-elevator-company/?viewAsMember=true" target="_blank">
                                        <span className="flex gap-2 flex-row items-center justify-center sm:justify-start">
                                            <FaLinkedin /> LinkedIn
                                        </span>
                                    </Link>
                                </div>

                                {/* Support */}
                                <div className="flex flex-col gap-2 text-center md:text-left justify-start h-full">
                                    <div className="font-bold">Support</div>
                                    <span
                                        onClick={handleCopy}
                                        className="flex gap-2 flex-row items-center justify-center sm:justify-start cursor-pointer text-white"
                                    >
                                        <FaEnvelope />
                                        {copied ? "Mail Copied!" : "Contact"}
                                    </span>
                                    <span>
                                        <FAQModal />
                                    </span>
                                </div>

                                {/* CTA button */}
                                <div className="flex flex-col gap-2 text-center md:text-left justify-start h-full">
                                    <div className="font-bold">Get Your Quotation Today:</div>
                                    <QuotationDrawer />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex gap-4 items-center justify-between border-t py-2 px-4">
                <div className="text-xs text-muted-foreground flex gap-4 items-center justify-center ">
                    <p>The Elevator Company</p>
                    <Separator orientation="vertical" className="h-8"/>
                    <p>&copy;  2025 All Rights Reserved</p>
                </div>
                <div className="text-xs text-muted-foreground flex gap-4 items-center justify-center ">
                    <p>theelevatorcompany.com</p>
                </div>
                <div className="flex gap-4 items-center justify-center">
                <Link href={"/privacy-policy#head"} className="text-xs text-muted-foreground"> <span className="flex gap-2 items-center"> <MdOutlinePolicy/> Privacy Policy </span> </Link>
                <Separator orientation="vertical" className="h-8"/>
                <Link href={"/terms-and-conditions#head"} className="text-xs text-muted-foreground"> <span className="flex gap-2 items-center"> <ReceiptText className="h-3 w-3" /> Terms & Conditions </span> </Link>
                </div>
            </div>
        </section>
    );
}
