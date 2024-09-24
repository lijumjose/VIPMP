# Manage three-year contratcs (3YC)

The 3-Year Commit (3YC) program is a loyalty initiative that offers customers greater discounts and a price lock for three terms (the current term plus two additional terms). Customers must commit to purchasing and maintaining a minimum quantity throughout the 3-year period.

To determine the correct discount level, use the [Preview Order API](/src/pages/docs/migration/preview_offers.md). This API considers the customer’s 3YC commitment and any accepted commitment requests to return the Offer ID with the best discount.

## 3YC enrollment methods for 3YC

Customers can enroll in 3YC through four different methods. In all cases, they must accept the commitment terms, such as minimum quantities and commitment end date, in the Adobe Admin Console before receiving any discounts.

- **New customer:** During customer creation, partners  may set the requested minimum quantities, starting the 3YC customer acceptance workflow after the account becomes active. Use the CPAPI Postman collection for this process. Refer to the External API documentation for more details.

- **Existing customer (partner-initiated):** Existing customers, whether they have an active 3YC or not, can be updated with new minimum quantities. This starts the 3YC customer acceptance workflow once the account is updated. Refer to the External API documentation for more information.
- **Existing customer (customer-initiated):** Existing customers not already in 3YC but meeting the requirements may receive an offer in the Adobe Admin Console to enter 3YC with minimum quantities set to their current levels.
- **Existing VIP customer (partner-initiated):** Existing VIP customers with active 3YC can be transferred to VIP MP, retaining their 3YC commitment terms. These terms can be retrieved using the GET Customer API. To create memberships with 3YC, refer to the sections ‘Membership – Quick Create with 3YC’ and ‘Membership – Custom Create with 3YC’.

## 3YC acceptance (Partner- and Adobe-Initiated)

Whether 3YC is initiated by a partner or Adobe, the customer must accept the commitment in the Adobe Admin Console.

### Partner-initiated 3YC acceptance (partner has already requested minimum quantities)

If a 3YC commitment request is placed through an API, the customer will see a **Accept/Reject 3YC commitment** button on viewing the customer details under **Manage records--> Customers--> Search**.

![Accept/Reject 3YC commitment terms from Sandbox Portal - 1](/src/pages/sandbox/image/3yc_1.png)

The customer can Accept/Reject the 3YC terms.

![Accept/Reject 3YC commitment terms from Sandbox Portal - 2](/src/pages/sandbox/image/3yc_2.png)

### Adobe-initiated 3YC enrollment

The customer can receive an **Enroll for 3YC** option if he meets the eligibility criteria, that is, he has already purchased at least 10 licenses.

![Accept/Reject 3YC commitment terms from Sandbox Portal - 2](/src/pages/sandbox/image/3yc_3.png)
