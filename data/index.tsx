import EcoFriendly from "@/app/(root)/(home)/_components/uspComponents/EcoFriendly";
import Innovative from "@/app/(root)/(home)/_components/uspComponents/Innovative";
import Quality from "@/app/(root)/(home)/_components/uspComponents/Quality";
import Safety from "@/app/(root)/(home)/_components/uspComponents/Safety";
import Technology from "@/app/(root)/(home)/_components/uspComponents/Technology";
import { ProductCardProps } from "@/components/Custom/ProductCard";
import { Lift } from "@/types";
import { IconCalendar, IconFileSmile, IconGlobe, IconMap, IconTruck } from "@tabler/icons-react";

export const umbrellaPoints = [
    {
      title: "Innovative and Customizable Solutions",
      description: "Tailored to meet diverse customer needs, these solutions offer unparalleled flexibility. Whether it's customizable cabins, Italian-inspired designs, or bespoke configurations, the client ensures that every installation reflects the unique preferences and requirements of the user.",
      src: "eleventra.jpg", // Replace with relevant image filename
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
      src: "elivio.jpg", // Replace with relevant image filename
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
      src: "felix.jpg", // Replace with relevant image filename
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
      src: "pneumatic.jpg", // Replace with relevant image filename
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
        image: '/images/parrallax/7.jpg',
        title: 'Rise Above with Precision',
        subtitle: 'Revolutionizing elevator systems for a safer, smoother journey.',
    },
    {
        id: 2,
        image: '/images/parrallax/12.jpg',
        title: 'Design That Inspires',
        subtitle: 'Elevators that blend innovation with stunning architectural aesthetics.',
    },
    {
        id: 3,
        image: '/images/parrallax/3.jpg',
        title: 'Unleashing Vertical Freedom',
        subtitle: 'Leading the future of vertical transport with advanced technology.',
    }
];


export const images: string[] = [
    '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg',
    '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg',
    '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg',
  ];

  export const testimonials = [
    {
      id: 1,
      title: "1000+ Lifts Installed",
      subtitle: "Lifts seamlessly installed worldwide, transforming vertical mobility by 100%",
      icon: <IconGlobe />,
      header: (
        <div className="relative size-full min-h-[8rem] ">
          {/* Background Image */}
          <img
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 hover:opacity-0 opacity-100"
            src={"images/testimonials/1.jpg"}
            alt="Background"
            style={{ background: "#171717" }}
          />

          {/* Hovered Video */}
          <video
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 hover:opacity-100 opacity-0"
            src={"/videos/testimonials/1.mp4"}
            autoPlay
            loop
            muted
          />
        </div>
      ),
    },
    {
      id: 2,
      title: "+95% Happy Customers",
      subtitle: "Over 95% of our customers experience enhanced convenience with our advanced elevator solutions",
      icon: <IconFileSmile />,
      header:  (
        <div className="relative size-full min-h-[8rem] ">
          <img className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 hover:opacity-0 opacity-100" src={"images/testimonials/2.jpg"} alt="Background" />
          <video className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 hover:opacity-100 opacity-0" src={"videos/video1.mp4"} autoPlay loop muted />
        </div>
      ),
    },
    {
      id: 3,
      title: "1500+ Services Delivered",
      subtitle: "Reliable service excellence delivered with a 99% satisfaction rate, ensuring smooth operations",
      icon: <IconTruck />,
      header:  (
        <div className="relative size-full min-h-[8rem] ">
          <img className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 hover:opacity-0 opacity-100" src={"images/testimonials/3.avif"} alt="Background" />
          <video className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 hover:opacity-100 opacity-0" src={ "videos/video1.mp4"} autoPlay loop muted />
        </div>
      ),
    },
    {
      id: 4,
      title: "Available in 15+ Countries",
      subtitle: "Serving 15+ countries with cutting-edge lift technology, setting new global standards",
      icon: <IconMap />,
      header: (
        <div className="relative size-full min-h-[8rem] ">
          <img className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 hover:opacity-0 opacity-100" src={"images/testimonials/4.jpg"} alt="Background" />
          <video className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 hover:opacity-100 opacity-0" src={ "videos/video1.mp4"} autoPlay loop muted />
        </div>
      ),
    },
    {
      id: 5,
      title: "10+ Years",
      subtitle: "A decade of innovation—100% commitment to precision engineering and safety",
      icon: <IconCalendar />,
      header:(
        <div className="relative size-full min-h-[8rem] ">
          <img className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 hover:opacity-0 opacity-100" src={"images/testimonials/5.jpg"} alt="Background" />
          <video className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 hover:opacity-100 opacity-0" src={"videos/video1.mp4"} autoPlay loop muted />
        </div>
      ),
    },
  ];



  export const luxuryHomeLifts: Lift[] = [
    {
      name: "Felix",
      image: "/images/luxury/felix.jpg",
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
      image: "/images/luxury/pneumatic.jpg",
      description: "A revolutionary design with no cables or pulleys, perfect for compact spaces.",
      features: ["Space-saving", "Modern technology", "Easy installation"],
      type: "Pneumatic",
      moreInfo: "Vacuum-100 is a futuristic lift that redefines space efficiency. Its cutting-edge pneumatic technology eliminates the need for cables and pulleys, making it an ideal choice for homes with limited space. With a sleek, contemporary look and effortless installation, it offers a seamless and stylish vertical transportation experience."
    },
  ];


  export const commercialLifts: Lift[] = [
    {
      name: "Elivio",
      image: "/images/commercial/elivio.jpg",
      description: "A reliable lift for commercial buildings with heavy usage and durability.",
      features: ["High capacity", "Durable design", "Optimized for efficiency"],
      type: "Machine Room",
      moreInfo: "Elivio is the perfect solution for commercial spaces requiring a robust and efficient elevator system. Engineered for high-traffic environments, it ensures seamless vertical mobility with minimal maintenance. With its high-capacity design and durable construction, Elivio is built to handle the demands of busy office buildings, malls, and business centers effortlessly."
    },
    {
      name: "Elivio-2.0",
      image: "/images/commercial/elivio2.jpg",
      description: "An advanced version of Elivio with improved speed and safety.",
      features: ["Faster operation", "Enhanced safety", "Smart monitoring"],
      type: "Machine Room Less",
      moreInfo: "Elivio-2.0 takes commercial lifting to the next level with cutting-edge technology and enhanced safety mechanisms. Featuring a machine-room-less design, it optimizes space while delivering faster travel speeds and energy efficiency. With its smart monitoring system, real-time diagnostics, and smooth performance, Elivio-2.0 is the future of modern commercial elevators."
    },
    {
      name: "Eleventra",
      image: "/images/commercial/eleventra.jpg",
      description: "Designed for high-rise buildings, offering exceptional performance and comfort.",
      features: ["Comfortable ride", "High-speed elevator", "Advanced durability"],
      type: "Goods Lift",
      moreInfo: "Eleventra is built for high-rise commercial buildings, ensuring a high-speed, smooth, and secure ride for both passengers and freight. Designed to withstand rigorous usage, it combines cutting-edge engineering with a focus on user comfort. Whether in corporate towers, luxury hotels, or shopping complexes, Eleventra guarantees an efficient and elegant mobility experience."
    },
  ];


  export const productsData = [
    {
        images: [
          "/images/luxury/felix.jpg",
          "/images/luxury/felix2.png",
          "/images/luxury/felix.jpg",
          "/images/luxury/felix2.png"
        ],
        productTitle: "Felix",
        productDescription:
          "Felix is an elegant, AI-assisted home elevator designed for modern residences. Featuring German vacuum-sealed hydraulic technology, it ensures smooth, whisper-quiet operation. Engineered for optimal space efficiency, Felix requires no pit or bulky overhead structures. It operates on a single-phase power supply, making it ideal for contemporary homes seeking seamless vertical mobility. With a sleek design and energy-efficient functionality, Felix combines luxury with cutting-edge European technology.",
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
          "Using energy-efficient German vacuum-sealed hydraulic technology, Felix is a luxury home elevator designed for those who seek sophistication, efficiency, and seamless performance."
      },
      {
        images: [
          "/images/luxury/felix.jpg",
          "/images/luxury/felix2.png",
          "/images/luxury/felix.jpg",
          "/images/luxury/felix2.png"
        ],
        productTitle: "Felix-2.0",
        productDescription:
          "Felix-2.0 is an advanced AI-assisted elevator, setting new standards in durability and precision. Featuring a gearless traction mechanism, it delivers exceptionally smooth vertical mobility without compromising on efficiency. Its advanced belt-drive technology ensures reduced wear and tear, making it ideal for high-end homes and premium residential spaces. The system operates without a traditional pit, making it an effortless fit for modern interiors while maintaining whisper-quiet functionality.",
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
          "Felix-2.0 features a gearless traction system with AI-assisted precision, ensuring a smoother, quieter, and longer-lasting elevator experience without the need for deep pits or traditional steel cables."
      },
      {
        images: [
          "/images/luxury/felix.jpg",
          "/images/luxury/felix2.png",
          "/images/luxury/felix.jpg",
          "/images/luxury/felix2.png"
        ],
        productTitle: "Climber-X",
        productDescription:
          "Climber-X is a smart stair lift designed for seamless vertical mobility in homes and public spaces. Engineered with an advanced rack-and-pinion system, it effortlessly adapts to both straight and curved staircases. With AI-assisted technology, it offers smooth and precise movements, ensuring safety and reliability. Featuring a compact and pitless design, it integrates seamlessly into any architectural space while maximizing accessibility and ease of use.",
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
          "Designed for global safety compliance",
        ]
      },
    {
      images: [
        "/images/luxury/felix.jpg",
        "/images/luxury/felix2.png",
        "/images/luxury/felix.jpg",
        "/images/luxury/felix2.png"
      ],
      productTitle: "Pneumatic-Elevator",
      productDescription:
        "The Pneumatic-Elevator is a futuristic vertical mobility solution powered by vacuum technology. Designed for homes and offices, it eliminates the need for machine rooms, cables, or counterweights. Its sleek, self-supporting structure enhances architectural aesthetics while ensuring whisper-quiet performance. AI-assisted smart controls and advanced safety features make it a perfect choice for those seeking luxury, convenience, and efficiency in an eco-friendly package.",
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
          ]
    },
    {
        images: [
          "/images/luxury/felix.jpg",
          "/images/luxury/felix2.png",
          "/images/luxury/felix.jpg",
          "/images/luxury/felix2.png"
        ],
        productTitle: "Elivio",
        productDescription: "Elivio is a robust, AI-assisted smart elevator designed for commercial, residential, and industrial applications. Featuring German-engineered traction technology, it delivers unparalleled performance, efficiency, and durability. With an advanced control system, Elivio offers seamless vertical mobility while maintaining superior safety standards. Ideal for high-rise buildings, it ensures reliability, energy efficiency, and a customizable modern aesthetic.",
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
        ]
      },
      {
        images: [
          "/images/luxury/felix.jpg",
          "/images/luxury/felix2.png",
          "/images/luxury/felix.jpg",
          "/images/luxury/felix2.png"
        ],
        productTitle: "Elivio-2.0",
        "productDescription": "Elivio-2.0 is a next-generation smart elevator featuring a gearless traction system for ultra-smooth and efficient operation. Designed with AI-assisted controls, it offers intelligent monitoring, error-free diagnostics, and seamless mobility. Its machine-room-less structure and pitless design make it ideal for modern commercial and residential spaces, ensuring energy-efficient vertical transportation with premium aesthetics.",
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
            "AI-powered elevator Smart Elevator",
          "Advanced safety & braking",
        ]
      },
      {
        images: [
          "/images/luxury/felix.jpg",
          "/images/luxury/felix2.png",
          "/images/luxury/felix.jpg",
          "/images/luxury/felix2.png"
        ],
        productTitle: "Eleventra",
        "productDescription": "The Eleventra Commercial Lift is a state-of-the-art elevator designed for heavy-duty use, perfect for car lifts, stretchers, and goods transport in high-end commercial and industrial spaces. With cutting-edge gearless traction technology, it delivers smooth, fast, and energy-efficient vertical transportation. Its robust build, combined with advanced safety features and intelligent controls, ensures seamless performance under demanding conditions. The Eleventra is designed for durability, with a pitless and machine-room-less structure for maximum space utilization and flexibility.",
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
        src: "services/1.jpg",
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
        src: "interior/3.jpg",
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
    //     src: "product/felix.jpg"
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
        src: "interior/1.jpg",
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
        imageUrl: "/images/luxury/felix.jpg",
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
        imageUrl: "/images/commercial/elivio2.jpg",
        description: "An advanced version of Elivio with improved speed and safety.",
        moreInfo: "Elivio-2.0 takes commercial lifting to the next level with cutting-edge technology and enhanced safety mechanisms. Featuring a machine-room-less design, it optimizes space while delivering faster travel speeds and energy efficiency. With its smart monitoring system, real-time diagnostics, and smooth performance, Elivio-2.0 is the future of modern commercial elevators"
    },
  ]
{/* <Bounded className="">
        <h2 className="text-6xl font-bold mb-4  bg-clip-text text-transparent bg-gradient-to-b from-gold via-gold bg-neutral-950 gold-hover-btn">Choose Your Preferred Structure</h2>
        <div className="flex flex-col  w-full gap-6 justify-center">
             {preferences.map((preference, index)=>(
            <ProductLayout
                key={index}
                title={preference.title}
                description={preference.description}
                image1={preference.image1}
                image2={preference.image2}
                />
             ))}
        </div>
      </Bounded> */}
    {/* <section id="products">
      <ProductsPage />
    </section> */}
