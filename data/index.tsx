import EcoFriendly from "@/app/(root)/(home)/_components/uspComponents/EcoFriendly";
import Innovative from "@/app/(root)/(home)/_components/uspComponents/Innovative";
import Quality from "@/app/(root)/(home)/_components/uspComponents/Quality";
import Safety from "@/app/(root)/(home)/_components/uspComponents/Safety";
import Technology from "@/app/(root)/(home)/_components/uspComponents/Technology";
import { ProductCardProps } from "@/components/Custom/ProductCard";
import { Lift, ProductDetailsProps } from "@/types";
import { IconCalendar, IconFileSmile, IconGlobe, IconMap, IconTruck } from "@tabler/icons-react";
import Image from "next/image";
export const umbrellaPoints = [
    {
      title: "Innovative and Customizable Solutions",
      description: "Tailored to meet diverse customer needs, these solutions offer unparalleled flexibility. Whether it's customizable cabins, Italian-inspired designs, or bespoke configurations, the client ensures that every installation reflects the unique preferences and requirements of the user.",
      src: "eleventra.webp", // Replace with relevant image filename
      link: "https://example.com/customizable-solutions", // Replace with a relevant link
      color: "#0d1b2a",
      text: "white",
      keyUSPs: [
        "Italian designs",
        "Customisable Cabins",
        "Tailored Solutions",
        "Flexibility in Installation"
      ],
      component: <Innovative/>
    },
    {
      title: "Unmatched Safety and Reliability",
      description: "With a focus on security, every product is built to adhere to the highest international safety standards. The integration of 194 safety parameters and TUV SUD certification guarantees peace of mind for users of all ages.",
      src: "elivio.webp", // Replace with relevant image filename
      link: "https://example.com/safety-reliability", // Replace with a relevant link
      color: "#1b263b",
      text: "white",
      keyUSPs: [
        "194 safety parameters",
        "TUV SUD Certified",
        "Safe for all Ages",
        "Reliable"
      ],
      component: <Safety/>
    },
    {
      title: "Advanced Technology and Modern Features",
      description: "Leveraging cutting-edge technology, these solutions integrate modern features like lift automation and voice command capabilities, ensuring seamless and efficient operation that meets the demands of the future.",
      src: "felix.webp", // Replace with relevant image filename
      link: "https://example.com/technology-modern", // Replace with a relevant link
      color: "#415a77",
      text: "white",
      keyUSPs: [
        "Lift Automation",
        "Voice Command Enabled",
        "Modern",
        "Smooth and Quiet Operation"
      ],
      component: <Technology/>
    },
    {
      title: "Eco-Friendly and Vastu Compliance",
      description: "Combining sustainability with practicality, these designs emphasize low energy consumption and cost efficiency, making them an eco-friendly choice that aligns with the growing demand for green technology.",
      src: "pneumatic.webp", // Replace with relevant image filename
      link: "https://example.com/eco-friendly", // Replace with a relevant link
      color: "#778da9",
      text: "white",
      keyUSPs: [
        "Cost Efficient",
        "Low Energy Consumption",
        "Space Saving Design",
        "Vastu Compliance"
      ],
      component: <EcoFriendly/>
    },
    {
      title: "Global Standards and Superior Quality",
      description: "Built with imported machinery and tested against international benchmarks, these products provide innovative, reliable, and high-quality solutions that stand out in the global market.",
      src: "climberx.png", // Replace with relevant image filename
      link: "https://example.com/global-quality", // Replace with a relevant link
      color: "#e0e1dd",
      text: "#101010",
      keyUSPs: [
        "Internationally Certified",
        "Imported Machinery",
        "Innovative",
        "Efficient"
      ],
      component: <Quality/>
    }
  ];

  export const slides = [
    {
        id: 1,
        image: '/images/parrallax/7.webp',
        title: 'Rise Above with Precision',
        subtitle: 'Revolutionizing elevator systems for a safer, smoother journey.',
    },
    {
        id: 2,
        image: '/images/parrallax/9.webp',
        title: 'Design That Inspires',
        subtitle: 'Elevators that blend innovation with stunning architectural aesthetics.',
    },
    {
        id: 3,
        image: '/images/parrallax/3.webp',
        title: 'Unleashing Vertical Freedom',
        subtitle: 'Leading the future of vertical transport with advanced technology.',
    }
];


export const images: string[] = [
    '1.webp', '2.webp', '3.webp', '4.webp', '5.webp',
    '6.webp', '7.webp', '8.webp', '9.webp', '10.webp',
    '11.webp', '12.webp', '13.webp', '14.webp', '15.webp', '16.webp',
  ];



  export const TestimonialHeader = ({ imageSrc, videoSrc, alt }: { imageSrc: string; videoSrc: string; alt: string }) => (
    <div className="relative size-full min-h-[8rem]">
      {/* Optimized Background Image */}
      <Image
        src={imageSrc}
        alt={alt}
        fill
        className="absolute inset-0 object-cover transition-opacity duration-300 hover:opacity-0 opacity-100"
        priority={false} // Lazy loads images
        quality={80} // Optimized quality
      />

      {/* Hover Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 hover:opacity-100 opacity-0"
        src={videoSrc}
        autoPlay
        loop
        muted
        playsInline
      />
    </div>
  );

  export const testimonials = [
    {
      id: 1,
      title: "1000+ Lifts Installed",
      subtitle: "Lifts seamlessly installed worldwide, transforming vertical mobility by 100%",
      icon: <IconGlobe />,
      header: <TestimonialHeader imageSrc="/images/testimonials/1.webp" videoSrc="/videos/testimonials/1.mp4" alt="Lift installation worldwide" />,
    },
    {
      id: 2,
      title: "+95% Happy Customers",
      subtitle: "Over 95% of our customers experience enhanced convenience with our advanced elevator solutions",
      icon: <IconFileSmile />,
      header: <TestimonialHeader imageSrc="/images/testimonials/2.webp" videoSrc="/videos/video1.mp4" alt="Happy customer using elevator" />,
    },
    {
      id: 3,
      title: "1500+ Services Delivered",
      subtitle: "Reliable service excellence delivered with a 99% satisfaction rate, ensuring smooth operations",
      icon: <IconTruck />,
      header: <TestimonialHeader imageSrc="/images/testimonials/3.avif" videoSrc="/videos/video1.mp4" alt="Elevator service maintenance" />,
    },
    {
      id: 4,
      title: "Available in 15+ Countries",
      subtitle: "Serving 15+ countries with cutting-edge lift technology, setting new global standards",
      icon: <IconMap />,
      header: <TestimonialHeader imageSrc="/images/testimonials/4.webp" videoSrc="/videos/video1.mp4" alt="Global elevator company presence" />,
    },
    {
      id: 5,
      title: "10+ Years",
      subtitle: "A decade of innovation—100% commitment to precision engineering and safety",
      icon: <IconCalendar />,
      header: <TestimonialHeader imageSrc="/images/testimonials/5.webp" videoSrc="/videos/video1.mp4" alt="Celebrating 10 years of innovation" />,
    },
  ];




  export const luxuryHomeLifts: Lift[] = [
    {
      name: "Felix",
      image: "/images/luxury/felix.webp",
      description: "A sleek and elegant lift for modern homes, with silent operation and high energy efficiency.",
      features: ["Smooth ride", "Customizable interiors", "Compact design"],
      type: "Hydraulic",
      moreInfo: "Felix is the perfect blend of sophistication and functionality. Designed for modern homes, this lift offers a whisper-quiet ride, ensuring absolute comfort and luxury. With customizable interiors, it seamlessly integrates into any architectural style, adding a touch of elegance while maximizing energy efficiency."
    },
    {
      name: "Felix-2.0",
      image: "/images/luxury/felix2.png",
      description: "An upgraded version of Felix with advanced safety features and enhanced capacity.",
      features: ["Enhanced safety", "Greater load capacity", "Eco-friendly technology"],
      type: "Belt-Drive",
      moreInfo: "Felix-2.0 is built for those who demand more from their home elevator. With state-of-the-art safety enhancements, an increased weight capacity, and eco-friendly technology, it ensures a seamless and secure experience. Whether for a luxurious penthouse or a modern villa, this lift redefines convenience and peace of mind."
    },
    {
      name: "Climber-X",
      image: "/images/luxury/climberx.png",
      description: "Engineered for luxury homes, combining aesthetics with high performance.",
      features: ["Aesthetic appeal", "High-speed motor", "Advanced control system"],
      type: "Stair Lift",
      moreInfo: "Climber-X is the ultimate choice for homeowners who appreciate both beauty and performance. With its sleek design, high-speed motor, and intelligent control system, it transforms every ride into an effortless experience. Ideal for multi-story mansions, this lift adds a premium touch while ensuring smooth and reliable mobility."
    },
    {
      name: "pneumatic-elevator",
      image: "/images/luxury/pneumatic.webp",
      description: "A revolutionary design with no cables or pulleys, perfect for compact spaces.",
      features: ["Space-saving", "Modern technology", "Easy installation"],
      type: "Pneumatic",
      moreInfo: "Vacuum-100 is a futuristic lift that redefines space efficiency. Its cutting-edge pneumatic technology eliminates the need for cables and pulleys, making it an ideal choice for homes with limited space. With a sleek, contemporary look and effortless installation, it offers a seamless and stylish vertical transportation experience."
    },
  ];


  export const commercialLifts: Lift[] = [
    {
      name: "Elivio",
      image: "/images/commercial/elivio.webp",
      description: "A reliable lift for commercial buildings with heavy usage and durability.",
      features: ["High capacity", "Durable design", "Optimized for efficiency"],
      type: "Machine Room",
      moreInfo: "Elivio is the perfect solution for commercial spaces requiring a robust and efficient elevator system. Engineered for high-traffic environments, it ensures seamless vertical mobility with minimal maintenance. With its high-capacity design and durable construction, Elivio is built to handle the demands of busy office buildings, malls, and business centers effortlessly."
    },
    {
      name: "Elivio-2.0",
      image: "/images/commercial/elivio2.webp",
      description: "An advanced version of Elivio with improved speed and safety.",
      features: ["Faster operation", "Enhanced safety", "Smart monitoring"],
      type: "Machine Room Less",
      moreInfo: "Elivio-2.0 takes commercial lifting to the next level with cutting-edge technology and enhanced safety mechanisms. Featuring a machine-room-less design, it optimizes space while delivering faster travel speeds and energy efficiency. With its smart monitoring system, real-time diagnostics, and smooth performance, Elivio-2.0 is the future of modern commercial elevators."
    },
    {
      name: "Eleventra",
      image: "/images/commercial/eleventra.webp",
      description: "Designed for high-rise buildings, offering exceptional performance and comfort.",
      features: ["Comfortable ride", "High-speed elevator", "Advanced durability"],
      type: "Goods Lift",
      moreInfo: "Eleventra is built for high-rise commercial buildings, ensuring a high-speed, smooth, and secure ride for both passengers and freight. Designed to withstand rigorous usage, it combines cutting-edge engineering with a focus on user comfort. Whether in corporate towers, luxury hotels, or shopping complexes, Eleventra guarantees an efficient and elegant mobility experience."
    },
  ];


  export const productsData: ProductDetailsProps[] = [
    {
        type: "Hydraulic",
        ogImage: "/images/open-graph/opengraph-felix-page.png",
        ogImageAltText: "Felix Home Elevators – Elevate Your Lifestyle with Luxury & Comfort",
        heroHeading: "Felix Home Elevators – Elevate Your Lifestyle with Luxury & Comfort",
        heroImage: "",
        productTitle: "Felix",
        productSubHeading: "Elevate Your Lifestyle with Luxury & Comfort",
        productMiniHeading: "Luxury",
        productDescription:
          "Felix is an elegant, AI-assisted home elevator designed for modern residences. Featuring German vacuum-sealed hydraulic technology, it ensures smooth, whisper-quiet operation. Engineered for optimal space efficiency, Felix requires no pit or bulky overhead structures. It operates on a single-phase power supply, making it ideal for contemporary homes seeking seamless vertical mobility. With a sleek design and energy-efficient functionality, Felix combines luxury with cutting-edge European technology.",
        carouselImages: [
          "/images/luxury/felix.webp",
          "/images/luxury/felix2.png",
          "/images/luxury/felix.webp",
          "/images/luxury/felix2.png",
          "/images/luxury/felix2.png",
          "/images/luxury/felix.webp",
          "/images/luxury/felix2.png"
        ],
        productFeatures: [
            "German vacuum-sealed hydraulics",
            "European machinery with German precision",
            "AI-assisted smart elevator",
            "No pit or No headroom",
            "Complies with European and Indian safety standards",
            "Runs on single-phase power",
            "Vastu-compliant space-saving design",
            "Smart controls with automated error detection",
          "Whisper-quiet & energy-efficient",
          "Auto emergency braking & lowering device",
          "Sleek designs with customizable interiors",
          "Affordable luxury with global sturdiness",
        ],
        productSpecialFeature:
          "Using energy-efficient German vacuum-sealed hydraulic technology, Felix is a luxury home elevator designed for those who seek sophistication, efficiency, and seamless performance.",
            sections: [
                {
                    image: "/images/parrallax/4.webp",
                    subHeading: "How Exactly Does a Hydraulic Elevator For Home Work",
                    description: "The key to a hydraulic elevator’s magic lies in its namesake – hydraulics. Imagine a sealed system filled with hydraulic fluid, a special oil. When an electric pump activates, it pressurizes this fluid, sending it coursing through pipes. This pressurized fluid then reaches the heart of the system – a piston housed within a cylinder. Think of the piston as a powerful muscle. As the pressurized fluid enters the cylinder, it pushes against the piston, causing it to rise. This upward movement of the piston translates to the movement of the elevator car, smoothly lifting it towards your desired floor."
                },
                {
                    image: "/images/parrallax/4.webp",
                    subHeading: "Elevate Your Home with Vaastu-Aligned Harmony",
                    description: "Enhance your home’s energy, prosperity, and convenience by integrating Vaastu principles with modern home lifts. Beyond accessibility, a thoughtfully placed home lift influences the positive energy flow, creating a balanced and auspicious living space. By blending ancient wisdom with cutting-edge technology, you can elevate both your lifestyle and spiritual well-being. Experience seamless harmony where design meets destiny!"
                },
                {
                    image: "/images/parrallax/4.webp",
                    subHeading: "Seamless Elevation, Zero Compromise—Go For Pitlles & Headless Elevators",
                    description: "Integrating an elevator into a home can be challenging due to the need for a pit or machine room, often making traditional elevators unsuitable. However, pitless and shaftless elevators have emerged as the perfect solution for residences that cannot accommodate these structural modifications. With a sleek design and effortless installation, these innovative elevators provide unmatched convenience and accessibility—enhancing your home without the hassle of major renovations."
                },
                {
                    image: "/images/parrallax/4.webp",
                    subHeading: "Swift Emergency Lowering System",
                    description: "Stay safe and never get stranded! In the event of a power loss, our advanced Emergency Lowering System instantly detects the failure, cancels all active floor calls, and seamlessly switches to standby battery power. It smoothly lowers the elevator to the nearest landing, opens the doors, and allows passengers to exit within seconds—eliminating long wait times and uncertainty. The system then securely places the elevator out of service until power is restored, ensuring both safety and efficiency."
                },
                {
                    image: "/images/parrallax/4.webp",
                    subHeading: "AI-Assisted Smart Elevator: Elevating Intelligence, Enhancing Experience",
                    description: "AI-powered elevators revolutionize vertical mobility by optimizing efficiency, safety, and user experience. They analyze traffic patterns to reduce wait times, predict maintenance needs to prevent breakdowns, and personalize rides for seamless navigation. AI enhances energy efficiency by adjusting power usage and integrating with smart building systems. In emergencies, it ensures quick, automated responses for passenger safety. With features like touchless operation, IoT connectivity, and real-time data processing, AI-assisted smart elevators deliver faster, safer, and more sustainable transportation. Elevate your experience with cutting-edge intelligence that adapts, learns, and enhances every ride!"
                },
            ]
      },
      {
        type: "Belt-Drive",
        ogImage: "/images/open-graph/opengraph-felix-2-page.png",
        ogImageAltText: "Felix 2.0 – Redefining Home Elevators with Innovation & Style",
        heroHeading: "Felix 2.0 – Redefining Home Elevators with Innovation & Style",
        heroImage: "",
        productTitle: "Felix-2.0",
        productSubHeading: "Redefining Home Elevators with Innovation & Style",
        productMiniHeading: "Innovation",
        productDescription:
          "Felix-2.0 is an advanced AI-assisted elevator, setting new standards in durability and precision. Featuring a gearless traction mechanism, it delivers exceptionally smooth vertical mobility without compromising on efficiency. Its advanced belt-drive technology ensures reduced wear and tear, making it ideal for high-end homes and premium residential spaces. The system operates without a traditional pit, making it an effortless fit for modern interiors while maintaining whisper-quiet functionality.",
        carouselImages: [
          "/images/luxury/felix.webp",
          "/images/luxury/felix2.png",
          "/images/luxury/felix.webp",
          "/images/luxury/felix2.png"
        ],
        productFeatures: [
          "High-durability belt drive",
          "Gearless traction for ultra-smooth ride",
          "German architecture for lasting performance",
          "Complies with European and Indian safety standards",
          "AI-powered error detection",
          "Single-phase power compatible",
          "No pit, compact installation",
          "Vastu-compliant compact structure",
          "Silent operation with modern braking",
          "Sleek designs with customizable interiors",
          "Smart controls with automated error detection",
          "Smart diagnostics with AI integration",
        ],
        productSpecialFeature:
          "Felix-2.0 features a gearless traction system with AI-assisted precision, ensuring a smoother, quieter, and longer-lasting elevator experience without the need for deep pits or traditional steel cables.",
        sections: [
          {
            image: "/images/parrallax/4.webp",
            subHeading: "How Exactly Does a Gearless Traction Elevator Work?",
            description:
              "Felix-2.0 uses a gearless traction system, which eliminates the need for traditional steel cables. Instead, it employs a high-durability belt drive mechanism that significantly reduces wear and tear. This technology ensures a smooth, efficient ride while enhancing the longevity of the elevator system."
          },
          {
            image: "/images/parrallax/4.webp",
            subHeading: "Vastu-Compliant Compact Design for Modern Homes",
            description:
              "The Felix-2.0 is designed with a Vastu-compliant compact structure, allowing for seamless integration into modern home layouts. It provides an elegant and space-efficient solution without the need for pits or headroom, making it an excellent choice for premium residences."
          },
          {
            image: "/images/parrallax/4.webp",
            subHeading: "AI-Powered Diagnostics & Error Detection",
            description:
              "Felix-2.0 incorporates AI-driven error detection, allowing for real-time system monitoring. This ensures predictive maintenance, reducing downtime and enhancing safety. The smart diagnostic system can detect irregularities before they become major issues, optimizing long-term performance."
          },
          {
            image: "/images/parrallax/4.webp",
            subHeading: "Silent Operation with Advanced Braking System",
            description:
              "Equipped with modern braking technology, Felix-2.0 offers whisper-quiet operation. Its gearless traction system minimizes vibrations and noise, making it an ideal choice for noise-sensitive environments such as luxury homes and apartments."
          },
          {
            image: "/images/parrallax/4.webp",
            subHeading: "Sleek Design with Customizable Interiors",
            description:
              "Felix-2.0 combines aesthetics with functionality, offering sleek designs and customizable interiors. Whether you prefer a contemporary or classic look, the elevator can be tailored to match your home’s aesthetic preferences."
          },
        ]
      },
      {
        type: "Stair Lift",
        ogImage: "/images/open-graph/opengraph-climber-x-page.png",
        ogImageAltText: "",
        heroHeading: "Climber-X Stair Lift – Effortless Mobility, Ultimate Independence",
        heroImage: "",
        productTitle: "Climber-X",
        productSubHeading: "Effortless Mobility, Ultimate Independence",
        productMiniHeading: "Ultimate",
        productDescription:
          "Climber-X is a smart stair lift designed for seamless vertical mobility in homes and public spaces. Engineered with an advanced rack-and-pinion system, it effortlessly adapts to both straight and curved staircases. With AI-assisted technology, it offers smooth and precise movements, ensuring safety and reliability. Featuring a compact and pitless design, it integrates seamlessly into any architectural space while maximizing accessibility and ease of use.",
        carouselImages: [
          "/images/luxury/felix.webp",
          "/images/luxury/felix2.png",
          "/images/luxury/felix.webp",
          "/images/luxury/felix2.png"
        ],
        productFeatures: [
          "Smooth rack-and-pinion drive",
          "AI-assisted stair lift",
          "Seamless AI-integrated controls",
          "Noise-free smart motor",
          "Smart controls with automated error detection",
          "European-grade materials",
          "Affordable smart stair mobility",
          "Works on straight & curved stairs",
          "Next to Zero Maintenance",
          "Compact, pitless installation",
          "Battery backup for power failures",
          "Designed for global safety compliance"
        ],
        productSpecialFeature:
          "Climber-X is an innovative stair lift with AI-assisted precision, ensuring smooth and reliable stair mobility while maximizing safety and comfort.",
        sections: [
          {
            image: "/images/parrallax/4.webp",
            subHeading: "How Does Climber-X Work?",
            description:
              "Climber-X utilizes a state-of-the-art rack-and-pinion drive system, ensuring smooth, safe, and efficient stair mobility. With AI-powered controls, it adapts intelligently to the user's movements and staircase conditions, making vertical transportation effortless."
          },
          {
            image: "/images/parrallax/4.webp",
            subHeading: "Seamless Installation, No Structural Changes Required",
            description:
              "Designed for convenience, Climber-X requires no pit or shaft, making it the perfect solution for existing staircases. Its compact form factor ensures a hassle-free installation process with minimal modifications."
          },
          {
            image: "/images/parrallax/4.webp",
            subHeading: "AI-Powered Smart Controls",
            description:
              "With integrated AI technology, Climber-X optimizes movement efficiency, reduces energy consumption, and ensures automated error detection. This makes it one of the most intelligent stair lift solutions on the market."
          },
          {
            image: "/images/parrallax/4.webp",
            subHeading: "Reliable Battery Backup for Power Failures",
            description:
              "Climber-X ensures uninterrupted functionality even during power outages with its robust battery backup system. Users can rely on its seamless performance for complete peace of mind."
          },
          {
            image: "/images/parrallax/4.webp",
            subHeading: "Designed for Maximum Safety & Comfort",
            description:
              "Engineered with global safety standards in mind, Climber-X features a secure seating system, intuitive control mechanisms, and a whisper-quiet motor for a smooth and pleasant riding experience."
          }
        ]
      },
      {
        type: "Pneumatic",
        ogImage: "/images/open-graph/opengraph-vacuum-100-page.png",
        ogImageAltText: "",
        heroHeading: "Vacuum 100 Pneumatic Lift – The Future of Elevators, Powered by Air",
        heroImage: "",
        productTitle: "Pneumatic-Elevator",
        productSubHeading: "The Future of Elevators, Powered by Air",
        productMiniHeading: "Future",
        productDescription:
          "The Pneumatic-Elevator is a futuristic vertical mobility solution powered by vacuum technology. Designed for homes and offices, it eliminates the need for machine rooms, cables, or counterweights. Its sleek, self-supporting structure enhances architectural aesthetics while ensuring whisper-quiet performance. AI-assisted smart controls and advanced safety features make it a perfect choice for those seeking luxury, convenience, and efficiency in an eco-friendly package.",
        carouselImages: [
          "/images/luxury/felix.webp",
          "/images/luxury/felix2.png",
          "/images/luxury/felix.webp",
          "/images/luxury/felix2.png",
          "/images/luxury/felix2.png",
          "/images/luxury/felix.webp",
          "/images/luxury/felix2.png"
        ],
        productFeatures: [
          "AI-powered vacuum lift",
          "Self-supporting, pitless design",
          "No machine room or cables",
          "Runs on single-phase power",
          "Ultra-quiet, frictionless travel",
          "Smart controls with automated error detection",
          "Customizable luxury cabin",
          "Complies with European and Indian safety standards",
          "Vastu-optimized structure",
          "European eco-smart innovation",
          "Engineered for international performance"
        ],
        productSpecialFeature:
          "The Pneumatic-Elevator redefines vertical mobility with AI-powered vacuum technology, delivering a seamless, cable-free, and eco-friendly lift experience.",
        sections: [
          {
            image: "/images/parrallax/4.webp",
            subHeading: "How Pneumatic Elevators Work",
            description:
              "Pneumatic elevators use advanced vacuum technology to lift and lower the cabin. Unlike traditional systems, they operate without cables or counterweights, relying on air pressure differentials for movement. This ensures smooth, silent, and energy-efficient travel."
          },
          {
            image: "/images/parrallax/4.webp",
            subHeading: "Space-Saving & Self-Supporting Design",
            description:
              "With a sleek, self-contained structure, Pneumatic-Elevators require no machine rooms, making them ideal for modern homes with limited space. The cylindrical design blends seamlessly into any architectural aesthetic."
          },
          {
            image: "/images/parrallax/4.webp",
            subHeading: "Smart AI-Assisted Controls",
            description:
              "AI-enhanced navigation ensures optimal performance by analyzing usage patterns and adjusting travel speed. Predictive maintenance and automated safety checks provide peace of mind for users."
          },
          {
            image: "/images/parrallax/4.webp",
            subHeading: "Vastu-Compliant for Harmonious Living",
            description:
              "Designed with Vastu principles in mind, Pneumatic-Elevators promote positive energy flow within your home, enhancing well-being while offering luxurious vertical mobility."
          },
          {
            image: "/images/parrallax/4.webp",
            subHeading: "Eco-Friendly & Energy Efficient",
            description:
              "Powered by vacuum technology, these elevators consume minimal energy, reducing their carbon footprint. Their innovative design eliminates the need for lubrication, making them a sustainable choice."
          }
        ]
      },
      {
        type: "Machine Room",
        ogImage: "/images/open-graph/opengraph-elivio-page.png",
        ogImageAltText: "",
        heroHeading: "Elivio with Machine Room – High-Performance Lifting for Commercial Spaces",
        heroImage: "",
        productTitle: "Elivio",
        productSubHeading: "High-Performance Lifting for Commercial Spaces",
        productMiniHeading: "High-Performance",
        productDescription:
          "Elivio is a robust, AI-assisted smart elevator designed for commercial, residential, and industrial applications. Featuring German-engineered traction technology, it delivers unparalleled performance, efficiency, and durability. With an advanced control system, Elivio offers seamless vertical mobility while maintaining superior safety standards. Ideal for high-rise buildings, it ensures reliability, energy efficiency, and a customizable modern aesthetic.",
        carouselImages: [
          "/images/luxury/felix.webp",
          "/images/luxury/felix2.png",
          "/images/luxury/felix.webp",
          "/images/luxury/felix2.png",
        ],
        productFeatures: [
          "Geared Machinery with Machine room technology",
          "Complies with European and Indian safety standards",
          "Eco-smart low-energy use",
          "Smart lift with real-time monitoring",
          "Built for global reliability & performance",
          "Next-gen innovation with intelligent diagnostics",
          "German technology excellence in design",
          "Provides Bigger Cabin in the entire Country",
          "Silent-ride",
          "High-efficiency three-phase power",
          "AI-powered elevator Smart Elevator",
          "Advanced safety & braking",
        ],
        productSpecialFeature:
          "Elivio is built with German-engineered traction technology, delivering unmatched efficiency, safety, and durability—making it the ideal choice for high-rise buildings and modern infrastructure.",
        sections: [
          {
            image: "/images/parrallax/4.webp",
            subHeading: "Advanced Traction Technology for Seamless Rides",
            description:
              "Elivio's state-of-the-art traction technology ensures smooth, efficient, and whisper-quiet rides. Engineered with German precision, this system provides superior load management, enhanced safety, and minimal energy consumption, making it the ideal choice for both commercial and residential buildings.",
          },
          {
            image: "/images/parrallax/4.webp",
            subHeading: "Eco-Smart Energy Efficiency",
            description:
              "Elivio elevators incorporate eco-smart technology to minimize power consumption without compromising performance. The intelligent system optimizes energy use, contributing to sustainability while reducing operational costs for users.",
          },
          {
            image: "/images/parrallax/4.webp",
            subHeading: "AI-Powered Real-Time Monitoring",
            description:
              "With AI-assisted diagnostics and real-time monitoring, Elivio ensures predictive maintenance, minimizing downtime and maximizing efficiency. The smart system continuously analyzes elevator performance, proactively detecting and addressing potential issues.",
          },
          {
            image: "/images/parrallax/4.webp",
            subHeading: "Next-Gen Safety & Braking System",
            description:
              "Elivio prioritizes passenger safety with an advanced braking system and multi-layered safety protocols. In case of emergencies, the system ensures controlled deceleration and secure landing, offering a worry-free riding experience.",
          },
          {
            image: "/images/parrallax/4.webp",
            subHeading: "Bigger Cabin for Enhanced Comfort",
            description:
              "Designed with user comfort in mind, Elivio features one of the largest cabins available, providing ample space for passengers while maintaining a sleek and modern aesthetic.",
          },
        ],
      },
      {
        type: "Machine Room Less",
        ogImage: "/images/open-graph/opengraph-elivio-2-page.png",
        ogImageAltText: "",
        heroHeading: "Elivio 2.0 Without Machine Room – Space-Saving Excellence, Uncompromised Power",
        heroImage: "",
        productTitle: "Elivio-2.0",
        productSubHeading: "Space-Saving Excellence, Uncompromised Power",
        productMiniHeading: "Power",
        productDescription:
          "Elivio-2.0 is a next-generation smart elevator featuring a gearless traction system for ultra-smooth and efficient operation. Designed with AI-assisted controls, it offers intelligent monitoring, error-free diagnostics, and seamless mobility. Its machine-room-less structure and pitless design make it ideal for modern commercial and residential spaces, ensuring energy-efficient vertical transportation with premium aesthetics.",
        carouselImages: [
          "/images/luxury/felix.webp",
          "/images/luxury/felix2.png",
          "/images/luxury/felix.webp",
          "/images/luxury/felix2.png",
        ],
        productFeatures: [
          "Gearless, Machine-room-less technology",
          "Complies with European and Indian safety standards",
          "Eco-smart low-energy use",
          "Smart lift with real-time monitoring",
          "Built for global reliability & performance",
          "Next-gen innovation with intelligent diagnostics",
          "German technology excellence in design",
          "Provides Bigger Cabin in the entire Country",
          "Ultra-quiet precision ride",
          "High-efficiency three-phase power",
          "AI-powered Smart Elevator",
          "Advanced safety & braking",
        ],
        productSpecialFeature:
          "Elivio-2.0 redefines modern elevators with AI-assisted smart controls, energy efficiency, and a gearless, machine-room-less design for seamless and sustainable vertical mobility.",
        sections: [
          {
            image: "/images/parrallax/4.webp",
            subHeading: "Gearless Machine-Room-Less Technology",
            description:
              "Elivio-2.0 uses an advanced gearless traction system, eliminating the need for a machine room. This innovation reduces space requirements while enhancing efficiency and smooth operation.",
          },
          {
            image: "/images/parrallax/4.webp",
            subHeading: "AI-Assisted Smart Elevator",
            description:
              "With AI-driven real-time monitoring and intelligent diagnostics, Elivio-2.0 ensures proactive maintenance, error-free operation, and a seamless elevator experience.",
          },
          {
            image: "/images/parrallax/4.webp",
            subHeading: "Ultra-Quiet Precision Ride",
            description:
              "Experience whisper-quiet movement with Elivio-2.0’s high-precision traction system, delivering a smooth and noise-free ride for enhanced comfort.",
          },
          {
            image: "/images/parrallax/4.webp",
            subHeading: "Eco-Smart & Energy Efficient",
            description:
              "Elivio-2.0 is designed with an eco-friendly approach, consuming minimal power while ensuring optimal performance, making it a sustainable choice for modern structures.",
          },
          {
            image: "/images/parrallax/4.webp",
            subHeading: "Advanced Safety & Emergency Systems",
            description:
              "Equipped with intelligent safety mechanisms, automatic emergency braking, and power failure backup, Elivio-2.0 prioritizes passenger security and reliability.",
          },
        ],
      },
      {
        type: "Goods Lift",
        ogImage: "/images/open-graph/opengraph-eleventra-page.png",
        ogImageAltText: "",
        heroHeading: "Eleventra Elevator – Heavy-Duty Lifting for Goods, Cars & More",
        heroImage: "",
        productTitle: "Eleventra",
        productSubHeading: "Heavy-Duty Lifting for Goods, Cars & More",
        productMiniHeading: "Heavy-Duty",
        productDescription:
          "The Eleventra Commercial Lift is a state-of-the-art elevator designed for heavy-duty use, perfect for car lifts, stretchers, and goods transport in high-end commercial and industrial spaces. With cutting-edge gearless traction technology, it delivers smooth, fast, and energy-efficient vertical transportation. Its robust build, combined with advanced safety features and intelligent controls, ensures seamless performance under demanding conditions. The Eleventra is designed for durability, with a pitless and machine-room-less structure for maximum space utilization and flexibility.",
        carouselImages: [
          "/images/luxury/felix.webp",
          "/images/luxury/felix2.png",
          "/images/luxury/felix.webp",
          "/images/luxury/felix2.png"
        ],
        productFeatures: [
          "Heavy-duty lift for Carrying weight",
          "Available in Gearless & Geared traction Technology",
          "High load capacity & safety tech",
          "Requires pit & machine room",
          "AI-powered diagnostics & monitoring",
          "Energy-efficient & durable",
          "Complies with European and Indian safety standards",
          "Smart controls with automated error detection",
          "Standard-grade materials for extreme conditions",
          "Cost-effective solution for large-scale needs",
          "Innovative AI algorithms for real-time efficiency"
        ],
        productSpecialFeature:
          "Eleventra is a high-performance commercial elevator designed for large-scale operations, featuring advanced AI-powered diagnostics, robust safety features, and energy-efficient technology.",
        sections: [
          {
            image: "/images/parrallax/4.webp",
            subHeading: "Gearless Traction Technology for Ultimate Performance",
            description:
              "Eleventra uses state-of-the-art gearless traction technology, ensuring smooth, energy-efficient, and high-speed vertical transportation. This advanced system reduces maintenance costs while improving overall reliability and durability."
          },
          {
            image: "/images/parrallax/4.webp",
            subHeading: "AI-Powered Smart Diagnostics",
            description:
              "Equipped with cutting-edge AI algorithms, Eleventra continuously monitors system performance, predicting potential failures before they occur. This ensures maximum uptime, reducing maintenance costs and enhancing operational efficiency."
          },
          {
            image: "/images/parrallax/4.webp",
            subHeading: "Designed for Heavy-Duty Applications",
            description:
              "With high load capacity and advanced safety features, Eleventra is ideal for commercial spaces, car lifts, and industrial environments. Its robust build ensures seamless operation under the most demanding conditions."
          },
          {
            image: "/images/parrallax/4.webp",
            subHeading: "Smart Controls for Seamless Operations",
            description:
              "Eleventra's intelligent control system optimizes elevator performance with automated error detection, real-time efficiency adjustments, and smart energy-saving mechanisms. Experience hassle-free operations with minimal human intervention."
          },
          {
            image: "/images/parrallax/4.webp",
            subHeading: "Pitless & Machine-Room-Less Flexibility",
            description:
              "Unlike traditional elevators, Eleventra offers a pitless and machine-room-less design, making it the perfect solution for buildings where space constraints are a concern. Maximize usable space without compromising on performance."
          }
        ]
      }
  ];



  export const features = [
    "Italian Designs",
    "European Technology",
    "German Machinery",
    "Vastu Compliance",
    "Customisable Cabins",
    "Cost Efficient",
    "Low Energy Consumption",
    "Innovative",
    "Reliable",
    "Efficient",
    "Modern",
    "Lift Automation",
    "Smart Elevators",
    "AI-Assisted",
    "Error-Free Performance",
    "Pit-Less & Headless Designs",
    "Tailored Solutions",
    "Internationally Certified",
    "194 Safety Parameters",
    "TÜV SÜD Certified",
    "Imported Machinery",
    "Smooth and Quiet Operation",
    "Flexibility in Installation",
    "Space-Saving Design",
    "Voice Command Enabled",
    "Safe for All Ages",
    "Advanced Vertical Mobility Solutions"
  ];

  export const services = [
    {
        title: "Elevator Installation",
        body: "Professional installation of high-quality elevators for residential and commercial buildings.",
        src: "services/1.webp",
        icon: "installation"
    },
    {
        title: "Elevator Modernization",
        body: "Upgrade your old elevators with the latest technology and safety features.",
        src: "services/1.mp4",
        icon: "modernization"
    },
    {
        title: "Maintenance & Repairs",
        body: "Regular maintenance and 24/7 repair services to keep your elevators running smoothly.",
        src: "services/2.jpeg",
        icon: "maintenance"
    },
    {
        title: "Custom Elevator Design",
        body: "Design and manufacture custom elevators to meet your building's unique needs.",
        src: "interior/3.webp",
        icon: "design"
    },
    {
        title: "Home Elevators",
        body: "Compact and stylish elevators designed for private residences and villas.",
        src: "services/2.mp4",
        icon: "home"
    },
    // {
    //     title: "Dumbwaiters",
    //     body: "Small service elevators for hotels, hospitals, and restaurants.",
    //     src: "product/felix.webp"
    // },
    {
        title: "Emergency Rescue Systems",
        body: "Safety systems for power failures and emergencies, ensuring passenger safety.",
        src: "services/4.mp4",
        icon: "emergency"
    },
    {
        title: "Lift Consultation & Compliance",
        body: "Expert guidance on elevator compliance, regulations, and safety standards.",
        src: "interior/1.webp",
        icon: "consultation"
    },
  ];

 export  const preferences = [
    {
        title: "With Shaft",
        description: " With an in-built patented metal structure, this lift does not require a separate shaft or support.",
        image1: "shaft/withShaftOne.png",
        image2: "shaft/withShaftTwo.png"
    },
    {
        title: "WithOut Shaft",
        description: "Requires a separate structure built of concrete, brick, or metal fabrication.",
        image1: "shaft/withoutShaftOne.png",
        image2: "shaft/withoutShaftTwo.webp"
    }
  ]

 export const dataProductCard: ProductCardProps[] = [
    {
        type: "Hydraulic",
        title: "Felix",
        imageUrl: "/images/luxury/felix.webp",
        description: "A sleek and elegant lift for modern homes, with silent operation and high energy efficiency.",
        moreInfo: "Designed for modern homes, Felix operates on a single-phase power supply, ensuring energy efficiency. Its compact design maximizes space without compromising luxury. Built with European engineering, it offers seamless vertical mobility with advanced safety features, making it a perfect blend of technology and elegance."
    },
    {
        type: "Belt-Drive",
        title: "Felix-2.0",
        imageUrl: "/images/luxury/felix2.png",
        description: "An upgraded version of Felix with advanced safety features and enhanced capacity.",
        moreInfo: "Designed for modern homes, Felix operates on a single-phase power supply, ensuring energy efficiency. Its compact design maximizes space without compromising luxury. Built with European engineering, it offers seamless vertical mobility with advanced safety features, making it a perfect blend of technology and elegance."
    },
    {
        type: "Machine Room Less",
        title: "Elivio-2.0",
        imageUrl: "/images/commercial/elivio2.webp",
        description: "An advanced version of Elivio with improved speed and safety.",
        moreInfo: "Elivio-2.0 takes commercial lifting to the next level with cutting-edge technology and enhanced safety mechanisms. Featuring a machine-room-less design, it optimizes space while delivering faster travel speeds and energy efficiency. With its smart monitoring system, real-time diagnostics, and smooth performance, Elivio-2.0 is the future of modern commercial elevators"
    },
  ]

  export const teamData = [
    {
        imageUrl: "path to image",
        designation: "",
        fullName: "Vikas Sharma",
        email: "vikas@thelevatorcompany.com",
        phoneNumber: "+91 9310229056",
        words: ""
    },
    {
        imageUrl: "path to image",
        designation: "",
        fullName: "Mohammad Bilal",
        email: "vikas@thelevatorcompany.com",
        phoneNumber: "+91 9310229056",
        words: ""
    },
    {
        imageUrl: "path to image",
        designation: "",
        fullName: "Vishal Mishra",
        email: "vikas@thelevatorcompany.com",
        phoneNumber: "+91 9310229056",
        words: ""
    },
    {
        imageUrl: "path to image",
        designation: "",
        fullName: "Pannag Dhar Dwivedi",
        email: "vikas@thelevatorcompany.com",
        phoneNumber: "+91 9310229056",
        words: ""
    },
  ]
