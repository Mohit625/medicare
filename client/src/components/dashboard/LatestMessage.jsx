import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function LatestMessage() {
  return (
    <Card className="bg-white border-0">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-medium">Latest Message</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-start gap-3">
          <Avatar className="w-8 h-8">
            <AvatarImage src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop&crop=face" />
            <AvatarFallback>MC</AvatarFallback>
          </Avatar>
          <div className="flex-1 space-y-1">
            <p className="text-sm text-gray-900">
              Your blood pressure readings look good. Continue with current
              medication.
            </p>
            <p className="text-xs text-gray-500">Dr. Chen • 2 hours ago</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
