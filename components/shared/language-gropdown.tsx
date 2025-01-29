'use client'

import React from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '../ui/dropdown-menu'
import { Button } from '../ui/button'
import { Languages } from 'lucide-react'
import { lngs } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { useParams } from 'next/navigation'

const LanguageDropdown = () => {
  const { lng } = useParams()
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={'ghost'} size={'icon'}>
          <Languages />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Languages</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {lngs.map(item => (
          <Link key={item.route} href={`/${item.route}`}>
            <DropdownMenuItem className={cn('cursor-pointer', (lng === item.route) && 'bg-secondary')}>
              <Image src={`/assets/${item.route}.png`} alt={item.label} width={30} height={30} />
              <span className='ml-2'>{item.label}</span>
            </DropdownMenuItem>
          </Link>
        ))}

      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default LanguageDropdown