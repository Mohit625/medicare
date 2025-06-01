export function formatGeminiResponse(rawText) {
    if (!rawText) return '';
  
    // Remove disclaimer and AI phrases
    const cleaned = rawText
      .replace(/I'm an AI.*?medical advice\./gi, '')
      .replace(/(?<=\*\*)(.*?)\*\*/g, '$1') 
      .replace(/\*{2,}/g, '')
      .replace(/\*/g, '-') 
      .replace(/(?:\n\s*){2,}/g, '\n\n') 
      .trim();
  
    const withHeaders = cleaned
      .replace(/(?<=^|\n)(Home Remedies.*?)\n/gi, '\n🏠 $1\n')
      .replace(/(?<=^|\n)(When to see a doctor.*?)\n/gi, '\n⚠️ $1\n')
      .replace(/(?<=^|\n)(Why you might have.*?)\n/gi, '\n🤔 $1\n')
      .replace(/(?<=^|\n)(Important Note.*?)\n/gi, '\n📌 $1\n');
  
    return withHeaders;
  }
  