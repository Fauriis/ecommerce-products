import {motion} from 'framer-motion'

export const CartVoucher = () => {
  return (
    <>
    <main className='mb-5'>
      <motion.img
      whileHover={{scale:0.9}}
      src='cart1.png'
      className='rounded-sm'
      title='New collection'
      >
        
      </motion.img>

      <button className=''></button>
    </main>
    </>
  )
}