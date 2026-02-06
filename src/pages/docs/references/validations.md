# Validations and regular expressions

|Field Name | Resource/Object | Regular Expression (Java String) | Notes|
|:----|:----|:----|:----|
|companyName | CompanyProfile | `^[\\p{L}\\p{N}_ ,.＆&・\\'()（）\\\"\\/-]{4,80}$`| Full Unicode letter and number support – no normalization is done.|
|firstName | Contact | `^[\\p{L}\\p{N}-_ ,.＆&'\\\"]{1,35}$`| Full Unicode letter and number support – no normalization is done.|
|lastName | Contact | See the [regular expression given in the following section](#regular-expression-for-contact). |Source: [emailregex.com](https://emailregex.com/)|
|postalCode | Address | Varies based on country. Please see the [Supported Countries and Locales](supported-locales.md) section| |

#### Regular expression for contact

```java
ACCOUNT_ID_REGEX = "^[\\p{L}\\d\\-]{4,40}$";

COMPANY_NAME_REGEX = "^[\\p{L}\\p{N}\\_ 　,.＆&・\\'()（）\\\"\\/-]{3,250}$";

NAME_REGEX = "^[\\p{L}\\p{N}\\-_ 　,.＆&'\\\"]{1,35}$";

COTERM_DATE_REGEX = "^(\\d{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[12][0-9]|3[01]))?$";

XSS_REGEX = '^[^<>[\\"]]*$';

EMAIL_REGEX =
  "(?:[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*|\"(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21\\x23-\\x5b\\x5d-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])*\")@(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-zA-Z0-9-]*[a-zA-Z0-9]:(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21-\\x5a\\x53-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])+)\\])";
```
