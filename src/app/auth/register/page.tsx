"use client";
import React, { useRef, useState } from "react";
import { FaEnvelope, FaUser } from "react-icons/fa";
import { BiSolidLock } from "react-icons/bi";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import Button from "@/components/Button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ReCAPTCHA from "react-google-recaptcha";
import Swal from "sweetalert2";
import { verifyCaptcha } from "@/utils/verifyCaptcha";
import registerUser from "@/utils/registerUser";
import { LoginBg } from "../../../../public";

interface RegisterPageLayoutProps {
  children: React.ReactNode;
  fullName?: string;
  email?: string;
  password?: string;
  confirmpassword?: string;
}

const RegisterPageLayout: React.FC<RegisterPageLayoutProps> = () => {
  const router = useRouter();
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "";
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [isVerified, setIsVerified] = useState<boolean>(false);
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [seePass, setSeePass] = useState<"text" | "password">("password");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [seeConfirmPass, setSeeConfirmPass] = useState<"text" | "password">(
    "password"
  );
  const [registerError, setRegisterError] =
    useState<RegisterPageLayoutProps | null>(null);
  const [passwordStrength, setPasswordStrength] = useState<number>(0);

  const calculatePasswordStrength = (password: string) => {
    const capitalLetterRegex = /[A-Z]/;
    const smallLetterRegex = /[a-z]/;
    const numberRegex = /[0-9]/;
    const specialSymbolRegex = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/;

    const hasCapitalLetter = capitalLetterRegex.test(password);
    const hasSmallLetter = smallLetterRegex.test(password);
    const hasNumber = numberRegex.test(password);
    const hasSpecialSymbol = specialSymbolRegex.test(password);
    const hasValidLength = password.length >= 8;

    // Calculate the password strength
    let strength = 0;
    if (hasCapitalLetter) strength += 0.2;
    if (hasSmallLetter) strength += 0.2;
    if (hasNumber) strength += 0.2;
    if (hasSpecialSymbol) strength += 0.2;
    if (hasValidLength) strength += 0.2;

    // Update the state synchronously
    setPasswordStrength(strength);

    // Update the error message
    setRegisterError({
      password: strength < 1 ? "Password format is not correct!" : "",
      children: null,
    });
  };

  const sessionTokens =
    typeof window !== "undefined" ? sessionStorage.getItem("tokens") : null;

  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const userData = { fullName, email, password };
      if (!fullName) {
        setRegisterError({
          fullName: "Full Name is required",
          children: null,
        });
      } else if (!email) {
        setRegisterError({
          email: "Email is required",
          children: null,
        });
      } else if (password === "") {
        setRegisterError({
          password: "Password is required",
          children: null,
        });
      } else if (confirmPassword === "") {
        setRegisterError({
          confirmpassword: "Confirm Password is required",
          children: null,
        });
      } else if (password !== confirmPassword) {
        Swal.fire({
          icon: "error",
          title: "Passwords do not match",
          text: "Make sure the passwords must be matched.",
        });
        return;
      } else {
        // if (recaptchaToken) {
        const result = await registerUser(userData);
        if (result.success) {
          setRegisterError({
            fullName: "",
            email: "",
            password: "",
            confirmpassword: "",
            children: null,
          });
          await Swal.fire({
            icon: "success",
            title: "Success",
            text: "Registration done Successfully!",
          });
          router.push("/auth/login");
        } else {
          await Swal.fire({
            icon: "error",
            title: "Ooops...",
            text: result.message,
          });
        }
        // }
      }
    } catch (error) {
      await Swal.fire({
        icon: "error",
        title: "Ooops...",
        text: "Something went wrong!",
      });
    }
  };

  const handleRecaptchaChange = async (token: string | null) => {
    try {
      if (token) {
        await verifyCaptcha(token);
        setRecaptchaToken(token);
        setIsVerified(true);
      }
    } catch (error) {
      setRecaptchaToken(null);
      setIsVerified(false);
      console.error("reCAPTCHA verification failed:", error);
    }
  };

  return (
    <div className="h-screen w-full space-y-5 bg-slate-900">
      <form
        onSubmit={submitForm}
        autoComplete="off"
        className="h-screen w-full flex justify-end"
      >
        <Link
          href="/"
          className="absolute z-50 left-2 top-2 opacity-75 hover:opacity-100 text-white border rounded-3xl px-4 py-1"
        >
          Back
        </Link>
        <div className="w-full md:w-2/3 left-0 opacity-10 md:opacity-100 absolute h-screen object-cover text-white">
          <img
            src={LoginBg}
            alt=""
            className="w-full h-full object-cover rounded-l-lg filter brightness-75"
          />
        </div>
        <div className="w-full z-10  md:w-1/3 h-screen flex items-center justify-center bg-transparent ">
          <div className="w-[80%] md:w-[70%] gap-y-6  flex flex-col text-white">
            <div className="text-center font-bold pt-10 text-3xl md:text-4xl">
              Register
            </div>

            {/* Name input */}
            <label className="flex items-center relative">
              <div className="absolute left-[20px] ">
                <FaUser />
              </div>
              <input
                autoComplete="off"
                name="name"
                placeholder="Name"
                type="text"
                className="contact-input bg-gradient-to-b !pl-[48px] from-[#0F1333] to-[#1D203F] "
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </label>
            {registerError?.fullName && (
              <p className="!text-red-500 text-sm px-2">
                {registerError.fullName}
              </p>
            )}

            {/* Email input */}
            <label className="flex items-center relative">
              <div className="absolute left-[20px]">
                <FaEnvelope />
              </div>
              <input
                autoComplete="off"
                name="email"
                placeholder="Email"
                type="email"
                className="contact-input bg-gradient-to-b !pl-[48px] from-[#0F1333] to-[#1D203F] "
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            {registerError?.email && (
              <p className="!text-red-500 text-sm px-2">
                {registerError.email}
              </p>
            )}

            {/* Password input */}
            <label className="flex items-center relative">
              <div className="absolute  left-[20px]">
                <BiSolidLock size={24} />
              </div>
              <input
                name="password"
                placeholder="Password"
                type={seePass}
                className="contact-input bg-gradient-to-b !pl-[48px] from-[#0F1333] to-[#1D203F] "
                value={password}
                onChange={(e) => {
                  if (password === "") {
                    setSeePass("password");
                  }
                  setPassword(e.target.value);
                  calculatePasswordStrength(e.target.value);
                }}
              />
              {/* Toggle password visibility */}
              <div className="absolute right-[9%] cursor-pointer">
                {password === "" ? null : seePass === "text" ? (
                  <AiFillEye size={24} onClick={() => setSeePass("password")} />
                ) : (
                  <AiFillEyeInvisible
                    size={24}
                    onClick={() => setSeePass("text")}
                  />
                )}
              </div>
            </label>
            <span className="text-sm text-white/60 italic">
              <span className="font-semibold">Strong Password: </span>
              IntelliWriter@738
            </span>

            {password !== "" && (
              <div className="flex items-center gap-2 -mt-3">
                <div className="">
                  <span
                    className={`${
                      passwordStrength < 0.6
                        ? "text-red-600"
                        : passwordStrength < 1
                        ? "text-yellow-600"
                        : "text-green-700"
                    } text-sm`}
                  >
                    {passwordStrength < 0.6
                      ? "Weak"
                      : passwordStrength < 1
                      ? "Good"
                      : " Stong"}
                  </span>
                </div>
                <div
                  className={`h-1 rounded-full ${
                    passwordStrength < 0.6
                      ? "bg-red-600"
                      : passwordStrength < 1
                      ? "bg-yellow-600"
                      : "bg-green-700"
                  }`}
                  style={{ width: `${passwordStrength * 100}%` }}
                ></div>
              </div>
            )}

            {registerError?.password && (
              <p className="!text-red-500 text-sm px-2">
                {registerError.password}
              </p>
            )}

            {/* Confirm password */}
            <label className="flex items-center relative">
              <div className="absolute  left-[20px]">
                <BiSolidLock size={24} />
              </div>
              <input
                name="confirmPassword"
                placeholder="Confirm Password"
                type={seeConfirmPass}
                className="contact-input bg-gradient-to-b !pl-[48px] from-[#0F1333] to-[#1D203F] "
                value={confirmPassword}
                onChange={(e) => {
                  if (confirmPassword === "") {
                    setSeeConfirmPass("password");
                  }
                  setConfirmPassword(e.target.value);
                }}
              />
              {/* Toggle confirm password visibility */}
              <div className="absolute right-[9%] cursor-pointer">
                {confirmPassword === "" ? null : seeConfirmPass === "text" ? (
                  <AiFillEye
                    size={24}
                    onClick={() => setSeeConfirmPass("password")}
                  />
                ) : (
                  <AiFillEyeInvisible
                    size={24}
                    onClick={() => setSeeConfirmPass("text")}
                  />
                )}
              </div>
            </label>

            {/* <div className="w-full">
                <ReCAPTCHA ref={recaptchaRef} sitekey={siteKey} onChange={handleRecaptchaChange} className="w-full bg-transparent" />
              </div> */}

            {registerError?.confirmpassword && (
              <p className="!text-red-500 text-sm px-2">
                {registerError.confirmpassword}
              </p>
            )}

            <Button
              title="Register"
              width="w-full"
              disbaled={isVerified}
              className="w-full"
              btnType="submit"
            />

            <p className="pb-6 !m-0 text-center text-white lg:pt-0 pt-3">
              Already have an account?{" "}
              <span className="text-pink-400">
                <Link href="/auth/login">Login</Link>
              </span>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegisterPageLayout;
