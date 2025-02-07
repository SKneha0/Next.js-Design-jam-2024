interface Image {
    _type: string;    // Type of the image (e.g., "image")
    asset: {
      _ref: string;   // Reference string for the image
      _type: string;  // Type of the asset (e.g., "reference")
    };
  }
  


  export interface shopproduct {

    _id: string;
  
    name: string;
  
    image: Image; 

    price: number;
  
    slug: {
  
      current: string;
  
    };
  
    title: string;
  
    description: string;
  
    discountPrice: number;
  
  }