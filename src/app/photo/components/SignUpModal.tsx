import { FormEvent } from "react"

interface IProps {
  showSignIn: Function
}

export default function SignUpModal (props: IProps) {
  const submit = (ev: FormEvent) => {
    console.log('sign up')
    ev.preventDefault()
  }

  return <>
    <h3>Sign Up</h3>
    <div>
      <form onSubmit={submit}>
        <input id='email' type='email' placeholder="Email Address"/>
        <input id='password' type='password' placeholder="Password"/>
        <input id='confirm-password' type='password' placeholder="Repeat password" />
        <button>Signup</button>
        <p>Have account yet?{' '}<a href="#" onClick={() => props.showSignIn()}>Signin</a></p>
      </form>
    </div>
  </>
}