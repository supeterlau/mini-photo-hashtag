'use client';

import { useState } from 'react';

import Header from './Header'
import Modal from './Modal';
import SignInModal from './SignInModal';
import SignUpModal from './SignUpModal';

export default function PhotoLayout ({children}: {
  children: React.ReactNode
}) {
  const [showModal, setShowModal] = useState(false)
  const [showSignUpModal, setShowSignUpModal] = useState(false)
  const [showSignInModal, setShowSignInModal] = useState(false)

  const showSignIn = () => {
    console.log('showSignIn')
    setShowSignInModal(true)
    setShowSignUpModal(false)
    setShowModal(true)
  }
  const showSignUp = () => {
    setShowSignUpModal(true)
    setShowSignInModal(false)
    setShowModal(true)
  }

  return (
    <>
    <Header showModal={(name: string) => {
      if (name=='signin') showSignIn()
      if (name=='signup') showSignUp()
    }}/>
    {children}
    {showModal && <Modal close={()=>setShowModal(false)}>
      {showSignInModal && <SignInModal 
      showSignUp={() => showSignUp()}
      />}
      {showSignUpModal && <SignUpModal 
      showSignIn={() => showSignIn()}/>}
      </Modal>}
    </>

  )
}