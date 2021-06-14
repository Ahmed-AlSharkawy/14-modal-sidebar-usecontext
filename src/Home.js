import React from 'react'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './context'

const Home = () => {
  const { toggleSidebar, toggleModal } = useGlobalContext()
  return (
    <>
      <main>
        <button className='sidebar-toggle' onClick={toggleSidebar}>
          <FaBars />
        </button>
        <button className='btn' onClick={toggleModal}>
          Show Modal
        </button>
      </main>
      <h1 style={{ marginTop: '5rem' }}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda
        cumque inventore reiciendis adipisci sit vitae error aperiam ipsam
        facere, laudantium nam doloribus velit soluta nulla blanditiis.
        Reiciendis aliquid sint quia tempora eius non maxime, mollitia ratione.
        Ipsum quis atque et voluptas! A consequuntur at ipsa aliquam minus, quo,
        provident totam veniam dolores animi quam illum expedita, necessitatibus
        tenetur consectetur voluptatibus nesciunt est similique nemo vero.
        Dolorem, ducimus in! Dolores beatae quaerat sed ipsa recusandae, commodi
        illum repellendus itaque, veniam ipsam eveniet adipisci nobis molestias.
        Numquam iste fuga ut vitae nihil libero molestiae magni nemo quos id,
        adipisci sint consectetur? Aperiam.
      </h1>
    </>
  )
}

export default Home
