import { globalStyles } from '@/styles/global'
import type { AppProps } from 'next/app'

import Image from 'next/image'

import LogoImg from '@/assets/Logo.svg'
import { Container, Header } from '@/styles/pages/app'
import { ShoppingBagProvider } from '@/context/shoppingBag'
import Link from 'next/link'
import { ShopBag } from '@/components/shopBag'
globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ShoppingBagProvider>
      <Container>
        <Header>
          <Link href="/">
            <Image src={LogoImg} alt="" />
          </Link>

          <ShopBag />
          {/* <BagContainer
            onClick={() => setisShoppingBagShowing(!isShoppingBagShowing)}
          >
            <ShoppingBag />
            {shoppingBagLength > 0 && <div>{shoppingBagLength}</div>}
          </BagContainer> */}
        </Header>

        <Component {...pageProps} />
      </Container>
    </ShoppingBagProvider>
  )
}
