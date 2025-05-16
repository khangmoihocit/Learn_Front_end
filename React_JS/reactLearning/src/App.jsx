import Header from "./components/Header"
import Footer from "./components/Footer"
import PropsHello from "./components/PropsHello"

function App() {
  const userName = "khang";
  const getUserName =  ()=>{
    return userName;
  }

  return(
    <>
      <Header />
      <PropsHello name="khang" />

      {/* truyen ham */}
      <PropsHello getUserName={getUserName} />
      <Footer />
    </>
  )
}

export default App
