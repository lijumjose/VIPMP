# Manage early renewals

Partners can place renewal orders ahead of the customer’s anniversary date (AD). This functionality addresses partner requests for flexibility in managing renewals and ensures immediate invoicing for early renewal orders.

The following are the key capabilities and rules that define how early renewal works in practice:

- **Place renewal orders ahead of AD**

  Partners can submit renewal orders before the customer’s AD. These orders are invoiced immediately upon placement.

- **Order return period**

  The return period starts from the date the order is placed. Return is allowed both before AD and after AD, but AD will not roll back after a return.

- **Price effective date**
  - **For non-3YC customers:** Based on the order placement date.  
  - **For 3YC customers:** Based on the license commitment start date. Early renewal does not modify the customer’s commitment cycle. When a customer under 3YC attempts to renew early (before AD), the system preserves the integrity of the 3‑year commitment. In 3YC, AD is not reset to the early renewal date.
Instead, AD is rolled over only after renewal is processed, ensuring that the next renewal cycle remains aligned with the original 3YC structure.

- **Quantity and product rules**  
  - The first early renewal order must include only existing products and quantities.
  - Offer‑level validation ensures that the ordered quantity (plus any previously renewed quantity) does not exceed the customer’s current quantity.
  - Seat or product additions are allowed only after the initial early renewal order is successfully processed.

  **Note:** EOL SKUs can be early renewed only for 3YC customers and are blocked for non‑3YC customers; EOS SKUs cannot be early renewed for any customer type.

- **Subsequent orders**  
  Partners must ensure subsequent renewal orders are placed after the completion of the first early renewal order. Concurrent (back‑to‑back) orders without waiting for order completion are not allowed.

- **Impact on renewal preferences**  
  Early renewal does not alter the customer’s renewal preferences or quantities set for auto-renewal. The renewal date remains unchanged and continues to drive system‑initiated auto‑renewals. Subscriptions will update only their anniversaryDate after early renewal; renewalDate remains the auto‑renew trigger.

## Acceptance criteria

This section outlines the conditions that must be met for early renewal orders to be valid and processed correctly.

1. **Order return period**  
   Starts from the date the order is placed.

2. **Price effective date**  
   - Order placement date or license effective date.

3. **3YC MCQ calculations**  
  Must include renewal orders placed ahead of AD. Both current‑term and next‑term MCQ checks consider early‑renewed quantities.

## API changes for early renewal

Here, you’ll learn about the technical updates made to partner APIs to support early renewal functionality.

### New order type: `EARLY_RENEWAL`

- Introduced in **Create Order API** to support early renewal scenarios.
- Validation ensures:
  - Orders can be placed only for existing products and quantities in the first early renewal.
  - Additional seats/products require a separate order after the initial early renewal.

### Key endpoints

- **Create order**  
  Supports `EARLY_RENEWAL` type with immediate invoicing.

- **Get subscription details**  
  Displays renewal eligibility and associated attributes.

- **Preview offers**  
  Reflects pricing and discount levels for early renewal orders.

## In-scope

This section lists what is included in the early renewal feature and supported scenarios.

- Splitting orders for:
  - Existing products and quantities.
  - New products and seat additions (after initial early renewal).
- Only renewal-type orders allowed until original AD after early renewal initiation.

## Out-of-scope

Here, you’ll find scenarios that are not supported by the early renewal feature.

- Early renewal for 3YC customers in their last term.
- Combining new and existing products in a single early renewal order.
- Early renewals for consumables.
- Customers with Gov-to-LGA upgrade intent.

## Business rules

This section explains the underlying rules that govern pricing, discounts, and anniversary date logic for early renewal.

- **Discount level calculation**  
  Based on qualifying license count at AD; early renewal does not affect discount level logic.

- **Anniversary date reset**  
  Upon processing the first AD renewal order, the contract AD resets to the next anniversary date.

## Partner responsibilities

Here, you’ll learn what partners need to do to ensure compliance and smooth execution of early renewal orders.

- Ensure compliance with early renewal rules.
- Manage subsequent renewal orders after initial early renewal completion.
- Validate API integration for new order type and pricing logic.
- Ensure that early renewal requests include subscriptionId for existing offers and omit it for new offers.

## Manage early renewals through APIs

Partners can use the following API options t: 

- [Preview renewal for early renewals]()
- [Create renewal order]()
- [View renewed quantity of a specific subscription]()
- [View renewed quantities of all subscriptions of a customer]()
- [Update renewal preference]()

### Preview renewal for early renewals

Use the `POST <ENV>/v3/customers/<customer-id>/orders` endpoint with  `"orderType": "PREVIEW_RENEWAL"` in the request allows partners to simulate a renewal order before the actual renewal is processed. This helps validate renewal eligibility, pricing, and offer availability in advance.


### Create renewal order

### View renewed quantity of a specific subscription

### View renewed quantities of all subscriptions of a customer

### Update renewal preference

### Error codes specific to early renewals
