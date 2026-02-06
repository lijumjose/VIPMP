# Migrate from VIP to VIP-MP

You can seamlessly transfer existing customers from VIP to VIP-MP. Customer consent can be obtained by sending the customer’s VIP Membership ID in the transfer request. You can use the [Preview Offers](preview_offers.md) endpoint to check a customer’s eligibility for transfer and to preview the offers that need to be transferred for their existing VIP subscriptions.

## Eligibility rules for migration

**Products**

- For a customer, each existing VIP product must have an equivalent VIP-MP product.

**Three-Year Commit (3YC)**

- Customers with Three-Year Commit are only eligible for transfer if they have accepted 3YC after March 27th, 2023 or their 3YC end date is before their next anniversary date.

**Membership**

- Customer must have a valid existing VIP Membership ID (indirect or direct).
- Customer admin must have accepted VIP Terms and Conditions.
- Customer must not be part of a linked membership group.

**Renewal Window**

- Customers within the renewal window are now allowed to transfer to VIP-MP.
  - If customers are in the renewal window prior to their anniversary date, they are only allowed to transfer if they have fully renewed.

**Region**

- Customer must be in the list of [Supported Countries](../references/supported_locales.md).

**Reseller**

- The reseller must have accepted the VIPMP Terms & Conditions.
- The reseller must be approved to sell in the country of the customer.
- The reseller must be enabled to sell into the customer’s market segment.

**Compliance**

- The customer must not have any unpaid VIP purchase orders.
- The customer must not have any outstanding VIP purchase authorizations.
  - This can be bypassed by passing an optional query parameter that will expire all outstanding purchase authorizations.

**Returns**

- Customer must not have any orders that can be returned (as per VIP return policy)
  - This can be bypassed by passing an optional query parameter that will disable rollback to VIP.

**Note:** Adobe reserves the right to disallow seamless move based solely on Adobe’s discretion.

## APIs to enable migration

The following APIs are available to enable migration from VIP to VIP-MP:

- [Preview offers](preview_offers.md)
- [Transfer subscriptions](transfer_subscription.md)
- [Get transfer details](transfer_subscription.md)
