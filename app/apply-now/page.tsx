import React from "react";
import RegistrationFormSection from "@/components/RegistrationFormSection";

export default function ApplyNow() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="h-20" />
      <RegistrationFormSection
        title={<>Begin Your Journey with <span className="text-primary">Astro One</span></>}
        description="Fill in the form below to submit your registration. Our team will contact you shortly."
      />
    </div>
  );
}
