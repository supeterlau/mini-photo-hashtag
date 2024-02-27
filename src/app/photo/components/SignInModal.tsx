import { FormEvent } from "react"

interface IProps {
  showSignUp: Function
}

export default function SignInModal (props:IProps) {
  const submit = (ev: FormEvent) => {
    console.log('sign in')
    ev.preventDefault()
  }
  return (
    <><h3>Sign In</h3>
    <div>
      <form onSubmit={submit}>
        <input id="email" type='email' placeholder="Email Address"/>
        <input id="password" type='password' placeholder="Password"/>
        <button>Signin</button>
        <p>No account yet?{' '}<a href="#" onClick={() => props.showSignUp()}>Signup</a></p>
      </form></div></>
  )
}