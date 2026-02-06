# Get licenses pending partner order

Use the `GET /v3/customers/<customer-id>/open-acquisitions` to get all the licenses for the customer and their corresponding quantities for which the partner is yet to place an order. Partners can use this API alongside the [notification](../notification-management/index.md) API to fetch all the products and quantities for each customer for which an order has not been placed.

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
  "customerId": "1005375278",
  "resellerId": "1000214906",
  "licenseCount": 2,
  "unpaidLicenses": [
    {
      "referenceId": "PO281097476551717943",
      "creationDate": "2024-03-28T06:03:50Z",
      "expiryDate": "2024-04-04T06:03:50Z",
      "quantity": 1,
      "productName": "Audition",
      "baseOfferId": "30006208CA01A12"
    },
    {
      "referenceId": "PO281097476551717943",
      "creationDate": "2024-03-28T06:03:51Z",
      "expiryDate": "2024-04-04T06:03:51Z",
      "quantity": 1,
      "productName": "Acrobat Pro",
      "baseOfferId": "65304921CA01A12"
    }
  ]
}
```

### HTTP status codes

| Status code | Description                                       |
| ----------- | ------------------------------------------------- |
| 200         | Successfully returned open seat addition details. |
| 400         | Bad request                                       |
| 401         | Invalid Authorization token                       |
| 403         | Invalid API Key                                   |
