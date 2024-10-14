import React, { useState } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from '@cloudinary/react';
import { fill } from "@cloudinary/url-gen/actions/resize";
import { Loader2, X } from 'lucide-react';
import BtnPurple from './Buttons/BtnPurple';

// Initialize Cloudinary instance
const cld = new Cloudinary({
  cloud: {
    cloudName: 'djth3crih' // Replace with your cloud name
  }
});

const CloudinaryPhotoUpload = () => {
  const [uploading, setUploading] = useState(false);
  const { control, watch } = useFormContext();
  const photos = watch('photos') || [];
  const { fields, append, remove } = useFieldArray({
    name: 'photos',
    control,
  });

  const uploadImage = async (file) => {
    setUploading(true);
    const formData = new FormData();
    console.log({isFilePresent: !!file})
    formData.append('file', file);
    formData.append('upload_preset', 'roomora_images'); // Replace with your upload preset

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/djth3crih/image/upload`, // Replace with your cloud name
        {
          method: 'POST',
          body: formData,
        }
      );
      const data = await response.json();
      setUploading(false);
      return { publicId: data.public_id, url: data.secure_url };
    } catch (error) {
      console.error('Upload failed:', error);
      setUploading(false);
      return null;
    }
  };

  const handleFileChange = async (event) => {
    const files = Array.from(event.target.files);
    
    if (photos.length + files.length > 10) {
      alert('You can only upload a maximum of 10 photos.');
      return;
    }

    for (const file of files) {
      const result = await uploadImage(file);
      if (result) {
        append(result);
      }
    }
  };

  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold mb-2">Upload Photos</h3>
      <div className="flex flex-wrap gap-4 mb-4">
        {fields.map((field, index) => (
          <div key={field.id} className="relative">
            <AdvancedImage
              cldImg={cld.image(field.publicId).resize(fill().width(96).height(96))}
              alt={`Uploaded ${index + 1}`}
              className="w-24 h-24 object-cover rounded-md"
            />
            <button
              type="button"
              onClick={() => remove(index)}
              className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1"
            >
              <X size={16} />
            </button>
          </div>
        ))}
      </div>
      <div className="flex items-center space-x-4">
        <label className="cursor-pointer bg-purple hover:bg-blue-600 text-white px-5 py-3 rounded-lg">
          {uploading ? (
            <span className="flex items-center">
              <Loader2 className="animate-spin mr-2" size={16} />
              Uploading...
            </span>
          ) : (
            'Add Photos'
          )}
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleFileChange}
            className="hidden"
            disabled={uploading}
          />
        </label>
        <span className="text-sm text-gray-500">
          {photos.length}/10 photos uploaded
        </span>
      </div>
    </div>
  );
};

export default CloudinaryPhotoUpload;