import Bounded from "@/components/HOC/Bounded";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "This Privacy Policy applies to The Elevator Company. We recognize the importance of protecting your personal information and value the trust you place in us. This policy outlines how we collect, use, and safeguard your information when you visit our website or interact with us offline. By accessing or using our website, you agree to the terms outlined in this Privacy Policy.",
};

const TermsAndConditions = () => {
  return (
   <Bounded>
     <div className="max-w-4xl mx-auto p-6 space-y-6  ">
      <h1 className="text-3xl font-bold text-center ">Terms & Conditions</h1>
      <section>
        <h2 className="text-xl font-semibold">Payment Policy</h2>
        <p>We strictly DO NOT accept cash payments in any form. All payments must be made in favor of <strong>The Elevator Company</strong>. Please note that all listed prices are exclusive of taxes.</p>
        <p>Bank Details:<br />
        <strong>Punjab National Bank</strong>, Vikas Puri, New Delhi<br />
        <strong>Account No:</strong> 1610002100309687</p>
        <p>For seamless online payments, please forward your transaction details, including your name, city, and amount, to <a href="mailto:vikas@thelevatorcompany.com" className="text-gold hover:underline">vikas@thelevatorcompany.com</a>. Once the payment is realized, we will promptly acknowledge and issue a receipt.</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Power Requirements</h2>
        <p>To ensure optimal performance and longevity of the lift, a stabilized power connection is essential. The required specifications are:</p>
        <ul className="list-disc list-inside">
          <li>Stabalized Power Supply</li>
          <li>Minimum 32 Amp supply</li>
          <li>Dedicated circuit breaker</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Installation Requirements</h2>
        <p>Successful installation requires your partnership. Customers are responsible for any necessary civil works. If structural support is required, it must be arranged independently.</p>
        <p>For flexibility, installation requests beyond standard working hours can be accommodated, subject to availability and a nominal fee.</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Warranty Coverage</h2>
        <p>We are dedicated to ensuring the longevity of your lift with our robust warranty coverage. Our warranty includes parts, provided the lift is maintained regularly by our trained experts at <strong>The Elevator Company</strong>. Compliance with the manufacturer’s Annual Maintenance Contract (AMC) and servicing guidelines is required to ensure uninterrupted warranty benefits.</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Force Majeure</h2>
        <p>In rare cases of unforeseen external disruptions beyond our control, reasonable extensions to service timelines and costs may occur. If such circumstances persist beyond 60 days, we will provide full transparency and the option to terminate the work without obligations.</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Storage Policy</h2>
        <p>We offer complimentary lift storage for an initial period of two weeks. Beyond this grace period, minimal storage charges will apply.</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Order Cancellation</h2>
        <p>We understand that plans may change. In the event of order cancellation:</p>
        <ul className="list-disc list-inside">
          <li>Within 24 hours of quotation: 25% of the total price will be retained.</li>
          <li>Once production begins: 60% of the total price will be retained.</li>
          <li>Upon readiness for dispatch: 85% of the total price will be retained.</li>
          <li>At the time of delivery: Full payment is required.</li>
        </ul>
        <p>To process cancellations, requests must be submitted via registered email.</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Legal Compliance</h2>
        <p>All operations adhere to the esteemed legal standards of India. In the unlikely event of disputes, they will be resolved exclusively within India’s jurisdiction.</p>
      </section>
    </div>
   </Bounded>
  );
};

export default TermsAndConditions;
