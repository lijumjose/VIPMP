# Create customer account

Prior to placing an order, a reseller needs to create a customer account by using the `POST /v3/customers` endpoint. The API returns the customer resource with a link to the [Get Customer Account Details](./get_customer_account.md) endpoint.

## Assumptions

Ensure that you are aware of the following before creating a customer account:

* Customer account ID is created by this API and returned synchronously.
* The customer payment instrument is managed on the partner marketplace.
* `cotermDate` is normally calculated when a customer’s first order is placed.
  * Most subscriptions will end or renew on the `cotermDate`, except for Stock Credit Packs.
* Use `cotermDate`in the request to create an extended-term customer.
* Use `externalReferenceId` to pass it to the marketplace’s Customer ID.
  * Optional and does not need to be unique.
* `Contacts` specifies admins for the customer's account and receive an admin welcome email.
  * Contact names for existing email addresses cannot be changed. If you send a different name for an existing email, that name will be returned in the synchronous response, but it will not persist in the system. The existing first and last name of the contact will be used and returned in any GET calls.
* The successful _Create Customer_ call always returns a customer with status 1002 (Pending) while the final validation happens asynchronously. The account may then become active or inactive. Pending customers can place orders, but they may not update their account using the _Update Customer_ API until the account becomes active or inactive. All orders placed for a pending customer fail if the customer becomes inactive.
* `discounts` contains a list of objects with the customer’s discount levels for each `offerType`.
* Customers can be created with a specified market segment.
  * Reseller must be enabled for that market segment.
  * If no market segment is specified in the request, the customer becomes part of the commercial (COM) market segment by default.

## Request header

| Parameter        | Description                                                                                                                                                                                                                      |
|------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| X-Request-Id     | A unique identifier for the call. The value should be reset for every single request. If this is not provided, then a request ID will be automatically generated. Using a duplicate request ID may return an error.              |
| X-Correlation-Id | **Required**. A unique identifier for the call. This is to ensure idempotency. In the case of a timeout, the retry call could include the same value. Upon receiving some response, the value should be reset for the next call. |
| Accept           | **Required**. Specifies the response type. Must be "application/json" for proper usage.                                                                                                                                          |
| Content-Type     | **Required**. Specifies the request type. Must be "application/json" for proper usage.                                                                                                                                           |
| Authorization    | **Required**. Authorization token in the form `Bearer <token>`                                                                                                                                                                   |
| X-Api-Key        | **Required**. The API Key for your integration                                                                                                                                                                                   |

**Note:** Details of the request and response parameters are available in the [Resources](../references/resources.md#customer-top-level-resource) section of this documentation.

## Request Body

Customer resource without read-only fields:

```json
{
    "resellerId": "5556667778",
    "externalReferenceId": "342",
    "companyProfile": {
        "companyName": "Fairmont",
        "preferredLanguage": "en-US",
        "marketSegment": "EDU",
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
                "firstName": "Donald",
                "lastName": "Duck",
                "email": "donald@duck.com",
                "phoneNumber": "408-123-4567"
            }
        ]
    }
}
```

## Response body

```json
{
    "externalReferenceId": "342",
    "customerId": "9876543210",
    "resellerId": "5556667778",
    "globalSalesEnabled": false,
    "companyProfile": {
        "companyName": "Fairmont",
        "preferredLanguage": "en-US",
        "marketSegment": "EDU",
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
                "firstName": "Donald",
                "lastName": "Duck",
                "email": "donald@duck.com",
                "phoneNumber": "408-123-4567"
            }
        ]
    },
    "discounts": [
        {
            "offerType": "LICENSE",
            "level": "02",
        }
    ],
    "cotermDate": "",
    "creationDate": "2019-05-02T22:49:52Z",
    "status": "1002",
    "links": {
        "self": {
            "uri": "/v3/customers/9876543210",
            "method": "GET",
            "headers": []
        }
    }
}
```

### HTTP status codes

| Status code | Description                 |
|-------------|-----------------------------|
| 201         | Customer account created    |
| 400         | Bad request                 |
| 401         | Invalid Authorization token |
| 403         | Invalid API Key             |
| 404         | Invalid reseller ID         |
