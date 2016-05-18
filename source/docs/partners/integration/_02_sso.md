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

### SSO Secondary Redirects

By default, users signing in to Big Interview through the SSO integration
will be redirected to the member dashboard, which is at the following URL:

```
https://{org}.biginterview.com/members/dashboard
```

To have this integration redirect the user to different section of the Big
Interview application, you can supply a `redirect_to` parameter to the SSO login
resource URL and we will point the user there after login instead.

#### Example

Say you want to direct the user to a yet to be completed item in one of Big
Interview's track guides and you have the following information:

* You have the following SSO token for one of their users: `935d85189822bf9c`.
* You would like to direct that user to an uncompleted track located at
  `/members/curriculum?chapter=6`.

We can do that with the following URL parameters:

```
token=935d85189822bf9c&redirect_to=%2Fmembers%2Fcurriculum%3Fchapter%3D6
```

<div class="alert alert-warning">
  Please note the difference in the link returned by the
  <a href="#retrieve-track-progress">track progress</a> endpoint and the one
  supplied to the SSO login integration.
</div>

* **Track Progress Response:** `/members/curriculum?chapter=6`.
* **SSO Redirect Parameter:** `%2Fmembers%2Fcurriculum%3Fchapter%3D6`.

Note that the parameters supplied to the SSO integration are encoded. That part
of the SSO process is something that your client library is responsible for.

### User Return URL

By default, your users will be redirected to the Big Interview landing page for
your organization after they logout. If that is not where you would like them to
end up, you can supply us with a `return_url` parameter during the SSO login.
For instance, if you want the user to be redirected to `https://google.com/`
after they logout, you would construct your SSO login url like so:

```
token=935d85189822bf9c&return_url=https%3A%2F%2Fgoogle.com%2F
```

<div class="alert alert-warning">
  Please note the <strong>return_url</strong> parameter must also be URL
  encoded.
</div>

[sso-step-1]: #step-1-generating-the-sso-token
[sso-step-2]: #step-2-redirecting-to-big-interview
[user-create]: #create-refresh-a-user
[user-track]: #retrieve-track-progress
