const IntelliVoice = async (query: {
  prompt: string;
  voice: string;
  userId: string | null;
}): Promise<{ success: boolean; message: string; file: Blob | null }> => {
  const tokens =
    typeof window !== "undefined" ? sessionStorage.getItem("tokens") : null;
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/intelli-apis/generate-voice`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${tokens}`,
        },
        body: JSON.stringify(query),
      }
    );

    if (response.ok) {
      const blob = await response.blob();
      const reader = new FileReader();
      const base64Promise = new Promise<string>((resolve, reject) => {
        reader.onloadend = () => {
          const base64data = reader.result?.toString() || null;
          resolve(base64data);
        };
        reader.onerror = reject;
      });

      reader.readAsDataURL(blob);
      const base64data = await base64Promise;

      return {
        success: true,
        message: "File generated successfully",
        file: base64data,
      };
    } else {
      const errorData = await response.json();
      return { success: false, message: errorData.error, file: null };
    }
  } catch (error) {
    return { success: false, message: `Something went wrong!`, file: null };
  }
};

export default IntelliVoice;
