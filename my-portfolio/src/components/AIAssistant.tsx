import { useState, useRef, useEffect } from "react";
import { FaBrain, FaTimes, FaPaperPlane } from "react-icons/fa";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

// Portfolio context for better AI responses
const PORTFOLIO_CONTEXT = `You are Praneeth, an AI Data Platform Engineer with 2.4+ years of experience. Here's your professional data:

CURRENT ROLE: AMD Platform Engineer (Oct 2024–Present)
- Architecting analytics systems serving 500+ users with 99.9% uptime SLA
- Achieved $12K/month cost optimizations and 40% latency reduction
- Managing containerized services on AWS EKS handling 10K+ concurrent users
- Implemented semantic layer integrations reducing data discovery time by 70%

PREVIOUS EXPERIENCE: Caliber Technologies (Sep 2023–Sep 2024)
- Optimized 15+ APIs handling 50K+ daily requests
- Improved visibility by 60% through enhanced dashboards
- Reduced report generation from 2 hours to 15 minutes
- Implemented real-time alerting and enterprise security integration

FLAGSHIP PROJECT: AI-Powered Data Platform Architecture
- Processes 2TB+ daily data at enterprise scale
- Natural-language analytics over Snowflake using LLMs
- Architecture: React/Angular UI → LLM Gateway (OpenAI/LangChain) → MCP Servers → Snowflake
- Supports 10K+ concurrent users with 99.9% uptime

PRODUCTION PROJECTS:
1. Enterprise Data & AI Platform: 2TB+ daily data, 10K+ concurrent users, LangChain+Snowflake
2. Enterprise Monitoring Platform: 1M+ daily events, sub-second latency, 45% faster incident response
3. Snowflake Data Architecture: 12+ datamarts, 40% latency reduction, $12K/month savings

TECHNICAL SKILLS:
- AI/LLM: LangChain, RAG Architecture, Prompt Engineering, OpenAI APIs, Vector Databases
- Data: Snowflake, dbt, Apache Airflow, Spark, SQL Optimization
- DevOps: Kubernetes, Docker, GitHub Actions, Terraform, CI/CD
- Cloud: AWS (EKS, S3, Lambda, EC2), Azure, Google Cloud
- Backend: FastAPI, ASP.NET Core, GraphQL, REST APIs, Microservices
- Frontend: React.js, Angular
- Languages: Python, JavaScript/TypeScript, SQL

EDUCATION:
- B.Tech in Computer Science Engineering from Andhra University (2023)
- MLOps Specialization (DeepLearning.AI)
- LLM Engineering: Prompt Engineering & RAG Systems (Udemy)
- Kubernetes for Data Engineering (Linux Foundation)

CONTACT: GitHub (github.com/praneeth531641), LinkedIn (linkedin.com/in/praneeth-rayavarapu-8602811a3/)

You should answer questions conversationally about this data. Be professional, specific about metrics and achievements, and mention relevant technologies. If asked about something not in this data, answer based on what a senior platform engineer would know.`;

// Function to call AI API with fallback
const callAI = async (userMessage: string): Promise<string> => {
  try {
    // Try using Open Router API (free, reliable, no auth needed for basic tier)
    const response = await fetch("https://api.openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "mistral/mistral-7b-instruct",
        messages: [
          {
            role: "system",
            content: PORTFOLIO_CONTEXT,
          },
          {
            role: "user",
            content: userMessage,
          },
        ],
        temperature: 0.7,
        max_tokens: 256,
      }),
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const result = await response.json();
    if (result.choices?.[0]?.message?.content) {
      return result.choices[0].message.content.trim();
    }

    return useSmartFallback(userMessage);
  } catch (error) {
    console.log("AI API unavailable, using smart fallback:", error);
    return useSmartFallback(userMessage);
  }
};

// Smart fallback responses based on keywords
const useSmartFallback = (userMessage: string): string => {
  const msg = userMessage.toLowerCase();

  // Greeting responses
  if (msg.match(/^(hi|hello|hey|greetings|good morning|good afternoon).*how are you/i)) {
    return "I'm doing great, thanks for asking! 😊 I'm here to tell you about Praneeth's exciting journey in platform engineering, AI systems, and data architecture. What would you like to know?";
  }

  if (msg.match(/^(hi|hello|hey|greetings|what's up)/i)) {
    return "Hey there! 👋 I'm Praneeth's AI Assistant. I'm here to answer any questions about his experience, projects, and technical expertise. What would you like to know?";
  }

  // Experience questions
  if (msg.includes("experience") || msg.includes("background") || msg.includes("career")) {
    return "Praneeth is an AI Data Platform Engineer with 2.4+ years of experience. Currently at AMD (Oct 2024–Present) architecting analytics systems serving 500+ users with 99.9% uptime. Previously at Caliber Technologies where he optimized 15+ APIs handling 50K+ daily requests, improving visibility by 60% and cutting report time from 2 hours to 15 minutes. He specializes in building enterprise-scale systems integrating Snowflake, Kubernetes, and AI/LLM workflows.";
  }

  // Skills questions
  if (msg.includes("skill") || msg.includes("technology") || msg.includes("stack")) {
    return "Praneeth's technical expertise includes: Data Platforms (Snowflake, dbt, Airflow), AI/LLM (LangChain, RAG, OpenAI APIs), DevOps (Kubernetes, Docker, Terraform), Cloud (AWS EKS, Azure, GCP), Backend (FastAPI, ASP.NET Core, GraphQL), and Languages (Python, TypeScript, SQL). He's particularly strong in building production-scale systems that handle 2TB+ daily data with 99.9% uptime.";
  }

  // Project questions
  if (msg.includes("project") || msg.includes("work") || msg.includes("built")) {
    return "Praneeth has 3 major production projects:\n\n1️⃣ Enterprise Data & AI Platform: Processes 2TB+ daily data, 10K+ concurrent users, integrates LangChain with Snowflake for NL-to-SQL queries.\n\n2️⃣ Enterprise Monitoring Platform: Handles 1M+ daily events, sub-second latency, 45% faster incident response.\n\n3️⃣ Snowflake Data Architecture: 12+ optimized datamarts, 40% latency reduction, $12K/month cost savings.\n\nAll built at enterprise scale with 99.9% uptime!\n\nWould you like details about any specific project?";
  }

  // AI/LLM expertise
  if (msg.includes("ai") || msg.includes("llm") || msg.includes("artificial intelligence") || msg.includes("genai")) {
    return "Absolutely! Praneeth has deep AI/LLM expertise including:\n- LangChain orchestration for complex workflows\n- RAG (Retrieval Augmented Generation) for intelligent Q&A systems\n- Prompt engineering for optimized outputs\n- OpenAI API integration\n- Vector database design\n- Natural language to SQL translation\n\nHe's built semantic models enabling users to query complex datasets in natural language without knowing SQL. His flagship project uses AI to make analytics more accessible to business users!";
  }

  // Contact questions
  if (msg.includes("contact") || msg.includes("reach") || msg.includes("email") || msg.includes("linkedin") || msg.includes("github")) {
    return "You can reach Praneeth through:\n\n📱 LinkedIn: linkedin.com/in/praneeth-rayavarapu-8602811a3/\n\n🐙 GitHub: github.com/praneeth531641\n\nOr scroll down to the Contact section on this portfolio. He's open to opportunities in Platform Engineering, MLOps, and Data Architecture roles!";
  }

  // Default helpful response
  return `That's a great question about Praneeth! I'm having a moment of technical difficulty with the AI backend, but I can tell you he's an AI Data Platform Engineer specializing in Snowflake, Kubernetes, and LLM integration. \n\nTry asking me about:\n- His experience at AMD or Caliber\n- His projects and achievements\n- His technical skills\n- How to contact him\n\nWhat interests you most?`;
};

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content: "Hi! 👋 I'm Praneeth's AI Assistant, powered by Mistral AI. I'm trained on his professional portfolio data and can have a natural conversation with you about his experience, projects, and expertise. Ask me anything!",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      // Call real AI API
      const aiResponse = await callAI(input);
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: aiResponse,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Error:", error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: "Sorry, I encountered an error. Please try again.",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* AI Assistant Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-24 right-6 z-40 p-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 animate-bounce"
        title="Ask AI Assistant"
        aria-label="Open AI Assistant"
      >
        <FaBrain className="text-lg" />
      </button>

      {/* Chat Modal */}
      {isOpen && (
        <div className="fixed bottom-40 right-6 z-50 w-96 h-screen max-h-96 bg-white dark:bg-slate-800 rounded-2xl shadow-2xl flex flex-col border border-gray-200 dark:border-cyan/30 glass-effect-dark">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white p-4 rounded-t-2xl flex justify-between items-center">
            <div>
              <h3 className="font-bold text-lg">Praneeth's AI Assistant</h3>
              <p className="text-xs opacity-90">Powered by Mistral AI</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/20 p-2 rounded-full transition-all"
              aria-label="Close"
            >
              <FaTimes />
            </button>
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-xs px-4 py-2 rounded-lg ${
                    msg.role === "user"
                      ? "bg-blue-600 text-white rounded-br-none"
                      : "bg-gray-200 dark:bg-slate-700 text-gray-900 dark:text-slate-100 rounded-bl-none"
                  }`}
                >
                  <p className="text-sm leading-relaxed">{msg.content}</p>
                  <p className="text-xs mt-1 opacity-70">
                    {msg.timestamp.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-200 dark:bg-slate-700 px-4 py-2 rounded-lg rounded-bl-none">
                  <div className="flex gap-2">
                    <div className="w-2 h-2 bg-gray-600 dark:bg-slate-400 rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-gray-600 dark:bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }} />
                    <div className="w-2 h-2 bg-gray-600 dark:bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="border-t border-gray-200 dark:border-slate-700 p-4 bg-gray-50 dark:bg-slate-800 rounded-b-2xl">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything..."
                className="flex-1 px-3 py-2 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-slate-100 border border-gray-300 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                disabled={isLoading}
              />
              <button
                onClick={handleSendMessage}
                disabled={isLoading || !input.trim()}
                className="px-3 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                aria-label="Send message"
              >
                <FaPaperPlane className="text-sm" />
              </button>
            </div>
            <p className="text-xs text-gray-500 dark:text-slate-400 mt-2">
              Try: "What's your experience?" or "Tell me about your projects"
            </p>
          </div>
        </div>
      )}
    </>
  );
}
