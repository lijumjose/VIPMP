# Manage customer accounts

<<<<<<< HEAD
**Sai:** `Need an overview of customer accounts, market segments and three-year commits. I just added some general info about customer accounts.`

Managing customer accounts is vital in enabling the purchase of products. You can use  the following APIs to manage customer accounts:

* [Create a customer account](./create_customer_account.md)
* [Get details of a customer account](./get_customer_account.md)
* [Get license of a customer](./get_licenses.md)
* [Update a customer account](update_customer_account.md)

As part of customer account management, you need to take care of the following use cases as well: 

* [Manage market segments](./market_segment.md)
* [Manage three-year commits](./three_year_commit.md)
=======
**Sai:** Need an overview of customer accounts, market segments and three-year commits.

## Market segments

Market segmentation is an internal convention used to inform the internal stakeholders about the product or business intent, to have one or more of the following differentiations:

* **Price range**
    **Example**: Pricing for the Education segment is typically lower than that for the Commercial pricing.
* **Product certification**
    **Example**: Education-ready and Government-ready software and services are required to meet more stringent Adobe legal, safety, privacy, and trust requirements.
* **Purchasing qualification**
    Example: Customers are typically required to prove their association with government-related agencies or educational institutions to buy the product at a different price range. For individuals buying education plans on Adobe-direct, Adobe verifies their education status with a third-party identity verification service.

These are the three market segments available for Adobe products:

| Value | Description                   |
|-------|-------------------------------|
| COM   | Commercial <br /> (default) |
| EDU   | Education                     |
| GOV   | Government                    |

The education market segment mentioned in the above table is further divided into K-12, higher education, and non-profit, as listed in the following table:

| Value      | Description                               | Offers available to purchase                                                  |
|------------|------------------|--------------|
| K_12       | K-12 School (Primary or Secondary School) | - EDU offers without a sub-segment.  <br /> - EDU offers with K-12 sub-segment. |
| HIGHER_ED  | Higher Education Institution              | - EDU offers without a sub-segment. <br /> - EDU offers with HED sub-segment.     |
| NON_PROFIT | Nonprofit Organization                    | - EDU offers without a sub-segment.        |
>>>>>>> f79d4dfc06edc2e93d385d2e389ff122b2f754f1
