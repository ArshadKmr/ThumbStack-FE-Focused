import './App.css'
import Banner from './components/banner/Banner'
import Footer from './components/footer/Footer'
import Group1 from './components/group/Group1'
import Group2 from './components/group/Group2'
import Group3 from './components/group/Group3'
import Group4 from './components/group/Group4'
import Group5 from './components/group/Group5'
import ManufacturingProcess from './components/group/ManufacturingProcess'
import Products from './components/group/Products'
import WorkBench from './components/group/WorkBench'
import Introduction from './components/introduction/introduction'

function App() {

  return (
    <>
      <Banner />
      <Introduction />
      <Group1 />
      <Group2 />
      <WorkBench />
      <Products />
      <Group3 />
      <Group4 />
      <ManufacturingProcess />
      <Group5/>
      <Footer />
    </>
  )
}

export default App
