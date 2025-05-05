import { useState, useRef, useEffect } from "react";
import {
  FiSend,
  FiUser,
  FiTrash2,
  FiMessageSquare,
  FiX,
  FiAlertTriangle,
} from "react-icons/fi";

const DeepSeekChat = () => {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hello! I'm your farming AI assistant. Ask me about crops, soil, or livestock management!",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const conversationHistory = [
        {
          role: "system",
          content:
            "You are a helpful farming assistant specializing in crops, soil management, and livestock. Provide accurate, practical advice.",
        },
        ...messages.map((msg) => ({
          role: msg.role,
          content: msg.content,
        })),
        { role: "user", content: input },
      ];

      const response = await fetch(
        "https://openrouter.ai/api/v1/chat/completions",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_OPENROUTER_API_KEY}`,
            "HTTP-Referer": window.location.href,
            "X-Title": "Farming Assistant",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model: "deepseek/deepseek-r1:free",
            messages: conversationHistory,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to get response from AI");
      }

      const data = await response.json();
      const aiMessage = {
        role: "assistant",
        content:
          data.choices[0]?.message?.content ||
          "I'm not sure how to respond to that.",
      };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error("API Error:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Sorry, I encountered an issue. Please try again.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const clearChat = () => {
    setMessages([
      {
        role: "assistant",
        content: "How can I help with your farming questions today?",
      },
    ]);
    setShowDeleteConfirm(false);
  };

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-full shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-2xl z-50 group"
          aria-label="Open chat"
        >
          <FiMessageSquare
            size={28}
            className="transform group-hover:rotate-12 transition-transform"
          />
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-xs font-bold animate-pulse font-['Rubik']">
            AI
          </span>
        </button>
      )}

      {/* Chat Container */}
      {isOpen && (
        <div className="fixed bottom-8 right-8 w-full max-w-md h-[500px] flex flex-col bg-white rounded-2xl shadow-2xl overflow-hidden border border-green-200/80 animate-fade-in-up z-50 font-['Rubik']">
          {/* Header with gradient */}
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-4 text-white flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-white/20 rounded-xl backdrop-blur-sm">
                <FiMessageSquare size={22} className="text-white" />
              </div>
              <h2 className="font-bold text-xl">Farming Assistant</h2>
            </div>
            <div className="flex space-x-3">
              <button
                onClick={() => setShowDeleteConfirm(true)}
                className="p-2 rounded-xl hover:bg-white/20 transition-all"
                title="Clear chat"
              >
                <FiTrash2 size={18} />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-xl hover:bg-white/20 transition-all"
                title="Minimize"
              >
                <FiX size={20} />
              </button>
            </div>
          </div>

          <div className="flex-1 p-4 overflow-y-auto bg-gradient-to-b from-green-50/30 to-white/30">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex mb-3 ${
                  message.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`flex max-w-[90%] ${
                    message.role === "user" ? "flex-row-reverse" : "flex-row"
                  }`}
                >
                  <div
                    className={`rounded-xl p-2 ${
                      message.role === "user"
                        ? "bg-blue-100/80 ml-2"
                        : "bg-green-100/80 mr-2"
                    } shadow-sm flex-shrink-0`}
                  >
                    <FiUser
                      className={
                        message.role === "user"
                          ? "text-blue-600"
                          : "text-green-600"
                      }
                      size={18}
                    />
                  </div>
                  <div
                    className={`px-3 py-2 rounded-xl shadow-sm text-sm ${
                      message.role === "user"
                        ? "bg-blue-500 text-white"
                        : "bg-white border border-green-200/60"
                    }`}
                  >
                    <p>{message.content}</p>
                  </div>
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start mb-3">
                <div className="flex max-w-[90%]">
                  <div className="rounded-xl p-2 bg-green-100/80 mr-2 shadow-sm">
                    <FiUser className="text-green-600" size={18} />
                  </div>
                  <div className="px-3 py-2 bg-white rounded-xl border border-green-200/60 shadow-sm">
                    <div className="flex space-x-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-bounce"></div>
                      <div
                        className="w-1.5 h-1.5 rounded-full bg-green-400 animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                      <div
                        className="w-1.5 h-1.5 rounded-full bg-green-400 animate-bounce"
                        style={{ animationDelay: "0.4s" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form
            onSubmit={handleSubmit}
            className="p-3 border-t border-green-200/50 bg-white/90 backdrop-blur-sm"
          >
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about crops, soil, weather..."
                className="flex-1 px-3 py-2 bg-green-50/50 border border-green-200/60 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400/30 focus:border-green-400 text-gray-700 placeholder-green-600/50 text-sm"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading}
                className="p-2.5 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-lg shadow hover:shadow-md transition-all hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"
              >
                <FiSend size={18} />
              </button>
            </div>
            <p className="text-xs text-center text-green-600/50 mt-2">
              Powered by KetemaFarm AI
            </p>
          </form>
        </div>
      )}
      {showDeleteConfirm && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-xl p-5 max-w-sm mx-4 border border-red-200 animate-pop-in">
            <div className="flex items-start space-x-3">
              <div className="p-2 bg-red-100 rounded-full mt-0.5">
                <FiAlertTriangle className="text-red-500" size={20} />
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-800 mb-1">
                  Clear Chat History?
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  This will permanently delete all messages in this
                  conversation.
                </p>
                <div className="flex space-x-3">
                  <button
                    onClick={() => setShowDeleteConfirm(false)}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={clearChat}
                    className="flex-1 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors flex items-center justify-center space-x-1"
                  >
                    <FiTrash2 size={16} />
                    <span>Delete</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DeepSeekChat;
