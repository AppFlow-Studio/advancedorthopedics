'use client'
import React from 'react'
import Image from 'next/image'
import Logo from "../public/logo.png"
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { cn } from "@/lib/utils"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

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

function NavLink({ href, title, screen, pathname, sublinks }: { href: string; title: string, screen : string, pathname : string, sublinks : {title : string, href : string, subLinks: {title : string, href : string}[] }[] }) {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  // Use Navigation Menu Shadcn

  return (
     <NavigationMenuItem className='relative'>
        <NavigationMenuTrigger
         className={`${pathname === screen ? "text-[#022968] rounded-[24px] bg-[rgba(239,245,255,0.5)] backdrop-blur-[50px] px-[22px] py-[11px] font-[500px] border" : "text-black font-[400px] "} hover:text-[#022968] transition-colors text-[16px] text-center `}
         style={{
          border : 1,
          borderStyle : pathname === screen ? 'solid' : 'none',
          borderColor : pathname === screen ? 'white' : ''
        }}
        >
          <Link href={href}
          >
            <h1 
            style={{
                fontFamily: "var(--font-reem-kufi)",
                fontWeight: 500,
                fontSize: "16px",
                lineHeight: "24px",
                letterSpacing: "0.02em",
            }}
            >
              {title}
            </h1>
          </Link>
        </NavigationMenuTrigger>
        <NavigationMenuContent 
          
          className=" absolute "
          style={{
            background : 'rgba(239, 245, 255, 0.50)',
            border: '1px solid white',
            borderRadius : '8px',
            backdropFilter : 'blur(10px)'
          }}
        >
          <ul className=' flex flex-col'>
            {
              sublinks.map((link) => {
                return (    
                    <NavigationMenuLink key={link.title}  href={link.href} className='w-full'>
                          {
                          link.subLinks.length == 0 ? 
                          <h1 
                          style={{
                                fontFamily: "var(--font-reem-kufi)",
                                fontWeight: 400,
                            }}
                            >{link.title}
                          </h1>
                          :
                          <HoverCard>
                            <HoverCardTrigger>
                                <h1 
                              style={{
                                    fontFamily: "var(--font-reem-kufi)",
                                    fontWeight: 400,
                                }}
                                >{link.title}
                              </h1>
                            </HoverCardTrigger>
                            <HoverCardContent side='right'
                            sideOffset={18}
                            align="start"
                            popover='auto'
                            className="flex flex-col p-0 w-max justify-center"
                            style={{
                              background : 'rgba(239, 245, 255, 0.50)',
                              border: '1px solid white',
                              borderRadius : '8px',
                              backdropFilter : 'blur(10px)'
                            }}
                            >
                                {
                                  link.subLinks.map((sub_link) => (
                                    <NavigationMenuLink className='' href={sub_link.href}>
                                      <h1 
                                      style={{
                                            fontFamily: "var(--font-reem-kufi)",
                                            fontWeight: 400,
                                        }}
                                        >{sub_link.title}
                                      </h1>
                                    </NavigationMenuLink>
                                  ))
                                }
                            </HoverCardContent>
                          </HoverCard>
                        }
                  </NavigationMenuLink>         
              )})
            }
          </ul>
        </NavigationMenuContent>
     </NavigationMenuItem>
  )
}


const NavBarLinks = [
  {
    href : '/',
    screen : '/',
    title : 'HOME',
    subLinks : [       
      {
        title : 'Condition Check',
        href : '/condition-check',
        subLinks : []
      },
    ]
  },
  {
    href : '/find-care',
    screen : '/find-care',
    title : 'FIND CARE',
    subLinks : [
      {
        title : 'Book An Appointment',
        href : '/find-care/book-an-appointment',
        subLinks : []
      },
      {
        title : 'Find A Doctor',
        href : '/find-care/find-a-doctor',
        subLinks : []
      },
      {
        title : 'Get a Second Opinion',
        href : '/find-care/second-opinion',
        subLinks : []
      },
      {
        title : 'Get a Free MRI Review',
        href : '/find-care/free-mri-review',
        subLinks : []
      },
      {
        title : 'Treatment Candidacy',
        href : '/find-care/candidacy-check',
        subLinks : []
      },
      {
        title : 'Insurance Policy',
        href : '/insurance-policy',
        subLinks : []
      },
      {
        title : 'Patient Forms',
        href : '/patient-forms',
        subLinks : []
      }
    ]
  },
  {
    href : '/area-of-speciality',
    screen : '/area-of-speciality',
    title : 'AREA OF SPECIALITY',
    subLinks : [
      {
        title : 'Back Pain',
        href : '/area-of-speciality',
        subLinks : [
          {
            title : 'Lower Back Pain',
            href : '/area-of-pain/back-pain/lowerbackpain'
          },
          {
            title : 'Lumbar Herniated Disc',
            href : '/lumbarherniateddisc'
          },
          {
            title : 'Sciatica',
            href : '/area-of-pain/back-pain/sciatica'
          },
          {
            title : 'Coccydynia',
            href : '/area-of-pain/back-pain/coccydynia'
          },
          {
            title : 'Back Pain Treament Options',
            href : '/treatments'
          }
        ]
      },
      {
        title : 'Neck & Shoulder Pain',
        href : '/area-of-speciality',
        subLinks : [
          {
            title : 'Cervical Spinal Stenosis',
            href : '/area-of-pain/neck-and-shoulder-pain/cervicalspinalstenosis'
          },
          {
            title : 'Cervical Herniated Disc',
            href : '/area-of-pain/neck-and-shoulder-pain/cervicalherniateddisc'
          }
        ]
      },
      {
        title : 'View All Conditions',
        href : '/area-of-speciality',
        subLinks : []
      },
      {
        title : 'View All Treatments',
        href : '/treatments',
        subLinks : []
      }
      
    ]
  },
  {
    href : '/about',
    screen : '/about',
    title : 'ABOUT',
    subLinks : [
      {
        title : 'Meet our Doctors',
        href : '/about/meetourdoctors',
        subLinks : []
      },
      {
        title : 'FAQs',
        href : '/about/FAQs',
        subLinks : []
      },
      {
        title : "Blogs",
        href : '/blogs',
        subLinks : []
      }
    ]
  },
  {
    href : '/location',
    screen : '/location',
    title : 'LOCATION',
    subLinks : [
      
    ]
  },
  
]

export default function NavBar() {  
  const pathname = usePathname();
  return (
    <header className='fixed top-0 left-0 right-0 z-50 flex justify-center self-center mt-6 max-h-[128px] lg:h-[60px]'>
        <nav className="flex justify-between items-center w-full max-w-[1440px] px-[40px] py-2 z-[1]">
            <Link href={'/'} className='flex flex-row items-center justify-center space-x-[8px]'> 
                <Image src={Logo} alt="Advanced Orthopedics Logo" className="max-h-[32px] lg:h-[32px] w-auto  " />
                <div className='w-[1px] h-[35px] bg-gradient-to-b from-transparent via-gray-50 to-transparnet'/>
                <div className="flex flex-col text-white"
                style={{
                    fontFamily: "var(--font-reem-kufi)",
                    fontSize: "16px",
                    lineHeight: "24px",
                    letterSpacing: "0.02em",
                }}
                >
                    <h1 className="text-xl font-[600]">Advanced</h1>
                    <h2 className="font-[400] text-lg">Orthopedics</h2>    
                </div>
            </Link>

            <NavigationMenu className="flex space-x-8 text-[16px] font-semibold items-center justify-center z-1" viewport={false}>

              <NavigationMenuList>
                {
                  NavBarLinks.map((link, index) => (
                    <NavLink key={index} screen={link.screen} href={link.href} sublinks={link.subLinks} title={link.title} pathname={pathname} />
                  ))
                }
              </NavigationMenuList>
            
            </NavigationMenu>

            <button 
                className=" max-h-[40px] h-full px-[20px] rounded-[62px] relative flex items-center justify-between bg-[#022968] text-white text-[14px] font-semibold"
                
                >
                Contact Us
                <div className='pl-[10px]'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12" viewBox="0 0 18 12" fill="none">
                        <path d="M12.3982 0.768483C12.0402 0.410504 11.4598 0.410506 11.1018 0.768488C10.7438 1.12647 10.7438 1.70687 11.1018 2.06485L14.1203 5.08333H1.66667C1.16041 5.08333 0.75 5.49374 0.75 6C0.75 6.50626 1.16041 6.91667 1.66667 6.91667H14.1203L11.1018 9.93516C10.7439 10.2931 10.7439 10.8735 11.1019 11.2315C11.4598 11.5895 12.0402 11.5895 12.3982 11.2315L16.9766 6.65303C16.9935 6.63637 17.0098 6.61905 17.0254 6.60112C17.0873 6.52997 17.1365 6.45154 17.1728 6.36885C17.2221 6.25677 17.2496 6.13294 17.25 6.00273L17.25 6C17.25 5.99717 17.25 5.99434 17.25 5.99152C17.2489 5.87623 17.2266 5.76602 17.1867 5.66463C17.142 5.55068 17.0736 5.44387 16.9815 5.35178L12.3982 0.768483Z" fill="#E5F6FF"/>
                    </svg>
                </div>
            </button>


        </nav>
    </header>
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

// link.subLinks.length > 0 ?
//                     <DropdownMenuSub>
//                       <DropdownMenuSubTrigger >
//                         <Link href={link.href} className='w-full'>
//                           <h1 
//                           style={{
//                                 fontFamily: "var(--font-reem-kufi)",
//                                 fontWeight: 400,
//                             }}
//                             >{link.title}
//                           </h1>
//                         </Link>
//                       </DropdownMenuSubTrigger>
//                           <DropdownMenuPortal>
//                             <DropdownMenuSubContent>
//                               {
//                                 link.subLinks.map((sublink) => (
//                                   <DropdownMenuItem key={sublink.href}>
//                                     <Link href={sublink.href} className='w-full'>
//                                         <h1 
//                                         style={{
//                                               fontFamily: "var(--font-reem-kufi)",
//                                               fontWeight: 400,
//                                           }}
//                                           >{sublink.title}
//                                         </h1>
//                                       </Link>
//                                   </DropdownMenuItem>
//                                 ))
//                               }
//                             </DropdownMenuSubContent>
//                           </DropdownMenuPortal>
//                     </DropdownMenuSub>
//                   :