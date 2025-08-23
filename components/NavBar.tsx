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

function NavLink({ href, title, screen, pathname, sublinks }: { href: string; title: string, screen: string, pathname: string, sublinks: { title: string, href: string, subLinks: { title: string, href: string }[] }[] }) {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <NavigationMenuItem className='relative'>
      <NavigationMenuTrigger
        className={`${pathname.includes(screen) && screen != '/' ? "text-[#022968] rounded-[24px] bg-[rgba(239,245,255,1)] backdrop-blur-[50px] px-[22px] py-[11px] font-[500px] border" : "text-black font-[400px]"} hover:text-[#022968] transition-colors text-[16px] text-center bg-[rgba(239,245,255,0)]`}
        style={{
          border: 1,
          borderStyle: pathname.includes(screen) && screen != '/' ? 'solid' : 'none',
          borderColor: pathname.includes(screen) && screen != '/' ? 'white' : ''
        }}
      >
        <Link
          href={href}
          style={{
            fontFamily: "var(--font-public-sans)",
            fontWeight: 500, fontSize: "16px",
            lineHeight: "24px",
            letterSpacing: "0.02em",
          }}
        >
          {title}
        </Link>
      </NavigationMenuTrigger>
      <NavigationMenuContent
        className=" absolute "
        style={{
          background: 'rgba(239, 245, 255, 0.50)',
          border: '1px solid white',
          borderRadius: '8px',
          backdropFilter: 'blur(10px)'
        }}
      >
        <ul className=' flex flex-col'>
          {
            sublinks.map((link, linkIndex) => {
              return (
                <li key={`${link.title}-${linkIndex}`}>
                  {link.subLinks.length == 0 ? (
                    <NavigationMenuLink asChild>
                      <Link href={link.title == 'Florida' ? '#' : link.href} className='w-full block px-4 py-2'>
                        <span
                          style={{
                            fontFamily: "var(--font-public-sans)",
                            fontWeight: 400,
                          }}
                        >
                          {link.title}
                        </span>
                      </Link>
                    </NavigationMenuLink>
                  ) : (
                    <HoverCard>
                      <HoverCardTrigger asChild>
                        <button className="w-full text-left px-4 py-2">
                          <span
                            style={{
                              fontFamily: "var(--font-public-sans)",
                              fontWeight: 400,
                            }}
                          >
                            {link.title}
                          </span>
                        </button>
                      </HoverCardTrigger>
                      <HoverCardContent side='right'
                        sideOffset={18}
                        align="start"
                        className="flex flex-col p-0 w-max justify-center"
                        style={{
                          background: 'rgba(239, 245, 255, 0.50)',
                          border: '1px solid white',
                          borderRadius: '8px',
                          backdropFilter: 'blur(10px)'
                        }}
                      >
                        {
                          link.subLinks.map((sub_link, subIndex) => (
                            <NavigationMenuLink key={`${sub_link.title}-${subIndex}`} asChild>
                              <Link href={sub_link.href} className="block px-4 py-2">
                                <span
                                  style={{
                                    fontFamily: "var(--font-public-sans)",
                                    fontWeight: 400,
                                  }}
                                >
                                  {sub_link.title}
                                </span>
                              </Link>
                            </NavigationMenuLink>
                          ))
                        }
                      </HoverCardContent>
                    </HoverCard>
                  )}
                </li>
              )
            })
          }
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  )
}


const NavBarLinks = [
  {
    href: '/',
    screen: '/',
    title: 'HOME',
    subLinks: [
      {
        title: 'Condition Check',
        href: '/condition-check',
        subLinks: []
      },
    ]
  },
  {
    href: '/find-care/book-an-appointment',
    screen: '/find-care',
    title: 'FIND CARE',
    subLinks: [
      {
        title: 'Book An Appointment',
        href: '/find-care/book-an-appointment',
        subLinks: []
      },
      {
        title: 'Find A Doctor',
        href: '/find-care/find-a-doctor',
        subLinks: []
      },
      {
        title: 'Get a Second Opinion',
        href: '/find-care/second-opinion',
        subLinks: []
      },
      {
        title: 'Get a Free MRI Review',
        href: '/find-care/free-mri-review',
        subLinks: []
      },
      {
        title: 'Treatment Candidacy',
        href: '/find-care/candidacy-check',
        subLinks: []
      },
      {
        title: 'Insurance Policy',
        href: '/insurance-policy',
        subLinks: []
      },
      {
        title: 'Patient Forms',
        href: '/patient-forms',
        subLinks: []
      }
    ]
  },
  {
    href: '/area-of-specialty',
    screen: '/area-of-specialty',
    title: 'AREA OF SPECIALTY',
    subLinks: [
      {
        title: 'Back Pain',
        href: `/area-of-specialty?data=${encodeURIComponent(JSON.stringify({ tags: ['Spine'] }))}`,
        subLinks: [
          {
            title: 'Lower Back Pain',
            href: '/area-of-pain/back-pain/lower-back-pain'
          },
          {
            title: 'Degenerative Disc Disease',
            href: '/area-of-pain/back-pain/degenerative-disc-disease'
          },
          {
            title: 'Lumbar Herniated Disc',
            href: '/area-of-pain/back-pain/lumbar-herniated-disc'
          },
          {
            title: 'Foraminal Stenosis',
            href: '/area-of-pain/back-pain/foraminal-stenosis'
          },
          {
            title: 'Sciatica',
            href: '/area-of-pain/back-pain/sciatica'
          },
          {
            title: 'Coccydynia',
            href: '/area-of-pain/back-pain/coccydynia'
          },
          {
            title: 'Back Pain Treament Options',
            href: '/area-of-pain/back-pain/back-pain-treatment-options'
          }
        ]
      },
      {
        title: 'Neck & Shoulder Pain',
        href: `/area-of-specialty?data=${encodeURIComponent(JSON.stringify({ tags: ['Neck', 'Shoulder'] }))}`,
        subLinks: [
          {
            title: 'Cervical Spinal Stenosis',
            href: '/area-of-pain/neck-and-shoulder-pain/cervical-spinal-stenosis'
          },
          {
            title: 'Cervical Herniated Disc',
            href: '/area-of-pain/neck-and-shoulder-pain/cervical-herniated-disc'
          },
          {
            title: 'Degenerative Disc Disease',
            href: '/area-of-pain/neck-and-shoulder-pain/degenerative-disc-disease'
          },
          {
            title: 'Arthritis',
            href: '/area-of-pain/neck-and-shoulder-pain/arthritis'
          },
          {
            title: 'Pinched Nerve',
            href: '/area-of-pain/neck-and-shoulder-pain/pinched-nerve'
          },
          {
            title: 'Neck and Shoulder Treatments',
            href: '/area-of-pain/neck-and-shoulder-pain/neck-and-shoulder-pain-treatment'
          }
        ]
      },
      {
        title: 'Foot & Ankle',
        href: `/area-of-specialty?data=${encodeURIComponent(JSON.stringify({ tags: ['Foot'] }))}`,
        subLinks: [
          {
            title: 'Bunions',
            href: '/area-of-pain/foot-pain/bunions-hallux-valgus'
          },
          {
            title: 'Plantar Fasciitis',
            href: '/area-of-pain/foot-pain/plantar-fasciitis'
          },
          {
            title: 'Achilles Tendonitis',
            href: '/area-of-pain/foot-pain/achilles-tendonitis'
          },
          {
            title: 'Flat Feet',
            href: '/area-of-pain/foot-pain/flat-feet'
          },
          {
            title: 'Ankle Arthroscopy',
            href: '/area-of-pain/foot-pain/ankle-arthroscopy'
          },
          {
            title: 'Hammertoes',
            href: '/area-of-pain/foot-pain/hammer-toes'
          },
          {
            title: 'Diabetic Foot Ulcers',
            href: '/area-of-pain/foot-pain/diabetic-foot-ulcers'
          },
          {
            title: 'Ankle Replacement',
            href: '/area-of-pain/foot-pain/ankle-replacement'
          }
        ]
      },
      {
        title: 'View All Conditions',
        href: '/area-of-specialty',
        subLinks: []
      },
      {
        title: 'View All Treatments',
        href: '/treatments',
        subLinks: []
      }

    ]
  },
  {
    href: '/about',
    screen: '/about',
    title: 'ABOUT',
    subLinks: [
      {
        title: 'About Mountain Spine',
        href: '/about',
        subLinks: []
      },
      {
        title: 'Meet our Doctors',
        href: '/about/meetourdoctors',
        subLinks: []
      },
      {
        title: 'FAQs',
        href: '/about/FAQs',
        subLinks: []
      },
      {
        title: "Blogs",
        href: '/blogs',
        subLinks: []
      }
    ]
  },
  {
    href: '/locations',
    screen: '/locations',
    title: 'LOCATION',
    subLinks: clinics.map((clinic) => {
      return {
        title: clinic.name.split('Mountain Spine & Orthopedics')[1],
        href: `/locations/${clinic.slug}`,
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
      <header className={`fixed top-0 left-0 right-0 z-50 flex justify-center self-center lg:py-10 py-1 rounded-b-xl max-h-[128px] lg:h-[60px] transition-all duration-200 ${isScrolled ? 'bg-gray-300/50 backdrop-blur-[80px] ' : 'bg-transparent'}`}>
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

            <NavigationMenuList>
              {
                NavBarLinks.map((link, index) => (
                  <NavLink key={index} screen={link.screen} href={link.href} sublinks={link.subLinks} title={link.title} pathname={pathname} />
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




