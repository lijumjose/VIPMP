# Create a reseller account

Use the `POST /v3/resellers` API endpoint to create a reseller account.

## Assumptions

* Partner will present reseller with T&Cs and make this call after reseller agrees.
* Reseller Account ID is created by this service and returned synchronously.
* `externalReferenceId` should be used to pass in the marketplace’s identifier for the reseller.
  * Optional and does not need to be unique.
* Distributor ID -> Reseller ID -> Customer ID relationship must be unique.
* Synchronous call will return an account with status "1002" (Pending) while final validation happens asynchronously. The account may then become Active or Inactive. Pending resellers can create customers, but not update the reseller account.
* Contact names for existing email addresses cannot be changed through this API. If you send a different name for an existing email, that name will be returned in the synchronous response, but it will not persist in our system. The existing first and last name of the contact will be used and returned in any GET calls.
* Resellers can be created with optional market segments.
* If no market segments are sent, the reseller will be created with COM.
* Resellers may sell into multiple market segments but must always have at least one (default COM).

## Request header

|Parameter | Description |
|--|--|
| X-Request-Id | A unique identifier for the call. The value should be reset for every single request. If this is not provided, then a request ID will be automatically generated. Using a duplicate request ID may return an error.|
| X-Correlation-Id | **Required**. A unique identifier for the call. This is to ensure idempotency. In the case of a timeout, the retry call could include the same value. Upon receiving some response, the value should be reset for the next call.|
| Accept | **Required**. Specifies the response type. Must be "application/json" for proper usage. |
| Content-Type | **Required**. Specifies the request type. Must be "application/json" for proper usage. |
| Authorization | **Required**. Authorization token in the form `Bearer <token>` |
| X-Api-Key | **Required**. The API Key for your integration|

**Note:** Details of the request and response parameters are available in the [Resources](../references/resources.md#reseller-top-level-resource) section of this documentation.

## Request body

Reseller resource without read-only fields:

```json
{
    "distributorId": "345434543",
    "externalReferenceId": "888",
    "companyProfile": {
        "companyName": "Fairmont",
        "preferredLanguage": "en-US",
        "marketSegments": [
            "COM",
            "EDU"
        ],
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

```json
{
    "distributorId": "345434543",
    "externalReferenceId": "888",
    "resellerId": "5556667778",
    "companyProfile": {
        "companyName": "Fairmont",
        "preferredLanguage": "en-US",
        "marketSegments": [
            "COM",
            "EDU"
        ],
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
    },
    "creationDate": "2019-05-02T22:49:52Z",
    "status": "1000",
    "links": {
        "self": {
            "uri": "/v3/resellers/5556667778",
            "method": "GET",
            "headers": []
        }
    }
}
```

### HTTP status codes

| Status code | Description                               |
|-------------|-------------------------------------------|
| 201         | Reseller account is successfully created. |
| 400         | Bad request                               |
| 401         | Invalid Authorization token               |
| 403         | Invalid API Key                           |
