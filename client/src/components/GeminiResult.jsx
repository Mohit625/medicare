import { formatGeminiResponse } from './../../utils/formatGeminiResponse';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useState } from 'react';

export function GeminiResult({ response }) {
  const formatted = formatGeminiResponse(response);
  const [expanded, setExpanded] = useState(false);

  const truncatedText = formatted.slice(0, 300); // Adjust char limit
  const isLong = formatted.length > 300;

  return (
    <div className="bg-slate-50 p-4 text-gray-700 rounded-md prose max-w-none mt-4">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {expanded || !isLong ? formatted : `${truncatedText}...`}
      </ReactMarkdown>
      
      {isLong && (
        <button
          onClick={() => setExpanded(!expanded)}
          className=" text-black font-medium hover:cursor-pointer"
        >
          {expanded ? 'Read Less' : 'Read More'}
        </button>
      )}
    </div>
  );
}
