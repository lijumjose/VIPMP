# Introduction

**📄 Click [here for release notes](release_notes/index.md)**.

As a partner cloud marketplace administrator, you can use the Partner APIs to create and manage reseller and customer accounts, and place orders for select Adobe products for those customers. Before placing an order, both reseller and customer accounts must exist. Each customer must be linked to a reseller, and each reseller must be linked to a distributor.

The Distributor → Reseller → Customer → Order relationships are unidirectionally one-to-many. That is, one distributor can have multiple  resellers, but each reseller may only belong to one distributor. Similarly, a reseller may have many customers, but a customer can only be tied to one reseller.

If a reseller wishes to work with multiple distributors, a new reseller account must be created for each distributor. This is the same for customers with multiple resellers: a new customer account must be created for each reseller. The workflow for placing an order for a new customer is as follows:

1. Marketplace presents Adobe Terms and Conditions to resellers.
2. If a reseller accepts the Terms and Conditions, the marketplace creates an account for the reseller using the [Create Reseller Account](reseller_account/create_reseller_account.md) API.
3. Before placing an order, the reseller creates an account for a customer by using the [Create Customer Account](customer_account/create_customer_account.md) endpoint.

   * The Customer resource returns with a link to [Get Customer Account Details](customer_account/get_customer_account.md).
   * The end customer’s address and contact information can be updated through a call to [Update Customer Account](customer_account/update_customer_account.md).

4. Once a customer account exists, the reseller places an order in the marketplace. Marketplace then calls [Create Order](order_management/create_order.md) for all eligible Adobe products in the order.

   * The Order resource is returned with links to [Get Order Details](order_management/get_order.md) for the order itself and [Get Subscription Details](subscription_management/get_details.md) for any subscriptions associated with the order.
   * Orders can be canceled within 14 days of placing the order. When a reseller cancels an order in the marketplace, the marketplace should call [Cancel Order](order_management/index.md) to send a cancellation to Adobe.

5. Auto-renewal is enabled by default for subscriptions that are created by an order. The default auto-renewal configuration, along with the quantity of licenses to renew, can be updated using an [Update Subscription Auto-Renewal](subscription_management/update_subscription.md) call.

Customers can also be transferred from the VIP buying program to VIP MP. This can be managed using the transfer APIs ([Preview Offers](migration/preview_offers.md), [Transfer Subscriptions](migration/transfer_subscription.md), and [Get Transfer Details](migration/get_transfer_details.md)). The [Preview Offers](migration/preview_offers.md) call is an optional API to preview a customer’s eligibility for transfer, as well as their current subscriptions and renewal dates.
