import { useRef, useState } from "react";
import { Upload } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function UploadImageButton({ userId }) {
  const inputRef = useRef(null);
  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    inputRef.current?.click();
  };

  const handleChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setImageFile(file);

    const formData = new FormData();
    formData.append("image", file);
    formData.append("userId", userId); // Make sure you're passing this prop

    setLoading(true);
    try {
      const res = await fetch("https://medicare-ired.onrender.com/api/image-disease-predictions", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Upload failed");

      console.log("Prediction result:", data);
    } catch (err) {
      console.error("Error:", err.message);
      alert("Upload failed: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Button
        type="button"
        variant="outline"
        className="flex items-center"
        onClick={handleClick}
        disabled={loading}
      >
        <Upload className="h-4 w-4 mr-2" />
        {loading ? "Uploading..." : "Upload Image"}
      </Button>

      <input
        type="file"
        accept="image/*"
        ref={inputRef}
        onChange={handleChange}
        className="hidden"
      />

      {imageFile && (
        <p className="text-sm mt-2 text-gray-600">Selected: {imageFile.name}</p>
      )}
    </>
  );
}
