"use client";

import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { ChatItem } from "react-chat-elements";
import { IoIosArrowRoundDown } from "react-icons/io";

import createChat from "@/utils/createChat";
import { FaChevronRight } from "react-icons/fa6";
import { TbSend } from "react-icons/tb";
import Swal from "sweetalert2";
import { logoMin, user } from "../../../../public";

type ChatItemPosition = "left" | "right";
type ChatItemType = "text" | "image";

interface ChatItemProps {
  id?: number;
  position: ChatItemPosition;
  type: ChatItemType;
  title: string;
  subtitle: string;
  date: Date;
  avatar?: string;
}

const ChatPage = () => {
  const [message, setMessage] = useState<string>("");
  const [error, setError] = useState("");
  const [sessionName, setSessionName] = useState<string | null>("...");

  const chatContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        const name = sessionStorage.getItem("name");
        setSessionName(name);
      }
    };
    handleScroll();

    return () => {
      handleScroll();
    };
  }, []);

  const [chat, setChat] = useState([
    {
      position: "left",
      type: "text",
      title: "Intelliwriter",
      subtitle: `Hi, tell me how can I assist you today!`,
      date: new Date(),
      avatar: logoMin,
    },
  ]);

  const Chat: React.FC<ChatItemProps | any> = ({ message, id }) => (
    <ChatItem {...message} key={id} className="bg-primary-two items-start" />
  );

  const handleSendMessage = async () => {
    if (message === "") {
      setError("Type the message first!");
    } else {
      try {
        // Disable the button when sending starts
        setButtonDisabled(true);

        const userMessage = {
          position: "right",
          type: "text",
          title: `${sessionName}`,
          subtitle: message,
          date: new Date(),
          avatar: user,
        };

        setChat((prevChat) => [...prevChat, userMessage]);
        const chat = { message };
        const response = await createChat(chat);

        const aiMessage = {
          position: "left",
          type: "text",
          title: "Intelliwriter",
          subtitle: response.result,
          date: new Date(),
          avatar: logoMin,
        };

        if (response.success) {
          setChat((prevChat) => [...prevChat, aiMessage]);
          setMessage("");
          setError("");
        } else {
          Swal.fire({
            icon: "error",
            title: "Ooops...",
            text: response.result,
          });
          setError(response.result);
        }
      } finally {
        // Enable the button after the message is sent or an error occurs
        setButtonDisabled(false);
      }
    }
  };

  const handleInputChange = (event: any) => {
    setMessage(event.target.value);
  };

  const [buttonDisabled, setButtonDisabled] = useState<boolean>(false);
  const [isScrolledToBottom, setIsScrolledToBottom] = useState(true);

  const scrollToBottom = () => {
    const chatContainer = chatContainerRef.current;

    if (chatContainer) {
      chatContainer.scrollTop = chatContainer.scrollHeight;
      setIsScrolledToBottom(true);
    }
  };

  useEffect(() => {
    const chatContainer = chatContainerRef.current;

    if (chatContainer) {
      const isUserScrolledToBottom =
        chatContainer.scrollTop + chatContainer.clientHeight ===
        chatContainer.scrollHeight;

      setIsScrolledToBottom(isUserScrolledToBottom);
    }
  }, [chat]);

  return (
    <div className="absolute top-14 right-0 md:px-20 md:py-10 p-6 w-full lg:w-[calc(100%-250px)] mx-auto text-white">
      <div className="text-base text-slate-400 font-light p-2 flex items-center gap-2">
        <Link href="/user/dashboard">Dashboard</Link>
        <FaChevronRight className="text-sm" />
        <Link href="/user/chat">AI Chat</Link>
      </div>

      <h2 className="text-3xl font-semibold p-2 pb-3">AI Chat</h2>

      <div className="mx-auto sm:p-10 py-5 bg-primary-two rounded-lg">
        <div
          className="space-y-4 h-[52vh] overflow-y-auto siderbar flex w-full gap-3 flex-col"
          ref={chatContainerRef}
        >
          {chat.map((chatMsg, index) => (
            <Chat message={chatMsg} key={index} />
          ))}

          {/* <div className={`w-[100%] h-[80%] flex items-center justify-center gap-4 ${disableCards === "false" ? "" : "hidden"}`}>
                <Card heading="Percept" text1="Megladon" text2="Robotics" text3="Titanic" />
                <Card heading="Generate" text1="Megladon" text2="Robotics" text3="Report" />
                <Card heading="Explore" text1="Sunny Beach" text2="The Last Corner" text3="Dark World" />
              </div> */}
        </div>

        {isScrolledToBottom ? null : (
          <span
            onClick={scrollToBottom}
            className="justify-center items-center hover:opacity-80 fixed bottom-32 right-[38%] flex gap-1 p-3 rounded-full font-medium bg-gradient-to-r from-[rgba(247,15,255,1)] to-[#2C63FF] text-white"
          >
            <IoIosArrowRoundDown className="text-xl" />
          </span>
        )}

        <div className="w-full">
          <div className="input-container w-full flex mt-10">
            <input
              type="text"
              placeholder="Type to start a chat..."
              value={message}
              className="w-full border-opacity-40 rounded-full bg-primary-two focus:outline-1-none border-gray-200 border outline-none px-3 mx-3"
              onChange={handleInputChange}
              onKeyUp={(event) => {
                if (event.key === "Enter") {
                  handleSendMessage();
                }
              }}
            />

            <button
              type="button"
              onClick={handleSendMessage}
              className="mx-2 flex gap-1 px-3 py-2 hover:opacity-80 rounded-full font-medium bg-gradient-to-r from-[rgba(247,15,255,1)] to-[#2C63FF] text-white"
              disabled={buttonDisabled}

            >
              {buttonDisabled ? (
            "Sending..."
          ) : (
            <>
              Send <TbSend className="text-white text-xl" />
            </>
          )}
            </button>
          </div>

          {error !== "" && (
            <p className="text-red-400 text-[12px] pl-4 py-1">{error}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
