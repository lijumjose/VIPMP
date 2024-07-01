# Introduction

As a partner cloud marketplace administrator, you can use the Partner APIs to create and manage both reseller and customer accounts, and place orders of select Adobe products for those Customers. Before placing an order, both reseller and customer accounts must exist. Each customer must be tied to a reseller, and each reseller must be tied to a distributor.

The Distributor → Reseller → Customer → Order relationships are unidirectionally one-to-many. That is, one distributor can have many resellers, but each reseller may only belong to one distributor. Similarly, a reseller may have many customers, but a customer can only be tied to one reseller. If a reseller wishes to work with multiple distributors, a new reseller account must be created for each distributor. This is the same for customers with multiple resellers: a new customer account must be created for each reseller. The workflow for placing an order for a new customer is as follows: 

* Marketplace presents Adobe Terms & Conditions to reseller.
* If a reseller accepts T&C, marketplace creates an account for reseller with the **Create Reseller Account** API
* Sometime prior to an order being placed, reseller creates an account for a customer and the marketplace calls the **Create Customer Account** endpoint. 
  * Customer resource is returned with link to Get Customer Account Details
  * The end customer’s address and contact information can be updated through a call to Update Customer Account
* Once a Customer account exists, Reseller places an order in marketplace. Marketplace then calls Create Order for all eligible Adobe products in the order
  * Order resource is returned with links to Get Order Details for the order itself and Get Subscription Details for any subscriptions associated with the order
  * Orders can be cancelled within 14 days of placing the order. When a Reseller cancels an order in the marketplace, the marketplace should call Cancel Order to send a cancellation to Adobe
* Subscriptions that are created by an order will be set to auto-renew by default. This option, along with the quantity of licenses to renew, can be updated using an Update Subscription Auto-Renewal call

Customers can also be transferred from the VIP buying program to VIPMP. This is done through the transfer APIs (Preview Offers, Transfer Subscriptions, and Get Transfer Details). The Preview Offers call is an optional API to preview a customer’s eligibility for transfer, as well as their current subscriptions and renewal date(s).
