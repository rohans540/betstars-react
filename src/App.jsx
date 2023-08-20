import { useState } from "react"
import { Navbar, Sidebar, RegisterModal, LoginModal, ForgotPassword } from "./components"

const App = () => {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [openForgetPassword, setOpenForgetPassword] = useState(false);

  const handleForgetPassword = () => {
    setIsLoginOpen(false);
    setOpenForgetPassword(true);
  }

  const loginHandler = () => {
    setIsRegisterOpen(false);
    setIsLoginOpen(true);
  }

  return (
    <div>
      <Navbar setIsRegOpen={setIsRegisterOpen} setIsLoginOpen={setIsLoginOpen}  />
      <Sidebar />
      <RegisterModal isOpen={isRegisterOpen} setIsOpen={setIsRegisterOpen} loginHandler={loginHandler} />
      <LoginModal isOpen={isLoginOpen} setIsOpen={setIsLoginOpen} openForgetPwd={handleForgetPassword}  />
      <ForgotPassword isOpen={openForgetPassword} setIsOpen={setOpenForgetPassword} />
    </div>
  )
}

export default App