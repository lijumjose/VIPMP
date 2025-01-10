# Resources and fields

Please see the Validations/Regular Expressions section for any regular expressions for specific
fields.

## Reseller (top-level resource)

|Property | Type | Description | Range/Limits|
|:----|:----|:----|:----|
|externalReferenceId | string <br /> Optional| Marketplace’s ID for reseller. ID does not need to be unique.| Max: 35 characters|
|distributorId | string | Adobe-generated unique ID for distributor tied to this reseller| Max: 40 characters|
|resellerId (read only)| string | Unique ID for reseller created upon account creation |Max: 40 characters|
|companyProfile | CompanyProfile resource| Information about the reseller| |
|creationDate (read only)| String (datetime)| Date and time of account creation in UTC| |
|status (read only)| string | Status code for the reseller account  |4 characters |
|links (read only)| Links resource | Deep links to get customer account details| |

## Customer (top-level resource)

|Property | Type | Description | Range/Limits|
|:----|:----|:----|:----|
|externalReferenceId | string <br />Optional| Marketplace’s ID for customer. ID does not need to be unique.| Max: 35 characters|
|customerId (read only)| string | Unique ID for customer created upon account creation| Max: 40 characters|
|resellerId | string | ID of reseller tied to customer | Max: 40 characters|
|companyProfile | `CompanyProfile` resource| Information about the customer | |
|cotermDate (read only)| String (date) | Date that renewal order is to be placed. Should be one year after the first order is provisioned (if a 1-yr term) and gets updated upon each renewal order.| 10 characters|
|creationDate (read only)| String (datetime)| Date and time of account creation in UTC| |
|status (read only)| string | Status code of customer account | 4 characters|
|links (read only)| **Links** resource | Deep links to get customer account details| |

## Deployment (top-level resource)

|Property | Type | Description | Range/Limits|
|:----|:----|:----|:----|
|deploymentId |String | Unique ID for the deployment generated upon deployment creation| Max: 40 characters|
|companyProfile | `CompanyProfile` resource| Information about the customer| |
|creationDate (read only)| String (datetime)| Date and time of account creation in UTC| |
|status | string | Status code of customer account | 4 characters|
|links (read only)| `Links` resource | Deep links to get customer account details| |

## CompanyProfile

|Property | Type | Description | Range/Limits|
|:----|:----|:----|:----|
|companyName | string | Name of company| Min: 4 characters <br /> Max: 80 characters|
|preferredLanguage | string | Preferred language for company (IETF hyphenated language tag)| Max: 40 characters|
|address | `Address` resource| Address of company | |
|contacts | Array of `Contact` resources| Points of contact for admin console | Min: One contact <br /> No limit|

## Address

|Property | Type | Description | Range/Limits|
|:----|:----|:----|:----|
|country | string | Country of address  (ISO 3166 standard) | 2 or 3 characters|
|region | string | State/region of the address (ISO 3166-2 <br /> standard – only send code after hyphen). <br /> Example: US-CA → CA| Max: 255 characters|
|city | string | City | Max: 40 characters|
|addressLine1 | string | Line 1 of the address | Max: 60 characters|
|addressLine2 | string | Optional. Line 2 of the address | Max: 60 characters|
|postalCode | string | Zip code/postal code of address. Must match city/region/country.| Max: 40 characters|
|phoneNumber | string | Optional. Phone number associated with this address| Max: 40 characters|

## Contact

|Property | Type | Description | Range/Limits|
|:----|:----|:----|:----|
|email | string | Email address of the contact | Max: 240 characters|
|firstName | string | First name of the contact | Max: 35 characters|
|lastName | string | Last name of the contact | Max: 35 characters|
|phoneNumber | string | Optional. Phone number of the contact | Max: 40 characters|

## Price List (top-level resource)

|Property | Type | Description | Range/Limits|
|:----|:----|:----|:----|
|region |String |The region where the product is sold. <br /> Examples: AP (Asia Pacific), JP (Japan), WE (Wesetern Europe), LA (Latin America), MX (Mexico), EE (Eastern Europe), PA, and NA (North Maerica) | |
|marketSegment |String |Market where the product is sold. <br /> Possible values are: COM, EDU, and GOV. | |
|currency |String |Currency for the currently selected market and region. <br />Examples: AUD, EUR, GBP, JPY, and USD | |
|priceListMonth |String |The month in which the price is published. Specified in the YYYYMM format. | |
|discountType |String |Define the volume discount level that can be applied for Standard or 3YC customers. <br /> Possible values are: `3YC` and `STANDARD`. The default value is `STANDARD`. | |
|totalItemCount |String |The total number of items returned in the response. | |

### Query parameters

|Property | Type | Description | Range/Limits|
|:----|:----|:----|:----|
|offset |Integer |The offset parameter specifies the starting point for retrieving items in a paginated list. It indicates the number of items to skip before beginning to return results. If offset isn't provided, the default value is 0, meaning retrieval will start from the first item.| |
|pageSize |String | The pageSize parameter specifies the number of items to be returned per page, enabling pagination. If pageSize isn't provided, the default value will be 50. | |

### Filters

You can use the following filter properties in the PriceListRequest schema allows you to narrow down the price list based on certain criteria:

|Property | Type | Description | Range/Limits|
|:----|:----|:----|:----|
|productFamily |String |By passing the product family, the API will return the price list for the given product family. | |
|sku |String |By passing the SKU, the API will return the price list for the given SKU. Since the SKU-based filter returns only one item in the response, offset-based pagination is not applicable for this filter. | |
|partNumber |String |By passing the partNumber, the API will return the price list for the given part number. Since the part number filter returns only one item in the response, offset-based pagination is not applicable for this filter. | |
|firstOrderDate |String |By passing the firstOrderDate, the API will return the price list for the given first order date. This date is in UTC.| |
|lastOrderDate |String |By passing the lastOrderDate, the API will return the price list for the given last order date. This date is in UTC. | |
|discountCode |String |By passing the discountCode (e.g. HVD_L17_PRE), the API will return the price list for the given discount code. | |

### Product

Array of the following objects:

|Property | Type | Description | Range/Limits|
|:----|:----|:----|:----|
|sku |String |Product ID | |
|productFamily |String |Grouping of products based on product code, product config, and so on. | |
|productType |String |Identify if the product is consumable or license base. | |
|productTypeDetail |String |Define if product is term base and if price is fixed or prorated. | |
|additionalDetail |String |Additional details for product offer. | |
|operatingSystem |String |The software that manages and controls the hardware and other software on a computer. <br /> Examples: `Multiple Platforms`, `Other`, and `Windows`. | |
|language |String |Supported languages. <br /> Examples: `EU English`, `Japanese`, `Multi Asian Languages`, `Multi European Languages`, `Multi Language Australia`, `Multi Latin American Languages`, and `Multi NorthAmerican Language`. | |
|version |String |Version of the product. | |
|users |String |License type <br/> Examples: `1 User`, `Named`, `Per Credit Pack`, `Per Server`, `Per Transaction`, `Per Workstation`, and `Subscription`. | |
|metric |String |Unit of measure <br /> Examples: 1000 10000 15000 20000 30000 "40 Images" "50 TRS INTRO NC" 5000 50000 "Transaction", and "USER" | |
|bridge |String |Bridge | |
|upcEanCode |String |Barcode formats used to identify products in retail sales. | |
|gtinCode |String |13-digit code that identifies products for sale in retail stores or online. | |

### Prices

Array of the following objects:

|Property | Type | Description | Range/Limits|
|:----|:----|:----|:----|
|partNumber |String |SKU + pricing extension key | |
|acdIndicator |String |Used to indicate if the offer is new, changed, or deleted. Possible values are: Add, Change, and Delete. | |
|acdEffectiveDate |String |Effective date for the ACD indicator (ADD, CHANGE, DELETE ). This date is in UTC format. | |
|levelDetails |String |Level Description of Min and Max range for the price point | |
|firstOrderDate |String |The first date from when the order can be placed against the partNumber. This date is in UTC format. | |
|lastOrderDate |String |The last date from when the order can be placed against the partNumber. This date is in UTC format. | |
|partnerPrice |String |List Price for Partner | |
|estimatedStreetPrice |String |Estimated retail price | |
|discountCode |String |High volume discount code will be provided here. When the discount code is available, the estimatedStreetPrice and partnerPrice will reflect the discounted price. | |
|estimatedShipDate |String |Estimated Ship Date. This date is in UTC format. | |
|publicAnnounceDate |String |Public Announce Date. This date is in UTC format. | |
|rmaRequestDeadline |String |RMA Request Deadline. This date is in UTC format. | |
|acdDescription |String |This field provides additional context or details about the ACD status of the offer. | |
|pool |String |The category or grouping to which the offer belongs. This field helps in identifying the broader classification of the offer. | |
|duration |String |The period for which the offer is valid or applicable. This field specifies the length of time the offer is effective. | |

## Order (top-level resource)

|Property | Type | Description | Range/Limits|
|:----|:----|:----|:----|
|externalReferenceId | string <br />Optional |Reconciliation ID for this order (Example: PO Number, Order ID, and so on). <br />ID does not need to be unique.| Max: 35 characters|
|orderId <br /> (read only)| string | Unique identifier for order that is created upon order creation| Max: 40 characters|
|customerId <br /> (read only)| string | ID of the customer that placed this order | Max: 40 characters|
|referenceOrderId | string <br /> required for RETURN orders| The ID of the order being returned in a RETURN order.| Max: 40 characters|
|orderType | String <br /> (enum)| Type of the order. Valid values: NEW, PREVIEW, RETURN, TRANSFER, RENEWAL| |
|lineItems | Array of LineItem resources| Itemized list of the offers and their quantity for this order| Min: 1 item <br />Max: 499 items|
|currencyCode | string | Currency used for placing the order (ISO 4217 format).| 3 characters|
|creationDate <br /> (read only)| String (datetime)| Date and time the order was created in UTC| |
|status (read only, except for canceling)| string | Status code of the order | 4 characters|
|links (read only)| `Links` resource | Deep links to get order details| |

## <mark>Eligible offers</mark>

|Property | Type | Description | Range/Limits|
|:----|:----|:----|:----|
|offerId |string |The unique ID of the offer. |Max: 40 characters |
|renewalCode |string |Unique identifier of the Minimum Order Quantity Offer. Available values are: <br /> - MOQ_100 <br /> - MOQ_250 <br /> - MOQ_500 |Max: 30 characters |
|eligibilityCriteria |Array |The eligibility criteria for availing the MOQ offer. | |
|minQuantity |Integer |The minimum quantity for which this offer is applicable, also the minimum quantity that the customer needs to commit for a 3YC term to be eligible for this offer. |Min: 0 <br /> Max: 999999 |
|additionalCriteria |string |The additional criteria list for availing the High Growth Offer. Currently, THREE_YEAR_COMMIT is the only supported value, indicating that 3YC is required to avail the High Growth Offers. |Min: 1 item <br /> Max: 499 items |
|deploymentId |string |Unique ID of the deployment. |Max: 40 characters |

## LineItem

|Property | Type | Description | Range/Limits|
|:----|:----|:----|:----|
|extLineItemNumber| integer | Marketplace’s unique index for item in order| Min: 0 <br /> Max: 999999 <br /> Must be unique|
|offerId | string | The ID of the offer being purchased| |
|quantity | integer | Quantity of this offer purchased in this order| Min: 1 <br /> Max: 10,000 for Team / 599,000 for Enterprise|
|<mark>discountCode</mark>|string|The discount code applicable to the HVD customers migrating from VIP to VIP Marketplace.|Max: 40 characters|
|subscriptionId (read only)| string | ID of the Subscription resource associated with this line item.| Max: 40 characters|
|status (read only)| string | Status code of the line item | 4 characters|

## Subscription (top-level resource)

|Property | Type | Description | Range/Limits|
|:----|:----|:----|:----|
|subscriptionId (read only)| string | Unique identifier of the subscription resource | Max: 40 characters|
|currentQuantity (read only)| integer | Total quantity of the subscription that a customer has |Max: 10,000 for Team <br /> 599,000 for Enterprise|
|usedQuantity | integer | Total used quantity for the license or the consumable| |
|offerId | string | The base discount level offer id. <br /> **Note:** This attribute is included for developers to identify the offer and NOT the discount level. Partners need to use “Get customer Account” and “Get Order history” APIs to see discount level information.| |
|autoRenewal | `AutoRenewal` object| Resource to manage auto-renewal flag and quantity| |
|creationDate (read only)| String (datetime)| Date and time of subscription creation in UTC| |
|status (read only)| string | Current status code of the subscription | 4 characters|
|links (read only)| `Links` resource | Deep links to get subscription details| |

## Notification (top-level resource)

|Property | Type | Description | Range/Limits|
|:----|:----|:----|:----|
|limit | integer | Maximum number of notification items response can contain |0 to INTEGER_MAX|
|offset | integer | Number of notification items to skip before picking up the items| 0 to INTEGER_MAX|
|totalCount | integer | Total number of items present for a notification |0 to INTEGER_MAX|
|count | integer | Actual number of notification item response contains |0 to INTEGER_MAX|
|items | Array of `NotificationItem` resources| Itemized list of notifications| 0 to INTEGER_MAX|
|links(read only)| `Links` resource | Deep links to get notification details | |

## NotificationItem

|Property | Type | Description | Range/Limits|
|:----|:----|:----|:----|
|customerId | string | Customer id for the account where partner order is pending| Max: 40 characters|
|resellerId | string | Reseller account id for the account whose partner order is still pending| Max: 40 characters|
|notificationType | string | Type of notification response| Max: 40 characters|
|links | `Links` resource | Deep links to get notification item details| |

## AutoRenewal

|Property | Type | Description | Range/Limits|
|:----|:----|:----|:----|
|enabled | boolean | Boolean flag denoting whether or not autoRenewal is enabled| true or false|
|renewalQuantity | integer | Optional. Total quantity to be renewed at the end of the contract period (can be higher than the current subscription quantity)| Min: 1 <br /> Max: 10,000 for Team / 599,000 for Enterprise|

## Links

|Property | Type | Description |
|:----|:----|:----|
|self | `Link` object | Link to get data about this resource |
|next | `Link` object | Link to get data about the next resource |
|prev | `Link` object | Link to get data about the previous resource |
|uri |string |The URI to access this link|
|method |string |The method used for the URI |
|headers|Array of Key:Value pairs |The headers for the link. <br /> **Note:** Any headers in this are in addition to the required headers specified in the Headers section above. |
