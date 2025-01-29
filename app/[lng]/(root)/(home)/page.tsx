'use client'

import { useTranslation } from "@/i18n/client"
import { useParams } from "next/navigation"

const MainPage = () => {
  const { lng } = useParams()
  const { t } = useTranslation(lng as string)
  return (
    <div className='font-space-grotesk mt-32'>{t('home')}</div>
  )
}





export default MainPage