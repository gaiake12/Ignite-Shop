import { ShoppingBagContext } from '@/context/shoppingBag'
import {
  CardContainer,
  ShopBagDetails,
  SubtotalContainer,
} from '@/styles/pages/app'
import axios from 'axios'
import { XIcon } from 'lucide-react'
import Image from 'next/image'
import { useContext, useState } from 'react'

export function ShopBagInfo() {
  const {
    shoppingBag,
    handleRemoveItemFromShoppingBag,
    handleChangeIsShoppingBagShowing,
  } = useContext(ShoppingBagContext)

  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false)

  const totalQuantity =
    shoppingBag.length > 0
      ? shoppingBag.reduce((acc, product) => acc + product.quantity, 0)
      : 0

  const listOfPrice = shoppingBag.map((product) => {
    const splitedPrice = product.price.split('')

    const newPriceFormat =
      splitedPrice[3] +
      splitedPrice[4] +
      '.' +
      splitedPrice[6] +
      splitedPrice[7]

    return product.quantity * parseFloat(newPriceFormat)
  })

  const totalPrice =
    shoppingBag.length > 0
      ? listOfPrice.reduce((acc, price) => acc + price, 0)
      : 0

  async function handleBuyProduct() {
    try {
      setIsCreatingCheckoutSession(true)

      const listOfBuyingProducts = shoppingBag.map((product) => {
        return { quantity: product.quantity, price: product.defaultPriceId }
      })

      console.log(listOfBuyingProducts)

      const response = await axios.post('/api/checkout', {
        listOfBuyingProducts,
      })

      // console.log(response.data)
      const { checkoutUrl } = response.data

      // console.log(checkoutUrl)

      window.location.href = checkoutUrl
    } catch (err) {
      setIsCreatingCheckoutSession(false)

      alert('Falha ao redirecionar ao checkout')
    }
  }

  return (
    <ShopBagDetails>
      <div>
        <strong>Sacola de compras</strong>{' '}
        <button onClick={handleChangeIsShoppingBagShowing}>
          <XIcon />
        </button>
      </div>

      {shoppingBag.map((product) => {
        return (
          <CardContainer key={product.id}>
            <div>
              <Image src={product.imageUrl} width={101} height={93} alt="" />
            </div>
            <div>
              <p>{product.name}</p>
              <strong>{product.price}</strong>
              <strong>Quantidade: {product.quantity}</strong>
              <button onClick={() => handleRemoveItemFromShoppingBag(product)}>
                Remover
              </button>
            </div>
          </CardContainer>
        )
      })}

      <SubtotalContainer>
        <p>Quantidade</p>
        <p>{totalQuantity} itens</p>

        <strong>Valor Total</strong>
        <strong>
          {totalPrice.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}
        </strong>
      </SubtotalContainer>
      <button onClick={handleBuyProduct} disabled={isCreatingCheckoutSession}>
        Finalizar Compra
      </button>
    </ShopBagDetails>
  )
}
