import { Button } from '@/components/ui/button'
import { Search } from 'lucide-react'
import React from 'react'

const GlobalSearch = () => {
  return (
    <Button variant={'ghost'} size={'icon'}>
      <Search />
    </Button>
  )
}

export default GlobalSearch