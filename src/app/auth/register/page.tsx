"use client";

import Button from "@/components/Button";
import registerUser from "@/utils/registerUser";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { BiSolidLock } from "react-icons/bi";
import { FaEnvelope, FaUser } from "react-icons/fa";
import Swal from "sweetalert2";

interface RegisterPageLayoutProps {
  children: React.ReactNode;
  name?: string;
  email?: string;
  password?: string;
  confirmpassword?: string;
}

const RegisterPageLayout: React.FC<RegisterPageLayoutProps | any> = () => {
  const router = useRouter();
  const [name, setName] = useState<string>("");
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
    // Simple example: Strength is determined by the length of the password
    const strength = Math.min(password.length / 12, 1);
    setPasswordStrength(strength);
  };

  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const userData = { name, email, password };

      if (!name) {
        setRegisterError({
          name: "Name is required",
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
        const result = await registerUser(userData);
        if (result.success) {
          setRegisterError({
            name: "",
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
      }
    } catch (error) {
      await Swal.fire({
        icon: "error",
        title: "Ooops...",
        text: "Something went wrong!",
      });
    }
    calculatePasswordStrength(password);
  };

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <title>Register</title>
        <meta
          name="description"
          content="Register with Intelliwriter to unlock the full potential of AI-based content generation. Join our platform for seamless access to intelligent content creation, image generation, and API integration features. At Intelliwriter.io, we offer a user-friendly registration process, empowering you to harness the power for your writing needs. Sign up now to explore innovative writing tools, connect with like-minded creators, and elevate your content creation experience. Transform your writing journey with Intelliwriter and discover a world of possibilities in AI-driven writing solutions."
        />
        <meta name="keywords" content="intelliwriter, AI Content Generator," />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="google-site-verification"
          content="jOLdFKT4EB_AxoR8fQqHLckgsvnJ_Ta4WPY40UNfjwo"
        />
        <link rel="canonical" href="https://intelliwriter.io/auth/register" />
      </Head>

      <section className="w-full bg-contact py-16 bg-bottom bg-no-repeat bg-cover flex items-center justify-center">
        <div className="container rounded shadow-lg md:max-w-xl mx-3">
          <div className="h-full border-2 border-white border-opacity-10 w-full bg-slate-800 rounded-3xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 space-y-5 px-5 pt-5">
            <form onSubmit={submitForm} autoComplete="off">
              <div className="flex flex-col lg:p-5 p-0 gap-y-6 text-white">
                <div className="text-center font-bold p-3 text-[20px] lg:text-4xl">
                  Register
                </div>

                {/* Name input */}
                <label className="flex items-center">
                  <div className="absolute lg:left-14 left-[2.5rem]">
                    <FaUser />
                  </div>
                  <input
                    autoComplete="off"
                    name="name"
                    placeholder="Name"
                    type="text"
                    className="contact-input bg-gradient-to-b !pl-[48px] from-[#0F1333] to-[#1D203F] "
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </label>
                {registerError?.name && (
                  <p className="!text-red-500 text-sm px-2">
                    {registerError.name}
                  </p>
                )}

                {/* Email input */}
                <label className="flex items-center">
                  <div className="absolute lg:left-14 left-[2.5rem]">
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
                      calculatePasswordStrength(e.target.value);
                    }}
                  />
                  {/* Toggle password visibility */}
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

                {password !== "" &&
                  <div className="flex items-center gap-2 -mt-3">
                    <div className="">
                      <span
                        className={`${passwordStrength < 0.4
                          ? "text-red-600"
                          : passwordStrength < 0.7
                            ? "text-yellow-600"
                            : "text-green-700"
                          } text-sm`}
                      >
                        {passwordStrength < 0.4
                          ? "Weak"
                          : passwordStrength < 0.7
                            ? "Good"
                            : " Stong"
                        }
                      </span>
                    </div>
                    <div
                      className={`h-1 rounded-full ${passwordStrength < 0.4
                        ? "bg-red-600"
                        : passwordStrength < 0.7
                          ? "bg-yellow-600"
                          : "bg-green-700"
                        }`}
                      style={{ width: `${passwordStrength * 100}%` }}
                    ></div>
                  </div>
                }

                {registerError?.password && (
                  <p className="!text-red-500 text-sm px-2">
                    {registerError.password}
                  </p>
                )}

                {/* Confirm password */}
                <label className="flex items-center">
                  <div className="absolute lg:left-14 left-[2.5rem]">
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
                  <div className="absolute right-[60px] cursor-pointer">
                    {confirmPassword === "" ? null : seeConfirmPass ===
                      "text" ? (
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
                {registerError?.confirmpassword && (
                  <p className="!text-red-500 text-sm px-2">
                    {registerError.confirmpassword}
                  </p>
                )}

                <Button
                  title="Register"
                  width="w-full"
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
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default RegisterPageLayout;