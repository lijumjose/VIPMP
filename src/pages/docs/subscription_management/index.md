# Manage subscriptions

A Subscription is an agreement between the customer and Adobe to provide, receive, or use Adobe paid and free products and services on a continuing or periodic basis. A subscription may contain one or more acquired offers.

## Auto-renewal scenarios

You can manage the auto-renewal preferences for each subscription independently through the subscription’s `autoRenewal` object, as shown in the following example:

```json
"autoRenewal": {
    "enabled": true,
    "renewalQuantity": 7
} 
```

You can update these preferences through the [Update Subscription](./update_subscription.md) endpoint.

The `enabled` field specifies whether a subscription will be auto-renewed, and the `renewalQuantity` determines the quantity of the subscription that will be renewed.

The `autoRenewal` preferences are not evaluated until the renewal time. You can enable or disable autorenewal and change the quantity throughout the duration of the subscription. On the `cotermDate` of the customer, all of the customer’s subscriptions with auto-renewal enabled will renew for the specified quantity.

At the time of renewal, there are two possible scenarios for each subscription:

- Enabled is set to `false` – Subscription becomes inactive (status 1004).
- Enabled is set to `true` – Subscription is marked for renewal (status will remain 1000) for the amount specified in the `renewalQuantity` object. During this brief period while waiting for the renewal order to be fulfilled, the `autoRenewal` preferences may not be updated.

To ensure whether all subscriptions are renewed in accordance with the autorenewal preferences, set the autorenewal preferences to at least 3 days before the customer’s cotermDate (subscription’s `renewalDate`). The customer’s subscriptions will be renewed at some point soon after midnight UTC, but the exact time may change or vary by region.

If the `renewalQuantity` is higher than the current ordered quantity, then additional licenses will be provisioned after renewal. If the `renewalQuantity` is less than the current ordered quantity, then some licenses will be revoked upon renewal.

Adobe will create a renewal order on a customer's `cotermDate` if the customer has subscriptions set to autorenew. The renewal order details and Order ID can be retrieved by parsing the response from the [Get Order History](../order_management/get_order.md) API. This ID can then be used in subsequent Get Order calls.

## APIs to manage subscriptions

The following API endpoints are available to manage subscriptions:

- [Create subscription](./create_subscription.md)
- [Get details of a specific subscription](./get_details.md)
- [Get details of all subscriptions of a customer](./get_details_for_customers.md)
- [Update subscription](./update_subscription.md)
