import { useState } from "react"
import { Navbar, Sidebar, RegisterModal } from "./components"

const App = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
      <Navbar setIsOpen={setIsOpen} />
      <Sidebar />
      <RegisterModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  )
}

export default App