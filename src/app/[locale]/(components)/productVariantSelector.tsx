"use client";

import { useProductSelection } from "@/core/client/useProductSelection";
import {
  IProductDetailsFragment,
  IProductVariantFragment,
  Maybe,
} from "@/gql/sdk";
import { useCallback, useState } from "react";

// This is a React component that renders a single option for a product variant attribute.
const ProductVariantAttributeSelectorOption = ({
  variant,
  attributeId,
  onSelected,
}: {
  variant: IProductVariantFragment;
  attributeId: string;
  onSelected?: (values: string[]) => void;
}) => {
  const selectedVariantID = useProductSelection().selectedVariantID;
  // Find the attribute based on its id
  const { attribute, values } =
    variant.attributes.find(({ attribute }) => attribute.id === attributeId) ??
    {};

  // If the attribute does not exist, don't render anything
  if (!attribute) {
    return null;
  }

  const isSelected = selectedVariantID === variant.id;

  // Concatenate the values of the attribute into a string
  const text = values?.map((v) => v.translation?.name ?? v.name).join(", ");
  // Return a button that calls the onSelected callback with the text when clicked
  return (
    <button
      onClick={() => onSelected?.(values?.map((v) => v.id) ?? [])}
      className={isSelected ? "btn btn-active" : "btn btn-outline"}
    >
      {text}
    </button>
  );
};

// This is a React component that renders a list of options for a product variant attribute.
const ProductVariantAttributeSelector = ({
  attributeId,
  variants,
  onSelected,
}: {
  attributeId: string;
  variants: IProductVariantFragment[];
  onSelected?: (attributeId: string, valueIds: string[]) => void;
}) => {
  // Find the attribute in the first variant of the list
  const { attribute } =
    variants[0].attributes.find(
      ({ attribute }) => attribute.id === attributeId
    ) ?? {};

  // If the attribute does not exist, don't render anything
  if (!attribute) {
    return null;
  }

  // Render a list of options for the attribute
  return (
    <div>
      <h4>{attribute.translation?.name ?? attribute.name}</h4>
      <ul>
        {variants.map((variant) => (
          <li key={variant.id}>
            <ProductVariantAttributeSelectorOption
              variant={variant}
              attributeId={attributeId}
              onSelected={(value) => onSelected?.(attributeId, value)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

// This is the main React component that renders a list of product variant attribute selectors.
export const ProductVariantSelector = ({
  product,
}: {
  product: Maybe<IProductDetailsFragment>;
}) => {
  const { selectedVariantID, updateSelectedVariant } = useProductSelection();

  // Find the selected variant based on its id
  const selectedVariant = product?.variants?.find(
    (v) => v.id === selectedVariantID
  );

  // Create a state for the selected attributes and initialize it with the attributes of the selected variant
  const [selectedAttributes, setSelectedAttributes] = useState<
    Record<string, string[]>
  >(
    selectedVariant?.attributes.reduce(
      (acc, { attribute, values }) => ({
        ...acc,
        [attribute.id]: values.join(", "),
      }),
      {}
    ) ?? {}
  );

  // This callback is called when an attribute is selected.
  const onAttributeSelected = useCallback(
    (attributeId: string, valueIds: string[]) => {
      // Update the state with the new attribute selection
      const newValue = {
        ...selectedAttributes,
        [attributeId]: valueIds,
      };

      setSelectedAttributes(newValue);
      // Find a variant that matches the new attribute selection
      const match = product?.variants?.find((variant) =>
        variant.attributes.every(
          (attr) =>
            attr.attribute.id in newValue &&
            attr.values.every((value) =>
              newValue[attr.attribute.id].includes(value.id)
            )
        )
      );

      // If a matching variant is found, call the onVariantSelected callback with its id
      if (match) {
        updateSelectedVariant(match.id);
      }
    },
    [product?.variants, selectedAttributes, updateSelectedVariant]
  );

  // Render a list of attribute selectors for the product.
  return (
    <div>
      {product?.defaultVariant?.attributes.map(({ attribute }) => (
        <ProductVariantAttributeSelector
          key={attribute.id}
          attributeId={attribute.id}
          variants={product.variants ?? []}
          onSelected={onAttributeSelected}
        />
      ))}
    </div>
  );
};
