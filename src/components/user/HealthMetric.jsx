import { Card, CardContent } from "@/components/ui/card";

/**
 * @param {Object} props
 * @param {React.ElementType} props.icon - Lucide icon component
 * @param {string} props.value - Metric value (e.g., "72 bpm")
 * @param {string} props.label - Label (e.g., "Heart Rate")
 * @param {string} [props.iconColor] - Optional Tailwind text color class
 */
const HealthMetric = ({
  icon: Icon,
  value,
  label,
  iconColor = "text-blue-600",
}) => {
  return (
    <Card className="bg-white border-gray-200">
      <CardContent className="p-6 text-center">
        <div className="flex justify-center mb-3">
          <Icon className={`h-6 w-6 ${iconColor}`} />
        </div>
        <div className="text-2xl font-bold text-gray-900 mb-1">{value}</div>
        <div className="text-sm text-gray-600">{label}</div>
      </CardContent>
    </Card>
  );
};

export default HealthMetric;
