# Update customer account

You can modify certain attributes of a customer account by using the `PATCH /v3/customers/<customer-id>` endpoint.

## Assumptions

Ensure that you are aware of the following before updating a customer account:

- Do not alter values for the mandatory fields such as `companyName, country,` and `region`. Otherwise, an error is returned.
- The `contacts` section specifies the admins for customer's account.
  - Any contacts that are removed will still remain admins. To remove admins, a customer admin must use the Adobe Admin Console.
  - The name of an existing contact cannot be changed through this API. Customer admin must use the Admin Console to update users' names.
- Customer market segment can be changed, only if the customer has no active subscriptions.
- Reseller must be enabled for the new market segment.
- Customer `externalReferenceId` may now be changed.
- Use either `commitmentRequest` or `recommitmentRequest`in the request to:

  - Request new 3YC for existing customers.
  - Request 3YC quantity increase for customer with existing commitment.
  - Request 3YC recommitment for customer with existing commitment.
    - Only allowed if the customer has a `COMMITTED` status for the commitment.

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
    "externalReferenceId": "99999",
    "globalSalesEnabled": true,
    "linkedMembership": {
        "type": "STANDARD",
        "name": "This is the Group Created for 1005516130"
    },
    "companyProfile": {
        "companyName": "Fairmont",
        "preferredLanguage": "en-US",
        "marketSegment": "COM",
        "address": {
            "country": "US",
            "region": "CA",
            "city": "San Jose",
            "addressLine1": "200 Fairmont Ave",
            "addressLine2": "Apt 123",
            "postalCode": "95110-1234",
            "phoneNumber": "800-123-4567"
        },
        "contacts": [
            {
                "firstName": "Mickey",
                "lastName": "Mouse",
                "email": "mickey@mouse.com",
                "phoneNumber": "408-123-4567"
            }
        ]
    }
```

## Response body

Same as [Get Customer Account Details (Customer resource)](./get_customer_account.md).

**Note:** Any contacts specified in this call will receive the admin welcome email. This can be resend if an end-user did not receive it.

## HTTP status codes

| Status code | Description                  |
|-------------|------------------------------|
| 200         | Account successfully updated |
| 400         | Bad request                  |
| 401         | Invalid Authorization token  |
| 403         | Invalid API Key              |
| 404         | Invalid customer ID          |
