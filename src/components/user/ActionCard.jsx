import { Card, CardContent } from "@/components/ui/card";

/**
 * @param {Object} props
 * @param {React.ElementType} props.icon 
 * @param {string} props.title 
 * @param {() => void} [props.onClick] 
 */
const ActionCard = ({ icon: Icon, title, onClick }) => {
  return (
    <Card
      className="cursor-pointer hover:shadow-md transition-shadow duration-200 bg-blue-50/50 border-blue-100"
      onClick={onClick}
    >
      <CardContent className="flex flex-col items-center justify-center p-6 text-center">
        <div className="p-3 bg-blue-100 rounded-full mb-3">
          <Icon className="h-6 w-6 text-blue-600" />
        </div>
        <h3 className="font-medium text-gray-900 text-sm">{title}</h3>
      </CardContent>
    </Card>
  );
};

export default ActionCard;
