"use client";

import React, { useEffect, useRef, useState } from "react";
import { triggerConversion } from "@/lib/gtag";

type RegistrationFormData = {
  hasAccount: string;
  accountNumber: string;
  package: string;
  isCivilServant: string;
  installationMethod: string;
  fullName: string;
  icNumber: string;
  phone: string;
  email: string;
  address: string;
  remark: string;
  installationDate: string;
  installationTime: string;
};

type RegistrationFormSectionProps = {
  sectionId?: string;
  title?: React.ReactNode;
  description?: string;
  presetData?: Partial<RegistrationFormData>;
};

const initialFormData: RegistrationFormData = {
  hasAccount: "",
  accountNumber: "",
  package: "",
  isCivilServant: "",
  installationMethod: "",
  fullName: "",
  icNumber: "",
  phone: "",
  email: "",
  address: "",
  remark: "",
  installationDate: "",
  installationTime: "",
};

export default function RegistrationFormSection({
  sectionId = "registration-section",
  title = (
    <>
      Choose Your Favourite <span className="text-primary">Astro One</span> Today!
    </>
  ),
  description = "Fill in the form to explore and select the Astro One (Channels) package that suits your lifestyle best.",
  presetData,
}: RegistrationFormSectionProps) {
  const [formStep, setFormStep] = useState(1);
  const [formLoading, setFormLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState<RegistrationFormData>(initialFormData);
  const [payslipFileName, setPayslipFileName] = useState("");
  const [icFrontFileName, setIcFrontFileName] = useState("");
  const [icBackFileName, setIcBackFileName] = useState("");
  const [fileError, setFileError] = useState("");
  const payslipInputRef = useRef<HTMLInputElement>(null);
  const icFrontInputRef = useRef<HTMLInputElement>(null);
  const icBackInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!presetData) {
      return;
    }

    setFormData((prev) => ({ ...prev, ...presetData }));
  }, [presetData]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "isCivilServant" && value !== "Yes") {
      setFileError("");
      setPayslipFileName("");
      if (payslipInputRef.current) {
        payslipInputRef.current.value = "";
      }
    }
  };

  const validateFile = (file: File) => {
    const allowed = ["pdf", "jpg", "jpeg", "png", "webp"];
    const ext = file.name.split(".").pop()?.toLowerCase() ?? "";

    if (!allowed.includes(ext)) {
      return "Invalid format. Use PDF, JPG, JPEG, PNG, or WEBP.";
    }

    if (file.size > 5 * 1024 * 1024) {
      return "File is too large. Maximum size is 5MB.";
    }

    return null;
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, field: "payslip" | "icFront" | "icBack") => {
    const file = e.target.files?.[0];
    const setFileName =
      field === "payslip" ? setPayslipFileName : field === "icFront" ? setIcFrontFileName : setIcBackFileName;

    if (!file) {
      setFileName("");
      setFileError("");
      return;
    }

    const error = validateFile(file);
    if (error) {
      setFileError(error);
      setFileName("");
      e.target.value = "";
      return;
    }

    setFileError("");
    setFileName(file.name);
  };

  const handleRemoveFile = (field: "payslip" | "icFront" | "icBack") => {
    if (field === "payslip") {
      setPayslipFileName("");
      if (payslipInputRef.current) payslipInputRef.current.value = "";
    } else if (field === "icFront") {
      setIcFrontFileName("");
      if (icFrontInputRef.current) icFrontInputRef.current.value = "";
    } else if (field === "icBack") {
      setIcBackFileName("");
      if (icBackInputRef.current) icBackInputRef.current.value = "";
    }
    setFileError("");
  };

  const resetForm = () => {
    setFormStep(1);
    setFormLoading(false);
    setFormSubmitted(false);
    setFormData(initialFormData);
    setPayslipFileName("");
    setIcFrontFileName("");
    setIcBackFileName("");
    setFileError("");
    if (payslipInputRef.current) payslipInputRef.current.value = "";
    if (icFrontInputRef.current) icFrontInputRef.current.value = "";
    if (icBackInputRef.current) icBackInputRef.current.value = "";
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    if (formStep === 1) {
      e.preventDefault();
      setFormStep(2);
      window.scrollTo({
        top: document.getElementById(sectionId)?.offsetTop ? document.getElementById(sectionId)!.offsetTop - 100 : 0,
        behavior: "smooth",
      });
      return;
    }

    if (!icFrontInputRef.current?.files?.length || !icBackInputRef.current?.files?.length) {
      e.preventDefault();
      setFormLoading(false);
      setFileError("Upload of IC/Passport (Front & Back) is required for registration.");
      return;
    }

    if (formData.isCivilServant === "Yes" && !payslipInputRef.current?.files?.length) {
      e.preventDefault();
      setFormLoading(false);
      setFileError("Payslip upload is required for civil servant registration.");
      return;
    }

    setFormLoading(true);
    window.setTimeout(() => {
      triggerConversion();
      setFormSubmitted(true);
      setFormLoading(false);
    }, 250);
  };

  return (
    <section id={sectionId} className="py-24 bg-white relative overflow-hidden">
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-black text-zinc-900 tracking-tight leading-tight">{title}</h2>
          <p className="text-zinc-600 text-lg font-medium max-w-2xl mx-auto">{description}</p>
        </div>

        {!formSubmitted ? (
          <div className="bg-white rounded-[2.5rem] border border-zinc-100 shadow-2xl shadow-zinc-200/50 overflow-hidden">
            <div className="bg-zinc-50 border-b border-zinc-100 p-8 md:p-12 flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white text-sm font-bold">
                    {formStep}
                  </span>
                  <h3 className="text-2xl font-bold text-zinc-900">
                    {formStep === 1 ? "Select Your Package" : "Pick Installation Date & Time"}
                  </h3>
                </div>
                <p className="text-zinc-500 font-medium">Step {formStep} of 2</p>
              </div>

              <div className="flex gap-2">
                <div className={`h-2 w-16 rounded-full transition-all duration-500 ${formStep >= 1 ? "bg-primary" : "bg-zinc-200"}`} />
                <div className={`h-2 w-16 rounded-full transition-all duration-500 ${formStep >= 2 ? "bg-primary" : "bg-zinc-200"}`} />
              </div>
            </div>

            <form action="/register.php" method="POST" target="_blank" encType="multipart/form-data" onSubmit={handleFormSubmit} className="p-8 md:p-12 space-y-10">
              {formStep === 2 &&
                Object.entries(formData)
                  .filter(([key]) => key !== "installationDate" && key !== "installationTime")
                  .map(([key, value]) => <input key={key} type="hidden" name={key} value={value} />)}

              {formStep === 1 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-zinc-700 ml-1">Do you have an Astro Account?</label>
                    <select
                      name="hasAccount"
                      value={formData.hasAccount}
                      onChange={handleInputChange}
                      className="w-full p-4 rounded-2xl bg-zinc-50 border border-zinc-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all font-medium text-zinc-900"
                      required
                    >
                      <option value="">- Select -</option>
                      <option value="No">No</option>
                      <option value="Yes">Yes</option>
                    </select>
                  </div>

                  {formData.hasAccount === "Yes" && (
                    <div className="space-y-2 animate-in fade-in slide-in-from-top-2 duration-300">
                      <label className="text-sm font-bold text-zinc-700 ml-1">Astro Account Number</label>
                      <input
                        type="text"
                        name="accountNumber"
                        placeholder="Enter your account number"
                        value={formData.accountNumber}
                        onChange={handleInputChange}
                        className="w-full p-4 rounded-2xl bg-zinc-50 border border-zinc-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all font-medium text-zinc-900"
                        required
                      />
                    </div>
                  )}

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-zinc-700 ml-1">Astro One Packages</label>
                    <select
                      name="package"
                      value={formData.package}
                      onChange={handleInputChange}
                      className="w-full p-4 rounded-2xl bg-zinc-50 border border-zinc-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all font-medium text-zinc-900"
                      required
                    >
                      <option value="">- Select -</option>
                      <option value="Astro One ENTERTAINMENT PACK">Astro One ENTERTAINMENT PACK</option>
                      <option value="Astro One SPORTS PACK">Astro One SPORTS PACK</option>
                      <option value="Astro One EPIC PACK">Astro One EPIC PACK</option>
                      <option value="Astro One ENTERTAINMENT PACK + Civil Servant Rebate">Astro One ENTERTAINMENT PACK + Civil Servant Rebate</option>
                      <option value="Astro One Entertainment + Netflix">Astro One Entertainment + Netflix</option>
                      <option value="Astro One Sports + Netflix">Astro One Sports + Netflix</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-zinc-700 ml-1">Are you a Malaysian Civil Servant?</label>
                    <select
                      name="isCivilServant"
                      value={formData.isCivilServant}
                      onChange={handleInputChange}
                      className="w-full p-4 rounded-2xl bg-zinc-50 border border-zinc-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all font-medium text-zinc-900"
                      required
                    >
                      <option value="">- Select -</option>
                      <option value="No">No</option>
                      <option value="Yes">Yes</option>
                    </select>
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <label className="text-sm font-bold text-zinc-700 ml-1">Installation Method</label>
                    <select
                      name="installationMethod"
                      value={formData.installationMethod}
                      onChange={handleInputChange}
                      className="w-full p-4 rounded-2xl bg-zinc-50 border border-zinc-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all font-medium text-zinc-900"
                      required
                    >
                      <option value="">- Select -</option>
                      <option value="Plug & Play (FREE)">Plug & Play (FREE)</option>
                      <option value={formData.isCivilServant === "Yes" ? "Standard (RM99)" : "Standard (RM50)"}>
                        {formData.isCivilServant === "Yes" ? "Standard (RM99)" : "Standard (RM50)"}
                      </option>
                    </select>
                    <p className="text-xs text-zinc-500 italic mt-2 px-1">
                      {formData.installationMethod === "Plug & Play (FREE)"
                        ? '"Please note that the Plug & Play installation method requires an active Wi-Fi connection in your home..."'
                        : formData.isCivilServant === "Yes"
                          ? '"With the Civil Servants Promo, your one-time satellite dish installation is RM99... If you have existing WiFi, you can also opt for free Plug & Play installation."'
                          : "Standard satellite dish installation."}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-zinc-700 ml-1">Full Name (as per I/C or Passport)</label>
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Your full name"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full p-4 rounded-2xl bg-zinc-50 border border-zinc-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all font-medium text-zinc-900"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-zinc-700 ml-1">I/C or Passport Number</label>
                    <input
                      type="text"
                      name="icNumber"
                      placeholder="Your ID number"
                      value={formData.icNumber}
                      onChange={handleInputChange}
                      className="w-full p-4 rounded-2xl bg-zinc-50 border border-zinc-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all font-medium text-zinc-900"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-zinc-700 ml-1">Phone Number (WhatsApp Active)</label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="e.g. 012-345 6789"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full p-4 rounded-2xl bg-zinc-50 border border-zinc-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all font-medium text-zinc-900"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-zinc-700 ml-1">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full p-4 rounded-2xl bg-zinc-50 border border-zinc-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all font-medium text-zinc-900"
                      required
                    />
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <label className="text-sm font-bold text-zinc-700 ml-1">Installation Address</label>
                    <textarea
                      name="address"
                      rows={3}
                      placeholder="Enter your full installation address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="w-full p-4 rounded-2xl bg-zinc-50 border border-zinc-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all font-medium text-zinc-900 resize-none"
                      required
                    />
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <label className="text-sm font-bold text-zinc-700 ml-1">Special Remark</label>
                    <textarea
                      name="remark"
                      rows={2}
                      placeholder="Optional remarks..."
                      value={formData.remark}
                      onChange={handleInputChange}
                      className="w-full p-4 rounded-2xl bg-zinc-50 border border-zinc-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all font-medium resize-none"
                    />
                  </div>

                  <div className="md:col-span-2 flex items-start gap-3 p-4 bg-zinc-50 rounded-2xl border border-zinc-100">
                    <input type="checkbox" required className="mt-1 w-5 h-5 accent-primary" />
                    <p className="text-xs text-zinc-500 leading-relaxed">
                      I declare that I have read, understand and agree to the <a href="#" className="text-primary hover:underline">Terms & Conditions</a> and consent to the processing of my personal data in accordance with MGPN.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-zinc-700 ml-1">Select Your Installation Date</label>
                    <input
                      type="date"
                      name="installationDate"
                      value={formData.installationDate}
                      onChange={handleInputChange}
                      className="w-full p-4 rounded-2xl bg-zinc-50 border border-zinc-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all font-medium text-zinc-900"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-zinc-700 ml-1">Select Your Installation Time</label>
                    <select
                      name="installationTime"
                      value={formData.installationTime}
                      onChange={handleInputChange}
                      className="w-full p-4 rounded-2xl bg-zinc-50 border border-zinc-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all font-medium text-zinc-900"
                      required
                    >
                      <option value="">- Select -</option>
                      <option value="9:30 A.M">9:30 A.M</option>
                      <option value="12:00 P.M">12:00 P.M</option>
                      <option value="2:00 P.M">2:00 P.M</option>
                      <option value="4:00 P.M">4:00 P.M</option>
                      </select>
                  </div>

                  <div className="space-y-2 md:col-span-2 animate-in fade-in zoom-in-95 duration-300">
                    <label className="text-sm font-bold text-zinc-700 ml-1">Copy of I/C or Passport (Front & Back)</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* FRONT */}
                      <div className={`relative border-2 border-dashed rounded-[2rem] p-6 text-center transition-all bg-zinc-50/50 group ${icFrontFileName ? "border-primary/50 bg-primary/5 shadow-inner" : "border-zinc-200 hover:border-primary/30"}`}>
                        <input
                          ref={icFrontInputRef}
                          type="file"
                          name="icFrontFile"
                          className="sr-only"
                          id="ic-front-upload"
                          accept="image/*,.pdf"
                          onChange={(e) => handleFileChange(e, "icFront")}
                        />
                        {icFrontFileName ? (
                          <div className="space-y-2 animate-in zoom-in-95 duration-200">
                            <div className="w-10 h-10 bg-primary text-white rounded-xl flex items-center justify-center mx-auto shadow-lg shadow-primary/20">
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <p className="text-xs font-bold text-primary truncate px-2">{icFrontFileName}</p>
                            <button
                              type="button"
                              onClick={() => handleRemoveFile("icFront")}
                              className="absolute -top-2 -right-2 w-7 h-7 bg-red-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-red-600 transition-colors"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                              </svg>
                            </button>
                          </div>
                        ) : (
                          <label htmlFor="ic-front-upload" className="cursor-pointer space-y-2 block">
                            <div className="w-10 h-10 bg-white rounded-xl border border-zinc-100 flex items-center justify-center mx-auto shadow-sm group-hover:scale-110 transition-transform">
                              <svg className="w-5 h-5 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                              </svg>
                            </div>
                            <p className="text-xs font-bold text-zinc-600">Upload Front Side</p>
                          </label>
                        )}
                      </div>

                      {/* BACK */}
                      <div className={`relative border-2 border-dashed rounded-[2rem] p-6 text-center transition-all bg-zinc-50/50 group ${icBackFileName ? "border-primary/50 bg-primary/5 shadow-inner" : "border-zinc-200 hover:border-primary/30"}`}>
                        <input
                          ref={icBackInputRef}
                          type="file"
                          name="icBackFile"
                          className="sr-only"
                          id="ic-back-upload"
                          accept="image/*,.pdf"
                          onChange={(e) => handleFileChange(e, "icBack")}
                        />
                        {icBackFileName ? (
                          <div className="space-y-2 animate-in zoom-in-95 duration-200">
                            <div className="w-10 h-10 bg-primary text-white rounded-xl flex items-center justify-center mx-auto shadow-lg shadow-primary/20">
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <p className="text-xs font-bold text-primary truncate px-2">{icBackFileName}</p>
                            <button
                              type="button"
                              onClick={() => handleRemoveFile("icBack")}
                              className="absolute -top-2 -right-2 w-7 h-7 bg-red-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-red-600 transition-colors"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                              </svg>
                            </button>
                          </div>
                        ) : (
                          <label htmlFor="ic-back-upload" className="cursor-pointer space-y-2 block">
                            <div className="w-10 h-10 bg-white rounded-xl border border-zinc-100 flex items-center justify-center mx-auto shadow-sm group-hover:scale-110 transition-transform">
                              <svg className="w-5 h-5 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                              </svg>
                            </div>
                            <p className="text-xs font-bold text-zinc-600">Upload Back Side</p>
                          </label>
                        )}
                      </div>
                    </div>
                    <p className="text-[10px] text-zinc-400 text-center mt-2 italic">*Required for verification</p>
                  </div>

                  {formData.isCivilServant === "Yes" && (
                    <div className="space-y-2 md:col-span-2 animate-in fade-in zoom-in-95 duration-300">
                      <label className="text-sm font-bold text-zinc-700 ml-1">Payslip Letterhead (Civil Servant)</label>
                      <div className={`relative border-2 border-dashed rounded-[2rem] p-8 text-center transition-all bg-zinc-50/50 group ${payslipFileName ? "border-primary/50 bg-primary/5 shadow-inner" : "border-zinc-200 hover:border-primary/30"}`}>
                        <input
                          ref={payslipInputRef}
                          type="file"
                          name="payslipFile"
                          className="sr-only"
                          id="payslip-upload"
                          accept="image/*,.pdf"
                          onChange={(e) => handleFileChange(e, "payslip")}
                        />
                        {payslipFileName ? (
                          <div className="space-y-3 animate-in zoom-in-95 duration-200">
                            <div className="w-12 h-12 bg-primary text-white rounded-2xl flex items-center justify-center mx-auto shadow-lg shadow-primary/20">
                              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <p className="text-sm font-bold text-primary">{payslipFileName}</p>
                            <p className="text-xs text-zinc-400">File uploaded successfully.</p>
                            <button
                              type="button"
                              onClick={() => handleRemoveFile("payslip")}
                              className="absolute -top-3 -right-3 w-9 h-9 bg-red-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-red-600 transition-colors"
                            >
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                              </svg>
                            </button>
                          </div>
                        ) : (
                          <label htmlFor="payslip-upload" className="cursor-pointer space-y-3 block">
                            <div className="w-12 h-12 bg-white rounded-2xl border border-zinc-100 flex items-center justify-center mx-auto shadow-sm group-hover:scale-110 transition-transform">
                              <svg className="w-6 h-6 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                              </svg>
                            </div>
                            <p className="text-sm font-bold text-zinc-600">Insert Your Files Here</p>
                            <p className="text-xs text-zinc-400">Please provide only the letterhead section of the payslip.</p>
                          </label>
                        )}
                      </div>
                    </div>
                  )}
                  {fileError && <p className="text-sm text-red-600 font-semibold md:col-span-2 text-center">{fileError}</p>}
                </div>
              )}

              <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-zinc-100">
                {formStep === 2 && (
                  <button
                    type="button"
                    onClick={() => setFormStep(1)}
                    className="px-8 py-4 rounded-2xl font-bold text-zinc-500 hover:text-zinc-800 hover:bg-zinc-100 transition-all"
                  >
                    ← Previous
                  </button>
                )}
                <button
                  type="submit"
                  disabled={formLoading}
                  className="ml-auto w-full sm:w-auto px-10 py-5 rounded-2xl bg-primary text-white font-black text-xl shadow-xl shadow-primary/20 hover:-translate-y-1 active:translate-y-0 transition-all disabled:opacity-50 flex items-center justify-center gap-3"
                >
                  {formLoading ? (
                    <>
                      <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Processing...</span>
                    </>
                  ) : (
                    <span>{formStep === 1 ? "Select Installation Date" : "Submit Registration"}</span>
                  )}
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="bg-white rounded-[3rem] border border-zinc-100 shadow-2xl p-16 text-center space-y-8 animate-in zoom-in-95 duration-700">
            <div className="w-24 h-24 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto animate-bounce">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div className="space-y-3">
              <h2 className="text-4xl font-black text-zinc-900">Application Received!</h2>
              <p className="text-zinc-600 text-lg font-medium">Thank you for choosing Astro. Our team will contact you shortly to verify your details.</p>
            </div>
            <button onClick={resetForm} className="text-primary font-bold hover:underline">
              Submit another application
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
