import { styled } from '@stitches/react'

export const HomeContainer = styled('main', {
  display: 'flex',
  width: '100%',
  maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
  marginLeft: 'auto',
  minHeight: 656,
})

export const Product = styled('div', {
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  cursor: 'pointer',
  position: 'relative',
  overflow: 'hidden',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  },

  footer: {
    position: 'absolute',
    bottom: '0.25rem',
    left: '0.25rem',
    right: '0.25rem',
    padding: '2rem',
    color: 'White',
    borderRadius: 6,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    backgroundColor: 'rgba(0, 0, 0, 0.6)',

    transform: 'translateY(110%)',
    opacity: 0,
    transition: 'all 0.2s ease-in-out',

    strong: {
      fontSize: '$md',
    },

    span: {
      fontSize: '$md',
      fontWeight: 'bold',
      color: '$green300',
    },

    div: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.25rem',
    },
  },

  '&:hover': {
    footer: {
      transform: 'translateY(0%)',
      opacity: 1,
    },
  },
})

export const BagContainer = styled('button', {
  width: '3rem',
  height: '3rem',
  background: '$green500',
  color: '$gray100',
  border: 'none',
  borderRadius: 8,
  cursor: 'pointer',

  svg: {
    width: '1.5rem',
    height: '1.5rem',
  },

  '&:hover': {
    background: '$green300',
  },
})
