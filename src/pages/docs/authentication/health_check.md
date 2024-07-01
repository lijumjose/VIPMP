# Health check

Use the following two APIs to see whether you have the required access to run the VIP - Marketplace APIs. 

## Ping

GET `/ping`

REQUEST HEADERS:
X-Api-Key: <your-api-key> REQUEST BODY: None RESPONSE BODY:


## Authenticated Ping

GET `/partnerservice/ping`

REQUEST HEADERS:
X-	Api-Key: ```<your-api-key>``` Authorization: Bearer ```<token>```

REQUEST BODY: None
RESPONSE BODY:
 
Assumptions:
•	The authenticated ping endpoint is used to verify that the service is available and that your API Key and Authorization Token are valid.
