# Partner APIs

This section describes the API endpoints available to your organization. Some of
these endpoints go **hand-in-hand** with our of the
[integration guides][integrations] below.  

## API Keys

<div class="alert alert-info">
  Managing API Keys requires that an administrator account has already been
  created for you.
</div>

To access the API described below, you need to generate **API Keys** through
your organization's admin area. To generate these Keys, you can do so through
your organizations admin area. It can be reached at the following URL by
replacing `{ORG_SUBDOMAIN}` with the subdomain for your organization:

```
https://{ORG_SUBDOMAIN}.biginterview.com/login/admin
```

Once there, a link entitled **API Keys** will be visible in the dropdown list
under your name in the top navigation menu. Visiting that section will allow you
to both **create** and **delete** API Keys for your organization. Our API Keys
will take the format of a `32` character, randomized string similar to the
following example key:

```
935d85189822bf96c28c4fa79d3d8f31
```

<div class="alert alert-warning">
  It is important to note that <strong>API Keys are not specific to the admin
  that created them</strong> and that all API Keys generated for an organization
  will be visible to all administrators of that organization. There are plans
  to provide managed access scopes the organization admin area, but they have
  not been implemented.
</div>

Once you have at least one valid API key for your organization you will be able
to access the endpoints specific to your organization in the way described in
the section below.

## Making Requests

Once your organization has at least one [API Key][api-keys], you can start
making requests to the Big Interview API. These requests will typically take the
following HTTP format:

```http
GET /api/{ENDPOINT} HTTP/1.1
Host: {ORG_SUBDOMAIN}.biginterview.com
Accept: application/json
Authorization: {API_KEY}
```

Take, for example, the following scenario for **XYZ Corporation**:

* They have a Big Interview account at `xyz.biginterview.com`.
* They have to following API Key: `935d85189822bf96c28c4fa79d3d8f31`.
* The would like to get a user's progress who has an `id` of `123`.

A request based on that information will take the following HTTP format:

```http
GET /api/users/123/progress HTTP/1.1
Host: xyz.biginterview.com
Accept: application/json
Authorization: 935d85189822bf96c28c4fa79d3d8f31
```


[integrations]: #partner-integrations
[api-keys]: #api-keys
