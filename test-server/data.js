
module.exports =   {
    "authId": "eyAidHlwIjogIkpXVCIsICJhbGciOiAiSFMyNTYiIH0.eyAib3RrIjogImUwdWprZnB0aHM1ZjNvMDFvaXVqYjdlOWdoIiwgInJlYWxtIjogImRjPW9wZW5hbSxkYz1mb3JnZXJvY2ssZGM9b3JnIiwgInNlc3Npb25JZCI6ICJBUUlDNXdNMkxZNFNmY3hFa1FpVHE5TzA3clFGTWZpbFZqWU9lNXVfX0xkUkdKUS4qQUFKVFNRQUNNREVBQWxOTEFCSXpOalV5TlRJNU56UXhOalEyT1RFNE9EY0FBbE14QUFBLioiIH0.U0Bp5jzRA6LfhJQlN9EFBrRLcDobYR0KhYS9VGfYmpQ",
    "template": "",
    "stage": "DataStore1",
    "header": "Sign in to test test test",
    "callbacks": [
        {
            "type": "NameCallback",
            "output": [
                {
                    "name": "prompt",
                    "value": "User Name:"
                }
            ],
            "input": [
                {
                    "name": "IDToken1",
                    "value": ""
                }
            ]
        },
        {
            "type": "PasswordCallback",
            "output": [
                {
                    "name": "prompt",
                    "value": "Password:"
                }
            ],
            "input": [
                {
                    "name": "IDToken2",
                    "value": ""
                }
            ]
        }
    ]
};