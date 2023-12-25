const userData = async (): Promise<{
  success: boolean;
  message: string;
  name: string;
  email: string;
  password: string;
  phone_number: string;
  address: string;
}> => {
  const tokens =
    typeof window !== "undefined" ? sessionStorage.getItem("tokens") : null;

  const userId =
    typeof window !== "undefined" ? sessionStorage.getItem("userId") : null;

  const user = {
    userId: userId,
  };

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/users/user`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${tokens}`,
        },
        body: JSON.stringify(user),
      }
    );

    // console.log("Your error" + response);

    if (response.ok) {
      const res = await response.json();
      return {
        success: true,
        message: "",
        name: res.user.name,
        email: res.user.email,
        password: res.user.password,
        phone_number: res.user.phone_number,
        address: res.user.address,
      };
    } else {
      const errorData = await response.json();
      return {
        success: false,
        message: errorData.message,
        name: "",
        email: "",
        password: "",
        phone_number: "",
        address: "",
      };
    }
  } catch (error) {
    return {
      success: false,
      message: `Something went wrong!`,
      name: "",
      email: "",
      password: "",
      phone_number: "",
      address: "",
    };
  }
};

export default userData;
