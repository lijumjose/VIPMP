# Commit a reseller transfer

Use the `POST /v3/transfers` endpoint to commit a reseller transfer.

## Request header

| Parameter        | Description                                                                                                                                                                                                                      |
|------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| X-Request-Id     | A unique identifier for the call. The value should be reset for every single request. If this is not provided, then a request ID will be automatically generated. Using a duplicate request ID may return an error.              |
| X-Correlation-Id | **Required**. A unique identifier for the call. This is to ensure idempotency. In the case of a timeout, the retry call could include the same value. Upon receiving some response, the value should be reset for the next call. |
| Accept           | **Required**. Specifies the response type. Must be "application/json" for proper usage.                                                                                                                                          |
| Content-Type     | **Required**. Specifies the request type. Must be "application/json" for proper usage.                                                                                                                                           |
| Authorization    | **Required**. Authorization token in the form `Bearer <token>`                                                                                                                                                                   |
| X-Api-Key        | **Required**. The API Key for your integration                                                                                                                                                                                   |

## Request Body

```json
{
    "type": "RESELLER_CHANGE",
    "action": "COMMIT",
    "approvalCode": "8318322",
    "resellerId": "1000177552",
    "requestedBy": "customer-admin@email.com"
}
```

## Response body

```json
{
    "transferId": "1234567890",
    "resellerId": "1000177552",
    "customerId": "1000177552",
    "creationDate": "2024-01-24T10:38:17Z”,"status": "1002",
    "totalCount": 2,
    "items": [
        {
            "lineItemNumber": 1,
            "offerId": "65304479CA01A12",
            "quantity": 1560,
            "subscriptionId": "",
            "renewalDate": "2024-09-22"
        },
        {
            "lineItemNumber": 2,
            "offerId": "65304386CA01A12",
            "quantity": 12,
            "subscriptionId": "",
            "renewalDate": "2024-09-22"
        }
    ]
}
```

### HTTP status codes

| Status code | Description                 |
|-------------|-----------------------------|
| 201         | Reseller transfer completed |
| 400         | Bad request                 |
| 401         | Invalid Authorization token |
| 403         | Invalid API Key             |
| 404         | Invalid reseller ID         |
