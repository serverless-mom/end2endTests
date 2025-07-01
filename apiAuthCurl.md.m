$ curl -H "Authorization: Bearer cu_a2c51f0c88ee44ae8f7c1fc506773b87" -H "X-Checkly-Account: 6cd9836c-6969-49b0-8e09-611c7775c7b4" https://api.checklyhq.com/v1/checks


curl -H "X-Checkly-Account: 6cd9836c-6969-49b0-8e09-611c7775c7b4" -H "Authorization: Bearer cu_a2c51f0c88ee44ae8f7c1fc506773b87" https://api.checklyhq.com/v1/checks





Reporting, filtered to checks tagged 'mac'
```bash
curl --request GET \
     --url 'https://api.checklyhq.com/v1/reporting?quickRange=last24Hrs&filterByTags=mac&deactivated=false' \
     --header 'Authorization: Bearer cu_a2c51f0c88ee44ae8f7c1fc506773b87' \
     --header 'accept: application/json' \
     --header 'x-checkly-account: 6cd9836c-6969-49b0-8e09-611c7775c7b4'
```
results:

```json
[
  {
    "name": "top-sellers.spec.ts",
    "checkId": "bd9d4ad4-3cbc-44a4-b07d-d738c3887e16",
    "checkType": "BROWSER",
    "deactivated": false,
    "tags": [
      "mac"
    ],
    "aggregate": {
      "successRatio": 100,
      "avg": 5378,
      "p95": 6634,
      "p99": 8384
    }
  },
  {
    "name": "web-shop.spec.ts",
    "checkId": "4f277efa-6893-4ade-85e6-9e1024523b42",
    "checkType": "BROWSER",
    "deactivated": false,
    "tags": [
      "mac"
    ],
    "aggregate": {
      "successRatio": 100,
      "avg": 3805,
      "p95": 4377,
      "p99": 4867
    }
  }
]
```

```bash
curl --request GET \
     --url 'https://api.checklyhq.com/v1/analytics/browser-checks/bd9d4ad4-3cbc-44a4-b07d-d738c3887e16?quickRange=lastMonth&metrics=availability&limit=10&page=1' \
     --header 'Authorization: Bearer cu_a2c51f0c88ee44ae8f7c1fc506773b87' \
     --header 'accept: application/json' \
     --header 'x-checkly-account: 6cd9836c-6969-49b0-8e09-611c7775c7b4'
```



```json
{
  "checkId": "bd9d4ad4-3cbc-44a4-b07d-d738c3887e16",
  "name": "top-sellers.spec.ts",
  "checkType": "BROWSER",
  "activated": true,
  "muted": false,
  "frequency": 10,
  "from": "2025-01-01T00:00:00.000Z",
  "to": "2025-01-31T23:59:59.999Z",
  "tags": [
    "mac"
  ],
  "series": [
    {
      "data": [
        {
          "total": 4464,
          "success": 4464,
          "availability": 100
        }
      ]
    }
  ],
  "metadata": {
    "availability": {
      "unit": "percentage",
      "label": "Availability"
    }
  },
  "pagination": {
    "page": 1,
    "limit": 10
  }
}
```