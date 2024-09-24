# Create order

Complete the following steps to create a default Order:

1. Navigate to the **API Tools** tab in the Portal. The Create Default Records page is displayed.

![Creating a default data set in the Sandbox Portal](/src/pages/sandbox/image/create_order_1.png)
2. Select **Create Default Reseller** to create a default reseller.
3. Select **Create Default Customer** to create a default customer.
4. Select **Create Default Order** to create a default order. Clicking on the Create Default Order will generate three orders:

- An order with a 1000 status (success)
- An order with a 1004 status (inactive)
- An order with a 1008 status (canceled)

All orders will be assigned to the previously created customer. A confirmation message (“Task Complete”) will appear upon successful creation, and order IDs will be assigned to each new order.

Alternatively, you can create a default order as part of a full Default Set of records, which includes a reseller, a customer, an order, a membership, and a transfer. To do this, select **Create Default Set**. This method will also generate three orders with statuses 1000, 1004, and 1008.
