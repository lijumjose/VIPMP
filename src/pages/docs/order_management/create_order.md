# Create order

Use the `POST /v3/customers/<customer-id>/orders` endpoint to place an order for a customer. Read more about [scenarios where an order is created](order_scenarios.md).

## Assumptions

Ensure that you are aware of the following before creating an offer details:

- `orderType` is required in the Create Order request.
  - Possible values are: NEW, RETURN, PREVIEW, PREVIEW_RENEWAL, or RENEWAL
- `subscriptionId` is mandatory in lineitems for:
  - `orderType` RENEWAL
  - `orderType` PREVIEW_RENEWAL if lineitems are present
- `referenceOrderId` is required for RETURN orders and should not be included for other order types.
- `currencyCode` should now be sent at the lineItem-level instead of order level.
  - For backwards compatability, `currencyCode` can still be sent at the order level.
- The `discountCode` is applicable only to High Volume Discount customers who have migrated from VIP to VIP MP. You can use the discount code only if their discount level in VIP is between 17 and 22.
- `flexDiscountCodes` can be used in the request to apply Flexible Discounts for customers who meet the eligibility criteria. For additional details, see [Managing Flexible Discounts](../flex_discounts/apis.md).

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

Order resource without read-only fields:

```json
{
  "externalReferenceId": "759", // (optional)
  "currencyCode": "USD", // (to be deprecated, use lineItem currencyCode)
  "orderType": "NEW | RETURN | PREVIEW | PREVIEW_RENEWAL | RENEWAL",
  "referenceOrderId": "", // (for returns only)
  "lineItems": [
    {
      "extLineItemNumber": 4,
      "offerId": "80004567EA01A12",
      "quantity": 1,
      "currencyCode": "USD",
      "deploymentId": "12345",
      "discountCode": "HVD_L18_PRE",
    },
  ],
}
```

## Response body

```json
{
  "externalReferenceId": "759",
  "orderId": "0123456789",
  "customerId": "9876543210",
  "orderType": "NEW",
  "referenceOrderId": "",
  "currencyCode": "USD",
  "creationDate": "2019-05-02T22:49:54Z",
  "status": "1002",
  "source": "API",
  "lineItems": [
    {
      "extLineItemNumber": 4,
      "offerId": "80004567EA01A12",
      "quantity": 1,
      "subscriptionId": "",
      "status": "1002",
      "currencyCode": "USD",
      "deploymentId": "12345"
    }
  ],
  "links": {
    "self": {
      "uri": "/v3/customers/9876543210/orders/0123456789",
      "method": "GET",
      "headers": []
    }
  }
}
```

## HTTP status codes

| Status code | Description                 |
| ----------- | --------------------------- |
| 201         | Order created               |
| 400         | Bad request                 |
| 401         | Invalid Authorization token |
| 403         | Invalid API Key             |
| 404         | Invalid customer ID         |
