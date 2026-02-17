# Place manual renewal order

You can create a manual or late renewal order using Postman. For more details about the API, refer to the External API documentation.

Manual renewals can be initiated for subscriptions after their anniversary date, provided they are expired (status 1004).

See how to expire an active subscription through the partner portal.

Subscriptions that have an expired (1004) status will display the allowedActions list in the Customers Associated Subscriptions section and will include "MANUAL_RENEWAL" in the list, indicating that they can be manually renewed.

![Viewing subscriptions for manual renewal](../image/manual_renewal.jpg)
