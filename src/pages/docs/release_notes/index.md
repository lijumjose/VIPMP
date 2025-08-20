# Release notes

- [API changes](#api-changes)
- [Sandbox changes](#sandbox-changes)

## API changes

### August 14, 2025

#### Preview with pricing

- Partners can now retrieve the pricing details in the Preview Order and Preview Renewal APIs by setting the `fetch-price` query parameter to `true` in the request URL. This returns real-time partner pricing details for Adobe products, helping partners and resellers better estimate how much Adobe will invoice for an order.
  - Introduced `pricing` object in the `lineItem` level of the Preview Order and Preview Renewal API responses.
  - Added `pricingSummary` object to provide summarized pricing details of all line items.
  - Introduced new `fetch-price` query parameter for both Preview Order and Preview Renewal scenarios.
  - Introduced new `proratedDays` parameter in the response of Preview Order and Preview Renewal APIs to indicate the number of days for which the order will be invoiced. This parameter appears only when the `fetch-price` parameter is set to `true` in the request.

  Read more about [preview with pricing](../order_management/order_scenarios.md).

#### Get Customer List and Get Reseller List APIs

- The [Get Reseller List API](../reseller_account/get_reseller_list.md) enables partners to retrieve a list of resellers linked to a distributor.
  - The API supports filtering by reseller status and sorting by creation date or reseller name. <br />Read more about [Get Reseller List API](../reseller_account/get_reseller_list.md).
- The [Get Customer List API](../customer_account/get_customer_list.md) enables partners to retrieve customer accounts associated with a specific reseller.
  - This API is essential for partners who manage customer portfolios and require precise, real-time access to customer data for quoting, reporting, and renewal planning. <br />Read more about [Get Customer List API](../customer_account/get_customer_list.md).

### June 19, 2025

#### Fetch Price List

- Partners can leverage the `Fetch Price List` API to retrieve up-to-date pricing information for Adobe products. This API modernizes Adobe’s price list distribution process. Read more about [how to access price lists using Fetch Price List API](../manage_pricing/index.md).
  - Introduced new [error codes specific to the Price List API](../manage_pricing/index.md#error-codes-specific-to-fetch-price-list-api).

### May 09, 2025

#### Manage Flexible Discounts

- Partners can access flexible discounts tailored to specific products, market segments, and countries, and apply them during the order process. Read more about [how to manage flexible discounts](../flex_discounts/index.md). <br />The major [API changes](../flex_discounts/apis.md) include:

  - Introduced the `GET /v3/flex-discounts` API to get the list of available flexible discounts.
  - Preview Order API returns the applicable flexible discounts for the customer.
  - Partners can place the order by applying the  flexible discount code received.
  - Introduced [new error codes specific to Flexible Discounts](../flex_discounts//error_codes.md).

#### Fetch Recommendations

- Recommendations API enables VIP Marketplace partners to deliver intelligent, personalized, and in-context product recommendations, enhancing customer experience through upsell, cross-sell, and add-on opportunities. Read more about [how to manage recommendations](../recommendations/index.md). <br /> Major [API changes](../recommendations/apis.md) include:
  - Partners can use `POST /v3/recommendations` API to fetch the relevant product recommendations.
  - Both Preview Order and Preview Renewal APIs fetch the applicable recommendations.
  - Both Get Subscriptions and Get Order APIs can fetch recommendations.
  - Introduced new [error codes specific to recommendations](../recommendations/error_codes.md).

### January 23, 2025

#### Migrate High Volume Discount (HVD) customers from VIP

- High Volume Discount (HVD) customers in VIP can now migrate to VIP Marketplace. See [Migrate High Volume Discount customers from VIP to VIP Marketplace](../migration/migrate_hvd.md) for more details.

#### Manage High Growth Offers

- Introduced High Growth Offers for existing Acrobat Pro customers. These offers will replace the current High Volume Discounting program that exists in VIP.  See [Manage High Growth Offers](../customer_account/high_growth.md) for more details.

### Earlier releases in 2024

- Included customer's VIP renewal status within migration preview API response. See [Preview Offer](../migration/preview_offers.md) for more details.
- Ability to place renewal orders after anniversary date

  Added allowedActions field in the Get All Subscriptions for a Customer API to indicate the subscriptions that can be selected for manual renewals. See [Get Subscription Details](../subscription_management/get_details.md) for more information.

- The newly introduced `RENEWAL` order type in the Create Order API is used for renewals that are initiated after the anniversary date. See [Create Order Scenarios](../order_management/order_scenarios.md) for more details.
- Enabling Global customers for Create Subscription.

  Global customers can now use Create Subscription API to create scheduled subscriptions. See [Create Subscriptions](../subscription_management/create_subscription.md) for more details.

- Create and manage linked memberships

  Adding support for creating and managing linked memberships that facilitates combining purchases across linked customer accounts to achieve better volume discounts. See [Manage linked memberships](../customer_account/linked_membership.md) for more information.

- “Late renewals” or “Renewal” Order Type

  Introducing a new Order Type for partners to place “late renewal” after anniversary date. See  [Create Order](../order_management/create_order.md) for more information.

- Create orders

  Implemented a validation to prevent partners from placing new orders before the subscription’s anniversary date. If a partner attempts to place an order before this date, an error message will appear as the response.

- Worldwide offers:

  - Added ability to enable a customer for worldwide (global) sales
  - Added ability to create “Deployments” for a customer to purchase worldwide offers
  - Added an optional currencyCode to the order lineItem level to support global deployments
  - Added deploymentId to order lineItem (read/write)
  - Added deploymentId and currencyCode to subscription resource (read only)
  - Added deploymentId and currencyCode to transfer resource (read only)

- Included 3yc info in preview migration and preview/execution of reseller change API calls.

- Create Subscription:

  - Added ability to create future dated subscription that would become active on next anniversary date. See [Create Subscription](../subscription_management/create_subscription.md) for more information.

- Added a new API to fetch all customers (under a given reseller) who have added seats via Adobe’s Admin console.
- Added a new API to fetch all seats/licenses added by a given customer via admin console.
- These APIs will inform our partners to place corresponding orders backing the seats added by the customers via admin console.
- Added new Error Code for Preview / Create Transfer response. See [Status Codes & Error Handling](../references/error_handling.md) for more information.
- Added self-service capability for a customer and partner to move between resellers/partners. See [Reseller Change Process](../reseller_change/index.md) for more information.

## Sandbox changes

- [Manage Flexible Discounts](/src/pages/sandbox/sandbox_portal/flex_promo/index.md)
- [Manage Product Recommendations](/src/pages/sandbox/sandbox_portal/recommendations/index.md)
- [Manage High Growth Offers](/src/pages/sandbox/sandbox_portal/high_growth_offer/high_growth.md)
- [Migrate HVD customers from VIP to VIP Marketplace](/src/pages/sandbox/sandbox_portal/migrate_hvd_customers/migrate_hvd_customers.md)
- [Manage Linked Memberships](/src/pages/sandbox/sandbox_portal/linked_memberships/index.md)
- [View renewal status of memberships](/src/pages/sandbox/sandbox_portal/transfer_memberships/index.md)
