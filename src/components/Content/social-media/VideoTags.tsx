"use client";

import { useWebContext } from "@/context/ContextProvider";
import React, { FormEvent, useState } from "react";

interface Props {
    type: string
}
interface FormProps {
    title?: string,
    content?: string,
}

const VideoTags = ({ }: Props) => {
    const { getResponse } = useWebContext();
    const [formData, setFormData] = useState({
        title: "",
    });
    const { title } = formData;
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const [formError, setFormError] = useState<FormProps | null>(null);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (!title) {
            setFormError({ title: "Title is required" });
            return;
        } else {
            setFormError({
                title: "",
            });

            const query = `Generate video tags according to this title ${title}. Now, I want response in html paragraph with strong and bold tag for headings and subheadings represented by size and bullets with numbers. After paragraph, use <br/> for linebreaks.`;
            getResponse(query)

            // setFormData({
            //     title: "",
            // });
        }
    };

    return (
        <div className="w-full flex flex-col items-start justify-center">
            <form onSubmit={handleSubmit} className="w-full justify-center flex border border-blue-900 backdrop-blur-md px-6 py-10 rounded-lg drop-shadow-lg">
                <div className="flex flex-col gap-4 w-full">
                    <div className="flex flex-col">
                        <label htmlFor="name" className="text-white mb-2 font-bold">
                            Title <span className="text-pink-500">*</span>
                        </label>

                        <input
                            type="text"
                            name="title"
                            placeholder="5 Steps to become a programmer"
                            value={title}
                            onChange={handleChange}
                            className="contact-input bg-gradient-to-b from-[#0F1333] to-[#1D203F] "
                        />
                    </div>
                    {formError?.title && (
                        <p className="!text-red-500 text-sm px-2">
                            {formError.title}
                        </p>
                    )}

                    <button type="submit" className="bg-gradient-to-r from-[rgba(247,15,255,1)] to-[#2C63FF] hover:opacity-90 transition-all duration-300 py-3 px-9 text-white font-semibold rounded-full">
                        Submit
                    </button>
                </div>
            </form >
        </div>
    );
};

export default VideoTags;
