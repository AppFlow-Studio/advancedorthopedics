'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Logo from "../public/bluemountainspinelogo2.png"
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
import { GetLatestBlog } from "@/app/blogs/api/get-blogs";
import { SidebarNavItem } from './SidebarNavItem';
import { House, Heart, Calendar, User, Eye, Scan, Stethoscope, CheckCircle, Shield, LucideFileText, Target, Activity, Zap, Circle, AlertCircle, Minus, Triangle, Settings, Headphones, Building, Users, HelpCircle, FileText, MapPin, Bone, Footprints, Scissors, Droplet, Info, List, ChevronRight, Car, CarFront } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion'
import PromoOverlayCard from './PromoOverlayCard';
import { useQuery } from '@tanstack/react-query';
import NavCompactBlogCard from './NavCompactBlogCard';

function NavLink({ href, title, screen, pathname, sublinks, short_desc, latestBlog }: {
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
  short_desc: string,
  latestBlog?: any
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
  } | null>(NavBarLinks[2].subLinks[0]);

  // Check if current pathname matches the main screen or any of its sublinks
  const isActive = pathname === screen ||
    sublinks.some(link =>
      pathname === link.href ||
      link.subLinks.some(subLink => pathname === subLink.href)
    );

  return (
    <NavigationMenuItem className=''>
      <NavigationMenuTrigger
        className={`${isActive
          ? 'text-[#0A50EC] border-white border-1 px-4 py-2 rounded-full shadow-sm'
          : 'text-black hover:text-[#0A50EC] bg-transparent border-0'
          } transition-all duration-300 font-semibold hover:bg-transparent`}

        style={{
          backdropFilter: isActive ? 'blur(50px)' : 'blur(0px)'
        }}
      >
        <Link href={href}>{title}</Link>
      </NavigationMenuTrigger>

      <NavigationMenuContent
        // grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]
        className='flex flex-row border gap-x-4 items-start self-start '
        style={{
          background: 'rgba(239, 245, 255, 0.50)',
          border: '1px solid white',
          borderRadius: '8px',
          backdropFilter: 'blur(30px)'
        }}
      >
        {
          title == 'FIND CARE' ? (
            <div className='w-200 flex flex-row justify-between gap-x-5'>
              <div className='grid grid-cols-2 gap-0 w-130'>
                <div className="col-span-2 px-4 py-3 mb-2">
                  <h3
                    className="text-lg font-semibold text-[#0A50EC] tracking-wide"
                    style={{
                      fontFamily: "var(--font-public-sans)",
                      letterSpacing: "0.02em",
                    }}
                  >
                    Find the Care You Need
                  </h3>
                  <p
                    className="text-sm text-[#424959] mt-1"
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontWeight: 400,
                    }}
                  >
                    Explore our specialties and discover the right treatment for you.
                  </p>
                </div>
                {
                  sublinks.map((link, linkIndex) => {
                    const IconComponent = link.icon;
                    return (
                      <div key={`${link.title}-${linkIndex}`} className='h-fit gap-0'>
                        {link.subLinks.length == 0 ? (
                          <NavigationMenuLink asChild className='flex flex-row items-center gap-x-4 '>
                            <Link href={link.title == 'Florida' ? '#' : link.href} className='w-full block px-4 py-2 flex-row items-center justify-between'>
                              <div className='flex flex-row items-center gap-x-4'>
                                <div className='p-2 rounded-2xl border aspect-square flex items-center justify-center'>
                                  <IconComponent className='w-8 h-8 text-[#252932]' />
                                </div>
                                <div className='flex flex-col gap-y-0'>
                                  <span
                                    style={{
                                      fontFamily: "var(--font-public-sans)",
                                      fontWeight: 400,
                                    }}
                                  >
                                    {link.title}
                                  </span>
                                  <span className='text-xs text-gray-500'>{link.short_desc}</span>
                                </div>
                              </div>
                              <ChevronRight className='w-4 h-4 text-[#252932]' />
                            </Link>
                          </NavigationMenuLink>
                        ) : (
                          <Link
                            href={link.href}
                            className="w-full text-left px-4 py-2 hover:bg-white/50 transition-colors duration-200 rounded-lg flex flex-row items-center gap-x-4"
                            onMouseEnter={() => setSelectedSubLink(link)}
                          >
                            <div className='p-2 rounded-2xl border aspect-square flex items-center justify-center'>
                              <IconComponent className='w-4 h-4 text-[#252932]' />
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
                      </div>
                    )
                  })
                }
              </div>
              <div className='w-60'>
                <PromoOverlayCard className="max-w-60" link="/area-of-specialty/spinal-stenosis" />
              </div>
            </div>
          ) :
            title == 'AREA OF SPECIALTY' ? (
              <div className='w-200 flex flex-row '>
                <div className='w-fit flex flex-col justify-center items-center space-y-4 px-1'>
                  <ul className='flex flex-col w-100'>
                    {
                      sublinks.map((link, linkIndex) => {
                        const IconComponent = link.icon;


                        return (
                          <li key={`${link.title}-${linkIndex}`}>
                            {link.subLinks.length == 0 ? (
                              <NavigationMenuLink asChild className='flex flex-row items-center gap-x-4 '>
                                <Link href={link.title == 'Florida' ? '#' : link.href} className='w-full block px-4 py-2 flex-row items-center justify-between'>
                                  <div className='flex flex-row items-center gap-x-4'>
                                    <div className='p-2 rounded-2xl border aspect-square flex items-center justify-center'>
                                      <IconComponent className='w-8 h-8 text-[#252932]' />
                                    </div>
                                    <div className='flex flex-col gap-y-0'>
                                      <span
                                        style={{
                                          fontFamily: "var(--font-public-sans)",
                                          fontWeight: 400,
                                        }}
                                      >
                                        {link.title}
                                      </span>
                                      <span className='text-xs text-gray-500'>{link.short_desc}</span>
                                    </div>
                                  </div>
                                  <ChevronRight className='w-4 h-4 text-[#252932]' />
                                </Link>
                              </NavigationMenuLink>
                            ) : (
                              <Link
                                href={link.href}
                                className="w-full text-left px-4 py-2 hover:bg-white/50 transition-colors duration-200 rounded-lg flex flex-row items-center gap-x-4"
                                onMouseEnter={() => setSelectedSubLink(link)}
                              >
                                <div className='p-2 rounded-2xl border aspect-square flex items-center justify-center'>
                                  <IconComponent className='w-4 h-4 text-[#252932]' />
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
                  <PromoOverlayCard
                    className="max-w-100 w-100"
                    imageUrl="https://mountainspineortho.b-cdn.net/public/lowerbackpain.png"
                    title="Lower Back Pain?"
                    subtitle="Meet with our world-class surgeons today"
                    link={`/area-of-specialty?data=${encodeURIComponent(JSON.stringify({ tags: ['Spine'] }))}`}
                  />
                </div>

                {selectedSubLink && (
                  <div className='flex flex-col p-4 border-l lg:w-100'>
                    {/* Header */}
                    <div className='flex flex-row items-center gap-x-3 mb-4 pb-3 border-b'>
                      <div className='p-2 rounded-2xl border aspect-square flex items-center justify-center'>
                        <selectedSubLink.icon className='w-6 h-6 text-[#252932]' />
                      </div>
                      <div className='flex flex-col'>
                        <span
                          style={{
                            fontFamily: "var(--font-public-sans)",
                            fontWeight: 600,
                          }}
                          className='text-[#252932]'
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
                                  <SubIconComponent className='w-4 h-4 text-[#252932]' />
                                </div>
                                <div className='flex flex-col'>
                                  <span
                                    style={{
                                      fontFamily: "var(--font-public-sans)",
                                      fontWeight: 400,
                                    }}
                                    className='text-[#252932]'
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
              </div>
            ) :
              title == 'ABOUT' ? (
                <div className='w-fit space-y-4 flex-row flex gap-x-4'>
                  <ul className='flex flex-col w-100'>
                    {
                      sublinks.map((link, linkIndex) => {
                        const IconComponent = link.icon;


                        return (
                          <li key={`${link.title}-${linkIndex}`}>
                            {link.subLinks.length == 0 && (
                              <NavigationMenuLink asChild className='flex flex-row items-center gap-x-4'>
                                <Link href={link.title == 'Florida' ? '#' : link.href} className='w-full block px-4 py-2 flex-row items-center justify-between'>
                                  <div className='flex flex-row items-center gap-x-4'>
                                    <div className='p-2 rounded-2xl border aspect-square flex items-center justify-center'>
                                      <IconComponent className='w-8 h-8 text-[#252932]' />
                                    </div>
                                    <div className='flex flex-col gap-y-0'>
                                      <span
                                        style={{
                                          fontFamily: "var(--font-public-sans)",
                                          fontWeight: 400,
                                        }}
                                      >
                                        {link.title}
                                      </span>
                                      <span className='text-xs text-gray-500'>{link.short_desc}</span>
                                    </div>
                                  </div>
                                  <ChevronRight className='w-4 h-4 text-[#252932]' />
                                </Link>
                              </NavigationMenuLink>
                            )
                              // : (
                              //   <Link
                              //     href={link.href}
                              //     className="w-full text-left px-4 py-2 hover:bg-white/50 transition-colors duration-200 rounded-lg flex flex-row items-center gap-x-4"
                              //     onMouseEnter={() => setSelectedSubLink(link)}
                              //   >
                              //     <div className='p-2 rounded-2xl border aspect-square flex items-center justify-center'>
                              //       <IconComponent className='w-4 h-4 text-[#252932]' />
                              //     </div>
                              //     <div className='flex flex-col gap-y-2'>
                              //       <span
                              //         style={{
                              //           fontFamily: "var(--font-public-sans)",
                              //           fontWeight: 400,
                              //         }}
                              //       >
                              //         {link.title}
                              //       </span>
                              //       <span className='text-sm text-gray-500'>{link.short_desc}</span>
                              //     </div>
                              //   </Link>
                              // )
                            }
                          </li>
                        )
                      })
                    }
                  </ul>
                  {latestBlog && (
                    <div className='w-70'>
                      <NavCompactBlogCard blog={latestBlog.blog_info} slug={latestBlog.slug} />
                    </div>
                  )}
                  {/* <PromoOverlayCard
                    className="max-w-100"
                    imageUrl="https://mountainspineortho.b-cdn.net/public/lowerbackpain.png"
                    title="Lower Back Pain?"
                    subtitle="Meet with our world-class surgeons today"
                  /> */}
                </div>
              ) : title == 'LOCATION' ? (
                <div className=' flex flex-row gap-x-4 w-200'>
                  <ul className='grid grid-cols-2 gap-x-4 w-130 left-0'>
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
                                      <IconComponent className='w-8 h-8 text-[#252932]' />
                                    </div>
                                    <div className='flex flex-col gap-y-0'>
                                      <span
                                        style={{
                                          fontFamily: "var(--font-public-sans)",
                                          fontWeight: 400,
                                        }}
                                      >
                                        {link.title}
                                      </span>
                                      <span className='text-xs text-gray-500'>{link.short_desc}</span>
                                    </div>
                                  </div>
                                  <ChevronRight className='w-4 h-4 text-[#252932]' />
                                </Link>
                              </NavigationMenuLink>
                            ) : (
                              <Link
                                href={link.href}
                                className="w-full text-left px-4 py-2 hover:bg-white/50 transition-colors duration-200 rounded-lg flex flex-row items-center gap-x-4"
                                onMouseEnter={() => setSelectedSubLink(link)}
                              >
                                <div className='p-2 rounded-2xl border aspect-square flex items-center justify-center'>
                                  <IconComponent className='w-4 h-4 text-[#252932]' />
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
                  <PromoOverlayCard
                    className="max-w-70 w-70"
                    imageUrl="/centralflorida.png"
                    title="Serving Florida"
                    subtitle="20+ Years of Orthopedic Care for Florida."
                    link="/locations"
                  />
                </div>
              )
                :
                (
                  <ul className='flex flex-col w-200 left-0 self-start'>
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
                                      <IconComponent className='w-8 h-8 text-[#252932]' />
                                    </div>
                                    <div className='flex flex-col gap-y-0'>
                                      <span
                                        style={{
                                          fontFamily: "var(--font-public-sans)",
                                          fontWeight: 400,
                                        }}
                                      >
                                        {link.title}
                                      </span>
                                      <span className='text-xs text-gray-500'>{link.short_desc}</span>
                                    </div>
                                  </div>
                                  <ChevronRight className='w-4 h-4 text-[#252932]' />
                                </Link>
                              </NavigationMenuLink>
                            ) : (
                              <Link
                                href={link.href}
                                className="w-full text-left px-4 py-2 hover:bg-white/50 transition-colors duration-200 rounded-lg flex flex-row items-center gap-x-4"
                                onMouseEnter={() => setSelectedSubLink(link)}
                              >
                                <div className='p-2 rounded-2xl border aspect-square flex items-center justify-center'>
                                  <IconComponent className='w-4 h-4 text-[#252932]' />
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
                )
        }


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
        title: 'Second Opinion',
        href: '/find-care/second-opinion',
        short_desc: 'Expert second opinion',
        icon: Eye,
        subLinks: []
      },
      {
        title: 'Free MRI Review',
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
            href: '/area-of-pain/back-pain/foraminal-stenosis-back-pain',
            short_desc: 'Nerve compression relief',
            icon: Minus,
          },
          {
            title: 'Sciatica',
            href: '/area-of-pain/back-pain/sciatica-nerve-pain',
            short_desc: 'Sciatic nerve pain',
            icon: Zap,
          },
          {
            title: 'Coccydynia',
            href: '/area-of-pain/back-pain/tailbone-pain-coccydynia',
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
            href: '/area-of-pain/neck-and-shoulder-pain/neck-spinal-stenosis',
            short_desc: 'Neck stenosis treatment',
            icon: Minus,
          },
          {
            title: 'Cervical Herniated Disc',
            href: '/area-of-pain/neck-and-shoulder-pain/neck-herniated-disc',
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
            href: '/area-of-pain/neck-and-shoulder-pain/neck-shoulder-arthritis-pain',
            short_desc: 'Arthritis management',
            icon: Bone,
          },
          {
            title: 'Pinched Nerve',
            href: '/area-of-pain/neck-and-shoulder-pain/pinched-nerve-neck-shoulder',
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
            href: '/area-of-pain/foot-pain/bunion-pain-hallux-valgus',
            short_desc: 'Bunion treatment',
            icon: Circle,
          },
          {
            title: 'Plantar Fasciitis',
            href: '/area-of-pain/foot-pain/heel-pain-plantar-fasciitis',
            short_desc: 'Heel pain relief',
            icon: Zap,
          },
          {
            title: 'Achilles Tendonitis',
            href: '/area-of-pain/foot-pain/achilles-tendon-pain',
            short_desc: 'Achilles tendon care',
            icon: Activity,
          },
          {
            title: 'Flat Feet',
            href: '/area-of-pain/foot-pain/flat-feet-pain',
            short_desc: 'Flat feet correction',
            icon: Footprints,
          },
          {
            title: 'Ankle Arthroscopy',
            href: '/area-of-pain/foot-pain/ankle-arthroscopy-recovery-pain',
            short_desc: 'Minimally invasive surgery',
            icon: Scissors,
          },
          {
            title: 'Hammertoes',
            href: '/area-of-pain/foot-pain/hammertoes-foot-pain',
            short_desc: 'Toe deformity correction',
            icon: Circle,
          },
          {
            title: 'Diabetic Foot Ulcers',
            href: '/area-of-pain/foot-pain/diabetic-foot-ulcer-care',
            short_desc: 'Diabetic foot care',
            icon: Droplet,
          },
          {
            title: 'Ankle Replacement',
            href: '/area-of-pain/foot-pain/ankle-replacement-surgery-pain',
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
  // {
  //   href: '/injuries',
  //   screen: '/injuries',
  //   title: 'INJURIES',
  //   short_desc: 'Learn about our injuries',
  //   icon: Activity,
  //   subLinks: [
  //     {
  //       title: 'Slip and Fall',
  //       href: '/injuries/slip-and-fall',
  //       short_desc: 'Learn about how to handle slip and fall injuries',
  //       icon: Footprints,
  //       subLinks: []
  //     },
  //     {
  //       title: 'Car Accident',
  //       href: '/injuries/car-accident',
  //       short_desc: 'Learn about how to handle car accident injuries',
  //       icon: CarFront,
  //       subLinks: []
  //     }
  //   ]
  // }

]

const HamburgerIcon = ({ open }: { open: boolean }) => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <motion.line x1="4" y1="6" x2="20" y2="6" animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }} transition={{ type: 'spring', stiffness: 300, damping: 20 }} />
    <motion.line x1="4" y1="12" x2="20" y2="12" animate={open ? { opacity: 0 } : { opacity: 1 }} transition={{ duration: 0.15 }} />
    <motion.line x1="4" y1="18" x2="20" y2="18" animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }} transition={{ type: 'spring', stiffness: 300, damping: 20 }} />
  </motion.svg>
);

export default function NavBar() {
  const pathname = usePathname();
  const { data: latestBlog } = useQuery({
    queryKey: ["latest-blog"],
    queryFn: GetLatestBlog,
  });
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // <-- State for sidebar
  const [isScrolled, setIsScrolled] = useState(false);

  // iOS-like sidebar animation variants
  const sidebarVariants = {
    hidden: { x: 56, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 260, damping: 30, mass: 0.9 }
    },
    exit: { x: 56, opacity: 0, transition: { duration: 0.2 } }
  } as const

  const listVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.05 }
    }
  } as const

  const itemVariants = {
    hidden: { opacity: 0, y: 14 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } }
  } as const

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
      <header className={`fixed top-0 left-0 right-0 z-50 flex justify-center self-center lg:py-10 py-1 rounded-b-xl max-h-[128px] lg:h-[60px] ${isSidebarOpen ? 'bg-white' : 'bg-transparent'} transition-all duration-200 ${isScrolled  ? 'sm:bg-transparent  bg-white' : 'bg-transparent'}`}>
        <nav className="flex justify-between items-center w-full max-w-[1440px] px-6 md:px-[40px] py-2 z-[1]">
          <Link href={'/'} className='flex flex-row items-center justify-center space-x-[8px] '>
            <Image src={Logo} alt="Mountain Spine & Orthopedics Logo" className="max-h-[40px] object-cover lg:h-[40px] lg:w-auto w-20 h-10  " />
            <div className='w-[1px] h-[35px] bg-gradient-to-b from-transparent via-[#0A50EC] to-transparnet' />
            <div className="flex flex-col text-[#0A50EC]"
              style={{
                fontFamily: "var(--font-public-sans)",
                fontSize: "16px",
                lineHeight: "24px",
                letterSpacing: "0.02em",
              }}
            >
              <span className="md:text-2xl text-md font-[700]">MOUNTAIN</span>
              <span className="font-[700] text-xs"> SPINE & ORTHOPEDICS</span>
            </div>
          </Link>

          <NavigationMenu className="space-x-8 text-[16px] font-semibold items-center justify-center z-60 xl:flex hidden" >

            <NavigationMenuList className=' '>
              {
                NavBarLinks.map((link, index) => (
                  <NavLink key={index} screen={link.screen} href={link.href} sublinks={link.subLinks} title={link.title} short_desc={link.short_desc} pathname={pathname} latestBlog={latestBlog} />
                ))
              }
            </NavigationMenuList>

          </NavigationMenu>

          <button
            className={`xl:hidden text-[#0A50EC] flex p-2 z-50 ml-6  bg-white rounded-xl backdrop-blur-3xl`}   //ml-auto pushes it right if space allows
            onClick={toggleSidebar}
            aria-label="Toggle menu"
            aria-expanded={isSidebarOpen}
            aria-controls="mobile-sidebar"  //Should match sidebar id
          >
            <HamburgerIcon open={isSidebarOpen} />
          </button>

          <a href="tel:5612239959"
            className={` ${isSidebarOpen ? 'hidden' : 'sm:flex hidden'} group  h-[40px] px-[20px] rounded-[62px] relative z-50 items-center justify-between bg-[#0A50EC] text-white text-[14px] font-semibold hover:cursor-pointer`}
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
                <path d="M12.3982 0.768483C12.0402 0.410504 11.4598 0.410506 11.1018 0.768488C10.7438 1.12647 10.7438 1.70687 11.1018 2.06485L14.1203 5.08333H1.66667C1.16041 5.08333 0.75 5.49374 0.75 6C0.75 6.50626 1.16041 6.91667 1.66667 6.91667H14.1203L11.1018 9.93516C10.7439 10.2931 10.7439 10.8735 11.1019 11.2315C11.4598 11.5895 12.0402 11.5895 12.3982 11.2315L16.9766 6.65303C16.9935 6.63637 17.0098 6.61905 17.0254 6.60112C17.0873 6.52997 17.1365 6.45154 17.1728 6.36885C17.2221 6.25677 17.2496 6.13294 17.25 6.00273L17.25 6C17.25 5.99717 17.25 5.99434 17.25 5.99152C17.2489 5.87623 17.2266 5.76602 17.1867 5.66463C17.142 5.55068 17.0736 5.44387 16.9815 5.35178L12.3982 0.768483Z" fill="#FAFAFA" />
              </svg>
            </div>
          </a>

        </nav>
      </header>

      {/* Overlay (Visible when sidebar is open, below xl) */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            key="sidebar-overlay"
            className="fixed inset-0 z-30 xl:hidden backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeSidebar}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>


      {/* Sidebar Container */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.aside
            key="mobile-sidebar"
            id="mobile-sidebar"
            className={`fixed top-0 left-0 right-0 h-full w-full bg-white rounded-b-2xl  z-40 xl:hidden overflow-y-auto overscroll-contain`}
            style={{ WebkitOverflowScrolling: 'touch' as any }}
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ type: 'spring', stiffness: 280, damping: 30 }}
            aria-hidden={!isSidebarOpen}
          >


            {/* Sidebar Navigation Links */}
            <motion.nav
              className="pt-26 flex flex-col space-y-4 px-6 pb-6 overflow-y-auto"
              variants={listVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {NavBarLinks.map((link, index) => {
                return (
                  <motion.div key={`top-level-${index}`} variants={itemVariants}>
                    <SidebarNavItem
                      item={link}
                      pathname={pathname}
                      closeSidebar={closeSidebar}
                      level={0}
                      latestBlog={latestBlog}
                    />
                  </motion.div>
                )
              })}
              {/* Optional: Add Contact Us button in sidebar */}
              <motion.a
                variants={itemVariants}
                href="tel:5612239959"
                className="w-full mt-6 group hover:cursor-pointer max-h-[40px] h-full px-[20px] py-2 rounded-[62px] flex items-center justify-center bg-[#0A50EC] text-white text-[14px] font-semibold"
                onClick={() => {
                  if (typeof window !== "undefined" && window.dataLayer) {
                    window.dataLayer.push({
                      event: 'call_click',
                      phone_number: '5612239959',
                      location: 'NavBar'
                    });
                  }
                }}
                whileTap={{ scale: 0.98 }}
                whileHover={{ scale: 1.02 }}
              >
                <p className=' group-hover:scale-[1.1] transition-all duration-300 ease-in-out'>Contact Us</p>
                <div className='pl-[10px] group-hover:translate-x-1 transition-all duration-300 ease-in-out'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12" viewBox="0 0 18 12" fill="none">
                    <path d="M12.3982 0.768483C12.0402 0.410504 11.4598 0.410506 11.1018 0.768488C10.7438 1.12647 10.7438 1.70687 11.1018 2.06485L14.1203 5.08333H1.66667C1.16041 5.08333 0.75 5.49374 0.75 6C0.75 6.50626 1.16041 6.91667 1.66667 6.91667H14.1203L11.1018 9.93516C10.7439 10.2931 10.7439 10.8735 11.1019 11.2315C11.4598 11.5895 12.0402 11.5895 12.3982 11.2315L16.9766 6.65303C16.9935 6.63637 17.0098 6.61905 17.0254 6.60112C17.0873 6.52997 17.1365 6.45154 17.1728 6.36885C17.2221 6.25677 17.2496 6.13294 17.25 6.00273L17.25 6C17.25 5.99717 17.25 5.99434 17.25 5.99152C17.2489 5.87623 17.2266 5.76602 17.1867 5.66463C17.142 5.55068 17.0736 5.44387 16.9815 5.35178L12.3982 0.768483Z" fill="#FAFAFA" />
                  </svg>
                </div>
              </motion.a>
            </motion.nav>
          </motion.aside>
        )}
      </AnimatePresence>
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




