# Error codes specific to mid-term upgrade

The following error codes are specific to mid-term upgrades:

| Error Code | Message                                                                 | Applicable API calls | HTTP Status Code |
|------------|-------------------------------------------------------------------------|-----------------------|------------------|
| 2149       | Switch plan error: Requested quantity and cancel quantity must be equal |   Preview Switch Order,   Create Switch Order                  |           400       |
| 2150       | Switch path validity check failed                                       |    Preview Switch Order,   Create Switch Order                    |      400            |
| 2151       | Requested quantity must be less than or equal to the active subscription quantity |    Preview Switch Order,   Create Switch Order            |     400             |
| 2152       | Only one item supported for switch |    Preview Switch Order,   Create Switch Order            |     400             |
| 2153       | Line item and cancelling line item mismatch |    Preview Switch Order,   Create Switch Order            |     400             |
