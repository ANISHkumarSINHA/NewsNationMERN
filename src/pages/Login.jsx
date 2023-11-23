import loginImg from "../assets/Images/login.webp"
import Template from "../components/core/Auth/Template"

function Login() {
  return (
    <Template
      title="Welcome Back"
      description1=""
      description2="News Nation Premium | Digital Subscriptions | All Access"
      image={loginImg}
      formType="login"
    />
  )
}

export default Login
