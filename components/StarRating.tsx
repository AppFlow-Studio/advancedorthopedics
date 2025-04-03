import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const StarRating = ({ rating, size, totalStars = 5 }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5 ? 1 : 0;
  const emptyStars = totalStars - fullStars - halfStar;

  return (
    <div className="flex items-center ">
      {Array(fullStars)
        .fill(0)
        .map((_, index) => (
          <FaStar key={`full-${index}`} color="#4CC2FF" size={size} />
        ))}
      {halfStar === 1 && <FaStarHalfAlt key="half" color="#4CC2FF" size={size} />}
      {Array(emptyStars)
        .fill(0)
        .map((_, index) => (
          <FaRegStar key={`empty-${index}`} color="#4CC2FF"  size={size} />
        ))}
    </div>
  );
};

export default StarRating;