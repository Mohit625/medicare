import { X, Sparkles } from "lucide-react";
import { Button } from "./../ui/button";

export function NotificationBanner() {
  return (
    <div className="bg-slate-600 text-white py-3 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-orange-400" />
          <span className="text-sm">
            <strong>New feature:</strong> AI-powered symptom checker now available!{" "}
            <a href="#" className="underline hover:no-underline">
              Try it now
            </a>
          </span>
        </div>
        <Button variant="ghost" size="sm" className="text-white hover:bg-slate-700">
          <X className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}