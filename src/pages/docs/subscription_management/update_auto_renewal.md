# Update the auto-renewal configuration of a subscription

You can modify the auto-renewal configuration by using the `PATCH /v3/customers/<customer-id>/subscriptions/<subscription-id>` endpoint.

## Assumptions

Ensure that you are aware of the following before updating the auto-renewal configuration:

- The `autoRenewal` preferences can only be updated for an active subscription.
- The `autoRenewal` object is only evaluated at the renewal time, defined in the `cotermDate` parameter.
- If the `renewalQuantity` is higher than `currentQuantity` at the renewal time, then the additional licenses will be included in renewal. If it is lower, then licenses will be removed at renewal.

- The following three states are possible for autorenewal:
  - **Disabled**
    <br /> You can achieve this by setting `enabled` to `false`.
  - **Enabled with renewal quantity** <br />If the `renewalQuantity` has been explicitly set, the `renewalQuantity` will remain unchanged by additional orders or cancellations until the subscription becomes inactive.
  - **Enabled without explicit renewal quantity** <br />In this case, all active licenses in the subscription will be renewed. The `renewalQuantity` will still be returned with the number of purchased licenses.

**Restrictions:**

- Maximum renewalQuantity:

  - 10,000 for Team products
  - 200,000 for Enterprise products (not supported yet)

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

`CompanyProfile` object with optional `externalReferenceId`:

```json
{
    "autoRenewal": {
        "enabled": true,
        "renewalQuantity": 7
    }
}
```

## Response body

```json
{ Subscription resource }
```

**Note:** Any contacts specified in this call will receive the admin welcome email. If an end-user did not receive it, it can be resent.

## HTTP status codes

| Status code | Description                         |
|-------------|-------------------------------------|
| 200         | AutoRenewal updated                 |
| 400         | Bad request                         |
| 401         | Invalid Authorization token         |
| 403         | Invalid API Key                     |
| 404         | Invalid customer or subscription ID |
