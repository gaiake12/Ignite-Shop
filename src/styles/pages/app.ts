import { styled } from '..'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  jutifyContent: 'center',
  minHeight: '100vh',
  position: 'relative',
})

export const Header = styled('header', {
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'relative',
})

export const ShopBagDetails = styled('div', {
  position: 'absolute',
  right: -175,
  top: 0,
  width: '30rem',
  padding: '3rem',
  zIndex: 1,
  background: '$gray800',
  minHeight: '115vh',
  display: 'flex',
  flexDirection: 'column',

  'div:first-of-type': {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    button: {
      border: 'none',
      background: 'transparent',
      color: '$gray300',
      cursor: 'pointer',

      '&:hover': {
        color: '$gray100',
      },
    },
  },

  '>button': {
    marginTop: '3.43rem',
    height: '4.31rem',
    borderRadius: 8,
    border: 'none',
    fontSize: '$lg',
    background: '$green500',
    color: '$gray300',
    cursor: 'pointer',

    '&:hover': {
      background: '$green300',
    },
  },
})

export const CardContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  marginTop: '2rem',
  height: '5.8rem',
  gap: '1.5rem',
  textAlign: 'left',

  div: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',

    p: {
      marginBottom: '0.5rem',
      fontWeight: 'light',
    },

    strong: {
      marginBottom: '0.75rem',
    },

    button: {
      background: 'transparent',
      border: 'none',
      color: '$green300',
      fontWeight: 'bold',
      textAlign: 'left',
      cursor: 'pointer',
    },
  },

  'div:first-of-type': {
    height: '5.81rem',
    width: '6.37rem',
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    borderRadius: 8,
  },
})

export const SubtotalContainer = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  rowGap: '0.75rem',
  columnGap: '11.87rem',
  marginTop: 'auto',

  strong: {
    fontSize: '$lg',
  },
})

export const BagContainer = styled('button', {
  width: '3rem',
  height: '3rem',
  background: '$gray800',
  color: '$gray300',
  border: 'none',
  borderRadius: 8,
  position: 'relative',
  cursor: 'pointer',

  '&:hover': {
    opacity: '85%',
  },

  div: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: -10,
    top: -10,
    borderRadius: '100%',
    width: '1.5rem',
    height: '1.5rem',
    background: '$green300',
  },

  svg: {
    width: '1.5rem',
    height: '1.5rem',
  },
})
