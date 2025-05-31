export function formatGeminiResponse(rawText) {
    if (!rawText) return '';
  
    // Remove disclaimer and AI phrases
    const cleaned = rawText
      .replace(/I'm an AI.*?medical advice\./gi, '')
      .replace(/(?<=\*\*)(.*?)\*\*/g, '$1') // Remove markdown-style bold
      .replace(/\*{2,}/g, '') // Remove any remaining double asterisks
      .replace(/\*/g, '-') // Convert single * to dashes for bullet points
      .replace(/(?:\n\s*){2,}/g, '\n\n') // Collapse extra newlines
      .trim();
  
    // Optional: further enhance with section headers
    const withHeaders = cleaned
      .replace(/(?<=^|\n)(Home Remedies.*?)\n/gi, '\n🏠 $1\n')
      .replace(/(?<=^|\n)(When to see a doctor.*?)\n/gi, '\n⚠️ $1\n')
      .replace(/(?<=^|\n)(Why you might have.*?)\n/gi, '\n🤔 $1\n')
      .replace(/(?<=^|\n)(Important Note.*?)\n/gi, '\n📌 $1\n');
  
    return withHeaders;
  }
  