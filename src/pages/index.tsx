import { Inter } from 'next/font/google'
import Format from '../../layout/format'

const inter = Inter({ subsets: ['latin'] })

//components
import Section1 from '../../components/section1'

export default function Home() {
  return (
    <Format>
      <Section1></Section1>
      </Format>
  )
}
