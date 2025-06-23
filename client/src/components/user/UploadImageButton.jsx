import { useRef, useState } from "react";
import { Upload } from "lucide-react";
import { Button } from "@/components/ui/button"; // your Button component path

export default function UploadImageButton() {
  const inputRef = useRef(null);
  const [imageFile, setImageFile] = useState(null);

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.click(); // manually trigger the file input
    }
  };

  const handleChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      console.log("Selected image:", file);
    }
  };

  return (
    <>
      <Button
        type="button"
        variant="outline"
        className="flex items-center"
        onClick={handleClick}
      >
        <Upload className="h-4 w-4 mr-2" />
        Upload Image
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
