# Manage orders

To ensure that the best volume discounts are applied to each order, it is recommended to create a PREVIEW order prior to placing an order. Creating a PREVIEW order helps you determine the best volume discount Offer IDs for the order for which the customer is eligible. The payload for PREVIEW order is the same as creating a `NEW` order, and the response returns that payload with the best available offer IDs. You can then use it to place an order through the [Create Order API](create-order.md), by changing the `orderType` from `PREVIEW` to `NEW`).

The following list describes certain important aspects about volume discounting:

- Creating a `PREVIEW` order does not place an order. An order with type `NEW` must be created to place an order.
- A customer’s volume discount level is evaluated after each order. It is based on the customer’s current level and the cumulative quantity of volume-discount-eligible products in that order.
- Customers transferring their subscriptions from VIP will retain their existing discount level.
- A customer’s discount level will be reevaluated at the renewal time and can go up or down depending on the total renewal quantity across all their subscriptions.

![Volume discount process](../image/order_1.jpg)

## Order management APIs

You can use the following APIs to create and modify orders:

- [Create an order](create-order.md)
- [Get order details](get-order.md)
- [Update an order](update-order.md)
