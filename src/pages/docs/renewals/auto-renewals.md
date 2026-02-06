# Manage auto-renewals using APIs

Managing auto‑renewals through APIs allows you to programmatically control how subscriptions renew based on customer preferences and configured quantities. Partners can use the following APIs to configure auto-renewals for a subscription:

| Endpoint                                                      | Description               |
|---------------------------------------------------------------|----------------------------|
| `/v3/customers/<customer-id>/subscriptions`                   | POST   |
| `/v3/customers/<customer-id>/subscriptions/<subscription-id>` | PATCH  |

The system picks up the subscription on the Renewal Date.  Subscriptions are renewed based on the configured renewal quantity and the customer’s renewal preferences. If early renewal was previously applied:

- Auto‑renewal may renew the remaining quantities (if any).
- If all quantities were already renewed, auto‑renewal updates subscription states but does not add new line items.

Auto‑renewal process outcomes:

- Renew the subscription if auto‑renew is enabled.
- Expire the subscription if auto‑renew is turned off.
- Update the subscription attributes even when all seats were already early renewed.

For more information, see:

- [Create Subscription](../subscription_management/create_subscription.md)
- [Update subscription](../subscription_management/update_subscription.md)
