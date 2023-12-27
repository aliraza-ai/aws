import UpdatePlan from "./UpdatePlan";

const StripeTransaction = async (planId: string, id: string | null): Promise<{ success: boolean; message: string }> => {

    const tokens = typeof window !== "undefined" ? sessionStorage.getItem("tokens") : null;
    const userId = typeof window !== "undefined" ? sessionStorage.getItem("userId") : null;
    const name = typeof window !== "undefined" ? sessionStorage.getItem("name") : null;

    try {
        const data = { userId, name, id, planId }
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/transactions`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${tokens}`,
                },
                body: JSON.stringify(data),
            }
        );

        if (response.ok) {
            const res = await response.json();
            const updatePlan = await UpdatePlan(userId)
            if (updatePlan.success) {
                return { success: true, message: `${res.message} & ${updatePlan.message}` };
            }

            return { success: true, message: res.message };
        } else {
            const errorData = await response.json();
            return { success: false, message: errorData.message };
        }
    } catch (error) {
        return { success: false, message: `Something went wrong!` };
    }
};

export default StripeTransaction;
