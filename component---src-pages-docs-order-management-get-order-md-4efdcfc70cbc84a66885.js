"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[6928],{11115:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return i},default:function(){return s}});var n=a(87462),r=a(45987),d=(a(35776),a(3905)),l=a(91515);const m=["components"],i={},o={_frontmatter:i},u=l.Z;function s(e){let{components:t}=e,a=(0,r.Z)(e,m);return(0,d.mdx)(u,(0,n.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,d.mdx)("h1",{id:"get-order-details"},"Get order details"),(0,d.mdx)("p",null,"The following two API endpoints are available to get order details:"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"#get-details-of-a-specific-order"},"Get details of a specific order")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"#get-the-order-history-of-a-customer"},"Get the order history of a customer"))),(0,d.mdx)("h2",{id:"get-details-of-a-specific-order"},"Get details of a specific order"),(0,d.mdx)("p",null,"Use the ",(0,d.mdx)("inlineCode",{parentName:"p"},"GET /v3/customers/<customer-id>/orders/<order-id>")," API endpoint to get details of a specific order."),(0,d.mdx)("h3",{id:"request-header"},"Request header"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"X-Request-Id"),(0,d.mdx)("td",{parentName:"tr",align:null},"A unique identifier for the call. The value should be reset for every single request. If this is not provided, then a request ID will be automatically generated. Using a duplicate request ID may return an error.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"X-Correlation-Id"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("strong",{parentName:"td"},"Required"),". A unique identifier for the call. This is to ensure idempotency. In the case of a timeout, the retry call could include the same value. Upon receiving some response, the value should be reset for the next call.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Accept"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("strong",{parentName:"td"},"Required"),'. Specifies the response type. Must be "application/json" for proper usage.')),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Content-Type"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("strong",{parentName:"td"},"Required"),'. Specifies the request type. Must be "application/json" for proper usage.')),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Authorization"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("strong",{parentName:"td"},"Required"),". Authorization token in the form ",(0,d.mdx)("inlineCode",{parentName:"td"},"Bearer <token>"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"X-Api-Key"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("strong",{parentName:"td"},"Required"),". The API Key for your integration")))),(0,d.mdx)("h3",{id:"request-body"},"Request body"),(0,d.mdx)("p",null,"None."),(0,d.mdx)("h3",{id:"response-body"},"Response body"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "externalReferenceId": "759",\n    "orderId": "0123456789",\n    "customerId": "9876543210",\n    "orderType": "NEW",\n    "referenceOrderId": "",\n    "referencedOrderId": "",\n    "currencyCode": "USD",\n    "creationDate": "2019-05-02T22:49:54Z",\n    "status": "1000",\n    "lineItems": [\n        {\n            "extLineItemNumber": 4,\n            "offerId": "80004567EA01A12",\n            "quantity": 1,\n            "subscriptionId": "86756309",\n            "status": "1000",\n            "currencyCode": "USD",\n            "deploymentId": "12345"\n        }\n    ],\n    "links": {\n        "self": {\n            "uri": "/v3/customers/9876543210/orders/0123456789",\n            "method": "GET",\n            "headers": []\n        }\n}\n')),(0,d.mdx)("h3",{id:"http-status-codes"},"HTTP status codes"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Status code"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"200"),(0,d.mdx)("td",{parentName:"tr",align:null},"Order details successfully returned")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"400"),(0,d.mdx)("td",{parentName:"tr",align:null},"Bad request")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"401"),(0,d.mdx)("td",{parentName:"tr",align:null},"Invalid Authorization token")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"403"),(0,d.mdx)("td",{parentName:"tr",align:null},"Invalid API Key")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"404"),(0,d.mdx)("td",{parentName:"tr",align:null},"Invalid customer or order ID")))),(0,d.mdx)("h2",{id:"get-the-order-history-of-a-customer"},"Get the order history of a customer"),(0,d.mdx)("p",null,"Use the ",(0,d.mdx)("inlineCode",{parentName:"p"},"GET /v3/customers/<customer-id>/orders")," API endpoint to get a customer's order history."),(0,d.mdx)("h3",{id:"assumptions"},"Assumptions"),(0,d.mdx)("p",null,"Ensure that you are aware of the following before trying out this API endpoint:"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"All parameters included in the request, besides limit and offset parameters, are queried together using ",(0,d.mdx)("inlineCode",{parentName:"li"},"AND"),"."),(0,d.mdx)("li",{parentName:"ul"},"Any parameters that are not included will default to the value in the default column."),(0,d.mdx)("li",{parentName:"ul"},"For ",(0,d.mdx)("inlineCode",{parentName:"li"},"start-date")," and ",(0,d.mdx)("inlineCode",{parentName:"li"},"end-date"),", a date without timestamp is evaluated to midnight UTC.",(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},'Dates with timestamps are only accepted in ISO-8601 format with "Zulu" (UTC) time zone. This is the same format that all dates and times are in CPAPI responses.'))),(0,d.mdx)("li",{parentName:"ul"},"The ",(0,d.mdx)("inlineCode",{parentName:"li"},"order-type"),", ",(0,d.mdx)("inlineCode",{parentName:"li"},"status"),", and ",(0,d.mdx)("inlineCode",{parentName:"li"},"offer-id")," parameters can be included multiple times to specify multiple values. Including multiple values for a parameter results in an OR operation for those values in the query.",(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("strong",{parentName:"li"},"Example:")," To query for orders that are either status 1000 or 10002:\n",(0,d.mdx)("inlineCode",{parentName:"li"},"/v3/customers/<customer-id>?status=1000&status=1002")))),(0,d.mdx)("li",{parentName:"ul"},"Results will be sorted in descending order by ",(0,d.mdx)("inlineCode",{parentName:"li"},"creationDate"),"."),(0,d.mdx)("li",{parentName:"ul"},"The maximum value for offset is the total number of results. Values higher than the total count return an error."),(0,d.mdx)("li",{parentName:"ul"},"If a ",(0,d.mdx)("inlineCode",{parentName:"li"},"limit")," greater than the maximum (100) is sent, it will default to the maximum value (100)."),(0,d.mdx)("li",{parentName:"ul"},"Links to ",(0,d.mdx)("inlineCode",{parentName:"li"},"next")," and ",(0,d.mdx)("inlineCode",{parentName:"li"},"prev")," will be included in the response if there is a valid next or previous page in the result set.")),(0,d.mdx)("h3",{id:"request-header-1"},"Request header"),(0,d.mdx)("p",null,"The request body is the same as mentioned in the ",(0,d.mdx)("a",{parentName:"p",href:"#request-header"},"previous endpoint"),"."),(0,d.mdx)("h3",{id:"query-parameters"},"Query parameters"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Parameters"),(0,d.mdx)("th",{parentName:"tr",align:null},"Values"),(0,d.mdx)("th",{parentName:"tr",align:null},"Default"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"order-type"),(0,d.mdx)("td",{parentName:"tr",align:null},"NEW, TRANSFER, or RENEWAL"),(0,d.mdx)("td",{parentName:"tr",align:null},"All"),(0,d.mdx)("td",{parentName:"tr",align:null})),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"reseller-id"),(0,d.mdx)("td",{parentName:"tr",align:null},"Valid reseller IDs"),(0,d.mdx)("td",{parentName:"tr",align:null},"All"),(0,d.mdx)("td",{parentName:"tr",align:null},"Regardless of reseller id, only orders for the partner making the request will be returned.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"status"),(0,d.mdx)("td",{parentName:"tr",align:null},"1000, 1002, 1004, or 1026"),(0,d.mdx)("td",{parentName:"tr",align:null},"All"),(0,d.mdx)("td",{parentName:"tr",align:null})),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"reference-order-id"),(0,d.mdx)("td",{parentName:"tr",align:null},"Valid order IDs"),(0,d.mdx)("td",{parentName:"tr",align:null},"All"),(0,d.mdx)("td",{parentName:"tr",align:null})),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"offer-id"),(0,d.mdx)("td",{parentName:"tr",align:null},"Valid offer IDs"),(0,d.mdx)("td",{parentName:"tr",align:null},"All"),(0,d.mdx)("td",{parentName:"tr",align:null})),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"start-date"),(0,d.mdx)("td",{parentName:"tr",align:null},"2019-05-02, 2019-05-02T22:49:54Z"),(0,d.mdx)("td",{parentName:"tr",align:null},"Current term start date"),(0,d.mdx)("td",{parentName:"tr",align:null},"Date without timestamp or with timestamp in Zulu time.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"end-date"),(0,d.mdx)("td",{parentName:"tr",align:null},"2019-05-02, 2019-05-02T22:49:54Z"),(0,d.mdx)("td",{parentName:"tr",align:null},"now"),(0,d.mdx)("td",{parentName:"tr",align:null},"Date without timestamp or with timestamp in Zulu time.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"limit"),(0,d.mdx)("td",{parentName:"tr",align:null},"1…100"),(0,d.mdx)("td",{parentName:"tr",align:null},"25"),(0,d.mdx)("td",{parentName:"tr",align:null},"Page size (max number of orders to return).")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"offset"),(0,d.mdx)("td",{parentName:"tr",align:null},"0…N"),(0,d.mdx)("td",{parentName:"tr",align:null},"0"),(0,d.mdx)("td",{parentName:"tr",align:null},"Where to start the page.")))),(0,d.mdx)("h3",{id:"response-body-1"},"Response body"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "totalCount": 9,\n    "count": 3,\n    "offset": 3,\n    "limit": 3,\n    "items": [\n        { Order resource\n        },\n        { Order resource\n        }\n    ],\n    "links": {\n        "self": {\n            "uri": "/v3/customers/<customer-id>/orders?offset=3&limit=3",\n            "method": "GET",\n            "headers": []\n        },\n        "next": {\n            "uri": "/v3/customers/<customer-id>/orders?offset=6&limit=3",\n            "method": "GET",\n            "headers": []\n        },\n        "prev": {\n            "uri": "/v3/customers/<customer-id>/orders?offset=0&limit=3",\n            "method": "GET",\n            "headers": []\n        }\n    }\n}\n')),(0,d.mdx)("h3",{id:"http-status-codes-1"},"HTTP status codes"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Status code"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"200"),(0,d.mdx)("td",{parentName:"tr",align:null},"Order history successfully returned")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"400"),(0,d.mdx)("td",{parentName:"tr",align:null},"Bad request")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"401"),(0,d.mdx)("td",{parentName:"tr",align:null},"Invalid Authorization token")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"403"),(0,d.mdx)("td",{parentName:"tr",align:null},"Invalid API Key")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"404"),(0,d.mdx)("td",{parentName:"tr",align:null},"Invalid customer ID")))))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-docs-order-management-get-order-md-4efdcfc70cbc84a66885.js.map