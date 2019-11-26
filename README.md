Ticket manager for studeal
==========================

## Questions
- How to get participant id from its number

## API endpoints

### Ticket QR code
```http
https://studeal.fr/evenements/{eventName}_{eventId}/participants/{participantNumber}/check
```

### Check participant
```http
https://api.studeal.fr/v1/events/{eventId}/participant-check?code={participantNumber}
```

### Participant information
```http
https://api.studeal.fr/v1/events/{eventId}/participants/{participantId}
```

*Result:*
```json
{
    "id": 100000,
    "user": {
        "id": 1000000,
        "first_name": "Jean",
        "last_name": "Dupond",
        "avatar": {
            "path": "https://s3.amazonaws.com/studeal-cdn/images/user-avatar.svg"
        },
        "fullname": "Jean Dupond"
    },
    "validate": false,
    "had_deposit_given": false,
    "has_transport": false,
    "has_accommodation": false,
    "amount_paid": 9,
    "total": 9,
    "is_organizer": false,
    "order_line": {
        "id": 260795,
        "order": {
            "id": 218421,
            "number": "465FF64F47AB34C",
            "user": {},// same as current user
            "origin": 1,
            "state": 1,
            "total": 9.23,
            "created": "2019-11-26T10:58:21+0000",
            "updated": "2019-11-26T11:01:12+0000"
        },
        "vouchers": [
            {
                "id": 109528,
                "security_code": "465FF64F47AB34C",
                "url": "https://addr.to/file.pdf"
            }
        ]
    },
    "ticket": {
        "id": 3270,
        "name": "Ticket name",
        "fee": {
            "slug": "fee-buyer",
            "title": "Transmettre les frais à l'acheteur"
        }
    },
    "first_name": "Jean",
    "last_name": "Dupond",
    "email": "email@domain.tld",
    "phone": "+33611223344",
    "lists": [
        {
            "id": 9404,
            "name": "Participants",
            "event": {
                "followed": true,
                "is_organizer": true,
                "is_participant": false
            },
            "is_editable": false
        }
    ],
    "answers": [],
    "created": "2019-11-26T11:01:12+0000",
    "updated": "2019-11-26T11:01:12+0000",
    "payment_type": {
        "slug": null,
        "name": ""
    }
}
```

## Subscriptions
```http
https://api.studeal.fr/v1/events/{eventId}/participants/{participantId}/subscribers
```

## Participants list
```http
https://api.studeal.fr/v1/events/{eventId}/participants?is_participant=1
```

*Result:*
```json
{
    "participants": [
        {
            "id": 100000,
            "user": {
                "id": 100000,
                "first_name": "Jean",
                "last_name": "Dupond",
                "avatar": {
                    "path": "https://s3.amazonaws.com/studeal-cdn/images/user-avatar.svg"
                },
                "marketing_enabled": false,
                "newsletter_subscription": false,
                "fullname": "Jean Dupond"
            },
            "amount_paid": 6,
            "total": 6,
            "is_organizer": false,
            "order_line": {
                "order": {
                    "origin": 1
                }
            },
            "ticket": {
                "id": 100000,
                "name": "Ticket name",
                "fee": {
                    "slug": "fee-buyer",
                    "title": "Transmettre les frais à l'acheteur"
                }
            },
            "first_name": "Jean",
            "last_name": "Dupond",
            "email": "email@domain.tld",
            "phone": "+33611223344",
            "created": "2019-11-19T19:36:25+0000",
            "updated": "2019-11-19T19:36:26+0000",
            "payment_type": {
                "slug": null,
                "name": ""
            }
        }
        //...
    ]
}
```
