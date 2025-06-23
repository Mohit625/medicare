import { useEffect, useState } from "react";
import { generateHealthTipsForDisease } from "../../../utils/generateHealthTips";

const HealthTips = ({ disease }) => {
  const [tips, setTips] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTips = async () => {
      if (!disease) return;
      setLoading(true);
      const result = await generateHealthTipsForDisease(disease);
      setTips(result);
      setLoading(false);
    };
    fetchTips();
  }, [disease]);

  if (!disease) return null;

  return (
    <div className="bg-teal-50 border border-blue-100 p-4 rounded-md mt-4">
      <h3 className="text-teal-700 font-semibold mb-2">Health Tips for {disease}</h3>
      {loading ? (
        <p className="text-gray-500 text-sm">Loading tips...</p>
      ) : (
        <div className="text-sm text-gray-700 whitespace-pre-line">{tips}</div>
      )}
    </div>
  );
};

export default HealthTips;