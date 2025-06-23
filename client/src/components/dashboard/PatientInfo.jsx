import { Card, CardContent } from "@/components/ui/card";
import { Avatar,AvatarImage,AvatarFallback } from "../ui/avatar";
import { useUser } from "@clerk/clerk-react";
export function PatientInfo({users}) {
  const {user} = useUser();
  return (
    <Card className="bg-white border-0">
      <CardContent className="p-6">
        <div className="space-y-4">
        <div className="flex flex-col items-center gap-4">
            <Avatar className="w-24 h-24">
              <AvatarImage src={user?.imageUrl} alt={user?.fullName || "User"}  />
              <AvatarFallback>{user?.firstName?.charAt(0) || "U"}</AvatarFallback>
            </Avatar>
            <div className="text-center">
              <p className="text-sm font-medium text-gray-900">{users?.name}</p>
              <p className="text-xs text-gray-500">Patient ID: {users?.userId}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 ">
          <div className="items-center flex flex-col bg-gradient-to-br bg-blue-50 to bg-blue-100 rounded-md p-2">
            <span className="font-medium text-gray-900">Age</span>
            <span className="text-sm text-gray-600">{users?.age}</span>
          </div>
          <div className="items-center flex flex-col bg-gradient-to-br bg-blue-50 to bg-blue-100 rounded-md p-2">
            <span className="font-medium text-gray-900">BloodGroup</span>
            <span className="text-sm text-gray-600">{users?.bloodGroup}</span>
          </div>
          <div className="items-center flex flex-col bg-gradient-to-br bg-blue-50 to bg-blue-100 rounded-md p-2">
            <span className="font-medium text-gray-900">Height</span>
            <span className="text-sm text-gray-600">{(Number(users?.height) / 30.48).toFixed(2)} feet</span>
          </div>
          <div className="items-center flex flex-col bg-gradient-to-br bg-blue-50 to bg-blue-100 rounded-md p-2">
            <span className="font-medium text-gray-900">Weight</span>
            <span className="text-sm text-gray-600">{users?.weight}Kg</span>
          </div>
          </div>
          
        </div>
      </CardContent>
    </Card>
  );
}
