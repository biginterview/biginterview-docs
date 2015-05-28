# Partner API: Getting Started

This section describes generating API Keys for authenticating requests, making
those requests, and the API endpoints available to your organization. Some of
these endpoints go **hand-in-hand** with our [integration guides][integrations]
below. For instance, our Single Sign On integration requires generating a
temporary token through our API before redirecting your user to the Big
Interview application.

Everything you need to communicate with the Big Interview Partner API is
described in the sections below:

## API Keys

To access the API described below, you need to generate **API Keys** through
your organization's admin area. It can be reached by replacing `{org}`
in the following url with the subdomain for your organization:

```
https://{org}.biginterview.com/login/admin
```

<div class="alert alert-info">
  Logging in and managing API Keys requires that an administrator account has
  already been created for you.
</div>

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
  to provide scoped access on a per-user basis to the organization admin area,
  but they have not been implemented.
</div>

Once you have at least one valid API key for your organization you will be able
to access the endpoints specific to your organization in the way described in
the section below.

## Making Requests

Once your organization has at least one [API Key][api-keys], you can start
making requests to the Big Interview API. These requests will typically take the
following HTTP format:

```http
GET /api/{endpoint} HTTP/1.1
Host: {org}.biginterview.com
Accept: application/json
Authorization: {api-key}
```

Take, for example, the following scenario for **XYZ Corporation**:

* They have a Big Interview account at `xyz.biginterview.com`.
* They created the following API Key: `935d85189822bf96c28c4fa79d3d8f31`.
* They would like to get a user's progress and that user has an `id` of `123`.

A request based on that information will take the following HTTP format:

```http
GET /api/users/123/progress HTTP/1.1
Host: xyz.biginterview.com
Accept: application/json
Authorization: 935d85189822bf96c28c4fa79d3d8f31
```

## Identifying Users

Most REST-based APIs identify singular resources by a unique `id` attribute. For
example, fetching a singular User on a given API might might have a resource URI
like `/users/:id`. Most of the time, the application backing the API will
generate these unique ids for you, however, the Big Interview Partner API works
a bit differently in that these unique ids are actually supplied by the partner
during [initial account creation][create-user].

When making API calls on behalf of a Big Interview User, you will be responsible
for supplying a `partner_id` attribute that will uniquely identify the user in
both your system and the Big Interview application.

#### ID Format

The `partner_id` provided should abide by the following rules.

* May contain any number: `0-9`.
* May contain any letter (lower or uppercase): `a-z`/`A-Z`.
* May contain a `-` (dash) or a `_` (underscore).
* May have a character length between `1` and `64`.
* **May not contain any other characters.**

If this is a problem with your system, please let us know as soon as possible.

<div class="alert alert-info">
  In the examples that follow, please remember to replace
  <code>{partner_id}</code> with your user's unique id.
</div>

[integrations]: #partner-integrations
[api-keys]: #api-keys
[create-user]: #create-or-update-a-user
