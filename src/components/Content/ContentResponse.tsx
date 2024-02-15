"use client";

import React, { useState, useEffect, useRef } from "react";
import { useParams } from "next/navigation";
import { useWebContext } from "@/context/ContextProvider";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import IntelliAI from "@/utils/IntelliAI";

interface ContentResponseProps {}

const ContentResponse: React.FC<ContentResponseProps> = () => {
  const { loading, setLoading, response, emptyResponse, error, courseContent } =
    useWebContext();

  const editor = useRef<any>(null);
  const [query, setQuery] = useState<string>("");
  const { module } = useParams();

  const [tabs, setTabs] = useState<string>("");
  const [outlineResponse, setOutlineResponse] = useState<string>("");
  const [quiz, setQuiz] = useState<string>("");
  const [assignment, setAssignment] = useState<string>("");

  const [copyButtonText, setCopyButtonText] = useState<string>("Copy");

  const handleCopyClick = () => {
    if (editor.current) {
      const editorData = editor.current.editor.getData();
      const tempElement = document.createElement("div");
      tempElement.innerHTML = editorData;
      const plainText = tempElement.textContent;
      const tempInput = document.createElement("input");
      tempInput.setAttribute("value", plainText || "");
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand("copy");
      document.body.removeChild(tempInput);

      setCopyButtonText("Copied");
      setTimeout(() => {
        setCopyButtonText("Copy");
      }, 5000);
    }
  };

  const handleQuizGenerator = async () => {
    try {
      const query = {
        prompt: `I also need quiz questions for same outline on ${courseContent.subject} subject having duration ${courseContent.duration} and level ${courseContent.level}. I want response in html paragraph with strong and bold tag for headings and subheadings represented by size and bullets with numbers. After paragraph, use <br/> for linebreaks.`,
      };
      setLoading(true);
      const result = await IntelliAI(query);
      if (result.success) {
        setQuiz(result.response);
        setLoading(false);
      } else {
        setLoading(false);
      }
    } catch (error) {
      setQuiz("");
    }
    setTabs("quiz");
  };

  const handleAssignmentGenerator = async () => {
    try {
      const query = {
        prompt: `I also need assignment questions for same outline on ${courseContent.subject} subject having duration ${courseContent.duration} and level ${courseContent.level}.I want response in html paragraph with strong and bold tag for headings and subheadings represented by size and bullets with numbers. After paragraph, use <br/> for linebreaks.`,
      };
      setLoading(true);
      const result = await IntelliAI(query);
      if (result.success) {
        setAssignment(result.response);
        setLoading(false);
      } else {
        setLoading(false);
      }
    } catch (error) {
      setAssignment("");
    }
    setTabs("assignment");
  };

  const editorConfig = {
    toolbar: {
      items: [
        "bold",
        "italic",
        "underline",
        "bulletedList",
        "numberedList",
        "link",
      ],
    },
  };

  useEffect(() => {
    emptyResponse();
    setLoading(false);
    setQuery("");
    setTabs("");

    setOutlineResponse(response || "");
    setQuiz("");
    setAssignment("");
    setTabs("");
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex flex-col font-medium items-center justify-center border-4 border-dashed w-full h-full text-white/40 border-white/40 rounded">
          <span className="text-center">Please wait</span>
          <span>While your Request is being Processed</span>
          <div className="inline-block mt-5 h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]">
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Loading...
            </span>
          </div>
        </div>
      ) : error ? (
        <div className="flex items-center justify-center border-4 border-dashed w-full h-full text-white/40 border-white/40 rounded">
          <p className="font-medium text-red-600">
            {/* {error} */}
            {error === "Out of Word limit!" ? error : "Something went wrong!"}
          </p>
        </div>
      ) : response ? (
        <div className="w-full h-full rounded flex flex-col items-center justify-start">
          {tabs !== "" ? (
            <div className="flex items-center gap-4 w-full py-2">
              <button
                className={`text-lg px-3 py-1 text-white border-b rounded-t-md ${
                  tabs === "outline"
                    ? "border-b-4 border-b-blue-500 bg-[#2830a1]"
                    : ""
                }`}
                onClick={() => setTabs("outline")}
              >
                Outline
              </button>
              {quiz !== "" && (
                <button
                  className={`text-lg px-3 py-1 text-white border-b rounded-t-md ${
                    tabs === "quiz"
                      ? "border-b-4 border-b-blue-500 bg-[#2830a1]"
                      : ""
                  }`}
                  onClick={() => setTabs("quiz")}
                >
                  Quiz
                </button>
              )}

              {assignment !== "" && (
                <button
                  type="button"
                  className={`text-lg px-3 py-1 text-white border-b rounded-t-md ${
                    tabs === "assignment"
                      ? "border-b-4 border-b-blue-500 bg-[#282a45]"
                      : ""
                  }`}
                  onClick={() => setTabs("assignment")}
                >
                  Assignment
                </button>
              )}
            </div>
          ) : (
            ""
          )}

          <div className="w-full h-full">
            <div className="w-full flex items-center justify-end">
              <button
                type="button"
                onClick={handleCopyClick}
                className="copyButton self-end bg-primary-two rounded-full text-sm px-2 p-1 -mb-[36px] mr-2 z-30"
              >
                {copyButtonText}
              </button>
            </div>

            {tabs === "" ? (
              <CKEditor
                editor={ClassicEditor as any}
                data={`<p>${query === "" ? response || "" : query}</p>`}
                onChange={(event, editor) => editor.data}
                config={editorConfig}
                ref={editor}
              />
            ) : (
              <CKEditor
                editor={ClassicEditor as any}
                data={`<p>${
                  tabs === "outline"
                    ? outlineResponse
                    : tabs === "quiz"
                    ? quiz
                    : tabs === "assignment"
                    ? assignment
                    : ""
                }</p>`}
                onChange={(event, editor) => editor.data}
                config={editorConfig}
                ref={editor}
              />
            )}
          </div>

          {module === "course-content" ? (
            <div className="flex gap-3 flex-col items-center w-full py-2">
              <button
                type="button"
                className="w-full bg-gradient-to-r from-[rgba(247,15,255,1)] to-[#2C63FF] hover:opacity-90 transition-all duration-300 py-3 px-9 text-white font-semibold rounded-full"
                onClick={() => handleQuizGenerator()}
              >
                Generate Quiz for this outline
              </button>
              <button
                type="button"
                className="w-full bg-gradient-to-r from-[rgba(247,15,255,1)] to-[#2C63FF] hover:opacity-90 transition-all duration-300 py-3 px-9 text-white font-semibold rounded-full"
                onClick={() => handleAssignmentGenerator()}
              >
                Generate Assignment for this outline
              </button>
            </div>
          ) : (
            ""
          )}
        </div>
      ) : (
        <div className="flex items-center justify-center border-4 border-dashed border-white/40 w-full h-full rounded">
          <p className="font-medium text-white/40">Start By Filling The Form</p>
        </div>
      )}
    </>
  );
};

export default ContentResponse;
