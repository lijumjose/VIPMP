# Get customer list

The Get Customer List API enables partners to retrieve customer accounts associated with a specific reseller using a combination of filters such as customer ID, name, status, creation date, and so on.

| Endpoint | Method|
|--|--|
|`<env root url>/v3/resellers/<reseller_id>/customers` |GET |

This API is essential for partners who manage large customer portfolios and require precise, real-time access to customer data for quoting, reporting, and renewal planning.

This API supports:

- Filtering by reseller ID (mandatory), customer ID, company name with wildcard support, status, and created date range.
- Sorting by customer name or creation date.
- Pagination with up to 50 results per request.

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

`GET <env>/v3/resellers/<reseller_id>/customers?status=1000&company-name=INGRAM&offset=3&limit=3&sort-by=creationDate&order-by=desc`

**Request  parameters:**

| Parameter            | Required | Data Type | Description                                                                                                                                       |
|----------------|----------|-----------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| status         | No       | String    | Status of the resellers. Default value is 1000. Supported values include 1000, 1002, 1004, and 1026.          |
| company-name           | No       | String    | Name of the customer with support for wildcard matching. Default value is null.           |
| from-created-date| No       | Date      | Filters customers created from the specified date. Default value is null.                                                |
| to-created-date  | No       | Date      | Filters customers created up to the specified date. Default value is null.                                                  |
| offset         | No       |           | Specifies the starting point for retrieving items in a paginated list. It determines how many items to skip before beginning to return results. If not specified, the default value is 0, meaning the response will start from the first item.                                                             |
| limit          | No       |           | Number of results to return per page. Default value is 20. Must be between 1 and 50.                                                      |
| sort-by        | No       | String    | Field used for sorting. Only one field is allowed. Supported values are creationDate and companyName. Default value is creationDate.        |
| order-by       | No       | String    | Direction of sorting. Supported values are asc and desc. Default value is desc.                                                         |

## Response

```json
{
  "totalCount": 9,
  "count": 3,
  "offset": 3,
  "limit": 3,
  "customers": [
    {
      "externalReferenceId": "a60924a0-170d-4d21-8736-3f927037371",
      "customerId": "1006374020",
      "resellerId": "1000361686",
      "status": "1000",
      "companyProfile": {
        "companyName": "Test Customer 222",
        "preferredLanguage": "en-US",
        "marketSegment": "",
        "marketSubSegments": [],
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
            "firstName": "first_name",
            "lastName": "last_name",
            "email": "abc@xyz.com"
          }
        ]
      },
      "discounts": [],
      "tags": [],
      "cotermDate": "",
      "creationDate": "2025-07-29T10:42:31Z",
      "benefits": [],
      "globalSalesEnabled": false
    },
    {}, {}
  ]
}
```

**Response parameters:**

| **Parameter**     | **Type**           | **Required** | **Description** |
|---------------|--------------------|--------------|------------------|
| totalCount  | Integer             | Yes          | Total count of customers matching search filters. |
| count       | Integer             | Yes          | Number of customers returned in the current page items. |
| offset     | Integer             | Yes          | Starting index of the current page. |
| limit      | Integer             | Yes          | Requested page size. Number of customer items limited in the response. |
| customers   | Array of Customer   | Yes          | Customer resource. Refer to [Customer account resource](../references/resources.md#customer-top-level-resource). |

### Status codes

| **Status Code** | **Description**                                      |
|------------------|------------------------------------------------------|
| 200              | Customer account details are successfully returned. |
| 400              | Bad request.                                         |
| 401              | Invalid Authorization token.                         |
| 403              | Invalid API Key.                                     |
| 429              | Too Many Requests.                                   |
| 500              | Internal Server Error.                               |
