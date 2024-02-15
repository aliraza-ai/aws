"use client";

import Button from "@/components/Button";
import { useAuth } from "@/context/AuthContext";
import loginUser from "@/utils/loginUser";
import ReCAPTCHA from "react-google-recaptcha";
import { verifyCaptcha } from "@/utils/verifyCaptcha";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState, useRef } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { BiSolidLock } from "react-icons/bi";
import { FaEnvelope } from "react-icons/fa";
import Swal from "sweetalert2";

interface LoginPageLayoutProps {
  children: React.ReactNode;
  email?: string;
  password?: string;
  error?: string;
}

const LoginPageLayout: React.FC<LoginPageLayoutProps | any> = () => {
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [isVerified, setIsverified] = useState<boolean>(false);
  const router = useRouter();
  const { setTokens, setNameLetter } = useAuth();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [seePass, setSeePass] = useState<"text" | "password">("password");
  const [signInError, setSignInError] = useState<LoginPageLayoutProps | null>(
    null
  );

  function getFirstLetter(email: string): string {
    return email ? email.charAt(0) : "";
  }

  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const userData = { email, password };
      if (!email) {
        setSignInError({
          email: "Email is required",
          children: null,
        });
        return;
      } else if (!password) {
        setSignInError({
          password: "Password is required",
          children: null,
        });
        return;
      } else {
        setSignInError({
          email: "",
          password: "",
          error: "",
          children: null,
        });
        const result = await loginUser(userData);
        if (result.success) {
          sessionStorage.setItem("tokens", result.token);
          sessionStorage.setItem("name", result.name);
          sessionStorage.setItem("nameLetter", getFirstLetter(result.name));
          sessionStorage.setItem("userId", result.userId);

          setTokens(result.token);
          setNameLetter(getFirstLetter(result.name));
          // await Swal.fire({
          //   icon: "success",
          //   title: "Success",
          //   text: "Login Successfully!",
          // });
          // setTimeout(function () {
          //   Swal.close();
          // }, 5000);
          router.push("/user/dashboard");
        } else {
          await Swal.fire({
            icon: "error",
            title: "Ooops...",
            text: result.message,
          });
        }
      }
    } catch (error) {
      await Swal.fire({
        icon: "error",
        title: "Ooops...",
        text: "Something went wrong!",
      });
    }
  };

  useEffect(() => {
    setSignInError(null);
  }, []);

  return (
    <section className="w-full bg-contact py-16 bg-bottom bg-no-repeat bg-cover flex items-center justify-center">
      <div className="container rounded shadow-lg md:max-w-xl mx-3">
        <div className="h-full border-2 border-white border-opacity-10 w-full bg-slate-800 rounded-3xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 space-y-5 px-5 pt-5">
          <form onSubmit={submitForm} autoComplete="off">
            <div className="flex flex-col lg:p-5 p-0 gap-y-6 text-white">
              <div className="text-center font-bold p-3 text-[20px] lg:text-4xl">
                Sign In
              </div>

              <label className="flex items-center">
                <div className="absolute lg:left-14 left-[2.5rem]">
                  <FaEnvelope />
                </div>
                <input
                  autoComplete="off"
                  name="title"
                  placeholder="Email"
                  type="email"
                  className="contact-input bg-gradient-to-b !pl-[48px] from-[#0F1333] to-[#1D203F] "
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
              {signInError?.email && (
                <p className="!text-red-500 text-sm px-2">
                  {signInError.email}
                </p>
              )}

              <label className="flex items-center">
                <div className="absolute lg:left-14 left-[2.5rem]">
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
                  }}
                />
                <div className="absolute right-[60px] cursor-pointer">
                  {password === "" ? null : seePass === "text" ? (
                    <AiFillEye
                      size={24}
                      onClick={() => setSeePass("password")}
                    />
                  ) : (
                    <AiFillEyeInvisible
                      size={24}
                      onClick={() => setSeePass("text")}
                    />
                  )}
                </div>
              </label>
              {signInError?.password && (
                <p className="!text-red-500 text-sm px-2">
                  {signInError.password}
                </p>
              )}

              <Link href="/auth/forgot-password" className="w-[160px]">
                <span className="text-pink-400">Forgot password?</span>
              </Link>

              <div className="flex w-full justify-center">
                <Button
                  title="Login"
                  width="w-full"
                  className="w-full"
                  btnType="submit"
                />
              </div>
              {/* {signInError?.error && (
                  <p className="!text-red-500 text-sm px-2">
                    {signInError.error}
                  </p>
                )} */}
            </div>
          </form>

          <p className="pb-6 !m-0 text-center text-white lg:pt-0 pt-3">
            Don&apos;t have an account?{" "}
            <span className="text-pink-400">
              <Link href="/auth/register">Register</Link>
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default LoginPageLayout;
