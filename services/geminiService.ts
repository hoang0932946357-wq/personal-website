import { GoogleGenAI } from "@google/genai";
import { PERSONAL_INFO, SERVICES, PROJECTS } from "../constants";

let ai: GoogleGenAI | null = null;

const getAIClient = () => {
  if (!ai && process.env.API_KEY) {
    ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }
  return ai;
};

// Construct a context string based on the website content
const getSystemContext = () => {
  const servicesList = SERVICES.map(s => `- ${s.title}: ${s.description}`).join('\n');
  const projectsList = PROJECTS.map(p => `- ${p.title} (${p.category}): ${p.description}`).join('\n');

  return `
    You are "Jerry AI", a virtual assistant for Jerry Yu's (余政憲) portfolio website.
    Your goal is to answer visitor questions about Jerry's services, background, and expertise in a professional, friendly, and helpful tone.
    
    Here is the context about Jerry Yu:
    Name: ${PERSONAL_INFO.name}
    Brand: ${PERSONAL_INFO.brand}
    Tagline: ${PERSONAL_INFO.tagline}
    Bio: ${PERSONAL_INFO.intro}
    
    Services Offered:
    ${servicesList}
    
    Key Projects:
    ${projectsList}
    
    Guidelines:
    1. Be concise and polite.
    2. If asked about pricing or booking, suggest they use the "Contact" form on the website.
    3. Emphasize Jerry's unique blend of "Traditional Music Expertise" + "Modern AI/Automation Tech".
    4. Respond in Traditional Chinese (繁體中文) unless asked otherwise.
    5. Do not hallucinate contact info not provided here.
  `;
};

export const chatWithGemini = async (userMessage: string, history: {role: string, content: string}[]) => {
  const client = getAIClient();
  if (!client) {
    // Graceful fallback if no API key
    return "抱歉，目前 AI 助理正在維護中，請直接透過表單聯繫傑瑞老師。";
  }

  try {
    const model = 'gemini-3-flash-preview'; // Using the latest recommended model
    const context = getSystemContext();

    // Convert simple history to API format if needed, but for single turn or simple chat we can just append
    // For simplicity in this demo, we'll use generateContent with systemInstruction
    
    const response = await client.models.generateContent({
      model: model,
      contents: userMessage, // In a real app, we would pass the full history here
      config: {
        systemInstruction: context,
        temperature: 0.7,
      }
    });

    return response.text || "抱歉，我現在無法回答，請稍後再試。";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "系統忙碌中，請稍後再試。";
  }
};
