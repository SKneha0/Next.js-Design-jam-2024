// Interface for the asset property inside the image object
interface Asset {
    _ref: string;    // Reference string for the image
    _type: string;   // Type of the asset (e.g., "reference")
  }
  
  // Interface for the image property
  interface Image {
    _type: string;   // Type of the image (e.g., "image")
    asset: Asset;    // Nested object of type Asset
  }
  
  // Main interface for the product
  export interface Product {
    description: string;         // Description of the product
    price: number;               // Current price of the product
    category: string;            // Category (e.g., "Drink")
    _updatedAt: string;          // Last updated timestamp (ISO format)
    originalPrice: number;       // Original price before discount
    _rev: string;                // Revision ID (string identifier)
    _type: string;               // Type of the item (e.g., "food")
    available: boolean;          // Availability of the product
    tags: string[];              // Array of tags (e.g., ["Healthy", "Popular"])
    _createdAt: string;          // Creation timestamp (ISO format)
    name: string;                // Name of the product (e.g., "Fresh Lime")
    _id: string;                 // Unique ID for the product
    image: Image;                // Image object
    slug: {

      current: string;
  
    };
  }