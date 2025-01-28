import React from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '../ui/dropdown-menu'
import { Button } from '../ui/button'
import { Languages } from 'lucide-react'
import { lngs } from '@/constants'
import Image from 'next/image'

const LanguageDropdown = () => {
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
        {lngs.map(lng => (
          <DropdownMenuItem key={lng.route} className='cursor-pointer'>
            <Image src={`/assets/${lng.route}.png`} alt={lng.label} width={30} height={30} />
            <span className='ml-2'>{lng.label}</span>
          </DropdownMenuItem>
        ))}

      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default LanguageDropdown