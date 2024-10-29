# High growth offer renewal scenarios

You can use this documentation as a reference while finalizing the offer for the customers.

**Hints:**

- **AD (Anniversary Date):**  The date on which 3YC contracts are renewed.
- **Current quantity:** The number of subscriptions owned by the customer.
- **Renewal quantity:** The number of subscriptions that the customer wants to renew on the next anniversary date. This is specified in the auto-renewal configuration.

The following list gives an overview of possible scenarios. You may encounter other scenarios as well. In case of any queries, contact [partnerapi-support@adobe.com](mailto:partnerapi-support@adobe.com).

## Scenario 1: Renew subscription with no mid-term addition and the customer is eligible

### Example 1

<style>
table, th, table td {
  border: 1px solid black; 
        }
</style>

| At AD                                                    | Next AD                                | Decision on providing MOQ offer                         |
|----------------------------------------------------------|----------------------------------------|---------------------------------------------------------|
| - **Current quantity of Acrobat Pro:** 5 <br /> - **Renewal quantity:** MOQ 100 | - The customer renews subscriptions based on MOQ 100  | The customer gets the MOQ offer for the product.  |

### Example 2

| At AD - 7                                                   | AD - 3                                | At AD | Decision on providing MOQ offer                         |
|----------------------------------------------------------|--|----------------------------------------|---------------------------------------------------------|
| - **Current quantity of Acrobat Pro:** 5 <br /> - **Renewal quantity:** MOQ 100 | - The customer added 50 Acrobat Pro base offer seats. The current quantity becomes 55.  The current quantity becomes 55. | - The customer renews subscription based on MOQ 100.  | The customer can get an MOQ offer for the product. No penalty for the extra 5 seats.|

## Scenario 2: Renew subscription with no mid-term addition, and the customer isn't eligible

### Example

| At AD                                                    | Next AD                                | Decision on providing MOQ offer                         |
|----------------------------------------------------------|----------------------------------------|---------------------------------------------------------|
|   - **Current quantity of Acrobat Pro: 120** <br /> - **Renewal quantity:** 30 | - The customer is not opting for MOQ, and renewal quantity is 30. | The base offer will be renewed instead of the MOQ offer. |

## Scenario 3: Renew subscription with mid-term seat addition

### Example 1

| At AD                                                   |AD+6 months | At AD | Decision on providing MOQ offer                         |
|----------------------------------------------------------|--|----------------------------------------|---------------------------------------------------------|
|- **Current quantity of Acrobat Pro: 30** <br /> - **Renewal quantity:** 25 <br /> - **MOQ:** Null | - Mid-term purchase: MOQ 100 <br /> - Number of subscriptions becomes 130 <br />  - Renewal quantity: 100 (based on the MOQ they opted) | - 100 licenses are invoiced with MOQ 100 | The customer will be renewed with 100 MOQ because the renewal quantity earlier opted will be overridden by MOQ quantity because the earlier opted renewal quantity is not sufficient to maintain the MOQ |

### Example 2

| At AD                                                   | AD+6 months    | At AD | Decision on providing MOQ offer                         |
|----------------------------------------------------------|--|----------------------------------------|---------------------------------------------------------|
|- **Current quantity of Acrobat Pro:** 30 <br /> - **Renewal quantity:** 105 |   - **Mid-term purchase:** MOQ 100 <br />  - **Subscription becomes:** 130|  - 105 licenses are invoiced with MOQ 100 | If the renewal quantity is greater than the MOQ, the customer can renew the subscription. If it is less, update the MOQ and renew. |

## Scenario 4: Purchase MOQ at mid-term

### Example

| At AD                                                   | AD + 3 months      | AD + 6 months| At AD | Decision on providing MOQ offer                         |
|----------------------------------------------------------|--|----------------------------------------|---------------------------------------------------------|--|
|- **Current quantity of Acrobat Pro:** 20 <br /> - **MOQ:** Null |   - Purchased MOQ 100 <br /> - Current quantity: 120 <br /> - Renewal quantity 120 |  - Purchased MOQ 250 with 250 licenses <br /> - Current quantity: 370 <br /> - Renewal quantity: 250  |- 250 licesnses are invoiced with 250 MOQ  | Customers can purchase MOQ offers mid-term, even if they don’t already hold MOQ. The highest MOQ needs to be retained for renewal setting.|
