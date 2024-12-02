# Get details of a specific subscription

Use the `GET /v3/customers/<customer-id>/subscriptions/<subscription-id>` API endpoint to get details of a specific subscription.

## Assumptions

Ensure that you are aware of the following before trying out this API:

- Each subscription corresponds to a product or group of products.
- Subscriptions are created for line items upon order creation.
  - Link to the subscription will be added to `LineItem`
- New product orders with an existing subscription do not create a new one.
  - Quantity will be added to the existing subscription.
- `currentQuantity` is the current license quantity. It may differ from the ordered quantity while processing the orders.
- `usedQuantity` is the license or consumable usage count.
- `offerId` is the base discount level offer ID.
- `renewalDate` will be the customer’s `cotermDate` for most subscriptions.
  - Stock Credit Pack subscriptions will have a `renewalDate` as 1 year from the order date.
- `allowedActions` shows the actions allowed on a subscription.  Currently, only `MANUAL_RENEWAL` is available as the allowed action.

## Request header

| Parameter        | Description                                                                                                                                                                                                                      |
|------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| X-Request-Id     | A unique identifier for the call. The value should be reset for every single request. If this is not provided, then a request ID will be automatically generated. Using a duplicate request ID may return an error.              |
| X-Correlation-Id | **Required**. A unique identifier for the call. This is to ensure idempotency. In the case of a timeout, the retry call could include the same value. Upon receiving some response, the value should be reset for the next call. |
| Accept           | **Required**. Specifies the response type. Must be "application/json" for proper usage.                                                                                                                                          |
| Content-Type     | **Required**. Specifies the request type. Must be "application/json" for proper usage.                                                                                                                                           |
| Authorization    | **Required**. Authorization token in the form `Bearer <token>`                                                                                                                                                                   |
| X-Api-Key        | **Required**. The API Key for your integration                                                                                                                                                                                   |

## Request body

None.

## Response body

```json
{
    "subscriptionId" : "8675309",
    "currentQuantity" : 10,
    "usedQuantity" : 2,
    "offerId" : "65304470CA01012",
    "autoRenewal" : {
    "enabled" : true,
    "renewalQuantity" : 5
    },
    "renewalDate" : "2020-05-20",
    "creationDate" : "2019-05-20T22:49:55Z",
    "deploymentId" : "12345",
    "currencyCode" : "USD",
    "status" : "1000",
    "links" : {
    "self" : {},
}
```

The `MANUAL_RENEWAL` value of the `allowedActions` field indicates whether a subscription can be selected for manual renewal. Sample response is as follows:

```json

{
    "subscriptionId": "1c3a4517c44cfc925704fe942a79abNA",
    "offerId": "65304479CA01A12",
    "currentQuantity": 2,
    "usedQuantity": 0,
    "autoRenewal": {
        "enabled": false,
        "renewalQuantity": 2
    },
    "creationDate": "2024-09-13T09:22:13Z",
    "renewalDate": "2025-09-13",
    "status": "1004",
    "currencyCode": "USD",
    "allowedActions": [
        "MANUAL_RENEWAL"
    ] 

    "links": {
        "self": {
            "uri": "/v3/customers/1005610729/subscriptions/1c3a4517c44cfc925704fe942a79abNA",
            "method": "GET",
            "headers": []
        }
    }
}

```

## HTTP status codes

| Status code | Description                                |
|-------------|--------------------------------------------|
| 200         | Subscription details successfully returned |
| 400         | Bad request                                |
| 401         | Invalid Authorization token                |
| 403         | Invalid API Key                            |
| 404         | Invalid customer or subscription ID        |
