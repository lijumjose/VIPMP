# High penetration offer renewal scenarios

You can use this documentation as a reference while finalizing the offer for the customers.

**Hints:**

- **AD (Anniversary Date):**  The date on which 3YC contracts are renewed.
- **Current quantity:** The number of subscriptions owned by the customer.
- **Renewal quantity:** The number of subscriptions that the customer wants to renew on the next anniversary date. This is specified in the auto-renewal configuration.

The following list gives an overview of possible scnearios. You may encounter other scenarios as well. In case of ony queries, contact [partnerapi-support@adobe.com](mailto:partnerapi-support@adobe.com).

## Scenario 1: Renew subscription with no mid-term addition and the customer is eligible

### Example 1

| At AD                                                    | Next AD                                | Decision on providing MOQ offer                         |
|----------------------------------------------------------|----------------------------------------|---------------------------------------------------------|
| - **Current quantity:** 5 <br /> - **Renewal quantity:** MOQ 100 | - Renew subscriptions based on MOQ 100 | The customer will be given an MOQ offer for the product. |

### Example 2

| At AD - 7                                                   | AD - 3                                | At AD | Decision on providing MOQ offer                         |
|----------------------------------------------------------|--|----------------------------------------|---------------------------------------------------------|
| - **Current quantity:** 5 <br /> - **Renewal quantity:** MOQ 100 | - Added 50 seats. The current quantity becomes 55. | - Renew subscription based on MOQ 100. Do not penalize the customer for the extra 5 seats. | The customer will be given an MOQ offer for the product. |

## Scenario 2: Renew subscription with no mid-term addition, and the customer isn't eligible

### Example

| At AD                                                    | Next AD                                | Decision on providing MOQ offer                         |
|----------------------------------------------------------|----------------------------------------|---------------------------------------------------------|
|   - **Current quantity: 120** <br /> - **Renewal quantity:** 30 | - Not opting for MOQ and renewal quantity is 30. | The base offer will be renewed instead of the MOQ offer. |

## Scenario 3: Renew subscription with mid-term seat addition

### Example 1

| At AD                                                   |AD+6 months | At AD | Decision on providing MOQ offer                         |
|----------------------------------------------------------|--|----------------------------------------|---------------------------------------------------------|
|- **Current quantity: 30** <br /> - **Renewal quantity:** 25 <br /> - **MOQ:** Null | - Mid-term upgrade to: MOQ 100 <br /> - Number of subscription becomes 130 <br />  - Renewal quantity: 100 (based on the MOQ they opted) | - 100 qquantity invoiced with MOQ 100 | If the renewal quantity is greater than the MOQ, renew the subscription. If it is less, update to the MOQ and renew |

### Example 2

| At AD                                                   | AD+6 months    | At AD | Decision on providing MOQ offer                         |
|----------------------------------------------------------|--|----------------------------------------|---------------------------------------------------------|
|- **Current quantity:** 30 <br /> - **Renewal quantity:** 105 |   - **Mid-term upgrade to:** MOQ 100 <br />  - **Subscription becomes:** 130|  - 105 licenses are invoiced with MOQ 100 | If the renewal quantity is greater than the MOQ, renew the subscription. If it is less, update to the MOQ and renew. |

## Scenario 4: Purchase MOQ at mid-term

### Example

| At AD                                                   | AD + 3 months      | AD + 6 months| At AD | Decision on providing MOQ offer                         |
|----------------------------------------------------------|--|----------------------------------------|---------------------------------------------------------|--|
|- **Current quantity:** 20 <br /> - **MOQ:** Null |   - Purchased MOQ 100 <br /> - Current quantity: 120 <br /> - Renewal quantity 120 |  - Purchased MOQ 250 with 250 licenses <br /> - Current quantity: 370 <br /> - Renewal quantity: 250  |- 250 quantity invoiced with 250 MOQ  | Customers can purchase MOQ offers mid-term, even if they don’t already hold MOQ. The highest MOQ needs to be retained for renewal setting.|
