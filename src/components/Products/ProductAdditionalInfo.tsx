import type { ProductAdditionalInfoProps } from "./types";

const ProductAdditionalInfoItem = ({
  title,
  value,
}: {
  title: string;
  value: string;
}) => {
  return (
    <div>
      <h4 className="text-sm font-medium text-gray-500">{title}</h4>
      <p className="text-gray-900">{value}</p>
    </div>
  );
};

export const ProductAdditionalInfo = ({
  warrantyInformation,
  shippingInformation,
  returnPolicy,
}: ProductAdditionalInfoProps) => {
  const items = [
    { title: "Delivery", value: shippingInformation },
    { title: "Return", value: returnPolicy },
    { title: "Warranty", value: warrantyInformation },
  ];
  return (
    <div className="space-y-2">
      <h3 className="text-lg font-semibold">Additional information</h3>
      <div className="grid grid-cols-1 gap-4">
        {items.map((item) => (
          <ProductAdditionalInfoItem key={item.title} {...item} />
        ))}
      </div>
    </div>
  );
};
