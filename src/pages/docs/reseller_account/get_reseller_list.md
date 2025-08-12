# Get reseller list

The Get Reseller List API enables partners to retrieve resellers linked to a distributor using advanced filtering, sorting, and pagination capabilities.

| Endpoint | Method|
|--|--|
|`<env root url>/v3/resellers` |GET |

This API is designed to support partner operations by providing real-time access to reseller account data, enabling efficient reporting and account management workflows.

The API supports filtering by reseller status and sorting by creation date or reseller name. Pagination is supported with a maximum of 50 results per request. The API is optimized for performance, targeting a global response time under 2 seconds, and ensures that the data returned reflects the most current state and is not cached.

This API is particularly useful for partners who need to:

- View and manage downstream reseller networks.
- Integrate reseller data into dashboards or CRM systems.
- Validate reseller status before initiating transactions.

## Headers

| Parameter        | Description                                                                                                                                                                                                                      |
|------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| X-Request-Id     | **Required**. A unique identifier for the call. The value should be reset for every single request. If this is not provided, then a request ID will be automatically generated. Using a duplicate request ID may return an error.              |
| X-Correlation-Id | **Required**. A unique identifier for the call. This is to ensure idempotency. In the case of a timeout, the retry call could include the same value. Upon receiving some response, the value should be reset for the next call. |
| Accept           | **Required**. Specifies the response type. Must be "application/json" for proper usage.                                                                                                                                          |
| Content-Type     | **Required**. Specifies the request type. Must be "application/json" for proper usage.                                                                                                                                           |
| Authorization    | **Required**. Authorization token in the form `Bearer <token>`                                                                                                                                                                   |
| X-Api-Key        | **Required**. The API Key for your integration                                                                                                                                                                                   |

## Request

A sample request is as follows:

```json
GET <env>/v3/resellers?status=1000&offset=3&limit=3&sort-by=creationDate&order-by=desc
```

**Request  parameters:**

| Parameter | Required | Data Type | Description                                                                                                                  |
|----------|----------|-----------|------------------------------------------------------------------------------------------------------------------------------|
| status   | No       | String    | Status of the resellers. Supported values: 1000, 1002, 1004, or 1026. Default: 1000. Must match one of the supported values. |
| offset   | No       |           | Starting point for paginated results. Default: 0.                                                                            |
| limit    | No       |           | Number of results per page. Default: 20. Must be between 1 and 50.                                                           |
| sort-by  | No       | String    | Field to sort by. Only one field allowed. Supported values: creationDate, companyName. Default: creationDate.                |
| order-by | No       | String    | Sort direction. Supported values: asc, desc. Default: desc.                                                                  |

## Response

```json
{
  "totalCount": 9,
  "count": 3,
  "offset": 3,
  "limit": 3,
  "resellers": [
    {
      "externalReferenceId": "63ad9457-09a1-49e2-8379-f864a8e7c63",
      "distributorId": "1652673",
      "resellerId": "1000361686",
      "status": "1000",
      "companyProfile": {
        "companyName": "Reseller Name 63ad9457-09a1-49e2-8379-f864a8e7c63",
        "preferredLanguage": "en-US",
        "marketSegments": [],
        "address": {
          "country": "US",
          "region": "CA",
          "city": "San Jose",
          "addressLine1": "345 Park Ave",
          "addressLine2": "",
          "postalCode": "95110",
          "phoneNumber": ""
        },
        "contacts": [
          {
            "firstName": "Kevin",
            "lastName": "Gregor",
            "email": "testname@adobe.com",
            "phoneNumber": "39 041 2708311"
          }
        ]
      },
      "creationDate": "2025-05-26T09:33:28Z"
    },
    {}, {}
  ]
}
```

**Response parameters:**

| **Parameter** | **Type**          | **Required** | **Description**                                                                |
|---------------|-------------------|--------------|--------------------------------------------------------------------------------|
| totalCount    | Integer           | Yes          | Total count of resellers matching search filters.                              |
| count         | Integer           | Yes          | Number of resellers returned in the current page items.                        |
| offset        | Integer           | Yes          | Start of the page.                                                             |
| limit         | Integer           | Yes          | Requested page size. Number of reseller items limited in the response.         |
| resellers     | Array of Resellers | Yes          | Reseller resource. Refer to [Get Reseller Account](./get_reseller_account.md). |

### Status codes

| **Status Code** | **Description** |
|------------------|------------------|
| 200              | Reseller account details are successfully returned. |
| 400              | Bad request. |
| 401              | Invalid Authorization token. |
| 403              | Invalid API Key. |
| 429              | Too Many Requests. |
| 500              | Internal Server Error. |
