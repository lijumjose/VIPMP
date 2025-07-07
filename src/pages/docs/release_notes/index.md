# Release notes

- [API changes](#api-changes)
- [Sandbox changes](#sandbox-changes)

## API changes

### June 19, 2025

- Partners can leverage the `Fetch Price List` API to retrieve up-to-date pricing information for Adobe products. This API modernizes Adobe’s price list distribution process. Read more about [how to access price lists using Fetch Price List API](../manage_pricing/index.md).

### May 09, 2025

API Doc Version 2025.05.01

- Partners can access flexible discounts tailored to specific products, market segments, and countries, and apply them during the order process. Read more about [how to manage flexible discounts](../flex_promo/index.md).
- Recommendations API enables VIP Marketplace partners to deliver intelligent, personalized, and in-context product recommendations, enhancing customer experience through upsell, cross-sell, and add-on opportunities. Read more about [how to manage recommendations](../recommendations/index.md).

### January 23, 2025

- High Volume Discount (HVD) customers in VIP can now migrate to VIP Marketplace. See [Migrate High Volume Discount customers from VIP to VIP Marketplace](../migration/migrate_hvd.md) for more details.
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

  Implemented a validation to prevent from placing new orders before the subscription’s anniversary date. If a partner attempts to place an order before this date, an error message will appear as the response.

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

- [Manage Flexible Promotions](/src/pages/sandbox/sandbox_portal/flex_promo/index.md)
- [Manage Product Recommendations](/src/pages/sandbox/sandbox_portal/recommendations/index.md)
- [Manage High Growth Offers](/src/pages/sandbox/sandbox_portal/high_growth_offer/high_growth.md)
- [Migrate HVD customers from VIP to VIP Marketplace](/src/pages/sandbox/sandbox_portal/migrate_hvd_customers/migrate_hvd_customers.md)
- [Manage Linked Memberships](/src/pages/sandbox/sandbox_portal/linked_memberships/index.md)
- [View renewal status of memberships](/src/pages/sandbox/sandbox_portal/transfer_memberships/index.md)
