import { ProductDetailsProps } from "./types";
// hero-heading
// hero-image
// product-name
// product-sub-heading
// product-mini-heading
// product-description
// display-images (array of string that stores the source for the image)
// carousel-images (array of string that stores the source for the image)
// key-features (array of string that stores the key features of the elevator)
// product-special-feature
// attracter (object: (
//                 heading
//                 sections: array [{sub-heading, description},{sub-heading, description},{sub-heading, description},...{sub-heading, description}]
//                ))
// design-terms (array of strings that stores the design terms)




  export const productsData: ProductDetailsProps[] = [
    {
        heroHeading: "",
        heroImage: "",
        productTitle: "Felix",
        productSubHeading: "Felix",
        productMiniHeading: "Felix",
        productDescription:
          "Felix is an elegant, AI-assisted home elevator designed for modern residences. Featuring German vacuum-sealed hydraulic technology, it ensures smooth, whisper-quiet operation. Engineered for optimal space efficiency, Felix requires no pit or bulky overhead structures. It operates on a single-phase power supply, making it ideal for contemporary homes seeking seamless vertical mobility. With a sleek design and energy-efficient functionality, Felix combines luxury with cutting-edge European technology.",
        carouselImages: [
          "/images/luxury/felix.jpg",
          "/images/luxury/felix2.png",
          "/images/luxury/felix.jpg",
          "/images/luxury/felix2.png",
          "/images/luxury/felix2.png",
          "/images/luxury/felix.jpg",
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
                    image: "/path/to/image",
                    subHeading: "How Exactly Does a Hydraulic Elevator For Home Work",
                    description: "The key to a hydraulic elevator’s magic lies in its namesake – hydraulics. Imagine a sealed system filled with hydraulic fluid, a special oil. When an electric pump activates, it pressurizes this fluid, sending it coursing through pipes. This pressurized fluid then reaches the heart of the system – a piston housed within a cylinder. Think of the piston as a powerful muscle. As the pressurized fluid enters the cylinder, it pushes against the piston, causing it to rise. This upward movement of the piston translates to the movement of the elevator car, smoothly lifting it towards your desired floor."
                },
                {
                    image: "/path/to/image",
                    subHeading: "Elevate Your Home with Vaastu-Aligned Harmony",
                    description: "Enhance your home’s energy, prosperity, and convenience by integrating Vaastu principles with modern home lifts. Beyond accessibility, a thoughtfully placed home lift influences the positive energy flow, creating a balanced and auspicious living space. By blending ancient wisdom with cutting-edge technology, you can elevate both your lifestyle and spiritual well-being. Experience seamless harmony where design meets destiny!"
                },
                {
                    image: "/path/to/image",
                    subHeading: "Seamless Elevation, Zero Compromise—Go For Pitlles & Headless Elevators",
                    description: "Integrating an elevator into a home can be challenging due to the need for a pit or machine room, often making traditional elevators unsuitable. However, pitless and shaftless elevators have emerged as the perfect solution for residences that cannot accommodate these structural modifications. With a sleek design and effortless installation, these innovative elevators provide unmatched convenience and accessibility—enhancing your home without the hassle of major renovations."
                },
                {
                    image: "/path/to/image",
                    subHeading: "Swift Emergency Lowering System",
                    description: "Stay safe and never get stranded! In the event of a power loss, our advanced Emergency Lowering System instantly detects the failure, cancels all active floor calls, and seamlessly switches to standby battery power. It smoothly lowers the elevator to the nearest landing, opens the doors, and allows passengers to exit within seconds—eliminating long wait times and uncertainty. The system then securely places the elevator out of service until power is restored, ensuring both safety and efficiency."
                },
                {
                    image: "/path/to/image",
                    subHeading: "AI-Assisted Smart Elevator: Elevating Intelligence, Enhancing Experience",
                    description: "AI-powered elevators revolutionize vertical mobility by optimizing efficiency, safety, and user experience. They analyze traffic patterns to reduce wait times, predict maintenance needs to prevent breakdowns, and personalize rides for seamless navigation. AI enhances energy efficiency by adjusting power usage and integrating with smart building systems. In emergencies, it ensures quick, automated responses for passenger safety. With features like touchless operation, IoT connectivity, and real-time data processing, AI-assisted smart elevators deliver faster, safer, and more sustainable transportation. Elevate your experience with cutting-edge intelligence that adapts, learns, and enhances every ride!"
                },
            ]
      },
      {
        heroHeading: "",
        heroImage: "",
        productTitle: "Felix-2.0",
        productSubHeading: "Felix-2.0",
        productMiniHeading: "Felix-2.0",
        productDescription:
          "Felix-2.0 is an advanced AI-assisted elevator, setting new standards in durability and precision. Featuring a gearless traction mechanism, it delivers exceptionally smooth vertical mobility without compromising on efficiency. Its advanced belt-drive technology ensures reduced wear and tear, making it ideal for high-end homes and premium residential spaces. The system operates without a traditional pit, making it an effortless fit for modern interiors while maintaining whisper-quiet functionality.",
        carouselImages: [
          "/images/luxury/felix.jpg",
          "/images/luxury/felix2.png",
          "/images/luxury/felix.jpg",
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
            image: "/path/to/image",
            subHeading: "How Exactly Does a Gearless Traction Elevator Work?",
            description:
              "Felix-2.0 uses a gearless traction system, which eliminates the need for traditional steel cables. Instead, it employs a high-durability belt drive mechanism that significantly reduces wear and tear. This technology ensures a smooth, efficient ride while enhancing the longevity of the elevator system."
          },
          {
            image: "/path/to/image",
            subHeading: "Vastu-Compliant Compact Design for Modern Homes",
            description:
              "The Felix-2.0 is designed with a Vastu-compliant compact structure, allowing for seamless integration into modern home layouts. It provides an elegant and space-efficient solution without the need for pits or headroom, making it an excellent choice for premium residences."
          },
          {
            image: "/path/to/image",
            subHeading: "AI-Powered Diagnostics & Error Detection",
            description:
              "Felix-2.0 incorporates AI-driven error detection, allowing for real-time system monitoring. This ensures predictive maintenance, reducing downtime and enhancing safety. The smart diagnostic system can detect irregularities before they become major issues, optimizing long-term performance."
          },
          {
            image: "/path/to/image",
            subHeading: "Silent Operation with Advanced Braking System",
            description:
              "Equipped with modern braking technology, Felix-2.0 offers whisper-quiet operation. Its gearless traction system minimizes vibrations and noise, making it an ideal choice for noise-sensitive environments such as luxury homes and apartments."
          },
          {
            image: "/path/to/image",
            subHeading: "Sleek Design with Customizable Interiors",
            description:
              "Felix-2.0 combines aesthetics with functionality, offering sleek designs and customizable interiors. Whether you prefer a contemporary or classic look, the elevator can be tailored to match your home’s aesthetic preferences."
          },
        ]
      },
      {
        heroHeading: "",
        heroImage: "",
        productTitle: "Climber-X",
        productSubHeading: "Climber-X",
        productMiniHeading: "Climber-X",
        productDescription:
          "Climber-X is a smart stair lift designed for seamless vertical mobility in homes and public spaces. Engineered with an advanced rack-and-pinion system, it effortlessly adapts to both straight and curved staircases. With AI-assisted technology, it offers smooth and precise movements, ensuring safety and reliability. Featuring a compact and pitless design, it integrates seamlessly into any architectural space while maximizing accessibility and ease of use.",
        carouselImages: [
          "/images/luxury/felix.jpg",
          "/images/luxury/felix2.png",
          "/images/luxury/felix.jpg",
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
            image: "/path/to/image",
            subHeading: "How Does Climber-X Work?",
            description:
              "Climber-X utilizes a state-of-the-art rack-and-pinion drive system, ensuring smooth, safe, and efficient stair mobility. With AI-powered controls, it adapts intelligently to the user's movements and staircase conditions, making vertical transportation effortless."
          },
          {
            image: "/path/to/image",
            subHeading: "Seamless Installation, No Structural Changes Required",
            description:
              "Designed for convenience, Climber-X requires no pit or shaft, making it the perfect solution for existing staircases. Its compact form factor ensures a hassle-free installation process with minimal modifications."
          },
          {
            image: "/path/to/image",
            subHeading: "AI-Powered Smart Controls",
            description:
              "With integrated AI technology, Climber-X optimizes movement efficiency, reduces energy consumption, and ensures automated error detection. This makes it one of the most intelligent stair lift solutions on the market."
          },
          {
            image: "/path/to/image",
            subHeading: "Reliable Battery Backup for Power Failures",
            description:
              "Climber-X ensures uninterrupted functionality even during power outages with its robust battery backup system. Users can rely on its seamless performance for complete peace of mind."
          },
          {
            image: "/path/to/image",
            subHeading: "Designed for Maximum Safety & Comfort",
            description:
              "Engineered with global safety standards in mind, Climber-X features a secure seating system, intuitive control mechanisms, and a whisper-quiet motor for a smooth and pleasant riding experience."
          }
        ]
      },
      {
        heroHeading: "",
        heroImage: "",
        productTitle: "Pneumatic-Elevator",
        productSubHeading: "Pneumatic-Elevator",
        productMiniHeading: "Pneumatic-Elevator",
        productDescription:
          "The Pneumatic-Elevator is a futuristic vertical mobility solution powered by vacuum technology. Designed for homes and offices, it eliminates the need for machine rooms, cables, or counterweights. Its sleek, self-supporting structure enhances architectural aesthetics while ensuring whisper-quiet performance. AI-assisted smart controls and advanced safety features make it a perfect choice for those seeking luxury, convenience, and efficiency in an eco-friendly package.",
        carouselImages: [
          "/images/luxury/felix.jpg",
          "/images/luxury/felix2.png",
          "/images/luxury/felix.jpg",
          "/images/luxury/felix2.png",
          "/images/luxury/felix2.png",
          "/images/luxury/felix.jpg",
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
            image: "/path/to/image",
            subHeading: "How Pneumatic Elevators Work",
            description:
              "Pneumatic elevators use advanced vacuum technology to lift and lower the cabin. Unlike traditional systems, they operate without cables or counterweights, relying on air pressure differentials for movement. This ensures smooth, silent, and energy-efficient travel."
          },
          {
            image: "/path/to/image",
            subHeading: "Space-Saving & Self-Supporting Design",
            description:
              "With a sleek, self-contained structure, Pneumatic-Elevators require no machine rooms, making them ideal for modern homes with limited space. The cylindrical design blends seamlessly into any architectural aesthetic."
          },
          {
            image: "/path/to/image",
            subHeading: "Smart AI-Assisted Controls",
            description:
              "AI-enhanced navigation ensures optimal performance by analyzing usage patterns and adjusting travel speed. Predictive maintenance and automated safety checks provide peace of mind for users."
          },
          {
            image: "/path/to/image",
            subHeading: "Vastu-Compliant for Harmonious Living",
            description:
              "Designed with Vastu principles in mind, Pneumatic-Elevators promote positive energy flow within your home, enhancing well-being while offering luxurious vertical mobility."
          },
          {
            image: "/path/to/image",
            subHeading: "Eco-Friendly & Energy Efficient",
            description:
              "Powered by vacuum technology, these elevators consume minimal energy, reducing their carbon footprint. Their innovative design eliminates the need for lubrication, making them a sustainable choice."
          }
        ]
      },
      {
        heroHeading: "",
        heroImage: "",
        productTitle: "Elivio",
        productSubHeading: "Elivio",
        productMiniHeading: "Elivio",
        productDescription:
          "Elivio is a robust, AI-assisted smart elevator designed for commercial, residential, and industrial applications. Featuring German-engineered traction technology, it delivers unparalleled performance, efficiency, and durability. With an advanced control system, Elivio offers seamless vertical mobility while maintaining superior safety standards. Ideal for high-rise buildings, it ensures reliability, energy efficiency, and a customizable modern aesthetic.",
        carouselImages: [
          "/images/luxury/felix.jpg",
          "/images/luxury/felix2.png",
          "/images/luxury/felix.jpg",
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
            image: "/path/to/image",
            subHeading: "Advanced Traction Technology for Seamless Rides",
            description:
              "Elivio's state-of-the-art traction technology ensures smooth, efficient, and whisper-quiet rides. Engineered with German precision, this system provides superior load management, enhanced safety, and minimal energy consumption, making it the ideal choice for both commercial and residential buildings.",
          },
          {
            image: "/path/to/image",
            subHeading: "Eco-Smart Energy Efficiency",
            description:
              "Elivio elevators incorporate eco-smart technology to minimize power consumption without compromising performance. The intelligent system optimizes energy use, contributing to sustainability while reducing operational costs for users.",
          },
          {
            image: "/path/to/image",
            subHeading: "AI-Powered Real-Time Monitoring",
            description:
              "With AI-assisted diagnostics and real-time monitoring, Elivio ensures predictive maintenance, minimizing downtime and maximizing efficiency. The smart system continuously analyzes elevator performance, proactively detecting and addressing potential issues.",
          },
          {
            image: "/path/to/image",
            subHeading: "Next-Gen Safety & Braking System",
            description:
              "Elivio prioritizes passenger safety with an advanced braking system and multi-layered safety protocols. In case of emergencies, the system ensures controlled deceleration and secure landing, offering a worry-free riding experience.",
          },
          {
            image: "/path/to/image",
            subHeading: "Bigger Cabin for Enhanced Comfort",
            description:
              "Designed with user comfort in mind, Elivio features one of the largest cabins available, providing ample space for passengers while maintaining a sleek and modern aesthetic.",
          },
        ],
      },
      {
        heroHeading: "",
        heroImage: "",
        productTitle: "Elivio-2.0",
        productSubHeading: "Elivio-2.0",
        productMiniHeading: "Elivio-2.0",
        productDescription:
          "Elivio-2.0 is a next-generation smart elevator featuring a gearless traction system for ultra-smooth and efficient operation. Designed with AI-assisted controls, it offers intelligent monitoring, error-free diagnostics, and seamless mobility. Its machine-room-less structure and pitless design make it ideal for modern commercial and residential spaces, ensuring energy-efficient vertical transportation with premium aesthetics.",
        carouselImages: [
          "/images/luxury/felix.jpg",
          "/images/luxury/felix2.png",
          "/images/luxury/felix.jpg",
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
            image: "/path/to/image",
            subHeading: "Gearless Machine-Room-Less Technology",
            description:
              "Elivio-2.0 uses an advanced gearless traction system, eliminating the need for a machine room. This innovation reduces space requirements while enhancing efficiency and smooth operation.",
          },
          {
            image: "/path/to/image",
            subHeading: "AI-Assisted Smart Elevator",
            description:
              "With AI-driven real-time monitoring and intelligent diagnostics, Elivio-2.0 ensures proactive maintenance, error-free operation, and a seamless elevator experience.",
          },
          {
            image: "/path/to/image",
            subHeading: "Ultra-Quiet Precision Ride",
            description:
              "Experience whisper-quiet movement with Elivio-2.0’s high-precision traction system, delivering a smooth and noise-free ride for enhanced comfort.",
          },
          {
            image: "/path/to/image",
            subHeading: "Eco-Smart & Energy Efficient",
            description:
              "Elivio-2.0 is designed with an eco-friendly approach, consuming minimal power while ensuring optimal performance, making it a sustainable choice for modern structures.",
          },
          {
            image: "/path/to/image",
            subHeading: "Advanced Safety & Emergency Systems",
            description:
              "Equipped with intelligent safety mechanisms, automatic emergency braking, and power failure backup, Elivio-2.0 prioritizes passenger security and reliability.",
          },
        ],
      },
      {
        heroHeading: "",
        heroImage: "",
        productTitle: "Eleventra",
        productSubHeading: "Eleventra",
        productMiniHeading: "Eleventra",
        productDescription:
          "The Eleventra Commercial Lift is a state-of-the-art elevator designed for heavy-duty use, perfect for car lifts, stretchers, and goods transport in high-end commercial and industrial spaces. With cutting-edge gearless traction technology, it delivers smooth, fast, and energy-efficient vertical transportation. Its robust build, combined with advanced safety features and intelligent controls, ensures seamless performance under demanding conditions. The Eleventra is designed for durability, with a pitless and machine-room-less structure for maximum space utilization and flexibility.",
        carouselImages: [
          "/images/luxury/felix.jpg",
          "/images/luxury/felix2.png",
          "/images/luxury/felix.jpg",
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
            image: "/path/to/image",
            subHeading: "Gearless Traction Technology for Ultimate Performance",
            description:
              "Eleventra uses state-of-the-art gearless traction technology, ensuring smooth, energy-efficient, and high-speed vertical transportation. This advanced system reduces maintenance costs while improving overall reliability and durability."
          },
          {
            image: "/path/to/image",
            subHeading: "AI-Powered Smart Diagnostics",
            description:
              "Equipped with cutting-edge AI algorithms, Eleventra continuously monitors system performance, predicting potential failures before they occur. This ensures maximum uptime, reducing maintenance costs and enhancing operational efficiency."
          },
          {
            image: "/path/to/image",
            subHeading: "Designed for Heavy-Duty Applications",
            description:
              "With high load capacity and advanced safety features, Eleventra is ideal for commercial spaces, car lifts, and industrial environments. Its robust build ensures seamless operation under the most demanding conditions."
          },
          {
            image: "/path/to/image",
            subHeading: "Smart Controls for Seamless Operations",
            description:
              "Eleventra's intelligent control system optimizes elevator performance with automated error detection, real-time efficiency adjustments, and smart energy-saving mechanisms. Experience hassle-free operations with minimal human intervention."
          },
          {
            image: "/path/to/image",
            subHeading: "Pitless & Machine-Room-Less Flexibility",
            description:
              "Unlike traditional elevators, Eleventra offers a pitless and machine-room-less design, making it the perfect solution for buildings where space constraints are a concern. Maximize usable space without compromising on performance."
          }
        ]
      }
  ];
