# Upcoming releases

The following features are scheduled for release:

## Flexible Discounts – Introductory offers support

Enhanced the Flexible Discounts capability in VIP Marketplace to support Introductory Offers as a new discount category. This update enables partners to apply fixed-price discounts to a customer’s first purchase or first-time use of a specific product. Some benefits include:

- Simplified onboarding for new Adobe products
- Elimination of pricing exceptions and manual Pool-bit handling
- Scalable, API-driven management of introductory offers

### New capabailities

- **Category filtering:**  
  The newly introduced `categories` query parameter of the [Fetch Flexible Discounts](../flex_discounts/apis.md#get-flexible-discounts) endpoint supports filtering by category. Supported values:
  - `STANDARD`: Regular Flexible Discounts (% off, $ off)
  - `INTRO`: Introductory Offers

- **New discount type:**  
  The `type` parameter with value `FIXED_PRICE` allows to offer a product at a fixed price, regardless of its original price.
  *Example:* Adobe Express at $39.99 for new customers.

- **Eligibility enhancements:**  
  Flexible Discounts for Introductory Offers can be applied only if the customer has never owned the product previously.

For more information, see:

- [Flexible Discounts](../flex_discounts/index.md)
- [Manage Flexible Discounts using APIs](../flex_discounts/apis.md)

## Early Renewals – Subscription renewal ahead of anniversary date

Facilitates partners to renew customer subscriptions before the Anniversary Date (AD). This capability enables customers to renew early while maintaining uninterrupted access to their existing subscription.

### New capabailities

- **Early renewal window (AD‑30 to AD)**  
  Partners can now place renewal orders up to 30 days before the subscription’s anniversary date. Orders placed within this window are treated as renewal orders and are invoiced immediately.

- **Anniversary date rollover**  
  The first successful early renewal order triggers the subscription’s anniversary date to roll over to the next term. The original renewal date remains unchanged, as it continues to drive auto-renew workflows.

- **Quantity aggregation for volume discounts**  
  When multiple early renewal orders are submitted before AD, all renewed quantities are accumulated for discount eligibility. Customers may qualify for higher discount tiers based on total renewed quantity. This applies only to renewal orders, not new purchases.

- **Product and quantity restrictions**  
  The first early renewal order must include only existing products and existing quantities. After the first order completes, additional seats or new products can be purchased in separate orders. This separation ensures clean billing and provisioning workflows.

- **Three-year commitment (3YC) support**  
  For three-year commitment customers, price continues to be based on the 3YC commitment start date. Early renewals maintain compliance and may help non-compliant customers regain compliant status.

- **Return policy enhancements**  
  Early renewal orders can be returned within the standard 14-day return window, even if the return occurs after the anniversary date. The anniversary date does not roll back after a return.

- **Auto-renew compatibility**  
  Customers with auto-renewal enabled can still renew early. On the renewal date, any remaining quantities not covered by early renewals are automatically renewed. Subscription states and attributes are updated as part of the standard renewal cycle.

For more information, see:

- [Renewals - Overview](../renewals/overview.md)
- [Managing early renewals using APIs](../renewals/manual-renewals.md)
- [Managing auto-renewals using APIs](../renewals/auto-renewals.md)

## Pricing and invoicing data available in GET Order APIs

The VIP Marketplace now provides partners with enhanced access to pricing and invoicing information through updates to the `GET Order by ID` and `GET Order History` APIs.

These enhancements allow partners to view the same pricing elements that appear in the invoice spreadsheets, which improves transparency and reconciliation accuracy.

### New capabailities

- Pricing is now available in the following APIs when the `fetch-price=true` query parameter is included in the request:

  - Get Order by ID
  - Get Order History

- Partners can retrieve detailed pricing and invoicing data directly through these API responses, including:

  - `partnerPrice`
  - `discountedPartnerPrice`
  - `netPartnerPrice`
  - `lineItemPartnerPrice`
  - `pricingSummary`

- Pricing is returned only for:

  - Single‑currency orders
  - Orders with completed status (1000)
  - Orders placed after the pricing feature was introduced

- Additional details

  - The `proratedDays` field appears when pricing is fetched for mid‑term purchases.
Multi‑currency pricing for previews is not supported.

For more information, see:

- [Preview with Pricing](../order_management/order_scenarios.md)
- [Get order by ID](../order_management/get_order.md#get-details-of-a-specific-order)
- [Get order history for a customer](../order_management/get_order.md#get-the-order-history-of-a-customer)
