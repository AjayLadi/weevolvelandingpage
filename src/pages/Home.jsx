import { useState, useEffect, useRef } from 'react';
import { FaFacebook, FaLinkedin, FaYoutube, FaInstagram, FaPinterest, FaXTwitter, FaThreads } from 'react-icons/fa6';

import { Menu, X, Globe, Play, Facebook, Linkedin, Instagram, Youtube, MapPin, Phone } from "lucide-react";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import logo from '../assets/evolve.png'


import footer from '../assets/footer.png'
import Vector from "../assets/Vector.png";
import Vector2 from "../assets/Vector2.png";
import well from "../assets/wall.mp4";
import Astrology from "../assets/service/Astrology.png";
import dance from "../assets/service/dance.png";
import chakra from "../assets/service/chakra.png";
import play from "../assets/service/play.png";
import art from "../assets/service/art.png";
import drama from "../assets/service/drama.png";
import teen from "../assets/service/teen.png";
import gestalt from "../assets/service/gestalt.png";
import music from "../assets/service/music.png";
import sound from "../assets/service/sound.png";

import family from "../assets/service/family.png";
import aromatherophy from "../assets/service/aromatherophy.png";
import raiki from "../assets/service/raiki.png";
import taroot from "../assets/service/taroot.png";
import crystal from "../assets/service/crystal.png";
import past from "../assets/service/past.png";
import hypnotherophy from "../assets/service/hypnotherophy.png";
import animal from "../assets/service/animal.png";
import ayurvedha from "../assets/service/ayurvedha.png";
import transpersnol from "../assets/service/transpersnol.png";

import festivals from "../assets/festivals.png";
import ceo from "../assets/ceo.png";

import pramodjoshi from '../assets/team/joshi.png'
import raj from '../assets/team/raj.png'
import rajeev from '../assets/team/rajeev.png'

import roshni from '../assets/team/roshni.png'
import tejal from '../assets/team/tejal.png'
import snehraj from '../assets/team/snehraj.png'
import vidhya from '../assets/team/vidhya.png'
import ajay from '../assets/team/ajay.png'
import harshada from '../assets/team/harshada.png'
import sanjay from '../assets/team/sanjay.png'
import abhishekh from '../assets/team/abhishekh.png'
import rishab from '../assets/team/rishab.png'

import user1 from "../assets/user/u1.png";
import user2 from "../assets/user/u2.png";
import user3 from "../assets/user/u3.png";
import user4 from "../assets/user/u4.png";
import user5 from "../assets/user/u5.png";
import user6 from "../assets/user/u6.png";
import user7 from "../assets/user/u7.png";
import user8 from "../assets/user/u8.png";
import user9 from "../assets/user/u9.png";
import user10 from "../assets/user/u10.png";
import user11 from "../assets/user/u11.png";
import user12 from "../assets/user/u12.png";
import user13 from "../assets/user/u13.png";
import user14 from "../assets/user/u14.png";

import dr from "../assets/product/dr.png";
import netures from "../assets/product/netures.png";
import athleta from "../assets/product/athleta.png";
import harbal from "../assets/product/harbal.png";
import food from "../assets/product/food.png";
import amway from "../assets/product/amway.png";
import skincare from "../assets/product/skincare.png";
import healing from "../assets/product/healing.png";
import spiritual from "../assets/product/spiritual.png";

import cr1 from "../assets/courses/1.png";
import cr2 from "../assets/courses/2.png";
import cr3 from "../assets/courses/3.png";
import cr4 from "../assets/courses/4.png";
import cr5 from "../assets/courses/5.png";

const Home = () => {
  // nav
  // const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState('en');
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);


  const changeLanguage = (lang) => {
    setLanguage(lang);
    setIsLangMenuOpen(false);
    // Here you would implement the logic to change the website's language
    // This could involve context API, i18n libraries, or other state management
    console.log(`Language changed to: ${lang}`);
  };

  // Content translation based on selected language
  const translations = {
    en: {
      home: 'Home',
      about: 'About Us',
      offerings: 'Offerings',
      contact: 'Contact Us',
      connect: 'Connect'
    },
    hi: {
      home: 'होम',
      about: 'हमारे बारे में',
      offerings: 'सेवाएँ',
      contact: 'संपर्क करें',
      connect: 'जुड़ें'
    },
    mr: {
      home: 'मुख्यपृष्ठ',
      about: 'आमच्याबद्दल',
      offerings: 'सेवा',
      contact: 'संपर्क',
      connect: 'जोडा'
    }
  };

  const t = translations[language];

  const [activeTab, setActiveTab] = useState(null);

  const navItems = [
    { id: 'services', name: 'Services', link: '/services' },
    { id: 'products', name: 'Products', link: '/products' },
    { id: 'retreats', name: 'Retreats', link: '/retreats' },
    { id: 'festivals', name: 'Festivals', link: '/festivals' },
    { id: 'tourism', name: 'Tourism', link: '/tourism' },
    { id: 'courses', name: 'Courses', link: '/courses' },
    { id: 'corporate', name: 'Corporate', link: '/corporate' },
    { id: 'community', name: 'Community', link: '/community' }
  ];
  const handleNavigation = (id, link) => {
    setActiveTab(id);
    // You can either use client-side routing or direct navigation
    // window.location.href = link; // For direct navigation
    // Or use your router's navigation function like router.push(link)
  };
  // Function to scroll to section
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      // Set active tab
      setActiveTab(id);

      // Smooth scroll to element
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  // const [activeSection, setActiveSection] = React.useState('home');

  const [isOpen, setIsOpen] = useState(false);


  const scrollToSections = (e, sectionId) => {
    e.preventDefault();
    setIsOpen(false);

    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  // carosoul

  const [videoRevealed, setVideoRevealed] = useState(false);
  const [contentRevealed, setContentRevealed] = useState(false);
  // const [activeTab, setActiveTab] = useState(null);

  // Reference for the video element
  const videoRef = useRef(null);

  useEffect(() => {
    // Immediate trigger for first animation
    requestAnimationFrame(() => {
      setVideoRevealed(true);

      // Shorter delay for content reveal
      setTimeout(() => {
        setContentRevealed(true);
      }, 500);
    });

    // Optimize video playback
    if (videoRef.current) {
      videoRef.current.addEventListener('loadeddata', () => {
        videoRef.current.play();
      });
    }

    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener('loadeddata', () => { });
      }
    };
  }, []);

  const navigateToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
      });
    }
  };



  // couseling 

  const counselingServices = [
    {
      id: 1,
      title: "Astrology Counseling",
      description: "Explores your birth chart to understand emotional patterns and life paths. Great for self-discovery and spiritual alignment.",
      image: Astrology,
      row: 1
    },
    {
      id: 2,
      title: "Dance Movement Therapy",
      description: "Uses dance and body movement to support emotional, cognitive, and physical integration. Great for trauma, body image, and stress.",
      image: dance,
      row: 1
    },
    {
      id: 3,
      title: "Chakra Healing",
      description: "Balances the 7 energy centers of the body using meditation, sound, or light. Improves emotional, physical, and spiritual well-being.",
      image: chakra,
      row: 1
    },
    {
      id: 4,
      title: "Play Therapy",
      description: "Primarily for children, this therapy uses play to help them express feelings and process trauma. Supports emotional growth and problem-solving.",
      image: play,
      row: 1
    },
    {
      id: 5,
      title: "Art Therapy",
      description: "Encourages healing through creative expression like drawing, painting, or sculpting. Helps clients communicate emotions non-verbally.",
      image: art,
      row: 1
    },
    {
      id: 6,
      title: "Drama Therapy",
      description: "Uses roleplay, storytelling, and performance to explore emotions and personal issues. Encourages self-expression and emotional processing.",
      image: drama,
      row: 1
    },
    {
      id: 7,
      title: "Teen Counseling",
      description: "Focuses on helping teenagers deal with stress, peer pressure, and identity issues. Provides a safe space for self-expression and guidance.",
      image: teen,
      row: 1
    },
    {
      id: 8,
      title: "Gestalt Therapy",
      description: "Focuses on present awareness, emotions, and body sensations. Encourages taking responsibility for thoughts and actions.",
      image: gestalt,
      row: 1
    },
    {
      id: 9,
      title: "Music Therapy",
      description: "Uses music to promote emotional healing and improve mental well-being. Includes singing, instrument play, or listening to music.",
      image: music,
      row: 1
    },
    {
      id: 10,
      title: "Sound Therapy",
      description: "Uses sound frequencies and vibrations for deep relaxation and stress relief. Often involves singing bowls, tuning forks, or gongs.",
      image: sound,
      row: 1
    },



    {
      id: 11,
      title: "Family Therapy",
      description: "Works with families to improve communication, resolve conflict, and strengthen relationships. Involves multiple family members in sessions.",
      image: family,
      row: 2
    },
    {
      id: 12,
      title: "Aromatherapy",
      description: "Uses essential oils to support mood, stress relief, and energy. Commonly paired with massage or mindfulness.",
      image: aromatherophy,
      row: 2
    },
    {
      id: 13,
      title: "Reiki Healing",
      description: "An energy healing method using hands to balance the body's energy. Promotes deep relaxation and emotional healing.",
      image: raiki,
      row: 2
    },
    {
      id: 14,
      title: "Tarot Guidance Therapy",
      description: "Uses tarot cards as a self-reflective tool for decision-making and insight. Helps explore emotions, blocks, and future paths.",
      image: taroot,
      row: 2
    },
    {
      id: 15,
      title: "Crystal Healing",
      description: "Uses crystals and gemstones to heal energy fields. Different stones are used for different emotions or chakras.",
      image: crystal,
      row: 2
    },
    {
      id: 16,
      title: "Past Life Regression (PLR) Therapy",
      description: "Uses hypnosis to explore past life memories. Helps resolve fears, traumas, and emotional blocks.",
      image: past,
      row: 2
    },
    {
      id: 17,
      title: "Hypnotherapy",
      description: "Uses guided relaxation and focus to access the subconscious mind. Effective for habit change, anxiety, and pain management.",
      image: hypnotherophy,
      row: 2
    },
    {
      id: 18,
      title: "Animal-Assisted Therapy",
      description: "Includes therapy dogs, horses, or other animals to support emotional healing. Improves mood, communication, and trust.",
      image: animal,
      row: 2
    },
    {
      id: 19,
      title: "Ayurveda-Based Wellness Counseling",
      description: "An ancient Indian holistic approach focusing on balancing bodily doshas (energies) through diet, lifestyle, and herbal remedies to promote health.",
      image: ayurvedha,
      row: 2
    },
    {
      id: 20,
      title: "Transpersonal Therapy",
      description: "Integrates spiritual and psychological practices to explore the deeper aspects of human experience, aiming for self-actualization and personal growth.",
      image: transpersnol,
      row: 2
    },
  ];



  const [isPausedRow1, setIsPausedRow1] = useState(false);
  const [isPausedRow2, setIsPausedRow2] = useState(false);
  const [isHoveredRow1, setIsHoveredRow1] = useState(false);
  const [isHoveredRow2, setIsHoveredRow2] = useState(false);
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);

  // Refs to track animation values
  const speedRef1 = useRef(1);
  const speedRef2 = useRef(1);
  const positionRef1 = useRef(0);
  const positionRef2 = useRef(null);
  const animationRef1 = useRef(null);
  const animationRef2 = useRef(null);
  const isInitializedRef = useRef(false);

  // Create duplicate cards for infinite scrolling
  const row1Cards = counselingServices.filter(service => service.row === 1);
  const row2Cards = counselingServices.filter(service => service.row === 2);

  // Duplicate cards for seamless scrolling
  const duplicatedRow1 = [...row1Cards, ...row1Cards, ...row1Cards];
  const duplicatedRow2 = [...row2Cards, ...row2Cards, ...row2Cards];

  useEffect(() => {
    // Initialize the second row position with an offset (mid-card)
    if (!isInitializedRef.current && row2Ref.current) {
      const cardWidth = row2Ref.current.querySelector('div')?.offsetWidth || 0;
      // Set initial position to half a card width
      positionRef2.current = -(cardWidth / 2);
      isInitializedRef.current = true;
    }

    // Row 1 animation
    const animateRow1 = () => {
      if (!row1Ref.current) return;

      // Calculate target speed (slow when hovered)
      const targetSpeed = isHoveredRow1 ? 0.2 : 1;

      // Smooth transition between speeds
      if (speedRef1.current !== targetSpeed) {
        if (isHoveredRow1) {
          // Slow down gradually
          speedRef1.current = Math.max(targetSpeed, speedRef1.current - 0.05);
        } else {
          // Speed up gradually
          speedRef1.current = Math.min(targetSpeed, speedRef1.current + 0.03);
        }
      }

      // Only move if not paused (for touch events)
      if (!isPausedRow1) {
        // Update position based on current speed
        positionRef1.current -= speedRef1.current;

        // Reset position for infinite loop
        const containerWidth = row1Ref.current.scrollWidth / 3;
        if (Math.abs(positionRef1.current) >= containerWidth) {
          positionRef1.current = 0;
        }

        // Apply transform
        row1Ref.current.style.transform = `translateX(${positionRef1.current}px)`;
      }

      // Continue animation
      animationRef1.current = requestAnimationFrame(animateRow1);
    };

    // Row 2 animation (same direction as row 1)
    const animateRow2 = () => {
      if (!row2Ref.current || positionRef2.current === null) return;

      const targetSpeed = isHoveredRow2 ? 0.2 : 1;

      if (speedRef2.current !== targetSpeed) {
        if (isHoveredRow2) {
          speedRef2.current = Math.max(targetSpeed, speedRef2.current - 0.05);
        } else {
          speedRef2.current = Math.min(targetSpeed, speedRef2.current + 0.03);
        }
      }

      if (!isPausedRow2) {
        positionRef2.current -= speedRef2.current;

        const containerWidth = row2Ref.current.scrollWidth / 3;
        if (Math.abs(positionRef2.current) >= containerWidth) {
          // Reset position to maintain the offset
          const cardWidth = row2Ref.current.querySelector('div')?.offsetWidth || 0;
          positionRef2.current = -(cardWidth / 2);
        }

        row2Ref.current.style.transform = `translateX(${positionRef2.current}px)`;
      }

      animationRef2.current = requestAnimationFrame(animateRow2);
    };

    // Start animations
    animationRef1.current = requestAnimationFrame(animateRow1);
    animationRef2.current = requestAnimationFrame(animateRow2);

    // Cleanup
    return () => {
      if (animationRef1.current) cancelAnimationFrame(animationRef1.current);
      if (animationRef2.current) cancelAnimationFrame(animationRef2.current);
    };
  }, [isPausedRow1, isPausedRow2, isHoveredRow1, isHoveredRow2]);


  // product

  const customStyles = `
  @keyframes float {
    0% {
      transform: translateY(0px);
      box-shadow: 0 5px 15px 0px rgba(0,0,0,0.3);
    }
    50% {
      transform: translateY(-5px);
      box-shadow: 0 15px 15px 0px rgba(0,0,0,0.1);
    }
    100% {
      transform: translateY(0px);
      box-shadow: 0 5px 15px 0px rgba(0,0,0,0.3);
    }
  }
  
  @keyframes pulse {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }
  
  .animate-float {
    animation: float 4s ease-in-out infinite;
  }
  
  .animate-pulse {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }
  
  .slide-transition {
    transition: all 0.5s ease-in-out;
  }
  
  .slide-from-left {
    transform: translateX(-100%);
    opacity: 0;
  }
  
  .slide-from-right {
    transform: translateX(100%);
    opacity: 0;
  }
  
  .card-shadow {
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }
  
  .card-glow {
    box-shadow: 0 0 15px 2px rgba(255, 255, 255, 0.2);
  }
`;

  const products = [
    {
      id: 1,
      title: "Amway",
      description: "Explore Amway's wide selection of vitamins and supplements in the Nutrition collection.",
      image: amway,
      color: "bg-green-50"
    },
    {
      id: 2,
      title: "NOW Foods",
      description: "Essential Oils, D-3, Magnesium, Detox Support",
      image: food,
      color: "bg-orange-50"
    },
    {
      id: 3,
      title: "Herbalife",
      description: "Shake Mix, Protein Powder, Herbal Tea Concentrate, with shaker cup and spoon.​",
      image: harbal,
      color: "bg-gray-800"
    },
    {
      id: 4,
      title: "Athleta (by Gap)",
      description: "Activewear, wellness accessories, loungewear.",
      image: athleta,
      color: "bg-gray-900"
    },
    {
      id: 5,
      title: "Dr. Bronner's",
      description: "Castile soaps, organic oils, toothpaste, balms",
      image: dr,
      color: "bg-purple-50"
    },
    {
      id: 6,
      title: "Nature's Bounty",
      description: "Hair Skin & Nails Gummies, Biotin, Vitamin D3",
      image: netures,
      color: "bg-purple-50"
    },
    {
      id: 7,
      title: "Skincare",
      description: "Clay masks, bath soaks, body butter, lip balm, natural soaps.",
      image: skincare,
      color: "bg-purple-50"
    },
    {
      id: 8,
      title: "Healing Tools",
      description: "Tibetan singing bowls, tuning forks, chimes, ocean drums.",
      image: healing,
      color: "bg-purple-50"
    },
    {
      id: 9,
      title: "Spiritual Stationery",
      description: "Soy candles with affirmations, chakra sticks, resin burners.",
      image: spiritual,
      color: "bg-purple-50"
    },
  ];

  // Create a circular array for infinite scrolling
  const extendedProducts = [...products, ...products, ...products];

  const [activeIndex, setActiveIndex] = useState(products.length);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [slideDirection, setSlideDirection] = useState('none'); // 'left', 'right', or 'none'
  // const sliderRef = useRef(null);
  const intervalRef = useRef(null);


  // Safety check for index bounds
  const safeActiveIndex = Math.min(Math.max(0, activeIndex), extendedProducts.length - 1);

  useEffect(() => {
    if (isAutoScrolling) {
      intervalRef.current = setInterval(() => {
        moveForward();
      }, 3000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoScrolling, activeIndex]);

  const moveForward = () => {
    setActiveIndex(prev => {
      const newIndex = prev + 1;
      if (newIndex >= extendedProducts.length - products.length) {
        return products.length;
      }
      return newIndex;
    });
  };

  const moveBackward = () => {
    setActiveIndex(prev => {
      const newIndex = prev - 1;
      if (newIndex < products.length) {
        return extendedProducts.length - products.length - 1;
      }
      return newIndex;
    });
  };


  const handleTouchStart = (e) => {
    setIsAutoScrolling(false);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      moveForward();
    }

    if (touchEnd - touchStart > 75) {
      moveBackward();
    }

    setTimeout(() => setIsAutoScrolling(true), 5000);
  };

  const handleUserInteraction = () => {
    setIsAutoScrolling(false);
    setTimeout(() => setIsAutoScrolling(true), 5000);
  };

  // Calculate styles based on distance from center - UPDATED BOX SIZES AND ANIMATIONS
  const getItemStyle = (index) => {
    const distance = Math.abs(activeIndex - index);
    const baseTransition = "transition-transform duration-500 ease-in-out";

    if (distance === 0) {
      return {
        scale: 'scale-100',
        opacity: 'opacity-100',
        zIndex: 'z-30',
        size: 'w-96 h-80',  // Increased size
        transform: '',
        transition: baseTransition,
        shadow: 'card-shadow card-glow'
      };
    }
    else if (distance === 1) {
      return {
        scale: 'scale-90',
        opacity: 'opacity-90',
        zIndex: 'z-20',
        size: 'w-80 h-80',
        transform: '',
        transition: baseTransition,
        shadow: 'card-shadow'
      };
    }
    else if (distance === 2) {
      return {
        scale: 'scale-80',
        opacity: 'opacity-60',
        zIndex: 'z-10',
        size: 'w-64 h-60',
        transform: '',
        transition: baseTransition,
        shadow: 'card-shadow'
      };
    }
    else {
      return {
        scale: 'scale-70',
        opacity: 'opacity-40',
        zIndex: 'z-0',
        size: 'w-56 h-56',
        transform: '',
        transition: baseTransition,
        shadow: 'card-shadow'
      };
    }
  };


  // Range of visible items - show more items for full width experience
  const visibleRange = 3; // Increased from 2 to 3 for fuller width display
  const startIdx = Math.max(safeActiveIndex - visibleRange, 0);
  const endIdx = Math.min(safeActiveIndex + visibleRange, extendedProducts.length - 1);
  const visibleProducts = extendedProducts.slice(startIdx, endIdx + 1);

  // Ensure we always have enough cards for full width
  while (visibleProducts.length < 7 && endIdx < extendedProducts.length - 1) {
    visibleProducts.push(extendedProducts[endIdx + visibleProducts.length - (endIdx - startIdx)]);
  }

  // Get current product and adjacent products for mobile view
  const currentProduct = extendedProducts[safeActiveIndex];
  const prevProduct = safeActiveIndex > 0 ? extendedProducts[safeActiveIndex - 1] : extendedProducts[extendedProducts.length - 1];
  const nextProduct = safeActiveIndex < extendedProducts.length - 1 ? extendedProducts[safeActiveIndex + 1] : extendedProducts[0];

  // Calculate mobile animation classes based on transition state
  const getMobileCardStyle = (position) => {
    if (!isTransitioning) return '';

    if (position === 'current') {
      return slideDirection === 'left' ? 'slide-from-right' : 'slide-from-left';
    } else if (position === 'prev') {
      return slideDirection === 'right' ? 'scale-90' : 'opacity-0 -translate-x-32';
    } else if (position === 'next') {
      return slideDirection === 'left' ? 'scale-90' : 'opacity-0 translate-x-32';
    }

    return '';
  };





  // courses
  const contactRef = useRef(null);
  const cards = [
    {
      id: 1,
      title: "Retreat",
      image: cr1,
      description: "Escape, unwind, and reconnect with yourself in soul-nourishing nature.",
    },
    {
      id: 2,
      title: "Festivals",
      image: cr4,
      description: "Celebrate wellness, community, and conscious living through experiences.",
    },
    {
      id: 3,
      title: "Tourism",
      image: cr2,
      description: "Travel with purpose—curated journeys that heal, inspire, and transform.",
    },
    {
      id: 4,
      title: "Courses",
      image: cr3,
      description: "Empower your mind and spirit with guided learning for holistic growth.",
    },
    {
      id: 5,
      title: "Corporate Wellness",
      image: cr5,
      description: "Fostering mindful, healthy workplaces through tailored wellness solutions.",
    }
  ];

  // Card component
  const Card = ({ title, image, description }) => (
    <div className="bg-white rounded-xl border border-[#F4AA41] overflow-hidden shadow-md h-full flex flex-col">
      <img
        src={image}
        alt={title}
        className="w-full  object-cover"
      />
      <div className="p-0 text-center">
        <div className="flex flex-col items-center mb-0">
          <h3 className="font-bold text-lg sm:text-xl md:text-2xl"><span className="text-amber-500 text-xl sm:text-2xl md:text-3xl font-bold mb-0">weEvolve </span>{title}</h3>
        </div>
        <p className="p-1 pb-2 md:p-1 mb-0 md:mb-1 text-gray-600 text-sm sm:text-base md:text-base leading-[1.2] sm:leading-relaxed">
          {description}
        </p>

      </div>

    </div>
  );

  // teamm
  const [activeTeamMember, setActiveTeamMember] = useState(null);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [sectionInView, setSectionInView] = useState(false);
  const carouselContainerRef = useRef(null);
  const sectionRef = useRef(null);

  const staffProfiles = [
    {
      name: "Dr. Pramod Joshi",
      title: "Senior Advisor",
      image: pramodjoshi
    },
    {
      name: "Raj Bangalore",
      title: "Chief Marketing Officer",
      image: raj
    },
    {
      name: "Rajeev Jaiswal",
      title: "Chief Technology Officer",
      image: rajeev
    },
  ];

  useEffect(() => {
    const handleScreenResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    handleScreenResize();
    window.addEventListener('resize', handleScreenResize);

    return () => {
      window.removeEventListener('resize', handleScreenResize);
    };
  }, []);

  // Intersection Observer setup to detect when section is in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSectionInView(true);
          // Once triggered, we can disconnect the observer
          observer.disconnect();
        }
      },
      {
        root: null, // viewport
        threshold: 0.8, // trigger when 20% of element is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  const goToNextSlide = () => {
    setActiveSlideIndex((prevIndex) =>
      prevIndex === staffProfiles.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevSlide = () => {
    setActiveSlideIndex((prevIndex) =>
      prevIndex === 0 ? staffProfiles.length - 1 : prevIndex - 1
    );
  };

  const handleTeamMemberClick = (index) => {
    setActiveTeamMember(activeTeamMember === index ? null : index);
  };



  //  review

  const [count, setCount] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prevCount => prevCount >= 999 ? 1 : prevCount + 1);
    }, 500); // Change number every half second

    return () => clearInterval(interval);
  }, []);

  const [activeTexts, setActiveTexts] = useState({});
  const [scrollPositions, setScrollPositions] = useState({
    row1: 0,
    row2: 0
  });
  const [textScale, setTextScale] = useState(1);

  // Collection of testimonial texts to cycle through
  const testimonialTexts = {
    1: ["Very helpful!", "Incredible service!", "Absolutely amazing!"],
    4: ["Truly calming!", "So peaceful!", "Mind-blowing!"],
    6: ["Soul nourishing!", "Spirit lifting!", "Heart warming!"],
    8: ["Life changing!", "Transformative!", "Revolutionary!"],
    11: ["Great experience!", "Wonderful time!", "Exceptional quality!"],
    12: ["Deeply healing!", "Remarkably soothing!", "Profoundly relaxing!"]
  };

  // Map for image references
  const userImages = {
    // First row
    1: user1,
    2: user2,
    3: user3,
    4: user4,
    5: user5,
    6: user6,
    // Second row
    7: user7,
    8: user8,
    9: user9,
    10: user10,
    11: user11,
    12: user12,
    13: user13,
    14: user14
  };

  // Constants for scrolling animation
  const SCROLL_SPEED_ROW1 = 0.5; // Pixels per frame
  const SCROLL_SPEED_ROW2 = 0.7; // Different speed for second row for visual interest

  useEffect(() => {
    // Initialize active texts
    const initialTexts = {};
    Object.keys(testimonialTexts).forEach(key => {
      initialTexts[key] = 0;
    });
    setActiveTexts(initialTexts);

    // Set up text rotation and zoom effect
    const textRotationInterval = setInterval(() => {
      // Change text content
      setActiveTexts(prev => {
        const newTexts = { ...prev };
        Object.keys(testimonialTexts).forEach(key => {
          const currentIndex = prev[key];
          const nextIndex = (currentIndex + 1) % testimonialTexts[key].length;
          newTexts[key] = nextIndex;
        });
        return newTexts;
      });

      // Start text zoom animation
      setTextScale(0.85); // Start with shrinking
      setTimeout(() => setTextScale(1.15), 300); // Then grow larger than normal
      setTimeout(() => setTextScale(1), 600); // Return to normal size
    }, 3000); // Change texts every 3 seconds

    // Calculate total width of a set of items for proper infinite scrolling
    const calculateSetWidth = () => {
      const isMobile = window.innerWidth <= 640;
      const itemWidth = isMobile ? 120 : 180; // Base width
      const margin = 8; // mx-2 = 8px total (4px on each side)
      const itemsPerSet = 6; // 6 items in a set
      return (itemWidth + margin) * itemsPerSet;
    };

    // Set up improved continuous scrolling animation
    const scrollAnimationFrame = () => {
      setScrollPositions(prev => {
        const setWidth = calculateSetWidth();

        // Update scroll position for each row
        let row1Pos = prev.row1 - SCROLL_SPEED_ROW1;
        let row2Pos = prev.row2 - SCROLL_SPEED_ROW2;

        // Create true infinite scroll effect by resetting position
        // when a complete set has scrolled by
        if (Math.abs(row1Pos) >= setWidth) {
          row1Pos = 0;
        }

        if (Math.abs(row2Pos) >= setWidth) {
          row2Pos = 0;
        }

        return {
          row1: row1Pos,
          row2: row2Pos
        };
      });

      scrollAnimationId = requestAnimationFrame(scrollAnimationFrame);
    };

    // Start the scrolling animation
    let scrollAnimationId = requestAnimationFrame(scrollAnimationFrame);

    return () => {
      clearInterval(textRotationInterval);
      cancelAnimationFrame(scrollAnimationId);
    };
  }, []);

  // Get the current text for a testimonial
  const getCurrentText = (id) => {
    if (!testimonialTexts[id] || activeTexts[id] === undefined) return "";
    return testimonialTexts[id][activeTexts[id]];
  };

  // Custom CSS for text zoom animation
  const textZoomStyle = {
    transform: `scale(${textScale})`,
    transition: 'transform 0.3s ease-out'
  };

  // Function to check if an index should be positioned up or down
  const shouldShowUp = (index) => index % 2 === 0;

  // Style for the scrolling rows
  const getRowScrollStyle = (rowNum) => ({
    transform: `translateX(${rowNum === 1 ? scrollPositions.row1 : scrollPositions.row2}px)`,
    transition: 'transform 0.05s linear', // Smoother animation
    display: 'flex',
    flexWrap: 'nowrap'
  });

  // Render a single item with alternating position
  const renderItem = (itemNum, dupIndex = 0) => {
    const isUp = shouldShowUp(itemNum);
    const offsetClass = isUp ? 'translate-y-0' : 'translate-y-8';
    const key = `item${itemNum}-dup${dupIndex}`;

    return (
      <div
        key={key}
        className={`relative w-28 sm:w-36 md:w-44 flex-shrink-0 mx-2 transition-all duration-500 transform ${offsetClass}`}
      >
        <img
          src={userImages[itemNum]}
          alt={`Person ${itemNum}`}
          className="object-cover w-full rounded-lg shadow-sm aspect-square"
        />

        {testimonialTexts[itemNum] && (
          <div
            className={`absolute -left-8 sm:-left-10 ${isUp ? 'top-3' : 'bottom-3'} bg-white px-2 sm:px-3 py-2 border-2  border-[#F4AA44] rounded-tl-lg rounded-br-lg shadow-md text-xs sm:text-sm md:text-base font-bold z-50 
            opacity-100 transition-all duration-500 delay-100`}
            style={textZoomStyle}
          >
            {getCurrentText(itemNum) || "Amazing!"}
          </div>
        )}
      </div>
    );
  };

  // Create continuous row of duplicated items
  const createContinuousRow = (startItem, endItem) => {
    const items = [];

    // Create several complete sets to ensure the row is always filled
    for (let dup = 0; dup < 4; dup++) {
      for (let i = startItem; i <= endItem; i++) {
        items.push(renderItem(i, dup));
      }
    }

    return items;
  };


  // xyz
  // State for window width for responsiveness
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);



  // team members

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const sliderRef = useRef(null);

  // Check if we're on mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto-slide on mobile
  useEffect(() => {
    if (isMobile) {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev === teamMembers.length - 1 ? 0 : prev + 1));
      }, 3000);

      return () => clearInterval(timer);
    }
  }, [isMobile]);

  // Team members data with fun names
  const teamMembers = [
    {
      id: 1,
      name: 'Roshni Andotra',
      role: 'HR & Operations Lead',
      image: roshni
    },
    {
      id: 2,
      name: 'Tejal Nagrale',
      role: 'UI UX Designer',
      image: tejal
    },
    {
      id: 3,
      name: 'Snehraj Bose',
      role: 'Video Editor',
      image: snehraj
    },
    {
      id: 4,
      name: 'Vidya Gadkari ',
      role: 'Graphic Designer',
      image: vidhya
    },
    {
      id: 5,
      name: 'Ajay Ladi',
      role: 'Software Developer',
      image: ajay
    },
    {
      id: 6,
      name: 'Harshada Patil',
      role: 'Digital Marketing',
      image: harshada
    },
    {
      id: 7,
      name: 'Sanjay Badhwar',
      role: 'Admintration Officer ',
      image: sanjay
    },
    {
      id: 8,
      name: 'Abhishek Ranjan',
      role: 'SEO Engineer',
      image: abhishekh
    },

  ];

  // First row: 5 members, Second row: 4 members
  const firstRow = teamMembers.slice(0, 5);
  const secondRow = teamMembers.slice(5);

  // Mobile slider navigation
  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? teamMembers.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === teamMembers.length - 1 ? 0 : prev + 1));
  };


  // nesletter
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle submission logic here
    console.log('Email submitted:', email);
    alert('Thank you for joining our waiting list!');
    setEmail('');
  };
  return (
    <div>
      {/* nav */}
      <nav
        className={`fixed top-0 z-50 flex items-center justify-between w-full h-[80px] px-4 sm:px-8 md:px-14 lg:px-32 py-4 font-medium shadow-none transition-all duration-300 ${scrolled ? 'bg-white text-black shadow-md' : 'bg-transparent text-white'
          }`}
      >
        {/* Logo - Left */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="WeEvolve Logo"
            className="h-16 border-1 sm:border sm:border-yellow-500 rounded-lg"
          />
        </div>


        {/* Spacer */}
        <div className="flex-grow"></div>

        {/* Desktop Nav - Right */}
        <div className="items-center justify-end hidden space-x-12 text-lg font-semibold md:flex">
          <a href="#home" onClick={(e) => scrollToSections(e, 'home')} className="hover:text-yellow-600">
            Home
          </a>
          <a href="#about" onClick={(e) => scrollToSections(e, 'about')} className="hover:text-yellow-600">
            About Us
          </a>
          <a href="#contact" onClick={(e) => scrollToSections(e, 'contact')} className="hover:text-yellow-600">
            Contact Us
          </a>

          {/* Language Selector */}
          <div className="relative">
            <button
              onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
              className={`flex items-center px-3 py-2 rounded hover:bg-purple-100 transition-colors duration-300 ${scrolled ? 'text-black' : 'text-white'
                }`}
            >
              <span className={`${scrolled ? 'text-black' : 'text-white'}`}>En</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`w-4 h-4 ml-1 ${scrolled ? 'text-black' : 'text-white'}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>


            {isLangMenuOpen && (
              <div className="absolute right-0 z-20 w-32 py-1 mt-2 text-white bg-black rounded-md shadow-lg bg-opacity-90">
                <button onClick={() => changeLanguage('en')} className="block w-full px-4 py-2 text-sm text-left hover:bg-yellow-800">
                  English
                </button>
                <button onClick={() => changeLanguage('hi')} className="block w-full px-4 py-2 text-sm text-left hover:bg-yellow-800">
                  हिंदी
                </button>
                <button onClick={() => changeLanguage('mr')} className="block w-full px-4 py-2 text-sm text-left hover:bg-yellow-800">
                  मराठी
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <button
            className="p-2 text-[#F4AA41] bg-white border border-[#F4AA41] rounded-md"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {/* Mobile Drawer */}
        <div
          className={`md:hidden fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 p-6 transition-transform duration-300 ease-in-out z-50 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          <button
            className="absolute p-2 text- bg-white border border-white rounded-md top-5 right-5"
            onClick={() => setIsOpen(false)}
          >
            <X size={28} />
          </button>

          <div className="flex flex-col items-start pl-4 mt-12 space-y-6 text-white">
            <a href="#home" onClick={(e) => scrollToSections(e, 'home')} className="text-xl">Home</a>
            <a href="#about" onClick={(e) => scrollToSections(e, 'about')} className="text-xl">About Us</a>
            <a href="#contact" onClick={(e) => scrollToSections(e, 'contact')} className="text-xl">Contact Us</a>

            <div className="flex justify-start w-full pt-4 pl-4 border-t border-purple-300">
              <div className="flex mt-4 space-x-4">
                <button onClick={() => changeLanguage('en')} className={`px-3 py-1 rounded ${language === 'en' ? 'bg-white text-black' : 'bg-purple-700 text-white'}`}>
                  English
                </button>
                <button onClick={() => changeLanguage('hi')} className={`px-3 py-1 rounded ${language === 'hi' ? 'bg-white text-black' : 'bg-purple-700 text-white'}`}>
                  हिंदी
                </button>
                <button onClick={() => changeLanguage('mr')} className={`px-3 py-1 rounded ${language === 'mr' ? 'bg-white text-black' : 'bg-purple-700 text-white'}`}>
                  मराठी
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* carosoul */}
      {/* Hero Section with Improved Video Background */}
      <div className="relative h-screen w-full overflow-hidden bg-black">
        {/* Video section */}
        <div className="absolute inset-0 z-0">
          <div
            className="relative h-full w-full overflow-hidden will-change-transform"
            style={{
              transform: `translateY(${videoRevealed ? '0' : '-100%'})`,
              transition: 'transform 2s cubic-bezier(0.16, 1, 0.3, 1)'  // Expo easing function
            }}
          >
            {/* Dark overlay */}
            <div className="absolute inset-0 z-10 bg-black opacity-50"></div>

            {/* Video with optimized rendering */}
            <video
              ref={videoRef}
              autoPlay
              muted
              loop
              playsInline
              className="absolute w-full h-full object-cover"
              style={{ transform: 'translate3d(0,0,0)' }}
            >
              <source src={well} type="video/mp4" />
            </video>
          </div>
        </div>

        {/* SUPER-SMOOTHED CONTENT BACKGROUND ANIMATION */}
        <div
          className="absolute bottom-0 left-0 right-0 bg-white will-change-transform"
          style={{
            height: contentRevealed ? '36%' : '0%',
            transform: `translateY(${contentRevealed ? '0' : '100%'})`,
            transition: 'transform 0.9s cubic-bezier(0.16, 1, 0.3, 1), height 0.9s cubic-bezier(0.16, 1, 0.3, 1)',
            opacity: 1
          }}
        ></div>

        {/* Navigation Tabs */}
        <div
          className="absolute left-0 right-0 z-30 flex justify-center will-change-transform"
          style={{
            bottom: contentRevealed ? '37%' : '-50px',
            transform: contentRevealed ? 'translateY(0)' : 'translateY(20px)',
            opacity: contentRevealed ? 1 : 0,
            transition:
              'bottom 0.9s cubic-bezier(0.16, 1, 0.3, 1), transform 0.9s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.6s ease-in',
            transitionDelay: '0.1s'
          }}
        >
          <div className="flex flex-wrap justify-center gap-1 sm:gap-2 md:gap-3 py-2 px-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  navigateToSection(item.id);
                }}
                className={`relative py-1 px-2 sm:py-2 sm:px-3 text-gray-800 bg-white border border-gray-300 rounded-lg font-medium text-xs sm:text-sm md:text-base
        transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg hover:bg-[#f6d6aa] hover:border-yellow-500`}
              >
                <span>{item.name}</span>
                {activeTab === item.id && (
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-yellow-600 rounded-b-md"></div>
                )}
              </button>
            ))}
          </div>
        </div>


        {/* SUPER-SMOOTHED CONTENT ANIMATION */}
        <div
          className="absolute bottom-0 left-0 right-0 z-25 flex flex-col items-center justify-center will-change-transform"
          style={{
            height: contentRevealed ? '35%' : '0%',
            transform: contentRevealed ? 'translateY(0)' : 'translateY(40px)',
            opacity: contentRevealed ? 1 : 0,
            transition: 'transform 1s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.8s ease-in',
            transitionDelay: '0.2s',
            overflow: 'hidden',
            pointerEvents: contentRevealed ? 'auto' : 'none'
          }}
        >
          <div className="w-full max-w-7xl text-center mx-auto px-4">
            {/* Content with staggered animations */}
            <div className="overflow-hidden">
              <h2
                className="my-0 md:mb-0 text-[28px] sm:text-xl md:text-3xl lg:text-[44px] font-medium text-gray-800 transform will-change-transform"
                style={{
                  opacity: contentRevealed ? 1 : 0,
                  transform: contentRevealed ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.6s ease-in',
                  transitionDelay: '0.3s'
                }}
              >
                Welcome to
              </h2>
            </div>

            <div className="overflow-hidden">
              <h1
                className="-mt-2 md:mt-0 md:mb-1 py-0 md:py-3 text-[28px] leading-[32px] tracking-[0.04em] text-[#F4AA41] font-bold text-center sm:text-2xl md:text-4xl lg:text-4xl xl:text-[40px] 2xl:text-[50px] transform will-change-transform"
                style={{
                  opacity: contentRevealed ? 1 : 0,
                  transform: contentRevealed ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.6s ease-in',
                  transitionDelay: '0.4s'
                }}
              >
                World's Largest Health & Wellness Universe
              </h1>
            </div>

            <div className="overflow-hidden">
              <p
                className="mb-3 md:mb-5 text-[15px] leading-[24px] tracking-[0.04em] text-gray-700 font-light text-center sm:text-sm md:text-lg lg:text-[35px] transform will-change-transform"
                style={{
                  opacity: contentRevealed ? 1 : 0,
                  transform: contentRevealed ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.6s ease-in',
                  transitionDelay: '0.5s'
                }}
              >
                Empowering you to manifest your best life.
              </p>
            </div>

            <div className="overflow-hidden">
              <button
                id="connectNowBtn"
                className="mt-2 mb-5 px-8 py-2 sm:px-10 sm:py-3 bg-[#F4AA41] text-white font-semibold rounded-lg shadow-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 transform will-change-transform"
                style={{
                  opacity: contentRevealed ? 1 : 0,
                  transform: contentRevealed ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.6s ease-in',
                  transitionDelay: '0.6s'
                }}
              >
                Connect Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div id="counselling" className="relative bg-white text-center w-full overflow-hidden px-4">
        {/* Title with Background Image */}
        <div className="relative flex justify-center items-center py-8 sm:py-8 md:py-10 lg:py-16">
          <img
            src={Vector}
            alt="Background Infinity"
            className="
      absolute 
      w-[194px] h-[100px] 
      sm:w-24 sm:h-24 
      md:w-72 md:h-24 
      lg:w-[330px] lg:h-24 
      xl:w-[350px] xl:h-[170px] 
      object-contain
    "
          />
          <h2
            className="
      text-center 
      font-roboto font-bold text-gray-900 
      max-w-[90%] md:max-w-2xl lg:max-w-3xl mx-auto
      text-[24px] leading-[30px] tracking-wide
      sm:text-[28px] sm:leading-[36px]
      md:text-[32px] md:leading-[38px]
      lg:text-[38px] lg:leading-[44px]
      xl:text-[48px] xl:leading-[54px]
    "
          >
            Our Counselling Services
          </h2>
        </div>

        {/* Subtitle */}
        <p className="text-[20px] sm:text-lg md:text-lg lg:text-xl xl:text-[38px] font-semibold text-gray-900">
          "Talk it out. Heal within"
        </p>
        <p
          className="my-1 md:my-3 text-[18px] leading-[24px] tracking-[0.04em] text-gray-700 font-light text-center sm:text-base md:text-lg lg:text-[30px] transform will-change-transform"
          style={{
            opacity: contentRevealed ? 1 : 0,
            transform: contentRevealed ? 'translateY(0)' : 'translateY(20px)',
            transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.6s ease-in',
            transitionDelay: '0.5s'
          }}
        >
          Professional therapies for your mind, heart, and soul.
        </p>
      </div>

      {/* Counselling */}
      <div className="w-full py-2 bg-white">
        <div className="">
          {/* <h1 className="text-2xl md:text-5xl text-center font-bold text-[#7A29A6] mb-8">Counselling Services</h1> */}
          {/* First Row - Sliding Left */}
          <div className="mb-4 overflow-hidden">
            <div
              ref={row1Ref}
              className="flex gap-6"
              onMouseEnter={() => setIsHoveredRow1(true)}
              onMouseLeave={() => setIsHoveredRow1(false)}
              onTouchStart={() => setIsPausedRow1(true)}
              onTouchEnd={() => setIsPausedRow1(false)}
            >
              {duplicatedRow1.map((service, index) => (
                <div
                  key={`${service.id}-${index}`}
                  className="flex-shrink-0 my-2 w-80 sm:w-80 md:w-96 lg:w-[420px] xl:w-[480px] h-40 md:h-56 rounded-2xl overflow-hidden shadow-sm relative border-2 border-[#e7a03c]"
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="absolute inset-0 object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 transition-all duration-300 bg-gradient-to-r">
                    <div className="flex flex-col h-full p-4 text-left my-5 md:p-6">
                      <h2 className="mb-1 text-xl font-bold text-white md:text-2xl md:mb-1">{service.title}</h2>
                      <p className="w-[80%] md:w-[70%] text-sm md:text-base text-white text-opacity-90 line-clamp-6 md:line-clamp-6">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Second Row - Sliding Right */}
          <div className="overflow-hidden">
            <div
              ref={row2Ref}
              className="flex gap-6"
              onMouseEnter={() => setIsHoveredRow2(true)}
              onMouseLeave={() => setIsHoveredRow2(false)}
              onTouchStart={() => setIsPausedRow2(true)}
              onTouchEnd={() => setIsPausedRow2(false)}
            >
              {duplicatedRow2.map((service, index) => (
                <div
                  key={`${service.id}-${index}`}
                  className="flex-shrink-0 mb-5 w-80 sm:w-80 md:w-96 lg:w-[420px] xl:w-[480px] h-40 md:h-56 rounded-2xl overflow-hidden shadow-lg relative border-2 border-[#e09a38]"
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="absolute inset-0 object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 transition-all duration-300 bg-gradient-to-l">
                    <div className="flex flex-col h-full p-4 text-left my-5 md:p-6 ">
                      <h2 className="mb-1 text-xl font-bold text-white md:text-2xl md:mb-1">{service.title}</h2>
                      <p className="w-[80%] md:w-[70%] text-sm md:text-base text-white text-opacity-90 line-clamp-6 md:line-clamp-6">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* product */}
      <div className="w-full py-12 mx-auto">

        <div id="counselling" className="relative bg-white text-center w-full overflow-hidden px-4">
          {/* Title with Background Image */}
          <div className="relative flex justify-center items-center py-8 sm:py-8 md:py-10 lg:py-16">
            <img
              src={Vector}
              alt="Background Infinity"
              className="
      absolute 
      w-[194px] h-[100px] 
      sm:w-24 sm:h-24 
      md:w-72 md:h-24 
      lg:w-[330px] lg:h-24 
      xl:w-[350px] xl:h-[170px] 
      object-contain
    "
            />
            <h2
              className="
      text-center 
      font-roboto font-bold text-gray-900 
      max-w-[90%] md:max-w-2xl lg:max-w-3xl mx-auto
      text-[24px] leading-[30px] tracking-wide
      sm:text-[28px] sm:leading-[36px]
      md:text-[32px] md:leading-[38px]
      lg:text-[38px] lg:leading-[44px]
      xl:text-[48px] xl:leading-[54px]
    "
            >
              Our products
            </h2>
          </div>

          {/* Subtitle */}
          <p className="text-[20px] sm:text-lg md:text-lg lg:text-xl xl:text-[38px] font-semibold text-gray-900">
            "This is for you - Because we care beyond the conversation."
          </p>
          <p
            className="my-1 md:my-3 text-[18px] leading-[24px] tracking-[0.04em] text-gray-700 font-light text-center sm:text-base md:text-lg lg:text-[30px] transform will-change-transform"
            style={{
              opacity: contentRevealed ? 1 : 0,
              transform: contentRevealed ? 'translateY(0)' : 'translateY(20px)',
              transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.6s ease-in',
              transitionDelay: '0.5s'
            }}
          >
            From comfort wear to calming rituals, everything here is chosen with you in mind.
          </p>
        </div>

        {/* Inject custom CSS */}
        <style dangerouslySetInnerHTML={{ __html: customStyles }} />

        {/* Slider Container */}
        <div
          ref={sliderRef}
          className="relative w-full py-6 overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Desktop View - Full width row of items */}
          <div className="items-center justify-center hidden w-full gap-4 md:flex h-96">
            {visibleProducts.map((product, idx) => {
              const actualIdx = startIdx + idx;
              const styles = getItemStyle(actualIdx);

              return (
                <div
                  key={`${product.id}-${actualIdx}`}
                  className={`relative ${styles.size} ${styles.scale} ${styles.opacity} ${styles.zIndex} 
                ${styles.transform} ${styles.transition} ${styles.animation} ${styles.shadow}
                cursor-pointer rounded-lg`}
                  onClick={() => { setActiveIndex(actualIdx); handleUserInteraction(); }}
                >
                  <div className={`absolute inset-0 rounded-lg ${product.color} overflow-hidden`}>
                    <img
                      src={product.image}
                      alt={product.title}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black/70 to-transparent">
                      <h3 className={`${actualIdx === safeActiveIndex ? 'text-xl' : 'text-lg'} font-bold text-white transition-all duration-300`}>
                        {product.title}
                      </h3>
                      <p className={`${actualIdx === safeActiveIndex ? 'text-sm' : 'text-xs'} text-white/90 mt-1 transition-all duration-300`}>
                        {product.description}
                      </p>
                    </div>
                  </div>
                  {/* Highlight effect when active */}
                  {actualIdx === safeActiveIndex && (
                    <div className="absolute inset-0 border-2 border-[#F4AA41] rounded-lg animate-pulse"></div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Mobile View - Enhanced with animations */}
          <div className="relative flex items-center justify-center md:hidden h-96">
            {/* Previous Card (Left Side) */}
            <div
              className={`absolute z-10 w-56 overflow-hidden rounded-lg shadow-lg cursor-pointer h-80 
            slide-transition ${getMobileCardStyle('prev')}
            ${isTransitioning ? 'opacity-60 -translate-x-28' : 'opacity-60 -translate-x-20'}`}
              onClick={() => { moveBackward(); handleUserInteraction(); }}
            >
              <div className={`absolute inset-0 ${prevProduct.color}`}>
                <img
                  src={prevProduct.image}
                  alt={prevProduct.title}
                  className="object-cover w-full h-full transition-transform duration-500 ease-in-out"
                />
              </div>
            </div>

            {/* Current Card (Center) */}
            <div
              className={`z-30 w-64 overflow-hidden rounded-lg shadow-xl h-96 slide-transition
            ${getMobileCardStyle('current')}
            ${isTransitioning ? 'scale-95 opacity-90' : 'scale-100 opacity-100 animate-float'}`}
            >
              <div className={`absolute inset-0 ${currentProduct.color}`}>
                <img
                  src={currentProduct.image}
                  alt={currentProduct.title}
                  className=" w-full h-full"
                />
                <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black/70 to-transparent">
                  <h3 className="text-xl font-bold text-white">{currentProduct.title}</h3>
                  <p className="mt-1 text-sm text-white/90">{currentProduct.description}</p>
                </div>
              </div>
              {/* Subtle glow effect on active card */}
              <div className="absolute inset-0 rounded-lg shadow-inner ring-2 ring-white/30"></div>
            </div>

            {/* Next Card (Right Side) */}
            <div
              className={`absolute z-10 w-56 overflow-hidden rounded-lg shadow-lg cursor-pointer h-80
            slide-transition ${getMobileCardStyle('next')}
            ${isTransitioning ? 'opacity-60 translate-x-28' : 'opacity-60 translate-x-20'}`}
              onClick={() => { moveForward(); handleUserInteraction(); }}
            >
              <div className={`absolute inset-0 ${nextProduct.color}`}>
                <img
                  src={nextProduct.image}
                  alt={nextProduct.title}
                  className="object-cover w-full h-full transition-transform duration-500 ease-in-out"
                />
              </div>
            </div>

            {/* Visual direction indicators for mobile with animations */}
            <button
              className="absolute left-0 z-40 p-2 text-white transition-all duration-300 transform -translate-y-1/2 rounded-full bg-black/30 top-1/2 backdrop-blur-sm hover:bg-black/50"
              onClick={() => { moveBackward(); handleUserInteraction(); }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              className="absolute right-0 z-40 p-2 text-white transition-all duration-300 transform -translate-y-1/2 rounded-full bg-black/30 top-1/2 backdrop-blur-sm hover:bg-black/50"
              onClick={() => { moveForward(); handleUserInteraction(); }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Pagination Indicators - Enhanced with animations */}
        {/* <div className="flex justify-center gap-2 mt-6">
          {products.map((_, index) => {
            // Convert to original product index for highlighting the correct dot
            const originalIndex = ((safeActiveIndex % products.length) + products.length) % products.length;
            const isActive = originalIndex === index;

            return (
              <button
                key={index}
                className={`rounded-full transition-all duration-300 ${isActive ? 'bg-[#F4AA41] w-6 h-3' : 'bg-gray-300 w-3 h-3 hover:bg-gray-400'}`}
                onClick={() => {
                  setActiveIndex(products.length + index);
                  handleUserInteraction();
                }}
              />
            );
          })}
        </div> */}
      </div>


      {/* courses */}


      <div id="counselling" className="relative bg-white text-center w-full overflow-hidden px-4">
        {/* Title with Background Image */}
        <div className="relative flex justify-center items-center py-8 sm:py-8 md:py-10 lg:py-14">
          <img
            src={Vector}
            alt="Background Infinity"
            className="
      absolute 
      w-[194px] h-[100px] 
      sm:w-24 sm:h-24 
      md:w-72 md:h-24 
      lg:w-[330px] lg:h-24 
      xl:w-[350px] xl:h-[170px] 
      object-contain
    "
          />
          <h2
            className="
      text-center 
      font-roboto font-bold text-gray-900 
      max-w-[90%] md:max-w-2xl lg:max-w-4xl mx-auto
      text-[24px] leading-[30px] tracking-wide
      sm:text-[28px] sm:leading-[36px]
      md:text-[32px] md:leading-[38px]
      lg:text-[38px] lg:leading-[44px]
      xl:text-[38px] xl:leading-[54px]
    "
          >
            “Explore. Experience. Evolve with <span className=" text-[#F4AA41]">WeEvolve</span>.”
          </h2>
        </div>

        {/* Subtitle */}

        <p
          className="my-1 md:my-1 pb-5 text-[18px] leading-[24px] tracking-[0.04em] text-gray-700 font-light text-center sm:text-base md:text-lg lg:text-[30px] transform will-change-transform"
          style={{
            opacity: contentRevealed ? 1 : 0,
            transform: contentRevealed ? 'translateY(0)' : 'translateY(20px)',
            transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.6s ease-in',
            transitionDelay: '0.5s'
          }}
        >
          From personal growth to global journeys — our wellness experiences are made for you.
        </p>
      </div>

      <div className="w-full h-full mx-auto px-4 sm:px-8 md:px-14 lg:px-32 py-4">
        {/* First row - 2 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <Card {...cards[0]} />
          <Card {...cards[1]} />
        </div>

        {/* Second row - 2 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <Card {...cards[2]} />
          <Card {...cards[3]} />
        </div>

        {/* Third row - 1 centered card */}
        <div className="grid grid-cols-1 mb-6">
          <div className="md:w-1/2 w-full mx-auto">
            <Card {...cards[4]} />
          </div>
        </div>
      </div>



      {/* about us */}

      <div id="counselling" className="relative bg-white text-center w-full overflow-hidden px-4">
        {/* Title with Background Image */}
        <div className="relative flex justify-center items-center py-8 sm:py-8 md:py-10 lg:py-16 ">
          <img
            src={Vector}
            alt="Background Infinity"
            className="
      absolute 
      w-[194px] h-[100px] 
      sm:w-24 sm:h-24 
      md:w-72 md:h-24 
      lg:w-[330px] lg:h-24 
      xl:w-[350px] xl:h-[170px] 
      object-contain
    "
          />
          <h2
            className="
      text-center 
      font-roboto font-bold text-gray-900 
      max-w-[90%] md:max-w-2xl lg:max-w-3xl mx-auto
      text-[24px] leading-[30px] tracking-wide
      sm:text-[28px] sm:leading-[36px]
      md:text-[32px] md:leading-[38px]
      lg:text-[38px] lg:leading-[44px]
      xl:text-[48px] xl:leading-[54px]
    "
          >
            Who are we ?
          </h2>
        </div>


        <p
          className="my-1 md:my-0 pb-5 text-[18px] leading-[24px] tracking-[0.04em] text-gray-700 font-light text-center sm:text-base md:text-lg lg:text-[30px] transform will-change-transform"
          style={{
            opacity: contentRevealed ? 1 : 0,
            transform: contentRevealed ? 'translateY(0)' : 'translateY(20px)',
            transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.6s ease-in',
            transitionDelay: '0.5s'
          }}
        >
          The soul of WeEVOLVE
        </p>
      </div>

      <div className="flex flex-col md:flex-row w-full h-[924px]">
        {/* Left Text Side */}
        <div className="bg-[#F4AA41] flex flex-col justify-center w-full rounded-tr-none md:rounded-tr-3xl px-4 sm:px-8 md:px-14 lg:px-24 py-4 sm:py-6 md:py-12 md:w-1/2">
          <p className="text-black text-center md:text-left text-base md:text-3xl mb-6 md:pl-10">
            <strong className="text-white">WeEvolve</strong> is a global platform that bridges the gap between wellness professionals
            (healers, therapists, and educators) and individuals seeking healing, growth, and personal development.
          </p>
          <p className="text-black text-center md:text-left text-base md:text-3xl mb-6 md:pl-10">
            <strong className="text-white">Our Vision</strong> is to become the leading global platform that empowers both wellness professionals
            and seekers, promoting holistic well-being, growth, and learning for all.
          </p>
          <p className="text-black text-center md:text-left text-base md:text-3xl md:pl-10">
            <strong className="text-white">Our Mission</strong> is to create a holistic ecosystem that connects wellness professionals and seekers,
            fostering meaningful relationships, educational opportunities, and personal transformation through cutting-edge
            technology and innovation.
          </p>
        </div>


        {/* Right Image Side */}
        <div className="md:w-1/2 w-full rounded-tl-none md:rounded-tl-3xl relative">
          <img
            src={ceo}
            alt="WeEvolve Mission"
            className="w-full h-full object-cover rounded-tl-none md:rounded-tl-3xl"
          />
          <div className="absolute bottom-5 w-full text-center">
            <h2 className="text-white font-bold text-2xl md:text-3xl lg:text-[38px] drop-shadow-lg mb-0 md:mb-4">Nehha Lohiya</h2>
            <p className="text-white text-lg md:text-lg lg:text-[28px] drop-shadow-lg">CEO & Founder</p>

          </div>
        </div>

      </div>


      {/* team section */}
      <div className="w-full px-4 py-0 md:py-12 mt-2 md:mt-0 bg-white" ref={sectionRef}>
        <div className="mx-auto max-w-7xl">
          <div>
            <div id="counselling" className="relative bg-white text-center w-full overflow-hidden px-4">
              {/* Title with Background Image */}
              <div className="relative flex justify-center items-center py-8 sm:py-8 md:py-10 lg:py-8 ">
                <h2
                  className="
              text-center 
              font-roboto font-bold text-gray-900 
              max-w-[90%] md:max-w-2xl lg:max-w-4xl mx-auto
              text-[24px] leading-[30px] tracking-wide
              sm:text-[28px] sm:leading-[36px]
              md:text-[32px] md:leading-[38px]
              lg:text-[38px] lg:leading-[44px]
              xl:text-[38px] xl:leading-[54px]
            "
                >
                  The Faces where Care Meets Expertise
                </h2>
              </div>

              <p
                className="my-1 md:my-0 pb-8 text-xl leading-[24px] tracking-[0.04em] text-black font-semibold text-center sm:text-lg md:text-lg lg:text-[30px]"
              >
                Board Members
              </p>
            </div>
          </div>

          {/* Desktop View */}
          {/* Desktop View */}
          <div className="hidden md:block">
            <div className="flex flex-wrap justify-center gap-5">
              {staffProfiles.map((profile, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center w-72 cursor-pointer"  // Increased width
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  onClick={() => handleTeamMemberClick(index)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: sectionInView ? index * 0.1 : 0 }}
                >
                  <div className="mb-4 overflow-hidden transition-shadow rounded-lg shadow-md hover:shadow-xl">
                    <img
                      src={profile.image}
                      alt={profile.name}
                      className="object-contain w-full h-auto sm:w-52 md:w-60 lg:w-64 rounded-lg"  // Increased image height
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-center text-black">
                    {profile.name}
                  </h3>
                  <p className="text-sm text-center text-black">
                    {profile.title}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>


          {/* Updated Mobile View - No Animation, Full Size Images */}
          <div className="md:hidden">
            <div className="flex flex-col items-center space-y-15">
              {staffProfiles.map((profile, index) => (
                <div
                  key={index}
                  className="flex flex-col mb-5 items-center w-full cursor-pointer"
                  onClick={() => handleTeamMemberClick(index)}
                >
                  <div className="mb-4 overflow-hidden rounded-lg shadow-md">
                    <img
                      src={profile.image}
                      alt={profile.name}
                      className="w-full object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-center text-black">
                    {profile.name}
                  </h3>
                  <p className="text-sm text-center text-black">
                    {profile.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>


      {/* team members */}
      <div className="w-full py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="relative text-center w-full overflow-hidden">
            {/* Title with Background Image */}
            <p
              className="my-1 md:my-0 pb-10 text-2xl leading-[28px] tracking-[0.04em] text-black font-semibold text-center md:text-2xl lg:text-[30px] transform will-change-transform"
              style={{
                opacity: contentRevealed ? 1 : 0,
                transform: contentRevealed ? 'translateY(0)' : 'translateY(20px)',
                transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.6s ease-in',
                transitionDelay: '0.5s'
              }}
            >
              Our Team
            </p>
          </div>

          {/* Desktop/Tablet View: Two rows grid - 4 members each row */}
          <div className="hidden sm:block">
            {/* First row - 4 members */}
            <div className="flex justify-center px-2 md:px-4 mb-8">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-0 w-full justify-items-center">
                {teamMembers.slice(0, 4).map((member) => (
                  <div
                    key={member.id}
                    className="overflow-hidden transition-transform duration-300 hover:-translate-y-2 w-full max-w-xs"
                  >
                    <div className="overflow-hidden flex justify-center">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="object-contain w-full h-auto sm:w-52 md:w-60 lg:w-60 rounded-lg"
                      />
                    </div>
                    <div className="p-2 text-center">
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                      <p className="text-gray-600 text-sm sm:text-base mb-2">{member.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Second row - 4 members */}
            <div className="flex justify-center px-2 md:px-4">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-0 w-full justify-items-center">
                {teamMembers.slice(4).map((member) => (
                  <div
                    key={member.id}
                    className="overflow-hidden transition-transform duration-300 hover:-translate-y-2 w-full max-w-xs"
                  >
                    <div className="overflow-hidden flex justify-center">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="object-contain w-full h-auto sm:w-52 md:w-60 lg:w-60 rounded-lg"
                      />
                    </div>
                    <div className="p-2 text-center">
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                      <p className="text-gray-600 text-sm sm:text-base mb-2">{member.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>


          {/* Mobile View: Slider with larger images */}
          <div className="sm:hidden">
            <div className="relative" ref={sliderRef}>
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {teamMembers.map((member) => (
                    <div
                      key={member.id}
                      className="w-full flex-shrink-0 px-2"
                    >
                      <div className="overflow-hidden flex justify-center">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="object-contain w-full h-auto max-w-64 rounded-lg"
                        />
                      </div>
                      <div className="p-2 text-center mt-2">
                        <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                        <p className="text-gray-600 text-base mb-2">{member.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Slider Controls */}
              <div className="flex justify-center mt-6 gap-3">
                {/* <button
                  onClick={handlePrev}
                  className="p-3 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors"
                  aria-label="Previous team member"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                  </svg>
                </button> */}

                <div className="flex items-center gap-2">
                  {teamMembers.map((_, index) => (
                    <span
                      key={index}
                      className={`block h-3 w-3 rounded-full cursor-pointer ${currentSlide === index ? 'bg-[#F4aa41]' : 'bg-gray-300'}`}
                      onClick={() => setCurrentSlide(index)}
                      aria-label={`Go to team member ${index + 1}`}
                    ></span>
                  ))}
                </div>

                {/* <button
                  onClick={handleNext}
                  className="p-3 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors"
                  aria-label="Next team member"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* review */}
      <div id="counselling" className="relative bg-white text-center w-full overflow-hidden px-4">
        {/* Title with Background Image */}
        <div className="relative flex justify-center items-center py-8 sm:py-8 md:py-10 lg:py-16">
          <img
            src={Vector}
            alt="Background Infinity"
            className="
      absolute 
      w-[194px] h-[100px] 
      sm:w-24 sm:h-24 
      md:w-72 md:h-24 
      lg:w-[330px] lg:h-24 
      xl:w-[350px] xl:h-[170px] 
      object-contain
    "
          />
          <h2 className="text-center font-bold text-gray-900 max-w-[90%] md:max-w-2xl lg:max-w-3xl mx-auto
      text-[24px] leading-[30px] tracking-wide
      sm:text-[28px] sm:leading-[36px]
      md:text-[32px] md:leading-[38px]
      lg:text-[38px] lg:leading-[44px]
      xl:text-[38px] xl:leading-[54px]">
            Over <span className="text-[#F4AA41]">50,000{count.toString().padStart(3, '0')}</span> family and counting
          </h2>
        </div>


      </div>

      <div className="w-full p-4 pt-5 md:pt-10 bg-white py-0 sm:py-6 md:py-0 overflow-hidden">
        {/* First row container */}
        <div className="w-full overflow-hidden mb-8 sm:mb-10 pb-10">
          <div style={getRowScrollStyle(1)} className="flex">
            {createContinuousRow(1, 6)}
          </div>
        </div>

        {/* Second row container */}
        <div className="w-full overflow-hidden pb-10">
          <div style={getRowScrollStyle(2)} className="flex">
            {createContinuousRow(7, 12)}
          </div>
        </div>
      </div>

      {/* Newsletter */}

      <section
        ref={contactRef}
        id="contact"
        className="w-full relative overflow-hidden"
      >
        <div className="w-full relative">
          {/* Background image with responsive height adjustments */}
          <div className="relative w-full h-[500px] sm:h-[550px] md:h-[600px] lg:h-[650px]">
            <img
              src={footer}
              alt="Spiritual counseling with astrology chart"
              className="w-full h-full absolute inset-0 object-cover"
            />

            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/60 flex items-center justify-center">
              <div className="px-4 sm:px-6 py-10 sm:py-12 md:py-16 text-center w-full max-w-4xl mx-auto">
                {/* Infinity symbol with responsive sizing */}
                {/* <div className="text-amber-200/30 text-5xl sm:text-6xl md:text-8xl font-bold mb-2">∞</div> */}

                {/* Main heading with improved responsive text sizes */}
                <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 pt-8 mb-5 sm:mb-8">
                  <span className="block sm:inline">World's Largest</span>{" "}
                  <span className="block sm:inline">Wellness Universe is</span>
                  <span className="block text-5xl sm:text-4xl md:text-5xl lg:text-6xl mt-1 sm:mt-2">
                    Coming Soon..
                  </span>
                </h1>

                {/* Subheading */}
                <h2 className="text-lg sm:text-xl md:text-3xl font-bold text-gray-800 mb-0 sm:mb-1">
                  Join our waiting list &
                </h2>

                {/* Description text */}
                <p className="text-sm sm:text-base md:text-xl text-gray-900 mb-6 sm:mb-8">
                  Signup Below to receive updates and to be notified when we launch!
                </p>

                {/* Form with responsive width and better mobile display */}
                <form
                  onSubmit={handleSubmit}
                  className="flex w-full max-w-xs sm:max-w-sm md:max-w-2xl mx-auto"
                  style={{
                    boxShadow: "-4px 6px 5px rgba(0, 0, 0, 0.2)"
                  }}
                >
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 min-w-0 px-3 sm:px-4 py-2 sm:py-3 border border-black rounded-l-md focus:outline-none text-sm sm:text-base"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button
                    className="bg-[#F4AA41] hover:bg-amber-600 text-white border border-black p-2 sm:p-3 rounded-r-md flex items-center justify-center flex-shrink-0"
                    type="submit"
                    aria-label="Submit"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="white" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sm:w-5 sm:h-5">
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* Curved transition - two halves with rounded corners that overlap the video */}
        <div className="absolute bottom-0 left-0 right-0 w-full z-10">

          <div className="flex w-full">
            {/* Left half with top-right rounded corner */}
            <div className="w-1/2 h-6 bg-white rounded-tr-full"></div>

            {/* Right half with top-left rounded corner */}
            <div className="w-1/2 h-6 bg-white rounded-tl-full"></div>
          </div>
        </div>
      </section>


      {/* redy to evolve */}
      <div className="relative flex items-center justify-center min-h-[30vh] md:min-h-[60vh] bg-white px-4 md:px-8 lg:px-16 overflow-hidden">
        <img
          src={Vector}
          alt="Spiritual counseling with astrology chart"
          className="absolute inset-0 mx-auto my-auto w-[300px] sm:w-[400px] md:w-[400px] lg:w-[650px] h-auto object-contain"
        />
        <div className="relative text-center z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[75px] font-bold text-black leading-tight">
            Ready to Evolve?
          </h1>
          <p className="mt-3 sm:mt-4 text-sm sm:text-lg md:text-xl lg:text-3xl w-[300px] sm:w-[400px] md:w-[500px] lg:w-[750px] text-gray-700 leading-[1.6]">
            <span className="font-bold text-black">Manifest Your Best Life</span> with best Counsellors, Healers, Therapist, Coaches, Educators, Services, Products, Retreats, Festivals, Courses, Corporate wellness programs, Community.
          </p>

        </div>
      </div>




      {/* cta and chatbot */}
      <div className="fixed bottom-0 left-0 z-50 w-full px-4 py-4 sm:px-6 md:px-10 sm:py-6 md:py-8">
        <div className="flex items-center justify-between w-full">
          {/* CTA Button - Left */}
          {/* <button className="bg-[#7A29A6] hover:bg-[#43195a] border border-[#F4AA41] text-[#F4AA41] font-semibold py-2 px-4 sm:py-3 sm:px-6 rounded-full shadow-lg transition text-sm sm:text-base">
            Know yourself better
          </button> */}

          {/* Chatbot Button - Right */}
          {/* <div className="fixed z-50 right-4 bottom-4">
            <button className="border border-[#F4AA41] bg-[#ffffff] hover:bg-[#2c103b] text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shadow-lg transition">
              <img src={Vector} className="h-4 w-7" alt="chatbot" />
            </button>
          </div> */}

        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#F4AA41] text-black">
        <div className="container py-14 mx-auto px-4 sm:px-8 md:px-14 lg:px-28">
          <div className="flex flex-col items-start justify-between md:flex-row">
            <div className="flex items-center px- py-2 space-x-4 md:py-0">
              <img src={logo} alt="WeEvolve Logo" className="h- md:h-32" />
            </div>

            <div className="mb-6 text-left md:mb-0">
              <div className="flex items-center mb-2">
                <MapPin size={18} className="mr-2" />
                <span>411, Westport, Pancard Rd, Baner, Pune</span>
              </div>
              <div className="flex items-center mb-2">
                <Phone size={18} className="mr-2" />
                <span>+91 9822020540</span>
              </div>
              <div className="flex items-center mb-4">
                <Globe size={18} className="mr-2" />
                <span>WeEvolve.ai</span>
              </div>
              <div className="flex space-x-4 pb-5">
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-200">
                  <Facebook size={20} />
                </a>
                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-200">
                  <Linkedin size={20} />
                </a>
                <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-200">
                  <Youtube size={20} />
                </a>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-200">
                  <Instagram size={20} />
                </a>
                <a href="https://www.pinterest.com/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-200">
                  <FaPinterest size={20} />
                </a>
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-200">
                  <X size={20} />
                </a>
                <a href="https://www.threads.net/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-200">
                  <FaThreads size={20} />
                </a>
              </div>

            </div>

            <div className="text-left">
              <h3 className="mb-2 text-lg font-semibold">Subscribe to WeEvolve Newsletters</h3>
              <div className="flex"
                style={{
                  boxShadow: "0px 4px 5px rgba(0, 0, 0, 0.3)"
                }}
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-64 px-4 py-2 text-gray-800 rounded-l focus:outline-none"
                />
                <button className="bg-[#F4AA41] border border-white  hover:bg-purple-800 text-white p-3 rounded-r-md flex items-center justify-center"
                >
                  <Play size={20} fill="white" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="px-6 py-4 md:px-16">
          <div className="container flex flex-col justify-between mx-auto md:flex-row items-center md:items-center">
            <div className="mb-2 text-sm md:mb-0">
              © 2025 ABC. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="hover:text-purple-200">Terms</a>
              <a href="#" className="hover:text-purple-200">Privacy</a>
              <a href="#" className="hover:text-purple-200">Cookies</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  )
}

export default Home