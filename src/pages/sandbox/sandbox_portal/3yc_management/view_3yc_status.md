# View 3YC benefits status

To view the status of three-year benefits, navigate to **benefits -> THREE_YEAR_COMMIT -> commitmentRequest**  section in the customer’s detailed view.

![View 3YC benefit status](/src/pages/sandbox/image/view_3yc.png)

The 3YC status can have the following values:

| Status       | description                                                                            |
|--------------|----------------------------------------------------------------------------------------|
| REQUESTED    | The customer has not accepted or rejected   3YC benefit terms.                            |
| ACCEPTED     | The customer has accepted the 3YC benefit   terms.                                          |
| COMMITTED    | The customer has met the minimum quantities  required for 3YC benefits.                         |
| INACTIVE     | The 3YC benefits are inactive for the customer.                                             |
| DECLINED     | The customer has declined the 3YC   benefit terms.                                          |
| NONCOMPLIANT | The customer accepted the 3YC benefit   terms but did not meet the minimum quantities. |
| EXPIRED      | The customer’s 3YC benefits have expired.                                               |

**Note:** Customers with 3YC benefits in the status of INACTIVE, DECLINED, NONCOMPLIANT, or EXPIRED are considered to not have 3YC benefits.

## 3YC workflow differences between sandbox and production

There are some differences between the 3YC workflow in sandbox and production:

- **Emails:** In production, the customer admin received emails throughout the 3-year commit lifecycle (request, acceptance, termination). These emails are not sent in the sandbox environment.
- **Expiration:** In production, unaccepted (REQUESTED) 3YC requests expire after 7 days, and accepted 3YC requests also expire after 7 days if they do not move to COMMITTED status. In sandbox, 3YC requests will not expire in either scenario.
- **Order returns and subscription updates are not included in sandbox:**
  - Returning an order is normally rejected if the return would drop the customer below committed quantities.
  - Reducing subscription renewal quantity (or disabling autorenewal) is normally  rejected if the eventual renewal order would drop the customer below committed quantities.
