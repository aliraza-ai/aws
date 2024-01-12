import getChatCount from "./getChatCount";
import getWordCount from "./getWordCount";
import { imageCount } from "./imageCount";

const updatePlans = async (
  planName: string
): Promise<{ success: boolean; message: string }> => {
  try {
    let wordsLeft = null;
    let chatCount = null;
    let imagecount = null;
    const words = await getWordCount();
    if (words.success) {
      wordsLeft = words.words_left;
    }

    const chats = await getChatCount();
    if (chats.success) {
      chatCount = chats.chat_left;
    }

    const images = await imageCount();
    if (images.success) {
      imagecount = images.imageCount;
    }
    const data = { planName, wordsLeft, chatCount, imagecount };
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/users/webhook`,
      {
        method: "POST",
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

export default updatePlans;
