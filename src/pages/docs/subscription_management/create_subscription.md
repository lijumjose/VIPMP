# Create subscription

Use the `POST /v3/customers/<customer-id>/subscriptions` endpoint to create new subscriptions.

**Note:** Adobe Commerce Partner APIs do not allow creating subscriptions for consumable items, including Adobe Stock credit packs and Adobe Sign transactions.

## Assumptions

- `Enabled` flag can only be set to true
- `renewalQuantity` field is mandatory for the subscription creation
- Creation of subscription is allowed only when a customer intends to add a product (that they are not currently subscribed to) during the next auto-renewal.
- Discount level is calculated and applied on the anniversary date with Renewal order. The subscription becomes active with success renewal.
- Customers with no active subscriptions are not allowed to create subscription
- Eligibility checks are evaluated while accepting the create request
- Creating a subscription is allowed only during current date is between 30 days prior to anniversary date to 3 days prior to anniversary date.
- Global customers can create subscriptions. To do so, they need to include the `currencyCode` in their request. For subscriptions outside the customer’s home country, both `currencyCode` and `deploymentID` must be included in the request.

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

```json
{
  "offerId": "65304470CA01012",
  "autoRenewal": {
    "enabled": true,
    "renewalQuantity": 100,
    "renewalCode": "MOQ_100"
  }
}
```

For global customers to create subscriptions outside the customer’s home country, both `currencyCode` and `deploymentID` must be included in the request, as illustrated in the following example:

```json
{
    "offerId": "65304481CA01A12",
    "autoRenewal": {
        "enabled": true,
        "renewalQuantity": 20,
        "renewalCode": "MOQ_100"
    },
    "deploymentId": "PR1400001758",
    "currencyCode": "JPY"
}
```

## Response body

```json
{
  "subscriptionId": "bb9daad8bc4354a4b38006b75704ceNA",
  "offerId": "65304470CA01012",
  "currentQuantity": 0,
  "autoRenewal": {
    "enabled": true,
    "renewalQuantity": 100,
    "renewalCode": "MOQ_100"
  },
  "creationDate": "2024-07-11T02:42:15Z",
  "renewalDate": "2025-04-25",
  "status": "1009",
  "links": {
    "self": {
      "uri": "/v3/customers/P1005053489/subscriptions/bb9daad8bc4354a4b38006b75704ceNA",
      "method": "GET",
      "headers": []
    }
  }
}
```

## HTTP status codes

| Status code | Description                 |
| ----------- | --------------------------- |
| 200         | AutoRenewal updated         |
| 400         | Bad request                 |
| 401         | Invalid Authorization token |
| 403         | Invalid API Key             |
| 404         | Invalid customer ID         |
