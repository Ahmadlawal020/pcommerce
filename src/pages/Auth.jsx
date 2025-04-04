import { useState } from "react";
import { LogInForm, SignUpForm } from "../feautures";

const Auth = () => {
  const [authType, setAuthType] = useState("sign-in");
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Handle switching between login and signup forms
  const handleSwitchAuth = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setAuthType((prev) => (prev === "sign-in" ? "sign-up" : "sign-in"));
      setIsTransitioning(false);
    }, 300); // Match the transition duration
  };

  return (
    <section className="w-full h-screen flex justify-center items-center bg-[#e5e7eb]">
      <div className="py-2">
        {/* Render the appropriate form with transition */}
        <div className="auth-form-transition">
          {authType === "sign-in" ? (
            <div className={isTransitioning ? "auth-form-hidden" : ""}>
              <LogInForm onSwitchToSignUp={handleSwitchAuth} />
            </div>
          ) : (
            <div className={isTransitioning ? "auth-form-hidden" : ""}>
              <SignUpForm onSwitchToLogin={handleSwitchAuth} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Auth;
