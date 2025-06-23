import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Calendar, Activity, ArrowRight } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const quickActions = [
  {
    title: "Diseases",
    subtitle: "View conditions",
    icon: Heart,
    color: "text-red-600",
    bgColor: "bg-red-50",
  },
  {
    title: "My Visits",
    subtitle: "View history",
    icon: Calendar,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    title: "Health Monitor",
    subtitle: "Track vitals",
    icon: Activity,
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
];

export function QuickActions() {
  return (
    <div className="space-y-3">
      {quickActions.map((action, index) => (
        <Card
          key={index}
          className="hover:shadow-md transition-shadow cursor-pointer bg-white border-0"
        >
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-lg ${action.bgColor} flex items-center justify-center`}
                >
                  <action.icon className={`w-5 h-5 ${action.color}`} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">{action.title}</h4>
                  <p className="text-sm text-gray-600">{action.subtitle}</p>
                </div>
              </div>
              <DropdownMenu className="bg-white">
              <DropdownMenuTrigger><ArrowRight className="w-4 h-4 text-gray-400" /></DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white border-0">
    <DropdownMenuItem>Disease1</DropdownMenuItem>
    <DropdownMenuItem>Disease2</DropdownMenuItem>
    <DropdownMenuItem>Disease3</DropdownMenuItem>
    <DropdownMenuItem>Disease4</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
