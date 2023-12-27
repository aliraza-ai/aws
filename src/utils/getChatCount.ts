const getChatCount = async (): Promise<{
    success: boolean;
    message: string;
    chat_left: number | null;
  }> => {
    const tokens = typeof window !== "undefined" ? sessionStorage.getItem("tokens") : null;
  
    // Get userId from sessionStorage
    const userId = typeof window !== "undefined" ? sessionStorage.getItem("userId") : null;
  
    try {
      // Make a GET request to the "get-words-left" API
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/users/get-chat-left/${userId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${tokens}`,
          },
        }
      );
  
      if (response.ok) {
        const data = await response.json();
        return { success: true, message: "", chat_left: data.chat_left };
      } else {
        // Handle error response
        const errorData = await response.json();
        return { success: false, message: errorData.message, chat_left: null };
      }
    } catch (error) {
      // Handle network or other errors
      return { success: false, message: `Something went wrong!`, chat_left: null };
    }
  };
  
  export default getChatCount;
  