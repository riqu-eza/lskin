interface ValueCardProps {
  icon: string;
  title: string;
  description: string;
  color?: 'primary' | 'secondary';
}

const ValueCard = ({ icon, title, description, color = 'primary' }: ValueCardProps) => {
  const bgColor = color === 'primary' ? 'bg-lskin-primary' : 'bg-lskin-secondary';
  const textColor = color === 'primary' ? 'text-lskin-primary' : 'text-lskin-secondary';
  
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg card-hover">
      <div className={`${bgColor} w-14 h-14 rounded-full flex items-center justify-center mb-4`}>
        <i className={`fas fa-${icon} text-white text-2xl`}></i>
      </div>
      <h3 className={`font-playfair text-xl font-semibold mb-2 ${textColor}`}>{title}</h3>
      <p className="text-lskin-text/80">{description}</p>
    </div>
  );
};

export default ValueCard;