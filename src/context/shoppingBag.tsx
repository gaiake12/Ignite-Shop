import { ReactNode, createContext, useState } from 'react'

interface ShoppingBagContextProps {
  children: ReactNode
}

interface Product {
  id: string
  name: string
  imageUrl: string
  price: string
  description: string
  defaultPriceId: string
  quantity: number
}

type shoppingBagContextType = {
  shoppingBag: Product[]
  isShoppingBagShowing: boolean
  handleChangeIsShoppingBagShowing: () => void
  handleAddItemToShoppingBag: (product: Product) => void
  handleRemoveItemFromShoppingBag: (product: Product) => void
}

const DefaultValuesShoppingBag = {
  shoppingBag: [],
  isShoppingBagShowing: false,
  handleChangeIsShoppingBagShowing: () => {},
  handleAddItemToShoppingBag: () => {},
  handleRemoveItemFromShoppingBag: () => {},
}

export const ShoppingBagContext = createContext<shoppingBagContextType>(
  DefaultValuesShoppingBag,
)

export function ShoppingBagProvider({ children }: ShoppingBagContextProps) {
  const [shoppingBag, setShoppingBag] = useState<Product[]>([])
  const [isShoppingBagShowing, setisShoppingBagShowing] = useState(false)

  function handleChangeIsShoppingBagShowing() {
    setisShoppingBagShowing(!isShoppingBagShowing)
  }

  function handleAddItemToShoppingBag(product: Product) {
    const checkIfProductAlreadyExists = shoppingBag.filter(
      (currentProduct) => currentProduct.id === product.id,
    )

    if (checkIfProductAlreadyExists.length > 0) {
      const filteredShoppingBag = shoppingBag.map((currentProduct) => {
        if (currentProduct.id === product.id) {
          return { ...currentProduct, quantity: currentProduct.quantity + 1 }
        } else {
          return { ...currentProduct }
        }
      })

      setShoppingBag(filteredShoppingBag)
    } else {
      setShoppingBag((state) => {
        return [...state, product]
      })
    }
  }

  function handleRemoveItemFromShoppingBag(product: Product) {
    const checkProductQuantity = shoppingBag.filter(
      (currentProduct) =>
        currentProduct.id === product.id && currentProduct.quantity > 1,
    )

    if (checkProductQuantity.length > 0) {
      const shoppingBagWithRemovedQuantity = shoppingBag.map(
        (currentProduct) => {
          if (currentProduct.id === product.id && currentProduct.quantity > 1) {
            console.log('entrei')
            return { ...currentProduct, quantity: currentProduct.quantity - 1 }
          } else {
            return { ...currentProduct }
          }
        },
      )
      setShoppingBag(shoppingBagWithRemovedQuantity)
    } else {
      const filteredShoppingBag = shoppingBag.filter(
        (currentProduct) => currentProduct.id !== product.id,
      )

      setShoppingBag(filteredShoppingBag)
    }
  }

  return (
    <ShoppingBagContext.Provider
      value={{
        shoppingBag,
        isShoppingBagShowing,
        handleChangeIsShoppingBagShowing,
        handleAddItemToShoppingBag,
        handleRemoveItemFromShoppingBag,
      }}
    >
      {children}
    </ShoppingBagContext.Provider>
  )
}
