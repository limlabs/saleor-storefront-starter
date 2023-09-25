// @ts-nocheck
import { GraphQLClient } from "graphql-request";
import * as Dom from "graphql-request/dist/types.dom";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  DateTime: string;
  Day: any;
  Decimal: any;
  GenericScalar: any;
  JSON: Record<string, any>;
  JSONString: JSONString;
  Metadata: Record<string, string>;
  Minute: any;
  PositiveDecimal: any;
  UUID: string;
  Upload: any;
  WeightScalar: any;
  _Any: any;
};

/**
 * Create a new address for the customer.
 *
 * Requires one of the following permissions: AUTHENTICATED_USER.
 *
 * Triggers the following webhook events:
 * - CUSTOMER_UPDATED (async): A customer account was updated.
 * - ADDRESS_CREATED (async): An address was created.
 */
export type IAccountAddressCreate = {
  __typename?: "AccountAddressCreate";
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<IAccountError>;
  address?: Maybe<IAddress>;
  errors: Array<IAccountError>;
  /** A user instance for which the address was created. */
  user?: Maybe<IUser>;
};

/**
 * Delete an address of the logged-in user. Requires one of the following permissions: MANAGE_USERS, IS_OWNER.
 *
 * Triggers the following webhook events:
 * - ADDRESS_DELETED (async): An address was deleted.
 */
export type IAccountAddressDelete = {
  __typename?: "AccountAddressDelete";
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<IAccountError>;
  address?: Maybe<IAddress>;
  errors: Array<IAccountError>;
  /** A user instance for which the address was deleted. */
  user?: Maybe<IUser>;
};

/**
 * Updates an address of the logged-in user. Requires one of the following permissions: MANAGE_USERS, IS_OWNER.
 *
 * Triggers the following webhook events:
 * - ADDRESS_UPDATED (async): An address was updated.
 */
export type IAccountAddressUpdate = {
  __typename?: "AccountAddressUpdate";
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<IAccountError>;
  address?: Maybe<IAddress>;
  errors: Array<IAccountError>;
  /** A user object for which the address was edited. */
  user?: Maybe<IUser>;
};

/**
 * Event sent when account change email is requested.
 *
 * Added in Saleor 3.15.
 */
export type IAccountChangeEmailRequested = IEvent & {
  __typename?: "AccountChangeEmailRequested";
  /** The channel data. */
  channel?: Maybe<IChannel>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars["DateTime"]>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IIssuingPrincipal>;
  /** The new email address the user wants to change to. */
  newEmail?: Maybe<Scalars["String"]>;
  /** The application receiving the webhook. */
  recipient?: Maybe<IApp>;
  /** The URL to redirect the user after he accepts the request. */
  redirectUrl?: Maybe<Scalars["String"]>;
  /** Shop data. */
  shop?: Maybe<IShop>;
  /** The token required to confirm request. */
  token?: Maybe<Scalars["String"]>;
  /** The user the event relates to. */
  user?: Maybe<IUser>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars["String"]>;
};

/**
 * Event sent when account confirmation requested. This event is always sent. enableAccountConfirmationByEmail flag set to True is not required.
 *
 * Added in Saleor 3.15.
 */
export type IAccountConfirmationRequested = IEvent & {
  __typename?: "AccountConfirmationRequested";
  /** The channel data. */
  channel?: Maybe<IChannel>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars["DateTime"]>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IIssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<IApp>;
  /** The URL to redirect the user after he accepts the request. */
  redirectUrl?: Maybe<Scalars["String"]>;
  /** Shop data. */
  shop?: Maybe<IShop>;
  /** The token required to confirm request. */
  token?: Maybe<Scalars["String"]>;
  /** The user the event relates to. */
  user?: Maybe<IUser>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars["String"]>;
};

/**
 * Event sent when account is confirmed.
 *
 * Added in Saleor 3.15.
 */
export type IAccountConfirmed = IEvent & {
  __typename?: "AccountConfirmed";
  /** The channel data. */
  channel?: Maybe<IChannel>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars["DateTime"]>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IIssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<IApp>;
  /** The URL to redirect the user after he accepts the request. */
  redirectUrl?: Maybe<Scalars["String"]>;
  /** Shop data. */
  shop?: Maybe<IShop>;
  /** The token required to confirm request. */
  token?: Maybe<Scalars["String"]>;
  /** The user the event relates to. */
  user?: Maybe<IUser>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars["String"]>;
};

/**
 * Remove user account.
 *
 * Requires one of the following permissions: AUTHENTICATED_USER.
 *
 * Triggers the following webhook events:
 * - ACCOUNT_DELETED (async): Account was deleted.
 */
export type IAccountDelete = {
  __typename?: "AccountDelete";
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<IAccountError>;
  errors: Array<IAccountError>;
  user?: Maybe<IUser>;
};

/**
 * Event sent when account delete is requested.
 *
 * Added in Saleor 3.15.
 */
export type IAccountDeleteRequested = IEvent & {
  __typename?: "AccountDeleteRequested";
  /** The channel data. */
  channel?: Maybe<IChannel>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars["DateTime"]>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IIssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<IApp>;
  /** The URL to redirect the user after he accepts the request. */
  redirectUrl?: Maybe<Scalars["String"]>;
  /** Shop data. */
  shop?: Maybe<IShop>;
  /** The token required to confirm request. */
  token?: Maybe<Scalars["String"]>;
  /** The user the event relates to. */
  user?: Maybe<IUser>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars["String"]>;
};

/**
 * Event sent when account is deleted.
 *
 * Added in Saleor 3.15.
 */
export type IAccountDeleted = IEvent & {
  __typename?: "AccountDeleted";
  /** The channel data. */
  channel?: Maybe<IChannel>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars["DateTime"]>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IIssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<IApp>;
  /** The URL to redirect the user after he accepts the request. */
  redirectUrl?: Maybe<Scalars["String"]>;
  /** Shop data. */
  shop?: Maybe<IShop>;
  /** The token required to confirm request. */
  token?: Maybe<Scalars["String"]>;
  /** The user the event relates to. */
  user?: Maybe<IUser>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars["String"]>;
};

/**
 * Event sent when account email is changed.
 *
 * Added in Saleor 3.15.
 */
export type IAccountEmailChanged = IEvent & {
  __typename?: "AccountEmailChanged";
  /** The channel data. */
  channel?: Maybe<IChannel>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars["DateTime"]>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IIssuingPrincipal>;
  /** The new email address. */
  newEmail?: Maybe<Scalars["String"]>;
  /** The application receiving the webhook. */
  recipient?: Maybe<IApp>;
  /** The URL to redirect the user after he accepts the request. */
  redirectUrl?: Maybe<Scalars["String"]>;
  /** Shop data. */
  shop?: Maybe<IShop>;
  /** The token required to confirm request. */
  token?: Maybe<Scalars["String"]>;
  /** The user the event relates to. */
  user?: Maybe<IUser>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars["String"]>;
};

/** Represents errors in account mutations. */
export type IAccountError = {
  __typename?: "AccountError";
  /** A type of address that causes the error. */
  addressType?: Maybe<IAddressTypeEnum>;
  /** The error code. */
  code: IAccountErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars["String"]>;
  /** The error message. */
  message?: Maybe<Scalars["String"]>;
};

/** An enumeration. */
export type IAccountErrorCode =
  | "ACCOUNT_NOT_CONFIRMED"
  | "ACTIVATE_OWN_ACCOUNT"
  | "ACTIVATE_SUPERUSER_ACCOUNT"
  | "CHANNEL_INACTIVE"
  | "DEACTIVATE_OWN_ACCOUNT"
  | "DEACTIVATE_SUPERUSER_ACCOUNT"
  | "DELETE_NON_STAFF_USER"
  | "DELETE_OWN_ACCOUNT"
  | "DELETE_STAFF_ACCOUNT"
  | "DELETE_SUPERUSER_ACCOUNT"
  | "DUPLICATED_INPUT_ITEM"
  | "GRAPHQL_ERROR"
  | "INACTIVE"
  | "INVALID"
  | "INVALID_CREDENTIALS"
  | "INVALID_PASSWORD"
  | "JWT_DECODE_ERROR"
  | "JWT_INVALID_CSRF_TOKEN"
  | "JWT_INVALID_TOKEN"
  | "JWT_MISSING_TOKEN"
  | "JWT_SIGNATURE_EXPIRED"
  | "LEFT_NOT_MANAGEABLE_PERMISSION"
  | "MISSING_CHANNEL_SLUG"
  | "NOT_FOUND"
  | "OUT_OF_SCOPE_GROUP"
  | "OUT_OF_SCOPE_PERMISSION"
  | "OUT_OF_SCOPE_USER"
  | "PASSWORD_ENTIRELY_NUMERIC"
  | "PASSWORD_RESET_ALREADY_REQUESTED"
  | "PASSWORD_TOO_COMMON"
  | "PASSWORD_TOO_SHORT"
  | "PASSWORD_TOO_SIMILAR"
  | "REQUIRED"
  | "UNIQUE";

/** Fields required to update the user. */
export type IAccountInput = {
  /** Billing address of the customer. */
  defaultBillingAddress?: InputMaybe<IAddressInput>;
  /** Shipping address of the customer. */
  defaultShippingAddress?: InputMaybe<IAddressInput>;
  /** Given name. */
  firstName?: InputMaybe<Scalars["String"]>;
  /** User language code. */
  languageCode?: InputMaybe<ILanguageCodeEnum>;
  /** Family name. */
  lastName?: InputMaybe<Scalars["String"]>;
  /**
   * Fields required to update the user metadata.
   *
   * Added in Saleor 3.14.
   */
  metadata?: InputMaybe<Array<IMetadataInput>>;
};

/**
 * Register a new user.
 *
 * Triggers the following webhook events:
 * - CUSTOMER_CREATED (async): A new customer account was created.
 * - NOTIFY_USER (async): A notification for account confirmation.
 * - ACCOUNT_CONFIRMATION_REQUESTED (async): An user confirmation was requested. This event is always sent regardless of settings.
 */
export type IAccountRegister = {
  __typename?: "AccountRegister";
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<IAccountError>;
  errors: Array<IAccountError>;
  /** Informs whether users need to confirm their email address. */
  requiresConfirmation?: Maybe<Scalars["Boolean"]>;
  user?: Maybe<IUser>;
};

/** Fields required to create a user. */
export type IAccountRegisterInput = {
  /** Slug of a channel which will be used to notify users. Optional when only one channel exists. */
  channel?: InputMaybe<Scalars["String"]>;
  /** The email address of the user. */
  email: Scalars["String"];
  /** Given name. */
  firstName?: InputMaybe<Scalars["String"]>;
  /** User language code. */
  languageCode?: InputMaybe<ILanguageCodeEnum>;
  /** Family name. */
  lastName?: InputMaybe<Scalars["String"]>;
  /** User public metadata. */
  metadata?: InputMaybe<Array<IMetadataInput>>;
  /** Password. */
  password: Scalars["String"];
  /** Base of frontend URL that will be needed to create confirmation URL. */
  redirectUrl?: InputMaybe<Scalars["String"]>;
};

/**
 * Sends an email with the account removal link for the logged-in user.
 *
 * Requires one of the following permissions: AUTHENTICATED_USER.
 *
 * Triggers the following webhook events:
 * - NOTIFY_USER (async): A notification for account delete request.
 * - ACCOUNT_DELETE_REQUESTED (async): An account delete requested.
 */
export type IAccountRequestDeletion = {
  __typename?: "AccountRequestDeletion";
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<IAccountError>;
  errors: Array<IAccountError>;
};

/**
 * Sets a default address for the authenticated user.
 *
 * Requires one of the following permissions: AUTHENTICATED_USER.
 *
 * Triggers the following webhook events:
 * - CUSTOMER_UPDATED (async): A customer's address was updated.
 */
export type IAccountSetDefaultAddress = {
  __typename?: "AccountSetDefaultAddress";
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<IAccountError>;
  errors: Array<IAccountError>;
  /** An updated user instance. */
  user?: Maybe<IUser>;
};

/**
 * Event sent when setting a new password is requested.
 *
 * Added in Saleor 3.15.
 */
export type IAccountSetPasswordRequested = IEvent & {
  __typename?: "AccountSetPasswordRequested";
  /** The channel data. */
  channel?: Maybe<IChannel>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars["DateTime"]>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IIssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<IApp>;
  /** The URL to redirect the user after he accepts the request. */
  redirectUrl?: Maybe<Scalars["String"]>;
  /** Shop data. */
  shop?: Maybe<IShop>;
  /** The token required to confirm request. */
  token?: Maybe<Scalars["String"]>;
  /** The user the event relates to. */
  user?: Maybe<IUser>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars["String"]>;
};

/**
 * Updates the account of the logged-in user.
 *
 * Requires one of the following permissions: AUTHENTICATED_USER.
 *
 * Triggers the following webhook events:
 * - CUSTOMER_UPDATED (async): A customer account was updated.
 * - CUSTOMER_METADATA_UPDATED (async): Optionally called when customer's metadata was updated.
 */
export type IAccountUpdate = {
  __typename?: "AccountUpdate";
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<IAccountError>;
  errors: Array<IAccountError>;
  user?: Maybe<IUser>;
};

/** Represents user address data. */
export type IAddress = INode &
  IObjectWithMetadata & {
    __typename?: "Address";
    /** The city of the address. */
    city: Scalars["String"];
    /** The district of the address. */
    cityArea: Scalars["String"];
    /** Company or organization name. */
    companyName: Scalars["String"];
    /** The country of the address. */
    country: ICountryDisplay;
    /** The country area of the address. */
    countryArea: Scalars["String"];
    /** The given name of the address. */
    firstName: Scalars["String"];
    /** The ID of the address. */
    id: Scalars["ID"];
    /** Address is user's default billing address. */
    isDefaultBillingAddress?: Maybe<Scalars["Boolean"]>;
    /** Address is user's default shipping address. */
    isDefaultShippingAddress?: Maybe<Scalars["Boolean"]>;
    /** The family name of the address. */
    lastName: Scalars["String"];
    /**
     * List of public metadata items. Can be accessed without permissions.
     *
     * Added in Saleor 3.10.
     */
    metadata: Array<IMetadataItem>;
    /**
     * A single key from public metadata.
     *
     * Tip: Use GraphQL aliases to fetch multiple keys.
     *
     * Added in Saleor 3.10.
     */
    metafield?: Maybe<Scalars["String"]>;
    /**
     * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
     *
     * Added in Saleor 3.10.
     */
    metafields?: Maybe<Scalars["Metadata"]>;
    /** The phone number assigned the address. */
    phone?: Maybe<Scalars["String"]>;
    /** The postal code of the address. */
    postalCode: Scalars["String"];
    /**
     * List of private metadata items. Requires staff permissions to access.
     *
     * Added in Saleor 3.10.
     */
    privateMetadata: Array<IMetadataItem>;
    /**
     * A single key from private metadata. Requires staff permissions to access.
     *
     * Tip: Use GraphQL aliases to fetch multiple keys.
     *
     * Added in Saleor 3.10.
     */
    privateMetafield?: Maybe<Scalars["String"]>;
    /**
     * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
     *
     * Added in Saleor 3.10.
     */
    privateMetafields?: Maybe<Scalars["Metadata"]>;
    /** The first line of the address. */
    streetAddress1: Scalars["String"];
    /** The second line of the address. */
    streetAddress2: Scalars["String"];
  };

/** Represents user address data. */
export type IAddressMetafieldArgs = {
  key: Scalars["String"];
};

/** Represents user address data. */
export type IAddressMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars["String"]>>;
};

/** Represents user address data. */
export type IAddressPrivateMetafieldArgs = {
  key: Scalars["String"];
};

/** Represents user address data. */
export type IAddressPrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars["String"]>>;
};

/**
 * Creates user address.
 *
 * Requires one of the following permissions: MANAGE_USERS.
 *
 * Triggers the following webhook events:
 * - ADDRESS_CREATED (async): A new address was created.
 */
export type IAddressCreate = {
  __typename?: "AddressCreate";
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<IAccountError>;
  address?: Maybe<IAddress>;
  errors: Array<IAccountError>;
  /** A user instance for which the address was created. */
  user?: Maybe<IUser>;
};

/**
 * Event sent when new address is created.
 *
 * Added in Saleor 3.5.
 */
export type IAddressCreated = IEvent & {
  __typename?: "AddressCreated";
  /** The address the event relates to. */
  address?: Maybe<IAddress>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars["DateTime"]>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IIssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<IApp>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars["String"]>;
};

/**
 * Deletes an address.
 *
 * Requires one of the following permissions: MANAGE_USERS.
 *
 * Triggers the following webhook events:
 * - ADDRESS_DELETED (async): An address was deleted.
 */
export type IAddressDelete = {
  __typename?: "AddressDelete";
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<IAccountError>;
  address?: Maybe<IAddress>;
  errors: Array<IAccountError>;
  /** A user instance for which the address was deleted. */
  user?: Maybe<IUser>;
};

/**
 * Event sent when address is deleted.
 *
 * Added in Saleor 3.5.
 */
export type IAddressDeleted = IEvent & {
  __typename?: "AddressDeleted";
  /** The address the event relates to. */
  address?: Maybe<IAddress>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars["DateTime"]>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IIssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<IApp>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars["String"]>;
};

export type IAddressInput = {
  /** City. */
  city?: InputMaybe<Scalars["String"]>;
  /** District. */
  cityArea?: InputMaybe<Scalars["String"]>;
  /** Company or organization. */
  companyName?: InputMaybe<Scalars["String"]>;
  /** Country. */
  country?: InputMaybe<ICountryCode>;
  /** State or province. */
  countryArea?: InputMaybe<Scalars["String"]>;
  /** Given name. */
  firstName?: InputMaybe<Scalars["String"]>;
  /** Family name. */
  lastName?: InputMaybe<Scalars["String"]>;
  /**
   * Address public metadata.
   *
   * Added in Saleor 3.15.
   */
  metadata?: InputMaybe<Array<IMetadataInput>>;
  /**
   * Phone number.
   *
   * Phone numbers are validated with Google's [libphonenumber](https://github.com/google/libphonenumber) library.
   */
  phone?: InputMaybe<Scalars["String"]>;
  /** Postal code. */
  postalCode?: InputMaybe<Scalars["String"]>;
  /** Address. */
  streetAddress1?: InputMaybe<Scalars["String"]>;
  /** Address. */
  streetAddress2?: InputMaybe<Scalars["String"]>;
};

/**
 * Sets a default address for the given user.
 *
 * Requires one of the following permissions: MANAGE_USERS.
 *
 * Triggers the following webhook events:
 * - CUSTOMER_UPDATED (async): A customer was updated.
 */
export type IAddressSetDefault = {
  __typename?: "AddressSetDefault";
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<IAccountError>;
  errors: Array<IAccountError>;
  /** An updated user instance. */
  user?: Maybe<IUser>;
};

/** An enumeration. */
export type IAddressTypeEnum = "BILLING" | "SHIPPING";

/**
 * Updates an address.
 *
 * Requires one of the following permissions: MANAGE_USERS.
 *
 * Triggers the following webhook events:
 * - ADDRESS_UPDATED (async): An address was updated.
 */
export type IAddressUpdate = {
  __typename?: "AddressUpdate";
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<IAccountError>;
  address?: Maybe<IAddress>;
  errors: Array<IAccountError>;
  /** A user object for which the address was edited. */
  user?: Maybe<IUser>;
};

/**
 * Event sent when address is updated.
 *
 * Added in Saleor 3.5.
 */
export type IAddressUpdated = IEvent & {
  __typename?: "AddressUpdated";
  /** The address the event relates to. */
  address?: Maybe<IAddress>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars["DateTime"]>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IIssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<IApp>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars["String"]>;
};

/** Represents address validation rules for a country. */
export type IAddressValidationData = {
  __typename?: "AddressValidationData";
  /**
   * The address format of the address validation rule.
   *
   * Many fields in the JSON refer to address fields by one-letter abbreviations. These are defined as follows:
   *
   * - `N`: Name
   * - `O`: Organisation
   * - `A`: Street Address Line(s)
   * - `D`: Dependent locality (may be an inner-city district or a suburb)
   * - `C`: City or Locality
   * - `S`: Administrative area such as a state, province, island etc
   * - `Z`: Zip or postal code
   * - `X`: Sorting code
   *
   * [Click here for more information.](https://github.com/google/libaddressinput/wiki/AddressValidationMetadata)
   */
  addressFormat: Scalars["String"];
  /**
   * The latin address format of the address validation rule.
   *
   * Many fields in the JSON refer to address fields by one-letter abbreviations. These are defined as follows:
   *
   * - `N`: Name
   * - `O`: Organisation
   * - `A`: Street Address Line(s)
   * - `D`: Dependent locality (may be an inner-city district or a suburb)
   * - `C`: City or Locality
   * - `S`: Administrative area such as a state, province, island etc
   * - `Z`: Zip or postal code
   * - `X`: Sorting code
   *
   * [Click here for more information.](https://github.com/google/libaddressinput/wiki/AddressValidationMetadata)
   */
  addressLatinFormat: Scalars["String"];
  /** The allowed fields to use in address. */
  allowedFields: Array<Scalars["String"]>;
  /** The available choices for the city area of the address validation rule. */
  cityAreaChoices: Array<IChoiceValue>;
  /** The formal name of the city area of the address validation rule. */
  cityAreaType: Scalars["String"];
  /** The available choices for the city of the address validation rule. */
  cityChoices: Array<IChoiceValue>;
  /** The formal name of the city of the address validation rule. */
  cityType: Scalars["String"];
  /** The available choices for the country area of the address validation rule. */
  countryAreaChoices: Array<IChoiceValue>;
  /** The formal name of the county area of the address validation rule. */
  countryAreaType: Scalars["String"];
  /** The country code of the address validation rule. */
  countryCode: Scalars["String"];
  /** The country name of the address validation rule. */
  countryName: Scalars["String"];
  /** The example postal code of the address validation rule. */
  postalCodeExamples: Array<Scalars["String"]>;
  /** The regular expression for postal code validation. */
  postalCodeMatchers: Array<Scalars["String"]>;
  /** The postal code prefix of the address validation rule. */
  postalCodePrefix: Scalars["String"];
  /** The formal name of the postal code of the address validation rule. */
  postalCodeType: Scalars["String"];
  /** The required fields to create a valid address. */
  requiredFields: Array<Scalars["String"]>;
  /** The list of fields that should be in upper case for address validation rule. */
  upperFields: Array<Scalars["String"]>;
};

/** Represents allocation. */
export type IAllocation = INode & {
  __typename?: "Allocation";
  /** The ID of allocation. */
  id: Scalars["ID"];
  /**
   * Quantity allocated for orders.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS, MANAGE_ORDERS.
   */
  quantity: Scalars["Int"];
  /**
   * The warehouse were items were allocated.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS, MANAGE_ORDERS.
   */
  warehouse: IWarehouse;
};

/**
 * Determine the allocation strategy for the channel.
 *
 *     PRIORITIZE_SORTING_ORDER - allocate stocks according to the warehouses' order
 *     within the channel
 *
 *     PRIORITIZE_HIGH_STOCK - allocate stock in a warehouse with the most stock
 *
 */
export type IAllocationStrategyEnum =
  | "PRIORITIZE_HIGH_STOCK"
  | "PRIORITIZE_SORTING_ORDER";

/** Represents app data. */
export type IApp = INode &
  IObjectWithMetadata & {
    __typename?: "App";
    /** Description of this app. */
    aboutApp?: Maybe<Scalars["String"]>;
    /** JWT token used to authenticate by thridparty app. */
    accessToken?: Maybe<Scalars["String"]>;
    /** URL to iframe with the app. */
    appUrl?: Maybe<Scalars["String"]>;
    /**
     * The App's author name.
     *
     * Added in Saleor 3.13.
     *
     * Note: this API is currently in Feature Preview and can be subject to changes at later point.
     */
    author?: Maybe<Scalars["String"]>;
    /**
     * App's brand data.
     *
     * Added in Saleor 3.14.
     *
     * Note: this API is currently in Feature Preview and can be subject to changes at later point.
     */
    brand?: Maybe<IAppBrand>;
    /**
     * URL to iframe with the configuration for the app.
     * @deprecated This field will be removed in Saleor 4.0. Use `appUrl` instead.
     */
    configurationUrl?: Maybe<Scalars["String"]>;
    /** The date and time when the app was created. */
    created?: Maybe<Scalars["DateTime"]>;
    /**
     * Description of the data privacy defined for this app.
     * @deprecated This field will be removed in Saleor 4.0. Use `dataPrivacyUrl` instead.
     */
    dataPrivacy?: Maybe<Scalars["String"]>;
    /** URL to details about the privacy policy on the app owner page. */
    dataPrivacyUrl?: Maybe<Scalars["String"]>;
    /**
     * App's dashboard extensions.
     *
     * Added in Saleor 3.1.
     */
    extensions: Array<IAppExtension>;
    /** Homepage of the app. */
    homepageUrl?: Maybe<Scalars["String"]>;
    /** The ID of the app. */
    id: Scalars["ID"];
    /** Determine if app will be set active or not. */
    isActive?: Maybe<Scalars["Boolean"]>;
    /**
     * URL to manifest used during app's installation.
     *
     * Added in Saleor 3.5.
     */
    manifestUrl?: Maybe<Scalars["String"]>;
    /** List of public metadata items. Can be accessed without permissions. */
    metadata: Array<IMetadataItem>;
    /**
     * A single key from public metadata.
     *
     * Tip: Use GraphQL aliases to fetch multiple keys.
     *
     * Added in Saleor 3.3.
     */
    metafield?: Maybe<Scalars["String"]>;
    /**
     * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
     *
     * Added in Saleor 3.3.
     */
    metafields?: Maybe<Scalars["Metadata"]>;
    /** Name of the app. */
    name?: Maybe<Scalars["String"]>;
    /** List of the app's permissions. */
    permissions?: Maybe<Array<IPermission>>;
    /** List of private metadata items. Requires staff permissions to access. */
    privateMetadata: Array<IMetadataItem>;
    /**
     * A single key from private metadata. Requires staff permissions to access.
     *
     * Tip: Use GraphQL aliases to fetch multiple keys.
     *
     * Added in Saleor 3.3.
     */
    privateMetafield?: Maybe<Scalars["String"]>;
    /**
     * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
     *
     * Added in Saleor 3.3.
     */
    privateMetafields?: Maybe<Scalars["Metadata"]>;
    /** Support page for the app. */
    supportUrl?: Maybe<Scalars["String"]>;
    /**
     * Last 4 characters of the tokens.
     *
     * Requires one of the following permissions: MANAGE_APPS, OWNER.
     */
    tokens?: Maybe<Array<IAppToken>>;
    /** Type of the app. */
    type?: Maybe<IAppTypeEnum>;
    /** Version number of the app. */
    version?: Maybe<Scalars["String"]>;
    /**
     * List of webhooks assigned to this app.
     *
     * Requires one of the following permissions: MANAGE_APPS, OWNER.
     */
    webhooks?: Maybe<Array<IWebhook>>;
  };

/** Represents app data. */
export type IAppMetafieldArgs = {
  key: Scalars["String"];
};

/** Represents app data. */
export type IAppMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars["String"]>>;
};

/** Represents app data. */
export type IAppPrivateMetafieldArgs = {
  key: Scalars["String"];
};

/** Represents app data. */
export type IAppPrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars["String"]>>;
};

/**
 * Activate the app.
 *
 * Requires one of the following permissions: MANAGE_APPS.
 *
 * Triggers the following webhook events:
 * - APP_STATUS_CHANGED (async): An app was activated.
 */
export type IAppActivate = {
  __typename?: "AppActivate";
  app?: Maybe<IApp>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  appErrors: Array<IAppError>;
  errors: Array<IAppError>;
};

/**
 * Represents the app's brand data.
 *
 * Added in Saleor 3.14.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type IAppBrand = {
  __typename?: "AppBrand";
  /**
   * App's logos details.
   *
   * Added in Saleor 3.14.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  logo: IAppBrandLogo;
};

/**
 * Represents the app's brand logo data.
 *
 * Added in Saleor 3.14.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type IAppBrandLogo = {
  __typename?: "AppBrandLogo";
  /**
   * URL to the default logo image.
   *
   * Added in Saleor 3.14.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  default: Scalars["String"];
};

/**
 * Represents the app's brand logo data.
 *
 * Added in Saleor 3.14.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type IAppBrandLogoDefaultArgs = {
  format?: InputMaybe<IIconThumbnailFormatEnum>;
  size?: InputMaybe<Scalars["Int"]>;
};

export type IAppCountableConnection = {
  __typename?: "AppCountableConnection";
  edges: Array<IAppCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: IPageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars["Int"]>;
};

export type IAppCountableEdge = {
  __typename?: "AppCountableEdge";
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node: IApp;
};

/**
 * Creates a new app. Requires the following permissions: AUTHENTICATED_STAFF_USER and MANAGE_APPS.
 *
 * Triggers the following webhook events:
 * - APP_INSTALLED (async): An app was installed.
 */
export type IAppCreate = {
  __typename?: "AppCreate";
  app?: Maybe<IApp>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  appErrors: Array<IAppError>;
  /** The newly created authentication token. */
  authToken?: Maybe<Scalars["String"]>;
  errors: Array<IAppError>;
};

/**
 * Deactivate the app.
 *
 * Requires one of the following permissions: MANAGE_APPS.
 *
 * Triggers the following webhook events:
 * - APP_STATUS_CHANGED (async): An app was deactivated.
 */
export type IAppDeactivate = {
  __typename?: "AppDeactivate";
  app?: Maybe<IApp>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  appErrors: Array<IAppError>;
  errors: Array<IAppError>;
};

/**
 * Deletes an app.
 *
 * Requires one of the following permissions: MANAGE_APPS.
 *
 * Triggers the following webhook events:
 * - APP_DELETED (async): An app was deleted.
 */
export type IAppDelete = {
  __typename?: "AppDelete";
  app?: Maybe<IApp>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  appErrors: Array<IAppError>;
  errors: Array<IAppError>;
};

/**
 * Delete failed installation.
 *
 * Requires one of the following permissions: MANAGE_APPS.
 */
export type IAppDeleteFailedInstallation = {
  __typename?: "AppDeleteFailedInstallation";
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  appErrors: Array<IAppError>;
  appInstallation?: Maybe<IAppInstallation>;
  errors: Array<IAppError>;
};

/**
 * Event sent when app is deleted.
 *
 * Added in Saleor 3.4.
 */
export type IAppDeleted = IEvent & {
  __typename?: "AppDeleted";
  /** The application the event relates to. */
  app?: Maybe<IApp>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars["DateTime"]>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IIssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<IApp>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars["String"]>;
};

export type IAppError = {
  __typename?: "AppError";
  /** The error code. */
  code: IAppErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars["String"]>;
  /** The error message. */
  message?: Maybe<Scalars["String"]>;
  /** List of permissions which causes the error. */
  permissions?: Maybe<Array<IPermissionEnum>>;
};

/** An enumeration. */
export type IAppErrorCode =
  | "FORBIDDEN"
  | "GRAPHQL_ERROR"
  | "INVALID"
  | "INVALID_CUSTOM_HEADERS"
  | "INVALID_MANIFEST_FORMAT"
  | "INVALID_PERMISSION"
  | "INVALID_STATUS"
  | "INVALID_URL_FORMAT"
  | "MANIFEST_URL_CANT_CONNECT"
  | "NOT_FOUND"
  | "OUT_OF_SCOPE_APP"
  | "OUT_OF_SCOPE_PERMISSION"
  | "REQUIRED"
  | "UNIQUE"
  | "UNSUPPORTED_SALEOR_VERSION";

/** Represents app data. */
export type IAppExtension = INode & {
  __typename?: "AppExtension";
  /** JWT token used to authenticate by third-party app extension. */
  accessToken?: Maybe<Scalars["String"]>;
  /** The app assigned to app extension. */
  app: IApp;
  /** The ID of the app extension. */
  id: Scalars["ID"];
  /** Label of the extension to show in the dashboard. */
  label: Scalars["String"];
  /** Place where given extension will be mounted. */
  mount: IAppExtensionMountEnum;
  /** List of the app extension's permissions. */
  permissions: Array<IPermission>;
  /** Type of way how app extension will be opened. */
  target: IAppExtensionTargetEnum;
  /** URL of a view where extension's iframe is placed. */
  url: Scalars["String"];
};

export type IAppExtensionCountableConnection = {
  __typename?: "AppExtensionCountableConnection";
  edges: Array<IAppExtensionCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: IPageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars["Int"]>;
};

export type IAppExtensionCountableEdge = {
  __typename?: "AppExtensionCountableEdge";
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node: IAppExtension;
};

export type IAppExtensionFilterInput = {
  mount?: InputMaybe<Array<IAppExtensionMountEnum>>;
  target?: InputMaybe<IAppExtensionTargetEnum>;
};

/** All places where app extension can be mounted. */
export type IAppExtensionMountEnum =
  | "CUSTOMER_DETAILS_MORE_ACTIONS"
  | "CUSTOMER_OVERVIEW_CREATE"
  | "CUSTOMER_OVERVIEW_MORE_ACTIONS"
  | "NAVIGATION_CATALOG"
  | "NAVIGATION_CUSTOMERS"
  | "NAVIGATION_DISCOUNTS"
  | "NAVIGATION_ORDERS"
  | "NAVIGATION_PAGES"
  | "NAVIGATION_TRANSLATIONS"
  | "ORDER_DETAILS_MORE_ACTIONS"
  | "ORDER_OVERVIEW_CREATE"
  | "ORDER_OVERVIEW_MORE_ACTIONS"
  | "PRODUCT_DETAILS_MORE_ACTIONS"
  | "PRODUCT_OVERVIEW_CREATE"
  | "PRODUCT_OVERVIEW_MORE_ACTIONS";

/**
 * All available ways of opening an app extension.
 *
 *     POPUP - app's extension will be mounted as a popup window
 *     APP_PAGE - redirect to app's page
 *
 */
export type IAppExtensionTargetEnum = "APP_PAGE" | "POPUP";

/**
 * Fetch and validate manifest.
 *
 * Requires one of the following permissions: MANAGE_APPS.
 */
export type IAppFetchManifest = {
  __typename?: "AppFetchManifest";
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  appErrors: Array<IAppError>;
  errors: Array<IAppError>;
  /** The validated manifest. */
  manifest?: Maybe<IManifest>;
};

export type IAppFilterInput = {
  isActive?: InputMaybe<Scalars["Boolean"]>;
  search?: InputMaybe<Scalars["String"]>;
  type?: InputMaybe<IAppTypeEnum>;
};

export type IAppInput = {
  /** Name of the app. */
  name?: InputMaybe<Scalars["String"]>;
  /** List of permission code names to assign to this app. */
  permissions?: InputMaybe<Array<IPermissionEnum>>;
};

/** Install new app by using app manifest. Requires the following permissions: AUTHENTICATED_STAFF_USER and MANAGE_APPS. */
export type IAppInstall = {
  __typename?: "AppInstall";
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  appErrors: Array<IAppError>;
  appInstallation?: Maybe<IAppInstallation>;
  errors: Array<IAppError>;
};

export type IAppInstallInput = {
  /** Determine if app will be set active or not. */
  activateAfterInstallation?: InputMaybe<Scalars["Boolean"]>;
  /** Name of the app to install. */
  appName?: InputMaybe<Scalars["String"]>;
  /** URL to app's manifest in JSON format. */
  manifestUrl?: InputMaybe<Scalars["String"]>;
  /** List of permission code names to assign to this app. */
  permissions?: InputMaybe<Array<IPermissionEnum>>;
};

/** Represents ongoing installation of app. */
export type IAppInstallation = IJob &
  INode & {
    __typename?: "AppInstallation";
    /** The name of the app installation. */
    appName: Scalars["String"];
    /**
     * App's brand data.
     *
     * Added in Saleor 3.14.
     *
     * Note: this API is currently in Feature Preview and can be subject to changes at later point.
     */
    brand?: Maybe<IAppBrand>;
    /** Created date time of job in ISO 8601 format. */
    createdAt: Scalars["DateTime"];
    /** The ID of the app installation. */
    id: Scalars["ID"];
    /** The URL address of manifest for the app installation. */
    manifestUrl: Scalars["String"];
    /** Job message. */
    message?: Maybe<Scalars["String"]>;
    /** Job status. */
    status: IJobStatusEnum;
    /** Date time of job last update in ISO 8601 format. */
    updatedAt: Scalars["DateTime"];
  };

/**
 * Event sent when new app is installed.
 *
 * Added in Saleor 3.4.
 */
export type IAppInstalled = IEvent & {
  __typename?: "AppInstalled";
  /** The application the event relates to. */
  app?: Maybe<IApp>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars["DateTime"]>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IIssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<IApp>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars["String"]>;
};

/**
 * Represents the app's manifest brand data.
 *
 * Added in Saleor 3.14.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type IAppManifestBrand = {
  __typename?: "AppManifestBrand";
  /**
   * App's logos details.
   *
   * Added in Saleor 3.14.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  logo: IAppManifestBrandLogo;
};

/**
 * Represents the app's manifest brand data.
 *
 * Added in Saleor 3.14.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type IAppManifestBrandLogo = {
  __typename?: "AppManifestBrandLogo";
  /**
   * Data URL with a base64 encoded logo image.
   *
   * Added in Saleor 3.14.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  default: Scalars["String"];
};

/**
 * Represents the app's manifest brand data.
 *
 * Added in Saleor 3.14.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type IAppManifestBrandLogoDefaultArgs = {
  format?: InputMaybe<IIconThumbnailFormatEnum>;
  size?: InputMaybe<Scalars["Int"]>;
};

export type IAppManifestExtension = {
  __typename?: "AppManifestExtension";
  /** Label of the extension to show in the dashboard. */
  label: Scalars["String"];
  /** Place where given extension will be mounted. */
  mount: IAppExtensionMountEnum;
  /** List of the app extension's permissions. */
  permissions: Array<IPermission>;
  /** Type of way how app extension will be opened. */
  target: IAppExtensionTargetEnum;
  /** URL of a view where extension's iframe is placed. */
  url: Scalars["String"];
};

export type IAppManifestRequiredSaleorVersion = {
  __typename?: "AppManifestRequiredSaleorVersion";
  /**
   * Required Saleor version as semver range.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  constraint: Scalars["String"];
  /**
   * Informs if the Saleor version matches the required one.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  satisfied: Scalars["Boolean"];
};

export type IAppManifestWebhook = {
  __typename?: "AppManifestWebhook";
  /** The asynchronous events that webhook wants to subscribe. */
  asyncEvents?: Maybe<Array<IWebhookEventTypeAsyncEnum>>;
  /** The name of the webhook. */
  name: Scalars["String"];
  /** Subscription query of a webhook */
  query: Scalars["String"];
  /** The synchronous events that webhook wants to subscribe. */
  syncEvents?: Maybe<Array<IWebhookEventTypeSyncEnum>>;
  /** The url to receive the payload. */
  targetUrl: Scalars["String"];
};

/**
 * Retry failed installation of new app.
 *
 * Requires one of the following permissions: MANAGE_APPS.
 *
 * Triggers the following webhook events:
 * - APP_INSTALLED (async): An app was installed.
 */
export type IAppRetryInstall = {
  __typename?: "AppRetryInstall";
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  appErrors: Array<IAppError>;
  appInstallation?: Maybe<IAppInstallation>;
  errors: Array<IAppError>;
};

export type IAppSortField =
  /** Sort apps by creation date. */
  | "CREATION_DATE"
  /** Sort apps by name. */
  | "NAME";

export type IAppSortingInput = {
  /** Specifies the direction in which to sort apps. */
  direction: IOrderDirection;
  /** Sort apps by the selected field. */
  field: IAppSortField;
};

/**
 * Event sent when app status has changed.
 *
 * Added in Saleor 3.4.
 */
export type IAppStatusChanged = IEvent & {
  __typename?: "AppStatusChanged";
  /** The application the event relates to. */
  app?: Maybe<IApp>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars["DateTime"]>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IIssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<IApp>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars["String"]>;
};

/** Represents token data. */
export type IAppToken = INode & {
  __typename?: "AppToken";
  /** Last 4 characters of the token. */
  authToken?: Maybe<Scalars["String"]>;
  /** The ID of the app token. */
  id: Scalars["ID"];
  /** Name of the authenticated token. */
  name?: Maybe<Scalars["String"]>;
};

/**
 * Creates a new token.
 *
 * Requires one of the following permissions: MANAGE_APPS.
 */
export type IAppTokenCreate = {
  __typename?: "AppTokenCreate";
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  appErrors: Array<IAppError>;
  appToken?: Maybe<IAppToken>;
  /** The newly created authentication token. */
  authToken?: Maybe<Scalars["String"]>;
  errors: Array<IAppError>;
};

/**
 * Deletes an authentication token assigned to app.
 *
 * Requires one of the following permissions: MANAGE_APPS.
 */
export type IAppTokenDelete = {
  __typename?: "AppTokenDelete";
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  appErrors: Array<IAppError>;
  appToken?: Maybe<IAppToken>;
  errors: Array<IAppError>;
};

export type IAppTokenInput = {
  /** ID of app. */
  app: Scalars["ID"];
  /** Name of the token. */
  name?: InputMaybe<Scalars["String"]>;
};

/** Verify provided app token. */
export type IAppTokenVerify = {
  __typename?: "AppTokenVerify";
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  appErrors: Array<IAppError>;
  errors: Array<IAppError>;
  /** Determine if token is valid or not. */
  valid: Scalars["Boolean"];
};

/** Enum determining type of your App. */
export type IAppTypeEnum =
  /** Local Saleor App. The app is fully manageable from dashboard. You can change assigned permissions, add webhooks, or authentication token */
  | "LOCAL"
  /** Third party external App. Installation is fully automated. Saleor uses a defined App manifest to gather all required information. */
  | "THIRDPARTY";

/**
 * Updates an existing app.
 *
 * Requires one of the following permissions: MANAGE_APPS.
 *
 * Triggers the following webhook events:
 * - APP_UPDATED (async): An app was updated.
 */
export type IAppUpdate = {
  __typename?: "AppUpdate";
  app?: Maybe<IApp>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  appErrors: Array<IAppError>;
  errors: Array<IAppError>;
};

/**
 * Event sent when app is updated.
 *
 * Added in Saleor 3.4.
 */
export type IAppUpdated = IEvent & {
  __typename?: "AppUpdated";
  /** The application the event relates to. */
  app?: Maybe<IApp>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars["DateTime"]>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IIssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<IApp>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars["String"]>;
};

/** An enumeration. */
export type IAreaUnitsEnum =
  | "SQ_CM"
  | "SQ_DM"
  | "SQ_FT"
  | "SQ_INCH"
  | "SQ_KM"
  | "SQ_M"
  | "SQ_MM"
  | "SQ_YD";

/**
 * Assigns storefront's navigation menus.
 *
 * Requires one of the following permissions: MANAGE_MENUS, MANAGE_SETTINGS.
 */
export type IAssignNavigation = {
  __typename?: "AssignNavigation";
  errors: Array<IMenuError>;
  /** Assigned navigation menu. */
  menu?: Maybe<IMenu>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  menuErrors: Array<IMenuError>;
};

/**
 * Represents assigned attribute to variant with variant selection attached.
 *
 * Added in Saleor 3.1.
 */
export type IAssignedVariantAttribute = {
  __typename?: "AssignedVariantAttribute";
  /** Attribute assigned to variant. */
  attribute: IAttribute;
  /** Determines, whether assigned attribute is allowed for variant selection. Supported variant types for variant selection are: ['dropdown', 'boolean', 'swatch', 'numeric'] */
  variantSelection: Scalars["Boolean"];
};

/** Custom attribute of a product. Attributes can be assigned to products and variants at the product type level. */
export type IAttribute = INode &
  IObjectWithMetadata & {
    __typename?: "Attribute";
    /**
     * Whether the attribute can be displayed in the admin product list. Requires one of the following permissions: MANAGE_PAGES, MANAGE_PAGE_TYPES_AND_ATTRIBUTES, MANAGE_PRODUCTS, MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
     * @deprecated This field will be removed in Saleor 4.0.
     */
    availableInGrid: Scalars["Boolean"];
    /** List of attribute's values. */
    choices?: Maybe<IAttributeValueCountableConnection>;
    /** The entity type which can be used as a reference. */
    entityType?: Maybe<IAttributeEntityTypeEnum>;
    /**
     * External ID of this attribute.
     *
     * Added in Saleor 3.10.
     */
    externalReference?: Maybe<Scalars["String"]>;
    /** Whether the attribute can be filtered in dashboard. Requires one of the following permissions: MANAGE_PAGES, MANAGE_PAGE_TYPES_AND_ATTRIBUTES, MANAGE_PRODUCTS, MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES. */
    filterableInDashboard: Scalars["Boolean"];
    /**
     * Whether the attribute can be filtered in storefront. Requires one of the following permissions: MANAGE_PAGES, MANAGE_PAGE_TYPES_AND_ATTRIBUTES, MANAGE_PRODUCTS, MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
     * @deprecated This field will be removed in Saleor 4.0.
     */
    filterableInStorefront: Scalars["Boolean"];
    /** The ID of the attribute. */
    id: Scalars["ID"];
    /** The input type to use for entering attribute values in the dashboard. */
    inputType?: Maybe<IAttributeInputTypeEnum>;
    /** List of public metadata items. Can be accessed without permissions. */
    metadata: Array<IMetadataItem>;
    /**
     * A single key from public metadata.
     *
     * Tip: Use GraphQL aliases to fetch multiple keys.
     *
     * Added in Saleor 3.3.
     */
    metafield?: Maybe<Scalars["String"]>;
    /**
     * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
     *
     * Added in Saleor 3.3.
     */
    metafields?: Maybe<Scalars["Metadata"]>;
    /** Name of an attribute displayed in the interface. */
    name?: Maybe<Scalars["String"]>;
    /** List of private metadata items. Requires staff permissions to access. */
    privateMetadata: Array<IMetadataItem>;
    /**
     * A single key from private metadata. Requires staff permissions to access.
     *
     * Tip: Use GraphQL aliases to fetch multiple keys.
     *
     * Added in Saleor 3.3.
     */
    privateMetafield?: Maybe<Scalars["String"]>;
    /**
     * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
     *
     * Added in Saleor 3.3.
     */
    privateMetafields?: Maybe<Scalars["Metadata"]>;
    /** A list of product types that use this attribute as a product attribute. */
    productTypes: IProductTypeCountableConnection;
    /** A list of product types that use this attribute as a product variant attribute. */
    productVariantTypes: IProductTypeCountableConnection;
    /** Internal representation of an attribute name. */
    slug?: Maybe<Scalars["String"]>;
    /**
     * The position of the attribute in the storefront navigation (0 by default). Requires one of the following permissions: MANAGE_PAGES, MANAGE_PAGE_TYPES_AND_ATTRIBUTES, MANAGE_PRODUCTS, MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
     * @deprecated This field will be removed in Saleor 4.0.
     */
    storefrontSearchPosition: Scalars["Int"];
    /** Returns translated attribute fields for the given language code. */
    translation?: Maybe<IAttributeTranslation>;
    /** The attribute type. */
    type?: Maybe<IAttributeTypeEnum>;
    /** The unit of attribute values. */
    unit?: Maybe<IMeasurementUnitsEnum>;
    /** Whether the attribute requires values to be passed or not. Requires one of the following permissions: MANAGE_PAGES, MANAGE_PAGE_TYPES_AND_ATTRIBUTES, MANAGE_PRODUCTS, MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES. */
    valueRequired: Scalars["Boolean"];
    /** Whether the attribute should be visible or not in storefront. Requires one of the following permissions: MANAGE_PAGES, MANAGE_PAGE_TYPES_AND_ATTRIBUTES, MANAGE_PRODUCTS, MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES. */
    visibleInStorefront: Scalars["Boolean"];
    /** Flag indicating that attribute has predefined choices. */
    withChoices: Scalars["Boolean"];
  };

/** Custom attribute of a product. Attributes can be assigned to products and variants at the product type level. */
export type IAttributeChoicesArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  filter?: InputMaybe<IAttributeValueFilterInput>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  sortBy?: InputMaybe<IAttributeChoicesSortingInput>;
};

/** Custom attribute of a product. Attributes can be assigned to products and variants at the product type level. */
export type IAttributeMetafieldArgs = {
  key: Scalars["String"];
};

/** Custom attribute of a product. Attributes can be assigned to products and variants at the product type level. */
export type IAttributeMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars["String"]>>;
};

/** Custom attribute of a product. Attributes can be assigned to products and variants at the product type level. */
export type IAttributePrivateMetafieldArgs = {
  key: Scalars["String"];
};

/** Custom attribute of a product. Attributes can be assigned to products and variants at the product type level. */
export type IAttributePrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars["String"]>>;
};

/** Custom attribute of a product. Attributes can be assigned to products and variants at the product type level. */
export type IAttributeProductTypesArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

/** Custom attribute of a product. Attributes can be assigned to products and variants at the product type level. */
export type IAttributeProductVariantTypesArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

/** Custom attribute of a product. Attributes can be assigned to products and variants at the product type level. */
export type IAttributeTranslationArgs = {
  languageCode: ILanguageCodeEnum;
};

/**
 * Creates attributes.
 *
 * Added in Saleor 3.15.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 *
 * Triggers the following webhook events:
 * - ATTRIBUTE_CREATED (async): An attribute was created.
 */
export type IAttributeBulkCreate = {
  __typename?: "AttributeBulkCreate";
  /** Returns how many objects were created. */
  count: Scalars["Int"];
  errors: Array<IAttributeBulkCreateError>;
  /** List of the created attributes. */
  results: Array<IAttributeBulkCreateResult>;
};

export type IAttributeBulkCreateError = {
  __typename?: "AttributeBulkCreateError";
  /** The error code. */
  code: IAttributeBulkCreateErrorCode;
  /** The error message. */
  message?: Maybe<Scalars["String"]>;
  /** Path to field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  path?: Maybe<Scalars["String"]>;
};

/** An enumeration. */
export type IAttributeBulkCreateErrorCode =
  | "ALREADY_EXISTS"
  | "BLANK"
  | "DUPLICATED_INPUT_ITEM"
  | "GRAPHQL_ERROR"
  | "INVALID"
  | "MAX_LENGTH"
  | "NOT_FOUND"
  | "REQUIRED"
  | "UNIQUE";

export type IAttributeBulkCreateResult = {
  __typename?: "AttributeBulkCreateResult";
  /** Attribute data. */
  attribute?: Maybe<IAttribute>;
  /** List of errors occurred on create attempt. */
  errors?: Maybe<Array<IAttributeBulkCreateError>>;
};

/**
 * Deletes attributes.
 *
 * Requires one of the following permissions: MANAGE_PAGE_TYPES_AND_ATTRIBUTES.
 *
 * Triggers the following webhook events:
 * - ATTRIBUTE_DELETED (async): An attribute was deleted.
 */
export type IAttributeBulkDelete = {
  __typename?: "AttributeBulkDelete";
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  attributeErrors: Array<IAttributeError>;
  /** Returns how many objects were affected. */
  count: Scalars["Int"];
  errors: Array<IAttributeError>;
};

/**
 * Creates/updates translations for attributes.
 *
 * Added in Saleor 3.14.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 *
 * Requires one of the following permissions: MANAGE_TRANSLATIONS.
 */
export type IAttributeBulkTranslate = {
  __typename?: "AttributeBulkTranslate";
  /** Returns how many translations were created/updated. */
  count: Scalars["Int"];
  errors: Array<IAttributeBulkTranslateError>;
  /** List of the translations. */
  results: Array<IAttributeBulkTranslateResult>;
};

export type IAttributeBulkTranslateError = {
  __typename?: "AttributeBulkTranslateError";
  /** The error code. */
  code: IAttributeTranslateErrorCode;
  /** The error message. */
  message?: Maybe<Scalars["String"]>;
  /** Path to field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  path?: Maybe<Scalars["String"]>;
};

export type IAttributeBulkTranslateInput = {
  /** External reference of an attribute. */
  externalReference?: InputMaybe<Scalars["String"]>;
  /** Attribute ID. */
  id?: InputMaybe<Scalars["ID"]>;
  /** Translation language code. */
  languageCode: ILanguageCodeEnum;
  /** Translation fields. */
  translationFields: INameTranslationInput;
};

export type IAttributeBulkTranslateResult = {
  __typename?: "AttributeBulkTranslateResult";
  /** List of errors occurred on translation attempt. */
  errors?: Maybe<Array<IAttributeBulkTranslateError>>;
  /** Attribute translation data. */
  translation?: Maybe<IAttributeTranslation>;
};

/**
 * Updates attributes.
 *
 * Added in Saleor 3.15.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 *
 * Triggers the following webhook events:
 * - ATTRIBUTE_UPDATED (async): An attribute was updated. Optionally called when new attribute value was created or deleted.
 * - ATTRIBUTE_VALUE_CREATED (async): Called optionally when an attribute value was created.
 * - ATTRIBUTE_VALUE_DELETED (async): Called optionally when an attribute value was deleted.
 */
export type IAttributeBulkUpdate = {
  __typename?: "AttributeBulkUpdate";
  /** Returns how many objects were updated. */
  count: Scalars["Int"];
  errors: Array<IAttributeBulkUpdateError>;
  /** List of the updated attributes. */
  results: Array<IAttributeBulkUpdateResult>;
};

export type IAttributeBulkUpdateError = {
  __typename?: "AttributeBulkUpdateError";
  /** The error code. */
  code: IAttributeBulkUpdateErrorCode;
  /** The error message. */
  message?: Maybe<Scalars["String"]>;
  /** Path to field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  path?: Maybe<Scalars["String"]>;
};

/** An enumeration. */
export type IAttributeBulkUpdateErrorCode =
  | "ALREADY_EXISTS"
  | "BLANK"
  | "DUPLICATED_INPUT_ITEM"
  | "GRAPHQL_ERROR"
  | "INVALID"
  | "MAX_LENGTH"
  | "NOT_FOUND"
  | "REQUIRED"
  | "UNIQUE";

export type IAttributeBulkUpdateInput = {
  /** External ID of this attribute. */
  externalReference?: InputMaybe<Scalars["String"]>;
  /** Fields to update. */
  fields: IAttributeUpdateInput;
  /** ID of an attribute to update. */
  id?: InputMaybe<Scalars["ID"]>;
};

export type IAttributeBulkUpdateResult = {
  __typename?: "AttributeBulkUpdateResult";
  /** Attribute data. */
  attribute?: Maybe<IAttribute>;
  /** List of errors occurred on update attempt. */
  errors?: Maybe<Array<IAttributeBulkUpdateError>>;
};

export type IAttributeChoicesSortField =
  /** Sort attribute choice by name. */
  | "NAME"
  /** Sort attribute choice by slug. */
  | "SLUG";

export type IAttributeChoicesSortingInput = {
  /** Specifies the direction in which to sort attribute choices. */
  direction: IOrderDirection;
  /** Sort attribute choices by the selected field. */
  field: IAttributeChoicesSortField;
};

export type IAttributeCountableConnection = {
  __typename?: "AttributeCountableConnection";
  edges: Array<IAttributeCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: IPageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars["Int"]>;
};

export type IAttributeCountableEdge = {
  __typename?: "AttributeCountableEdge";
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node: IAttribute;
};

/**
 * Creates an attribute.
 *
 * Triggers the following webhook events:
 * - ATTRIBUTE_CREATED (async): An attribute was created.
 */
export type IAttributeCreate = {
  __typename?: "AttributeCreate";
  attribute?: Maybe<IAttribute>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  attributeErrors: Array<IAttributeError>;
  errors: Array<IAttributeError>;
};

/**
 * Represents an input for create of attribute.
 *
 * NOTE: Deprecated fields `filterableInStorefront`, `storefrontSearchPosition` and `availableInGrid` are not supported in bulk mutations: `attributeBulkCreate`, `attributeBulkUpdate`.
 */
export type IAttributeCreateInput = {
  /**
   * Whether the attribute can be displayed in the admin product list.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0.
   */
  availableInGrid?: InputMaybe<Scalars["Boolean"]>;
  /** The entity type which can be used as a reference. */
  entityType?: InputMaybe<IAttributeEntityTypeEnum>;
  /**
   * External ID of this attribute.
   *
   * Added in Saleor 3.10.
   */
  externalReference?: InputMaybe<Scalars["String"]>;
  /** Whether the attribute can be filtered in dashboard. */
  filterableInDashboard?: InputMaybe<Scalars["Boolean"]>;
  /**
   * Whether the attribute can be filtered in storefront.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0.
   */
  filterableInStorefront?: InputMaybe<Scalars["Boolean"]>;
  /** The input type to use for entering attribute values in the dashboard. */
  inputType?: InputMaybe<IAttributeInputTypeEnum>;
  /** Whether the attribute is for variants only. */
  isVariantOnly?: InputMaybe<Scalars["Boolean"]>;
  /** Name of an attribute displayed in the interface. */
  name: Scalars["String"];
  /** Internal representation of an attribute name. */
  slug?: InputMaybe<Scalars["String"]>;
  /**
   * The position of the attribute in the storefront navigation (0 by default).
   *
   * DEPRECATED: this field will be removed in Saleor 4.0.
   */
  storefrontSearchPosition?: InputMaybe<Scalars["Int"]>;
  /** The attribute type. */
  type: IAttributeTypeEnum;
  /** The unit of attribute values. */
  unit?: InputMaybe<IMeasurementUnitsEnum>;
  /** Whether the attribute requires values to be passed or not. */
  valueRequired?: InputMaybe<Scalars["Boolean"]>;
  /** List of attribute's values. */
  values?: InputMaybe<Array<IAttributeValueCreateInput>>;
  /** Whether the attribute should be visible or not in storefront. */
  visibleInStorefront?: InputMaybe<Scalars["Boolean"]>;
};

/**
 * Event sent when new attribute is created.
 *
 * Added in Saleor 3.5.
 */
export type IAttributeCreated = IEvent & {
  __typename?: "AttributeCreated";
  /** The attribute the event relates to. */
  attribute?: Maybe<IAttribute>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars["DateTime"]>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IIssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<IApp>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars["String"]>;
};

/**
 * Deletes an attribute.
 *
 * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
 *
 * Triggers the following webhook events:
 * - ATTRIBUTE_DELETED (async): An attribute was deleted.
 */
export type IAttributeDelete = {
  __typename?: "AttributeDelete";
  attribute?: Maybe<IAttribute>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  attributeErrors: Array<IAttributeError>;
  errors: Array<IAttributeError>;
};

/**
 * Event sent when attribute is deleted.
 *
 * Added in Saleor 3.5.
 */
export type IAttributeDeleted = IEvent & {
  __typename?: "AttributeDeleted";
  /** The attribute the event relates to. */
  attribute?: Maybe<IAttribute>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars["DateTime"]>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IIssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<IApp>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars["String"]>;
};

/** An enumeration. */
export type IAttributeEntityTypeEnum = "PAGE" | "PRODUCT" | "PRODUCT_VARIANT";

export type IAttributeEntityTypeEnumFilterInput = {
  /** The value equal to. */
  eq?: InputMaybe<IAttributeEntityTypeEnum>;
  /** The value included in. */
  oneOf?: InputMaybe<Array<IAttributeEntityTypeEnum>>;
};

export type IAttributeError = {
  __typename?: "AttributeError";
  /** The error code. */
  code: IAttributeErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars["String"]>;
  /** The error message. */
  message?: Maybe<Scalars["String"]>;
};

/** An enumeration. */
export type IAttributeErrorCode =
  | "ALREADY_EXISTS"
  | "GRAPHQL_ERROR"
  | "INVALID"
  | "NOT_FOUND"
  | "REQUIRED"
  | "UNIQUE";

export type IAttributeFilterInput = {
  availableInGrid?: InputMaybe<Scalars["Boolean"]>;
  /**
   * Specifies the channel by which the data should be filtered.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Use root-level channel argument instead.
   */
  channel?: InputMaybe<Scalars["String"]>;
  filterableInDashboard?: InputMaybe<Scalars["Boolean"]>;
  filterableInStorefront?: InputMaybe<Scalars["Boolean"]>;
  ids?: InputMaybe<Array<Scalars["ID"]>>;
  inCategory?: InputMaybe<Scalars["ID"]>;
  inCollection?: InputMaybe<Scalars["ID"]>;
  isVariantOnly?: InputMaybe<Scalars["Boolean"]>;
  metadata?: InputMaybe<Array<IMetadataFilter>>;
  search?: InputMaybe<Scalars["String"]>;
  slugs?: InputMaybe<Array<Scalars["String"]>>;
  type?: InputMaybe<IAttributeTypeEnum>;
  valueRequired?: InputMaybe<Scalars["Boolean"]>;
  visibleInStorefront?: InputMaybe<Scalars["Boolean"]>;
};

export type IAttributeInput = {
  /** The boolean value of the attribute. */
  boolean?: InputMaybe<Scalars["Boolean"]>;
  /** The date range that the returned values should be in. In case of date/time attributes, the UTC midnight of the given date is used. */
  date?: InputMaybe<IDateRangeInput>;
  /** The date/time range that the returned values should be in. */
  dateTime?: InputMaybe<IDateTimeRangeInput>;
  /** Internal representation of an attribute name. */
  slug: Scalars["String"];
  /** Internal representation of a value (unique per attribute). */
  values?: InputMaybe<Array<Scalars["String"]>>;
  /** The range that the returned values should be in. */
  valuesRange?: InputMaybe<IIntRangeInput>;
};

/** An enumeration. */
export type IAttributeInputTypeEnum =
  | "BOOLEAN"
  | "DATE"
  | "DATE_TIME"
  | "DROPDOWN"
  | "FILE"
  | "MULTISELECT"
  | "NUMERIC"
  | "PLAIN_TEXT"
  | "REFERENCE"
  | "RICH_TEXT"
  | "SWATCH";

export type IAttributeInputTypeEnumFilterInput = {
  /** The value equal to. */
  eq?: InputMaybe<IAttributeInputTypeEnum>;
  /** The value included in. */
  oneOf?: InputMaybe<Array<IAttributeInputTypeEnum>>;
};

/**
 * Reorder the values of an attribute.
 *
 * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
 *
 * Triggers the following webhook events:
 * - ATTRIBUTE_VALUE_UPDATED (async): An attribute value was updated.
 * - ATTRIBUTE_UPDATED (async): An attribute was updated.
 */
export type IAttributeReorderValues = {
  __typename?: "AttributeReorderValues";
  /** Attribute from which values are reordered. */
  attribute?: Maybe<IAttribute>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  attributeErrors: Array<IAttributeError>;
  errors: Array<IAttributeError>;
};

export type IAttributeSortField =
  /** Sort attributes based on whether they can be displayed or not in a product grid. */
  | "AVAILABLE_IN_GRID"
  /** Sort attributes by the filterable in dashboard flag */
  | "FILTERABLE_IN_DASHBOARD"
  /** Sort attributes by the filterable in storefront flag */
  | "FILTERABLE_IN_STOREFRONT"
  /** Sort attributes by the variant only flag */
  | "IS_VARIANT_ONLY"
  /** Sort attributes by name */
  | "NAME"
  /** Sort attributes by slug */
  | "SLUG"
  /** Sort attributes by their position in storefront */
  | "STOREFRONT_SEARCH_POSITION"
  /** Sort attributes by the value required flag */
  | "VALUE_REQUIRED"
  /** Sort attributes by visibility in the storefront */
  | "VISIBLE_IN_STOREFRONT";

export type IAttributeSortingInput = {
  /** Specifies the direction in which to sort attributes. */
  direction: IOrderDirection;
  /** Sort attributes by the selected field. */
  field: IAttributeSortField;
};

export type IAttributeTranslatableContent = INode & {
  __typename?: "AttributeTranslatableContent";
  /**
   * Custom attribute of a product.
   * @deprecated This field will be removed in Saleor 4.0. Get model fields from the root level queries.
   */
  attribute?: Maybe<IAttribute>;
  /** The ID of the attribute. */
  id: Scalars["ID"];
  /** Name of the attribute to translate. */
  name: Scalars["String"];
  /** Returns translated attribute fields for the given language code. */
  translation?: Maybe<IAttributeTranslation>;
};

export type IAttributeTranslatableContentTranslationArgs = {
  languageCode: ILanguageCodeEnum;
};

/**
 * Creates/updates translations for an attribute.
 *
 * Requires one of the following permissions: MANAGE_TRANSLATIONS.
 */
export type IAttributeTranslate = {
  __typename?: "AttributeTranslate";
  attribute?: Maybe<IAttribute>;
  errors: Array<ITranslationError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  translationErrors: Array<ITranslationError>;
};

/** An enumeration. */
export type IAttributeTranslateErrorCode =
  | "GRAPHQL_ERROR"
  | "INVALID"
  | "NOT_FOUND"
  | "REQUIRED";

export type IAttributeTranslation = INode & {
  __typename?: "AttributeTranslation";
  /** The ID of the attribute translation. */
  id: Scalars["ID"];
  /** Translation language. */
  language: ILanguageDisplay;
  /** Translated attribute name. */
  name: Scalars["String"];
};

/** An enumeration. */
export type IAttributeTypeEnum = "PAGE_TYPE" | "PRODUCT_TYPE";

export type IAttributeTypeEnumFilterInput = {
  /** The value equal to. */
  eq?: InputMaybe<IAttributeTypeEnum>;
  /** The value included in. */
  oneOf?: InputMaybe<Array<IAttributeTypeEnum>>;
};

/**
 * Updates attribute.
 *
 * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
 *
 * Triggers the following webhook events:
 * - ATTRIBUTE_UPDATED (async): An attribute was updated.
 */
export type IAttributeUpdate = {
  __typename?: "AttributeUpdate";
  attribute?: Maybe<IAttribute>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  attributeErrors: Array<IAttributeError>;
  errors: Array<IAttributeError>;
};

/**
 * Represents an input for update of attribute.
 *
 * NOTE: Deprecated fields `filterableInStorefront`, `storefrontSearchPosition` and `availableInGrid` are not supported in bulk mutations: `attributeBulkCreate`, `attributeBulkUpdate`.
 */
export type IAttributeUpdateInput = {
  /** New values to be created for this attribute. */
  addValues?: InputMaybe<Array<IAttributeValueUpdateInput>>;
  /**
   * Whether the attribute can be displayed in the admin product list.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0.
   */
  availableInGrid?: InputMaybe<Scalars["Boolean"]>;
  /**
   * External ID of this product.
   *
   * Added in Saleor 3.10.
   */
  externalReference?: InputMaybe<Scalars["String"]>;
  /** Whether the attribute can be filtered in dashboard. */
  filterableInDashboard?: InputMaybe<Scalars["Boolean"]>;
  /**
   * Whether the attribute can be filtered in storefront.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0.
   */
  filterableInStorefront?: InputMaybe<Scalars["Boolean"]>;
  /** Whether the attribute is for variants only. */
  isVariantOnly?: InputMaybe<Scalars["Boolean"]>;
  /** Name of an attribute displayed in the interface. */
  name?: InputMaybe<Scalars["String"]>;
  /** IDs of values to be removed from this attribute. */
  removeValues?: InputMaybe<Array<Scalars["ID"]>>;
  /** Internal representation of an attribute name. */
  slug?: InputMaybe<Scalars["String"]>;
  /**
   * The position of the attribute in the storefront navigation (0 by default).
   *
   * DEPRECATED: this field will be removed in Saleor 4.0.
   */
  storefrontSearchPosition?: InputMaybe<Scalars["Int"]>;
  /** The unit of attribute values. */
  unit?: InputMaybe<IMeasurementUnitsEnum>;
  /** Whether the attribute requires values to be passed or not. */
  valueRequired?: InputMaybe<Scalars["Boolean"]>;
  /** Whether the attribute should be visible or not in storefront. */
  visibleInStorefront?: InputMaybe<Scalars["Boolean"]>;
};

/**
 * Event sent when attribute is updated.
 *
 * Added in Saleor 3.5.
 */
export type IAttributeUpdated = IEvent & {
  __typename?: "AttributeUpdated";
  /** The attribute the event relates to. */
  attribute?: Maybe<IAttribute>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars["DateTime"]>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IIssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<IApp>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars["String"]>;
};

/** Represents a value of an attribute. */
export type IAttributeValue = INode & {
  __typename?: "AttributeValue";
  /** Represents the boolean value of the attribute value. */
  boolean?: Maybe<Scalars["Boolean"]>;
  /** Represents the date value of the attribute value. */
  date?: Maybe<Scalars["Date"]>;
  /** Represents the date/time value of the attribute value. */
  dateTime?: Maybe<Scalars["DateTime"]>;
  /**
   * External ID of this attribute value.
   *
   * Added in Saleor 3.10.
   */
  externalReference?: Maybe<Scalars["String"]>;
  /** Represents file URL and content type (if attribute value is a file). */
  file?: Maybe<IFile>;
  /** The ID of the attribute value. */
  id: Scalars["ID"];
  /** The input type to use for entering attribute values in the dashboard. */
  inputType?: Maybe<IAttributeInputTypeEnum>;
  /** Name of a value displayed in the interface. */
  name?: Maybe<Scalars["String"]>;
  /** Represents the text of the attribute value, plain text without formating. */
  plainText?: Maybe<Scalars["String"]>;
  /** The ID of the attribute reference. */
  reference?: Maybe<Scalars["ID"]>;
  /**
   * Represents the text of the attribute value, includes formatting.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  richText?: Maybe<Scalars["JSONString"]>;
  /** Internal representation of a value (unique per attribute). */
  slug?: Maybe<Scalars["String"]>;
  /** Returns translated attribute value fields for the given language code. */
  translation?: Maybe<IAttributeValueTranslation>;
  /** Represent value of the attribute value (e.g. color values for swatch attributes). */
  value?: Maybe<Scalars["String"]>;
};

/** Represents a value of an attribute. */
export type IAttributeValueTranslationArgs = {
  languageCode: ILanguageCodeEnum;
};

/**
 * Deletes values of attributes.
 *
 * Requires one of the following permissions: MANAGE_PAGE_TYPES_AND_ATTRIBUTES.
 *
 * Triggers the following webhook events:
 * - ATTRIBUTE_VALUE_DELETED (async): An attribute value was deleted.
 * - ATTRIBUTE_UPDATED (async): An attribute was updated.
 */
export type IAttributeValueBulkDelete = {
  __typename?: "AttributeValueBulkDelete";
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  attributeErrors: Array<IAttributeError>;
  /** Returns how many objects were affected. */
  count: Scalars["Int"];
  errors: Array<IAttributeError>;
};

/**
 * Creates/updates translations for attributes values.
 *
 * Added in Saleor 3.14.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 *
 * Requires one of the following permissions: MANAGE_TRANSLATIONS.
 */
export type IAttributeValueBulkTranslate = {
  __typename?: "AttributeValueBulkTranslate";
  /** Returns how many translations were created/updated. */
  count: Scalars["Int"];
  errors: Array<IAttributeValueBulkTranslateError>;
  /** List of the translations. */
  results: Array<IAttributeValueBulkTranslateResult>;
};

export type IAttributeValueBulkTranslateError = {
  __typename?: "AttributeValueBulkTranslateError";
  /** The error code. */
  code: IAttributeValueTranslateErrorCode;
  /** The error message. */
  message?: Maybe<Scalars["String"]>;
  /** Path to field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  path?: Maybe<Scalars["String"]>;
};

export type IAttributeValueBulkTranslateInput = {
  /** External reference of an attribute value. */
  externalReference?: InputMaybe<Scalars["String"]>;
  /** Attribute value ID. */
  id?: InputMaybe<Scalars["ID"]>;
  /** Translation language code. */
  languageCode: ILanguageCodeEnum;
  /** Translation fields. */
  translationFields: IAttributeValueTranslationInput;
};

export type IAttributeValueBulkTranslateResult = {
  __typename?: "AttributeValueBulkTranslateResult";
  /** List of errors occurred on translation attempt. */
  errors?: Maybe<Array<IAttributeValueBulkTranslateError>>;
  /** Attribute value translation data. */
  translation?: Maybe<IAttributeValueTranslation>;
};

export type IAttributeValueCountableConnection = {
  __typename?: "AttributeValueCountableConnection";
  edges: Array<IAttributeValueCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: IPageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars["Int"]>;
};

export type IAttributeValueCountableEdge = {
  __typename?: "AttributeValueCountableEdge";
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node: IAttributeValue;
};

/**
 * Creates a value for an attribute.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 *
 * Triggers the following webhook events:
 * - ATTRIBUTE_VALUE_CREATED (async): An attribute value was created.
 * - ATTRIBUTE_UPDATED (async): An attribute was updated.
 */
export type IAttributeValueCreate = {
  __typename?: "AttributeValueCreate";
  /** The updated attribute. */
  attribute?: Maybe<IAttribute>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  attributeErrors: Array<IAttributeError>;
  attributeValue?: Maybe<IAttributeValue>;
  errors: Array<IAttributeError>;
};

export type IAttributeValueCreateInput = {
  /** File content type. */
  contentType?: InputMaybe<Scalars["String"]>;
  /**
   * External ID of this attribute value.
   *
   * Added in Saleor 3.10.
   */
  externalReference?: InputMaybe<Scalars["String"]>;
  /** URL of the file attribute. Every time, a new value is created. */
  fileUrl?: InputMaybe<Scalars["String"]>;
  /** Name of a value displayed in the interface. */
  name: Scalars["String"];
  /**
   * Represents the text of the attribute value, plain text without formating.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0.The plain text attribute hasn't got predefined value, so can be specified only from instance that supports the given attribute.
   */
  plainText?: InputMaybe<Scalars["String"]>;
  /**
   * Represents the text of the attribute value, includes formatting.
   *
   * Rich text format. For reference see https://editorjs.io/
   *
   * DEPRECATED: this field will be removed in Saleor 4.0.The rich text attribute hasn't got predefined value, so can be specified only from instance that supports the given attribute.
   */
  richText?: InputMaybe<Scalars["JSONString"]>;
  /** Represent value of the attribute value (e.g. color values for swatch attributes). */
  value?: InputMaybe<Scalars["String"]>;
};

/**
 * Event sent when new attribute value is created.
 *
 * Added in Saleor 3.5.
 */
export type IAttributeValueCreated = IEvent & {
  __typename?: "AttributeValueCreated";
  /** The attribute value the event relates to. */
  attributeValue?: Maybe<IAttributeValue>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars["DateTime"]>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IIssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<IApp>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars["String"]>;
};

/**
 * Deletes a value of an attribute.
 *
 * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
 *
 * Triggers the following webhook events:
 * - ATTRIBUTE_VALUE_DELETED (async): An attribute value was deleted.
 * - ATTRIBUTE_UPDATED (async): An attribute was updated.
 */
export type IAttributeValueDelete = {
  __typename?: "AttributeValueDelete";
  /** The updated attribute. */
  attribute?: Maybe<IAttribute>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  attributeErrors: Array<IAttributeError>;
  attributeValue?: Maybe<IAttributeValue>;
  errors: Array<IAttributeError>;
};

/**
 * Event sent when attribute value is deleted.
 *
 * Added in Saleor 3.5.
 */
export type IAttributeValueDeleted = IEvent & {
  __typename?: "AttributeValueDeleted";
  /** The attribute value the event relates to. */
  attributeValue?: Maybe<IAttributeValue>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars["DateTime"]>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IIssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<IApp>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars["String"]>;
};

export type IAttributeValueFilterInput = {
  ids?: InputMaybe<Array<Scalars["ID"]>>;
  search?: InputMaybe<Scalars["String"]>;
};

export type IAttributeValueInput = {
  /** Represents the boolean value of the attribute value. */
  boolean?: InputMaybe<Scalars["Boolean"]>;
  /** File content type. */
  contentType?: InputMaybe<Scalars["String"]>;
  /** Represents the date value of the attribute value. */
  date?: InputMaybe<Scalars["Date"]>;
  /** Represents the date/time value of the attribute value. */
  dateTime?: InputMaybe<Scalars["DateTime"]>;
  /**
   * Attribute value ID or external reference.
   *
   * Added in Saleor 3.9.
   */
  dropdown?: InputMaybe<IAttributeValueSelectableTypeInput>;
  /**
   * External ID of this attribute.
   *
   * Added in Saleor 3.14.
   */
  externalReference?: InputMaybe<Scalars["String"]>;
  /** URL of the file attribute. Every time, a new value is created. */
  file?: InputMaybe<Scalars["String"]>;
  /** ID of the selected attribute. */
  id?: InputMaybe<Scalars["ID"]>;
  /**
   * List of attribute value IDs or external references.
   *
   * Added in Saleor 3.9.
   */
  multiselect?: InputMaybe<Array<IAttributeValueSelectableTypeInput>>;
  /**
   * Numeric value of an attribute.
   *
   * Added in Saleor 3.9.
   */
  numeric?: InputMaybe<Scalars["String"]>;
  /** Plain text content. */
  plainText?: InputMaybe<Scalars["String"]>;
  /** List of entity IDs that will be used as references. */
  references?: InputMaybe<Array<Scalars["ID"]>>;
  /** Text content in JSON format. */
  richText?: InputMaybe<Scalars["JSONString"]>;
  /**
   * Attribute value ID or external reference.
   *
   * Added in Saleor 3.9.
   */
  swatch?: InputMaybe<IAttributeValueSelectableTypeInput>;
  /** The value or slug of an attribute to resolve. If the passed value is non-existent, it will be created. This field will be removed in Saleor 4.0. */
  values?: InputMaybe<Array<Scalars["String"]>>;
};

/**
 * Represents attribute value.
 * 1. If ID is provided, then attribute value will be resolved by ID.
 * 2. If externalReference is provided, then attribute value will be resolved by external reference.
 * 3. If value is provided, then attribute value will be resolved by value. If this attribute value doesn't exist, then it will be created.
 * 4. If externalReference and value is provided then new attribute value will be created.
 *
 * Added in Saleor 3.9.
 */
export type IAttributeValueSelectableTypeInput = {
  /**
   * External reference of an attribute value.
   *
   * Added in Saleor 3.14.
   */
  externalReference?: InputMaybe<Scalars["String"]>;
  /** ID of an attribute value. */
  id?: InputMaybe<Scalars["ID"]>;
  /** The value or slug of an attribute to resolve. If the passed value is non-existent, it will be created. */
  value?: InputMaybe<Scalars["String"]>;
};

export type IAttributeValueTranslatableContent = INode & {
  __typename?: "AttributeValueTranslatableContent";
  /**
   * Associated attribute that can be translated.
   *
   * Added in Saleor 3.9.
   */
  attribute?: Maybe<IAttributeTranslatableContent>;
  /**
   * Represents a value of an attribute.
   * @deprecated This field will be removed in Saleor 4.0. Get model fields from the root level queries.
   */
  attributeValue?: Maybe<IAttributeValue>;
  /** The ID of the attribute value translatable content. */
  id: Scalars["ID"];
  /** Name of the attribute value to translate. */
  name: Scalars["String"];
  /** Attribute plain text value. */
  plainText?: Maybe<Scalars["String"]>;
  /**
   * Attribute value.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  richText?: Maybe<Scalars["JSONString"]>;
  /** Returns translated attribute value fields for the given language code. */
  translation?: Maybe<IAttributeValueTranslation>;
};

export type IAttributeValueTranslatableContentTranslationArgs = {
  languageCode: ILanguageCodeEnum;
};

/**
 * Creates/updates translations for an attribute value.
 *
 * Requires one of the following permissions: MANAGE_TRANSLATIONS.
 */
export type IAttributeValueTranslate = {
  __typename?: "AttributeValueTranslate";
  attributeValue?: Maybe<IAttributeValue>;
  errors: Array<ITranslationError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  translationErrors: Array<ITranslationError>;
};

/** An enumeration. */
export type IAttributeValueTranslateErrorCode =
  | "GRAPHQL_ERROR"
  | "INVALID"
  | "NOT_FOUND"
  | "REQUIRED";

export type IAttributeValueTranslation = INode & {
  __typename?: "AttributeValueTranslation";
  /** The ID of the attribute value translation. */
  id: Scalars["ID"];
  /** Translation language. */
  language: ILanguageDisplay;
  /** Translated attribute value name. */
  name: Scalars["String"];
  /** Translated plain text attribute value . */
  plainText?: Maybe<Scalars["String"]>;
  /**
   * Translated rich-text attribute value.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  richText?: Maybe<Scalars["JSONString"]>;
};

export type IAttributeValueTranslationInput = {
  name?: InputMaybe<Scalars["String"]>;
  /** Translated text. */
  plainText?: InputMaybe<Scalars["String"]>;
  /**
   * Translated text.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  richText?: InputMaybe<Scalars["JSONString"]>;
};

/**
 * Updates value of an attribute.
 *
 * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
 *
 * Triggers the following webhook events:
 * - ATTRIBUTE_VALUE_UPDATED (async): An attribute value was updated.
 * - ATTRIBUTE_UPDATED (async): An attribute was updated.
 */
export type IAttributeValueUpdate = {
  __typename?: "AttributeValueUpdate";
  /** The updated attribute. */
  attribute?: Maybe<IAttribute>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  attributeErrors: Array<IAttributeError>;
  attributeValue?: Maybe<IAttributeValue>;
  errors: Array<IAttributeError>;
};

export type IAttributeValueUpdateInput = {
  /** File content type. */
  contentType?: InputMaybe<Scalars["String"]>;
  /**
   * External ID of this attribute value.
   *
   * Added in Saleor 3.10.
   */
  externalReference?: InputMaybe<Scalars["String"]>;
  /** URL of the file attribute. Every time, a new value is created. */
  fileUrl?: InputMaybe<Scalars["String"]>;
  /** Name of a value displayed in the interface. */
  name?: InputMaybe<Scalars["String"]>;
  /**
   * Represents the text of the attribute value, plain text without formating.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0.The plain text attribute hasn't got predefined value, so can be specified only from instance that supports the given attribute.
   */
  plainText?: InputMaybe<Scalars["String"]>;
  /**
   * Represents the text of the attribute value, includes formatting.
   *
   * Rich text format. For reference see https://editorjs.io/
   *
   * DEPRECATED: this field will be removed in Saleor 4.0.The rich text attribute hasn't got predefined value, so can be specified only from instance that supports the given attribute.
   */
  richText?: InputMaybe<Scalars["JSONString"]>;
  /** Represent value of the attribute value (e.g. color values for swatch attributes). */
  value?: InputMaybe<Scalars["String"]>;
};

/**
 * Event sent when attribute value is updated.
 *
 * Added in Saleor 3.5.
 */
export type IAttributeValueUpdated = IEvent & {
  __typename?: "AttributeValueUpdated";
  /** The attribute value the event relates to. */
  attributeValue?: Maybe<IAttributeValue>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars["DateTime"]>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IIssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<IApp>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars["String"]>;
};

/**
 * Where filtering options.
 *
 * Added in Saleor 3.11.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type IAttributeWhereInput = {
  /** List of conditions that must be met. */
  AND?: InputMaybe<Array<IAttributeWhereInput>>;
  /** A list of conditions of which at least one must be met. */
  OR?: InputMaybe<Array<IAttributeWhereInput>>;
  entityType?: InputMaybe<IAttributeEntityTypeEnumFilterInput>;
  filterableInDashboard?: InputMaybe<Scalars["Boolean"]>;
  ids?: InputMaybe<Array<Scalars["ID"]>>;
  inCategory?: InputMaybe<Scalars["ID"]>;
  inCollection?: InputMaybe<Scalars["ID"]>;
  inputType?: InputMaybe<IAttributeInputTypeEnumFilterInput>;
  metadata?: InputMaybe<Array<IMetadataFilter>>;
  name?: InputMaybe<IStringFilterInput>;
  slug?: InputMaybe<IStringFilterInput>;
  type?: InputMaybe<IAttributeTypeEnumFilterInput>;
  unit?: InputMaybe<IMeasurementUnitsEnumFilterInput>;
  valueRequired?: InputMaybe<Scalars["Boolean"]>;
  visibleInStorefront?: InputMaybe<Scalars["Boolean"]>;
  withChoices?: InputMaybe<Scalars["Boolean"]>;
};

export type IBulkAttributeValueInput = {
  /** The boolean value of an attribute to resolve. If the passed value is non-existent, it will be created. */
  boolean?: InputMaybe<Scalars["Boolean"]>;
  /**
   * File content type.
   *
   * Added in Saleor 3.12.
   */
  contentType?: InputMaybe<Scalars["String"]>;
  /**
   * Represents the date value of the attribute value.
   *
   * Added in Saleor 3.12.
   */
  date?: InputMaybe<Scalars["Date"]>;
  /**
   * Represents the date/time value of the attribute value.
   *
   * Added in Saleor 3.12.
   */
  dateTime?: InputMaybe<Scalars["DateTime"]>;
  /**
   * Attribute value ID.
   *
   * Added in Saleor 3.12.
   */
  dropdown?: InputMaybe<IAttributeValueSelectableTypeInput>;
  /**
   * External ID of this attribute.
   *
   * Added in Saleor 3.14.
   */
  externalReference?: InputMaybe<Scalars["String"]>;
  /**
   * URL of the file attribute. Every time, a new value is created.
   *
   * Added in Saleor 3.12.
   */
  file?: InputMaybe<Scalars["String"]>;
  /** ID of the selected attribute. */
  id?: InputMaybe<Scalars["ID"]>;
  /**
   * List of attribute value IDs.
   *
   * Added in Saleor 3.12.
   */
  multiselect?: InputMaybe<Array<IAttributeValueSelectableTypeInput>>;
  /**
   * Numeric value of an attribute.
   *
   * Added in Saleor 3.12.
   */
  numeric?: InputMaybe<Scalars["String"]>;
  /**
   * Plain text content.
   *
   * Added in Saleor 3.12.
   */
  plainText?: InputMaybe<Scalars["String"]>;
  /**
   * List of entity IDs that will be used as references.
   *
   * Added in Saleor 3.12.
   */
  references?: InputMaybe<Array<Scalars["ID"]>>;
  /**
   * Text content in JSON format.
   *
   * Added in Saleor 3.12.
   */
  richText?: InputMaybe<Scalars["JSONString"]>;
  /**
   * Attribute value ID.
   *
   * Added in Saleor 3.12.
   */
  swatch?: InputMaybe<IAttributeValueSelectableTypeInput>;
  /** The value or slug of an attribute to resolve. If the passed value is non-existent, it will be created.This field will be removed in Saleor 4.0. */
  values?: InputMaybe<Array<Scalars["String"]>>;
};

export type IBulkProductError = {
  __typename?: "BulkProductError";
  /** List of attributes IDs which causes the error. */
  attributes?: Maybe<Array<Scalars["ID"]>>;
  /** List of channel IDs which causes the error. */
  channels?: Maybe<Array<Scalars["ID"]>>;
  /** The error code. */
  code: IProductErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars["String"]>;
  /** Index of an input list item that caused the error. */
  index?: Maybe<Scalars["Int"]>;
  /** The error message. */
  message?: Maybe<Scalars["String"]>;
  /** List of attribute values IDs which causes the error. */
  values?: Maybe<Array<Scalars["ID"]>>;
  /** List of warehouse IDs which causes the error. */
  warehouses?: Maybe<Array<Scalars["ID"]>>;
};

export type IBulkStockError = {
  __typename?: "BulkStockError";
  /** List of attributes IDs which causes the error. */
  attributes?: Maybe<Array<Scalars["ID"]>>;
  /** The error code. */
  code: IProductErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars["String"]>;
  /** Index of an input list item that caused the error. */
  index?: Maybe<Scalars["Int"]>;
  /** The error message. */
  message?: Maybe<Scalars["String"]>;
  /** List of attribute values IDs which causes the error. */
  values?: Maybe<Array<Scalars["ID"]>>;
};

/**
 * Synchronous webhook for calculating checkout/order taxes.
 *
 * Added in Saleor 3.7.
 */
export type ICalculateTaxes = IEvent & {
  __typename?: "CalculateTaxes";
  /** Time of the event. */
  issuedAt?: Maybe<Scalars["DateTime"]>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IIssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<IApp>;
  taxBase: ITaxableObject;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars["String"]>;
};

export type ICardInput = {
  /** Payment method nonce, a token returned by the appropriate provider's SDK. */
  code: Scalars["String"];
  /** Card security code. */
  cvc?: InputMaybe<Scalars["String"]>;
  /** Information about currency and amount. */
  money: IMoneyInput;
};

export type ICatalogueInput = {
  /** Categories related to the discount. */
  categories?: InputMaybe<Array<Scalars["ID"]>>;
  /** Collections related to the discount. */
  collections?: InputMaybe<Array<Scalars["ID"]>>;
  /** Products related to the discount. */
  products?: InputMaybe<Array<Scalars["ID"]>>;
  /**
   * Product variant related to the discount.
   *
   * Added in Saleor 3.1.
   */
  variants?: InputMaybe<Array<Scalars["ID"]>>;
};

/** Represents a single category of products. Categories allow to organize products in a tree-hierarchies which can be used for navigation in the storefront. */
export type ICategory = INode &
  IObjectWithMetadata & {
    __typename?: "Category";
    /** List of ancestors of the category. */
    ancestors?: Maybe<ICategoryCountableConnection>;
    /** Background image of the category. */
    backgroundImage?: Maybe<IImage>;
    /** List of children of the category. */
    children?: Maybe<ICategoryCountableConnection>;
    /**
     * Description of the category.
     *
     * Rich text format. For reference see https://editorjs.io/
     */
    description?: Maybe<Scalars["JSONString"]>;
    /**
     * Description of the category.
     *
     * Rich text format. For reference see https://editorjs.io/
     * @deprecated This field will be removed in Saleor 4.0. Use the `description` field instead.
     */
    descriptionJson?: Maybe<Scalars["JSONString"]>;
    /** The ID of the category. */
    id: Scalars["ID"];
    /** Level of the category. */
    level: Scalars["Int"];
    /** List of public metadata items. Can be accessed without permissions. */
    metadata: Array<IMetadataItem>;
    /**
     * A single key from public metadata.
     *
     * Tip: Use GraphQL aliases to fetch multiple keys.
     *
     * Added in Saleor 3.3.
     */
    metafield?: Maybe<Scalars["String"]>;
    /**
     * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
     *
     * Added in Saleor 3.3.
     */
    metafields?: Maybe<Scalars["Metadata"]>;
    /** Name of category */
    name: Scalars["String"];
    /** Parent category. */
    parent?: Maybe<ICategory>;
    /** List of private metadata items. Requires staff permissions to access. */
    privateMetadata: Array<IMetadataItem>;
    /**
     * A single key from private metadata. Requires staff permissions to access.
     *
     * Tip: Use GraphQL aliases to fetch multiple keys.
     *
     * Added in Saleor 3.3.
     */
    privateMetafield?: Maybe<Scalars["String"]>;
    /**
     * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
     *
     * Added in Saleor 3.3.
     */
    privateMetafields?: Maybe<Scalars["Metadata"]>;
    /** List of products in the category. Requires the following permissions to include the unpublished items: MANAGE_ORDERS, MANAGE_DISCOUNTS, MANAGE_PRODUCTS. */
    products?: Maybe<IProductCountableConnection>;
    /** SEO description of category. */
    seoDescription?: Maybe<Scalars["String"]>;
    /** SEO title of category. */
    seoTitle?: Maybe<Scalars["String"]>;
    /** Slug of the category. */
    slug: Scalars["String"];
    /** Returns translated category fields for the given language code. */
    translation?: Maybe<ICategoryTranslation>;
  };

/** Represents a single category of products. Categories allow to organize products in a tree-hierarchies which can be used for navigation in the storefront. */
export type ICategoryAncestorsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

/** Represents a single category of products. Categories allow to organize products in a tree-hierarchies which can be used for navigation in the storefront. */
export type ICategoryBackgroundImageArgs = {
  format?: InputMaybe<IThumbnailFormatEnum>;
  size?: InputMaybe<Scalars["Int"]>;
};

/** Represents a single category of products. Categories allow to organize products in a tree-hierarchies which can be used for navigation in the storefront. */
export type ICategoryChildrenArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

/** Represents a single category of products. Categories allow to organize products in a tree-hierarchies which can be used for navigation in the storefront. */
export type ICategoryMetafieldArgs = {
  key: Scalars["String"];
};

/** Represents a single category of products. Categories allow to organize products in a tree-hierarchies which can be used for navigation in the storefront. */
export type ICategoryMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars["String"]>>;
};

/** Represents a single category of products. Categories allow to organize products in a tree-hierarchies which can be used for navigation in the storefront. */
export type ICategoryPrivateMetafieldArgs = {
  key: Scalars["String"];
};

/** Represents a single category of products. Categories allow to organize products in a tree-hierarchies which can be used for navigation in the storefront. */
export type ICategoryPrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars["String"]>>;
};

/** Represents a single category of products. Categories allow to organize products in a tree-hierarchies which can be used for navigation in the storefront. */
export type ICategoryProductsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  channel?: InputMaybe<Scalars["String"]>;
  filter?: InputMaybe<IProductFilterInput>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  sortBy?: InputMaybe<IProductOrder>;
  where?: InputMaybe<IProductWhereInput>;
};

/** Represents a single category of products. Categories allow to organize products in a tree-hierarchies which can be used for navigation in the storefront. */
export type ICategoryTranslationArgs = {
  languageCode: ILanguageCodeEnum;
};

/**
 * Deletes categories.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type ICategoryBulkDelete = {
  __typename?: "CategoryBulkDelete";
  /** Returns how many objects were affected. */
  count: Scalars["Int"];
  errors: Array<IProductError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<IProductError>;
};

export type ICategoryCountableConnection = {
  __typename?: "CategoryCountableConnection";
  edges: Array<ICategoryCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: IPageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars["Int"]>;
};

export type ICategoryCountableEdge = {
  __typename?: "CategoryCountableEdge";
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node: ICategory;
};

/**
 * Creates a new category.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type ICategoryCreate = {
  __typename?: "CategoryCreate";
  category?: Maybe<ICategory>;
  errors: Array<IProductError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<IProductError>;
};

/**
 * Event sent when new category is created.
 *
 * Added in Saleor 3.2.
 */
export type ICategoryCreated = IEvent & {
  __typename?: "CategoryCreated";
  /** The category the event relates to. */
  category?: Maybe<ICategory>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars["DateTime"]>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IIssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<IApp>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars["String"]>;
};

/**
 * Deletes a category.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type ICategoryDelete = {
  __typename?: "CategoryDelete";
  category?: Maybe<ICategory>;
  errors: Array<IProductError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<IProductError>;
};

/**
 * Event sent when category is deleted.
 *
 * Added in Saleor 3.2.
 */
export type ICategoryDeleted = IEvent & {
  __typename?: "CategoryDeleted";
  /** The category the event relates to. */
  category?: Maybe<ICategory>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars["DateTime"]>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IIssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<IApp>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars["String"]>;
};

export type ICategoryFilterInput = {
  ids?: InputMaybe<Array<Scalars["ID"]>>;
  metadata?: InputMaybe<Array<IMetadataFilter>>;
  search?: InputMaybe<Scalars["String"]>;
  slugs?: InputMaybe<Array<Scalars["String"]>>;
};

export type ICategoryInput = {
  /** Background image file. */
  backgroundImage?: InputMaybe<Scalars["Upload"]>;
  /** Alt text for a product media. */
  backgroundImageAlt?: InputMaybe<Scalars["String"]>;
  /**
   * Category description.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  description?: InputMaybe<Scalars["JSONString"]>;
  /**
   * Fields required to update the category metadata.
   *
   * Added in Saleor 3.8.
   */
  metadata?: InputMaybe<Array<IMetadataInput>>;
  /** Category name. */
  name?: InputMaybe<Scalars["String"]>;
  /**
   * Fields required to update the category private metadata.
   *
   * Added in Saleor 3.8.
   */
  privateMetadata?: InputMaybe<Array<IMetadataInput>>;
  /** Search engine optimization fields. */
  seo?: InputMaybe<ISeoInput>;
  /** Category slug. */
  slug?: InputMaybe<Scalars["String"]>;
};

export type ICategorySortField =
  /** Sort categories by name. */
  | "NAME"
  /** Sort categories by product count. */
  | "PRODUCT_COUNT"
  /** Sort categories by subcategory count. */
  | "SUBCATEGORY_COUNT";

export type ICategorySortingInput = {
  /**
   * Specifies the channel in which to sort the data.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Use root-level channel argument instead.
   */
  channel?: InputMaybe<Scalars["String"]>;
  /** Specifies the direction in which to sort categories. */
  direction: IOrderDirection;
  /** Sort categories by the selected field. */
  field: ICategorySortField;
};

export type ICategoryTranslatableContent = INode & {
  __typename?: "CategoryTranslatableContent";
  /**
   * Represents a single category of products.
   * @deprecated This field will be removed in Saleor 4.0. Get model fields from the root level queries.
   */
  category?: Maybe<ICategory>;
  /**
   * Category description to translate.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  description?: Maybe<Scalars["JSONString"]>;
  /**
   * Description of the category.
   *
   * Rich text format. For reference see https://editorjs.io/
   * @deprecated This field will be removed in Saleor 4.0. Use the `description` field instead.
   */
  descriptionJson?: Maybe<Scalars["JSONString"]>;
  /** The ID of the category translatable content. */
  id: Scalars["ID"];
  /** Name of the category translatable content. */
  name: Scalars["String"];
  /** SEO description to translate. */
  seoDescription?: Maybe<Scalars["String"]>;
  /** SEO title to translate. */
  seoTitle?: Maybe<Scalars["String"]>;
  /** Returns translated category fields for the given language code. */
  translation?: Maybe<ICategoryTranslation>;
};

export type ICategoryTranslatableContentTranslationArgs = {
  languageCode: ILanguageCodeEnum;
};

/**
 * Creates/updates translations for a category.
 *
 * Requires one of the following permissions: MANAGE_TRANSLATIONS.
 */
export type ICategoryTranslate = {
  __typename?: "CategoryTranslate";
  category?: Maybe<ICategory>;
  errors: Array<ITranslationError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  translationErrors: Array<ITranslationError>;
};

export type ICategoryTranslation = INode & {
  __typename?: "CategoryTranslation";
  /**
   * Translated description of the category.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  description?: Maybe<Scalars["JSONString"]>;
  /**
   * Translated description of the category.
   *
   * Rich text format. For reference see https://editorjs.io/
   * @deprecated This field will be removed in Saleor 4.0. Use the `description` field instead.
   */
  descriptionJson?: Maybe<Scalars["JSONString"]>;
  /** The ID of the category translation. */
  id: Scalars["ID"];
  /** Translation language. */
  language: ILanguageDisplay;
  /** Translated category name. */
  name?: Maybe<Scalars["String"]>;
  /** Translated SEO description. */
  seoDescription?: Maybe<Scalars["String"]>;
  /** Translated SEO title. */
  seoTitle?: Maybe<Scalars["String"]>;
};

/**
 * Updates a category.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type ICategoryUpdate = {
  __typename?: "CategoryUpdate";
  category?: Maybe<ICategory>;
  errors: Array<IProductError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<IProductError>;
};

/**
 * Event sent when category is updated.
 *
 * Added in Saleor 3.2.
 */
export type ICategoryUpdated = IEvent & {
  __typename?: "CategoryUpdated";
  /** The category the event relates to. */
  category?: Maybe<ICategory>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars["DateTime"]>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IIssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<IApp>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars["String"]>;
};

export type ICategoryWhereInput = {
  /** List of conditions that must be met. */
  AND?: InputMaybe<Array<ICategoryWhereInput>>;
  /** A list of conditions of which at least one must be met. */
  OR?: InputMaybe<Array<ICategoryWhereInput>>;
  ids?: InputMaybe<Array<Scalars["ID"]>>;
  metadata?: InputMaybe<Array<IMetadataFilter>>;
};

/** Represents channel. */
export type IChannel = INode &
  IObjectWithMetadata & {
    __typename?: "Channel";
    /**
     * Shipping methods that are available for the channel.
     *
     * Added in Saleor 3.6.
     */
    availableShippingMethodsPerCountry?: Maybe<
      Array<IShippingMethodsPerCountry>
    >;
    /**
     * Channel-specific checkout settings.
     *
     * Added in Saleor 3.15.
     *
     * Note: this API is currently in Feature Preview and can be subject to changes at later point.
     *
     * Requires one of the following permissions: MANAGE_CHANNELS, MANAGE_CHECKOUTS.
     */
    checkoutSettings: ICheckoutSettings;
    /**
     * List of shippable countries for the channel.
     *
     * Added in Saleor 3.6.
     */
    countries?: Maybe<Array<ICountryDisplay>>;
    /**
     * A currency that is assigned to the channel.
     *
     * Requires one of the following permissions: AUTHENTICATED_APP, AUTHENTICATED_STAFF_USER.
     */
    currencyCode: Scalars["String"];
    /**
     * Default country for the channel. Default country can be used in checkout to determine the stock quantities or calculate taxes when the country was not explicitly provided.
     *
     * Added in Saleor 3.1.
     *
     * Requires one of the following permissions: AUTHENTICATED_APP, AUTHENTICATED_STAFF_USER.
     */
    defaultCountry: ICountryDisplay;
    /**
     * Whether a channel has associated orders.
     *
     * Requires one of the following permissions: MANAGE_CHANNELS.
     */
    hasOrders: Scalars["Boolean"];
    /** The ID of the channel. */
    id: Scalars["ID"];
    /**
     * Whether the channel is active.
     *
     * Requires one of the following permissions: AUTHENTICATED_APP, AUTHENTICATED_STAFF_USER.
     */
    isActive: Scalars["Boolean"];
    /**
     * List of public metadata items. Can be accessed without permissions.
     *
     * Added in Saleor 3.15.
     */
    metadata: Array<IMetadataItem>;
    /**
     * A single key from public metadata.
     *
     * Tip: Use GraphQL aliases to fetch multiple keys.
     *
     * Added in Saleor 3.15.
     */
    metafield?: Maybe<Scalars["String"]>;
    /**
     * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
     *
     * Added in Saleor 3.15.
     */
    metafields?: Maybe<Scalars["Metadata"]>;
    /**
     * Name of the channel.
     *
     * Requires one of the following permissions: AUTHENTICATED_APP, AUTHENTICATED_STAFF_USER.
     */
    name: Scalars["String"];
    /**
     * Channel-specific order settings.
     *
     * Added in Saleor 3.12.
     *
     * Requires one of the following permissions: MANAGE_CHANNELS, MANAGE_ORDERS.
     */
    orderSettings: IOrderSettings;
    /**
     * List of private metadata items. Requires staff permissions to access.
     *
     * Added in Saleor 3.15.
     */
    privateMetadata: Array<IMetadataItem>;
    /**
     * A single key from private metadata. Requires staff permissions to access.
     *
     * Tip: Use GraphQL aliases to fetch multiple keys.
     *
     * Added in Saleor 3.15.
     */
    privateMetafield?: Maybe<Scalars["String"]>;
    /**
     * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
     *
     * Added in Saleor 3.15.
     */
    privateMetafields?: Maybe<Scalars["Metadata"]>;
    /** Slug of the channel. */
    slug: Scalars["String"];
    /**
     * Define the stock setting for this channel.
     *
     * Added in Saleor 3.7.
     *
     * Requires one of the following permissions: AUTHENTICATED_APP, AUTHENTICATED_STAFF_USER.
     */
    stockSettings: IStockSettings;
    /**
     * List of warehouses assigned to this channel.
     *
     * Added in Saleor 3.5.
     *
     * Requires one of the following permissions: AUTHENTICATED_APP, AUTHENTICATED_STAFF_USER.
     */
    warehouses: Array<IWarehouse>;
  };

/** Represents channel. */
export type IChannelAvailableShippingMethodsPerCountryArgs = {
  countries?: InputMaybe<Array<ICountryCode>>;
};

/** Represents channel. */
export type IChannelMetafieldArgs = {
  key: Scalars["String"];
};

/** Represents channel. */
export type IChannelMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars["String"]>>;
};

/** Represents channel. */
export type IChannelPrivateMetafieldArgs = {
  key: Scalars["String"];
};

/** Represents channel. */
export type IChannelPrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars["String"]>>;
};

/**
 * Activate a channel.
 *
 * Requires one of the following permissions: MANAGE_CHANNELS.
 *
 * Triggers the following webhook events:
 * - CHANNEL_STATUS_CHANGED (async): A channel was activated.
 */
export type IChannelActivate = {
  __typename?: "ChannelActivate";
  /** Activated channel. */
  channel?: Maybe<IChannel>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  channelErrors: Array<IChannelError>;
  errors: Array<IChannelError>;
};

/**
 * Creates new channel.
 *
 * Requires one of the following permissions: MANAGE_CHANNELS.
 *
 * Triggers the following webhook events:
 * - CHANNEL_CREATED (async): A channel was created.
 */
export type IChannelCreate = {
  __typename?: "ChannelCreate";
  channel?: Maybe<IChannel>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  channelErrors: Array<IChannelError>;
  errors: Array<IChannelError>;
};

export type IChannelCreateInput = {
  /** List of shipping zones to assign to the channel. */
  addShippingZones?: InputMaybe<Array<Scalars["ID"]>>;
  /**
   * List of warehouses to assign to the channel.
   *
   * Added in Saleor 3.5.
   */
  addWarehouses?: InputMaybe<Array<Scalars["ID"]>>;
  /**
   * The channel checkout settings
   *
   * Added in Saleor 3.15.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  checkoutSettings?: InputMaybe<ICheckoutSettingsInput>;
  /** Currency of the channel. */
  currencyCode: Scalars["String"];
  /**
   * Default country for the channel. Default country can be used in checkout to determine the stock quantities or calculate taxes when the country was not explicitly provided.
   *
   * Added in Saleor 3.1.
   */
  defaultCountry: ICountryCode;
  /** Determine if channel will be set active or not. */
  isActive?: InputMaybe<Scalars["Boolean"]>;
  /**
   * Channel public metadata.
   *
   * Added in Saleor 3.15.
   */
  metadata?: InputMaybe<Array<IMetadataInput>>;
  /** Name of the channel. */
  name: Scalars["String"];
  /**
   * The channel order settings
   *
   * Added in Saleor 3.12.
   */
  orderSettings?: InputMaybe<IOrderSettingsInput>;
  /**
   * Channel private metadata.
   *
   * Added in Saleor 3.15.
   */
  privateMetadata?: InputMaybe<Array<IMetadataInput>>;
  /** Slug of the channel. */
  slug: Scalars["String"];
  /**
   * The channel stock settings.
   *
   * Added in Saleor 3.7.
   */
  stockSettings?: InputMaybe<IStockSettingsInput>;
};

/**
 * Event sent when new channel is created.
 *
 * Added in Saleor 3.2.
 */
export type IChannelCreated = IEvent & {
  __typename?: "ChannelCreated";
  /** The channel the event relates to. */
  channel?: Maybe<IChannel>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars["DateTime"]>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IIssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<IApp>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars["String"]>;
};

/**
 * Deactivate a channel.
 *
 * Requires one of the following permissions: MANAGE_CHANNELS.
 *
 * Triggers the following webhook events:
 * - CHANNEL_STATUS_CHANGED (async): A channel was deactivated.
 */
export type IChannelDeactivate = {
  __typename?: "ChannelDeactivate";
  /** Deactivated channel. */
  channel?: Maybe<IChannel>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  channelErrors: Array<IChannelError>;
  errors: Array<IChannelError>;
};

/**
 * Delete a channel. Orders associated with the deleted channel will be moved to the target channel. Checkouts, product availability, and pricing will be removed.
 *
 * Requires one of the following permissions: MANAGE_CHANNELS.
 *
 * Triggers the following webhook events:
 * - CHANNEL_DELETED (async): A channel was deleted.
 */
export type IChannelDelete = {
  __typename?: "ChannelDelete";
  channel?: Maybe<IChannel>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  channelErrors: Array<IChannelError>;
  errors: Array<IChannelError>;
};

export type IChannelDeleteInput = {
  /** ID of channel to migrate orders from origin channel. */
  channelId: Scalars["ID"];
};

/**
 * Event sent when channel is deleted.
 *
 * Added in Saleor 3.2.
 */
export type IChannelDeleted = IEvent & {
  __typename?: "ChannelDeleted";
  /** The channel the event relates to. */
  channel?: Maybe<IChannel>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars["DateTime"]>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IIssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<IApp>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars["String"]>;
};

export type IChannelError = {
  __typename?: "ChannelError";
  /** The error code. */
  code: IChannelErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars["String"]>;
  /** The error message. */
  message?: Maybe<Scalars["String"]>;
  /** List of shipping zone IDs which causes the error. */
  shippingZones?: Maybe<Array<Scalars["ID"]>>;
  /** List of warehouses IDs which causes the error. */
  warehouses?: Maybe<Array<Scalars["ID"]>>;
};

/** An enumeration. */
export type IChannelErrorCode =
  | "ALREADY_EXISTS"
  | "CHANNELS_CURRENCY_MUST_BE_THE_SAME"
  | "CHANNEL_WITH_ORDERS"
  | "DUPLICATED_INPUT_ITEM"
  | "GRAPHQL_ERROR"
  | "INVALID"
  | "NOT_FOUND"
  | "REQUIRED"
  | "UNIQUE";

export type IChannelListingUpdateInput = {
  /** ID of a channel listing. */
  channelListing: Scalars["ID"];
  /** Cost price of the variant in channel. */
  costPrice?: InputMaybe<Scalars["PositiveDecimal"]>;
  /** The threshold for preorder variant in channel. */
  preorderThreshold?: InputMaybe<Scalars["Int"]>;
  /** Price of the particular variant in channel. */
  price?: InputMaybe<Scalars["PositiveDecimal"]>;
};

/**
 * Event sent when channel metadata is updated.
 *
 * Added in Saleor 3.15.
 */
export type IChannelMetadataUpdated = IEvent & {
  __typename?: "ChannelMetadataUpdated";
  /** The channel the event relates to. */
  channel?: Maybe<IChannel>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars["DateTime"]>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IIssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<IApp>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars["String"]>;
};

/**
 * Reorder the warehouses of a channel.
 *
 * Added in Saleor 3.7.
 *
 * Requires one of the following permissions: MANAGE_CHANNELS.
 */
export type IChannelReorderWarehouses = {
  __typename?: "ChannelReorderWarehouses";
  /** Channel within the warehouses are reordered. */
  channel?: Maybe<IChannel>;
  errors: Array<IChannelError>;
};

/**
 * Event sent when channel status has changed.
 *
 * Added in Saleor 3.2.
 */
export type IChannelStatusChanged = IEvent & {
  __typename?: "ChannelStatusChanged";
  /** The channel the event relates to. */
  channel?: Maybe<IChannel>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars["DateTime"]>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IIssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<IApp>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars["String"]>;
};

/**
 * Update a channel.
 *
 * Requires one of the following permissions: MANAGE_CHANNELS.
 * Requires one of the following permissions when updating only `orderSettings` field: MANAGE_CHANNELS, MANAGE_ORDERS.Requires one of the following permissions when updating only `checkoutSettings` field: MANAGE_CHANNELS, MANAGE_CHECKOUTS.
 *
 * Triggers the following webhook events:
 * - CHANNEL_UPDATED (async): A channel was updated.
 * - CHANNEL_METADATA_UPDATED (async): Optionally triggered when public or private metadata is updated.
 */
export type IChannelUpdate = {
  __typename?: "ChannelUpdate";
  channel?: Maybe<IChannel>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  channelErrors: Array<IChannelError>;
  errors: Array<IChannelError>;
};

export type IChannelUpdateInput = {
  /** List of shipping zones to assign to the channel. */
  addShippingZones?: InputMaybe<Array<Scalars["ID"]>>;
  /**
   * List of warehouses to assign to the channel.
   *
   * Added in Saleor 3.5.
   */
  addWarehouses?: InputMaybe<Array<Scalars["ID"]>>;
  /**
   * The channel checkout settings
   *
   * Added in Saleor 3.15.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  checkoutSettings?: InputMaybe<ICheckoutSettingsInput>;
  /**
   * Default country for the channel. Default country can be used in checkout to determine the stock quantities or calculate taxes when the country was not explicitly provided.
   *
   * Added in Saleor 3.1.
   */
  defaultCountry?: InputMaybe<ICountryCode>;
  /** Determine if channel will be set active or not. */
  isActive?: InputMaybe<Scalars["Boolean"]>;
  /**
   * Channel public metadata.
   *
   * Added in Saleor 3.15.
   */
  metadata?: InputMaybe<Array<IMetadataInput>>;
  /** Name of the channel. */
  name?: InputMaybe<Scalars["String"]>;
  /**
   * The channel order settings
   *
   * Added in Saleor 3.12.
   */
  orderSettings?: InputMaybe<IOrderSettingsInput>;
  /**
   * Channel private metadata.
   *
   * Added in Saleor 3.15.
   */
  privateMetadata?: InputMaybe<Array<IMetadataInput>>;
  /** List of shipping zones to unassign from the channel. */
  removeShippingZones?: InputMaybe<Array<Scalars["ID"]>>;
  /**
   * List of warehouses to unassign from the channel.
   *
   * Added in Saleor 3.5.
   */
  removeWarehouses?: InputMaybe<Array<Scalars["ID"]>>;
  /** Slug of the channel. */
  slug?: InputMaybe<Scalars["String"]>;
  /**
   * The channel stock settings.
   *
   * Added in Saleor 3.7.
   */
  stockSettings?: InputMaybe<IStockSettingsInput>;
};

/**
 * Event sent when channel is updated.
 *
 * Added in Saleor 3.2.
 */
export type IChannelUpdated = IEvent & {
  __typename?: "ChannelUpdated";
  /** The channel the event relates to. */
  channel?: Maybe<IChannel>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars["DateTime"]>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IIssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<IApp>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars["String"]>;
};

/** Checkout object. */
export type ICheckout = INode &
  IObjectWithMetadata & {
    __typename?: "Checkout";
    /**
     * The authorize status of the checkout.
     *
     * Added in Saleor 3.13.
     *
     * Note: this API is currently in Feature Preview and can be subject to changes at later point.
     *
     * Triggers the following webhook events:
     * - CHECKOUT_CALCULATE_TAXES (sync): Optionally triggered when checkout prices are expired.
     */
    authorizeStatus: ICheckoutAuthorizeStatusEnum;
    /**
     * Collection points that can be used for this order.
     *
     * Added in Saleor 3.1.
     */
    availableCollectionPoints: Array<IWarehouse>;
    /**
     * List of available payment gateways.
     *
     * Triggers the following webhook events:
     * - PAYMENT_LIST_GATEWAYS (sync): Fetch payment gateways available for checkout.
     */
    availablePaymentGateways: Array<IPaymentGateway>;
    /**
     * Shipping methods that can be used with this checkout.
     *
     * Triggers the following webhook events:
     * - SHIPPING_LIST_METHODS_FOR_CHECKOUT (sync): Optionally triggered when cached external shipping methods are invalid.
     * - CHECKOUT_FILTER_SHIPPING_METHODS (sync): Optionally triggered when cached filtered shipping methods are invalid.
     * @deprecated This field will be removed in Saleor 4.0. Use `shippingMethods` instead.
     */
    availableShippingMethods: Array<IShippingMethod>;
    /** The billing address of the checkout. */
    billingAddress?: Maybe<IAddress>;
    /** The channel for which checkout was created. */
    channel: IChannel;
    /**
     * The charge status of the checkout.
     *
     * Added in Saleor 3.13.
     *
     * Note: this API is currently in Feature Preview and can be subject to changes at later point.
     *
     * Triggers the following webhook events:
     * - CHECKOUT_CALCULATE_TAXES (sync): Optionally triggered when checkout prices are expired.
     */
    chargeStatus: ICheckoutChargeStatusEnum;
    /** The date and time when the checkout was created. */
    created: Scalars["DateTime"];
    /**
     * The delivery method selected for this checkout.
     *
     * Added in Saleor 3.1.
     *
     * Triggers the following webhook events:
     * - SHIPPING_LIST_METHODS_FOR_CHECKOUT (sync): Optionally triggered when cached external shipping methods are invalid.
     * - CHECKOUT_FILTER_SHIPPING_METHODS (sync): Optionally triggered when cached filtered shipping methods are invalid.
     */
    deliveryMethod?: Maybe<IDeliveryMethod>;
    /** The total discount applied to the checkout. Note: Only discount created via voucher are included in this field. */
    discount?: Maybe<IMoney>;
    /** The name of voucher assigned to the checkout. */
    discountName?: Maybe<Scalars["String"]>;
    /**
     * Determines whether checkout prices should include taxes when displayed in a storefront.
     *
     * Added in Saleor 3.9.
     */
    displayGrossPrices: Scalars["Boolean"];
    /** Email of a customer. */
    email?: Maybe<Scalars["String"]>;
    /** List of gift cards associated with this checkout. */
    giftCards: Array<IGiftCard>;
    /** The ID of the checkout. */
    id: Scalars["ID"];
    /** Returns True, if checkout requires shipping. */
    isShippingRequired: Scalars["Boolean"];
    /** Checkout language code. */
    languageCode: ILanguageCodeEnum;
    /** @deprecated This field will be removed in Saleor 4.0. Use `updatedAt` instead. */
    lastChange: Scalars["DateTime"];
    /** A list of checkout lines, each containing information about an item in the checkout. */
    lines: Array<ICheckoutLine>;
    /** List of public metadata items. Can be accessed without permissions. */
    metadata: Array<IMetadataItem>;
    /**
     * A single key from public metadata.
     *
     * Tip: Use GraphQL aliases to fetch multiple keys.
     *
     * Added in Saleor 3.3.
     */
    metafield?: Maybe<Scalars["String"]>;
    /**
     * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
     *
     * Added in Saleor 3.3.
     */
    metafields?: Maybe<Scalars["Metadata"]>;
    /** The note for the checkout. */
    note: Scalars["String"];
    /** List of private metadata items. Requires staff permissions to access. */
    privateMetadata: Array<IMetadataItem>;
    /**
     * A single key from private metadata. Requires staff permissions to access.
     *
     * Tip: Use GraphQL aliases to fetch multiple keys.
     *
     * Added in Saleor 3.3.
     */
    privateMetafield?: Maybe<Scalars["String"]>;
    /**
     * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
     *
     * Added in Saleor 3.3.
     */
    privateMetafields?: Maybe<Scalars["Metadata"]>;
    /**
     * List of problems with the checkout.
     *
     * Added in Saleor 3.15.
     *
     * Note: this API is currently in Feature Preview and can be subject to changes at later point.
     */
    problems?: Maybe<Array<ICheckoutProblem>>;
    /** The number of items purchased. */
    quantity: Scalars["Int"];
    /** The shipping address of the checkout. */
    shippingAddress?: Maybe<IAddress>;
    /**
     * The shipping method related with checkout.
     *
     * Triggers the following webhook events:
     * - SHIPPING_LIST_METHODS_FOR_CHECKOUT (sync): Optionally triggered when cached external shipping methods are invalid.
     * - CHECKOUT_FILTER_SHIPPING_METHODS (sync): Optionally triggered when cached filtered shipping methods are invalid.
     * @deprecated This field will be removed in Saleor 4.0. Use `deliveryMethod` instead.
     */
    shippingMethod?: Maybe<IShippingMethod>;
    /**
     * Shipping methods that can be used with this checkout.
     *
     * Triggers the following webhook events:
     * - SHIPPING_LIST_METHODS_FOR_CHECKOUT (sync): Optionally triggered when cached external shipping methods are invalid.
     * - CHECKOUT_FILTER_SHIPPING_METHODS (sync): Optionally triggered when cached filtered shipping methods are invalid.
     */
    shippingMethods: Array<IShippingMethod>;
    /**
     * The price of the shipping, with all the taxes included. Set to 0 when no delivery method is selected.
     *
     * Triggers the following webhook events:
     * - CHECKOUT_CALCULATE_TAXES (sync): Optionally triggered when checkout prices are expired.
     */
    shippingPrice: ITaxedMoney;
    /**
     * Date when oldest stock reservation for this checkout expires or null if no stock is reserved.
     *
     * Added in Saleor 3.1.
     */
    stockReservationExpires?: Maybe<Scalars["DateTime"]>;
    /**
     * List of user's stored payment methods that can be used in this checkout session. It uses the channel that the checkout was created in. When `amount` is not provided, `checkout.total` will be used as a default value.
     *
     * Added in Saleor 3.15.
     *
     * Note: this API is currently in Feature Preview and can be subject to changes at later point.
     */
    storedPaymentMethods?: Maybe<Array<IStoredPaymentMethod>>;
    /**
     * The price of the checkout before shipping, with taxes included.
     *
     * Triggers the following webhook events:
     * - CHECKOUT_CALCULATE_TAXES (sync): Optionally triggered when checkout prices are expired.
     */
    subtotalPrice: ITaxedMoney;
    /**
     * Returns True if checkout has to be exempt from taxes.
     *
     * Added in Saleor 3.8.
     */
    taxExemption: Scalars["Boolean"];
    /** The checkout's token. */
    token: Scalars["UUID"];
    /**
     * The difference between the paid and the checkout total amount.
     *
     * Added in Saleor 3.13.
     *
     * Note: this API is currently in Feature Preview and can be subject to changes at later point.
     *
     * Triggers the following webhook events:
     * - CHECKOUT_CALCULATE_TAXES (sync): Optionally triggered when checkout prices are expired.
     */
    totalBalance: IMoney;
    /**
     * The sum of the the checkout line prices, with all the taxes,shipping costs, and discounts included.
     *
     * Triggers the following webhook events:
     * - CHECKOUT_CALCULATE_TAXES (sync): Optionally triggered when checkout prices are expired.
     */
    totalPrice: ITaxedMoney;
    /**
     * List of transactions for the checkout. Requires one of the following permissions: MANAGE_CHECKOUTS, HANDLE_PAYMENTS.
     *
     * Added in Saleor 3.4.
     *
     * Note: this API is currently in Feature Preview and can be subject to changes at later point.
     */
    transactions?: Maybe<Array<ITransactionItem>>;
    /** Translation of the discountName field in the language set in Checkout.languageCode field.Note: this field is set automatically when Checkout.languageCode is defined; otherwise it's null */
    translatedDiscountName?: Maybe<Scalars["String"]>;
    /**
     * Time of last modification of the given checkout.
     *
     * Added in Saleor 3.13.
     */
    updatedAt: Scalars["DateTime"];
    /** The user assigned to the checkout. */
    user?: Maybe<IUser>;
    /** The code of voucher assigned to the checkout. */
    voucherCode?: Maybe<Scalars["String"]>;
  };

/** Checkout object. */
export type ICheckoutMetafieldArgs = {
  key: Scalars["String"];
};

/** Checkout object. */
export type ICheckoutMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars["String"]>>;
};

/** Checkout object. */
export type ICheckoutPrivateMetafieldArgs = {
  key: Scalars["String"];
};

/** Checkout object. */
export type ICheckoutPrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars["String"]>>;
};

/** Checkout object. */
export type ICheckoutStoredPaymentMethodsArgs = {
  amount?: InputMaybe<Scalars["PositiveDecimal"]>;
};

/**
 * Adds a gift card or a voucher to a checkout.
 *
 * Triggers the following webhook events:
 * - CHECKOUT_UPDATED (async): A checkout was updated.
 */
export type ICheckoutAddPromoCode = {
  __typename?: "CheckoutAddPromoCode";
  /** The checkout with the added gift card or voucher. */
  checkout?: Maybe<ICheckout>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  checkoutErrors: Array<ICheckoutError>;
  errors: Array<ICheckoutError>;
};

export type ICheckoutAddressValidationRules = {
  /** Determines if an error should be raised when the provided address doesn't match the expected format. Example: using letters for postal code when the numbers are expected. */
  checkFieldsFormat?: InputMaybe<Scalars["Boolean"]>;
  /** Determines if an error should be raised when the provided address doesn't have all the required fields. The list of required fields is dynamic and depends on the country code (use the `addressValidationRules` query to fetch them). Note: country code is mandatory for all addresses regardless of the rules provided in this input. */
  checkRequiredFields?: InputMaybe<Scalars["Boolean"]>;
  /** Determines if Saleor should apply normalization on address fields. Example: converting city field to uppercase letters. */
  enableFieldsNormalization?: InputMaybe<Scalars["Boolean"]>;
};

/**
 * Determine a current authorize status for checkout.
 *
 *     We treat the checkout as fully authorized when the sum of authorized and charged
 *     funds cover the checkout.total.
 *     We treat the checkout as partially authorized when the sum of authorized and charged
 *     funds covers only part of the checkout.total
 *     We treat the checkout as not authorized when the sum of authorized and charged funds
 *     is 0.
 *
 *     NONE - the funds are not authorized
 *     PARTIAL - the cover funds don't cover fully the checkout's total
 *     FULL - the cover funds covers the checkout's total
 *
 */
export type ICheckoutAuthorizeStatusEnum = "FULL" | "NONE" | "PARTIAL";

/**
 * Update billing address in the existing checkout.
 *
 * Triggers the following webhook events:
 * - CHECKOUT_UPDATED (async): A checkout was updated.
 */
export type ICheckoutBillingAddressUpdate = {
  __typename?: "CheckoutBillingAddressUpdate";
  /** An updated checkout. */
  checkout?: Maybe<ICheckout>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  checkoutErrors: Array<ICheckoutError>;
  errors: Array<ICheckoutError>;
};

/**
 * Determine the current charge status for the checkout.
 *
 *     The checkout is considered overcharged when the sum of the transactionItem's charge
 *     amounts exceeds the value of `checkout.total`.
 *     If the sum of the transactionItem's charge amounts equals
 *     `checkout.total`, we consider the checkout to be fully charged.
 *     If the sum of the transactionItem's charge amounts covers a part of the
 *     `checkout.total`, we treat the checkout as partially charged.
 *
 *
 *     NONE - the funds are not charged.
 *     PARTIAL - the funds that are charged don't cover the checkout's total
 *     FULL - the funds that are charged fully cover the checkout's total
 *     OVERCHARGED - the charged funds are bigger than checkout's total
 *
 */
export type ICheckoutChargeStatusEnum =
  | "FULL"
  | "NONE"
  | "OVERCHARGED"
  | "PARTIAL";

/**
 * Completes the checkout. As a result a new order is created. The mutation allows to create the unpaid order when setting `orderSettings.allowUnpaidOrders` for given `Channel` is set to `true`. When `orderSettings.allowUnpaidOrders` is set to `false`, checkout can be completed only when attached `Payment`/`TransactionItem`s fully cover the checkout's total. When processing the checkout with `Payment`, in case of required additional confirmation step like 3D secure, the `confirmationNeeded` flag will be set to True and no order will be created until payment is confirmed with second call of this mutation.
 *
 * Triggers the following webhook events:
 * - SHIPPING_LIST_METHODS_FOR_CHECKOUT (sync): Optionally triggered when cached external shipping methods are invalid.
 * - CHECKOUT_FILTER_SHIPPING_METHODS (sync): Optionally triggered when cached filtered shipping methods are invalid.
 * - CHECKOUT_CALCULATE_TAXES (sync): Optionally triggered when checkout prices are expired.
 * - ORDER_CREATED (async): Triggered when order is created.
 * - NOTIFY_USER (async): A notification for order placement.
 * - NOTIFY_USER (async): A staff notification for order placement.
 * - ORDER_UPDATED (async): Triggered when order received the update after placement.
 * - ORDER_PAID (async): Triggered when newly created order is paid.
 * - ORDER_FULLY_PAID (async): Triggered when newly created order is fully paid.
 * - ORDER_CONFIRMED (async): Optionally triggered when newly created order are automatically marked as confirmed.
 */
export type ICheckoutComplete = {
  __typename?: "CheckoutComplete";
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  checkoutErrors: Array<ICheckoutError>;
  /** Confirmation data used to process additional authorization steps. */
  confirmationData?: Maybe<Scalars["JSONString"]>;
  /** Set to true if payment needs to be confirmed before checkout is complete. */
  confirmationNeeded: Scalars["Boolean"];
  errors: Array<ICheckoutError>;
  /** Placed order. */
  order?: Maybe<IOrder>;
};

export type ICheckoutCountableConnection = {
  __typename?: "CheckoutCountableConnection";
  edges: Array<ICheckoutCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: IPageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars["Int"]>;
};

export type ICheckoutCountableEdge = {
  __typename?: "CheckoutCountableEdge";
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node: ICheckout;
};

/**
 * Create a new checkout.
 *
 * Triggers the following webhook events:
 * - CHECKOUT_CREATED (async): A checkout was created.
 */
export type ICheckoutCreate = {
  __typename?: "CheckoutCreate";
  checkout?: Maybe<ICheckout>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  checkoutErrors: Array<ICheckoutError>;
  /**
   * Whether the checkout was created or the current active one was returned. Refer to checkoutLinesAdd and checkoutLinesUpdate to merge a cart with an active checkout.
   * @deprecated This field will be removed in Saleor 4.0. Always returns `true`.
   */
  created?: Maybe<Scalars["Boolean"]>;
  errors: Array<ICheckoutError>;
};

/**
 * Create new checkout from existing order.
 *
 * Added in Saleor 3.14.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type ICheckoutCreateFromOrder = {
  __typename?: "CheckoutCreateFromOrder";
  /** Created checkout. */
  checkout?: Maybe<ICheckout>;
  errors: Array<ICheckoutCreateFromOrderError>;
  /** Variants that were not attached to the checkout. */
  unavailableVariants?: Maybe<
    Array<ICheckoutCreateFromOrderUnavailableVariant>
  >;
};

export type ICheckoutCreateFromOrderError = {
  __typename?: "CheckoutCreateFromOrderError";
  /** The error code. */
  code: ICheckoutCreateFromOrderErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars["String"]>;
  /** The error message. */
  message?: Maybe<Scalars["String"]>;
};

/** An enumeration. */
export type ICheckoutCreateFromOrderErrorCode =
  | "CHANNEL_INACTIVE"
  | "GRAPHQL_ERROR"
  | "INVALID"
  | "ORDER_NOT_FOUND"
  | "TAX_ERROR";

export type ICheckoutCreateFromOrderUnavailableVariant = {
  __typename?: "CheckoutCreateFromOrderUnavailableVariant";
  /** The error code. */
  code: ICheckoutCreateFromOrderUnavailableVariantErrorCode;
  /** Order line ID that is unavailable. */
  lineId: Scalars["ID"];
  /** The error message. */
  message: Scalars["String"];
  /** Variant ID that is unavailable. */
  variantId: Scalars["ID"];
};

/** An enumeration. */
export type ICheckoutCreateFromOrderUnavailableVariantErrorCode =
  | "INSUFFICIENT_STOCK"
  | "NOT_FOUND"
  | "PRODUCT_NOT_PUBLISHED"
  | "PRODUCT_UNAVAILABLE_FOR_PURCHASE"
  | "QUANTITY_GREATER_THAN_LIMIT"
  | "UNAVAILABLE_VARIANT_IN_CHANNEL";

export type ICheckoutCreateInput = {
  /** Billing address of the customer. */
  billingAddress?: InputMaybe<IAddressInput>;
  /** Slug of a channel in which to create a checkout. */
  channel?: InputMaybe<Scalars["String"]>;
  /** The customer's email address. */
  email?: InputMaybe<Scalars["String"]>;
  /** Checkout language code. */
  languageCode?: InputMaybe<ILanguageCodeEnum>;
  /** A list of checkout lines, each containing information about an item in the checkout. */
  lines: Array<ICheckoutLineInput>;
  /** The mailing address to where the checkout will be shipped. Note: the address will be ignored if the checkout doesn't contain shippable items. */
  shippingAddress?: InputMaybe<IAddressInput>;
  /**
   * The checkout validation rules that can be changed.
   *
   * Added in Saleor 3.5.
   */
  validationRules?: InputMaybe<ICheckoutValidationRules>;
};

/**
 * Event sent when new checkout is created.
 *
 * Added in Saleor 3.2.
 */
export type ICheckoutCreated = IEvent & {
  __typename?: "CheckoutCreated";
  /** The checkout the event relates to. */
  checkout?: Maybe<ICheckout>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars["DateTime"]>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IIssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<IApp>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars["String"]>;
};

/**
 * Sets the customer as the owner of the checkout.
 *
 * Requires one of the following permissions: AUTHENTICATED_APP, AUTHENTICATED_USER.
 *
 * Triggers the following webhook events:
 * - CHECKOUT_UPDATED (async): A checkout was updated.
 */
export type ICheckoutCustomerAttach = {
  __typename?: "CheckoutCustomerAttach";
  /** An updated checkout. */
  checkout?: Maybe<ICheckout>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  checkoutErrors: Array<ICheckoutError>;
  errors: Array<ICheckoutError>;
};

/**
 * Removes the user assigned as the owner of the checkout.
 *
 * Requires one of the following permissions: AUTHENTICATED_APP, AUTHENTICATED_USER.
 *
 * Triggers the following webhook events:
 * - CHECKOUT_UPDATED (async): A checkout was updated.
 */
export type ICheckoutCustomerDetach = {
  __typename?: "CheckoutCustomerDetach";
  /** An updated checkout. */
  checkout?: Maybe<ICheckout>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  checkoutErrors: Array<ICheckoutError>;
  errors: Array<ICheckoutError>;
};

/**
 * Updates the delivery method (shipping method or pick up point) of the checkout.
 *
 * Added in Saleor 3.1.
 *
 * Triggers the following webhook events:
 * - SHIPPING_LIST_METHODS_FOR_CHECKOUT (sync): Triggered when updating the checkout delivery method with the external one.
 * - CHECKOUT_UPDATED (async): A checkout was updated.
 */
export type ICheckoutDeliveryMethodUpdate = {
  __typename?: "CheckoutDeliveryMethodUpdate";
  /** An updated checkout. */
  checkout?: Maybe<ICheckout>;
  errors: Array<ICheckoutError>;
};

/**
 * Updates email address in the existing checkout object.
 *
 * Triggers the following webhook events:
 * - CHECKOUT_UPDATED (async): A checkout was updated.
 */
export type ICheckoutEmailUpdate = {
  __typename?: "CheckoutEmailUpdate";
  /** An updated checkout. */
  checkout?: Maybe<ICheckout>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  checkoutErrors: Array<ICheckoutError>;
  errors: Array<ICheckoutError>;
};

export type ICheckoutError = {
  __typename?: "CheckoutError";
  /** A type of address that causes the error. */
  addressType?: Maybe<IAddressTypeEnum>;
  /** The error code. */
  code: ICheckoutErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars["String"]>;
  /** List of line Ids which cause the error. */
  lines?: Maybe<Array<Scalars["ID"]>>;
  /** The error message. */
  message?: Maybe<Scalars["String"]>;
  /** List of varint IDs which causes the error. */
  variants?: Maybe<Array<Scalars["ID"]>>;
};

/** An enumeration. */
export type ICheckoutErrorCode =
  | "BILLING_ADDRESS_NOT_SET"
  | "CHANNEL_INACTIVE"
  | "CHECKOUT_NOT_FULLY_PAID"
  | "DELIVERY_METHOD_NOT_APPLICABLE"
  | "EMAIL_NOT_SET"
  | "GIFT_CARD_NOT_APPLICABLE"
  | "GRAPHQL_ERROR"
  | "INACTIVE_PAYMENT"
  | "INSUFFICIENT_STOCK"
  | "INVALID"
  | "INVALID_SHIPPING_METHOD"
  | "MISSING_CHANNEL_SLUG"
  | "NOT_FOUND"
  | "NO_LINES"
  | "PAYMENT_ERROR"
  | "PRODUCT_NOT_PUBLISHED"
  | "PRODUCT_UNAVAILABLE_FOR_PURCHASE"
  | "QUANTITY_GREATER_THAN_LIMIT"
  | "REQUIRED"
  | "SHIPPING_ADDRESS_NOT_SET"
  | "SHIPPING_METHOD_NOT_APPLICABLE"
  | "SHIPPING_METHOD_NOT_SET"
  | "SHIPPING_NOT_REQUIRED"
  | "TAX_ERROR"
  | "UNAVAILABLE_VARIANT_IN_CHANNEL"
  | "UNIQUE"
  | "VOUCHER_NOT_APPLICABLE"
  | "ZERO_QUANTITY";

export type ICheckoutFilterInput = {
  authorizeStatus?: InputMaybe<Array<ICheckoutAuthorizeStatusEnum>>;
  channels?: InputMaybe<Array<Scalars["ID"]>>;
  chargeStatus?: InputMaybe<Array<ICheckoutChargeStatusEnum>>;
  created?: InputMaybe<IDateRangeInput>;
  customer?: InputMaybe<Scalars["String"]>;
  metadata?: InputMaybe<Array<IMetadataFilter>>;
  search?: InputMaybe<Scalars["String"]>;
  updatedAt?: InputMaybe<IDateRangeInput>;
};

/**
 * Filter shipping methods for checkout.
 *
 * Added in Saleor 3.6.
 */
export type ICheckoutFilterShippingMethods = IEvent & {
  __typename?: "CheckoutFilterShippingMethods";
  /** The checkout the event relates to. */
  checkout?: Maybe<ICheckout>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars["DateTime"]>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IIssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<IApp>;
  /**
   * Shipping methods that can be used with this checkout.
   *
   * Added in Saleor 3.6.
   */
  shippingMethods?: Maybe<Array<IShippingMethod>>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars["String"]>;
};

/**
 * Event sent when checkout is fully paid with transactions.
 *
 * Added in Saleor 3.13.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type ICheckoutFullyPaid = IEvent & {
  __typename?: "CheckoutFullyPaid";
  /** The checkout the event relates to. */
  checkout?: Maybe<ICheckout>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars["DateTime"]>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IIssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<IApp>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars["String"]>;
};

/**
 * Update language code in the existing checkout.
 *
 * Triggers the following webhook events:
 * - CHECKOUT_UPDATED (async): A checkout was updated.
 */
export type ICheckoutLanguageCodeUpdate = {
  __typename?: "CheckoutLanguageCodeUpdate";
  /** An updated checkout. */
  checkout?: Maybe<ICheckout>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  checkoutErrors: Array<ICheckoutError>;
  errors: Array<ICheckoutError>;
};

/** Represents an item in the checkout. */
export type ICheckoutLine = INode &
  IObjectWithMetadata & {
    __typename?: "CheckoutLine";
    /** The ID of the checkout line. */
    id: Scalars["ID"];
    /**
     * List of public metadata items. Can be accessed without permissions.
     *
     * Added in Saleor 3.5.
     */
    metadata: Array<IMetadataItem>;
    /**
     * A single key from public metadata.
     *
     * Tip: Use GraphQL aliases to fetch multiple keys.
     *
     * Added in Saleor 3.5.
     */
    metafield?: Maybe<Scalars["String"]>;
    /**
     * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
     *
     * Added in Saleor 3.5.
     */
    metafields?: Maybe<Scalars["Metadata"]>;
    /**
     * List of private metadata items. Requires staff permissions to access.
     *
     * Added in Saleor 3.5.
     */
    privateMetadata: Array<IMetadataItem>;
    /**
     * A single key from private metadata. Requires staff permissions to access.
     *
     * Tip: Use GraphQL aliases to fetch multiple keys.
     *
     * Added in Saleor 3.5.
     */
    privateMetafield?: Maybe<Scalars["String"]>;
    /**
     * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
     *
     * Added in Saleor 3.5.
     */
    privateMetafields?: Maybe<Scalars["Metadata"]>;
    /**
     * List of problems with the checkout line.
     *
     * Added in Saleor 3.15.
     *
     * Note: this API is currently in Feature Preview and can be subject to changes at later point.
     */
    problems?: Maybe<Array<ICheckoutLineProblem>>;
    /** The quantity of product variant assigned to the checkout line. */
    quantity: Scalars["Int"];
    /** Indicates whether the item need to be delivered. */
    requiresShipping: Scalars["Boolean"];
    /**
     * The sum of the checkout line price, taxes and discounts.
     *
     * Triggers the following webhook events:
     * - CHECKOUT_CALCULATE_TAXES (sync): Optionally triggered when checkout prices are expired.
     */
    totalPrice: ITaxedMoney;
    /** The sum of the checkout line price, without discounts. */
    undiscountedTotalPrice: IMoney;
    /** The unit price of the checkout line, without discounts. */
    undiscountedUnitPrice: IMoney;
    /**
     * The unit price of the checkout line, with taxes and discounts.
     *
     * Triggers the following webhook events:
     * - CHECKOUT_CALCULATE_TAXES (sync): Optionally triggered when checkout prices are expired.
     */
    unitPrice: ITaxedMoney;
    /** The product variant from which the checkout line was created. */
    variant: IProductVariant;
  };

/** Represents an item in the checkout. */
export type ICheckoutLineMetafieldArgs = {
  key: Scalars["String"];
};

/** Represents an item in the checkout. */
export type ICheckoutLineMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars["String"]>>;
};

/** Represents an item in the checkout. */
export type ICheckoutLinePrivateMetafieldArgs = {
  key: Scalars["String"];
};

/** Represents an item in the checkout. */
export type ICheckoutLinePrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars["String"]>>;
};

export type ICheckoutLineCountableConnection = {
  __typename?: "CheckoutLineCountableConnection";
  edges: Array<ICheckoutLineCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: IPageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars["Int"]>;
};

export type ICheckoutLineCountableEdge = {
  __typename?: "CheckoutLineCountableEdge";
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node: ICheckoutLine;
};

/**
 * Deletes a CheckoutLine.
 *
 * Triggers the following webhook events:
 * - CHECKOUT_UPDATED (async): A checkout was updated.
 */
export type ICheckoutLineDelete = {
  __typename?: "CheckoutLineDelete";
  /** An updated checkout. */
  checkout?: Maybe<ICheckout>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  checkoutErrors: Array<ICheckoutError>;
  errors: Array<ICheckoutError>;
};

export type ICheckoutLineInput = {
  /**
   * Flag that allow force splitting the same variant into multiple lines by skipping the matching logic.
   *
   * Added in Saleor 3.6.
   */
  forceNewLine?: InputMaybe<Scalars["Boolean"]>;
  /**
   * Fields required to update the object's metadata.
   *
   * Added in Saleor 3.8.
   */
  metadata?: InputMaybe<Array<IMetadataInput>>;
  /**
   * Custom price of the item. Can be set only by apps with `HANDLE_CHECKOUTS` permission. When the line with the same variant will be provided multiple times, the last price will be used.
   *
   * Added in Saleor 3.1.
   */
  price?: InputMaybe<Scalars["PositiveDecimal"]>;
  /** The number of items purchased. */
  quantity: Scalars["Int"];
  /** ID of the product variant. */
  variantId: Scalars["ID"];
};

/**
 * Represents an problem in the checkout line.
 *
 * Added in Saleor 3.15.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type ICheckoutLineProblem =
  | ICheckoutLineProblemInsufficientStock
  | ICheckoutLineProblemVariantNotAvailable;

/**
 * Indicates insufficient stock for a given checkout line.Placing the order will not be possible until solving this problem.
 *
 * Added in Saleor 3.15.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type ICheckoutLineProblemInsufficientStock = {
  __typename?: "CheckoutLineProblemInsufficientStock";
  /** Available quantity of a variant. */
  availableQuantity?: Maybe<Scalars["Int"]>;
  /** The line that has variant with insufficient stock. */
  line: ICheckoutLine;
  /** The variant with insufficient stock. */
  variant: IProductVariant;
};

/**
 * The variant assigned to the checkout line is not available.Placing the order will not be possible until solving this problem.
 *
 * Added in Saleor 3.15.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type ICheckoutLineProblemVariantNotAvailable = {
  __typename?: "CheckoutLineProblemVariantNotAvailable";
  /** The line that has variant that is not available. */
  line: ICheckoutLine;
};

export type ICheckoutLineUpdateInput = {
  /**
   * ID of the line.
   *
   * Added in Saleor 3.6.
   */
  lineId?: InputMaybe<Scalars["ID"]>;
  /**
   * Custom price of the item. Can be set only by apps with `HANDLE_CHECKOUTS` permission. When the line with the same variant will be provided multiple times, the last price will be used.
   *
   * Added in Saleor 3.1.
   */
  price?: InputMaybe<Scalars["PositiveDecimal"]>;
  /** The number of items purchased. Optional for apps, required for any other users. */
  quantity?: InputMaybe<Scalars["Int"]>;
  /**
   * ID of the product variant.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Use `lineId` instead.
   */
  variantId?: InputMaybe<Scalars["ID"]>;
};

/**
 * Adds a checkout line to the existing checkout.If line was already in checkout, its quantity will be increased.
 *
 * Triggers the following webhook events:
 * - CHECKOUT_UPDATED (async): A checkout was updated.
 */
export type ICheckoutLinesAdd = {
  __typename?: "CheckoutLinesAdd";
  /** An updated checkout. */
  checkout?: Maybe<ICheckout>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  checkoutErrors: Array<ICheckoutError>;
  errors: Array<ICheckoutError>;
};

/**
 * Deletes checkout lines.
 *
 * Triggers the following webhook events:
 * - CHECKOUT_UPDATED (async): A checkout was updated.
 */
export type ICheckoutLinesDelete = {
  __typename?: "CheckoutLinesDelete";
  /** An updated checkout. */
  checkout?: Maybe<ICheckout>;
  errors: Array<ICheckoutError>;
};

/**
 * Updates checkout line in the existing checkout.
 *
 * Triggers the following webhook events:
 * - CHECKOUT_UPDATED (async): A checkout was updated.
 */
export type ICheckoutLinesUpdate = {
  __typename?: "CheckoutLinesUpdate";
  /** An updated checkout. */
  checkout?: Maybe<ICheckout>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  checkoutErrors: Array<ICheckoutError>;
  errors: Array<ICheckoutError>;
};

/**
 * Event sent when checkout metadata is updated.
 *
 * Added in Saleor 3.8.
 */
export type ICheckoutMetadataUpdated = IEvent & {
  __typename?: "CheckoutMetadataUpdated";
  /** The checkout the event relates to. */
  checkout?: Maybe<ICheckout>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars["DateTime"]>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IIssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<IApp>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars["String"]>;
};

/** Create a new payment for given checkout. */
export type ICheckoutPaymentCreate = {
  __typename?: "CheckoutPaymentCreate";
  /** Related checkout object. */
  checkout?: Maybe<ICheckout>;
  errors: Array<IPaymentError>;
  /** A newly created payment. */
  payment?: Maybe<IPayment>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  paymentErrors: Array<IPaymentError>;
};

/**
 * Represents an problem in the checkout.
 *
 * Added in Saleor 3.15.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type ICheckoutProblem =
  | ICheckoutLineProblemInsufficientStock
  | ICheckoutLineProblemVariantNotAvailable;

/**
 * Remove a gift card or a voucher from a checkout.
 *
 * Triggers the following webhook events:
 * - CHECKOUT_UPDATED (async): A checkout was updated.
 */
export type ICheckoutRemovePromoCode = {
  __typename?: "CheckoutRemovePromoCode";
  /** The checkout with the removed gift card or voucher. */
  checkout?: Maybe<ICheckout>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  checkoutErrors: Array<ICheckoutError>;
  errors: Array<ICheckoutError>;
};

/**
 * Represents the channel-specific checkout settings.
 *
 * Added in Saleor 3.15.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type ICheckoutSettings = {
  __typename?: "CheckoutSettings";
  /**
   * Default `true`. Determines if the checkout mutations should use legacy error flow. In legacy flow, all mutations can raise an exception unrelated to the requested action - (e.g. out-of-stock exception when updating checkoutShippingAddress.) If `false`, the errors will be aggregated in `checkout.problems` field. Some of the `problems` can block the finalizing checkout process. The legacy flow will be removed in Saleor 4.0. The flow with `checkout.problems` will be the default one.
   *
   * Added in Saleor 3.15.This field will be removed in Saleor 4.0.
   */
  useLegacyErrorFlow: Scalars["Boolean"];
};

export type ICheckoutSettingsInput = {
  /**
   * Default `true`. Determines if the checkout mutations should use legacy error flow. In legacy flow, all mutations can raise an exception unrelated to the requested action - (e.g. out-of-stock exception when updating checkoutShippingAddress.) If `false`, the errors will be aggregated in `checkout.problems` field. Some of the `problems` can block the finalizing checkout process. The legacy flow will be removed in Saleor 4.0. The flow with `checkout.problems` will be the default one.
   *
   * Added in Saleor 3.15.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0.
   */
  useLegacyErrorFlow?: InputMaybe<Scalars["Boolean"]>;
};

/**
 * Update shipping address in the existing checkout.
 *
 * Triggers the following webhook events:
 * - CHECKOUT_UPDATED (async): A checkout was updated.
 */
export type ICheckoutShippingAddressUpdate = {
  __typename?: "CheckoutShippingAddressUpdate";
  /** An updated checkout. */
  checkout?: Maybe<ICheckout>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  checkoutErrors: Array<ICheckoutError>;
  errors: Array<ICheckoutError>;
};

/**
 * Updates the shipping method of the checkout.
 *
 * Triggers the following webhook events:
 * - SHIPPING_LIST_METHODS_FOR_CHECKOUT (sync): Triggered when updating the checkout shipping method with the external one.
 * - CHECKOUT_UPDATED (async): A checkout was updated.
 */
export type ICheckoutShippingMethodUpdate = {
  __typename?: "CheckoutShippingMethodUpdate";
  /** An updated checkout. */
  checkout?: Maybe<ICheckout>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  checkoutErrors: Array<ICheckoutError>;
  errors: Array<ICheckoutError>;
};

export type ICheckoutSortField =
  /** Sort checkouts by creation date. */
  | "CREATION_DATE"
  /** Sort checkouts by customer. */
  | "CUSTOMER"
  /** Sort checkouts by payment. */
  | "PAYMENT";

export type ICheckoutSortingInput = {
  /** Specifies the direction in which to sort checkouts. */
  direction: IOrderDirection;
  /** Sort checkouts by the selected field. */
  field: ICheckoutSortField;
};

/**
 * Event sent when checkout is updated.
 *
 * Added in Saleor 3.2.
 */
export type ICheckoutUpdated = IEvent & {
  __typename?: "CheckoutUpdated";
  /** The checkout the event relates to. */
  checkout?: Maybe<ICheckout>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars["DateTime"]>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IIssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<IApp>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars["String"]>;
};

export type ICheckoutValidationRules = {
  /** The validation rules that can be applied to provided billing address data. */
  billingAddress?: InputMaybe<ICheckoutAddressValidationRules>;
  /** The validation rules that can be applied to provided shipping address data. */
  shippingAddress?: InputMaybe<ICheckoutAddressValidationRules>;
};

export type IChoiceValue = {
  __typename?: "ChoiceValue";
  /** The raw name of the choice. */
  raw?: Maybe<Scalars["String"]>;
  /** The verbose name of the choice. */
  verbose?: Maybe<Scalars["String"]>;
};

/** Represents a collection of products. */
export type ICollection = INode &
  IObjectWithMetadata & {
    __typename?: "Collection";
    /** Background image of the collection. */
    backgroundImage?: Maybe<IImage>;
    /** Channel given to retrieve this collection. Also used by federation gateway to resolve this object in a federated query. */
    channel?: Maybe<Scalars["String"]>;
    /**
     * List of channels in which the collection is available.
     *
     * Requires one of the following permissions: MANAGE_PRODUCTS.
     */
    channelListings?: Maybe<Array<ICollectionChannelListing>>;
    /**
     * Description of the collection.
     *
     * Rich text format. For reference see https://editorjs.io/
     */
    description?: Maybe<Scalars["JSONString"]>;
    /**
     * Description of the collection.
     *
     * Rich text format. For reference see https://editorjs.io/
     * @deprecated This field will be removed in Saleor 4.0. Use the `description` field instead.
     */
    descriptionJson?: Maybe<Scalars["JSONString"]>;
    /** The ID of the collection. */
    id: Scalars["ID"];
    /** List of public metadata items. Can be accessed without permissions. */
    metadata: Array<IMetadataItem>;
    /**
     * A single key from public metadata.
     *
     * Tip: Use GraphQL aliases to fetch multiple keys.
     *
     * Added in Saleor 3.3.
     */
    metafield?: Maybe<Scalars["String"]>;
    /**
     * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
     *
     * Added in Saleor 3.3.
     */
    metafields?: Maybe<Scalars["Metadata"]>;
    /** Name of the collection. */
    name: Scalars["String"];
    /** List of private metadata items. Requires staff permissions to access. */
    privateMetadata: Array<IMetadataItem>;
    /**
     * A single key from private metadata. Requires staff permissions to access.
     *
     * Tip: Use GraphQL aliases to fetch multiple keys.
     *
     * Added in Saleor 3.3.
     */
    privateMetafield?: Maybe<Scalars["String"]>;
    /**
     * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
     *
     * Added in Saleor 3.3.
     */
    privateMetafields?: Maybe<Scalars["Metadata"]>;
    /** List of products in this collection. */
    products?: Maybe<IProductCountableConnection>;
    /** SEO description of the collection. */
    seoDescription?: Maybe<Scalars["String"]>;
    /** SEO title of the collection. */
    seoTitle?: Maybe<Scalars["String"]>;
    /** Slug of the collection. */
    slug: Scalars["String"];
    /** Returns translated collection fields for the given language code. */
    translation?: Maybe<ICollectionTranslation>;
  };

/** Represents a collection of products. */
export type ICollectionBackgroundImageArgs = {
  format?: InputMaybe<IThumbnailFormatEnum>;
  size?: InputMaybe<Scalars["Int"]>;
};

/** Represents a collection of products. */
export type ICollectionMetafieldArgs = {
  key: Scalars["String"];
};

/** Represents a collection of products. */
export type ICollectionMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars["String"]>>;
};

/** Represents a collection of products. */
export type ICollectionPrivateMetafieldArgs = {
  key: Scalars["String"];
};

/** Represents a collection of products. */
export type ICollectionPrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars["String"]>>;
};

/** Represents a collection of products. */
export type ICollectionProductsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  filter?: InputMaybe<IProductFilterInput>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  sortBy?: InputMaybe<IProductOrder>;
  where?: InputMaybe<IProductWhereInput>;
};

/** Represents a collection of products. */
export type ICollectionTranslationArgs = {
  languageCode: ILanguageCodeEnum;
};

/**
 * Adds products to a collection.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type ICollectionAddProducts = {
  __typename?: "CollectionAddProducts";
  /** Collection to which products will be added. */
  collection?: Maybe<ICollection>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  collectionErrors: Array<ICollectionError>;
  errors: Array<ICollectionError>;
};

/**
 * Deletes collections.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type ICollectionBulkDelete = {
  __typename?: "CollectionBulkDelete";
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  collectionErrors: Array<ICollectionError>;
  /** Returns how many objects were affected. */
  count: Scalars["Int"];
  errors: Array<ICollectionError>;
};

/** Represents collection channel listing. */
export type ICollectionChannelListing = INode & {
  __typename?: "CollectionChannelListing";
  /** The channel to which the collection belongs. */
  channel: IChannel;
  /** The ID of the collection channel listing. */
  id: Scalars["ID"];
  /** Indicates if the collection is published in the channel. */
  isPublished: Scalars["Boolean"];
  /** @deprecated This field will be removed in Saleor 4.0. Use the `publishedAt` field to fetch the publication date. */
  publicationDate?: Maybe<Scalars["Date"]>;
  /**
   * The collection publication date.
   *
   * Added in Saleor 3.3.
   */
  publishedAt?: Maybe<Scalars["DateTime"]>;
};

export type ICollectionChannelListingError = {
  __typename?: "CollectionChannelListingError";
  /** List of attributes IDs which causes the error. */
  attributes?: Maybe<Array<Scalars["ID"]>>;
  /** List of channels IDs which causes the error. */
  channels?: Maybe<Array<Scalars["ID"]>>;
  /** The error code. */
  code: IProductErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars["String"]>;
  /** The error message. */
  message?: Maybe<Scalars["String"]>;
  /** List of attribute values IDs which causes the error. */
  values?: Maybe<Array<Scalars["ID"]>>;
};

/**
 * Manage collection's availability in channels.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type ICollectionChannelListingUpdate = {
  __typename?: "CollectionChannelListingUpdate";
  /** An updated collection instance. */
  collection?: Maybe<ICollection>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  collectionChannelListingErrors: Array<ICollectionChannelListingError>;
  errors: Array<ICollectionChannelListingError>;
};

export type ICollectionChannelListingUpdateInput = {
  /** List of channels to which the collection should be assigned. */
  addChannels?: InputMaybe<Array<IPublishableChannelListingInput>>;
  /** List of channels from which the collection should be unassigned. */
  removeChannels?: InputMaybe<Array<Scalars["ID"]>>;
};

/** Represents a connection to a list of collections. */
export type ICollectionCountableConnection = {
  __typename?: "CollectionCountableConnection";
  edges: Array<ICollectionCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: IPageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars["Int"]>;
};

export type ICollectionCountableEdge = {
  __typename?: "CollectionCountableEdge";
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node: ICollection;
};

/**
 * Creates a new collection.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type ICollectionCreate = {
  __typename?: "CollectionCreate";
  collection?: Maybe<ICollection>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  collectionErrors: Array<ICollectionError>;
  errors: Array<ICollectionError>;
};

export type ICollectionCreateInput = {
  /** Background image file. */
  backgroundImage?: InputMaybe<Scalars["Upload"]>;
  /** Alt text for an image. */
  backgroundImageAlt?: InputMaybe<Scalars["String"]>;
  /**
   * Description of the collection.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  description?: InputMaybe<Scalars["JSONString"]>;
  /** Informs whether a collection is published. */
  isPublished?: InputMaybe<Scalars["Boolean"]>;
  /**
   * Fields required to update the collection metadata.
   *
   * Added in Saleor 3.8.
   */
  metadata?: InputMaybe<Array<IMetadataInput>>;
  /** Name of the collection. */
  name?: InputMaybe<Scalars["String"]>;
  /**
   * Fields required to update the collection private metadata.
   *
   * Added in Saleor 3.8.
   */
  privateMetadata?: InputMaybe<Array<IMetadataInput>>;
  /** List of products to be added to the collection. */
  products?: InputMaybe<Array<Scalars["ID"]>>;
  /**
   * Publication date. ISO 8601 standard.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0.
   */
  publicationDate?: InputMaybe<Scalars["Date"]>;
  /** Search engine optimization fields. */
  seo?: InputMaybe<ISeoInput>;
  /** Slug of the collection. */
  slug?: InputMaybe<Scalars["String"]>;
};

/**
 * Event sent when new collection is created.
 *
 * Added in Saleor 3.2.
 */
export type ICollectionCreated = IEvent & {
  __typename?: "CollectionCreated";
  /** The collection the event relates to. */
  collection?: Maybe<ICollection>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars["DateTime"]>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IIssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<IApp>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars["String"]>;
};

/**
 * Event sent when new collection is created.
 *
 * Added in Saleor 3.2.
 */
export type ICollectionCreatedCollectionArgs = {
  channel?: InputMaybe<Scalars["String"]>;
};

/**
 * Deletes a collection.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type ICollectionDelete = {
  __typename?: "CollectionDelete";
  collection?: Maybe<ICollection>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  collectionErrors: Array<ICollectionError>;
  errors: Array<ICollectionError>;
};

/**
 * Event sent when collection is deleted.
 *
 * Added in Saleor 3.2.
 */
export type ICollectionDeleted = IEvent & {
  __typename?: "CollectionDeleted";
  /** The collection the event relates to. */
  collection?: Maybe<ICollection>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars["DateTime"]>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IIssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<IApp>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars["String"]>;
};

/**
 * Event sent when collection is deleted.
 *
 * Added in Saleor 3.2.
 */
export type ICollectionDeletedCollectionArgs = {
  channel?: InputMaybe<Scalars["String"]>;
};

export type ICollectionError = {
  __typename?: "CollectionError";
  /** The error code. */
  code: ICollectionErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars["String"]>;
  /** The error message. */
  message?: Maybe<Scalars["String"]>;
  /** List of products IDs which causes the error. */
  products?: Maybe<Array<Scalars["ID"]>>;
};

/** An enumeration. */
export type ICollectionErrorCode =
  | "CANNOT_MANAGE_PRODUCT_WITHOUT_VARIANT"
  | "DUPLICATED_INPUT_ITEM"
  | "GRAPHQL_ERROR"
  | "INVALID"
  | "NOT_FOUND"
  | "REQUIRED"
  | "UNIQUE";

export type ICollectionFilterInput = {
  /**
   * Specifies the channel by which the data should be filtered.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Use root-level channel argument instead.
   */
  channel?: InputMaybe<Scalars["String"]>;
  ids?: InputMaybe<Array<Scalars["ID"]>>;
  metadata?: InputMaybe<Array<IMetadataFilter>>;
  published?: InputMaybe<ICollectionPublished>;
  search?: InputMaybe<Scalars["String"]>;
  slugs?: InputMaybe<Array<Scalars["String"]>>;
};

export type ICollectionInput = {
  /** Background image file. */
  backgroundImage?: InputMaybe<Scalars["Upload"]>;
  /** Alt text for an image. */
  backgroundImageAlt?: InputMaybe<Scalars["String"]>;
  /**
   * Description of the collection.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  description?: InputMaybe<Scalars["JSONString"]>;
  /** Informs whether a collection is published. */
  isPublished?: InputMaybe<Scalars["Boolean"]>;
  /**
   * Fields required to update the collection metadata.
   *
   * Added in Saleor 3.8.
   */
  metadata?: InputMaybe<Array<IMetadataInput>>;
  /** Name of the collection. */
  name?: InputMaybe<Scalars["String"]>;
  /**
   * Fields required to update the collection private metadata.
   *
   * Added in Saleor 3.8.
   */
  privateMetadata?: InputMaybe<Array<IMetadataInput>>;
  /**
   * Publication date. ISO 8601 standard.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0.
   */
  publicationDate?: InputMaybe<Scalars["Date"]>;
  /** Search engine optimization fields. */
  seo?: InputMaybe<ISeoInput>;
  /** Slug of the collection. */
  slug?: InputMaybe<Scalars["String"]>;
};

/**
 * Event sent when collection metadata is updated.
 *
 * Added in Saleor 3.8.
 */
export type ICollectionMetadataUpdated = IEvent & {
  __typename?: "CollectionMetadataUpdated";
  /** The collection the event relates to. */
  collection?: Maybe<ICollection>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars["DateTime"]>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IIssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<IApp>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars["String"]>;
};

/**
 * Event sent when collection metadata is updated.
 *
 * Added in Saleor 3.8.
 */
export type ICollectionMetadataUpdatedCollectionArgs = {
  channel?: InputMaybe<Scalars["String"]>;
};

export type ICollectionPublished = "HIDDEN" | "PUBLISHED";

/**
 * Remove products from a collection.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type ICollectionRemoveProducts = {
  __typename?: "CollectionRemoveProducts";
  /** Collection from which products will be removed. */
  collection?: Maybe<ICollection>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  collectionErrors: Array<ICollectionError>;
  errors: Array<ICollectionError>;
};

/**
 * Reorder the products of a collection.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type ICollectionReorderProducts = {
  __typename?: "CollectionReorderProducts";
  /** Collection from which products are reordered. */
  collection?: Maybe<ICollection>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  collectionErrors: Array<ICollectionError>;
  errors: Array<ICollectionError>;
};

export type ICollectionSortField =
  /**
   * Sort collections by availability.
   *
   * This option requires a channel filter to work as the values can vary between channels.
   */
  | "AVAILABILITY"
  /** Sort collections by name. */
  | "NAME"
  /** Sort collections by product count. */
  | "PRODUCT_COUNT"
  /**
   * Sort collections by publication date.
   *
   * This option requires a channel filter to work as the values can vary between channels.
   */
  | "PUBLICATION_DATE"
  /**
   * Sort collections by publication date.
   *
   * This option requires a channel filter to work as the values can vary between channels.
   */
  | "PUBLISHED_AT";

export type ICollectionSortingInput = {
  /**
   * Specifies the channel in which to sort the data.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Use root-level channel argument instead.
   */
  channel?: InputMaybe<Scalars["String"]>;
  /** Specifies the direction in which to sort collections. */
  direction: IOrderDirection;
  /** Sort collections by the selected field. */
  field: ICollectionSortField;
};

export type ICollectionTranslatableContent = INode & {
  __typename?: "CollectionTranslatableContent";
  /**
   * Represents a collection of products.
   * @deprecated This field will be removed in Saleor 4.0. Get model fields from the root level queries.
   */
  collection?: Maybe<ICollection>;
  /**
   * Collection's description to translate.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  description?: Maybe<Scalars["JSONString"]>;
  /**
   * Description of the collection.
   *
   * Rich text format. For reference see https://editorjs.io/
   * @deprecated This field will be removed in Saleor 4.0. Use the `description` field instead.
   */
  descriptionJson?: Maybe<Scalars["JSONString"]>;
  /** The ID of the collection translatable content. */
  id: Scalars["ID"];
  /** Collection's name to translate. */
  name: Scalars["String"];
  /** SEO description to translate. */
  seoDescription?: Maybe<Scalars["String"]>;
  /** SEO title to translate. */
  seoTitle?: Maybe<Scalars["String"]>;
  /** Returns translated collection fields for the given language code. */
  translation?: Maybe<ICollectionTranslation>;
};

export type ICollectionTranslatableContentTranslationArgs = {
  languageCode: ILanguageCodeEnum;
};

/**
 * Creates/updates translations for a collection.
 *
 * Requires one of the following permissions: MANAGE_TRANSLATIONS.
 */
export type ICollectionTranslate = {
  __typename?: "CollectionTranslate";
  collection?: Maybe<ICollection>;
  errors: Array<ITranslationError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  translationErrors: Array<ITranslationError>;
};

export type ICollectionTranslation = INode & {
  __typename?: "CollectionTranslation";
  /**
   * Translated description of the collection.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  description?: Maybe<Scalars["JSONString"]>;
  /**
   * Translated description of the collection.
   *
   * Rich text format. For reference see https://editorjs.io/
   * @deprecated This field will be removed in Saleor 4.0. Use the `description` field instead.
   */
  descriptionJson?: Maybe<Scalars["JSONString"]>;
  /** The ID of the collection translation. */
  id: Scalars["ID"];
  /** Translation language. */
  language: ILanguageDisplay;
  /** Translated collection name. */
  name?: Maybe<Scalars["String"]>;
  /** Translated SEO description. */
  seoDescription?: Maybe<Scalars["String"]>;
  /** Translated SEO title. */
  seoTitle?: Maybe<Scalars["String"]>;
};

/**
 * Updates a collection.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type ICollectionUpdate = {
  __typename?: "CollectionUpdate";
  collection?: Maybe<ICollection>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  collectionErrors: Array<ICollectionError>;
  errors: Array<ICollectionError>;
};

/**
 * Event sent when collection is updated.
 *
 * Added in Saleor 3.2.
 */
export type ICollectionUpdated = IEvent & {
  __typename?: "CollectionUpdated";
  /** The collection the event relates to. */
  collection?: Maybe<ICollection>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars["DateTime"]>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IIssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<IApp>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars["String"]>;
};

/**
 * Event sent when collection is updated.
 *
 * Added in Saleor 3.2.
 */
export type ICollectionUpdatedCollectionArgs = {
  channel?: InputMaybe<Scalars["String"]>;
};

export type ICollectionWhereInput = {
  /** List of conditions that must be met. */
  AND?: InputMaybe<Array<ICollectionWhereInput>>;
  /** A list of conditions of which at least one must be met. */
  OR?: InputMaybe<Array<ICollectionWhereInput>>;
  ids?: InputMaybe<Array<Scalars["ID"]>>;
  metadata?: InputMaybe<Array<IMetadataFilter>>;
};

/** Stores information about a single configuration field. */
export type IConfigurationItem = {
  __typename?: "ConfigurationItem";
  /** Help text for the field. */
  helpText?: Maybe<Scalars["String"]>;
  /** Label for the field. */
  label?: Maybe<Scalars["String"]>;
  /** Name of the field. */
  name: Scalars["String"];
  /** Type of the field. */
  type?: Maybe<IConfigurationTypeFieldEnum>;
  /** Current value of the field. */
  value?: Maybe<Scalars["String"]>;
};

export type IConfigurationItemInput = {
  /** Name of the field to update. */
  name: Scalars["String"];
  /** Value of the given field to update. */
  value?: InputMaybe<Scalars["String"]>;
};

/** An enumeration. */
export type IConfigurationTypeFieldEnum =
  | "BOOLEAN"
  | "MULTILINE"
  | "OUTPUT"
  | "PASSWORD"
  | "SECRET"
  | "SECRETMULTILINE"
  | "STRING";

/**
 * Confirm user account with token sent by email during registration.
 *
 * Triggers the following webhook events:
 * - ACCOUNT_CONFIRMED (async): Account was confirmed.
 */
export type IConfirmAccount = {
  __typename?: "ConfirmAccount";
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<IAccountError>;
  errors: Array<IAccountError>;
  /** An activated user account. */
  user?: Maybe<IUser>;
};

/**
 * Confirm the email change of the logged-in user.
 *
 * Requires one of the following permissions: AUTHENTICATED_USER.
 *
 * Triggers the following webhook events:
 * - CUSTOMER_UPDATED (async): A customer account was updated.
 * - NOTIFY_USER (async): A notification that account email change was confirmed.
 * - ACCOUNT_EMAIL_CHANGED (async): An account email was changed.
 */
export type IConfirmEmailChange = {
  __typename?: "ConfirmEmailChange";
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<IAccountError>;
  errors: Array<IAccountError>;
  /** A user instance with a new email. */
  user?: Maybe<IUser>;
};

/** An enumeration. */
export type ICountryCode =
  | "AD"
  | "AE"
  | "AF"
  | "AG"
  | "AI"
  | "AL"
  | "AM"
  | "AO"
  | "AQ"
  | "AR"
  | "AS"
  | "AT"
  | "AU"
  | "AW"
  | "AX"
  | "AZ"
  | "BA"
  | "BB"
  | "BD"
  | "BE"
  | "BF"
  | "BG"
  | "BH"
  | "BI"
  | "BJ"
  | "BL"
  | "BM"
  | "BN"
  | "BO"
  | "BQ"
  | "BR"
  | "BS"
  | "BT"
  | "BV"
  | "BW"
  | "BY"
  | "BZ"
  | "CA"
  | "CC"
  | "CD"
  | "CF"
  | "CG"
  | "CH"
  | "CI"
  | "CK"
  | "CL"
  | "CM"
  | "CN"
  | "CO"
  | "CR"
  | "CU"
  | "CV"
  | "CW"
  | "CX"
  | "CY"
  | "CZ"
  | "DE"
  | "DJ"
  | "DK"
  | "DM"
  | "DO"
  | "DZ"
  | "EC"
  | "EE"
  | "EG"
  | "EH"
  | "ER"
  | "ES"
  | "ET"
  | "EU"
  | "FI"
  | "FJ"
  | "FK"
  | "FM"
  | "FO"
  | "FR"
  | "GA"
  | "GB"
  | "GD"
  | "GE"
  | "GF"
  | "GG"
  | "GH"
  | "GI"
  | "GL"
  | "GM"
  | "GN"
  | "GP"
  | "GQ"
  | "GR"
  | "GS"
  | "GT"
  | "GU"
  | "GW"
  | "GY"
  | "HK"
  | "HM"
  | "HN"
  | "HR"
  | "HT"
  | "HU"
  | "ID"
  | "IE"
  | "IL"
  | "IM"
  | "IN"
  | "IO"
  | "IQ"
  | "IR"
  | "IS"
  | "IT"
  | "JE"
  | "JM"
  | "JO"
  | "JP"
  | "KE"
  | "KG"
  | "KH"
  | "KI"
  | "KM"
  | "KN"
  | "KP"
  | "KR"
  | "KW"
  | "KY"
  | "KZ"
  | "LA"
  | "LB"
  | "LC"
  | "LI"
  | "LK"
  | "LR"
  | "LS"
  | "LT"
  | "LU"
  | "LV"
  | "LY"
  | "MA"
  | "MC"
  | "MD"
  | "ME"
  | "MF"
  | "MG"
  | "MH"
  | "MK"
  | "ML"
  | "MM"
  | "MN"
  | "MO"
  | "MP"
  | "MQ"
  | "MR"
  | "MS"
  | "MT"
  | "MU"
  | "MV"
  | "MW"
  | "MX"
  | "MY"
  | "MZ"
  | "NA"
  | "NC"
  | "NE"
  | "NF"
  | "NG"
  | "NI"
  | "NL"
  | "NO"
  | "NP"
  | "NR"
  | "NU"
  | "NZ"
  | "OM"
  | "PA"
  | "PE"
  | "PF"
  | "PG"
  | "PH"
  | "PK"
  | "PL"
  | "PM"
  | "PN"
  | "PR"
  | "PS"
  | "PT"
  | "PW"
  | "PY"
  | "QA"
  | "RE"
  | "RO"
  | "RS"
  | "RU"
  | "RW"
  | "SA"
  | "SB"
  | "SC"
  | "SD"
  | "SE"
  | "SG"
  | "SH"
  | "SI"
  | "SJ"
  | "SK"
  | "SL"
  | "SM"
  | "SN"
  | "SO"
  | "SR"
  | "SS"
  | "ST"
  | "SV"
  | "SX"
  | "SY"
  | "SZ"
  | "TC"
  | "TD"
  | "TF"
  | "TG"
  | "TH"
  | "TJ"
  | "TK"
  | "TL"
  | "TM"
  | "TN"
  | "TO"
  | "TR"
  | "TT"
  | "TV"
  | "TW"
  | "TZ"
  | "UA"
  | "UG"
  | "UM"
  | "US"
  | "UY"
  | "UZ"
  | "VA"
  | "VC"
  | "VE"
  | "VG"
  | "VI"
  | "VN"
  | "VU"
  | "WF"
  | "WS"
  | "YE"
  | "YT"
  | "ZA"
  | "ZM"
  | "ZW";

export type ICountryDisplay = {
  __typename?: "CountryDisplay";
  /** Country code. */
  code: Scalars["String"];
  /** Country name. */
  country: Scalars["String"];
  /**
   * Country tax.
   * @deprecated This field will be removed in Saleor 4.0. Always returns `null`. Use `TaxClassCountryRate` type to manage tax rates per country.
   */
  vat?: Maybe<IVat>;
};

export type ICountryFilterInput = {
  /** Boolean for filtering countries by having shipping zone assigned.If 'true', return countries with shipping zone assigned.If 'false', return countries without any shipping zone assigned.If the argument is not provided (null), return all countries. */
  attachedToShippingZones?: InputMaybe<Scalars["Boolean"]>;
};

export type ICountryRateInput = {
  /** Country in which this rate applies. */
  countryCode: ICountryCode;
  /** Tax rate value provided as percentage. Example: provide `23` to represent `23%` tax rate. */
  rate: Scalars["Float"];
};

export type ICountryRateUpdateInput = {
  /** Country in which this rate applies. */
  countryCode: ICountryCode;
  /** Tax rate value provided as percentage. Example: provide `23` to represent `23%` tax rate. Provide `null` to remove the particular rate. */
  rate?: InputMaybe<Scalars["Float"]>;
};

/** Create JWT token. */
export type ICreateToken = {
  __typename?: "CreateToken";
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<IAccountError>;
  /** CSRF token required to re-generate access token. */
  csrfToken?: Maybe<Scalars["String"]>;
  errors: Array<IAccountError>;
  /** JWT refresh token, required to re-generate access token. */
  refreshToken?: Maybe<Scalars["String"]>;
  /** JWT token, required to authenticate. */
  token?: Maybe<Scalars["String"]>;
  /** A user instance. */
  user?: Maybe<IUser>;
};

export type ICreditCard = {
  __typename?: "CreditCard";
  /** Card brand. */
  brand: Scalars["String"];
  /** Two-digit number representing the card’s expiration month. */
  expMonth?: Maybe<Scalars["Int"]>;
  /** Four-digit number representing the card’s expiration year. */
  expYear?: Maybe<Scalars["Int"]>;
  /** First 4 digits of the card number. */
  firstDigits?: Maybe<Scalars["String"]>;
  /** Last 4 digits of the card number. */
  lastDigits: Scalars["String"];
};

/**
 * Deletes customers.
 *
 * Requires one of the following permissions: MANAGE_USERS.
 *
 * Triggers the following webhook events:
 * - CUSTOMER_DELETED (async): A customer account was deleted.
 */
export type ICustomerBulkDelete = {
  __typename?: "CustomerBulkDelete";
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<IAccountError>;
  /** Returns how many objects were affected. */
  count: Scalars["Int"];
  errors: Array<IAccountError>;
};

export type ICustomerBulkResult = {
  __typename?: "CustomerBulkResult";
  /** Customer data. */
  customer?: Maybe<IUser>;
  /** List of errors that occurred during the update attempt. */
  errors?: Maybe<Array<ICustomerBulkUpdateError>>;
};

/**
 * Updates customers.
 *
 * Added in Saleor 3.13.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 *
 * Requires one of the following permissions: MANAGE_USERS.
 *
 * Triggers the following webhook events:
 * - CUSTOMER_UPDATED (async): A customer account was updated.
 * - CUSTOMER_METADATA_UPDATED (async): Optionally called when customer's metadata was updated.
 */
export type ICustomerBulkUpdate = {
  __typename?: "CustomerBulkUpdate";
  /** Returns how many objects were created. */
  count: Scalars["Int"];
  errors: Array<ICustomerBulkUpdateError>;
  /** List of the updated customers. */
  results: Array<ICustomerBulkResult>;
};

export type ICustomerBulkUpdateError = {
  __typename?: "CustomerBulkUpdateError";
  /** The error code. */
  code: ICustomerBulkUpdateErrorCode;
  /** The error message. */
  message?: Maybe<Scalars["String"]>;
  /** Path to field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  path?: Maybe<Scalars["String"]>;
};

/** An enumeration. */
export type ICustomerBulkUpdateErrorCode =
  | "BLANK"
  | "DUPLICATED_INPUT_ITEM"
  | "GRAPHQL_ERROR"
  | "INVALID"
  | "MAX_LENGTH"
  | "NOT_FOUND"
  | "REQUIRED"
  | "UNIQUE";

export type ICustomerBulkUpdateInput = {
  /** External ID of a customer to update. */
  externalReference?: InputMaybe<Scalars["String"]>;
  /** ID of a customer to update. */
  id?: InputMaybe<Scalars["ID"]>;
  /** Fields required to update a customer. */
  input: ICustomerInput;
};

/**
 * Creates a new customer.
 *
 * Requires one of the following permissions: MANAGE_USERS.
 *
 * Triggers the following webhook events:
 * - CUSTOMER_CREATED (async): A new customer account was created.
 * - CUSTOMER_METADATA_UPDATED (async): Optionally called when customer's metadata was updated.
 * - NOTIFY_USER (async): A notification for setting the password.
 * - ACCOUNT_SET_PASSWORD_REQUESTED (async): Setting a new password for the account is requested.
 */
export type ICustomerCreate = {
  __typename?: "CustomerCreate";
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<IAccountError>;
  errors: Array<IAccountError>;
  user?: Maybe<IUser>;
};

/**
 * Event sent when new customer user is created.
 *
 * Added in Saleor 3.2.
 */
export type ICustomerCreated = IEvent & {
  __typename?: "CustomerCreated";
  /** Time of the event. */
  issuedAt?: Maybe<Scalars["DateTime"]>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IIssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<IApp>;
  /** The user the event relates to. */
  user?: Maybe<IUser>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars["String"]>;
};

/**
 * Deletes a customer.
 *
 * Requires one of the following permissions: MANAGE_USERS.
 *
 * Triggers the following webhook events:
 * - CUSTOMER_DELETED (async): A customer account was deleted.
 */
export type ICustomerDelete = {
  __typename?: "CustomerDelete";
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<IAccountError>;
  errors: Array<IAccountError>;
  user?: Maybe<IUser>;
};

/** History log of the customer. */
export type ICustomerEvent = INode & {
  __typename?: "CustomerEvent";
  /** App that performed the action. */
  app?: Maybe<IApp>;
  /** Number of objects concerned by the event. */
  count?: Maybe<Scalars["Int"]>;
  /** Date when event happened at in ISO 8601 format. */
  date?: Maybe<Scalars["DateTime"]>;
  /** The ID of the customer event. */
  id: Scalars["ID"];
  /** Content of the event. */
  message?: Maybe<Scalars["String"]>;
  /** The concerned order. */
  order?: Maybe<IOrder>;
  /** The concerned order line. */
  orderLine?: Maybe<IOrderLine>;
  /** Customer event type. */
  type?: Maybe<ICustomerEventsEnum>;
  /** User who performed the action. */
  user?: Maybe<IUser>;
};

/** An enumeration. */
export type ICustomerEventsEnum =
  | "ACCOUNT_ACTIVATED"
  | "ACCOUNT_CREATED"
  | "ACCOUNT_DEACTIVATED"
  | "CUSTOMER_DELETED"
  | "DIGITAL_LINK_DOWNLOADED"
  | "EMAIL_ASSIGNED"
  | "EMAIL_CHANGED"
  | "EMAIL_CHANGED_REQUEST"
  | "NAME_ASSIGNED"
  | "NOTE_ADDED"
  | "NOTE_ADDED_TO_ORDER"
  | "PASSWORD_CHANGED"
  | "PASSWORD_RESET"
  | "PASSWORD_RESET_LINK_SENT"
  | "PLACED_ORDER";

export type ICustomerFilterInput = {
  dateJoined?: InputMaybe<IDateRangeInput>;
  /**
   * Filter by ids.
   *
   * Added in Saleor 3.8.
   */
  ids?: InputMaybe<Array<Scalars["ID"]>>;
  metadata?: InputMaybe<Array<IMetadataFilter>>;
  numberOfOrders?: InputMaybe<IIntRangeInput>;
  placedOrders?: InputMaybe<IDateRangeInput>;
  search?: InputMaybe<Scalars["String"]>;
  updatedAt?: InputMaybe<IDateTimeRangeInput>;
};

export type ICustomerInput = {
  /** Billing address of the customer. */
  defaultBillingAddress?: InputMaybe<IAddressInput>;
  /** Shipping address of the customer. */
  defaultShippingAddress?: InputMaybe<IAddressInput>;
  /** The unique email address of the user. */
  email?: InputMaybe<Scalars["String"]>;
  /**
   * External ID of the customer.
   *
   * Added in Saleor 3.10.
   */
  externalReference?: InputMaybe<Scalars["String"]>;
  /** Given name. */
  firstName?: InputMaybe<Scalars["String"]>;
  /** User account is active. */
  isActive?: InputMaybe<Scalars["Boolean"]>;
  /**
   * User account is confirmed.
   *
   * Added in Saleor 3.15.
   */
  isConfirmed?: InputMaybe<Scalars["Boolean"]>;
  /** User language code. */
  languageCode?: InputMaybe<ILanguageCodeEnum>;
  /** Family name. */
  lastName?: InputMaybe<Scalars["String"]>;
  /**
   * Fields required to update the user metadata.
   *
   * Added in Saleor 3.14.
   */
  metadata?: InputMaybe<Array<IMetadataInput>>;
  /** A note about the user. */
  note?: InputMaybe<Scalars["String"]>;
  /**
   * Fields required to update the user private metadata.
   *
   * Added in Saleor 3.14.
   */
  privateMetadata?: InputMaybe<Array<IMetadataInput>>;
};

/**
 * Event sent when customer user metadata is updated.
 *
 * Added in Saleor 3.8.
 */
export type ICustomerMetadataUpdated = IEvent & {
  __typename?: "CustomerMetadataUpdated";
  /** Time of the event. */
  issuedAt?: Maybe<Scalars["DateTime"]>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IIssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<IApp>;
  /** The user the event relates to. */
  user?: Maybe<IUser>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars["String"]>;
};

/**
 * Updates an existing customer.
 *
 * Requires one of the following permissions: MANAGE_USERS.
 *
 * Triggers the following webhook events:
 * - CUSTOMER_UPDATED (async): A new customer account was updated.
 * - CUSTOMER_METADATA_UPDATED (async): Optionally called when customer's metadata was updated.
 */
export type ICustomerUpdate = {
  __typename?: "CustomerUpdate";
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<IAccountError>;
  errors: Array<IAccountError>;
  user?: Maybe<IUser>;
};

/**
 * Event sent when customer user is updated.
 *
 * Added in Saleor 3.2.
 */
export type ICustomerUpdated = IEvent & {
  __typename?: "CustomerUpdated";
  /** Time of the event. */
  issuedAt?: Maybe<Scalars["DateTime"]>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IIssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<IApp>;
  /** The user the event relates to. */
  user?: Maybe<IUser>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars["String"]>;
};

export type IDateRangeInput = {
  /** Start date. */
  gte?: InputMaybe<Scalars["Date"]>;
  /** End date. */
  lte?: InputMaybe<Scalars["Date"]>;
};

export type IDateTimeRangeInput = {
  /** Start date. */
  gte?: InputMaybe<Scalars["DateTime"]>;
  /** End date. */
  lte?: InputMaybe<Scalars["DateTime"]>;
};

/**
 * Deactivate all JWT tokens of the currently authenticated user.
 *
 * Requires one of the following permissions: AUTHENTICATED_USER.
 */
export type IDeactivateAllUserTokens = {
  __typename?: "DeactivateAllUserTokens";
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<IAccountError>;
  errors: Array<IAccountError>;
};

/**
 * Define the filtering options for decimal fields.
 *
 * Added in Saleor 3.14.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type IDecimalFilterInput = {
  /** The value equal to. */
  eq?: InputMaybe<Scalars["Decimal"]>;
  /** The value included in. */
  oneOf?: InputMaybe<Array<Scalars["Decimal"]>>;
  /** The value in range. */
  range?: InputMaybe<IDecimalRangeInput>;
};

export type IDecimalRangeInput = {
  /** Decimal value greater than or equal to. */
  gte?: InputMaybe<Scalars["Decimal"]>;
  /** Decimal value less than or equal to. */
  lte?: InputMaybe<Scalars["Decimal"]>;
};

/** Delete metadata of an object. To use it, you need to have access to the modified object. */
export type IDeleteMetadata = {
  __typename?: "DeleteMetadata";
  errors: Array<IMetadataError>;
  item?: Maybe<IObjectWithMetadata>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  metadataErrors: Array<IMetadataError>;
};

/** Delete object's private metadata. To use it, you need to be an authenticated staff user or an app and have access to the modified object. */
export type IDeletePrivateMetadata = {
  __typename?: "DeletePrivateMetadata";
  errors: Array<IMetadataError>;
  item?: Maybe<IObjectWithMetadata>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  metadataErrors: Array<IMetadataError>;
};

/**
 * Represents a delivery method chosen for the checkout. `Warehouse` type is used when checkout is marked as "click and collect" and `ShippingMethod` otherwise.
 *
 * Added in Saleor 3.1.
 */
export type IDeliveryMethod = IShippingMethod | IWarehouse;

/** Represents digital content associated with a product variant. */
export type IDigitalContent = INode &
  IObjectWithMetadata & {
    __typename?: "DigitalContent";
    /** Indicator for automatic fulfillment of digital content. */
    automaticFulfillment: Scalars["Boolean"];
    /** File associated with digital content. */
    contentFile: Scalars["String"];
    /** The ID of the digital content. */
    id: Scalars["ID"];
    /** Maximum number of allowed downloads for the digital content. */
    maxDownloads?: Maybe<Scalars["Int"]>;
    /** List of public metadata items. Can be accessed without permissions. */
    metadata: Array<IMetadataItem>;
    /**
     * A single key from public metadata.
     *
     * Tip: Use GraphQL aliases to fetch multiple keys.
     *
     * Added in Saleor 3.3.
     */
    metafield?: Maybe<Scalars["String"]>;
    /**
     * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
     *
     * Added in Saleor 3.3.
     */
    metafields?: Maybe<Scalars["Metadata"]>;
    /** List of private metadata items. Requires staff permissions to access. */
    privateMetadata: Array<IMetadataItem>;
    /**
     * A single key from private metadata. Requires staff permissions to access.
     *
     * Tip: Use GraphQL aliases to fetch multiple keys.
     *
     * Added in Saleor 3.3.
     */
    privateMetafield?: Maybe<Scalars["String"]>;
    /**
     * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
     *
     * Added in Saleor 3.3.
     */
    privateMetafields?: Maybe<Scalars["Metadata"]>;
    /** Product variant assigned to digital content. */
    productVariant: IProductVariant;
    /** Number of days the URL for the digital content remains valid. */
    urlValidDays?: Maybe<Scalars["Int"]>;
    /** List of URLs for the digital variant. */
    urls?: Maybe<Array<IDigitalContentUrl>>;
    /** Default settings indicator for digital content. */
    useDefaultSettings: Scalars["Boolean"];
  };

/** Represents digital content associated with a product variant. */
export type IDigitalContentMetafieldArgs = {
  key: Scalars["String"];
};

/** Represents digital content associated with a product variant. */
export type IDigitalContentMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars["String"]>>;
};

/** Represents digital content associated with a product variant. */
export type IDigitalContentPrivateMetafieldArgs = {
  key: Scalars["String"];
};

/** Represents digital content associated with a product variant. */
export type IDigitalContentPrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars["String"]>>;
};

/** A connection to a list of digital content items. */
export type IDigitalContentCountableConnection = {
  __typename?: "DigitalContentCountableConnection";
  edges: Array<IDigitalContentCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: IPageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars["Int"]>;
};

export type IDigitalContentCountableEdge = {
  __typename?: "DigitalContentCountableEdge";
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node: IDigitalContent;
};

/**
 * Create new digital content. This mutation must be sent as a `multipart` request. More detailed specs of the upload format can be found here: https://github.com/jaydenseric/graphql-multipart-request-spec
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type IDigitalContentCreate = {
  __typename?: "DigitalContentCreate";
  content?: Maybe<IDigitalContent>;
  errors: Array<IProductError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<IProductError>;
  variant?: Maybe<IProductVariant>;
};

/**
 * Remove digital content assigned to given variant.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type IDigitalContentDelete = {
  __typename?: "DigitalContentDelete";
  errors: Array<IProductError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<IProductError>;
  variant?: Maybe<IProductVariant>;
};

export type IDigitalContentInput = {
  /** Overwrite default automatic_fulfillment setting for variant. */
  automaticFulfillment?: InputMaybe<Scalars["Boolean"]>;
  /** Determines how many times a download link can be accessed by a customer. */
  maxDownloads?: InputMaybe<Scalars["Int"]>;
  /**
   * Fields required to update the digital content metadata.
   *
   * Added in Saleor 3.8.
   */
  metadata?: InputMaybe<Array<IMetadataInput>>;
  /**
   * Fields required to update the digital content private metadata.
   *
   * Added in Saleor 3.8.
   */
  privateMetadata?: InputMaybe<Array<IMetadataInput>>;
  /** Determines for how many days a download link is active since it was generated. */
  urlValidDays?: InputMaybe<Scalars["Int"]>;
  /** Use default digital content settings for this product. */
  useDefaultSettings: Scalars["Boolean"];
};

/**
 * Update digital content.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type IDigitalContentUpdate = {
  __typename?: "DigitalContentUpdate";
  content?: Maybe<IDigitalContent>;
  errors: Array<IProductError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<IProductError>;
  variant?: Maybe<IProductVariant>;
};

export type IDigitalContentUploadInput = {
  /** Overwrite default automatic_fulfillment setting for variant. */
  automaticFulfillment?: InputMaybe<Scalars["Boolean"]>;
  /** Represents an file in a multipart request. */
  contentFile: Scalars["Upload"];
  /** Determines how many times a download link can be accessed by a customer. */
  maxDownloads?: InputMaybe<Scalars["Int"]>;
  /**
   * Fields required to update the digital content metadata.
   *
   * Added in Saleor 3.8.
   */
  metadata?: InputMaybe<Array<IMetadataInput>>;
  /**
   * Fields required to update the digital content private metadata.
   *
   * Added in Saleor 3.8.
   */
  privateMetadata?: InputMaybe<Array<IMetadataInput>>;
  /** Determines for how many days a download link is active since it was generated. */
  urlValidDays?: InputMaybe<Scalars["Int"]>;
  /** Use default digital content settings for this product. */
  useDefaultSettings: Scalars["Boolean"];
};

/** Represents a URL for digital content. */
export type IDigitalContentUrl = INode & {
  __typename?: "DigitalContentUrl";
  /** Digital content associated with the URL. */
  content: IDigitalContent;
  /** Date and time when the digital content URL was created. */
  created: Scalars["DateTime"];
  /** Number of times digital content has been downloaded. */
  downloadNum: Scalars["Int"];
  /** The ID of the digital content URL. */
  id: Scalars["ID"];
  /** UUID of digital content. */
  token: Scalars["UUID"];
  /** URL for digital content. */
  url?: Maybe<Scalars["String"]>;
};

/**
 * Generate new URL to digital content.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type IDigitalContentUrlCreate = {
  __typename?: "DigitalContentUrlCreate";
  digitalContentUrl?: Maybe<IDigitalContentUrl>;
  errors: Array<IProductError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<IProductError>;
};

export type IDigitalContentUrlCreateInput = {
  /** Digital content ID which URL will belong to. */
  content: Scalars["ID"];
};

export type IDiscountError = {
  __typename?: "DiscountError";
  /** List of channels IDs which causes the error. */
  channels?: Maybe<Array<Scalars["ID"]>>;
  /** The error code. */
  code: IDiscountErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars["String"]>;
  /** The error message. */
  message?: Maybe<Scalars["String"]>;
  /** List of products IDs which causes the error. */
  products?: Maybe<Array<Scalars["ID"]>>;
};

/** An enumeration. */
export type IDiscountErrorCode =
  | "ALREADY_EXISTS"
  | "CANNOT_MANAGE_PRODUCT_WITHOUT_VARIANT"
  | "DUPLICATED_INPUT_ITEM"
  | "GRAPHQL_ERROR"
  | "INVALID"
  | "NOT_FOUND"
  | "REQUIRED"
  | "UNIQUE";

export type IDiscountStatusEnum = "ACTIVE" | "EXPIRED" | "SCHEDULED";

export type IDiscountValueTypeEnum = "FIXED" | "PERCENTAGE";

/** An enumeration. */
export type IDistanceUnitsEnum =
  | "CM"
  | "DM"
  | "FT"
  | "INCH"
  | "KM"
  | "M"
  | "MM"
  | "YD";

/** Represents shop's domain. */
export type IDomain = {
  __typename?: "Domain";
  /** The host name of the domain. */
  host: Scalars["String"];
  /** Inform if SSL is enabled. */
  sslEnabled: Scalars["Boolean"];
  /** Shop's absolute URL. */
  url: Scalars["String"];
};

/**
 * Deletes draft orders.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type IDraftOrderBulkDelete = {
  __typename?: "DraftOrderBulkDelete";
  /** Returns how many objects were affected. */
  count: Scalars["Int"];
  errors: Array<IOrderError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<IOrderError>;
};

/**
 * Completes creating an order.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type IDraftOrderComplete = {
  __typename?: "DraftOrderComplete";
  errors: Array<IOrderError>;
  /** Completed order. */
  order?: Maybe<IOrder>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<IOrderError>;
};

/**
 * Creates a new draft order.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type IDraftOrderCreate = {
  __typename?: "DraftOrderCreate";
  errors: Array<IOrderError>;
  order?: Maybe<IOrder>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<IOrderError>;
};

export type IDraftOrderCreateInput = {
  /** Billing address of the customer. */
  billingAddress?: InputMaybe<IAddressInput>;
  /** ID of the channel associated with the order. */
  channelId?: InputMaybe<Scalars["ID"]>;
  /** A note from a customer. Visible by customers in the order summary. */
  customerNote?: InputMaybe<Scalars["String"]>;
  /** Discount amount for the order. */
  discount?: InputMaybe<Scalars["PositiveDecimal"]>;
  /**
   * External ID of this order.
   *
   * Added in Saleor 3.10.
   */
  externalReference?: InputMaybe<Scalars["String"]>;
  /** Variant line input consisting of variant ID and quantity of products. */
  lines?: InputMaybe<Array<IOrderLineCreateInput>>;
  /** URL of a view where users should be redirected to see the order details. URL in RFC 1808 format. */
  redirectUrl?: InputMaybe<Scalars["String"]>;
  /** Shipping address of the customer. */
  shippingAddress?: InputMaybe<IAddressInput>;
  /** ID of a selected shipping method. */
  shippingMethod?: InputMaybe<Scalars["ID"]>;
  /** Customer associated with the draft order. */
  user?: InputMaybe<Scalars["ID"]>;
  /** Email address of the customer. */
  userEmail?: InputMaybe<Scalars["String"]>;
  /** ID of the voucher associated with the order. */
  voucher?: InputMaybe<Scalars["ID"]>;
};

/**
 * Event sent when new draft order is created.
 *
 * Added in Saleor 3.2.
 */
export type IDraftOrderCreated = IEvent & {
  __typename?: "DraftOrderCreated";
  /** Time of the event. */
  issuedAt?: Maybe<Scalars["DateTime"]>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IIssuingPrincipal>;
  /** The order the event relates to. */
  order?: Maybe<IOrder>;
  /** The application receiving the webhook. */
  recipient?: Maybe<IApp>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars["String"]>;
};

/**
 * Deletes a draft order.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type IDraftOrderDelete = {
  __typename?: "DraftOrderDelete";
  errors: Array<IOrderError>;
  order?: Maybe<IOrder>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<IOrderError>;
};

/**
 * Event sent when draft order is deleted.
 *
 * Added in Saleor 3.2.
 */
export type IDraftOrderDeleted = IEvent & {
  __typename?: "DraftOrderDeleted";
  /** Time of the event. */
  issuedAt?: Maybe<Scalars["DateTime"]>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IIssuingPrincipal>;
  /** The order the event relates to. */
  order?: Maybe<IOrder>;
  /** The application receiving the webhook. */
  recipient?: Maybe<IApp>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars["String"]>;
};

export type IDraftOrderInput = {
  /** Billing address of the customer. */
  billingAddress?: InputMaybe<IAddressInput>;
  /** ID of the channel associated with the order. */
  channelId?: InputMaybe<Scalars["ID"]>;
  /** A note from a customer. Visible by customers in the order summary. */
  customerNote?: InputMaybe<Scalars["String"]>;
  /** Discount amount for the order. */
  discount?: InputMaybe<Scalars["PositiveDecimal"]>;
  /**
   * External ID of this order.
   *
   * Added in Saleor 3.10.
   */
  externalReference?: InputMaybe<Scalars["String"]>;
  /** URL of a view where users should be redirected to see the order details. URL in RFC 1808 format. */
  redirectUrl?: InputMaybe<Scalars["String"]>;
  /** Shipping address of the customer. */
  shippingAddress?: InputMaybe<IAddressInput>;
  /** ID of a selected shipping method. */
  shippingMethod?: InputMaybe<Scalars["ID"]>;
  /** Customer associated with the draft order. */
  user?: InputMaybe<Scalars["ID"]>;
  /** Email address of the customer. */
  userEmail?: InputMaybe<Scalars["String"]>;
  /** ID of the voucher associated with the order. */
  voucher?: InputMaybe<Scalars["ID"]>;
};

/**
 * Deletes order lines.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type IDraftOrderLinesBulkDelete = {
  __typename?: "DraftOrderLinesBulkDelete";
  /** Returns how many objects were affected. */
  count: Scalars["Int"];
  errors: Array<IOrderError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<IOrderError>;
};

/**
 * Updates a draft order.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type IDraftOrderUpdate = {
  __typename?: "DraftOrderUpdate";
  errors: Array<IOrderError>;
  order?: Maybe<IOrder>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<IOrderError>;
};

/**
 * Event sent when draft order is updated.
 *
 * Added in Saleor 3.2.
 */
export type IDraftOrderUpdated = IEvent & {
  __typename?: "DraftOrderUpdated";
  /** Time of the event. */
  issuedAt?: Maybe<Scalars["DateTime"]>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IIssuingPrincipal>;
  /** The order the event relates to. */
  order?: Maybe<IOrder>;
  /** The application receiving the webhook. */
  recipient?: Maybe<IApp>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars["String"]>;
};

export type IErrorPolicyEnum =
  /** Save what is possible within a single row. If there are errors in an input data row, try to save it partially and skip the invalid part. */
  | "IGNORE_FAILED"
  /** Reject all rows if there is at least one error in any of them. */
  | "REJECT_EVERYTHING"
  /** Reject rows with errors. */
  | "REJECT_FAILED_ROWS";

export type IEvent = {
  /** Time of the event. */
  issuedAt?: Maybe<Scalars["DateTime"]>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IIssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<IApp>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars["String"]>;
};

/** Event delivery. */
export type IEventDelivery = INode & {
  __typename?: "EventDelivery";
  /** Event delivery attempts. */
  attempts?: Maybe<IEventDeliveryAttemptCountableConnection>;
  /** Creation time of an event delivery. */
  createdAt: Scalars["DateTime"];
  /** Webhook event type. */
  eventType: IWebhookEventTypeEnum;
  /** The ID of an event delivery. */
  id: Scalars["ID"];
  /** Event payload. */
  payload?: Maybe<Scalars["String"]>;
  /** Event delivery status. */
  status: IEventDeliveryStatusEnum;
};

/** Event delivery. */
export type IEventDeliveryAttemptsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  sortBy?: InputMaybe<IEventDeliveryAttemptSortingInput>;
};

/** Event delivery attempts. */
export type IEventDeliveryAttempt = INode & {
  __typename?: "EventDeliveryAttempt";
  /** Event delivery creation date and time. */
  createdAt: Scalars["DateTime"];
  /** Delivery attempt duration. */
  duration?: Maybe<Scalars["Float"]>;
  /** The ID of Event Delivery Attempt. */
  id: Scalars["ID"];
  /** Request headers for delivery attempt. */
  requestHeaders?: Maybe<Scalars["String"]>;
  /** Delivery attempt response content. */
  response?: Maybe<Scalars["String"]>;
  /** Response headers for delivery attempt. */
  responseHeaders?: Maybe<Scalars["String"]>;
  /** Delivery attempt response status code. */
  responseStatusCode?: Maybe<Scalars["Int"]>;
  /** Event delivery status. */
  status: IEventDeliveryStatusEnum;
  /** Task id for delivery attempt. */
  taskId?: Maybe<Scalars["String"]>;
};

export type IEventDeliveryAttemptCountableConnection = {
  __typename?: "EventDeliveryAttemptCountableConnection";
  edges: Array<IEventDeliveryAttemptCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: IPageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars["Int"]>;
};

export type IEventDeliveryAttemptCountableEdge = {
  __typename?: "EventDeliveryAttemptCountableEdge";
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node: IEventDeliveryAttempt;
};

export type IEventDeliveryAttemptSortField =
  /** Sort event delivery attempts by created at. */
  "CREATED_AT";

export type IEventDeliveryAttemptSortingInput = {
  /** Specifies the direction in which to sort attempts. */
  direction: IOrderDirection;
  /** Sort attempts by the selected field. */
  field: IEventDeliveryAttemptSortField;
};

export type IEventDeliveryCountableConnection = {
  __typename?: "EventDeliveryCountableConnection";
  edges: Array<IEventDeliveryCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: IPageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars["Int"]>;
};

export type IEventDeliveryCountableEdge = {
  __typename?: "EventDeliveryCountableEdge";
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node: IEventDelivery;
};

export type IEventDeliveryFilterInput = {
  eventType?: InputMaybe<IWebhookEventTypeEnum>;
  status?: InputMaybe<IEventDeliveryStatusEnum>;
};

/**
 * Retries event delivery.
 *
 * Requires one of the following permissions: MANAGE_APPS.
 */
export type IEventDeliveryRetry = {
  __typename?: "EventDeliveryRetry";
  /** Event delivery. */
  delivery?: Maybe<IEventDelivery>;
  errors: Array<IWebhookError>;
};

export type IEventDeliverySortField =
  /** Sort event deliveries by created at. */
  "CREATED_AT";

export type IEventDeliverySortingInput = {
  /** Specifies the direction in which to sort deliveries. */
  direction: IOrderDirection;
  /** Sort deliveries by the selected field. */
  field: IEventDeliverySortField;
};

export type IEventDeliveryStatusEnum = "FAILED" | "PENDING" | "SUCCESS";

export type IExportError = {
  __typename?: "ExportError";
  /** The error code. */
  code: IExportErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars["String"]>;
  /** The error message. */
  message?: Maybe<Scalars["String"]>;
};

/** An enumeration. */
export type IExportErrorCode =
  | "GRAPHQL_ERROR"
  | "INVALID"
  | "NOT_FOUND"
  | "REQUIRED";

/** History log of export file. */
export type IExportEvent = INode & {
  __typename?: "ExportEvent";
  /** App which performed the action. Requires one of the following permissions: OWNER, MANAGE_APPS. */
  app?: Maybe<IApp>;
  /** Date when event happened at in ISO 8601 format. */
  date: Scalars["DateTime"];
  /** The ID of the object. */
  id: Scalars["ID"];
  /** Content of the event. */
  message: Scalars["String"];
  /** Export event type. */
  type: IExportEventsEnum;
  /** User who performed the action. Requires one of the following permissions: OWNER, MANAGE_STAFF. */
  user?: Maybe<IUser>;
};

/** An enumeration. */
export type IExportEventsEnum =
  | "EXPORTED_FILE_SENT"
  | "EXPORT_DELETED"
  | "EXPORT_FAILED"
  | "EXPORT_FAILED_INFO_SENT"
  | "EXPORT_PENDING"
  | "EXPORT_SUCCESS";

/** Represents a job data of exported file. */
export type IExportFile = IJob &
  INode & {
    __typename?: "ExportFile";
    /** The app which requests file export. */
    app?: Maybe<IApp>;
    /** Created date time of job in ISO 8601 format. */
    createdAt: Scalars["DateTime"];
    /** List of events associated with the export. */
    events?: Maybe<Array<IExportEvent>>;
    /** The ID of the export file. */
    id: Scalars["ID"];
    /** Job message. */
    message?: Maybe<Scalars["String"]>;
    /** Job status. */
    status: IJobStatusEnum;
    /** Date time of job last update in ISO 8601 format. */
    updatedAt: Scalars["DateTime"];
    /** The URL of field to download. */
    url?: Maybe<Scalars["String"]>;
    /** The user who requests file export. */
    user?: Maybe<IUser>;
  };

export type IExportFileCountableConnection = {
  __typename?: "ExportFileCountableConnection";
  edges: Array<IExportFileCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: IPageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars["Int"]>;
};

export type IExportFileCountableEdge = {
  __typename?: "ExportFileCountableEdge";
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node: IExportFile;
};

export type IExportFileFilterInput = {
  app?: InputMaybe<Scalars["String"]>;
  createdAt?: InputMaybe<IDateTimeRangeInput>;
  status?: InputMaybe<IJobStatusEnum>;
  updatedAt?: InputMaybe<IDateTimeRangeInput>;
  user?: InputMaybe<Scalars["String"]>;
};

export type IExportFileSortField =
  | "CREATED_AT"
  | "LAST_MODIFIED_AT"
  | "STATUS"
  | "UPDATED_AT";

export type IExportFileSortingInput = {
  /** Specifies the direction in which to sort export file. */
  direction: IOrderDirection;
  /** Sort export file by the selected field. */
  field: IExportFileSortField;
};

/**
 * Export gift cards to csv file.
 *
 * Added in Saleor 3.1.
 *
 * Requires one of the following permissions: MANAGE_GIFT_CARD.
 *
 * Triggers the following webhook events:
 * - NOTIFY_USER (async): A notification for the exported file.
 */
export type IExportGiftCards = {
  __typename?: "ExportGiftCards";
  errors: Array<IExportError>;
  /** The newly created export file job which is responsible for export data. */
  exportFile?: Maybe<IExportFile>;
};

export type IExportGiftCardsInput = {
  /** Type of exported file. */
  fileType: IFileTypesEnum;
  /** Filtering options for gift cards. */
  filter?: InputMaybe<IGiftCardFilterInput>;
  /** List of gift cards IDs to export. */
  ids?: InputMaybe<Array<Scalars["ID"]>>;
  /** Determine which gift cards should be exported. */
  scope: IExportScope;
};

export type IExportInfoInput = {
  /** List of attribute ids witch should be exported. */
  attributes?: InputMaybe<Array<Scalars["ID"]>>;
  /** List of channels ids which should be exported. */
  channels?: InputMaybe<Array<Scalars["ID"]>>;
  /** List of product fields witch should be exported. */
  fields?: InputMaybe<Array<IProductFieldEnum>>;
  /** List of warehouse ids witch should be exported. */
  warehouses?: InputMaybe<Array<Scalars["ID"]>>;
};

/**
 * Export products to csv file.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 *
 * Triggers the following webhook events:
 * - NOTIFY_USER (async): A notification for the exported file.
 */
export type IExportProducts = {
  __typename?: "ExportProducts";
  errors: Array<IExportError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  exportErrors: Array<IExportError>;
  /** The newly created export file job which is responsible for export data. */
  exportFile?: Maybe<IExportFile>;
};

export type IExportProductsInput = {
  /** Input with info about fields which should be exported. */
  exportInfo?: InputMaybe<IExportInfoInput>;
  /** Type of exported file. */
  fileType: IFileTypesEnum;
  /** Filtering options for products. */
  filter?: InputMaybe<IProductFilterInput>;
  /** List of products IDs to export. */
  ids?: InputMaybe<Array<Scalars["ID"]>>;
  /** Determine which products should be exported. */
  scope: IExportScope;
};

export type IExportScope =
  /** Export all products. */
  | "ALL"
  /** Export the filtered products. */
  | "FILTER"
  /** Export products with given ids. */
  | "IDS";

/** External authentication plugin. */
export type IExternalAuthentication = {
  __typename?: "ExternalAuthentication";
  /** ID of external authentication plugin. */
  id: Scalars["String"];
  /** Name of external authentication plugin. */
  name?: Maybe<Scalars["String"]>;
};

/** Prepare external authentication URL for user by custom plugin. */
export type IExternalAuthenticationUrl = {
  __typename?: "ExternalAuthenticationUrl";
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<IAccountError>;
  /** The data returned by authentication plugin. */
  authenticationData?: Maybe<Scalars["JSONString"]>;
  errors: Array<IAccountError>;
};

/** Logout user by custom plugin. */
export type IExternalLogout = {
  __typename?: "ExternalLogout";
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<IAccountError>;
  errors: Array<IAccountError>;
  /** The data returned by authentication plugin. */
  logoutData?: Maybe<Scalars["JSONString"]>;
};

export type IExternalNotificationError = {
  __typename?: "ExternalNotificationError";
  /** The error code. */
  code: IExternalNotificationErrorCodes;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars["String"]>;
  /** The error message. */
  message?: Maybe<Scalars["String"]>;
};

/** An enumeration. */
export type IExternalNotificationErrorCodes =
  | "CHANNEL_INACTIVE"
  | "INVALID_MODEL_TYPE"
  | "NOT_FOUND"
  | "REQUIRED";

/**
 * Trigger sending a notification with the notify plugin method. Serializes nodes provided as ids parameter and includes this data in the notification payload.
 *
 * Added in Saleor 3.1.
 */
export type IExternalNotificationTrigger = {
  __typename?: "ExternalNotificationTrigger";
  errors: Array<IExternalNotificationError>;
};

export type IExternalNotificationTriggerInput = {
  /** External event type. This field is passed to a plugin as an event type. */
  externalEventType: Scalars["String"];
  /** Additional payload that will be merged with the one based on the bussines object ID. */
  extraPayload?: InputMaybe<Scalars["JSONString"]>;
  /** The list of customers or orders node IDs that will be serialized and included in the notification payload. */
  ids: Array<Scalars["ID"]>;
};

/** Obtain external access tokens for user by custom plugin. */
export type IExternalObtainAccessTokens = {
  __typename?: "ExternalObtainAccessTokens";
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<IAccountError>;
  /** CSRF token required to re-generate external access token. */
  csrfToken?: Maybe<Scalars["String"]>;
  errors: Array<IAccountError>;
  /** The refresh token, required to re-generate external access token. */
  refreshToken?: Maybe<Scalars["String"]>;
  /** The token, required to authenticate. */
  token?: Maybe<Scalars["String"]>;
  /** A user instance. */
  user?: Maybe<IUser>;
};

/** Refresh user's access by custom plugin. */
export type IExternalRefresh = {
  __typename?: "ExternalRefresh";
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<IAccountError>;
  /** CSRF token required to re-generate external access token. */
  csrfToken?: Maybe<Scalars["String"]>;
  errors: Array<IAccountError>;
  /** The refresh token, required to re-generate external access token. */
  refreshToken?: Maybe<Scalars["String"]>;
  /** The token, required to authenticate. */
  token?: Maybe<Scalars["String"]>;
  /** A user instance. */
  user?: Maybe<IUser>;
};

/** Verify external authentication data by plugin. */
export type IExternalVerify = {
  __typename?: "ExternalVerify";
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<IAccountError>;
  errors: Array<IAccountError>;
  /** Determine if authentication data is valid or not. */
  isValid: Scalars["Boolean"];
  /** User assigned to data. */
  user?: Maybe<IUser>;
  /** External data. */
  verifyData?: Maybe<Scalars["JSONString"]>;
};

export type IFile = {
  __typename?: "File";
  /** Content type of the file. */
  contentType?: Maybe<Scalars["String"]>;
  /** The URL of the file. */
  url: Scalars["String"];
};

/** An enumeration. */
export type IFileTypesEnum = "CSV" | "XLSX";

/**
 * Upload a file. This mutation must be sent as a `multipart` request. More detailed specs of the upload format can be found here: https://github.com/jaydenseric/graphql-multipart-request-spec
 *
 * Requires one of the following permissions: AUTHENTICATED_APP, AUTHENTICATED_STAFF_USER.
 */
export type IFileUpload = {
  __typename?: "FileUpload";
  errors: Array<IUploadError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  uploadErrors: Array<IUploadError>;
  uploadedFile?: Maybe<IFile>;
};

/** Represents order fulfillment. */
export type IFulfillment = INode &
  IObjectWithMetadata & {
    __typename?: "Fulfillment";
    created: Scalars["DateTime"];
    fulfillmentOrder: Scalars["Int"];
    id: Scalars["ID"];
    /** List of lines for the fulfillment. */
    lines?: Maybe<Array<IFulfillmentLine>>;
    /** List of public metadata items. Can be accessed without permissions. */
    metadata: Array<IMetadataItem>;
    /**
     * A single key from public metadata.
     *
     * Tip: Use GraphQL aliases to fetch multiple keys.
     *
     * Added in Saleor 3.3.
     */
    metafield?: Maybe<Scalars["String"]>;
    /**
     * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
     *
     * Added in Saleor 3.3.
     */
    metafields?: Maybe<Scalars["Metadata"]>;
    /** List of private metadata items. Requires staff permissions to access. */
    privateMetadata: Array<IMetadataItem>;
    /**
     * A single key from private metadata. Requires staff permissions to access.
     *
     * Tip: Use GraphQL aliases to fetch multiple keys.
     *
     * Added in Saleor 3.3.
     */
    privateMetafield?: Maybe<Scalars["String"]>;
    /**
     * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
     *
     * Added in Saleor 3.3.
     */
    privateMetafields?: Maybe<Scalars["Metadata"]>;
    status: IFulfillmentStatus;
    /** User-friendly fulfillment status. */
    statusDisplay?: Maybe<Scalars["String"]>;
    trackingNumber: Scalars["String"];
    /** Warehouse from fulfillment was fulfilled. */
    warehouse?: Maybe<IWarehouse>;
  };

/** Represents order fulfillment. */
export type IFulfillmentMetafieldArgs = {
  key: Scalars["String"];
};

/** Represents order fulfillment. */
export type IFulfillmentMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars["String"]>>;
};

/** Represents order fulfillment. */
export type IFulfillmentPrivateMetafieldArgs = {
  key: Scalars["String"];
};

/** Represents order fulfillment. */
export type IFulfillmentPrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars["String"]>>;
};

/**
 * Approve existing fulfillment.
 *
 * Added in Saleor 3.1.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type IFulfillmentApprove = {
  __typename?: "FulfillmentApprove";
  errors: Array<IOrderError>;
  /** An approved fulfillment. */
  fulfillment?: Maybe<IFulfillment>;
  /** Order which fulfillment was approved. */
  order?: Maybe<IOrder>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<IOrderError>;
};

/**
 * Event sent when fulfillment is approved.
 *
 * Added in Saleor 3.7.
 */
export type IFulfillmentApproved = IEvent & {
  __typename?: "FulfillmentApproved";
  /** The fulfillment the event relates to. */
  fulfillment?: Maybe<IFulfillment>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars["DateTime"]>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IIssuingPrincipal>;
  /** The order the fulfillment belongs to. */
  order?: Maybe<IOrder>;
  /** The application receiving the webhook. */
  recipient?: Maybe<IApp>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars["String"]>;
};

/**
 * Cancels existing fulfillment and optionally restocks items.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type IFulfillmentCancel = {
  __typename?: "FulfillmentCancel";
  errors: Array<IOrderError>;
  /** A canceled fulfillment. */
  fulfillment?: Maybe<IFulfillment>;
  /** Order which fulfillment was cancelled. */
  order?: Maybe<IOrder>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<IOrderError>;
};

export type IFulfillmentCancelInput = {
  /** ID of a warehouse where items will be restocked. Optional when fulfillment is in WAITING_FOR_APPROVAL state. */
  warehouseId?: InputMaybe<Scalars["ID"]>;
};

/**
 * Event sent when fulfillment is canceled.
 *
 * Added in Saleor 3.4.
 */
export type IFulfillmentCanceled = IEvent & {
  __typename?: "FulfillmentCanceled";
  /** The fulfillment the event relates to. */
  fulfillment?: Maybe<IFulfillment>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars["DateTime"]>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IIssuingPrincipal>;
  /** The order the fulfillment belongs to. */
  order?: Maybe<IOrder>;
  /** The application receiving the webhook. */
  recipient?: Maybe<IApp>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars["String"]>;
};

/**
 * Event sent when new fulfillment is created.
 *
 * Added in Saleor 3.4.
 */
export type IFulfillmentCreated = IEvent & {
  __typename?: "FulfillmentCreated";
  /** The fulfillment the event relates to. */
  fulfillment?: Maybe<IFulfillment>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars["DateTime"]>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IIssuingPrincipal>;
  /** The order the fulfillment belongs to. */
  order?: Maybe<IOrder>;
  /** The application receiving the webhook. */
  recipient?: Maybe<IApp>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars["String"]>;
};

/** Represents line of the fulfillment. */
export type IFulfillmentLine = INode & {
  __typename?: "FulfillmentLine";
  id: Scalars["ID"];
  orderLine?: Maybe<IOrderLine>;
  quantity: Scalars["Int"];
};

/**
 * Event sent when fulfillment metadata is updated.
 *
 * Added in Saleor 3.8.
 */
export type IFulfillmentMetadataUpdated = IEvent & {
  __typename?: "FulfillmentMetadataUpdated";
  /** The fulfillment the event relates to. */
  fulfillment?: Maybe<IFulfillment>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars["DateTime"]>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IIssuingPrincipal>;
  /** The order the fulfillment belongs to. */
  order?: Maybe<IOrder>;
  /** The application receiving the webhook. */
  recipient?: Maybe<IApp>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars["String"]>;
};

/**
 * Refund products.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type IFulfillmentRefundProducts = {
  __typename?: "FulfillmentRefundProducts";
  errors: Array<IOrderError>;
  /** A refunded fulfillment. */
  fulfillment?: Maybe<IFulfillment>;
  /** Order which fulfillment was refunded. */
  order?: Maybe<IOrder>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<IOrderError>;
};

/**
 * Return products.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type IFulfillmentReturnProducts = {
  __typename?: "FulfillmentReturnProducts";
  errors: Array<IOrderError>;
  /** Order which fulfillment was returned. */
  order?: Maybe<IOrder>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<IOrderError>;
  /** A replace fulfillment. */
  replaceFulfillment?: Maybe<IFulfillment>;
  /** A draft order which was created for products with replace flag. */
  replaceOrder?: Maybe<IOrder>;
  /** A return fulfillment. */
  returnFulfillment?: Maybe<IFulfillment>;
};

/** An enumeration. */
export type IFulfillmentStatus =
  | "CANCELED"
  | "FULFILLED"
  | "REFUNDED"
  | "REFUNDED_AND_RETURNED"
  | "REPLACED"
  | "RETURNED"
  | "WAITING_FOR_APPROVAL";

/**
 * Updates a fulfillment for an order.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type IFulfillmentUpdateTracking = {
  __typename?: "FulfillmentUpdateTracking";
  errors: Array<IOrderError>;
  /** A fulfillment with updated tracking. */
  fulfillment?: Maybe<IFulfillment>;
  /** Order for which fulfillment was updated. */
  order?: Maybe<IOrder>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<IOrderError>;
};

export type IFulfillmentUpdateTrackingInput = {
  /** If true, send an email notification to the customer. */
  notifyCustomer?: InputMaybe<Scalars["Boolean"]>;
  /** Fulfillment tracking number. */
  trackingNumber?: InputMaybe<Scalars["String"]>;
};

/** Payment gateway client configuration key and value pair. */
export type IGatewayConfigLine = {
  __typename?: "GatewayConfigLine";
  /** Gateway config key. */
  field: Scalars["String"];
  /** Gateway config value for key. */
  value?: Maybe<Scalars["String"]>;
};

/** A gift card is a prepaid electronic payment card accepted in stores. They can be used during checkout by providing a valid gift card codes. */
export type IGiftCard = INode &
  IObjectWithMetadata & {
    __typename?: "GiftCard";
    /**
     * App which created the gift card.
     *
     * Added in Saleor 3.1.
     *
     * Requires one of the following permissions: MANAGE_APPS, OWNER.
     */
    app?: Maybe<IApp>;
    /**
     * Slug of the channel where the gift card was bought.
     *
     * Added in Saleor 3.1.
     */
    boughtInChannel?: Maybe<Scalars["String"]>;
    /** Gift card code. Can be fetched by a staff member with MANAGE_GIFT_CARD when gift card wasn't yet used and by the gift card owner. */
    code: Scalars["String"];
    created: Scalars["DateTime"];
    /**
     * The user who bought or issued a gift card.
     *
     * Added in Saleor 3.1.
     */
    createdBy?: Maybe<IUser>;
    /**
     * Email address of the user who bought or issued gift card.
     *
     * Added in Saleor 3.1.
     *
     * Requires one of the following permissions: MANAGE_USERS, OWNER.
     */
    createdByEmail?: Maybe<Scalars["String"]>;
    currentBalance: IMoney;
    /** Code in format which allows displaying in a user interface. */
    displayCode: Scalars["String"];
    /**
     * End date of gift card.
     * @deprecated This field will be removed in Saleor 4.0. Use `expiryDate` field instead.
     */
    endDate?: Maybe<Scalars["DateTime"]>;
    /**
     * List of events associated with the gift card.
     *
     * Added in Saleor 3.1.
     *
     * Requires one of the following permissions: MANAGE_GIFT_CARD.
     */
    events: Array<IGiftCardEvent>;
    expiryDate?: Maybe<Scalars["Date"]>;
    id: Scalars["ID"];
    initialBalance: IMoney;
    isActive: Scalars["Boolean"];
    /** Last 4 characters of gift card code. */
    last4CodeChars: Scalars["String"];
    lastUsedOn?: Maybe<Scalars["DateTime"]>;
    /** List of public metadata items. Can be accessed without permissions. */
    metadata: Array<IMetadataItem>;
    /**
     * A single key from public metadata.
     *
     * Tip: Use GraphQL aliases to fetch multiple keys.
     *
     * Added in Saleor 3.3.
     */
    metafield?: Maybe<Scalars["String"]>;
    /**
     * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
     *
     * Added in Saleor 3.3.
     */
    metafields?: Maybe<Scalars["Metadata"]>;
    /** List of private metadata items. Requires staff permissions to access. */
    privateMetadata: Array<IMetadataItem>;
    /**
     * A single key from private metadata. Requires staff permissions to access.
     *
     * Tip: Use GraphQL aliases to fetch multiple keys.
     *
     * Added in Saleor 3.3.
     */
    privateMetafield?: Maybe<Scalars["String"]>;
    /**
     * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
     *
     * Added in Saleor 3.3.
     */
    privateMetafields?: Maybe<Scalars["Metadata"]>;
    /**
     * Related gift card product.
     *
     * Added in Saleor 3.1.
     */
    product?: Maybe<IProduct>;
    /**
     * Start date of gift card.
     * @deprecated This field will be removed in Saleor 4.0.
     */
    startDate?: Maybe<Scalars["DateTime"]>;
    /**
     * The gift card tag.
     *
     * Added in Saleor 3.1.
     *
     * Requires one of the following permissions: MANAGE_GIFT_CARD.
     */
    tags: Array<IGiftCardTag>;
    /**
     * The customer who used a gift card.
     *
     * Added in Saleor 3.1.
     * @deprecated This field will be removed in Saleor 4.0.
     */
    usedBy?: Maybe<IUser>;
    /**
     * Email address of the customer who used a gift card.
     *
     * Added in Saleor 3.1.
     * @deprecated This field will be removed in Saleor 4.0.
     */
    usedByEmail?: Maybe<Scalars["String"]>;
    /**
     * The customer who bought a gift card.
     * @deprecated This field will be removed in Saleor 4.0. Use `createdBy` field instead.
     */
    user?: Maybe<IUser>;
  };

/** A gift card is a prepaid electronic payment card accepted in stores. They can be used during checkout by providing a valid gift card codes. */
export type IGiftCardEventsArgs = {
  filter?: InputMaybe<IGiftCardEventFilterInput>;
};

/** A gift card is a prepaid electronic payment card accepted in stores. They can be used during checkout by providing a valid gift card codes. */
export type IGiftCardMetafieldArgs = {
  key: Scalars["String"];
};

/** A gift card is a prepaid electronic payment card accepted in stores. They can be used during checkout by providing a valid gift card codes. */
export type IGiftCardMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars["String"]>>;
};

/** A gift card is a prepaid electronic payment card accepted in stores. They can be used during checkout by providing a valid gift card codes. */
export type IGiftCardPrivateMetafieldArgs = {
  key: Scalars["String"];
};

/** A gift card is a prepaid electronic payment card accepted in stores. They can be used during checkout by providing a valid gift card codes. */
export type IGiftCardPrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars["String"]>>;
};

/**
 * Activate a gift card.
 *
 * Requires one of the following permissions: MANAGE_GIFT_CARD.
 *
 * Triggers the following webhook events:
 * - GIFT_CARD_STATUS_CHANGED (async): A gift card was activated.
 */
export type IGiftCardActivate = {
  __typename?: "GiftCardActivate";
  errors: Array<IGiftCardError>;
  /** Activated gift card. */
  giftCard?: Maybe<IGiftCard>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  giftCardErrors: Array<IGiftCardError>;
};

/**
 * Adds note to the gift card.
 *
 * Added in Saleor 3.1.
 *
 * Requires one of the following permissions: MANAGE_GIFT_CARD.
 *
 * Triggers the following webhook events:
 * - GIFT_CARD_UPDATED (async): A gift card was updated.
 */
export type IGiftCardAddNote = {
  __typename?: "GiftCardAddNote";
  errors: Array<IGiftCardError>;
  /** Gift card note created. */
  event?: Maybe<IGiftCardEvent>;
  /** Gift card with the note added. */
  giftCard?: Maybe<IGiftCard>;
};

export type IGiftCardAddNoteInput = {
  /** Note message. */
  message: Scalars["String"];
};

/**
 * Activate gift cards.
 *
 * Added in Saleor 3.1.
 *
 * Requires one of the following permissions: MANAGE_GIFT_CARD.
 *
 * Triggers the following webhook events:
 * - GIFT_CARD_STATUS_CHANGED (async): A gift card was activated.
 */
export type IGiftCardBulkActivate = {
  __typename?: "GiftCardBulkActivate";
  /** Returns how many objects were affected. */
  count: Scalars["Int"];
  errors: Array<IGiftCardError>;
};

/**
 * Create gift cards.
 *
 * Added in Saleor 3.1.
 *
 * Requires one of the following permissions: MANAGE_GIFT_CARD.
 *
 * Triggers the following webhook events:
 * - GIFT_CARD_CREATED (async): A gift card was created.
 * - NOTIFY_USER (async): A notification for created gift card.
 */
export type IGiftCardBulkCreate = {
  __typename?: "GiftCardBulkCreate";
  /** Returns how many objects were created. */
  count: Scalars["Int"];
  errors: Array<IGiftCardError>;
  /** List of created gift cards. */
  giftCards: Array<IGiftCard>;
};

export type IGiftCardBulkCreateInput = {
  /** Balance of the gift card. */
  balance: IPriceInput;
  /** The number of cards to issue. */
  count: Scalars["Int"];
  /** The gift card expiry date. */
  expiryDate?: InputMaybe<Scalars["Date"]>;
  /** Determine if gift card is active. */
  isActive: Scalars["Boolean"];
  /** The gift card tags. */
  tags?: InputMaybe<Array<Scalars["String"]>>;
};

/**
 * Deactivate gift cards.
 *
 * Added in Saleor 3.1.
 *
 * Requires one of the following permissions: MANAGE_GIFT_CARD.
 *
 * Triggers the following webhook events:
 * - GIFT_CARD_STATUS_CHANGED (async): A gift card was deactivated.
 */
export type IGiftCardBulkDeactivate = {
  __typename?: "GiftCardBulkDeactivate";
  /** Returns how many objects were affected. */
  count: Scalars["Int"];
  errors: Array<IGiftCardError>;
};

/**
 * Delete gift cards.
 *
 * Added in Saleor 3.1.
 *
 * Requires one of the following permissions: MANAGE_GIFT_CARD.
 *
 * Triggers the following webhook events:
 * - GIFT_CARD_DELETED (async): A gift card was deleted.
 */
export type IGiftCardBulkDelete = {
  __typename?: "GiftCardBulkDelete";
  /** Returns how many objects were affected. */
  count: Scalars["Int"];
  errors: Array<IGiftCardError>;
};

export type IGiftCardCountableConnection = {
  __typename?: "GiftCardCountableConnection";
  edges: Array<IGiftCardCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: IPageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars["Int"]>;
};

export type IGiftCardCountableEdge = {
  __typename?: "GiftCardCountableEdge";
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node: IGiftCard;
};

/**
 * Creates a new gift card.
 *
 * Requires one of the following permissions: MANAGE_GIFT_CARD.
 *
 * Triggers the following webhook events:
 * - GIFT_CARD_CREATED (async): A gift card was created.
 * - NOTIFY_USER (async): A notification for created gift card.
 */
export type IGiftCardCreate = {
  __typename?: "GiftCardCreate";
  errors: Array<IGiftCardError>;
  giftCard?: Maybe<IGiftCard>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  giftCardErrors: Array<IGiftCardError>;
};

export type IGiftCardCreateInput = {
  /**
   * The gift card tags to add.
   *
   * Added in Saleor 3.1.
   */
  addTags?: InputMaybe<Array<Scalars["String"]>>;
  /** Balance of the gift card. */
  balance: IPriceInput;
  /**
   * Slug of a channel from which the email should be sent.
   *
   * Added in Saleor 3.1.
   */
  channel?: InputMaybe<Scalars["String"]>;
  /**
   * Code to use the gift card.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. The code is now auto generated.
   */
  code?: InputMaybe<Scalars["String"]>;
  /**
   * End date of the gift card in ISO 8601 format.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Use `expiryDate` from `expirySettings` instead.
   */
  endDate?: InputMaybe<Scalars["Date"]>;
  /**
   * The gift card expiry date.
   *
   * Added in Saleor 3.1.
   */
  expiryDate?: InputMaybe<Scalars["Date"]>;
  /**
   * Determine if gift card is active.
   *
   * Added in Saleor 3.1.
   */
  isActive: Scalars["Boolean"];
  /**
   * The gift card note from the staff member.
   *
   * Added in Saleor 3.1.
   */
  note?: InputMaybe<Scalars["String"]>;
  /**
   * Start date of the gift card in ISO 8601 format.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0.
   */
  startDate?: InputMaybe<Scalars["Date"]>;
  /** Email of the customer to whom gift card will be sent. */
  userEmail?: InputMaybe<Scalars["String"]>;
};

/**
 * Event sent when new gift card is created.
 *
 * Added in Saleor 3.2.
 */
export type IGiftCardCreated = IEvent & {
  __typename?: "GiftCardCreated";
  /** The gift card the event relates to. */
  giftCard?: Maybe<IGiftCard>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars["DateTime"]>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IIssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<IApp>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars["String"]>;
};

/**
 * Deactivate a gift card.
 *
 * Requires one of the following permissions: MANAGE_GIFT_CARD.
 *
 * Triggers the following webhook events:
 * - GIFT_CARD_STATUS_CHANGED (async): A gift card was deactivated.
 */
export type IGiftCardDeactivate = {
  __typename?: "GiftCardDeactivate";
  errors: Array<IGiftCardError>;
  /** Deactivated gift card. */
  giftCard?: Maybe<IGiftCard>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  giftCardErrors: Array<IGiftCardError>;
};

/**
 * Delete gift card.
 *
 * Added in Saleor 3.1.
 *
 * Requires one of the following permissions: MANAGE_GIFT_CARD.
 *
 * Triggers the following webhook events:
 * - GIFT_CARD_DELETED (async): A gift card was deleted.
 */
export type IGiftCardDelete = {
  __typename?: "GiftCardDelete";
  errors: Array<IGiftCardError>;
  giftCard?: Maybe<IGiftCard>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  giftCardErrors: Array<IGiftCardError>;
};

/**
 * Event sent when gift card is deleted.
 *
 * Added in Saleor 3.2.
 */
export type IGiftCardDeleted = IEvent & {
  __typename?: "GiftCardDeleted";
  /** The gift card the event relates to. */
  giftCard?: Maybe<IGiftCard>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars["DateTime"]>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IIssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<IApp>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars["String"]>;
};

export type IGiftCardError = {
  __typename?: "GiftCardError";
  /** The error code. */
  code: IGiftCardErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars["String"]>;
  /** The error message. */
  message?: Maybe<Scalars["String"]>;
  /** List of tag values that cause the error. */
  tags?: Maybe<Array<Scalars["String"]>>;
};

/** An enumeration. */
export type IGiftCardErrorCode =
  | "ALREADY_EXISTS"
  | "DUPLICATED_INPUT_ITEM"
  | "EXPIRED_GIFT_CARD"
  | "GRAPHQL_ERROR"
  | "INVALID"
  | "NOT_FOUND"
  | "REQUIRED"
  | "UNIQUE";

/**
 * History log of the gift card.
 *
 * Added in Saleor 3.1.
 */
export type IGiftCardEvent = INode & {
  __typename?: "GiftCardEvent";
  /** App that performed the action. Requires one of the following permissions: MANAGE_APPS, OWNER. */
  app?: Maybe<IApp>;
  /** The gift card balance. */
  balance?: Maybe<IGiftCardEventBalance>;
  /** Date when event happened at in ISO 8601 format. */
  date?: Maybe<Scalars["DateTime"]>;
  /** Email of the customer. */
  email?: Maybe<Scalars["String"]>;
  /** The gift card expiry date. */
  expiryDate?: Maybe<Scalars["Date"]>;
  id: Scalars["ID"];
  /** Content of the event. */
  message?: Maybe<Scalars["String"]>;
  /** Previous gift card expiry date. */
  oldExpiryDate?: Maybe<Scalars["Date"]>;
  /** The list of old gift card tags. */
  oldTags?: Maybe<Array<Scalars["String"]>>;
  /** The order ID where gift card was used or bought. */
  orderId?: Maybe<Scalars["ID"]>;
  /** User-friendly number of an order where gift card was used or bought. */
  orderNumber?: Maybe<Scalars["String"]>;
  /** The list of gift card tags. */
  tags?: Maybe<Array<Scalars["String"]>>;
  /** Gift card event type. */
  type?: Maybe<IGiftCardEventsEnum>;
  /** User who performed the action. Requires one of the following permissions: MANAGE_USERS, MANAGE_STAFF, OWNER. */
  user?: Maybe<IUser>;
};

export type IGiftCardEventBalance = {
  __typename?: "GiftCardEventBalance";
  /** Current balance of the gift card. */
  currentBalance: IMoney;
  /** Initial balance of the gift card. */
  initialBalance?: Maybe<IMoney>;
  /** Previous current balance of the gift card. */
  oldCurrentBalance?: Maybe<IMoney>;
  /** Previous initial balance of the gift card. */
  oldInitialBalance?: Maybe<IMoney>;
};

export type IGiftCardEventFilterInput = {
  orders?: InputMaybe<Array<Scalars["ID"]>>;
  type?: InputMaybe<IGiftCardEventsEnum>;
};

/** An enumeration. */
export type IGiftCardEventsEnum =
  | "ACTIVATED"
  | "BALANCE_RESET"
  | "BOUGHT"
  | "DEACTIVATED"
  | "EXPIRY_DATE_UPDATED"
  | "ISSUED"
  | "NOTE_ADDED"
  | "RESENT"
  | "SENT_TO_CUSTOMER"
  | "TAGS_UPDATED"
  | "UPDATED"
  | "USED_IN_ORDER";

export type IGiftCardFilterInput = {
  code?: InputMaybe<Scalars["String"]>;
  createdByEmail?: InputMaybe<Scalars["String"]>;
  currency?: InputMaybe<Scalars["String"]>;
  currentBalance?: InputMaybe<IPriceRangeInput>;
  initialBalance?: InputMaybe<IPriceRangeInput>;
  isActive?: InputMaybe<Scalars["Boolean"]>;
  metadata?: InputMaybe<Array<IMetadataFilter>>;
  products?: InputMaybe<Array<Scalars["ID"]>>;
  tags?: InputMaybe<Array<Scalars["String"]>>;
  used?: InputMaybe<Scalars["Boolean"]>;
  usedBy?: InputMaybe<Array<Scalars["ID"]>>;
};

/**
 * Event sent when gift card metadata is updated.
 *
 * Added in Saleor 3.8.
 */
export type IGiftCardMetadataUpdated = IEvent & {
  __typename?: "GiftCardMetadataUpdated";
  /** The gift card the event relates to. */
  giftCard?: Maybe<IGiftCard>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars["DateTime"]>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IIssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<IApp>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars["String"]>;
};

/**
 * Resend a gift card.
 *
 * Added in Saleor 3.1.
 *
 * Requires one of the following permissions: MANAGE_GIFT_CARD.
 *
 * Triggers the following webhook events:
 * - NOTIFY_USER (async): A notification for gift card resend.
 */
export type IGiftCardResend = {
  __typename?: "GiftCardResend";
  errors: Array<IGiftCardError>;
  /** Gift card which has been sent. */
  giftCard?: Maybe<IGiftCard>;
};

export type IGiftCardResendInput = {
  /** Slug of a channel from which the email should be sent. */
  channel: Scalars["String"];
  /** Email to which gift card should be send. */
  email?: InputMaybe<Scalars["String"]>;
  /** ID of a gift card to resend. */
  id: Scalars["ID"];
};

/**
 * Event sent when gift card is e-mailed.
 *
 * Added in Saleor 3.13.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type IGiftCardSent = IEvent & {
  __typename?: "GiftCardSent";
  /** Slug of a channel for which this gift card email was sent. */
  channel?: Maybe<Scalars["String"]>;
  /** The gift card the event relates to. */
  giftCard?: Maybe<IGiftCard>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars["DateTime"]>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IIssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<IApp>;
  /** E-mail address to which gift card was sent. */
  sentToEmail?: Maybe<Scalars["String"]>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars["String"]>;
};

/** Gift card related settings from site settings. */
export type IGiftCardSettings = {
  __typename?: "GiftCardSettings";
  /** The gift card expiry period settings. */
  expiryPeriod?: Maybe<ITimePeriod>;
  /** The gift card expiry type settings. */
  expiryType: IGiftCardSettingsExpiryTypeEnum;
};

export type IGiftCardSettingsError = {
  __typename?: "GiftCardSettingsError";
  /** The error code. */
  code: IGiftCardSettingsErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars["String"]>;
  /** The error message. */
  message?: Maybe<Scalars["String"]>;
};

/** An enumeration. */
export type IGiftCardSettingsErrorCode =
  | "GRAPHQL_ERROR"
  | "INVALID"
  | "REQUIRED";

/** An enumeration. */
export type IGiftCardSettingsExpiryTypeEnum = "EXPIRY_PERIOD" | "NEVER_EXPIRE";

/**
 * Update gift card settings.
 *
 * Requires one of the following permissions: MANAGE_GIFT_CARD.
 */
export type IGiftCardSettingsUpdate = {
  __typename?: "GiftCardSettingsUpdate";
  errors: Array<IGiftCardSettingsError>;
  /** Gift card settings. */
  giftCardSettings?: Maybe<IGiftCardSettings>;
};

export type IGiftCardSettingsUpdateInput = {
  /** Defines gift card expiry period. */
  expiryPeriod?: InputMaybe<ITimePeriodInputType>;
  /** Defines gift card default expiry settings. */
  expiryType?: InputMaybe<IGiftCardSettingsExpiryTypeEnum>;
};

export type IGiftCardSortField =
  /**
   * Sort gift cards by created at.
   *
   * Added in Saleor 3.8.
   */
  | "CREATED_AT"
  /** Sort gift cards by current balance. */
  | "CURRENT_BALANCE"
  /** Sort gift cards by product. */
  | "PRODUCT"
  /** Sort gift cards by used by. */
  | "USED_BY";

export type IGiftCardSortingInput = {
  /** Specifies the direction in which to sort gift cards. */
  direction: IOrderDirection;
  /** Sort gift cards by the selected field. */
  field: IGiftCardSortField;
};

/**
 * Event sent when gift card status has changed.
 *
 * Added in Saleor 3.2.
 */
export type IGiftCardStatusChanged = IEvent & {
  __typename?: "GiftCardStatusChanged";
  /** The gift card the event relates to. */
  giftCard?: Maybe<IGiftCard>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars["DateTime"]>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IIssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<IApp>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars["String"]>;
};

/**
 * The gift card tag.
 *
 * Added in Saleor 3.1.
 */
export type IGiftCardTag = INode & {
  __typename?: "GiftCardTag";
  id: Scalars["ID"];
  name: Scalars["String"];
};

export type IGiftCardTagCountableConnection = {
  __typename?: "GiftCardTagCountableConnection";
  edges: Array<IGiftCardTagCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: IPageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars["Int"]>;
};

export type IGiftCardTagCountableEdge = {
  __typename?: "GiftCardTagCountableEdge";
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node: IGiftCardTag;
};

export type IGiftCardTagFilterInput = {
  search?: InputMaybe<Scalars["String"]>;
};

/**
 * Update a gift card.
 *
 * Requires one of the following permissions: MANAGE_GIFT_CARD.
 *
 * Triggers the following webhook events:
 * - GIFT_CARD_UPDATED (async): A gift card was updated.
 */
export type IGiftCardUpdate = {
  __typename?: "GiftCardUpdate";
  errors: Array<IGiftCardError>;
  giftCard?: Maybe<IGiftCard>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  giftCardErrors: Array<IGiftCardError>;
};

export type IGiftCardUpdateInput = {
  /**
   * The gift card tags to add.
   *
   * Added in Saleor 3.1.
   */
  addTags?: InputMaybe<Array<Scalars["String"]>>;
  /**
   * The gift card balance amount.
   *
   * Added in Saleor 3.1.
   */
  balanceAmount?: InputMaybe<Scalars["PositiveDecimal"]>;
  /**
   * End date of the gift card in ISO 8601 format.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Use `expiryDate` from `expirySettings` instead.
   */
  endDate?: InputMaybe<Scalars["Date"]>;
  /**
   * The gift card expiry date.
   *
   * Added in Saleor 3.1.
   */
  expiryDate?: InputMaybe<Scalars["Date"]>;
  /**
   * The gift card tags to remove.
   *
   * Added in Saleor 3.1.
   */
  removeTags?: InputMaybe<Array<Scalars["String"]>>;
  /**
   * Start date of the gift card in ISO 8601 format.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0.
   */
  startDate?: InputMaybe<Scalars["Date"]>;
};

/**
 * Event sent when gift card is updated.
 *
 * Added in Saleor 3.2.
 */
export type IGiftCardUpdated = IEvent & {
  __typename?: "GiftCardUpdated";
  /** The gift card the event relates to. */
  giftCard?: Maybe<IGiftCard>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars["DateTime"]>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IIssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<IApp>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars["String"]>;
};

/**
 * Define the filtering options for foreign key fields.
 *
 * Added in Saleor 3.14.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type IGlobalIdFilterInput = {
  /** The value equal to. */
  eq?: InputMaybe<Scalars["ID"]>;
  /** The value included in. */
  oneOf?: InputMaybe<Array<Scalars["ID"]>>;
};

/** Represents permission group data. */
export type IGroup = INode & {
  __typename?: "Group";
  /**
   * List of channels the group has access to.
   *
   * Added in Saleor 3.14.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  accessibleChannels?: Maybe<Array<IChannel>>;
  /** The ID of the group. */
  id: Scalars["ID"];
  /** The name of the group. */
  name: Scalars["String"];
  /** List of group permissions */
  permissions?: Maybe<Array<IPermission>>;
  /**
   * Determine if the group have restricted access to channels.
   *
   * Added in Saleor 3.14.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  restrictedAccessToChannels: Scalars["Boolean"];
  /** True, if the currently authenticated user has rights to manage a group. */
  userCanManage: Scalars["Boolean"];
  /**
   * List of group users
   *
   * Requires one of the following permissions: MANAGE_STAFF.
   */
  users?: Maybe<Array<IUser>>;
};

export type IGroupCountableConnection = {
  __typename?: "GroupCountableConnection";
  edges: Array<IGroupCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: IPageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars["Int"]>;
};

export type IGroupCountableEdge = {
  __typename?: "GroupCountableEdge";
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node: IGroup;
};

/** Thumbnail formats for icon images. */
export type IIconThumbnailFormatEnum = "ORIGINAL" | "WEBP";

/** Represents an image. */
export type IImage = {
  __typename?: "Image";
  /** Alt text for an image. */
  alt?: Maybe<Scalars["String"]>;
  /** The URL of the image. */
  url: Scalars["String"];
};

export type IIntRangeInput = {
  /** Value greater than or equal to. */
  gte?: InputMaybe<Scalars["Int"]>;
  /** Value less than or equal to. */
  lte?: InputMaybe<Scalars["Int"]>;
};

/** Represents an Invoice. */
export type IInvoice = IJob &
  INode &
  IObjectWithMetadata & {
    __typename?: "Invoice";
    /** Date and time at which invoice was created. */
    createdAt: Scalars["DateTime"];
    /** URL to view an invoice. */
    externalUrl?: Maybe<Scalars["String"]>;
    /** The ID of the object. */
    id: Scalars["ID"];
    /** Message associated with an invoice. */
    message?: Maybe<Scalars["String"]>;
    /** List of public metadata items. Can be accessed without permissions. */
    metadata: Array<IMetadataItem>;
    /**
     * A single key from public metadata.
     *
     * Tip: Use GraphQL aliases to fetch multiple keys.
     *
     * Added in Saleor 3.3.
     */
    metafield?: Maybe<Scalars["String"]>;
    /**
     * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
     *
     * Added in Saleor 3.3.
     */
    metafields?: Maybe<Scalars["Metadata"]>;
    /** Invoice number. */
    number?: Maybe<Scalars["String"]>;
    /**
     * Order related to the invoice.
     *
     * Added in Saleor 3.10.
     */
    order?: Maybe<IOrder>;
    /** List of private metadata items. Requires staff permissions to access. */
    privateMetadata: Array<IMetadataItem>;
    /**
     * A single key from private metadata. Requires staff permissions to access.
     *
     * Tip: Use GraphQL aliases to fetch multiple keys.
     *
     * Added in Saleor 3.3.
     */
    privateMetafield?: Maybe<Scalars["String"]>;
    /**
     * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
     *
     * Added in Saleor 3.3.
     */
    privateMetafields?: Maybe<Scalars["Metadata"]>;
    /** Job status. */
    status: IJobStatusEnum;
    /** Date and time at which invoice was updated. */
    updatedAt: Scalars["DateTime"];
    /** URL to download an invoice. */
    url?: Maybe<Scalars["String"]>;
  };

/** Represents an Invoice. */
export type IInvoiceMetafieldArgs = {
  key: Scalars["String"];
};

/** Represents an Invoice. */
export type IInvoiceMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars["String"]>>;
};

/** Represents an Invoice. */
export type IInvoicePrivateMetafieldArgs = {
  key: Scalars["String"];
};

/** Represents an Invoice. */
export type IInvoicePrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars["String"]>>;
};

/**
 * Creates a ready to send invoice.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type IInvoiceCreate = {
  __typename?: "InvoiceCreate";
  errors: Array<IInvoiceError>;
  invoice?: Maybe<IInvoice>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  invoiceErrors: Array<IInvoiceError>;
};

export type IInvoiceCreateInput = {
  /**
   * Fields required to update the invoice metadata.
   *
   * Added in Saleor 3.14.
   */
  metadata?: InputMaybe<Array<IMetadataInput>>;
  /** Invoice number. */
  number: Scalars["String"];
  /**
   * Fields required to update the invoice private metadata.
   *
   * Added in Saleor 3.14.
   */
  privateMetadata?: InputMaybe<Array<IMetadataInput>>;
  /** URL of an invoice to download. */
  url: Scalars["String"];
};

/**
 * Deletes an invoice.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type IInvoiceDelete = {
  __typename?: "InvoiceDelete";
  errors: Array<IInvoiceError>;
  invoice?: Maybe<IInvoice>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  invoiceErrors: Array<IInvoiceError>;
};

/**
 * Event sent when invoice is deleted.
 *
 * Added in Saleor 3.2.
 */
export type IInvoiceDeleted = IEvent & {
  __typename?: "InvoiceDeleted";
  /** The invoice the event relates to. */
  invoice?: Maybe<IInvoice>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars["DateTime"]>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IIssuingPrincipal>;
  /**
   * Order related to the invoice.
   *
   * Added in Saleor 3.10.
   */
  order?: Maybe<IOrder>;
  /** The application receiving the webhook. */
  recipient?: Maybe<IApp>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars["String"]>;
};

export type IInvoiceError = {
  __typename?: "InvoiceError";
  /** The error code. */
  code: IInvoiceErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars["String"]>;
  /** The error message. */
  message?: Maybe<Scalars["String"]>;
};

/** An enumeration. */
export type IInvoiceErrorCode =
  | "EMAIL_NOT_SET"
  | "INVALID_STATUS"
  | "NOT_FOUND"
  | "NOT_READY"
  | "NO_INVOICE_PLUGIN"
  | "NUMBER_NOT_SET"
  | "REQUIRED"
  | "URL_NOT_SET";

/**
 * Request an invoice for the order using plugin.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 *
 * Triggers the following webhook events:
 * - INVOICE_REQUESTED (async): An invoice was requested.
 */
export type IInvoiceRequest = {
  __typename?: "InvoiceRequest";
  errors: Array<IInvoiceError>;
  invoice?: Maybe<IInvoice>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  invoiceErrors: Array<IInvoiceError>;
  /** Order related to an invoice. */
  order?: Maybe<IOrder>;
};

/**
 * Requests deletion of an invoice.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 *
 * Triggers the following webhook events:
 * - INVOICE_DELETED (async): An invoice was requested to delete.
 */
export type IInvoiceRequestDelete = {
  __typename?: "InvoiceRequestDelete";
  errors: Array<IInvoiceError>;
  invoice?: Maybe<IInvoice>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  invoiceErrors: Array<IInvoiceError>;
};

/**
 * Event sent when invoice is requested.
 *
 * Added in Saleor 3.2.
 */
export type IInvoiceRequested = IEvent & {
  __typename?: "InvoiceRequested";
  /** The invoice the event relates to. */
  invoice?: Maybe<IInvoice>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars["DateTime"]>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IIssuingPrincipal>;
  /**
   * Order related to the invoice.
   *
   * Added in Saleor 3.10.
   */
  order: IOrder;
  /** The application receiving the webhook. */
  recipient?: Maybe<IApp>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars["String"]>;
};

/**
 * Send an invoice notification to the customer.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 *
 * Triggers the following webhook events:
 * - INVOICE_SENT (async): A notification for invoice send
 * - NOTIFY_USER (async): A notification for invoice send
 */
export type IInvoiceSendNotification = {
  __typename?: "InvoiceSendNotification";
  errors: Array<IInvoiceError>;
  invoice?: Maybe<IInvoice>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  invoiceErrors: Array<IInvoiceError>;
};

/**
 * Event sent when invoice is sent.
 *
 * Added in Saleor 3.2.
 */
export type IInvoiceSent = IEvent & {
  __typename?: "InvoiceSent";
  /** The invoice the event relates to. */
  invoice?: Maybe<IInvoice>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars["DateTime"]>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IIssuingPrincipal>;
  /**
   * Order related to the invoice.
   *
   * Added in Saleor 3.10.
   */
  order?: Maybe<IOrder>;
  /** The application receiving the webhook. */
  recipient?: Maybe<IApp>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars["String"]>;
};

/**
 * Updates an invoice.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type IInvoiceUpdate = {
  __typename?: "InvoiceUpdate";
  errors: Array<IInvoiceError>;
  invoice?: Maybe<IInvoice>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  invoiceErrors: Array<IInvoiceError>;
};

export type IIssuingPrincipal = IApp | IUser;

export type IJob = {
  /** Created date time of job in ISO 8601 format. */
  createdAt: Scalars["DateTime"];
  /** Job message. */
  message?: Maybe<Scalars["String"]>;
  /** Job status. */
  status: IJobStatusEnum;
  /** Date time of job last update in ISO 8601 format. */
  updatedAt: Scalars["DateTime"];
};

/** An enumeration. */
export type IJobStatusEnum = "DELETED" | "FAILED" | "PENDING" | "SUCCESS";

/** An enumeration. */
export type ILanguageCodeEnum =
  | "AF"
  | "AF_NA"
  | "AF_ZA"
  | "AGQ"
  | "AGQ_CM"
  | "AK"
  | "AK_GH"
  | "AM"
  | "AM_ET"
  | "AR"
  | "AR_AE"
  | "AR_BH"
  | "AR_DJ"
  | "AR_DZ"
  | "AR_EG"
  | "AR_EH"
  | "AR_ER"
  | "AR_IL"
  | "AR_IQ"
  | "AR_JO"
  | "AR_KM"
  | "AR_KW"
  | "AR_LB"
  | "AR_LY"
  | "AR_MA"
  | "AR_MR"
  | "AR_OM"
  | "AR_PS"
  | "AR_QA"
  | "AR_SA"
  | "AR_SD"
  | "AR_SO"
  | "AR_SS"
  | "AR_SY"
  | "AR_TD"
  | "AR_TN"
  | "AR_YE"
  | "AS"
  | "ASA"
  | "ASA_TZ"
  | "AST"
  | "AST_ES"
  | "AS_IN"
  | "AZ"
  | "AZ_CYRL"
  | "AZ_CYRL_AZ"
  | "AZ_LATN"
  | "AZ_LATN_AZ"
  | "BAS"
  | "BAS_CM"
  | "BE"
  | "BEM"
  | "BEM_ZM"
  | "BEZ"
  | "BEZ_TZ"
  | "BE_BY"
  | "BG"
  | "BG_BG"
  | "BM"
  | "BM_ML"
  | "BN"
  | "BN_BD"
  | "BN_IN"
  | "BO"
  | "BO_CN"
  | "BO_IN"
  | "BR"
  | "BRX"
  | "BRX_IN"
  | "BR_FR"
  | "BS"
  | "BS_CYRL"
  | "BS_CYRL_BA"
  | "BS_LATN"
  | "BS_LATN_BA"
  | "CA"
  | "CA_AD"
  | "CA_ES"
  | "CA_ES_VALENCIA"
  | "CA_FR"
  | "CA_IT"
  | "CCP"
  | "CCP_BD"
  | "CCP_IN"
  | "CE"
  | "CEB"
  | "CEB_PH"
  | "CE_RU"
  | "CGG"
  | "CGG_UG"
  | "CHR"
  | "CHR_US"
  | "CKB"
  | "CKB_IQ"
  | "CKB_IR"
  | "CS"
  | "CS_CZ"
  | "CU"
  | "CU_RU"
  | "CY"
  | "CY_GB"
  | "DA"
  | "DAV"
  | "DAV_KE"
  | "DA_DK"
  | "DA_GL"
  | "DE"
  | "DE_AT"
  | "DE_BE"
  | "DE_CH"
  | "DE_DE"
  | "DE_IT"
  | "DE_LI"
  | "DE_LU"
  | "DJE"
  | "DJE_NE"
  | "DSB"
  | "DSB_DE"
  | "DUA"
  | "DUA_CM"
  | "DYO"
  | "DYO_SN"
  | "DZ"
  | "DZ_BT"
  | "EBU"
  | "EBU_KE"
  | "EE"
  | "EE_GH"
  | "EE_TG"
  | "EL"
  | "EL_CY"
  | "EL_GR"
  | "EN"
  | "EN_AE"
  | "EN_AG"
  | "EN_AI"
  | "EN_AS"
  | "EN_AT"
  | "EN_AU"
  | "EN_BB"
  | "EN_BE"
  | "EN_BI"
  | "EN_BM"
  | "EN_BS"
  | "EN_BW"
  | "EN_BZ"
  | "EN_CA"
  | "EN_CC"
  | "EN_CH"
  | "EN_CK"
  | "EN_CM"
  | "EN_CX"
  | "EN_CY"
  | "EN_DE"
  | "EN_DG"
  | "EN_DK"
  | "EN_DM"
  | "EN_ER"
  | "EN_FI"
  | "EN_FJ"
  | "EN_FK"
  | "EN_FM"
  | "EN_GB"
  | "EN_GD"
  | "EN_GG"
  | "EN_GH"
  | "EN_GI"
  | "EN_GM"
  | "EN_GU"
  | "EN_GY"
  | "EN_HK"
  | "EN_IE"
  | "EN_IL"
  | "EN_IM"
  | "EN_IN"
  | "EN_IO"
  | "EN_JE"
  | "EN_JM"
  | "EN_KE"
  | "EN_KI"
  | "EN_KN"
  | "EN_KY"
  | "EN_LC"
  | "EN_LR"
  | "EN_LS"
  | "EN_MG"
  | "EN_MH"
  | "EN_MO"
  | "EN_MP"
  | "EN_MS"
  | "EN_MT"
  | "EN_MU"
  | "EN_MW"
  | "EN_MY"
  | "EN_NA"
  | "EN_NF"
  | "EN_NG"
  | "EN_NL"
  | "EN_NR"
  | "EN_NU"
  | "EN_NZ"
  | "EN_PG"
  | "EN_PH"
  | "EN_PK"
  | "EN_PN"
  | "EN_PR"
  | "EN_PW"
  | "EN_RW"
  | "EN_SB"
  | "EN_SC"
  | "EN_SD"
  | "EN_SE"
  | "EN_SG"
  | "EN_SH"
  | "EN_SI"
  | "EN_SL"
  | "EN_SS"
  | "EN_SX"
  | "EN_SZ"
  | "EN_TC"
  | "EN_TK"
  | "EN_TO"
  | "EN_TT"
  | "EN_TV"
  | "EN_TZ"
  | "EN_UG"
  | "EN_UM"
  | "EN_US"
  | "EN_VC"
  | "EN_VG"
  | "EN_VI"
  | "EN_VU"
  | "EN_WS"
  | "EN_ZA"
  | "EN_ZM"
  | "EN_ZW"
  | "EO"
  | "ES"
  | "ES_AR"
  | "ES_BO"
  | "ES_BR"
  | "ES_BZ"
  | "ES_CL"
  | "ES_CO"
  | "ES_CR"
  | "ES_CU"
  | "ES_DO"
  | "ES_EA"
  | "ES_EC"
  | "ES_ES"
  | "ES_GQ"
  | "ES_GT"
  | "ES_HN"
  | "ES_IC"
  | "ES_MX"
  | "ES_NI"
  | "ES_PA"
  | "ES_PE"
  | "ES_PH"
  | "ES_PR"
  | "ES_PY"
  | "ES_SV"
  | "ES_US"
  | "ES_UY"
  | "ES_VE"
  | "ET"
  | "ET_EE"
  | "EU"
  | "EU_ES"
  | "EWO"
  | "EWO_CM"
  | "FA"
  | "FA_AF"
  | "FA_IR"
  | "FF"
  | "FF_ADLM"
  | "FF_ADLM_BF"
  | "FF_ADLM_CM"
  | "FF_ADLM_GH"
  | "FF_ADLM_GM"
  | "FF_ADLM_GN"
  | "FF_ADLM_GW"
  | "FF_ADLM_LR"
  | "FF_ADLM_MR"
  | "FF_ADLM_NE"
  | "FF_ADLM_NG"
  | "FF_ADLM_SL"
  | "FF_ADLM_SN"
  | "FF_LATN"
  | "FF_LATN_BF"
  | "FF_LATN_CM"
  | "FF_LATN_GH"
  | "FF_LATN_GM"
  | "FF_LATN_GN"
  | "FF_LATN_GW"
  | "FF_LATN_LR"
  | "FF_LATN_MR"
  | "FF_LATN_NE"
  | "FF_LATN_NG"
  | "FF_LATN_SL"
  | "FF_LATN_SN"
  | "FI"
  | "FIL"
  | "FIL_PH"
  | "FI_FI"
  | "FO"
  | "FO_DK"
  | "FO_FO"
  | "FR"
  | "FR_BE"
  | "FR_BF"
  | "FR_BI"
  | "FR_BJ"
  | "FR_BL"
  | "FR_CA"
  | "FR_CD"
  | "FR_CF"
  | "FR_CG"
  | "FR_CH"
  | "FR_CI"
  | "FR_CM"
  | "FR_DJ"
  | "FR_DZ"
  | "FR_FR"
  | "FR_GA"
  | "FR_GF"
  | "FR_GN"
  | "FR_GP"
  | "FR_GQ"
  | "FR_HT"
  | "FR_KM"
  | "FR_LU"
  | "FR_MA"
  | "FR_MC"
  | "FR_MF"
  | "FR_MG"
  | "FR_ML"
  | "FR_MQ"
  | "FR_MR"
  | "FR_MU"
  | "FR_NC"
  | "FR_NE"
  | "FR_PF"
  | "FR_PM"
  | "FR_RE"
  | "FR_RW"
  | "FR_SC"
  | "FR_SN"
  | "FR_SY"
  | "FR_TD"
  | "FR_TG"
  | "FR_TN"
  | "FR_VU"
  | "FR_WF"
  | "FR_YT"
  | "FUR"
  | "FUR_IT"
  | "FY"
  | "FY_NL"
  | "GA"
  | "GA_GB"
  | "GA_IE"
  | "GD"
  | "GD_GB"
  | "GL"
  | "GL_ES"
  | "GSW"
  | "GSW_CH"
  | "GSW_FR"
  | "GSW_LI"
  | "GU"
  | "GUZ"
  | "GUZ_KE"
  | "GU_IN"
  | "GV"
  | "GV_IM"
  | "HA"
  | "HAW"
  | "HAW_US"
  | "HA_GH"
  | "HA_NE"
  | "HA_NG"
  | "HE"
  | "HE_IL"
  | "HI"
  | "HI_IN"
  | "HR"
  | "HR_BA"
  | "HR_HR"
  | "HSB"
  | "HSB_DE"
  | "HU"
  | "HU_HU"
  | "HY"
  | "HY_AM"
  | "IA"
  | "ID"
  | "ID_ID"
  | "IG"
  | "IG_NG"
  | "II"
  | "II_CN"
  | "IS"
  | "IS_IS"
  | "IT"
  | "IT_CH"
  | "IT_IT"
  | "IT_SM"
  | "IT_VA"
  | "JA"
  | "JA_JP"
  | "JGO"
  | "JGO_CM"
  | "JMC"
  | "JMC_TZ"
  | "JV"
  | "JV_ID"
  | "KA"
  | "KAB"
  | "KAB_DZ"
  | "KAM"
  | "KAM_KE"
  | "KA_GE"
  | "KDE"
  | "KDE_TZ"
  | "KEA"
  | "KEA_CV"
  | "KHQ"
  | "KHQ_ML"
  | "KI"
  | "KI_KE"
  | "KK"
  | "KKJ"
  | "KKJ_CM"
  | "KK_KZ"
  | "KL"
  | "KLN"
  | "KLN_KE"
  | "KL_GL"
  | "KM"
  | "KM_KH"
  | "KN"
  | "KN_IN"
  | "KO"
  | "KOK"
  | "KOK_IN"
  | "KO_KP"
  | "KO_KR"
  | "KS"
  | "KSB"
  | "KSB_TZ"
  | "KSF"
  | "KSF_CM"
  | "KSH"
  | "KSH_DE"
  | "KS_ARAB"
  | "KS_ARAB_IN"
  | "KU"
  | "KU_TR"
  | "KW"
  | "KW_GB"
  | "KY"
  | "KY_KG"
  | "LAG"
  | "LAG_TZ"
  | "LB"
  | "LB_LU"
  | "LG"
  | "LG_UG"
  | "LKT"
  | "LKT_US"
  | "LN"
  | "LN_AO"
  | "LN_CD"
  | "LN_CF"
  | "LN_CG"
  | "LO"
  | "LO_LA"
  | "LRC"
  | "LRC_IQ"
  | "LRC_IR"
  | "LT"
  | "LT_LT"
  | "LU"
  | "LUO"
  | "LUO_KE"
  | "LUY"
  | "LUY_KE"
  | "LU_CD"
  | "LV"
  | "LV_LV"
  | "MAI"
  | "MAI_IN"
  | "MAS"
  | "MAS_KE"
  | "MAS_TZ"
  | "MER"
  | "MER_KE"
  | "MFE"
  | "MFE_MU"
  | "MG"
  | "MGH"
  | "MGH_MZ"
  | "MGO"
  | "MGO_CM"
  | "MG_MG"
  | "MI"
  | "MI_NZ"
  | "MK"
  | "MK_MK"
  | "ML"
  | "ML_IN"
  | "MN"
  | "MNI"
  | "MNI_BENG"
  | "MNI_BENG_IN"
  | "MN_MN"
  | "MR"
  | "MR_IN"
  | "MS"
  | "MS_BN"
  | "MS_ID"
  | "MS_MY"
  | "MS_SG"
  | "MT"
  | "MT_MT"
  | "MUA"
  | "MUA_CM"
  | "MY"
  | "MY_MM"
  | "MZN"
  | "MZN_IR"
  | "NAQ"
  | "NAQ_NA"
  | "NB"
  | "NB_NO"
  | "NB_SJ"
  | "ND"
  | "NDS"
  | "NDS_DE"
  | "NDS_NL"
  | "ND_ZW"
  | "NE"
  | "NE_IN"
  | "NE_NP"
  | "NL"
  | "NL_AW"
  | "NL_BE"
  | "NL_BQ"
  | "NL_CW"
  | "NL_NL"
  | "NL_SR"
  | "NL_SX"
  | "NMG"
  | "NMG_CM"
  | "NN"
  | "NNH"
  | "NNH_CM"
  | "NN_NO"
  | "NUS"
  | "NUS_SS"
  | "NYN"
  | "NYN_UG"
  | "OM"
  | "OM_ET"
  | "OM_KE"
  | "OR"
  | "OR_IN"
  | "OS"
  | "OS_GE"
  | "OS_RU"
  | "PA"
  | "PA_ARAB"
  | "PA_ARAB_PK"
  | "PA_GURU"
  | "PA_GURU_IN"
  | "PCM"
  | "PCM_NG"
  | "PL"
  | "PL_PL"
  | "PRG"
  | "PS"
  | "PS_AF"
  | "PS_PK"
  | "PT"
  | "PT_AO"
  | "PT_BR"
  | "PT_CH"
  | "PT_CV"
  | "PT_GQ"
  | "PT_GW"
  | "PT_LU"
  | "PT_MO"
  | "PT_MZ"
  | "PT_PT"
  | "PT_ST"
  | "PT_TL"
  | "QU"
  | "QU_BO"
  | "QU_EC"
  | "QU_PE"
  | "RM"
  | "RM_CH"
  | "RN"
  | "RN_BI"
  | "RO"
  | "ROF"
  | "ROF_TZ"
  | "RO_MD"
  | "RO_RO"
  | "RU"
  | "RU_BY"
  | "RU_KG"
  | "RU_KZ"
  | "RU_MD"
  | "RU_RU"
  | "RU_UA"
  | "RW"
  | "RWK"
  | "RWK_TZ"
  | "RW_RW"
  | "SAH"
  | "SAH_RU"
  | "SAQ"
  | "SAQ_KE"
  | "SAT"
  | "SAT_OLCK"
  | "SAT_OLCK_IN"
  | "SBP"
  | "SBP_TZ"
  | "SD"
  | "SD_ARAB"
  | "SD_ARAB_PK"
  | "SD_DEVA"
  | "SD_DEVA_IN"
  | "SE"
  | "SEH"
  | "SEH_MZ"
  | "SES"
  | "SES_ML"
  | "SE_FI"
  | "SE_NO"
  | "SE_SE"
  | "SG"
  | "SG_CF"
  | "SHI"
  | "SHI_LATN"
  | "SHI_LATN_MA"
  | "SHI_TFNG"
  | "SHI_TFNG_MA"
  | "SI"
  | "SI_LK"
  | "SK"
  | "SK_SK"
  | "SL"
  | "SL_SI"
  | "SMN"
  | "SMN_FI"
  | "SN"
  | "SN_ZW"
  | "SO"
  | "SO_DJ"
  | "SO_ET"
  | "SO_KE"
  | "SO_SO"
  | "SQ"
  | "SQ_AL"
  | "SQ_MK"
  | "SQ_XK"
  | "SR"
  | "SR_CYRL"
  | "SR_CYRL_BA"
  | "SR_CYRL_ME"
  | "SR_CYRL_RS"
  | "SR_CYRL_XK"
  | "SR_LATN"
  | "SR_LATN_BA"
  | "SR_LATN_ME"
  | "SR_LATN_RS"
  | "SR_LATN_XK"
  | "SU"
  | "SU_LATN"
  | "SU_LATN_ID"
  | "SV"
  | "SV_AX"
  | "SV_FI"
  | "SV_SE"
  | "SW"
  | "SW_CD"
  | "SW_KE"
  | "SW_TZ"
  | "SW_UG"
  | "TA"
  | "TA_IN"
  | "TA_LK"
  | "TA_MY"
  | "TA_SG"
  | "TE"
  | "TEO"
  | "TEO_KE"
  | "TEO_UG"
  | "TE_IN"
  | "TG"
  | "TG_TJ"
  | "TH"
  | "TH_TH"
  | "TI"
  | "TI_ER"
  | "TI_ET"
  | "TK"
  | "TK_TM"
  | "TO"
  | "TO_TO"
  | "TR"
  | "TR_CY"
  | "TR_TR"
  | "TT"
  | "TT_RU"
  | "TWQ"
  | "TWQ_NE"
  | "TZM"
  | "TZM_MA"
  | "UG"
  | "UG_CN"
  | "UK"
  | "UK_UA"
  | "UR"
  | "UR_IN"
  | "UR_PK"
  | "UZ"
  | "UZ_ARAB"
  | "UZ_ARAB_AF"
  | "UZ_CYRL"
  | "UZ_CYRL_UZ"
  | "UZ_LATN"
  | "UZ_LATN_UZ"
  | "VAI"
  | "VAI_LATN"
  | "VAI_LATN_LR"
  | "VAI_VAII"
  | "VAI_VAII_LR"
  | "VI"
  | "VI_VN"
  | "VO"
  | "VUN"
  | "VUN_TZ"
  | "WAE"
  | "WAE_CH"
  | "WO"
  | "WO_SN"
  | "XH"
  | "XH_ZA"
  | "XOG"
  | "XOG_UG"
  | "YAV"
  | "YAV_CM"
  | "YI"
  | "YO"
  | "YO_BJ"
  | "YO_NG"
  | "YUE"
  | "YUE_HANS"
  | "YUE_HANS_CN"
  | "YUE_HANT"
  | "YUE_HANT_HK"
  | "ZGH"
  | "ZGH_MA"
  | "ZH"
  | "ZH_HANS"
  | "ZH_HANS_CN"
  | "ZH_HANS_HK"
  | "ZH_HANS_MO"
  | "ZH_HANS_SG"
  | "ZH_HANT"
  | "ZH_HANT_HK"
  | "ZH_HANT_MO"
  | "ZH_HANT_TW"
  | "ZU"
  | "ZU_ZA";

export type ILanguageDisplay = {
  __typename?: "LanguageDisplay";
  /** ISO 639 representation of the language name. */
  code: ILanguageCodeEnum;
  /** Full name of the language. */
  language: Scalars["String"];
};

/** Store the current and allowed usage. */
export type ILimitInfo = {
  __typename?: "LimitInfo";
  /** Defines the allowed maximum resource usage, null means unlimited. */
  allowedUsage: ILimits;
  /** Defines the current resource usage. */
  currentUsage: ILimits;
};

export type ILimits = {
  __typename?: "Limits";
  /** Defines the number of channels. */
  channels?: Maybe<Scalars["Int"]>;
  /** Defines the number of order. */
  orders?: Maybe<Scalars["Int"]>;
  /** Defines the number of product variants. */
  productVariants?: Maybe<Scalars["Int"]>;
  /** Defines the number of staff users. */
  staffUsers?: Maybe<Scalars["Int"]>;
  /** Defines the number of warehouses. */
  warehouses?: Maybe<Scalars["Int"]>;
};

/**
 * List payment methods stored for the user by payment gateway.
 *
 * Added in Saleor 3.15.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type IListStoredPaymentMethods = IEvent & {
  __typename?: "ListStoredPaymentMethods";
  /** Channel in context which was used to fetch the list of payment methods. */
  channel: IChannel;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars["DateTime"]>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IIssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<IApp>;
  /** The user for which the app should return a list of payment methods. */
  user: IUser;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars["String"]>;
};

/** The manifest definition. */
export type IManifest = {
  __typename?: "Manifest";
  /** Description of the app displayed in the dashboard. */
  about?: Maybe<Scalars["String"]>;
  /** App website rendered in the dashboard. */
  appUrl?: Maybe<Scalars["String"]>;
  /**
   * The audience that will be included in all JWT tokens for the app.
   *
   * Added in Saleor 3.8.
   */
  audience?: Maybe<Scalars["String"]>;
  /**
   * The App's author name.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  author?: Maybe<Scalars["String"]>;
  /**
   * App's brand data.
   *
   * Added in Saleor 3.14.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  brand?: Maybe<IAppManifestBrand>;
  /**
   * URL to iframe with the configuration for the app.
   * @deprecated This field will be removed in Saleor 4.0. Use `appUrl` instead.
   */
  configurationUrl?: Maybe<Scalars["String"]>;
  /**
   * Description of the data privacy defined for this app.
   * @deprecated This field will be removed in Saleor 4.0. Use `dataPrivacyUrl` instead.
   */
  dataPrivacy?: Maybe<Scalars["String"]>;
  /** URL to the full privacy policy. */
  dataPrivacyUrl?: Maybe<Scalars["String"]>;
  /** List of extensions that will be mounted in Saleor's dashboard. For details, please [see the extension section.](https://docs.saleor.io/docs/3.x/developer/extending/apps/extending-dashboard-with-apps#key-concepts) */
  extensions: Array<IAppManifestExtension>;
  /** External URL to the app homepage. */
  homepageUrl?: Maybe<Scalars["String"]>;
  /** The identifier of the manifest for the app. */
  identifier: Scalars["String"];
  /** The name of the manifest for the app . */
  name: Scalars["String"];
  /** The array permissions required for the app. */
  permissions?: Maybe<Array<IPermission>>;
  /**
   * Determines the app's required Saleor version as semver range.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  requiredSaleorVersion?: Maybe<IAppManifestRequiredSaleorVersion>;
  /** External URL to the page where app users can find support. */
  supportUrl?: Maybe<Scalars["String"]>;
  /** Endpoint used during process of app installation, [see installing an app.](https://docs.saleor.io/docs/3.x/developer/extending/apps/installing-apps#installing-an-app) */
  tokenTargetUrl?: Maybe<Scalars["String"]>;
  /** The version of the manifest for the app. */
  version: Scalars["String"];
  /**
   * List of the app's webhooks.
   *
   * Added in Saleor 3.5.
   */
  webhooks: Array<IAppManifestWebhook>;
};

/** Metadata for the Margin class. */
export type IMargin = {
  __typename?: "Margin";
  /** The starting value of the margin. */
  start?: Maybe<Scalars["Int"]>;
  /** The ending value of the margin. */
  stop?: Maybe<Scalars["Int"]>;
};

/**
 * Determine the mark as paid strategy for the channel.
 *
 *     TRANSACTION_FLOW - new orders marked as paid will receive a
 *     `TransactionItem` object, that will cover the `order.total`.
 *
 *     PAYMENT_FLOW - new orders marked as paid will receive a
 *     `Payment` object, that will cover the `order.total`.
 *
 *
 */
export type IMarkAsPaidStrategyEnum = "PAYMENT_FLOW" | "TRANSACTION_FLOW";

/** An enumeration. */
export type IMeasurementUnitsEnum =
  | "ACRE_FT"
  | "ACRE_IN"
  | "CM"
  | "CUBIC_CENTIMETER"
  | "CUBIC_DECIMETER"
  | "CUBIC_FOOT"
  | "CUBIC_INCH"
  | "CUBIC_METER"
  | "CUBIC_MILLIMETER"
  | "CUBIC_YARD"
  | "DM"
  | "FL_OZ"
  | "FT"
  | "G"
  | "INCH"
  | "KG"
  | "KM"
  | "LB"
  | "LITER"
  | "M"
  | "MM"
  | "OZ"
  | "PINT"
  | "QT"
  | "SQ_CM"
  | "SQ_DM"
  | "SQ_FT"
  | "SQ_INCH"
  | "SQ_KM"
  | "SQ_M"
  | "SQ_MM"
  | "SQ_YD"
  | "TONNE"
  | "YD";

export type IMeasurementUnitsEnumFilterInput = {
  /** The value equal to. */
  eq?: InputMaybe<IMeasurementUnitsEnum>;
  /** The value included in. */
  oneOf?: InputMaybe<Array<IMeasurementUnitsEnum>>;
};

export type IMediaChoicesSortField =
  /** Sort media by ID. */
  "ID";

export type IMediaInput = {
  /** Alt text for a product media. */
  alt?: InputMaybe<Scalars["String"]>;
  /** Represents an image file in a multipart request. */
  image?: InputMaybe<Scalars["Upload"]>;
  /** Represents an URL to an external media. */
  mediaUrl?: InputMaybe<Scalars["String"]>;
};

export type IMediaSortingInput = {
  /** Specifies the direction in which to sort media. */
  direction: IOrderDirection;
  /** Sort media by the selected field. */
  field: IMediaChoicesSortField;
};

/** Represents a single menu - an object that is used to help navigate through the store. */
export type IMenu = INode &
  IObjectWithMetadata & {
    __typename?: "Menu";
    /** The ID of the menu. */
    id: Scalars["ID"];
    /** Menu items associated with this menu. */
    items?: Maybe<Array<IMenuItem>>;
    /** List of public metadata items. Can be accessed without permissions. */
    metadata: Array<IMetadataItem>;
    /**
     * A single key from public metadata.
     *
     * Tip: Use GraphQL aliases to fetch multiple keys.
     *
     * Added in Saleor 3.3.
     */
    metafield?: Maybe<Scalars["String"]>;
    /**
     * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
     *
     * Added in Saleor 3.3.
     */
    metafields?: Maybe<Scalars["Metadata"]>;
    /** The name of the menu. */
    name: Scalars["String"];
    /** List of private metadata items. Requires staff permissions to access. */
    privateMetadata: Array<IMetadataItem>;
    /**
     * A single key from private metadata. Requires staff permissions to access.
     *
     * Tip: Use GraphQL aliases to fetch multiple keys.
     *
     * Added in Saleor 3.3.
     */
    privateMetafield?: Maybe<Scalars["String"]>;
    /**
     * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
     *
     * Added in Saleor 3.3.
     */
    privateMetafields?: Maybe<Scalars["Metadata"]>;
    /** Slug of the menu. */
    slug: Scalars["String"];
  };

/** Represents a single menu - an object that is used to help navigate through the store. */
export type IMenuMetafieldArgs = {
  key: Scalars["String"];
};

/** Represents a single menu - an object that is used to help navigate through the store. */
export type IMenuMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars["String"]>>;
};

/** Represents a single menu - an object that is used to help navigate through the store. */
export type IMenuPrivateMetafieldArgs = {
  key: Scalars["String"];
};

/** Represents a single menu - an object that is used to help navigate through the store. */
export type IMenuPrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars["String"]>>;
};

/**
 * Deletes menus.
 *
 * Requires one of the following permissions: MANAGE_MENUS.
 *
 * Triggers the following webhook events:
 * - MENU_DELETED (async): A menu was deleted.
 */
export type IMenuBulkDelete = {
  __typename?: "MenuBulkDelete";
  /** Returns how many objects were affected. */
  count: Scalars["Int"];
  errors: Array<IMenuError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  menuErrors: Array<IMenuError>;
};

export type IMenuCountableConnection = {
  __typename?: "MenuCountableConnection";
  edges: Array<IMenuCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: IPageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars["Int"]>;
};

export type IMenuCountableEdge = {
  __typename?: "MenuCountableEdge";
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node: IMenu;
};

/**
 * Creates a new Menu.
 *
 * Requires one of the following permissions: MANAGE_MENUS.
 *
 * Triggers the following webhook events:
 * - MENU_CREATED (async): A menu was created.
 */
export type IMenuCreate = {
  __typename?: "MenuCreate";
  errors: Array<IMenuError>;
  menu?: Maybe<IMenu>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  menuErrors: Array<IMenuError>;
};

export type IMenuCreateInput = {
  /** List of menu items. */
  items?: InputMaybe<Array<IMenuItemInput>>;
  /** Name of the menu. */
  name: Scalars["String"];
  /** Slug of the menu. Will be generated if not provided. */
  slug?: InputMaybe<Scalars["String"]>;
};

/**
 * Event sent when new menu is created.
 *
 * Added in Saleor 3.4.
 */
export type IMenuCreated = IEvent & {
  __typename?: "MenuCreated";
  /** Time of the event. */
  issuedAt?: Maybe<Scalars["DateTime"]>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IIssuingPrincipal>;
  /** The menu the event relates to. */
  menu?: Maybe<IMenu>;
  /** The application receiving the webhook. */
  recipient?: Maybe<IApp>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars["String"]>;
};

/**
 * Event sent when new menu is created.
 *
 * Added in Saleor 3.4.
 */
export type IMenuCreatedMenuArgs = {
  channel?: InputMaybe<Scalars["String"]>;
};

/**
 * Deletes a menu.
 *
 * Requires one of the following permissions: MANAGE_MENUS.
 *
 * Triggers the following webhook events:
 * - MENU_DELETED (async): A menu was deleted.
 */
export type IMenuDelete = {
  __typename?: "MenuDelete";
  errors: Array<IMenuError>;
  menu?: Maybe<IMenu>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  menuErrors: Array<IMenuError>;
};

/**
 * Event sent when menu is deleted.
 *
 * Added in Saleor 3.4.
 */
export type IMenuDeleted = IEvent & {
  __typename?: "MenuDeleted";
  /** Time of the event. */
  issuedAt?: Maybe<Scalars["DateTime"]>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IIssuingPrincipal>;
  /** The menu the event relates to. */
  menu?: Maybe<IMenu>;
  /** The application receiving the webhook. */
  recipient?: Maybe<IApp>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars["String"]>;
};

/**
 * Event sent when menu is deleted.
 *
 * Added in Saleor 3.4.
 */
export type IMenuDeletedMenuArgs = {
  channel?: InputMaybe<Scalars["String"]>;
};

export type IMenuError = {
  __typename?: "MenuError";
  /** The error code. */
  code: IMenuErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars["String"]>;
  /** The error message. */
  message?: Maybe<Scalars["String"]>;
};

/** An enumeration. */
export type IMenuErrorCode =
  | "CANNOT_ASSIGN_NODE"
  | "GRAPHQL_ERROR"
  | "INVALID"
  | "INVALID_MENU_ITEM"
  | "NOT_FOUND"
  | "NO_MENU_ITEM_PROVIDED"
  | "REQUIRED"
  | "TOO_MANY_MENU_ITEMS"
  | "UNIQUE";

export type IMenuFilterInput = {
  metadata?: InputMaybe<Array<IMetadataFilter>>;
  search?: InputMaybe<Scalars["String"]>;
  slug?: InputMaybe<Array<Scalars["String"]>>;
  slugs?: InputMaybe<Array<Scalars["String"]>>;
};

export type IMenuInput = {
  /** Name of the menu. */
  name?: InputMaybe<Scalars["String"]>;
  /** Slug of the menu. */
  slug?: InputMaybe<Scalars["String"]>;
};

/** Represents a single item of the related menu. Can store categories, collection or pages. */
export type IMenuItem = INode &
  IObjectWithMetadata & {
    __typename?: "MenuItem";
    /** Category associated with the menu item. */
    category?: Maybe<ICategory>;
    /** Represents the child items of the current menu item. */
    children?: Maybe<Array<IMenuItem>>;
    /** A collection associated with this menu item. Requires one of the following permissions to include the unpublished items: MANAGE_ORDERS, MANAGE_DISCOUNTS, MANAGE_PRODUCTS. */
    collection?: Maybe<ICollection>;
    /** The ID of the menu item. */
    id: Scalars["ID"];
    /** Indicates the position of the menu item within the menu structure. */
    level: Scalars["Int"];
    /** Represents the menu to which the menu item belongs. */
    menu: IMenu;
    /** List of public metadata items. Can be accessed without permissions. */
    metadata: Array<IMetadataItem>;
    /**
     * A single key from public metadata.
     *
     * Tip: Use GraphQL aliases to fetch multiple keys.
     *
     * Added in Saleor 3.3.
     */
    metafield?: Maybe<Scalars["String"]>;
    /**
     * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
     *
     * Added in Saleor 3.3.
     */
    metafields?: Maybe<Scalars["Metadata"]>;
    /** The name of the menu item. */
    name: Scalars["String"];
    /** A page associated with this menu item. Requires one of the following permissions to include unpublished items: MANAGE_PAGES. */
    page?: Maybe<IPage>;
    /** ID of parent menu item. If empty, menu will be top level menu. */
    parent?: Maybe<IMenuItem>;
    /** List of private metadata items. Requires staff permissions to access. */
    privateMetadata: Array<IMetadataItem>;
    /**
     * A single key from private metadata. Requires staff permissions to access.
     *
     * Tip: Use GraphQL aliases to fetch multiple keys.
     *
     * Added in Saleor 3.3.
     */
    privateMetafield?: Maybe<Scalars["String"]>;
    /**
     * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
     *
     * Added in Saleor 3.3.
     */
    privateMetafields?: Maybe<Scalars["Metadata"]>;
    /** Returns translated menu item fields for the given language code. */
    translation?: Maybe<IMenuItemTranslation>;
    /** URL to the menu item. */
    url?: Maybe<Scalars["String"]>;
  };

/** Represents a single item of the related menu. Can store categories, collection or pages. */
export type IMenuItemMetafieldArgs = {
  key: Scalars["String"];
};

/** Represents a single item of the related menu. Can store categories, collection or pages. */
export type IMenuItemMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars["String"]>>;
};

/** Represents a single item of the related menu. Can store categories, collection or pages. */
export type IMenuItemPrivateMetafieldArgs = {
  key: Scalars["String"];
};

/** Represents a single item of the related menu. Can store categories, collection or pages. */
export type IMenuItemPrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars["String"]>>;
};

/** Represents a single item of the related menu. Can store categories, collection or pages. */
export type IMenuItemTranslationArgs = {
  languageCode: ILanguageCodeEnum;
};

/**
 * Deletes menu items.
 *
 * Requires one of the following permissions: MANAGE_MENUS.
 *
 * Triggers the following webhook events:
 * - MENU_ITEM_DELETED (async): A menu item was deleted.
 */
export type IMenuItemBulkDelete = {
  __typename?: "MenuItemBulkDelete";
  /** Returns how many objects were affected. */
  count: Scalars["Int"];
  errors: Array<IMenuError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  menuErrors: Array<IMenuError>;
};

export type IMenuItemCountableConnection = {
  __typename?: "MenuItemCountableConnection";
  edges: Array<IMenuItemCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: IPageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars["Int"]>;
};

export type IMenuItemCountableEdge = {
  __typename?: "MenuItemCountableEdge";
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node: IMenuItem;
};

/**
 * Creates a new menu item.
 *
 * Requires one of the following permissions: MANAGE_MENUS.
 *
 * Triggers the following webhook events:
 * - MENU_ITEM_CREATED (async): A menu item was created.
 */
export type IMenuItemCreate = {
  __typename?: "MenuItemCreate";
  errors: Array<IMenuError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  menuErrors: Array<IMenuError>;
  menuItem?: Maybe<IMenuItem>;
};

export type IMenuItemCreateInput = {
  /** Category to which item points. */
  category?: InputMaybe<Scalars["ID"]>;
  /** Collection to which item points. */
  collection?: InputMaybe<Scalars["ID"]>;
  /** Menu to which item belongs. */
  menu: Scalars["ID"];
  /** Name of the menu item. */
  name: Scalars["String"];
  /** Page to which item points. */
  page?: InputMaybe<Scalars["ID"]>;
  /** ID of the parent menu. If empty, menu will be top level menu. */
  parent?: InputMaybe<Scalars["ID"]>;
  /** URL of the pointed item. */
  url?: InputMaybe<Scalars["String"]>;
};

/**
 * Event sent when new menu item is created.
 *
 * Added in Saleor 3.4.
 */
export type IMenuItemCreated = IEvent & {
  __typename?: "MenuItemCreated";
  /** Time of the event. */
  issuedAt?: Maybe<Scalars["DateTime"]>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IIssuingPrincipal>;
  /** The menu item the event relates to. */
  menuItem?: Maybe<IMenuItem>;
  /** The application receiving the webhook. */
  recipient?: Maybe<IApp>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars["String"]>;
};

/**
 * Event sent when new menu item is created.
 *
 * Added in Saleor 3.4.
 */
export type IMenuItemCreatedMenuItemArgs = {
  channel?: InputMaybe<Scalars["String"]>;
};

/**
 * Deletes a menu item.
 *
 * Requires one of the following permissions: MANAGE_MENUS.
 *
 * Triggers the following webhook events:
 * - MENU_ITEM_DELETED (async): A menu item was deleted.
 */
export type IMenuItemDelete = {
  __typename?: "MenuItemDelete";
  errors: Array<IMenuError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  menuErrors: Array<IMenuError>;
  menuItem?: Maybe<IMenuItem>;
};

/**
 * Event sent when menu item is deleted.
 *
 * Added in Saleor 3.4.
 */
export type IMenuItemDeleted = IEvent & {
  __typename?: "MenuItemDeleted";
  /** Time of the event. */
  issuedAt?: Maybe<Scalars["DateTime"]>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IIssuingPrincipal>;
  /** The menu item the event relates to. */
  menuItem?: Maybe<IMenuItem>;
  /** The application receiving the webhook. */
  recipient?: Maybe<IApp>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars["String"]>;
};

/**
 * Event sent when menu item is deleted.
 *
 * Added in Saleor 3.4.
 */
export type IMenuItemDeletedMenuItemArgs = {
  channel?: InputMaybe<Scalars["String"]>;
};

export type IMenuItemFilterInput = {
  metadata?: InputMaybe<Array<IMetadataFilter>>;
  search?: InputMaybe<Scalars["String"]>;
};

export type IMenuItemInput = {
  /** Category to which item points. */
  category?: InputMaybe<Scalars["ID"]>;
  /** Collection to which item points. */
  collection?: InputMaybe<Scalars["ID"]>;
  /** Name of the menu item. */
  name?: InputMaybe<Scalars["String"]>;
  /** Page to which item points. */
  page?: InputMaybe<Scalars["ID"]>;
  /** URL of the pointed item. */
  url?: InputMaybe<Scalars["String"]>;
};

/**
 * Moves items of menus.
 *
 * Requires one of the following permissions: MANAGE_MENUS.
 *
 * Triggers the following webhook events:
 * - MENU_ITEM_UPDATED (async): Optionally triggered when sort order or parent changed for menu item.
 */
export type IMenuItemMove = {
  __typename?: "MenuItemMove";
  errors: Array<IMenuError>;
  /** Assigned menu to move within. */
  menu?: Maybe<IMenu>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  menuErrors: Array<IMenuError>;
};

export type IMenuItemMoveInput = {
  /** The menu item ID to move. */
  itemId: Scalars["ID"];
  /** ID of the parent menu. If empty, menu will be top level menu. */
  parentId?: InputMaybe<Scalars["ID"]>;
  /** The new relative sorting position of the item (from -inf to +inf). 1 moves the item one position forward, -1 moves the item one position backward, 0 leaves the item unchanged. */
  sortOrder?: InputMaybe<Scalars["Int"]>;
};

export type IMenuItemSortingInput = {
  /** Specifies the direction in which to sort menu items. */
  direction: IOrderDirection;
  /** Sort menu items by the selected field. */
  field: IMenuItemsSortField;
};

export type IMenuItemTranslatableContent = INode & {
  __typename?: "MenuItemTranslatableContent";
  /** The ID of the menu item translatable content. */
  id: Scalars["ID"];
  /**
   * Represents a single item of the related menu. Can store categories, collection or pages.
   * @deprecated This field will be removed in Saleor 4.0. Get model fields from the root level queries.
   */
  menuItem?: Maybe<IMenuItem>;
  /** Name of the menu item to translate. */
  name: Scalars["String"];
  /** Returns translated menu item fields for the given language code. */
  translation?: Maybe<IMenuItemTranslation>;
};

export type IMenuItemTranslatableContentTranslationArgs = {
  languageCode: ILanguageCodeEnum;
};

/**
 * Creates/updates translations for a menu item.
 *
 * Requires one of the following permissions: MANAGE_TRANSLATIONS.
 */
export type IMenuItemTranslate = {
  __typename?: "MenuItemTranslate";
  errors: Array<ITranslationError>;
  menuItem?: Maybe<IMenuItem>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  translationErrors: Array<ITranslationError>;
};

export type IMenuItemTranslation = INode & {
  __typename?: "MenuItemTranslation";
  /** The ID of the menu item translation. */
  id: Scalars["ID"];
  /** Translation language. */
  language: ILanguageDisplay;
  /** Translated menu item name. */
  name: Scalars["String"];
};

/**
 * Updates a menu item.
 *
 * Requires one of the following permissions: MANAGE_MENUS.
 *
 * Triggers the following webhook events:
 * - MENU_ITEM_UPDATED (async): A menu item was updated.
 */
export type IMenuItemUpdate = {
  __typename?: "MenuItemUpdate";
  errors: Array<IMenuError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  menuErrors: Array<IMenuError>;
  menuItem?: Maybe<IMenuItem>;
};

/**
 * Event sent when menu item is updated.
 *
 * Added in Saleor 3.4.
 */
export type IMenuItemUpdated = IEvent & {
  __typename?: "MenuItemUpdated";
  /** Time of the event. */
  issuedAt?: Maybe<Scalars["DateTime"]>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IIssuingPrincipal>;
  /** The menu item the event relates to. */
  menuItem?: Maybe<IMenuItem>;
  /** The application receiving the webhook. */
  recipient?: Maybe<IApp>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars["String"]>;
};

/**
 * Event sent when menu item is updated.
 *
 * Added in Saleor 3.4.
 */
export type IMenuItemUpdatedMenuItemArgs = {
  channel?: InputMaybe<Scalars["String"]>;
};

export type IMenuItemsSortField =
  /** Sort menu items by name. */
  "NAME";

export type IMenuSortField =
  /** Sort menus by items count. */
  | "ITEMS_COUNT"
  /** Sort menus by name. */
  | "NAME";

export type IMenuSortingInput = {
  /** Specifies the direction in which to sort menus. */
  direction: IOrderDirection;
  /** Sort menus by the selected field. */
  field: IMenuSortField;
};

/**
 * Updates a menu.
 *
 * Requires one of the following permissions: MANAGE_MENUS.
 *
 * Triggers the following webhook events:
 * - MENU_UPDATED (async): A menu was updated.
 */
export type IMenuUpdate = {
  __typename?: "MenuUpdate";
  errors: Array<IMenuError>;
  menu?: Maybe<IMenu>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  menuErrors: Array<IMenuError>;
};

/**
 * Event sent when menu is updated.
 *
 * Added in Saleor 3.4.
 */
export type IMenuUpdated = IEvent & {
  __typename?: "MenuUpdated";
  /** Time of the event. */
  issuedAt?: Maybe<Scalars["DateTime"]>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IIssuingPrincipal>;
  /** The menu the event relates to. */
  menu?: Maybe<IMenu>;
  /** The application receiving the webhook. */
  recipient?: Maybe<IApp>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars["String"]>;
};

/**
 * Event sent when menu is updated.
 *
 * Added in Saleor 3.4.
 */
export type IMenuUpdatedMenuArgs = {
  channel?: InputMaybe<Scalars["String"]>;
};

export type IMetadataError = {
  __typename?: "MetadataError";
  /** The error code. */
  code: IMetadataErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars["String"]>;
  /** The error message. */
  message?: Maybe<Scalars["String"]>;
};

/** An enumeration. */
export type IMetadataErrorCode =
  | "GRAPHQL_ERROR"
  | "INVALID"
  | "NOT_FOUND"
  | "NOT_UPDATED"
  | "REQUIRED";

export type IMetadataFilter = {
  /** Key of a metadata item. */
  key: Scalars["String"];
  /** Value of a metadata item. */
  value?: InputMaybe<Scalars["String"]>;
};

export type IMetadataInput = {
  /** Key of a metadata item. */
  key: Scalars["String"];
  /** Value of a metadata item. */
  value: Scalars["String"];
};

export type IMetadataItem = {
  __typename?: "MetadataItem";
  /** Key of a metadata item. */
  key: Scalars["String"];
  /** Value of a metadata item. */
  value: Scalars["String"];
};

/** Represents amount of money in specific currency. */
export type IMoney = {
  __typename?: "Money";
  /** Amount of money. */
  amount: Scalars["Float"];
  /** Currency code. */
  currency: Scalars["String"];
};

export type IMoneyInput = {
  /** Amount of money. */
  amount: Scalars["PositiveDecimal"];
  /** Currency code. */
  currency: Scalars["String"];
};

/** Represents a range of amounts of money. */
export type IMoneyRange = {
  __typename?: "MoneyRange";
  /** Lower bound of a price range. */
  start?: Maybe<IMoney>;
  /** Upper bound of a price range. */
  stop?: Maybe<IMoney>;
};

export type IMoveProductInput = {
  /** The ID of the product to move. */
  productId: Scalars["ID"];
  /** The relative sorting position of the product (from -inf to +inf) starting from the first given product's actual position.1 moves the item one position forward, -1 moves the item one position backward, 0 leaves the item unchanged. */
  sortOrder?: InputMaybe<Scalars["Int"]>;
};

export type IMutation = {
  __typename?: "Mutation";
  /**
   * Create a new address for the customer.
   *
   * Requires one of the following permissions: AUTHENTICATED_USER.
   *
   * Triggers the following webhook events:
   * - CUSTOMER_UPDATED (async): A customer account was updated.
   * - ADDRESS_CREATED (async): An address was created.
   */
  accountAddressCreate?: Maybe<IAccountAddressCreate>;
  /**
   * Delete an address of the logged-in user. Requires one of the following permissions: MANAGE_USERS, IS_OWNER.
   *
   * Triggers the following webhook events:
   * - ADDRESS_DELETED (async): An address was deleted.
   */
  accountAddressDelete?: Maybe<IAccountAddressDelete>;
  /**
   * Updates an address of the logged-in user. Requires one of the following permissions: MANAGE_USERS, IS_OWNER.
   *
   * Triggers the following webhook events:
   * - ADDRESS_UPDATED (async): An address was updated.
   */
  accountAddressUpdate?: Maybe<IAccountAddressUpdate>;
  /**
   * Remove user account.
   *
   * Requires one of the following permissions: AUTHENTICATED_USER.
   *
   * Triggers the following webhook events:
   * - ACCOUNT_DELETED (async): Account was deleted.
   */
  accountDelete?: Maybe<IAccountDelete>;
  /**
   * Register a new user.
   *
   * Triggers the following webhook events:
   * - CUSTOMER_CREATED (async): A new customer account was created.
   * - NOTIFY_USER (async): A notification for account confirmation.
   * - ACCOUNT_CONFIRMATION_REQUESTED (async): An user confirmation was requested. This event is always sent regardless of settings.
   */
  accountRegister?: Maybe<IAccountRegister>;
  /**
   * Sends an email with the account removal link for the logged-in user.
   *
   * Requires one of the following permissions: AUTHENTICATED_USER.
   *
   * Triggers the following webhook events:
   * - NOTIFY_USER (async): A notification for account delete request.
   * - ACCOUNT_DELETE_REQUESTED (async): An account delete requested.
   */
  accountRequestDeletion?: Maybe<IAccountRequestDeletion>;
  /**
   * Sets a default address for the authenticated user.
   *
   * Requires one of the following permissions: AUTHENTICATED_USER.
   *
   * Triggers the following webhook events:
   * - CUSTOMER_UPDATED (async): A customer's address was updated.
   */
  accountSetDefaultAddress?: Maybe<IAccountSetDefaultAddress>;
  /**
   * Updates the account of the logged-in user.
   *
   * Requires one of the following permissions: AUTHENTICATED_USER.
   *
   * Triggers the following webhook events:
   * - CUSTOMER_UPDATED (async): A customer account was updated.
   * - CUSTOMER_METADATA_UPDATED (async): Optionally called when customer's metadata was updated.
   */
  accountUpdate?: Maybe<IAccountUpdate>;
  /**
   * Creates user address.
   *
   * Requires one of the following permissions: MANAGE_USERS.
   *
   * Triggers the following webhook events:
   * - ADDRESS_CREATED (async): A new address was created.
   */
  addressCreate?: Maybe<IAddressCreate>;
  /**
   * Deletes an address.
   *
   * Requires one of the following permissions: MANAGE_USERS.
   *
   * Triggers the following webhook events:
   * - ADDRESS_DELETED (async): An address was deleted.
   */
  addressDelete?: Maybe<IAddressDelete>;
  /**
   * Sets a default address for the given user.
   *
   * Requires one of the following permissions: MANAGE_USERS.
   *
   * Triggers the following webhook events:
   * - CUSTOMER_UPDATED (async): A customer was updated.
   */
  addressSetDefault?: Maybe<IAddressSetDefault>;
  /**
   * Updates an address.
   *
   * Requires one of the following permissions: MANAGE_USERS.
   *
   * Triggers the following webhook events:
   * - ADDRESS_UPDATED (async): An address was updated.
   */
  addressUpdate?: Maybe<IAddressUpdate>;
  /**
   * Activate the app.
   *
   * Requires one of the following permissions: MANAGE_APPS.
   *
   * Triggers the following webhook events:
   * - APP_STATUS_CHANGED (async): An app was activated.
   */
  appActivate?: Maybe<IAppActivate>;
  /**
   * Creates a new app. Requires the following permissions: AUTHENTICATED_STAFF_USER and MANAGE_APPS.
   *
   * Triggers the following webhook events:
   * - APP_INSTALLED (async): An app was installed.
   */
  appCreate?: Maybe<IAppCreate>;
  /**
   * Deactivate the app.
   *
   * Requires one of the following permissions: MANAGE_APPS.
   *
   * Triggers the following webhook events:
   * - APP_STATUS_CHANGED (async): An app was deactivated.
   */
  appDeactivate?: Maybe<IAppDeactivate>;
  /**
   * Deletes an app.
   *
   * Requires one of the following permissions: MANAGE_APPS.
   *
   * Triggers the following webhook events:
   * - APP_DELETED (async): An app was deleted.
   */
  appDelete?: Maybe<IAppDelete>;
  /**
   * Delete failed installation.
   *
   * Requires one of the following permissions: MANAGE_APPS.
   */
  appDeleteFailedInstallation?: Maybe<IAppDeleteFailedInstallation>;
  /**
   * Fetch and validate manifest.
   *
   * Requires one of the following permissions: MANAGE_APPS.
   */
  appFetchManifest?: Maybe<IAppFetchManifest>;
  /** Install new app by using app manifest. Requires the following permissions: AUTHENTICATED_STAFF_USER and MANAGE_APPS. */
  appInstall?: Maybe<IAppInstall>;
  /**
   * Retry failed installation of new app.
   *
   * Requires one of the following permissions: MANAGE_APPS.
   *
   * Triggers the following webhook events:
   * - APP_INSTALLED (async): An app was installed.
   */
  appRetryInstall?: Maybe<IAppRetryInstall>;
  /**
   * Creates a new token.
   *
   * Requires one of the following permissions: MANAGE_APPS.
   */
  appTokenCreate?: Maybe<IAppTokenCreate>;
  /**
   * Deletes an authentication token assigned to app.
   *
   * Requires one of the following permissions: MANAGE_APPS.
   */
  appTokenDelete?: Maybe<IAppTokenDelete>;
  /** Verify provided app token. */
  appTokenVerify?: Maybe<IAppTokenVerify>;
  /**
   * Updates an existing app.
   *
   * Requires one of the following permissions: MANAGE_APPS.
   *
   * Triggers the following webhook events:
   * - APP_UPDATED (async): An app was updated.
   */
  appUpdate?: Maybe<IAppUpdate>;
  /**
   * Assigns storefront's navigation menus.
   *
   * Requires one of the following permissions: MANAGE_MENUS, MANAGE_SETTINGS.
   */
  assignNavigation?: Maybe<IAssignNavigation>;
  /**
   * Add shipping zone to given warehouse.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  assignWarehouseShippingZone?: Maybe<IWarehouseShippingZoneAssign>;
  /**
   * Creates attributes.
   *
   * Added in Saleor 3.15.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   *
   * Triggers the following webhook events:
   * - ATTRIBUTE_CREATED (async): An attribute was created.
   */
  attributeBulkCreate?: Maybe<IAttributeBulkCreate>;
  /**
   * Deletes attributes.
   *
   * Requires one of the following permissions: MANAGE_PAGE_TYPES_AND_ATTRIBUTES.
   *
   * Triggers the following webhook events:
   * - ATTRIBUTE_DELETED (async): An attribute was deleted.
   */
  attributeBulkDelete?: Maybe<IAttributeBulkDelete>;
  /**
   * Creates/updates translations for attributes.
   *
   * Added in Saleor 3.14.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   *
   * Requires one of the following permissions: MANAGE_TRANSLATIONS.
   */
  attributeBulkTranslate?: Maybe<IAttributeBulkTranslate>;
  /**
   * Updates attributes.
   *
   * Added in Saleor 3.15.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   *
   * Triggers the following webhook events:
   * - ATTRIBUTE_UPDATED (async): An attribute was updated. Optionally called when new attribute value was created or deleted.
   * - ATTRIBUTE_VALUE_CREATED (async): Called optionally when an attribute value was created.
   * - ATTRIBUTE_VALUE_DELETED (async): Called optionally when an attribute value was deleted.
   */
  attributeBulkUpdate?: Maybe<IAttributeBulkUpdate>;
  /**
   * Creates an attribute.
   *
   * Triggers the following webhook events:
   * - ATTRIBUTE_CREATED (async): An attribute was created.
   */
  attributeCreate?: Maybe<IAttributeCreate>;
  /**
   * Deletes an attribute.
   *
   * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
   *
   * Triggers the following webhook events:
   * - ATTRIBUTE_DELETED (async): An attribute was deleted.
   */
  attributeDelete?: Maybe<IAttributeDelete>;
  /**
   * Reorder the values of an attribute.
   *
   * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
   *
   * Triggers the following webhook events:
   * - ATTRIBUTE_VALUE_UPDATED (async): An attribute value was updated.
   * - ATTRIBUTE_UPDATED (async): An attribute was updated.
   */
  attributeReorderValues?: Maybe<IAttributeReorderValues>;
  /**
   * Creates/updates translations for an attribute.
   *
   * Requires one of the following permissions: MANAGE_TRANSLATIONS.
   */
  attributeTranslate?: Maybe<IAttributeTranslate>;
  /**
   * Updates attribute.
   *
   * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
   *
   * Triggers the following webhook events:
   * - ATTRIBUTE_UPDATED (async): An attribute was updated.
   */
  attributeUpdate?: Maybe<IAttributeUpdate>;
  /**
   * Deletes values of attributes.
   *
   * Requires one of the following permissions: MANAGE_PAGE_TYPES_AND_ATTRIBUTES.
   *
   * Triggers the following webhook events:
   * - ATTRIBUTE_VALUE_DELETED (async): An attribute value was deleted.
   * - ATTRIBUTE_UPDATED (async): An attribute was updated.
   */
  attributeValueBulkDelete?: Maybe<IAttributeValueBulkDelete>;
  /**
   * Creates/updates translations for attributes values.
   *
   * Added in Saleor 3.14.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   *
   * Requires one of the following permissions: MANAGE_TRANSLATIONS.
   */
  attributeValueBulkTranslate?: Maybe<IAttributeValueBulkTranslate>;
  /**
   * Creates a value for an attribute.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   *
   * Triggers the following webhook events:
   * - ATTRIBUTE_VALUE_CREATED (async): An attribute value was created.
   * - ATTRIBUTE_UPDATED (async): An attribute was updated.
   */
  attributeValueCreate?: Maybe<IAttributeValueCreate>;
  /**
   * Deletes a value of an attribute.
   *
   * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
   *
   * Triggers the following webhook events:
   * - ATTRIBUTE_VALUE_DELETED (async): An attribute value was deleted.
   * - ATTRIBUTE_UPDATED (async): An attribute was updated.
   */
  attributeValueDelete?: Maybe<IAttributeValueDelete>;
  /**
   * Creates/updates translations for an attribute value.
   *
   * Requires one of the following permissions: MANAGE_TRANSLATIONS.
   */
  attributeValueTranslate?: Maybe<IAttributeValueTranslate>;
  /**
   * Updates value of an attribute.
   *
   * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
   *
   * Triggers the following webhook events:
   * - ATTRIBUTE_VALUE_UPDATED (async): An attribute value was updated.
   * - ATTRIBUTE_UPDATED (async): An attribute was updated.
   */
  attributeValueUpdate?: Maybe<IAttributeValueUpdate>;
  /**
   * Deletes categories.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  categoryBulkDelete?: Maybe<ICategoryBulkDelete>;
  /**
   * Creates a new category.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  categoryCreate?: Maybe<ICategoryCreate>;
  /**
   * Deletes a category.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  categoryDelete?: Maybe<ICategoryDelete>;
  /**
   * Creates/updates translations for a category.
   *
   * Requires one of the following permissions: MANAGE_TRANSLATIONS.
   */
  categoryTranslate?: Maybe<ICategoryTranslate>;
  /**
   * Updates a category.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  categoryUpdate?: Maybe<ICategoryUpdate>;
  /**
   * Activate a channel.
   *
   * Requires one of the following permissions: MANAGE_CHANNELS.
   *
   * Triggers the following webhook events:
   * - CHANNEL_STATUS_CHANGED (async): A channel was activated.
   */
  channelActivate?: Maybe<IChannelActivate>;
  /**
   * Creates new channel.
   *
   * Requires one of the following permissions: MANAGE_CHANNELS.
   *
   * Triggers the following webhook events:
   * - CHANNEL_CREATED (async): A channel was created.
   */
  channelCreate?: Maybe<IChannelCreate>;
  /**
   * Deactivate a channel.
   *
   * Requires one of the following permissions: MANAGE_CHANNELS.
   *
   * Triggers the following webhook events:
   * - CHANNEL_STATUS_CHANGED (async): A channel was deactivated.
   */
  channelDeactivate?: Maybe<IChannelDeactivate>;
  /**
   * Delete a channel. Orders associated with the deleted channel will be moved to the target channel. Checkouts, product availability, and pricing will be removed.
   *
   * Requires one of the following permissions: MANAGE_CHANNELS.
   *
   * Triggers the following webhook events:
   * - CHANNEL_DELETED (async): A channel was deleted.
   */
  channelDelete?: Maybe<IChannelDelete>;
  /**
   * Reorder the warehouses of a channel.
   *
   * Added in Saleor 3.7.
   *
   * Requires one of the following permissions: MANAGE_CHANNELS.
   */
  channelReorderWarehouses?: Maybe<IChannelReorderWarehouses>;
  /**
   * Update a channel.
   *
   * Requires one of the following permissions: MANAGE_CHANNELS.
   * Requires one of the following permissions when updating only `orderSettings` field: MANAGE_CHANNELS, MANAGE_ORDERS.Requires one of the following permissions when updating only `checkoutSettings` field: MANAGE_CHANNELS, MANAGE_CHECKOUTS.
   *
   * Triggers the following webhook events:
   * - CHANNEL_UPDATED (async): A channel was updated.
   * - CHANNEL_METADATA_UPDATED (async): Optionally triggered when public or private metadata is updated.
   */
  channelUpdate?: Maybe<IChannelUpdate>;
  /**
   * Adds a gift card or a voucher to a checkout.
   *
   * Triggers the following webhook events:
   * - CHECKOUT_UPDATED (async): A checkout was updated.
   */
  checkoutAddPromoCode?: Maybe<ICheckoutAddPromoCode>;
  /**
   * Update billing address in the existing checkout.
   *
   * Triggers the following webhook events:
   * - CHECKOUT_UPDATED (async): A checkout was updated.
   */
  checkoutBillingAddressUpdate?: Maybe<ICheckoutBillingAddressUpdate>;
  /**
   * Completes the checkout. As a result a new order is created. The mutation allows to create the unpaid order when setting `orderSettings.allowUnpaidOrders` for given `Channel` is set to `true`. When `orderSettings.allowUnpaidOrders` is set to `false`, checkout can be completed only when attached `Payment`/`TransactionItem`s fully cover the checkout's total. When processing the checkout with `Payment`, in case of required additional confirmation step like 3D secure, the `confirmationNeeded` flag will be set to True and no order will be created until payment is confirmed with second call of this mutation.
   *
   * Triggers the following webhook events:
   * - SHIPPING_LIST_METHODS_FOR_CHECKOUT (sync): Optionally triggered when cached external shipping methods are invalid.
   * - CHECKOUT_FILTER_SHIPPING_METHODS (sync): Optionally triggered when cached filtered shipping methods are invalid.
   * - CHECKOUT_CALCULATE_TAXES (sync): Optionally triggered when checkout prices are expired.
   * - ORDER_CREATED (async): Triggered when order is created.
   * - NOTIFY_USER (async): A notification for order placement.
   * - NOTIFY_USER (async): A staff notification for order placement.
   * - ORDER_UPDATED (async): Triggered when order received the update after placement.
   * - ORDER_PAID (async): Triggered when newly created order is paid.
   * - ORDER_FULLY_PAID (async): Triggered when newly created order is fully paid.
   * - ORDER_CONFIRMED (async): Optionally triggered when newly created order are automatically marked as confirmed.
   */
  checkoutComplete?: Maybe<ICheckoutComplete>;
  /**
   * Create a new checkout.
   *
   * Triggers the following webhook events:
   * - CHECKOUT_CREATED (async): A checkout was created.
   */
  checkoutCreate?: Maybe<ICheckoutCreate>;
  /**
   * Create new checkout from existing order.
   *
   * Added in Saleor 3.14.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  checkoutCreateFromOrder?: Maybe<ICheckoutCreateFromOrder>;
  /**
   * Sets the customer as the owner of the checkout.
   *
   * Requires one of the following permissions: AUTHENTICATED_APP, AUTHENTICATED_USER.
   *
   * Triggers the following webhook events:
   * - CHECKOUT_UPDATED (async): A checkout was updated.
   */
  checkoutCustomerAttach?: Maybe<ICheckoutCustomerAttach>;
  /**
   * Removes the user assigned as the owner of the checkout.
   *
   * Requires one of the following permissions: AUTHENTICATED_APP, AUTHENTICATED_USER.
   *
   * Triggers the following webhook events:
   * - CHECKOUT_UPDATED (async): A checkout was updated.
   */
  checkoutCustomerDetach?: Maybe<ICheckoutCustomerDetach>;
  /**
   * Updates the delivery method (shipping method or pick up point) of the checkout.
   *
   * Added in Saleor 3.1.
   *
   * Triggers the following webhook events:
   * - SHIPPING_LIST_METHODS_FOR_CHECKOUT (sync): Triggered when updating the checkout delivery method with the external one.
   * - CHECKOUT_UPDATED (async): A checkout was updated.
   */
  checkoutDeliveryMethodUpdate?: Maybe<ICheckoutDeliveryMethodUpdate>;
  /**
   * Updates email address in the existing checkout object.
   *
   * Triggers the following webhook events:
   * - CHECKOUT_UPDATED (async): A checkout was updated.
   */
  checkoutEmailUpdate?: Maybe<ICheckoutEmailUpdate>;
  /**
   * Update language code in the existing checkout.
   *
   * Triggers the following webhook events:
   * - CHECKOUT_UPDATED (async): A checkout was updated.
   */
  checkoutLanguageCodeUpdate?: Maybe<ICheckoutLanguageCodeUpdate>;
  /**
   * Deletes a CheckoutLine.
   *
   * Triggers the following webhook events:
   * - CHECKOUT_UPDATED (async): A checkout was updated.
   * @deprecated This field will be removed in Saleor 4.0. Use `checkoutLinesDelete` instead.
   */
  checkoutLineDelete?: Maybe<ICheckoutLineDelete>;
  /**
   * Adds a checkout line to the existing checkout.If line was already in checkout, its quantity will be increased.
   *
   * Triggers the following webhook events:
   * - CHECKOUT_UPDATED (async): A checkout was updated.
   */
  checkoutLinesAdd?: Maybe<ICheckoutLinesAdd>;
  /**
   * Deletes checkout lines.
   *
   * Triggers the following webhook events:
   * - CHECKOUT_UPDATED (async): A checkout was updated.
   */
  checkoutLinesDelete?: Maybe<ICheckoutLinesDelete>;
  /**
   * Updates checkout line in the existing checkout.
   *
   * Triggers the following webhook events:
   * - CHECKOUT_UPDATED (async): A checkout was updated.
   */
  checkoutLinesUpdate?: Maybe<ICheckoutLinesUpdate>;
  /** Create a new payment for given checkout. */
  checkoutPaymentCreate?: Maybe<ICheckoutPaymentCreate>;
  /**
   * Remove a gift card or a voucher from a checkout.
   *
   * Triggers the following webhook events:
   * - CHECKOUT_UPDATED (async): A checkout was updated.
   */
  checkoutRemovePromoCode?: Maybe<ICheckoutRemovePromoCode>;
  /**
   * Update shipping address in the existing checkout.
   *
   * Triggers the following webhook events:
   * - CHECKOUT_UPDATED (async): A checkout was updated.
   */
  checkoutShippingAddressUpdate?: Maybe<ICheckoutShippingAddressUpdate>;
  /**
   * Updates the shipping method of the checkout.
   *
   * Triggers the following webhook events:
   * - SHIPPING_LIST_METHODS_FOR_CHECKOUT (sync): Triggered when updating the checkout shipping method with the external one.
   * - CHECKOUT_UPDATED (async): A checkout was updated.
   * @deprecated This field will be removed in Saleor 4.0. Use `checkoutDeliveryMethodUpdate` instead.
   */
  checkoutShippingMethodUpdate?: Maybe<ICheckoutShippingMethodUpdate>;
  /**
   * Adds products to a collection.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  collectionAddProducts?: Maybe<ICollectionAddProducts>;
  /**
   * Deletes collections.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  collectionBulkDelete?: Maybe<ICollectionBulkDelete>;
  /**
   * Manage collection's availability in channels.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  collectionChannelListingUpdate?: Maybe<ICollectionChannelListingUpdate>;
  /**
   * Creates a new collection.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  collectionCreate?: Maybe<ICollectionCreate>;
  /**
   * Deletes a collection.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  collectionDelete?: Maybe<ICollectionDelete>;
  /**
   * Remove products from a collection.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  collectionRemoveProducts?: Maybe<ICollectionRemoveProducts>;
  /**
   * Reorder the products of a collection.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  collectionReorderProducts?: Maybe<ICollectionReorderProducts>;
  /**
   * Creates/updates translations for a collection.
   *
   * Requires one of the following permissions: MANAGE_TRANSLATIONS.
   */
  collectionTranslate?: Maybe<ICollectionTranslate>;
  /**
   * Updates a collection.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  collectionUpdate?: Maybe<ICollectionUpdate>;
  /**
   * Confirm user account with token sent by email during registration.
   *
   * Triggers the following webhook events:
   * - ACCOUNT_CONFIRMED (async): Account was confirmed.
   */
  confirmAccount?: Maybe<IConfirmAccount>;
  /**
   * Confirm the email change of the logged-in user.
   *
   * Requires one of the following permissions: AUTHENTICATED_USER.
   *
   * Triggers the following webhook events:
   * - CUSTOMER_UPDATED (async): A customer account was updated.
   * - NOTIFY_USER (async): A notification that account email change was confirmed.
   * - ACCOUNT_EMAIL_CHANGED (async): An account email was changed.
   */
  confirmEmailChange?: Maybe<IConfirmEmailChange>;
  /**
   * Creates new warehouse.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  createWarehouse?: Maybe<IWarehouseCreate>;
  /**
   * Deletes customers.
   *
   * Requires one of the following permissions: MANAGE_USERS.
   *
   * Triggers the following webhook events:
   * - CUSTOMER_DELETED (async): A customer account was deleted.
   */
  customerBulkDelete?: Maybe<ICustomerBulkDelete>;
  /**
   * Updates customers.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   *
   * Requires one of the following permissions: MANAGE_USERS.
   *
   * Triggers the following webhook events:
   * - CUSTOMER_UPDATED (async): A customer account was updated.
   * - CUSTOMER_METADATA_UPDATED (async): Optionally called when customer's metadata was updated.
   */
  customerBulkUpdate?: Maybe<ICustomerBulkUpdate>;
  /**
   * Creates a new customer.
   *
   * Requires one of the following permissions: MANAGE_USERS.
   *
   * Triggers the following webhook events:
   * - CUSTOMER_CREATED (async): A new customer account was created.
   * - CUSTOMER_METADATA_UPDATED (async): Optionally called when customer's metadata was updated.
   * - NOTIFY_USER (async): A notification for setting the password.
   * - ACCOUNT_SET_PASSWORD_REQUESTED (async): Setting a new password for the account is requested.
   */
  customerCreate?: Maybe<ICustomerCreate>;
  /**
   * Deletes a customer.
   *
   * Requires one of the following permissions: MANAGE_USERS.
   *
   * Triggers the following webhook events:
   * - CUSTOMER_DELETED (async): A customer account was deleted.
   */
  customerDelete?: Maybe<ICustomerDelete>;
  /**
   * Updates an existing customer.
   *
   * Requires one of the following permissions: MANAGE_USERS.
   *
   * Triggers the following webhook events:
   * - CUSTOMER_UPDATED (async): A new customer account was updated.
   * - CUSTOMER_METADATA_UPDATED (async): Optionally called when customer's metadata was updated.
   */
  customerUpdate?: Maybe<ICustomerUpdate>;
  /** Delete metadata of an object. To use it, you need to have access to the modified object. */
  deleteMetadata?: Maybe<IDeleteMetadata>;
  /** Delete object's private metadata. To use it, you need to be an authenticated staff user or an app and have access to the modified object. */
  deletePrivateMetadata?: Maybe<IDeletePrivateMetadata>;
  /**
   * Deletes selected warehouse.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  deleteWarehouse?: Maybe<IWarehouseDelete>;
  /**
   * Create new digital content. This mutation must be sent as a `multipart` request. More detailed specs of the upload format can be found here: https://github.com/jaydenseric/graphql-multipart-request-spec
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  digitalContentCreate?: Maybe<IDigitalContentCreate>;
  /**
   * Remove digital content assigned to given variant.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  digitalContentDelete?: Maybe<IDigitalContentDelete>;
  /**
   * Update digital content.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  digitalContentUpdate?: Maybe<IDigitalContentUpdate>;
  /**
   * Generate new URL to digital content.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  digitalContentUrlCreate?: Maybe<IDigitalContentUrlCreate>;
  /**
   * Deletes draft orders.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  draftOrderBulkDelete?: Maybe<IDraftOrderBulkDelete>;
  /**
   * Completes creating an order.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  draftOrderComplete?: Maybe<IDraftOrderComplete>;
  /**
   * Creates a new draft order.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  draftOrderCreate?: Maybe<IDraftOrderCreate>;
  /**
   * Deletes a draft order.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  draftOrderDelete?: Maybe<IDraftOrderDelete>;
  /**
   * Deletes order lines.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   * @deprecated This field will be removed in Saleor 4.0.
   */
  draftOrderLinesBulkDelete?: Maybe<IDraftOrderLinesBulkDelete>;
  /**
   * Updates a draft order.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  draftOrderUpdate?: Maybe<IDraftOrderUpdate>;
  /**
   * Retries event delivery.
   *
   * Requires one of the following permissions: MANAGE_APPS.
   */
  eventDeliveryRetry?: Maybe<IEventDeliveryRetry>;
  /**
   * Export gift cards to csv file.
   *
   * Added in Saleor 3.1.
   *
   * Requires one of the following permissions: MANAGE_GIFT_CARD.
   *
   * Triggers the following webhook events:
   * - NOTIFY_USER (async): A notification for the exported file.
   */
  exportGiftCards?: Maybe<IExportGiftCards>;
  /**
   * Export products to csv file.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   *
   * Triggers the following webhook events:
   * - NOTIFY_USER (async): A notification for the exported file.
   */
  exportProducts?: Maybe<IExportProducts>;
  /** Prepare external authentication URL for user by custom plugin. */
  externalAuthenticationUrl?: Maybe<IExternalAuthenticationUrl>;
  /** Logout user by custom plugin. */
  externalLogout?: Maybe<IExternalLogout>;
  /**
   * Trigger sending a notification with the notify plugin method. Serializes nodes provided as ids parameter and includes this data in the notification payload.
   *
   * Added in Saleor 3.1.
   */
  externalNotificationTrigger?: Maybe<IExternalNotificationTrigger>;
  /** Obtain external access tokens for user by custom plugin. */
  externalObtainAccessTokens?: Maybe<IExternalObtainAccessTokens>;
  /** Refresh user's access by custom plugin. */
  externalRefresh?: Maybe<IExternalRefresh>;
  /** Verify external authentication data by plugin. */
  externalVerify?: Maybe<IExternalVerify>;
  /**
   * Upload a file. This mutation must be sent as a `multipart` request. More detailed specs of the upload format can be found here: https://github.com/jaydenseric/graphql-multipart-request-spec
   *
   * Requires one of the following permissions: AUTHENTICATED_APP, AUTHENTICATED_STAFF_USER.
   */
  fileUpload?: Maybe<IFileUpload>;
  /**
   * Activate a gift card.
   *
   * Requires one of the following permissions: MANAGE_GIFT_CARD.
   *
   * Triggers the following webhook events:
   * - GIFT_CARD_STATUS_CHANGED (async): A gift card was activated.
   */
  giftCardActivate?: Maybe<IGiftCardActivate>;
  /**
   * Adds note to the gift card.
   *
   * Added in Saleor 3.1.
   *
   * Requires one of the following permissions: MANAGE_GIFT_CARD.
   *
   * Triggers the following webhook events:
   * - GIFT_CARD_UPDATED (async): A gift card was updated.
   */
  giftCardAddNote?: Maybe<IGiftCardAddNote>;
  /**
   * Activate gift cards.
   *
   * Added in Saleor 3.1.
   *
   * Requires one of the following permissions: MANAGE_GIFT_CARD.
   *
   * Triggers the following webhook events:
   * - GIFT_CARD_STATUS_CHANGED (async): A gift card was activated.
   */
  giftCardBulkActivate?: Maybe<IGiftCardBulkActivate>;
  /**
   * Create gift cards.
   *
   * Added in Saleor 3.1.
   *
   * Requires one of the following permissions: MANAGE_GIFT_CARD.
   *
   * Triggers the following webhook events:
   * - GIFT_CARD_CREATED (async): A gift card was created.
   * - NOTIFY_USER (async): A notification for created gift card.
   */
  giftCardBulkCreate?: Maybe<IGiftCardBulkCreate>;
  /**
   * Deactivate gift cards.
   *
   * Added in Saleor 3.1.
   *
   * Requires one of the following permissions: MANAGE_GIFT_CARD.
   *
   * Triggers the following webhook events:
   * - GIFT_CARD_STATUS_CHANGED (async): A gift card was deactivated.
   */
  giftCardBulkDeactivate?: Maybe<IGiftCardBulkDeactivate>;
  /**
   * Delete gift cards.
   *
   * Added in Saleor 3.1.
   *
   * Requires one of the following permissions: MANAGE_GIFT_CARD.
   *
   * Triggers the following webhook events:
   * - GIFT_CARD_DELETED (async): A gift card was deleted.
   */
  giftCardBulkDelete?: Maybe<IGiftCardBulkDelete>;
  /**
   * Creates a new gift card.
   *
   * Requires one of the following permissions: MANAGE_GIFT_CARD.
   *
   * Triggers the following webhook events:
   * - GIFT_CARD_CREATED (async): A gift card was created.
   * - NOTIFY_USER (async): A notification for created gift card.
   */
  giftCardCreate?: Maybe<IGiftCardCreate>;
  /**
   * Deactivate a gift card.
   *
   * Requires one of the following permissions: MANAGE_GIFT_CARD.
   *
   * Triggers the following webhook events:
   * - GIFT_CARD_STATUS_CHANGED (async): A gift card was deactivated.
   */
  giftCardDeactivate?: Maybe<IGiftCardDeactivate>;
  /**
   * Delete gift card.
   *
   * Added in Saleor 3.1.
   *
   * Requires one of the following permissions: MANAGE_GIFT_CARD.
   *
   * Triggers the following webhook events:
   * - GIFT_CARD_DELETED (async): A gift card was deleted.
   */
  giftCardDelete?: Maybe<IGiftCardDelete>;
  /**
   * Resend a gift card.
   *
   * Added in Saleor 3.1.
   *
   * Requires one of the following permissions: MANAGE_GIFT_CARD.
   *
   * Triggers the following webhook events:
   * - NOTIFY_USER (async): A notification for gift card resend.
   */
  giftCardResend?: Maybe<IGiftCardResend>;
  /**
   * Update gift card settings.
   *
   * Requires one of the following permissions: MANAGE_GIFT_CARD.
   */
  giftCardSettingsUpdate?: Maybe<IGiftCardSettingsUpdate>;
  /**
   * Update a gift card.
   *
   * Requires one of the following permissions: MANAGE_GIFT_CARD.
   *
   * Triggers the following webhook events:
   * - GIFT_CARD_UPDATED (async): A gift card was updated.
   */
  giftCardUpdate?: Maybe<IGiftCardUpdate>;
  /**
   * Creates a ready to send invoice.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  invoiceCreate?: Maybe<IInvoiceCreate>;
  /**
   * Deletes an invoice.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  invoiceDelete?: Maybe<IInvoiceDelete>;
  /**
   * Request an invoice for the order using plugin.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   *
   * Triggers the following webhook events:
   * - INVOICE_REQUESTED (async): An invoice was requested.
   */
  invoiceRequest?: Maybe<IInvoiceRequest>;
  /**
   * Requests deletion of an invoice.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   *
   * Triggers the following webhook events:
   * - INVOICE_DELETED (async): An invoice was requested to delete.
   */
  invoiceRequestDelete?: Maybe<IInvoiceRequestDelete>;
  /**
   * Send an invoice notification to the customer.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   *
   * Triggers the following webhook events:
   * - INVOICE_SENT (async): A notification for invoice send
   * - NOTIFY_USER (async): A notification for invoice send
   */
  invoiceSendNotification?: Maybe<IInvoiceSendNotification>;
  /**
   * Updates an invoice.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  invoiceUpdate?: Maybe<IInvoiceUpdate>;
  /**
   * Deletes menus.
   *
   * Requires one of the following permissions: MANAGE_MENUS.
   *
   * Triggers the following webhook events:
   * - MENU_DELETED (async): A menu was deleted.
   */
  menuBulkDelete?: Maybe<IMenuBulkDelete>;
  /**
   * Creates a new Menu.
   *
   * Requires one of the following permissions: MANAGE_MENUS.
   *
   * Triggers the following webhook events:
   * - MENU_CREATED (async): A menu was created.
   */
  menuCreate?: Maybe<IMenuCreate>;
  /**
   * Deletes a menu.
   *
   * Requires one of the following permissions: MANAGE_MENUS.
   *
   * Triggers the following webhook events:
   * - MENU_DELETED (async): A menu was deleted.
   */
  menuDelete?: Maybe<IMenuDelete>;
  /**
   * Deletes menu items.
   *
   * Requires one of the following permissions: MANAGE_MENUS.
   *
   * Triggers the following webhook events:
   * - MENU_ITEM_DELETED (async): A menu item was deleted.
   */
  menuItemBulkDelete?: Maybe<IMenuItemBulkDelete>;
  /**
   * Creates a new menu item.
   *
   * Requires one of the following permissions: MANAGE_MENUS.
   *
   * Triggers the following webhook events:
   * - MENU_ITEM_CREATED (async): A menu item was created.
   */
  menuItemCreate?: Maybe<IMenuItemCreate>;
  /**
   * Deletes a menu item.
   *
   * Requires one of the following permissions: MANAGE_MENUS.
   *
   * Triggers the following webhook events:
   * - MENU_ITEM_DELETED (async): A menu item was deleted.
   */
  menuItemDelete?: Maybe<IMenuItemDelete>;
  /**
   * Moves items of menus.
   *
   * Requires one of the following permissions: MANAGE_MENUS.
   *
   * Triggers the following webhook events:
   * - MENU_ITEM_UPDATED (async): Optionally triggered when sort order or parent changed for menu item.
   */
  menuItemMove?: Maybe<IMenuItemMove>;
  /**
   * Creates/updates translations for a menu item.
   *
   * Requires one of the following permissions: MANAGE_TRANSLATIONS.
   */
  menuItemTranslate?: Maybe<IMenuItemTranslate>;
  /**
   * Updates a menu item.
   *
   * Requires one of the following permissions: MANAGE_MENUS.
   *
   * Triggers the following webhook events:
   * - MENU_ITEM_UPDATED (async): A menu item was updated.
   */
  menuItemUpdate?: Maybe<IMenuItemUpdate>;
  /**
   * Updates a menu.
   *
   * Requires one of the following permissions: MANAGE_MENUS.
   *
   * Triggers the following webhook events:
   * - MENU_UPDATED (async): A menu was updated.
   */
  menuUpdate?: Maybe<IMenuUpdate>;
  /**
   * Adds note to the order.
   *
   * DEPRECATED: this mutation will be removed in Saleor 4.0.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   * @deprecated This field will be removed in Saleor 4.0. Use `orderNoteAdd` instead.
   */
  orderAddNote?: Maybe<IOrderAddNote>;
  /**
   * Cancels orders.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  orderBulkCancel?: Maybe<IOrderBulkCancel>;
  /**
   * Creates multiple orders.
   *
   * Added in Saleor 3.14.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   *
   * Requires one of the following permissions: MANAGE_ORDERS_IMPORT.
   */
  orderBulkCreate?: Maybe<IOrderBulkCreate>;
  /**
   * Cancel an order.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  orderCancel?: Maybe<IOrderCancel>;
  /**
   * Capture an order.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  orderCapture?: Maybe<IOrderCapture>;
  /**
   * Confirms an unconfirmed order by changing status to unfulfilled.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  orderConfirm?: Maybe<IOrderConfirm>;
  /**
   * Create new order from existing checkout. Requires the following permissions: AUTHENTICATED_APP and HANDLE_CHECKOUTS.
   *
   * Added in Saleor 3.2.
   *
   * Triggers the following webhook events:
   * - SHIPPING_LIST_METHODS_FOR_CHECKOUT (sync): Optionally triggered when cached external shipping methods are invalid.
   * - CHECKOUT_FILTER_SHIPPING_METHODS (sync): Optionally triggered when cached filtered shipping methods are invalid.
   * - CHECKOUT_CALCULATE_TAXES (sync): Optionally triggered when checkout prices are expired.
   * - ORDER_CREATED (async): Triggered when order is created.
   * - NOTIFY_USER (async): A notification for order placement.
   * - NOTIFY_USER (async): A staff notification for order placement.
   * - ORDER_UPDATED (async): Triggered when order received the update after placement.
   * - ORDER_PAID (async): Triggered when newly created order is paid.
   * - ORDER_FULLY_PAID (async): Triggered when newly created order is fully paid.
   * - ORDER_CONFIRMED (async): Optionally triggered when newly created order are automatically marked as confirmed.
   */
  orderCreateFromCheckout?: Maybe<IOrderCreateFromCheckout>;
  /**
   * Adds discount to the order.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  orderDiscountAdd?: Maybe<IOrderDiscountAdd>;
  /**
   * Remove discount from the order.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  orderDiscountDelete?: Maybe<IOrderDiscountDelete>;
  /**
   * Update discount for the order.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  orderDiscountUpdate?: Maybe<IOrderDiscountUpdate>;
  /**
   * Creates new fulfillments for an order.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  orderFulfill?: Maybe<IOrderFulfill>;
  /**
   * Approve existing fulfillment.
   *
   * Added in Saleor 3.1.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  orderFulfillmentApprove?: Maybe<IFulfillmentApprove>;
  /**
   * Cancels existing fulfillment and optionally restocks items.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  orderFulfillmentCancel?: Maybe<IFulfillmentCancel>;
  /**
   * Refund products.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  orderFulfillmentRefundProducts?: Maybe<IFulfillmentRefundProducts>;
  /**
   * Return products.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  orderFulfillmentReturnProducts?: Maybe<IFulfillmentReturnProducts>;
  /**
   * Updates a fulfillment for an order.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  orderFulfillmentUpdateTracking?: Maybe<IFulfillmentUpdateTracking>;
  /**
   * Adds granted refund to the order.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  orderGrantRefundCreate?: Maybe<IOrderGrantRefundCreate>;
  /**
   * Updates granted refund.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  orderGrantRefundUpdate?: Maybe<IOrderGrantRefundUpdate>;
  /**
   * Deletes an order line from an order.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  orderLineDelete?: Maybe<IOrderLineDelete>;
  /**
   * Remove discount applied to the order line.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  orderLineDiscountRemove?: Maybe<IOrderLineDiscountRemove>;
  /**
   * Update discount for the order line.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  orderLineDiscountUpdate?: Maybe<IOrderLineDiscountUpdate>;
  /**
   * Updates an order line of an order.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  orderLineUpdate?: Maybe<IOrderLineUpdate>;
  /**
   * Create order lines for an order.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  orderLinesCreate?: Maybe<IOrderLinesCreate>;
  /**
   * Mark order as manually paid.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  orderMarkAsPaid?: Maybe<IOrderMarkAsPaid>;
  /**
   * Adds note to the order.
   *
   * Added in Saleor 3.15.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  orderNoteAdd?: Maybe<IOrderNoteAdd>;
  /**
   * Updates note of an order.
   *
   * Added in Saleor 3.15.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  orderNoteUpdate?: Maybe<IOrderNoteUpdate>;
  /**
   * Refund an order.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  orderRefund?: Maybe<IOrderRefund>;
  /**
   * Update shop order settings across all channels. Returns `orderSettings` for the first `channel` in alphabetical order.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   * @deprecated
   *
   * DEPRECATED: this mutation will be removed in Saleor 4.0. Use `channelUpdate` mutation instead.
   */
  orderSettingsUpdate?: Maybe<IOrderSettingsUpdate>;
  /**
   * Updates an order.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  orderUpdate?: Maybe<IOrderUpdate>;
  /**
   * Updates a shipping method of the order. Requires shipping method ID to update, when null is passed then currently assigned shipping method is removed.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  orderUpdateShipping?: Maybe<IOrderUpdateShipping>;
  /**
   * Void an order.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  orderVoid?: Maybe<IOrderVoid>;
  /**
   * Assign attributes to a given page type.
   *
   * Requires one of the following permissions: MANAGE_PAGE_TYPES_AND_ATTRIBUTES.
   */
  pageAttributeAssign?: Maybe<IPageAttributeAssign>;
  /**
   * Unassign attributes from a given page type.
   *
   * Requires one of the following permissions: MANAGE_PAGE_TYPES_AND_ATTRIBUTES.
   */
  pageAttributeUnassign?: Maybe<IPageAttributeUnassign>;
  /**
   * Deletes pages.
   *
   * Requires one of the following permissions: MANAGE_PAGES.
   */
  pageBulkDelete?: Maybe<IPageBulkDelete>;
  /**
   * Publish pages.
   *
   * Requires one of the following permissions: MANAGE_PAGES.
   */
  pageBulkPublish?: Maybe<IPageBulkPublish>;
  /**
   * Creates a new page.
   *
   * Requires one of the following permissions: MANAGE_PAGES.
   */
  pageCreate?: Maybe<IPageCreate>;
  /**
   * Deletes a page.
   *
   * Requires one of the following permissions: MANAGE_PAGES.
   */
  pageDelete?: Maybe<IPageDelete>;
  /**
   * Reorder page attribute values.
   *
   * Requires one of the following permissions: MANAGE_PAGES.
   */
  pageReorderAttributeValues?: Maybe<IPageReorderAttributeValues>;
  /**
   * Creates/updates translations for a page.
   *
   * Requires one of the following permissions: MANAGE_TRANSLATIONS.
   */
  pageTranslate?: Maybe<IPageTranslate>;
  /**
   * Delete page types.
   *
   * Requires one of the following permissions: MANAGE_PAGE_TYPES_AND_ATTRIBUTES.
   */
  pageTypeBulkDelete?: Maybe<IPageTypeBulkDelete>;
  /**
   * Create a new page type.
   *
   * Requires one of the following permissions: MANAGE_PAGE_TYPES_AND_ATTRIBUTES.
   */
  pageTypeCreate?: Maybe<IPageTypeCreate>;
  /**
   * Delete a page type.
   *
   * Requires one of the following permissions: MANAGE_PAGE_TYPES_AND_ATTRIBUTES.
   */
  pageTypeDelete?: Maybe<IPageTypeDelete>;
  /**
   * Reorder the attributes of a page type.
   *
   * Requires one of the following permissions: MANAGE_PAGE_TYPES_AND_ATTRIBUTES.
   */
  pageTypeReorderAttributes?: Maybe<IPageTypeReorderAttributes>;
  /**
   * Update page type.
   *
   * Requires one of the following permissions: MANAGE_PAGE_TYPES_AND_ATTRIBUTES.
   */
  pageTypeUpdate?: Maybe<IPageTypeUpdate>;
  /**
   * Updates an existing page.
   *
   * Requires one of the following permissions: MANAGE_PAGES.
   */
  pageUpdate?: Maybe<IPageUpdate>;
  /**
   * Change the password of the logged in user.
   *
   * Requires one of the following permissions: AUTHENTICATED_USER.
   */
  passwordChange?: Maybe<IPasswordChange>;
  /**
   * Captures the authorized payment amount.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  paymentCapture?: Maybe<IPaymentCapture>;
  /** Check payment balance. */
  paymentCheckBalance?: Maybe<IPaymentCheckBalance>;
  /**
   * Initializes a payment gateway session. It triggers the webhook `PAYMENT_GATEWAY_INITIALIZE_SESSION`, to the requested `paymentGateways`. If `paymentGateways` is not provided, the webhook will be send to all subscribed payment gateways.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  paymentGatewayInitialize?: Maybe<IPaymentGatewayInitialize>;
  /** Initializes payment process when it is required by gateway. */
  paymentInitialize?: Maybe<IPaymentInitialize>;
  /**
   * Refunds the captured payment amount.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  paymentRefund?: Maybe<IPaymentRefund>;
  /**
   * Voids the authorized payment.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  paymentVoid?: Maybe<IPaymentVoid>;
  /**
   * Create new permission group. Apps are not allowed to perform this mutation.
   *
   * Requires one of the following permissions: MANAGE_STAFF.
   *
   * Triggers the following webhook events:
   * - PERMISSION_GROUP_CREATED (async)
   */
  permissionGroupCreate?: Maybe<IPermissionGroupCreate>;
  /**
   * Delete permission group. Apps are not allowed to perform this mutation.
   *
   * Requires one of the following permissions: MANAGE_STAFF.
   *
   * Triggers the following webhook events:
   * - PERMISSION_GROUP_DELETED (async)
   */
  permissionGroupDelete?: Maybe<IPermissionGroupDelete>;
  /**
   * Update permission group. Apps are not allowed to perform this mutation.
   *
   * Requires one of the following permissions: MANAGE_STAFF.
   *
   * Triggers the following webhook events:
   * - PERMISSION_GROUP_UPDATED (async)
   */
  permissionGroupUpdate?: Maybe<IPermissionGroupUpdate>;
  /**
   * Update plugin configuration.
   *
   * Requires one of the following permissions: MANAGE_PLUGINS.
   */
  pluginUpdate?: Maybe<IPluginUpdate>;
  /**
   * Assign attributes to a given product type.
   *
   * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
   */
  productAttributeAssign?: Maybe<IProductAttributeAssign>;
  /**
   * Update attributes assigned to product variant for given product type.
   *
   * Added in Saleor 3.1.
   *
   * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
   */
  productAttributeAssignmentUpdate?: Maybe<IProductAttributeAssignmentUpdate>;
  /**
   * Un-assign attributes from a given product type.
   *
   * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
   */
  productAttributeUnassign?: Maybe<IProductAttributeUnassign>;
  /**
   * Creates products.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  productBulkCreate?: Maybe<IProductBulkCreate>;
  /**
   * Deletes products.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  productBulkDelete?: Maybe<IProductBulkDelete>;
  /**
   * Creates/updates translations for products.
   *
   * Added in Saleor 3.15.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   *
   * Requires one of the following permissions: MANAGE_TRANSLATIONS.
   *
   * Triggers the following webhook events:
   * - TRANSLATION_CREATED (async): Called when a translation was created.
   * - TRANSLATION_UPDATED (async): Called when a translation was updated.
   */
  productBulkTranslate?: Maybe<IProductBulkTranslate>;
  /**
   * Manage product's availability in channels.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  productChannelListingUpdate?: Maybe<IProductChannelListingUpdate>;
  /**
   * Creates a new product.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  productCreate?: Maybe<IProductCreate>;
  /**
   * Deletes a product.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  productDelete?: Maybe<IProductDelete>;
  /**
   * Deletes product media.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  productMediaBulkDelete?: Maybe<IProductMediaBulkDelete>;
  /**
   * Create a media object (image or video URL) associated with product. For image, this mutation must be sent as a `multipart` request. More detailed specs of the upload format can be found here: https://github.com/jaydenseric/graphql-multipart-request-spec
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  productMediaCreate?: Maybe<IProductMediaCreate>;
  /**
   * Deletes a product media.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  productMediaDelete?: Maybe<IProductMediaDelete>;
  /**
   * Changes ordering of the product media.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  productMediaReorder?: Maybe<IProductMediaReorder>;
  /**
   * Updates a product media.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  productMediaUpdate?: Maybe<IProductMediaUpdate>;
  /**
   * Reorder product attribute values.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  productReorderAttributeValues?: Maybe<IProductReorderAttributeValues>;
  /**
   * Creates/updates translations for a product.
   *
   * Requires one of the following permissions: MANAGE_TRANSLATIONS.
   */
  productTranslate?: Maybe<IProductTranslate>;
  /**
   * Deletes product types.
   *
   * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
   */
  productTypeBulkDelete?: Maybe<IProductTypeBulkDelete>;
  /**
   * Creates a new product type.
   *
   * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
   */
  productTypeCreate?: Maybe<IProductTypeCreate>;
  /**
   * Deletes a product type.
   *
   * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
   */
  productTypeDelete?: Maybe<IProductTypeDelete>;
  /**
   * Reorder the attributes of a product type.
   *
   * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
   */
  productTypeReorderAttributes?: Maybe<IProductTypeReorderAttributes>;
  /**
   * Updates an existing product type.
   *
   * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
   */
  productTypeUpdate?: Maybe<IProductTypeUpdate>;
  /**
   * Updates an existing product.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  productUpdate?: Maybe<IProductUpdate>;
  /**
   * Creates product variants for a given product.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  productVariantBulkCreate?: Maybe<IProductVariantBulkCreate>;
  /**
   * Deletes product variants.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  productVariantBulkDelete?: Maybe<IProductVariantBulkDelete>;
  /**
   * Creates/updates translations for products variants.
   *
   * Added in Saleor 3.15.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   *
   * Requires one of the following permissions: MANAGE_TRANSLATIONS.
   *
   * Triggers the following webhook events:
   * - TRANSLATION_CREATED (async): A translation was created.
   * - TRANSLATION_UPDATED (async): A translation was updated.
   */
  productVariantBulkTranslate?: Maybe<IProductVariantBulkTranslate>;
  /**
   * Update multiple product variants.
   *
   * Added in Saleor 3.11.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  productVariantBulkUpdate?: Maybe<IProductVariantBulkUpdate>;
  /**
   * Manage product variant prices in channels.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  productVariantChannelListingUpdate?: Maybe<IProductVariantChannelListingUpdate>;
  /**
   * Creates a new variant for a product.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  productVariantCreate?: Maybe<IProductVariantCreate>;
  /**
   * Deletes a product variant.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  productVariantDelete?: Maybe<IProductVariantDelete>;
  /**
   * Deactivates product variant preorder. It changes all preorder allocation into regular allocation.
   *
   * Added in Saleor 3.1.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  productVariantPreorderDeactivate?: Maybe<IProductVariantPreorderDeactivate>;
  /**
   * Reorder the variants of a product. Mutation updates updated_at on product and triggers PRODUCT_UPDATED webhook.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  productVariantReorder?: Maybe<IProductVariantReorder>;
  /**
   * Reorder product variant attribute values.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  productVariantReorderAttributeValues?: Maybe<IProductVariantReorderAttributeValues>;
  /**
   * Set default variant for a product. Mutation triggers PRODUCT_UPDATED webhook.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  productVariantSetDefault?: Maybe<IProductVariantSetDefault>;
  /**
   * Creates stocks for product variant.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  productVariantStocksCreate?: Maybe<IProductVariantStocksCreate>;
  /**
   * Delete stocks from product variant.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  productVariantStocksDelete?: Maybe<IProductVariantStocksDelete>;
  /**
   * Update stocks for product variant.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  productVariantStocksUpdate?: Maybe<IProductVariantStocksUpdate>;
  /**
   * Creates/updates translations for a product variant.
   *
   * Requires one of the following permissions: MANAGE_TRANSLATIONS.
   */
  productVariantTranslate?: Maybe<IProductVariantTranslate>;
  /**
   * Updates an existing variant for product.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  productVariantUpdate?: Maybe<IProductVariantUpdate>;
  /**
   * Request email change of the logged in user.
   *
   * Requires one of the following permissions: AUTHENTICATED_USER.
   *
   * Triggers the following webhook events:
   * - NOTIFY_USER (async): A notification for account email change.
   * - ACCOUNT_CHANGE_EMAIL_REQUESTED (async): An account email change was requested.
   */
  requestEmailChange?: Maybe<IRequestEmailChange>;
  /**
   * Sends an email with the account password modification link.
   *
   * Triggers the following webhook events:
   * - NOTIFY_USER (async): A notification for password reset.
   * - ACCOUNT_SET_PASSWORD_REQUESTED (async): Setting a new password for the account is requested.
   * - STAFF_SET_PASSWORD_REQUESTED (async): Setting a new password for the staff account is requested.
   */
  requestPasswordReset?: Maybe<IRequestPasswordReset>;
  /**
   * Deletes sales.
   *
   * Requires one of the following permissions: MANAGE_DISCOUNTS.
   *
   * Triggers the following webhook events:
   * - SALE_DELETED (async): A sale was deleted.
   */
  saleBulkDelete?: Maybe<ISaleBulkDelete>;
  /**
   * Adds products, categories, collections to a voucher.
   *
   * Requires one of the following permissions: MANAGE_DISCOUNTS.
   *
   * Triggers the following webhook events:
   * - SALE_UPDATED (async): A sale was updated.
   */
  saleCataloguesAdd?: Maybe<ISaleAddCatalogues>;
  /**
   * Removes products, categories, collections from a sale.
   *
   * Requires one of the following permissions: MANAGE_DISCOUNTS.
   *
   * Triggers the following webhook events:
   * - SALE_UPDATED (async): A sale was updated.
   */
  saleCataloguesRemove?: Maybe<ISaleRemoveCatalogues>;
  /**
   * Manage sale's availability in channels.
   *
   * Requires one of the following permissions: MANAGE_DISCOUNTS.
   */
  saleChannelListingUpdate?: Maybe<ISaleChannelListingUpdate>;
  /**
   * Creates a new sale.
   *
   * Requires one of the following permissions: MANAGE_DISCOUNTS.
   *
   * Triggers the following webhook events:
   * - SALE_CREATED (async): A sale was created.
   */
  saleCreate?: Maybe<ISaleCreate>;
  /**
   * Deletes a sale.
   *
   * Requires one of the following permissions: MANAGE_DISCOUNTS.
   *
   * Triggers the following webhook events:
   * - SALE_DELETED (async): A sale was deleted.
   */
  saleDelete?: Maybe<ISaleDelete>;
  /**
   * Creates/updates translations for a sale.
   *
   * Requires one of the following permissions: MANAGE_TRANSLATIONS.
   */
  saleTranslate?: Maybe<ISaleTranslate>;
  /**
   * Updates a sale.
   *
   * Requires one of the following permissions: MANAGE_DISCOUNTS.
   *
   * Triggers the following webhook events:
   * - SALE_UPDATED (async): A sale was updated.
   * - SALE_TOGGLE (async): Optionally triggered when a sale is started or stopped.
   */
  saleUpdate?: Maybe<ISaleUpdate>;
  /**
   * Sends a notification confirmation.
   *
   * Added in Saleor 3.15.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   *
   * Requires one of the following permissions: AUTHENTICATED_USER.
   *
   * Triggers the following webhook events:
   * - NOTIFY_USER (async): A notification for account confirmation.
   * - ACCOUNT_CONFIRMATION_REQUESTED (async): An account confirmation was requested. This event is always sent regardless of settings.
   */
  sendConfirmationEmail?: Maybe<ISendConfirmationEmail>;
  /** Sets the user's password from the token sent by email using the RequestPasswordReset mutation. */
  setPassword?: Maybe<ISetPassword>;
  /**
   * Manage shipping method's availability in channels.
   *
   * Requires one of the following permissions: MANAGE_SHIPPING.
   */
  shippingMethodChannelListingUpdate?: Maybe<IShippingMethodChannelListingUpdate>;
  /**
   * Deletes shipping prices.
   *
   * Requires one of the following permissions: MANAGE_SHIPPING.
   */
  shippingPriceBulkDelete?: Maybe<IShippingPriceBulkDelete>;
  /**
   * Creates a new shipping price.
   *
   * Requires one of the following permissions: MANAGE_SHIPPING.
   */
  shippingPriceCreate?: Maybe<IShippingPriceCreate>;
  /**
   * Deletes a shipping price.
   *
   * Requires one of the following permissions: MANAGE_SHIPPING.
   */
  shippingPriceDelete?: Maybe<IShippingPriceDelete>;
  /**
   * Exclude products from shipping price.
   *
   * Requires one of the following permissions: MANAGE_SHIPPING.
   */
  shippingPriceExcludeProducts?: Maybe<IShippingPriceExcludeProducts>;
  /**
   * Remove product from excluded list for shipping price.
   *
   * Requires one of the following permissions: MANAGE_SHIPPING.
   */
  shippingPriceRemoveProductFromExclude?: Maybe<IShippingPriceRemoveProductFromExclude>;
  /**
   * Creates/updates translations for a shipping method.
   *
   * Requires one of the following permissions: MANAGE_TRANSLATIONS.
   */
  shippingPriceTranslate?: Maybe<IShippingPriceTranslate>;
  /**
   * Updates a new shipping price.
   *
   * Requires one of the following permissions: MANAGE_SHIPPING.
   */
  shippingPriceUpdate?: Maybe<IShippingPriceUpdate>;
  /**
   * Deletes shipping zones.
   *
   * Requires one of the following permissions: MANAGE_SHIPPING.
   */
  shippingZoneBulkDelete?: Maybe<IShippingZoneBulkDelete>;
  /**
   * Creates a new shipping zone.
   *
   * Requires one of the following permissions: MANAGE_SHIPPING.
   */
  shippingZoneCreate?: Maybe<IShippingZoneCreate>;
  /**
   * Deletes a shipping zone.
   *
   * Requires one of the following permissions: MANAGE_SHIPPING.
   */
  shippingZoneDelete?: Maybe<IShippingZoneDelete>;
  /**
   * Updates a new shipping zone.
   *
   * Requires one of the following permissions: MANAGE_SHIPPING.
   */
  shippingZoneUpdate?: Maybe<IShippingZoneUpdate>;
  /**
   * Update the shop's address. If the `null` value is passed, the currently selected address will be deleted.
   *
   * Requires one of the following permissions: MANAGE_SETTINGS.
   */
  shopAddressUpdate?: Maybe<IShopAddressUpdate>;
  /**
   * Updates site domain of the shop.
   *
   * Requires one of the following permissions: MANAGE_SETTINGS.
   */
  shopDomainUpdate?: Maybe<IShopDomainUpdate>;
  /**
   * Fetch tax rates.
   *
   * Requires one of the following permissions: MANAGE_SETTINGS.
   * @deprecated
   *
   * DEPRECATED: this mutation will be removed in Saleor 4.0.
   */
  shopFetchTaxRates?: Maybe<IShopFetchTaxRates>;
  /**
   * Creates/updates translations for shop settings.
   *
   * Requires one of the following permissions: MANAGE_TRANSLATIONS.
   */
  shopSettingsTranslate?: Maybe<IShopSettingsTranslate>;
  /**
   * Updates shop settings.
   *
   * Requires one of the following permissions: MANAGE_SETTINGS.
   *
   * Triggers the following webhook events:
   * - SHOP_METADATA_UPDATED (async): Optionally triggered when public or private metadata is updated.
   */
  shopSettingsUpdate?: Maybe<IShopSettingsUpdate>;
  /**
   * Deletes staff users. Apps are not allowed to perform this mutation.
   *
   * Requires one of the following permissions: MANAGE_STAFF.
   *
   * Triggers the following webhook events:
   * - STAFF_DELETED (async): A staff account was deleted.
   */
  staffBulkDelete?: Maybe<IStaffBulkDelete>;
  /**
   * Creates a new staff user. Apps are not allowed to perform this mutation.
   *
   * Requires one of the following permissions: MANAGE_STAFF.
   *
   * Triggers the following webhook events:
   * - STAFF_CREATED (async): A new staff account was created.
   * - NOTIFY_USER (async): A notification for setting the password.
   * - STAFF_SET_PASSWORD_REQUESTED (async): Setting a new password for the staff account is requested.
   */
  staffCreate?: Maybe<IStaffCreate>;
  /**
   * Deletes a staff user. Apps are not allowed to perform this mutation.
   *
   * Requires one of the following permissions: MANAGE_STAFF.
   *
   * Triggers the following webhook events:
   * - STAFF_DELETED (async): A staff account was deleted.
   */
  staffDelete?: Maybe<IStaffDelete>;
  /**
   * Creates a new staff notification recipient.
   *
   * Requires one of the following permissions: MANAGE_SETTINGS.
   */
  staffNotificationRecipientCreate?: Maybe<IStaffNotificationRecipientCreate>;
  /**
   * Delete staff notification recipient.
   *
   * Requires one of the following permissions: MANAGE_SETTINGS.
   */
  staffNotificationRecipientDelete?: Maybe<IStaffNotificationRecipientDelete>;
  /**
   * Updates a staff notification recipient.
   *
   * Requires one of the following permissions: MANAGE_SETTINGS.
   */
  staffNotificationRecipientUpdate?: Maybe<IStaffNotificationRecipientUpdate>;
  /**
   * Updates an existing staff user. Apps are not allowed to perform this mutation.
   *
   * Requires one of the following permissions: MANAGE_STAFF.
   *
   * Triggers the following webhook events:
   * - STAFF_UPDATED (async): A staff account was updated.
   */
  staffUpdate?: Maybe<IStaffUpdate>;
  /**
   * Updates stocks for a given variant and warehouse.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  stockBulkUpdate?: Maybe<IStockBulkUpdate>;
  /**
   * Create a tax class.
   *
   * Added in Saleor 3.9.
   *
   * Requires one of the following permissions: MANAGE_TAXES.
   */
  taxClassCreate?: Maybe<ITaxClassCreate>;
  /**
   * Delete a tax class. After deleting the tax class any products, product types or shipping methods using it are updated to use the default tax class.
   *
   * Added in Saleor 3.9.
   *
   * Requires one of the following permissions: MANAGE_TAXES.
   */
  taxClassDelete?: Maybe<ITaxClassDelete>;
  /**
   * Update a tax class.
   *
   * Added in Saleor 3.9.
   *
   * Requires one of the following permissions: MANAGE_TAXES.
   */
  taxClassUpdate?: Maybe<ITaxClassUpdate>;
  /**
   * Update tax configuration for a channel.
   *
   * Added in Saleor 3.9.
   *
   * Requires one of the following permissions: MANAGE_TAXES.
   */
  taxConfigurationUpdate?: Maybe<ITaxConfigurationUpdate>;
  /**
   * Remove all tax class rates for a specific country.
   *
   * Added in Saleor 3.9.
   *
   * Requires one of the following permissions: MANAGE_TAXES.
   */
  taxCountryConfigurationDelete?: Maybe<ITaxCountryConfigurationDelete>;
  /**
   * Update tax class rates for a specific country.
   *
   * Added in Saleor 3.9.
   *
   * Requires one of the following permissions: MANAGE_TAXES.
   */
  taxCountryConfigurationUpdate?: Maybe<ITaxCountryConfigurationUpdate>;
  /**
   * Exempt checkout or order from charging the taxes. When tax exemption is enabled, taxes won't be charged for the checkout or order. Taxes may still be calculated in cases when product prices are entered with the tax included and the net price needs to be known.
   *
   * Added in Saleor 3.8.
   *
   * Requires one of the following permissions: MANAGE_TAXES.
   */
  taxExemptionManage?: Maybe<ITaxExemptionManage>;
  /** Create JWT token. */
  tokenCreate?: Maybe<ICreateToken>;
  /** Refresh JWT token. Mutation tries to take refreshToken from the input. If it fails it will try to take `refreshToken` from the http-only cookie `refreshToken`. `csrfToken` is required when `refreshToken` is provided as a cookie. */
  tokenRefresh?: Maybe<IRefreshToken>;
  /** Verify JWT token. */
  tokenVerify?: Maybe<IVerifyToken>;
  /**
   * Deactivate all JWT tokens of the currently authenticated user.
   *
   * Requires one of the following permissions: AUTHENTICATED_USER.
   */
  tokensDeactivateAll?: Maybe<IDeactivateAllUserTokens>;
  /**
   * Create transaction for checkout or order.
   *
   * Added in Saleor 3.4.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   *
   * Requires one of the following permissions: HANDLE_PAYMENTS.
   */
  transactionCreate?: Maybe<ITransactionCreate>;
  /**
   * Report the event for the transaction.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   *
   * Requires the following permissions: OWNER and HANDLE_PAYMENTS for apps, HANDLE_PAYMENTS for staff users. Staff user cannot update a transaction that is owned by the app.
   */
  transactionEventReport?: Maybe<ITransactionEventReport>;
  /**
   * Initializes a transaction session. It triggers the webhook `TRANSACTION_INITIALIZE_SESSION`, to the requested `paymentGateways`.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  transactionInitialize?: Maybe<ITransactionInitialize>;
  /**
   * Processes a transaction session. It triggers the webhook `TRANSACTION_PROCESS_SESSION`, to the assigned `paymentGateways`.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  transactionProcess?: Maybe<ITransactionProcess>;
  /**
   * Request an action for payment transaction.
   *
   * Added in Saleor 3.4.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   *
   * Requires one of the following permissions: HANDLE_PAYMENTS.
   */
  transactionRequestAction?: Maybe<ITransactionRequestAction>;
  /**
   * Request a refund for payment transaction based on granted refund.
   *
   * Added in Saleor 3.15.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   *
   * Requires one of the following permissions: HANDLE_PAYMENTS.
   */
  transactionRequestRefundForGrantedRefund?: Maybe<ITransactionRequestRefundForGrantedRefund>;
  /**
   * Update transaction.
   *
   * Added in Saleor 3.4.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   *
   * Requires the following permissions: OWNER and HANDLE_PAYMENTS for apps, HANDLE_PAYMENTS for staff users. Staff user cannot update a transaction that is owned by the app.
   */
  transactionUpdate?: Maybe<ITransactionUpdate>;
  /**
   * Remove shipping zone from given warehouse.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  unassignWarehouseShippingZone?: Maybe<IWarehouseShippingZoneUnassign>;
  /** Updates metadata of an object. To use it, you need to have access to the modified object. */
  updateMetadata?: Maybe<IUpdateMetadata>;
  /** Updates private metadata of an object. To use it, you need to be an authenticated staff user or an app and have access to the modified object. */
  updatePrivateMetadata?: Maybe<IUpdatePrivateMetadata>;
  /**
   * Updates given warehouse.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  updateWarehouse?: Maybe<IWarehouseUpdate>;
  /**
   * Deletes a user avatar. Only for staff members.
   *
   * Requires one of the following permissions: AUTHENTICATED_STAFF_USER.
   */
  userAvatarDelete?: Maybe<IUserAvatarDelete>;
  /**
   * Create a user avatar. Only for staff members. This mutation must be sent as a `multipart` request. More detailed specs of the upload format can be found here: https://github.com/jaydenseric/graphql-multipart-request-spec
   *
   * Requires one of the following permissions: AUTHENTICATED_STAFF_USER.
   */
  userAvatarUpdate?: Maybe<IUserAvatarUpdate>;
  /**
   * Activate or deactivate users.
   *
   * Requires one of the following permissions: MANAGE_USERS.
   */
  userBulkSetActive?: Maybe<IUserBulkSetActive>;
  /**
   * Assign an media to a product variant.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  variantMediaAssign?: Maybe<IVariantMediaAssign>;
  /**
   * Unassign an media from a product variant.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  variantMediaUnassign?: Maybe<IVariantMediaUnassign>;
  /**
   * Deletes vouchers.
   *
   * Requires one of the following permissions: MANAGE_DISCOUNTS.
   *
   * Triggers the following webhook events:
   * - VOUCHER_DELETED (async): A voucher was deleted.
   */
  voucherBulkDelete?: Maybe<IVoucherBulkDelete>;
  /**
   * Adds products, categories, collections to a voucher.
   *
   * Requires one of the following permissions: MANAGE_DISCOUNTS.
   *
   * Triggers the following webhook events:
   * - VOUCHER_UPDATED (async): A voucher was updated.
   */
  voucherCataloguesAdd?: Maybe<IVoucherAddCatalogues>;
  /**
   * Removes products, categories, collections from a voucher.
   *
   * Requires one of the following permissions: MANAGE_DISCOUNTS.
   *
   * Triggers the following webhook events:
   * - VOUCHER_UPDATED (async): A voucher was updated.
   */
  voucherCataloguesRemove?: Maybe<IVoucherRemoveCatalogues>;
  /**
   * Manage voucher's availability in channels.
   *
   * Requires one of the following permissions: MANAGE_DISCOUNTS.
   *
   * Triggers the following webhook events:
   * - VOUCHER_UPDATED (async): A voucher was updated.
   */
  voucherChannelListingUpdate?: Maybe<IVoucherChannelListingUpdate>;
  /**
   * Creates a new voucher.
   *
   * Requires one of the following permissions: MANAGE_DISCOUNTS.
   *
   * Triggers the following webhook events:
   * - VOUCHER_CREATED (async): A voucher was created.
   */
  voucherCreate?: Maybe<IVoucherCreate>;
  /**
   * Deletes a voucher.
   *
   * Requires one of the following permissions: MANAGE_DISCOUNTS.
   *
   * Triggers the following webhook events:
   * - VOUCHER_DELETED (async): A voucher was deleted.
   */
  voucherDelete?: Maybe<IVoucherDelete>;
  /**
   * Creates/updates translations for a voucher.
   *
   * Requires one of the following permissions: MANAGE_TRANSLATIONS.
   */
  voucherTranslate?: Maybe<IVoucherTranslate>;
  /**
   * Updates a voucher.
   *
   * Requires one of the following permissions: MANAGE_DISCOUNTS.
   *
   * Triggers the following webhook events:
   * - VOUCHER_UPDATED (async): A voucher was updated.
   */
  voucherUpdate?: Maybe<IVoucherUpdate>;
  /**
   * Creates a new webhook subscription.
   *
   * Requires one of the following permissions: MANAGE_APPS, AUTHENTICATED_APP.
   */
  webhookCreate?: Maybe<IWebhookCreate>;
  /**
   * Delete a webhook. Before the deletion, the webhook is deactivated to pause any deliveries that are already scheduled. The deletion might fail if delivery is in progress. In such a case, the webhook is not deleted but remains deactivated.
   *
   * Requires one of the following permissions: MANAGE_APPS, AUTHENTICATED_APP.
   */
  webhookDelete?: Maybe<IWebhookDelete>;
  /**
   * Performs a dry run of a webhook event. Supports a single event (the first, if multiple provided in the `query`). Requires permission relevant to processed event.
   *
   * Added in Saleor 3.11.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   *
   * Requires one of the following permissions: AUTHENTICATED_STAFF_USER.
   */
  webhookDryRun?: Maybe<IWebhookDryRun>;
  /**
   * Trigger a webhook event. Supports a single event (the first, if multiple provided in the `webhook.subscription_query`). Requires permission relevant to processed event. Successfully delivered webhook returns `delivery` with status='PENDING' and empty payload.
   *
   * Added in Saleor 3.11.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   *
   * Requires one of the following permissions: AUTHENTICATED_STAFF_USER.
   */
  webhookTrigger?: Maybe<IWebhookTrigger>;
  /**
   * Updates a webhook subscription.
   *
   * Requires one of the following permissions: MANAGE_APPS, AUTHENTICATED_APP.
   */
  webhookUpdate?: Maybe<IWebhookUpdate>;
};

export type IMutationAccountAddressCreateArgs = {
  input: IAddressInput;
  type?: InputMaybe<IAddressTypeEnum>;
};

export type IMutationAccountAddressDeleteArgs = {
  id: Scalars["ID"];
};

export type IMutationAccountAddressUpdateArgs = {
  id: Scalars["ID"];
  input: IAddressInput;
};

export type IMutationAccountDeleteArgs = {
  token: Scalars["String"];
};

export type IMutationAccountRegisterArgs = {
  input: IAccountRegisterInput;
};

export type IMutationAccountRequestDeletionArgs = {
  channel?: InputMaybe<Scalars["String"]>;
  redirectUrl: Scalars["String"];
};

export type IMutationAccountSetDefaultAddressArgs = {
  id: Scalars["ID"];
  type: IAddressTypeEnum;
};

export type IMutationAccountUpdateArgs = {
  input: IAccountInput;
};

export type IMutationAddressCreateArgs = {
  input: IAddressInput;
  userId: Scalars["ID"];
};

export type IMutationAddressDeleteArgs = {
  id: Scalars["ID"];
};

export type IMutationAddressSetDefaultArgs = {
  addressId: Scalars["ID"];
  type: IAddressTypeEnum;
  userId: Scalars["ID"];
};

export type IMutationAddressUpdateArgs = {
  id: Scalars["ID"];
  input: IAddressInput;
};

export type IMutationAppActivateArgs = {
  id: Scalars["ID"];
};

export type IMutationAppCreateArgs = {
  input: IAppInput;
};

export type IMutationAppDeactivateArgs = {
  id: Scalars["ID"];
};

export type IMutationAppDeleteArgs = {
  id: Scalars["ID"];
};

export type IMutationAppDeleteFailedInstallationArgs = {
  id: Scalars["ID"];
};

export type IMutationAppFetchManifestArgs = {
  manifestUrl: Scalars["String"];
};

export type IMutationAppInstallArgs = {
  input: IAppInstallInput;
};

export type IMutationAppRetryInstallArgs = {
  activateAfterInstallation?: InputMaybe<Scalars["Boolean"]>;
  id: Scalars["ID"];
};

export type IMutationAppTokenCreateArgs = {
  input: IAppTokenInput;
};

export type IMutationAppTokenDeleteArgs = {
  id: Scalars["ID"];
};

export type IMutationAppTokenVerifyArgs = {
  token: Scalars["String"];
};

export type IMutationAppUpdateArgs = {
  id: Scalars["ID"];
  input: IAppInput;
};

export type IMutationAssignNavigationArgs = {
  menu?: InputMaybe<Scalars["ID"]>;
  navigationType: INavigationType;
};

export type IMutationAssignWarehouseShippingZoneArgs = {
  id: Scalars["ID"];
  shippingZoneIds: Array<Scalars["ID"]>;
};

export type IMutationAttributeBulkCreateArgs = {
  attributes: Array<IAttributeCreateInput>;
  errorPolicy?: InputMaybe<IErrorPolicyEnum>;
};

export type IMutationAttributeBulkDeleteArgs = {
  ids: Array<Scalars["ID"]>;
};

export type IMutationAttributeBulkTranslateArgs = {
  errorPolicy?: InputMaybe<IErrorPolicyEnum>;
  translations: Array<IAttributeBulkTranslateInput>;
};

export type IMutationAttributeBulkUpdateArgs = {
  attributes: Array<IAttributeBulkUpdateInput>;
  errorPolicy?: InputMaybe<IErrorPolicyEnum>;
};

export type IMutationAttributeCreateArgs = {
  input: IAttributeCreateInput;
};

export type IMutationAttributeDeleteArgs = {
  externalReference?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
};

export type IMutationAttributeReorderValuesArgs = {
  attributeId: Scalars["ID"];
  moves: Array<IReorderInput>;
};

export type IMutationAttributeTranslateArgs = {
  id: Scalars["ID"];
  input: INameTranslationInput;
  languageCode: ILanguageCodeEnum;
};

export type IMutationAttributeUpdateArgs = {
  externalReference?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  input: IAttributeUpdateInput;
};

export type IMutationAttributeValueBulkDeleteArgs = {
  ids: Array<Scalars["ID"]>;
};

export type IMutationAttributeValueBulkTranslateArgs = {
  errorPolicy?: InputMaybe<IErrorPolicyEnum>;
  translations: Array<IAttributeValueBulkTranslateInput>;
};

export type IMutationAttributeValueCreateArgs = {
  attribute: Scalars["ID"];
  input: IAttributeValueCreateInput;
};

export type IMutationAttributeValueDeleteArgs = {
  externalReference?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
};

export type IMutationAttributeValueTranslateArgs = {
  id: Scalars["ID"];
  input: IAttributeValueTranslationInput;
  languageCode: ILanguageCodeEnum;
};

export type IMutationAttributeValueUpdateArgs = {
  externalReference?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  input: IAttributeValueUpdateInput;
};

export type IMutationCategoryBulkDeleteArgs = {
  ids: Array<Scalars["ID"]>;
};

export type IMutationCategoryCreateArgs = {
  input: ICategoryInput;
  parent?: InputMaybe<Scalars["ID"]>;
};

export type IMutationCategoryDeleteArgs = {
  id: Scalars["ID"];
};

export type IMutationCategoryTranslateArgs = {
  id: Scalars["ID"];
  input: ITranslationInput;
  languageCode: ILanguageCodeEnum;
};

export type IMutationCategoryUpdateArgs = {
  id: Scalars["ID"];
  input: ICategoryInput;
};

export type IMutationChannelActivateArgs = {
  id: Scalars["ID"];
};

export type IMutationChannelCreateArgs = {
  input: IChannelCreateInput;
};

export type IMutationChannelDeactivateArgs = {
  id: Scalars["ID"];
};

export type IMutationChannelDeleteArgs = {
  id: Scalars["ID"];
  input?: InputMaybe<IChannelDeleteInput>;
};

export type IMutationChannelReorderWarehousesArgs = {
  channelId: Scalars["ID"];
  moves: Array<IReorderInput>;
};

export type IMutationChannelUpdateArgs = {
  id: Scalars["ID"];
  input: IChannelUpdateInput;
};

export type IMutationCheckoutAddPromoCodeArgs = {
  checkoutId?: InputMaybe<Scalars["ID"]>;
  id?: InputMaybe<Scalars["ID"]>;
  promoCode: Scalars["String"];
  token?: InputMaybe<Scalars["UUID"]>;
};

export type IMutationCheckoutBillingAddressUpdateArgs = {
  billingAddress: IAddressInput;
  checkoutId?: InputMaybe<Scalars["ID"]>;
  id?: InputMaybe<Scalars["ID"]>;
  token?: InputMaybe<Scalars["UUID"]>;
  validationRules?: InputMaybe<ICheckoutAddressValidationRules>;
};

export type IMutationCheckoutCompleteArgs = {
  checkoutId?: InputMaybe<Scalars["ID"]>;
  id?: InputMaybe<Scalars["ID"]>;
  metadata?: InputMaybe<Array<IMetadataInput>>;
  paymentData?: InputMaybe<Scalars["JSONString"]>;
  redirectUrl?: InputMaybe<Scalars["String"]>;
  storeSource?: InputMaybe<Scalars["Boolean"]>;
  token?: InputMaybe<Scalars["UUID"]>;
};

export type IMutationCheckoutCreateArgs = {
  input: ICheckoutCreateInput;
};

export type IMutationCheckoutCreateFromOrderArgs = {
  id: Scalars["ID"];
};

export type IMutationCheckoutCustomerAttachArgs = {
  checkoutId?: InputMaybe<Scalars["ID"]>;
  customerId?: InputMaybe<Scalars["ID"]>;
  id?: InputMaybe<Scalars["ID"]>;
  token?: InputMaybe<Scalars["UUID"]>;
};

export type IMutationCheckoutCustomerDetachArgs = {
  checkoutId?: InputMaybe<Scalars["ID"]>;
  id?: InputMaybe<Scalars["ID"]>;
  token?: InputMaybe<Scalars["UUID"]>;
};

export type IMutationCheckoutDeliveryMethodUpdateArgs = {
  deliveryMethodId?: InputMaybe<Scalars["ID"]>;
  id?: InputMaybe<Scalars["ID"]>;
  token?: InputMaybe<Scalars["UUID"]>;
};

export type IMutationCheckoutEmailUpdateArgs = {
  checkoutId?: InputMaybe<Scalars["ID"]>;
  email: Scalars["String"];
  id?: InputMaybe<Scalars["ID"]>;
  token?: InputMaybe<Scalars["UUID"]>;
};

export type IMutationCheckoutLanguageCodeUpdateArgs = {
  checkoutId?: InputMaybe<Scalars["ID"]>;
  id?: InputMaybe<Scalars["ID"]>;
  languageCode: ILanguageCodeEnum;
  token?: InputMaybe<Scalars["UUID"]>;
};

export type IMutationCheckoutLineDeleteArgs = {
  checkoutId?: InputMaybe<Scalars["ID"]>;
  id?: InputMaybe<Scalars["ID"]>;
  lineId?: InputMaybe<Scalars["ID"]>;
  token?: InputMaybe<Scalars["UUID"]>;
};

export type IMutationCheckoutLinesAddArgs = {
  checkoutId?: InputMaybe<Scalars["ID"]>;
  id?: InputMaybe<Scalars["ID"]>;
  lines: Array<ICheckoutLineInput>;
  token?: InputMaybe<Scalars["UUID"]>;
};

export type IMutationCheckoutLinesDeleteArgs = {
  id?: InputMaybe<Scalars["ID"]>;
  linesIds: Array<Scalars["ID"]>;
  token?: InputMaybe<Scalars["UUID"]>;
};

export type IMutationCheckoutLinesUpdateArgs = {
  checkoutId?: InputMaybe<Scalars["ID"]>;
  id?: InputMaybe<Scalars["ID"]>;
  lines: Array<ICheckoutLineUpdateInput>;
  token?: InputMaybe<Scalars["UUID"]>;
};

export type IMutationCheckoutPaymentCreateArgs = {
  checkoutId?: InputMaybe<Scalars["ID"]>;
  id?: InputMaybe<Scalars["ID"]>;
  input: IPaymentInput;
  token?: InputMaybe<Scalars["UUID"]>;
};

export type IMutationCheckoutRemovePromoCodeArgs = {
  checkoutId?: InputMaybe<Scalars["ID"]>;
  id?: InputMaybe<Scalars["ID"]>;
  promoCode?: InputMaybe<Scalars["String"]>;
  promoCodeId?: InputMaybe<Scalars["ID"]>;
  token?: InputMaybe<Scalars["UUID"]>;
};

export type IMutationCheckoutShippingAddressUpdateArgs = {
  checkoutId?: InputMaybe<Scalars["ID"]>;
  id?: InputMaybe<Scalars["ID"]>;
  shippingAddress: IAddressInput;
  token?: InputMaybe<Scalars["UUID"]>;
  validationRules?: InputMaybe<ICheckoutAddressValidationRules>;
};

export type IMutationCheckoutShippingMethodUpdateArgs = {
  checkoutId?: InputMaybe<Scalars["ID"]>;
  id?: InputMaybe<Scalars["ID"]>;
  shippingMethodId?: InputMaybe<Scalars["ID"]>;
  token?: InputMaybe<Scalars["UUID"]>;
};

export type IMutationCollectionAddProductsArgs = {
  collectionId: Scalars["ID"];
  products: Array<Scalars["ID"]>;
};

export type IMutationCollectionBulkDeleteArgs = {
  ids: Array<Scalars["ID"]>;
};

export type IMutationCollectionChannelListingUpdateArgs = {
  id: Scalars["ID"];
  input: ICollectionChannelListingUpdateInput;
};

export type IMutationCollectionCreateArgs = {
  input: ICollectionCreateInput;
};

export type IMutationCollectionDeleteArgs = {
  id: Scalars["ID"];
};

export type IMutationCollectionRemoveProductsArgs = {
  collectionId: Scalars["ID"];
  products: Array<Scalars["ID"]>;
};

export type IMutationCollectionReorderProductsArgs = {
  collectionId: Scalars["ID"];
  moves: Array<IMoveProductInput>;
};

export type IMutationCollectionTranslateArgs = {
  id: Scalars["ID"];
  input: ITranslationInput;
  languageCode: ILanguageCodeEnum;
};

export type IMutationCollectionUpdateArgs = {
  id: Scalars["ID"];
  input: ICollectionInput;
};

export type IMutationConfirmAccountArgs = {
  email: Scalars["String"];
  token: Scalars["String"];
};

export type IMutationConfirmEmailChangeArgs = {
  channel?: InputMaybe<Scalars["String"]>;
  token: Scalars["String"];
};

export type IMutationCreateWarehouseArgs = {
  input: IWarehouseCreateInput;
};

export type IMutationCustomerBulkDeleteArgs = {
  ids: Array<Scalars["ID"]>;
};

export type IMutationCustomerBulkUpdateArgs = {
  customers: Array<ICustomerBulkUpdateInput>;
  errorPolicy?: InputMaybe<IErrorPolicyEnum>;
};

export type IMutationCustomerCreateArgs = {
  input: IUserCreateInput;
};

export type IMutationCustomerDeleteArgs = {
  externalReference?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
};

export type IMutationCustomerUpdateArgs = {
  externalReference?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  input: ICustomerInput;
};

export type IMutationDeleteMetadataArgs = {
  id: Scalars["ID"];
  keys: Array<Scalars["String"]>;
};

export type IMutationDeletePrivateMetadataArgs = {
  id: Scalars["ID"];
  keys: Array<Scalars["String"]>;
};

export type IMutationDeleteWarehouseArgs = {
  id: Scalars["ID"];
};

export type IMutationDigitalContentCreateArgs = {
  input: IDigitalContentUploadInput;
  variantId: Scalars["ID"];
};

export type IMutationDigitalContentDeleteArgs = {
  variantId: Scalars["ID"];
};

export type IMutationDigitalContentUpdateArgs = {
  input: IDigitalContentInput;
  variantId: Scalars["ID"];
};

export type IMutationDigitalContentUrlCreateArgs = {
  input: IDigitalContentUrlCreateInput;
};

export type IMutationDraftOrderBulkDeleteArgs = {
  ids: Array<Scalars["ID"]>;
};

export type IMutationDraftOrderCompleteArgs = {
  id: Scalars["ID"];
};

export type IMutationDraftOrderCreateArgs = {
  input: IDraftOrderCreateInput;
};

export type IMutationDraftOrderDeleteArgs = {
  externalReference?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
};

export type IMutationDraftOrderLinesBulkDeleteArgs = {
  ids: Array<Scalars["ID"]>;
};

export type IMutationDraftOrderUpdateArgs = {
  externalReference?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  input: IDraftOrderInput;
};

export type IMutationEventDeliveryRetryArgs = {
  id: Scalars["ID"];
};

export type IMutationExportGiftCardsArgs = {
  input: IExportGiftCardsInput;
};

export type IMutationExportProductsArgs = {
  input: IExportProductsInput;
};

export type IMutationExternalAuthenticationUrlArgs = {
  input: Scalars["JSONString"];
  pluginId: Scalars["String"];
};

export type IMutationExternalLogoutArgs = {
  input: Scalars["JSONString"];
  pluginId: Scalars["String"];
};

export type IMutationExternalNotificationTriggerArgs = {
  channel: Scalars["String"];
  input: IExternalNotificationTriggerInput;
  pluginId?: InputMaybe<Scalars["String"]>;
};

export type IMutationExternalObtainAccessTokensArgs = {
  input: Scalars["JSONString"];
  pluginId: Scalars["String"];
};

export type IMutationExternalRefreshArgs = {
  input: Scalars["JSONString"];
  pluginId: Scalars["String"];
};

export type IMutationExternalVerifyArgs = {
  input: Scalars["JSONString"];
  pluginId: Scalars["String"];
};

export type IMutationFileUploadArgs = {
  file: Scalars["Upload"];
};

export type IMutationGiftCardActivateArgs = {
  id: Scalars["ID"];
};

export type IMutationGiftCardAddNoteArgs = {
  id: Scalars["ID"];
  input: IGiftCardAddNoteInput;
};

export type IMutationGiftCardBulkActivateArgs = {
  ids: Array<Scalars["ID"]>;
};

export type IMutationGiftCardBulkCreateArgs = {
  input: IGiftCardBulkCreateInput;
};

export type IMutationGiftCardBulkDeactivateArgs = {
  ids: Array<Scalars["ID"]>;
};

export type IMutationGiftCardBulkDeleteArgs = {
  ids: Array<Scalars["ID"]>;
};

export type IMutationGiftCardCreateArgs = {
  input: IGiftCardCreateInput;
};

export type IMutationGiftCardDeactivateArgs = {
  id: Scalars["ID"];
};

export type IMutationGiftCardDeleteArgs = {
  id: Scalars["ID"];
};

export type IMutationGiftCardResendArgs = {
  input: IGiftCardResendInput;
};

export type IMutationGiftCardSettingsUpdateArgs = {
  input: IGiftCardSettingsUpdateInput;
};

export type IMutationGiftCardUpdateArgs = {
  id: Scalars["ID"];
  input: IGiftCardUpdateInput;
};

export type IMutationInvoiceCreateArgs = {
  input: IInvoiceCreateInput;
  orderId: Scalars["ID"];
};

export type IMutationInvoiceDeleteArgs = {
  id: Scalars["ID"];
};

export type IMutationInvoiceRequestArgs = {
  number?: InputMaybe<Scalars["String"]>;
  orderId: Scalars["ID"];
};

export type IMutationInvoiceRequestDeleteArgs = {
  id: Scalars["ID"];
};

export type IMutationInvoiceSendNotificationArgs = {
  id: Scalars["ID"];
};

export type IMutationInvoiceUpdateArgs = {
  id: Scalars["ID"];
  input: IUpdateInvoiceInput;
};

export type IMutationMenuBulkDeleteArgs = {
  ids: Array<Scalars["ID"]>;
};

export type IMutationMenuCreateArgs = {
  input: IMenuCreateInput;
};

export type IMutationMenuDeleteArgs = {
  id: Scalars["ID"];
};

export type IMutationMenuItemBulkDeleteArgs = {
  ids: Array<Scalars["ID"]>;
};

export type IMutationMenuItemCreateArgs = {
  input: IMenuItemCreateInput;
};

export type IMutationMenuItemDeleteArgs = {
  id: Scalars["ID"];
};

export type IMutationMenuItemMoveArgs = {
  menu: Scalars["ID"];
  moves: Array<IMenuItemMoveInput>;
};

export type IMutationMenuItemTranslateArgs = {
  id: Scalars["ID"];
  input: INameTranslationInput;
  languageCode: ILanguageCodeEnum;
};

export type IMutationMenuItemUpdateArgs = {
  id: Scalars["ID"];
  input: IMenuItemInput;
};

export type IMutationMenuUpdateArgs = {
  id: Scalars["ID"];
  input: IMenuInput;
};

export type IMutationOrderAddNoteArgs = {
  input: IOrderAddNoteInput;
  order: Scalars["ID"];
};

export type IMutationOrderBulkCancelArgs = {
  ids: Array<Scalars["ID"]>;
};

export type IMutationOrderBulkCreateArgs = {
  errorPolicy?: InputMaybe<IErrorPolicyEnum>;
  orders: Array<IOrderBulkCreateInput>;
  stockUpdatePolicy?: InputMaybe<IStockUpdatePolicyEnum>;
};

export type IMutationOrderCancelArgs = {
  id: Scalars["ID"];
};

export type IMutationOrderCaptureArgs = {
  amount: Scalars["PositiveDecimal"];
  id: Scalars["ID"];
};

export type IMutationOrderConfirmArgs = {
  id: Scalars["ID"];
};

export type IMutationOrderCreateFromCheckoutArgs = {
  id: Scalars["ID"];
  metadata?: InputMaybe<Array<IMetadataInput>>;
  privateMetadata?: InputMaybe<Array<IMetadataInput>>;
  removeCheckout?: InputMaybe<Scalars["Boolean"]>;
};

export type IMutationOrderDiscountAddArgs = {
  input: IOrderDiscountCommonInput;
  orderId: Scalars["ID"];
};

export type IMutationOrderDiscountDeleteArgs = {
  discountId: Scalars["ID"];
};

export type IMutationOrderDiscountUpdateArgs = {
  discountId: Scalars["ID"];
  input: IOrderDiscountCommonInput;
};

export type IMutationOrderFulfillArgs = {
  input: IOrderFulfillInput;
  order?: InputMaybe<Scalars["ID"]>;
};

export type IMutationOrderFulfillmentApproveArgs = {
  allowStockToBeExceeded?: InputMaybe<Scalars["Boolean"]>;
  id: Scalars["ID"];
  notifyCustomer: Scalars["Boolean"];
};

export type IMutationOrderFulfillmentCancelArgs = {
  id: Scalars["ID"];
  input?: InputMaybe<IFulfillmentCancelInput>;
};

export type IMutationOrderFulfillmentRefundProductsArgs = {
  input: IOrderRefundProductsInput;
  order: Scalars["ID"];
};

export type IMutationOrderFulfillmentReturnProductsArgs = {
  input: IOrderReturnProductsInput;
  order: Scalars["ID"];
};

export type IMutationOrderFulfillmentUpdateTrackingArgs = {
  id: Scalars["ID"];
  input: IFulfillmentUpdateTrackingInput;
};

export type IMutationOrderGrantRefundCreateArgs = {
  id: Scalars["ID"];
  input: IOrderGrantRefundCreateInput;
};

export type IMutationOrderGrantRefundUpdateArgs = {
  id: Scalars["ID"];
  input: IOrderGrantRefundUpdateInput;
};

export type IMutationOrderLineDeleteArgs = {
  id: Scalars["ID"];
};

export type IMutationOrderLineDiscountRemoveArgs = {
  orderLineId: Scalars["ID"];
};

export type IMutationOrderLineDiscountUpdateArgs = {
  input: IOrderDiscountCommonInput;
  orderLineId: Scalars["ID"];
};

export type IMutationOrderLineUpdateArgs = {
  id: Scalars["ID"];
  input: IOrderLineInput;
};

export type IMutationOrderLinesCreateArgs = {
  id: Scalars["ID"];
  input: Array<IOrderLineCreateInput>;
};

export type IMutationOrderMarkAsPaidArgs = {
  id: Scalars["ID"];
  transactionReference?: InputMaybe<Scalars["String"]>;
};

export type IMutationOrderNoteAddArgs = {
  input: IOrderNoteInput;
  order: Scalars["ID"];
};

export type IMutationOrderNoteUpdateArgs = {
  input: IOrderNoteInput;
  note: Scalars["ID"];
};

export type IMutationOrderRefundArgs = {
  amount: Scalars["PositiveDecimal"];
  id: Scalars["ID"];
};

export type IMutationOrderSettingsUpdateArgs = {
  input: IOrderSettingsUpdateInput;
};

export type IMutationOrderUpdateArgs = {
  externalReference?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  input: IOrderUpdateInput;
};

export type IMutationOrderUpdateShippingArgs = {
  input: IOrderUpdateShippingInput;
  order: Scalars["ID"];
};

export type IMutationOrderVoidArgs = {
  id: Scalars["ID"];
};

export type IMutationPageAttributeAssignArgs = {
  attributeIds: Array<Scalars["ID"]>;
  pageTypeId: Scalars["ID"];
};

export type IMutationPageAttributeUnassignArgs = {
  attributeIds: Array<Scalars["ID"]>;
  pageTypeId: Scalars["ID"];
};

export type IMutationPageBulkDeleteArgs = {
  ids: Array<Scalars["ID"]>;
};

export type IMutationPageBulkPublishArgs = {
  ids: Array<Scalars["ID"]>;
  isPublished: Scalars["Boolean"];
};

export type IMutationPageCreateArgs = {
  input: IPageCreateInput;
};

export type IMutationPageDeleteArgs = {
  id: Scalars["ID"];
};

export type IMutationPageReorderAttributeValuesArgs = {
  attributeId: Scalars["ID"];
  moves: Array<IReorderInput>;
  pageId: Scalars["ID"];
};

export type IMutationPageTranslateArgs = {
  id: Scalars["ID"];
  input: IPageTranslationInput;
  languageCode: ILanguageCodeEnum;
};

export type IMutationPageTypeBulkDeleteArgs = {
  ids: Array<Scalars["ID"]>;
};

export type IMutationPageTypeCreateArgs = {
  input: IPageTypeCreateInput;
};

export type IMutationPageTypeDeleteArgs = {
  id: Scalars["ID"];
};

export type IMutationPageTypeReorderAttributesArgs = {
  moves: Array<IReorderInput>;
  pageTypeId: Scalars["ID"];
};

export type IMutationPageTypeUpdateArgs = {
  id?: InputMaybe<Scalars["ID"]>;
  input: IPageTypeUpdateInput;
};

export type IMutationPageUpdateArgs = {
  id: Scalars["ID"];
  input: IPageInput;
};

export type IMutationPasswordChangeArgs = {
  newPassword: Scalars["String"];
  oldPassword?: InputMaybe<Scalars["String"]>;
};

export type IMutationPaymentCaptureArgs = {
  amount?: InputMaybe<Scalars["PositiveDecimal"]>;
  paymentId: Scalars["ID"];
};

export type IMutationPaymentCheckBalanceArgs = {
  input: IPaymentCheckBalanceInput;
};

export type IMutationPaymentGatewayInitializeArgs = {
  amount?: InputMaybe<Scalars["PositiveDecimal"]>;
  id: Scalars["ID"];
  paymentGateways?: InputMaybe<Array<IPaymentGatewayToInitialize>>;
};

export type IMutationPaymentInitializeArgs = {
  channel?: InputMaybe<Scalars["String"]>;
  gateway: Scalars["String"];
  paymentData?: InputMaybe<Scalars["JSONString"]>;
};

export type IMutationPaymentRefundArgs = {
  amount?: InputMaybe<Scalars["PositiveDecimal"]>;
  paymentId: Scalars["ID"];
};

export type IMutationPaymentVoidArgs = {
  paymentId: Scalars["ID"];
};

export type IMutationPermissionGroupCreateArgs = {
  input: IPermissionGroupCreateInput;
};

export type IMutationPermissionGroupDeleteArgs = {
  id: Scalars["ID"];
};

export type IMutationPermissionGroupUpdateArgs = {
  id: Scalars["ID"];
  input: IPermissionGroupUpdateInput;
};

export type IMutationPluginUpdateArgs = {
  channelId?: InputMaybe<Scalars["ID"]>;
  id: Scalars["ID"];
  input: IPluginUpdateInput;
};

export type IMutationProductAttributeAssignArgs = {
  operations: Array<IProductAttributeAssignInput>;
  productTypeId: Scalars["ID"];
};

export type IMutationProductAttributeAssignmentUpdateArgs = {
  operations: Array<IProductAttributeAssignmentUpdateInput>;
  productTypeId: Scalars["ID"];
};

export type IMutationProductAttributeUnassignArgs = {
  attributeIds: Array<Scalars["ID"]>;
  productTypeId: Scalars["ID"];
};

export type IMutationProductBulkCreateArgs = {
  errorPolicy?: InputMaybe<IErrorPolicyEnum>;
  products: Array<IProductBulkCreateInput>;
};

export type IMutationProductBulkDeleteArgs = {
  ids: Array<Scalars["ID"]>;
};

export type IMutationProductBulkTranslateArgs = {
  errorPolicy?: InputMaybe<IErrorPolicyEnum>;
  translations: Array<IProductBulkTranslateInput>;
};

export type IMutationProductChannelListingUpdateArgs = {
  id: Scalars["ID"];
  input: IProductChannelListingUpdateInput;
};

export type IMutationProductCreateArgs = {
  input: IProductCreateInput;
};

export type IMutationProductDeleteArgs = {
  externalReference?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
};

export type IMutationProductMediaBulkDeleteArgs = {
  ids: Array<Scalars["ID"]>;
};

export type IMutationProductMediaCreateArgs = {
  input: IProductMediaCreateInput;
};

export type IMutationProductMediaDeleteArgs = {
  id: Scalars["ID"];
};

export type IMutationProductMediaReorderArgs = {
  mediaIds: Array<Scalars["ID"]>;
  productId: Scalars["ID"];
};

export type IMutationProductMediaUpdateArgs = {
  id: Scalars["ID"];
  input: IProductMediaUpdateInput;
};

export type IMutationProductReorderAttributeValuesArgs = {
  attributeId: Scalars["ID"];
  moves: Array<IReorderInput>;
  productId: Scalars["ID"];
};

export type IMutationProductTranslateArgs = {
  id: Scalars["ID"];
  input: ITranslationInput;
  languageCode: ILanguageCodeEnum;
};

export type IMutationProductTypeBulkDeleteArgs = {
  ids: Array<Scalars["ID"]>;
};

export type IMutationProductTypeCreateArgs = {
  input: IProductTypeInput;
};

export type IMutationProductTypeDeleteArgs = {
  id: Scalars["ID"];
};

export type IMutationProductTypeReorderAttributesArgs = {
  moves: Array<IReorderInput>;
  productTypeId: Scalars["ID"];
  type: IProductAttributeType;
};

export type IMutationProductTypeUpdateArgs = {
  id: Scalars["ID"];
  input: IProductTypeInput;
};

export type IMutationProductUpdateArgs = {
  externalReference?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  input: IProductInput;
};

export type IMutationProductVariantBulkCreateArgs = {
  errorPolicy?: InputMaybe<IErrorPolicyEnum>;
  product: Scalars["ID"];
  variants: Array<IProductVariantBulkCreateInput>;
};

export type IMutationProductVariantBulkDeleteArgs = {
  ids?: InputMaybe<Array<Scalars["ID"]>>;
  skus?: InputMaybe<Array<Scalars["String"]>>;
};

export type IMutationProductVariantBulkTranslateArgs = {
  errorPolicy?: InputMaybe<IErrorPolicyEnum>;
  translations: Array<IProductVariantBulkTranslateInput>;
};

export type IMutationProductVariantBulkUpdateArgs = {
  errorPolicy?: InputMaybe<IErrorPolicyEnum>;
  product: Scalars["ID"];
  variants: Array<IProductVariantBulkUpdateInput>;
};

export type IMutationProductVariantChannelListingUpdateArgs = {
  id?: InputMaybe<Scalars["ID"]>;
  input: Array<IProductVariantChannelListingAddInput>;
  sku?: InputMaybe<Scalars["String"]>;
};

export type IMutationProductVariantCreateArgs = {
  input: IProductVariantCreateInput;
};

export type IMutationProductVariantDeleteArgs = {
  externalReference?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  sku?: InputMaybe<Scalars["String"]>;
};

export type IMutationProductVariantPreorderDeactivateArgs = {
  id: Scalars["ID"];
};

export type IMutationProductVariantReorderArgs = {
  moves: Array<IReorderInput>;
  productId: Scalars["ID"];
};

export type IMutationProductVariantReorderAttributeValuesArgs = {
  attributeId: Scalars["ID"];
  moves: Array<IReorderInput>;
  variantId: Scalars["ID"];
};

export type IMutationProductVariantSetDefaultArgs = {
  productId: Scalars["ID"];
  variantId: Scalars["ID"];
};

export type IMutationProductVariantStocksCreateArgs = {
  stocks: Array<IStockInput>;
  variantId: Scalars["ID"];
};

export type IMutationProductVariantStocksDeleteArgs = {
  sku?: InputMaybe<Scalars["String"]>;
  variantId?: InputMaybe<Scalars["ID"]>;
  warehouseIds?: InputMaybe<Array<Scalars["ID"]>>;
};

export type IMutationProductVariantStocksUpdateArgs = {
  sku?: InputMaybe<Scalars["String"]>;
  stocks: Array<IStockInput>;
  variantId?: InputMaybe<Scalars["ID"]>;
};

export type IMutationProductVariantTranslateArgs = {
  id: Scalars["ID"];
  input: INameTranslationInput;
  languageCode: ILanguageCodeEnum;
};

export type IMutationProductVariantUpdateArgs = {
  externalReference?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  input: IProductVariantInput;
  sku?: InputMaybe<Scalars["String"]>;
};

export type IMutationRequestEmailChangeArgs = {
  channel?: InputMaybe<Scalars["String"]>;
  newEmail: Scalars["String"];
  password: Scalars["String"];
  redirectUrl: Scalars["String"];
};

export type IMutationRequestPasswordResetArgs = {
  channel?: InputMaybe<Scalars["String"]>;
  email: Scalars["String"];
  redirectUrl: Scalars["String"];
};

export type IMutationSaleBulkDeleteArgs = {
  ids: Array<Scalars["ID"]>;
};

export type IMutationSaleCataloguesAddArgs = {
  id: Scalars["ID"];
  input: ICatalogueInput;
};

export type IMutationSaleCataloguesRemoveArgs = {
  id: Scalars["ID"];
  input: ICatalogueInput;
};

export type IMutationSaleChannelListingUpdateArgs = {
  id: Scalars["ID"];
  input: ISaleChannelListingInput;
};

export type IMutationSaleCreateArgs = {
  input: ISaleInput;
};

export type IMutationSaleDeleteArgs = {
  id: Scalars["ID"];
};

export type IMutationSaleTranslateArgs = {
  id: Scalars["ID"];
  input: INameTranslationInput;
  languageCode: ILanguageCodeEnum;
};

export type IMutationSaleUpdateArgs = {
  id: Scalars["ID"];
  input: ISaleInput;
};

export type IMutationSendConfirmationEmailArgs = {
  channel: Scalars["String"];
  redirectUrl: Scalars["String"];
};

export type IMutationSetPasswordArgs = {
  email: Scalars["String"];
  password: Scalars["String"];
  token: Scalars["String"];
};

export type IMutationShippingMethodChannelListingUpdateArgs = {
  id: Scalars["ID"];
  input: IShippingMethodChannelListingInput;
};

export type IMutationShippingPriceBulkDeleteArgs = {
  ids: Array<Scalars["ID"]>;
};

export type IMutationShippingPriceCreateArgs = {
  input: IShippingPriceInput;
};

export type IMutationShippingPriceDeleteArgs = {
  id: Scalars["ID"];
};

export type IMutationShippingPriceExcludeProductsArgs = {
  id: Scalars["ID"];
  input: IShippingPriceExcludeProductsInput;
};

export type IMutationShippingPriceRemoveProductFromExcludeArgs = {
  id: Scalars["ID"];
  products: Array<Scalars["ID"]>;
};

export type IMutationShippingPriceTranslateArgs = {
  id: Scalars["ID"];
  input: IShippingPriceTranslationInput;
  languageCode: ILanguageCodeEnum;
};

export type IMutationShippingPriceUpdateArgs = {
  id: Scalars["ID"];
  input: IShippingPriceInput;
};

export type IMutationShippingZoneBulkDeleteArgs = {
  ids: Array<Scalars["ID"]>;
};

export type IMutationShippingZoneCreateArgs = {
  input: IShippingZoneCreateInput;
};

export type IMutationShippingZoneDeleteArgs = {
  id: Scalars["ID"];
};

export type IMutationShippingZoneUpdateArgs = {
  id: Scalars["ID"];
  input: IShippingZoneUpdateInput;
};

export type IMutationShopAddressUpdateArgs = {
  input?: InputMaybe<IAddressInput>;
};

export type IMutationShopDomainUpdateArgs = {
  input?: InputMaybe<ISiteDomainInput>;
};

export type IMutationShopSettingsTranslateArgs = {
  input: IShopSettingsTranslationInput;
  languageCode: ILanguageCodeEnum;
};

export type IMutationShopSettingsUpdateArgs = {
  input: IShopSettingsInput;
};

export type IMutationStaffBulkDeleteArgs = {
  ids: Array<Scalars["ID"]>;
};

export type IMutationStaffCreateArgs = {
  input: IStaffCreateInput;
};

export type IMutationStaffDeleteArgs = {
  id: Scalars["ID"];
};

export type IMutationStaffNotificationRecipientCreateArgs = {
  input: IStaffNotificationRecipientInput;
};

export type IMutationStaffNotificationRecipientDeleteArgs = {
  id: Scalars["ID"];
};

export type IMutationStaffNotificationRecipientUpdateArgs = {
  id: Scalars["ID"];
  input: IStaffNotificationRecipientInput;
};

export type IMutationStaffUpdateArgs = {
  id: Scalars["ID"];
  input: IStaffUpdateInput;
};

export type IMutationStockBulkUpdateArgs = {
  errorPolicy?: InputMaybe<IErrorPolicyEnum>;
  stocks: Array<IStockBulkUpdateInput>;
};

export type IMutationTaxClassCreateArgs = {
  input: ITaxClassCreateInput;
};

export type IMutationTaxClassDeleteArgs = {
  id: Scalars["ID"];
};

export type IMutationTaxClassUpdateArgs = {
  id: Scalars["ID"];
  input: ITaxClassUpdateInput;
};

export type IMutationTaxConfigurationUpdateArgs = {
  id: Scalars["ID"];
  input: ITaxConfigurationUpdateInput;
};

export type IMutationTaxCountryConfigurationDeleteArgs = {
  countryCode: ICountryCode;
};

export type IMutationTaxCountryConfigurationUpdateArgs = {
  countryCode: ICountryCode;
  updateTaxClassRates: Array<ITaxClassRateInput>;
};

export type IMutationTaxExemptionManageArgs = {
  id: Scalars["ID"];
  taxExemption: Scalars["Boolean"];
};

export type IMutationTokenCreateArgs = {
  audience?: InputMaybe<Scalars["String"]>;
  email: Scalars["String"];
  password: Scalars["String"];
};

export type IMutationTokenRefreshArgs = {
  csrfToken?: InputMaybe<Scalars["String"]>;
  refreshToken?: InputMaybe<Scalars["String"]>;
};

export type IMutationTokenVerifyArgs = {
  token: Scalars["String"];
};

export type IMutationTransactionCreateArgs = {
  id: Scalars["ID"];
  transaction: ITransactionCreateInput;
  transactionEvent?: InputMaybe<ITransactionEventInput>;
};

export type IMutationTransactionEventReportArgs = {
  amount: Scalars["PositiveDecimal"];
  availableActions?: InputMaybe<Array<ITransactionActionEnum>>;
  externalUrl?: InputMaybe<Scalars["String"]>;
  id: Scalars["ID"];
  message?: InputMaybe<Scalars["String"]>;
  pspReference: Scalars["String"];
  time?: InputMaybe<Scalars["DateTime"]>;
  type: ITransactionEventTypeEnum;
};

export type IMutationTransactionInitializeArgs = {
  action?: InputMaybe<ITransactionFlowStrategyEnum>;
  amount?: InputMaybe<Scalars["PositiveDecimal"]>;
  id: Scalars["ID"];
  paymentGateway: IPaymentGatewayToInitialize;
};

export type IMutationTransactionProcessArgs = {
  data?: InputMaybe<Scalars["JSON"]>;
  id: Scalars["ID"];
};

export type IMutationTransactionRequestActionArgs = {
  actionType: ITransactionActionEnum;
  amount?: InputMaybe<Scalars["PositiveDecimal"]>;
  id: Scalars["ID"];
};

export type IMutationTransactionRequestRefundForGrantedRefundArgs = {
  grantedRefundId: Scalars["ID"];
  id: Scalars["ID"];
};

export type IMutationTransactionUpdateArgs = {
  id: Scalars["ID"];
  transaction?: InputMaybe<ITransactionUpdateInput>;
  transactionEvent?: InputMaybe<ITransactionEventInput>;
};

export type IMutationUnassignWarehouseShippingZoneArgs = {
  id: Scalars["ID"];
  shippingZoneIds: Array<Scalars["ID"]>;
};

export type IMutationUpdateMetadataArgs = {
  id: Scalars["ID"];
  input: Array<IMetadataInput>;
};

export type IMutationUpdatePrivateMetadataArgs = {
  id: Scalars["ID"];
  input: Array<IMetadataInput>;
};

export type IMutationUpdateWarehouseArgs = {
  id: Scalars["ID"];
  input: IWarehouseUpdateInput;
};

export type IMutationUserAvatarUpdateArgs = {
  image: Scalars["Upload"];
};

export type IMutationUserBulkSetActiveArgs = {
  ids: Array<Scalars["ID"]>;
  isActive: Scalars["Boolean"];
};

export type IMutationVariantMediaAssignArgs = {
  mediaId: Scalars["ID"];
  variantId: Scalars["ID"];
};

export type IMutationVariantMediaUnassignArgs = {
  mediaId: Scalars["ID"];
  variantId: Scalars["ID"];
};

export type IMutationVoucherBulkDeleteArgs = {
  ids: Array<Scalars["ID"]>;
};

export type IMutationVoucherCataloguesAddArgs = {
  id: Scalars["ID"];
  input: ICatalogueInput;
};

export type IMutationVoucherCataloguesRemoveArgs = {
  id: Scalars["ID"];
  input: ICatalogueInput;
};

export type IMutationVoucherChannelListingUpdateArgs = {
  id: Scalars["ID"];
  input: IVoucherChannelListingInput;
};

export type IMutationVoucherCreateArgs = {
  input: IVoucherInput;
};

export type IMutationVoucherDeleteArgs = {
  id: Scalars["ID"];
};

export type IMutationVoucherTranslateArgs = {
  id: Scalars["ID"];
  input: INameTranslationInput;
  languageCode: ILanguageCodeEnum;
};

export type IMutationVoucherUpdateArgs = {
  id: Scalars["ID"];
  input: IVoucherInput;
};

export type IMutationWebhookCreateArgs = {
  input: IWebhookCreateInput;
};

export type IMutationWebhookDeleteArgs = {
  id: Scalars["ID"];
};

export type IMutationWebhookDryRunArgs = {
  objectId: Scalars["ID"];
  query: Scalars["String"];
};

export type IMutationWebhookTriggerArgs = {
  objectId: Scalars["ID"];
  webhookId: Scalars["ID"];
};

export type IMutationWebhookUpdateArgs = {
  id: Scalars["ID"];
  input: IWebhookUpdateInput;
};

export type INameTranslationInput = {
  name?: InputMaybe<Scalars["String"]>;
};

export type INavigationType =
  /** Main storefront navigation. */
  | "MAIN"
  /** Secondary storefront navigation. */
  | "SECONDARY";

/** An object with an ID */
export type INode = {
  /** The ID of the object. */
  id: Scalars["ID"];
};

export type IObjectWithMetadata = {
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<IMetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   */
  metafield?: Maybe<Scalars["String"]>;
  /** Public metadata. Use `keys` to control which fields you want to include. The default is to include everything. */
  metafields?: Maybe<Scalars["Metadata"]>;
  /** List of private metadata items. Requires staff permissions to access. */
  privateMetadata: Array<IMetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   */
  privateMetafield?: Maybe<Scalars["String"]>;
  /** Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything. */
  privateMetafields?: Maybe<Scalars["Metadata"]>;
};

export type IObjectWithMetadataMetafieldArgs = {
  key: Scalars["String"];
};

export type IObjectWithMetadataMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars["String"]>>;
};

export type IObjectWithMetadataPrivateMetafieldArgs = {
  key: Scalars["String"];
};

export type IObjectWithMetadataPrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars["String"]>>;
};

/** Represents an order in the shop. */
export type IOrder = INode &
  IObjectWithMetadata & {
    __typename?: "Order";
    /** List of actions that can be performed in the current state of an order. */
    actions: Array<IOrderAction>;
    /**
     * The authorize status of the order.
     *
     * Added in Saleor 3.4.
     */
    authorizeStatus: IOrderAuthorizeStatusEnum;
    /**
     * Collection points that can be used for this order.
     *
     * Added in Saleor 3.1.
     */
    availableCollectionPoints: Array<IWarehouse>;
    /**
     * Shipping methods that can be used with this order.
     * @deprecated Use `shippingMethods`, this field will be removed in 4.0
     */
    availableShippingMethods?: Maybe<Array<IShippingMethod>>;
    /** Billing address. The full data can be access for orders created in Saleor 3.2 and later, for other orders requires one of the following permissions: MANAGE_ORDERS, OWNER. */
    billingAddress?: Maybe<IAddress>;
    /** Informs whether a draft order can be finalized(turned into a regular order). */
    canFinalize: Scalars["Boolean"];
    channel: IChannel;
    /**
     * The charge status of the order.
     *
     * Added in Saleor 3.4.
     */
    chargeStatus: IOrderChargeStatusEnum;
    /**
     * ID of the checkout that the order was created from.
     *
     * Added in Saleor 3.11.
     */
    checkoutId?: Maybe<Scalars["ID"]>;
    collectionPointName?: Maybe<Scalars["String"]>;
    created: Scalars["DateTime"];
    customerNote: Scalars["String"];
    /**
     * The delivery method selected for this order.
     *
     * Added in Saleor 3.1.
     */
    deliveryMethod?: Maybe<IDeliveryMethod>;
    /**
     * Returns applied discount.
     * @deprecated This field will be removed in Saleor 4.0. Use the `discounts` field instead.
     */
    discount?: Maybe<IMoney>;
    /**
     * Discount name.
     * @deprecated This field will be removed in Saleor 4.0. Use the `discounts` field instead.
     */
    discountName?: Maybe<Scalars["String"]>;
    /** List of all discounts assigned to the order. */
    discounts: Array<IOrderDiscount>;
    /**
     * Determines whether checkout prices should include taxes when displayed in a storefront.
     *
     * Added in Saleor 3.9.
     */
    displayGrossPrices: Scalars["Boolean"];
    /** List of errors that occurred during order validation. */
    errors: Array<IOrderError>;
    /**
     * List of events associated with the order.
     *
     * Requires one of the following permissions: MANAGE_ORDERS.
     */
    events: Array<IOrderEvent>;
    /**
     * External ID of this order.
     *
     * Added in Saleor 3.10.
     */
    externalReference?: Maybe<Scalars["String"]>;
    /** List of shipments for the order. */
    fulfillments: Array<IFulfillment>;
    /** List of user gift cards. */
    giftCards: Array<IGiftCard>;
    /**
     * List of granted refunds.
     *
     * Added in Saleor 3.13.
     *
     * Note: this API is currently in Feature Preview and can be subject to changes at later point.
     *
     * Requires one of the following permissions: MANAGE_ORDERS.
     */
    grantedRefunds: Array<IOrderGrantedRefund>;
    id: Scalars["ID"];
    /** List of order invoices. Can be fetched for orders created in Saleor 3.2 and later, for other orders requires one of the following permissions: MANAGE_ORDERS, OWNER. */
    invoices: Array<IInvoice>;
    /** Informs if an order is fully paid. */
    isPaid: Scalars["Boolean"];
    /** Returns True, if order requires shipping. */
    isShippingRequired: Scalars["Boolean"];
    /** @deprecated This field will be removed in Saleor 4.0. Use the `languageCodeEnum` field to fetch the language code.  */
    languageCode: Scalars["String"];
    /** Order language code. */
    languageCodeEnum: ILanguageCodeEnum;
    /** List of order lines. */
    lines: Array<IOrderLine>;
    /** List of public metadata items. Can be accessed without permissions. */
    metadata: Array<IMetadataItem>;
    /**
     * A single key from public metadata.
     *
     * Tip: Use GraphQL aliases to fetch multiple keys.
     *
     * Added in Saleor 3.3.
     */
    metafield?: Maybe<Scalars["String"]>;
    /**
     * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
     *
     * Added in Saleor 3.3.
     */
    metafields?: Maybe<Scalars["Metadata"]>;
    /** User-friendly number of an order. */
    number: Scalars["String"];
    /** The order origin. */
    origin: IOrderOriginEnum;
    /** The ID of the order that was the base for this order. */
    original?: Maybe<Scalars["ID"]>;
    /** Internal payment status. */
    paymentStatus: IPaymentChargeStatusEnum;
    /** User-friendly payment status. */
    paymentStatusDisplay: Scalars["String"];
    /** List of payments for the order. */
    payments: Array<IPayment>;
    /** List of private metadata items. Requires staff permissions to access. */
    privateMetadata: Array<IMetadataItem>;
    /**
     * A single key from private metadata. Requires staff permissions to access.
     *
     * Tip: Use GraphQL aliases to fetch multiple keys.
     *
     * Added in Saleor 3.3.
     */
    privateMetafield?: Maybe<Scalars["String"]>;
    /**
     * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
     *
     * Added in Saleor 3.3.
     */
    privateMetafields?: Maybe<Scalars["Metadata"]>;
    redirectUrl?: Maybe<Scalars["String"]>;
    /** Shipping address. The full data can be access for orders created in Saleor 3.2 and later, for other orders requires one of the following permissions: MANAGE_ORDERS, OWNER. */
    shippingAddress?: Maybe<IAddress>;
    /**
     * Shipping method for this order.
     * @deprecated This field will be removed in Saleor 4.0. Use `deliveryMethod` instead.
     */
    shippingMethod?: Maybe<IShippingMethod>;
    shippingMethodName?: Maybe<Scalars["String"]>;
    /** Shipping methods related to this order. */
    shippingMethods: Array<IShippingMethod>;
    /** Total price of shipping. */
    shippingPrice: ITaxedMoney;
    /**
     * Denormalized tax class assigned to the shipping method.
     *
     * Added in Saleor 3.9.
     *
     * Requires one of the following permissions: AUTHENTICATED_STAFF_USER, AUTHENTICATED_APP.
     */
    shippingTaxClass?: Maybe<ITaxClass>;
    /**
     * Denormalized public metadata of the shipping method's tax class.
     *
     * Added in Saleor 3.9.
     */
    shippingTaxClassMetadata: Array<IMetadataItem>;
    /**
     * Denormalized name of the tax class assigned to the shipping method.
     *
     * Added in Saleor 3.9.
     */
    shippingTaxClassName?: Maybe<Scalars["String"]>;
    /**
     * Denormalized private metadata of the shipping method's tax class. Requires staff permissions to access.
     *
     * Added in Saleor 3.9.
     */
    shippingTaxClassPrivateMetadata: Array<IMetadataItem>;
    /** The shipping tax rate value. */
    shippingTaxRate: Scalars["Float"];
    status: IOrderStatus;
    /** User-friendly order status. */
    statusDisplay: Scalars["String"];
    /** The sum of line prices not including shipping. */
    subtotal: ITaxedMoney;
    /**
     * Returns True if order has to be exempt from taxes.
     *
     * Added in Saleor 3.8.
     */
    taxExemption: Scalars["Boolean"];
    /** @deprecated This field will be removed in Saleor 4.0. Use `id` instead. */
    token: Scalars["String"];
    /** Total amount of the order. */
    total: ITaxedMoney;
    /**
     * Total amount of ongoing authorize requests for the order's transactions.
     *
     * Added in Saleor 3.13.
     *
     * Note: this API is currently in Feature Preview and can be subject to changes at later point.
     *
     * Requires one of the following permissions: MANAGE_ORDERS.
     */
    totalAuthorizePending: IMoney;
    /** Amount authorized for the order. */
    totalAuthorized: IMoney;
    /** The difference between the paid and the order total amount. */
    totalBalance: IMoney;
    /**
     * Total amount of ongoing cancel requests for the order's transactions.
     *
     * Added in Saleor 3.13.
     *
     * Note: this API is currently in Feature Preview and can be subject to changes at later point.
     *
     * Requires one of the following permissions: MANAGE_ORDERS.
     */
    totalCancelPending: IMoney;
    /**
     * Amount canceled for the order.
     *
     * Added in Saleor 3.13.
     */
    totalCanceled: IMoney;
    /**
     * Amount captured for the order.
     * @deprecated This field will be removed in Saleor 4.0. Use `totalCharged` instead.
     */
    totalCaptured: IMoney;
    /**
     * Total amount of ongoing charge requests for the order's transactions.
     *
     * Added in Saleor 3.13.
     *
     * Note: this API is currently in Feature Preview and can be subject to changes at later point.
     *
     * Requires one of the following permissions: MANAGE_ORDERS.
     */
    totalChargePending: IMoney;
    /**
     * Amount charged for the order.
     *
     * Added in Saleor 3.13.
     */
    totalCharged: IMoney;
    /**
     * Total amount of granted refund.
     *
     * Added in Saleor 3.13.
     *
     * Note: this API is currently in Feature Preview and can be subject to changes at later point.
     *
     * Requires one of the following permissions: MANAGE_ORDERS.
     */
    totalGrantedRefund: IMoney;
    /**
     * Total amount of ongoing refund requests for the order's transactions.
     *
     * Added in Saleor 3.13.
     *
     * Note: this API is currently in Feature Preview and can be subject to changes at later point.
     *
     * Requires one of the following permissions: MANAGE_ORDERS.
     */
    totalRefundPending: IMoney;
    /**
     * Total refund amount for the order.
     *
     * Added in Saleor 3.13.
     *
     * Note: this API is currently in Feature Preview and can be subject to changes at later point.
     */
    totalRefunded: IMoney;
    /**
     * The difference amount between granted refund and the amounts that are pending and refunded.
     *
     * Added in Saleor 3.13.
     *
     * Note: this API is currently in Feature Preview and can be subject to changes at later point.
     *
     * Requires one of the following permissions: MANAGE_ORDERS.
     */
    totalRemainingGrant: IMoney;
    /** Google Analytics tracking client ID. This field will be removed in Saleor 4.0. */
    trackingClientId: Scalars["String"];
    /**
     * List of transactions for the order. Requires one of the following permissions: MANAGE_ORDERS, HANDLE_PAYMENTS.
     *
     * Added in Saleor 3.4.
     */
    transactions: Array<ITransactionItem>;
    /**
     * Translated discount name.
     * @deprecated This field will be removed in Saleor 4.0. Use the `discounts` field instead.
     */
    translatedDiscountName?: Maybe<Scalars["String"]>;
    /** Undiscounted total amount of the order. */
    undiscountedTotal: ITaxedMoney;
    updatedAt: Scalars["DateTime"];
    /** User who placed the order. This field is set only for orders placed by authenticated users. Can be fetched for orders created in Saleor 3.2 and later, for other orders requires one of the following permissions: MANAGE_USERS, MANAGE_ORDERS, OWNER. */
    user?: Maybe<IUser>;
    /** Email address of the customer. The full data can be access for orders created in Saleor 3.2 and later, for other orders requires one of the following permissions: MANAGE_ORDERS, OWNER. */
    userEmail?: Maybe<Scalars["String"]>;
    voucher?: Maybe<IVoucher>;
    weight: IWeight;
  };

/** Represents an order in the shop. */
export type IOrderMetafieldArgs = {
  key: Scalars["String"];
};

/** Represents an order in the shop. */
export type IOrderMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars["String"]>>;
};

/** Represents an order in the shop. */
export type IOrderPrivateMetafieldArgs = {
  key: Scalars["String"];
};

/** Represents an order in the shop. */
export type IOrderPrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars["String"]>>;
};

export type IOrderAction =
  /** Represents the capture action. */
  | "CAPTURE"
  /** Represents a mark-as-paid action. */
  | "MARK_AS_PAID"
  /** Represents a refund action. */
  | "REFUND"
  /** Represents a void action. */
  | "VOID";

/**
 * Adds note to the order.
 *
 * DEPRECATED: this mutation will be removed in Saleor 4.0.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type IOrderAddNote = {
  __typename?: "OrderAddNote";
  errors: Array<IOrderError>;
  /** Order note created. */
  event?: Maybe<IOrderEvent>;
  /** Order with the note added. */
  order?: Maybe<IOrder>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<IOrderError>;
};

export type IOrderAddNoteInput = {
  /**
   * Note message.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0.
   */
  message: Scalars["String"];
};

/**
 * Determine a current authorize status for order.
 *
 *     We treat the order as fully authorized when the sum of authorized and charged funds
 *     cover the `order.total`-`order.totalGrantedRefund`.
 *     We treat the order as partially authorized when the sum of authorized and charged
 *     funds covers only part of the `order.total`-`order.totalGrantedRefund`.
 *     We treat the order as not authorized when the sum of authorized and charged funds is
 *     0.
 *
 *     NONE - the funds are not authorized
 *     PARTIAL - the funds that are authorized and charged don't cover fully the
 *     `order.total`-`order.totalGrantedRefund`
 *     FULL - the funds that are authorized and charged fully cover the
 *     `order.total`-`order.totalGrantedRefund`
 *
 */
export type IOrderAuthorizeStatusEnum = "FULL" | "NONE" | "PARTIAL";

/**
 * Cancels orders.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type IOrderBulkCancel = {
  __typename?: "OrderBulkCancel";
  /** Returns how many objects were affected. */
  count: Scalars["Int"];
  errors: Array<IOrderError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<IOrderError>;
};

/**
 * Creates multiple orders.
 *
 * Added in Saleor 3.14.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 *
 * Requires one of the following permissions: MANAGE_ORDERS_IMPORT.
 */
export type IOrderBulkCreate = {
  __typename?: "OrderBulkCreate";
  /** Returns how many objects were created. */
  count: Scalars["Int"];
  errors: Array<IOrderBulkCreateError>;
  /** List of the created orders. */
  results: Array<IOrderBulkCreateResult>;
};

export type IOrderBulkCreateDeliveryMethodInput = {
  /** The ID of the shipping method. */
  shippingMethodId?: InputMaybe<Scalars["ID"]>;
  /** The name of the shipping method. */
  shippingMethodName?: InputMaybe<Scalars["String"]>;
  /** The price of the shipping. */
  shippingPrice?: InputMaybe<ITaxedMoneyInput>;
  /** The ID of the tax class. */
  shippingTaxClassId?: InputMaybe<Scalars["ID"]>;
  /** Metadata of the tax class. */
  shippingTaxClassMetadata?: InputMaybe<Array<IMetadataInput>>;
  /** The name of the tax class. */
  shippingTaxClassName?: InputMaybe<Scalars["String"]>;
  /** Private metadata of the tax class. */
  shippingTaxClassPrivateMetadata?: InputMaybe<Array<IMetadataInput>>;
  /** Tax rate of the shipping. */
  shippingTaxRate?: InputMaybe<Scalars["PositiveDecimal"]>;
  /** The ID of the warehouse. */
  warehouseId?: InputMaybe<Scalars["ID"]>;
  /** The name of the warehouse. */
  warehouseName?: InputMaybe<Scalars["String"]>;
};

export type IOrderBulkCreateError = {
  __typename?: "OrderBulkCreateError";
  /** The error code. */
  code?: Maybe<IOrderBulkCreateErrorCode>;
  /** The error message. */
  message?: Maybe<Scalars["String"]>;
  /** Path to field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  path?: Maybe<Scalars["String"]>;
};

/** An enumeration. */
export type IOrderBulkCreateErrorCode =
  | "BULK_LIMIT"
  | "FUTURE_DATE"
  | "GRAPHQL_ERROR"
  | "INCORRECT_CURRENCY"
  | "INSUFFICIENT_STOCK"
  | "INVALID"
  | "INVALID_QUANTITY"
  | "METADATA_KEY_REQUIRED"
  | "NEGATIVE_INDEX"
  | "NON_EXISTING_STOCK"
  | "NOTE_LENGTH"
  | "NOT_FOUND"
  | "NO_RELATED_ORDER_LINE"
  | "ORDER_LINE_FULFILLMENT_LINE_MISMATCH"
  | "PRICE_ERROR"
  | "REQUIRED"
  | "TOO_MANY_IDENTIFIERS"
  | "UNIQUE";

export type IOrderBulkCreateFulfillmentInput = {
  /** List of items informing how to fulfill the order. */
  lines?: InputMaybe<Array<IOrderBulkCreateFulfillmentLineInput>>;
  /** Fulfillment's tracking code. */
  trackingCode?: InputMaybe<Scalars["String"]>;
};

export type IOrderBulkCreateFulfillmentLineInput = {
  /** 0-based index of order line, which the fulfillment line refers to. */
  orderLineIndex: Scalars["Int"];
  /** The number of line items to be fulfilled from given warehouse. */
  quantity: Scalars["Int"];
  /** The external ID of the product variant. */
  variantExternalReference?: InputMaybe<Scalars["String"]>;
  /** The ID of the product variant. */
  variantId?: InputMaybe<Scalars["ID"]>;
  /** The SKU of the product variant. */
  variantSku?: InputMaybe<Scalars["String"]>;
  /** ID of the warehouse from which the item will be fulfilled. */
  warehouse: Scalars["ID"];
};

export type IOrderBulkCreateInput = {
  /** Billing address of the customer. */
  billingAddress: IAddressInput;
  /** Slug of the channel associated with the order. */
  channel: Scalars["String"];
  /** The date, when the order was inserted to Saleor database. */
  createdAt: Scalars["DateTime"];
  /** Currency code. */
  currency: Scalars["String"];
  /** Note about customer. */
  customerNote?: InputMaybe<Scalars["String"]>;
  /** The delivery method selected for this order. */
  deliveryMethod?: InputMaybe<IOrderBulkCreateDeliveryMethodInput>;
  /** List of discounts. */
  discounts?: InputMaybe<Array<IOrderDiscountCommonInput>>;
  /** Determines whether checkout prices should include taxes, when displayed in a storefront. */
  displayGrossPrices?: InputMaybe<Scalars["Boolean"]>;
  /** External ID of the order. */
  externalReference?: InputMaybe<Scalars["String"]>;
  /** Fulfillments of the order. */
  fulfillments?: InputMaybe<Array<IOrderBulkCreateFulfillmentInput>>;
  /** List of gift card codes associated with the order. */
  giftCards?: InputMaybe<Array<Scalars["String"]>>;
  /** Invoices related to the order. */
  invoices?: InputMaybe<Array<IOrderBulkCreateInvoiceInput>>;
  /** Order language code. */
  languageCode: ILanguageCodeEnum;
  /** List of order lines. */
  lines: Array<IOrderBulkCreateOrderLineInput>;
  /** Metadata of the order. */
  metadata?: InputMaybe<Array<IMetadataInput>>;
  /** Notes related to the order. */
  notes?: InputMaybe<Array<IOrderBulkCreateNoteInput>>;
  /** Private metadata of the order. */
  privateMetadata?: InputMaybe<Array<IMetadataInput>>;
  /** URL of a view, where users should be redirected to see the order details. */
  redirectUrl?: InputMaybe<Scalars["String"]>;
  /** Shipping address of the customer. */
  shippingAddress?: InputMaybe<IAddressInput>;
  /** Status of the order. */
  status?: InputMaybe<IOrderStatus>;
  /** Transactions related to the order. */
  transactions?: InputMaybe<Array<ITransactionCreateInput>>;
  /** Customer associated with the order. */
  user: IOrderBulkCreateUserInput;
  /** Code of a voucher associated with the order. */
  voucher?: InputMaybe<Scalars["String"]>;
  /** Weight of the order in kg. */
  weight?: InputMaybe<Scalars["WeightScalar"]>;
};

export type IOrderBulkCreateInvoiceInput = {
  /** The date, when the invoice was created. */
  createdAt: Scalars["DateTime"];
  /** Metadata of the invoice. */
  metadata?: InputMaybe<Array<IMetadataInput>>;
  /** Invoice number. */
  number?: InputMaybe<Scalars["String"]>;
  /** Private metadata of the invoice. */
  privateMetadata?: InputMaybe<Array<IMetadataInput>>;
  /** URL of the invoice to download. */
  url?: InputMaybe<Scalars["String"]>;
};

export type IOrderBulkCreateNoteInput = {
  /** The app ID associated with the message. */
  appId?: InputMaybe<Scalars["ID"]>;
  /** The date associated with the message. */
  date?: InputMaybe<Scalars["DateTime"]>;
  /** Note message. Max characters: 255. */
  message: Scalars["String"];
  /** The user email associated with the message. */
  userEmail?: InputMaybe<Scalars["ID"]>;
  /** The user external ID associated with the message. */
  userExternalReference?: InputMaybe<Scalars["ID"]>;
  /** The user ID associated with the message. */
  userId?: InputMaybe<Scalars["ID"]>;
};

export type IOrderBulkCreateOrderLineInput = {
  /** The date, when the order line was created. */
  createdAt: Scalars["DateTime"];
  /** Gift card flag. */
  isGiftCard: Scalars["Boolean"];
  /** Determines whether shipping of the order line items is required. */
  isShippingRequired: Scalars["Boolean"];
  /** Metadata of the order line. */
  metadata?: InputMaybe<Array<IMetadataInput>>;
  /** Private metadata of the order line. */
  privateMetadata?: InputMaybe<Array<IMetadataInput>>;
  /** The name of the product. */
  productName?: InputMaybe<Scalars["String"]>;
  /** Number of items in the order line */
  quantity: Scalars["Int"];
  /** The ID of the tax class. */
  taxClassId?: InputMaybe<Scalars["ID"]>;
  /** Metadata of the tax class. */
  taxClassMetadata?: InputMaybe<Array<IMetadataInput>>;
  /** The name of the tax class. */
  taxClassName?: InputMaybe<Scalars["String"]>;
  /** Private metadata of the tax class. */
  taxClassPrivateMetadata?: InputMaybe<Array<IMetadataInput>>;
  /** Tax rate of the order line. */
  taxRate?: InputMaybe<Scalars["PositiveDecimal"]>;
  /** Price of the order line. */
  totalPrice: ITaxedMoneyInput;
  /** Translation of the product name. */
  translatedProductName?: InputMaybe<Scalars["String"]>;
  /** Translation of the product variant name. */
  translatedVariantName?: InputMaybe<Scalars["String"]>;
  /** Price of the order line excluding applied discount. */
  undiscountedTotalPrice: ITaxedMoneyInput;
  /** The external ID of the product variant. */
  variantExternalReference?: InputMaybe<Scalars["String"]>;
  /** The ID of the product variant. */
  variantId?: InputMaybe<Scalars["ID"]>;
  /** The name of the product variant. */
  variantName?: InputMaybe<Scalars["String"]>;
  /** The SKU of the product variant. */
  variantSku?: InputMaybe<Scalars["String"]>;
  /** The ID of the warehouse, where the line will be allocated. */
  warehouse: Scalars["ID"];
};

export type IOrderBulkCreateResult = {
  __typename?: "OrderBulkCreateResult";
  /** List of errors occurred on create attempt. */
  errors?: Maybe<Array<IOrderBulkCreateError>>;
  /** Order data. */
  order?: Maybe<IOrder>;
};

export type IOrderBulkCreateUserInput = {
  /** Customer email associated with the order. */
  email?: InputMaybe<Scalars["String"]>;
  /** Customer external ID associated with the order. */
  externalReference?: InputMaybe<Scalars["String"]>;
  /** Customer ID associated with the order. */
  id?: InputMaybe<Scalars["ID"]>;
};

/**
 * Event sent when orders are imported.
 *
 * Added in Saleor 3.14.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type IOrderBulkCreated = IEvent & {
  __typename?: "OrderBulkCreated";
  /** Time of the event. */
  issuedAt?: Maybe<Scalars["DateTime"]>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IIssuingPrincipal>;
  /** The orders the event relates to. */
  orders?: Maybe<Array<IOrder>>;
  /** The application receiving the webhook. */
  recipient?: Maybe<IApp>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars["String"]>;
};

/**
 * Cancel an order.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type IOrderCancel = {
  __typename?: "OrderCancel";
  errors: Array<IOrderError>;
  /** Canceled order. */
  order?: Maybe<IOrder>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<IOrderError>;
};

/**
 * Event sent when order is canceled.
 *
 * Added in Saleor 3.2.
 */
export type IOrderCancelled = IEvent & {
  __typename?: "OrderCancelled";
  /** Time of the event. */
  issuedAt?: Maybe<Scalars["DateTime"]>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IIssuingPrincipal>;
  /** The order the event relates to. */
  order?: Maybe<IOrder>;
  /** The application receiving the webhook. */
  recipient?: Maybe<IApp>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars["String"]>;
};

/**
 * Capture an order.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type IOrderCapture = {
  __typename?: "OrderCapture";
  errors: Array<IOrderError>;
  /** Captured order. */
  order?: Maybe<IOrder>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<IOrderError>;
};

/**
 * Determine the current charge status for the order.
 *
 *     An order is considered overcharged when the sum of the
 *     transactionItem's charge amounts exceeds the value of
 *     `order.total` - `order.totalGrantedRefund`.
 *     If the sum of the transactionItem's charge amounts equals
 *     `order.total` - `order.totalGrantedRefund`, we consider the order to be fully
 *     charged.
 *     If the sum of the transactionItem's charge amounts covers a part of the
 *     `order.total` - `order.totalGrantedRefund`, we treat the order as partially charged.
 *
 *     NONE - the funds are not charged.
 *     PARTIAL - the funds that are charged don't cover the
 *     `order.total`-`order.totalGrantedRefund`
 *     FULL - the funds that are charged fully cover the
 *     `order.total`-`order.totalGrantedRefund`
 *     OVERCHARGED - the charged funds are bigger than the
 *     `order.total`-`order.totalGrantedRefund`
 *
 */
export type IOrderChargeStatusEnum =
  | "FULL"
  | "NONE"
  | "OVERCHARGED"
  | "PARTIAL";

/**
 * Confirms an unconfirmed order by changing status to unfulfilled.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type IOrderConfirm = {
  __typename?: "OrderConfirm";
  errors: Array<IOrderError>;
  order?: Maybe<IOrder>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<IOrderError>;
};

/**
 * Event sent when order is confirmed.
 *
 * Added in Saleor 3.2.
 */
export type IOrderConfirmed = IEvent & {
  __typename?: "OrderConfirmed";
  /** Time of the event. */
  issuedAt?: Maybe<Scalars["DateTime"]>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IIssuingPrincipal>;
  /** The order the event relates to. */
  order?: Maybe<IOrder>;
  /** The application receiving the webhook. */
  recipient?: Maybe<IApp>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars["String"]>;
};

export type IOrderCountableConnection = {
  __typename?: "OrderCountableConnection";
  edges: Array<IOrderCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: IPageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars["Int"]>;
};

export type IOrderCountableEdge = {
  __typename?: "OrderCountableEdge";
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node: IOrder;
};

/**
 * Create new order from existing checkout. Requires the following permissions: AUTHENTICATED_APP and HANDLE_CHECKOUTS.
 *
 * Added in Saleor 3.2.
 *
 * Triggers the following webhook events:
 * - SHIPPING_LIST_METHODS_FOR_CHECKOUT (sync): Optionally triggered when cached external shipping methods are invalid.
 * - CHECKOUT_FILTER_SHIPPING_METHODS (sync): Optionally triggered when cached filtered shipping methods are invalid.
 * - CHECKOUT_CALCULATE_TAXES (sync): Optionally triggered when checkout prices are expired.
 * - ORDER_CREATED (async): Triggered when order is created.
 * - NOTIFY_USER (async): A notification for order placement.
 * - NOTIFY_USER (async): A staff notification for order placement.
 * - ORDER_UPDATED (async): Triggered when order received the update after placement.
 * - ORDER_PAID (async): Triggered when newly created order is paid.
 * - ORDER_FULLY_PAID (async): Triggered when newly created order is fully paid.
 * - ORDER_CONFIRMED (async): Optionally triggered when newly created order are automatically marked as confirmed.
 */
export type IOrderCreateFromCheckout = {
  __typename?: "OrderCreateFromCheckout";
  errors: Array<IOrderCreateFromCheckoutError>;
  /** Placed order. */
  order?: Maybe<IOrder>;
};

export type IOrderCreateFromCheckoutError = {
  __typename?: "OrderCreateFromCheckoutError";
  /** The error code. */
  code: IOrderCreateFromCheckoutErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars["String"]>;
  /** List of line Ids which cause the error. */
  lines?: Maybe<Array<Scalars["ID"]>>;
  /** The error message. */
  message?: Maybe<Scalars["String"]>;
  /** List of variant IDs which causes the error. */
  variants?: Maybe<Array<Scalars["ID"]>>;
};

/** An enumeration. */
export type IOrderCreateFromCheckoutErrorCode =
  | "BILLING_ADDRESS_NOT_SET"
  | "CHANNEL_INACTIVE"
  | "CHECKOUT_NOT_FOUND"
  | "EMAIL_NOT_SET"
  | "GIFT_CARD_NOT_APPLICABLE"
  | "GRAPHQL_ERROR"
  | "INSUFFICIENT_STOCK"
  | "INVALID_SHIPPING_METHOD"
  | "NO_LINES"
  | "SHIPPING_ADDRESS_NOT_SET"
  | "SHIPPING_METHOD_NOT_SET"
  | "TAX_ERROR"
  | "UNAVAILABLE_VARIANT_IN_CHANNEL"
  | "VOUCHER_NOT_APPLICABLE";

/**
 * Event sent when new order is created.
 *
 * Added in Saleor 3.2.
 */
export type IOrderCreated = IEvent & {
  __typename?: "OrderCreated";
  /** Time of the event. */
  issuedAt?: Maybe<Scalars["DateTime"]>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IIssuingPrincipal>;
  /** The order the event relates to. */
  order?: Maybe<IOrder>;
  /** The application receiving the webhook. */
  recipient?: Maybe<IApp>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars["String"]>;
};

export type IOrderDirection =
  /** Specifies an ascending sort order. */
  | "ASC"
  /** Specifies a descending sort order. */
  | "DESC";

/** Contains all details related to the applied discount to the order. */
export type IOrderDiscount = INode & {
  __typename?: "OrderDiscount";
  /** Returns amount of discount. */
  amount: IMoney;
  /** The ID of discount applied. */
  id: Scalars["ID"];
  /** The name of applied discount. */
  name?: Maybe<Scalars["String"]>;
  /**
   * Explanation for the applied discount.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  reason?: Maybe<Scalars["String"]>;
  /** Translated name of the applied discount. */
  translatedName?: Maybe<Scalars["String"]>;
  /** The type of applied discount: Sale, Voucher or Manual. */
  type: IOrderDiscountType;
  /** Value of the discount. Can store fixed value or percent value */
  value: Scalars["PositiveDecimal"];
  /** Type of the discount: fixed or percent */
  valueType: IDiscountValueTypeEnum;
};

/**
 * Adds discount to the order.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type IOrderDiscountAdd = {
  __typename?: "OrderDiscountAdd";
  errors: Array<IOrderError>;
  /** Order which has been discounted. */
  order?: Maybe<IOrder>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<IOrderError>;
};

export type IOrderDiscountCommonInput = {
  /** Explanation for the applied discount. */
  reason?: InputMaybe<Scalars["String"]>;
  /** Value of the discount. Can store fixed value or percent value */
  value: Scalars["PositiveDecimal"];
  /** Type of the discount: fixed or percent */
  valueType: IDiscountValueTypeEnum;
};

/**
 * Remove discount from the order.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type IOrderDiscountDelete = {
  __typename?: "OrderDiscountDelete";
  errors: Array<IOrderError>;
  /** Order which has removed discount. */
  order?: Maybe<IOrder>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<IOrderError>;
};

/** An enumeration. */
export type IOrderDiscountType = "MANUAL" | "SALE" | "VOUCHER";

/**
 * Update discount for the order.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type IOrderDiscountUpdate = {
  __typename?: "OrderDiscountUpdate";
  errors: Array<IOrderError>;
  /** Order which has been discounted. */
  order?: Maybe<IOrder>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<IOrderError>;
};

export type IOrderDraftFilterInput = {
  channels?: InputMaybe<Array<Scalars["ID"]>>;
  created?: InputMaybe<IDateRangeInput>;
  customer?: InputMaybe<Scalars["String"]>;
  metadata?: InputMaybe<Array<IMetadataFilter>>;
  search?: InputMaybe<Scalars["String"]>;
};

export type IOrderError = {
  __typename?: "OrderError";
  /** A type of address that causes the error. */
  addressType?: Maybe<IAddressTypeEnum>;
  /** The error code. */
  code: IOrderErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars["String"]>;
  /** The error message. */
  message?: Maybe<Scalars["String"]>;
  /** List of order line IDs that cause the error. */
  orderLines?: Maybe<Array<Scalars["ID"]>>;
  /** List of product variants that are associated with the error */
  variants?: Maybe<Array<Scalars["ID"]>>;
  /** Warehouse ID which causes the error. */
  warehouse?: Maybe<Scalars["ID"]>;
};

/** An enumeration. */
export type IOrderErrorCode =
  | "BILLING_ADDRESS_NOT_SET"
  | "CANNOT_CANCEL_FULFILLMENT"
  | "CANNOT_CANCEL_ORDER"
  | "CANNOT_DELETE"
  | "CANNOT_DISCOUNT"
  | "CANNOT_FULFILL_UNPAID_ORDER"
  | "CANNOT_REFUND"
  | "CAPTURE_INACTIVE_PAYMENT"
  | "CHANNEL_INACTIVE"
  | "DUPLICATED_INPUT_ITEM"
  | "FULFILL_ORDER_LINE"
  | "GIFT_CARD_LINE"
  | "GRAPHQL_ERROR"
  | "INSUFFICIENT_STOCK"
  | "INVALID"
  | "INVALID_QUANTITY"
  | "NOT_AVAILABLE_IN_CHANNEL"
  | "NOT_EDITABLE"
  | "NOT_FOUND"
  | "ORDER_NO_SHIPPING_ADDRESS"
  | "PAYMENT_ERROR"
  | "PAYMENT_MISSING"
  | "PRODUCT_NOT_PUBLISHED"
  | "PRODUCT_UNAVAILABLE_FOR_PURCHASE"
  | "REQUIRED"
  | "SHIPPING_METHOD_NOT_APPLICABLE"
  | "SHIPPING_METHOD_REQUIRED"
  | "TAX_ERROR"
  | "TRANSACTION_ERROR"
  | "UNIQUE"
  | "VOID_INACTIVE_PAYMENT"
  | "ZERO_QUANTITY";

/** History log of the order. */
export type IOrderEvent = INode & {
  __typename?: "OrderEvent";
  /** Amount of money. */
  amount?: Maybe<Scalars["Float"]>;
  /** App that performed the action. Requires of of the following permissions: MANAGE_APPS, MANAGE_ORDERS, OWNER. */
  app?: Maybe<IApp>;
  /** Composed ID of the Fulfillment. */
  composedId?: Maybe<Scalars["String"]>;
  /** Date when event happened at in ISO 8601 format. */
  date?: Maybe<Scalars["DateTime"]>;
  /** The discount applied to the order. */
  discount?: Maybe<IOrderEventDiscountObject>;
  /** Email of the customer. */
  email?: Maybe<Scalars["String"]>;
  /** Type of an email sent to the customer. */
  emailType?: Maybe<IOrderEventsEmailsEnum>;
  /** The lines fulfilled. */
  fulfilledItems?: Maybe<Array<IFulfillmentLine>>;
  id: Scalars["ID"];
  /** Number of an invoice related to the order. */
  invoiceNumber?: Maybe<Scalars["String"]>;
  /** The concerned lines. */
  lines?: Maybe<Array<IOrderEventOrderLineObject>>;
  /** Content of the event. */
  message?: Maybe<Scalars["String"]>;
  /** User-friendly number of an order. */
  orderNumber?: Maybe<Scalars["String"]>;
  /** List of oversold lines names. */
  oversoldItems?: Maybe<Array<Scalars["String"]>>;
  /** The payment gateway of the payment. */
  paymentGateway?: Maybe<Scalars["String"]>;
  /** The payment reference from the payment provider. */
  paymentId?: Maybe<Scalars["String"]>;
  /** Number of items. */
  quantity?: Maybe<Scalars["Int"]>;
  /** The reference of payment's transaction. */
  reference?: Maybe<Scalars["String"]>;
  /**
   * The order event which is related to this event.
   *
   * Added in Saleor 3.15.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  related?: Maybe<IOrderEvent>;
  /** The order which is related to this order. */
  relatedOrder?: Maybe<IOrder>;
  /** Define if shipping costs were included to the refund. */
  shippingCostsIncluded?: Maybe<Scalars["Boolean"]>;
  /** The transaction reference of captured payment. */
  transactionReference?: Maybe<Scalars["String"]>;
  /** Order event type. */
  type?: Maybe<IOrderEventsEnum>;
  /** User who performed the action. */
  user?: Maybe<IUser>;
  /** The warehouse were items were restocked. */
  warehouse?: Maybe<IWarehouse>;
};

export type IOrderEventCountableConnection = {
  __typename?: "OrderEventCountableConnection";
  edges: Array<IOrderEventCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: IPageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars["Int"]>;
};

export type IOrderEventCountableEdge = {
  __typename?: "OrderEventCountableEdge";
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node: IOrderEvent;
};

export type IOrderEventDiscountObject = {
  __typename?: "OrderEventDiscountObject";
  /** Returns amount of discount. */
  amount?: Maybe<IMoney>;
  /** Returns amount of discount. */
  oldAmount?: Maybe<IMoney>;
  /** Value of the discount. Can store fixed value or percent value. */
  oldValue?: Maybe<Scalars["PositiveDecimal"]>;
  /** Type of the discount: fixed or percent. */
  oldValueType?: Maybe<IDiscountValueTypeEnum>;
  /** Explanation for the applied discount. */
  reason?: Maybe<Scalars["String"]>;
  /** Value of the discount. Can store fixed value or percent value. */
  value: Scalars["PositiveDecimal"];
  /** Type of the discount: fixed or percent. */
  valueType: IDiscountValueTypeEnum;
};

export type IOrderEventOrderLineObject = {
  __typename?: "OrderEventOrderLineObject";
  /** The discount applied to the order line. */
  discount?: Maybe<IOrderEventDiscountObject>;
  /** The variant name. */
  itemName?: Maybe<Scalars["String"]>;
  /** The order line. */
  orderLine?: Maybe<IOrderLine>;
  /** The variant quantity. */
  quantity?: Maybe<Scalars["Int"]>;
};

/** An enumeration. */
export type IOrderEventsEmailsEnum =
  | "CONFIRMED"
  | "DIGITAL_LINKS"
  | "FULFILLMENT_CONFIRMATION"
  | "ORDER_CANCEL"
  | "ORDER_CONFIRMATION"
  | "ORDER_REFUND"
  | "PAYMENT_CONFIRMATION"
  | "SHIPPING_CONFIRMATION"
  | "TRACKING_UPDATED";

/** The different order event types.  */
export type IOrderEventsEnum =
  | "ADDED_PRODUCTS"
  | "CANCELED"
  | "CONFIRMED"
  | "DRAFT_CREATED"
  | "DRAFT_CREATED_FROM_REPLACE"
  | "EMAIL_SENT"
  | "EXPIRED"
  | "EXTERNAL_SERVICE_NOTIFICATION"
  | "FULFILLMENT_AWAITS_APPROVAL"
  | "FULFILLMENT_CANCELED"
  | "FULFILLMENT_FULFILLED_ITEMS"
  | "FULFILLMENT_REFUNDED"
  | "FULFILLMENT_REPLACED"
  | "FULFILLMENT_RESTOCKED_ITEMS"
  | "FULFILLMENT_RETURNED"
  | "INVOICE_GENERATED"
  | "INVOICE_REQUESTED"
  | "INVOICE_SENT"
  | "INVOICE_UPDATED"
  | "NOTE_ADDED"
  | "NOTE_UPDATED"
  | "ORDER_DISCOUNT_ADDED"
  | "ORDER_DISCOUNT_AUTOMATICALLY_UPDATED"
  | "ORDER_DISCOUNT_DELETED"
  | "ORDER_DISCOUNT_UPDATED"
  | "ORDER_FULLY_PAID"
  | "ORDER_LINE_DISCOUNT_REMOVED"
  | "ORDER_LINE_DISCOUNT_UPDATED"
  | "ORDER_LINE_PRODUCT_DELETED"
  | "ORDER_LINE_VARIANT_DELETED"
  | "ORDER_MARKED_AS_PAID"
  | "ORDER_REPLACEMENT_CREATED"
  | "OTHER"
  | "OVERSOLD_ITEMS"
  | "PAYMENT_AUTHORIZED"
  | "PAYMENT_CAPTURED"
  | "PAYMENT_FAILED"
  | "PAYMENT_REFUNDED"
  | "PAYMENT_VOIDED"
  | "PLACED"
  | "PLACED_FROM_DRAFT"
  | "REMOVED_PRODUCTS"
  | "TRACKING_UPDATED"
  | "TRANSACTION_CANCEL_REQUESTED"
  | "TRANSACTION_CHARGE_REQUESTED"
  | "TRANSACTION_EVENT"
  | "TRANSACTION_MARK_AS_PAID_FAILED"
  | "TRANSACTION_REFUND_REQUESTED"
  | "UPDATED_ADDRESS";

/**
 * Event sent when order becomes expired.
 *
 * Added in Saleor 3.13.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type IOrderExpired = IEvent & {
  __typename?: "OrderExpired";
  /** Time of the event. */
  issuedAt?: Maybe<Scalars["DateTime"]>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IIssuingPrincipal>;
  /** The order the event relates to. */
  order?: Maybe<IOrder>;
  /** The application receiving the webhook. */
  recipient?: Maybe<IApp>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars["String"]>;
};

export type IOrderFilterInput = {
  authorizeStatus?: InputMaybe<Array<IOrderAuthorizeStatusEnum>>;
  channels?: InputMaybe<Array<Scalars["ID"]>>;
  chargeStatus?: InputMaybe<Array<IOrderChargeStatusEnum>>;
  checkoutIds?: InputMaybe<Array<Scalars["ID"]>>;
  created?: InputMaybe<IDateRangeInput>;
  customer?: InputMaybe<Scalars["String"]>;
  giftCardBought?: InputMaybe<Scalars["Boolean"]>;
  giftCardUsed?: InputMaybe<Scalars["Boolean"]>;
  ids?: InputMaybe<Array<Scalars["ID"]>>;
  isClickAndCollect?: InputMaybe<Scalars["Boolean"]>;
  isPreorder?: InputMaybe<Scalars["Boolean"]>;
  metadata?: InputMaybe<Array<IMetadataFilter>>;
  numbers?: InputMaybe<Array<Scalars["String"]>>;
  paymentStatus?: InputMaybe<Array<IPaymentChargeStatusEnum>>;
  search?: InputMaybe<Scalars["String"]>;
  status?: InputMaybe<Array<IOrderStatusFilter>>;
  updatedAt?: InputMaybe<IDateTimeRangeInput>;
};

/**
 * Filter shipping methods for order.
 *
 * Added in Saleor 3.6.
 */
export type IOrderFilterShippingMethods = IEvent & {
  __typename?: "OrderFilterShippingMethods";
  /** Time of the event. */
  issuedAt?: Maybe<Scalars["DateTime"]>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IIssuingPrincipal>;
  /** The order the event relates to. */
  order?: Maybe<IOrder>;
  /** The application receiving the webhook. */
  recipient?: Maybe<IApp>;
  /**
   * Shipping methods that can be used with this checkout.
   *
   * Added in Saleor 3.6.
   */
  shippingMethods?: Maybe<Array<IShippingMethod>>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars["String"]>;
};

/**
 * Creates new fulfillments for an order.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type IOrderFulfill = {
  __typename?: "OrderFulfill";
  errors: Array<IOrderError>;
  /** List of created fulfillments. */
  fulfillments?: Maybe<Array<IFulfillment>>;
  /** Fulfilled order. */
  order?: Maybe<IOrder>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<IOrderError>;
};

export type IOrderFulfillInput = {
  /** If true, then allow proceed fulfillment when stock is exceeded. */
  allowStockToBeExceeded?: InputMaybe<Scalars["Boolean"]>;
  /** List of items informing how to fulfill the order. */
  lines: Array<IOrderFulfillLineInput>;
  /** If true, send an email notification to the customer. */
  notifyCustomer?: InputMaybe<Scalars["Boolean"]>;
  /**
   * Fulfillment tracking number.
   *
   * Added in Saleor 3.6.
   */
  trackingNumber?: InputMaybe<Scalars["String"]>;
};

export type IOrderFulfillLineInput = {
  /** The ID of the order line. */
  orderLineId?: InputMaybe<Scalars["ID"]>;
  /** List of stock items to create. */
  stocks: Array<IOrderFulfillStockInput>;
};

export type IOrderFulfillStockInput = {
  /** The number of line items to be fulfilled from given warehouse. */
  quantity: Scalars["Int"];
  /** ID of the warehouse from which the item will be fulfilled. */
  warehouse: Scalars["ID"];
};

/**
 * Event sent when order is fulfilled.
 *
 * Added in Saleor 3.2.
 */
export type IOrderFulfilled = IEvent & {
  __typename?: "OrderFulfilled";
  /** Time of the event. */
  issuedAt?: Maybe<Scalars["DateTime"]>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IIssuingPrincipal>;
  /** The order the event relates to. */
  order?: Maybe<IOrder>;
  /** The application receiving the webhook. */
  recipient?: Maybe<IApp>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars["String"]>;
};

/**
 * Event sent when order is fully paid.
 *
 * Added in Saleor 3.2.
 */
export type IOrderFullyPaid = IEvent & {
  __typename?: "OrderFullyPaid";
  /** Time of the event. */
  issuedAt?: Maybe<Scalars["DateTime"]>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IIssuingPrincipal>;
  /** The order the event relates to. */
  order?: Maybe<IOrder>;
  /** The application receiving the webhook. */
  recipient?: Maybe<IApp>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars["String"]>;
};

/**
 * The order is fully refunded.
 *
 * Added in Saleor 3.14.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type IOrderFullyRefunded = IEvent & {
  __typename?: "OrderFullyRefunded";
  /** Time of the event. */
  issuedAt?: Maybe<Scalars["DateTime"]>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IIssuingPrincipal>;
  /** The order the event relates to. */
  order?: Maybe<IOrder>;
  /** The application receiving the webhook. */
  recipient?: Maybe<IApp>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars["String"]>;
};

/**
 * Adds granted refund to the order.
 *
 * Added in Saleor 3.13.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type IOrderGrantRefundCreate = {
  __typename?: "OrderGrantRefundCreate";
  errors: Array<IOrderGrantRefundCreateError>;
  /** Created granted refund. */
  grantedRefund?: Maybe<IOrderGrantedRefund>;
  /** Order which has assigned new grant refund. */
  order?: Maybe<IOrder>;
};

export type IOrderGrantRefundCreateError = {
  __typename?: "OrderGrantRefundCreateError";
  /** The error code. */
  code: IOrderGrantRefundCreateErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars["String"]>;
  /**
   * List of lines which cause the error.
   *
   * Added in Saleor 3.15.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  lines?: Maybe<Array<IOrderGrantRefundCreateLineError>>;
  /** The error message. */
  message?: Maybe<Scalars["String"]>;
};

/** An enumeration. */
export type IOrderGrantRefundCreateErrorCode =
  | "GRAPHQL_ERROR"
  | "INVALID"
  | "NOT_FOUND"
  | "REQUIRED"
  | "SHIPPING_COSTS_ALREADY_GRANTED";

export type IOrderGrantRefundCreateInput = {
  /** Amount of the granted refund. If not provided, the amount will be calculated automatically based on provided `lines` and `grantRefundForShipping`. */
  amount?: InputMaybe<Scalars["Decimal"]>;
  /**
   * Determine if granted refund should include shipping costs.
   *
   * Added in Saleor 3.15.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  grantRefundForShipping?: InputMaybe<Scalars["Boolean"]>;
  /**
   * Lines to assign to granted refund.
   *
   * Added in Saleor 3.15.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  lines?: InputMaybe<Array<IOrderGrantRefundCreateLineInput>>;
  /** Reason of the granted refund. */
  reason?: InputMaybe<Scalars["String"]>;
};

export type IOrderGrantRefundCreateLineError = {
  __typename?: "OrderGrantRefundCreateLineError";
  /** The error code. */
  code: IOrderGrantRefundCreateLineErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars["String"]>;
  /** The ID of the line related to the error. */
  lineId: Scalars["ID"];
  /** The error message. */
  message?: Maybe<Scalars["String"]>;
};

/** An enumeration. */
export type IOrderGrantRefundCreateLineErrorCode =
  | "GRAPHQL_ERROR"
  | "NOT_FOUND"
  | "QUANTITY_GREATER_THAN_AVAILABLE";

export type IOrderGrantRefundCreateLineInput = {
  /** The ID of the order line. */
  id: Scalars["ID"];
  /** The quantity of line items to be marked to refund. */
  quantity: Scalars["Int"];
  /** Reason of the granted refund for the line. */
  reason?: InputMaybe<Scalars["String"]>;
};

/**
 * Updates granted refund.
 *
 * Added in Saleor 3.13.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type IOrderGrantRefundUpdate = {
  __typename?: "OrderGrantRefundUpdate";
  errors: Array<IOrderGrantRefundUpdateError>;
  /** Created granted refund. */
  grantedRefund?: Maybe<IOrderGrantedRefund>;
  /** Order which has assigned updated grant refund. */
  order?: Maybe<IOrder>;
};

export type IOrderGrantRefundUpdateError = {
  __typename?: "OrderGrantRefundUpdateError";
  /**
   * List of lines to add which cause the error.
   *
   * Added in Saleor 3.15.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  addLines?: Maybe<Array<IOrderGrantRefundUpdateLineError>>;
  /** The error code. */
  code: IOrderGrantRefundUpdateErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars["String"]>;
  /** The error message. */
  message?: Maybe<Scalars["String"]>;
  /**
   * List of lines to remove which cause the error.
   *
   * Added in Saleor 3.15.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  removeLines?: Maybe<Array<IOrderGrantRefundUpdateLineError>>;
};

/** An enumeration. */
export type IOrderGrantRefundUpdateErrorCode =
  | "GRAPHQL_ERROR"
  | "INVALID"
  | "NOT_FOUND"
  | "REQUIRED"
  | "SHIPPING_COSTS_ALREADY_GRANTED";

export type IOrderGrantRefundUpdateInput = {
  /**
   * Lines to assign to granted refund.
   *
   * Added in Saleor 3.15.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  addLines?: InputMaybe<Array<IOrderGrantRefundUpdateLineAddInput>>;
  /** Amount of the granted refund. if not provided and `addLines` or `removeLines` or `grantRefundForShipping` is provided, amount will be calculated automatically. */
  amount?: InputMaybe<Scalars["Decimal"]>;
  /**
   * Determine if granted refund should include shipping costs.
   *
   * Added in Saleor 3.15.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  grantRefundForShipping?: InputMaybe<Scalars["Boolean"]>;
  /** Reason of the granted refund. */
  reason?: InputMaybe<Scalars["String"]>;
  /**
   * Lines to remove from granted refund.
   *
   * Added in Saleor 3.15.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  removeLines?: InputMaybe<Array<Scalars["ID"]>>;
};

export type IOrderGrantRefundUpdateLineAddInput = {
  /** The ID of the order line. */
  id: Scalars["ID"];
  /** The quantity of line items to be marked to refund. */
  quantity: Scalars["Int"];
  /** Reason of the granted refund for the line. */
  reason?: InputMaybe<Scalars["String"]>;
};

export type IOrderGrantRefundUpdateLineError = {
  __typename?: "OrderGrantRefundUpdateLineError";
  /** The error code. */
  code: IOrderGrantRefundUpdateLineErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars["String"]>;
  /** The ID of the line related to the error. */
  lineId: Scalars["ID"];
  /** The error message. */
  message?: Maybe<Scalars["String"]>;
};

/** An enumeration. */
export type IOrderGrantRefundUpdateLineErrorCode =
  | "GRAPHQL_ERROR"
  | "NOT_FOUND"
  | "QUANTITY_GREATER_THAN_AVAILABLE";

/**
 * The details of granted refund.
 *
 * Added in Saleor 3.13.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type IOrderGrantedRefund = {
  __typename?: "OrderGrantedRefund";
  /** Refund amount. */
  amount: IMoney;
  /** App that performed the action. */
  app?: Maybe<IApp>;
  /** Time of creation. */
  createdAt: Scalars["DateTime"];
  id: Scalars["ID"];
  /**
   * Lines assigned to the granted refund.
   *
   * Added in Saleor 3.15.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  lines?: Maybe<Array<IOrderGrantedRefundLine>>;
  /** Reason of the refund. */
  reason?: Maybe<Scalars["String"]>;
  /**
   * If true, the refunded amount includes the shipping price.If false, the refunded amount does not include the shipping price.
   *
   * Added in Saleor 3.15.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  shippingCostsIncluded: Scalars["Boolean"];
  /** Time of last update. */
  updatedAt: Scalars["DateTime"];
  /** User who performed the action. Requires of of the following permissions: MANAGE_USERS, MANAGE_STAFF, OWNER. */
  user?: Maybe<IUser>;
};

/**
 * Represents granted refund line.
 *
 * Added in Saleor 3.15.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type IOrderGrantedRefundLine = {
  __typename?: "OrderGrantedRefundLine";
  id: Scalars["ID"];
  /** Line of the order associated with this granted refund. */
  orderLine: IOrderLine;
  /** Number of items to refund. */
  quantity: Scalars["Int"];
  /** Reason for refunding the line. */
  reason?: Maybe<Scalars["String"]>;
};

/** Represents order line of particular order. */
export type IOrderLine = INode &
  IObjectWithMetadata & {
    __typename?: "OrderLine";
    /**
     * List of allocations across warehouses.
     *
     * Requires one of the following permissions: MANAGE_PRODUCTS, MANAGE_ORDERS.
     */
    allocations?: Maybe<Array<IAllocation>>;
    digitalContentUrl?: Maybe<IDigitalContentUrl>;
    id: Scalars["ID"];
    isShippingRequired: Scalars["Boolean"];
    /**
     * List of public metadata items. Can be accessed without permissions.
     *
     * Added in Saleor 3.5.
     */
    metadata: Array<IMetadataItem>;
    /**
     * A single key from public metadata.
     *
     * Tip: Use GraphQL aliases to fetch multiple keys.
     *
     * Added in Saleor 3.5.
     */
    metafield?: Maybe<Scalars["String"]>;
    /**
     * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
     *
     * Added in Saleor 3.5.
     */
    metafields?: Maybe<Scalars["Metadata"]>;
    /**
     * List of private metadata items. Requires staff permissions to access.
     *
     * Added in Saleor 3.5.
     */
    privateMetadata: Array<IMetadataItem>;
    /**
     * A single key from private metadata. Requires staff permissions to access.
     *
     * Tip: Use GraphQL aliases to fetch multiple keys.
     *
     * Added in Saleor 3.5.
     */
    privateMetafield?: Maybe<Scalars["String"]>;
    /**
     * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
     *
     * Added in Saleor 3.5.
     */
    privateMetafields?: Maybe<Scalars["Metadata"]>;
    productName: Scalars["String"];
    productSku?: Maybe<Scalars["String"]>;
    productVariantId?: Maybe<Scalars["String"]>;
    quantity: Scalars["Int"];
    quantityFulfilled: Scalars["Int"];
    /**
     * A quantity of items remaining to be fulfilled.
     *
     * Added in Saleor 3.1.
     */
    quantityToFulfill: Scalars["Int"];
    /**
     * Denormalized tax class of the product in this order line.
     *
     * Added in Saleor 3.9.
     *
     * Requires one of the following permissions: AUTHENTICATED_STAFF_USER, AUTHENTICATED_APP.
     */
    taxClass?: Maybe<ITaxClass>;
    /**
     * Denormalized public metadata of the tax class.
     *
     * Added in Saleor 3.9.
     */
    taxClassMetadata: Array<IMetadataItem>;
    /**
     * Denormalized name of the tax class.
     *
     * Added in Saleor 3.9.
     */
    taxClassName?: Maybe<Scalars["String"]>;
    /**
     * Denormalized private metadata of the tax class. Requires staff permissions to access.
     *
     * Added in Saleor 3.9.
     */
    taxClassPrivateMetadata: Array<IMetadataItem>;
    taxRate: Scalars["Float"];
    thumbnail?: Maybe<IImage>;
    /** Price of the order line. */
    totalPrice: ITaxedMoney;
    /** Product name in the customer's language */
    translatedProductName: Scalars["String"];
    /** Variant name in the customer's language */
    translatedVariantName: Scalars["String"];
    /** Price of the single item in the order line without applied an order line discount. */
    undiscountedUnitPrice: ITaxedMoney;
    /** The discount applied to the single order line. */
    unitDiscount: IMoney;
    unitDiscountReason?: Maybe<Scalars["String"]>;
    /** Type of the discount: fixed or percent */
    unitDiscountType?: Maybe<IDiscountValueTypeEnum>;
    /** Value of the discount. Can store fixed value or percent value */
    unitDiscountValue: Scalars["PositiveDecimal"];
    /** Price of the single item in the order line. */
    unitPrice: ITaxedMoney;
    /** A purchased product variant. Note: this field may be null if the variant has been removed from stock at all. Requires one of the following permissions to include the unpublished items: MANAGE_ORDERS, MANAGE_DISCOUNTS, MANAGE_PRODUCTS. */
    variant?: Maybe<IProductVariant>;
    variantName: Scalars["String"];
  };

/** Represents order line of particular order. */
export type IOrderLineMetafieldArgs = {
  key: Scalars["String"];
};

/** Represents order line of particular order. */
export type IOrderLineMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars["String"]>>;
};

/** Represents order line of particular order. */
export type IOrderLinePrivateMetafieldArgs = {
  key: Scalars["String"];
};

/** Represents order line of particular order. */
export type IOrderLinePrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars["String"]>>;
};

/** Represents order line of particular order. */
export type IOrderLineThumbnailArgs = {
  format?: InputMaybe<IThumbnailFormatEnum>;
  size?: InputMaybe<Scalars["Int"]>;
};

export type IOrderLineCreateInput = {
  /**
   * Flag that allow force splitting the same variant into multiple lines by skipping the matching logic.
   *
   * Added in Saleor 3.6.
   */
  forceNewLine?: InputMaybe<Scalars["Boolean"]>;
  /**
   * Custom price of the item.When the line with the same variant will be provided multiple times, the last price will be used.
   *
   * Added in Saleor 3.14.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  price?: InputMaybe<Scalars["PositiveDecimal"]>;
  /** Number of variant items ordered. */
  quantity: Scalars["Int"];
  /** Product variant ID. */
  variantId: Scalars["ID"];
};

/**
 * Deletes an order line from an order.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type IOrderLineDelete = {
  __typename?: "OrderLineDelete";
  errors: Array<IOrderError>;
  /** A related order. */
  order?: Maybe<IOrder>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<IOrderError>;
  /** An order line that was deleted. */
  orderLine?: Maybe<IOrderLine>;
};

/**
 * Remove discount applied to the order line.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type IOrderLineDiscountRemove = {
  __typename?: "OrderLineDiscountRemove";
  errors: Array<IOrderError>;
  /** Order which is related to line which has removed discount. */
  order?: Maybe<IOrder>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<IOrderError>;
  /** Order line which has removed discount. */
  orderLine?: Maybe<IOrderLine>;
};

/**
 * Update discount for the order line.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type IOrderLineDiscountUpdate = {
  __typename?: "OrderLineDiscountUpdate";
  errors: Array<IOrderError>;
  /** Order which is related to the discounted line. */
  order?: Maybe<IOrder>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<IOrderError>;
  /** Order line which has been discounted. */
  orderLine?: Maybe<IOrderLine>;
};

export type IOrderLineInput = {
  /** Number of variant items ordered. */
  quantity: Scalars["Int"];
};

/**
 * Updates an order line of an order.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type IOrderLineUpdate = {
  __typename?: "OrderLineUpdate";
  errors: Array<IOrderError>;
  /** Related order. */
  order?: Maybe<IOrder>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<IOrderError>;
  orderLine?: Maybe<IOrderLine>;
};

/**
 * Create order lines for an order.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type IOrderLinesCreate = {
  __typename?: "OrderLinesCreate";
  errors: Array<IOrderError>;
  /** Related order. */
  order?: Maybe<IOrder>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<IOrderError>;
  /** List of added order lines. */
  orderLines?: Maybe<Array<IOrderLine>>;
};

/**
 * Mark order as manually paid.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type IOrderMarkAsPaid = {
  __typename?: "OrderMarkAsPaid";
  errors: Array<IOrderError>;
  /** Order marked as paid. */
  order?: Maybe<IOrder>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<IOrderError>;
};

/**
 * Event sent when order metadata is updated.
 *
 * Added in Saleor 3.8.
 */
export type IOrderMetadataUpdated = IEvent & {
  __typename?: "OrderMetadataUpdated";
  /** Time of the event. */
  issuedAt?: Maybe<Scalars["DateTime"]>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IIssuingPrincipal>;
  /** The order the event relates to. */
  order?: Maybe<IOrder>;
  /** The application receiving the webhook. */
  recipient?: Maybe<IApp>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars["String"]>;
};

/**
 * Adds note to the order.
 *
 * Added in Saleor 3.15.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type IOrderNoteAdd = {
  __typename?: "OrderNoteAdd";
  errors: Array<IOrderNoteAddError>;
  /** Order note created. */
  event?: Maybe<IOrderEvent>;
  /** Order with the note added. */
  order?: Maybe<IOrder>;
};

export type IOrderNoteAddError = {
  __typename?: "OrderNoteAddError";
  /** The error code. */
  code?: Maybe<IOrderNoteAddErrorCode>;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars["String"]>;
  /** The error message. */
  message?: Maybe<Scalars["String"]>;
};

/** An enumeration. */
export type IOrderNoteAddErrorCode = "GRAPHQL_ERROR" | "REQUIRED";

export type IOrderNoteInput = {
  /** Note message. */
  message: Scalars["String"];
};

/**
 * Updates note of an order.
 *
 * Added in Saleor 3.15.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type IOrderNoteUpdate = {
  __typename?: "OrderNoteUpdate";
  errors: Array<IOrderNoteUpdateError>;
  /** Order note updated. */
  event?: Maybe<IOrderEvent>;
  /** Order with the note updated. */
  order?: Maybe<IOrder>;
};

export type IOrderNoteUpdateError = {
  __typename?: "OrderNoteUpdateError";
  /** The error code. */
  code?: Maybe<IOrderNoteUpdateErrorCode>;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars["String"]>;
  /** The error message. */
  message?: Maybe<Scalars["String"]>;
};

/** An enumeration. */
export type IOrderNoteUpdateErrorCode =
  | "GRAPHQL_ERROR"
  | "NOT_FOUND"
  | "REQUIRED";

export type IOrderOrCheckout = ICheckout | IOrder;

/** An enumeration. */
export type IOrderOriginEnum = "BULK_CREATE" | "CHECKOUT" | "DRAFT" | "REISSUE";

/**
 * Payment has been made. The order may be partially or fully paid.
 *
 * Added in Saleor 3.14.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type IOrderPaid = IEvent & {
  __typename?: "OrderPaid";
  /** Time of the event. */
  issuedAt?: Maybe<Scalars["DateTime"]>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IIssuingPrincipal>;
  /** The order the event relates to. */
  order?: Maybe<IOrder>;
  /** The application receiving the webhook. */
  recipient?: Maybe<IApp>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars["String"]>;
};

/**
 * Refund an order.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type IOrderRefund = {
  __typename?: "OrderRefund";
  errors: Array<IOrderError>;
  /** A refunded order. */
  order?: Maybe<IOrder>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<IOrderError>;
};

export type IOrderRefundFulfillmentLineInput = {
  /** The ID of the fulfillment line to refund. */
  fulfillmentLineId: Scalars["ID"];
  /** The number of items to be refunded. */
  quantity: Scalars["Int"];
};

export type IOrderRefundLineInput = {
  /** The ID of the order line to refund. */
  orderLineId: Scalars["ID"];
  /** The number of items to be refunded. */
  quantity: Scalars["Int"];
};

export type IOrderRefundProductsInput = {
  /** The total amount of refund when the value is provided manually. */
  amountToRefund?: InputMaybe<Scalars["PositiveDecimal"]>;
  /** List of fulfilled lines to refund. */
  fulfillmentLines?: InputMaybe<Array<IOrderRefundFulfillmentLineInput>>;
  /** If true, Saleor will refund shipping costs. If amountToRefund is providedincludeShippingCosts will be ignored. */
  includeShippingCosts?: InputMaybe<Scalars["Boolean"]>;
  /** List of unfulfilled lines to refund. */
  orderLines?: InputMaybe<Array<IOrderRefundLineInput>>;
};

/**
 * The order received a refund. The order may be partially or fully refunded.
 *
 * Added in Saleor 3.14.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type IOrderRefunded = IEvent & {
  __typename?: "OrderRefunded";
  /** Time of the event. */
  issuedAt?: Maybe<Scalars["DateTime"]>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IIssuingPrincipal>;
  /** The order the event relates to. */
  order?: Maybe<IOrder>;
  /** The application receiving the webhook. */
  recipient?: Maybe<IApp>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars["String"]>;
};

export type IOrderReturnFulfillmentLineInput = {
  /** The ID of the fulfillment line to return. */
  fulfillmentLineId: Scalars["ID"];
  /** The number of items to be returned. */
  quantity: Scalars["Int"];
  /** Determines, if the line should be added to replace order. */
  replace?: InputMaybe<Scalars["Boolean"]>;
};

export type IOrderReturnLineInput = {
  /** The ID of the order line to return. */
  orderLineId: Scalars["ID"];
  /** The number of items to be returned. */
  quantity: Scalars["Int"];
  /** Determines, if the line should be added to replace order. */
  replace?: InputMaybe<Scalars["Boolean"]>;
};

export type IOrderReturnProductsInput = {
  /** The total amount of refund when the value is provided manually. */
  amountToRefund?: InputMaybe<Scalars["PositiveDecimal"]>;
  /** List of fulfilled lines to return. */
  fulfillmentLines?: InputMaybe<Array<IOrderReturnFulfillmentLineInput>>;
  /** If true, Saleor will refund shipping costs. If amountToRefund is providedincludeShippingCosts will be ignored. */
  includeShippingCosts?: InputMaybe<Scalars["Boolean"]>;
  /** List of unfulfilled lines to return. */
  orderLines?: InputMaybe<Array<IOrderReturnLineInput>>;
  /** If true, Saleor will call refund action for all lines. */
  refund?: InputMaybe<Scalars["Boolean"]>;
};

/** Represents the channel-specific order settings. */
export type IOrderSettings = {
  __typename?: "OrderSettings";
  /**
   * Determine if it is possible to place unpdaid order by calling `checkoutComplete` mutation.
   *
   * Added in Saleor 3.15.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  allowUnpaidOrders: Scalars["Boolean"];
  /** When disabled, all new orders from checkout will be marked as unconfirmed. When enabled orders from checkout will become unfulfilled immediately. */
  automaticallyConfirmAllNewOrders: Scalars["Boolean"];
  /** When enabled, all non-shippable gift card orders will be fulfilled automatically. */
  automaticallyFulfillNonShippableGiftCard: Scalars["Boolean"];
  /**
   * Determine the transaction flow strategy to be used. Include the selected option in the payload sent to the payment app, as a requested action for the transaction.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  defaultTransactionFlowStrategy: ITransactionFlowStrategyEnum;
  /**
   * The time in days after expired orders will be deleted.
   *
   * Added in Saleor 3.14.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  deleteExpiredOrdersAfter: Scalars["Day"];
  /**
   * Expiration time in minutes. Default null - means do not expire any orders.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  expireOrdersAfter?: Maybe<Scalars["Minute"]>;
  /**
   * Determine what strategy will be used to mark the order as paid. Based on the chosen option, the proper object will be created and attached to the order when it's manually marked as paid.
   * `PAYMENT_FLOW` - [default option] creates the `Payment` object.
   * `TRANSACTION_FLOW` - creates the `TransactionItem` object.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  markAsPaidStrategy: IMarkAsPaidStrategyEnum;
};

export type IOrderSettingsError = {
  __typename?: "OrderSettingsError";
  /** The error code. */
  code: IOrderSettingsErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars["String"]>;
  /** The error message. */
  message?: Maybe<Scalars["String"]>;
};

/** An enumeration. */
export type IOrderSettingsErrorCode = "INVALID";

export type IOrderSettingsInput = {
  /**
   * Determine if it is possible to place unpdaid order by calling `checkoutComplete` mutation.
   *
   * Added in Saleor 3.15.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  allowUnpaidOrders?: InputMaybe<Scalars["Boolean"]>;
  /** When disabled, all new orders from checkout will be marked as unconfirmed. When enabled orders from checkout will become unfulfilled immediately. By default set to True */
  automaticallyConfirmAllNewOrders?: InputMaybe<Scalars["Boolean"]>;
  /** When enabled, all non-shippable gift card orders will be fulfilled automatically. By defualt set to True. */
  automaticallyFulfillNonShippableGiftCard?: InputMaybe<Scalars["Boolean"]>;
  /**
   * Determine the transaction flow strategy to be used. Include the selected option in the payload sent to the payment app, as a requested action for the transaction.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  defaultTransactionFlowStrategy?: InputMaybe<ITransactionFlowStrategyEnum>;
  /**
   * The time in days after expired orders will be deleted.Allowed range is from 1 to 120.
   *
   * Added in Saleor 3.14.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  deleteExpiredOrdersAfter?: InputMaybe<Scalars["Day"]>;
  /**
   * Expiration time in minutes. Default null - means do not expire any orders. Enter 0 or null to disable.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  expireOrdersAfter?: InputMaybe<Scalars["Minute"]>;
  /**
   * Determine what strategy will be used to mark the order as paid. Based on the chosen option, the proper object will be created and attached to the order when it's manually marked as paid.
   * `PAYMENT_FLOW` - [default option] creates the `Payment` object.
   * `TRANSACTION_FLOW` - creates the `TransactionItem` object.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  markAsPaidStrategy?: InputMaybe<IMarkAsPaidStrategyEnum>;
};

/**
 * Update shop order settings across all channels. Returns `orderSettings` for the first `channel` in alphabetical order.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type IOrderSettingsUpdate = {
  __typename?: "OrderSettingsUpdate";
  errors: Array<IOrderSettingsError>;
  /** Order settings. */
  orderSettings?: Maybe<IOrderSettings>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderSettingsErrors: Array<IOrderSettingsError>;
};

export type IOrderSettingsUpdateInput = {
  /** When disabled, all new orders from checkout will be marked as unconfirmed. When enabled orders from checkout will become unfulfilled immediately. By default set to True */
  automaticallyConfirmAllNewOrders?: InputMaybe<Scalars["Boolean"]>;
  /** When enabled, all non-shippable gift card orders will be fulfilled automatically. By defualt set to True. */
  automaticallyFulfillNonShippableGiftCard?: InputMaybe<Scalars["Boolean"]>;
};

export type IOrderSortField =
  /**
   * Sort orders by creation date.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0.
   */
  | "CREATED_AT"
  /**
   * Sort orders by creation date.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0.
   */
  | "CREATION_DATE"
  /** Sort orders by customer. */
  | "CUSTOMER"
  /** Sort orders by fulfillment status. */
  | "FULFILLMENT_STATUS"
  /** Sort orders by last modified at. */
  | "LAST_MODIFIED_AT"
  /** Sort orders by number. */
  | "NUMBER"
  /** Sort orders by payment. */
  | "PAYMENT"
  /** Sort orders by rank. Note: This option is available only with the `search` filter. */
  | "RANK";

export type IOrderSortingInput = {
  /** Specifies the direction in which to sort orders. */
  direction: IOrderDirection;
  /** Sort orders by the selected field. */
  field: IOrderSortField;
};

/** An enumeration. */
export type IOrderStatus =
  | "CANCELED"
  | "DRAFT"
  | "EXPIRED"
  | "FULFILLED"
  | "PARTIALLY_FULFILLED"
  | "PARTIALLY_RETURNED"
  | "RETURNED"
  | "UNCONFIRMED"
  | "UNFULFILLED";

export type IOrderStatusFilter =
  | "CANCELED"
  | "FULFILLED"
  | "PARTIALLY_FULFILLED"
  | "READY_TO_CAPTURE"
  | "READY_TO_FULFILL"
  | "UNCONFIRMED"
  | "UNFULFILLED";

/**
 * Updates an order.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type IOrderUpdate = {
  __typename?: "OrderUpdate";
  errors: Array<IOrderError>;
  order?: Maybe<IOrder>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<IOrderError>;
};

export type IOrderUpdateInput = {
  /** Billing address of the customer. */
  billingAddress?: InputMaybe<IAddressInput>;
  /**
   * External ID of this order.
   *
   * Added in Saleor 3.10.
   */
  externalReference?: InputMaybe<Scalars["String"]>;
  /** Shipping address of the customer. */
  shippingAddress?: InputMaybe<IAddressInput>;
  /** Email address of the customer. */
  userEmail?: InputMaybe<Scalars["String"]>;
};

/**
 * Updates a shipping method of the order. Requires shipping method ID to update, when null is passed then currently assigned shipping method is removed.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type IOrderUpdateShipping = {
  __typename?: "OrderUpdateShipping";
  errors: Array<IOrderError>;
  /** Order with updated shipping method. */
  order?: Maybe<IOrder>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<IOrderError>;
};

export type IOrderUpdateShippingInput = {
  /** ID of the selected shipping method, pass null to remove currently assigned shipping method. */
  shippingMethod?: InputMaybe<Scalars["ID"]>;
};

/**
 * Event sent when order is updated.
 *
 * Added in Saleor 3.2.
 */
export type IOrderUpdated = IEvent & {
  __typename?: "OrderUpdated";
  /** Time of the event. */
  issuedAt?: Maybe<Scalars["DateTime"]>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IIssuingPrincipal>;
  /** The order the event relates to. */
  order?: Maybe<IOrder>;
  /** The application receiving the webhook. */
  recipient?: Maybe<IApp>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars["String"]>;
};

/**
 * Void an order.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type IOrderVoid = {
  __typename?: "OrderVoid";
  errors: Array<IOrderError>;
  /** A voided order. */
  order?: Maybe<IOrder>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<IOrderError>;
};

/** A static page that can be manually added by a shop operator through the dashboard. */
export type IPage = INode &
  IObjectWithMetadata & {
    __typename?: "Page";
    /** List of attributes assigned to this product. */
    attributes: Array<ISelectedAttribute>;
    /**
     * Content of the page.
     *
     * Rich text format. For reference see https://editorjs.io/
     */
    content?: Maybe<Scalars["JSONString"]>;
    /**
     * Content of the page.
     *
     * Rich text format. For reference see https://editorjs.io/
     * @deprecated This field will be removed in Saleor 4.0. Use the `content` field instead.
     */
    contentJson: Scalars["JSONString"];
    /** Date and time at which page was created. */
    created: Scalars["DateTime"];
    /** ID of the page. */
    id: Scalars["ID"];
    /** Determines if the page is published. */
    isPublished: Scalars["Boolean"];
    /** List of public metadata items. Can be accessed without permissions. */
    metadata: Array<IMetadataItem>;
    /**
     * A single key from public metadata.
     *
     * Tip: Use GraphQL aliases to fetch multiple keys.
     *
     * Added in Saleor 3.3.
     */
    metafield?: Maybe<Scalars["String"]>;
    /**
     * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
     *
     * Added in Saleor 3.3.
     */
    metafields?: Maybe<Scalars["Metadata"]>;
    /** Determines the type of page */
    pageType: IPageType;
    /** List of private metadata items. Requires staff permissions to access. */
    privateMetadata: Array<IMetadataItem>;
    /**
     * A single key from private metadata. Requires staff permissions to access.
     *
     * Tip: Use GraphQL aliases to fetch multiple keys.
     *
     * Added in Saleor 3.3.
     */
    privateMetafield?: Maybe<Scalars["String"]>;
    /**
     * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
     *
     * Added in Saleor 3.3.
     */
    privateMetafields?: Maybe<Scalars["Metadata"]>;
    /** @deprecated This field will be removed in Saleor 4.0. Use the `publishedAt` field to fetch the publication date. */
    publicationDate?: Maybe<Scalars["Date"]>;
    /**
     * The page publication date.
     *
     * Added in Saleor 3.3.
     */
    publishedAt?: Maybe<Scalars["DateTime"]>;
    /** Description of the page for SEO. */
    seoDescription?: Maybe<Scalars["String"]>;
    /** Title of the page for SEO. */
    seoTitle?: Maybe<Scalars["String"]>;
    /** Slug of the page. */
    slug: Scalars["String"];
    /** Title of the page. */
    title: Scalars["String"];
    /** Returns translated page fields for the given language code. */
    translation?: Maybe<IPageTranslation>;
  };

/** A static page that can be manually added by a shop operator through the dashboard. */
export type IPageMetafieldArgs = {
  key: Scalars["String"];
};

/** A static page that can be manually added by a shop operator through the dashboard. */
export type IPageMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars["String"]>>;
};

/** A static page that can be manually added by a shop operator through the dashboard. */
export type IPagePrivateMetafieldArgs = {
  key: Scalars["String"];
};

/** A static page that can be manually added by a shop operator through the dashboard. */
export type IPagePrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars["String"]>>;
};

/** A static page that can be manually added by a shop operator through the dashboard. */
export type IPageTranslationArgs = {
  languageCode: ILanguageCodeEnum;
};

/**
 * Assign attributes to a given page type.
 *
 * Requires one of the following permissions: MANAGE_PAGE_TYPES_AND_ATTRIBUTES.
 */
export type IPageAttributeAssign = {
  __typename?: "PageAttributeAssign";
  errors: Array<IPageError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  pageErrors: Array<IPageError>;
  /** The updated page type. */
  pageType?: Maybe<IPageType>;
};

/**
 * Unassign attributes from a given page type.
 *
 * Requires one of the following permissions: MANAGE_PAGE_TYPES_AND_ATTRIBUTES.
 */
export type IPageAttributeUnassign = {
  __typename?: "PageAttributeUnassign";
  errors: Array<IPageError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  pageErrors: Array<IPageError>;
  /** The updated page type. */
  pageType?: Maybe<IPageType>;
};

/**
 * Deletes pages.
 *
 * Requires one of the following permissions: MANAGE_PAGES.
 */
export type IPageBulkDelete = {
  __typename?: "PageBulkDelete";
  /** Returns how many objects were affected. */
  count: Scalars["Int"];
  errors: Array<IPageError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  pageErrors: Array<IPageError>;
};

/**
 * Publish pages.
 *
 * Requires one of the following permissions: MANAGE_PAGES.
 */
export type IPageBulkPublish = {
  __typename?: "PageBulkPublish";
  /** Returns how many objects were affected. */
  count: Scalars["Int"];
  errors: Array<IPageError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  pageErrors: Array<IPageError>;
};

export type IPageCountableConnection = {
  __typename?: "PageCountableConnection";
  edges: Array<IPageCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: IPageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars["Int"]>;
};

export type IPageCountableEdge = {
  __typename?: "PageCountableEdge";
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node: IPage;
};

/**
 * Creates a new page.
 *
 * Requires one of the following permissions: MANAGE_PAGES.
 */
export type IPageCreate = {
  __typename?: "PageCreate";
  errors: Array<IPageError>;
  page?: Maybe<IPage>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  pageErrors: Array<IPageError>;
};

export type IPageCreateInput = {
  /** List of attributes. */
  attributes?: InputMaybe<Array<IAttributeValueInput>>;
  /**
   * Page content.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  content?: InputMaybe<Scalars["JSONString"]>;
  /** Determines if page is visible in the storefront. */
  isPublished?: InputMaybe<Scalars["Boolean"]>;
  /** ID of the page type that page belongs to. */
  pageType: Scalars["ID"];
  /**
   * Publication date. ISO 8601 standard.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Use `publishedAt` field instead.
   */
  publicationDate?: InputMaybe<Scalars["String"]>;
  /**
   * Publication date time. ISO 8601 standard.
   *
   * Added in Saleor 3.3.
   */
  publishedAt?: InputMaybe<Scalars["DateTime"]>;
  /** Search engine optimization fields. */
  seo?: InputMaybe<ISeoInput>;
  /** Page internal name. */
  slug?: InputMaybe<Scalars["String"]>;
  /** Page title. */
  title?: InputMaybe<Scalars["String"]>;
};

/**
 * Event sent when new page is created.
 *
 * Added in Saleor 3.2.
 */
export type IPageCreated = IEvent & {
  __typename?: "PageCreated";
  /** Time of the event. */
  issuedAt?: Maybe<Scalars["DateTime"]>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IIssuingPrincipal>;
  /** The page the event relates to. */
  page?: Maybe<IPage>;
  /** The application receiving the webhook. */
  recipient?: Maybe<IApp>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars["String"]>;
};

/**
 * Deletes a page.
 *
 * Requires one of the following permissions: MANAGE_PAGES.
 */
export type IPageDelete = {
  __typename?: "PageDelete";
  errors: Array<IPageError>;
  page?: Maybe<IPage>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  pageErrors: Array<IPageError>;
};

/**
 * Event sent when page is deleted.
 *
 * Added in Saleor 3.2.
 */
export type IPageDeleted = IEvent & {
  __typename?: "PageDeleted";
  /** Time of the event. */
  issuedAt?: Maybe<Scalars["DateTime"]>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IIssuingPrincipal>;
  /** The page the event relates to. */
  page?: Maybe<IPage>;
  /** The application receiving the webhook. */
  recipient?: Maybe<IApp>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars["String"]>;
};

export type IPageError = {
  __typename?: "PageError";
  /** List of attributes IDs which causes the error. */
  attributes?: Maybe<Array<Scalars["ID"]>>;
  /** The error code. */
  code: IPageErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars["String"]>;
  /** The error message. */
  message?: Maybe<Scalars["String"]>;
  /** List of attribute values IDs which causes the error. */
  values?: Maybe<Array<Scalars["ID"]>>;
};

/** An enumeration. */
export type IPageErrorCode =
  | "ATTRIBUTE_ALREADY_ASSIGNED"
  | "DUPLICATED_INPUT_ITEM"
  | "GRAPHQL_ERROR"
  | "INVALID"
  | "NOT_FOUND"
  | "REQUIRED"
  | "UNIQUE";

export type IPageFilterInput = {
  ids?: InputMaybe<Array<Scalars["ID"]>>;
  metadata?: InputMaybe<Array<IMetadataFilter>>;
  pageTypes?: InputMaybe<Array<Scalars["ID"]>>;
  search?: InputMaybe<Scalars["String"]>;
  slugs?: InputMaybe<Array<Scalars["String"]>>;
};

/** The Relay compliant `PageInfo` type, containing data necessary to paginate this connection. */
export type IPageInfo = {
  __typename?: "PageInfo";
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars["String"]>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars["Boolean"];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars["Boolean"];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars["String"]>;
};

export type IPageInput = {
  /** List of attributes. */
  attributes?: InputMaybe<Array<IAttributeValueInput>>;
  /**
   * Page content.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  content?: InputMaybe<Scalars["JSONString"]>;
  /** Determines if page is visible in the storefront. */
  isPublished?: InputMaybe<Scalars["Boolean"]>;
  /**
   * Publication date. ISO 8601 standard.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Use `publishedAt` field instead.
   */
  publicationDate?: InputMaybe<Scalars["String"]>;
  /**
   * Publication date time. ISO 8601 standard.
   *
   * Added in Saleor 3.3.
   */
  publishedAt?: InputMaybe<Scalars["DateTime"]>;
  /** Search engine optimization fields. */
  seo?: InputMaybe<ISeoInput>;
  /** Page internal name. */
  slug?: InputMaybe<Scalars["String"]>;
  /** Page title. */
  title?: InputMaybe<Scalars["String"]>;
};

/**
 * Reorder page attribute values.
 *
 * Requires one of the following permissions: MANAGE_PAGES.
 */
export type IPageReorderAttributeValues = {
  __typename?: "PageReorderAttributeValues";
  errors: Array<IPageError>;
  /** Page from which attribute values are reordered. */
  page?: Maybe<IPage>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  pageErrors: Array<IPageError>;
};

export type IPageSortField =
  /**
   * Sort pages by creation date.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0.
   */
  | "CREATED_AT"
  /**
   * Sort pages by creation date.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0.
   */
  | "CREATION_DATE"
  /**
   * Sort pages by publication date.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0.
   */
  | "PUBLICATION_DATE"
  /**
   * Sort pages by publication date.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0.
   */
  | "PUBLISHED_AT"
  /** Sort pages by slug. */
  | "SLUG"
  /** Sort pages by title. */
  | "TITLE"
  /** Sort pages by visibility. */
  | "VISIBILITY";

export type IPageSortingInput = {
  /** Specifies the direction in which to sort pages. */
  direction: IOrderDirection;
  /** Sort pages by the selected field. */
  field: IPageSortField;
};

export type IPageTranslatableContent = INode & {
  __typename?: "PageTranslatableContent";
  /** List of page content attribute values that can be translated. */
  attributeValues: Array<IAttributeValueTranslatableContent>;
  /**
   * Content of the page to translate.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  content?: Maybe<Scalars["JSONString"]>;
  /**
   * Content of the page.
   *
   * Rich text format. For reference see https://editorjs.io/
   * @deprecated This field will be removed in Saleor 4.0. Use the `content` field instead.
   */
  contentJson?: Maybe<Scalars["JSONString"]>;
  /** The ID of the page translatable content. */
  id: Scalars["ID"];
  /**
   * A static page that can be manually added by a shop operator through the dashboard.
   * @deprecated This field will be removed in Saleor 4.0. Get model fields from the root level queries.
   */
  page?: Maybe<IPage>;
  /** SEO description to translate. */
  seoDescription?: Maybe<Scalars["String"]>;
  /** SEO title to translate. */
  seoTitle?: Maybe<Scalars["String"]>;
  /** Page title to translate. */
  title: Scalars["String"];
  /** Returns translated page fields for the given language code. */
  translation?: Maybe<IPageTranslation>;
};

export type IPageTranslatableContentTranslationArgs = {
  languageCode: ILanguageCodeEnum;
};

/**
 * Creates/updates translations for a page.
 *
 * Requires one of the following permissions: MANAGE_TRANSLATIONS.
 */
export type IPageTranslate = {
  __typename?: "PageTranslate";
  errors: Array<ITranslationError>;
  page?: Maybe<IPageTranslatableContent>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  translationErrors: Array<ITranslationError>;
};

export type IPageTranslation = INode & {
  __typename?: "PageTranslation";
  /**
   * Translated content of the page.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  content?: Maybe<Scalars["JSONString"]>;
  /**
   * Translated description of the page.
   *
   * Rich text format. For reference see https://editorjs.io/
   * @deprecated This field will be removed in Saleor 4.0. Use the `content` field instead.
   */
  contentJson?: Maybe<Scalars["JSONString"]>;
  /** The ID of the page translation. */
  id: Scalars["ID"];
  /** Translation language. */
  language: ILanguageDisplay;
  /** Translated SEO description. */
  seoDescription?: Maybe<Scalars["String"]>;
  /** Translated SEO title. */
  seoTitle?: Maybe<Scalars["String"]>;
  /** Translated page title. */
  title?: Maybe<Scalars["String"]>;
};

export type IPageTranslationInput = {
  /**
   * Translated page content.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  content?: InputMaybe<Scalars["JSONString"]>;
  seoDescription?: InputMaybe<Scalars["String"]>;
  seoTitle?: InputMaybe<Scalars["String"]>;
  title?: InputMaybe<Scalars["String"]>;
};

/** Represents a type of page. It defines what attributes are available to pages of this type. */
export type IPageType = INode &
  IObjectWithMetadata & {
    __typename?: "PageType";
    /** Page attributes of that page type. */
    attributes?: Maybe<Array<IAttribute>>;
    /**
     * Attributes that can be assigned to the page type.
     *
     * Requires one of the following permissions: MANAGE_PAGES, MANAGE_PAGE_TYPES_AND_ATTRIBUTES.
     */
    availableAttributes?: Maybe<IAttributeCountableConnection>;
    /**
     * Whether page type has pages assigned.
     *
     * Requires one of the following permissions: MANAGE_PAGES, MANAGE_PAGE_TYPES_AND_ATTRIBUTES.
     */
    hasPages?: Maybe<Scalars["Boolean"]>;
    /** ID of the page type. */
    id: Scalars["ID"];
    /** List of public metadata items. Can be accessed without permissions. */
    metadata: Array<IMetadataItem>;
    /**
     * A single key from public metadata.
     *
     * Tip: Use GraphQL aliases to fetch multiple keys.
     *
     * Added in Saleor 3.3.
     */
    metafield?: Maybe<Scalars["String"]>;
    /**
     * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
     *
     * Added in Saleor 3.3.
     */
    metafields?: Maybe<Scalars["Metadata"]>;
    /** Name of the page type. */
    name: Scalars["String"];
    /** List of private metadata items. Requires staff permissions to access. */
    privateMetadata: Array<IMetadataItem>;
    /**
     * A single key from private metadata. Requires staff permissions to access.
     *
     * Tip: Use GraphQL aliases to fetch multiple keys.
     *
     * Added in Saleor 3.3.
     */
    privateMetafield?: Maybe<Scalars["String"]>;
    /**
     * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
     *
     * Added in Saleor 3.3.
     */
    privateMetafields?: Maybe<Scalars["Metadata"]>;
    /** Slug of the page type. */
    slug: Scalars["String"];
  };

/** Represents a type of page. It defines what attributes are available to pages of this type. */
export type IPageTypeAvailableAttributesArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  filter?: InputMaybe<IAttributeFilterInput>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<IAttributeWhereInput>;
};

/** Represents a type of page. It defines what attributes are available to pages of this type. */
export type IPageTypeMetafieldArgs = {
  key: Scalars["String"];
};

/** Represents a type of page. It defines what attributes are available to pages of this type. */
export type IPageTypeMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars["String"]>>;
};

/** Represents a type of page. It defines what attributes are available to pages of this type. */
export type IPageTypePrivateMetafieldArgs = {
  key: Scalars["String"];
};

/** Represents a type of page. It defines what attributes are available to pages of this type. */
export type IPageTypePrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars["String"]>>;
};

/**
 * Delete page types.
 *
 * Requires one of the following permissions: MANAGE_PAGE_TYPES_AND_ATTRIBUTES.
 */
export type IPageTypeBulkDelete = {
  __typename?: "PageTypeBulkDelete";
  /** Returns how many objects were affected. */
  count: Scalars["Int"];
  errors: Array<IPageError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  pageErrors: Array<IPageError>;
};

export type IPageTypeCountableConnection = {
  __typename?: "PageTypeCountableConnection";
  edges: Array<IPageTypeCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: IPageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars["Int"]>;
};

export type IPageTypeCountableEdge = {
  __typename?: "PageTypeCountableEdge";
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node: IPageType;
};

/**
 * Create a new page type.
 *
 * Requires one of the following permissions: MANAGE_PAGE_TYPES_AND_ATTRIBUTES.
 */
export type IPageTypeCreate = {
  __typename?: "PageTypeCreate";
  errors: Array<IPageError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  pageErrors: Array<IPageError>;
  pageType?: Maybe<IPageType>;
};

export type IPageTypeCreateInput = {
  /** List of attribute IDs to be assigned to the page type. */
  addAttributes?: InputMaybe<Array<Scalars["ID"]>>;
  /** Name of the page type. */
  name?: InputMaybe<Scalars["String"]>;
  /** Page type slug. */
  slug?: InputMaybe<Scalars["String"]>;
};

/**
 * Event sent when new page type is created.
 *
 * Added in Saleor 3.5.
 */
export type IPageTypeCreated = IEvent & {
  __typename?: "PageTypeCreated";
  /** Time of the event. */
  issuedAt?: Maybe<Scalars["DateTime"]>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IIssuingPrincipal>;
  /** The page type the event relates to. */
  pageType?: Maybe<IPageType>;
  /** The application receiving the webhook. */
  recipient?: Maybe<IApp>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars["String"]>;
};

/**
 * Delete a page type.
 *
 * Requires one of the following permissions: MANAGE_PAGE_TYPES_AND_ATTRIBUTES.
 */
export type IPageTypeDelete = {
  __typename?: "PageTypeDelete";
  errors: Array<IPageError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  pageErrors: Array<IPageError>;
  pageType?: Maybe<IPageType>;
};

/**
 * Event sent when page type is deleted.
 *
 * Added in Saleor 3.5.
 */
export type IPageTypeDeleted = IEvent & {
  __typename?: "PageTypeDeleted";
  /** Time of the event. */
  issuedAt?: Maybe<Scalars["DateTime"]>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IIssuingPrincipal>;
  /** The page type the event relates to. */
  pageType?: Maybe<IPageType>;
  /** The application receiving the webhook. */
  recipient?: Maybe<IApp>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars["String"]>;
};

export type IPageTypeFilterInput = {
  search?: InputMaybe<Scalars["String"]>;
  slugs?: InputMaybe<Array<Scalars["String"]>>;
};

/**
 * Reorder the attributes of a page type.
 *
 * Requires one of the following permissions: MANAGE_PAGE_TYPES_AND_ATTRIBUTES.
 */
export type IPageTypeReorderAttributes = {
  __typename?: "PageTypeReorderAttributes";
  errors: Array<IPageError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  pageErrors: Array<IPageError>;
  /** Page type from which attributes are reordered. */
  pageType?: Maybe<IPageType>;
};

export type IPageTypeSortField =
  /** Sort page types by name. */
  | "NAME"
  /** Sort page types by slug. */
  | "SLUG";

export type IPageTypeSortingInput = {
  /** Specifies the direction in which to sort page types. */
  direction: IOrderDirection;
  /** Sort page types by the selected field. */
  field: IPageTypeSortField;
};

/**
 * Update page type.
 *
 * Requires one of the following permissions: MANAGE_PAGE_TYPES_AND_ATTRIBUTES.
 */
export type IPageTypeUpdate = {
  __typename?: "PageTypeUpdate";
  errors: Array<IPageError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  pageErrors: Array<IPageError>;
  pageType?: Maybe<IPageType>;
};

export type IPageTypeUpdateInput = {
  /** List of attribute IDs to be assigned to the page type. */
  addAttributes?: InputMaybe<Array<Scalars["ID"]>>;
  /** Name of the page type. */
  name?: InputMaybe<Scalars["String"]>;
  /** List of attribute IDs to be assigned to the page type. */
  removeAttributes?: InputMaybe<Array<Scalars["ID"]>>;
  /** Page type slug. */
  slug?: InputMaybe<Scalars["String"]>;
};

/**
 * Event sent when page type is updated.
 *
 * Added in Saleor 3.5.
 */
export type IPageTypeUpdated = IEvent & {
  __typename?: "PageTypeUpdated";
  /** Time of the event. */
  issuedAt?: Maybe<Scalars["DateTime"]>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IIssuingPrincipal>;
  /** The page type the event relates to. */
  pageType?: Maybe<IPageType>;
  /** The application receiving the webhook. */
  recipient?: Maybe<IApp>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars["String"]>;
};

/**
 * Updates an existing page.
 *
 * Requires one of the following permissions: MANAGE_PAGES.
 */
export type IPageUpdate = {
  __typename?: "PageUpdate";
  errors: Array<IPageError>;
  page?: Maybe<IPage>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  pageErrors: Array<IPageError>;
};

/**
 * Event sent when page is updated.
 *
 * Added in Saleor 3.2.
 */
export type IPageUpdated = IEvent & {
  __typename?: "PageUpdated";
  /** Time of the event. */
  issuedAt?: Maybe<Scalars["DateTime"]>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IIssuingPrincipal>;
  /** The page the event relates to. */
  page?: Maybe<IPage>;
  /** The application receiving the webhook. */
  recipient?: Maybe<IApp>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars["String"]>;
};

/**
 * Change the password of the logged in user.
 *
 * Requires one of the following permissions: AUTHENTICATED_USER.
 */
export type IPasswordChange = {
  __typename?: "PasswordChange";
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<IAccountError>;
  errors: Array<IAccountError>;
  /** A user instance with a new password. */
  user?: Maybe<IUser>;
};

/** Represents a payment of a given type. */
export type IPayment = INode &
  IObjectWithMetadata & {
    __typename?: "Payment";
    /**
     * List of actions that can be performed in the current state of a payment.
     *
     * Requires one of the following permissions: MANAGE_ORDERS.
     */
    actions: Array<IOrderAction>;
    /**
     * Maximum amount of money that can be captured.
     *
     * Requires one of the following permissions: MANAGE_ORDERS.
     */
    availableCaptureAmount?: Maybe<IMoney>;
    /**
     * Maximum amount of money that can be refunded.
     *
     * Requires one of the following permissions: MANAGE_ORDERS.
     */
    availableRefundAmount?: Maybe<IMoney>;
    /** Total amount captured for this payment. */
    capturedAmount?: Maybe<IMoney>;
    /** Internal payment status. */
    chargeStatus: IPaymentChargeStatusEnum;
    /** Checkout associated with a payment. */
    checkout?: Maybe<ICheckout>;
    /** Date and time at which payment was created. */
    created: Scalars["DateTime"];
    /** The details of the card used for this payment. */
    creditCard?: Maybe<ICreditCard>;
    /**
     * IP address of the user who created the payment.
     *
     * Requires one of the following permissions: MANAGE_ORDERS.
     */
    customerIpAddress?: Maybe<Scalars["String"]>;
    /** Payment gateway used for payment. */
    gateway: Scalars["String"];
    /** ID of the payment. */
    id: Scalars["ID"];
    /** Determines if the payment is active or not. */
    isActive: Scalars["Boolean"];
    /** List of public metadata items. Can be accessed without permissions. */
    metadata: Array<IMetadataItem>;
    /**
     * A single key from public metadata.
     *
     * Tip: Use GraphQL aliases to fetch multiple keys.
     *
     * Added in Saleor 3.3.
     */
    metafield?: Maybe<Scalars["String"]>;
    /**
     * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
     *
     * Added in Saleor 3.3.
     */
    metafields?: Maybe<Scalars["Metadata"]>;
    /** Date and time at which payment was modified. */
    modified: Scalars["DateTime"];
    /** Order associated with a payment. */
    order?: Maybe<IOrder>;
    /** Type of method used for payment. */
    paymentMethodType: Scalars["String"];
    /** List of private metadata items. Requires staff permissions to access. */
    privateMetadata: Array<IMetadataItem>;
    /**
     * A single key from private metadata. Requires staff permissions to access.
     *
     * Tip: Use GraphQL aliases to fetch multiple keys.
     *
     * Added in Saleor 3.3.
     */
    privateMetafield?: Maybe<Scalars["String"]>;
    /**
     * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
     *
     * Added in Saleor 3.3.
     */
    privateMetafields?: Maybe<Scalars["Metadata"]>;
    /** Unique token associated with a payment. */
    token: Scalars["String"];
    /** Total amount of the payment. */
    total?: Maybe<IMoney>;
    /**
     * List of all transactions within this payment.
     *
     * Requires one of the following permissions: MANAGE_ORDERS.
     */
    transactions?: Maybe<Array<ITransaction>>;
  };

/** Represents a payment of a given type. */
export type IPaymentMetafieldArgs = {
  key: Scalars["String"];
};

/** Represents a payment of a given type. */
export type IPaymentMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars["String"]>>;
};

/** Represents a payment of a given type. */
export type IPaymentPrivateMetafieldArgs = {
  key: Scalars["String"];
};

/** Represents a payment of a given type. */
export type IPaymentPrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars["String"]>>;
};

/**
 * Authorize payment.
 *
 * Added in Saleor 3.6.
 */
export type IPaymentAuthorize = IEvent & {
  __typename?: "PaymentAuthorize";
  /** Time of the event. */
  issuedAt?: Maybe<Scalars["DateTime"]>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IIssuingPrincipal>;
  /** Look up a payment. */
  payment?: Maybe<IPayment>;
  /** The application receiving the webhook. */
  recipient?: Maybe<IApp>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars["String"]>;
};

/**
 * Captures the authorized payment amount.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type IPaymentCapture = {
  __typename?: "PaymentCapture";
  errors: Array<IPaymentError>;
  /** Updated payment. */
  payment?: Maybe<IPayment>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  paymentErrors: Array<IPaymentError>;
};

/**
 * Capture payment.
 *
 * Added in Saleor 3.6.
 */
export type IPaymentCaptureEvent = IEvent & {
  __typename?: "PaymentCaptureEvent";
  /** Time of the event. */
  issuedAt?: Maybe<Scalars["DateTime"]>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IIssuingPrincipal>;
  /** Look up a payment. */
  payment?: Maybe<IPayment>;
  /** The application receiving the webhook. */
  recipient?: Maybe<IApp>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars["String"]>;
};

/** An enumeration. */
export type IPaymentChargeStatusEnum =
  | "CANCELLED"
  | "FULLY_CHARGED"
  | "FULLY_REFUNDED"
  | "NOT_CHARGED"
  | "PARTIALLY_CHARGED"
  | "PARTIALLY_REFUNDED"
  | "PENDING"
  | "REFUSED";

/** Check payment balance. */
export type IPaymentCheckBalance = {
  __typename?: "PaymentCheckBalance";
  /** Response from the gateway. */
  data?: Maybe<Scalars["JSONString"]>;
  errors: Array<IPaymentError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  paymentErrors: Array<IPaymentError>;
};

export type IPaymentCheckBalanceInput = {
  /** Information about card. */
  card: ICardInput;
  /** Slug of a channel for which the data should be returned. */
  channel: Scalars["String"];
  /** An ID of a payment gateway to check. */
  gatewayId: Scalars["String"];
  /** Payment method name. */
  method: Scalars["String"];
};

/**
 * Confirm payment.
 *
 * Added in Saleor 3.6.
 */
export type IPaymentConfirmEvent = IEvent & {
  __typename?: "PaymentConfirmEvent";
  /** Time of the event. */
  issuedAt?: Maybe<Scalars["DateTime"]>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IIssuingPrincipal>;
  /** Look up a payment. */
  payment?: Maybe<IPayment>;
  /** The application receiving the webhook. */
  recipient?: Maybe<IApp>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars["String"]>;
};

export type IPaymentCountableConnection = {
  __typename?: "PaymentCountableConnection";
  edges: Array<IPaymentCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: IPageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars["Int"]>;
};

export type IPaymentCountableEdge = {
  __typename?: "PaymentCountableEdge";
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node: IPayment;
};

export type IPaymentError = {
  __typename?: "PaymentError";
  /** The error code. */
  code: IPaymentErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars["String"]>;
  /** The error message. */
  message?: Maybe<Scalars["String"]>;
  /** List of variant IDs which causes the error. */
  variants?: Maybe<Array<Scalars["ID"]>>;
};

/** An enumeration. */
export type IPaymentErrorCode =
  | "BALANCE_CHECK_ERROR"
  | "BILLING_ADDRESS_NOT_SET"
  | "CHANNEL_INACTIVE"
  | "CHECKOUT_EMAIL_NOT_SET"
  | "GRAPHQL_ERROR"
  | "INVALID"
  | "INVALID_SHIPPING_METHOD"
  | "NOT_FOUND"
  | "NOT_SUPPORTED_GATEWAY"
  | "NO_CHECKOUT_LINES"
  | "PARTIAL_PAYMENT_NOT_ALLOWED"
  | "PAYMENT_ERROR"
  | "REQUIRED"
  | "SHIPPING_ADDRESS_NOT_SET"
  | "SHIPPING_METHOD_NOT_SET"
  | "UNAVAILABLE_VARIANT_IN_CHANNEL"
  | "UNIQUE";

export type IPaymentFilterInput = {
  checkouts?: InputMaybe<Array<Scalars["ID"]>>;
  /**
   * Filter by ids.
   *
   * Added in Saleor 3.8.
   */
  ids?: InputMaybe<Array<Scalars["ID"]>>;
};

/** Available payment gateway backend with configuration necessary to setup client. */
export type IPaymentGateway = {
  __typename?: "PaymentGateway";
  /** Payment gateway client configuration. */
  config: Array<IGatewayConfigLine>;
  /** Payment gateway supported currencies. */
  currencies: Array<Scalars["String"]>;
  /** Payment gateway ID. */
  id: Scalars["ID"];
  /** Payment gateway name. */
  name: Scalars["String"];
};

export type IPaymentGatewayConfig = {
  __typename?: "PaymentGatewayConfig";
  /** The JSON data required to initialize the payment gateway. */
  data?: Maybe<Scalars["JSON"]>;
  errors?: Maybe<Array<IPaymentGatewayConfigError>>;
  /** The app identifier. */
  id: Scalars["String"];
};

export type IPaymentGatewayConfigError = {
  __typename?: "PaymentGatewayConfigError";
  /** The error code. */
  code: IPaymentGatewayConfigErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars["String"]>;
  /** The error message. */
  message?: Maybe<Scalars["String"]>;
};

/** An enumeration. */
export type IPaymentGatewayConfigErrorCode =
  | "GRAPHQL_ERROR"
  | "INVALID"
  | "NOT_FOUND";

/**
 * Initializes a payment gateway session. It triggers the webhook `PAYMENT_GATEWAY_INITIALIZE_SESSION`, to the requested `paymentGateways`. If `paymentGateways` is not provided, the webhook will be send to all subscribed payment gateways.
 *
 * Added in Saleor 3.13.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type IPaymentGatewayInitialize = {
  __typename?: "PaymentGatewayInitialize";
  errors: Array<IPaymentGatewayInitializeError>;
  /** List of payment gateway configurations. */
  gatewayConfigs?: Maybe<Array<IPaymentGatewayConfig>>;
};

export type IPaymentGatewayInitializeError = {
  __typename?: "PaymentGatewayInitializeError";
  /** The error code. */
  code: IPaymentGatewayInitializeErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars["String"]>;
  /** The error message. */
  message?: Maybe<Scalars["String"]>;
};

/** An enumeration. */
export type IPaymentGatewayInitializeErrorCode =
  | "GRAPHQL_ERROR"
  | "INVALID"
  | "NOT_FOUND";

/**
 * Event sent when user wants to initialize the payment gateway.
 *
 * Added in Saleor 3.13.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type IPaymentGatewayInitializeSession = IEvent & {
  __typename?: "PaymentGatewayInitializeSession";
  /** Amount requested for initializing the payment gateway. */
  amount?: Maybe<Scalars["PositiveDecimal"]>;
  /** Payment gateway data in JSON format, recieved from storefront. */
  data?: Maybe<Scalars["JSON"]>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars["DateTime"]>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IIssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<IApp>;
  /** Checkout or order */
  sourceObject: IOrderOrCheckout;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars["String"]>;
};

export type IPaymentGatewayToInitialize = {
  /** The data that will be passed to the payment gateway. */
  data?: InputMaybe<Scalars["JSON"]>;
  /** The identifier of the payment gateway app to initialize. */
  id: Scalars["String"];
};

/** Initializes payment process when it is required by gateway. */
export type IPaymentInitialize = {
  __typename?: "PaymentInitialize";
  errors: Array<IPaymentError>;
  /** Payment that was initialized. */
  initializedPayment?: Maybe<IPaymentInitialized>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  paymentErrors: Array<IPaymentError>;
};

/** Server-side data generated by a payment gateway. Optional step when the payment provider requires an additional action to initialize payment session. */
export type IPaymentInitialized = {
  __typename?: "PaymentInitialized";
  /** Initialized data by gateway. */
  data?: Maybe<Scalars["JSONString"]>;
  /** ID of a payment gateway. */
  gateway: Scalars["String"];
  /** Payment gateway name. */
  name: Scalars["String"];
};

export type IPaymentInput = {
  /** Total amount of the transaction, including all taxes and discounts. If no amount is provided, the checkout total will be used. */
  amount?: InputMaybe<Scalars["PositiveDecimal"]>;
  /** A gateway to use with that payment. */
  gateway: Scalars["String"];
  /**
   * User public metadata.
   *
   * Added in Saleor 3.1.
   */
  metadata?: InputMaybe<Array<IMetadataInput>>;
  /** URL of a storefront view where user should be redirected after requiring additional actions. Payment with additional actions will not be finished if this field is not provided. */
  returnUrl?: InputMaybe<Scalars["String"]>;
  /**
   * Payment store type.
   *
   * Added in Saleor 3.1.
   */
  storePaymentMethod?: InputMaybe<IStorePaymentMethodEnum>;
  /** Client-side generated payment token, representing customer's billing data in a secure manner. */
  token?: InputMaybe<Scalars["String"]>;
};

/**
 * List payment gateways.
 *
 * Added in Saleor 3.6.
 */
export type IPaymentListGateways = IEvent & {
  __typename?: "PaymentListGateways";
  /** The checkout the event relates to. */
  checkout?: Maybe<ICheckout>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars["DateTime"]>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IIssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<IApp>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars["String"]>;
};

/**
 * Process payment.
 *
 * Added in Saleor 3.6.
 */
export type IPaymentProcessEvent = IEvent & {
  __typename?: "PaymentProcessEvent";
  /** Time of the event. */
  issuedAt?: Maybe<Scalars["DateTime"]>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IIssuingPrincipal>;
  /** Look up a payment. */
  payment?: Maybe<IPayment>;
  /** The application receiving the webhook. */
  recipient?: Maybe<IApp>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars["String"]>;
};

/**
 * Refunds the captured payment amount.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type IPaymentRefund = {
  __typename?: "PaymentRefund";
  errors: Array<IPaymentError>;
  /** Updated payment. */
  payment?: Maybe<IPayment>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  paymentErrors: Array<IPaymentError>;
};

/**
 * Refund payment.
 *
 * Added in Saleor 3.6.
 */
export type IPaymentRefundEvent = IEvent & {
  __typename?: "PaymentRefundEvent";
  /** Time of the event. */
  issuedAt?: Maybe<Scalars["DateTime"]>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IIssuingPrincipal>;
  /** Look up a payment. */
  payment?: Maybe<IPayment>;
  /** The application receiving the webhook. */
  recipient?: Maybe<IApp>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars["String"]>;
};

/** Represents a payment source stored for user in payment gateway, such as credit card. */
export type IPaymentSource = {
  __typename?: "PaymentSource";
  /** Stored credit card details if available. */
  creditCardInfo?: Maybe<ICreditCard>;
  /** Payment gateway name. */
  gateway: Scalars["String"];
  /**
   * List of public metadata items.
   *
   * Added in Saleor 3.1.
   *
   * Can be accessed without permissions.
   */
  metadata: Array<IMetadataItem>;
  /** ID of stored payment method. */
  paymentMethodId?: Maybe<Scalars["String"]>;
};

/**
 * Voids the authorized payment.
 *
 * Requires one of the following permissions: MANAGE_ORDERS.
 */
export type IPaymentVoid = {
  __typename?: "PaymentVoid";
  errors: Array<IPaymentError>;
  /** Updated payment. */
  payment?: Maybe<IPayment>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  paymentErrors: Array<IPaymentError>;
};

/**
 * Void payment.
 *
 * Added in Saleor 3.6.
 */
export type IPaymentVoidEvent = IEvent & {
  __typename?: "PaymentVoidEvent";
  /** Time of the event. */
  issuedAt?: Maybe<Scalars["DateTime"]>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IIssuingPrincipal>;
  /** Look up a payment. */
  payment?: Maybe<IPayment>;
  /** The application receiving the webhook. */
  recipient?: Maybe<IApp>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars["String"]>;
};

/** Represents a permission object in a friendly form. */
export type IPermission = {
  __typename?: "Permission";
  /** Internal code for permission. */
  code: IPermissionEnum;
  /** Describe action(s) allowed to do by permission. */
  name: Scalars["String"];
};

/** An enumeration. */
export type IPermissionEnum =
  | "HANDLE_CHECKOUTS"
  | "HANDLE_PAYMENTS"
  | "HANDLE_TAXES"
  | "IMPERSONATE_USER"
  | "MANAGE_APPS"
  | "MANAGE_CHANNELS"
  | "MANAGE_CHECKOUTS"
  | "MANAGE_DISCOUNTS"
  | "MANAGE_GIFT_CARD"
  | "MANAGE_MENUS"
  | "MANAGE_OBSERVABILITY"
  | "MANAGE_ORDERS"
  | "MANAGE_ORDERS_IMPORT"
  | "MANAGE_PAGES"
  | "MANAGE_PAGE_TYPES_AND_ATTRIBUTES"
  | "MANAGE_PLUGINS"
  | "MANAGE_PRODUCTS"
  | "MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES"
  | "MANAGE_SETTINGS"
  | "MANAGE_SHIPPING"
  | "MANAGE_STAFF"
  | "MANAGE_TAXES"
  | "MANAGE_TRANSLATIONS"
  | "MANAGE_USERS";

/**
 * Create new permission group. Apps are not allowed to perform this mutation.
 *
 * Requires one of the following permissions: MANAGE_STAFF.
 *
 * Triggers the following webhook events:
 * - PERMISSION_GROUP_CREATED (async)
 */
export type IPermissionGroupCreate = {
  __typename?: "PermissionGroupCreate";
  errors: Array<IPermissionGroupError>;
  group?: Maybe<IGroup>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  permissionGroupErrors: Array<IPermissionGroupError>;
};

export type IPermissionGroupCreateInput = {
  /**
   * List of channels to assign to this group.
   *
   * Added in Saleor 3.14.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  addChannels?: InputMaybe<Array<Scalars["ID"]>>;
  /** List of permission code names to assign to this group. */
  addPermissions?: InputMaybe<Array<IPermissionEnum>>;
  /** List of users to assign to this group. */
  addUsers?: InputMaybe<Array<Scalars["ID"]>>;
  /** Group name. */
  name: Scalars["String"];
  /**
   * Determine if the group has restricted access to channels.  DEFAULT: False
   *
   * Added in Saleor 3.14.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  restrictedAccessToChannels?: InputMaybe<Scalars["Boolean"]>;
};

/**
 * Event sent when new permission group is created.
 *
 * Added in Saleor 3.6.
 */
export type IPermissionGroupCreated = IEvent & {
  __typename?: "PermissionGroupCreated";
  /** Time of the event. */
  issuedAt?: Maybe<Scalars["DateTime"]>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IIssuingPrincipal>;
  /** The permission group the event relates to. */
  permissionGroup?: Maybe<IGroup>;
  /** The application receiving the webhook. */
  recipient?: Maybe<IApp>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars["String"]>;
};

/**
 * Delete permission group. Apps are not allowed to perform this mutation.
 *
 * Requires one of the following permissions: MANAGE_STAFF.
 *
 * Triggers the following webhook events:
 * - PERMISSION_GROUP_DELETED (async)
 */
export type IPermissionGroupDelete = {
  __typename?: "PermissionGroupDelete";
  errors: Array<IPermissionGroupError>;
  group?: Maybe<IGroup>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  permissionGroupErrors: Array<IPermissionGroupError>;
};

/**
 * Event sent when permission group is deleted.
 *
 * Added in Saleor 3.6.
 */
export type IPermissionGroupDeleted = IEvent & {
  __typename?: "PermissionGroupDeleted";
  /** Time of the event. */
  issuedAt?: Maybe<Scalars["DateTime"]>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IIssuingPrincipal>;
  /** The permission group the event relates to. */
  permissionGroup?: Maybe<IGroup>;
  /** The application receiving the webhook. */
  recipient?: Maybe<IApp>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars["String"]>;
};

export type IPermissionGroupError = {
  __typename?: "PermissionGroupError";
  /** List of chnnels IDs which causes the error. */
  channels?: Maybe<Array<Scalars["ID"]>>;
  /** The error code. */
  code: IPermissionGroupErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars["String"]>;
  /** The error message. */
  message?: Maybe<Scalars["String"]>;
  /** List of permissions which causes the error. */
  permissions?: Maybe<Array<IPermissionEnum>>;
  /** List of user IDs which causes the error. */
  users?: Maybe<Array<Scalars["ID"]>>;
};

/** An enumeration. */
export type IPermissionGroupErrorCode =
  | "ASSIGN_NON_STAFF_MEMBER"
  | "CANNOT_REMOVE_FROM_LAST_GROUP"
  | "DUPLICATED_INPUT_ITEM"
  | "LEFT_NOT_MANAGEABLE_PERMISSION"
  | "OUT_OF_SCOPE_CHANNEL"
  | "OUT_OF_SCOPE_PERMISSION"
  | "OUT_OF_SCOPE_USER"
  | "REQUIRED"
  | "UNIQUE";

export type IPermissionGroupFilterInput = {
  ids?: InputMaybe<Array<Scalars["ID"]>>;
  search?: InputMaybe<Scalars["String"]>;
};

/** Sorting options for permission groups. */
export type IPermissionGroupSortField =
  /** Sort permission group accounts by name. */
  "NAME";

export type IPermissionGroupSortingInput = {
  /** Specifies the direction in which to sort permission group. */
  direction: IOrderDirection;
  /** Sort permission group by the selected field. */
  field: IPermissionGroupSortField;
};

/**
 * Update permission group. Apps are not allowed to perform this mutation.
 *
 * Requires one of the following permissions: MANAGE_STAFF.
 *
 * Triggers the following webhook events:
 * - PERMISSION_GROUP_UPDATED (async)
 */
export type IPermissionGroupUpdate = {
  __typename?: "PermissionGroupUpdate";
  errors: Array<IPermissionGroupError>;
  group?: Maybe<IGroup>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  permissionGroupErrors: Array<IPermissionGroupError>;
};

export type IPermissionGroupUpdateInput = {
  /**
   * List of channels to assign to this group.
   *
   * Added in Saleor 3.14.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  addChannels?: InputMaybe<Array<Scalars["ID"]>>;
  /** List of permission code names to assign to this group. */
  addPermissions?: InputMaybe<Array<IPermissionEnum>>;
  /** List of users to assign to this group. */
  addUsers?: InputMaybe<Array<Scalars["ID"]>>;
  /** Group name. */
  name?: InputMaybe<Scalars["String"]>;
  /**
   * List of channels to unassign from this group.
   *
   * Added in Saleor 3.14.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  removeChannels?: InputMaybe<Array<Scalars["ID"]>>;
  /** List of permission code names to unassign from this group. */
  removePermissions?: InputMaybe<Array<IPermissionEnum>>;
  /** List of users to unassign from this group. */
  removeUsers?: InputMaybe<Array<Scalars["ID"]>>;
  /**
   * Determine if the group has restricted access to channels.
   *
   * Added in Saleor 3.14.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  restrictedAccessToChannels?: InputMaybe<Scalars["Boolean"]>;
};

/**
 * Event sent when permission group is updated.
 *
 * Added in Saleor 3.6.
 */
export type IPermissionGroupUpdated = IEvent & {
  __typename?: "PermissionGroupUpdated";
  /** Time of the event. */
  issuedAt?: Maybe<Scalars["DateTime"]>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IIssuingPrincipal>;
  /** The permission group the event relates to. */
  permissionGroup?: Maybe<IGroup>;
  /** The application receiving the webhook. */
  recipient?: Maybe<IApp>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars["String"]>;
};

/** Plugin. */
export type IPlugin = {
  __typename?: "Plugin";
  /** Channel-specific plugin configuration. */
  channelConfigurations: Array<IPluginConfiguration>;
  /** Description of the plugin. */
  description: Scalars["String"];
  /** Global configuration of the plugin (not channel-specific). */
  globalConfiguration?: Maybe<IPluginConfiguration>;
  /** Identifier of the plugin. */
  id: Scalars["ID"];
  /** Name of the plugin. */
  name: Scalars["String"];
};

/** Stores information about a configuration of plugin. */
export type IPluginConfiguration = {
  __typename?: "PluginConfiguration";
  /** Determines if plugin is active or not. */
  active: Scalars["Boolean"];
  /** The channel to which the plugin configuration is assigned to. */
  channel?: Maybe<IChannel>;
  /** Configuration of the plugin. */
  configuration?: Maybe<Array<IConfigurationItem>>;
};

export type IPluginConfigurationType = "GLOBAL" | "PER_CHANNEL";

export type IPluginCountableConnection = {
  __typename?: "PluginCountableConnection";
  edges: Array<IPluginCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: IPageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars["Int"]>;
};

export type IPluginCountableEdge = {
  __typename?: "PluginCountableEdge";
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node: IPlugin;
};

export type IPluginError = {
  __typename?: "PluginError";
  /** The error code. */
  code: IPluginErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars["String"]>;
  /** The error message. */
  message?: Maybe<Scalars["String"]>;
};

/** An enumeration. */
export type IPluginErrorCode =
  | "GRAPHQL_ERROR"
  | "INVALID"
  | "NOT_FOUND"
  | "PLUGIN_MISCONFIGURED"
  | "REQUIRED"
  | "UNIQUE";

export type IPluginFilterInput = {
  search?: InputMaybe<Scalars["String"]>;
  statusInChannels?: InputMaybe<IPluginStatusInChannelsInput>;
  type?: InputMaybe<IPluginConfigurationType>;
};

export type IPluginSortField = "IS_ACTIVE" | "NAME";

export type IPluginSortingInput = {
  /** Specifies the direction in which to sort plugins. */
  direction: IOrderDirection;
  /** Sort plugins by the selected field. */
  field: IPluginSortField;
};

export type IPluginStatusInChannelsInput = {
  active: Scalars["Boolean"];
  channels: Array<Scalars["ID"]>;
};

/**
 * Update plugin configuration.
 *
 * Requires one of the following permissions: MANAGE_PLUGINS.
 */
export type IPluginUpdate = {
  __typename?: "PluginUpdate";
  errors: Array<IPluginError>;
  plugin?: Maybe<IPlugin>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  pluginsErrors: Array<IPluginError>;
};

export type IPluginUpdateInput = {
  /** Indicates whether the plugin should be enabled. */
  active?: InputMaybe<Scalars["Boolean"]>;
  /** Configuration of the plugin. */
  configuration?: InputMaybe<Array<IConfigurationItemInput>>;
};

/** An enumeration. */
export type IPostalCodeRuleInclusionTypeEnum = "EXCLUDE" | "INCLUDE";

/** Represents preorder settings for product variant. */
export type IPreorderData = {
  __typename?: "PreorderData";
  /** Preorder end date. */
  endDate?: Maybe<Scalars["DateTime"]>;
  /**
   * Total number of sold product variant during preorder.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  globalSoldUnits: Scalars["Int"];
  /**
   * The global preorder threshold for product variant.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  globalThreshold?: Maybe<Scalars["Int"]>;
};

export type IPreorderSettingsInput = {
  /** The end date for preorder. */
  endDate?: InputMaybe<Scalars["DateTime"]>;
  /** The global threshold for preorder variant. */
  globalThreshold?: InputMaybe<Scalars["Int"]>;
};

/** Represents preorder variant data for channel. */
export type IPreorderThreshold = {
  __typename?: "PreorderThreshold";
  /** Preorder threshold for product variant in this channel. */
  quantity?: Maybe<Scalars["Int"]>;
  /** Number of sold product variant in this channel. */
  soldUnits: Scalars["Int"];
};

export type IPriceInput = {
  /** Amount of money. */
  amount: Scalars["PositiveDecimal"];
  /** Currency code. */
  currency: Scalars["String"];
};

export type IPriceRangeInput = {
  /** Price greater than or equal to. */
  gte?: InputMaybe<Scalars["Float"]>;
  /** Price less than or equal to. */
  lte?: InputMaybe<Scalars["Float"]>;
};

/** Represents an individual item for sale in the storefront. */
export type IProduct = INode &
  IObjectWithMetadata & {
    __typename?: "Product";
    /**
     * Get a single attribute attached to product by attribute slug.
     *
     * Added in Saleor 3.9.
     */
    attribute?: Maybe<ISelectedAttribute>;
    /** List of attributes assigned to this product. */
    attributes: Array<ISelectedAttribute>;
    /**
     * Date when product is available for purchase.
     * @deprecated This field will be removed in Saleor 4.0. Use the `availableForPurchaseAt` field to fetch the available for purchase date.
     */
    availableForPurchase?: Maybe<Scalars["Date"]>;
    /** Date when product is available for purchase. */
    availableForPurchaseAt?: Maybe<Scalars["DateTime"]>;
    category?: Maybe<ICategory>;
    /** Channel given to retrieve this product. Also used by federation gateway to resolve this object in a federated query. */
    channel?: Maybe<Scalars["String"]>;
    /**
     * List of availability in channels for the product.
     *
     * Requires one of the following permissions: MANAGE_PRODUCTS.
     */
    channelListings?: Maybe<Array<IProductChannelListing>>;
    /** @deprecated This field will be removed in Saleor 4.0. Use `Channel.taxConfiguration` field to determine whether tax collection is enabled. */
    chargeTaxes: Scalars["Boolean"];
    /** List of collections for the product. Requires the following permissions to include the unpublished items: MANAGE_ORDERS, MANAGE_DISCOUNTS, MANAGE_PRODUCTS. */
    collections?: Maybe<Array<ICollection>>;
    /** The date and time when the product was created. */
    created: Scalars["DateTime"];
    /** Default variant of the product. */
    defaultVariant?: Maybe<IProductVariant>;
    /**
     * Description of the product.
     *
     * Rich text format. For reference see https://editorjs.io/
     */
    description?: Maybe<Scalars["JSONString"]>;
    /**
     * Description of the product.
     *
     * Rich text format. For reference see https://editorjs.io/
     * @deprecated This field will be removed in Saleor 4.0. Use the `description` field instead.
     */
    descriptionJson?: Maybe<Scalars["JSONString"]>;
    /**
     * External ID of this product.
     *
     * Added in Saleor 3.10.
     */
    externalReference?: Maybe<Scalars["String"]>;
    /** The ID of the product. */
    id: Scalars["ID"];
    /**
     * Get a single product image by ID.
     * @deprecated This field will be removed in Saleor 4.0. Use the `mediaById` field instead.
     */
    imageById?: Maybe<IProductImage>;
    /**
     * List of images for the product.
     * @deprecated This field will be removed in Saleor 4.0. Use the `media` field instead.
     */
    images?: Maybe<Array<IProductImage>>;
    /** Whether the product is in stock, set as available for purchase in the given channel, and published. */
    isAvailable?: Maybe<Scalars["Boolean"]>;
    /** Refers to a state that can be set by admins to control whether a product is available for purchase in storefronts. This does not guarantee the availability of stock. When set to `False`, this product is still visible to customers, but it cannot be purchased. */
    isAvailableForPurchase?: Maybe<Scalars["Boolean"]>;
    /** List of media for the product. */
    media?: Maybe<Array<IProductMedia>>;
    /** Get a single product media by ID. */
    mediaById?: Maybe<IProductMedia>;
    /** List of public metadata items. Can be accessed without permissions. */
    metadata: Array<IMetadataItem>;
    /**
     * A single key from public metadata.
     *
     * Tip: Use GraphQL aliases to fetch multiple keys.
     *
     * Added in Saleor 3.3.
     */
    metafield?: Maybe<Scalars["String"]>;
    /**
     * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
     *
     * Added in Saleor 3.3.
     */
    metafields?: Maybe<Scalars["Metadata"]>;
    /** SEO description of the product. */
    name: Scalars["String"];
    /** Lists the storefront product's pricing, the current price and discounts, only meant for displaying. */
    pricing?: Maybe<IProductPricingInfo>;
    /** List of private metadata items. Requires staff permissions to access. */
    privateMetadata: Array<IMetadataItem>;
    /**
     * A single key from private metadata. Requires staff permissions to access.
     *
     * Tip: Use GraphQL aliases to fetch multiple keys.
     *
     * Added in Saleor 3.3.
     */
    privateMetafield?: Maybe<Scalars["String"]>;
    /**
     * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
     *
     * Added in Saleor 3.3.
     */
    privateMetafields?: Maybe<Scalars["Metadata"]>;
    /** Type of the product. */
    productType: IProductType;
    /** Rating of the product. */
    rating?: Maybe<Scalars["Float"]>;
    /** SEO description of the product. */
    seoDescription?: Maybe<Scalars["String"]>;
    /** SEO title of the product. */
    seoTitle?: Maybe<Scalars["String"]>;
    /** Slug of the product. */
    slug: Scalars["String"];
    /**
     * Tax class assigned to this product type. All products of this product type use this tax class, unless it's overridden in the `Product` type.
     *
     * Requires one of the following permissions: AUTHENTICATED_STAFF_USER, AUTHENTICATED_APP.
     */
    taxClass?: Maybe<ITaxClass>;
    /**
     * A type of tax. Assigned by enabled tax gateway
     * @deprecated This field will be removed in Saleor 4.0. Use `taxClass` field instead.
     */
    taxType?: Maybe<ITaxType>;
    /** Thumbnail of the product. */
    thumbnail?: Maybe<IImage>;
    /** Returns translated product fields for the given language code. */
    translation?: Maybe<IProductTranslation>;
    /** The date and time when the product was last updated. */
    updatedAt: Scalars["DateTime"];
    /**
     * Get a single variant by SKU or ID.
     *
     * Added in Saleor 3.9.
     * @deprecated This field will be removed in Saleor 4.0. Use top-level `variant` query.
     */
    variant?: Maybe<IProductVariant>;
    /** List of variants for the product. Requires the following permissions to include the unpublished items: MANAGE_ORDERS, MANAGE_DISCOUNTS, MANAGE_PRODUCTS. */
    variants?: Maybe<Array<IProductVariant>>;
    /** Weight of the product. */
    weight?: Maybe<IWeight>;
  };

/** Represents an individual item for sale in the storefront. */
export type IProductAttributeArgs = {
  slug: Scalars["String"];
};

/** Represents an individual item for sale in the storefront. */
export type IProductImageByIdArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

/** Represents an individual item for sale in the storefront. */
export type IProductIsAvailableArgs = {
  address?: InputMaybe<IAddressInput>;
};

/** Represents an individual item for sale in the storefront. */
export type IProductMediaArgs = {
  sortBy?: InputMaybe<IMediaSortingInput>;
};

/** Represents an individual item for sale in the storefront. */
export type IProductMediaByIdArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

/** Represents an individual item for sale in the storefront. */
export type IProductMetafieldArgs = {
  key: Scalars["String"];
};

/** Represents an individual item for sale in the storefront. */
export type IProductMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars["String"]>>;
};

/** Represents an individual item for sale in the storefront. */
export type IProductPricingArgs = {
  address?: InputMaybe<IAddressInput>;
};

/** Represents an individual item for sale in the storefront. */
export type IProductPrivateMetafieldArgs = {
  key: Scalars["String"];
};

/** Represents an individual item for sale in the storefront. */
export type IProductPrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars["String"]>>;
};

/** Represents an individual item for sale in the storefront. */
export type IProductThumbnailArgs = {
  format?: InputMaybe<IThumbnailFormatEnum>;
  size?: InputMaybe<Scalars["Int"]>;
};

/** Represents an individual item for sale in the storefront. */
export type IProductTranslationArgs = {
  languageCode: ILanguageCodeEnum;
};

/** Represents an individual item for sale in the storefront. */
export type IProductVariantArgs = {
  id?: InputMaybe<Scalars["ID"]>;
  sku?: InputMaybe<Scalars["String"]>;
};

/**
 * Assign attributes to a given product type.
 *
 * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
 */
export type IProductAttributeAssign = {
  __typename?: "ProductAttributeAssign";
  errors: Array<IProductError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<IProductError>;
  /** The updated product type. */
  productType?: Maybe<IProductType>;
};

export type IProductAttributeAssignInput = {
  /** The ID of the attribute to assign. */
  id: Scalars["ID"];
  /** The attribute type to be assigned as. */
  type: IProductAttributeType;
  /**
   * Whether attribute is allowed in variant selection. Allowed types are: ['dropdown', 'boolean', 'swatch', 'numeric'].
   *
   * Added in Saleor 3.1.
   */
  variantSelection?: InputMaybe<Scalars["Boolean"]>;
};

/**
 * Update attributes assigned to product variant for given product type.
 *
 * Added in Saleor 3.1.
 *
 * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
 */
export type IProductAttributeAssignmentUpdate = {
  __typename?: "ProductAttributeAssignmentUpdate";
  errors: Array<IProductError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<IProductError>;
  /** The updated product type. */
  productType?: Maybe<IProductType>;
};

export type IProductAttributeAssignmentUpdateInput = {
  /** The ID of the attribute to assign. */
  id: Scalars["ID"];
  /**
   * Whether attribute is allowed in variant selection. Allowed types are: ['dropdown', 'boolean', 'swatch', 'numeric'].
   *
   * Added in Saleor 3.1.
   */
  variantSelection: Scalars["Boolean"];
};

export type IProductAttributeType = "PRODUCT" | "VARIANT";

/**
 * Un-assign attributes from a given product type.
 *
 * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
 */
export type IProductAttributeUnassign = {
  __typename?: "ProductAttributeUnassign";
  errors: Array<IProductError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<IProductError>;
  /** The updated product type. */
  productType?: Maybe<IProductType>;
};

/**
 * Creates products.
 *
 * Added in Saleor 3.13.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type IProductBulkCreate = {
  __typename?: "ProductBulkCreate";
  /** Returns how many objects were created. */
  count: Scalars["Int"];
  errors: Array<IProductBulkCreateError>;
  /** List of the created products. */
  results: Array<IProductBulkResult>;
};

export type IProductBulkCreateError = {
  __typename?: "ProductBulkCreateError";
  /** List of attributes IDs which causes the error. */
  attributes?: Maybe<Array<Scalars["ID"]>>;
  /** List of channel IDs which causes the error. */
  channels?: Maybe<Array<Scalars["ID"]>>;
  /** The error code. */
  code: IProductBulkCreateErrorCode;
  /** The error message. */
  message?: Maybe<Scalars["String"]>;
  /** Path to field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  path?: Maybe<Scalars["String"]>;
  /** List of attribute values IDs which causes the error. */
  values?: Maybe<Array<Scalars["ID"]>>;
  /** List of warehouse IDs which causes the error. */
  warehouses?: Maybe<Array<Scalars["ID"]>>;
};

/** An enumeration. */
export type IProductBulkCreateErrorCode =
  | "ATTRIBUTE_ALREADY_ASSIGNED"
  | "ATTRIBUTE_CANNOT_BE_ASSIGNED"
  | "ATTRIBUTE_VARIANTS_DISABLED"
  | "BLANK"
  | "DUPLICATED_INPUT_ITEM"
  | "GRAPHQL_ERROR"
  | "INVALID"
  | "INVALID_PRICE"
  | "MAX_LENGTH"
  | "NOT_FOUND"
  | "PRODUCT_NOT_ASSIGNED_TO_CHANNEL"
  | "PRODUCT_WITHOUT_CATEGORY"
  | "REQUIRED"
  | "UNIQUE"
  | "UNSUPPORTED_MEDIA_PROVIDER";

export type IProductBulkCreateInput = {
  /** List of attributes. */
  attributes?: InputMaybe<Array<IAttributeValueInput>>;
  /** ID of the product's category. */
  category?: InputMaybe<Scalars["ID"]>;
  /** List of channels in which the product is available. */
  channelListings?: InputMaybe<Array<IProductChannelListingCreateInput>>;
  /**
   * Determine if taxes are being charged for the product.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Use `Channel.taxConfiguration` to configure whether tax collection is enabled.
   */
  chargeTaxes?: InputMaybe<Scalars["Boolean"]>;
  /** List of IDs of collections that the product belongs to. */
  collections?: InputMaybe<Array<Scalars["ID"]>>;
  /**
   * Product description.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  description?: InputMaybe<Scalars["JSONString"]>;
  /** External ID of this product. */
  externalReference?: InputMaybe<Scalars["String"]>;
  /** List of media inputs associated with the product. */
  media?: InputMaybe<Array<IMediaInput>>;
  /** Fields required to update the product metadata. */
  metadata?: InputMaybe<Array<IMetadataInput>>;
  /** Product name. */
  name?: InputMaybe<Scalars["String"]>;
  /** Fields required to update the product private metadata. */
  privateMetadata?: InputMaybe<Array<IMetadataInput>>;
  /** ID of the type that product belongs to. */
  productType: Scalars["ID"];
  /** Defines the product rating value. */
  rating?: InputMaybe<Scalars["Float"]>;
  /** Search engine optimization fields. */
  seo?: InputMaybe<ISeoInput>;
  /** Product slug. */
  slug?: InputMaybe<Scalars["String"]>;
  /** ID of a tax class to assign to this product. If not provided, product will use the tax class which is assigned to the product type. */
  taxClass?: InputMaybe<Scalars["ID"]>;
  /**
   * Tax rate for enabled tax gateway.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Use tax classes to control the tax calculation for a product. If taxCode is provided, Saleor will try to find a tax class with given code (codes are stored in metadata) and assign it. If no tax class is found, it would be created and assigned.
   */
  taxCode?: InputMaybe<Scalars["String"]>;
  /** Input list of product variants to create. */
  variants?: InputMaybe<Array<IProductVariantBulkCreateInput>>;
  /** Weight of the Product. */
  weight?: InputMaybe<Scalars["WeightScalar"]>;
};

/**
 * Deletes products.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type IProductBulkDelete = {
  __typename?: "ProductBulkDelete";
  /** Returns how many objects were affected. */
  count: Scalars["Int"];
  errors: Array<IProductError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<IProductError>;
};

export type IProductBulkResult = {
  __typename?: "ProductBulkResult";
  /** List of errors occurred on create attempt. */
  errors?: Maybe<Array<IProductBulkCreateError>>;
  /** Product data. */
  product?: Maybe<IProduct>;
};

/**
 * Creates/updates translations for products.
 *
 * Added in Saleor 3.15.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 *
 * Requires one of the following permissions: MANAGE_TRANSLATIONS.
 *
 * Triggers the following webhook events:
 * - TRANSLATION_CREATED (async): Called when a translation was created.
 * - TRANSLATION_UPDATED (async): Called when a translation was updated.
 */
export type IProductBulkTranslate = {
  __typename?: "ProductBulkTranslate";
  /** Returns how many translations were created/updated. */
  count: Scalars["Int"];
  errors: Array<IProductBulkTranslateError>;
  /** List of the translations. */
  results: Array<IProductBulkTranslateResult>;
};

export type IProductBulkTranslateError = {
  __typename?: "ProductBulkTranslateError";
  /** The error code. */
  code: IProductTranslateErrorCode;
  /** The error message. */
  message?: Maybe<Scalars["String"]>;
  /** Path to field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  path?: Maybe<Scalars["String"]>;
};

export type IProductBulkTranslateInput = {
  /** External reference of an product. */
  externalReference?: InputMaybe<Scalars["String"]>;
  /** Product ID. */
  id?: InputMaybe<Scalars["ID"]>;
  /** Translation language code. */
  languageCode: ILanguageCodeEnum;
  /** Translation fields. */
  translationFields: ITranslationInput;
};

export type IProductBulkTranslateResult = {
  __typename?: "ProductBulkTranslateResult";
  /** List of errors occurred on translation attempt. */
  errors?: Maybe<Array<IProductBulkTranslateError>>;
  /** Product translation data. */
  translation?: Maybe<IProductTranslation>;
};

/** Represents product channel listing. */
export type IProductChannelListing = INode & {
  __typename?: "ProductChannelListing";
  /** @deprecated This field will be removed in Saleor 4.0. Use the `availableForPurchaseAt` field to fetch the available for purchase date. */
  availableForPurchase?: Maybe<Scalars["Date"]>;
  /**
   * The product available for purchase date time.
   *
   * Added in Saleor 3.3.
   */
  availableForPurchaseAt?: Maybe<Scalars["DateTime"]>;
  /** The channel in which the product is listed. */
  channel: IChannel;
  /** The price of the cheapest variant (including discounts). */
  discountedPrice?: Maybe<IMoney>;
  /** The ID of the product channel listing. */
  id: Scalars["ID"];
  /** Refers to a state that can be set by admins to control whether a product is available for purchase in storefronts in this channel. This does not guarantee the availability of stock. When set to `False`, this product is still visible to customers, but it cannot be purchased. */
  isAvailableForPurchase?: Maybe<Scalars["Boolean"]>;
  /** Indicates if the product is published in the channel. */
  isPublished: Scalars["Boolean"];
  /**
   * Range of margin percentage value.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  margin?: Maybe<IMargin>;
  /** Lists the storefront product's pricing, the current price and discounts, only meant for displaying. */
  pricing?: Maybe<IProductPricingInfo>;
  /** @deprecated This field will be removed in Saleor 4.0. Use the `publishedAt` field to fetch the publication date. */
  publicationDate?: Maybe<Scalars["Date"]>;
  /**
   * The product publication date time.
   *
   * Added in Saleor 3.3.
   */
  publishedAt?: Maybe<Scalars["DateTime"]>;
  /**
   * Purchase cost of product.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  purchaseCost?: Maybe<IMoneyRange>;
  /** Indicates product visibility in the channel listings. */
  visibleInListings: Scalars["Boolean"];
};

/** Represents product channel listing. */
export type IProductChannelListingPricingArgs = {
  address?: InputMaybe<IAddressInput>;
};

export type IProductChannelListingAddInput = {
  /** List of variants to which the channel should be assigned. */
  addVariants?: InputMaybe<Array<Scalars["ID"]>>;
  /**
   * A start date time from which a product will be available for purchase. When not set and `isAvailable` is set to True, the current day is assumed.
   *
   * Added in Saleor 3.3.
   */
  availableForPurchaseAt?: InputMaybe<Scalars["DateTime"]>;
  /**
   * A start date from which a product will be available for purchase. When not set and isAvailable is set to True, the current day is assumed.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Use `availableForPurchaseAt` field instead.
   */
  availableForPurchaseDate?: InputMaybe<Scalars["Date"]>;
  /** ID of a channel. */
  channelId: Scalars["ID"];
  /** Determines if product should be available for purchase in this channel. This does not guarantee the availability of stock. When set to `False`, this product is still visible to customers, but it cannot be purchased. */
  isAvailableForPurchase?: InputMaybe<Scalars["Boolean"]>;
  /** Determines if object is visible to customers. */
  isPublished?: InputMaybe<Scalars["Boolean"]>;
  /**
   * Publication date. ISO 8601 standard.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Use `publishedAt` field instead.
   */
  publicationDate?: InputMaybe<Scalars["Date"]>;
  /**
   * Publication date time. ISO 8601 standard.
   *
   * Added in Saleor 3.3.
   */
  publishedAt?: InputMaybe<Scalars["DateTime"]>;
  /** List of variants from which the channel should be unassigned. */
  removeVariants?: InputMaybe<Array<Scalars["ID"]>>;
  /** Determines if product is visible in product listings (doesn't apply to product collections). */
  visibleInListings?: InputMaybe<Scalars["Boolean"]>;
};

export type IProductChannelListingCreateInput = {
  /** A start date time from which a product will be available for purchase. When not set and `isAvailable` is set to True, the current day is assumed. */
  availableForPurchaseAt?: InputMaybe<Scalars["DateTime"]>;
  /** ID of a channel. */
  channelId: Scalars["ID"];
  /** Determines if product should be available for purchase in this channel. This does not guarantee the availability of stock. When set to `False`, this product is still visible to customers, but it cannot be purchased. */
  isAvailableForPurchase?: InputMaybe<Scalars["Boolean"]>;
  /** Determines if object is visible to customers. */
  isPublished?: InputMaybe<Scalars["Boolean"]>;
  /** Publication date time. ISO 8601 standard. */
  publishedAt?: InputMaybe<Scalars["DateTime"]>;
  /** Determines if product is visible in product listings (doesn't apply to product collections). */
  visibleInListings?: InputMaybe<Scalars["Boolean"]>;
};

export type IProductChannelListingError = {
  __typename?: "ProductChannelListingError";
  /** List of attributes IDs which causes the error. */
  attributes?: Maybe<Array<Scalars["ID"]>>;
  /** List of channels IDs which causes the error. */
  channels?: Maybe<Array<Scalars["ID"]>>;
  /** The error code. */
  code: IProductErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars["String"]>;
  /** The error message. */
  message?: Maybe<Scalars["String"]>;
  /** List of attribute values IDs which causes the error. */
  values?: Maybe<Array<Scalars["ID"]>>;
  /** List of variants IDs which causes the error. */
  variants?: Maybe<Array<Scalars["ID"]>>;
};

/**
 * Manage product's availability in channels.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type IProductChannelListingUpdate = {
  __typename?: "ProductChannelListingUpdate";
  errors: Array<IProductChannelListingError>;
  /** An updated product instance. */
  product?: Maybe<IProduct>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productChannelListingErrors: Array<IProductChannelListingError>;
};

export type IProductChannelListingUpdateInput = {
  /** List of channels from which the product should be unassigned. */
  removeChannels?: InputMaybe<Array<Scalars["ID"]>>;
  /** List of channels to which the product should be assigned or updated. */
  updateChannels?: InputMaybe<Array<IProductChannelListingAddInput>>;
};

export type IProductCountableConnection = {
  __typename?: "ProductCountableConnection";
  edges: Array<IProductCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: IPageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars["Int"]>;
};

export type IProductCountableEdge = {
  __typename?: "ProductCountableEdge";
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node: IProduct;
};

/**
 * Creates a new product.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type IProductCreate = {
  __typename?: "ProductCreate";
  errors: Array<IProductError>;
  product?: Maybe<IProduct>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<IProductError>;
};

export type IProductCreateInput = {
  /** List of attributes. */
  attributes?: InputMaybe<Array<IAttributeValueInput>>;
  /** ID of the product's category. */
  category?: InputMaybe<Scalars["ID"]>;
  /**
   * Determine if taxes are being charged for the product.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Use `Channel.taxConfiguration` to configure whether tax collection is enabled.
   */
  chargeTaxes?: InputMaybe<Scalars["Boolean"]>;
  /** List of IDs of collections that the product belongs to. */
  collections?: InputMaybe<Array<Scalars["ID"]>>;
  /**
   * Product description.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  description?: InputMaybe<Scalars["JSONString"]>;
  /**
   * External ID of this product.
   *
   * Added in Saleor 3.10.
   */
  externalReference?: InputMaybe<Scalars["String"]>;
  /**
   * Fields required to update the product metadata.
   *
   * Added in Saleor 3.8.
   */
  metadata?: InputMaybe<Array<IMetadataInput>>;
  /** Product name. */
  name?: InputMaybe<Scalars["String"]>;
  /**
   * Fields required to update the product private metadata.
   *
   * Added in Saleor 3.8.
   */
  privateMetadata?: InputMaybe<Array<IMetadataInput>>;
  /** ID of the type that product belongs to. */
  productType: Scalars["ID"];
  /** Defines the product rating value. */
  rating?: InputMaybe<Scalars["Float"]>;
  /** Search engine optimization fields. */
  seo?: InputMaybe<ISeoInput>;
  /** Product slug. */
  slug?: InputMaybe<Scalars["String"]>;
  /** ID of a tax class to assign to this product. If not provided, product will use the tax class which is assigned to the product type. */
  taxClass?: InputMaybe<Scalars["ID"]>;
  /**
   * Tax rate for enabled tax gateway.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Use tax classes to control the tax calculation for a product. If taxCode is provided, Saleor will try to find a tax class with given code (codes are stored in metadata) and assign it. If no tax class is found, it would be created and assigned.
   */
  taxCode?: InputMaybe<Scalars["String"]>;
  /** Weight of the Product. */
  weight?: InputMaybe<Scalars["WeightScalar"]>;
};

/**
 * Event sent when new product is created.
 *
 * Added in Saleor 3.2.
 */
export type IProductCreated = IEvent & {
  __typename?: "ProductCreated";
  /** The category of the product. */
  category?: Maybe<ICategory>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars["DateTime"]>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IIssuingPrincipal>;
  /** The product the event relates to. */
  product?: Maybe<IProduct>;
  /** The application receiving the webhook. */
  recipient?: Maybe<IApp>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars["String"]>;
};

/**
 * Event sent when new product is created.
 *
 * Added in Saleor 3.2.
 */
export type IProductCreatedProductArgs = {
  channel?: InputMaybe<Scalars["String"]>;
};

/**
 * Deletes a product.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type IProductDelete = {
  __typename?: "ProductDelete";
  errors: Array<IProductError>;
  product?: Maybe<IProduct>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<IProductError>;
};

/**
 * Event sent when product is deleted.
 *
 * Added in Saleor 3.2.
 */
export type IProductDeleted = IEvent & {
  __typename?: "ProductDeleted";
  /** The category of the product. */
  category?: Maybe<ICategory>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars["DateTime"]>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IIssuingPrincipal>;
  /** The product the event relates to. */
  product?: Maybe<IProduct>;
  /** The application receiving the webhook. */
  recipient?: Maybe<IApp>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars["String"]>;
};

/**
 * Event sent when product is deleted.
 *
 * Added in Saleor 3.2.
 */
export type IProductDeletedProductArgs = {
  channel?: InputMaybe<Scalars["String"]>;
};

export type IProductError = {
  __typename?: "ProductError";
  /** List of attributes IDs which causes the error. */
  attributes?: Maybe<Array<Scalars["ID"]>>;
  /** The error code. */
  code: IProductErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars["String"]>;
  /** The error message. */
  message?: Maybe<Scalars["String"]>;
  /** List of attribute values IDs which causes the error. */
  values?: Maybe<Array<Scalars["ID"]>>;
};

/** An enumeration. */
export type IProductErrorCode =
  | "ALREADY_EXISTS"
  | "ATTRIBUTE_ALREADY_ASSIGNED"
  | "ATTRIBUTE_CANNOT_BE_ASSIGNED"
  | "ATTRIBUTE_VARIANTS_DISABLED"
  | "CANNOT_MANAGE_PRODUCT_WITHOUT_VARIANT"
  | "DUPLICATED_INPUT_ITEM"
  | "GRAPHQL_ERROR"
  | "INVALID"
  | "INVALID_PRICE"
  | "MEDIA_ALREADY_ASSIGNED"
  | "NOT_FOUND"
  | "NOT_PRODUCTS_IMAGE"
  | "NOT_PRODUCTS_VARIANT"
  | "PREORDER_VARIANT_CANNOT_BE_DEACTIVATED"
  | "PRODUCT_NOT_ASSIGNED_TO_CHANNEL"
  | "PRODUCT_WITHOUT_CATEGORY"
  | "REQUIRED"
  | "UNIQUE"
  | "UNSUPPORTED_MEDIA_PROVIDER"
  | "VARIANT_NO_DIGITAL_CONTENT";

export type IProductFieldEnum =
  | "CATEGORY"
  | "CHARGE_TAXES"
  | "COLLECTIONS"
  | "DESCRIPTION"
  | "NAME"
  | "PRODUCT_MEDIA"
  | "PRODUCT_TYPE"
  | "PRODUCT_WEIGHT"
  | "VARIANT_ID"
  | "VARIANT_MEDIA"
  | "VARIANT_SKU"
  | "VARIANT_WEIGHT";

export type IProductFilterInput = {
  attributes?: InputMaybe<Array<IAttributeInput>>;
  /**
   * Filter by the date of availability for purchase.
   *
   * Added in Saleor 3.8.
   */
  availableFrom?: InputMaybe<Scalars["DateTime"]>;
  categories?: InputMaybe<Array<Scalars["ID"]>>;
  /**
   * Specifies the channel by which the data should be filtered.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Use root-level channel argument instead.
   */
  channel?: InputMaybe<Scalars["String"]>;
  collections?: InputMaybe<Array<Scalars["ID"]>>;
  /** Filter on whether product is a gift card or not. */
  giftCard?: InputMaybe<Scalars["Boolean"]>;
  hasCategory?: InputMaybe<Scalars["Boolean"]>;
  hasPreorderedVariants?: InputMaybe<Scalars["Boolean"]>;
  ids?: InputMaybe<Array<Scalars["ID"]>>;
  /**
   * Filter by availability for purchase.
   *
   * Added in Saleor 3.8.
   */
  isAvailable?: InputMaybe<Scalars["Boolean"]>;
  isPublished?: InputMaybe<Scalars["Boolean"]>;
  /**
   * Filter by visibility in product listings.
   *
   * Added in Saleor 3.8.
   */
  isVisibleInListing?: InputMaybe<Scalars["Boolean"]>;
  metadata?: InputMaybe<Array<IMetadataFilter>>;
  /** Filter by the lowest variant price after discounts. */
  minimalPrice?: InputMaybe<IPriceRangeInput>;
  price?: InputMaybe<IPriceRangeInput>;
  productTypes?: InputMaybe<Array<Scalars["ID"]>>;
  /**
   * Filter by the publication date.
   *
   * Added in Saleor 3.8.
   */
  publishedFrom?: InputMaybe<Scalars["DateTime"]>;
  search?: InputMaybe<Scalars["String"]>;
  slugs?: InputMaybe<Array<Scalars["String"]>>;
  /** Filter by variants having specific stock status. */
  stockAvailability?: InputMaybe<IStockAvailability>;
  stocks?: InputMaybe<IProductStockFilterInput>;
  /** Filter by when was the most recent update. */
  updatedAt?: InputMaybe<IDateTimeRangeInput>;
};

/** Represents a product image. */
export type IProductImage = {
  __typename?: "ProductImage";
  /** The alt text of the image. */
  alt?: Maybe<Scalars["String"]>;
  /** The ID of the image. */
  id: Scalars["ID"];
  /** The new relative sorting position of the item (from -inf to +inf). 1 moves the item one position forward, -1 moves the item one position backward, 0 leaves the item unchanged. */
  sortOrder?: Maybe<Scalars["Int"]>;
  /** The URL of the image. */
  url: Scalars["String"];
};

/** Represents a product image. */
export type IProductImageUrlArgs = {
  format?: InputMaybe<IThumbnailFormatEnum>;
  size?: InputMaybe<Scalars["Int"]>;
};

export type IProductInput = {
  /** List of attributes. */
  attributes?: InputMaybe<Array<IAttributeValueInput>>;
  /** ID of the product's category. */
  category?: InputMaybe<Scalars["ID"]>;
  /**
   * Determine if taxes are being charged for the product.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Use `Channel.taxConfiguration` to configure whether tax collection is enabled.
   */
  chargeTaxes?: InputMaybe<Scalars["Boolean"]>;
  /** List of IDs of collections that the product belongs to. */
  collections?: InputMaybe<Array<Scalars["ID"]>>;
  /**
   * Product description.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  description?: InputMaybe<Scalars["JSONString"]>;
  /**
   * External ID of this product.
   *
   * Added in Saleor 3.10.
   */
  externalReference?: InputMaybe<Scalars["String"]>;
  /**
   * Fields required to update the product metadata.
   *
   * Added in Saleor 3.8.
   */
  metadata?: InputMaybe<Array<IMetadataInput>>;
  /** Product name. */
  name?: InputMaybe<Scalars["String"]>;
  /**
   * Fields required to update the product private metadata.
   *
   * Added in Saleor 3.8.
   */
  privateMetadata?: InputMaybe<Array<IMetadataInput>>;
  /** Defines the product rating value. */
  rating?: InputMaybe<Scalars["Float"]>;
  /** Search engine optimization fields. */
  seo?: InputMaybe<ISeoInput>;
  /** Product slug. */
  slug?: InputMaybe<Scalars["String"]>;
  /** ID of a tax class to assign to this product. If not provided, product will use the tax class which is assigned to the product type. */
  taxClass?: InputMaybe<Scalars["ID"]>;
  /**
   * Tax rate for enabled tax gateway.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Use tax classes to control the tax calculation for a product. If taxCode is provided, Saleor will try to find a tax class with given code (codes are stored in metadata) and assign it. If no tax class is found, it would be created and assigned.
   */
  taxCode?: InputMaybe<Scalars["String"]>;
  /** Weight of the Product. */
  weight?: InputMaybe<Scalars["WeightScalar"]>;
};

/** Represents a product media. */
export type IProductMedia = INode &
  IObjectWithMetadata & {
    __typename?: "ProductMedia";
    /** The alt text of the media. */
    alt: Scalars["String"];
    /** The unique ID of the product media. */
    id: Scalars["ID"];
    /**
     * List of public metadata items. Can be accessed without permissions.
     *
     * Added in Saleor 3.12.
     */
    metadata: Array<IMetadataItem>;
    /**
     * A single key from public metadata.
     *
     * Tip: Use GraphQL aliases to fetch multiple keys.
     *
     * Added in Saleor 3.12.
     */
    metafield?: Maybe<Scalars["String"]>;
    /**
     * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
     *
     * Added in Saleor 3.12.
     */
    metafields?: Maybe<Scalars["Metadata"]>;
    /** The oEmbed data of the media. */
    oembedData: Scalars["JSONString"];
    /**
     * List of private metadata items. Requires staff permissions to access.
     *
     * Added in Saleor 3.12.
     */
    privateMetadata: Array<IMetadataItem>;
    /**
     * A single key from private metadata. Requires staff permissions to access.
     *
     * Tip: Use GraphQL aliases to fetch multiple keys.
     *
     * Added in Saleor 3.12.
     */
    privateMetafield?: Maybe<Scalars["String"]>;
    /**
     * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
     *
     * Added in Saleor 3.12.
     */
    privateMetafields?: Maybe<Scalars["Metadata"]>;
    /**
     * Product id the media refers to.
     *
     * Added in Saleor 3.12.
     */
    productId?: Maybe<Scalars["ID"]>;
    /** The sort order of the media. */
    sortOrder?: Maybe<Scalars["Int"]>;
    /** The type of the media. */
    type: IProductMediaType;
    /** The URL of the media. */
    url: Scalars["String"];
  };

/** Represents a product media. */
export type IProductMediaMetafieldArgs = {
  key: Scalars["String"];
};

/** Represents a product media. */
export type IProductMediaMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars["String"]>>;
};

/** Represents a product media. */
export type IProductMediaPrivateMetafieldArgs = {
  key: Scalars["String"];
};

/** Represents a product media. */
export type IProductMediaPrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars["String"]>>;
};

/** Represents a product media. */
export type IProductMediaUrlArgs = {
  format?: InputMaybe<IThumbnailFormatEnum>;
  size?: InputMaybe<Scalars["Int"]>;
};

/**
 * Deletes product media.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type IProductMediaBulkDelete = {
  __typename?: "ProductMediaBulkDelete";
  /** Returns how many objects were affected. */
  count: Scalars["Int"];
  errors: Array<IProductError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<IProductError>;
};

/**
 * Create a media object (image or video URL) associated with product. For image, this mutation must be sent as a `multipart` request. More detailed specs of the upload format can be found here: https://github.com/jaydenseric/graphql-multipart-request-spec
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type IProductMediaCreate = {
  __typename?: "ProductMediaCreate";
  errors: Array<IProductError>;
  media?: Maybe<IProductMedia>;
  product?: Maybe<IProduct>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<IProductError>;
};

export type IProductMediaCreateInput = {
  /** Alt text for a product media. */
  alt?: InputMaybe<Scalars["String"]>;
  /** Represents an image file in a multipart request. */
  image?: InputMaybe<Scalars["Upload"]>;
  /** Represents an URL to an external media. */
  mediaUrl?: InputMaybe<Scalars["String"]>;
  /** ID of an product. */
  product: Scalars["ID"];
};

/**
 * Event sent when new product media is created.
 *
 * Added in Saleor 3.12.
 */
export type IProductMediaCreated = IEvent & {
  __typename?: "ProductMediaCreated";
  /** Time of the event. */
  issuedAt?: Maybe<Scalars["DateTime"]>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IIssuingPrincipal>;
  /** The product media the event relates to. */
  productMedia?: Maybe<IProductMedia>;
  /** The application receiving the webhook. */
  recipient?: Maybe<IApp>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars["String"]>;
};

/**
 * Deletes a product media.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type IProductMediaDelete = {
  __typename?: "ProductMediaDelete";
  errors: Array<IProductError>;
  media?: Maybe<IProductMedia>;
  product?: Maybe<IProduct>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<IProductError>;
};

/**
 * Event sent when product media is deleted.
 *
 * Added in Saleor 3.12.
 */
export type IProductMediaDeleted = IEvent & {
  __typename?: "ProductMediaDeleted";
  /** Time of the event. */
  issuedAt?: Maybe<Scalars["DateTime"]>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IIssuingPrincipal>;
  /** The product media the event relates to. */
  productMedia?: Maybe<IProductMedia>;
  /** The application receiving the webhook. */
  recipient?: Maybe<IApp>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars["String"]>;
};

/**
 * Changes ordering of the product media.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type IProductMediaReorder = {
  __typename?: "ProductMediaReorder";
  errors: Array<IProductError>;
  media?: Maybe<Array<IProductMedia>>;
  product?: Maybe<IProduct>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<IProductError>;
};

/** An enumeration. */
export type IProductMediaType = "IMAGE" | "VIDEO";

/**
 * Updates a product media.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type IProductMediaUpdate = {
  __typename?: "ProductMediaUpdate";
  errors: Array<IProductError>;
  media?: Maybe<IProductMedia>;
  product?: Maybe<IProduct>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<IProductError>;
};

export type IProductMediaUpdateInput = {
  /** Alt text for a product media. */
  alt?: InputMaybe<Scalars["String"]>;
};

/**
 * Event sent when product media is updated.
 *
 * Added in Saleor 3.12.
 */
export type IProductMediaUpdated = IEvent & {
  __typename?: "ProductMediaUpdated";
  /** Time of the event. */
  issuedAt?: Maybe<Scalars["DateTime"]>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IIssuingPrincipal>;
  /** The product media the event relates to. */
  productMedia?: Maybe<IProductMedia>;
  /** The application receiving the webhook. */
  recipient?: Maybe<IApp>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars["String"]>;
};

/**
 * Event sent when product metadata is updated.
 *
 * Added in Saleor 3.8.
 */
export type IProductMetadataUpdated = IEvent & {
  __typename?: "ProductMetadataUpdated";
  /** The category of the product. */
  category?: Maybe<ICategory>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars["DateTime"]>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IIssuingPrincipal>;
  /** The product the event relates to. */
  product?: Maybe<IProduct>;
  /** The application receiving the webhook. */
  recipient?: Maybe<IApp>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars["String"]>;
};

/**
 * Event sent when product metadata is updated.
 *
 * Added in Saleor 3.8.
 */
export type IProductMetadataUpdatedProductArgs = {
  channel?: InputMaybe<Scalars["String"]>;
};

export type IProductOrder = {
  /**
   * Sort product by the selected attribute's values.
   * Note: this doesn't take translations into account yet.
   */
  attributeId?: InputMaybe<Scalars["ID"]>;
  /**
   * Specifies the channel in which to sort the data.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Use root-level channel argument instead.
   */
  channel?: InputMaybe<Scalars["String"]>;
  /** Specifies the direction in which to sort products. */
  direction: IOrderDirection;
  /** Sort products by the selected field. */
  field?: InputMaybe<IProductOrderField>;
};

export type IProductOrderField =
  /**
   * Sort products by collection. Note: This option is available only for the `Collection.products` query.
   *
   * This option requires a channel filter to work as the values can vary between channels.
   */
  | "COLLECTION"
  /**
   * Sort products by creation date.
   *
   * Added in Saleor 3.8.
   */
  | "CREATED_AT"
  /** Sort products by update date. */
  | "DATE"
  /** Sort products by update date. */
  | "LAST_MODIFIED"
  /** Sort products by update date. */
  | "LAST_MODIFIED_AT"
  /**
   * Sort products by a minimal price of a product's variant.
   *
   * This option requires a channel filter to work as the values can vary between channels.
   */
  | "MINIMAL_PRICE"
  /** Sort products by name. */
  | "NAME"
  /**
   * Sort products by price.
   *
   * This option requires a channel filter to work as the values can vary between channels.
   */
  | "PRICE"
  /**
   * Sort products by publication date.
   *
   * This option requires a channel filter to work as the values can vary between channels.
   */
  | "PUBLICATION_DATE"
  /**
   * Sort products by publication status.
   *
   * This option requires a channel filter to work as the values can vary between channels.
   */
  | "PUBLISHED"
  /**
   * Sort products by publication date.
   *
   * This option requires a channel filter to work as the values can vary between channels.
   */
  | "PUBLISHED_AT"
  /** Sort products by rank. Note: This option is available only with the `search` filter. */
  | "RANK"
  /** Sort products by rating. */
  | "RATING"
  /** Sort products by type. */
  | "TYPE";

/** Represents availability of a product in the storefront. */
export type IProductPricingInfo = {
  __typename?: "ProductPricingInfo";
  /** The discount amount if in sale (null otherwise). */
  discount?: Maybe<ITaxedMoney>;
  /**
   * The discount amount in the local currency.
   * @deprecated This field will be removed in Saleor 4.0. Always returns `null`.
   */
  discountLocalCurrency?: Maybe<ITaxedMoney>;
  /**
   * Determines whether this product's price displayed in a storefront should include taxes.
   *
   * Added in Saleor 3.9.
   */
  displayGrossPrices: Scalars["Boolean"];
  /** Whether it is in sale or not. */
  onSale?: Maybe<Scalars["Boolean"]>;
  /** The discounted price range of the product variants. */
  priceRange?: Maybe<ITaxedMoneyRange>;
  /**
   * The discounted price range of the product variants in the local currency.
   * @deprecated This field will be removed in Saleor 4.0. Always returns `null`.
   */
  priceRangeLocalCurrency?: Maybe<ITaxedMoneyRange>;
  /** The undiscounted price range of the product variants. */
  priceRangeUndiscounted?: Maybe<ITaxedMoneyRange>;
};

/**
 * Reorder product attribute values.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type IProductReorderAttributeValues = {
  __typename?: "ProductReorderAttributeValues";
  errors: Array<IProductError>;
  /** Product from which attribute values are reordered. */
  product?: Maybe<IProduct>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<IProductError>;
};

export type IProductStockFilterInput = {
  quantity?: InputMaybe<IIntRangeInput>;
  warehouseIds?: InputMaybe<Array<Scalars["ID"]>>;
};

export type IProductTranslatableContent = INode & {
  __typename?: "ProductTranslatableContent";
  /** List of product attribute values that can be translated. */
  attributeValues: Array<IAttributeValueTranslatableContent>;
  /**
   * Product's description to translate.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  description?: Maybe<Scalars["JSONString"]>;
  /**
   * Description of the product.
   *
   * Rich text format. For reference see https://editorjs.io/
   * @deprecated This field will be removed in Saleor 4.0. Use the `description` field instead.
   */
  descriptionJson?: Maybe<Scalars["JSONString"]>;
  /** The ID of the product translatable content. */
  id: Scalars["ID"];
  /** Product's name to translate. */
  name: Scalars["String"];
  /**
   * Represents an individual item for sale in the storefront.
   * @deprecated This field will be removed in Saleor 4.0. Get model fields from the root level queries.
   */
  product?: Maybe<IProduct>;
  /** SEO description to translate. */
  seoDescription?: Maybe<Scalars["String"]>;
  /** SEO title to translate. */
  seoTitle?: Maybe<Scalars["String"]>;
  /** Returns translated product fields for the given language code. */
  translation?: Maybe<IProductTranslation>;
};

export type IProductTranslatableContentTranslationArgs = {
  languageCode: ILanguageCodeEnum;
};

/**
 * Creates/updates translations for a product.
 *
 * Requires one of the following permissions: MANAGE_TRANSLATIONS.
 */
export type IProductTranslate = {
  __typename?: "ProductTranslate";
  errors: Array<ITranslationError>;
  product?: Maybe<IProduct>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  translationErrors: Array<ITranslationError>;
};

/** An enumeration. */
export type IProductTranslateErrorCode =
  | "GRAPHQL_ERROR"
  | "INVALID"
  | "NOT_FOUND"
  | "REQUIRED";

export type IProductTranslation = INode & {
  __typename?: "ProductTranslation";
  /**
   * Translated description of the product.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  description?: Maybe<Scalars["JSONString"]>;
  /**
   * Translated description of the product.
   *
   * Rich text format. For reference see https://editorjs.io/
   * @deprecated This field will be removed in Saleor 4.0. Use the `description` field instead.
   */
  descriptionJson?: Maybe<Scalars["JSONString"]>;
  /** The ID of the product translation. */
  id: Scalars["ID"];
  /** Translation language. */
  language: ILanguageDisplay;
  /** Translated product name. */
  name?: Maybe<Scalars["String"]>;
  /** Translated SEO description. */
  seoDescription?: Maybe<Scalars["String"]>;
  /** Translated SEO title. */
  seoTitle?: Maybe<Scalars["String"]>;
};

/** Represents a type of product. It defines what attributes are available to products of this type. */
export type IProductType = INode &
  IObjectWithMetadata & {
    __typename?: "ProductType";
    /**
     * Variant attributes of that product type with attached variant selection.
     *
     * Added in Saleor 3.1.
     */
    assignedVariantAttributes?: Maybe<Array<IAssignedVariantAttribute>>;
    /**
     * List of attributes which can be assigned to this product type.
     *
     * Requires one of the following permissions: MANAGE_PRODUCTS.
     */
    availableAttributes?: Maybe<IAttributeCountableConnection>;
    /** Whether the product type has variants. */
    hasVariants: Scalars["Boolean"];
    /** The ID of the product type. */
    id: Scalars["ID"];
    /** Whether the product type is digital. */
    isDigital: Scalars["Boolean"];
    /** Whether shipping is required for this product type. */
    isShippingRequired: Scalars["Boolean"];
    /** The product type kind. */
    kind: IProductTypeKindEnum;
    /** List of public metadata items. Can be accessed without permissions. */
    metadata: Array<IMetadataItem>;
    /**
     * A single key from public metadata.
     *
     * Tip: Use GraphQL aliases to fetch multiple keys.
     *
     * Added in Saleor 3.3.
     */
    metafield?: Maybe<Scalars["String"]>;
    /**
     * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
     *
     * Added in Saleor 3.3.
     */
    metafields?: Maybe<Scalars["Metadata"]>;
    /** Name of the product type. */
    name: Scalars["String"];
    /** List of private metadata items. Requires staff permissions to access. */
    privateMetadata: Array<IMetadataItem>;
    /**
     * A single key from private metadata. Requires staff permissions to access.
     *
     * Tip: Use GraphQL aliases to fetch multiple keys.
     *
     * Added in Saleor 3.3.
     */
    privateMetafield?: Maybe<Scalars["String"]>;
    /**
     * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
     *
     * Added in Saleor 3.3.
     */
    privateMetafields?: Maybe<Scalars["Metadata"]>;
    /** Product attributes of that product type. */
    productAttributes?: Maybe<Array<IAttribute>>;
    /**
     * List of products of this type.
     * @deprecated This field will be removed in Saleor 4.0. Use the top-level `products` query with the `productTypes` filter.
     */
    products?: Maybe<IProductCountableConnection>;
    /** Slug of the product type. */
    slug: Scalars["String"];
    /**
     * Tax class assigned to this product type. All products of this product type use this tax class, unless it's overridden in the `Product` type.
     *
     * Requires one of the following permissions: AUTHENTICATED_STAFF_USER, AUTHENTICATED_APP.
     */
    taxClass?: Maybe<ITaxClass>;
    /**
     * A type of tax. Assigned by enabled tax gateway
     * @deprecated This field will be removed in Saleor 4.0. Use `taxClass` field instead.
     */
    taxType?: Maybe<ITaxType>;
    /**
     * Variant attributes of that product type.
     * @deprecated This field will be removed in Saleor 4.0. Use `assignedVariantAttributes` instead.
     */
    variantAttributes?: Maybe<Array<IAttribute>>;
    /** Weight of the product type. */
    weight?: Maybe<IWeight>;
  };

/** Represents a type of product. It defines what attributes are available to products of this type. */
export type IProductTypeAssignedVariantAttributesArgs = {
  variantSelection?: InputMaybe<IVariantAttributeScope>;
};

/** Represents a type of product. It defines what attributes are available to products of this type. */
export type IProductTypeAvailableAttributesArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  filter?: InputMaybe<IAttributeFilterInput>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<IAttributeWhereInput>;
};

/** Represents a type of product. It defines what attributes are available to products of this type. */
export type IProductTypeMetafieldArgs = {
  key: Scalars["String"];
};

/** Represents a type of product. It defines what attributes are available to products of this type. */
export type IProductTypeMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars["String"]>>;
};

/** Represents a type of product. It defines what attributes are available to products of this type. */
export type IProductTypePrivateMetafieldArgs = {
  key: Scalars["String"];
};

/** Represents a type of product. It defines what attributes are available to products of this type. */
export type IProductTypePrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars["String"]>>;
};

/** Represents a type of product. It defines what attributes are available to products of this type. */
export type IProductTypeProductsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  channel?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

/** Represents a type of product. It defines what attributes are available to products of this type. */
export type IProductTypeVariantAttributesArgs = {
  variantSelection?: InputMaybe<IVariantAttributeScope>;
};

/**
 * Deletes product types.
 *
 * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
 */
export type IProductTypeBulkDelete = {
  __typename?: "ProductTypeBulkDelete";
  /** Returns how many objects were affected. */
  count: Scalars["Int"];
  errors: Array<IProductError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<IProductError>;
};

export type IProductTypeConfigurable = "CONFIGURABLE" | "SIMPLE";

export type IProductTypeCountableConnection = {
  __typename?: "ProductTypeCountableConnection";
  edges: Array<IProductTypeCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: IPageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars["Int"]>;
};

export type IProductTypeCountableEdge = {
  __typename?: "ProductTypeCountableEdge";
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node: IProductType;
};

/**
 * Creates a new product type.
 *
 * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
 */
export type IProductTypeCreate = {
  __typename?: "ProductTypeCreate";
  errors: Array<IProductError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<IProductError>;
  productType?: Maybe<IProductType>;
};

/**
 * Deletes a product type.
 *
 * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
 */
export type IProductTypeDelete = {
  __typename?: "ProductTypeDelete";
  errors: Array<IProductError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<IProductError>;
  productType?: Maybe<IProductType>;
};

export type IProductTypeEnum = "DIGITAL" | "SHIPPABLE";

export type IProductTypeFilterInput = {
  configurable?: InputMaybe<IProductTypeConfigurable>;
  ids?: InputMaybe<Array<Scalars["ID"]>>;
  kind?: InputMaybe<IProductTypeKindEnum>;
  metadata?: InputMaybe<Array<IMetadataFilter>>;
  productType?: InputMaybe<IProductTypeEnum>;
  search?: InputMaybe<Scalars["String"]>;
  slugs?: InputMaybe<Array<Scalars["String"]>>;
};

export type IProductTypeInput = {
  /** Determines if product of this type has multiple variants. This option mainly simplifies product management in the dashboard. There is always at least one variant created under the hood. */
  hasVariants?: InputMaybe<Scalars["Boolean"]>;
  /** Determines if products are digital. */
  isDigital?: InputMaybe<Scalars["Boolean"]>;
  /** Determines if shipping is required for products of this variant. */
  isShippingRequired?: InputMaybe<Scalars["Boolean"]>;
  /** The product type kind. */
  kind?: InputMaybe<IProductTypeKindEnum>;
  /** Name of the product type. */
  name?: InputMaybe<Scalars["String"]>;
  /** List of attributes shared among all product variants. */
  productAttributes?: InputMaybe<Array<Scalars["ID"]>>;
  /** Product type slug. */
  slug?: InputMaybe<Scalars["String"]>;
  /** ID of a tax class to assign to this product type. All products of this product type would use this tax class, unless it's overridden in the `Product` type. */
  taxClass?: InputMaybe<Scalars["ID"]>;
  /**
   * Tax rate for enabled tax gateway.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0.. Use tax classes to control the tax calculation for a product type. If taxCode is provided, Saleor will try to find a tax class with given code (codes are stored in metadata) and assign it. If no tax class is found, it would be created and assigned.
   */
  taxCode?: InputMaybe<Scalars["String"]>;
  /** List of attributes used to distinguish between different variants of a product. */
  variantAttributes?: InputMaybe<Array<Scalars["ID"]>>;
  /** Weight of the ProductType items. */
  weight?: InputMaybe<Scalars["WeightScalar"]>;
};

/** An enumeration. */
export type IProductTypeKindEnum = "GIFT_CARD" | "NORMAL";

/**
 * Reorder the attributes of a product type.
 *
 * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
 */
export type IProductTypeReorderAttributes = {
  __typename?: "ProductTypeReorderAttributes";
  errors: Array<IProductError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<IProductError>;
  /** Product type from which attributes are reordered. */
  productType?: Maybe<IProductType>;
};

export type IProductTypeSortField =
  /** Sort products by type. */
  | "DIGITAL"
  /** Sort products by name. */
  | "NAME"
  /** Sort products by shipping. */
  | "SHIPPING_REQUIRED";

export type IProductTypeSortingInput = {
  /** Specifies the direction in which to sort product types. */
  direction: IOrderDirection;
  /** Sort product types by the selected field. */
  field: IProductTypeSortField;
};

/**
 * Updates an existing product type.
 *
 * Requires one of the following permissions: MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES.
 */
export type IProductTypeUpdate = {
  __typename?: "ProductTypeUpdate";
  errors: Array<IProductError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<IProductError>;
  productType?: Maybe<IProductType>;
};

/**
 * Updates an existing product.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type IProductUpdate = {
  __typename?: "ProductUpdate";
  errors: Array<IProductError>;
  product?: Maybe<IProduct>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<IProductError>;
};

/**
 * Event sent when product is updated.
 *
 * Added in Saleor 3.2.
 */
export type IProductUpdated = IEvent & {
  __typename?: "ProductUpdated";
  /** The category of the product. */
  category?: Maybe<ICategory>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars["DateTime"]>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IIssuingPrincipal>;
  /** The product the event relates to. */
  product?: Maybe<IProduct>;
  /** The application receiving the webhook. */
  recipient?: Maybe<IApp>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars["String"]>;
};

/**
 * Event sent when product is updated.
 *
 * Added in Saleor 3.2.
 */
export type IProductUpdatedProductArgs = {
  channel?: InputMaybe<Scalars["String"]>;
};

/** Represents a version of a product such as different size or color. */
export type IProductVariant = INode &
  IObjectWithMetadata & {
    __typename?: "ProductVariant";
    /** List of attributes assigned to this variant. */
    attributes: Array<ISelectedAttribute>;
    /** Channel given to retrieve this product variant. Also used by federation gateway to resolve this object in a federated query. */
    channel?: Maybe<Scalars["String"]>;
    /**
     * List of price information in channels for the product.
     *
     * Requires one of the following permissions: AUTHENTICATED_APP, AUTHENTICATED_STAFF_USER.
     */
    channelListings?: Maybe<Array<IProductVariantChannelListing>>;
    /** The date and time when the product variant was created. */
    created: Scalars["DateTime"];
    /**
     * Digital content for the product variant.
     *
     * Requires one of the following permissions: MANAGE_PRODUCTS.
     */
    digitalContent?: Maybe<IDigitalContent>;
    /**
     * External ID of this product.
     *
     * Added in Saleor 3.10.
     */
    externalReference?: Maybe<Scalars["String"]>;
    /** The ID of the product variant. */
    id: Scalars["ID"];
    /**
     * List of images for the product variant.
     * @deprecated This field will be removed in Saleor 4.0. Use the `media` field instead.
     */
    images?: Maybe<Array<IProductImage>>;
    /** Gross margin percentage value. */
    margin?: Maybe<Scalars["Int"]>;
    /** List of media for the product variant. */
    media?: Maybe<Array<IProductMedia>>;
    /** List of public metadata items. Can be accessed without permissions. */
    metadata: Array<IMetadataItem>;
    /**
     * A single key from public metadata.
     *
     * Tip: Use GraphQL aliases to fetch multiple keys.
     *
     * Added in Saleor 3.3.
     */
    metafield?: Maybe<Scalars["String"]>;
    /**
     * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
     *
     * Added in Saleor 3.3.
     */
    metafields?: Maybe<Scalars["Metadata"]>;
    /** The name of the product variant. */
    name: Scalars["String"];
    /**
     * Preorder data for product variant.
     *
     * Added in Saleor 3.1.
     */
    preorder?: Maybe<IPreorderData>;
    /** Lists the storefront variant's pricing, the current price and discounts, only meant for displaying. */
    pricing?: Maybe<IVariantPricingInfo>;
    /** List of private metadata items. Requires staff permissions to access. */
    privateMetadata: Array<IMetadataItem>;
    /**
     * A single key from private metadata. Requires staff permissions to access.
     *
     * Tip: Use GraphQL aliases to fetch multiple keys.
     *
     * Added in Saleor 3.3.
     */
    privateMetafield?: Maybe<Scalars["String"]>;
    /**
     * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
     *
     * Added in Saleor 3.3.
     */
    privateMetafields?: Maybe<Scalars["Metadata"]>;
    /** The product to which the variant belongs. */
    product: IProduct;
    /** Quantity of a product available for sale in one checkout. Field value will be `null` when no `limitQuantityPerCheckout` in global settings has been set, and `productVariant` stocks are not tracked. */
    quantityAvailable?: Maybe<Scalars["Int"]>;
    /** The maximum quantity of this variant that a customer can purchase. */
    quantityLimitPerCustomer?: Maybe<Scalars["Int"]>;
    /**
     * Total quantity ordered.
     *
     * Requires one of the following permissions: MANAGE_PRODUCTS.
     */
    quantityOrdered?: Maybe<Scalars["Int"]>;
    /**
     * Total revenue generated by a variant in given period of time. Note: this field should be queried using `reportProductSales` query as it uses optimizations suitable for such calculations.
     *
     * Requires one of the following permissions: MANAGE_PRODUCTS.
     */
    revenue?: Maybe<ITaxedMoney>;
    /** The SKU (stock keeping unit) of the product variant. */
    sku?: Maybe<Scalars["String"]>;
    /**
     * Stocks for the product variant.
     *
     * Requires one of the following permissions: MANAGE_PRODUCTS, MANAGE_ORDERS.
     */
    stocks?: Maybe<Array<IStock>>;
    /** Determines if the inventory of this variant should be tracked. If false, the quantity won't change when customers buy this item. If the field is not provided, `Shop.trackInventoryByDefault` will be used. */
    trackInventory: Scalars["Boolean"];
    /** Returns translated product variant fields for the given language code. */
    translation?: Maybe<IProductVariantTranslation>;
    /** The date and time when the product variant was last updated. */
    updatedAt: Scalars["DateTime"];
    /** The weight of the product variant. */
    weight?: Maybe<IWeight>;
  };

/** Represents a version of a product such as different size or color. */
export type IProductVariantAttributesArgs = {
  variantSelection?: InputMaybe<IVariantAttributeScope>;
};

/** Represents a version of a product such as different size or color. */
export type IProductVariantMetafieldArgs = {
  key: Scalars["String"];
};

/** Represents a version of a product such as different size or color. */
export type IProductVariantMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars["String"]>>;
};

/** Represents a version of a product such as different size or color. */
export type IProductVariantPricingArgs = {
  address?: InputMaybe<IAddressInput>;
};

/** Represents a version of a product such as different size or color. */
export type IProductVariantPrivateMetafieldArgs = {
  key: Scalars["String"];
};

/** Represents a version of a product such as different size or color. */
export type IProductVariantPrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars["String"]>>;
};

/** Represents a version of a product such as different size or color. */
export type IProductVariantQuantityAvailableArgs = {
  address?: InputMaybe<IAddressInput>;
  countryCode?: InputMaybe<ICountryCode>;
};

/** Represents a version of a product such as different size or color. */
export type IProductVariantRevenueArgs = {
  period?: InputMaybe<IReportingPeriod>;
};

/** Represents a version of a product such as different size or color. */
export type IProductVariantStocksArgs = {
  address?: InputMaybe<IAddressInput>;
  countryCode?: InputMaybe<ICountryCode>;
};

/** Represents a version of a product such as different size or color. */
export type IProductVariantTranslationArgs = {
  languageCode: ILanguageCodeEnum;
};

/**
 * Event sent when product variant is back in stock.
 *
 * Added in Saleor 3.2.
 */
export type IProductVariantBackInStock = IEvent & {
  __typename?: "ProductVariantBackInStock";
  /** Time of the event. */
  issuedAt?: Maybe<Scalars["DateTime"]>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IIssuingPrincipal>;
  /** The product variant the event relates to. */
  productVariant?: Maybe<IProductVariant>;
  /** The application receiving the webhook. */
  recipient?: Maybe<IApp>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars["String"]>;
  /** Look up a warehouse. */
  warehouse?: Maybe<IWarehouse>;
};

/**
 * Event sent when product variant is back in stock.
 *
 * Added in Saleor 3.2.
 */
export type IProductVariantBackInStockProductVariantArgs = {
  channel?: InputMaybe<Scalars["String"]>;
};

/**
 * Creates product variants for a given product.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type IProductVariantBulkCreate = {
  __typename?: "ProductVariantBulkCreate";
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  bulkProductErrors: Array<IBulkProductError>;
  /** Returns how many objects were created. */
  count: Scalars["Int"];
  errors: Array<IBulkProductError>;
  /** List of the created variants.This field will be removed in Saleor 4.0. */
  productVariants: Array<IProductVariant>;
  /**
   * List of the created variants.
   *
   * Added in Saleor 3.11.
   */
  results: Array<IProductVariantBulkResult>;
};

export type IProductVariantBulkCreateInput = {
  /** List of attributes specific to this variant. */
  attributes: Array<IBulkAttributeValueInput>;
  /** List of prices assigned to channels. */
  channelListings?: InputMaybe<Array<IProductVariantChannelListingAddInput>>;
  /**
   * External ID of this product variant.
   *
   * Added in Saleor 3.10.
   */
  externalReference?: InputMaybe<Scalars["String"]>;
  /**
   * Fields required to update the product variant metadata.
   *
   * Added in Saleor 3.8.
   */
  metadata?: InputMaybe<Array<IMetadataInput>>;
  /** Variant name. */
  name?: InputMaybe<Scalars["String"]>;
  /**
   * Determines if variant is in preorder.
   *
   * Added in Saleor 3.1.
   */
  preorder?: InputMaybe<IPreorderSettingsInput>;
  /**
   * Fields required to update the product variant private metadata.
   *
   * Added in Saleor 3.8.
   */
  privateMetadata?: InputMaybe<Array<IMetadataInput>>;
  /**
   * Determines maximum quantity of `ProductVariant`,that can be bought in a single checkout.
   *
   * Added in Saleor 3.1.
   */
  quantityLimitPerCustomer?: InputMaybe<Scalars["Int"]>;
  /** Stock keeping unit. */
  sku?: InputMaybe<Scalars["String"]>;
  /** Stocks of a product available for sale. */
  stocks?: InputMaybe<Array<IStockInput>>;
  /** Determines if the inventory of this variant should be tracked. If false, the quantity won't change when customers buy this item. If the field is not provided, `Shop.trackInventoryByDefault` will be used. */
  trackInventory?: InputMaybe<Scalars["Boolean"]>;
  /** Weight of the Product Variant. */
  weight?: InputMaybe<Scalars["WeightScalar"]>;
};

/**
 * Deletes product variants.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type IProductVariantBulkDelete = {
  __typename?: "ProductVariantBulkDelete";
  /** Returns how many objects were affected. */
  count: Scalars["Int"];
  errors: Array<IProductError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<IProductError>;
};

export type IProductVariantBulkError = {
  __typename?: "ProductVariantBulkError";
  /** List of attributes IDs which causes the error. */
  attributes?: Maybe<Array<Scalars["ID"]>>;
  /** List of channel listings IDs which causes the error. */
  channelListings?: Maybe<Array<Scalars["ID"]>>;
  /**
   * List of channel IDs which causes the error.
   *
   * Added in Saleor 3.12.
   */
  channels?: Maybe<Array<Scalars["ID"]>>;
  /** The error code. */
  code: IProductVariantBulkErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars["String"]>;
  /** The error message. */
  message?: Maybe<Scalars["String"]>;
  /**
   * Path to field that caused the error. A value of `null` indicates that the error isn't associated with a particular field.
   *
   * Added in Saleor 3.14.
   */
  path?: Maybe<Scalars["String"]>;
  /**
   * List of stocks IDs which causes the error.
   *
   * Added in Saleor 3.12.
   */
  stocks?: Maybe<Array<Scalars["ID"]>>;
  /** List of attribute values IDs which causes the error. */
  values?: Maybe<Array<Scalars["ID"]>>;
  /** List of warehouse IDs which causes the error. */
  warehouses?: Maybe<Array<Scalars["ID"]>>;
};

/** An enumeration. */
export type IProductVariantBulkErrorCode =
  | "ATTRIBUTE_ALREADY_ASSIGNED"
  | "ATTRIBUTE_CANNOT_BE_ASSIGNED"
  | "ATTRIBUTE_VARIANTS_DISABLED"
  | "DUPLICATED_INPUT_ITEM"
  | "GRAPHQL_ERROR"
  | "INVALID"
  | "INVALID_PRICE"
  | "NOT_FOUND"
  | "NOT_PRODUCTS_VARIANT"
  | "PRODUCT_NOT_ASSIGNED_TO_CHANNEL"
  | "REQUIRED"
  | "UNIQUE";

export type IProductVariantBulkResult = {
  __typename?: "ProductVariantBulkResult";
  /** List of errors occurred on create attempt. */
  errors?: Maybe<Array<IProductVariantBulkError>>;
  /** Product variant data. */
  productVariant?: Maybe<IProductVariant>;
};

/**
 * Creates/updates translations for products variants.
 *
 * Added in Saleor 3.15.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 *
 * Requires one of the following permissions: MANAGE_TRANSLATIONS.
 *
 * Triggers the following webhook events:
 * - TRANSLATION_CREATED (async): A translation was created.
 * - TRANSLATION_UPDATED (async): A translation was updated.
 */
export type IProductVariantBulkTranslate = {
  __typename?: "ProductVariantBulkTranslate";
  /** Returns how many translations were created/updated. */
  count: Scalars["Int"];
  errors: Array<IProductVariantBulkTranslateError>;
  /** List of the translations. */
  results: Array<IProductVariantBulkTranslateResult>;
};

export type IProductVariantBulkTranslateError = {
  __typename?: "ProductVariantBulkTranslateError";
  /** The error code. */
  code: IProductVariantTranslateErrorCode;
  /** The error message. */
  message?: Maybe<Scalars["String"]>;
  /** Path to field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  path?: Maybe<Scalars["String"]>;
};

export type IProductVariantBulkTranslateInput = {
  /** External reference of a product variant. */
  externalReference?: InputMaybe<Scalars["String"]>;
  /** Product variant ID. */
  id?: InputMaybe<Scalars["ID"]>;
  /** Translation language code. */
  languageCode: ILanguageCodeEnum;
  /** Translation fields. */
  translationFields: INameTranslationInput;
};

export type IProductVariantBulkTranslateResult = {
  __typename?: "ProductVariantBulkTranslateResult";
  /** List of errors occurred on translation attempt. */
  errors?: Maybe<Array<IProductVariantBulkTranslateError>>;
  /** Product variant translation data. */
  translation?: Maybe<IProductVariantTranslation>;
};

/**
 * Update multiple product variants.
 *
 * Added in Saleor 3.11.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type IProductVariantBulkUpdate = {
  __typename?: "ProductVariantBulkUpdate";
  /** Returns how many objects were updated. */
  count: Scalars["Int"];
  errors: Array<IProductVariantBulkError>;
  /** List of the updated variants. */
  results: Array<IProductVariantBulkResult>;
};

/**
 * Input fields to update product variants.
 *
 * Added in Saleor 3.11.
 */
export type IProductVariantBulkUpdateInput = {
  /** List of attributes specific to this variant. */
  attributes?: InputMaybe<Array<IBulkAttributeValueInput>>;
  /**
   * Channel listings input.
   *
   * Added in Saleor 3.12.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  channelListings?: InputMaybe<IProductVariantChannelListingUpdateInput>;
  /**
   * External ID of this product variant.
   *
   * Added in Saleor 3.10.
   */
  externalReference?: InputMaybe<Scalars["String"]>;
  /** ID of the product variant to update. */
  id: Scalars["ID"];
  /**
   * Fields required to update the product variant metadata.
   *
   * Added in Saleor 3.8.
   */
  metadata?: InputMaybe<Array<IMetadataInput>>;
  /** Variant name. */
  name?: InputMaybe<Scalars["String"]>;
  /**
   * Determines if variant is in preorder.
   *
   * Added in Saleor 3.1.
   */
  preorder?: InputMaybe<IPreorderSettingsInput>;
  /**
   * Fields required to update the product variant private metadata.
   *
   * Added in Saleor 3.8.
   */
  privateMetadata?: InputMaybe<Array<IMetadataInput>>;
  /**
   * Determines maximum quantity of `ProductVariant`,that can be bought in a single checkout.
   *
   * Added in Saleor 3.1.
   */
  quantityLimitPerCustomer?: InputMaybe<Scalars["Int"]>;
  /** Stock keeping unit. */
  sku?: InputMaybe<Scalars["String"]>;
  /**
   * Stocks input.
   *
   * Added in Saleor 3.12.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  stocks?: InputMaybe<IProductVariantStocksUpdateInput>;
  /** Determines if the inventory of this variant should be tracked. If false, the quantity won't change when customers buy this item. If the field is not provided, `Shop.trackInventoryByDefault` will be used. */
  trackInventory?: InputMaybe<Scalars["Boolean"]>;
  /** Weight of the Product Variant. */
  weight?: InputMaybe<Scalars["WeightScalar"]>;
};

/** Represents product variant channel listing. */
export type IProductVariantChannelListing = INode & {
  __typename?: "ProductVariantChannelListing";
  /** The channel to which the variant listing belongs. */
  channel: IChannel;
  /** Cost price of the variant. */
  costPrice?: Maybe<IMoney>;
  /** The ID of the variant channel listing. */
  id: Scalars["ID"];
  /**
   * Gross margin percentage value.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  margin?: Maybe<Scalars["Int"]>;
  /**
   * Preorder variant data.
   *
   * Added in Saleor 3.1.
   */
  preorderThreshold?: Maybe<IPreorderThreshold>;
  /** The price of the variant. */
  price?: Maybe<IMoney>;
};

export type IProductVariantChannelListingAddInput = {
  /** ID of a channel. */
  channelId: Scalars["ID"];
  /** Cost price of the variant in channel. */
  costPrice?: InputMaybe<Scalars["PositiveDecimal"]>;
  /**
   * The threshold for preorder variant in channel.
   *
   * Added in Saleor 3.1.
   */
  preorderThreshold?: InputMaybe<Scalars["Int"]>;
  /** Price of the particular variant in channel. */
  price: Scalars["PositiveDecimal"];
};

/**
 * Manage product variant prices in channels.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type IProductVariantChannelListingUpdate = {
  __typename?: "ProductVariantChannelListingUpdate";
  errors: Array<IProductChannelListingError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productChannelListingErrors: Array<IProductChannelListingError>;
  /** An updated product variant instance. */
  variant?: Maybe<IProductVariant>;
};

export type IProductVariantChannelListingUpdateInput = {
  /** List of channels to create variant channel listings. */
  create?: InputMaybe<Array<IProductVariantChannelListingAddInput>>;
  /** List of channel listings to remove. */
  remove?: InputMaybe<Array<Scalars["ID"]>>;
  /** List of channel listings to update. */
  update?: InputMaybe<Array<IChannelListingUpdateInput>>;
};

export type IProductVariantCountableConnection = {
  __typename?: "ProductVariantCountableConnection";
  edges: Array<IProductVariantCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: IPageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars["Int"]>;
};

export type IProductVariantCountableEdge = {
  __typename?: "ProductVariantCountableEdge";
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node: IProductVariant;
};

/**
 * Creates a new variant for a product.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type IProductVariantCreate = {
  __typename?: "ProductVariantCreate";
  errors: Array<IProductError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<IProductError>;
  productVariant?: Maybe<IProductVariant>;
};

export type IProductVariantCreateInput = {
  /** List of attributes specific to this variant. */
  attributes: Array<IAttributeValueInput>;
  /**
   * External ID of this product variant.
   *
   * Added in Saleor 3.10.
   */
  externalReference?: InputMaybe<Scalars["String"]>;
  /**
   * Fields required to update the product variant metadata.
   *
   * Added in Saleor 3.8.
   */
  metadata?: InputMaybe<Array<IMetadataInput>>;
  /** Variant name. */
  name?: InputMaybe<Scalars["String"]>;
  /**
   * Determines if variant is in preorder.
   *
   * Added in Saleor 3.1.
   */
  preorder?: InputMaybe<IPreorderSettingsInput>;
  /**
   * Fields required to update the product variant private metadata.
   *
   * Added in Saleor 3.8.
   */
  privateMetadata?: InputMaybe<Array<IMetadataInput>>;
  /** Product ID of which type is the variant. */
  product: Scalars["ID"];
  /**
   * Determines maximum quantity of `ProductVariant`,that can be bought in a single checkout.
   *
   * Added in Saleor 3.1.
   */
  quantityLimitPerCustomer?: InputMaybe<Scalars["Int"]>;
  /** Stock keeping unit. */
  sku?: InputMaybe<Scalars["String"]>;
  /** Stocks of a product available for sale. */
  stocks?: InputMaybe<Array<IStockInput>>;
  /** Determines if the inventory of this variant should be tracked. If false, the quantity won't change when customers buy this item. If the field is not provided, `Shop.trackInventoryByDefault` will be used. */
  trackInventory?: InputMaybe<Scalars["Boolean"]>;
  /** Weight of the Product Variant. */
  weight?: InputMaybe<Scalars["WeightScalar"]>;
};

/**
 * Event sent when new product variant is created.
 *
 * Added in Saleor 3.2.
 */
export type IProductVariantCreated = IEvent & {
  __typename?: "ProductVariantCreated";
  /** Time of the event. */
  issuedAt?: Maybe<Scalars["DateTime"]>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IIssuingPrincipal>;
  /** The product variant the event relates to. */
  productVariant?: Maybe<IProductVariant>;
  /** The application receiving the webhook. */
  recipient?: Maybe<IApp>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars["String"]>;
};

/**
 * Event sent when new product variant is created.
 *
 * Added in Saleor 3.2.
 */
export type IProductVariantCreatedProductVariantArgs = {
  channel?: InputMaybe<Scalars["String"]>;
};

/**
 * Deletes a product variant.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type IProductVariantDelete = {
  __typename?: "ProductVariantDelete";
  errors: Array<IProductError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<IProductError>;
  productVariant?: Maybe<IProductVariant>;
};

/**
 * Event sent when product variant is deleted.
 *
 * Added in Saleor 3.2.
 */
export type IProductVariantDeleted = IEvent & {
  __typename?: "ProductVariantDeleted";
  /** Time of the event. */
  issuedAt?: Maybe<Scalars["DateTime"]>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IIssuingPrincipal>;
  /** The product variant the event relates to. */
  productVariant?: Maybe<IProductVariant>;
  /** The application receiving the webhook. */
  recipient?: Maybe<IApp>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars["String"]>;
};

/**
 * Event sent when product variant is deleted.
 *
 * Added in Saleor 3.2.
 */
export type IProductVariantDeletedProductVariantArgs = {
  channel?: InputMaybe<Scalars["String"]>;
};

export type IProductVariantFilterInput = {
  isPreorder?: InputMaybe<Scalars["Boolean"]>;
  metadata?: InputMaybe<Array<IMetadataFilter>>;
  search?: InputMaybe<Scalars["String"]>;
  sku?: InputMaybe<Array<Scalars["String"]>>;
  updatedAt?: InputMaybe<IDateTimeRangeInput>;
};

export type IProductVariantInput = {
  /** List of attributes specific to this variant. */
  attributes?: InputMaybe<Array<IAttributeValueInput>>;
  /**
   * External ID of this product variant.
   *
   * Added in Saleor 3.10.
   */
  externalReference?: InputMaybe<Scalars["String"]>;
  /**
   * Fields required to update the product variant metadata.
   *
   * Added in Saleor 3.8.
   */
  metadata?: InputMaybe<Array<IMetadataInput>>;
  /** Variant name. */
  name?: InputMaybe<Scalars["String"]>;
  /**
   * Determines if variant is in preorder.
   *
   * Added in Saleor 3.1.
   */
  preorder?: InputMaybe<IPreorderSettingsInput>;
  /**
   * Fields required to update the product variant private metadata.
   *
   * Added in Saleor 3.8.
   */
  privateMetadata?: InputMaybe<Array<IMetadataInput>>;
  /**
   * Determines maximum quantity of `ProductVariant`,that can be bought in a single checkout.
   *
   * Added in Saleor 3.1.
   */
  quantityLimitPerCustomer?: InputMaybe<Scalars["Int"]>;
  /** Stock keeping unit. */
  sku?: InputMaybe<Scalars["String"]>;
  /** Determines if the inventory of this variant should be tracked. If false, the quantity won't change when customers buy this item. If the field is not provided, `Shop.trackInventoryByDefault` will be used. */
  trackInventory?: InputMaybe<Scalars["Boolean"]>;
  /** Weight of the Product Variant. */
  weight?: InputMaybe<Scalars["WeightScalar"]>;
};

/**
 * Event sent when product variant metadata is updated.
 *
 * Added in Saleor 3.8.
 */
export type IProductVariantMetadataUpdated = IEvent & {
  __typename?: "ProductVariantMetadataUpdated";
  /** Time of the event. */
  issuedAt?: Maybe<Scalars["DateTime"]>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IIssuingPrincipal>;
  /** The product variant the event relates to. */
  productVariant?: Maybe<IProductVariant>;
  /** The application receiving the webhook. */
  recipient?: Maybe<IApp>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars["String"]>;
};

/**
 * Event sent when product variant metadata is updated.
 *
 * Added in Saleor 3.8.
 */
export type IProductVariantMetadataUpdatedProductVariantArgs = {
  channel?: InputMaybe<Scalars["String"]>;
};

/**
 * Event sent when product variant is out of stock.
 *
 * Added in Saleor 3.2.
 */
export type IProductVariantOutOfStock = IEvent & {
  __typename?: "ProductVariantOutOfStock";
  /** Time of the event. */
  issuedAt?: Maybe<Scalars["DateTime"]>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IIssuingPrincipal>;
  /** The product variant the event relates to. */
  productVariant?: Maybe<IProductVariant>;
  /** The application receiving the webhook. */
  recipient?: Maybe<IApp>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars["String"]>;
  /** Look up a warehouse. */
  warehouse?: Maybe<IWarehouse>;
};

/**
 * Event sent when product variant is out of stock.
 *
 * Added in Saleor 3.2.
 */
export type IProductVariantOutOfStockProductVariantArgs = {
  channel?: InputMaybe<Scalars["String"]>;
};

/**
 * Deactivates product variant preorder. It changes all preorder allocation into regular allocation.
 *
 * Added in Saleor 3.1.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type IProductVariantPreorderDeactivate = {
  __typename?: "ProductVariantPreorderDeactivate";
  errors: Array<IProductError>;
  /** Product variant with ended preorder. */
  productVariant?: Maybe<IProductVariant>;
};

/**
 * Reorder the variants of a product. Mutation updates updated_at on product and triggers PRODUCT_UPDATED webhook.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type IProductVariantReorder = {
  __typename?: "ProductVariantReorder";
  errors: Array<IProductError>;
  product?: Maybe<IProduct>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<IProductError>;
};

/**
 * Reorder product variant attribute values.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type IProductVariantReorderAttributeValues = {
  __typename?: "ProductVariantReorderAttributeValues";
  errors: Array<IProductError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<IProductError>;
  /** Product variant from which attribute values are reordered. */
  productVariant?: Maybe<IProductVariant>;
};

/**
 * Set default variant for a product. Mutation triggers PRODUCT_UPDATED webhook.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type IProductVariantSetDefault = {
  __typename?: "ProductVariantSetDefault";
  errors: Array<IProductError>;
  product?: Maybe<IProduct>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<IProductError>;
};

export type IProductVariantSortField =
  /** Sort products variants by last modified at. */
  "LAST_MODIFIED_AT";

export type IProductVariantSortingInput = {
  /** Specifies the direction in which to sort productVariants. */
  direction: IOrderDirection;
  /** Sort productVariants by the selected field. */
  field: IProductVariantSortField;
};

/**
 * Event sent when product variant stock is updated.
 *
 * Added in Saleor 3.11.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type IProductVariantStockUpdated = IEvent & {
  __typename?: "ProductVariantStockUpdated";
  /** Time of the event. */
  issuedAt?: Maybe<Scalars["DateTime"]>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IIssuingPrincipal>;
  /** The product variant the event relates to. */
  productVariant?: Maybe<IProductVariant>;
  /** The application receiving the webhook. */
  recipient?: Maybe<IApp>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars["String"]>;
  /** Look up a warehouse. */
  warehouse?: Maybe<IWarehouse>;
};

/**
 * Event sent when product variant stock is updated.
 *
 * Added in Saleor 3.11.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type IProductVariantStockUpdatedProductVariantArgs = {
  channel?: InputMaybe<Scalars["String"]>;
};

/**
 * Creates stocks for product variant.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type IProductVariantStocksCreate = {
  __typename?: "ProductVariantStocksCreate";
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  bulkStockErrors: Array<IBulkStockError>;
  errors: Array<IBulkStockError>;
  /** Updated product variant. */
  productVariant?: Maybe<IProductVariant>;
};

/**
 * Delete stocks from product variant.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type IProductVariantStocksDelete = {
  __typename?: "ProductVariantStocksDelete";
  errors: Array<IStockError>;
  /** Updated product variant. */
  productVariant?: Maybe<IProductVariant>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  stockErrors: Array<IStockError>;
};

/**
 * Update stocks for product variant.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type IProductVariantStocksUpdate = {
  __typename?: "ProductVariantStocksUpdate";
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  bulkStockErrors: Array<IBulkStockError>;
  errors: Array<IBulkStockError>;
  /** Updated product variant. */
  productVariant?: Maybe<IProductVariant>;
};

export type IProductVariantStocksUpdateInput = {
  /** List of warehouses to create stocks. */
  create?: InputMaybe<Array<IStockInput>>;
  /** List of stocks to remove. */
  remove?: InputMaybe<Array<Scalars["ID"]>>;
  /** List of stocks to update. */
  update?: InputMaybe<Array<IStockUpdateInput>>;
};

export type IProductVariantTranslatableContent = INode & {
  __typename?: "ProductVariantTranslatableContent";
  /** List of product variant attribute values that can be translated. */
  attributeValues: Array<IAttributeValueTranslatableContent>;
  /** The ID of the product variant translatable content. */
  id: Scalars["ID"];
  /** Name of the product variant to translate. */
  name: Scalars["String"];
  /**
   * Represents a version of a product such as different size or color.
   * @deprecated This field will be removed in Saleor 4.0. Get model fields from the root level queries.
   */
  productVariant?: Maybe<IProductVariant>;
  /** Returns translated product variant fields for the given language code. */
  translation?: Maybe<IProductVariantTranslation>;
};

export type IProductVariantTranslatableContentTranslationArgs = {
  languageCode: ILanguageCodeEnum;
};

/**
 * Creates/updates translations for a product variant.
 *
 * Requires one of the following permissions: MANAGE_TRANSLATIONS.
 */
export type IProductVariantTranslate = {
  __typename?: "ProductVariantTranslate";
  errors: Array<ITranslationError>;
  productVariant?: Maybe<IProductVariant>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  translationErrors: Array<ITranslationError>;
};

/** An enumeration. */
export type IProductVariantTranslateErrorCode =
  | "GRAPHQL_ERROR"
  | "INVALID"
  | "NOT_FOUND"
  | "REQUIRED";

export type IProductVariantTranslation = INode & {
  __typename?: "ProductVariantTranslation";
  /** The ID of the product variant translation. */
  id: Scalars["ID"];
  /** Translation language. */
  language: ILanguageDisplay;
  /** Translated product variant name. */
  name: Scalars["String"];
};

/**
 * Updates an existing variant for product.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type IProductVariantUpdate = {
  __typename?: "ProductVariantUpdate";
  errors: Array<IProductError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<IProductError>;
  productVariant?: Maybe<IProductVariant>;
};

/**
 * Event sent when product variant is updated.
 *
 * Added in Saleor 3.2.
 */
export type IProductVariantUpdated = IEvent & {
  __typename?: "ProductVariantUpdated";
  /** Time of the event. */
  issuedAt?: Maybe<Scalars["DateTime"]>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IIssuingPrincipal>;
  /** The product variant the event relates to. */
  productVariant?: Maybe<IProductVariant>;
  /** The application receiving the webhook. */
  recipient?: Maybe<IApp>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars["String"]>;
};

/**
 * Event sent when product variant is updated.
 *
 * Added in Saleor 3.2.
 */
export type IProductVariantUpdatedProductVariantArgs = {
  channel?: InputMaybe<Scalars["String"]>;
};

export type IProductVariantWhereInput = {
  /** List of conditions that must be met. */
  AND?: InputMaybe<Array<IProductVariantWhereInput>>;
  /** A list of conditions of which at least one must be met. */
  OR?: InputMaybe<Array<IProductVariantWhereInput>>;
  ids?: InputMaybe<Array<Scalars["ID"]>>;
  metadata?: InputMaybe<Array<IMetadataFilter>>;
};

export type IProductWhereInput = {
  /** List of conditions that must be met. */
  AND?: InputMaybe<Array<IProductWhereInput>>;
  /** A list of conditions of which at least one must be met. */
  OR?: InputMaybe<Array<IProductWhereInput>>;
  /** Filter by attributes associated with the product. */
  attributes?: InputMaybe<Array<IAttributeInput>>;
  /** Filter by the date of availability for purchase. */
  availableFrom?: InputMaybe<Scalars["DateTime"]>;
  /** Filter by product category. */
  category?: InputMaybe<IGlobalIdFilterInput>;
  /** Filter by collection. */
  collection?: InputMaybe<IGlobalIdFilterInput>;
  /** Filter on whether product is a gift card or not. */
  giftCard?: InputMaybe<Scalars["Boolean"]>;
  /** Filter by product with category assigned. */
  hasCategory?: InputMaybe<Scalars["Boolean"]>;
  /** Filter by product with preordered variants. */
  hasPreorderedVariants?: InputMaybe<Scalars["Boolean"]>;
  ids?: InputMaybe<Array<Scalars["ID"]>>;
  /** Filter by availability for purchase. */
  isAvailable?: InputMaybe<Scalars["Boolean"]>;
  /** Filter by public visibility. */
  isPublished?: InputMaybe<Scalars["Boolean"]>;
  /** Filter by visibility on the channel. */
  isVisibleInListing?: InputMaybe<Scalars["Boolean"]>;
  metadata?: InputMaybe<Array<IMetadataFilter>>;
  /** Filter by the lowest variant price after discounts. */
  minimalPrice?: InputMaybe<IDecimalFilterInput>;
  /** Filter by product name. */
  name?: InputMaybe<IStringFilterInput>;
  /** Filter by product variant price. */
  price?: InputMaybe<IDecimalFilterInput>;
  /** Filter by product type. */
  productType?: InputMaybe<IGlobalIdFilterInput>;
  /** Filter by the publication date. */
  publishedFrom?: InputMaybe<Scalars["DateTime"]>;
  /** Filter by product slug. */
  slug?: InputMaybe<IStringFilterInput>;
  /** Filter by variants having specific stock status. */
  stockAvailability?: InputMaybe<IStockAvailability>;
  /** Filter by stock of the product variant. */
  stocks?: InputMaybe<IProductStockFilterInput>;
  /** Filter by when was the most recent update. */
  updatedAt?: InputMaybe<IDateTimeRangeInput>;
};

export type IPublishableChannelListingInput = {
  /** ID of a channel. */
  channelId: Scalars["ID"];
  /** Determines if object is visible to customers. */
  isPublished?: InputMaybe<Scalars["Boolean"]>;
  /**
   * Publication date. ISO 8601 standard.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Use `publishedAt` field instead.
   */
  publicationDate?: InputMaybe<Scalars["Date"]>;
  /**
   * Publication date time. ISO 8601 standard.
   *
   * Added in Saleor 3.3.
   */
  publishedAt?: InputMaybe<Scalars["DateTime"]>;
};

export type IQuery = {
  __typename?: "Query";
  _entities?: Maybe<Array<Maybe<I_Entity>>>;
  _service?: Maybe<I_Service>;
  /**
   * Look up an address by ID.
   *
   * Requires one of the following permissions: MANAGE_USERS, OWNER.
   */
  address?: Maybe<IAddress>;
  /** Returns address validation rules. */
  addressValidationRules?: Maybe<IAddressValidationData>;
  /**
   * Look up an app by ID. If ID is not provided, return the currently authenticated app.
   *
   * Requires one of the following permissions: AUTHENTICATED_STAFF_USER AUTHENTICATED_APP. The authenticated app has access to its resources. Fetching different apps requires MANAGE_APPS permission.
   */
  app?: Maybe<IApp>;
  /**
   * Look up an app extension by ID.
   *
   * Added in Saleor 3.1.
   *
   * Requires one of the following permissions: AUTHENTICATED_STAFF_USER, AUTHENTICATED_APP.
   */
  appExtension?: Maybe<IAppExtension>;
  /**
   * List of all extensions.
   *
   * Added in Saleor 3.1.
   *
   * Requires one of the following permissions: AUTHENTICATED_STAFF_USER, AUTHENTICATED_APP.
   */
  appExtensions?: Maybe<IAppExtensionCountableConnection>;
  /**
   * List of the apps.
   *
   * Requires one of the following permissions: AUTHENTICATED_STAFF_USER, MANAGE_APPS.
   */
  apps?: Maybe<IAppCountableConnection>;
  /**
   * List of all apps installations
   *
   * Requires one of the following permissions: MANAGE_APPS.
   */
  appsInstallations: Array<IAppInstallation>;
  /** Look up an attribute by ID, slug or external reference. */
  attribute?: Maybe<IAttribute>;
  /** List of the shop's attributes. */
  attributes?: Maybe<IAttributeCountableConnection>;
  /** List of the shop's categories. */
  categories?: Maybe<ICategoryCountableConnection>;
  /** Look up a category by ID or slug. */
  category?: Maybe<ICategory>;
  /** Look up a channel by ID or slug. */
  channel?: Maybe<IChannel>;
  /**
   * List of all channels.
   *
   * Requires one of the following permissions: AUTHENTICATED_APP, AUTHENTICATED_STAFF_USER.
   */
  channels?: Maybe<Array<IChannel>>;
  /**
   * Look up a checkout by id.
   *
   * Requires one of the following permissions to query checkouts that belong to other users: MANAGE_CHECKOUTS, IMPERSONATE_USER.
   */
  checkout?: Maybe<ICheckout>;
  /**
   * List of checkout lines.
   *
   * Requires one of the following permissions: MANAGE_CHECKOUTS.
   */
  checkoutLines?: Maybe<ICheckoutLineCountableConnection>;
  /**
   * List of checkouts.
   *
   * Requires one of the following permissions: MANAGE_CHECKOUTS.
   */
  checkouts?: Maybe<ICheckoutCountableConnection>;
  /** Look up a collection by ID. Requires one of the following permissions to include the unpublished items: MANAGE_ORDERS, MANAGE_DISCOUNTS, MANAGE_PRODUCTS. */
  collection?: Maybe<ICollection>;
  /** List of the shop's collections. Requires one of the following permissions to include the unpublished items: MANAGE_ORDERS, MANAGE_DISCOUNTS, MANAGE_PRODUCTS. */
  collections?: Maybe<ICollectionCountableConnection>;
  /**
   * List of the shop's customers.
   *
   * Requires one of the following permissions: MANAGE_ORDERS, MANAGE_USERS.
   */
  customers?: Maybe<IUserCountableConnection>;
  /**
   * Look up digital content by ID.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  digitalContent?: Maybe<IDigitalContent>;
  /**
   * List of digital content.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  digitalContents?: Maybe<IDigitalContentCountableConnection>;
  /**
   * List of draft orders.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  draftOrders?: Maybe<IOrderCountableConnection>;
  /**
   * Look up a export file by ID.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  exportFile?: Maybe<IExportFile>;
  /**
   * List of export files.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  exportFiles?: Maybe<IExportFileCountableConnection>;
  /**
   * Look up a gift card by ID.
   *
   * Requires one of the following permissions: MANAGE_GIFT_CARD.
   */
  giftCard?: Maybe<IGiftCard>;
  /**
   * List of gift card currencies.
   *
   * Added in Saleor 3.1.
   *
   * Requires one of the following permissions: MANAGE_GIFT_CARD.
   */
  giftCardCurrencies: Array<Scalars["String"]>;
  /**
   * Gift card related settings from site settings.
   *
   * Requires one of the following permissions: MANAGE_GIFT_CARD.
   */
  giftCardSettings: IGiftCardSettings;
  /**
   * List of gift card tags.
   *
   * Added in Saleor 3.1.
   *
   * Requires one of the following permissions: MANAGE_GIFT_CARD.
   */
  giftCardTags?: Maybe<IGiftCardTagCountableConnection>;
  /**
   * List of gift cards.
   *
   * Requires one of the following permissions: MANAGE_GIFT_CARD.
   */
  giftCards?: Maybe<IGiftCardCountableConnection>;
  /**
   * List of activity events to display on homepage (at the moment it only contains order-events).
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  homepageEvents?: Maybe<IOrderEventCountableConnection>;
  /** Return the currently authenticated user. */
  me?: Maybe<IUser>;
  /** Look up a navigation menu by ID or name. */
  menu?: Maybe<IMenu>;
  /** Look up a menu item by ID. */
  menuItem?: Maybe<IMenuItem>;
  /** List of the storefronts's menu items. */
  menuItems?: Maybe<IMenuItemCountableConnection>;
  /** List of the storefront's menus. */
  menus?: Maybe<IMenuCountableConnection>;
  /** Look up an order by ID or external reference. */
  order?: Maybe<IOrder>;
  /**
   * Look up an order by token.
   * @deprecated This field will be removed in Saleor 4.0.
   */
  orderByToken?: Maybe<IOrder>;
  /**
   * Order related settings from site settings. Returns `orderSettings` for the first `channel` in alphabetical order.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   * @deprecated This field will be removed in Saleor 4.0. Use the `channel` query to fetch the `orderSettings` field instead.
   */
  orderSettings?: Maybe<IOrderSettings>;
  /**
   * List of orders.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  orders?: Maybe<IOrderCountableConnection>;
  /**
   * Return the total sales amount from a specific period.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  ordersTotal?: Maybe<ITaxedMoney>;
  /** Look up a page by ID or slug. */
  page?: Maybe<IPage>;
  /** Look up a page type by ID. */
  pageType?: Maybe<IPageType>;
  /** List of the page types. */
  pageTypes?: Maybe<IPageTypeCountableConnection>;
  /** List of the shop's pages. */
  pages?: Maybe<IPageCountableConnection>;
  /**
   * Look up a payment by ID.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  payment?: Maybe<IPayment>;
  /**
   * List of payments.
   *
   * Requires one of the following permissions: MANAGE_ORDERS.
   */
  payments?: Maybe<IPaymentCountableConnection>;
  /**
   * Look up permission group by ID.
   *
   * Requires one of the following permissions: MANAGE_STAFF.
   */
  permissionGroup?: Maybe<IGroup>;
  /**
   * List of permission groups.
   *
   * Requires one of the following permissions: MANAGE_STAFF.
   */
  permissionGroups?: Maybe<IGroupCountableConnection>;
  /**
   * Look up a plugin by ID.
   *
   * Requires one of the following permissions: MANAGE_PLUGINS.
   */
  plugin?: Maybe<IPlugin>;
  /**
   * List of plugins.
   *
   * Requires one of the following permissions: MANAGE_PLUGINS.
   */
  plugins?: Maybe<IPluginCountableConnection>;
  /** Look up a product by ID. Requires one of the following permissions to include the unpublished items: MANAGE_ORDERS, MANAGE_DISCOUNTS, MANAGE_PRODUCTS. */
  product?: Maybe<IProduct>;
  /** Look up a product type by ID. */
  productType?: Maybe<IProductType>;
  /** List of the shop's product types. */
  productTypes?: Maybe<IProductTypeCountableConnection>;
  /** Look up a product variant by ID or SKU. Requires one of the following permissions to include the unpublished items: MANAGE_ORDERS, MANAGE_DISCOUNTS, MANAGE_PRODUCTS. */
  productVariant?: Maybe<IProductVariant>;
  /** List of product variants. Requires one of the following permissions to include the unpublished items: MANAGE_ORDERS, MANAGE_DISCOUNTS, MANAGE_PRODUCTS. */
  productVariants?: Maybe<IProductVariantCountableConnection>;
  /** List of the shop's products. Requires one of the following permissions to include the unpublished items: MANAGE_ORDERS, MANAGE_DISCOUNTS, MANAGE_PRODUCTS. */
  products?: Maybe<IProductCountableConnection>;
  /**
   * List of top selling products.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  reportProductSales?: Maybe<IProductVariantCountableConnection>;
  /**
   * Look up a sale by ID.
   *
   * Requires one of the following permissions: MANAGE_DISCOUNTS.
   */
  sale?: Maybe<ISale>;
  /**
   * List of the shop's sales.
   *
   * Requires one of the following permissions: MANAGE_DISCOUNTS.
   */
  sales?: Maybe<ISaleCountableConnection>;
  /**
   * Look up a shipping zone by ID.
   *
   * Requires one of the following permissions: MANAGE_SHIPPING.
   */
  shippingZone?: Maybe<IShippingZone>;
  /**
   * List of the shop's shipping zones.
   *
   * Requires one of the following permissions: MANAGE_SHIPPING.
   */
  shippingZones?: Maybe<IShippingZoneCountableConnection>;
  /** Return information about the shop. */
  shop: IShop;
  /**
   * List of the shop's staff users.
   *
   * Requires one of the following permissions: MANAGE_STAFF.
   */
  staffUsers?: Maybe<IUserCountableConnection>;
  /**
   * Look up a stock by ID
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  stock?: Maybe<IStock>;
  /**
   * List of stocks.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS.
   */
  stocks?: Maybe<IStockCountableConnection>;
  /**
   * Look up a tax class.
   *
   * Added in Saleor 3.9.
   *
   * Requires one of the following permissions: AUTHENTICATED_STAFF_USER, AUTHENTICATED_APP.
   */
  taxClass?: Maybe<ITaxClass>;
  /**
   * List of tax classes.
   *
   * Added in Saleor 3.9.
   *
   * Requires one of the following permissions: AUTHENTICATED_STAFF_USER, AUTHENTICATED_APP.
   */
  taxClasses?: Maybe<ITaxClassCountableConnection>;
  /**
   * Look up a tax configuration.
   *
   * Added in Saleor 3.9.
   *
   * Requires one of the following permissions: AUTHENTICATED_STAFF_USER, AUTHENTICATED_APP.
   */
  taxConfiguration?: Maybe<ITaxConfiguration>;
  /**
   * List of tax configurations.
   *
   * Added in Saleor 3.9.
   *
   * Requires one of the following permissions: AUTHENTICATED_STAFF_USER, AUTHENTICATED_APP.
   */
  taxConfigurations?: Maybe<ITaxConfigurationCountableConnection>;
  /**
   * Tax class rates grouped by country.
   *
   * Requires one of the following permissions: AUTHENTICATED_STAFF_USER, AUTHENTICATED_APP.
   */
  taxCountryConfiguration?: Maybe<ITaxCountryConfiguration>;
  /**
   *
   *
   * Requires one of the following permissions: AUTHENTICATED_STAFF_USER, AUTHENTICATED_APP.
   */
  taxCountryConfigurations?: Maybe<Array<ITaxCountryConfiguration>>;
  /** List of all tax rates available from tax gateway. */
  taxTypes?: Maybe<Array<ITaxType>>;
  /**
   * Look up a transaction by ID.
   *
   * Added in Saleor 3.6.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   *
   * Requires one of the following permissions: HANDLE_PAYMENTS.
   */
  transaction?: Maybe<ITransactionItem>;
  /**
   * Lookup a translatable item by ID.
   *
   * Requires one of the following permissions: MANAGE_TRANSLATIONS.
   */
  translation?: Maybe<ITranslatableItem>;
  /**
   * Returns a list of all translatable items of a given kind.
   *
   * Requires one of the following permissions: MANAGE_TRANSLATIONS.
   */
  translations?: Maybe<ITranslatableItemConnection>;
  /**
   * Look up a user by ID or email address.
   *
   * Requires one of the following permissions: MANAGE_STAFF, MANAGE_USERS, MANAGE_ORDERS.
   */
  user?: Maybe<IUser>;
  /**
   * Look up a voucher by ID.
   *
   * Requires one of the following permissions: MANAGE_DISCOUNTS.
   */
  voucher?: Maybe<IVoucher>;
  /**
   * List of the shop's vouchers.
   *
   * Requires one of the following permissions: MANAGE_DISCOUNTS.
   */
  vouchers?: Maybe<IVoucherCountableConnection>;
  /**
   * Look up a warehouse by ID.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS, MANAGE_ORDERS, MANAGE_SHIPPING.
   */
  warehouse?: Maybe<IWarehouse>;
  /**
   * List of warehouses.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS, MANAGE_ORDERS, MANAGE_SHIPPING.
   */
  warehouses?: Maybe<IWarehouseCountableConnection>;
  /** Look up a webhook by ID. Requires one of the following permissions: MANAGE_APPS, OWNER. */
  webhook?: Maybe<IWebhook>;
  /**
   * List of all available webhook events.
   *
   * Requires one of the following permissions: MANAGE_APPS.
   * @deprecated This field will be removed in Saleor 4.0. Use `WebhookEventTypeAsyncEnum` and `WebhookEventTypeSyncEnum` to get available event types.
   */
  webhookEvents?: Maybe<Array<IWebhookEvent>>;
  /** Retrieve a sample payload for a given webhook event based on real data. It can be useful for some integrations where sample payload is required. */
  webhookSamplePayload?: Maybe<Scalars["JSONString"]>;
};

export type IQuery_EntitiesArgs = {
  representations?: InputMaybe<Array<InputMaybe<Scalars["_Any"]>>>;
};

export type IQueryAddressArgs = {
  id: Scalars["ID"];
};

export type IQueryAddressValidationRulesArgs = {
  city?: InputMaybe<Scalars["String"]>;
  cityArea?: InputMaybe<Scalars["String"]>;
  countryArea?: InputMaybe<Scalars["String"]>;
  countryCode: ICountryCode;
};

export type IQueryAppArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type IQueryAppExtensionArgs = {
  id: Scalars["ID"];
};

export type IQueryAppExtensionsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  filter?: InputMaybe<IAppExtensionFilterInput>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type IQueryAppsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  filter?: InputMaybe<IAppFilterInput>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  sortBy?: InputMaybe<IAppSortingInput>;
};

export type IQueryAttributeArgs = {
  externalReference?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  slug?: InputMaybe<Scalars["String"]>;
};

export type IQueryAttributesArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  channel?: InputMaybe<Scalars["String"]>;
  filter?: InputMaybe<IAttributeFilterInput>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  search?: InputMaybe<Scalars["String"]>;
  sortBy?: InputMaybe<IAttributeSortingInput>;
  where?: InputMaybe<IAttributeWhereInput>;
};

export type IQueryCategoriesArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  filter?: InputMaybe<ICategoryFilterInput>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  level?: InputMaybe<Scalars["Int"]>;
  sortBy?: InputMaybe<ICategorySortingInput>;
  where?: InputMaybe<ICategoryWhereInput>;
};

export type IQueryCategoryArgs = {
  id?: InputMaybe<Scalars["ID"]>;
  slug?: InputMaybe<Scalars["String"]>;
};

export type IQueryChannelArgs = {
  id?: InputMaybe<Scalars["ID"]>;
  slug?: InputMaybe<Scalars["String"]>;
};

export type IQueryCheckoutArgs = {
  id?: InputMaybe<Scalars["ID"]>;
  token?: InputMaybe<Scalars["UUID"]>;
};

export type IQueryCheckoutLinesArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type IQueryCheckoutsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  channel?: InputMaybe<Scalars["String"]>;
  filter?: InputMaybe<ICheckoutFilterInput>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  sortBy?: InputMaybe<ICheckoutSortingInput>;
};

export type IQueryCollectionArgs = {
  channel?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  slug?: InputMaybe<Scalars["String"]>;
};

export type IQueryCollectionsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  channel?: InputMaybe<Scalars["String"]>;
  filter?: InputMaybe<ICollectionFilterInput>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  sortBy?: InputMaybe<ICollectionSortingInput>;
  where?: InputMaybe<ICollectionWhereInput>;
};

export type IQueryCustomersArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  filter?: InputMaybe<ICustomerFilterInput>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  sortBy?: InputMaybe<IUserSortingInput>;
};

export type IQueryDigitalContentArgs = {
  id: Scalars["ID"];
};

export type IQueryDigitalContentsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type IQueryDraftOrdersArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  filter?: InputMaybe<IOrderDraftFilterInput>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  sortBy?: InputMaybe<IOrderSortingInput>;
};

export type IQueryExportFileArgs = {
  id: Scalars["ID"];
};

export type IQueryExportFilesArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  filter?: InputMaybe<IExportFileFilterInput>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  sortBy?: InputMaybe<IExportFileSortingInput>;
};

export type IQueryGiftCardArgs = {
  id: Scalars["ID"];
};

export type IQueryGiftCardTagsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  filter?: InputMaybe<IGiftCardTagFilterInput>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type IQueryGiftCardsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  filter?: InputMaybe<IGiftCardFilterInput>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  search?: InputMaybe<Scalars["String"]>;
  sortBy?: InputMaybe<IGiftCardSortingInput>;
};

export type IQueryHomepageEventsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type IQueryMenuArgs = {
  channel?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  name?: InputMaybe<Scalars["String"]>;
  slug?: InputMaybe<Scalars["String"]>;
};

export type IQueryMenuItemArgs = {
  channel?: InputMaybe<Scalars["String"]>;
  id: Scalars["ID"];
};

export type IQueryMenuItemsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  channel?: InputMaybe<Scalars["String"]>;
  filter?: InputMaybe<IMenuItemFilterInput>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  sortBy?: InputMaybe<IMenuItemSortingInput>;
};

export type IQueryMenusArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  channel?: InputMaybe<Scalars["String"]>;
  filter?: InputMaybe<IMenuFilterInput>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  sortBy?: InputMaybe<IMenuSortingInput>;
};

export type IQueryOrderArgs = {
  externalReference?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
};

export type IQueryOrderByTokenArgs = {
  token: Scalars["UUID"];
};

export type IQueryOrdersArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  channel?: InputMaybe<Scalars["String"]>;
  filter?: InputMaybe<IOrderFilterInput>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  sortBy?: InputMaybe<IOrderSortingInput>;
};

export type IQueryOrdersTotalArgs = {
  channel?: InputMaybe<Scalars["String"]>;
  period?: InputMaybe<IReportingPeriod>;
};

export type IQueryPageArgs = {
  id?: InputMaybe<Scalars["ID"]>;
  slug?: InputMaybe<Scalars["String"]>;
};

export type IQueryPageTypeArgs = {
  id: Scalars["ID"];
};

export type IQueryPageTypesArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  filter?: InputMaybe<IPageTypeFilterInput>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  sortBy?: InputMaybe<IPageTypeSortingInput>;
};

export type IQueryPagesArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  filter?: InputMaybe<IPageFilterInput>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  sortBy?: InputMaybe<IPageSortingInput>;
};

export type IQueryPaymentArgs = {
  id: Scalars["ID"];
};

export type IQueryPaymentsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  filter?: InputMaybe<IPaymentFilterInput>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type IQueryPermissionGroupArgs = {
  id: Scalars["ID"];
};

export type IQueryPermissionGroupsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  filter?: InputMaybe<IPermissionGroupFilterInput>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  sortBy?: InputMaybe<IPermissionGroupSortingInput>;
};

export type IQueryPluginArgs = {
  id: Scalars["ID"];
};

export type IQueryPluginsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  filter?: InputMaybe<IPluginFilterInput>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  sortBy?: InputMaybe<IPluginSortingInput>;
};

export type IQueryProductArgs = {
  channel?: InputMaybe<Scalars["String"]>;
  externalReference?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  slug?: InputMaybe<Scalars["String"]>;
};

export type IQueryProductTypeArgs = {
  id: Scalars["ID"];
};

export type IQueryProductTypesArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  filter?: InputMaybe<IProductTypeFilterInput>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  sortBy?: InputMaybe<IProductTypeSortingInput>;
};

export type IQueryProductVariantArgs = {
  channel?: InputMaybe<Scalars["String"]>;
  externalReference?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  sku?: InputMaybe<Scalars["String"]>;
};

export type IQueryProductVariantsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  channel?: InputMaybe<Scalars["String"]>;
  filter?: InputMaybe<IProductVariantFilterInput>;
  first?: InputMaybe<Scalars["Int"]>;
  ids?: InputMaybe<Array<Scalars["ID"]>>;
  last?: InputMaybe<Scalars["Int"]>;
  sortBy?: InputMaybe<IProductVariantSortingInput>;
  where?: InputMaybe<IProductVariantWhereInput>;
};

export type IQueryProductsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  channel?: InputMaybe<Scalars["String"]>;
  filter?: InputMaybe<IProductFilterInput>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  search?: InputMaybe<Scalars["String"]>;
  sortBy?: InputMaybe<IProductOrder>;
  where?: InputMaybe<IProductWhereInput>;
};

export type IQueryReportProductSalesArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  channel: Scalars["String"];
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  period: IReportingPeriod;
};

export type IQuerySaleArgs = {
  channel?: InputMaybe<Scalars["String"]>;
  id: Scalars["ID"];
};

export type IQuerySalesArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  channel?: InputMaybe<Scalars["String"]>;
  filter?: InputMaybe<ISaleFilterInput>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  query?: InputMaybe<Scalars["String"]>;
  sortBy?: InputMaybe<ISaleSortingInput>;
};

export type IQueryShippingZoneArgs = {
  channel?: InputMaybe<Scalars["String"]>;
  id: Scalars["ID"];
};

export type IQueryShippingZonesArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  channel?: InputMaybe<Scalars["String"]>;
  filter?: InputMaybe<IShippingZoneFilterInput>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type IQueryStaffUsersArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  filter?: InputMaybe<IStaffUserInput>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  sortBy?: InputMaybe<IUserSortingInput>;
};

export type IQueryStockArgs = {
  id: Scalars["ID"];
};

export type IQueryStocksArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  filter?: InputMaybe<IStockFilterInput>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type IQueryTaxClassArgs = {
  id: Scalars["ID"];
};

export type IQueryTaxClassesArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  filter?: InputMaybe<ITaxClassFilterInput>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  sortBy?: InputMaybe<ITaxClassSortingInput>;
};

export type IQueryTaxConfigurationArgs = {
  id: Scalars["ID"];
};

export type IQueryTaxConfigurationsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  filter?: InputMaybe<ITaxConfigurationFilterInput>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

export type IQueryTaxCountryConfigurationArgs = {
  countryCode: ICountryCode;
};

export type IQueryTransactionArgs = {
  id: Scalars["ID"];
};

export type IQueryTranslationArgs = {
  id: Scalars["ID"];
  kind: ITranslatableKinds;
};

export type IQueryTranslationsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  kind: ITranslatableKinds;
  last?: InputMaybe<Scalars["Int"]>;
};

export type IQueryUserArgs = {
  email?: InputMaybe<Scalars["String"]>;
  externalReference?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
};

export type IQueryVoucherArgs = {
  channel?: InputMaybe<Scalars["String"]>;
  id: Scalars["ID"];
};

export type IQueryVouchersArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  channel?: InputMaybe<Scalars["String"]>;
  filter?: InputMaybe<IVoucherFilterInput>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  query?: InputMaybe<Scalars["String"]>;
  sortBy?: InputMaybe<IVoucherSortingInput>;
};

export type IQueryWarehouseArgs = {
  externalReference?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
};

export type IQueryWarehousesArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  filter?: InputMaybe<IWarehouseFilterInput>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  sortBy?: InputMaybe<IWarehouseSortingInput>;
};

export type IQueryWebhookArgs = {
  id: Scalars["ID"];
};

export type IQueryWebhookSamplePayloadArgs = {
  eventType: IWebhookSampleEventTypeEnum;
};

/** Represents a reduced VAT rate for a particular type of goods. */
export type IReducedRate = {
  __typename?: "ReducedRate";
  /** Reduced VAT rate in percent. */
  rate: Scalars["Float"];
  /** A type of goods. */
  rateType: Scalars["String"];
};

/** Refresh JWT token. Mutation tries to take refreshToken from the input. If it fails it will try to take `refreshToken` from the http-only cookie `refreshToken`. `csrfToken` is required when `refreshToken` is provided as a cookie. */
export type IRefreshToken = {
  __typename?: "RefreshToken";
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<IAccountError>;
  errors: Array<IAccountError>;
  /** JWT token, required to authenticate. */
  token?: Maybe<Scalars["String"]>;
  /** A user instance. */
  user?: Maybe<IUser>;
};

export type IReorderInput = {
  /** The ID of the item to move. */
  id: Scalars["ID"];
  /** The new relative sorting position of the item (from -inf to +inf). 1 moves the item one position forward, -1 moves the item one position backward, 0 leaves the item unchanged. */
  sortOrder?: InputMaybe<Scalars["Int"]>;
};

export type IReportingPeriod = "THIS_MONTH" | "TODAY";

/**
 * Request email change of the logged in user.
 *
 * Requires one of the following permissions: AUTHENTICATED_USER.
 *
 * Triggers the following webhook events:
 * - NOTIFY_USER (async): A notification for account email change.
 * - ACCOUNT_CHANGE_EMAIL_REQUESTED (async): An account email change was requested.
 */
export type IRequestEmailChange = {
  __typename?: "RequestEmailChange";
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<IAccountError>;
  errors: Array<IAccountError>;
  /** A user instance. */
  user?: Maybe<IUser>;
};

/**
 * Sends an email with the account password modification link.
 *
 * Triggers the following webhook events:
 * - NOTIFY_USER (async): A notification for password reset.
 * - ACCOUNT_SET_PASSWORD_REQUESTED (async): Setting a new password for the account is requested.
 * - STAFF_SET_PASSWORD_REQUESTED (async): Setting a new password for the staff account is requested.
 */
export type IRequestPasswordReset = {
  __typename?: "RequestPasswordReset";
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<IAccountError>;
  errors: Array<IAccountError>;
};

/** Sales allow creating discounts for categories, collections or products and are visible to all the customers. */
export type ISale = INode &
  IObjectWithMetadata & {
    __typename?: "Sale";
    /** List of categories this sale applies to. */
    categories?: Maybe<ICategoryCountableConnection>;
    /**
     * List of channels available for the sale.
     *
     * Requires one of the following permissions: MANAGE_DISCOUNTS.
     */
    channelListings?: Maybe<Array<ISaleChannelListing>>;
    /**
     * List of collections this sale applies to.
     *
     * Requires one of the following permissions: MANAGE_DISCOUNTS.
     */
    collections?: Maybe<ICollectionCountableConnection>;
    /** The date and time when the sale was created. */
    created: Scalars["DateTime"];
    /** Currency code for sale. */
    currency?: Maybe<Scalars["String"]>;
    /** Sale value. */
    discountValue?: Maybe<Scalars["Float"]>;
    /** The end date and time of the sale. */
    endDate?: Maybe<Scalars["DateTime"]>;
    /** The ID of the sale. */
    id: Scalars["ID"];
    /** List of public metadata items. Can be accessed without permissions. */
    metadata: Array<IMetadataItem>;
    /**
     * A single key from public metadata.
     *
     * Tip: Use GraphQL aliases to fetch multiple keys.
     *
     * Added in Saleor 3.3.
     */
    metafield?: Maybe<Scalars["String"]>;
    /**
     * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
     *
     * Added in Saleor 3.3.
     */
    metafields?: Maybe<Scalars["Metadata"]>;
    /** The name of the sale. */
    name: Scalars["String"];
    /** List of private metadata items. Requires staff permissions to access. */
    privateMetadata: Array<IMetadataItem>;
    /**
     * A single key from private metadata. Requires staff permissions to access.
     *
     * Tip: Use GraphQL aliases to fetch multiple keys.
     *
     * Added in Saleor 3.3.
     */
    privateMetafield?: Maybe<Scalars["String"]>;
    /**
     * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
     *
     * Added in Saleor 3.3.
     */
    privateMetafields?: Maybe<Scalars["Metadata"]>;
    /**
     * List of products this sale applies to.
     *
     * Requires one of the following permissions: MANAGE_DISCOUNTS.
     */
    products?: Maybe<IProductCountableConnection>;
    /** The start date and time of the sale. */
    startDate: Scalars["DateTime"];
    /** Returns translated sale fields for the given language code. */
    translation?: Maybe<ISaleTranslation>;
    /** Type of the sale, fixed or percentage. */
    type: ISaleType;
    /** The date and time when the sale was updated. */
    updatedAt: Scalars["DateTime"];
    /**
     * List of product variants this sale applies to.
     *
     * Added in Saleor 3.1.
     *
     * Requires one of the following permissions: MANAGE_DISCOUNTS.
     */
    variants?: Maybe<IProductVariantCountableConnection>;
  };

/** Sales allow creating discounts for categories, collections or products and are visible to all the customers. */
export type ISaleCategoriesArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

/** Sales allow creating discounts for categories, collections or products and are visible to all the customers. */
export type ISaleCollectionsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

/** Sales allow creating discounts for categories, collections or products and are visible to all the customers. */
export type ISaleMetafieldArgs = {
  key: Scalars["String"];
};

/** Sales allow creating discounts for categories, collections or products and are visible to all the customers. */
export type ISaleMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars["String"]>>;
};

/** Sales allow creating discounts for categories, collections or products and are visible to all the customers. */
export type ISalePrivateMetafieldArgs = {
  key: Scalars["String"];
};

/** Sales allow creating discounts for categories, collections or products and are visible to all the customers. */
export type ISalePrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars["String"]>>;
};

/** Sales allow creating discounts for categories, collections or products and are visible to all the customers. */
export type ISaleProductsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

/** Sales allow creating discounts for categories, collections or products and are visible to all the customers. */
export type ISaleTranslationArgs = {
  languageCode: ILanguageCodeEnum;
};

/** Sales allow creating discounts for categories, collections or products and are visible to all the customers. */
export type ISaleVariantsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

/**
 * Adds products, categories, collections to a voucher.
 *
 * Requires one of the following permissions: MANAGE_DISCOUNTS.
 *
 * Triggers the following webhook events:
 * - SALE_UPDATED (async): A sale was updated.
 */
export type ISaleAddCatalogues = {
  __typename?: "SaleAddCatalogues";
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  discountErrors: Array<IDiscountError>;
  errors: Array<IDiscountError>;
  /** Sale of which catalogue IDs will be modified. */
  sale?: Maybe<ISale>;
};

/**
 * Deletes sales.
 *
 * Requires one of the following permissions: MANAGE_DISCOUNTS.
 *
 * Triggers the following webhook events:
 * - SALE_DELETED (async): A sale was deleted.
 */
export type ISaleBulkDelete = {
  __typename?: "SaleBulkDelete";
  /** Returns how many objects were affected. */
  count: Scalars["Int"];
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  discountErrors: Array<IDiscountError>;
  errors: Array<IDiscountError>;
};

/** Represents sale channel listing. */
export type ISaleChannelListing = INode & {
  __typename?: "SaleChannelListing";
  /** The channel in which the sale is available. */
  channel: IChannel;
  /** The currency in which the discount value is specified. */
  currency: Scalars["String"];
  /** The value of the discount applied to the sale in the channel. */
  discountValue: Scalars["Float"];
  /** The ID of the channel listing. */
  id: Scalars["ID"];
};

export type ISaleChannelListingAddInput = {
  /** ID of a channel. */
  channelId: Scalars["ID"];
  /** The value of the discount. */
  discountValue: Scalars["PositiveDecimal"];
};

export type ISaleChannelListingInput = {
  /** List of channels to which the sale should be assigned. */
  addChannels?: InputMaybe<Array<ISaleChannelListingAddInput>>;
  /** List of channels from which the sale should be unassigned. */
  removeChannels?: InputMaybe<Array<Scalars["ID"]>>;
};

/**
 * Manage sale's availability in channels.
 *
 * Requires one of the following permissions: MANAGE_DISCOUNTS.
 */
export type ISaleChannelListingUpdate = {
  __typename?: "SaleChannelListingUpdate";
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  discountErrors: Array<IDiscountError>;
  errors: Array<IDiscountError>;
  /** An updated sale instance. */
  sale?: Maybe<ISale>;
};

export type ISaleCountableConnection = {
  __typename?: "SaleCountableConnection";
  edges: Array<ISaleCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: IPageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars["Int"]>;
};

export type ISaleCountableEdge = {
  __typename?: "SaleCountableEdge";
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node: ISale;
};

/**
 * Creates a new sale.
 *
 * Requires one of the following permissions: MANAGE_DISCOUNTS.
 *
 * Triggers the following webhook events:
 * - SALE_CREATED (async): A sale was created.
 */
export type ISaleCreate = {
  __typename?: "SaleCreate";
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  discountErrors: Array<IDiscountError>;
  errors: Array<IDiscountError>;
  sale?: Maybe<ISale>;
};

/**
 * Event sent when new sale is created.
 *
 * Added in Saleor 3.2.
 */
export type ISaleCreated = IEvent & {
  __typename?: "SaleCreated";
  /** Time of the event. */
  issuedAt?: Maybe<Scalars["DateTime"]>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IIssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<IApp>;
  /** The sale the event relates to. */
  sale?: Maybe<ISale>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars["String"]>;
};

/**
 * Event sent when new sale is created.
 *
 * Added in Saleor 3.2.
 */
export type ISaleCreatedSaleArgs = {
  channel?: InputMaybe<Scalars["String"]>;
};

/**
 * Deletes a sale.
 *
 * Requires one of the following permissions: MANAGE_DISCOUNTS.
 *
 * Triggers the following webhook events:
 * - SALE_DELETED (async): A sale was deleted.
 */
export type ISaleDelete = {
  __typename?: "SaleDelete";
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  discountErrors: Array<IDiscountError>;
  errors: Array<IDiscountError>;
  sale?: Maybe<ISale>;
};

/**
 * Event sent when sale is deleted.
 *
 * Added in Saleor 3.2.
 */
export type ISaleDeleted = IEvent & {
  __typename?: "SaleDeleted";
  /** Time of the event. */
  issuedAt?: Maybe<Scalars["DateTime"]>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IIssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<IApp>;
  /** The sale the event relates to. */
  sale?: Maybe<ISale>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars["String"]>;
};

/**
 * Event sent when sale is deleted.
 *
 * Added in Saleor 3.2.
 */
export type ISaleDeletedSaleArgs = {
  channel?: InputMaybe<Scalars["String"]>;
};

export type ISaleFilterInput = {
  metadata?: InputMaybe<Array<IMetadataFilter>>;
  saleType?: InputMaybe<IDiscountValueTypeEnum>;
  search?: InputMaybe<Scalars["String"]>;
  started?: InputMaybe<IDateTimeRangeInput>;
  status?: InputMaybe<Array<IDiscountStatusEnum>>;
  updatedAt?: InputMaybe<IDateTimeRangeInput>;
};

export type ISaleInput = {
  /** Categories related to the discount. */
  categories?: InputMaybe<Array<Scalars["ID"]>>;
  /** Collections related to the discount. */
  collections?: InputMaybe<Array<Scalars["ID"]>>;
  /** End date of the voucher in ISO 8601 format. */
  endDate?: InputMaybe<Scalars["DateTime"]>;
  /** Voucher name. */
  name?: InputMaybe<Scalars["String"]>;
  /** Products related to the discount. */
  products?: InputMaybe<Array<Scalars["ID"]>>;
  /** Start date of the voucher in ISO 8601 format. */
  startDate?: InputMaybe<Scalars["DateTime"]>;
  /** Fixed or percentage. */
  type?: InputMaybe<IDiscountValueTypeEnum>;
  /** Value of the voucher. */
  value?: InputMaybe<Scalars["PositiveDecimal"]>;
  variants?: InputMaybe<Array<Scalars["ID"]>>;
};

/**
 * Removes products, categories, collections from a sale.
 *
 * Requires one of the following permissions: MANAGE_DISCOUNTS.
 *
 * Triggers the following webhook events:
 * - SALE_UPDATED (async): A sale was updated.
 */
export type ISaleRemoveCatalogues = {
  __typename?: "SaleRemoveCatalogues";
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  discountErrors: Array<IDiscountError>;
  errors: Array<IDiscountError>;
  /** Sale of which catalogue IDs will be modified. */
  sale?: Maybe<ISale>;
};

export type ISaleSortField =
  /** Sort sales by created at. */
  | "CREATED_AT"
  /** Sort sales by end date. */
  | "END_DATE"
  /** Sort sales by last modified at. */
  | "LAST_MODIFIED_AT"
  /** Sort sales by name. */
  | "NAME"
  /** Sort sales by start date. */
  | "START_DATE"
  /** Sort sales by type. */
  | "TYPE"
  /**
   * Sort sales by value.
   *
   * This option requires a channel filter to work as the values can vary between channels.
   */
  | "VALUE";

export type ISaleSortingInput = {
  /**
   * Specifies the channel in which to sort the data.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Use root-level channel argument instead.
   */
  channel?: InputMaybe<Scalars["String"]>;
  /** Specifies the direction in which to sort sales. */
  direction: IOrderDirection;
  /** Sort sales by the selected field. */
  field: ISaleSortField;
};

/**
 * The event informs about the start or end of the sale.
 *
 * Added in Saleor 3.5.
 */
export type ISaleToggle = IEvent & {
  __typename?: "SaleToggle";
  /** Time of the event. */
  issuedAt?: Maybe<Scalars["DateTime"]>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IIssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<IApp>;
  /**
   * The sale the event relates to.
   *
   * Added in Saleor 3.5.
   */
  sale?: Maybe<ISale>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars["String"]>;
};

/**
 * The event informs about the start or end of the sale.
 *
 * Added in Saleor 3.5.
 */
export type ISaleToggleSaleArgs = {
  channel?: InputMaybe<Scalars["String"]>;
};

export type ISaleTranslatableContent = INode & {
  __typename?: "SaleTranslatableContent";
  /** The ID of the sale translatable content. */
  id: Scalars["ID"];
  /** Name of the sale to translate. */
  name: Scalars["String"];
  /**
   * Sales allow creating discounts for categories, collections or products and are visible to all the customers.
   *
   * Requires one of the following permissions: MANAGE_DISCOUNTS.
   * @deprecated This field will be removed in Saleor 4.0. Get model fields from the root level queries.
   */
  sale?: Maybe<ISale>;
  /** Returns translated sale fields for the given language code. */
  translation?: Maybe<ISaleTranslation>;
};

export type ISaleTranslatableContentTranslationArgs = {
  languageCode: ILanguageCodeEnum;
};

/**
 * Creates/updates translations for a sale.
 *
 * Requires one of the following permissions: MANAGE_TRANSLATIONS.
 */
export type ISaleTranslate = {
  __typename?: "SaleTranslate";
  errors: Array<ITranslationError>;
  sale?: Maybe<ISale>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  translationErrors: Array<ITranslationError>;
};

export type ISaleTranslation = INode & {
  __typename?: "SaleTranslation";
  /** The ID of the sale translation. */
  id: Scalars["ID"];
  /** Translation language. */
  language: ILanguageDisplay;
  /** Translated name of sale. */
  name?: Maybe<Scalars["String"]>;
};

export type ISaleType = "FIXED" | "PERCENTAGE";

/**
 * Updates a sale.
 *
 * Requires one of the following permissions: MANAGE_DISCOUNTS.
 *
 * Triggers the following webhook events:
 * - SALE_UPDATED (async): A sale was updated.
 * - SALE_TOGGLE (async): Optionally triggered when a sale is started or stopped.
 */
export type ISaleUpdate = {
  __typename?: "SaleUpdate";
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  discountErrors: Array<IDiscountError>;
  errors: Array<IDiscountError>;
  sale?: Maybe<ISale>;
};

/**
 * Event sent when sale is updated.
 *
 * Added in Saleor 3.2.
 */
export type ISaleUpdated = IEvent & {
  __typename?: "SaleUpdated";
  /** Time of the event. */
  issuedAt?: Maybe<Scalars["DateTime"]>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IIssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<IApp>;
  /** The sale the event relates to. */
  sale?: Maybe<ISale>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars["String"]>;
};

/**
 * Event sent when sale is updated.
 *
 * Added in Saleor 3.2.
 */
export type ISaleUpdatedSaleArgs = {
  channel?: InputMaybe<Scalars["String"]>;
};

/** Represents a custom attribute. */
export type ISelectedAttribute = {
  __typename?: "SelectedAttribute";
  /** Name of an attribute displayed in the interface. */
  attribute: IAttribute;
  /** Values of an attribute. */
  values: Array<IAttributeValue>;
};

/**
 * Sends a notification confirmation.
 *
 * Added in Saleor 3.15.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 *
 * Requires one of the following permissions: AUTHENTICATED_USER.
 *
 * Triggers the following webhook events:
 * - NOTIFY_USER (async): A notification for account confirmation.
 * - ACCOUNT_CONFIRMATION_REQUESTED (async): An account confirmation was requested. This event is always sent regardless of settings.
 */
export type ISendConfirmationEmail = {
  __typename?: "SendConfirmationEmail";
  errors: Array<ISendConfirmationEmailError>;
};

export type ISendConfirmationEmailError = {
  __typename?: "SendConfirmationEmailError";
  /** The error code. */
  code: ISendConfirmationEmailErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars["String"]>;
  /** The error message. */
  message?: Maybe<Scalars["String"]>;
};

/** An enumeration. */
export type ISendConfirmationEmailErrorCode =
  | "ACCOUNT_CONFIRMED"
  | "CONFIRMATION_ALREADY_REQUESTED"
  | "INVALID"
  | "MISSING_CHANNEL_SLUG";

export type ISeoInput = {
  /** SEO description. */
  description?: InputMaybe<Scalars["String"]>;
  /** SEO title. */
  title?: InputMaybe<Scalars["String"]>;
};

/** Sets the user's password from the token sent by email using the RequestPasswordReset mutation. */
export type ISetPassword = {
  __typename?: "SetPassword";
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<IAccountError>;
  /** CSRF token required to re-generate access token. */
  csrfToken?: Maybe<Scalars["String"]>;
  errors: Array<IAccountError>;
  /** JWT refresh token, required to re-generate access token. */
  refreshToken?: Maybe<Scalars["String"]>;
  /** JWT token, required to authenticate. */
  token?: Maybe<Scalars["String"]>;
  /** A user instance. */
  user?: Maybe<IUser>;
};

export type IShippingError = {
  __typename?: "ShippingError";
  /** List of channels IDs which causes the error. */
  channels?: Maybe<Array<Scalars["ID"]>>;
  /** The error code. */
  code: IShippingErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars["String"]>;
  /** The error message. */
  message?: Maybe<Scalars["String"]>;
  /** List of warehouse IDs which causes the error. */
  warehouses?: Maybe<Array<Scalars["ID"]>>;
};

/** An enumeration. */
export type IShippingErrorCode =
  | "ALREADY_EXISTS"
  | "DUPLICATED_INPUT_ITEM"
  | "GRAPHQL_ERROR"
  | "INVALID"
  | "MAX_LESS_THAN_MIN"
  | "NOT_FOUND"
  | "REQUIRED"
  | "UNIQUE";

/**
 * List shipping methods for checkout.
 *
 * Added in Saleor 3.6.
 */
export type IShippingListMethodsForCheckout = IEvent & {
  __typename?: "ShippingListMethodsForCheckout";
  /** The checkout the event relates to. */
  checkout?: Maybe<ICheckout>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars["DateTime"]>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IIssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<IApp>;
  /**
   * Shipping methods that can be used with this checkout.
   *
   * Added in Saleor 3.6.
   */
  shippingMethods?: Maybe<Array<IShippingMethod>>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars["String"]>;
};

/** Shipping methods that can be used as means of shipping for orders and checkouts. */
export type IShippingMethod = INode &
  IObjectWithMetadata & {
    __typename?: "ShippingMethod";
    /** Describes if this shipping method is active and can be selected. */
    active: Scalars["Boolean"];
    /**
     * Shipping method description.
     *
     * Rich text format. For reference see https://editorjs.io/
     */
    description?: Maybe<Scalars["JSONString"]>;
    /** Unique ID of ShippingMethod available for Order. */
    id: Scalars["ID"];
    /** Maximum delivery days for this shipping method. */
    maximumDeliveryDays?: Maybe<Scalars["Int"]>;
    /** Maximum order price for this shipping method. */
    maximumOrderPrice?: Maybe<IMoney>;
    /**
     * Maximum order weight for this shipping method.
     * @deprecated This field will be removed in Saleor 4.0.
     */
    maximumOrderWeight?: Maybe<IWeight>;
    /** Message connected to this shipping method. */
    message?: Maybe<Scalars["String"]>;
    /** List of public metadata items. Can be accessed without permissions. */
    metadata: Array<IMetadataItem>;
    /**
     * A single key from public metadata.
     *
     * Tip: Use GraphQL aliases to fetch multiple keys.
     */
    metafield?: Maybe<Scalars["String"]>;
    /** Public metadata. Use `keys` to control which fields you want to include. The default is to include everything. */
    metafields?: Maybe<Scalars["Metadata"]>;
    /** Minimum delivery days for this shipping method. */
    minimumDeliveryDays?: Maybe<Scalars["Int"]>;
    /** Minimal order price for this shipping method. */
    minimumOrderPrice?: Maybe<IMoney>;
    /**
     * Minimum order weight for this shipping method.
     * @deprecated This field will be removed in Saleor 4.0.
     */
    minimumOrderWeight?: Maybe<IWeight>;
    /** Shipping method name. */
    name: Scalars["String"];
    /** The price of selected shipping method. */
    price: IMoney;
    /** List of private metadata items. Requires staff permissions to access. */
    privateMetadata: Array<IMetadataItem>;
    /**
     * A single key from private metadata. Requires staff permissions to access.
     *
     * Tip: Use GraphQL aliases to fetch multiple keys.
     */
    privateMetafield?: Maybe<Scalars["String"]>;
    /** Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything. */
    privateMetafields?: Maybe<Scalars["Metadata"]>;
    /** Returns translated shipping method fields for the given language code. */
    translation?: Maybe<IShippingMethodTranslation>;
    /**
     * Type of the shipping method.
     * @deprecated This field will be removed in Saleor 4.0.
     */
    type?: Maybe<IShippingMethodTypeEnum>;
  };

/** Shipping methods that can be used as means of shipping for orders and checkouts. */
export type IShippingMethodMetafieldArgs = {
  key: Scalars["String"];
};

/** Shipping methods that can be used as means of shipping for orders and checkouts. */
export type IShippingMethodMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars["String"]>>;
};

/** Shipping methods that can be used as means of shipping for orders and checkouts. */
export type IShippingMethodPrivateMetafieldArgs = {
  key: Scalars["String"];
};

/** Shipping methods that can be used as means of shipping for orders and checkouts. */
export type IShippingMethodPrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars["String"]>>;
};

/** Shipping methods that can be used as means of shipping for orders and checkouts. */
export type IShippingMethodTranslationArgs = {
  languageCode: ILanguageCodeEnum;
};

/** Represents shipping method channel listing. */
export type IShippingMethodChannelListing = INode & {
  __typename?: "ShippingMethodChannelListing";
  /** The channel associated with the shipping method channel listing. */
  channel: IChannel;
  /** The ID of shipping method channel listing. */
  id: Scalars["ID"];
  /** Maximum order price. */
  maximumOrderPrice?: Maybe<IMoney>;
  /** Minimum order price. */
  minimumOrderPrice?: Maybe<IMoney>;
  /** Price of the shipping method in the associated channel. */
  price?: Maybe<IMoney>;
};

export type IShippingMethodChannelListingAddInput = {
  /** ID of a channel. */
  channelId: Scalars["ID"];
  /** Maximum order price to use this shipping method. */
  maximumOrderPrice?: InputMaybe<Scalars["PositiveDecimal"]>;
  /** Minimum order price to use this shipping method. */
  minimumOrderPrice?: InputMaybe<Scalars["PositiveDecimal"]>;
  /** Shipping price of the shipping method in this channel. */
  price?: InputMaybe<Scalars["PositiveDecimal"]>;
};

export type IShippingMethodChannelListingInput = {
  /** List of channels to which the shipping method should be assigned. */
  addChannels?: InputMaybe<Array<IShippingMethodChannelListingAddInput>>;
  /** List of channels from which the shipping method should be unassigned. */
  removeChannels?: InputMaybe<Array<Scalars["ID"]>>;
};

/**
 * Manage shipping method's availability in channels.
 *
 * Requires one of the following permissions: MANAGE_SHIPPING.
 */
export type IShippingMethodChannelListingUpdate = {
  __typename?: "ShippingMethodChannelListingUpdate";
  errors: Array<IShippingError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  shippingErrors: Array<IShippingError>;
  /** An updated shipping method instance. */
  shippingMethod?: Maybe<IShippingMethodType>;
};

/** Represents shipping method postal code rule. */
export type IShippingMethodPostalCodeRule = INode & {
  __typename?: "ShippingMethodPostalCodeRule";
  /** End address range. */
  end?: Maybe<Scalars["String"]>;
  /** The ID of the object. */
  id: Scalars["ID"];
  /** Inclusion type of the postal code rule. */
  inclusionType?: Maybe<IPostalCodeRuleInclusionTypeEnum>;
  /** Start address range. */
  start?: Maybe<Scalars["String"]>;
};

export type IShippingMethodTranslatableContent = INode & {
  __typename?: "ShippingMethodTranslatableContent";
  /**
   * Shipping method description to translate.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  description?: Maybe<Scalars["JSONString"]>;
  /** The ID of the shipping method translatable content. */
  id: Scalars["ID"];
  /** Shipping method name to translate. */
  name: Scalars["String"];
  /**
   * Shipping method are the methods you'll use to get customer's orders  to them. They are directly exposed to the customers.
   *
   * Requires one of the following permissions: MANAGE_SHIPPING.
   * @deprecated This field will be removed in Saleor 4.0. Get model fields from the root level queries.
   */
  shippingMethod?: Maybe<IShippingMethodType>;
  /** Returns translated shipping method fields for the given language code. */
  translation?: Maybe<IShippingMethodTranslation>;
};

export type IShippingMethodTranslatableContentTranslationArgs = {
  languageCode: ILanguageCodeEnum;
};

export type IShippingMethodTranslation = INode & {
  __typename?: "ShippingMethodTranslation";
  /**
   * Translated description of the shipping method.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  description?: Maybe<Scalars["JSONString"]>;
  /** The ID of the shipping method translation. */
  id: Scalars["ID"];
  /** Translation language. */
  language: ILanguageDisplay;
  /** Translated shipping method name. */
  name: Scalars["String"];
};

/** Shipping method are the methods you'll use to get customer's orders to them. They are directly exposed to the customers. */
export type IShippingMethodType = INode &
  IObjectWithMetadata & {
    __typename?: "ShippingMethodType";
    /**
     * List of channels available for the method.
     *
     * Requires one of the following permissions: MANAGE_SHIPPING.
     */
    channelListings?: Maybe<Array<IShippingMethodChannelListing>>;
    /**
     * Shipping method description.
     *
     * Rich text format. For reference see https://editorjs.io/
     */
    description?: Maybe<Scalars["JSONString"]>;
    /**
     * List of excluded products for the shipping method.
     *
     * Requires one of the following permissions: MANAGE_SHIPPING.
     */
    excludedProducts?: Maybe<IProductCountableConnection>;
    /** Shipping method ID. */
    id: Scalars["ID"];
    /** Maximum number of days for delivery. */
    maximumDeliveryDays?: Maybe<Scalars["Int"]>;
    /** The price of the cheapest variant (including discounts). */
    maximumOrderPrice?: Maybe<IMoney>;
    /** Maximum order weight to use this shipping method. */
    maximumOrderWeight?: Maybe<IWeight>;
    /** List of public metadata items. Can be accessed without permissions. */
    metadata: Array<IMetadataItem>;
    /**
     * A single key from public metadata.
     *
     * Tip: Use GraphQL aliases to fetch multiple keys.
     *
     * Added in Saleor 3.3.
     */
    metafield?: Maybe<Scalars["String"]>;
    /**
     * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
     *
     * Added in Saleor 3.3.
     */
    metafields?: Maybe<Scalars["Metadata"]>;
    /** Minimal number of days for delivery. */
    minimumDeliveryDays?: Maybe<Scalars["Int"]>;
    /** The price of the cheapest variant (including discounts). */
    minimumOrderPrice?: Maybe<IMoney>;
    /** Minimum order weight to use this shipping method. */
    minimumOrderWeight?: Maybe<IWeight>;
    /** Shipping method name. */
    name: Scalars["String"];
    /** Postal code ranges rule of exclusion or inclusion of the shipping method. */
    postalCodeRules?: Maybe<Array<IShippingMethodPostalCodeRule>>;
    /** List of private metadata items. Requires staff permissions to access. */
    privateMetadata: Array<IMetadataItem>;
    /**
     * A single key from private metadata. Requires staff permissions to access.
     *
     * Tip: Use GraphQL aliases to fetch multiple keys.
     *
     * Added in Saleor 3.3.
     */
    privateMetafield?: Maybe<Scalars["String"]>;
    /**
     * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
     *
     * Added in Saleor 3.3.
     */
    privateMetafields?: Maybe<Scalars["Metadata"]>;
    /**
     * Tax class assigned to this shipping method.
     *
     * Requires one of the following permissions: AUTHENTICATED_STAFF_USER, AUTHENTICATED_APP.
     */
    taxClass?: Maybe<ITaxClass>;
    /** Returns translated shipping method fields for the given language code. */
    translation?: Maybe<IShippingMethodTranslation>;
    /** Type of the shipping method. */
    type?: Maybe<IShippingMethodTypeEnum>;
  };

/** Shipping method are the methods you'll use to get customer's orders to them. They are directly exposed to the customers. */
export type IShippingMethodTypeExcludedProductsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

/** Shipping method are the methods you'll use to get customer's orders to them. They are directly exposed to the customers. */
export type IShippingMethodTypeMetafieldArgs = {
  key: Scalars["String"];
};

/** Shipping method are the methods you'll use to get customer's orders to them. They are directly exposed to the customers. */
export type IShippingMethodTypeMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars["String"]>>;
};

/** Shipping method are the methods you'll use to get customer's orders to them. They are directly exposed to the customers. */
export type IShippingMethodTypePrivateMetafieldArgs = {
  key: Scalars["String"];
};

/** Shipping method are the methods you'll use to get customer's orders to them. They are directly exposed to the customers. */
export type IShippingMethodTypePrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars["String"]>>;
};

/** Shipping method are the methods you'll use to get customer's orders to them. They are directly exposed to the customers. */
export type IShippingMethodTypeTranslationArgs = {
  languageCode: ILanguageCodeEnum;
};

/** An enumeration. */
export type IShippingMethodTypeEnum = "PRICE" | "WEIGHT";

/**
 * List of shipping methods available for the country.
 *
 * Added in Saleor 3.6.
 */
export type IShippingMethodsPerCountry = {
  __typename?: "ShippingMethodsPerCountry";
  /** The country code. */
  countryCode: ICountryCode;
  /** List of available shipping methods. */
  shippingMethods?: Maybe<Array<IShippingMethod>>;
};

export type IShippingPostalCodeRulesCreateInputRange = {
  /** End range of the postal code. */
  end?: InputMaybe<Scalars["String"]>;
  /** Start range of the postal code. */
  start: Scalars["String"];
};

/**
 * Deletes shipping prices.
 *
 * Requires one of the following permissions: MANAGE_SHIPPING.
 */
export type IShippingPriceBulkDelete = {
  __typename?: "ShippingPriceBulkDelete";
  /** Returns how many objects were affected. */
  count: Scalars["Int"];
  errors: Array<IShippingError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  shippingErrors: Array<IShippingError>;
};

/**
 * Creates a new shipping price.
 *
 * Requires one of the following permissions: MANAGE_SHIPPING.
 */
export type IShippingPriceCreate = {
  __typename?: "ShippingPriceCreate";
  errors: Array<IShippingError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  shippingErrors: Array<IShippingError>;
  shippingMethod?: Maybe<IShippingMethodType>;
  /** A shipping zone to which the shipping method belongs. */
  shippingZone?: Maybe<IShippingZone>;
};

/**
 * Event sent when new shipping price is created.
 *
 * Added in Saleor 3.2.
 */
export type IShippingPriceCreated = IEvent & {
  __typename?: "ShippingPriceCreated";
  /** Time of the event. */
  issuedAt?: Maybe<Scalars["DateTime"]>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IIssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<IApp>;
  /** The shipping method the event relates to. */
  shippingMethod?: Maybe<IShippingMethodType>;
  /** The shipping zone the shipping method belongs to. */
  shippingZone?: Maybe<IShippingZone>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars["String"]>;
};

/**
 * Event sent when new shipping price is created.
 *
 * Added in Saleor 3.2.
 */
export type IShippingPriceCreatedShippingMethodArgs = {
  channel?: InputMaybe<Scalars["String"]>;
};

/**
 * Event sent when new shipping price is created.
 *
 * Added in Saleor 3.2.
 */
export type IShippingPriceCreatedShippingZoneArgs = {
  channel?: InputMaybe<Scalars["String"]>;
};

/**
 * Deletes a shipping price.
 *
 * Requires one of the following permissions: MANAGE_SHIPPING.
 */
export type IShippingPriceDelete = {
  __typename?: "ShippingPriceDelete";
  errors: Array<IShippingError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  shippingErrors: Array<IShippingError>;
  /** A shipping method to delete. */
  shippingMethod?: Maybe<IShippingMethodType>;
  /** A shipping zone to which the shipping method belongs. */
  shippingZone?: Maybe<IShippingZone>;
};

/**
 * Event sent when shipping price is deleted.
 *
 * Added in Saleor 3.2.
 */
export type IShippingPriceDeleted = IEvent & {
  __typename?: "ShippingPriceDeleted";
  /** Time of the event. */
  issuedAt?: Maybe<Scalars["DateTime"]>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IIssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<IApp>;
  /** The shipping method the event relates to. */
  shippingMethod?: Maybe<IShippingMethodType>;
  /** The shipping zone the shipping method belongs to. */
  shippingZone?: Maybe<IShippingZone>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars["String"]>;
};

/**
 * Event sent when shipping price is deleted.
 *
 * Added in Saleor 3.2.
 */
export type IShippingPriceDeletedShippingMethodArgs = {
  channel?: InputMaybe<Scalars["String"]>;
};

/**
 * Event sent when shipping price is deleted.
 *
 * Added in Saleor 3.2.
 */
export type IShippingPriceDeletedShippingZoneArgs = {
  channel?: InputMaybe<Scalars["String"]>;
};

/**
 * Exclude products from shipping price.
 *
 * Requires one of the following permissions: MANAGE_SHIPPING.
 */
export type IShippingPriceExcludeProducts = {
  __typename?: "ShippingPriceExcludeProducts";
  errors: Array<IShippingError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  shippingErrors: Array<IShippingError>;
  /** A shipping method with new list of excluded products. */
  shippingMethod?: Maybe<IShippingMethodType>;
};

export type IShippingPriceExcludeProductsInput = {
  /** List of products which will be excluded. */
  products: Array<Scalars["ID"]>;
};

export type IShippingPriceInput = {
  /** Postal code rules to add. */
  addPostalCodeRules?: InputMaybe<
    Array<IShippingPostalCodeRulesCreateInputRange>
  >;
  /** Postal code rules to delete. */
  deletePostalCodeRules?: InputMaybe<Array<Scalars["ID"]>>;
  /** Shipping method description. */
  description?: InputMaybe<Scalars["JSONString"]>;
  /** Inclusion type for currently assigned postal code rules. */
  inclusionType?: InputMaybe<IPostalCodeRuleInclusionTypeEnum>;
  /** Maximum number of days for delivery. */
  maximumDeliveryDays?: InputMaybe<Scalars["Int"]>;
  /** Maximum order weight to use this shipping method. */
  maximumOrderWeight?: InputMaybe<Scalars["WeightScalar"]>;
  /** Minimal number of days for delivery. */
  minimumDeliveryDays?: InputMaybe<Scalars["Int"]>;
  /** Minimum order weight to use this shipping method. */
  minimumOrderWeight?: InputMaybe<Scalars["WeightScalar"]>;
  /** Name of the shipping method. */
  name?: InputMaybe<Scalars["String"]>;
  /** Shipping zone this method belongs to. */
  shippingZone?: InputMaybe<Scalars["ID"]>;
  /** ID of a tax class to assign to this shipping method. If not provided, the default tax class will be used. */
  taxClass?: InputMaybe<Scalars["ID"]>;
  /** Shipping type: price or weight based. */
  type?: InputMaybe<IShippingMethodTypeEnum>;
};

/**
 * Remove product from excluded list for shipping price.
 *
 * Requires one of the following permissions: MANAGE_SHIPPING.
 */
export type IShippingPriceRemoveProductFromExclude = {
  __typename?: "ShippingPriceRemoveProductFromExclude";
  errors: Array<IShippingError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  shippingErrors: Array<IShippingError>;
  /** A shipping method with new list of excluded products. */
  shippingMethod?: Maybe<IShippingMethodType>;
};

/**
 * Creates/updates translations for a shipping method.
 *
 * Requires one of the following permissions: MANAGE_TRANSLATIONS.
 */
export type IShippingPriceTranslate = {
  __typename?: "ShippingPriceTranslate";
  errors: Array<ITranslationError>;
  shippingMethod?: Maybe<IShippingMethodType>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  translationErrors: Array<ITranslationError>;
};

export type IShippingPriceTranslationInput = {
  /**
   * Translated shipping method description.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  description?: InputMaybe<Scalars["JSONString"]>;
  name?: InputMaybe<Scalars["String"]>;
};

/**
 * Updates a new shipping price.
 *
 * Requires one of the following permissions: MANAGE_SHIPPING.
 */
export type IShippingPriceUpdate = {
  __typename?: "ShippingPriceUpdate";
  errors: Array<IShippingError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  shippingErrors: Array<IShippingError>;
  shippingMethod?: Maybe<IShippingMethodType>;
  /** A shipping zone to which the shipping method belongs. */
  shippingZone?: Maybe<IShippingZone>;
};

/**
 * Event sent when shipping price is updated.
 *
 * Added in Saleor 3.2.
 */
export type IShippingPriceUpdated = IEvent & {
  __typename?: "ShippingPriceUpdated";
  /** Time of the event. */
  issuedAt?: Maybe<Scalars["DateTime"]>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IIssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<IApp>;
  /** The shipping method the event relates to. */
  shippingMethod?: Maybe<IShippingMethodType>;
  /** The shipping zone the shipping method belongs to. */
  shippingZone?: Maybe<IShippingZone>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars["String"]>;
};

/**
 * Event sent when shipping price is updated.
 *
 * Added in Saleor 3.2.
 */
export type IShippingPriceUpdatedShippingMethodArgs = {
  channel?: InputMaybe<Scalars["String"]>;
};

/**
 * Event sent when shipping price is updated.
 *
 * Added in Saleor 3.2.
 */
export type IShippingPriceUpdatedShippingZoneArgs = {
  channel?: InputMaybe<Scalars["String"]>;
};

/** Represents a shipping zone in the shop. Zones are the concept used only for grouping shipping methods in the dashboard, and are never exposed to the customers directly. */
export type IShippingZone = INode &
  IObjectWithMetadata & {
    __typename?: "ShippingZone";
    /** List of channels for shipping zone. */
    channels: Array<IChannel>;
    /** List of countries available for the method. */
    countries: Array<ICountryDisplay>;
    /** Indicates if the shipping zone is default one. */
    default: Scalars["Boolean"];
    /** Description of a shipping zone. */
    description?: Maybe<Scalars["String"]>;
    /** The ID of shipping zone. */
    id: Scalars["ID"];
    /** List of public metadata items. Can be accessed without permissions. */
    metadata: Array<IMetadataItem>;
    /**
     * A single key from public metadata.
     *
     * Tip: Use GraphQL aliases to fetch multiple keys.
     *
     * Added in Saleor 3.3.
     */
    metafield?: Maybe<Scalars["String"]>;
    /**
     * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
     *
     * Added in Saleor 3.3.
     */
    metafields?: Maybe<Scalars["Metadata"]>;
    /** Shipping zone name. */
    name: Scalars["String"];
    /** Lowest and highest prices for the shipping. */
    priceRange?: Maybe<IMoneyRange>;
    /** List of private metadata items. Requires staff permissions to access. */
    privateMetadata: Array<IMetadataItem>;
    /**
     * A single key from private metadata. Requires staff permissions to access.
     *
     * Tip: Use GraphQL aliases to fetch multiple keys.
     *
     * Added in Saleor 3.3.
     */
    privateMetafield?: Maybe<Scalars["String"]>;
    /**
     * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
     *
     * Added in Saleor 3.3.
     */
    privateMetafields?: Maybe<Scalars["Metadata"]>;
    /** List of shipping methods available for orders shipped to countries within this shipping zone. */
    shippingMethods?: Maybe<Array<IShippingMethodType>>;
    /** List of warehouses for shipping zone. */
    warehouses: Array<IWarehouse>;
  };

/** Represents a shipping zone in the shop. Zones are the concept used only for grouping shipping methods in the dashboard, and are never exposed to the customers directly. */
export type IShippingZoneMetafieldArgs = {
  key: Scalars["String"];
};

/** Represents a shipping zone in the shop. Zones are the concept used only for grouping shipping methods in the dashboard, and are never exposed to the customers directly. */
export type IShippingZoneMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars["String"]>>;
};

/** Represents a shipping zone in the shop. Zones are the concept used only for grouping shipping methods in the dashboard, and are never exposed to the customers directly. */
export type IShippingZonePrivateMetafieldArgs = {
  key: Scalars["String"];
};

/** Represents a shipping zone in the shop. Zones are the concept used only for grouping shipping methods in the dashboard, and are never exposed to the customers directly. */
export type IShippingZonePrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars["String"]>>;
};

/**
 * Deletes shipping zones.
 *
 * Requires one of the following permissions: MANAGE_SHIPPING.
 */
export type IShippingZoneBulkDelete = {
  __typename?: "ShippingZoneBulkDelete";
  /** Returns how many objects were affected. */
  count: Scalars["Int"];
  errors: Array<IShippingError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  shippingErrors: Array<IShippingError>;
};

export type IShippingZoneCountableConnection = {
  __typename?: "ShippingZoneCountableConnection";
  edges: Array<IShippingZoneCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: IPageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars["Int"]>;
};

export type IShippingZoneCountableEdge = {
  __typename?: "ShippingZoneCountableEdge";
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node: IShippingZone;
};

/**
 * Creates a new shipping zone.
 *
 * Requires one of the following permissions: MANAGE_SHIPPING.
 */
export type IShippingZoneCreate = {
  __typename?: "ShippingZoneCreate";
  errors: Array<IShippingError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  shippingErrors: Array<IShippingError>;
  shippingZone?: Maybe<IShippingZone>;
};

export type IShippingZoneCreateInput = {
  /** List of channels to assign to the shipping zone. */
  addChannels?: InputMaybe<Array<Scalars["ID"]>>;
  /** List of warehouses to assign to a shipping zone */
  addWarehouses?: InputMaybe<Array<Scalars["ID"]>>;
  /** List of countries in this shipping zone. */
  countries?: InputMaybe<Array<Scalars["String"]>>;
  /** Default shipping zone will be used for countries not covered by other zones. */
  default?: InputMaybe<Scalars["Boolean"]>;
  /** Description of the shipping zone. */
  description?: InputMaybe<Scalars["String"]>;
  /** Shipping zone's name. Visible only to the staff. */
  name?: InputMaybe<Scalars["String"]>;
};

/**
 * Event sent when new shipping zone is created.
 *
 * Added in Saleor 3.2.
 */
export type IShippingZoneCreated = IEvent & {
  __typename?: "ShippingZoneCreated";
  /** Time of the event. */
  issuedAt?: Maybe<Scalars["DateTime"]>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IIssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<IApp>;
  /** The shipping zone the event relates to. */
  shippingZone?: Maybe<IShippingZone>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars["String"]>;
};

/**
 * Event sent when new shipping zone is created.
 *
 * Added in Saleor 3.2.
 */
export type IShippingZoneCreatedShippingZoneArgs = {
  channel?: InputMaybe<Scalars["String"]>;
};

/**
 * Deletes a shipping zone.
 *
 * Requires one of the following permissions: MANAGE_SHIPPING.
 */
export type IShippingZoneDelete = {
  __typename?: "ShippingZoneDelete";
  errors: Array<IShippingError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  shippingErrors: Array<IShippingError>;
  shippingZone?: Maybe<IShippingZone>;
};

/**
 * Event sent when shipping zone is deleted.
 *
 * Added in Saleor 3.2.
 */
export type IShippingZoneDeleted = IEvent & {
  __typename?: "ShippingZoneDeleted";
  /** Time of the event. */
  issuedAt?: Maybe<Scalars["DateTime"]>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IIssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<IApp>;
  /** The shipping zone the event relates to. */
  shippingZone?: Maybe<IShippingZone>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars["String"]>;
};

/**
 * Event sent when shipping zone is deleted.
 *
 * Added in Saleor 3.2.
 */
export type IShippingZoneDeletedShippingZoneArgs = {
  channel?: InputMaybe<Scalars["String"]>;
};

export type IShippingZoneFilterInput = {
  channels?: InputMaybe<Array<Scalars["ID"]>>;
  search?: InputMaybe<Scalars["String"]>;
};

/**
 * Event sent when shipping zone metadata is updated.
 *
 * Added in Saleor 3.8.
 */
export type IShippingZoneMetadataUpdated = IEvent & {
  __typename?: "ShippingZoneMetadataUpdated";
  /** Time of the event. */
  issuedAt?: Maybe<Scalars["DateTime"]>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IIssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<IApp>;
  /** The shipping zone the event relates to. */
  shippingZone?: Maybe<IShippingZone>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars["String"]>;
};

/**
 * Event sent when shipping zone metadata is updated.
 *
 * Added in Saleor 3.8.
 */
export type IShippingZoneMetadataUpdatedShippingZoneArgs = {
  channel?: InputMaybe<Scalars["String"]>;
};

/**
 * Updates a new shipping zone.
 *
 * Requires one of the following permissions: MANAGE_SHIPPING.
 */
export type IShippingZoneUpdate = {
  __typename?: "ShippingZoneUpdate";
  errors: Array<IShippingError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  shippingErrors: Array<IShippingError>;
  shippingZone?: Maybe<IShippingZone>;
};

export type IShippingZoneUpdateInput = {
  /** List of channels to assign to the shipping zone. */
  addChannels?: InputMaybe<Array<Scalars["ID"]>>;
  /** List of warehouses to assign to a shipping zone */
  addWarehouses?: InputMaybe<Array<Scalars["ID"]>>;
  /** List of countries in this shipping zone. */
  countries?: InputMaybe<Array<Scalars["String"]>>;
  /** Default shipping zone will be used for countries not covered by other zones. */
  default?: InputMaybe<Scalars["Boolean"]>;
  /** Description of the shipping zone. */
  description?: InputMaybe<Scalars["String"]>;
  /** Shipping zone's name. Visible only to the staff. */
  name?: InputMaybe<Scalars["String"]>;
  /** List of channels to unassign from the shipping zone. */
  removeChannels?: InputMaybe<Array<Scalars["ID"]>>;
  /** List of warehouses to unassign from a shipping zone */
  removeWarehouses?: InputMaybe<Array<Scalars["ID"]>>;
};

/**
 * Event sent when shipping zone is updated.
 *
 * Added in Saleor 3.2.
 */
export type IShippingZoneUpdated = IEvent & {
  __typename?: "ShippingZoneUpdated";
  /** Time of the event. */
  issuedAt?: Maybe<Scalars["DateTime"]>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IIssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<IApp>;
  /** The shipping zone the event relates to. */
  shippingZone?: Maybe<IShippingZone>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars["String"]>;
};

/**
 * Event sent when shipping zone is updated.
 *
 * Added in Saleor 3.2.
 */
export type IShippingZoneUpdatedShippingZoneArgs = {
  channel?: InputMaybe<Scalars["String"]>;
};

/** Represents a shop resource containing general shop data and configuration. */
export type IShop = IObjectWithMetadata & {
  __typename?: "Shop";
  /**
   * Determines if user can login without confirmation when `enableAccountConfrimation` is enabled.
   *
   * Added in Saleor 3.15.
   *
   * Requires one of the following permissions: MANAGE_SETTINGS.
   */
  allowLoginWithoutConfirmation?: Maybe<Scalars["Boolean"]>;
  /**
   * Enable automatic fulfillment for all digital products.
   *
   * Requires one of the following permissions: MANAGE_SETTINGS.
   */
  automaticFulfillmentDigitalProducts?: Maybe<Scalars["Boolean"]>;
  /** List of available external authentications. */
  availableExternalAuthentications: Array<IExternalAuthentication>;
  /** List of available payment gateways. */
  availablePaymentGateways: Array<IPaymentGateway>;
  /** Shipping methods that are available for the shop. */
  availableShippingMethods?: Maybe<Array<IShippingMethod>>;
  /**
   * List of all currencies supported by shop's channels.
   *
   * Added in Saleor 3.1.
   *
   * Requires one of the following permissions: AUTHENTICATED_STAFF_USER, AUTHENTICATED_APP.
   */
  channelCurrencies: Array<Scalars["String"]>;
  /**
   * Charge taxes on shipping.
   * @deprecated This field will be removed in Saleor 4.0. Use `ShippingMethodType.taxClass` to determine whether taxes are calculated for shipping methods; if a tax class is set, the taxes will be calculated, otherwise no tax rate will be applied.
   */
  chargeTaxesOnShipping: Scalars["Boolean"];
  /** Company address. */
  companyAddress?: Maybe<IAddress>;
  /** List of countries available in the shop. */
  countries: Array<ICountryDisplay>;
  /** URL of a view where customers can set their password. */
  customerSetPasswordUrl?: Maybe<Scalars["String"]>;
  /** Shop's default country. */
  defaultCountry?: Maybe<ICountryDisplay>;
  /**
   * Default number of max downloads per digital content URL.
   *
   * Requires one of the following permissions: MANAGE_SETTINGS.
   */
  defaultDigitalMaxDownloads?: Maybe<Scalars["Int"]>;
  /**
   * Default number of days which digital content URL will be valid.
   *
   * Requires one of the following permissions: MANAGE_SETTINGS.
   */
  defaultDigitalUrlValidDays?: Maybe<Scalars["Int"]>;
  /**
   * Default shop's email sender's address.
   *
   * Requires one of the following permissions: MANAGE_SETTINGS.
   */
  defaultMailSenderAddress?: Maybe<Scalars["String"]>;
  /**
   * Default shop's email sender's name.
   *
   * Requires one of the following permissions: MANAGE_SETTINGS.
   */
  defaultMailSenderName?: Maybe<Scalars["String"]>;
  /** Default weight unit. */
  defaultWeightUnit?: Maybe<IWeightUnitsEnum>;
  /** Shop's description. */
  description?: Maybe<Scalars["String"]>;
  /**
   * Display prices with tax in store.
   * @deprecated This field will be removed in Saleor 4.0. Use `Channel.taxConfiguration` to determine whether to display gross or net prices.
   */
  displayGrossPrices: Scalars["Boolean"];
  /** Shop's domain data. */
  domain: IDomain;
  /**
   * Determines if account confirmation by email is enabled.
   *
   * Added in Saleor 3.14.
   *
   * Requires one of the following permissions: MANAGE_SETTINGS.
   */
  enableAccountConfirmationByEmail?: Maybe<Scalars["Boolean"]>;
  /**
   * Allow to approve fulfillments which are unpaid.
   *
   * Added in Saleor 3.1.
   */
  fulfillmentAllowUnpaid: Scalars["Boolean"];
  /**
   * Automatically approve all new fulfillments.
   *
   * Added in Saleor 3.1.
   */
  fulfillmentAutoApprove: Scalars["Boolean"];
  /** Header text. */
  headerText?: Maybe<Scalars["String"]>;
  /** ID of the shop. */
  id: Scalars["ID"];
  /**
   * Include taxes in prices.
   * @deprecated This field will be removed in Saleor 4.0. Use `Channel.taxConfiguration.pricesEnteredWithTax` to determine whether prices are entered with tax.
   */
  includeTaxesInPrices: Scalars["Boolean"];
  /** List of the shops's supported languages. */
  languages: Array<ILanguageDisplay>;
  /**
   * Default number of maximum line quantity in single checkout (per single checkout line).
   *
   * Added in Saleor 3.1.
   *
   * Requires one of the following permissions: MANAGE_SETTINGS.
   */
  limitQuantityPerCheckout?: Maybe<Scalars["Int"]>;
  /**
   * Resource limitations and current usage if any set for a shop
   *
   * Requires one of the following permissions: AUTHENTICATED_STAFF_USER.
   */
  limits: ILimitInfo;
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<IMetadataItem>;
  /**
   * A single key from public metadata.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   */
  metafield?: Maybe<Scalars["String"]>;
  /** Public metadata. Use `keys` to control which fields you want to include. The default is to include everything. */
  metafields?: Maybe<Scalars["Metadata"]>;
  /** Shop's name. */
  name: Scalars["String"];
  /** List of available permissions. */
  permissions: Array<IPermission>;
  /** List of possible phone prefixes. */
  phonePrefixes: Array<Scalars["String"]>;
  /** List of private metadata items. Requires staff permissions to access. */
  privateMetadata: Array<IMetadataItem>;
  /**
   * A single key from private metadata. Requires staff permissions to access.
   *
   * Tip: Use GraphQL aliases to fetch multiple keys.
   */
  privateMetafield?: Maybe<Scalars["String"]>;
  /** Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything. */
  privateMetafields?: Maybe<Scalars["Metadata"]>;
  /**
   * Default number of minutes stock will be reserved for anonymous checkout or null when stock reservation is disabled.
   *
   * Added in Saleor 3.1.
   *
   * Requires one of the following permissions: MANAGE_SETTINGS.
   */
  reserveStockDurationAnonymousUser?: Maybe<Scalars["Int"]>;
  /**
   * Default number of minutes stock will be reserved for authenticated checkout or null when stock reservation is disabled.
   *
   * Added in Saleor 3.1.
   *
   * Requires one of the following permissions: MANAGE_SETTINGS.
   */
  reserveStockDurationAuthenticatedUser?: Maybe<Scalars["Int"]>;
  /**
   * Minor Saleor API version.
   *
   * Added in Saleor 3.5.
   */
  schemaVersion: Scalars["String"];
  /**
   * List of staff notification recipients.
   *
   * Requires one of the following permissions: MANAGE_SETTINGS.
   */
  staffNotificationRecipients?: Maybe<Array<IStaffNotificationRecipient>>;
  /** This field is used as a default value for `ProductVariant.trackInventory`. */
  trackInventoryByDefault?: Maybe<Scalars["Boolean"]>;
  /** Returns translated shop fields for the given language code. */
  translation?: Maybe<IShopTranslation>;
  /**
   * Saleor API version.
   *
   * Requires one of the following permissions: AUTHENTICATED_STAFF_USER, AUTHENTICATED_APP.
   */
  version: Scalars["String"];
};

/** Represents a shop resource containing general shop data and configuration. */
export type IShopAvailablePaymentGatewaysArgs = {
  channel?: InputMaybe<Scalars["String"]>;
  currency?: InputMaybe<Scalars["String"]>;
};

/** Represents a shop resource containing general shop data and configuration. */
export type IShopAvailableShippingMethodsArgs = {
  address?: InputMaybe<IAddressInput>;
  channel: Scalars["String"];
};

/** Represents a shop resource containing general shop data and configuration. */
export type IShopCountriesArgs = {
  filter?: InputMaybe<ICountryFilterInput>;
  languageCode?: InputMaybe<ILanguageCodeEnum>;
};

/** Represents a shop resource containing general shop data and configuration. */
export type IShopMetafieldArgs = {
  key: Scalars["String"];
};

/** Represents a shop resource containing general shop data and configuration. */
export type IShopMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars["String"]>>;
};

/** Represents a shop resource containing general shop data and configuration. */
export type IShopPrivateMetafieldArgs = {
  key: Scalars["String"];
};

/** Represents a shop resource containing general shop data and configuration. */
export type IShopPrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars["String"]>>;
};

/** Represents a shop resource containing general shop data and configuration. */
export type IShopTranslationArgs = {
  languageCode: ILanguageCodeEnum;
};

/**
 * Update the shop's address. If the `null` value is passed, the currently selected address will be deleted.
 *
 * Requires one of the following permissions: MANAGE_SETTINGS.
 */
export type IShopAddressUpdate = {
  __typename?: "ShopAddressUpdate";
  errors: Array<IShopError>;
  /** Updated shop. */
  shop?: Maybe<IShop>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  shopErrors: Array<IShopError>;
};

/**
 * Updates site domain of the shop.
 *
 * Requires one of the following permissions: MANAGE_SETTINGS.
 */
export type IShopDomainUpdate = {
  __typename?: "ShopDomainUpdate";
  errors: Array<IShopError>;
  /** Updated shop. */
  shop?: Maybe<IShop>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  shopErrors: Array<IShopError>;
};

export type IShopError = {
  __typename?: "ShopError";
  /** The error code. */
  code: IShopErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars["String"]>;
  /** The error message. */
  message?: Maybe<Scalars["String"]>;
};

/** An enumeration. */
export type IShopErrorCode =
  | "ALREADY_EXISTS"
  | "CANNOT_FETCH_TAX_RATES"
  | "GRAPHQL_ERROR"
  | "INVALID"
  | "NOT_FOUND"
  | "REQUIRED"
  | "UNIQUE";

/**
 * Fetch tax rates.
 *
 * Requires one of the following permissions: MANAGE_SETTINGS.
 */
export type IShopFetchTaxRates = {
  __typename?: "ShopFetchTaxRates";
  errors: Array<IShopError>;
  /** Updated shop. */
  shop?: Maybe<IShop>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  shopErrors: Array<IShopError>;
};

/**
 * Event sent when shop metadata is updated.
 *
 * Added in Saleor 3.15.
 */
export type IShopMetadataUpdated = IEvent & {
  __typename?: "ShopMetadataUpdated";
  /** Time of the event. */
  issuedAt?: Maybe<Scalars["DateTime"]>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IIssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<IApp>;
  /** Shop data. */
  shop?: Maybe<IShop>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars["String"]>;
};

export type IShopSettingsInput = {
  /**
   * Enable possibility to login without account confirmation.
   *
   * Added in Saleor 3.15.
   */
  allowLoginWithoutConfirmation?: InputMaybe<Scalars["Boolean"]>;
  /** Enable automatic fulfillment for all digital products. */
  automaticFulfillmentDigitalProducts?: InputMaybe<Scalars["Boolean"]>;
  /**
   * Charge taxes on shipping.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. To enable taxes for a shipping method, assign a tax class to the shipping method with `shippingPriceCreate` or `shippingPriceUpdate` mutations.
   */
  chargeTaxesOnShipping?: InputMaybe<Scalars["Boolean"]>;
  /** URL of a view where customers can set their password. */
  customerSetPasswordUrl?: InputMaybe<Scalars["String"]>;
  /** Default number of max downloads per digital content URL. */
  defaultDigitalMaxDownloads?: InputMaybe<Scalars["Int"]>;
  /** Default number of days which digital content URL will be valid. */
  defaultDigitalUrlValidDays?: InputMaybe<Scalars["Int"]>;
  /** Default email sender's address. */
  defaultMailSenderAddress?: InputMaybe<Scalars["String"]>;
  /** Default email sender's name. */
  defaultMailSenderName?: InputMaybe<Scalars["String"]>;
  /** Default weight unit. */
  defaultWeightUnit?: InputMaybe<IWeightUnitsEnum>;
  /** SEO description. */
  description?: InputMaybe<Scalars["String"]>;
  /**
   * Display prices with tax in store.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Use `taxConfigurationUpdate` mutation to configure this setting per channel or country.
   */
  displayGrossPrices?: InputMaybe<Scalars["Boolean"]>;
  /**
   * Enable automatic account confirmation by email.
   *
   * Added in Saleor 3.14.
   */
  enableAccountConfirmationByEmail?: InputMaybe<Scalars["Boolean"]>;
  /**
   * Enable ability to approve fulfillments which are unpaid.
   *
   * Added in Saleor 3.1.
   */
  fulfillmentAllowUnpaid?: InputMaybe<Scalars["Boolean"]>;
  /**
   * Enable automatic approval of all new fulfillments.
   *
   * Added in Saleor 3.1.
   */
  fulfillmentAutoApprove?: InputMaybe<Scalars["Boolean"]>;
  /** Header text. */
  headerText?: InputMaybe<Scalars["String"]>;
  /**
   * Include taxes in prices.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Use `taxConfigurationUpdate` mutation to configure this setting per channel or country.
   */
  includeTaxesInPrices?: InputMaybe<Scalars["Boolean"]>;
  /**
   * Default number of maximum line quantity in single checkout. Minimum possible value is 1, default value is 50.
   *
   * Added in Saleor 3.1.
   */
  limitQuantityPerCheckout?: InputMaybe<Scalars["Int"]>;
  /**
   * Shop public metadata.
   *
   * Added in Saleor 3.15.
   */
  metadata?: InputMaybe<Array<IMetadataInput>>;
  /**
   * Shop private metadata.
   *
   * Added in Saleor 3.15.
   */
  privateMetadata?: InputMaybe<Array<IMetadataInput>>;
  /**
   * Default number of minutes stock will be reserved for anonymous checkout. Enter 0 or null to disable.
   *
   * Added in Saleor 3.1.
   */
  reserveStockDurationAnonymousUser?: InputMaybe<Scalars["Int"]>;
  /**
   * Default number of minutes stock will be reserved for authenticated checkout. Enter 0 or null to disable.
   *
   * Added in Saleor 3.1.
   */
  reserveStockDurationAuthenticatedUser?: InputMaybe<Scalars["Int"]>;
  /** This field is used as a default value for `ProductVariant.trackInventory`. */
  trackInventoryByDefault?: InputMaybe<Scalars["Boolean"]>;
};

/**
 * Creates/updates translations for shop settings.
 *
 * Requires one of the following permissions: MANAGE_TRANSLATIONS.
 */
export type IShopSettingsTranslate = {
  __typename?: "ShopSettingsTranslate";
  errors: Array<ITranslationError>;
  /** Updated shop settings. */
  shop?: Maybe<IShop>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  translationErrors: Array<ITranslationError>;
};

export type IShopSettingsTranslationInput = {
  description?: InputMaybe<Scalars["String"]>;
  headerText?: InputMaybe<Scalars["String"]>;
};

/**
 * Updates shop settings.
 *
 * Requires one of the following permissions: MANAGE_SETTINGS.
 *
 * Triggers the following webhook events:
 * - SHOP_METADATA_UPDATED (async): Optionally triggered when public or private metadata is updated.
 */
export type IShopSettingsUpdate = {
  __typename?: "ShopSettingsUpdate";
  errors: Array<IShopError>;
  /** Updated shop. */
  shop?: Maybe<IShop>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  shopErrors: Array<IShopError>;
};

export type IShopTranslation = INode & {
  __typename?: "ShopTranslation";
  /** Translated description of sale. */
  description: Scalars["String"];
  /** Translated header text of sale. */
  headerText: Scalars["String"];
  /** The ID of the shop translation. */
  id: Scalars["ID"];
  /** Translation language. */
  language: ILanguageDisplay;
};

export type ISiteDomainInput = {
  /** Domain name for shop. */
  domain?: InputMaybe<Scalars["String"]>;
  /** Shop site name. */
  name?: InputMaybe<Scalars["String"]>;
};

/**
 * Deletes staff users. Apps are not allowed to perform this mutation.
 *
 * Requires one of the following permissions: MANAGE_STAFF.
 *
 * Triggers the following webhook events:
 * - STAFF_DELETED (async): A staff account was deleted.
 */
export type IStaffBulkDelete = {
  __typename?: "StaffBulkDelete";
  /** Returns how many objects were affected. */
  count: Scalars["Int"];
  errors: Array<IStaffError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  staffErrors: Array<IStaffError>;
};

/**
 * Creates a new staff user. Apps are not allowed to perform this mutation.
 *
 * Requires one of the following permissions: MANAGE_STAFF.
 *
 * Triggers the following webhook events:
 * - STAFF_CREATED (async): A new staff account was created.
 * - NOTIFY_USER (async): A notification for setting the password.
 * - STAFF_SET_PASSWORD_REQUESTED (async): Setting a new password for the staff account is requested.
 */
export type IStaffCreate = {
  __typename?: "StaffCreate";
  errors: Array<IStaffError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  staffErrors: Array<IStaffError>;
  user?: Maybe<IUser>;
};

/** Fields required to create a staff user. */
export type IStaffCreateInput = {
  /** List of permission group IDs to which user should be assigned. */
  addGroups?: InputMaybe<Array<Scalars["ID"]>>;
  /** The unique email address of the user. */
  email?: InputMaybe<Scalars["String"]>;
  /** Given name. */
  firstName?: InputMaybe<Scalars["String"]>;
  /** User account is active. */
  isActive?: InputMaybe<Scalars["Boolean"]>;
  /** Family name. */
  lastName?: InputMaybe<Scalars["String"]>;
  /**
   * Fields required to update the user metadata.
   *
   * Added in Saleor 3.14.
   */
  metadata?: InputMaybe<Array<IMetadataInput>>;
  /** A note about the user. */
  note?: InputMaybe<Scalars["String"]>;
  /**
   * Fields required to update the user private metadata.
   *
   * Added in Saleor 3.14.
   */
  privateMetadata?: InputMaybe<Array<IMetadataInput>>;
  /** URL of a view where users should be redirected to set the password. URL in RFC 1808 format. */
  redirectUrl?: InputMaybe<Scalars["String"]>;
};

/**
 * Event sent when new staff user is created.
 *
 * Added in Saleor 3.5.
 */
export type IStaffCreated = IEvent & {
  __typename?: "StaffCreated";
  /** Time of the event. */
  issuedAt?: Maybe<Scalars["DateTime"]>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IIssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<IApp>;
  /** The user the event relates to. */
  user?: Maybe<IUser>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars["String"]>;
};

/**
 * Deletes a staff user. Apps are not allowed to perform this mutation.
 *
 * Requires one of the following permissions: MANAGE_STAFF.
 *
 * Triggers the following webhook events:
 * - STAFF_DELETED (async): A staff account was deleted.
 */
export type IStaffDelete = {
  __typename?: "StaffDelete";
  errors: Array<IStaffError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  staffErrors: Array<IStaffError>;
  user?: Maybe<IUser>;
};

/**
 * Event sent when staff user is deleted.
 *
 * Added in Saleor 3.5.
 */
export type IStaffDeleted = IEvent & {
  __typename?: "StaffDeleted";
  /** Time of the event. */
  issuedAt?: Maybe<Scalars["DateTime"]>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IIssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<IApp>;
  /** The user the event relates to. */
  user?: Maybe<IUser>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars["String"]>;
};

export type IStaffError = {
  __typename?: "StaffError";
  /** A type of address that causes the error. */
  addressType?: Maybe<IAddressTypeEnum>;
  /** The error code. */
  code: IAccountErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars["String"]>;
  /** List of permission group IDs which cause the error. */
  groups?: Maybe<Array<Scalars["ID"]>>;
  /** The error message. */
  message?: Maybe<Scalars["String"]>;
  /** List of permissions which causes the error. */
  permissions?: Maybe<Array<IPermissionEnum>>;
  /** List of user IDs which causes the error. */
  users?: Maybe<Array<Scalars["ID"]>>;
};

/** Represents status of a staff account. */
export type IStaffMemberStatus =
  /** User account has been activated. */
  | "ACTIVE"
  /** User account has not been activated yet. */
  | "DEACTIVATED";

/** Represents a recipient of email notifications send by Saleor, such as notifications about new orders. Notifications can be assigned to staff users or arbitrary email addresses. */
export type IStaffNotificationRecipient = INode & {
  __typename?: "StaffNotificationRecipient";
  /** Determines if a notification active. */
  active?: Maybe<Scalars["Boolean"]>;
  /** Returns email address of a user subscribed to email notifications. */
  email?: Maybe<Scalars["String"]>;
  /** The ID of the staff notification recipient. */
  id: Scalars["ID"];
  /** Returns a user subscribed to email notifications. */
  user?: Maybe<IUser>;
};

/**
 * Creates a new staff notification recipient.
 *
 * Requires one of the following permissions: MANAGE_SETTINGS.
 */
export type IStaffNotificationRecipientCreate = {
  __typename?: "StaffNotificationRecipientCreate";
  errors: Array<IShopError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  shopErrors: Array<IShopError>;
  staffNotificationRecipient?: Maybe<IStaffNotificationRecipient>;
};

/**
 * Delete staff notification recipient.
 *
 * Requires one of the following permissions: MANAGE_SETTINGS.
 */
export type IStaffNotificationRecipientDelete = {
  __typename?: "StaffNotificationRecipientDelete";
  errors: Array<IShopError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  shopErrors: Array<IShopError>;
  staffNotificationRecipient?: Maybe<IStaffNotificationRecipient>;
};

export type IStaffNotificationRecipientInput = {
  /** Determines if a notification active. */
  active?: InputMaybe<Scalars["Boolean"]>;
  /** Email address of a user subscribed to email notifications. */
  email?: InputMaybe<Scalars["String"]>;
  /** The ID of the user subscribed to email notifications.. */
  user?: InputMaybe<Scalars["ID"]>;
};

/**
 * Updates a staff notification recipient.
 *
 * Requires one of the following permissions: MANAGE_SETTINGS.
 */
export type IStaffNotificationRecipientUpdate = {
  __typename?: "StaffNotificationRecipientUpdate";
  errors: Array<IShopError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  shopErrors: Array<IShopError>;
  staffNotificationRecipient?: Maybe<IStaffNotificationRecipient>;
};

/**
 * Event sent when setting a new password for staff is requested.
 *
 * Added in Saleor 3.15.
 */
export type IStaffSetPasswordRequested = IEvent & {
  __typename?: "StaffSetPasswordRequested";
  /** The channel data. */
  channel?: Maybe<IChannel>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars["DateTime"]>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IIssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<IApp>;
  /** The URL to redirect the user after he accepts the request. */
  redirectUrl?: Maybe<Scalars["String"]>;
  /** Shop data. */
  shop?: Maybe<IShop>;
  /** The token required to confirm request. */
  token?: Maybe<Scalars["String"]>;
  /** The user the event relates to. */
  user?: Maybe<IUser>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars["String"]>;
};

/**
 * Updates an existing staff user. Apps are not allowed to perform this mutation.
 *
 * Requires one of the following permissions: MANAGE_STAFF.
 *
 * Triggers the following webhook events:
 * - STAFF_UPDATED (async): A staff account was updated.
 */
export type IStaffUpdate = {
  __typename?: "StaffUpdate";
  errors: Array<IStaffError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  staffErrors: Array<IStaffError>;
  user?: Maybe<IUser>;
};

/** Fields required to update a staff user. */
export type IStaffUpdateInput = {
  /** List of permission group IDs to which user should be assigned. */
  addGroups?: InputMaybe<Array<Scalars["ID"]>>;
  /** The unique email address of the user. */
  email?: InputMaybe<Scalars["String"]>;
  /** Given name. */
  firstName?: InputMaybe<Scalars["String"]>;
  /** User account is active. */
  isActive?: InputMaybe<Scalars["Boolean"]>;
  /** Family name. */
  lastName?: InputMaybe<Scalars["String"]>;
  /**
   * Fields required to update the user metadata.
   *
   * Added in Saleor 3.14.
   */
  metadata?: InputMaybe<Array<IMetadataInput>>;
  /** A note about the user. */
  note?: InputMaybe<Scalars["String"]>;
  /**
   * Fields required to update the user private metadata.
   *
   * Added in Saleor 3.14.
   */
  privateMetadata?: InputMaybe<Array<IMetadataInput>>;
  /** List of permission group IDs from which user should be unassigned. */
  removeGroups?: InputMaybe<Array<Scalars["ID"]>>;
};

/**
 * Event sent when staff user is updated.
 *
 * Added in Saleor 3.5.
 */
export type IStaffUpdated = IEvent & {
  __typename?: "StaffUpdated";
  /** Time of the event. */
  issuedAt?: Maybe<Scalars["DateTime"]>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IIssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<IApp>;
  /** The user the event relates to. */
  user?: Maybe<IUser>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars["String"]>;
};

export type IStaffUserInput = {
  ids?: InputMaybe<Array<Scalars["ID"]>>;
  search?: InputMaybe<Scalars["String"]>;
  status?: InputMaybe<IStaffMemberStatus>;
};

/** Represents stock. */
export type IStock = INode & {
  __typename?: "Stock";
  /** The ID of stock. */
  id: Scalars["ID"];
  /** Information about the product variant. */
  productVariant: IProductVariant;
  /**
   * Quantity of a product in the warehouse's possession, including the allocated stock that is waiting for shipment.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS, MANAGE_ORDERS.
   */
  quantity: Scalars["Int"];
  /**
   * Quantity allocated for orders.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS, MANAGE_ORDERS.
   */
  quantityAllocated: Scalars["Int"];
  /**
   * Quantity reserved for checkouts.
   *
   * Requires one of the following permissions: MANAGE_PRODUCTS, MANAGE_ORDERS.
   */
  quantityReserved: Scalars["Int"];
  /** The warehouse associated with the stock. */
  warehouse: IWarehouse;
};

export type IStockAvailability = "IN_STOCK" | "OUT_OF_STOCK";

export type IStockBulkResult = {
  __typename?: "StockBulkResult";
  /** List of errors occurred on create or update attempt. */
  errors?: Maybe<Array<IStockBulkUpdateError>>;
  /** Stock data. */
  stock?: Maybe<IStock>;
};

/**
 * Updates stocks for a given variant and warehouse.
 *
 * Added in Saleor 3.13.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type IStockBulkUpdate = {
  __typename?: "StockBulkUpdate";
  /** Returns how many objects were updated. */
  count: Scalars["Int"];
  errors: Array<IStockBulkUpdateError>;
  /** List of the updated stocks. */
  results: Array<IStockBulkResult>;
};

export type IStockBulkUpdateError = {
  __typename?: "StockBulkUpdateError";
  /** The error code. */
  code: IStockBulkUpdateErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars["String"]>;
  /** The error message. */
  message?: Maybe<Scalars["String"]>;
};

/** An enumeration. */
export type IStockBulkUpdateErrorCode =
  | "GRAPHQL_ERROR"
  | "INVALID"
  | "NOT_FOUND"
  | "REQUIRED";

export type IStockBulkUpdateInput = {
  /** Quantity of items available for sell. */
  quantity: Scalars["Int"];
  /** Variant external reference. */
  variantExternalReference?: InputMaybe<Scalars["String"]>;
  /** Variant ID. */
  variantId?: InputMaybe<Scalars["ID"]>;
  /** Warehouse external reference. */
  warehouseExternalReference?: InputMaybe<Scalars["String"]>;
  /** Warehouse ID. */
  warehouseId?: InputMaybe<Scalars["ID"]>;
};

export type IStockCountableConnection = {
  __typename?: "StockCountableConnection";
  edges: Array<IStockCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: IPageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars["Int"]>;
};

export type IStockCountableEdge = {
  __typename?: "StockCountableEdge";
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node: IStock;
};

export type IStockError = {
  __typename?: "StockError";
  /** The error code. */
  code: IStockErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars["String"]>;
  /** The error message. */
  message?: Maybe<Scalars["String"]>;
};

/** An enumeration. */
export type IStockErrorCode =
  | "ALREADY_EXISTS"
  | "GRAPHQL_ERROR"
  | "INVALID"
  | "NOT_FOUND"
  | "REQUIRED"
  | "UNIQUE";

export type IStockFilterInput = {
  quantity?: InputMaybe<Scalars["Float"]>;
  search?: InputMaybe<Scalars["String"]>;
};

export type IStockInput = {
  /** Quantity of items available for sell. */
  quantity: Scalars["Int"];
  /** Warehouse in which stock is located. */
  warehouse: Scalars["ID"];
};

/**
 * Represents the channel stock settings.
 *
 * Added in Saleor 3.7.
 */
export type IStockSettings = {
  __typename?: "StockSettings";
  /** Allocation strategy defines the preference of warehouses for allocations and reservations. */
  allocationStrategy: IAllocationStrategyEnum;
};

export type IStockSettingsInput = {
  /** Allocation strategy options. Strategy defines the preference of warehouses for allocations and reservations. */
  allocationStrategy: IAllocationStrategyEnum;
};

export type IStockUpdateInput = {
  /** Quantity of items available for sell. */
  quantity: Scalars["Int"];
  /** Stock. */
  stock: Scalars["ID"];
};

/**
 * Determine how stocks should be updated, while processing an order.
 *
 *     SKIP - stocks are not checked and not updated.
 *     UPDATE - only do update, if there is enough stock.
 *     FORCE - force update, if there is not enough stock.
 *
 */
export type IStockUpdatePolicyEnum = "FORCE" | "SKIP" | "UPDATE";

/** Enum representing the type of a payment storage in a gateway. */
export type IStorePaymentMethodEnum =
  /** Storage is disabled. The payment is not stored. */
  | "NONE"
  /** Off session storage type. The payment is stored to be reused even if the customer is absent. */
  | "OFF_SESSION"
  /** On session storage type. The payment is stored only to be reused when the customer is present in the checkout flow. */
  | "ON_SESSION";

/**
 * Represents a payment method stored for user (tokenized) in payment gateway.
 *
 * Added in Saleor 3.15.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type IStoredPaymentMethod = {
  __typename?: "StoredPaymentMethod";
  /** Stored credit card details if available. */
  creditCardInfo?: Maybe<ICreditCard>;
  /** JSON data returned by Payment Provider app for this payment method. */
  data?: Maybe<Scalars["JSON"]>;
  /** Payment gateway that stores this payment method. */
  gateway: IPaymentGateway;
  /** Stored payment method ID. */
  id: Scalars["ID"];
  /** Payment method name. Example: last 4 digits of credit card, obfuscated email, etc. */
  name?: Maybe<Scalars["String"]>;
  /** ID of stored payment method used to make payment actions. Note: method ID is unique only within the payment gateway. */
  paymentMethodId: Scalars["String"];
  supportedPaymentFlows?: Maybe<Array<ITokenizedPaymentFlowEnum>>;
  /** Type of the payment method. Example: credit card, wallet, etc. */
  type: Scalars["String"];
};

/**
 * Define the filtering options for string fields.
 *
 * Added in Saleor 3.11.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type IStringFilterInput = {
  /** The value equal to. */
  eq?: InputMaybe<Scalars["String"]>;
  /** The value included in. */
  oneOf?: InputMaybe<Array<Scalars["String"]>>;
};

export type ISubscription = {
  __typename?: "Subscription";
  /**
   * Look up subscription event.
   *
   * Added in Saleor 3.2.
   */
  event?: Maybe<IEvent>;
};

export type ITaxCalculationStrategy = "FLAT_RATES" | "TAX_APP";

/**
 * Tax class is a named object used to define tax rates per country. Tax class can be assigned to product types, products and shipping methods to define their tax rates.
 *
 * Added in Saleor 3.9.
 */
export type ITaxClass = INode &
  IObjectWithMetadata & {
    __typename?: "TaxClass";
    /** Country-specific tax rates for this tax class. */
    countries: Array<ITaxClassCountryRate>;
    /** The ID of the object. */
    id: Scalars["ID"];
    /** List of public metadata items. Can be accessed without permissions. */
    metadata: Array<IMetadataItem>;
    /**
     * A single key from public metadata.
     *
     * Tip: Use GraphQL aliases to fetch multiple keys.
     *
     * Added in Saleor 3.3.
     */
    metafield?: Maybe<Scalars["String"]>;
    /**
     * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
     *
     * Added in Saleor 3.3.
     */
    metafields?: Maybe<Scalars["Metadata"]>;
    /** Name of the tax class. */
    name: Scalars["String"];
    /** List of private metadata items. Requires staff permissions to access. */
    privateMetadata: Array<IMetadataItem>;
    /**
     * A single key from private metadata. Requires staff permissions to access.
     *
     * Tip: Use GraphQL aliases to fetch multiple keys.
     *
     * Added in Saleor 3.3.
     */
    privateMetafield?: Maybe<Scalars["String"]>;
    /**
     * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
     *
     * Added in Saleor 3.3.
     */
    privateMetafields?: Maybe<Scalars["Metadata"]>;
  };

/**
 * Tax class is a named object used to define tax rates per country. Tax class can be assigned to product types, products and shipping methods to define their tax rates.
 *
 * Added in Saleor 3.9.
 */
export type ITaxClassMetafieldArgs = {
  key: Scalars["String"];
};

/**
 * Tax class is a named object used to define tax rates per country. Tax class can be assigned to product types, products and shipping methods to define their tax rates.
 *
 * Added in Saleor 3.9.
 */
export type ITaxClassMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars["String"]>>;
};

/**
 * Tax class is a named object used to define tax rates per country. Tax class can be assigned to product types, products and shipping methods to define their tax rates.
 *
 * Added in Saleor 3.9.
 */
export type ITaxClassPrivateMetafieldArgs = {
  key: Scalars["String"];
};

/**
 * Tax class is a named object used to define tax rates per country. Tax class can be assigned to product types, products and shipping methods to define their tax rates.
 *
 * Added in Saleor 3.9.
 */
export type ITaxClassPrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars["String"]>>;
};

export type ITaxClassCountableConnection = {
  __typename?: "TaxClassCountableConnection";
  edges: Array<ITaxClassCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: IPageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars["Int"]>;
};

export type ITaxClassCountableEdge = {
  __typename?: "TaxClassCountableEdge";
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node: ITaxClass;
};

/**
 * Tax rate for a country. When tax class is null, it represents the default tax rate for that country; otherwise it's a country tax rate specific to the given tax class.
 *
 * Added in Saleor 3.9.
 */
export type ITaxClassCountryRate = {
  __typename?: "TaxClassCountryRate";
  /** Country in which this tax rate applies. */
  country: ICountryDisplay;
  /** Tax rate value. */
  rate: Scalars["Float"];
  /** Related tax class. */
  taxClass?: Maybe<ITaxClass>;
};

/**
 * Create a tax class.
 *
 * Added in Saleor 3.9.
 *
 * Requires one of the following permissions: MANAGE_TAXES.
 */
export type ITaxClassCreate = {
  __typename?: "TaxClassCreate";
  errors: Array<ITaxClassCreateError>;
  taxClass?: Maybe<ITaxClass>;
};

export type ITaxClassCreateError = {
  __typename?: "TaxClassCreateError";
  /** The error code. */
  code: ITaxClassCreateErrorCode;
  /** List of country codes for which the configuration is invalid. */
  countryCodes: Array<Scalars["String"]>;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars["String"]>;
  /** The error message. */
  message?: Maybe<Scalars["String"]>;
};

/** An enumeration. */
export type ITaxClassCreateErrorCode =
  | "GRAPHQL_ERROR"
  | "INVALID"
  | "NOT_FOUND";

export type ITaxClassCreateInput = {
  /** List of country-specific tax rates to create for this tax class. */
  createCountryRates?: InputMaybe<Array<ICountryRateInput>>;
  /** Name of the tax class. */
  name: Scalars["String"];
};

/**
 * Delete a tax class. After deleting the tax class any products, product types or shipping methods using it are updated to use the default tax class.
 *
 * Added in Saleor 3.9.
 *
 * Requires one of the following permissions: MANAGE_TAXES.
 */
export type ITaxClassDelete = {
  __typename?: "TaxClassDelete";
  errors: Array<ITaxClassDeleteError>;
  taxClass?: Maybe<ITaxClass>;
};

export type ITaxClassDeleteError = {
  __typename?: "TaxClassDeleteError";
  /** The error code. */
  code: ITaxClassDeleteErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars["String"]>;
  /** The error message. */
  message?: Maybe<Scalars["String"]>;
};

/** An enumeration. */
export type ITaxClassDeleteErrorCode =
  | "GRAPHQL_ERROR"
  | "INVALID"
  | "NOT_FOUND";

export type ITaxClassFilterInput = {
  countries?: InputMaybe<Array<ICountryCode>>;
  ids?: InputMaybe<Array<Scalars["ID"]>>;
  metadata?: InputMaybe<Array<IMetadataFilter>>;
};

export type ITaxClassRateInput = {
  /** Tax rate value. */
  rate?: InputMaybe<Scalars["Float"]>;
  /** ID of a tax class for which to update the tax rate */
  taxClassId?: InputMaybe<Scalars["ID"]>;
};

export type ITaxClassSortField =
  /** Sort tax classes by name. */
  "NAME";

export type ITaxClassSortingInput = {
  /** Specifies the direction in which to sort tax classes. */
  direction: IOrderDirection;
  /** Sort tax classes by the selected field. */
  field: ITaxClassSortField;
};

/**
 * Update a tax class.
 *
 * Added in Saleor 3.9.
 *
 * Requires one of the following permissions: MANAGE_TAXES.
 */
export type ITaxClassUpdate = {
  __typename?: "TaxClassUpdate";
  errors: Array<ITaxClassUpdateError>;
  taxClass?: Maybe<ITaxClass>;
};

export type ITaxClassUpdateError = {
  __typename?: "TaxClassUpdateError";
  /** The error code. */
  code: ITaxClassUpdateErrorCode;
  /** List of country codes for which the configuration is invalid. */
  countryCodes: Array<Scalars["String"]>;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars["String"]>;
  /** The error message. */
  message?: Maybe<Scalars["String"]>;
};

/** An enumeration. */
export type ITaxClassUpdateErrorCode =
  | "DUPLICATED_INPUT_ITEM"
  | "GRAPHQL_ERROR"
  | "INVALID"
  | "NOT_FOUND";

export type ITaxClassUpdateInput = {
  /** Name of the tax class. */
  name?: InputMaybe<Scalars["String"]>;
  /** List of country codes for which to remove the tax class rates. Note: It removes all rates for given country code. */
  removeCountryRates?: InputMaybe<Array<ICountryCode>>;
  /** List of country-specific tax rates to create or update for this tax class. */
  updateCountryRates?: InputMaybe<Array<ICountryRateUpdateInput>>;
};

/**
 * Channel-specific tax configuration.
 *
 * Added in Saleor 3.9.
 */
export type ITaxConfiguration = INode &
  IObjectWithMetadata & {
    __typename?: "TaxConfiguration";
    /** A channel to which the tax configuration applies to. */
    channel: IChannel;
    /** Determines whether taxes are charged in the given channel. */
    chargeTaxes: Scalars["Boolean"];
    /** List of country-specific exceptions in tax configuration. */
    countries: Array<ITaxConfigurationPerCountry>;
    /** Determines whether prices displayed in a storefront should include taxes. */
    displayGrossPrices: Scalars["Boolean"];
    /** The ID of the object. */
    id: Scalars["ID"];
    /** List of public metadata items. Can be accessed without permissions. */
    metadata: Array<IMetadataItem>;
    /**
     * A single key from public metadata.
     *
     * Tip: Use GraphQL aliases to fetch multiple keys.
     *
     * Added in Saleor 3.3.
     */
    metafield?: Maybe<Scalars["String"]>;
    /**
     * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
     *
     * Added in Saleor 3.3.
     */
    metafields?: Maybe<Scalars["Metadata"]>;
    /** Determines whether prices are entered with the tax included. */
    pricesEnteredWithTax: Scalars["Boolean"];
    /** List of private metadata items. Requires staff permissions to access. */
    privateMetadata: Array<IMetadataItem>;
    /**
     * A single key from private metadata. Requires staff permissions to access.
     *
     * Tip: Use GraphQL aliases to fetch multiple keys.
     *
     * Added in Saleor 3.3.
     */
    privateMetafield?: Maybe<Scalars["String"]>;
    /**
     * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
     *
     * Added in Saleor 3.3.
     */
    privateMetafields?: Maybe<Scalars["Metadata"]>;
    /** The default strategy to use for tax calculation in the given channel. Taxes can be calculated either using user-defined flat rates or with a tax app. Empty value means that no method is selected and taxes are not calculated. */
    taxCalculationStrategy?: Maybe<ITaxCalculationStrategy>;
  };

/**
 * Channel-specific tax configuration.
 *
 * Added in Saleor 3.9.
 */
export type ITaxConfigurationMetafieldArgs = {
  key: Scalars["String"];
};

/**
 * Channel-specific tax configuration.
 *
 * Added in Saleor 3.9.
 */
export type ITaxConfigurationMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars["String"]>>;
};

/**
 * Channel-specific tax configuration.
 *
 * Added in Saleor 3.9.
 */
export type ITaxConfigurationPrivateMetafieldArgs = {
  key: Scalars["String"];
};

/**
 * Channel-specific tax configuration.
 *
 * Added in Saleor 3.9.
 */
export type ITaxConfigurationPrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars["String"]>>;
};

export type ITaxConfigurationCountableConnection = {
  __typename?: "TaxConfigurationCountableConnection";
  edges: Array<ITaxConfigurationCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: IPageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars["Int"]>;
};

export type ITaxConfigurationCountableEdge = {
  __typename?: "TaxConfigurationCountableEdge";
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node: ITaxConfiguration;
};

export type ITaxConfigurationFilterInput = {
  ids?: InputMaybe<Array<Scalars["ID"]>>;
  metadata?: InputMaybe<Array<IMetadataFilter>>;
};

/**
 * Country-specific exceptions of a channel's tax configuration.
 *
 * Added in Saleor 3.9.
 */
export type ITaxConfigurationPerCountry = {
  __typename?: "TaxConfigurationPerCountry";
  /** Determines whether taxes are charged in this country. */
  chargeTaxes: Scalars["Boolean"];
  /** Country in which this configuration applies. */
  country: ICountryDisplay;
  /** Determines whether prices displayed in a storefront should include taxes for this country. */
  displayGrossPrices: Scalars["Boolean"];
  /** A country-specific strategy to use for tax calculation. Taxes can be calculated either using user-defined flat rates or with a tax app. If not provided, use the value from the channel's tax configuration. */
  taxCalculationStrategy?: Maybe<ITaxCalculationStrategy>;
};

export type ITaxConfigurationPerCountryInput = {
  /** Determines whether taxes are charged in this country. */
  chargeTaxes: Scalars["Boolean"];
  /** Country in which this configuration applies. */
  countryCode: ICountryCode;
  /** Determines whether prices displayed in a storefront should include taxes for this country. */
  displayGrossPrices: Scalars["Boolean"];
  /** A country-specific strategy to use for tax calculation. Taxes can be calculated either using user-defined flat rates or with a tax app. If not provided, use the value from the channel's tax configuration. */
  taxCalculationStrategy?: InputMaybe<ITaxCalculationStrategy>;
};

/**
 * Update tax configuration for a channel.
 *
 * Added in Saleor 3.9.
 *
 * Requires one of the following permissions: MANAGE_TAXES.
 */
export type ITaxConfigurationUpdate = {
  __typename?: "TaxConfigurationUpdate";
  errors: Array<ITaxConfigurationUpdateError>;
  taxConfiguration?: Maybe<ITaxConfiguration>;
};

export type ITaxConfigurationUpdateError = {
  __typename?: "TaxConfigurationUpdateError";
  /** The error code. */
  code: ITaxConfigurationUpdateErrorCode;
  /** List of country codes for which the configuration is invalid. */
  countryCodes: Array<Scalars["String"]>;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars["String"]>;
  /** The error message. */
  message?: Maybe<Scalars["String"]>;
};

/** An enumeration. */
export type ITaxConfigurationUpdateErrorCode =
  | "DUPLICATED_INPUT_ITEM"
  | "GRAPHQL_ERROR"
  | "INVALID"
  | "NOT_FOUND";

export type ITaxConfigurationUpdateInput = {
  /** Determines whether taxes are charged in the given channel. */
  chargeTaxes?: InputMaybe<Scalars["Boolean"]>;
  /** Determines whether prices displayed in a storefront should include taxes. */
  displayGrossPrices?: InputMaybe<Scalars["Boolean"]>;
  /** Determines whether prices are entered with the tax included. */
  pricesEnteredWithTax?: InputMaybe<Scalars["Boolean"]>;
  /** List of country codes for which to remove the tax configuration. */
  removeCountriesConfiguration?: InputMaybe<Array<ICountryCode>>;
  /** The default strategy to use for tax calculation in the given channel. Taxes can be calculated either using user-defined flat rates or with a tax app. Empty value means that no method is selected and taxes are not calculated. */
  taxCalculationStrategy?: InputMaybe<ITaxCalculationStrategy>;
  /** List of tax country configurations to create or update (identified by a country code). */
  updateCountriesConfiguration?: InputMaybe<
    Array<ITaxConfigurationPerCountryInput>
  >;
};

/**
 * Tax class rates grouped by country.
 *
 * Added in Saleor 3.9.
 */
export type ITaxCountryConfiguration = {
  __typename?: "TaxCountryConfiguration";
  /** A country for which tax class rates are grouped. */
  country: ICountryDisplay;
  /** List of tax class rates. */
  taxClassCountryRates: Array<ITaxClassCountryRate>;
};

/**
 * Remove all tax class rates for a specific country.
 *
 * Added in Saleor 3.9.
 *
 * Requires one of the following permissions: MANAGE_TAXES.
 */
export type ITaxCountryConfigurationDelete = {
  __typename?: "TaxCountryConfigurationDelete";
  errors: Array<ITaxCountryConfigurationDeleteError>;
  /** Updated tax class rates grouped by a country. */
  taxCountryConfiguration?: Maybe<ITaxCountryConfiguration>;
};

export type ITaxCountryConfigurationDeleteError = {
  __typename?: "TaxCountryConfigurationDeleteError";
  /** The error code. */
  code: ITaxCountryConfigurationDeleteErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars["String"]>;
  /** The error message. */
  message?: Maybe<Scalars["String"]>;
};

/** An enumeration. */
export type ITaxCountryConfigurationDeleteErrorCode =
  | "GRAPHQL_ERROR"
  | "INVALID"
  | "NOT_FOUND";

/**
 * Update tax class rates for a specific country.
 *
 * Added in Saleor 3.9.
 *
 * Requires one of the following permissions: MANAGE_TAXES.
 */
export type ITaxCountryConfigurationUpdate = {
  __typename?: "TaxCountryConfigurationUpdate";
  errors: Array<ITaxCountryConfigurationUpdateError>;
  /** Updated tax class rates grouped by a country. */
  taxCountryConfiguration?: Maybe<ITaxCountryConfiguration>;
};

export type ITaxCountryConfigurationUpdateError = {
  __typename?: "TaxCountryConfigurationUpdateError";
  /** The error code. */
  code: ITaxCountryConfigurationUpdateErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars["String"]>;
  /** The error message. */
  message?: Maybe<Scalars["String"]>;
  /** List of tax class IDs for which the update failed. */
  taxClassIds: Array<Scalars["String"]>;
};

/** An enumeration. */
export type ITaxCountryConfigurationUpdateErrorCode =
  | "CANNOT_CREATE_NEGATIVE_RATE"
  | "GRAPHQL_ERROR"
  | "INVALID"
  | "NOT_FOUND"
  | "ONLY_ONE_DEFAULT_COUNTRY_RATE_ALLOWED";

/**
 * Exempt checkout or order from charging the taxes. When tax exemption is enabled, taxes won't be charged for the checkout or order. Taxes may still be calculated in cases when product prices are entered with the tax included and the net price needs to be known.
 *
 * Added in Saleor 3.8.
 *
 * Requires one of the following permissions: MANAGE_TAXES.
 */
export type ITaxExemptionManage = {
  __typename?: "TaxExemptionManage";
  errors: Array<ITaxExemptionManageError>;
  taxableObject?: Maybe<ITaxSourceObject>;
};

export type ITaxExemptionManageError = {
  __typename?: "TaxExemptionManageError";
  /** The error code. */
  code: ITaxExemptionManageErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars["String"]>;
  /** The error message. */
  message?: Maybe<Scalars["String"]>;
};

/** An enumeration. */
export type ITaxExemptionManageErrorCode =
  | "GRAPHQL_ERROR"
  | "INVALID"
  | "NOT_EDITABLE_ORDER"
  | "NOT_FOUND";

export type ITaxSourceLine = ICheckoutLine | IOrderLine;

export type ITaxSourceObject = ICheckout | IOrder;

/** Representation of tax types fetched from tax gateway. */
export type ITaxType = {
  __typename?: "TaxType";
  /** Description of the tax type. */
  description?: Maybe<Scalars["String"]>;
  /** External tax code used to identify given tax group. */
  taxCode?: Maybe<Scalars["String"]>;
};

/** Taxable object. */
export type ITaxableObject = {
  __typename?: "TaxableObject";
  /** The address data. */
  address?: Maybe<IAddress>;
  channel: IChannel;
  /** The currency of the object. */
  currency: Scalars["String"];
  /** List of discounts. */
  discounts: Array<ITaxableObjectDiscount>;
  /** List of lines assigned to the object. */
  lines: Array<ITaxableObjectLine>;
  /** Determines if prices contain entered tax.. */
  pricesEnteredWithTax: Scalars["Boolean"];
  /** The price of shipping method. */
  shippingPrice: IMoney;
  /** The source object related to this tax object. */
  sourceObject: ITaxSourceObject;
};

/** Taxable object discount. */
export type ITaxableObjectDiscount = {
  __typename?: "TaxableObjectDiscount";
  /** The amount of the discount. */
  amount: IMoney;
  /** The name of the discount. */
  name?: Maybe<Scalars["String"]>;
};

export type ITaxableObjectLine = {
  __typename?: "TaxableObjectLine";
  /** Determines if taxes are being charged for the product. */
  chargeTaxes: Scalars["Boolean"];
  /** The product name. */
  productName: Scalars["String"];
  /** The product sku. */
  productSku?: Maybe<Scalars["String"]>;
  /** Number of items. */
  quantity: Scalars["Int"];
  /** The source line related to this tax line. */
  sourceLine: ITaxSourceLine;
  /** Price of the order line. */
  totalPrice: IMoney;
  /** Price of the single item in the order line. */
  unitPrice: IMoney;
  /** The variant name. */
  variantName: Scalars["String"];
};

/** Represents a monetary value with taxes. In cases where taxes were not applied, net and gross values will be equal. */
export type ITaxedMoney = {
  __typename?: "TaxedMoney";
  /** Currency code. */
  currency: Scalars["String"];
  /** Amount of money including taxes. */
  gross: IMoney;
  /** Amount of money without taxes. */
  net: IMoney;
  /** Amount of taxes. */
  tax: IMoney;
};

export type ITaxedMoneyInput = {
  /** Gross value of an item. */
  gross: Scalars["PositiveDecimal"];
  /** Net value of an item. */
  net: Scalars["PositiveDecimal"];
};

/** Represents a range of monetary values. */
export type ITaxedMoneyRange = {
  __typename?: "TaxedMoneyRange";
  /** Lower bound of a price range. */
  start?: Maybe<ITaxedMoney>;
  /** Upper bound of a price range. */
  stop?: Maybe<ITaxedMoney>;
};

/**
 * Event sent when thumbnail is created.
 *
 * Added in Saleor 3.12.
 */
export type IThumbnailCreated = IEvent & {
  __typename?: "ThumbnailCreated";
  /**
   * Thumbnail id.
   *
   * Added in Saleor 3.12.
   */
  id?: Maybe<Scalars["ID"]>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars["DateTime"]>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IIssuingPrincipal>;
  /**
   * Original media url.
   *
   * Added in Saleor 3.12.
   */
  mediaUrl?: Maybe<Scalars["String"]>;
  /**
   * Object the thumbnail refers to.
   *
   * Added in Saleor 3.12.
   */
  objectId?: Maybe<Scalars["ID"]>;
  /** The application receiving the webhook. */
  recipient?: Maybe<IApp>;
  /**
   * Thumbnail url.
   *
   * Added in Saleor 3.12.
   */
  url?: Maybe<Scalars["String"]>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars["String"]>;
};

/** An enumeration. */
export type IThumbnailFormatEnum = "AVIF" | "ORIGINAL" | "WEBP";

export type ITimePeriod = {
  __typename?: "TimePeriod";
  /** The length of the period. */
  amount: Scalars["Int"];
  /** The type of the period. */
  type: ITimePeriodTypeEnum;
};

export type ITimePeriodInputType = {
  /** The length of the period. */
  amount: Scalars["Int"];
  /** The type of the period. */
  type: ITimePeriodTypeEnum;
};

/** An enumeration. */
export type ITimePeriodTypeEnum = "DAY" | "MONTH" | "WEEK" | "YEAR";

/**
 * Represents possible tokenized payment flows that can be used to process payment.
 *
 *     The following flows are possible:
 *     INTERACTIVE - Payment method can be used for 1 click checkout - it's prefilled in
 *     checkout form (might require additional authentication from user)
 *
 */
export type ITokenizedPaymentFlowEnum = "INTERACTIVE";

/** An object representing a single payment. */
export type ITransaction = INode & {
  __typename?: "Transaction";
  /** Total amount of the transaction. */
  amount?: Maybe<IMoney>;
  /** Date and time which transaction was created. */
  created: Scalars["DateTime"];
  /** Error associated with transaction, if any. */
  error?: Maybe<Scalars["String"]>;
  /** Response returned by payment gateway. */
  gatewayResponse: Scalars["JSONString"];
  /** ID of the transaction. */
  id: Scalars["ID"];
  /** Determines if the transaction was successful. */
  isSuccess: Scalars["Boolean"];
  /** Determines the type of transaction. */
  kind: ITransactionKind;
  /** Determines the payment associated with a transaction. */
  payment: IPayment;
  /** Unique token associated with a transaction. */
  token: Scalars["String"];
};

export type ITransactionAction = {
  __typename?: "TransactionAction";
  /** Determines the action type. */
  actionType: ITransactionActionEnum;
  /** Transaction request amount. Null when action type is VOID. */
  amount?: Maybe<Scalars["PositiveDecimal"]>;
};

/**
 * Represents possible actions on payment transaction.
 *
 *     The following actions are possible:
 *     CHARGE - Represents the charge action.
 *     REFUND - Represents a refund action.
 *     CANCEL - Represents a cancel action. Added in Saleor 3.12.
 *
 */
export type ITransactionActionEnum = "CANCEL" | "CHARGE" | "REFUND";

/**
 * Event sent when transaction cancelation is requested.
 *
 * Added in Saleor 3.13.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type ITransactionCancelationRequested = IEvent & {
  __typename?: "TransactionCancelationRequested";
  /** Requested action data. */
  action: ITransactionAction;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars["DateTime"]>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IIssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<IApp>;
  /** Look up a transaction. */
  transaction?: Maybe<ITransactionItem>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars["String"]>;
};

/**
 * Event sent when transaction charge is requested.
 *
 * Added in Saleor 3.13.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type ITransactionChargeRequested = IEvent & {
  __typename?: "TransactionChargeRequested";
  /** Requested action data. */
  action: ITransactionAction;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars["DateTime"]>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IIssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<IApp>;
  /** Look up a transaction. */
  transaction?: Maybe<ITransactionItem>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars["String"]>;
};

/**
 * Create transaction for checkout or order.
 *
 * Added in Saleor 3.4.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 *
 * Requires one of the following permissions: HANDLE_PAYMENTS.
 */
export type ITransactionCreate = {
  __typename?: "TransactionCreate";
  errors: Array<ITransactionCreateError>;
  transaction?: Maybe<ITransactionItem>;
};

export type ITransactionCreateError = {
  __typename?: "TransactionCreateError";
  /** The error code. */
  code: ITransactionCreateErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars["String"]>;
  /** The error message. */
  message?: Maybe<Scalars["String"]>;
};

/** An enumeration. */
export type ITransactionCreateErrorCode =
  | "GRAPHQL_ERROR"
  | "INCORRECT_CURRENCY"
  | "INVALID"
  | "METADATA_KEY_REQUIRED"
  | "NOT_FOUND"
  | "UNIQUE";

export type ITransactionCreateInput = {
  /** Amount authorized by this transaction. */
  amountAuthorized?: InputMaybe<IMoneyInput>;
  /**
   * Amount canceled by this transaction.
   *
   * Added in Saleor 3.13.
   */
  amountCanceled?: InputMaybe<IMoneyInput>;
  /** Amount charged by this transaction. */
  amountCharged?: InputMaybe<IMoneyInput>;
  /** Amount refunded by this transaction. */
  amountRefunded?: InputMaybe<IMoneyInput>;
  /** List of all possible actions for the transaction */
  availableActions?: InputMaybe<Array<ITransactionActionEnum>>;
  /**
   * The url that will allow to redirect user to payment provider page with transaction event details.
   *
   * Added in Saleor 3.13.
   */
  externalUrl?: InputMaybe<Scalars["String"]>;
  /**
   * The message of the transaction.
   *
   * Added in Saleor 3.13.
   */
  message?: InputMaybe<Scalars["String"]>;
  /** Payment public metadata. */
  metadata?: InputMaybe<Array<IMetadataInput>>;
  /**
   * Payment name of the transaction.
   *
   * Added in Saleor 3.13.
   */
  name?: InputMaybe<Scalars["String"]>;
  /** Payment private metadata. */
  privateMetadata?: InputMaybe<Array<IMetadataInput>>;
  /**
   * PSP Reference of the transaction.
   *
   * Added in Saleor 3.13.
   */
  pspReference?: InputMaybe<Scalars["String"]>;
};

/** Represents transaction's event. */
export type ITransactionEvent = INode & {
  __typename?: "TransactionEvent";
  /**
   * The amount related to this event.
   *
   * Added in Saleor 3.13.
   */
  amount: IMoney;
  /** Date and time at which a transaction event was created. */
  createdAt: Scalars["DateTime"];
  /**
   * User or App that created the transaction event.
   *
   * Added in Saleor 3.13.
   */
  createdBy?: Maybe<IUserOrApp>;
  /**
   * The url that will allow to redirect user to payment provider page with transaction details.
   *
   * Added in Saleor 3.13.
   */
  externalUrl: Scalars["String"];
  /** The ID of the object. */
  id: Scalars["ID"];
  /**
   * Message related to the transaction's event.
   *
   * Added in Saleor 3.13.
   */
  message: Scalars["String"];
  /**
   * PSP reference of transaction.
   *
   * Added in Saleor 3.13.
   */
  pspReference: Scalars["String"];
  /**
   * The type of action related to this event.
   *
   * Added in Saleor 3.13.
   */
  type?: Maybe<ITransactionEventTypeEnum>;
};

export type ITransactionEventInput = {
  /**
   * The message related to the event.
   *
   * Added in Saleor 3.13.
   */
  message?: InputMaybe<Scalars["String"]>;
  /**
   * PSP Reference related to this action.
   *
   * Added in Saleor 3.13.
   */
  pspReference?: InputMaybe<Scalars["String"]>;
};

/**
 * Report the event for the transaction.
 *
 * Added in Saleor 3.13.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 *
 * Requires the following permissions: OWNER and HANDLE_PAYMENTS for apps, HANDLE_PAYMENTS for staff users. Staff user cannot update a transaction that is owned by the app.
 */
export type ITransactionEventReport = {
  __typename?: "TransactionEventReport";
  /** Defines if the reported event hasn't been processed earlier. */
  alreadyProcessed?: Maybe<Scalars["Boolean"]>;
  errors: Array<ITransactionEventReportError>;
  /** The transaction related to the reported event. */
  transaction?: Maybe<ITransactionItem>;
  /** The event assigned to this report. if `alreadyProcessed` is set to `true`, the previously processed event will be returned. */
  transactionEvent?: Maybe<ITransactionEvent>;
};

export type ITransactionEventReportError = {
  __typename?: "TransactionEventReportError";
  /** The error code. */
  code: ITransactionEventReportErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars["String"]>;
  /** The error message. */
  message?: Maybe<Scalars["String"]>;
};

/** An enumeration. */
export type ITransactionEventReportErrorCode =
  | "ALREADY_EXISTS"
  | "GRAPHQL_ERROR"
  | "INCORRECT_DETAILS"
  | "INVALID"
  | "NOT_FOUND";

/**
 * Represents possible event types.
 *
 *     Added in Saleor 3.12.
 *
 *     The following types are possible:
 *     AUTHORIZATION_SUCCESS - represents success authorization.
 *     AUTHORIZATION_FAILURE - represents failure authorization.
 *     AUTHORIZATION_ADJUSTMENT - represents authorization adjustment.
 *     AUTHORIZATION_REQUEST - represents authorization request.
 *     AUTHORIZATION_ACTION_REQUIRED - represents authorization that needs
 *     additional actions from the customer.
 *     CHARGE_ACTION_REQUIRED - represents charge that needs
 *     additional actions from the customer.
 *     CHARGE_SUCCESS - represents success charge.
 *     CHARGE_FAILURE - represents failure charge.
 *     CHARGE_BACK - represents chargeback.
 *     CHARGE_REQUEST - represents charge request.
 *     REFUND_SUCCESS - represents success refund.
 *     REFUND_FAILURE - represents failure refund.
 *     REFUND_REVERSE - represents reverse refund.
 *     REFUND_REQUEST - represents refund request.
 *     CANCEL_SUCCESS - represents success cancel.
 *     CANCEL_FAILURE - represents failure cancel.
 *     CANCEL_REQUEST - represents cancel request.
 *     INFO - represents info event.
 *
 */
export type ITransactionEventTypeEnum =
  | "AUTHORIZATION_ACTION_REQUIRED"
  | "AUTHORIZATION_ADJUSTMENT"
  | "AUTHORIZATION_FAILURE"
  | "AUTHORIZATION_REQUEST"
  | "AUTHORIZATION_SUCCESS"
  | "CANCEL_FAILURE"
  | "CANCEL_REQUEST"
  | "CANCEL_SUCCESS"
  | "CHARGE_ACTION_REQUIRED"
  | "CHARGE_BACK"
  | "CHARGE_FAILURE"
  | "CHARGE_REQUEST"
  | "CHARGE_SUCCESS"
  | "INFO"
  | "REFUND_FAILURE"
  | "REFUND_REQUEST"
  | "REFUND_REVERSE"
  | "REFUND_SUCCESS";

/**
 * Determine the transaction flow strategy.
 *
 *     AUTHORIZATION - the processed transaction should be only authorized
 *     CHARGE - the processed transaction should be charged.
 *
 */
export type ITransactionFlowStrategyEnum = "AUTHORIZATION" | "CHARGE";

/**
 * Initializes a transaction session. It triggers the webhook `TRANSACTION_INITIALIZE_SESSION`, to the requested `paymentGateways`.
 *
 * Added in Saleor 3.13.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type ITransactionInitialize = {
  __typename?: "TransactionInitialize";
  /** The JSON data required to finalize the payment. */
  data?: Maybe<Scalars["JSON"]>;
  errors: Array<ITransactionInitializeError>;
  /** The initialized transaction. */
  transaction?: Maybe<ITransactionItem>;
  /** The event created for the initialized transaction. */
  transactionEvent?: Maybe<ITransactionEvent>;
};

export type ITransactionInitializeError = {
  __typename?: "TransactionInitializeError";
  /** The error code. */
  code: ITransactionInitializeErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars["String"]>;
  /** The error message. */
  message?: Maybe<Scalars["String"]>;
};

/** An enumeration. */
export type ITransactionInitializeErrorCode =
  | "GRAPHQL_ERROR"
  | "INVALID"
  | "NOT_FOUND";

/**
 * Event sent when user starts processing the payment.
 *
 * Added in Saleor 3.13.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type ITransactionInitializeSession = IEvent & {
  __typename?: "TransactionInitializeSession";
  /** Action to proceed for the transaction */
  action: ITransactionProcessAction;
  /** Payment gateway data in JSON format, recieved from storefront. */
  data?: Maybe<Scalars["JSON"]>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars["DateTime"]>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IIssuingPrincipal>;
  /** Merchant reference assigned to this payment. */
  merchantReference: Scalars["String"];
  /** The application receiving the webhook. */
  recipient?: Maybe<IApp>;
  /** Checkout or order */
  sourceObject: IOrderOrCheckout;
  /** Look up a transaction. */
  transaction: ITransactionItem;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars["String"]>;
};

/**
 * Represents a payment transaction.
 *
 * Added in Saleor 3.4.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type ITransactionItem = INode &
  IObjectWithMetadata & {
    __typename?: "TransactionItem";
    /** List of actions that can be performed in the current state of a payment. */
    actions: Array<ITransactionActionEnum>;
    /**
     * Total amount of ongoing authorization requests for the transaction.
     *
     * Added in Saleor 3.13.
     */
    authorizePendingAmount: IMoney;
    /** Total amount authorized for this payment. */
    authorizedAmount: IMoney;
    /**
     * Total amount of ongoing cancel requests for the transaction.
     *
     * Added in Saleor 3.13.
     */
    cancelPendingAmount: IMoney;
    /**
     * Total amount canceled for this payment.
     *
     * Added in Saleor 3.13.
     */
    canceledAmount: IMoney;
    /**
     * Total amount of ongoing charge requests for the transaction.
     *
     * Added in Saleor 3.13.
     */
    chargePendingAmount: IMoney;
    /** Total amount charged for this payment. */
    chargedAmount: IMoney;
    /** Date and time at which payment transaction was created. */
    createdAt: Scalars["DateTime"];
    /**
     * User or App that created the transaction.
     *
     * Added in Saleor 3.13.
     */
    createdBy?: Maybe<IUserOrApp>;
    /** List of all transaction's events. */
    events: Array<ITransactionEvent>;
    /**
     * The url that will allow to redirect user to payment provider page with transaction details.
     *
     * Added in Saleor 3.13.
     */
    externalUrl: Scalars["String"];
    /** The ID of the object. */
    id: Scalars["ID"];
    /**
     * Message related to the transaction.
     *
     * Added in Saleor 3.13.
     */
    message: Scalars["String"];
    /** List of public metadata items. Can be accessed without permissions. */
    metadata: Array<IMetadataItem>;
    /**
     * A single key from public metadata.
     *
     * Tip: Use GraphQL aliases to fetch multiple keys.
     *
     * Added in Saleor 3.3.
     */
    metafield?: Maybe<Scalars["String"]>;
    /**
     * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
     *
     * Added in Saleor 3.3.
     */
    metafields?: Maybe<Scalars["Metadata"]>;
    /** Date and time at which payment transaction was modified. */
    modifiedAt: Scalars["DateTime"];
    /**
     * Name of the transaction.
     *
     * Added in Saleor 3.13.
     */
    name: Scalars["String"];
    /**
     * The related order.
     *
     * Added in Saleor 3.6.
     */
    order?: Maybe<IOrder>;
    /** List of private metadata items. Requires staff permissions to access. */
    privateMetadata: Array<IMetadataItem>;
    /**
     * A single key from private metadata. Requires staff permissions to access.
     *
     * Tip: Use GraphQL aliases to fetch multiple keys.
     *
     * Added in Saleor 3.3.
     */
    privateMetafield?: Maybe<Scalars["String"]>;
    /**
     * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
     *
     * Added in Saleor 3.3.
     */
    privateMetafields?: Maybe<Scalars["Metadata"]>;
    /**
     * PSP reference of transaction.
     *
     * Added in Saleor 3.13.
     */
    pspReference: Scalars["String"];
    /**
     * Total amount of ongoing refund requests for the transaction.
     *
     * Added in Saleor 3.13.
     */
    refundPendingAmount: IMoney;
    /** Total amount refunded for this payment. */
    refundedAmount: IMoney;
  };

/**
 * Represents a payment transaction.
 *
 * Added in Saleor 3.4.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type ITransactionItemMetafieldArgs = {
  key: Scalars["String"];
};

/**
 * Represents a payment transaction.
 *
 * Added in Saleor 3.4.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type ITransactionItemMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars["String"]>>;
};

/**
 * Represents a payment transaction.
 *
 * Added in Saleor 3.4.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type ITransactionItemPrivateMetafieldArgs = {
  key: Scalars["String"];
};

/**
 * Represents a payment transaction.
 *
 * Added in Saleor 3.4.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type ITransactionItemPrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars["String"]>>;
};

/**
 * Event sent when transaction item metadata is updated.
 *
 * Added in Saleor 3.8.
 */
export type ITransactionItemMetadataUpdated = IEvent & {
  __typename?: "TransactionItemMetadataUpdated";
  /** Time of the event. */
  issuedAt?: Maybe<Scalars["DateTime"]>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IIssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<IApp>;
  /** Look up a transaction. */
  transaction?: Maybe<ITransactionItem>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars["String"]>;
};

/** An enumeration. */
export type ITransactionKind =
  | "ACTION_TO_CONFIRM"
  | "AUTH"
  | "CANCEL"
  | "CAPTURE"
  | "CONFIRM"
  | "EXTERNAL"
  | "PENDING"
  | "REFUND"
  | "REFUND_ONGOING"
  | "VOID";

/**
 * Processes a transaction session. It triggers the webhook `TRANSACTION_PROCESS_SESSION`, to the assigned `paymentGateways`.
 *
 * Added in Saleor 3.13.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type ITransactionProcess = {
  __typename?: "TransactionProcess";
  /** The json data required to finalize the payment. */
  data?: Maybe<Scalars["JSON"]>;
  errors: Array<ITransactionProcessError>;
  /** The processed transaction. */
  transaction?: Maybe<ITransactionItem>;
  /** The event created for the processed transaction. */
  transactionEvent?: Maybe<ITransactionEvent>;
};

export type ITransactionProcessAction = {
  __typename?: "TransactionProcessAction";
  actionType: ITransactionFlowStrategyEnum;
  /** Transaction amount to process. */
  amount: Scalars["PositiveDecimal"];
  /** Currency of the amount. */
  currency: Scalars["String"];
};

export type ITransactionProcessError = {
  __typename?: "TransactionProcessError";
  /** The error code. */
  code: ITransactionProcessErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars["String"]>;
  /** The error message. */
  message?: Maybe<Scalars["String"]>;
};

/** An enumeration. */
export type ITransactionProcessErrorCode =
  | "GRAPHQL_ERROR"
  | "INVALID"
  | "MISSING_PAYMENT_APP"
  | "MISSING_PAYMENT_APP_RELATION"
  | "NOT_FOUND"
  | "TRANSACTION_ALREADY_PROCESSED";

/**
 * Event sent when user has additional payment action to process.
 *
 * Added in Saleor 3.13.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type ITransactionProcessSession = IEvent & {
  __typename?: "TransactionProcessSession";
  /** Action to proceed for the transaction */
  action: ITransactionProcessAction;
  /** Payment gateway data in JSON format, recieved from storefront. */
  data?: Maybe<Scalars["JSON"]>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars["DateTime"]>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IIssuingPrincipal>;
  /** Merchant reference assigned to this payment. */
  merchantReference: Scalars["String"];
  /** The application receiving the webhook. */
  recipient?: Maybe<IApp>;
  /** Checkout or order */
  sourceObject: IOrderOrCheckout;
  /** Look up a transaction. */
  transaction: ITransactionItem;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars["String"]>;
};

/**
 * Event sent when transaction refund is requested.
 *
 * Added in Saleor 3.13.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 */
export type ITransactionRefundRequested = IEvent & {
  __typename?: "TransactionRefundRequested";
  /** Requested action data. */
  action: ITransactionAction;
  /**
   * Granted refund related to refund request.
   *
   * Added in Saleor 3.15.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  grantedRefund?: Maybe<IOrderGrantedRefund>;
  /** Time of the event. */
  issuedAt?: Maybe<Scalars["DateTime"]>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IIssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<IApp>;
  /** Look up a transaction. */
  transaction?: Maybe<ITransactionItem>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars["String"]>;
};

/**
 * Request an action for payment transaction.
 *
 * Added in Saleor 3.4.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 *
 * Requires one of the following permissions: HANDLE_PAYMENTS.
 */
export type ITransactionRequestAction = {
  __typename?: "TransactionRequestAction";
  errors: Array<ITransactionRequestActionError>;
  transaction?: Maybe<ITransactionItem>;
};

export type ITransactionRequestActionError = {
  __typename?: "TransactionRequestActionError";
  /** The error code. */
  code: ITransactionRequestActionErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars["String"]>;
  /** The error message. */
  message?: Maybe<Scalars["String"]>;
};

/** An enumeration. */
export type ITransactionRequestActionErrorCode =
  | "GRAPHQL_ERROR"
  | "INVALID"
  | "MISSING_TRANSACTION_ACTION_REQUEST_WEBHOOK"
  | "NOT_FOUND";

/**
 * Request a refund for payment transaction based on granted refund.
 *
 * Added in Saleor 3.15.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 *
 * Requires one of the following permissions: HANDLE_PAYMENTS.
 */
export type ITransactionRequestRefundForGrantedRefund = {
  __typename?: "TransactionRequestRefundForGrantedRefund";
  errors: Array<ITransactionRequestRefundForGrantedRefundError>;
  transaction?: Maybe<ITransactionItem>;
};

export type ITransactionRequestRefundForGrantedRefundError = {
  __typename?: "TransactionRequestRefundForGrantedRefundError";
  /** The error code. */
  code: ITransactionRequestRefundForGrantedRefundErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars["String"]>;
  /** The error message. */
  message?: Maybe<Scalars["String"]>;
};

/** An enumeration. */
export type ITransactionRequestRefundForGrantedRefundErrorCode =
  | "GRAPHQL_ERROR"
  | "INVALID"
  | "MISSING_TRANSACTION_ACTION_REQUEST_WEBHOOK"
  | "NOT_FOUND";

/**
 * Update transaction.
 *
 * Added in Saleor 3.4.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 *
 * Requires the following permissions: OWNER and HANDLE_PAYMENTS for apps, HANDLE_PAYMENTS for staff users. Staff user cannot update a transaction that is owned by the app.
 */
export type ITransactionUpdate = {
  __typename?: "TransactionUpdate";
  errors: Array<ITransactionUpdateError>;
  transaction?: Maybe<ITransactionItem>;
};

export type ITransactionUpdateError = {
  __typename?: "TransactionUpdateError";
  /** The error code. */
  code: ITransactionUpdateErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars["String"]>;
  /** The error message. */
  message?: Maybe<Scalars["String"]>;
};

/** An enumeration. */
export type ITransactionUpdateErrorCode =
  | "GRAPHQL_ERROR"
  | "INCORRECT_CURRENCY"
  | "INVALID"
  | "METADATA_KEY_REQUIRED"
  | "NOT_FOUND"
  | "UNIQUE";

export type ITransactionUpdateInput = {
  /** Amount authorized by this transaction. */
  amountAuthorized?: InputMaybe<IMoneyInput>;
  /**
   * Amount canceled by this transaction.
   *
   * Added in Saleor 3.13.
   */
  amountCanceled?: InputMaybe<IMoneyInput>;
  /** Amount charged by this transaction. */
  amountCharged?: InputMaybe<IMoneyInput>;
  /** Amount refunded by this transaction. */
  amountRefunded?: InputMaybe<IMoneyInput>;
  /** List of all possible actions for the transaction */
  availableActions?: InputMaybe<Array<ITransactionActionEnum>>;
  /**
   * The url that will allow to redirect user to payment provider page with transaction event details.
   *
   * Added in Saleor 3.13.
   */
  externalUrl?: InputMaybe<Scalars["String"]>;
  /**
   * The message of the transaction.
   *
   * Added in Saleor 3.13.
   */
  message?: InputMaybe<Scalars["String"]>;
  /** Payment public metadata. */
  metadata?: InputMaybe<Array<IMetadataInput>>;
  /**
   * Payment name of the transaction.
   *
   * Added in Saleor 3.13.
   */
  name?: InputMaybe<Scalars["String"]>;
  /** Payment private metadata. */
  privateMetadata?: InputMaybe<Array<IMetadataInput>>;
  /**
   * PSP Reference of the transaction.
   *
   * Added in Saleor 3.13.
   */
  pspReference?: InputMaybe<Scalars["String"]>;
};

export type ITranslatableItem =
  | IAttributeTranslatableContent
  | IAttributeValueTranslatableContent
  | ICategoryTranslatableContent
  | ICollectionTranslatableContent
  | IMenuItemTranslatableContent
  | IPageTranslatableContent
  | IProductTranslatableContent
  | IProductVariantTranslatableContent
  | ISaleTranslatableContent
  | IShippingMethodTranslatableContent
  | IVoucherTranslatableContent;

export type ITranslatableItemConnection = {
  __typename?: "TranslatableItemConnection";
  edges: Array<ITranslatableItemEdge>;
  /** Pagination data for this connection. */
  pageInfo: IPageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars["Int"]>;
};

export type ITranslatableItemEdge = {
  __typename?: "TranslatableItemEdge";
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node: ITranslatableItem;
};

export type ITranslatableKinds =
  | "ATTRIBUTE"
  | "ATTRIBUTE_VALUE"
  | "CATEGORY"
  | "COLLECTION"
  | "MENU_ITEM"
  | "PAGE"
  | "PRODUCT"
  | "SALE"
  | "SHIPPING_METHOD"
  | "VARIANT"
  | "VOUCHER";

/**
 * Event sent when new translation is created.
 *
 * Added in Saleor 3.2.
 */
export type ITranslationCreated = IEvent & {
  __typename?: "TranslationCreated";
  /** Time of the event. */
  issuedAt?: Maybe<Scalars["DateTime"]>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IIssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<IApp>;
  /** The translation the event relates to. */
  translation?: Maybe<ITranslationTypes>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars["String"]>;
};

export type ITranslationError = {
  __typename?: "TranslationError";
  /** The error code. */
  code: ITranslationErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars["String"]>;
  /** The error message. */
  message?: Maybe<Scalars["String"]>;
};

/** An enumeration. */
export type ITranslationErrorCode =
  | "GRAPHQL_ERROR"
  | "INVALID"
  | "NOT_FOUND"
  | "REQUIRED";

export type ITranslationInput = {
  /**
   * Translated description.
   *
   * Rich text format. For reference see https://editorjs.io/
   */
  description?: InputMaybe<Scalars["JSONString"]>;
  name?: InputMaybe<Scalars["String"]>;
  seoDescription?: InputMaybe<Scalars["String"]>;
  seoTitle?: InputMaybe<Scalars["String"]>;
};

export type ITranslationTypes =
  | IAttributeTranslation
  | IAttributeValueTranslation
  | ICategoryTranslation
  | ICollectionTranslation
  | IMenuItemTranslation
  | IPageTranslation
  | IProductTranslation
  | IProductVariantTranslation
  | ISaleTranslation
  | IShippingMethodTranslation
  | IVoucherTranslation;

/**
 * Event sent when translation is updated.
 *
 * Added in Saleor 3.2.
 */
export type ITranslationUpdated = IEvent & {
  __typename?: "TranslationUpdated";
  /** Time of the event. */
  issuedAt?: Maybe<Scalars["DateTime"]>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IIssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<IApp>;
  /** The translation the event relates to. */
  translation?: Maybe<ITranslationTypes>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars["String"]>;
};

export type IUpdateInvoiceInput = {
  /**
   * Fields required to update the invoice metadata.
   *
   * Added in Saleor 3.14.
   */
  metadata?: InputMaybe<Array<IMetadataInput>>;
  /** Invoice number */
  number?: InputMaybe<Scalars["String"]>;
  /**
   * Fields required to update the invoice private metadata.
   *
   * Added in Saleor 3.14.
   */
  privateMetadata?: InputMaybe<Array<IMetadataInput>>;
  /** URL of an invoice to download. */
  url?: InputMaybe<Scalars["String"]>;
};

/** Updates metadata of an object. To use it, you need to have access to the modified object. */
export type IUpdateMetadata = {
  __typename?: "UpdateMetadata";
  errors: Array<IMetadataError>;
  item?: Maybe<IObjectWithMetadata>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  metadataErrors: Array<IMetadataError>;
};

/** Updates private metadata of an object. To use it, you need to be an authenticated staff user or an app and have access to the modified object. */
export type IUpdatePrivateMetadata = {
  __typename?: "UpdatePrivateMetadata";
  errors: Array<IMetadataError>;
  item?: Maybe<IObjectWithMetadata>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  metadataErrors: Array<IMetadataError>;
};

export type IUploadError = {
  __typename?: "UploadError";
  /** The error code. */
  code: IUploadErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars["String"]>;
  /** The error message. */
  message?: Maybe<Scalars["String"]>;
};

/** An enumeration. */
export type IUploadErrorCode = "GRAPHQL_ERROR";

/** Represents user data. */
export type IUser = INode &
  IObjectWithMetadata & {
    __typename?: "User";
    /**
     * List of channels the user has access to. The sum of channels from all user groups. If at least one group has `restrictedAccessToChannels` set to False - all channels are returned.
     *
     * Added in Saleor 3.14.
     *
     * Note: this API is currently in Feature Preview and can be subject to changes at later point.
     */
    accessibleChannels?: Maybe<Array<IChannel>>;
    /** List of all user's addresses. */
    addresses: Array<IAddress>;
    /** The avatar of the user. */
    avatar?: Maybe<IImage>;
    /**
     * Returns the last open checkout of this user.
     * @deprecated This field will be removed in Saleor 4.0. Use the `checkoutTokens` field to fetch the user checkouts.
     */
    checkout?: Maybe<ICheckout>;
    /** Returns the checkout ID's assigned to this user. */
    checkoutIds?: Maybe<Array<Scalars["ID"]>>;
    /**
     * Returns the checkout UUID's assigned to this user.
     * @deprecated This field will be removed in Saleor 4.0. Use `checkoutIds` instead.
     */
    checkoutTokens?: Maybe<Array<Scalars["UUID"]>>;
    /**
     * Returns checkouts assigned to this user.
     *
     * Added in Saleor 3.8.
     */
    checkouts?: Maybe<ICheckoutCountableConnection>;
    /** The data when the user create account. */
    dateJoined: Scalars["DateTime"];
    /** The default billing address of the user. */
    defaultBillingAddress?: Maybe<IAddress>;
    /** The default shipping address of the user. */
    defaultShippingAddress?: Maybe<IAddress>;
    /** List of user's permission groups which user can manage. */
    editableGroups?: Maybe<Array<IGroup>>;
    /** The email address of the user. */
    email: Scalars["String"];
    /**
     * List of events associated with the user.
     *
     * Requires one of the following permissions: MANAGE_USERS, MANAGE_STAFF.
     */
    events?: Maybe<Array<ICustomerEvent>>;
    /**
     * External ID of this user.
     *
     * Added in Saleor 3.10.
     */
    externalReference?: Maybe<Scalars["String"]>;
    /** The given name of the address. */
    firstName: Scalars["String"];
    /** List of the user gift cards. */
    giftCards?: Maybe<IGiftCardCountableConnection>;
    /** The ID of the user. */
    id: Scalars["ID"];
    /** Determine if the user is active. */
    isActive: Scalars["Boolean"];
    /**
     * Determines if user has confirmed email.
     *
     * Added in Saleor 3.15.
     */
    isConfirmed: Scalars["Boolean"];
    /** Determine if the user is a staff admin. */
    isStaff: Scalars["Boolean"];
    /** User language code. */
    languageCode: ILanguageCodeEnum;
    /** The date when the user last time log in to the system. */
    lastLogin?: Maybe<Scalars["DateTime"]>;
    /** The family name of the address. */
    lastName: Scalars["String"];
    /** List of public metadata items. Can be accessed without permissions. */
    metadata: Array<IMetadataItem>;
    /**
     * A single key from public metadata.
     *
     * Tip: Use GraphQL aliases to fetch multiple keys.
     *
     * Added in Saleor 3.3.
     */
    metafield?: Maybe<Scalars["String"]>;
    /**
     * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
     *
     * Added in Saleor 3.3.
     */
    metafields?: Maybe<Scalars["Metadata"]>;
    /**
     * A note about the customer.
     *
     * Requires one of the following permissions: MANAGE_USERS, MANAGE_STAFF.
     */
    note?: Maybe<Scalars["String"]>;
    /** List of user's orders. Requires one of the following permissions: MANAGE_STAFF, OWNER. */
    orders?: Maybe<IOrderCountableConnection>;
    /** List of user's permission groups. */
    permissionGroups?: Maybe<Array<IGroup>>;
    /** List of private metadata items. Requires staff permissions to access. */
    privateMetadata: Array<IMetadataItem>;
    /**
     * A single key from private metadata. Requires staff permissions to access.
     *
     * Tip: Use GraphQL aliases to fetch multiple keys.
     *
     * Added in Saleor 3.3.
     */
    privateMetafield?: Maybe<Scalars["String"]>;
    /**
     * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
     *
     * Added in Saleor 3.3.
     */
    privateMetafields?: Maybe<Scalars["Metadata"]>;
    /**
     * Determine if user have restricted access to channels. False if at least one user group has `restrictedAccessToChannels` set to False.
     *
     * Added in Saleor 3.14.
     *
     * Note: this API is currently in Feature Preview and can be subject to changes at later point.
     */
    restrictedAccessToChannels: Scalars["Boolean"];
    /**
     * Returns a list of user's stored payment methods that can be used in provided channel. The field returns a list of stored payment methods by payment apps. When `amount` is not provided, 0 will be used as default value.
     *
     * Added in Saleor 3.15.
     *
     * Note: this API is currently in Feature Preview and can be subject to changes at later point.
     */
    storedPaymentMethods?: Maybe<Array<IStoredPaymentMethod>>;
    /** List of stored payment sources. The field returns a list of payment sources stored for payment plugins. */
    storedPaymentSources?: Maybe<Array<IPaymentSource>>;
    /** The data when the user last update the account information. */
    updatedAt: Scalars["DateTime"];
    /** List of user's permissions. */
    userPermissions?: Maybe<Array<IUserPermission>>;
  };

/** Represents user data. */
export type IUserAvatarArgs = {
  format?: InputMaybe<IThumbnailFormatEnum>;
  size?: InputMaybe<Scalars["Int"]>;
};

/** Represents user data. */
export type IUserCheckoutIdsArgs = {
  channel?: InputMaybe<Scalars["String"]>;
};

/** Represents user data. */
export type IUserCheckoutTokensArgs = {
  channel?: InputMaybe<Scalars["String"]>;
};

/** Represents user data. */
export type IUserCheckoutsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  channel?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

/** Represents user data. */
export type IUserGiftCardsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

/** Represents user data. */
export type IUserMetafieldArgs = {
  key: Scalars["String"];
};

/** Represents user data. */
export type IUserMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars["String"]>>;
};

/** Represents user data. */
export type IUserOrdersArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

/** Represents user data. */
export type IUserPrivateMetafieldArgs = {
  key: Scalars["String"];
};

/** Represents user data. */
export type IUserPrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars["String"]>>;
};

/** Represents user data. */
export type IUserStoredPaymentMethodsArgs = {
  channel: Scalars["String"];
};

/** Represents user data. */
export type IUserStoredPaymentSourcesArgs = {
  channel?: InputMaybe<Scalars["String"]>;
};

/**
 * Deletes a user avatar. Only for staff members.
 *
 * Requires one of the following permissions: AUTHENTICATED_STAFF_USER.
 */
export type IUserAvatarDelete = {
  __typename?: "UserAvatarDelete";
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<IAccountError>;
  errors: Array<IAccountError>;
  /** An updated user instance. */
  user?: Maybe<IUser>;
};

/**
 * Create a user avatar. Only for staff members. This mutation must be sent as a `multipart` request. More detailed specs of the upload format can be found here: https://github.com/jaydenseric/graphql-multipart-request-spec
 *
 * Requires one of the following permissions: AUTHENTICATED_STAFF_USER.
 */
export type IUserAvatarUpdate = {
  __typename?: "UserAvatarUpdate";
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<IAccountError>;
  errors: Array<IAccountError>;
  /** An updated user instance. */
  user?: Maybe<IUser>;
};

/**
 * Activate or deactivate users.
 *
 * Requires one of the following permissions: MANAGE_USERS.
 */
export type IUserBulkSetActive = {
  __typename?: "UserBulkSetActive";
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<IAccountError>;
  /** Returns how many objects were affected. */
  count: Scalars["Int"];
  errors: Array<IAccountError>;
};

export type IUserCountableConnection = {
  __typename?: "UserCountableConnection";
  edges: Array<IUserCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: IPageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars["Int"]>;
};

export type IUserCountableEdge = {
  __typename?: "UserCountableEdge";
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node: IUser;
};

export type IUserCreateInput = {
  /** Slug of a channel which will be used for notify user. Optional when only one channel exists. */
  channel?: InputMaybe<Scalars["String"]>;
  /** Billing address of the customer. */
  defaultBillingAddress?: InputMaybe<IAddressInput>;
  /** Shipping address of the customer. */
  defaultShippingAddress?: InputMaybe<IAddressInput>;
  /** The unique email address of the user. */
  email?: InputMaybe<Scalars["String"]>;
  /**
   * External ID of the customer.
   *
   * Added in Saleor 3.10.
   */
  externalReference?: InputMaybe<Scalars["String"]>;
  /** Given name. */
  firstName?: InputMaybe<Scalars["String"]>;
  /** User account is active. */
  isActive?: InputMaybe<Scalars["Boolean"]>;
  /**
   * User account is confirmed.
   *
   * Added in Saleor 3.15.
   */
  isConfirmed?: InputMaybe<Scalars["Boolean"]>;
  /** User language code. */
  languageCode?: InputMaybe<ILanguageCodeEnum>;
  /** Family name. */
  lastName?: InputMaybe<Scalars["String"]>;
  /**
   * Fields required to update the user metadata.
   *
   * Added in Saleor 3.14.
   */
  metadata?: InputMaybe<Array<IMetadataInput>>;
  /** A note about the user. */
  note?: InputMaybe<Scalars["String"]>;
  /**
   * Fields required to update the user private metadata.
   *
   * Added in Saleor 3.14.
   */
  privateMetadata?: InputMaybe<Array<IMetadataInput>>;
  /** URL of a view where users should be redirected to set the password. URL in RFC 1808 format. */
  redirectUrl?: InputMaybe<Scalars["String"]>;
};

export type IUserOrApp = IApp | IUser;

/** Represents user's permissions. */
export type IUserPermission = {
  __typename?: "UserPermission";
  /** Internal code for permission. */
  code: IPermissionEnum;
  /** Describe action(s) allowed to do by permission. */
  name: Scalars["String"];
  /** List of user permission groups which contains this permission. */
  sourcePermissionGroups?: Maybe<Array<IGroup>>;
};

/** Represents user's permissions. */
export type IUserPermissionSourcePermissionGroupsArgs = {
  userId: Scalars["ID"];
};

export type IUserSortField =
  /** Sort users by created at. */
  | "CREATED_AT"
  /** Sort users by email. */
  | "EMAIL"
  /** Sort users by first name. */
  | "FIRST_NAME"
  /** Sort users by last modified at. */
  | "LAST_MODIFIED_AT"
  /** Sort users by last name. */
  | "LAST_NAME"
  /** Sort users by order count. */
  | "ORDER_COUNT";

export type IUserSortingInput = {
  /** Specifies the direction in which to sort users. */
  direction: IOrderDirection;
  /** Sort users by the selected field. */
  field: IUserSortField;
};

/** Represents a VAT rate for a country. */
export type IVat = {
  __typename?: "VAT";
  /** Country code. */
  countryCode: Scalars["String"];
  /** Country's VAT rate exceptions for specific types of goods. */
  reducedRates: Array<IReducedRate>;
  /** Standard VAT rate in percent. */
  standardRate?: Maybe<Scalars["Float"]>;
};

export type IVariantAttributeScope =
  | "ALL"
  | "NOT_VARIANT_SELECTION"
  | "VARIANT_SELECTION";

/**
 * Assign an media to a product variant.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type IVariantMediaAssign = {
  __typename?: "VariantMediaAssign";
  errors: Array<IProductError>;
  media?: Maybe<IProductMedia>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<IProductError>;
  productVariant?: Maybe<IProductVariant>;
};

/**
 * Unassign an media from a product variant.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type IVariantMediaUnassign = {
  __typename?: "VariantMediaUnassign";
  errors: Array<IProductError>;
  media?: Maybe<IProductMedia>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<IProductError>;
  productVariant?: Maybe<IProductVariant>;
};

/** Represents availability of a variant in the storefront. */
export type IVariantPricingInfo = {
  __typename?: "VariantPricingInfo";
  /** The discount amount if in sale (null otherwise). */
  discount?: Maybe<ITaxedMoney>;
  /**
   * The discount amount in the local currency.
   * @deprecated This field will be removed in Saleor 4.0. Always returns `null`.
   */
  discountLocalCurrency?: Maybe<ITaxedMoney>;
  /** Whether it is in sale or not. */
  onSale?: Maybe<Scalars["Boolean"]>;
  /** The price, with any discount subtracted. */
  price?: Maybe<ITaxedMoney>;
  /**
   * The discounted price in the local currency.
   * @deprecated This field will be removed in Saleor 4.0. Always returns `null`.
   */
  priceLocalCurrency?: Maybe<ITaxedMoney>;
  /** The price without any discount. */
  priceUndiscounted?: Maybe<ITaxedMoney>;
};

/** Verify JWT token. */
export type IVerifyToken = {
  __typename?: "VerifyToken";
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<IAccountError>;
  errors: Array<IAccountError>;
  /** Determine if token is valid or not. */
  isValid: Scalars["Boolean"];
  /** JWT payload. */
  payload?: Maybe<Scalars["GenericScalar"]>;
  /** User assigned to token. */
  user?: Maybe<IUser>;
};

/** An enumeration. */
export type IVolumeUnitsEnum =
  | "ACRE_FT"
  | "ACRE_IN"
  | "CUBIC_CENTIMETER"
  | "CUBIC_DECIMETER"
  | "CUBIC_FOOT"
  | "CUBIC_INCH"
  | "CUBIC_METER"
  | "CUBIC_MILLIMETER"
  | "CUBIC_YARD"
  | "FL_OZ"
  | "LITER"
  | "PINT"
  | "QT";

/** Vouchers allow giving discounts to particular customers on categories, collections or specific products. They can be used during checkout by providing valid voucher codes. */
export type IVoucher = INode &
  IObjectWithMetadata & {
    __typename?: "Voucher";
    /** Determine if the voucher usage should be limited to one use per customer. */
    applyOncePerCustomer: Scalars["Boolean"];
    /** Determine if the voucher should be applied once per order. If set to True, the voucher is applied to a single cheapest eligible product in checkout. */
    applyOncePerOrder: Scalars["Boolean"];
    /** List of categories this voucher applies to. */
    categories?: Maybe<ICategoryCountableConnection>;
    /**
     * List of availability in channels for the voucher.
     *
     * Requires one of the following permissions: MANAGE_DISCOUNTS.
     */
    channelListings?: Maybe<Array<IVoucherChannelListing>>;
    /** The code of the voucher. */
    code: Scalars["String"];
    /**
     * List of collections this voucher applies to.
     *
     * Requires one of the following permissions: MANAGE_DISCOUNTS.
     */
    collections?: Maybe<ICollectionCountableConnection>;
    /** List of countries available for the shipping voucher. */
    countries?: Maybe<Array<ICountryDisplay>>;
    /** Currency code for voucher. */
    currency?: Maybe<Scalars["String"]>;
    /** Voucher value. */
    discountValue?: Maybe<Scalars["Float"]>;
    /** Determines a type of discount for voucher - value or percentage */
    discountValueType: IDiscountValueTypeEnum;
    /** The end date and time of voucher. */
    endDate?: Maybe<Scalars["DateTime"]>;
    /** The ID of the voucher. */
    id: Scalars["ID"];
    /** List of public metadata items. Can be accessed without permissions. */
    metadata: Array<IMetadataItem>;
    /**
     * A single key from public metadata.
     *
     * Tip: Use GraphQL aliases to fetch multiple keys.
     *
     * Added in Saleor 3.3.
     */
    metafield?: Maybe<Scalars["String"]>;
    /**
     * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
     *
     * Added in Saleor 3.3.
     */
    metafields?: Maybe<Scalars["Metadata"]>;
    /** Determine minimum quantity of items for checkout. */
    minCheckoutItemsQuantity?: Maybe<Scalars["Int"]>;
    /** Minimum order value to apply voucher. */
    minSpent?: Maybe<IMoney>;
    /** The name of the voucher. */
    name?: Maybe<Scalars["String"]>;
    /** Determine if the voucher is available only for staff members. */
    onlyForStaff: Scalars["Boolean"];
    /** List of private metadata items. Requires staff permissions to access. */
    privateMetadata: Array<IMetadataItem>;
    /**
     * A single key from private metadata. Requires staff permissions to access.
     *
     * Tip: Use GraphQL aliases to fetch multiple keys.
     *
     * Added in Saleor 3.3.
     */
    privateMetafield?: Maybe<Scalars["String"]>;
    /**
     * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
     *
     * Added in Saleor 3.3.
     */
    privateMetafields?: Maybe<Scalars["Metadata"]>;
    /**
     * List of products this voucher applies to.
     *
     * Requires one of the following permissions: MANAGE_DISCOUNTS.
     */
    products?: Maybe<IProductCountableConnection>;
    /** The start date and time of voucher. */
    startDate: Scalars["DateTime"];
    /** Returns translated voucher fields for the given language code. */
    translation?: Maybe<IVoucherTranslation>;
    /** Determines a type of voucher. */
    type: IVoucherTypeEnum;
    /** The number of times a voucher can be used. */
    usageLimit?: Maybe<Scalars["Int"]>;
    /** Usage count of the voucher. */
    used: Scalars["Int"];
    /**
     * List of product variants this voucher applies to.
     *
     * Added in Saleor 3.1.
     *
     * Requires one of the following permissions: MANAGE_DISCOUNTS.
     */
    variants?: Maybe<IProductVariantCountableConnection>;
  };

/** Vouchers allow giving discounts to particular customers on categories, collections or specific products. They can be used during checkout by providing valid voucher codes. */
export type IVoucherCategoriesArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

/** Vouchers allow giving discounts to particular customers on categories, collections or specific products. They can be used during checkout by providing valid voucher codes. */
export type IVoucherCollectionsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

/** Vouchers allow giving discounts to particular customers on categories, collections or specific products. They can be used during checkout by providing valid voucher codes. */
export type IVoucherMetafieldArgs = {
  key: Scalars["String"];
};

/** Vouchers allow giving discounts to particular customers on categories, collections or specific products. They can be used during checkout by providing valid voucher codes. */
export type IVoucherMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars["String"]>>;
};

/** Vouchers allow giving discounts to particular customers on categories, collections or specific products. They can be used during checkout by providing valid voucher codes. */
export type IVoucherPrivateMetafieldArgs = {
  key: Scalars["String"];
};

/** Vouchers allow giving discounts to particular customers on categories, collections or specific products. They can be used during checkout by providing valid voucher codes. */
export type IVoucherPrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars["String"]>>;
};

/** Vouchers allow giving discounts to particular customers on categories, collections or specific products. They can be used during checkout by providing valid voucher codes. */
export type IVoucherProductsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

/** Vouchers allow giving discounts to particular customers on categories, collections or specific products. They can be used during checkout by providing valid voucher codes. */
export type IVoucherTranslationArgs = {
  languageCode: ILanguageCodeEnum;
};

/** Vouchers allow giving discounts to particular customers on categories, collections or specific products. They can be used during checkout by providing valid voucher codes. */
export type IVoucherVariantsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

/**
 * Adds products, categories, collections to a voucher.
 *
 * Requires one of the following permissions: MANAGE_DISCOUNTS.
 *
 * Triggers the following webhook events:
 * - VOUCHER_UPDATED (async): A voucher was updated.
 */
export type IVoucherAddCatalogues = {
  __typename?: "VoucherAddCatalogues";
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  discountErrors: Array<IDiscountError>;
  errors: Array<IDiscountError>;
  /** Voucher of which catalogue IDs will be modified. */
  voucher?: Maybe<IVoucher>;
};

/**
 * Deletes vouchers.
 *
 * Requires one of the following permissions: MANAGE_DISCOUNTS.
 *
 * Triggers the following webhook events:
 * - VOUCHER_DELETED (async): A voucher was deleted.
 */
export type IVoucherBulkDelete = {
  __typename?: "VoucherBulkDelete";
  /** Returns how many objects were affected. */
  count: Scalars["Int"];
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  discountErrors: Array<IDiscountError>;
  errors: Array<IDiscountError>;
};

/** Represents voucher channel listing. */
export type IVoucherChannelListing = INode & {
  __typename?: "VoucherChannelListing";
  /** The channel in which voucher can be applied. */
  channel: IChannel;
  /** Currency code for voucher in a channel. */
  currency: Scalars["String"];
  /** The value of the discount on voucher in a channel. */
  discountValue: Scalars["Float"];
  /** The ID of channel listing. */
  id: Scalars["ID"];
  /** Minimum order value for voucher to apply in channel. */
  minSpent?: Maybe<IMoney>;
};

export type IVoucherChannelListingAddInput = {
  /** ID of a channel. */
  channelId: Scalars["ID"];
  /** Value of the voucher. */
  discountValue?: InputMaybe<Scalars["PositiveDecimal"]>;
  /** Min purchase amount required to apply the voucher. */
  minAmountSpent?: InputMaybe<Scalars["PositiveDecimal"]>;
};

export type IVoucherChannelListingInput = {
  /** List of channels to which the voucher should be assigned. */
  addChannels?: InputMaybe<Array<IVoucherChannelListingAddInput>>;
  /** List of channels from which the voucher should be unassigned. */
  removeChannels?: InputMaybe<Array<Scalars["ID"]>>;
};

/**
 * Manage voucher's availability in channels.
 *
 * Requires one of the following permissions: MANAGE_DISCOUNTS.
 *
 * Triggers the following webhook events:
 * - VOUCHER_UPDATED (async): A voucher was updated.
 */
export type IVoucherChannelListingUpdate = {
  __typename?: "VoucherChannelListingUpdate";
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  discountErrors: Array<IDiscountError>;
  errors: Array<IDiscountError>;
  /** An updated voucher instance. */
  voucher?: Maybe<IVoucher>;
};

export type IVoucherCountableConnection = {
  __typename?: "VoucherCountableConnection";
  edges: Array<IVoucherCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: IPageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars["Int"]>;
};

export type IVoucherCountableEdge = {
  __typename?: "VoucherCountableEdge";
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node: IVoucher;
};

/**
 * Creates a new voucher.
 *
 * Requires one of the following permissions: MANAGE_DISCOUNTS.
 *
 * Triggers the following webhook events:
 * - VOUCHER_CREATED (async): A voucher was created.
 */
export type IVoucherCreate = {
  __typename?: "VoucherCreate";
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  discountErrors: Array<IDiscountError>;
  errors: Array<IDiscountError>;
  voucher?: Maybe<IVoucher>;
};

/**
 * Event sent when new voucher is created.
 *
 * Added in Saleor 3.4.
 */
export type IVoucherCreated = IEvent & {
  __typename?: "VoucherCreated";
  /** Time of the event. */
  issuedAt?: Maybe<Scalars["DateTime"]>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IIssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<IApp>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars["String"]>;
  /** The voucher the event relates to. */
  voucher?: Maybe<IVoucher>;
};

/**
 * Event sent when new voucher is created.
 *
 * Added in Saleor 3.4.
 */
export type IVoucherCreatedVoucherArgs = {
  channel?: InputMaybe<Scalars["String"]>;
};

/**
 * Deletes a voucher.
 *
 * Requires one of the following permissions: MANAGE_DISCOUNTS.
 *
 * Triggers the following webhook events:
 * - VOUCHER_DELETED (async): A voucher was deleted.
 */
export type IVoucherDelete = {
  __typename?: "VoucherDelete";
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  discountErrors: Array<IDiscountError>;
  errors: Array<IDiscountError>;
  voucher?: Maybe<IVoucher>;
};

/**
 * Event sent when voucher is deleted.
 *
 * Added in Saleor 3.4.
 */
export type IVoucherDeleted = IEvent & {
  __typename?: "VoucherDeleted";
  /** Time of the event. */
  issuedAt?: Maybe<Scalars["DateTime"]>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IIssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<IApp>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars["String"]>;
  /** The voucher the event relates to. */
  voucher?: Maybe<IVoucher>;
};

/**
 * Event sent when voucher is deleted.
 *
 * Added in Saleor 3.4.
 */
export type IVoucherDeletedVoucherArgs = {
  channel?: InputMaybe<Scalars["String"]>;
};

export type IVoucherDiscountType = "FIXED" | "PERCENTAGE" | "SHIPPING";

export type IVoucherFilterInput = {
  discountType?: InputMaybe<Array<IVoucherDiscountType>>;
  ids?: InputMaybe<Array<Scalars["ID"]>>;
  metadata?: InputMaybe<Array<IMetadataFilter>>;
  search?: InputMaybe<Scalars["String"]>;
  started?: InputMaybe<IDateTimeRangeInput>;
  status?: InputMaybe<Array<IDiscountStatusEnum>>;
  timesUsed?: InputMaybe<IIntRangeInput>;
};

export type IVoucherInput = {
  /** Voucher should be applied once per customer. */
  applyOncePerCustomer?: InputMaybe<Scalars["Boolean"]>;
  /** Voucher should be applied to the cheapest item or entire order. */
  applyOncePerOrder?: InputMaybe<Scalars["Boolean"]>;
  /** Categories discounted by the voucher. */
  categories?: InputMaybe<Array<Scalars["ID"]>>;
  /** Code to use the voucher. */
  code?: InputMaybe<Scalars["String"]>;
  /** Collections discounted by the voucher. */
  collections?: InputMaybe<Array<Scalars["ID"]>>;
  /** Country codes that can be used with the shipping voucher. */
  countries?: InputMaybe<Array<Scalars["String"]>>;
  /** Choices: fixed or percentage. */
  discountValueType?: InputMaybe<IDiscountValueTypeEnum>;
  /** End date of the voucher in ISO 8601 format. */
  endDate?: InputMaybe<Scalars["DateTime"]>;
  /** Minimal quantity of checkout items required to apply the voucher. */
  minCheckoutItemsQuantity?: InputMaybe<Scalars["Int"]>;
  /** Voucher name. */
  name?: InputMaybe<Scalars["String"]>;
  /** Voucher can be used only by staff user. */
  onlyForStaff?: InputMaybe<Scalars["Boolean"]>;
  /** Products discounted by the voucher. */
  products?: InputMaybe<Array<Scalars["ID"]>>;
  /** Start date of the voucher in ISO 8601 format. */
  startDate?: InputMaybe<Scalars["DateTime"]>;
  /** Voucher type: PRODUCT, CATEGORY SHIPPING or ENTIRE_ORDER. */
  type?: InputMaybe<IVoucherTypeEnum>;
  /** Limit number of times this voucher can be used in total. */
  usageLimit?: InputMaybe<Scalars["Int"]>;
  /**
   * Variants discounted by the voucher.
   *
   * Added in Saleor 3.1.
   */
  variants?: InputMaybe<Array<Scalars["ID"]>>;
};

/**
 * Event sent when voucher metadata is updated.
 *
 * Added in Saleor 3.8.
 */
export type IVoucherMetadataUpdated = IEvent & {
  __typename?: "VoucherMetadataUpdated";
  /** Time of the event. */
  issuedAt?: Maybe<Scalars["DateTime"]>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IIssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<IApp>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars["String"]>;
  /** The voucher the event relates to. */
  voucher?: Maybe<IVoucher>;
};

/**
 * Event sent when voucher metadata is updated.
 *
 * Added in Saleor 3.8.
 */
export type IVoucherMetadataUpdatedVoucherArgs = {
  channel?: InputMaybe<Scalars["String"]>;
};

/**
 * Removes products, categories, collections from a voucher.
 *
 * Requires one of the following permissions: MANAGE_DISCOUNTS.
 *
 * Triggers the following webhook events:
 * - VOUCHER_UPDATED (async): A voucher was updated.
 */
export type IVoucherRemoveCatalogues = {
  __typename?: "VoucherRemoveCatalogues";
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  discountErrors: Array<IDiscountError>;
  errors: Array<IDiscountError>;
  /** Voucher of which catalogue IDs will be modified. */
  voucher?: Maybe<IVoucher>;
};

export type IVoucherSortField =
  /** Sort vouchers by code. */
  | "CODE"
  /** Sort vouchers by end date. */
  | "END_DATE"
  /**
   * Sort vouchers by minimum spent amount.
   *
   * This option requires a channel filter to work as the values can vary between channels.
   */
  | "MINIMUM_SPENT_AMOUNT"
  /** Sort vouchers by start date. */
  | "START_DATE"
  /** Sort vouchers by type. */
  | "TYPE"
  /** Sort vouchers by usage limit. */
  | "USAGE_LIMIT"
  /**
   * Sort vouchers by value.
   *
   * This option requires a channel filter to work as the values can vary between channels.
   */
  | "VALUE";

export type IVoucherSortingInput = {
  /**
   * Specifies the channel in which to sort the data.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Use root-level channel argument instead.
   */
  channel?: InputMaybe<Scalars["String"]>;
  /** Specifies the direction in which to sort vouchers. */
  direction: IOrderDirection;
  /** Sort vouchers by the selected field. */
  field: IVoucherSortField;
};

export type IVoucherTranslatableContent = INode & {
  __typename?: "VoucherTranslatableContent";
  /** The ID of the voucher translatable content. */
  id: Scalars["ID"];
  /** Voucher name to translate. */
  name?: Maybe<Scalars["String"]>;
  /** Returns translated voucher fields for the given language code. */
  translation?: Maybe<IVoucherTranslation>;
  /**
   * Vouchers allow giving discounts to particular customers on categories, collections or specific products. They can be used during checkout by providing valid voucher codes.
   *
   * Requires one of the following permissions: MANAGE_DISCOUNTS.
   * @deprecated This field will be removed in Saleor 4.0. Get model fields from the root level queries.
   */
  voucher?: Maybe<IVoucher>;
};

export type IVoucherTranslatableContentTranslationArgs = {
  languageCode: ILanguageCodeEnum;
};

/**
 * Creates/updates translations for a voucher.
 *
 * Requires one of the following permissions: MANAGE_TRANSLATIONS.
 */
export type IVoucherTranslate = {
  __typename?: "VoucherTranslate";
  errors: Array<ITranslationError>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  translationErrors: Array<ITranslationError>;
  voucher?: Maybe<IVoucher>;
};

export type IVoucherTranslation = INode & {
  __typename?: "VoucherTranslation";
  /** The ID of the voucher translation. */
  id: Scalars["ID"];
  /** Translation language. */
  language: ILanguageDisplay;
  /** Translated voucher name. */
  name?: Maybe<Scalars["String"]>;
};

export type IVoucherTypeEnum = "ENTIRE_ORDER" | "SHIPPING" | "SPECIFIC_PRODUCT";

/**
 * Updates a voucher.
 *
 * Requires one of the following permissions: MANAGE_DISCOUNTS.
 *
 * Triggers the following webhook events:
 * - VOUCHER_UPDATED (async): A voucher was updated.
 */
export type IVoucherUpdate = {
  __typename?: "VoucherUpdate";
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  discountErrors: Array<IDiscountError>;
  errors: Array<IDiscountError>;
  voucher?: Maybe<IVoucher>;
};

/**
 * Event sent when voucher is updated.
 *
 * Added in Saleor 3.4.
 */
export type IVoucherUpdated = IEvent & {
  __typename?: "VoucherUpdated";
  /** Time of the event. */
  issuedAt?: Maybe<Scalars["DateTime"]>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IIssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<IApp>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars["String"]>;
  /** The voucher the event relates to. */
  voucher?: Maybe<IVoucher>;
};

/**
 * Event sent when voucher is updated.
 *
 * Added in Saleor 3.4.
 */
export type IVoucherUpdatedVoucherArgs = {
  channel?: InputMaybe<Scalars["String"]>;
};

/** Represents warehouse. */
export type IWarehouse = INode &
  IObjectWithMetadata & {
    __typename?: "Warehouse";
    /** Address of the warehouse. */
    address: IAddress;
    /**
     * Click and collect options: local, all or disabled.
     *
     * Added in Saleor 3.1.
     */
    clickAndCollectOption: IWarehouseClickAndCollectOptionEnum;
    /**
     * Warehouse company name.
     * @deprecated This field will be removed in Saleor 4.0. Use `Address.companyName` instead.
     */
    companyName: Scalars["String"];
    /** Warehouse email. */
    email: Scalars["String"];
    /**
     * External ID of this warehouse.
     *
     * Added in Saleor 3.10.
     */
    externalReference?: Maybe<Scalars["String"]>;
    /** The ID of the warehouse. */
    id: Scalars["ID"];
    /** Determine if the warehouse is private. */
    isPrivate: Scalars["Boolean"];
    /** List of public metadata items. Can be accessed without permissions. */
    metadata: Array<IMetadataItem>;
    /**
     * A single key from public metadata.
     *
     * Tip: Use GraphQL aliases to fetch multiple keys.
     *
     * Added in Saleor 3.3.
     */
    metafield?: Maybe<Scalars["String"]>;
    /**
     * Public metadata. Use `keys` to control which fields you want to include. The default is to include everything.
     *
     * Added in Saleor 3.3.
     */
    metafields?: Maybe<Scalars["Metadata"]>;
    /** Warehouse name. */
    name: Scalars["String"];
    /** List of private metadata items. Requires staff permissions to access. */
    privateMetadata: Array<IMetadataItem>;
    /**
     * A single key from private metadata. Requires staff permissions to access.
     *
     * Tip: Use GraphQL aliases to fetch multiple keys.
     *
     * Added in Saleor 3.3.
     */
    privateMetafield?: Maybe<Scalars["String"]>;
    /**
     * Private metadata. Requires staff permissions to access. Use `keys` to control which fields you want to include. The default is to include everything.
     *
     * Added in Saleor 3.3.
     */
    privateMetafields?: Maybe<Scalars["Metadata"]>;
    /** Shipping zones supported by the warehouse. */
    shippingZones: IShippingZoneCountableConnection;
    /** Warehouse slug. */
    slug: Scalars["String"];
  };

/** Represents warehouse. */
export type IWarehouseMetafieldArgs = {
  key: Scalars["String"];
};

/** Represents warehouse. */
export type IWarehouseMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars["String"]>>;
};

/** Represents warehouse. */
export type IWarehousePrivateMetafieldArgs = {
  key: Scalars["String"];
};

/** Represents warehouse. */
export type IWarehousePrivateMetafieldsArgs = {
  keys?: InputMaybe<Array<Scalars["String"]>>;
};

/** Represents warehouse. */
export type IWarehouseShippingZonesArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
};

/** An enumeration. */
export type IWarehouseClickAndCollectOptionEnum = "ALL" | "DISABLED" | "LOCAL";

export type IWarehouseCountableConnection = {
  __typename?: "WarehouseCountableConnection";
  edges: Array<IWarehouseCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: IPageInfo;
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars["Int"]>;
};

export type IWarehouseCountableEdge = {
  __typename?: "WarehouseCountableEdge";
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node: IWarehouse;
};

/**
 * Creates new warehouse.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type IWarehouseCreate = {
  __typename?: "WarehouseCreate";
  errors: Array<IWarehouseError>;
  warehouse?: Maybe<IWarehouse>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  warehouseErrors: Array<IWarehouseError>;
};

export type IWarehouseCreateInput = {
  /** Address of the warehouse. */
  address: IAddressInput;
  /** The email address of the warehouse. */
  email?: InputMaybe<Scalars["String"]>;
  /**
   * External ID of the warehouse.
   *
   * Added in Saleor 3.10.
   */
  externalReference?: InputMaybe<Scalars["String"]>;
  /** Warehouse name. */
  name: Scalars["String"];
  /**
   * Shipping zones supported by the warehouse.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Providing the zone ids will raise a ValidationError.
   */
  shippingZones?: InputMaybe<Array<Scalars["ID"]>>;
  /** Warehouse slug. */
  slug?: InputMaybe<Scalars["String"]>;
};

/**
 * Event sent when new warehouse is created.
 *
 * Added in Saleor 3.4.
 */
export type IWarehouseCreated = IEvent & {
  __typename?: "WarehouseCreated";
  /** Time of the event. */
  issuedAt?: Maybe<Scalars["DateTime"]>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IIssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<IApp>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars["String"]>;
  /** The warehouse the event relates to. */
  warehouse?: Maybe<IWarehouse>;
};

/**
 * Deletes selected warehouse.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type IWarehouseDelete = {
  __typename?: "WarehouseDelete";
  errors: Array<IWarehouseError>;
  warehouse?: Maybe<IWarehouse>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  warehouseErrors: Array<IWarehouseError>;
};

/**
 * Event sent when warehouse is deleted.
 *
 * Added in Saleor 3.4.
 */
export type IWarehouseDeleted = IEvent & {
  __typename?: "WarehouseDeleted";
  /** Time of the event. */
  issuedAt?: Maybe<Scalars["DateTime"]>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IIssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<IApp>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars["String"]>;
  /** The warehouse the event relates to. */
  warehouse?: Maybe<IWarehouse>;
};

export type IWarehouseError = {
  __typename?: "WarehouseError";
  /** The error code. */
  code: IWarehouseErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars["String"]>;
  /** The error message. */
  message?: Maybe<Scalars["String"]>;
  /** List of shipping zones IDs which causes the error. */
  shippingZones?: Maybe<Array<Scalars["ID"]>>;
};

/** An enumeration. */
export type IWarehouseErrorCode =
  | "ALREADY_EXISTS"
  | "GRAPHQL_ERROR"
  | "INVALID"
  | "NOT_FOUND"
  | "REQUIRED"
  | "UNIQUE";

export type IWarehouseFilterInput = {
  channels?: InputMaybe<Array<Scalars["ID"]>>;
  clickAndCollectOption?: InputMaybe<IWarehouseClickAndCollectOptionEnum>;
  ids?: InputMaybe<Array<Scalars["ID"]>>;
  isPrivate?: InputMaybe<Scalars["Boolean"]>;
  search?: InputMaybe<Scalars["String"]>;
  slugs?: InputMaybe<Array<Scalars["String"]>>;
};

/**
 * Event sent when warehouse metadata is updated.
 *
 * Added in Saleor 3.8.
 */
export type IWarehouseMetadataUpdated = IEvent & {
  __typename?: "WarehouseMetadataUpdated";
  /** Time of the event. */
  issuedAt?: Maybe<Scalars["DateTime"]>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IIssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<IApp>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars["String"]>;
  /** The warehouse the event relates to. */
  warehouse?: Maybe<IWarehouse>;
};

/**
 * Add shipping zone to given warehouse.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type IWarehouseShippingZoneAssign = {
  __typename?: "WarehouseShippingZoneAssign";
  errors: Array<IWarehouseError>;
  warehouse?: Maybe<IWarehouse>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  warehouseErrors: Array<IWarehouseError>;
};

/**
 * Remove shipping zone from given warehouse.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type IWarehouseShippingZoneUnassign = {
  __typename?: "WarehouseShippingZoneUnassign";
  errors: Array<IWarehouseError>;
  warehouse?: Maybe<IWarehouse>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  warehouseErrors: Array<IWarehouseError>;
};

export type IWarehouseSortField =
  /** Sort warehouses by name. */
  "NAME";

export type IWarehouseSortingInput = {
  /** Specifies the direction in which to sort warehouses. */
  direction: IOrderDirection;
  /** Sort warehouses by the selected field. */
  field: IWarehouseSortField;
};

/**
 * Updates given warehouse.
 *
 * Requires one of the following permissions: MANAGE_PRODUCTS.
 */
export type IWarehouseUpdate = {
  __typename?: "WarehouseUpdate";
  errors: Array<IWarehouseError>;
  warehouse?: Maybe<IWarehouse>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  warehouseErrors: Array<IWarehouseError>;
};

export type IWarehouseUpdateInput = {
  /** Address of the warehouse. */
  address?: InputMaybe<IAddressInput>;
  /**
   * Click and collect options: local, all or disabled.
   *
   * Added in Saleor 3.1.
   */
  clickAndCollectOption?: InputMaybe<IWarehouseClickAndCollectOptionEnum>;
  /** The email address of the warehouse. */
  email?: InputMaybe<Scalars["String"]>;
  /**
   * External ID of the warehouse.
   *
   * Added in Saleor 3.10.
   */
  externalReference?: InputMaybe<Scalars["String"]>;
  /**
   * Visibility of warehouse stocks.
   *
   * Added in Saleor 3.1.
   */
  isPrivate?: InputMaybe<Scalars["Boolean"]>;
  /** Warehouse name. */
  name?: InputMaybe<Scalars["String"]>;
  /** Warehouse slug. */
  slug?: InputMaybe<Scalars["String"]>;
};

/**
 * Event sent when warehouse is updated.
 *
 * Added in Saleor 3.4.
 */
export type IWarehouseUpdated = IEvent & {
  __typename?: "WarehouseUpdated";
  /** Time of the event. */
  issuedAt?: Maybe<Scalars["DateTime"]>;
  /** The user or application that triggered the event. */
  issuingPrincipal?: Maybe<IIssuingPrincipal>;
  /** The application receiving the webhook. */
  recipient?: Maybe<IApp>;
  /** Saleor version that triggered the event. */
  version?: Maybe<Scalars["String"]>;
  /** The warehouse the event relates to. */
  warehouse?: Maybe<IWarehouse>;
};

/** Webhook. */
export type IWebhook = INode & {
  __typename?: "Webhook";
  /** The app associated with Webhook. */
  app: IApp;
  /** List of asynchronous webhook events. */
  asyncEvents: Array<IWebhookEventAsync>;
  /**
   * Custom headers, which will be added to HTTP request.
   *
   * Added in Saleor 3.12.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  customHeaders?: Maybe<Scalars["JSONString"]>;
  /** Event deliveries. */
  eventDeliveries?: Maybe<IEventDeliveryCountableConnection>;
  /**
   * List of webhook events.
   * @deprecated This field will be removed in Saleor 4.0. Use `asyncEvents` or `syncEvents` instead.
   */
  events: Array<IWebhookEvent>;
  /** The ID of webhook. */
  id: Scalars["ID"];
  /** Informs if webhook is activated. */
  isActive: Scalars["Boolean"];
  /** The name of webhook. */
  name?: Maybe<Scalars["String"]>;
  /**
   * Used to create a hash signature for each payload.
   * @deprecated This field will be removed in Saleor 4.0. As of Saleor 3.5, webhook payloads default to signing using a verifiable JWS.
   */
  secretKey?: Maybe<Scalars["String"]>;
  /** Used to define payloads for specific events. */
  subscriptionQuery?: Maybe<Scalars["String"]>;
  /** List of synchronous webhook events. */
  syncEvents: Array<IWebhookEventSync>;
  /** Target URL for webhook. */
  targetUrl: Scalars["String"];
};

/** Webhook. */
export type IWebhookEventDeliveriesArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  filter?: InputMaybe<IEventDeliveryFilterInput>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  sortBy?: InputMaybe<IEventDeliverySortingInput>;
};

/**
 * Creates a new webhook subscription.
 *
 * Requires one of the following permissions: MANAGE_APPS, AUTHENTICATED_APP.
 */
export type IWebhookCreate = {
  __typename?: "WebhookCreate";
  errors: Array<IWebhookError>;
  webhook?: Maybe<IWebhook>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  webhookErrors: Array<IWebhookError>;
};

export type IWebhookCreateInput = {
  /** ID of the app to which webhook belongs. */
  app?: InputMaybe<Scalars["ID"]>;
  /** The asynchronous events that webhook wants to subscribe. */
  asyncEvents?: InputMaybe<Array<IWebhookEventTypeAsyncEnum>>;
  /**
   * Custom headers, which will be added to HTTP request. There is a limitation of 5 headers per webhook and 998 characters per header.Only "X-*" and "Authorization*" keys are allowed.
   *
   * Added in Saleor 3.12.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  customHeaders?: InputMaybe<Scalars["JSONString"]>;
  /**
   * The events that webhook wants to subscribe.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Use `asyncEvents` or `syncEvents` instead.
   */
  events?: InputMaybe<Array<IWebhookEventTypeEnum>>;
  /** Determine if webhook will be set active or not. */
  isActive?: InputMaybe<Scalars["Boolean"]>;
  /** The name of the webhook. */
  name?: InputMaybe<Scalars["String"]>;
  /**
   * Subscription query used to define a webhook payload.
   *
   * Added in Saleor 3.2.
   */
  query?: InputMaybe<Scalars["String"]>;
  /**
   * The secret key used to create a hash signature with each payload.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. As of Saleor 3.5, webhook payloads default to signing using a verifiable JWS.
   */
  secretKey?: InputMaybe<Scalars["String"]>;
  /** The synchronous events that webhook wants to subscribe. */
  syncEvents?: InputMaybe<Array<IWebhookEventTypeSyncEnum>>;
  /** The url to receive the payload. */
  targetUrl?: InputMaybe<Scalars["String"]>;
};

/**
 * Delete a webhook. Before the deletion, the webhook is deactivated to pause any deliveries that are already scheduled. The deletion might fail if delivery is in progress. In such a case, the webhook is not deleted but remains deactivated.
 *
 * Requires one of the following permissions: MANAGE_APPS, AUTHENTICATED_APP.
 */
export type IWebhookDelete = {
  __typename?: "WebhookDelete";
  errors: Array<IWebhookError>;
  webhook?: Maybe<IWebhook>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  webhookErrors: Array<IWebhookError>;
};

/**
 * Performs a dry run of a webhook event. Supports a single event (the first, if multiple provided in the `query`). Requires permission relevant to processed event.
 *
 * Added in Saleor 3.11.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 *
 * Requires one of the following permissions: AUTHENTICATED_STAFF_USER.
 */
export type IWebhookDryRun = {
  __typename?: "WebhookDryRun";
  errors: Array<IWebhookDryRunError>;
  /** JSON payload, that would be sent out to webhook's target URL. */
  payload?: Maybe<Scalars["JSONString"]>;
};

export type IWebhookDryRunError = {
  __typename?: "WebhookDryRunError";
  /** The error code. */
  code: IWebhookDryRunErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars["String"]>;
  /** The error message. */
  message?: Maybe<Scalars["String"]>;
};

/** An enumeration. */
export type IWebhookDryRunErrorCode =
  | "GRAPHQL_ERROR"
  | "INVALID_ID"
  | "MISSING_EVENT"
  | "MISSING_PERMISSION"
  | "MISSING_SUBSCRIPTION"
  | "NOT_FOUND"
  | "SYNTAX"
  | "TYPE_NOT_SUPPORTED"
  | "UNABLE_TO_PARSE";

export type IWebhookError = {
  __typename?: "WebhookError";
  /** The error code. */
  code: IWebhookErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars["String"]>;
  /** The error message. */
  message?: Maybe<Scalars["String"]>;
};

/** An enumeration. */
export type IWebhookErrorCode =
  | "DELETE_FAILED"
  | "GRAPHQL_ERROR"
  | "INVALID"
  | "INVALID_CUSTOM_HEADERS"
  | "INVALID_NOTIFY_WITH_SUBSCRIPTION"
  | "MISSING_EVENT"
  | "MISSING_SUBSCRIPTION"
  | "NOT_FOUND"
  | "REQUIRED"
  | "SYNTAX"
  | "UNABLE_TO_PARSE"
  | "UNIQUE";

/** Webhook event. */
export type IWebhookEvent = {
  __typename?: "WebhookEvent";
  /** Internal name of the event type. */
  eventType: IWebhookEventTypeEnum;
  /** Display name of the event. */
  name: Scalars["String"];
};

/** Asynchronous webhook event. */
export type IWebhookEventAsync = {
  __typename?: "WebhookEventAsync";
  /** Internal name of the event type. */
  eventType: IWebhookEventTypeAsyncEnum;
  /** Display name of the event. */
  name: Scalars["String"];
};

/** Synchronous webhook event. */
export type IWebhookEventSync = {
  __typename?: "WebhookEventSync";
  /** Internal name of the event type. */
  eventType: IWebhookEventTypeSyncEnum;
  /** Display name of the event. */
  name: Scalars["String"];
};

/** Enum determining type of webhook. */
export type IWebhookEventTypeAsyncEnum =
  /** An account email change is requested. */
  | "ACCOUNT_CHANGE_EMAIL_REQUESTED"
  /** An account confirmation is requested. */
  | "ACCOUNT_CONFIRMATION_REQUESTED"
  /** An account is confirmed. */
  | "ACCOUNT_CONFIRMED"
  /** An account is deleted. */
  | "ACCOUNT_DELETED"
  /** An account delete is requested. */
  | "ACCOUNT_DELETE_REQUESTED"
  /** An account email was changed */
  | "ACCOUNT_EMAIL_CHANGED"
  /** Setting a new password for the account is requested. */
  | "ACCOUNT_SET_PASSWORD_REQUESTED"
  /** A new address created. */
  | "ADDRESS_CREATED"
  /** An address deleted. */
  | "ADDRESS_DELETED"
  /** An address updated. */
  | "ADDRESS_UPDATED"
  /**
   * All the events.
   *
   * DEPRECATED: this value will be removed in Saleor 4.0.
   */
  | "ANY_EVENTS"
  /** An app deleted. */
  | "APP_DELETED"
  /** A new app installed. */
  | "APP_INSTALLED"
  /** An app status is changed. */
  | "APP_STATUS_CHANGED"
  /** An app updated. */
  | "APP_UPDATED"
  /** A new attribute is created. */
  | "ATTRIBUTE_CREATED"
  /** An attribute is deleted. */
  | "ATTRIBUTE_DELETED"
  /** An attribute is updated. */
  | "ATTRIBUTE_UPDATED"
  /** A new attribute value is created. */
  | "ATTRIBUTE_VALUE_CREATED"
  /** An attribute value is deleted. */
  | "ATTRIBUTE_VALUE_DELETED"
  /** An attribute value is updated. */
  | "ATTRIBUTE_VALUE_UPDATED"
  /** A new category created. */
  | "CATEGORY_CREATED"
  /** A category is deleted. */
  | "CATEGORY_DELETED"
  /** A category is updated. */
  | "CATEGORY_UPDATED"
  /** A new channel created. */
  | "CHANNEL_CREATED"
  /** A channel is deleted. */
  | "CHANNEL_DELETED"
  /** A channel metadata is updated. */
  | "CHANNEL_METADATA_UPDATED"
  /** A channel status is changed. */
  | "CHANNEL_STATUS_CHANGED"
  /** A channel is updated. */
  | "CHANNEL_UPDATED"
  /** A new checkout is created. */
  | "CHECKOUT_CREATED"
  | "CHECKOUT_FULLY_PAID"
  /**
   * A checkout metadata is updated.
   *
   * Added in Saleor 3.8.
   */
  | "CHECKOUT_METADATA_UPDATED"
  /** A checkout is updated. It also triggers all updates related to the checkout. */
  | "CHECKOUT_UPDATED"
  /** A new collection is created. */
  | "COLLECTION_CREATED"
  /** A collection is deleted. */
  | "COLLECTION_DELETED"
  /**
   * A collection metadata is updated.
   *
   * Added in Saleor 3.8.
   */
  | "COLLECTION_METADATA_UPDATED"
  /** A collection is updated. */
  | "COLLECTION_UPDATED"
  /** A new customer account is created. */
  | "CUSTOMER_CREATED"
  /** A customer account is deleted. */
  | "CUSTOMER_DELETED"
  /**
   * A customer account metadata is updated.
   *
   * Added in Saleor 3.8.
   */
  | "CUSTOMER_METADATA_UPDATED"
  /** A customer account is updated. */
  | "CUSTOMER_UPDATED"
  /** A draft order is created. */
  | "DRAFT_ORDER_CREATED"
  /** A draft order is deleted. */
  | "DRAFT_ORDER_DELETED"
  /** A draft order is updated. */
  | "DRAFT_ORDER_UPDATED"
  /** A fulfillment is approved. */
  | "FULFILLMENT_APPROVED"
  /** A fulfillment is cancelled. */
  | "FULFILLMENT_CANCELED"
  /** A new fulfillment is created. */
  | "FULFILLMENT_CREATED"
  /**
   * A fulfillment metadata is updated.
   *
   * Added in Saleor 3.8.
   */
  | "FULFILLMENT_METADATA_UPDATED"
  /** A new gift card created. */
  | "GIFT_CARD_CREATED"
  /** A gift card is deleted. */
  | "GIFT_CARD_DELETED"
  /**
   * A gift card metadata is updated.
   *
   * Added in Saleor 3.8.
   */
  | "GIFT_CARD_METADATA_UPDATED"
  /**
   * A gift card has been sent.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  | "GIFT_CARD_SENT"
  /** A gift card status is changed. */
  | "GIFT_CARD_STATUS_CHANGED"
  /** A gift card is updated. */
  | "GIFT_CARD_UPDATED"
  /** An invoice is deleted. */
  | "INVOICE_DELETED"
  /** An invoice for order requested. */
  | "INVOICE_REQUESTED"
  /** Invoice has been sent. */
  | "INVOICE_SENT"
  /** A new menu created. */
  | "MENU_CREATED"
  /** A menu is deleted. */
  | "MENU_DELETED"
  /** A new menu item created. */
  | "MENU_ITEM_CREATED"
  /** A menu item is deleted. */
  | "MENU_ITEM_DELETED"
  /** A menu item is updated. */
  | "MENU_ITEM_UPDATED"
  /** A menu is updated. */
  | "MENU_UPDATED"
  /** User notification triggered. */
  | "NOTIFY_USER"
  /** An observability event is created. */
  | "OBSERVABILITY"
  /**
   * Orders are imported.
   *
   * Added in Saleor 3.14.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  | "ORDER_BULK_CREATED"
  /** An order is cancelled. */
  | "ORDER_CANCELLED"
  /** An order is confirmed (status change unconfirmed -> unfulfilled) by a staff user using the OrderConfirm mutation. It also triggers when the user completes the checkout and the shop setting `automatically_confirm_all_new_orders` is enabled. */
  | "ORDER_CONFIRMED"
  /** A new order is placed. */
  | "ORDER_CREATED"
  /** An order is expired. */
  | "ORDER_EXPIRED"
  /** An order is fulfilled. */
  | "ORDER_FULFILLED"
  /** Payment is made and an order is fully paid. */
  | "ORDER_FULLY_PAID"
  /**
   * The order is fully refunded.
   *
   * Added in Saleor 3.14.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  | "ORDER_FULLY_REFUNDED"
  /**
   * An order metadata is updated.
   *
   * Added in Saleor 3.8.
   */
  | "ORDER_METADATA_UPDATED"
  /**
   * Payment has been made. The order may be partially or fully paid.
   *
   * Added in Saleor 3.14.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  | "ORDER_PAID"
  /**
   * The order received a refund. The order may be partially or fully refunded.
   *
   * Added in Saleor 3.14.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  | "ORDER_REFUNDED"
  /** An order is updated; triggered for all changes related to an order; covers all other order webhooks, except for ORDER_CREATED. */
  | "ORDER_UPDATED"
  /** A new page is created. */
  | "PAGE_CREATED"
  /** A page is deleted. */
  | "PAGE_DELETED"
  /** A new page type is created. */
  | "PAGE_TYPE_CREATED"
  /** A page type is deleted. */
  | "PAGE_TYPE_DELETED"
  /** A page type is updated. */
  | "PAGE_TYPE_UPDATED"
  /** A page is updated. */
  | "PAGE_UPDATED"
  /** A new permission group is created. */
  | "PERMISSION_GROUP_CREATED"
  /** A permission group is deleted. */
  | "PERMISSION_GROUP_DELETED"
  /** A permission group is updated. */
  | "PERMISSION_GROUP_UPDATED"
  /** A new product is created. */
  | "PRODUCT_CREATED"
  /** A product is deleted. */
  | "PRODUCT_DELETED"
  /**
   * A new product media is created.
   *
   * Added in Saleor 3.12.
   */
  | "PRODUCT_MEDIA_CREATED"
  /**
   * A product media is deleted.
   *
   * Added in Saleor 3.12.
   */
  | "PRODUCT_MEDIA_DELETED"
  /**
   * A product media is updated.
   *
   * Added in Saleor 3.12.
   */
  | "PRODUCT_MEDIA_UPDATED"
  /**
   * A product metadata is updated.
   *
   * Added in Saleor 3.8.
   */
  | "PRODUCT_METADATA_UPDATED"
  /** A product is updated. */
  | "PRODUCT_UPDATED"
  /** A product variant is back in stock. */
  | "PRODUCT_VARIANT_BACK_IN_STOCK"
  /** A new product variant is created. */
  | "PRODUCT_VARIANT_CREATED"
  /** A product variant is deleted. */
  | "PRODUCT_VARIANT_DELETED"
  /**
   * A product variant metadata is updated.
   *
   * Added in Saleor 3.8.
   */
  | "PRODUCT_VARIANT_METADATA_UPDATED"
  /** A product variant is out of stock. */
  | "PRODUCT_VARIANT_OUT_OF_STOCK"
  /** A product variant stock is updated */
  | "PRODUCT_VARIANT_STOCK_UPDATED"
  /** A product variant is updated. */
  | "PRODUCT_VARIANT_UPDATED"
  /** A sale is created. */
  | "SALE_CREATED"
  /** A sale is deleted. */
  | "SALE_DELETED"
  /** A sale is activated or deactivated. */
  | "SALE_TOGGLE"
  /** A sale is updated. */
  | "SALE_UPDATED"
  /** A new shipping price is created. */
  | "SHIPPING_PRICE_CREATED"
  /** A shipping price is deleted. */
  | "SHIPPING_PRICE_DELETED"
  /** A shipping price is updated. */
  | "SHIPPING_PRICE_UPDATED"
  /** A new shipping zone is created. */
  | "SHIPPING_ZONE_CREATED"
  /** A shipping zone is deleted. */
  | "SHIPPING_ZONE_DELETED"
  /**
   * A shipping zone metadata is updated.
   *
   * Added in Saleor 3.8.
   */
  | "SHIPPING_ZONE_METADATA_UPDATED"
  /** A shipping zone is updated. */
  | "SHIPPING_ZONE_UPDATED"
  /**
   * Shop metadata is updated.
   *
   * Added in Saleor 3.15.
   */
  | "SHOP_METADATA_UPDATED"
  /** A new staff user is created. */
  | "STAFF_CREATED"
  /** A staff user is deleted. */
  | "STAFF_DELETED"
  /** Setting a new password for the staff account is requested. */
  | "STAFF_SET_PASSWORD_REQUESTED"
  /** A staff user is updated. */
  | "STAFF_UPDATED"
  /**
   * A thumbnail is created.
   *
   * Added in Saleor 3.12.
   */
  | "THUMBNAIL_CREATED"
  /**
   * Transaction item metadata is updated.
   *
   * Added in Saleor 3.8.
   */
  | "TRANSACTION_ITEM_METADATA_UPDATED"
  /** A new translation is created. */
  | "TRANSLATION_CREATED"
  /** A translation is updated. */
  | "TRANSLATION_UPDATED"
  /** A new voucher created. */
  | "VOUCHER_CREATED"
  /** A voucher is deleted. */
  | "VOUCHER_DELETED"
  /**
   * A voucher metadata is updated.
   *
   * Added in Saleor 3.8.
   */
  | "VOUCHER_METADATA_UPDATED"
  /** A voucher is updated. */
  | "VOUCHER_UPDATED"
  /** A new warehouse created. */
  | "WAREHOUSE_CREATED"
  /** A warehouse is deleted. */
  | "WAREHOUSE_DELETED"
  /**
   * A warehouse metadata is updated.
   *
   * Added in Saleor 3.8.
   */
  | "WAREHOUSE_METADATA_UPDATED"
  /** A warehouse is updated. */
  | "WAREHOUSE_UPDATED";

/** Enum determining type of webhook. */
export type IWebhookEventTypeEnum =
  /** An account email change is requested. */
  | "ACCOUNT_CHANGE_EMAIL_REQUESTED"
  /** An account confirmation is requested. */
  | "ACCOUNT_CONFIRMATION_REQUESTED"
  /** An account is confirmed. */
  | "ACCOUNT_CONFIRMED"
  /** An account is deleted. */
  | "ACCOUNT_DELETED"
  /** An account delete is requested. */
  | "ACCOUNT_DELETE_REQUESTED"
  /** An account email was changed */
  | "ACCOUNT_EMAIL_CHANGED"
  /** Setting a new password for the account is requested. */
  | "ACCOUNT_SET_PASSWORD_REQUESTED"
  /** A new address created. */
  | "ADDRESS_CREATED"
  /** An address deleted. */
  | "ADDRESS_DELETED"
  /** An address updated. */
  | "ADDRESS_UPDATED"
  /**
   * All the events.
   *
   * DEPRECATED: this value will be removed in Saleor 4.0.
   */
  | "ANY_EVENTS"
  /** An app deleted. */
  | "APP_DELETED"
  /** A new app installed. */
  | "APP_INSTALLED"
  /** An app status is changed. */
  | "APP_STATUS_CHANGED"
  /** An app updated. */
  | "APP_UPDATED"
  /** A new attribute is created. */
  | "ATTRIBUTE_CREATED"
  /** An attribute is deleted. */
  | "ATTRIBUTE_DELETED"
  /** An attribute is updated. */
  | "ATTRIBUTE_UPDATED"
  /** A new attribute value is created. */
  | "ATTRIBUTE_VALUE_CREATED"
  /** An attribute value is deleted. */
  | "ATTRIBUTE_VALUE_DELETED"
  /** An attribute value is updated. */
  | "ATTRIBUTE_VALUE_UPDATED"
  /** A new category created. */
  | "CATEGORY_CREATED"
  /** A category is deleted. */
  | "CATEGORY_DELETED"
  /** A category is updated. */
  | "CATEGORY_UPDATED"
  /** A new channel created. */
  | "CHANNEL_CREATED"
  /** A channel is deleted. */
  | "CHANNEL_DELETED"
  /** A channel metadata is updated. */
  | "CHANNEL_METADATA_UPDATED"
  /** A channel status is changed. */
  | "CHANNEL_STATUS_CHANGED"
  /** A channel is updated. */
  | "CHANNEL_UPDATED"
  /**
   * Event called for checkout tax calculation.
   *
   * Added in Saleor 3.6.
   */
  | "CHECKOUT_CALCULATE_TAXES"
  /** A new checkout is created. */
  | "CHECKOUT_CREATED"
  /** Filter shipping methods for checkout. */
  | "CHECKOUT_FILTER_SHIPPING_METHODS"
  | "CHECKOUT_FULLY_PAID"
  /**
   * A checkout metadata is updated.
   *
   * Added in Saleor 3.8.
   */
  | "CHECKOUT_METADATA_UPDATED"
  /** A checkout is updated. It also triggers all updates related to the checkout. */
  | "CHECKOUT_UPDATED"
  /** A new collection is created. */
  | "COLLECTION_CREATED"
  /** A collection is deleted. */
  | "COLLECTION_DELETED"
  /**
   * A collection metadata is updated.
   *
   * Added in Saleor 3.8.
   */
  | "COLLECTION_METADATA_UPDATED"
  /** A collection is updated. */
  | "COLLECTION_UPDATED"
  /** A new customer account is created. */
  | "CUSTOMER_CREATED"
  /** A customer account is deleted. */
  | "CUSTOMER_DELETED"
  /**
   * A customer account metadata is updated.
   *
   * Added in Saleor 3.8.
   */
  | "CUSTOMER_METADATA_UPDATED"
  /** A customer account is updated. */
  | "CUSTOMER_UPDATED"
  /** A draft order is created. */
  | "DRAFT_ORDER_CREATED"
  /** A draft order is deleted. */
  | "DRAFT_ORDER_DELETED"
  /** A draft order is updated. */
  | "DRAFT_ORDER_UPDATED"
  /** A fulfillment is approved. */
  | "FULFILLMENT_APPROVED"
  /** A fulfillment is cancelled. */
  | "FULFILLMENT_CANCELED"
  /** A new fulfillment is created. */
  | "FULFILLMENT_CREATED"
  /**
   * A fulfillment metadata is updated.
   *
   * Added in Saleor 3.8.
   */
  | "FULFILLMENT_METADATA_UPDATED"
  /** A new gift card created. */
  | "GIFT_CARD_CREATED"
  /** A gift card is deleted. */
  | "GIFT_CARD_DELETED"
  /**
   * A gift card metadata is updated.
   *
   * Added in Saleor 3.8.
   */
  | "GIFT_CARD_METADATA_UPDATED"
  /**
   * A gift card has been sent.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  | "GIFT_CARD_SENT"
  /** A gift card status is changed. */
  | "GIFT_CARD_STATUS_CHANGED"
  /** A gift card is updated. */
  | "GIFT_CARD_UPDATED"
  /** An invoice is deleted. */
  | "INVOICE_DELETED"
  /** An invoice for order requested. */
  | "INVOICE_REQUESTED"
  /** Invoice has been sent. */
  | "INVOICE_SENT"
  | "LIST_STORED_PAYMENT_METHODS"
  /** A new menu created. */
  | "MENU_CREATED"
  /** A menu is deleted. */
  | "MENU_DELETED"
  /** A new menu item created. */
  | "MENU_ITEM_CREATED"
  /** A menu item is deleted. */
  | "MENU_ITEM_DELETED"
  /** A menu item is updated. */
  | "MENU_ITEM_UPDATED"
  /** A menu is updated. */
  | "MENU_UPDATED"
  /** User notification triggered. */
  | "NOTIFY_USER"
  /** An observability event is created. */
  | "OBSERVABILITY"
  /**
   * Orders are imported.
   *
   * Added in Saleor 3.14.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  | "ORDER_BULK_CREATED"
  /**
   * Event called for order tax calculation.
   *
   * Added in Saleor 3.6.
   */
  | "ORDER_CALCULATE_TAXES"
  /** An order is cancelled. */
  | "ORDER_CANCELLED"
  /** An order is confirmed (status change unconfirmed -> unfulfilled) by a staff user using the OrderConfirm mutation. It also triggers when the user completes the checkout and the shop setting `automatically_confirm_all_new_orders` is enabled. */
  | "ORDER_CONFIRMED"
  /** A new order is placed. */
  | "ORDER_CREATED"
  /** An order is expired. */
  | "ORDER_EXPIRED"
  /** Filter shipping methods for order. */
  | "ORDER_FILTER_SHIPPING_METHODS"
  /** An order is fulfilled. */
  | "ORDER_FULFILLED"
  /** Payment is made and an order is fully paid. */
  | "ORDER_FULLY_PAID"
  /**
   * The order is fully refunded.
   *
   * Added in Saleor 3.14.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  | "ORDER_FULLY_REFUNDED"
  /**
   * An order metadata is updated.
   *
   * Added in Saleor 3.8.
   */
  | "ORDER_METADATA_UPDATED"
  /**
   * Payment has been made. The order may be partially or fully paid.
   *
   * Added in Saleor 3.14.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  | "ORDER_PAID"
  /**
   * The order received a refund. The order may be partially or fully refunded.
   *
   * Added in Saleor 3.14.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  | "ORDER_REFUNDED"
  /** An order is updated; triggered for all changes related to an order; covers all other order webhooks, except for ORDER_CREATED. */
  | "ORDER_UPDATED"
  /** A new page is created. */
  | "PAGE_CREATED"
  /** A page is deleted. */
  | "PAGE_DELETED"
  /** A new page type is created. */
  | "PAGE_TYPE_CREATED"
  /** A page type is deleted. */
  | "PAGE_TYPE_DELETED"
  /** A page type is updated. */
  | "PAGE_TYPE_UPDATED"
  /** A page is updated. */
  | "PAGE_UPDATED"
  /** Authorize payment. */
  | "PAYMENT_AUTHORIZE"
  /** Capture payment. */
  | "PAYMENT_CAPTURE"
  /** Confirm payment. */
  | "PAYMENT_CONFIRM"
  | "PAYMENT_GATEWAY_INITIALIZE_SESSION"
  /** Listing available payment gateways. */
  | "PAYMENT_LIST_GATEWAYS"
  /** Process payment. */
  | "PAYMENT_PROCESS"
  /** Refund payment. */
  | "PAYMENT_REFUND"
  /** Void payment. */
  | "PAYMENT_VOID"
  /** A new permission group is created. */
  | "PERMISSION_GROUP_CREATED"
  /** A permission group is deleted. */
  | "PERMISSION_GROUP_DELETED"
  /** A permission group is updated. */
  | "PERMISSION_GROUP_UPDATED"
  /** A new product is created. */
  | "PRODUCT_CREATED"
  /** A product is deleted. */
  | "PRODUCT_DELETED"
  /**
   * A new product media is created.
   *
   * Added in Saleor 3.12.
   */
  | "PRODUCT_MEDIA_CREATED"
  /**
   * A product media is deleted.
   *
   * Added in Saleor 3.12.
   */
  | "PRODUCT_MEDIA_DELETED"
  /**
   * A product media is updated.
   *
   * Added in Saleor 3.12.
   */
  | "PRODUCT_MEDIA_UPDATED"
  /**
   * A product metadata is updated.
   *
   * Added in Saleor 3.8.
   */
  | "PRODUCT_METADATA_UPDATED"
  /** A product is updated. */
  | "PRODUCT_UPDATED"
  /** A product variant is back in stock. */
  | "PRODUCT_VARIANT_BACK_IN_STOCK"
  /** A new product variant is created. */
  | "PRODUCT_VARIANT_CREATED"
  /** A product variant is deleted. */
  | "PRODUCT_VARIANT_DELETED"
  /**
   * A product variant metadata is updated.
   *
   * Added in Saleor 3.8.
   */
  | "PRODUCT_VARIANT_METADATA_UPDATED"
  /** A product variant is out of stock. */
  | "PRODUCT_VARIANT_OUT_OF_STOCK"
  /** A product variant stock is updated */
  | "PRODUCT_VARIANT_STOCK_UPDATED"
  /** A product variant is updated. */
  | "PRODUCT_VARIANT_UPDATED"
  /** A sale is created. */
  | "SALE_CREATED"
  /** A sale is deleted. */
  | "SALE_DELETED"
  /** A sale is activated or deactivated. */
  | "SALE_TOGGLE"
  /** A sale is updated. */
  | "SALE_UPDATED"
  /** Fetch external shipping methods for checkout. */
  | "SHIPPING_LIST_METHODS_FOR_CHECKOUT"
  /** A new shipping price is created. */
  | "SHIPPING_PRICE_CREATED"
  /** A shipping price is deleted. */
  | "SHIPPING_PRICE_DELETED"
  /** A shipping price is updated. */
  | "SHIPPING_PRICE_UPDATED"
  /** A new shipping zone is created. */
  | "SHIPPING_ZONE_CREATED"
  /** A shipping zone is deleted. */
  | "SHIPPING_ZONE_DELETED"
  /**
   * A shipping zone metadata is updated.
   *
   * Added in Saleor 3.8.
   */
  | "SHIPPING_ZONE_METADATA_UPDATED"
  /** A shipping zone is updated. */
  | "SHIPPING_ZONE_UPDATED"
  /**
   * Shop metadata is updated.
   *
   * Added in Saleor 3.15.
   */
  | "SHOP_METADATA_UPDATED"
  /** A new staff user is created. */
  | "STAFF_CREATED"
  /** A staff user is deleted. */
  | "STAFF_DELETED"
  /** Setting a new password for the staff account is requested. */
  | "STAFF_SET_PASSWORD_REQUESTED"
  /** A staff user is updated. */
  | "STAFF_UPDATED"
  /**
   * A thumbnail is created.
   *
   * Added in Saleor 3.12.
   */
  | "THUMBNAIL_CREATED"
  /**
   * Event called when cancel has been requested for transaction.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  | "TRANSACTION_CANCELATION_REQUESTED"
  /**
   * Event called when charge has been requested for transaction.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  | "TRANSACTION_CHARGE_REQUESTED"
  | "TRANSACTION_INITIALIZE_SESSION"
  /**
   * Transaction item metadata is updated.
   *
   * Added in Saleor 3.8.
   */
  | "TRANSACTION_ITEM_METADATA_UPDATED"
  | "TRANSACTION_PROCESS_SESSION"
  /**
   * Event called when refund has been requested for transaction.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  | "TRANSACTION_REFUND_REQUESTED"
  /** A new translation is created. */
  | "TRANSLATION_CREATED"
  /** A translation is updated. */
  | "TRANSLATION_UPDATED"
  /** A new voucher created. */
  | "VOUCHER_CREATED"
  /** A voucher is deleted. */
  | "VOUCHER_DELETED"
  /**
   * A voucher metadata is updated.
   *
   * Added in Saleor 3.8.
   */
  | "VOUCHER_METADATA_UPDATED"
  /** A voucher is updated. */
  | "VOUCHER_UPDATED"
  /** A new warehouse created. */
  | "WAREHOUSE_CREATED"
  /** A warehouse is deleted. */
  | "WAREHOUSE_DELETED"
  /**
   * A warehouse metadata is updated.
   *
   * Added in Saleor 3.8.
   */
  | "WAREHOUSE_METADATA_UPDATED"
  /** A warehouse is updated. */
  | "WAREHOUSE_UPDATED";

/** Enum determining type of webhook. */
export type IWebhookEventTypeSyncEnum =
  /**
   * Event called for checkout tax calculation.
   *
   * Added in Saleor 3.6.
   */
  | "CHECKOUT_CALCULATE_TAXES"
  /** Filter shipping methods for checkout. */
  | "CHECKOUT_FILTER_SHIPPING_METHODS"
  | "LIST_STORED_PAYMENT_METHODS"
  /**
   * Event called for order tax calculation.
   *
   * Added in Saleor 3.6.
   */
  | "ORDER_CALCULATE_TAXES"
  /** Filter shipping methods for order. */
  | "ORDER_FILTER_SHIPPING_METHODS"
  /** Authorize payment. */
  | "PAYMENT_AUTHORIZE"
  /** Capture payment. */
  | "PAYMENT_CAPTURE"
  /** Confirm payment. */
  | "PAYMENT_CONFIRM"
  | "PAYMENT_GATEWAY_INITIALIZE_SESSION"
  /** Listing available payment gateways. */
  | "PAYMENT_LIST_GATEWAYS"
  /** Process payment. */
  | "PAYMENT_PROCESS"
  /** Refund payment. */
  | "PAYMENT_REFUND"
  /** Void payment. */
  | "PAYMENT_VOID"
  /** Fetch external shipping methods for checkout. */
  | "SHIPPING_LIST_METHODS_FOR_CHECKOUT"
  /**
   * Event called when cancel has been requested for transaction.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  | "TRANSACTION_CANCELATION_REQUESTED"
  /**
   * Event called when charge has been requested for transaction.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  | "TRANSACTION_CHARGE_REQUESTED"
  | "TRANSACTION_INITIALIZE_SESSION"
  | "TRANSACTION_PROCESS_SESSION"
  /**
   * Event called when refund has been requested for transaction.
   *
   * Added in Saleor 3.13.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  | "TRANSACTION_REFUND_REQUESTED";

/** An enumeration. */
export type IWebhookSampleEventTypeEnum =
  | "ACCOUNT_CHANGE_EMAIL_REQUESTED"
  | "ACCOUNT_CONFIRMATION_REQUESTED"
  | "ACCOUNT_CONFIRMED"
  | "ACCOUNT_DELETED"
  | "ACCOUNT_DELETE_REQUESTED"
  | "ACCOUNT_EMAIL_CHANGED"
  | "ACCOUNT_SET_PASSWORD_REQUESTED"
  | "ADDRESS_CREATED"
  | "ADDRESS_DELETED"
  | "ADDRESS_UPDATED"
  | "APP_DELETED"
  | "APP_INSTALLED"
  | "APP_STATUS_CHANGED"
  | "APP_UPDATED"
  | "ATTRIBUTE_CREATED"
  | "ATTRIBUTE_DELETED"
  | "ATTRIBUTE_UPDATED"
  | "ATTRIBUTE_VALUE_CREATED"
  | "ATTRIBUTE_VALUE_DELETED"
  | "ATTRIBUTE_VALUE_UPDATED"
  | "CATEGORY_CREATED"
  | "CATEGORY_DELETED"
  | "CATEGORY_UPDATED"
  | "CHANNEL_CREATED"
  | "CHANNEL_DELETED"
  | "CHANNEL_METADATA_UPDATED"
  | "CHANNEL_STATUS_CHANGED"
  | "CHANNEL_UPDATED"
  | "CHECKOUT_CREATED"
  | "CHECKOUT_FULLY_PAID"
  | "CHECKOUT_METADATA_UPDATED"
  | "CHECKOUT_UPDATED"
  | "COLLECTION_CREATED"
  | "COLLECTION_DELETED"
  | "COLLECTION_METADATA_UPDATED"
  | "COLLECTION_UPDATED"
  | "CUSTOMER_CREATED"
  | "CUSTOMER_DELETED"
  | "CUSTOMER_METADATA_UPDATED"
  | "CUSTOMER_UPDATED"
  | "DRAFT_ORDER_CREATED"
  | "DRAFT_ORDER_DELETED"
  | "DRAFT_ORDER_UPDATED"
  | "FULFILLMENT_APPROVED"
  | "FULFILLMENT_CANCELED"
  | "FULFILLMENT_CREATED"
  | "FULFILLMENT_METADATA_UPDATED"
  | "GIFT_CARD_CREATED"
  | "GIFT_CARD_DELETED"
  | "GIFT_CARD_METADATA_UPDATED"
  | "GIFT_CARD_SENT"
  | "GIFT_CARD_STATUS_CHANGED"
  | "GIFT_CARD_UPDATED"
  | "INVOICE_DELETED"
  | "INVOICE_REQUESTED"
  | "INVOICE_SENT"
  | "MENU_CREATED"
  | "MENU_DELETED"
  | "MENU_ITEM_CREATED"
  | "MENU_ITEM_DELETED"
  | "MENU_ITEM_UPDATED"
  | "MENU_UPDATED"
  | "NOTIFY_USER"
  | "OBSERVABILITY"
  | "ORDER_BULK_CREATED"
  | "ORDER_CANCELLED"
  | "ORDER_CONFIRMED"
  | "ORDER_CREATED"
  | "ORDER_EXPIRED"
  | "ORDER_FULFILLED"
  | "ORDER_FULLY_PAID"
  | "ORDER_FULLY_REFUNDED"
  | "ORDER_METADATA_UPDATED"
  | "ORDER_PAID"
  | "ORDER_REFUNDED"
  | "ORDER_UPDATED"
  | "PAGE_CREATED"
  | "PAGE_DELETED"
  | "PAGE_TYPE_CREATED"
  | "PAGE_TYPE_DELETED"
  | "PAGE_TYPE_UPDATED"
  | "PAGE_UPDATED"
  | "PERMISSION_GROUP_CREATED"
  | "PERMISSION_GROUP_DELETED"
  | "PERMISSION_GROUP_UPDATED"
  | "PRODUCT_CREATED"
  | "PRODUCT_DELETED"
  | "PRODUCT_MEDIA_CREATED"
  | "PRODUCT_MEDIA_DELETED"
  | "PRODUCT_MEDIA_UPDATED"
  | "PRODUCT_METADATA_UPDATED"
  | "PRODUCT_UPDATED"
  | "PRODUCT_VARIANT_BACK_IN_STOCK"
  | "PRODUCT_VARIANT_CREATED"
  | "PRODUCT_VARIANT_DELETED"
  | "PRODUCT_VARIANT_METADATA_UPDATED"
  | "PRODUCT_VARIANT_OUT_OF_STOCK"
  | "PRODUCT_VARIANT_STOCK_UPDATED"
  | "PRODUCT_VARIANT_UPDATED"
  | "SALE_CREATED"
  | "SALE_DELETED"
  | "SALE_TOGGLE"
  | "SALE_UPDATED"
  | "SHIPPING_PRICE_CREATED"
  | "SHIPPING_PRICE_DELETED"
  | "SHIPPING_PRICE_UPDATED"
  | "SHIPPING_ZONE_CREATED"
  | "SHIPPING_ZONE_DELETED"
  | "SHIPPING_ZONE_METADATA_UPDATED"
  | "SHIPPING_ZONE_UPDATED"
  | "SHOP_METADATA_UPDATED"
  | "STAFF_CREATED"
  | "STAFF_DELETED"
  | "STAFF_SET_PASSWORD_REQUESTED"
  | "STAFF_UPDATED"
  | "THUMBNAIL_CREATED"
  | "TRANSACTION_ITEM_METADATA_UPDATED"
  | "TRANSLATION_CREATED"
  | "TRANSLATION_UPDATED"
  | "VOUCHER_CREATED"
  | "VOUCHER_DELETED"
  | "VOUCHER_METADATA_UPDATED"
  | "VOUCHER_UPDATED"
  | "WAREHOUSE_CREATED"
  | "WAREHOUSE_DELETED"
  | "WAREHOUSE_METADATA_UPDATED"
  | "WAREHOUSE_UPDATED";

/**
 * Trigger a webhook event. Supports a single event (the first, if multiple provided in the `webhook.subscription_query`). Requires permission relevant to processed event. Successfully delivered webhook returns `delivery` with status='PENDING' and empty payload.
 *
 * Added in Saleor 3.11.
 *
 * Note: this API is currently in Feature Preview and can be subject to changes at later point.
 *
 * Requires one of the following permissions: AUTHENTICATED_STAFF_USER.
 */
export type IWebhookTrigger = {
  __typename?: "WebhookTrigger";
  delivery?: Maybe<IEventDelivery>;
  errors: Array<IWebhookTriggerError>;
};

export type IWebhookTriggerError = {
  __typename?: "WebhookTriggerError";
  /** The error code. */
  code: IWebhookTriggerErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars["String"]>;
  /** The error message. */
  message?: Maybe<Scalars["String"]>;
};

/** An enumeration. */
export type IWebhookTriggerErrorCode =
  | "GRAPHQL_ERROR"
  | "INVALID_ID"
  | "MISSING_EVENT"
  | "MISSING_PERMISSION"
  | "MISSING_QUERY"
  | "MISSING_SUBSCRIPTION"
  | "NOT_FOUND"
  | "SYNTAX"
  | "TYPE_NOT_SUPPORTED"
  | "UNABLE_TO_PARSE";

/**
 * Updates a webhook subscription.
 *
 * Requires one of the following permissions: MANAGE_APPS, AUTHENTICATED_APP.
 */
export type IWebhookUpdate = {
  __typename?: "WebhookUpdate";
  errors: Array<IWebhookError>;
  webhook?: Maybe<IWebhook>;
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  webhookErrors: Array<IWebhookError>;
};

export type IWebhookUpdateInput = {
  /** ID of the app to which webhook belongs. */
  app?: InputMaybe<Scalars["ID"]>;
  /** The asynchronous events that webhook wants to subscribe. */
  asyncEvents?: InputMaybe<Array<IWebhookEventTypeAsyncEnum>>;
  /**
   * Custom headers, which will be added to HTTP request. There is a limitation of 5 headers per webhook and 998 characters per header.Only "X-*" and "Authorization*" keys are allowed.
   *
   * Added in Saleor 3.12.
   *
   * Note: this API is currently in Feature Preview and can be subject to changes at later point.
   */
  customHeaders?: InputMaybe<Scalars["JSONString"]>;
  /**
   * The events that webhook wants to subscribe.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Use `asyncEvents` or `syncEvents` instead.
   */
  events?: InputMaybe<Array<IWebhookEventTypeEnum>>;
  /** Determine if webhook will be set active or not. */
  isActive?: InputMaybe<Scalars["Boolean"]>;
  /** The new name of the webhook. */
  name?: InputMaybe<Scalars["String"]>;
  /**
   * Subscription query used to define a webhook payload.
   *
   * Added in Saleor 3.2.
   */
  query?: InputMaybe<Scalars["String"]>;
  /**
   * Use to create a hash signature with each payload.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. As of Saleor 3.5, webhook payloads default to signing using a verifiable JWS.
   */
  secretKey?: InputMaybe<Scalars["String"]>;
  /** The synchronous events that webhook wants to subscribe. */
  syncEvents?: InputMaybe<Array<IWebhookEventTypeSyncEnum>>;
  /** The url to receive the payload. */
  targetUrl?: InputMaybe<Scalars["String"]>;
};

/** Represents weight value in a specific weight unit. */
export type IWeight = {
  __typename?: "Weight";
  /** Weight unit. */
  unit: IWeightUnitsEnum;
  /** Weight value. */
  value: Scalars["Float"];
};

/** An enumeration. */
export type IWeightUnitsEnum = "G" | "KG" | "LB" | "OZ" | "TONNE";

/** _Entity union as defined by Federation spec. */
export type I_Entity =
  | IAddress
  | IApp
  | ICategory
  | ICollection
  | IGroup
  | IOrder
  | IPageType
  | IProduct
  | IProductMedia
  | IProductType
  | IProductVariant
  | IUser;

/** _Service manifest as defined by Federation spec. */
export type I_Service = {
  __typename?: "_Service";
  sdl?: Maybe<Scalars["String"]>;
};

export type ICheckoutQuantityFragment = {
  __typename?: "Checkout";
  quantity: number;
};

export type ICollectionFragment = {
  __typename?: "Collection";
  id: string;
  name: string;
  slug: string;
};

export type IGalleryProductFragment = {
  __typename?: "Product";
  id: string;
  slug: string;
  name: string;
  rating?: number | null;
  translation?: {
    __typename?: "ProductTranslation";
    name?: string | null;
    description?: JSONString | null;
  } | null;
  thumbnail?: { __typename?: "Image"; url: string; alt?: string | null } | null;
  category?: {
    __typename?: "Category";
    id: string;
    name: string;
    translation?: {
      __typename?: "CategoryTranslation";
      name?: string | null;
    } | null;
  } | null;
  defaultVariant?: { __typename?: "ProductVariant"; id: string } | null;
  variants?: Array<{
    __typename?: "ProductVariant";
    id: string;
    name: string;
    translation?: {
      __typename?: "ProductVariantTranslation";
      id: string;
      name: string;
    } | null;
  }> | null;
  pricing?: {
    __typename?: "ProductPricingInfo";
    onSale?: boolean | null;
    displayGrossPrices: boolean;
    discount?: {
      __typename?: "TaxedMoney";
      currency: string;
      gross: { __typename?: "Money"; amount: number };
      net: { __typename?: "Money"; amount: number };
      tax: { __typename?: "Money"; amount: number };
    } | null;
    priceRange?: {
      __typename?: "TaxedMoneyRange";
      start?: {
        __typename?: "TaxedMoney";
        currency: string;
        gross: { __typename?: "Money"; amount: number };
        net: { __typename?: "Money"; amount: number };
        tax: { __typename?: "Money"; amount: number };
      } | null;
    } | null;
  } | null;
};

export type IMenuFragment = {
  __typename?: "Menu";
  id: string;
  items?: Array<{
    __typename?: "MenuItem";
    level: number;
    name: string;
    url?: string | null;
    children?: Array<{
      __typename?: "MenuItem";
      level: number;
      name: string;
      url?: string | null;
      children?: Array<{
        __typename?: "MenuItem";
        level: number;
        name: string;
        url?: string | null;
        page?: { __typename?: "Page"; slug: string } | null;
        category?: { __typename?: "Category"; id: string; name: string } | null;
        children?: Array<{
          __typename?: "MenuItem";
          page?: { __typename?: "Page"; slug: string } | null;
        }> | null;
        translation?: {
          __typename?: "MenuItemTranslation";
          name: string;
        } | null;
      }> | null;
      page?: { __typename?: "Page"; slug: string } | null;
      category?: { __typename?: "Category"; id: string; name: string } | null;
      translation?: { __typename?: "MenuItemTranslation"; name: string } | null;
    }> | null;
    page?: { __typename?: "Page"; slug: string } | null;
    category?: { __typename?: "Category"; id: string; name: string } | null;
    translation?: { __typename?: "MenuItemTranslation"; name: string } | null;
  }> | null;
};

export type IMenuItemFragment = {
  __typename?: "MenuItem";
  level: number;
  name: string;
  url?: string | null;
  page?: { __typename?: "Page"; slug: string } | null;
  category?: { __typename?: "Category"; id: string; name: string } | null;
  children?: Array<{
    __typename?: "MenuItem";
    page?: { __typename?: "Page"; slug: string } | null;
  }> | null;
  translation?: { __typename?: "MenuItemTranslation"; name: string } | null;
};

export type IMoneyFragment = { __typename?: "Money"; amount: number };

export type IPdProductFragment = {
  __typename?: "Product";
  id: string;
  seoTitle?: string | null;
  name: string;
  description?: JSONString | null;
  slug: string;
  rating?: number | null;
  isAvailable?: boolean | null;
  translation?: {
    __typename?: "ProductTranslation";
    name?: string | null;
    description?: JSONString | null;
  } | null;
  category?: {
    __typename?: "Category";
    id: string;
    name: string;
    translation?: {
      __typename?: "CategoryTranslation";
      name?: string | null;
    } | null;
  } | null;
  thumbnail?: { __typename?: "Image"; alt?: string | null; url: string } | null;
  productType: { __typename?: "ProductType"; name: string; slug: string };
  weight?: {
    __typename?: "Weight";
    unit: IWeightUnitsEnum;
    value: number;
  } | null;
  pricing?: {
    __typename?: "ProductPricingInfo";
    onSale?: boolean | null;
    displayGrossPrices: boolean;
    discount?: {
      __typename?: "TaxedMoney";
      currency: string;
      gross: { __typename?: "Money"; amount: number };
      net: { __typename?: "Money"; amount: number };
      tax: { __typename?: "Money"; amount: number };
    } | null;
    priceRange?: {
      __typename?: "TaxedMoneyRange";
      start?: {
        __typename?: "TaxedMoney";
        currency: string;
        gross: { __typename?: "Money"; amount: number };
        net: { __typename?: "Money"; amount: number };
        tax: { __typename?: "Money"; amount: number };
      } | null;
    } | null;
  } | null;
  variants?: Array<{
    __typename?: "ProductVariant";
    id: string;
    name: string;
    weight?: {
      __typename?: "Weight";
      unit: IWeightUnitsEnum;
      value: number;
    } | null;
    media?: Array<{
      __typename?: "ProductMedia";
      url: string;
      alt: string;
      type: IProductMediaType;
    }> | null;
  }> | null;
};

export type IPricingFragment = {
  __typename?: "ProductPricingInfo";
  onSale?: boolean | null;
  displayGrossPrices: boolean;
  discount?: {
    __typename?: "TaxedMoney";
    currency: string;
    gross: { __typename?: "Money"; amount: number };
    net: { __typename?: "Money"; amount: number };
    tax: { __typename?: "Money"; amount: number };
  } | null;
  priceRange?: {
    __typename?: "TaxedMoneyRange";
    start?: {
      __typename?: "TaxedMoney";
      currency: string;
      gross: { __typename?: "Money"; amount: number };
      net: { __typename?: "Money"; amount: number };
      tax: { __typename?: "Money"; amount: number };
    } | null;
  } | null;
};

export type IProductDetailsAttributeFragment = {
  __typename?: "SelectedAttribute";
  attribute: {
    __typename?: "Attribute";
    id: string;
    name?: string | null;
    translation?: { __typename?: "AttributeTranslation"; name: string } | null;
  };
  values: Array<{
    __typename?: "AttributeValue";
    id: string;
    name?: string | null;
    translation?: {
      __typename?: "AttributeValueTranslation";
      name: string;
    } | null;
  }>;
};

export type IProductDetailsFragment = {
  __typename?: "Product";
  id: string;
  seoTitle?: string | null;
  name: string;
  description?: JSONString | null;
  seoDescription?: string | null;
  slug: string;
  rating?: number | null;
  isAvailable?: boolean | null;
  media?: Array<{
    __typename?: "ProductMedia";
    url: string;
    alt: string;
    type: IProductMediaType;
  }> | null;
  translation?: {
    __typename?: "ProductTranslation";
    name?: string | null;
    seoTitle?: string | null;
    seoDescription?: string | null;
    description?: JSONString | null;
  } | null;
  category?: {
    __typename?: "Category";
    id: string;
    name: string;
    translation?: {
      __typename?: "CategoryTranslation";
      name?: string | null;
    } | null;
  } | null;
  thumbnail?: { __typename?: "Image"; alt?: string | null; url: string } | null;
  productType: { __typename?: "ProductType"; name: string; slug: string };
  weight?: {
    __typename?: "Weight";
    unit: IWeightUnitsEnum;
    value: number;
  } | null;
  attributes: Array<{
    __typename?: "SelectedAttribute";
    attribute: {
      __typename?: "Attribute";
      id: string;
      name?: string | null;
      translation?: {
        __typename?: "AttributeTranslation";
        name: string;
      } | null;
    };
    values: Array<{
      __typename?: "AttributeValue";
      id: string;
      name?: string | null;
      translation?: {
        __typename?: "AttributeValueTranslation";
        name: string;
      } | null;
    }>;
  }>;
  pricing?: {
    __typename?: "ProductPricingInfo";
    onSale?: boolean | null;
    displayGrossPrices: boolean;
    discount?: {
      __typename?: "TaxedMoney";
      currency: string;
      gross: { __typename?: "Money"; amount: number };
      net: { __typename?: "Money"; amount: number };
      tax: { __typename?: "Money"; amount: number };
    } | null;
    priceRange?: {
      __typename?: "TaxedMoneyRange";
      start?: {
        __typename?: "TaxedMoney";
        currency: string;
        gross: { __typename?: "Money"; amount: number };
        net: { __typename?: "Money"; amount: number };
        tax: { __typename?: "Money"; amount: number };
      } | null;
    } | null;
  } | null;
  variants?: Array<{
    __typename?: "ProductVariant";
    id: string;
    name: string;
    quantityAvailable?: number | null;
    weight?: {
      __typename?: "Weight";
      unit: IWeightUnitsEnum;
      value: number;
    } | null;
    media?: Array<{
      __typename?: "ProductMedia";
      url: string;
      alt: string;
      type: IProductMediaType;
    }> | null;
    attributes: Array<{
      __typename?: "SelectedAttribute";
      attribute: {
        __typename?: "Attribute";
        id: string;
        name?: string | null;
        translation?: {
          __typename?: "AttributeTranslation";
          name: string;
        } | null;
      };
      values: Array<{
        __typename?: "AttributeValue";
        id: string;
        name?: string | null;
        translation?: {
          __typename?: "AttributeValueTranslation";
          name: string;
        } | null;
      }>;
    }>;
  }> | null;
  defaultVariant?: {
    __typename?: "ProductVariant";
    id: string;
    name: string;
    quantityAvailable?: number | null;
    weight?: {
      __typename?: "Weight";
      unit: IWeightUnitsEnum;
      value: number;
    } | null;
    media?: Array<{
      __typename?: "ProductMedia";
      url: string;
      alt: string;
      type: IProductMediaType;
    }> | null;
    attributes: Array<{
      __typename?: "SelectedAttribute";
      attribute: {
        __typename?: "Attribute";
        id: string;
        name?: string | null;
        translation?: {
          __typename?: "AttributeTranslation";
          name: string;
        } | null;
      };
      values: Array<{
        __typename?: "AttributeValue";
        id: string;
        name?: string | null;
        translation?: {
          __typename?: "AttributeValueTranslation";
          name: string;
        } | null;
      }>;
    }>;
  } | null;
};

export type IProductVariantFragment = {
  __typename?: "ProductVariant";
  id: string;
  name: string;
  quantityAvailable?: number | null;
  weight?: {
    __typename?: "Weight";
    unit: IWeightUnitsEnum;
    value: number;
  } | null;
  media?: Array<{
    __typename?: "ProductMedia";
    url: string;
    alt: string;
    type: IProductMediaType;
  }> | null;
  attributes: Array<{
    __typename?: "SelectedAttribute";
    attribute: {
      __typename?: "Attribute";
      id: string;
      name?: string | null;
      translation?: {
        __typename?: "AttributeTranslation";
        name: string;
      } | null;
    };
    values: Array<{
      __typename?: "AttributeValue";
      id: string;
      name?: string | null;
      translation?: {
        __typename?: "AttributeValueTranslation";
        name: string;
      } | null;
    }>;
  }>;
};

export type ITaxedMoneyFragment = {
  __typename?: "TaxedMoney";
  currency: string;
  gross: { __typename?: "Money"; amount: number };
  net: { __typename?: "Money"; amount: number };
  tax: { __typename?: "Money"; amount: number };
};

export type IAccountRegisterMutationVariables = Exact<{
  input: IAccountRegisterInput;
}>;

export type IAccountRegisterMutation = {
  __typename?: "Mutation";
  accountRegister?: {
    __typename?: "AccountRegister";
    accountErrors: Array<{
      __typename?: "AccountError";
      field?: string | null;
      message?: string | null;
    }>;
    user?: {
      __typename?: "User";
      id: string;
      email: string;
      firstName: string;
      lastName: string;
      isActive: boolean;
    } | null;
  } | null;
};

export type ICheckoutCompleteMutationVariables = Exact<{
  checkoutId: Scalars["ID"];
}>;

export type ICheckoutCompleteMutation = {
  __typename?: "Mutation";
  checkoutComplete?: {
    __typename?: "CheckoutComplete";
    order?: {
      __typename?: "Order";
      id: string;
      errors: Array<{
        __typename?: "OrderError";
        field?: string | null;
        message?: string | null;
        code: IOrderErrorCode;
      }>;
    } | null;
    errors: Array<{
      __typename?: "CheckoutError";
      field?: string | null;
      message?: string | null;
      code: ICheckoutErrorCode;
    }>;
  } | null;
};

export type ICheckoutCreateMutationVariables = Exact<{
  channel?: InputMaybe<Scalars["String"]>;
  variantID: Scalars["ID"];
  quantity: Scalars["Int"];
  email?: InputMaybe<Scalars["String"]>;
}>;

export type ICheckoutCreateMutation = {
  __typename?: "Mutation";
  checkoutCreate?: {
    __typename?: "CheckoutCreate";
    errors: Array<{ __typename?: "CheckoutError"; message?: string | null }>;
    checkout?: { __typename?: "Checkout"; id: string; quantity: number } | null;
  } | null;
};

export type ICheckoutLinesAddMutationVariables = Exact<{
  variantID: Scalars["ID"];
  checkoutID: Scalars["ID"];
  quantity: Scalars["Int"];
}>;

export type ICheckoutLinesAddMutation = {
  __typename?: "Mutation";
  checkoutLinesAdd?: {
    __typename?: "CheckoutLinesAdd";
    checkout?: {
      __typename?: "Checkout";
      id: string;
      quantity: number;
      lines: Array<{
        __typename?: "CheckoutLine";
        id: string;
        quantity: number;
        variant: { __typename?: "ProductVariant"; name: string };
      }>;
      totalPrice: {
        __typename?: "TaxedMoney";
        gross: { __typename?: "Money"; currency: string; amount: number };
      };
    } | null;
  } | null;
};

export type ICheckoutTotalQueryVariables = Exact<{
  id: Scalars["ID"];
}>;

export type ICheckoutTotalQuery = {
  __typename?: "Query";
  checkout?: {
    __typename?: "Checkout";
    totalPrice: {
      __typename?: "TaxedMoney";
      gross: { __typename?: "Money"; amount: number };
    };
  } | null;
};

export type ICheckoutUpdateDeliveryInfoMutationVariables = Exact<{
  checkoutID: Scalars["ID"];
  firstName: Scalars["String"];
  lastName: Scalars["String"];
  streetAddress1: Scalars["String"];
  streetAddress2?: InputMaybe<Scalars["String"]>;
  city: Scalars["String"];
  cityArea?: InputMaybe<Scalars["String"]>;
  countryArea?: InputMaybe<Scalars["String"]>;
  country?: InputMaybe<ICountryCode>;
  postalCode: Scalars["String"];
  phone?: InputMaybe<Scalars["String"]>;
  email: Scalars["String"];
  deliveryMethodId: Scalars["ID"];
}>;

export type ICheckoutUpdateDeliveryInfoMutation = {
  __typename?: "Mutation";
  checkoutEmailUpdate?: {
    __typename?: "CheckoutEmailUpdate";
    checkout?: { __typename?: "Checkout"; id: string } | null;
    errors: Array<{
      __typename?: "CheckoutError";
      field?: string | null;
      message?: string | null;
      code: ICheckoutErrorCode;
      lines?: Array<string> | null;
      variants?: Array<string> | null;
    }>;
  } | null;
  checkoutShippingAddressUpdate?: {
    __typename?: "CheckoutShippingAddressUpdate";
    checkout?: {
      __typename?: "Checkout";
      id: string;
      updatedAt: string;
    } | null;
    errors: Array<{
      __typename?: "CheckoutError";
      field?: string | null;
      message?: string | null;
      code: ICheckoutErrorCode;
      variants?: Array<string> | null;
      lines?: Array<string> | null;
      addressType?: IAddressTypeEnum | null;
    }>;
  } | null;
  checkoutDeliveryMethodUpdate?: {
    __typename?: "CheckoutDeliveryMethodUpdate";
    checkout?: {
      __typename?: "Checkout";
      id: string;
      updatedAt: string;
    } | null;
    errors: Array<{
      __typename?: "CheckoutError";
      field?: string | null;
      message?: string | null;
      code: ICheckoutErrorCode;
      variants?: Array<string> | null;
      lines?: Array<string> | null;
    }>;
  } | null;
};

export type IGetOrderByIdQueryVariables = Exact<{
  orderId: Scalars["ID"];
}>;

export type IGetOrderByIdQuery = {
  __typename?: "Query";
  order?: {
    __typename?: "Order";
    id: string;
    number: string;
    statusDisplay: string;
    lines: Array<{
      __typename?: "OrderLine";
      id: string;
      productName: string;
      quantity: number;
      quantityFulfilled: number;
      thumbnail?: { __typename?: "Image"; url: string } | null;
      unitPrice: {
        __typename?: "TaxedMoney";
        gross: { __typename?: "Money"; amount: number; currency: string };
      };
    }>;
    total: {
      __typename?: "TaxedMoney";
      tax: { __typename?: "Money"; amount: number; currency: string };
      gross: { __typename?: "Money"; amount: number; currency: string };
    };
    totalCharged: { __typename?: "Money"; amount: number; currency: string };
  } | null;
};

export type IPaymentGatewayInitializeMutationVariables = Exact<{
  checkoutId: Scalars["ID"];
  amount: Scalars["PositiveDecimal"];
}>;

export type IPaymentGatewayInitializeMutation = {
  __typename?: "Mutation";
  paymentGatewayInitialize?: {
    __typename?: "PaymentGatewayInitialize";
    gatewayConfigs?: Array<{
      __typename?: "PaymentGatewayConfig";
      id: string;
      data?: Record<string, any> | null;
      errors?: Array<{
        __typename?: "PaymentGatewayConfigError";
        field?: string | null;
        message?: string | null;
        code: IPaymentGatewayConfigErrorCode;
      }> | null;
    }> | null;
    errors: Array<{
      __typename?: "PaymentGatewayInitializeError";
      field?: string | null;
      message?: string | null;
      code: IPaymentGatewayInitializeErrorCode;
    }>;
  } | null;
};

export type ITokenCreateMutationVariables = Exact<{
  email: Scalars["String"];
  password: Scalars["String"];
}>;

export type ITokenCreateMutation = {
  __typename?: "Mutation";
  tokenCreate?: {
    __typename?: "CreateToken";
    token?: string | null;
    refreshToken?: string | null;
    errors: Array<{
      __typename?: "AccountError";
      field?: string | null;
      message?: string | null;
    }>;
  } | null;
};

export type ITransactionInitializeMutationVariables = Exact<{
  checkoutId: Scalars["ID"];
  data?: InputMaybe<Scalars["JSON"]>;
}>;

export type ITransactionInitializeMutation = {
  __typename?: "Mutation";
  transactionInitialize?: {
    __typename?: "TransactionInitialize";
    data?: Record<string, any> | null;
    transaction?: { __typename?: "TransactionItem"; id: string } | null;
    transactionEvent?: { __typename?: "TransactionEvent"; id: string } | null;
    errors: Array<{
      __typename?: "TransactionInitializeError";
      field?: string | null;
      message?: string | null;
      code: ITransactionInitializeErrorCode;
    }>;
  } | null;
};

export type ICheckoutAvailablePaymentGatewaysQueryVariables = Exact<{
  checkoutID: Scalars["ID"];
}>;

export type ICheckoutAvailablePaymentGatewaysQuery = {
  __typename?: "Query";
  checkout?: {
    __typename?: "Checkout";
    availablePaymentGateways: Array<{
      __typename?: "PaymentGateway";
      id: string;
      name: string;
      currencies: Array<string>;
      config: Array<{
        __typename?: "GatewayConfigLine";
        field: string;
        value?: string | null;
      }>;
    }>;
  } | null;
};

export type ICheckoutAvailableShippingMethodsQueryVariables = Exact<{
  checkoutID: Scalars["ID"];
  languageCode: ILanguageCodeEnum;
}>;

export type ICheckoutAvailableShippingMethodsQuery = {
  __typename?: "Query";
  checkout?: {
    __typename?: "Checkout";
    shippingMethods: Array<{
      __typename?: "ShippingMethod";
      id: string;
      name: string;
      description?: JSONString | null;
      minimumDeliveryDays?: number | null;
      maximumDeliveryDays?: number | null;
      translation?: {
        __typename?: "ShippingMethodTranslation";
        name: string;
        description?: JSONString | null;
      } | null;
      price: { __typename?: "Money"; currency: string; amount: number };
    }>;
  } | null;
};

export type ICheckoutQuantityQueryVariables = Exact<{
  id?: InputMaybe<Scalars["ID"]>;
}>;

export type ICheckoutQuantityQuery = {
  __typename?: "Query";
  checkout?: { __typename?: "Checkout"; quantity: number } | null;
};

export type ICollectionsQueryVariables = Exact<{
  channel?: InputMaybe<Scalars["String"]>;
  first: Scalars["Int"];
}>;

export type ICollectionsQuery = {
  __typename?: "Query";
  collections?: {
    __typename?: "CollectionCountableConnection";
    edges: Array<{
      __typename?: "CollectionCountableEdge";
      node: {
        __typename?: "Collection";
        id: string;
        name: string;
        slug: string;
      };
    }>;
  } | null;
};

export type IMenuQueryVariables = Exact<{
  channel?: InputMaybe<Scalars["String"]>;
  slug: Scalars["String"];
  languageCode: ILanguageCodeEnum;
}>;

export type IMenuQuery = {
  __typename?: "Query";
  menu?: {
    __typename?: "Menu";
    id: string;
    items?: Array<{
      __typename?: "MenuItem";
      level: number;
      name: string;
      url?: string | null;
      children?: Array<{
        __typename?: "MenuItem";
        level: number;
        name: string;
        url?: string | null;
        children?: Array<{
          __typename?: "MenuItem";
          level: number;
          name: string;
          url?: string | null;
          page?: { __typename?: "Page"; slug: string } | null;
          category?: {
            __typename?: "Category";
            id: string;
            name: string;
          } | null;
          children?: Array<{
            __typename?: "MenuItem";
            page?: { __typename?: "Page"; slug: string } | null;
          }> | null;
          translation?: {
            __typename?: "MenuItemTranslation";
            name: string;
          } | null;
        }> | null;
        page?: { __typename?: "Page"; slug: string } | null;
        category?: { __typename?: "Category"; id: string; name: string } | null;
        translation?: {
          __typename?: "MenuItemTranslation";
          name: string;
        } | null;
      }> | null;
      page?: { __typename?: "Page"; slug: string } | null;
      category?: { __typename?: "Category"; id: string; name: string } | null;
      translation?: { __typename?: "MenuItemTranslation"; name: string } | null;
    }> | null;
  } | null;
};

export type IPageQueryVariables = Exact<{
  slug: Scalars["String"];
  languageCode: ILanguageCodeEnum;
}>;

export type IPageQuery = {
  __typename?: "Query";
  page?: {
    __typename?: "Page";
    title: string;
    content?: JSONString | null;
    translation?: {
      __typename?: "PageTranslation";
      title?: string | null;
      content?: JSONString | null;
    } | null;
  } | null;
};

export type IProductQueryVariables = Exact<{
  channel?: InputMaybe<Scalars["String"]>;
  slug: Scalars["String"];
  languageCode?: InputMaybe<ILanguageCodeEnum>;
}>;

export type IProductQuery = {
  __typename?: "Query";
  product?: {
    __typename?: "Product";
    id: string;
    seoTitle?: string | null;
    name: string;
    description?: JSONString | null;
    seoDescription?: string | null;
    slug: string;
    rating?: number | null;
    isAvailable?: boolean | null;
    media?: Array<{
      __typename?: "ProductMedia";
      url: string;
      alt: string;
      type: IProductMediaType;
    }> | null;
    translation?: {
      __typename?: "ProductTranslation";
      name?: string | null;
      seoTitle?: string | null;
      seoDescription?: string | null;
      description?: JSONString | null;
    } | null;
    category?: {
      __typename?: "Category";
      id: string;
      name: string;
      translation?: {
        __typename?: "CategoryTranslation";
        name?: string | null;
      } | null;
    } | null;
    thumbnail?: {
      __typename?: "Image";
      alt?: string | null;
      url: string;
    } | null;
    productType: { __typename?: "ProductType"; name: string; slug: string };
    weight?: {
      __typename?: "Weight";
      unit: IWeightUnitsEnum;
      value: number;
    } | null;
    attributes: Array<{
      __typename?: "SelectedAttribute";
      attribute: {
        __typename?: "Attribute";
        id: string;
        name?: string | null;
        translation?: {
          __typename?: "AttributeTranslation";
          name: string;
        } | null;
      };
      values: Array<{
        __typename?: "AttributeValue";
        id: string;
        name?: string | null;
        translation?: {
          __typename?: "AttributeValueTranslation";
          name: string;
        } | null;
      }>;
    }>;
    pricing?: {
      __typename?: "ProductPricingInfo";
      onSale?: boolean | null;
      displayGrossPrices: boolean;
      discount?: {
        __typename?: "TaxedMoney";
        currency: string;
        gross: { __typename?: "Money"; amount: number };
        net: { __typename?: "Money"; amount: number };
        tax: { __typename?: "Money"; amount: number };
      } | null;
      priceRange?: {
        __typename?: "TaxedMoneyRange";
        start?: {
          __typename?: "TaxedMoney";
          currency: string;
          gross: { __typename?: "Money"; amount: number };
          net: { __typename?: "Money"; amount: number };
          tax: { __typename?: "Money"; amount: number };
        } | null;
      } | null;
    } | null;
    variants?: Array<{
      __typename?: "ProductVariant";
      id: string;
      name: string;
      quantityAvailable?: number | null;
      weight?: {
        __typename?: "Weight";
        unit: IWeightUnitsEnum;
        value: number;
      } | null;
      media?: Array<{
        __typename?: "ProductMedia";
        url: string;
        alt: string;
        type: IProductMediaType;
      }> | null;
      attributes: Array<{
        __typename?: "SelectedAttribute";
        attribute: {
          __typename?: "Attribute";
          id: string;
          name?: string | null;
          translation?: {
            __typename?: "AttributeTranslation";
            name: string;
          } | null;
        };
        values: Array<{
          __typename?: "AttributeValue";
          id: string;
          name?: string | null;
          translation?: {
            __typename?: "AttributeValueTranslation";
            name: string;
          } | null;
        }>;
      }>;
    }> | null;
    defaultVariant?: {
      __typename?: "ProductVariant";
      id: string;
      name: string;
      quantityAvailable?: number | null;
      weight?: {
        __typename?: "Weight";
        unit: IWeightUnitsEnum;
        value: number;
      } | null;
      media?: Array<{
        __typename?: "ProductMedia";
        url: string;
        alt: string;
        type: IProductMediaType;
      }> | null;
      attributes: Array<{
        __typename?: "SelectedAttribute";
        attribute: {
          __typename?: "Attribute";
          id: string;
          name?: string | null;
          translation?: {
            __typename?: "AttributeTranslation";
            name: string;
          } | null;
        };
        values: Array<{
          __typename?: "AttributeValue";
          id: string;
          name?: string | null;
          translation?: {
            __typename?: "AttributeValueTranslation";
            name: string;
          } | null;
        }>;
      }>;
    } | null;
  } | null;
};

export type IProductsQueryVariables = Exact<{
  channel?: InputMaybe<Scalars["String"]>;
  languageCode?: InputMaybe<ILanguageCodeEnum>;
  thumbnailSize?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  filter?: InputMaybe<IProductFilterInput>;
}>;

export type IProductsQuery = {
  __typename?: "Query";
  products?: {
    __typename?: "ProductCountableConnection";
    pageInfo: {
      __typename?: "PageInfo";
      endCursor?: string | null;
      startCursor?: string | null;
      hasNextPage: boolean;
      hasPreviousPage: boolean;
    };
    edges: Array<{
      __typename?: "ProductCountableEdge";
      node: {
        __typename?: "Product";
        id: string;
        slug: string;
        name: string;
        rating?: number | null;
        translation?: {
          __typename?: "ProductTranslation";
          name?: string | null;
          description?: JSONString | null;
        } | null;
        thumbnail?: {
          __typename?: "Image";
          url: string;
          alt?: string | null;
        } | null;
        category?: {
          __typename?: "Category";
          id: string;
          name: string;
          translation?: {
            __typename?: "CategoryTranslation";
            name?: string | null;
          } | null;
        } | null;
        defaultVariant?: { __typename?: "ProductVariant"; id: string } | null;
        variants?: Array<{
          __typename?: "ProductVariant";
          id: string;
          name: string;
          translation?: {
            __typename?: "ProductVariantTranslation";
            id: string;
            name: string;
          } | null;
        }> | null;
        pricing?: {
          __typename?: "ProductPricingInfo";
          onSale?: boolean | null;
          displayGrossPrices: boolean;
          discount?: {
            __typename?: "TaxedMoney";
            currency: string;
            gross: { __typename?: "Money"; amount: number };
            net: { __typename?: "Money"; amount: number };
            tax: { __typename?: "Money"; amount: number };
          } | null;
          priceRange?: {
            __typename?: "TaxedMoneyRange";
            start?: {
              __typename?: "TaxedMoney";
              currency: string;
              gross: { __typename?: "Money"; amount: number };
              net: { __typename?: "Money"; amount: number };
              tax: { __typename?: "Money"; amount: number };
            } | null;
          } | null;
        } | null;
      };
    }>;
  } | null;
};

export const FragCheckoutQuantityFragmentDoc = `
    fragment CheckoutQuantityFragment on Checkout {
  quantity
}
    `;
export const FragCollectionFragmentDoc = `
    fragment CollectionFragment on Collection {
  id
  name
  slug
}
    `;
export const FragMoneyFragmentDoc = `
    fragment MoneyFragment on Money {
  amount
}
    `;
export const FragTaxedMoneyFragmentDoc = `
    fragment TaxedMoneyFragment on TaxedMoney {
  currency
  gross {
    ...MoneyFragment
  }
  net {
    ...MoneyFragment
  }
  tax {
    ...MoneyFragment
  }
}
    ${FragMoneyFragmentDoc}`;
export const FragPricingFragmentDoc = `
    fragment PricingFragment on ProductPricingInfo {
  onSale
  discount {
    ...TaxedMoneyFragment
  }
  displayGrossPrices
  priceRange {
    start {
      ...TaxedMoneyFragment
    }
  }
}
    ${FragTaxedMoneyFragmentDoc}`;
export const FragGalleryProductFragmentDoc = `
    fragment GalleryProductFragment on Product {
  id
  slug
  name
  translation(languageCode: $languageCode) {
    name
    description
  }
  thumbnail(size: $thumbnailSize) {
    url
    alt
  }
  rating
  category {
    id
    name
    translation(languageCode: $languageCode) {
      name
    }
  }
  defaultVariant {
    id
  }
  variants {
    id
    name
    translation(languageCode: $languageCode) {
      id
      name
    }
  }
  pricing {
    ...PricingFragment
  }
}
    ${FragPricingFragmentDoc}`;
export const FragMenuItemFragmentDoc = `
    fragment MenuItemFragment on MenuItem {
  level
  name
  url
  page {
    slug
  }
  category {
    id
    name
  }
  children {
    page {
      slug
    }
  }
  translation(languageCode: $languageCode) {
    name
  }
}
    `;
export const FragMenuFragmentDoc = `
    fragment MenuFragment on Menu {
  id
  items {
    ...MenuItemFragment
    children {
      ...MenuItemFragment
      children {
        ...MenuItemFragment
      }
    }
  }
}
    ${FragMenuItemFragmentDoc}`;
export const FragPdProductFragmentDoc = `
    fragment PDProductFragment on Product {
  id
  seoTitle
  name
  description
  slug
  rating
  isAvailable
  translation(languageCode: $languageCode) {
    name
    description
  }
  category {
    id
    name
    translation(languageCode: $languageCode) {
      name
    }
  }
  thumbnail(size: 1200) {
    alt
    url
  }
  productType {
    name
    slug
  }
  weight {
    unit
    value
  }
  pricing {
    ...PricingFragment
  }
  variants {
    id
    name
    weight {
      unit
      value
    }
    media {
      url
      alt
      type
    }
  }
}
    ${FragPricingFragmentDoc}`;
export const FragProductDetailsAttributeFragmentDoc = `
    fragment ProductDetailsAttributeFragment on SelectedAttribute {
  attribute {
    id
    name
    translation(languageCode: $languageCode) {
      name
    }
  }
  values {
    id
    name
    translation(languageCode: $languageCode) {
      name
    }
  }
}
    `;
export const FragProductVariantFragmentDoc = `
    fragment ProductVariantFragment on ProductVariant {
  id
  name
  quantityAvailable
  weight {
    unit
    value
  }
  media {
    url
    alt
    type
  }
  attributes {
    attribute {
      id
      name
      translation(languageCode: $languageCode) {
        name
      }
    }
    values {
      id
      name
      translation(languageCode: $languageCode) {
        name
      }
    }
  }
}
    `;
export const FragProductDetailsFragmentDoc = `
    fragment ProductDetailsFragment on Product {
  id
  seoTitle
  name
  description
  seoDescription
  slug
  rating
  isAvailable
  media {
    url
    alt
    type
  }
  translation(languageCode: $languageCode) {
    name
    seoTitle
    seoDescription
    description
  }
  category {
    id
    name
    translation(languageCode: $languageCode) {
      name
    }
  }
  thumbnail(size: 1200) {
    alt
    url
  }
  productType {
    name
    slug
  }
  weight {
    unit
    value
  }
  attributes {
    ...ProductDetailsAttributeFragment
  }
  pricing {
    ...PricingFragment
  }
  variants {
    ...ProductVariantFragment
  }
  defaultVariant {
    ...ProductVariantFragment
  }
}
    ${FragProductDetailsAttributeFragmentDoc}
${FragPricingFragmentDoc}
${FragProductVariantFragmentDoc}`;
export const AccountRegisterDocument = `
    mutation accountRegister($input: AccountRegisterInput!) {
  accountRegister(input: $input) {
    accountErrors {
      field
      message
    }
    user {
      id
      email
      firstName
      lastName
      isActive
    }
  }
}
    `;
export const CheckoutCompleteDocument = `
    mutation CheckoutComplete($checkoutId: ID!) {
  checkoutComplete(id: $checkoutId) {
    order {
      id
      errors {
        field
        message
        code
      }
    }
    errors {
      field
      message
      code
    }
  }
}
    `;
export const CheckoutCreateDocument = `
    mutation checkoutCreate($channel: String = "default-channel", $variantID: ID!, $quantity: Int!, $email: String) {
  checkoutCreate(
    input: {email: $email, channel: $channel, lines: [{variantId: $variantID, quantity: $quantity}], shippingAddress: {firstName: "Austin", lastName: "Montoya", streetAddress1: "123 Cool St.", city: "Orlando", countryArea: "FL", country: US, postalCode: "32814"}}
  ) {
    errors {
      message
    }
    checkout {
      id
      quantity
    }
  }
}
    `;
export const CheckoutLinesAddDocument = `
    mutation checkoutLinesAdd($variantID: ID!, $checkoutID: ID!, $quantity: Int!) {
  checkoutLinesAdd(
    id: $checkoutID
    lines: [{variantId: $variantID, quantity: $quantity}]
  ) {
    checkout {
      id
      lines {
        id
        variant {
          name
        }
        quantity
      }
      totalPrice {
        gross {
          currency
          amount
        }
      }
      quantity
    }
  }
}
    `;
export const CheckoutTotalDocument = `
    query CheckoutTotal($id: ID!) {
  checkout(id: $id) {
    totalPrice {
      gross {
        amount
      }
    }
  }
}
    `;
export const CheckoutUpdateDeliveryInfoDocument = `
    mutation CheckoutUpdateDeliveryInfo($checkoutID: ID!, $firstName: String!, $lastName: String!, $streetAddress1: String!, $streetAddress2: String, $city: String!, $cityArea: String, $countryArea: String, $country: CountryCode, $postalCode: String!, $phone: String, $email: String!, $deliveryMethodId: ID!) {
  checkoutEmailUpdate(checkoutId: $checkoutID, email: $email) {
    checkout {
      id
    }
    errors {
      field
      message
      code
      lines
      variants
    }
  }
  checkoutShippingAddressUpdate(
    checkoutId: $checkoutID
    shippingAddress: {firstName: $firstName, lastName: $lastName, streetAddress1: $streetAddress1, streetAddress2: $streetAddress2, city: $city, cityArea: $cityArea, countryArea: $countryArea, country: $country, postalCode: $postalCode, phone: $phone}
  ) {
    checkout {
      id
      updatedAt
    }
    errors {
      field
      message
      code
      variants
      lines
      addressType
    }
  }
  checkoutDeliveryMethodUpdate(
    id: $checkoutID
    deliveryMethodId: $deliveryMethodId
  ) {
    checkout {
      id
      updatedAt
    }
    errors {
      field
      message
      code
      variants
      lines
    }
  }
}
    `;
export const GetOrderByIdDocument = `
    query GetOrderById($orderId: ID!) {
  order(id: $orderId) {
    id
    number
    statusDisplay
    lines {
      id
      productName
      quantity
      quantityFulfilled
      thumbnail(size: 256) {
        url
      }
      unitPrice {
        gross {
          amount
          currency
        }
      }
    }
    total {
      tax {
        amount
        currency
      }
      gross {
        amount
        currency
      }
    }
    totalCharged {
      amount
      currency
    }
  }
}
    `;
export const PaymentGatewayInitializeDocument = `
    mutation PaymentGatewayInitialize($checkoutId: ID!, $amount: PositiveDecimal!) {
  paymentGatewayInitialize(
    id: $checkoutId
    amount: $amount
    paymentGateways: [{id: "app.saleor.stripe"}]
  ) {
    gatewayConfigs {
      id
      data
      errors {
        field
        message
        code
      }
    }
    errors {
      field
      message
      code
    }
  }
}
    `;
export const TokenCreateDocument = `
    mutation tokenCreate($email: String!, $password: String!) {
  tokenCreate(email: $email, password: $password) {
    token
    refreshToken
    errors {
      field
      message
    }
  }
}
    `;
export const TransactionInitializeDocument = `
    mutation TransactionInitialize($checkoutId: ID!, $data: JSON) {
  transactionInitialize(
    id: $checkoutId
    paymentGateway: {id: "app.saleor.stripe", data: $data}
  ) {
    transaction {
      id
    }
    transactionEvent {
      id
    }
    data
    errors {
      field
      message
      code
    }
  }
}
    `;
export const CheckoutAvailablePaymentGatewaysDocument = `
    query CheckoutAvailablePaymentGateways($checkoutID: ID!) {
  checkout(id: $checkoutID) {
    availablePaymentGateways {
      id
      name
      config {
        field
        value
      }
      currencies
    }
  }
}
    `;
export const CheckoutAvailableShippingMethodsDocument = `
    query CheckoutAvailableShippingMethods($checkoutID: ID!, $languageCode: LanguageCodeEnum!) {
  checkout(id: $checkoutID) {
    shippingMethods {
      id
      name
      description
      translation(languageCode: $languageCode) {
        name
        description
      }
      minimumDeliveryDays
      maximumDeliveryDays
      price {
        currency
        amount
      }
    }
  }
}
    `;
export const CheckoutQuantityDocument = `
    query CheckoutQuantity($id: ID) {
  checkout(id: $id) {
    ...CheckoutQuantityFragment
  }
}
    ${FragCheckoutQuantityFragmentDoc}`;
export const CollectionsDocument = `
    query Collections($channel: String = "default-channel", $first: Int!) {
  collections(channel: $channel, first: $first) {
    edges {
      node {
        ...CollectionFragment
      }
    }
  }
}
    ${FragCollectionFragmentDoc}`;
export const MenuDocument = `
    query Menu($channel: String = "default-channel", $slug: String!, $languageCode: LanguageCodeEnum!) {
  menu(channel: $channel, slug: $slug) {
    ...MenuFragment
  }
}
    ${FragMenuFragmentDoc}`;
export const PageDocument = `
    query Page($slug: String!, $languageCode: LanguageCodeEnum!) {
  page(slug: $slug) {
    title
    content
    translation(languageCode: $languageCode) {
      title
      content
    }
  }
}
    `;
export const ProductDocument = `
    query Product($channel: String = "default-channel", $slug: String!, $languageCode: LanguageCodeEnum = EN_US) {
  product(channel: $channel, slug: $slug) {
    ...ProductDetailsFragment
  }
}
    ${FragProductDetailsFragmentDoc}`;
export const ProductsDocument = `
    query Products($channel: String = "default-channel", $languageCode: LanguageCodeEnum = EN_US, $thumbnailSize: Int = 300, $first: Int, $last: Int, $after: String, $before: String, $filter: ProductFilterInput) {
  products(
    channel: $channel
    first: $first
    last: $last
    after: $after
    before: $before
    filter: $filter
  ) {
    pageInfo {
      endCursor
      startCursor
      hasNextPage
      hasPreviousPage
    }
    edges {
      node {
        ...GalleryProductFragment
      }
    }
  }
}
    ${FragGalleryProductFragmentDoc}`;

export type SdkFunctionWrapper = <T>(
  action: (requestHeaders?: Record<string, string>) => Promise<T>,
  operationName: string,
  operationType?: string
) => Promise<T>;

const defaultWrapper: SdkFunctionWrapper = (
  action,
  _operationName,
  _operationType
) => action();

export function getSdk(
  client: GraphQLClient,
  withWrapper: SdkFunctionWrapper = defaultWrapper
) {
  return {
    accountRegister(
      variables: IAccountRegisterMutationVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<IAccountRegisterMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<IAccountRegisterMutation>(
            AccountRegisterDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        "accountRegister",
        "mutation"
      );
    },
    CheckoutComplete(
      variables: ICheckoutCompleteMutationVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<ICheckoutCompleteMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<ICheckoutCompleteMutation>(
            CheckoutCompleteDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        "CheckoutComplete",
        "mutation"
      );
    },
    checkoutCreate(
      variables: ICheckoutCreateMutationVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<ICheckoutCreateMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<ICheckoutCreateMutation>(
            CheckoutCreateDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        "checkoutCreate",
        "mutation"
      );
    },
    checkoutLinesAdd(
      variables: ICheckoutLinesAddMutationVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<ICheckoutLinesAddMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<ICheckoutLinesAddMutation>(
            CheckoutLinesAddDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        "checkoutLinesAdd",
        "mutation"
      );
    },
    CheckoutTotal(
      variables: ICheckoutTotalQueryVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<ICheckoutTotalQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<ICheckoutTotalQuery>(
            CheckoutTotalDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        "CheckoutTotal",
        "query"
      );
    },
    CheckoutUpdateDeliveryInfo(
      variables: ICheckoutUpdateDeliveryInfoMutationVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<ICheckoutUpdateDeliveryInfoMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<ICheckoutUpdateDeliveryInfoMutation>(
            CheckoutUpdateDeliveryInfoDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        "CheckoutUpdateDeliveryInfo",
        "mutation"
      );
    },
    GetOrderById(
      variables: IGetOrderByIdQueryVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<IGetOrderByIdQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<IGetOrderByIdQuery>(GetOrderByIdDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        "GetOrderById",
        "query"
      );
    },
    PaymentGatewayInitialize(
      variables: IPaymentGatewayInitializeMutationVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<IPaymentGatewayInitializeMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<IPaymentGatewayInitializeMutation>(
            PaymentGatewayInitializeDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        "PaymentGatewayInitialize",
        "mutation"
      );
    },
    tokenCreate(
      variables: ITokenCreateMutationVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<ITokenCreateMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<ITokenCreateMutation>(TokenCreateDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        "tokenCreate",
        "mutation"
      );
    },
    TransactionInitialize(
      variables: ITransactionInitializeMutationVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<ITransactionInitializeMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<ITransactionInitializeMutation>(
            TransactionInitializeDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        "TransactionInitialize",
        "mutation"
      );
    },
    CheckoutAvailablePaymentGateways(
      variables: ICheckoutAvailablePaymentGatewaysQueryVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<ICheckoutAvailablePaymentGatewaysQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<ICheckoutAvailablePaymentGatewaysQuery>(
            CheckoutAvailablePaymentGatewaysDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        "CheckoutAvailablePaymentGateways",
        "query"
      );
    },
    CheckoutAvailableShippingMethods(
      variables: ICheckoutAvailableShippingMethodsQueryVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<ICheckoutAvailableShippingMethodsQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<ICheckoutAvailableShippingMethodsQuery>(
            CheckoutAvailableShippingMethodsDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        "CheckoutAvailableShippingMethods",
        "query"
      );
    },
    CheckoutQuantity(
      variables?: ICheckoutQuantityQueryVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<ICheckoutQuantityQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<ICheckoutQuantityQuery>(
            CheckoutQuantityDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        "CheckoutQuantity",
        "query"
      );
    },
    Collections(
      variables: ICollectionsQueryVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<ICollectionsQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<ICollectionsQuery>(CollectionsDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        "Collections",
        "query"
      );
    },
    Menu(
      variables: IMenuQueryVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<IMenuQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<IMenuQuery>(MenuDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        "Menu",
        "query"
      );
    },
    Page(
      variables: IPageQueryVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<IPageQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<IPageQuery>(PageDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        "Page",
        "query"
      );
    },
    Product(
      variables: IProductQueryVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<IProductQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<IProductQuery>(ProductDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        "Product",
        "query"
      );
    },
    Products(
      variables?: IProductsQueryVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<IProductsQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<IProductsQuery>(ProductsDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        "Products",
        "query"
      );
    },
  };
}
export type Sdk = ReturnType<typeof getSdk>;
