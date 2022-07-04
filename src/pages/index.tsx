import type { NextPage } from 'next'
import ClientOnly from '../components/ClientOnly/ClientOnly'
import Tile from '../components/Tile/Tile'

const Home: NextPage = () => {
  return (
    <ClientOnly>
      <Tile />
    </ClientOnly>
  )
}

export default Home
