import React from "react";
import {
  SignedOut,
  SignedIn,
  SignInButton,
  SignOutButton,
  UserButton,
  useUser,
} from "@clerk/clerk-react";
import toast from "react-hot-toast";

const HomePage = () => {
  return (
    <div>
      <button
        className="btn btn-primary"
        onClick={() => toast.success("success")}
      >
        click-me
      </button>
      <SignedOut>
        <SignInButton mode="modal">
          <button>Log-in</button>
        </SignInButton>
      </SignedOut>

      <SignedIn>
        <SignOutButton />
      </SignedIn>

      <UserButton />
    </div>
  );
};

export default HomePage;
