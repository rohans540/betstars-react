import { useState } from "react"
import { Navbar, Sidebar, RegisterModal, LoginModal } from "./components"

const App = () => {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  return (
    <div>
      <Navbar setIsRegOpen={setIsRegisterOpen} setIsLoginOpen={setIsLoginOpen}  />
      <Sidebar />
      <RegisterModal isOpen={isRegisterOpen} setIsOpen={setIsRegisterOpen} />
      <LoginModal isOpen={isLoginOpen} setIsOpen={setIsLoginOpen}  />
    </div>
  )
}

export default App