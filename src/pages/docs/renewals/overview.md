# Manage renewals

Managing subscription renewals helps partners ensure uninterrupted service for customers and maintain accurate subscription configurations throughout the contract lifecycle. Adobe supports these renewal paths:

1. **Auto‑renewal (system‑initiated)**

   - These renewals are triggered automatically by Adobe systems based on the renewal configuration.
   - Occurs each year on the renewal date of the subscription.
   - The renewal maintains the products, while the quantity is updated according to the customer’s preferred renewal quantity.
   - Does not require partner action unless the customer chooses to opt out.

2. **Manual renewal (partner‑initiated)**

   Manual renewal includes two variants:

   1. Late renewal

      - Occurs after anniversary date (AD) up to the allowed grace period (typically 14 days).
      - Partners can renew subscriptions manually during this window.
      - Valid only for products and quantities previously owned in the prior term.
      - Additional quantities or new products must be purchased in a separate new order.

   2. Early renewal

      - Allows partners to renew a customer’s existing subscriptions ahead of time.
      - Allows subscribing to new products and adding more seats to the existing subscription.
      - Occurs before anniversary date (within AD‑30).
      - Allows enabling earlier billing, service continuation, and workload distribution.

## Important dates in the renewal model

### Anniversary date (AD)

- The AD is the official contract renewal date for the customer.
- It determines the start and end of a subscription term.
- AD will change after a successful early renewal.

### Renewal date

- Represents the date on which the system attempts the auto‑renewal.
- Renewal date does not change, even if early renewal happens.
- Renewal date continues to drive system‑initiated renewal workflows.

## Define auto-renewal and manual renewal

You can use [Create Subscription](../subscription_management/create_subscription.md) and [Update Subscription](../subscription_management/update_subscription.md) APIs to create or modify a subscription to define the auto-renewal configuration. If the auto-renewal configuration is enabled, subscriptions are renewed using current quantities and renewal preferences. For more information on how to define auto-renewal, see [managing auto-renewals using APIs](auto-renewals.md).

Partners can perform manual renewals using APIs. For more information, see [managing manual renewals using APIs](manual-renewals.md).
