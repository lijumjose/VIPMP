# Upcoming releases

The following features are scheduled for release:

## Base part number in the GET Open Acquisitions API response

  - Introduced the `baseOfferId` parameter in the response payload of the GET Open Acquisitions (aka GET Licenses Pending Partner Order) API. This parameter in the API response allows partners to match the correct part number using product name details from notification emails and proceed with order placement.

  Read more about [Get licenses pending partner order API](../customer_account/get_licenses.md).

## Mid-term upgrades

The **VIP Marketplace – Mid-Term Upgrades** capability introduces a comprehensive set of APIs that allow Adobe partners to upgrade customer subscriptions **during the active term**, without waiting for the renewal date.

**New capabilities**

- **Upgrade path discovery**  
  Partners can retrieve valid upgrade paths using the new [GET Product Switch Paths](../mid_term/apis.md#discover-upgrade-path) API, filtered by market segment, country, and language.

- **Preview switch order**  
  A new `orderType` value, **`PREVIEW_SWITCH`**, has been added to the **Create Order API**. This allows partners to generate upgrade quotes before placing a switch order.

- **Switch order execution**  
  Partners can place upgrade orders using the `SWITCH` order type, specifying both the "From" and "To" product details. The API supports automatic user reassignment via the `reassign-users=true` query parameter.

- **Upgrade reversion**  
  Partners can revert a switch order within 14 days using the new `REVERT_SWITCH` and `PREVIEW_REVERT_SWITCH` order types. This restores the original subscription and de-provisions the upgraded product.

- **Partial and full upgrades**  
  The system supports both full and partial upgrades, including seat expansions and product transitions (example: Acrobat Standard to Acrobat Pro).

Read more about [Mid-term upgrades](../mid_term/index.md).
