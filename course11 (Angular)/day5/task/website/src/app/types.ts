export interface Product {
  name: string;
  description: string;
  imageUrl: string;
  rate: string | number;
  category?: string;
  isEditing?: boolean;
}
export interface User {
  name : string ;
  email : string;
  password : string;
}
