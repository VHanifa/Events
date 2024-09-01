import React from "react";
import signupImage from "../../assets/images/signup-image.png";

function SignupContainer() {
  return (
    <section className="container flex py-16 md:py-40">
      <div className="w-full bg-surface-color-1 flex flex-col md:grid md:grid-cols-2 gap-14 md:gap-0 items-center md:justify-between px-14 py-14 rounded-2xl">
        <div className="flex flex-col gap-6 max-w-xl">
          <div className="flex flex-col gap-1">
            <h1 className="font-semibold text-xl md:text-3xl">
              Join Eventslink
            </h1>
            <p className="text-sm md:text-xl font-montserrat">
              People use Eventslink to meet new people, learn new things, find
              support, get out of their comfort zones, and pursue their
              passions, together. Membership is free.
            </p>
          </div>
          <button className="w-fit flex bg-button text-white py-2 md:py-4 px-4 md:px-8 rounded-lg font-medium md:text-xl ">
            Sign up
          </button>
        </div>
        <div className="w-full flex md:justify-end xl:pr-20">
          <img src={signupImage} alt="Signup image" />
        </div>
      </div>
    </section>
  );
}

export default SignupContainer;
