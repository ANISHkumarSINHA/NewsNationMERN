import signupImg from "../assets/Images/signup.webp"
import Template from "../components/core/Auth/Template"

function Signup() {
  return (
    <Template
      title="Get full access to News Nation Digital Subscription"
      description1=""
      description2="News Nation Premium | Digital Subscriptions | All Access"
      image={signupImg}
      formType="signup"
    />
  )
}

export default Signup
