# Get reseller list

The Get Reseller List API enables partners to retrieve resellers linked to a distributor using filtering, sorting, and pagination capabilities.

| Endpoint | Method|
|--|--|
|`<env root url>/v3/resellers` |GET |

This API is designed to support partner operations by providing real-time access to reseller account data, enabling efficient reporting and account management workflows.

The API supports filtering by reseller status and sorting by creation date or reseller name.  It includes pagination with a limit of 50 results per request and ensures that the data returned reflects the most current state, without relying on the cache.

This API is particularly useful for partners who need to:

- View and manage downstream reseller networks.
- Integrate reseller data into dashboards or CRM systems.
- Validate reseller status before initiating transactions.

## Headers

| Parameter        | Description                                                                                                                                                                                                                      |
|------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| X-Request-Id     | **Required**. A unique identifier for the call. The value should be reset for every single request. If this is not provided, then a request ID will be automatically generated. Using a duplicate request ID may return an error.              |
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
    "totalCount": 487,
    "count": 2,
    "offset": 0,
    "limit": 2,
    "accounts": [
        {
            "externalReferenceId": "250730223347637328",
            "resellerId": "1000396138",
            "distributorId": "0dda7462-d82e-4174-847d-e2439e54ceb2",
            "status": "1000",
            "creationDate": "2025-07-30T22:33:48Z",
            "links": {
                "self": {
                    "uri": "/v3/resellers/1000396138",
                    "method": "GET",
                    "headers": []
            }
        },
        {
            "externalReferenceId": "250730224431435791",
            "resellerId": "1000396139",
            "distributorId": "0dda7462-d82e-4174-847d-e2439e54ceb2",
            "status": "1000",
            "creationDate": "2025-07-30T22:44:32Z",
            "links": {
                "self": {
                    "uri": "/v3/resellers/1000396139",
                    "method": "GET",
                    "headers": []
            }
        }
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
| resellers     | Array of Resellers | Yes          | Reseller object.  |

**Reseller object**

| **Parameter**       | **Type**           | **Required** | **Description**                                                                                                                                             |
|---------------------|--------------------|--------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------|
| externalReferenceId | String             | Yes          | External Reference ID                                                                                                                                       |
| distributorId       | String             | Yes          | Unique ID of the distributor                                                                                                                                |
| resellerId          | String             | Yes          | Unique ID of the reseller                                                                                                                                   |
| status              | String             | Yes          | Status of reseller                                                                                                                                          |
| creationDate        | String  (ISO Date) | Yes          | Creation Date                                                                                                                                               |
| links               | Object             | Yes          | Link to get Reseller details. <br /> `GET /v3/resellers/<reseller-id>` |

### Status codes

| **Status Code** | **Description** |
|------------------|------------------|
| 200              | Reseller account details are successfully returned. |
| 400              | Bad request. |
| 401              | Invalid Authorization token. |
| 403              | Invalid API Key. |
| 429              | Too Many Requests. |
| 500              | Internal Server Error. |
