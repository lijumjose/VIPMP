# Preview offers

Use the `GET /v3/memberships/<membership-id>/offers` API endpoint to preview offers of a membership.

## Assumptions

Ensure that you are aware of the following before fetching the offer details:

- Each item corresponds to one subscription.
- The subscription is active until the `renewalDate`.
  - All subscriptions will have _auto-renewal_ enabled by default upon transfer, so they will renew on the `renewalDate`.
- If the customer is in the renewal window after their anniversary date and has not renewed some products, the non-renewed products will be included with `renewalDate` in the past. These items will be created as inactive subscriptions – the same behavior as if the customer had products in VIP-MP that did not renew.
- Benefits and discount will be shown if customer is a 3yc customer.

## Request header

| Parameter        | Description                                                                                                                                                                                                                      |
|------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| X-Request-Id     | A unique identifier for the call. The value should be reset for every single request. If this is not provided, then a request ID will be automatically generated. Using a duplicate request ID may return an error.              |
| X-Correlation-Id | **Required**. A unique identifier for the call. This is to ensure idempotency. In the case of a timeout, the retry call could include the same value. Upon receiving some response, the value should be reset for the next call. |
| Accept           | **Required**. Specifies the response type. Must be "application/json" for proper usage.                                                                                                                                          |
| Content-Type     | **Required**. Specifies the request type. Must be "application/json" for proper usage.                                                                                                                                           |
| Authorization    | **Required**. Authorization token in the form `Bearer <token>`                                                                                                                                                                   |
| X-Api-Key        | **Required**. The API Key for your integration                                                                                                                                                                                   |

## Query parameters

| Parameter           | Values        | Default | Description                                                                         |
|---------------------|---------------|---------|-------------------------------------------------------------------------------------|
| ignore-order-return | true or false | false   | If true, customers with returnable purchases will be eligible for transfer.         |
| expire-open-pas     | true or false | false   | If true, customers with open Purchase Authorizations will be eligible for transfer. |

## Request body

None.

## Response body

```json
{
    "totalCount": 1,
    "items": [
        {
            "offerId": "12345678CA01A12", // Offer ID for marketplace to use 
            "currencyCode" : "USD",
            "quantity": 10
    "renewalDate": "2020-06-08"
        }
    ],
    "benefits": [
        {
            "type": "THREE_YEAR_COMMIT",
            "commitment": {
                "startDate": "2024-05-14",
                "endDate": "2027-04-11",
                "status": "ACTIVE",
                "minimumQuantities": [
                    {
                        "offerType": "LICENSE",
                        "quantity": 11
                    }
                ]
            },
            "commitmentRequest": {
                "startDate": "2027-04-12",
                "endDate": "2030-04-11",
                "status": "ACCEPTED",
                "minimumQuantities": [
                    {
                        "offerType": "LICENSE",
                        "quantity": 11
                    }
                ]
            },
        }
    ],
    "discounts": [
        {
            "level": "12",
            "offerType": "3YC"
        }
    ]
}
```

## HTTP status codes

| Status code | Description                 |
|-------------|-----------------------------|
| 200         | Preview returned            |
| 400         | Bad request                 |
| 401         | Invalid Authorization token |
| 403         | Invalid API Key             |
| 404         | Invalid membership ID       |
