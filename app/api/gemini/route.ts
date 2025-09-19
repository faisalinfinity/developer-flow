import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
  const { question } = await request.json();

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          systemInstruction: {
            role: "system",
            parts: [
              {
                text: `You are a concise AI assistant for a Q&A platform. 
Provide **only the direct answer**. 
- Do not start with phrases like "Sure" or "Okay, I can help you".
- Do not use * or markdown emphasis.
- If code is required, output only the code block with minimal explanation. 
- Keep answers short and professional.
- No HTML or any other format just text`,
              },
            ],
          },
          contents: [
            {
              role: "user",
              parts: [{ text: question }],
            },
          ],
          generationConfig: {
            temperature: 0.3,
            maxOutputTokens: 400,
          },
        }),
      }
    );

    const responseData = await response.json();
    console.log("Gemini raw response:", JSON.stringify(responseData, null, 2));

    let reply = "No reply";
    if (responseData?.candidates?.length > 0) {
      const candidate = responseData.candidates[0];
      if (candidate?.content?.parts?.length > 0) {
        reply = candidate.content.parts
          .map((p: any) => p.text || "")
          .join("\n")
          .trim();
      }
    }

    return NextResponse.json({ reply });
  } catch (error: any) {
    console.error("Gemini API error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};
