# Get reseller transfer details

Use the `GET /v3/transfers/<transfer-id>` API endpoint to get details of a reseller transfer.

**Note:** Currently, this API returns only transfers created through the reseller change process (`POST /v3/transfers`). In subsequent releases, the support will be added for using the GET endpoint also for transfers.

## Request header

| Parameter        | Description                                                                                                                                                                                                                      |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
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
  "transferId": "1234567890",
  "resellerId": "1000177552",
  "customerId": "1000177552",
  "creationDate": "2024-01-24T10:38:17Z",
  "status": "1000",
  "totalCount": 2,
  "items": [
    {
      "lineItemNumber": 1,
      "offerId": "65304479CA01A12",
      "quantity": 1560,
      "subscriptionId": "abcdefg",
      "renewalDate": "2024-09-22"
    },
    {
      "lineItemNumber": 2,
      "offerId": "65304386CA01A12",
      "quantity": 12,
      "subscriptionId": "hijklmnop",
      "renewalDate": "2024-09-22"
    }
  ]
}
```

### HTTP status codes

| Status code | Description                                   |
| ----------- | --------------------------------------------- |
| 200         | Reseller change details successfully returned |
| 400         | Bad request                                   |
| 401         | Invalid Authorization token                   |
| 403         | Invalid API Key                               |
| 404         | Invalid transfer ID                           |
