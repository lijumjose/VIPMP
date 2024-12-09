# High Growth Offer scenarios

Customers can add licenses or seats mid-term or at the anniversary date, benefiting from the same discount rate as their original MOQ.

**Example scenario**

- Initial Purchase: MOQ 100
- Additional Licenses: 300 (Total becomes 400)
- Discount: Same as MOQ 100

Adobe defines the High Growth Offers, and the corresponding offer ID is shared with the partners. For example:

- 65304479CA14X12 = Acrobat Pro 100 MOQ
- 65304479CA14Y12 = Acrobat Pro 250 MOQ
- 65304479CA14Z12 = Acrobat Pro 500 MOQ

You can use this documentation as a reference while finalizing the offer for the customers.

**Hints:**

- AD (Anniversary Date): The date on which 3YC contracts are renewed.
- Current quantity: The number of subscriptions owned by the customer.
- Renewal quantity: The number of subscriptions the customer wants to renew on the next anniversary date. This is specified in the auto-renewal configuration.

The following list gives an overview of possible scenarios. You may encounter other scenarios as well. In case of any queries, contact [partnerapi-support@adobe.com](mailto:partnerapi-support@adobe.com).

### Scenario 1: Normal renewal of subscription at the anniversary date

**Example 1:**

|Before AD                                                    | At  AD                                | Next AD                         |
|----------------------------------------------------------|----------------------------------------|---------------------------------------------------------|
|- Quantity of Acrobat Pro: 5 <br />- Opted for: MOQ 100 using Update Subscription API | MOQ 100 of Acro Pro will get renewed  | MOQ 100 of Acro Pro will get renewed until the 3YC term ends.  |

### Scenario 2: Customer adds Acro Pro seats after opting for MOQ 100

| Before AD                  | At AD - 7                                                                        | AD - 3                                                                               | At AD                                  | At next AD                                                    |
|----------------------------|----------------------------------------------------------------------------------|--------------------------------------------------------------------------------------|----------------------------------------|---------------------------------------------------------------|
| Quantity of Acrobat Pro: 5 | Opted for MOQ 100 by using the Update Subscription API with renewalQuantity 100. | The customer added 50 Acrobat Pro base offer seats. The current quantity becomes 55. | MOQ 100 of Acro Pro will get renewed. <br />The customer will still receive the MOQ offer and will not be penalized for adding Acro Pro seats after opting for MOQ.   | MOQ 100 of Acro Pro will get renewed until the 3YC term ends. |

### Scenario 3: Customer does not opt for Acrobat Pro MOQ

**Example:**

| Before AD                                               | At AD                                |
|----------------------------------------------------------|----------------------------------------|
| - Quantity of Acrobat Pro: 120 <br /> - Renewal quantity: 30 | The customer does not opt for MOQ offers. <br /> The base offer of Acrobat Pro will get renewed with the renewal quantity 30. |

### Scenario 4: Customer purchases MOQ offer in the mid-term, after setting renewalQuantity to a lower value

**Example:**

|Before AD      |AD-7 | At AD |
|-------------------------------------------------------------|---------------------------------------------------------|--|
|- Quantity of Acrobat Pro: 30 <br /> - Renewal quantity: 25  | Mid-term purchase: MOQ 100 <br /> - Number of licenses of Acro Pro becomes 130 <br />- Renewal quantity: 100 (based on the MOQ purchased) |  100 licenses of Acro Pro with MOQ 100 discount are renewed and invoiced. <br /> The customer will be renewed with 100 MOQ because the renewal quantity earlier opted will be overridden by the MOQ quantity because the earlier opted renewal quantity is not sufficient to maintain the MOQ.|

### Scenario 5: Customer purchases MOQ offer in the mid-term after setting renewalQuantity to a higher value

**Example:**

|Before AD      |Before AD (For example, last AD+6 months) | At AD |
|-------------------------------------------------------------|---------------------------------------------------------|--|
|- Quantity of Acrobat Pro: 30 <br /> - Renewal quantity: 105 |- Mid-term purchase: MOQ 100 <br /> - Number of licenses of Acrobat Pro becomes: 130| 105 licenses of Acrobat Pro with MOQ 100 discount are renewed and invoiced. <br /> The customer will be renewed with 105 licenses of MOQ100 because the renewal quantity of 105 is sufficient for the MOQ offer. |

### Scenario 6: Customer purchases MOQ offer in the mid-term and later again purchases higher MOQ before renewal

Customers can purchase MOQ offers mid-term, even if they don’t already hold MOQ. The highest MOQ needs to be retained for renewal setting.

**Example:**

|Before AD      |Mid-term purchase 1 (Last AD +3 months) | Mid-term purchase 2 (Last AD + 6 months) | At AD |
|-------------------------------------------------------------|---------------------------------------------------------|--|--|
|Customer does not have Acrobat Pro |- Purchased MOQ 100 <br /> - Number of Acro Pro licenses: 100 <br /> - Renewal quantity: 100 |- Purchased MOQ 250 <br /> - Number of licenses: 350 <br /> - Renewal quantity: 250 |- 250 licenses will be renewed for the customer with MOQ 250 offer discount. |
