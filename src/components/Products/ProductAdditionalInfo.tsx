interface ProductAdditionalInfoProps {
  warrantyInformation: string;
  shippingInformation: string;
  returnPolicy: string;
}

export const ProductAdditionalInfo = ({
  warrantyInformation,
  shippingInformation,
  returnPolicy,
}: ProductAdditionalInfoProps) => {
  return (
    <div className="space-y-2">
      <h3 className="text-lg font-semibold">Additional information</h3>
      <div className="grid grid-cols-1 gap-4">
        <div>
          <h4 className="text-sm font-medium text-gray-500">Warranty</h4>
          <p className="text-gray-900">{warrantyInformation}</p>
        </div>
        <div>
          <h4 className="text-sm font-medium text-gray-500">Delivery</h4>
          <p className="text-gray-900">{shippingInformation}</p>
        </div>
        <div>
          <h4 className="text-sm font-medium text-gray-500">Return</h4>
          <p className="text-gray-900">{returnPolicy}</p>
        </div>
      </div>
    </div>
  );
};
