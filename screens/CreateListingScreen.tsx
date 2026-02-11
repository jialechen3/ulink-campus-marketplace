import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ICONS } from '../constants';
import { GoogleGenAI } from "@google/genai";
import { User, Product } from '../types';

interface Props {
  user: User | null;
  onCreate?: (product: Product) => void;
  onUpdate?: (id: string, product: Partial<Product>) => void;
  listings?: Product[];
}

const CreateListingScreen: React.FC<Props> = ({ user, onCreate, onUpdate, listings = [] }) => {
  const { id } = useParams<{ id: string }>();
  const isEditing = !!id;
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    category: '',
    description: '',
    condition: 'Used - Good'
  });

  useEffect(() => {
    if (isEditing && id && listings.length > 0) {
      const listing = listings.find(p => p.id === id);
      if (listing) {
        setFormData({
          name: listing.name,
          price: listing.price,
          category: listing.category,
          description: listing.description,
          condition: listing.condition
        });
        setSelectedImages(listing.images);
      }
    }
  }, [id, isEditing, listings]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const fileArray = Array.from(files) as File[];
      fileArray.forEach(file => {
        const reader = new FileReader();
        reader.onloadend = () => {
          if (reader.result) {
            setSelectedImages(prev => [...prev, reader.result as string]);
          }
        };
        reader.onerror = (error) => {
          console.error("FileReader error: ", error);
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const removeImage = (index: number) => {
    setSelectedImages(prev => prev.filter((_, i) => i !== index));
  };

  const enhanceDescription = async () => {
    if (!formData.name) return;
    setLoading(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `Create an attractive marketplace description for this item: "${formData.name}". 
        Make it persuasive for a college student community. Keep it under 50 words.`,
      });
      if (response.text) {
        setFormData(prev => ({ ...prev, description: response.text.trim() }));
      }
    } catch (error) {
      console.error("Gemini failed:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = () => {
    if (!user || !formData.name || !formData.price || !formData.category) return;

    const finalImages = selectedImages.length > 0
      ? selectedImages
      : [];

    const productData: any = {
      name: formData.name,
      price: formData.price.startsWith('$') ? formData.price : `$${formData.price}`,
      category: formData.category,
      description: formData.description || 'No description provided.',
      images: finalImages,
      condition: formData.condition,
    };

    if (isEditing && id) {
      onUpdate?.(id, productData);
    } else {
      onCreate?.(productData);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-brand-bg">
      {/* Header */}
      <div className="flex items-center p-4 pb-2 justify-between sticky top-0 bg-brand-bg z-10 border-b border-brand-border">
        <button onClick={() => navigate(-1)} className="text-white flex size-12 items-center">
          {ICONS.X}
        </button>
        <h2 className="text-white text-lg font-bold flex-1 text-center pr-12">{isEditing ? 'Edit Listing' : 'Create Listing'}</h2>
      </div>

      <div className="px-4 py-4 flex flex-col gap-5">
        {/* Image Uploader */}
        <div className="flex flex-col gap-3">
          <label className="text-xs font-bold text-brand-muted uppercase tracking-wider ml-1">Photos ({selectedImages.length})</label>
          <div className="grid grid-cols-3 gap-3">
            {selectedImages.map((img, idx) => (
              <div key={idx} className="relative aspect-square rounded-xl overflow-hidden border border-brand-border bg-black/20 group">
                <img src={img} className="w-full h-full object-cover" alt={`Preview ${idx}`} />
                <button
                  onClick={() => removeImage(idx)}
                  className="absolute top-1 right-1 size-6 bg-red-500 rounded-full flex items-center justify-center text-white shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 256 256"><path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path></svg>
                </button>
              </div>
            ))}
            <button
              onClick={() => fileInputRef.current?.click()}
              className="aspect-square rounded-xl bg-brand-input border-2 border-dashed border-brand-border flex flex-col items-center justify-center text-brand-muted hover:border-primary transition-all active:scale-[0.98]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><path d="M128,80a8,8,0,0,1,8,8v32h32a8,8,0,0,1,0,16H136v32a8,8,0,0,1-16,0V136H88a8,8,0,0,1,0-16h32V88A8,8,0,0,1,128,80Zm96,48A96,96,0,1,1,128,32,96.11,96.11,0,0,1,224,128Zm-16,0a80,80,0,1,0-80,80A80.09,80.09,0,0,0,208,128Z"></path></svg>
              <p className="text-[10px] mt-1 font-bold">Add</p>
            </button>
          </div>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleImageChange}
            accept="image/*"
            multiple
            className="hidden"
          />
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-brand-muted uppercase tracking-wider ml-1">Item Title</label>
            <input
              placeholder="e.g. MacBook Air M1, Bio 101 Book"
              className="w-full h-14 rounded-xl bg-brand-input border-none text-white placeholder:text-brand-muted p-4 focus:ring-2 focus:ring-primary transition-all"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          <div className="flex gap-4">
            <div className="flex-1 flex flex-col gap-1.5">
              <label className="text-xs font-bold text-brand-muted uppercase tracking-wider ml-1">Price</label>
              <input
                placeholder="$ 0.00"
                className="w-full h-14 rounded-xl bg-brand-input border-none text-white placeholder:text-brand-muted p-4 focus:ring-2 focus:ring-primary transition-all"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
              />
            </div>
            <div className="flex-1 flex flex-col gap-1.5">
              <label className="text-xs font-bold text-brand-muted uppercase tracking-wider ml-1">Condition</label>
              <select
                className="w-full h-14 rounded-xl bg-brand-input border-none text-white p-4 focus:ring-2 focus:ring-primary transition-all"
                value={formData.condition}
                onChange={(e) => setFormData({ ...formData, condition: e.target.value })}
              >
                <option value="New">New</option>
                <option value="Used - Like New">Like New</option>
                <option value="Used - Good">Used - Good</option>
                <option value="Used - Acceptable">Acceptable</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-brand-muted uppercase tracking-wider ml-1">Category</label>
            <select
              className="w-full h-14 rounded-xl bg-brand-input border-none text-white p-4 focus:ring-2 focus:ring-primary transition-all"
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            >
              <option value="">Select Category</option>
              <option value="Books">Books</option>
              <option value="Electronics">Electronics</option>
              <option value="Furniture">Furniture</option>
              <option value="Clothing">Clothing</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="flex flex-col gap-1.5 relative">
            <label className="text-xs font-bold text-brand-muted uppercase tracking-wider ml-1">Description</label>
            <div className="relative">
              <textarea
                placeholder="Tell buyers about your item..."
                className="w-full min-h-[160px] rounded-xl bg-brand-input border-none text-white placeholder:text-brand-muted p-4 focus:ring-2 focus:ring-primary transition-all resize-none"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              />
              <button
                type="button"
                onClick={enhanceDescription}
                disabled={loading || !formData.name}
                className="absolute bottom-3 right-3 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary/10 border border-primary text-primary text-xs font-bold hover:bg-primary/20 transition-all disabled:opacity-50"
              >
                {loading ? (
                  <div className="animate-spin size-3 border-2 border-primary border-t-transparent rounded-full" />
                ) : '✨ Enhance'}
              </button>
            </div>
          </div>
        </div>

        <button
          onClick={handleSubmit}
          disabled={!formData.name || !formData.price || !formData.category}
          className="mt-4 flex h-14 w-full items-center justify-center rounded-xl bg-primary text-white font-extrabold text-lg shadow-xl shadow-primary/25 disabled:opacity-50 disabled:shadow-none transition-all active:scale-[0.98] mb-12"
        >
          {isEditing ? 'Save Changes' : 'Publish Listing'}
        </button>
      </div>
    </div>
  );
};

export default CreateListingScreen;
