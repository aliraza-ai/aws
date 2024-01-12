import getChatCount from "./getChatCount";
import getWordCount from "./getWordCount";

const UpdatePlan = async (
  userId: string | null
): Promise<{ success: boolean; message: string }> => {
  try {
    let wordsLeft = null;
    let chatCount = null;
    const words = await getWordCount();
    if (words.success) {
      wordsLeft = words.words_left;
    }

    const chats = await getChatCount();
    if (chats.success) {
      chatCount = chats.chat_left;
    }

    const data = { userId, wordsLeft, chatCount };
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/transactions`,
      {
        method: "PUT",
        body: JSON.stringify(data),
      }
    );

    if (response.ok) {
      const res = await response.json();

      return { success: true, message: res.message };
    } else {
      const errorData = await response.json();
      return { success: false, message: errorData.message };
    }
  } catch (error) {
    return { success: false, message: `Something went wrong!` };
  }
};

export default UpdatePlan;
