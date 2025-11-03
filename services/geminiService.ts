
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  // This is a fallback for development environments where the key might not be set.
  // In a real production environment, this should throw an error or be handled securely.
  console.warn("API_KEY for Gemini is not set. AI features will not work.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY! });

export const enhanceResume = async (resumeText: string): Promise<string> => {
  if (!API_KEY) {
    return Promise.reject(new Error("API key is not configured."));
  }

  const prompt = `
    You are an expert career coach and professional resume writer specializing in the tech industry.
    Your task is to analyze and enhance the following resume text.
    Please rewrite it to be more professional, impactful, and clear.
    Focus on the following:
    - Use strong action verbs to start each bullet point.
    - Quantify achievements with metrics and data wherever possible (e.g., "Increased performance by 20%," "Reduced load times by 300ms").
    - Improve clarity, conciseness, and overall readability.
    - Ensure the tone is professional and confident.
    - Organize the information logically.
    - Correct any grammatical errors or typos.
    
    Return ONLY the enhanced resume text, formatted cleanly. Do not include any introductory phrases like "Here is the enhanced version".

    Original Resume Text:
    ---
    ${resumeText}
    ---
  `;

  try {
    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
    });
    
    return response.text.trim();
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    throw new Error("Failed to communicate with the AI service.");
  }
};
