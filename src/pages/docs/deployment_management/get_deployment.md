# Get deployment details

You can use the following APIs to get the deployment resource details:

- [Get deployment details of a specific customer](#get-deployment-details-of-a-specific-customer)
- [Get details of a specific deployment](#get-details-of-a-specific-deployment)

## Get deployment details of a specific customer

Use the `GET /v3/customers/<customer-id>/deployments` API endpoint to get details of all deployment resources of a specific customer account.

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

| param  | values       | default | description                                |
| ------ | ------------ | ------- | ------------------------------------------ |
| status | 1000 or 1004 | All     |                                            |
| limit  | 1…100        | 25      | Page size (max number of items to return). |
| offset | 0…N          | 0       | Where to start the page.                   |

## Request body

None.

## Response body

List of Deployment resources:

```json
{
  "totalCount": 9,
  "count": 3,
  "offset": 3,
  "limit": 3,
  "items": [
    { Deployment resource },
    { Deployment resource },
    { Deployment resource }
],
  "links": {
    "self": {
      "uri": "/v3/customers/<customer-id>/deployments?offset=3&limit=3",
      "method": "GET",
      "headers": []
    },
    "next": {
      "uri": "/v3/customers/<customer-id>/deployments?offset=6&limit=3",
      "method": "GET",
      "headers": []
    },
    "prev": {
      "uri": "/v3/customers/<customer-id>/deployments?offset=0&limit=3",
      "method": "GET",
      "headers": []
    }
  }
}
```

### HTTP status codes

| Status code | Description                              |
| ----------- | ---------------------------------------- |
| 200         | Deployment details successfully returned |
| 400         | Bad request                              |
| 401         | Invalid Authorization token              |
| 403         | Invalid API Key                          |
| 404         | Invalid customer ID                      |

## Get details of a specific deployment

Use the `GET /v3/customers/<customer-id>/deployments/<deployment-id` endpoint to get details of a specific deployment resource of a customer account.

## Request header

The request body is the same as what was mentioned in the [previous endpoint](#request-header).

## Request body

None.

## Response body

Deployment resource:

```json
{
  "deploymentId": "345434543",
  "companyProfile": {
    "address": {
      "country": "US",
      "region": "CA",
      "city": "San Jose",
      "addressLine1": "200 Fairmont Ave",
      "addressLine2": "Apt 123",
      "postalCode": "95110-1234",
      "phoneNumber": "800-123-4567"
    }
  },
  "creationDate": "2019-05-02T22:49:52Z",
  "status": "1000",
  "links": {
    "self": {
      "uri": "/v3/customers/5556667778/deployments/345434543",
      "method": "GET",
      "headers": []
    }
  }
}
```

### HTTP status codes

| Status code | Description                             |
| ----------- | --------------------------------------- |
| 200         | Deplyment details successfully returned |
| 400         | Bad request                             |
| 401         | Invalid Authorization token             |
| 403         | Invalid API Key                         |
| 404         | Invalid customer ID or deployment ID    |
