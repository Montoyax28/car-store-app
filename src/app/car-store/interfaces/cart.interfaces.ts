export interface CartItem {
  id: number;
  name: string;
  image: string;
  price: number;
  description?: string;
  quantity: number;
  type: 'Part' | 'bodyKit';
}
