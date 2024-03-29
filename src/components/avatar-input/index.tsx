import { ChangeEvent } from "react";
import { AvatarInputContainer } from "./styles";
import pictureIcon from "@/assets/icons/picture.svg";

interface ImageInputProps {
  imageSrc: string | null;
  onImageChange: (imageSrc: string | null) => void;
}

export function AvatarInput({ imageSrc, onImageChange }: ImageInputProps) {

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (!e?.target) return;
        onImageChange(e.target.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      onImageChange(null);
    }
  };

  return (
    <AvatarInputContainer>
      <label htmlFor="image-upload">
        {imageSrc ? (
          <img src={imageSrc} alt="Selected" className="avatar" />
        ) : (
          <img src={pictureIcon} alt="No Image" className="picture-icon" />
        )}
      </label>
      <input
        type="file"
        id="image-upload"
        accept="image/*"
        onChange={handleImageChange}
      />
    </AvatarInputContainer>
  );
}
