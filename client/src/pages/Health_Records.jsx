import { BloodPressureChart } from "@/components/dashboard/BloodPressureChart";
import { NextAppointment } from "@/components/dashboard/NextAppointment";
import { PatientInfo } from "@/components/dashboard/PatientInfo";
import { LatestMessage } from "@/components/dashboard/LatestMessage";
import { PrescriptionsTable } from "@/components/dashboard/PrescriptionsTable";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { HealthcareNav } from "@/components/dashboard/Healthcarenav";
import { useUser } from "@clerk/clerk-react";
import { useState,useEffect } from "react";

const Health_Records = () => {
    const { user,isSignedIn } = useUser();
    const [userdata, setuserdata] = useState();
    useEffect(() => {
        if (!isSignedIn) return;
      
        const fetchuserdata = async () => {
          try {
            const res = await fetch(`http://localhost:3000/api/user-profile?userId=${user.id}`);
            const data = await res.json();
            setuserdata(data);
          } catch (err) {
            console.error("Failed to fetch appointments:", err);
          }
        };
      
        fetchuserdata();
      }, [user, isSignedIn]);
      const getGreeting = () => {
        const hour = new Date().getHours();
      
        if (hour < 12) return "Good Morning";
        if (hour < 17) return "Good Afternoon";
        return "Good Evening";
      };

  return (
    <div className=" overflow-x-scroll min-h-screen bg-gray-50">
      <div className=" flex-1 p-6 max-w-7xl m-auto">
        {/* <div>
        <LatestMessage />
        <QuickActions />
        </div> */}
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900 mb-1">
              {getGreeting()}, {user?.firstName}!
            </h1>
            <p className="text-gray-600">
              Here's your health overview for today
            </p>
          </div>

          
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
          {/* Left Column - Chart and Appointment */}
          <div className="space-y-6">
            <PatientInfo users={userdata} />
            <NextAppointment />
            
          </div>
          <div className="lg:col-span-2 space-y-6">
            <BloodPressureChart />
            <PrescriptionsTable />
          </div>
          <div className="space-y-6">
        <LatestMessage />
        <QuickActions />
        </div>

          {/* Right Column - Info Cards */}
        </div>
      </div>
    </div>
  );
};

export default Health_Records;
