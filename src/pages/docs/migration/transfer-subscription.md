# Transfer subscriptions

Use the `POST /v3/memberships/<membership-id>/transfers` API endpoint to transfer subscriptions from VIP to VIP-MP.

## Request header

| Parameter        | Description                                                                                                                                                                                                                      |
|------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| X-Request-Id     | A unique identifier for the call. The value should be reset for every single request. If this is not provided, then a request ID will be automatically generated. Using a duplicate request ID may return an error.              |
| X-Correlation-Id | **Required**. A unique identifier for the call. This is to ensure idempotency. In the case of a timeout, the retry call could include the same value. Upon receiving some response, the value should be reset for the next call. |
| Accept           | **Required**. Specifies the response type. Must be "application/json" for proper usage.                                                                                                                                          |
| Content-Type     | **Required**. Specifies the request type. Must be "application/json" for proper usage.                                                                                                                                           |
| Authorization    | **Required**. Authorization token in the form `Bearer <token>`                                                                                                                                                                   |
| X-Api-Key        | **Required**. The API Key for your integration                                                                                                                                                                                   |

## Query parameters

| Parameter           | Values        | Default | Description                                                                         |
|---------------------|---------------|---------|-------------------------------------------------------------------------------------|
| ignore-order-return | true or false | false   | If `true`, customers with returnable purchases can be transferred. \<br /\> **Note:** Setting it to `true` will disable rollback to VIP and the “returnable” purchase can no longer be returned.         |
| expire-open-pas     | true or false | false   | If `true`, customers with open purchase authorizations can be transferred. Any open purchase authorizations will expire during the async portion of the transfer. |

## Request body

```json
{
  "resellerId": "999888777"
}
```

## Response body

```json
{
  "transferId": "5555luaigdfads555",
  "customerId": "",
  "membershipId": "12345678",
  "resellerId": "999888777",
  "creationDate": "2019-12-10T22:49:55Z",
  "status": "1002",
  "lineItems": [
    {
      "lineItemNumber": 1,
      "offerId": "12345678CA01A12",
      "currencyCode": "USD",
      "quantity": 10,
      "subscriptionId": ""
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
| ----------- | -------------------------------------- |
| 202         | Transfer request received or initiated |
| 400         | Bad request                            |
| 401         | Invalid Authorization token            |
| 403         | Invalid API Key                        |
| 404         | Invalid membership ID or reseller ID   |
