# Health check

Use the following two APIs to see whether you have the required access to run the VIP - Marketplace APIs.

## Ping

```http
GET /ping
X-Api-Key: <your-api-key>
```

Should respond with `pong`.

## Authenticated Ping

```http
GET https://partners.adobe.io/partnerservice/ping
X-Api-Key: <your-api-key>
Authorization: <access_token>
```

should also respond with `pong`.

**Assumptions**

- The authenticated ping endpoint is used to verify that the service is available and that your API Key and Authorization Token are valid.
