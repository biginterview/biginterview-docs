# Partner Integrations

## Single Sign On

Our Single Sign On integration allows users of your application to login to Big
Interview without having to enter a password. This is accomplished by generating
a token using our Partner API and redirecting the user to a specific URL with
that token.

### Overview

The Single Sign On Integration is a simple, 2-step process, both being outlined
below:

1. [Generate an SSO Token][sso-step-1]
2. [Redirect to Big Interview with the token][sso-step-2]

### Step 1: Generating the SSO Token

Generating the token needed for Single Sign On is outlined in the our
[API docs][user-create] above, but the following might be an example request and
response for a user with a `partner_id` of `abc123`:

```http
POST /api/users/abc123 HTTP/1.1
Host: xyz.biginterview.com
Accept: application/json
Authorization: 935d85189822bf96c28c4fa79d3d8f31
```

```json
{
  "user": {
    "partner_id": "abc123",
    "created_at": "2015-01-01T00:00:00.000Z",
    "anonymous": false,
    "token": {
      "token": "19633c68",
      "expires_at": "2016-05-28T17:16:18.817Z"
    }
  }
}
```

The `user.token` object contains the `token` attribute which should be used in
[Step 2][sso-step-2] of the Single Sign On process. In the above example, this
would be `19633c68`.

### Step 2: Redirecting to Big Interview

With the token from [Step 1][sso-step-1] in hand, your client should then
redirect the user to your organizations SSO URL. That URL will take the following
format:

```
https://{org}.biginterview.com/sso/login?token={token}
```

Assuming **XYZ Corporation** has a Big Interview application at the
`xyz` subdomain, and they would like to login the user using the token returned
from [Step 1][sso-step-1], the SSO Redirect URL will take the following format:

```
https://xyz.biginterview.com/sso/login?token=19633c68
```

After performing this redirect, the Single Sign On process is complete and your
user will be logged in to the Big Interview web application.

[sso-step-1]: #step-1-generating-the-sso-token
[sso-step-2]: #step-2-redirecting-to-big-interview
[user-create]: #create-refresh-a-user
