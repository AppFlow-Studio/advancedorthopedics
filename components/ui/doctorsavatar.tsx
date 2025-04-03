import Image from 'next/image'
import React from 'react'
import Katzman from '../../public/ScottKatzman.png'
import Monica from '../../public/Monica.png'
import David from '../../public/David.png'
import Douglas from '../../public/DouglasSlaughter.png'
import Christopher from '../../public/ChristopherMcarthy.png'
export default function DoctorsAvatar() {
  return (
    <div className="flex -space-x-3">
      <Image
        className="rounded-full ring-2 ring-white"
        src={Katzman}
        width={40}
        height={40}
        alt="Avatar 01"
      />
      <Image
        className="rounded-full ring-2 ring-white"
        src={David}
        width={40}
        height={40}
        alt="Avatar 02"
      />
      <Image
        className="rounded-full ring-2 ring-white"
        src={Douglas}
        width={40}
        height={40}
        alt="Avatar 03"
      />
      <Image
        className="rounded-full ring-2 ring-white"
        src={Monica}
        width={40}
        height={40}
        alt="Avatar 03"
      />
    </div>
  )
}
