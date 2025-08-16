import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter,
  } from "@/components/ui/dialog_ui";
  import { Input } from "@/components/ui/input";
  import { Button } from "@/components/ui/button";
  import { useState } from "react";
  
  const UserProfileDialog = ({ open, onClose, onSave, userId }) => {
    const [formData, setFormData] = useState({
      userId,
      name: "",
      age: "",
      height: "",
      weight: "",
      diseases: "",
      bloodGroup: "",
    });
  
    const handleChange = (e) => {
      setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
  
    const handleSubmit = async () => {
      try {
        const res = await fetch("https://medicare-coral-psi.vercel.app/api/user-profile", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
  
        if (!res.ok) throw new Error("Profile submission failed");
  
        const data = await res.json();
        onSave(data);
        onClose();
      } catch (err) {
        console.error(err);
      }
    };
  
    return (
      <Dialog open={open} onOpenChange={onClose}  >
        <DialogContent className="sm:max-w-md bg-white border-0">
          <DialogHeader>
            <DialogTitle>Complete Your Profile</DialogTitle>
          </DialogHeader>
  
          <div className="space-y-4 mt-4">
            <Input name="name" placeholder="Full Name" onChange={handleChange} />
            <Input name="age" type="number" placeholder="Age" onChange={handleChange} />
            <Input name="height" placeholder="Height (cm)" onChange={handleChange} />
            <Input name="weight" placeholder="Weight (Kg)" onChange={handleChange} />
            <Input name="diseases" placeholder="Known Diseases" onChange={handleChange} />
            <Input name="bloodGroup" placeholder="Blood Group (e.g. A+, B-)" onChange={handleChange} />
          </div>
  
          <DialogFooter className="mt-6">
            <Button onClick={handleSubmit} className="w-full bg-blue-600 hover:bg-blue-700 text-white">
              Save Profile
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  };
  
  export default UserProfileDialog;
  