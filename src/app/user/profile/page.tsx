"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { BiMessageRoundedDetail, BiSolidLock } from "react-icons/bi";
import { FaEnvelope, FaHome, FaUser, FaUserTie } from "react-icons/fa";
import { GrOrganization } from "react-icons/gr";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import Swal from "sweetalert2";

interface ProfilePageLayoutProps {
  children: React.ReactNode;
  fullname?: string;
  email?: string;
  phone: number;
  password?: string;
  newpassword?: string;
  address: string;
  company_name: string;
  company_position: string;
  short_bio: string;
}

const ProfilePage: React.FC<ProfilePageLayoutProps> = () => {
  const router = useRouter();

  const [fullname, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [company_name, setCompany_name] = useState<string>("");
  const [company_position, setComp_pnyPosition] = useState<string>("");
  const [short_bio, setShort_bio] = useState<string>("");
  const [seePass, setSeePass] = useState<"text" | "password">("password");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [seeConfirmPass, setSeeConfirmPass] = useState<"text" | "password">(
    "password"
  );

  const [passwordStrength, setPasswordStrength] = useState<number>(0);

  const calculatePasswordStrength = (password: string) => {
    const strength = Math.min(password.length / 12, 1);
    setPasswordStrength(strength);
  };

  useEffect(() => {
    const sessionTokens =
      typeof window !== "undefined" ? sessionStorage.getItem("tokens") : null;
    const userId =
      typeof window !== "undefined" ? sessionStorage.getItem("userId") : null;

    if (!sessionTokens || !userId) {
      router.push("/auth/login");
      return;
    }

    const fetchUserData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/users/user?userId=${userId}`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${sessionTokens}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }
        const data = await response.json();
        const { user } = data;
        setName(user.name);
        setEmail(user.email);
        setPhone(user.phone_number);
        setAddress(user.address);
        setCompany_name(user.company_name);
        setComp_pnyPosition(user.company_position);
        setShort_bio(user.short_bio);
      } catch (error) {
        console.error("Error fetching user data:", (error as Error).message);
      }
    };

    fetchUserData();
  }, [router]);

  const handleProfileUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted!");

    const sessionTokens = sessionStorage.getItem("tokens");
    const userId = sessionStorage.getItem("userId");

    if (!sessionTokens || !userId) {
      router.push("/auth/login");
      return;
    }

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/users/updateUser/${userId}`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${sessionTokens}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: fullname,
            email,
            password,
            phone_number: phone,
            address,
            company_name,
            company_position,
            short_bio,
          }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to update user");
      }

      const data = await response.json();
      if (data.message === "User updated successfully") {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: data.message,
        });

        setTimeout(() => {
          window.location.reload();
        }, 1000);
      } else {
        throw new Error("Failed to update user");
      }
    } catch (error) {
      const errorMessage = (error as Error).message;

      Swal.fire({
        icon: "error",
        title: "Error",
        text: errorMessage || "Failed to update user",
      });
      // console.error("Error updating user data:", errorMessage);
    }
  };

  const handlePasswordUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const sessionTokens = sessionStorage.getItem("tokens");
    const userId = sessionStorage.getItem("userId");

    if (!sessionTokens || !userId) {
      router.push("/auth/login");
      return;
    }
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/users/updatePassword/${userId}`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${sessionTokens}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            oldPassword: password,
            newPassword: confirmPassword,
          }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to update password");
      }

      const data = await response.json();
      if (data.message === "Password updated successfully") {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: data.message,
        });

        // Optionally, refresh the page after a successful update
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      } else {
        throw new Error("Failed to update password");
      }
    } catch (error) {
      const errorMessage = (error as Error).message;

      Swal.fire({
        icon: "error",
        title: "Error",
        text: errorMessage || "Failed to update password",
      });
      console.error("Error updating password:", errorMessage);
    }
    calculatePasswordStrength(password);
  };

  return (
    <div className="absolute top-14 right-0 md:px-20 md:py-5 p-6 w-full lg:w-[calc(100%-250px)] text-white">
      <h2 className="text-2xl lg:text-start text-center font-semibold pb-5">
        Profile
      </h2>
      <div className="rounded-[12px] py-6 bg-[rgba(32,45,72,0.41)] p-6 ">
        <div className="p-5 text-xl font-medium">General</div>
        <div className="p-5 border-t">
          <form onSubmit={handleProfileUpdate}>
            <div className=" flex flex-col lg:flex-row justify-between">
              <label className="relative">
                <div className="flex flex-row items-center gap-2 absolute left-3 top-1/2 ">
                  <FaUser size={16} />
                </div>
                Full Name <span className="text-pink-500">*</span> <br />
                <input
                  autoComplete="off"
                  name="fullname"
                  placeholder="Full Name"
                  type="text"
                  className="w-full px-12 py-3 rounded-[12px] bg-[rgba(32,45,72,0.41)] outline-none  focus:outline-[#640F6C] lg:!pl-[48px] mt-2 mb-4 text-white pl-10"
                  value={fullname}
                  required
                  onChange={(e) => setName(e.target.value)}
                />
              </label>
              <label className="relative">
                <div className="flex flex-row items-center gap-2 absolute left-3 top-1/2 ">
                  <FaEnvelope size={16} />
                </div>
                Email <span className="text-pink-500">*</span> <br />
                <input
                  autoComplete="off"
                  readOnly
                  name="email"
                  placeholder="Email"
                  type="email"
                  className="w-full px-12 py-3 rounded-[12px] bg-[rgba(32,45,72,0.41)] outline-none  focus:outline-[#640F6C] lg:!pl-[48px] mt-2 mb-4 text-white"
                  value={email}
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
            </div>

            <div className=" flex flex-col lg:flex-row justify-between">
              <label className="relative">
                <div className="flex flex-row items-center gap-2 absolute left-3 top-1/2  ">
                  <MdOutlinePhoneAndroid size={18} />
                </div>
                Phone Number <span className="text-pink-500">*</span> <br />
                <input
                  autoComplete="off"
                  name="phone"
                  placeholder="Phone Number"
                  type="tel"
                  className="w-full px-12 py-3 rounded-[12px] bg-[rgba(32,45,72,0.41)] outline-none  focus:outline-[#640F6C] lg:!pl-[48px] mt-2 mb-4 text-white"
                  value={phone}
                  required
                  onChange={(e) => setPhone(e.target.value)}
                />
              </label>
              <label className="relative">
                <div className="flex flex-row items-center gap-2 absolute left-3 top-1/2  ">
                  <FaHome size={16} />
                </div>
                Address <span className="text-pink-500">*</span> <br />
                <input
                  autoComplete="off"
                  name="address"
                  placeholder="Enter your Address"
                  type="text"
                  className="w-full px-12 py-3 rounded-[12px] bg-[rgba(32,45,72,0.41)] outline-none  focus:outline-[#640F6C] lg:!pl-[48px] mt-2 mb-4 text-white"
                  value={address}
                  required
                  onChange={(e) => setAddress(e.target.value)}
                />
              </label>
            </div>
            <div className="p-5 text-xl font-medium">Work</div>

            <div className="p-5 border-t">
              <div className=" flex flex-col lg:flex-row justify-between">
                <label className="relative">
                  <div className="flex flex-row items-center gap-2 absolute left-3 top-1/2  ">
                    <GrOrganization size={14} />
                  </div>
                  Company Name <br />
                  <input
                    autoComplete="off"
                    name="company_name"
                    placeholder="Company Name"
                    type="text"
                    className="w-full px-12 py-3 rounded-[12px] bg-[rgba(32,45,72,0.41)] outline-none  focus:outline-[#640F6C] lg:!pl-[48px] mt-2 mb-4 text-white"
                    value={company_name}
                    onChange={(e) => setCompany_name(e.target.value)}
                  />
                </label>
                <label className="relative">
                  <div className="flex flex-row items-center gap-2 absolute left-3 top-1/2 ">
                    <FaUserTie size={16} />
                  </div>
                  Company Position <br />
                  <input
                    autoComplete="off"
                    name="company_position"
                    placeholder="Type your job title"
                    type="text"
                    className="w-full px-12 py-3 rounded-[12px] bg-[rgba(32,45,72,0.41)] outline-none  focus:outline-[#640F6C] lg:!pl-[48px] mt-2 mb-4 text-white"
                    value={company_position}
                    onChange={(e) => setComp_pnyPosition(e.target.value)}
                  />
                </label>
              </div>
              <label className="relative">
                <div className="flex flex-row items-center gap-2 absolute left-3 top-[26%] ">
                  <BiMessageRoundedDetail size={22} />
                </div>
                Short Bio <br />
                <textarea
                  autoComplete="off"
                  name="short_bio"
                  placeholder="Tell about your background, capabilities and work"
                  rows={4}
                  cols={30}
                  className="w-full px-12 py-3 rounded-[12px] bg-[rgba(32,45,72,0.41)] outline-none  focus:outline-[#640F6C] lg:!pl-[48px] mt-2 mb-4 text-white"
                  value={short_bio}
                  onChange={(e) => setShort_bio(e.target.value)}
                />
              </label>
            </div>
            <div className="flex justify-end">
              <button
                className="text-white px-6 py-2 rounded hover:opacity-80 bg-gradient-to-r from-[rgba(247,15,255,1)] to-[#2C63FF]"
                type="submit"
              >
                Update Profile
              </button>
            </div>
          </form>
        </div>

        <div className="p-5 text-lg lg:text-xl font-medium">
          Change Password
        </div>
        <div className="p-5 border-t">
          <form onSubmit={handlePasswordUpdate}>
            <div className="flex flex-col lg:flex-row justify-between">
              <label className="relative">
                <div className="flex flex-row items-center gap-2 absolute left-3 top-1/2 ">
                  <BiSolidLock size={18} />
                </div>
                Current Password <span className="text-pink-500">*</span> <br />
                <div className="flex items-center">
                  <input
                    name="password"
                    placeholder="Current Password"
                    type={seePass}
                    className="w-full px-12 py-3 rounded-[12px] bg-[rgba(32,45,72,0.41)] outline-none  focus:outline-[#640F6C] lg:!pl-[48px] mt-2 mb-4 text-white"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      calculatePasswordStrength(e.target.value);
                    }}
                  />
                  {/* Toggle password visibility */}
                  <div className="absolute right-[10px] cursor-pointer">
                    {seePass === "text" ? (
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
                </div>
              </label>
              <label className="relative">
                <div className="flex flex-row items-center gap-2 absolute left-3 top-1/2 ">
                  <BiSolidLock size={18} />
                </div>
                New Password <span className="text-pink-500">*</span> <br />
                <div className="flex items-center">
                  <input
                    name="confirmPassword"
                    placeholder="New Password"
                    type={seeConfirmPass}
                    className="w-full px-12 py-3 rounded-[12px] bg-[rgba(32,45,72,0.41)] outline-none  focus:outline-[#640F6C] lg:!pl-[48px] mt-2 mb-4 text-white"
                    value={confirmPassword}
                    onChange={(e) => {
                      setConfirmPassword(e.target.value);
                      calculatePasswordStrength(e.target.value);
                    }}
                  />
                  {/* Toggle confirm password visibility */}
                  <div className="absolute right-[10px] cursor-pointer">
                    {seeConfirmPass === "text" ? (
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
                </div>
              </label>
            </div>

            {/* Password Strength Bar */}
            <div className="flex mt-2 mb-3">
              <div
                className={`h-2 ${
                  passwordStrength < 0.4
                    ? "bg-red-500"
                    : passwordStrength < 0.7
                    ? "bg-yellow-500"
                    : "bg-green-500"
                }`}
                style={{ width: `${passwordStrength * 100}%` }}
              ></div>
            </div>
            {/* Password Strength Text */}
            <div className="flex justify-between text-sm">
              <span
                className={`text-red-500 ${
                  passwordStrength >= 0.4 && "opacity-50"
                }`}
              >
                Weak
              </span>
              <span
                className={`text-yellow-500 ${
                  passwordStrength < 0.4 ||
                  (passwordStrength >= 0.7 && "opacity-50")
                }`}
              >
                Good
              </span>
              <span
                className={`text-green-500 ${
                  passwordStrength < 0.7 && "opacity-50"
                }`}
              >
                Strong
              </span>
            </div>

            <div className="flex justify-end mt-8">
              <button
                className="text-white px-6 py-2 rounded hover:opacity-80 bg-gradient-to-r from-[rgba(247,15,255,1)] to-[#2C63FF]"
                type="submit"
              >
                Change Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
