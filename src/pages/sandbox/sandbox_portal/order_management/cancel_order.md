# Cancel an order

Cancellation of Orders can be done through either the Portal or through Postman. Attempting to cancel an Order 14 days (about 2 weeks) after its creation will be rejected.

Cancelling an order will update the subscriptions associated with the Order as follows:

- Subscription quantity will be lowered by the quantity of the associated Order line item.
- Subscriptions that only have licenses from this Order will also change to status 1004 (inactive) after the quantity is set to zero.

Subscription quantity and status updates may take time after canceling the Order. Please poll the subscription for updated quantity/status.

**Note:** Only full order cancellations are allowed.

Orders can be canceled through the Portal by changing the status of the order to 1008 – Cancelled. The process to change an order's status is found in the section ‘Editing the Order Status and Creation Date (Portal Only)’ above.
