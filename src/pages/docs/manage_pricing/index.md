# Access Price Lists

Partners can leverage the `Fetch Price List` API to retrieve up-to-date pricing information for Adobe products. This API not only modernizes Adobe’s price list distribution process but also delivers several key advantages:

- **Real-time pricing access**

  Partners can retrieve available price lists programmatically to always work with the latest version of VIP Marketplace price lists, ensuring accuracy and reducing delays.

- **Historical pricing support (3YC)**

  The API provides access to historical pricing, including Three-Year Commitment (3YC) prices. This is essential for serving customers with price-locked agreements.

- **Comprehensive global coverage**

  Partners can access current price lists across all products, countries, and currencies.

## Fetch Price List API

| Endpoint | Method|
|--|--|
|/v3/pricelist| POST|

**Sample request URL:** `POST <env root url>/v3/pricelist?offset=0&limit=10`

The `POST /v3/pricelist` API retrieves the price list information for the partners.

### Integration Guide

Partners will receive email notifications whenever updates are made to the Price List. Upon receiving the notification, partners can initiate a request to the Fetch Price List API by following the steps below:

1. Initiate API request

   Use the `POST /v3/pricelist` API. The request must include required parameters, with optional filters available to refine the response. See [Request](#request-body) for the complete list of supported parameters.

2. Handle API errors

   If the API returns an error, refer to the [Error Handling](#http-status-codes) section for guidance on interpreting and resolving error codes.

3. Parse the response

   The API returns a JSON response. Partners should parse this response and process the data outlined in the [Response](#response-body) section.

4. Pagination support

   The API supports pagination. Refer to the pagination guidelines to understand how to navigate through paged results efficiently.

5. Store Price List data

   Partners are expected to store the Price List data in their internal systems. Key attributes to store include:

   - `offerId` – Unique identifier for the offer; required when placing orders through [Order](../order_management/create_order.md) APIs.
   - `productFamily` – Helps categorize and group offers that belong to the same product family.

   Additional attribute details are available in the [Response](#response-body)  section.

6. Track Price List changes

   To identify changes to the Price List, review the following fields:

   - `acdIndicator`: Indicates whether the offer is new, changed, or deleted.
   - `acdEffectiveDate`: The date on which the acdIndicator status was set.

## Request

### Request header

| Parameter        | Description                                                                                                                                                                                                                      |
|------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| X-Request-Id     | A unique identifier for the call. The value should be reset for every single request. If this is not provided, then a request ID will be automatically generated. Using a duplicate request ID may return an error.              |
| X-Correlation-Id | **Required**. A unique identifier for the call. This is to ensure idempotency. In the case of a timeout, the retry call could include the same value. Upon receiving some response, the value should be reset for the next call. |
| Accept           | **Required**. Specifies the response type. Must be "application/json" for proper usage.                                                                                                                                          |
| Content-Type     | **Required**. Specifies the request type. Must be "application/json" for proper usage.                                                                                                                                           |
| Authorization    | **Required**. Authorization token in the form `Bearer <token>`                                                                                                                                                                   |
| X-Api-Key        | **Required**. The API Key for your integration                                                                                                                                                                                   |

### Query parameters

You can use the query parameters such as `limit` and `offset` in the request URL. For example: `POST <env root url>/v3/pricelist?offset=0&limit=10`

| **Field**                        | **Required** | **Type**           | **Description** |
|----------------------------------|--------------|--------------------|-----------------|
| `limit`            | No           | Integer            | Specifies the number of items to be returned per page, enabling pagination. The default value is 20.|
| `offset`       | No           | Integer            |  Specifies the starting point for retrieving items in a paginated list. It determines how many items to skip before beginning to return results. If not specified, the default value is 0, meaning the response will start from the first item. |

### Request body

A sample request is as follows:

```json
{
  "region": "NA",
  "marketSegment": "COM",
  "priceListType": "STANDARD",
  "currency": "USD",
  "priceListMonth": "YYYYMM",
  "filters": {
    "offerId": "65322650CA12A12",
    "productFamily": "Cloud Services",
    "firstOrderDate": "",
    "lastOrderDate": "",
    "discountCode": ""
  },
  "includeOfferAttributes": [
    "productType",
    "productTypeDetail",
    "language"
  ]
}
```

#### Request parameters

| **Field**                        | **Required** | **Type**           | **Description** |
|----------------------------------|--------------|--------------------|-----------------|
| `region`                         | Yes          | String (Enum)      | Specifies the region for which the Price List should be returned. This must be one of the regions supported for the Partner. The following requion codes are supported: <br /> AP, JP, WE, LA, MX, EE, PA, NA  |
| `marketSegment`                  | Yes          | String (Enum)      | Specifies the market segment. Must be one of the supported segments, such as: <br /> - COM <br /> - EDU <br /> - GOV. |
| `priceListType`                   | No           | String (Enum)      | Indicates the price list type. Possible values: <br /> - STANDARD <br /> - 3YC |
| `currency`                       | Yes          | String (Enum)      | Specifies the currency. Must be one of the supported currencies for the Partner. <br />Possible Values: AUD, EUR, GBP, JPY, USD. |
| `priceListMonth`                | Yes          | String             | Specifies the month you want the Price List for, in `YYYYMM` format. Example: `202410`. |
| `filters`                        | No           | Object             | Filters to narrow down the Price List. All filters use AND logic. For example, if `offerId` and `productFamily` filters are included in the request, then API the response will include results that match `offerId` AND `productFamily` |
| `filters → offerId`             | No           | String             | Returns only offers matching the specified `offerId`. |
| `filters → productFamily`       | No           | String             | Returns only offers matching the exact, case-sensitive `productFamily`. |
| `filters → firstOrderDate`      | No           | Date               | Returns only those offers whose first order date is later than the specified date. |
| `filters → lastOrderDate`       | No           | Date               | Returns only those offers whose last order date is on or after the specified date. |
| `filters → discountCode`        | No           | String             | Returns only offers matching the specified discount code. |
| `includeOfferAttributes`        | No           | List  | List of additional offer attributes to include in the response. Unknown attributes will result in an error. Read more about how to [define offer data to be displayed in the response](#define-offer-data-to-be-displayed-in-the-response). |

### Filter

You can refine the data returned in the response by using the filters property in the request body. This allows you to narrow down the price lists based on specific criteria. All filter fields are combined using AND logic, meaning that only results matching all specified conditions will be returned if multiple filters are applied. Filters with null or empty values will be ignored. You can filter the data using the following parameters:

- `offerId`
- `productFamily`
- `firstOrderDate`
- `lastOrderDate`
- `discountCode`

### Define offer data to be displayed in the response

To customize the offer details returned in the response, use the `includeOfferAttributes` parameter in the request body. This allows you to specify which offer attributes should be included in the response.  For example:

- `productType`
- `productTypeDetail`
- `language`

**Note:** The response will include only the attributes listed in `includeOfferAttributes`, along with the following default attributes:

- `totalCount`
- `limit`
- `offset`
- `offers`
- `offer → offerId`
- `offer → discountCode`
- `offer → productFamily`
- `offer → firstOrderDate`
- `offer → lastOrderDate`
- `offer → partnerPrice`

## Response body

A sample response is as follows:

```json
{
    "priceListMonth": "202412",
    "marketSegment": "COM",
    "region": "NA",
    "currency": "USD",
    "priceListType": "3YC",
    "totalCount": 59,
    "count": 59,
    "limit": 100,
    "offset": 0,
    "offers": [
        {
            "offerId": "65322435CAT5012",           
            "productFamily": "Acrobat Sign Solutions For Enterprise",
            "productType": "Transaction New",
            "productTypeDetail": "No Proration",
            "additionalDetail": "Aws | First Order Date and 
            Last Order Date=3-year commit accept. 
             RMA Request Deadline=Last eligible order date.",
            "operatingSystem": "Other",
            "language": "Multi NorthAmerican Language",
            "version": "ALL",
            "users": "Per Transaction",
            "metric": "Transaction",
            "bridge": "Standard",
            "upcEanCode": "123456789012",
            "gtinCode": "987654321098",   
            "acdIndicator": "Add",
            "acdEffectiveDate": "2024-01-01T00:00:00.000Z",
            "acdDescription": "ACD Desc",
            "levelDetails": "Tier 5 15,000 to 49,999 Transactions",
            "firstOrderDate": "2023-10-19T00:00:00.000Z",
            "lastOrderDate": "2023-10-20T00:00:00.000Z",
            "partnerPrice": "3456.78",
            "estimatedStreetPrice": "3456.78",
            "discountCode": "ACD2024",
            "estimatedShipDate": "2024-01-15T00:00:00.000Z",
            "publicAnnounceDate": "2023-12-01T00:00:00.000Z",
            "rmaRequestDeadline": "2024-01-31T00:00:00.000Z",
            "pool": "Discount 1",
            "duration": "12 Months"
        },
        {
            "offerId": "30005893CA01A12",
            "productFamily": "Ai Assistant For Acrobat For Enterprise",
            "productType": "Enterprise Hosted Subscription New",
            "productTypeDetail": "Annual",
            "additionalDetail": "First Order Date and 
            Last Order Date=3-year commit accept. 
            RMA Request Deadline=Last eligible order date.",
            "operatingSystem": "Other",
            "language": "Multi NorthAmerican Language",
            "version": "ALL",
            "users": "1 User",
            "metric": "User",
            "bridge": "Enterprise",
            "upcEanCode": "234567890123",
            "gtinCode": "876543210987",
            "acdIndicator": "Change",
            "acdEffectiveDate": "2024-02-01T00:00:00.000Z",
            "acdDescription": "ACD Desc",
            "levelDetails": "Level 1 1 - 9",
            "firstOrderDate": "2024-03-28T00:00:00.000Z",
            "lastOrderDate": "2024-05-31T00:00:00.000Z",
            "partnerPrice": "1234.56",
            "estimatedStreetPrice": "1234.56",
            "discountCode": "ENT2024",
            "estimatedShipDate": "2024-02-15T00:00:00.000Z",
            "publicAnnounceDate": "2024-01-15T00:00:00.000Z",
            "rmaRequestDeadline": "2024-02-28T00:00:00.000Z",
            "pool": "Application",
            "duration": "12 Months"
        }
    ]
}
```

### Response parameters

| **Field** | **Not Null** | **Type** | **Description** |
|-----------|--------------|----------|-----------------|
| `priceListMonth` | Yes | String | Price List published month |
| `marketSegment` | Yes | String (Enum) | Market segment applicable for the offers included in the response. Possible values: <br /> - COM <br /> - EDU <br /> - GOV |
| `region` | Yes | String (Enum) | Region where offer is sold. <br /> Possible values: <br /> - NA <br /> - PA <br /> - EE <br /> - MX <br /> - LA <br /> - WE <br /> - JP <br /> - AP |
| `currency` | Yes | String (Enum) | Currency applicable for the market segment and region. <br /> Possible Values: <br /> - AUD <br /> - EUR <br /> - GBP <br /> - JPY <br /> - USD |
| `priceListType` | Yes | String (Enum) | The price list type. <br /> Possible values:<br /> - STANDARD <br /> - 3YC |
| `totalCount` | Yes | Integer | Indicates the total items matched as per the search criteria. |
| `count` | Yes | Integer | Indicates the total number of offers returned in the response. |
| `limit` | Yes | Integer | The number of offers limited in the response. |
| `offset` | Yes | Integer | Specifies the starting point for retrieving items in a paginated list. It determines how many items to skip before beginning to return results. If not specified, the default value is 0, meaning the response will start from the first item. |
| `offers` | Yes | JSON List | List of Offers <br /> List will be empty if no Offers are available to return. |
| `offer → offerId` | Yes | String | Unique identifier of the Offer. Used as Offer ID in Order APIs |
| `offer → productFamily` | Yes | String | Indicates the grouping of products based on product code, product config, and so on. |
| `offer → productType` | Yes | String (Enum) | Possible values: <br /> - Enterprise Consumption (consumable) <br /> - Enterprise Hosted Subscription New <br /> - Feature Restricted Licensing Subscription New <br /> - Hosted Subscription <br /> - Subscription New <br /> - Team Consumption (consumable) <br /> - Transaction New (consumable) |
| `offer → productTypeDetail` | Yes | String (Enum) | Indicates whether the product is term base and if price is fixed or prorated. <br /> Possible values: <br /> - 12-month, no proration (fixed price) <br /> - Annual (proration based on duration) <br /> - No Proration (fixed price, no term) |
| `offer → additionalDetail` | No | String | Additional details for the product offer, such as the number of credits in a pack, the number of license bundles in a subscription, and so on. |
| `offer → operatingSystem` | Yes | String (Enum) | Possible values: <br /> - Multiple Platforms <br /> - Other <br /> - Windows |
| `offer → language` | Yes | String (Enum) | Language offered by Offer <br /> The following are the possible values: <br /> - EU English <br /> - Japanese <br /> - Multi Asian Languages <br /> - Multi European Languages <br /> - Multi Language Australia <br /> - Multi Latin American Languages <br /> - Multi NorthAmerican Language |
| `offer → version` | Yes | String | Possible values: <br /> - ALL |
| `offer → users` | Yes | String (Enum) | License type <br /> The Following are the possible values: <br /> - 1 User <br /> - Named <br /> - Per Credit Pack <br /> - Per Server <br /> - Per Transaction <br /> - Per Workstation <br /> - Subscription |
| `offer → metric` | No | String (Enum) | Unit of measure. The following are the possible values: <br /> - 1000 <br /> - 10000 <br /> - 15000 <br /> - 20000 <br /> - 30000 <br /> - 40 Images <br /> - 50 TRS INTRO NC <br /> - 5000 <br /> - 50000 <br /> - Transaction - USER |
| `offer → bridge` | No | String |  |
| `offer → upcEanCode` | No | String | Barcode formats used to identify products in retail sales. |
| `offer → gtinCode` | No | String | 13-digit code that identifies products for sale in retail stores or online. |
| `offer → acdIndicator` | No | String (Enum) | Used to indicate if the offer is NEW, CHANGED, or DELETED. <br /> Possible values: <br /> - Add <br /> - Change <br /> - Delete |
| `offer → acdEffectiveDate` | No | Date | Effective date for the ACD indicator (ADD, CHANGE, and DELETE). This date is in UTC format. |
| `offer → acdDescription` | No | String | This field provides additional context or details about the ACD status of the offer. |
| `offer → levelDetails` | Yes | String | Level Description of Min and Max range for the price point. |
| `offer → firstOrderDate` | Yes | Date | The first date for the item's sale. |
| `offer → lastOrderDate` | Yes | Date | The last date for the item's sale. |
| `offer → partnerPrice` | Yes | String | List Price for Partner <br /> |
| `offer → estimatedStreetPrice` | Yes | String | Estimated retail price <br />  |
| `offer → discountCode` | No | String | High volume discount code will be provided here. When the discount code is available, the estimatedStreetPrice and partnerPrice will reflect the discounted price. |
| `offer → estimatedShipDate` | Yes | Date | Estimated Ship Date. This date is in UTC format. |
| `offer → publicAnnounceDate` | Yes | Date | Public Announce Date. This date is in UTC format. |
| `offer → rmaRequestDeadline` | Yes | Date | RMA Request Deadline. This date is in UTC format. |
| `offer → pool` | Yes | String (Enum) | The category or grouping to which the offer belongs. This field helps in identifying the broader classification of the offer. Possible values are: <br /> - Application <br /> - Discount1 <br /> - Discount2 <br /> - Pricing Version 23 <br /> - Pricing Version 24 <br /> - Pricing Version 25 <br />|
| `offer → duration` | Yes | String | The time period for which the offer is valid or applicable. This field specifies the length of time the offer is effective. |

## HTTP status codes

| Status code | Description                                       |
| ----------- | ------------------------------------------------- |
| 200         | Successfully retrieved the price list.            |
| 400         | Bad request                                       |
| 401         | Invalid Authorization token                       |
| 403         | Invalid API Key                                   |
| 404         | Price list not found for the given request/offset |

## Error codes specific to Fetch Price List API

The following table lists the error codes that are speific to the Fetch Price List API:

| Code | Message | Applicable API calls | HTTP Code |
|--|--|--|--|
|1159 |Inactive Partner Contract |Fetch Price Lists |400 |
|1160 |Invalid Market Segment for Partner |Fetch Price Lists |400 |
|1161 |Invalid Currency/Region for Partner |Fetch Price Lists |400 |
|1162 |Price List not found |Fetch Price Lists |404 |
|5122 |Invalid Request |Fetch Price Lists |400 |

For the complete set of error codes, see [Status codes and error handling](../references/error_handling.md).
