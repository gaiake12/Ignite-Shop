import { ShoppingBagContext } from '@/context/shoppingBag'
import { BagContainer } from '@/styles/pages/app'
import { ShoppingBag } from 'lucide-react'
import { useContext } from 'react'
import { ShopBagInfo } from './shopBagInfo'

export function ShopBag() {
  const {
    shoppingBag,
    handleChangeIsShoppingBagShowing,
    isShoppingBagShowing,
  } = useContext(ShoppingBagContext)

  const totalQuantity =
    shoppingBag.length > 0
      ? shoppingBag.reduce((acc, product) => acc + product.quantity, 0)
      : 0

  return (
    <>
      <BagContainer onClick={() => handleChangeIsShoppingBagShowing()}>
        <ShoppingBag />
        {totalQuantity > 0 && <div>{totalQuantity}</div>}
      </BagContainer>

      {isShoppingBagShowing && <ShopBagInfo />}
    </>
  )
}
