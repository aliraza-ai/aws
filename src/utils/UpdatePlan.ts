import { packagesData } from "@/constants";

const UpdatePlan = async (
  userId: string | null,
  planId: string | null
): Promise<{ success: boolean; message: string }> => {

  try {
    const planID = Number(planId);
    let data = null;
    packagesData.map(item => {
      if (item.planId === planID) {
        data = {
          userId: userId,
          planName: item.package,
          words: item.words,
          chats: item.chats,
          images: item.images
        };
      }
    })
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
