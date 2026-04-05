import Image from 'next/image'
import React from 'react'
import Katzman from '../../public/ScottKatzman.png'
import Monica from '../../public/Monica.png'
import David from '../../public/David.png'
import Douglas from '../../public/DouglasSlaughter.png'
import Christopher from '../../public/ChristopherMcarthy.png'
import Shumway from '../../public/clay-shumway.png'
export default function DoctorsAvatar({tag, condition} : {tag : string, condition : string}) {
  console.log(tag)
  if (tag === 'Foot' || tag === 'Ankle') {
    return (
      <div className="flex -space-x-3">
        <Image
          className="rounded-full ring-2 ring-white object-cover"
          style={{ width: '40px', height: '40px' }}
          src={Shumway}
          width={40}
          height={40}
          alt="Avatar Dr. Clay Shumway"
        />
        <Image
          className="rounded-full ring-2 ring-white object-cover"
          style={{ width: '40px', height: '40px' }}
          src={Katzman}
          width={40}
          height={40}
          alt="Avatar Dr. Scott Katzman"
        />
      </div>
    )
  }
  return (
    <div className="flex -space-x-3">
      <Image
        className="rounded-full ring-2 ring-white object-cover"
        style={{ width: '40px', height: '40px' }}
        src={Katzman}
        width={40}
        height={40}
        alt="Avatar 01"
      />
      <Image
        className="rounded-full ring-2 ring-white object-cover"
        style={{ width: '40px', height: '40px' }}
        src={David}
        width={40}
        height={40}
        alt="Avatar 02"
      />
      <Image
        className="rounded-full ring-2 ring-white object-cover"
        style={{ width: '40px', height: '40px' }}
        src={Douglas}
        width={40}
        height={40}
        alt="Avatar 03"
      />
      <Image
        className="rounded-full ring-2 ring-white object-cover"
        style={{ width: '40px', height: '40px' }}
        src={Christopher}
        width={40}
        height={40}
        alt="Avatar 04"
      />
      {
        condition.includes('Injections') && <Image
        className="rounded-full ring-2 ring-white object-cover"
        style={{ width: '40px', height: '40px' }}
        src={Monica}
        width={40}
        height={40}
        alt="Avatar 05"
      />}
    </div>
  )
}
