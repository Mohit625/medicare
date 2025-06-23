import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { useState } from "react";

const bloodPressureData = [
  { day: "Mon", systolic: 135, diastolic: 85 },
  { day: "Tue", systolic: 140, diastolic: 90 },
  { day: "Wed", systolic: 138, diastolic: 88 },
  { day: "Thu", systolic: 142, diastolic: 92 },
  { day: "Fri", systolic: 145, diastolic: 95 },
  { day: "Sat", systolic: 140, diastolic: 90 },
  { day: "Sun", systolic: 138, diastolic: 88 },
];

export function BloodPressureChart() {
  const [activeTab, setActiveTab] = useState("weekly");

  return (
    <Card className="bg-white border-0" >
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <CardTitle className="text-lg font-medium">Blood Pressure</CardTitle>
        <div className="flex gap-2">
          <Button
            variant={activeTab === "weekly" ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveTab("weekly")}
            className="text-xs"
          >
            Weekly
          </Button>
          <Button
            variant={activeTab === "monthly" ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveTab("monthly")}
            className="text-xs"
          >
            Monthly
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">200</span>
            <span className="text-gray-600">150</span>
            <span className="text-gray-600">100</span>
            <span className="text-gray-600">50</span>
          </div>

          <div className="h-48 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={bloodPressureData}>
                <XAxis
                  dataKey="day"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: "#6b7280" }}
                />
                <YAxis
                  domain={[50, 200]}
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: "#6b7280" }}
                />
                <Line
                  type="monotone"
                  dataKey="systolic"
                  stroke="#3b82f6"
                  strokeWidth={2}
                  dot={{ fill: "#3b82f6", strokeWidth: 2, r: 4 }}
                />
                <Line
                  type="monotone"
                  dataKey="diastolic"
                  stroke="#10b981"
                  strokeWidth={2}
                  dot={{ fill: "#10b981", strokeWidth: 2, r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="flex items-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-500"></div>
              <span className="text-gray-600">Systolic</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="text-gray-600">Diastolic</span>
            </div>
          </div>

          <p className="text-xs text-gray-500 text-center">
            chart.healthchat.com
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
