"use client";

import Button from "@/components/Button";
import resetPasswordUser from "@/utils/resetPassword";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { BiSolidLock } from "react-icons/bi";
import Swal from "sweetalert2";

interface ResetPasswordPageProps {
  children: React.ReactNode;
  newPassword?: string | string[];
  confirmPassword?: string | string[];
}

const ResetPasswordPageLayout: React.FC<ResetPasswordPageProps | any> = (
  props
) => {
  const [newPassword, setNewPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [resetError, setResetError] = useState<ResetPasswordPageProps | null>(
    null
  );
  const router = useRouter();

  const urlParams =
    typeof window !== "undefined"
      ? new URLSearchParams(window.location.search)
      : null;
  const reset_token = urlParams ? urlParams.get("token") : null;

  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const token = reset_token;
      const userData = { token, newPassword };
      if (!newPassword) {
        setResetError({
          newPassword: "Password is required",
          children: null,
        });
        return;
      } else if (!confirmPassword) {
        setResetError({
          confirmPassword: "Confirm Password is required",
          children: null,
        });
        return;
      } else if (newPassword !== confirmPassword) {
        await Swal.fire({
          icon: "error",
          title: "Ooops...",
          text: "Password and Confirm password not matched!",
        });
        return;
      } else {
        setResetError({
          newPassword: "",
          confirmPassword: "",
          children: null,
        });
        const result = await resetPasswordUser(userData);
        if (result.success) {
          await Swal.fire({
            icon: "success",
            title: "Success",
            text: result.message,
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
  };

  return (
    <section className="w-full bg-contact py-16 bg-bottom bg-no-repeat bg-cover flex items-center justify-center">
      <div className="container rounded shadow-lg md:max-w-xl mx-3">
        <div className="h-full border-2 border-white border-opacity-10 w-full bg-slate-800 rounded-3xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 space-y-5 px-5 pt-5">
          <form onSubmit={submitForm} autoComplete="off">
            <div className="flex flex-col lg:p-5 p-0 gap-y-6 text-white">
              <div className="text-center font-bold p-3 text-[20px] lg:text-4xl">
                Reset Password
              </div>

              {/* New Password input */}
              <label className="flex items-center">
                <div className="absolute lg:left-14 left-[2.5rem]">
                  <BiSolidLock size={24} />
                </div>
                <input
                  name="newPassword"
                  placeholder="New Password"
                  type="password"
                  className="contact-input bg-gradient-to-b !pl-[48px] from-[#0F1333] to-[#1D203F] "
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </label>
              {resetError?.newPassword && (
                <p className="!text-red-500 text-sm px-2">
                  {resetError.newPassword}
                </p>
              )}

              {/* Confirm Password input */}
              <label className="flex items-center">
                <div className="absolute lg:left-14 left-[2.5rem]">
                  <BiSolidLock size={24} />
                </div>
                <input
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  type="password"
                  className="contact-input bg-gradient-to-b !pl-[48px] from-[#0F1333] to-[#1D203F] "
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </label>
              {resetError?.confirmPassword && (
                <p className="!text-red-500 text-sm px-2">
                  {resetError.confirmPassword}
                </p>
              )}
              <Button
                title="Reset Password"
                width="w-full"
                className="w-full"
                btnType="submit"
              />
            </div>
          </form>

          <p className="pb-6 !m-0 text-center text-white lg:pt-0 pt-3">
            Remember your password?{" "}
            <span className="text-pink-400">
              <Link href="/auth/login">Login</Link>
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ResetPasswordPageLayout;
