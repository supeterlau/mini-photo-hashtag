import Link from 'next/link'

interface IProps {
  showModal: Function
}

const Header = ({showModal}: IProps) => {
  return (
    <div className="nav-container">
      <Link href="/">
        <img className='h-full' src="/photo/logo/logo.png" alt="" />
      </Link>
      
      <nav>
        <ul>
          <li>
            <Link className='px-2 py-2 flex justify-center items-center' href="/signup" onClick={(ev) => {
              ev.preventDefault()
              showModal('signup')
            }}>
              Sign up
            </Link>
          </li>
          <li>
            <Link className='px-2 py-2 flex justify-center items-center' href="/signin" onClick={(ev) => {
              ev.preventDefault()
              showModal('signin')
            }}>
              Sign in
            </Link>
          </li>
        </ul>
      </nav>
      <style jsx>{`
      ul {
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
      }

      li {
        display: flex;
        justify-content: center;
        float: left;
        background-color: lightblue;
        margin: 10px 0;
        margin-left: 1rem;
        border-radius: 10px;
      }

      .nav-link {
        padding: 1em 0.5em;
      }

      a {
        text-decoration: none;
        display: flex;
        justify-content: center;
        margin-right: 15px;
        color: #333;
      }

      nav {
        float: right;
        height: 100%;
      }

      nav ul {
        height: 100%;
      }

      nav ul li a {
        padding: 1em 0.5em;
      }

      .nav-container {
        border-bottom: 1px solid #eee;
        height: 50px;
      }

      img {
        float: left;
      }
      `}</style>
    </div>
  )
}
export default Header