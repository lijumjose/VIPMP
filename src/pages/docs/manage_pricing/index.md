# Manage Price Lists

Partners can use the Retrieve Price List API to access the price list for a product. This API not only streamlines Adobe's price list publishing process but also offers several benefits to partners, such as:

- Simplified access to real-time pricing, allowing partners to get the price before placing an order.
- Access to 3YC prices.  Accessing old price lists are crucial for showing the correct pricing for price-locked customers, such as those with three-year commitments (3YC).
- Access to current partner price lists for all countries, SKUs, and currencies. The filters property in the PriceListRequest schema can be used to narrow down the price list based on specific criteria.

## Retrieve Price List API

The `POST /v1/pricelist` API retrieves the price list information from the Runtime Pricing Service (RPS).

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

```json
{
  "region": "AP",
  "partnerType": "ALC",
  "marketSegment": "COM",
  "currency": "AUD",
  "priceListMonth": "202406",
  "discountType": "STANDARD",
  "filters": {
    "productFamily": "string",
    "sku": "string",
    "partNumber": "string",
    "firstOrderDate": "string",
    "lastOrderDate": "string",
    "discountCode": "string"
  }
}
```

## Response body

```json
{
  "priceListMonth": "202406",
  "marketSegment": "COM",
  "region": "NA",
  "currency": "USD",
  "partnerType": "ALC",
  "discountType": "STANDARD",
  "totalItemCount": "100",
  "products": [
    {
      "sku": "65322650",
      "productFamily": "Cloud Services",
      "productType": "Subscription",
      "productTypeDetail": "1y, monthly, indirect",
      "additionalDetail": "some notes",
      "operatingSystem": "Windows",
      "language": "EU English",
      "version": "ALL",
      "users": "1 User",
      "metric": "USER",
      "bridge": "blank",
      "upcEanCode": "123456789012",
      "gtinCode": "987654321098",
      "prices": [
        {
          "partNumber": "65322650CA12A12",
          "acdIndicator": "ADD",
          "acdEffectiveDate": "'yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
          "levelDetails": "Level 1 1 - 9",
          "firstOrderDate": "'yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
          "lastOrderDate": "'yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
          "partnerPrice": "18.99",
          "estimatedStreetPrice": "22.99",
          "discountCode": "HVD_L17_PRE",
          "estimatedShipDate": "'yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
          "publicAnnounceDate": "'yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
          "rmaRequestDeadline": "'yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
          "acdDescription": "New Part Number",
          "pool": "Application",
          "duration": "12 Months"
        }
      ]
    }
  ]
}
```

## HTTP status codes

| Status code | Description                                       |
| ----------- | ------------------------------------------------- |
| 200         | Successfully retrieved the price list.            |
| 400         | Bad request                                       |
| 401         | Invalid Authorization token                       |
| 403         | Invalid API Key                                   |
| 404         | Price list not found for the given request/offset |

## Filters

The `filters` property in the `PriceListRequest` schema allows you to narrow down the price list based on certain criteria. All filter fields work as AND operations, meaning if multiple filters are passed together, the result will be a combination that matches all those filters. Null or empty values will be ignored for the filters.

Examples of filters that can be used in the API request include filtering by region (example: AP, NA), currency (example: USD, EUR), product type (example: Photoshop), and discount codes (example: `standard`, `3YC`).
