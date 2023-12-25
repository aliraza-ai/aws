const getUserData = async (): Promise<{
  success: boolean;
  message: string;
  name: string;
  email: string;
  phone_number: string;
  address: string;
}> => {
  try {
    const tokens = sessionStorage.getItem("tokens");
    const userId = sessionStorage.getItem("userId");

    const url = `${process.env.NEXT_PUBLIC_API_URL}/users/user?userId=${userId}`;
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", `Bearer ${tokens}`);

    const response = await fetch(url, {
      method: "GET",
      headers: headers,
    });

    if (response.ok) {
      const userData = await response.json();
      const { name, email, phone_number, address } = userData;
      return {
        success: true,
        message: "",
        name,
        email,
        phone_number,
        address,
      };
    } else {
      let errorMessage = "Failed to fetch user data";
      if (response.status === 401) {
        errorMessage = "Unauthorized. Please login again.";
      } else if (response.status >= 500) {
        errorMessage = "Server error. Please try again later.";
      }

      const errorData = await response.json();
      return {
        success: false,
        message: errorData.message || errorMessage,
        name: "",
        email: "",
        phone_number: "",
        address: "",
      };
    }
  } catch (error) {
    let errorMessage = "Something went wrong!";
    if (error instanceof TypeError && error.message === "Failed to fetch") {
      errorMessage = "Network error. Please check your connection.";
    }
    return {
      success: false,
      message: `${errorMessage} Error: ${error}`,
      name: "",
      email: "",
      phone_number: "",
      address: "",
    };
  }
};

export default getUserData;
