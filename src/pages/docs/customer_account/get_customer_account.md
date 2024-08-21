# Get customer account details

Use the `GET /v3/customers/<customer-id>` API endpoint to get details of a specific customer account.

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
    "externalReferenceId": "342""customerId": "9876543210",
    "resellerId": "5556667778",
    "globalSalesEnabled": false,
    "companyProfile": {
        "companyName": "Fairmont",
        "preferredLanguage": "en-US",
        "marketSegment": "EDU",
        "marketSubSegments": [“K_12”
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
    "discounts": [
        {
            "offerType": "LICENSE",
            "level": "02",
        }
    ],
    "cotermDate": "2020-05-02",
    "creationDate": "2019-05-02T22:49:52Z",
    "status": "1000",
    "linkedMembership": {
        "id": "51001315",
        "name": "This is the Group Created for 1005513636",
        "type": "STANDARD",
        "linkedMembershipType": "OWNER",
        "creationDate": "2024-07-17T03:47:35"
    },
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

| Status code | Description                                     |
|-------------|-------------------------------------------------|
| 200         | Customer account details successfully returned  |
| 400         | Bad request                                     |
| 401         | Invalid Authorization token                     |
| 403         | Invalid API Key                                 |
| 404         | Invalid customer ID                             |
