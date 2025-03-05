# Update order

You can modify the `externalReferenceId` attribute of an order by using the `PATCH /v3/customers/<customer-id>/orders/<order-id>` endpoint.

## Assumptions

Ensure that you are aware of the following before updating an order:

- Only `externalReferenceId` may be updated through this API.
- The updated `externalReferenceId` will be reflected in the monthly reconciliation file only if the update is made before the reconciliation file is generated.

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

```json
{
  "externalReferenceId": "34567"
}
```

## Response body

```json
{
  "externalReferenceId": "34567",
  "orderId": "0123456789",
  "customerId": "9876543210",
  "orderType": "NEW",
  "referenceOrderId": "",
  "referencedOrderId": "",
  "currencyCode": "USD",
  "creationDate": "2019-05-02T22:49:54Z",
  "status": "1000",
  "lineItems": [
    {
      "extLineItemNumber": 4,
      "offerId": "80004567EA01A12",
      "quantity": 1,
      "subscriptionId": "86756309",
      "status": "1000",
      "currencyCode": "USD",
      "deploymentId": "12345"
    }
  ]
}
```

### HTTP status codes

| Status code | Description                  |
| ----------- | ---------------------------- |
| 200         | Account successfully updated |
| 400         | Bad request                  |
| 401         | Invalid Authorization token  |
| 403         | Invalid API Key              |
| 404         | Invalid customer ID          |
