# Error codes specific to Recommendations

The following error codes are returned if the API is unable to fetch recommendations:

|Error Codes | Description |Applicable APIs | HTTP Status Code |
|--|--|--|--|
|5136 |INVALID_COUNTRY <br /> <br />Not allowed to fetch recommendations for country  `<code>` |Fetch Recommendations  | 400 |
|5137|INVALID_LANGUAGE <br /> <br />Not allowed to fetch recommendations for language `<Code>` |Fetch Recommendations  | 400 |

A sample error code displayed in the response is as follows:

```json
{
   "code": "5136",
   "message": "Not allowed to fetch Recommendations for Country Code GB",
   "additionalDetails": [],
   "invalidFields": []
}
```

In addition to these, standard error codes may also be returned for general failure scenarios:

|Error Code | Description | HTTP Status Code|
|--|--|--|
|4116 |Unauthorized |401 |
|4117 |Forbidden |403 |
|4118 |Too Many Requests |429 |

## Error codes for other APIs that fetch recommendations

Recommendations may also be returned as part of other APIs, such as GET Subscription, Order Preview, etc. Two key error scenarios can occur:

1. Failure in the core API functionality
2. Core API succeeds, but fetching recommendations fails

The HTTP status code reflects the outcome of the core API:

- If the core API fails, a 4xx or 5xx status code is returned.
- If the core API succeeds but recommendations fail, a 2xx status code is returned, and the error is included in the `recommendations` section of the response.

**Example: Core API functionality failure:**

HTTP Code: 4xx or 5xx

```json
{
   "code": "2125",
   "message": "Distributor not allowed to sell in the currency for the region",
   "additionalDetails": [],
   "invalidFields": []
}
```

**Example: Core API succeeds, but recommendation retrieval fails**

HTTP Code: 2xx, Success

```json
{
   // Order Preview Details
   "orderId": "ABCDORDER1",
   "...":"...",
   
   // Recommendations - New Addition
   "recommendations": {
      "errorDetails": {
         "code": "5136",
         "message": "Not allowed to fetch Recommendations for Country Code GB",
         "additionalDetails": [],
         "invalidFields": []
      }
   }
}
```
