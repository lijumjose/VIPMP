# High penetration renewal scenarios

You can use this documentation as a reference while finalizing the offer for the customers.

**Hints:**

- **Renewal codes:** Based on the MOQ offer, the following renewal codes are available:
  - Renewal code X: 100 MOQ
  - Renewal code Y: 250 MOQ
  - Renewal code Z: 500 MOQ
- **AD (Anniversary Date):**  The date on which 3YC contracts are renewed.
- **Current quantity:** The number of subscriptions owned by the customer.
-  **Renewal quantity:** The number of subscriptions that the customer would like to renew on the next anniversary date. This is specified in the auto-renewal configuration.

The following list gives an overview of possible scnearios. You may encounter other scenarios as well. In case of ony queries, contact [partnerapi-support@adobe.com](mailto:partnerapi-support@adobe.com).

## Scenario 1: Renew subscription with no mid-term addition and the customer is eligible

### Example 1

- **At AD:**
  - Current quantity: 5
  - Renewal quantity: MOQ X (100)
- **Next AD:**
  - Renew subscriptions based on MOQ 100

**Result:** The customer will be given an MOQ offer for the product if eligible.

### Example 2

- **AD - 7:**
  - Current quantity: 5
  - Renewal quantity: MOQ X (100)
- **AD - 3:**
  - Added 50 seats. The current quantity becomes 55.
- **AD:**
  - Renew subscription based on MOQ 100. Do not penalize the customer for the extra 5 seats.

**Result:** The customer will be given an MOQ offer for the product if eligible.

## Scenario 2: Renew subscription with no mid-term addition, and the customer isn't eligible

### Example

- **At AD:**
  - Current quantity: 120
  - Renewal quantity: 30 (base offer; not opting for MOQ)

**Result:** At the next AD, the base offer will be renewed instead of the MOQ offer.

## Scenario 3: Renew subscription with mid-term seat addition

### Example 1

- **At AD:**
  - Current quantity: 30
  - Renewal quantity: 25
  - MOQ: Null
- **AD+6 months:**
  - Mid-term upgrade to: MOQ 100 (X)
  - Number of subscription becomes 130
  - Renewal quantity: 100 (based on the MOQ they opted)
- **At renewal AD:**
  - 100 qquantity invoiced with X 100MOQ

**Result:** If the renewal quantity is greater than the MOQ, renew the subscription. If it is less, update to the MOQ and renew.

### Example 2

- **At AD:**
  - Current quantity: 30
  - Renewal quantity: 105
- **AD+6 months:**
  - Mid-term upgrade to: MOQ 100 (X)
  - Subscription becomes 130

- **At renewal AD:**
  - 105 licenses are invoiced with MOQ 100

**Result:** If the renewal quantity is greater than the MOQ, renew the subscription. If it is less, update to the MOQ and renew.

## Scenario 4: Purchase MOQ mid-term

### Example

- **AD:**
  - Current quantity: 20
  - MOQ: Null

- **AD + 3 months:**
  - Purchased MOQ 100
  - Current quantity: 120
  - Renewal quantity 120

- **AD + 6 months:**
  - Purchased MOQ 250 with 250 licenses
  - Current quantity: 370
  - Renewal quantity: 250

- **At AD:**
  - 250 quantity invoiced with Y 250MOQ

**Result:** Customers can purchase MOQ offers mid-term, even if they don’t already hold MOQ. Highest MOQ to be retained for renewal setting.
