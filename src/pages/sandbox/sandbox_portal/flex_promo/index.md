# Manage Flexible Promotions

Partners can get flexible promotions for a product in a specific market segment and country. These promotions can be applied during the order placement process. For detailed guidance on managing Flexible Promotions through APIs, refer to [Manage Flexible Promotions using APIs](/src/pages/docs/flex_promo/index.md).

## Testing Flexible Promotions in Sandbox

You can explore and test the Flexible Promotions feature in the Sandbox environment using the following options:

- [View the available flexible promotions](#view-the-available-flexible-promotions)
- [View Flexible Promotions applied to an Order](#view-flexible-promotions-applied-to-an-order)

### View the available Flexible Promotions

Go to **Portal Resources > View Available Promotions** to view the available flexible promotions, as shown in the following figure:

![Available Flexible Promotions](../image/flex_available.png)

The UI displays a list of current promotions, including the following details:

- Applicable market segments
- Applicable country
- Name and description of the promotion
- Promotion `code` to identify the promotion. Use this code to apply the discounted price.
- Start and end date of promotion
- Status of the promotion. Only promotions with **ACTIVE** status are eligible.
- Offer IDs the promotion applies to.
- Type and value of discount. A promotion can have either fixed discount or a percentage discount on the price. For example, if the `type` is **FiXED DISCOUNT** and `value` is **20**, and `currency` is **USD**, means a flat discount of $20 on the offer price.

You can use the promotion code while placing an order using the Create Order API.

### View Flexible Promotions applied to an Order

If a Flexible Promotion is applied during order placement, its details can be viewed from the Order screen. For example, in **Manage Records > Orders**, the promotion information appears within the `lineItems` section, as illustrated in the following figure:

![View Flexible Promotions applied to an order](../image/flex_view.png)

The promotions section displays the promotion code and indicates whether it was successfully applied to the order.
