// import { useState } from 'react'
import './App.css'
import { SignedOut, SignedIn, SignInButton, SignOutButton, UserButton } from '@clerk/clerk-react'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vite + React</h1>
    <SignedOut>
      <SignInButton mode="modal">
        <button >Log In</button>
      </SignInButton>
     </SignedOut>

     <SignedIn>
      <SignOutButton />
     </SignedIn>

     <UserButton/>
    </>
  )
}

export default App
