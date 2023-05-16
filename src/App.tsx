import { ReactElement } from 'react'
import {
  Header,
  Banner,
  ActionButton,
  FeaturesBlocks,
  Testimonials,
  Newsletter
} from './components/ui/index'
function App(): ReactElement {
  return (
    <div
      className={` font-inter antialiased bg-white text-gray-900 tracking-tight`}
    >
      <Header />
      <main className="grow">
        <ActionButton />
        {/* <Features /> */}
        <FeaturesBlocks />
        <Testimonials />
        <Newsletter />
      </main>
      <Banner />
    </div>
  )
}

export default App
