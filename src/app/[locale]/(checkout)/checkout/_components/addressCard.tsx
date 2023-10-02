import { FC } from "react";

export interface AddressCardAddress {
  firstName: string;
  lastName?: string;
  streetAddress1: string;
  streetAddress2?: string | null;
  city: string;
  cityArea?: string | null;
  countryArea?: string | null;
  country: string;
  postalCode: string;
}

interface AddressCardProps {
  address: AddressCardAddress;
}

const AddressCard: FC<AddressCardProps> = ({ address }) => {
  return (
    <div className="py-6 max-w-sm text-neutral-content">
      <p className="mb-2">
        {address.firstName} {address.lastName}
      </p>
      <p className="mb-2">
        {address.streetAddress1}
        {address.streetAddress2 && (
          <>
            <br />
            {address.streetAddress2}
          </>
        )}
      </p>
      <p className="mb-2">
        {address.city} {address.countryArea} {address.postalCode}
      </p>
    </div>
  );
};

export default AddressCard;
