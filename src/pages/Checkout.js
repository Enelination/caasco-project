import React from "react";
import { AmplifyAuthenticator } from "@aws-amplify/ui-react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/CheckoutForm";

const Checkout = () => {
  const stripePromise = loadStripe(
    "pk_test_51HyleoGDDDxQOB3irCQbQ6RiVHksLoUcG3TvSnBkq3KM8FGwrEJXAW8tjvqDlCX1Q2R1tXnjPSuE4JGoQGwSpkQT00aZ7x6629"
  );

  return (
    <section className="checkout-wrapper">
      <AmplifyAuthenticator>
        <Elements stripe={stripePromise}>
          <section>
            <h2>Time to Checkout?</h2>
            <CheckoutForm />
          </section>
        </Elements>
      </AmplifyAuthenticator>
    </section>
  );
};

export default Checkout;
