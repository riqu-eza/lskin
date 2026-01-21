interface ProductCardProps {
  name: string;
  category: string;
  price: number;
  imageUrl: string;
  isEco: boolean;
}

const ProductCard = ({ name, category, price, imageUrl, isEco }: ProductCardProps) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg card-hover">
      {/* Product Image */}
      <div className="h-64 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-lskin-primary/20 to-lskin-secondary/20"></div>
        <div className="absolute top-4 right-4">
          {isEco && (
            <span className="bg-lskin-primary text-white text-xs font-medium px-3 py-1 rounded-full">
              <i className="fas fa-leaf mr-1"></i> Eco-Friendly
            </span>
          )}
        </div>
      </div>
      
      {/* Product Info */}
      <div className="p-6">
        <span className="text-lskin-secondary text-sm font-medium">{category}</span>
        <h3 className="font-playfair text-xl font-semibold mt-1">{name}</h3>
        <div className="flex justify-between items-center mt-4">
          <span className="text-lskin-primary font-bold text-xl">${price.toFixed(2)}</span>
          <button className="btn-secondary">
            <i className="fas fa-shopping-cart mr-2"></i> Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;