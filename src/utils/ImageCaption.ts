const ImageCaption = async (query: {
  image: File | Blob | null;
  tone: string;
  additionalInfo: string;
}): Promise<{
  success: boolean;
  message: string;
  captions: string[];
}> => {
  try {
    const tokens =
      typeof window !== "undefined" ? sessionStorage.getItem("tokens") : null;
    const userId =
      typeof window !== "undefined" ? sessionStorage.getItem("userId") : null;

    const formData = new FormData();
    query.image && formData.append("image", query.image);
    query.tone && formData.append("tone", query.tone);
    query.additionalInfo &&
      formData.append("additionalInfo", query.additionalInfo);

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/openai/generate-caption`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${tokens}`,
        },
        body: formData,
      }
    );
    if (response.ok) {
      const result = await response.json();
      return {
        success: true,
        message: "Caption generated successfully",
        captions: [result.caption1, result.caption2, result.caption3],
      };
    } else {
      const errorData = await response.json();
      return {
        success: false,
        message: errorData.error || "Unknown error",
        captions: [],
      };
    }
  } catch (error) {
    return {
      success: false,
      message: `Something went wrong: ${error}`,
      captions: [],
    };
  }
};

export default ImageCaption;
