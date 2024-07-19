# Get details of a customer's subscriptions

Use the `GET /v3/customers/<customer-id>/subscriptions` API endpoint to get details of a customer's subscriptions.

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
    "totalCount": 2,
    "items": [
        { Subscription resource
        },
        { Subscription resource
        }
    ]
}
```

**Notes:**

- Only the active subscriptions for VIP customers are included in the response.
- No parameters or filters are available at this time.

## HTTP status codes

| Status code | Description                                |
|-------------|--------------------------------------------|
| 200         | Subscription details successfully returned |
| 400         | Bad request                                |
| 401         | Invalid Authorization token                |
| 403         | Invalid API Key                            |
| 404         | Invalid customer ID                        |
