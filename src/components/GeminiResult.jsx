import { formatGeminiResponse } from './../../utils/formatGeminiResponse';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
export function GeminiResult({ response }) {
    const formatted = formatGeminiResponse(response);

    return (
      <div className="bg-slate-100 p-4 rounded-md prose max-w-none">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {formatted}
        </ReactMarkdown>
      </div>
    );
}
