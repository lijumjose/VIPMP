# Preview a reseller transfer

Use `POST /v3/transfers` endpoint to preview a reseller transfer.

## Request header

| Parameter        | Description                                                                                                                                                                                                                      |
|------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| X-Request-Id     | A unique identifier for the call. The value should be reset for every single request. If this is not provided, then a request ID will be automatically generated. Using a duplicate request ID may return an error.              |
| X-Correlation-Id | **Required**. A unique identifier for the call. This is to ensure idempotency. In the case of a timeout, the retry call could include the same value. Upon receiving some response, the value should be reset for the next call. |
| Accept           | **Required**. Specifies the response type. Must be "application/json" for proper usage.                                                                                                                                          |
| Content-Type     | **Required**. Specifies the request type. Must be "application/json" for proper usage.                                                                                                                                           |
| Authorization    | **Required**. Authorization token in the form `Bearer <token>`                                                                                                                                                                   |
| X-Api-Key        | **Required**. The API Key for your integration                                                                                                                                                                                   |

**Note:** Details of the request and response parameters are available in the [Resources](../references/resources.md#reseller-top-level-resource) section of this documentation.

## Request Body

```json
{
  "type": "RESELLER_CHANGE",
  "action": "PREVIEW",
  "approvalCode": "8318322",
  "resellerId": "1000177552",
  "requestedBy": "customer-admin@email.com"
}
```

## Response body

```json
{
  "transferId": "",
  "customerId": "1005472660",
  "resellerId": "1000187468",
  "approval": {
    "code": "62159861",
    "expiry": "2024-07-06T06:04:01Z"
  },
  "creationDate": "2024-07-03T06:04:01Z",
  "status": "1002",
  "totalCount": 1,
  "lineItems": [
    {
      "lineItemNumber": 1,
      "offerId": "65304479CA01A12",
      "quantity": 110,
      "subscriptionId": "9bec01597a466898af170a5a203bb1NA",
      "renewalDate": "2025-06-10T16:22:08.000+00:00",
      "deploymentId": "345434541",
      "currencyCode": "USD"
    }
  ],
  "benefits": [
    {
      "type": "THREE_YEAR_COMMIT",
      "commitment": {
        "startDate": "2024-06-10",
        "endDate": "2027-06-09",
        "status": "COMMITTED",
        "minimumQuantities": [
          {
            "offerType": "LICENSE",
            "quantity": 10
          }
        ]
      },
      "commitmentRequest": null,
      "recommitmentRequest": null
    }
  ],
  "discounts": [
    {
      "level": "12",
      "offerType": "LICENSE"
    }
  ]
}
```

## HTTP status codes

| Status code | Description                 |
| ----------- | --------------------------- |
| 201         | Reseller transfer previewed |
| 400         | Bad request                 |
| 401         | Invalid Authorization token |
| 403         | Invalid API Key             |
| 404         | Invalid reseller ID         |
