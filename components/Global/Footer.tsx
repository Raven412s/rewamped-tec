import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { DotBg } from "../Assets/DotBg";

export default function Footer() {
  return (
    <section className=" h-full  p-5">
      <div className="flex flex-col size-full p-3 gap-6">
        {/* Top Section */}
        <div className="flex w-full border-2 border-gold overflow-hidden rounded-2xl p-4 relative">
          {/* Left - Description */}
          <div className="flex items-center">
            <Card className="size-full bg-transparent border-none">
              <CardHeader>
                <CardTitle>
                  Elevate Excellence with The Elevator Company – India's Premier
                  Elevator Manufacturer & Service Provider
                </CardTitle>
                <CardDescription>
                  Step into the future of vertical mobility with The Elevator
                  Company, a proudly Indian brand redefining elevator
                  manufacturing and servicing with cutting-edge technology,
                  superior craftsmanship, and unwavering commitment to safety.
                </CardDescription>
              </CardHeader>
              <CardContent>
                From luxury high-rises to commercial hubs and residential
                spaces, our elevators blend innovation, efficiency, and
                aesthetics, ensuring a smooth, reliable, and stylish ride every
                time. Backed by world-class engineering and a dedicated service
                network, we provide customized solutions tailored to your needs,
                keeping your spaces seamlessly connected and your journeys
                effortless.
              </CardContent>
              <CardFooter>
                Experience the next level of vertical transportation—Elevate
                with The Elevator Company!
              </CardFooter>
            </Card>
            <DotBg/>
          </div>
          {/* Right - Placeholder for Image or Additional Content */}
          <div className="hidden items-center justify-center lg:flex">
            <img
              src="/images/hero-bg.jpg"
              alt="Elevator Banner"
              className="w-full h-auto object-cover rounded-md"
            />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between h-auto">
          {/* Logo Section */}
          <div className="w-2/3 flex items-center justify-start">
            <div className="w-64 aspect-square">
              <img
                src="/images/the-elevator-company.png"
                alt="Logo"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Navigation Links */}
          <div className="w-1/3 flex flex-col justify-start gap-6">
            <div className="text-4xl text-right font-semibold">
              The Elevator Company
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 place-items-center">
              {/* About Us */}
              <div className="flex flex-col gap-2 text-center md:text-left justify-start h-full">
                <div className="font-bold">About Us</div>
                <span>Mission</span>
                <span>Our Story</span>
                <span>Gallery</span>
              </div>
              {/* Support */}
              <div className="flex flex-col gap-2 text-center md:text-left justify-start h-full">
                <div className="font-bold">Support</div>
                <span>Contact</span>
                <span>FAQ's</span>
              </div>
              {/* Socials */}
              <div className="flex flex-col gap-2 text-center md:text-left justify-start h-full">
                <div className="font-bold">Socials</div>
                <span>Facebook</span>
                <span>Instagram</span>
                <span>WhatsApp</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
