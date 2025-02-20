import { FaBook, FaBullseye, FaCamera, FaEnvelope, FaFacebook, FaInstagram, FaQuestionCircle, FaWhatsapp } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import { DotBg } from "../Assets/DotBg";
import QuotationDrawer from "../Custom/QuotationDrawer";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../ui/card";
export default function Footer() {
  return (
    <section className=" h-full relative shadow-lg  w-full min-h-[400px] bg-neutral-900/10 backdrop-blur-sm border border-neutral-800  p-6 rounded-lg flex flex-col items-center text-center lg:text-left mt-4 lg:flex-row lg:items-stretch lg:justify-between">
      <div className="flex flex-col size-full p-3 gap-6 ">
        {/* Top Section */}
        <div className="flex w-full border-2 border-gold z-20 overflow-hidden rounded-2xl p-4 relative">
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
          <div className="hidden items-center justify-center sm:justify-start lg:flex">
            <img
              src="/images/hero-bg.jpg"
              alt="Elevator Banner"
              className="w-full h-auto object-cover rounded-md"
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
          <div className=" flex items-center justify-start ">
            <div className="w-64 aspect-square">
              <img
                src="/images/the-elevator-company.png"
                alt="Logo"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Navigation Links */}
          <div className="w-4/5 flex flex-col justify-start gap-6 ">
            <div className="grid grid-cols-1 sm:grid-cols-3  md:grid-cols-3 lg:grid-cols-4 gap-4 place-items-center justify-items-stretch">
              {/* About Us */}
              <div className="flex flex-col gap-2 text-center md:text-left justify-start h-full">
                <div className="font-bold">About Us</div>
                <span className="flex gap-2 flex-row items-center justify-center sm:justify-start"><FaBullseye /> Mission</span>
                <span className="flex gap-2 flex-row items-center justify-center sm:justify-start"><FaBook /> Our Story</span>
                <span className="flex gap-2 flex-row items-center justify-center sm:justify-start"><FaCamera /> Gallery</span>
                <span className="flex gap-2 flex-row items-center justify-center sm:justify-start"><RiTeamFill />Our Team</span>
              </div>

              {/* Socials */}
              <div className="flex flex-col gap-2 text-center md:text-left justify-start h-full">
                <div className="font-bold">Socials</div>
                <span className=" flex gap-2 flex-row items-center justify-center sm:justify-start"><FaFacebook /> Facebook</span>
                <span className=" flex gap-2 flex-row items-center justify-center sm:justify-start"><FaInstagram /> Instagram</span>
                <span className=" flex gap-2 flex-row items-center justify-center sm:justify-start"><FaWhatsapp /> WhatsApp</span>
              </div>
             {/* Support */}
             <div className="flex flex-col gap-2 text-center md:text-left justify-start h-full">
                <div className="font-bold">Support</div>
                <span className="flex gap-2 flex-row items-center justify-center sm:justify-start"><FaEnvelope /> Contact</span>
                <span className="flex gap-2 flex-row items-center justify-center sm:justify-start"><FaQuestionCircle /> FAQ's</span>
              </div>
             {/* CTA button */}
             <div className="flex flex-col gap-2 text-center md:text-left justify-start h-full">
                <div className="font-bold">Get Your Quotation Today:</div>
                <QuotationDrawer/>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
