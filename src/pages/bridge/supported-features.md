# Supported features

The Bridge supports a growing subset of the workflows available through the Commerce Partner APIs. This page lists the features that are currently available in the Bridge UI, the navigation path for each feature, and the capabilities that still require direct API integration.

This list will expand as the Bridge adds more API workflow coverage.

## Supported in the Bridge UI

| Feature                                                                                                                                                      | UI path                                                                                                                                                |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------|
| Sign in and select a distribution                                                                                                                            | Sign in at **bridge.marketplace.adobe.com** > **Personal Account** > select organization > select distribution                                         |
| Switch between distributions                                                                                                                                 | Organization or distribution picker, top right, available from any screen                                                                              |
| View all resellers under your organization                                                                                                                   | **Resellers** from the left navigation menu                                                                                                            |
| View all customers under a reseller                                                                                                                          | **Resellers** > select a reseller                                                                                                                      |
| Search for a reseller or a customer                                                                                                                          | **Resellers** > search bar, or **Resellers** > reseller > customer search bar                                                                          |
| Create a customer                                                                                                                                            | Cart > **Add customer details** > create a new customer                                                                                                |
| View customer account details, including reseller ID, company name, address, admins, discount level, 3YC level, linked membership, and next anniversary date | **Resellers** > reseller > customer > **Account Details** tab                                                                                          |
| Modify customer address and add an administrator  | **Resellers** > reseller > customer > **Account Details** tab                                                                                          |
| View a customer's active products and subscriptions                                                                                                          | **Resellers** > reseller > customer > **Products** tab                                                                                                 |
| Look up a customer's purchase history                                                                                                                        | **Resellers** > reseller > customer > **Purchase History** tab                                                                                         |
| Discover and apply flexible discounts                                                                            | **Resellers** > reseller > customer > **Available Discounts** tab, or Checkout > **Review details** > discount selector, or **Available Discounts** from the left navigation menu |
| Purchase a recommended product, or add a recommended product to an upcoming renewal                                                                          | Customer page > **Personalized recommendations** section > **Buy**, or **Add to renewal**                                                              |
| Commence a Three-Year Commit, or 3YC, for Platinum partners                                                                                                  | Customer page > **Enroll** > enter subscription details > **Invite to enroll**                                                                         |
| Commence a Three-Year Commit, or 3YC, for Distributors                                                                                                       | Customer page > **Enroll**. The Bridge opens a read-only modal that directs you to initiate the amendment from your own platform through the reseller. |
| Browse and access products from pricelists, filtered by market segment, category, type, and currency                                                        | **Catalog** from the left navigation menu                                                                                                              |
| Add a product to the cart                                                                                                                                    | **Catalog** > select product > **Buy**                                                                                                                 |
| Start a new order for an existing customer                                                                                                                   | Cart > **Add customer details** > find existing customer by reseller and customer name or ID                                                           |
| Place an order                                                                                                                                                | Checkout > **Review details** > **Place Order**                                                                                                        |
| Return an order                                                                                                                                               | Customer page > **Purchase History** tab > select order > **Return**                                                                                   |
| Place a mid-term upgrade order                                                                                                                               | Customer > **Products** tab > active product > **Upgrade**                                                                                             |
| Modify subscription to add licenses                                                                                                                             | Customer > **Products** tab > active product > **Add licenses**                                                                                             |
| Add a product to an upcoming renewal                                                                                                                         | Customer page > **Edit renewal order** > **Add product**                                                                                               |
| Submit a late renewal order                                                                                                                                  | Customer page > **Edit renewal order** > **Submit late renewal**                                                                                       |
| Place an early renewal order                                                                                                                                 | Customer page > **Edit renewal order** > **Submit early renewal**                                                                                      |
| Change auto-renewal preferences                                                                                                                              | Customer > **Products** tab > active product > **Auto-renewal settings**                                                                               |

## API-only capabilities

The following capabilities are available through the Commerce Partner APIs, but are not yet exposed in the Bridge UI. Continue to use [direct API integration](../docs/index.md) for these workflows.

| Capability                                                                                         | Reference                  |
|------------------------------------------------------------------------------------------------------|-----------------------------|
| Create a reseller                                                                                     | Reseller accounts          |
| Create a customer as a standalone action, outside of the order flow                                  | Customer accounts          |
| Manage Linked Memberships                                                                             | Linked Memberships         |
| Manage worldwide, or WW, contracts via Deployments (only the simplified model of WW is supported)     | Deployments                |
| Migrate customers from VIP to VIP Marketplace                                                        | Migrate to VIP Marketplace |
| Manage notifications, including converting Pending Actions, or PAs, to orders                        | Notifications              |
| Access High Growth Offers                                                                             | High Growth Offers         |
| Manage Extended Term Customers                                                                        | Extended Term Customers    |
| Manage 3YC commit revisions and recommitment                                                          | Three-Year Commit (3YC)    |

## Related

Use the following pages for more context:

- [Overview](./index.md)
- [Getting started](./getting-started.md)
