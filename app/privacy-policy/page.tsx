import Bounded from "@/components/HOC/Bounded";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "This Privacy Policy applies to The Elevator Company. We recognize the importance of protecting your personal information and value the trust you place in us. This policy outlines how we collect, use, and safeguard your information when you visit our website or interact with us offline. By accessing or using our website, you agree to the terms outlined in this Privacy Policy.",
};

const PrivacyPolicy = () => {
  return (
    <Bounded id="head">
      <h1 className="text-3xl font-bold text-center mb-6 text-gold brightness-150 ">Privacy Policy</h1>

      <p className="text-muted-foreground mb-4">
        This Privacy Policy applies to <strong className="text-gold  font-semibold">The Elevator Company</strong>. We recognize the
        importance of protecting your personal information and value the trust
        you place in us. This policy outlines how we collect, use, and safeguard
        your information when you visit our website or interact with us offline.
      </p>

      <p className="text-muted-foreground mb-4">
        By accessing or using our website, you agree to the terms outlined in
        this Privacy Policy.
      </p>

      <h2 className="text-xl font-semibold mt-6 text-gold ">Information We Collect</h2>
      <p className="text-muted-foreground mt-2">We may collect the following types of information:</p>
      <ul className="list-disc text-muted-foreground pl-5 mt-2 space-y-2">
        <li>
          <strong className="text-gold ">Contact Details:</strong> Your name, email, phone number,
          address, city, state, postal code, country, and IP address.
        </li>
        <li>
          <strong className="text-gold ">Demographic Data:</strong> Details about your interests,
          preferences, and event participation.
        </li>
        <li>
          <strong className="text-gold ">Technical Data:</strong> Information such as IP address,
          browser type, referring website, time spent on our site, and pages
          visited.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 text-gold ">How We Collect Information</h2>
      <ul className="list-disc text-muted-foreground pl-5 mt-2 space-y-2">
        <li>
          <strong className="text-gold ">Direct Collection:</strong> Information provided through forms
          on our website.
        </li>
        <li>
          <strong className="text-gold ">Passive Collection:</strong> Data gathered via cookies, Google
          Analytics, and other tracking tools.
        </li>
        <li>
          <strong className="text-gold ">Third-Party Sources:</strong> Information shared by social
          media platforms when you use integrated features.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 text-gold ">How We Use Your Information</h2>
      <ul className="list-disc text-muted-foreground pl-5 mt-2 space-y-2">
        <li>
          <strong className="text-gold ">To Communicate:</strong> We may contact you regarding
          inquiries, updates, or services.
        </li>
        <li>
          <strong className="text-gold ">To Improve Services:</strong> Your information helps us
          enhance user experience and tailor our offerings.
        </li>
        <li>
          <strong className="text-gold ">To Analyze Trends:</strong> Understanding visitor behavior
          helps us optimize our website.
        </li>
        <li>
          <strong className="text-gold ">For Security:</strong> Ensuring the protection of our
          customers and digital assets.
        </li>
        <li>
          <strong className="text-gold ">For Marketing:</strong> Providing details about promotions,
          new features, and relevant third-party offers.
        </li>
        <li>
          <strong className="text-gold ">For Transactions:</strong> Sending notifications, receipts, or
          confirmations via email, SMS, or WhatsApp.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 text-gold ">Policy Updates</h2>
      <p className="text-muted-foreground mt-2">
        This policy was last updated on <strong className="text-gold ">February 21, 2025</strong>. We
        may revise our privacy practices periodically. Any significant changes
        will be communicated on our website.
      </p>
      <p className="text-muted-foreground mt-2">Please review this page regularly for updates.</p>

      <h2 className="text-xl font-semibold mt-6 text-gold ">Contact Us</h2>
      <p className="text-muted-foreground mt-2">
        For any questions or concerns regarding this policy, please email us at:
      </p>
      <p className="text-muted-foreground font-medium text-gold  text-sm">info@theelevatorcompany.com</p>

      <h2 className="text-xl font-semibold mt-6 text-gold ">Jurisdiction</h2>
      <p className="text-muted-foreground mt-2">
        By using our website, you agree that any disputes related to this
        Privacy Policy will be governed by the laws of India.
      </p>
    </Bounded>
  );
};

export default PrivacyPolicy;
