# Get transfer details

Use the `GET /v3/memberships/<membership-id>/transfers/<transfer-id>` API endpoint to get details of membership transfer from VIP to VIP-MP.

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
    "transferId": "5555luaigdfads555",
    "customerId": "10008675",
    "membershipId": "12345678",
    "resellerId": "999888777",
    "creationDate": "2019-12-10T22:49:55Z",
    "status": "1000",
    "lineItems": [
        {
            "lineItemNumber": 1,
            "offerId": "12345678CA01A12",
            "quantity": 10,
            "subscriptionId": "8675309",
            "currencyCode": "USD",
            "deploymentId": "12345"
        }
    ],
    "links": {
        "self": {
            "uri": "/v3/memberships/12345678/transfers/5555luaigdfads555",
            "method": "GET",
            "headers": []
        }
    }
}
```

## HTTP status codes

| Status code | Description                            |
|-------------|----------------------------------------|
| 202         | Transfer request received or initiated |
| 400         | Bad request                            |
| 401         | Invalid Authorization token            |
| 403         | Invalid API Key                        |
| 404         | Invalid membership ID or transfer ID   |
