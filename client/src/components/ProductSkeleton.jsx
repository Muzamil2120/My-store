// Skeleton loader for product cards
import "./ProductSkeleton.css";

export default function ProductSkeleton() {
  return (
    <div className="product-skeleton">
      <div className="skeleton-img" />
      <div className="skeleton-line skeleton-title" />
      <div className="skeleton-line skeleton-price" />
      <div className="skeleton-btn" />
    </div>
  );
}
