# Error codes specific to Recommendations

The following scenarios are possible in terms of API response status:

|Error Codes | Description | Reason| HTTP Status Code |
|--|--|--|--|
|6001 |INVALID_COUNTRY <br /> <br />Not allowed to fetch Recommendations for Country  `<code>` |Failed to retrieve recommendations |400 |
|6002 |INVALID_LANGUAGE <br /> <br />Not allowed to fetch Recommendations for language `<Code>` |Failed to retrieve recommendations |400 |
|6003 |Server Error |Failed to fetch response |500 |

In addition to the above status or error codes, all the standard error codes supported will be returned to clients for various failure scenarios. For example:

|Error Code | Description | HTTP Status Code|
|--|--|--|
|4116 |Unauthorized |401 |
|4117 |Forbidden |403 |
|4118 |Too Many Requests |429 |

Recommendations are fetched as part of existing APIs, such as GET Subscription, Order Preview, and so on. If the core functionality of these APIs fails, then only Error details relevant to the core functionality will be returned; no details of the Recommendations will be sent back to the customer. For example:

```json
{
   "code": "2125",
   "message": "Distributor not allowed to sell in the currency for the region",
   "additionalDetails": [],
   "invalidFields": []
}
```
