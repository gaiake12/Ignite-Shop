import {
  ImageContainer,
  ProductContainer,
  ProductDetailsContainer,
} from '@/styles/pages/product'
import { GetStaticPaths, GetStaticProps } from 'next'
import { stripe } from '@/lib/stripe'
import Stripe from 'stripe'
import Image from 'next/image'
import { useContext } from 'react'
import Head from 'next/head'
import { ShoppingBagContext } from '@/context/shoppingBag'

interface ProductProps {
  product: {
    id: string
    name: string
    imageUrl: string
    price: string
    description: string
    defaultPriceId: string
  }
}

export default function Product({ product }: ProductProps) {
  const { handleAddItemToShoppingBag } = useContext(ShoppingBagContext)

  // async function handleBuyProduct() {
  //   try {
  //     setIsCreatingCheckoutSession(true)

  //     const response = await axios.post('/api/checkout', {
  //       priceId: product.defaultPriceId,
  //     })

  //     console.log(response.data)
  //     const { checkoutUrl } = response.data

  //     console.log(checkoutUrl)

  //     window.location.href = checkoutUrl
  //   } catch (err) {
  //     setIsCreatingCheckoutSession(false)

  //     alert('Falha ao redirecionar ao checkout')
  //   }
  // }

  const currentProduct = { ...product, quantity: 1 }

  return (
    <>
      <Head>
        <title>{product.name} | Ignite Shop</title>
      </Head>

      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} width={520} height={480} alt="" />
        </ImageContainer>

        <ProductDetailsContainer>
          <h1>{product.name}</h1>
          <span>{product.price}</span>
          <p>{product.description}</p>

          <button onClick={() => handleAddItemToShoppingBag(currentProduct)}>
            Colocar na sacola
          </button>
        </ProductDetailsContainer>
      </ProductContainer>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  const productId = params.id

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price'],
  })

  const price = product.default_price as Stripe.Price

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format((price.unit_amount as number) / 100),
        description: product.description,
        defaultPriceId: price.id,
      },
    },
    revalidate: 60 * 60 * 1, // 1 hour
  }
}
