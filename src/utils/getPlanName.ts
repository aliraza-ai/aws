const getPlanName = async (): Promise<{
    success: boolean;
    message: string;
    plans_name: string | null;
  }> => {
    const tokens =
      typeof window !== "undefined" ? sessionStorage.getItem("tokens") : null;
  
    // Get userId from sessionStorage
    const userId =
      typeof window !== "undefined" ? sessionStorage.getItem("userId") : null;
  
    try {
      // Make a GET request to the "get-words-left" API
      const response = await fetch(`
        ${process.env.NEXT_PUBLIC_API_URL}/users/plans/${userId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${tokens}`,
          },
        }
      );
  
      if (response.ok) {
        const data = await response.json();
        return { success: true, message: "", plans_name: data.plans };
      } else {
        // Handle error response
        const errorData = await response.json();
        return { success: false, message: errorData.message, plans_name: null };
      }
    } catch (error) {
      return {
        success: false,
        message: "Something went wrong!",
        plans_name: null,
      };
    }
  };
  
  export default getPlanName;