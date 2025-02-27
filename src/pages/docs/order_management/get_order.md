# Get order details

The following two API endpoints are available to get order details:

- [Get details of a specific order](#get-details-of-a-specific-order)
- [Get the order history of a customer](#get-the-order-history-of-a-customer)

## Get details of a specific order

Use the `GET /v3/customers/<customer-id>/orders/<order-id>` API endpoint to get details of a specific order.

### Request header

| Parameter        | Description                                                                                                                                                                                                                      |
|------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| X-Request-Id     | A unique identifier for the call. The value should be reset for every single request. If this is not provided, then a request ID will be automatically generated. Using a duplicate request ID may return an error.              |
| X-Correlation-Id | **Required**. A unique identifier for the call. This is to ensure idempotency. In the case of a timeout, the retry call could include the same value. Upon receiving some response, the value should be reset for the next call. |
| Accept           | **Required**. Specifies the response type. Must be "application/json" for proper usage.                                                                                                                                          |
| Content-Type     | **Required**. Specifies the request type. Must be "application/json" for proper usage.                                                                                                                                           |
| Authorization    | **Required**. Authorization token in the form `Bearer <token>`                                                                                                                                                                   |
| X-Api-Key        | **Required**. The API Key for your integration                                                                                                                                                                                   |

### Request body

None.

### Response body

```json
{
  "externalReferenceId": "759",
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

### HTTP status codes

| Status code | Description                         |
| ----------- | ----------------------------------- |
| 200         | Order details successfully returned |
| 400         | Bad request                         |
| 401         | Invalid Authorization token         |
| 403         | Invalid API Key                     |
| 404         | Invalid customer or order ID        |

## Get the order history of a customer

Use the `GET /v3/customers/<customer-id>/orders` API endpoint to get a customer's order history.

### Assumptions

Ensure that you are aware of the following before trying out this API endpoint:

- All parameters included in the request, besides limit and offset parameters, are queried together using `AND`.
- Any parameters that are not included will default to the value in the default column.
- For `start-date` and `end-date`, a date without timestamp is evaluated to midnight UTC.
  - Dates with timestamps are only accepted in ISO-8601 format with "Zulu" (UTC) time zone. This is the same format that all dates and times are in CPAPI responses.
- The `order-type`, `status`, and `offer-id` parameters can be included multiple times to specify multiple values. Including multiple values for a parameter results in an OR operation for those values in the query.
  - **Example:** To query for orders that are either status 1000 or 10002:
    `/v3/customers/<customer-id>?status=1000&status=1002`
- Results will be sorted in descending order by `creationDate`.
- The maximum value for offset is the total number of results. Values higher than the total count return an error.
- If a `limit` greater than the maximum (100) is sent, it will default to the maximum value (100).
- Links to `next` and `prev` will be included in the response if there is a valid next or previous page in the result set.

### Request header

The request body is the same as mentioned in the [previous endpoint](#request-header).

### Query parameters

| Parameters              | Values                           | Default                 | Description                                                                                |
|--------------------|----------------------------------|-------------------------|--------------------------------------------------------------------------------------------|
| order-type         | NEW, TRANSFER, or RENEWAL        | All                     |                                                                                            |
| reseller-id        | Valid reseller IDs               | All                     | Regardless of reseller id, only orders for the partner making the request will be returned. |
| status             | 1000, 1002, 1004, or 1026           | All                     |                                                                                            |
| reference-order-id | Valid order IDs                  | All                     |                                                                                            |
| offer-id           | Valid offer IDs                  | All                     |                                                                                            |
| start-date         | 2019-05-02, 2019-05-02T22:49:54Z | Current term start date | Date without timestamp or with timestamp in Zulu time.                                      |
| end-date           | 2019-05-02, 2019-05-02T22:49:54Z | now                     | Date without timestamp or with timestamp in Zulu time.                                      |
| limit              | 1…100                            | 25                      | Page size (max number of orders to return).                                                 |
| offset             | 0…N                              | 0                       | Where to start the page.                                                                 |

### Response body

```json
{
  "totalCount": 9,
  "count": 3,
  "offset": 3,
  "limit": 3,
  "items": [
    { Order resource },
    { Order resource }
  ],
  "links": {
    "self": {
      "uri": "/v3/customers/<customer-id>/orders?offset=3&limit=3",
      "method": "GET",
      "headers": []
    },
    "next": {
      "uri": "/v3/customers/<customer-id>/orders?offset=6&limit=3",
      "method": "GET",
      "headers": []
    },
    "prev": {
      "uri": "/v3/customers/<customer-id>/orders?offset=0&limit=3",
      "method": "GET",
      "headers": []
    }
  }
}
```

### HTTP status codes

| Status code | Description                         |
| ----------- | ----------------------------------- |
| 200         | Order history successfully returned |
| 400         | Bad request                         |
| 401         | Invalid Authorization token         |
| 403         | Invalid API Key                     |
| 404         | Invalid customer ID                 |
