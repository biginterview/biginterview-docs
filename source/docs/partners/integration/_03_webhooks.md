## Webhooks

<div class="alert alert-info">
  These documents represent a 99% finalized version of the webhook
  functionality, but should still be considred drafts.
</div>

Webhooks are a system of automated notifications indicating that an event has
occurred which was linked to one of your users in our system. Rather than
requiring you to pull information via our API, webhooks push information to
your destination when important events occur.

Notifications are are delivered via **HTTP POST** requests to a destination
endpoint on your server and are sent based on a [list of events][list]. Each
webhook contains a notification type and the full API object that the
notification is reporting on. This information can be used to update your
system or to trigger business processes.

### Registering webhooks

Registering a webhook can be done through your organization's admin area, which
be reached by replacing `{org}` in the following url with the subdomain for
your organization:

```
https://{org}.biginterview.com/admin/login
```

Once there, a link entitled **API Settings** will be visible in the dropdown
list under your name in the top navigation menu. Visiting that section will
allow you to both **create** and **delete** webhooks for your organization. When
you create a webhook, we also supply you with an accompanying verification key
which is sent along in the `Authorization` header of our **POST** request.

### Handling webhooks

Assuming the following webhook registration details:

* **URL**: `https://app.mywebsite.com/webhooks/biginterview`
* **Key**: `935d85189822bf96c28c4fa79d3d8f31`

Your endpoint should be able to handle the following request:

```http
POST /webhooks/biginterview HTTP/1.1
Host: https://app.mywebsite.com
Authorization: 935d85189822bf96c28c4fa79d3d8f31
Accept: */*; q=0.5, application/xml
Accept-Encoding: gzip, deflate
Cache-Control: no-cache
Connection: close
Content-Length: 158
Content-Type: application/json; charset=utf-8
User-Agent: BigInterview/1.0

{
  "id": "123456789",
  "event": "example.event",
  "user": {
    "partner_id": "{partner_id}"
  },
  "object": {
    "type": "Example",
    "data": {}
  }
}
```

#### Retries

We will resend webhook notifications every 10 minutes for a total of 6 attempts
until both of the following are true:

* The webhook completes within 30 seconds.
* The webhook receives a `200` response.

#### Volume and Order

We strive to send webhook notifications as quickly as events occur in our
system and in the exact order that these events occur.

However, we can only guarantee that events are sent out and received in the
order they occur in our system if your webhook receives

### The webhook object

This is an example **json** payload that will be **POST**-ed to your registered
webhook endpoint.

```json
{
  "id": "123456789",
  "event": "interview.created",
  "user": {
    "partner_id": "{partner_id}"
  },
  "object": {
    "type": "Interview",
    "data": {
       "id": 95607,
       "title": "Top 10 Questions",
       "interviewer_name": "Jordan",
       "category": "Top 10 Questions: 1",
       "completed": true,
       "created_at": "2015-05-18T16:37:13.000Z",
       "created_at": "2015-05-18T16:37:13.000Z",
       "links": {
          "review": "/members/mock_interviews/95607/review",
          "retake": "/members/mock_interviews/interview_info/52"
       }
    }
  }
}
```

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **String** | The unqiue id that represents this webhook notification in our system. |
| `event` | **String** | The name for the event from our [list of events][list] that this webhook is notifying you of. |
| `user.partner_id` | **String** | The unique partner id for the user that triggered the event. |
| `object.type` | **String** | The type of object represented by this webhook. See examples in the **Object** column from our [list of events][list]. |
| `object.data` | **Object** | The data for the object being represented. See links in the **Object** column from our [list of events][list]. |

### List of Events

The following is a list of events our webhook notification service will send
out.

| Event Name | Object | Description |
|------------|--------|-------------|
| `interview.created` | [**Interview**][interview] | A user created an interview. |
| `interview.updated` | [**Interview**][interview] | An interview has either become complete or incomplete. |
| `interview.deleted` | [**Interview**][interview] | A user has deleted their interview. |



[interview]: #the-interview-object
[list]: #list-of-events
