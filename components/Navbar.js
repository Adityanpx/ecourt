import { ScaleIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center">
    <Link className="flex items-center justify-center" href="/">
      <ScaleIcon className="h-6 w-6" />
      <span className="sr-only">eCourtroom</span>
    </Link>
    <nav className="ml-auto flex gap-4 sm:gap-6">
      <Link
        className="text-sm font-medium hover:underline underline-offset-4"
        href="#">
        Features
      </Link>
      <Link
        className="text-sm font-medium hover:underline underline-offset-4"
        href="#">
        Pricing
      </Link>
      <Link
        className="text-sm font-medium hover:underline underline-offset-4"
        href="#">
        About
      </Link>
      <Link
        className="text-sm font-medium hover:underline underline-offset-4"
        href="#">
        Contact
      </Link>
    </nav>
  </header>
  )
}
