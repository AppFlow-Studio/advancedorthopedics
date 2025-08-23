'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Logo from "../public/newlogo4.png"
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { cn } from "@/lib/utils"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { clinics } from './data/clinics';
import { SidebarNavItem } from './SidebarNavItem';
import { House, Heart, Calendar, User, Eye, Scan, Stethoscope, CheckCircle, Shield, LucideFileText, Target, Activity, Zap, Circle, AlertCircle, Minus, Triangle, Settings, Headphones, Building, Users, HelpCircle, FileText, MapPin, Bone, Footprints, Scissors, Droplet, Info, List, ChevronRight } from 'lucide-react';

function NavLink({ href, title, screen, pathname, sublinks, short_desc }: {
  href: string;
  title: string,
  screen: string,
  pathname: string,
  sublinks: {
    title: string,
    href: string,
    short_desc: string,
    subLinks: {
      title: string,
      href: string,
      short_desc: string,
      icon: React.ComponentType<any>
    }[],
    icon: React.ComponentType<any>
  }[],
  short_desc: string
}) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedSubLink, setSelectedSubLink] = React.useState<{
    title: string,
    href: string,
    short_desc: string,
    subLinks: {
      title: string,
      href: string,
      short_desc: string,
      icon: React.ComponentType<any>
    }[],
    icon: React.ComponentType<any>
  } | null>(null);

  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger
        className={`${pathname === screen ? 'text-[#0094E0]' : 'text-[#022968]'} hover:text-[#0094E0] bg-transparent border transition-colors duration-300`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
      </NavigationMenuTrigger>
      <NavigationMenuContent className='grid gap-2 md:w-[400px] lg:max-w-200 lg:w-fit lg:grid-cols-[.8fr_1fr]'
        style={{
          background: 'rgba(239, 245, 255, 0.50)',
          border: '1px solid white',
          borderRadius: '8px',
          backdropFilter: 'blur(20px)'
        }}
      >
        <ul className='flex flex-col w-100'>
          {
            sublinks.map((link, linkIndex) => {
              const IconComponent = link.icon;
              return (
                <li key={`${link.title}-${linkIndex}`}>
                  {link.subLinks.length == 0 ? (
                    <NavigationMenuLink asChild className='flex flex-row items-center gap-x-4'>
                      <Link href={link.title == 'Florida' ? '#' : link.href} className='w-full block px-4 py-2 flex-row items-center justify-between'>
                        <div className='flex flex-row items-center gap-x-4'>
                          <div className='p-2 rounded-2xl border aspect-square flex items-center justify-center'>
                            <IconComponent className='w-8 h-8 text-[#022968]' />
                          </div>
                          <div className='flex flex-col gap-y-2'>
                            <span
                              style={{
                                fontFamily: "var(--font-public-sans)",
                                fontWeight: 400,
                              }}
                            >
                              {link.title}
                            </span>
                            <span className='text-sm text-gray-500'>{link.short_desc}</span>
                          </div>
                        </div>
                        <ChevronRight className='w-4 h-4 text-[#022968]' />
                      </Link>
                    </NavigationMenuLink>
                  ) : (
                    <Link
                      href={link.href}
                      className="w-full text-left px-4 py-2 hover:bg-white/50 transition-colors duration-200 rounded-lg flex flex-row items-center gap-x-4"
                      onMouseEnter={() => setSelectedSubLink(link)}
                    >
                      <div className='p-2 rounded-2xl border aspect-square flex items-center justify-center'>
                        <IconComponent className='w-4 h-4 text-[#022968]' />
                      </div>
                      <div className='flex flex-col gap-y-2'>
                        <span
                          style={{
                            fontFamily: "var(--font-public-sans)",
                            fontWeight: 400,
                          }}
                        >
                          {link.title}
                        </span>
                        <span className='text-sm text-gray-500'>{link.short_desc}</span>
                      </div>
                    </Link>
                  )}
                </li>
              )
            })
          }
        </ul>

        {/* Right Panel for Nested SubLinks */}
        {selectedSubLink && (
          <div className='flex flex-col p-4 border-l lg:w-100'>
            {/* Header */}
            <div className='flex flex-row items-center gap-x-3 mb-4 pb-3 border-b'>
              <div className='p-2 rounded-2xl border aspect-square flex items-center justify-center'>
                <selectedSubLink.icon className='w-6 h-6 text-[#022968]' />
              </div>
              <div className='flex flex-col'>
                <span
                  style={{
                    fontFamily: "var(--font-public-sans)",
                    fontWeight: 600,
                  }}
                  className='text-[#022968]'
                >
                  {selectedSubLink.title}
                </span>
                <span className='text-sm text-gray-500'>{selectedSubLink.short_desc}</span>
              </div>
            </div>

            {/* SubLinks */}
            <div className='flex flex-col gap-y-2'>
              {selectedSubLink.subLinks.map((subLink, subIndex) => {
                const SubIconComponent = subLink.icon;
                return (
                  <NavigationMenuLink key={`${subLink.title}-${subIndex}`} asChild>
                    <Link href={subLink.href} className="block px-3 py-2 rounded-lg hover:bg-white/50 transition-colors duration-200">
                      <div className='flex flex-row items-center gap-x-3'>
                        <div className='p-1.5 rounded-xl border aspect-square flex items-center justify-center'>
                          <SubIconComponent className='w-4 h-4 text-[#022968]' />
                        </div>
                        <div className='flex flex-col'>
                          <span
                            style={{
                              fontFamily: "var(--font-public-sans)",
                              fontWeight: 400,
                            }}
                            className='text-[#022968]'
                          >
                            {subLink.title}
                          </span>
                          <span className='text-xs text-gray-500'>{subLink.short_desc}</span>
                        </div>
                      </div>
                    </Link>
                  </NavigationMenuLink>
                );
              })}
            </div>
          </div>
        )}
      </NavigationMenuContent>
    </NavigationMenuItem>
  )
}


const NavBarLinks = [
  {
    href: '/',
    screen: '/',
    title: 'HOME',
    short_desc: 'Welcome to our practice',
    icon: House,
    subLinks: [
      {
        title: 'Condition Check',
        href: '/condition-check',
        short_desc: 'Check your symptoms',
        icon: Stethoscope,
        subLinks: []
      },
    ]
  },
  {
    href: '/find-care/book-an-appointment',
    screen: '/find-care',
    title: 'FIND CARE',
    short_desc: 'Get the care you need',
    icon: Heart,
    subLinks: [
      {
        title: 'Book An Appointment',
        href: '/find-care/book-an-appointment',
        short_desc: 'Schedule your visit',
        icon: Calendar,
        subLinks: []
      },
      {
        title: 'Find A Doctor',
        href: '/find-care/find-a-doctor',
        short_desc: 'Meet our specialists',
        icon: User,
        subLinks: []
      },
      {
        title: 'Get a Second Opinion',
        href: '/find-care/second-opinion',
        short_desc: 'Expert second opinion',
        icon: Eye,
        subLinks: []
      },
      {
        title: 'Get a Free MRI Review',
        href: '/find-care/free-mri-review',
        short_desc: 'Free MRI analysis',
        icon: Scan,
        subLinks: []
      },
      {
        title: 'Treatment Candidacy',
        href: '/find-care/candidacy-check',
        short_desc: 'Check if you qualify',
        icon: CheckCircle,
        subLinks: []
      },
      {
        title: 'Insurance Policy',
        href: '/insurance-policy',
        short_desc: 'Insurance information',
        icon: Shield,
        subLinks: []
      },
      {
        title: 'Patient Forms',
        href: '/patient-forms',
        short_desc: 'Download forms',
        icon: LucideFileText,
        subLinks: []
      }
    ]
  },
  {
    href: '/area-of-specialty',
    screen: '/area-of-specialty',
    title: 'AREA OF SPECIALTY',
    short_desc: 'Our treatment specialties',
    icon: Target,
    subLinks: [
      {
        title: 'Back Pain',
        href: `/area-of-specialty?data=${encodeURIComponent(JSON.stringify({ tags: ['Spine'] }))}`,
        short_desc: 'Spine and back care',
        icon: Activity,
        subLinks: [
          {
            title: 'Lower Back Pain',
            href: '/area-of-pain/back-pain/lower-back-pain',
            short_desc: 'Lower back treatment',
            icon: Zap,
          },
          {
            title: 'Degenerative Disc Disease',
            href: '/area-of-pain/back-pain/degenerative-disc-disease',
            short_desc: 'Disc degeneration care',
            icon: Circle,
          },
          {
            title: 'Lumbar Herniated Disc',
            href: '/area-of-pain/back-pain/lumbar-herniated-disc',
            short_desc: 'Herniated disc treatment',
            icon: AlertCircle,
          },
          {
            title: 'Foraminal Stenosis',
            href: '/area-of-pain/back-pain/foraminal-stenosis',
            short_desc: 'Nerve compression relief',
            icon: Minus,
          },
          {
            title: 'Sciatica',
            href: '/area-of-pain/back-pain/sciatica',
            short_desc: 'Sciatic nerve pain',
            icon: Zap,
          },
          {
            title: 'Coccydynia',
            href: '/area-of-pain/back-pain/coccydynia',
            short_desc: 'Tailbone pain relief',
            icon: Triangle,
          },
          {
            title: 'Back Pain Treament Options',
            href: '/area-of-pain/back-pain/back-pain-treatment-options',
            short_desc: 'Treatment solutions',
            icon: Settings,
          }
        ]
      },
      {
        title: 'Neck & Shoulder Pain',
        href: `/area-of-specialty?data=${encodeURIComponent(JSON.stringify({ tags: ['Neck', 'Shoulder'] }))}`,
        short_desc: 'Neck and shoulder care',
        icon: Headphones,
        subLinks: [
          {
            title: 'Cervical Spinal Stenosis',
            href: '/area-of-pain/neck-and-shoulder-pain/cervical-spinal-stenosis',
            short_desc: 'Neck stenosis treatment',
            icon: Minus,
          },
          {
            title: 'Cervical Herniated Disc',
            href: '/area-of-pain/neck-and-shoulder-pain/cervical-herniated-disc',
            short_desc: 'Neck disc herniation',
            icon: AlertCircle,
          },
          {
            title: 'Degenerative Disc Disease',
            href: '/area-of-pain/neck-and-shoulder-pain/degenerative-disc-disease',
            short_desc: 'Neck disc degeneration',
            icon: Circle,
          },
          {
            title: 'Arthritis',
            href: '/area-of-pain/neck-and-shoulder-pain/arthritis',
            short_desc: 'Arthritis management',
            icon: Bone,
          },
          {
            title: 'Pinched Nerve',
            href: '/area-of-pain/neck-and-shoulder-pain/pinched-nerve',
            short_desc: 'Nerve compression relief',
            icon: Zap,
          },
          {
            title: 'Neck and Shoulder Treatments',
            href: '/area-of-pain/neck-and-shoulder-pain/neck-and-shoulder-pain-treatment',
            short_desc: 'Treatment options',
            icon: Settings,
          }
        ]
      },
      {
        title: 'Foot & Ankle',
        href: `/area-of-specialty?data=${encodeURIComponent(JSON.stringify({ tags: ['Foot'] }))}`,
        short_desc: 'Foot and ankle care',
        icon: Footprints,
        subLinks: [
          {
            title: 'Bunions',
            href: '/area-of-pain/foot-pain/bunions-hallux-valgus',
            short_desc: 'Bunion treatment',
            icon: Circle,
          },
          {
            title: 'Plantar Fasciitis',
            href: '/area-of-pain/foot-pain/plantar-fasciitis',
            short_desc: 'Heel pain relief',
            icon: Zap,
          },
          {
            title: 'Achilles Tendonitis',
            href: '/area-of-pain/foot-pain/achilles-tendonitis',
            short_desc: 'Achilles tendon care',
            icon: Activity,
          },
          {
            title: 'Flat Feet',
            href: '/area-of-pain/foot-pain/flat-feet',
            short_desc: 'Flat feet correction',
            icon: Footprints,
          },
          {
            title: 'Ankle Arthroscopy',
            href: '/area-of-pain/foot-pain/ankle-arthroscopy',
            short_desc: 'Minimally invasive surgery',
            icon: Scissors,
          },
          {
            title: 'Hammertoes',
            href: '/area-of-pain/foot-pain/hammer-toes',
            short_desc: 'Toe deformity correction',
            icon: Circle,
          },
          {
            title: 'Diabetic Foot Ulcers',
            href: '/area-of-pain/foot-pain/diabetic-foot-ulcers',
            short_desc: 'Diabetic foot care',
            icon: Droplet,
          },
          {
            title: 'Ankle Replacement',
            href: '/area-of-pain/foot-pain/ankle-replacement',
            short_desc: 'Joint replacement surgery',
            icon: Settings,
          }
        ]
      },
      {
        title: 'View All Conditions',
        href: '/area-of-specialty',
        short_desc: 'Browse all conditions',
        icon: List,
        subLinks: []
      },
      {
        title: 'View All Treatments',
        href: '/treatments',
        short_desc: 'All treatment options',
        icon: Settings,
        subLinks: []
      }

    ]
  },
  {
    href: '/about',
    screen: '/about',
    title: 'ABOUT',
    short_desc: 'Learn about our practice',
    icon: Info,
    subLinks: [
      {
        title: 'About Mountain Spine',
        href: '/about',
        short_desc: 'Our story and mission',
        icon: Building,
        subLinks: []
      },
      {
        title: 'Meet our Doctors',
        href: '/about/meetourdoctors',
        short_desc: 'Our expert physicians',
        icon: Users,
        subLinks: []
      },
      {
        title: 'FAQs',
        href: '/about/FAQs',
        short_desc: 'Frequently asked questions',
        icon: HelpCircle,
        subLinks: []
      },
      {
        title: "Blogs",
        href: '/blogs',
        short_desc: 'Health and wellness articles',
        icon: FileText,
        subLinks: []
      }
    ]
  },
  {
    href: '/locations',
    screen: '/locations',
    title: 'LOCATION',
    short_desc: 'Find our locations',
    icon: MapPin,
    subLinks: clinics.map((clinic) => {
      return {
        title: clinic.name.split('Mountain Spine & Orthopedics')[1],
        href: `/locations/${clinic.slug}`,
        short_desc: 'Visit our clinic',
        icon: Building,
        subLinks: []
      }
    })
  },

]

const HamburgerIcon = ({ open, ...props }: { open: boolean } & React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="28" // Increased size slightly
    height="28"
    viewBox="0 0 22 22"
    fill="none"
    stroke="currentColor" // Use currentColor to inherit text color
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {open ? (
      <> {/* X icon */}
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </>
    ) : (
      <> {/* Hamburger icon */}
        <path d="M20.333 17.2913C20.816 17.2915 21.2078 17.6833 21.208 18.1663C21.208 18.6495 20.8161 19.0411 20.333 19.0413H1.66602C1.18277 19.0413 0.791016 18.6496 0.791016 18.1663C0.791191 17.6832 1.18287 17.2913 1.66602 17.2913H20.333ZM20.333 9.12531C20.8161 9.12548 21.208 9.51716 21.208 10.0003C21.2078 10.4833 20.816 10.8751 20.333 10.8753H1.66602C1.18288 10.8753 0.791192 10.4834 0.791016 10.0003C0.791016 9.51706 1.18277 9.12531 1.66602 9.12531H20.333ZM13.333 0.958313C13.8161 0.958488 14.208 1.35017 14.208 1.83331C14.208 2.31645 13.8161 2.70814 13.333 2.70831H1.66602C1.18277 2.70831 0.791016 2.31656 0.791016 1.83331C0.791016 1.35006 1.18277 0.958313 1.66602 0.958313H13.333Z" fill="#4CC2FF" />
      </>
    )}
  </svg>
);

export default function NavBar() {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // <-- State for sidebar
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);
  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 flex justify-center self-center lg:py-10 py-1 rounded-b-xl max-h-[128px] lg:h-[60px] transition-all duration-200 ${isScrolled ? '' : 'bg-transparent'}`}>
        <nav className="flex justify-between items-center w-full max-w-[1440px] px-6 md:px-[40px] py-2 z-[1]">
          <Link href={'/'} className='flex flex-row items-center justify-center space-x-[8px] '>
            <Image src={Logo} alt="Mountain Spine & Orthopedics Logo" className="max-h-[80px] lg:h-[80px] lg:w-auto w-10 h-10  " />
            <div className='w-[1px] h-[35px] bg-gradient-to-b from-transparent via-gray-50 to-transparnet' />
            <div className="flex flex-col text-white"
              style={{
                fontFamily: "var(--font-public-sans)",
                fontSize: "16px",
                lineHeight: "24px",
                letterSpacing: "0.02em",
              }}
            >
              <span className="md:text-lg text-mdfont-[600]">MOUNTAIN</span>
              <span className="font-[600] text-xs"> SPINE & ORTHOPEDICS</span>
            </div>
          </Link>

          <NavigationMenu className="space-x-8 text-[16px] font-semibold items-center justify-center z-1 xl:flex hidden" viewport={false}>

            <NavigationMenuList className=''>
              {
                NavBarLinks.map((link, index) => (
                  <NavLink key={index} screen={link.screen} href={link.href} sublinks={link.subLinks} title={link.title} short_desc={link.short_desc} pathname={pathname} />
                ))
              }
            </NavigationMenuList>

          </NavigationMenu>

          <button
            className={`xl:hidden text-[#4CC2FF] flex p-2 z-50 ml-6  bg-white rounded-xl backdrop-blur-3xl ${isSidebarOpen ? 'hidden' : ''}`}   //ml-auto pushes it right if space allows
            onClick={toggleSidebar}
            aria-label="Toggle menu"
            aria-expanded={isSidebarOpen}
            aria-controls="mobile-sidebar"  //Should match sidebar id
          >
            <HamburgerIcon open={isSidebarOpen} />
          </button>

          <a href="tel:5612239959"
            className={` ${isSidebarOpen ? 'hidden' : 'sm:flex hidden'} group  h-[40px] px-[20px] rounded-[62px] relative z-50 items-center justify-between bg-[#022968] text-white text-[14px] font-semibold hover:cursor-pointer`}
            onClick={() => {
              if (typeof window !== "undefined" && window.dataLayer) {
                window.dataLayer.push({
                  event: 'call_click',
                  phone_number: '5612239959',
                  location: 'NavBar'
                });
              }
            }}
          >
            <p className=' group-hover:scale-[1.1] transition-all duration-300 ease-in-out'>Contact Us</p>
            <div className='pl-[10px] group-hover:translate-x-1 transition-all duration-300 ease-in-out'>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12" viewBox="0 0 18 12" fill="none">
                <path d="M12.3982 0.768483C12.0402 0.410504 11.4598 0.410506 11.1018 0.768488C10.7438 1.12647 10.7438 1.70687 11.1018 2.06485L14.1203 5.08333H1.66667C1.16041 5.08333 0.75 5.49374 0.75 6C0.75 6.50626 1.16041 6.91667 1.66667 6.91667H14.1203L11.1018 9.93516C10.7439 10.2931 10.7439 10.8735 11.1019 11.2315C11.4598 11.5895 12.0402 11.5895 12.3982 11.2315L16.9766 6.65303C16.9935 6.63637 17.0098 6.61905 17.0254 6.60112C17.0873 6.52997 17.1365 6.45154 17.1728 6.36885C17.2221 6.25677 17.2496 6.13294 17.25 6.00273L17.25 6C17.25 5.99717 17.25 5.99434 17.25 5.99152C17.2489 5.87623 17.2266 5.76602 17.1867 5.66463C17.142 5.55068 17.0736 5.44387 16.9815 5.35178L12.3982 0.768483Z" fill="#E5F6FF" />
              </svg>
            </div>
          </a>

        </nav>
      </header>

      {/* Overlay (Visible when sidebar is open, below xl) */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-30 xl:hidden" // Semi-transparent black
          onClick={closeSidebar} // Close sidebar when overlay is clicked
          aria-hidden="true"
        />
      )}


      {/* Sidebar Container */}
      <aside
        id="mobile-sidebar" // ID for aria-controls
        className={`fixed top-0 right-0 h-full w-full md:w-[65%] bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-40 xl:hidden ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full' // Slide in/out from right
          }`}
        aria-hidden={!isSidebarOpen} // Hide from screen readers when closed
      >
        <div className="p-6">
          <button
            className={`xl:hidden text-[#4CC2FF] flex p-2 z-50 mt-20 ml-auto bg-white rounded-xl backdrop-blur-3xl`}   //ml-auto pushes it right if space allows
            onClick={toggleSidebar}
            aria-label="Toggle menu"
            aria-expanded={isSidebarOpen}
            aria-controls="mobile-sidebar"  //Should match sidebar id
          >
            <HamburgerIcon open={isSidebarOpen} />
          </button>
        </div>

        {/* Sidebar Navigation Links */}
        <nav className="mt-16 flex flex-col space-y-4 px-6 pb-6 overflow-y-auto max-h-[calc(100vh-200px)]">
          {NavBarLinks.map((link, index) => {
            return (
              <SidebarNavItem
                key={`top-level-${index}`}
                item={link}
                pathname={pathname}
                closeSidebar={closeSidebar}
                level={0} // Start top-level items at level 0
              />
            )
          })
          }
          {/* Optional: Add Contact Us button in sidebar */}
          <a href="tel:5612239959"
            className="w-full mt-6 group hover:cursor-pointer max-h-[40px] h-full px-[20px] py-2 rounded-[62px] flex items-center justify-center bg-[#022968] text-white text-[14px] font-semibold"
            onClick={() => {
              if (typeof window !== "undefined" && window.dataLayer) {
                window.dataLayer.push({
                  event: 'call_click',
                  phone_number: '5612239959',
                  location: 'NavBar'
                });
              }
            }}
          >
            <p className=' group-hover:scale-[1.1] transition-all duration-300 ease-in-out'>Contact Us</p>
            <div className='pl-[10px] group-hover:translate-x-1 transition-all duration-300 ease-in-out'>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12" viewBox="0 0 18 12" fill="none">
                <path d="M12.3982 0.768483C12.0402 0.410504 11.4598 0.410506 11.1018 0.768488C10.7438 1.12647 10.7438 1.70687 11.1018 2.06485L14.1203 5.08333H1.66667C1.16041 5.08333 0.75 5.49374 0.75 6C0.75 6.50626 1.16041 6.91667 1.66667 6.91667H14.1203L11.1018 9.93516C10.7439 10.2931 10.7439 10.8735 11.1019 11.2315C11.4598 11.5895 12.0402 11.5895 12.3982 11.2315L16.9766 6.65303C16.9935 6.63637 17.0098 6.61905 17.0254 6.60112C17.0873 6.52997 17.1365 6.45154 17.1728 6.36885C17.2221 6.25677 17.2496 6.13294 17.25 6.00273L17.25 6C17.25 5.99717 17.25 5.99434 17.25 5.99152C17.2489 5.87623 17.2266 5.76602 17.1867 5.66463C17.142 5.55068 17.0736 5.44387 16.9815 5.35178L12.3982 0.768483Z" fill="#E5F6FF" />
              </svg>
            </div>
          </a>
        </nav>
      </aside>
    </>
  )
}


const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"




