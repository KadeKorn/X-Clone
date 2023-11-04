import useLoginModal from "@/hooks/useLoginModal";
import { useCallback, useState } from "react";
import useRegisterModal from "@/hooks/useRegisterModal";

import Input from "../Input";
import Modal from "../Modal";
import { signIn } from "next-auth/react";

const LoginModal = () => {
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onToggle = useCallback(() => {
    if (isLoading) {
      return;
    }
    loginModal.onClose();
    registerModal.onOpen();
  }, [isLoading, registerModal, loginModal]);

  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true);

      await signIn("credentials", {
        redirect: false,
        email,
        password,
      }).then((result) => {
        if (result && result.error) {
          // Handle errors here
          console.log(result.error);
          // You might want to show an error message to the user here
        } else {
          // Success
          loginModal.onClose();
          // You may want to redirect the user or perform some other action
        }
      });

      // Remove the loginModal.onClose(); from here
    } catch (error) {
      console.error("An error occurred during sign in:", error);
      // You might want to show an error message to the user here
    } finally {
      setIsLoading(false);
    }
  }, [email, password, loginModal, setIsLoading]);

  const bodyContent = (
    <div className="flex flex-col gap-4 ">
      <Input
        placeholder="Email"
        type="email" // It's good practice to specify the type for email inputs
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        disabled={isLoading}
      />
      <Input
        placeholder="Password"
        type="password" // And for password inputs
        onChange={(e) => setPassword(e.target.value)}
        value={password} // This is where the fix is made
        disabled={isLoading}
      />
    </div>
  );

  const footerContent = (
    <div className="text-neutral-400 text-center mt-4">
      <p>
        First time using X?{" "}
        <span
          onClick={onToggle}
          className="text-white cursor-pointer hover:underline"
        >
          Create an account
        </span>
      </p>
    </div>
  );
  return (
    <Modal
      disabled={isLoading}
      isOpen={loginModal.isOpen}
      title="Login"
      actionLabel="Sign in"
      onClose={loginModal.onClose}
      onSubmit={onSubmit}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default LoginModal;
