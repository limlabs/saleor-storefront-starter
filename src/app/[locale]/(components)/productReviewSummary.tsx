import { productDetailsTranslationKeys } from "@/app/translations/productDetails";
import { useTranslationValues } from "@/core/server/useTranslationValues";

export const ProductReviewSummary = ({ rating }: { rating: number }) => {
  const t = useTranslationValues(productDetailsTranslationKeys, "component");
  return (
    <div className="pb-1 text-sm">
      <span className={"font-bold"}>{t["rating"]}</span> {rating}
      /5
    </div>
  );
};
