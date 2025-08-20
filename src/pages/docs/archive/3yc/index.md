# Manage Three-Year Commits

The Three-Year Commit (3YC) loyalty program offers customers a higher discount level and a price lock for three terms (the current term plus two additional terms). Customers must commit to purchasing and maintaining a minimum quantity throughout the 3-year period.

Using the Preview Order API to determine the appropriate discount level is crucial. The [Preview Order](../../migration/preview_offers.md) API considers the customer's 3YC commitment and any accepted commitment requests to provide the Offer ID with the best discount.

## 3YC Workflows

There are four ways for a customer to enroll in 3YC. In all scenarios, the customer must accept the commitment terms (the minimum quantities and commitment end date) in the Adobe Admin Console before receiving any discounts.

1. New Customer: During customer creation, partners may set the requested minimum quantities, which would start the 3YC customer acceptance workflow after the account becomes active. API endpoints:
   - [POST Create Customer API](../../customer_account/create_customer_account.md)
   - [GET Customer API](../../customer_account/get_customer_account.md)
2. Existing Customer: Existing customers (with active 3YC or not) can be updated with new requested minimum quantities, which would start the 3YC customer acceptance workflow once the account is updated from the request. API endpoints:
   - [PATCH Update Customer API](../../customer_account/update_customer_account.md)
   - [GET Customer API](../../customer_account/get_customer_account.md)
3. Existing VIP Customer: Existing VIP customers with active 3YC can be transferred to VIPMP and retain their 3YC commitment terms, which can be retrieved using the GET Customer API. API endpoints:

   - [POST Transfer Subscriptions API](../../migration/transfer_subscription.md)
   - [GET Customer API](../../customer_account/get_customer_account.md)

## 3YC API Changes

### Customer Resource changes

- New `benefits` array of benefit objects.
- New potential 3YC discount levels:
  - LICENSE: 12, 13, 14
  - CONSUMABLES: TB, TC, TD, TE, TF, TG
- Discount levels will be updated whenever the commitment status changes (new commitment or expiration).
- During order preview, if the customer has an ACCEPTED `commitmentRequest` for a quantity that would be reached in that order, the preview response uses the discount level for that `commitmentRequest`.
  - Placing the order for that quantity would make the `commitmentRequest` COMMITTED, and create the `commitment` object.
- Customer can enroll in 3YC for either LICENSE or CONSUMABLES or both.
  - If only enrolled for one, there is no minimum quantity for the other type and the customer gets no discount for that type.
  - Can enroll in one `offerType` first and then add the other later. The committed `offerType`, as well as the new `offerType`, must be included in `commitmentRequest`.

The following sections provide more details about the changes to the objects:

#### commitmentRequest object

Sample request:

```json
{
  "companyProfile": {
    "companyName": "Fairmont",
    "preferredLanguage": "en-US",
    "address": {
      "country": "US",
      "region": "CA",
      "city": "San Jose",
      "addressLine1": "200 Fairmont Ave",
      "addressLine2": "Apt 123",
      "postalCode": "95110-1234",
      "phoneNumber": "800-123-4567"
    },
    "contacts": []
  },
  "benefits": [
    {
      "type": "THREE_YEAR_COMMIT",
      "commitmentRequest": {
        "minimumQuantities": [
          {
            "offerType": "LICENSE",
            "quantity": 10
          },
          {
            "offerType": "CONSUMABLES",
            "quantity": 1000
          }
        ]
      }
    }
  ]
}
```

**Notes:**

- Used to request 3YC for a customer without a commitment.
- Used to request 3YC quantity increase for a customer with an existing commitment.
- Overwrites existing `commitmentRequest`.
- Cannot be requested alongside `recommitmentRequest` or if customer has an existing `recommitmentRequest`.
- Does not need to include quantities for all `offerTypes`.
- endDate will be 2 years after the current `cotermDate`.
  - If the customer does not have a `cotermDate` (they have not placed an order) at the time of acceptance, the `endDate` will be 3 years from the acceptance date and the `cotermDate` will be set at that point.

#### recommitmentRequest object

Sample request:

```json
{
  "companyProfile": {
    "companyName": "Fairmont",
    "preferredLanguage": "en-US",
    "address": {
      "country": "US",
      "region": "CA",
      "city": "San Jose",
      "addressLine1": "200 Fairmont Ave",
      "addressLine2": "Apt 123",
      "postalCode": "95110-1234",
      "phoneNumber": "800-123-4567"
    },
    "contacts": []
  },
  "benefits": [
    {
      "type": "THREE_YEAR_COMMIT",
      "recommitmentRequest": {
        "minimumQuantities": [
          {
            "offerType": "LICENSE",
            "quantity": 10
          },
          {
            "offerType": "CONSUMABLES",
            "quantity": 1000
          }
        ]
      }
    }
  ]
}
```

## 3YC flow diagrams

The diagram below shows the lifecycle of the commitmentRequest object. The same lifecycle applies to the recommitmentRequest, with the difference being that recommitmentRequest can’t move to COMMITTED status until the current commitment ends.

![3YC flow diagram](../../image/3yc_flow_diagram.jpg)
