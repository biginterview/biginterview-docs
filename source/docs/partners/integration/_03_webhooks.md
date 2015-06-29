## Webhooks

<div class="alert alert-info">
  This is a draft document for functionality that has not been implemented yet.
</div>

Our webhook integration allows you to setup your application to receive
notifications about specific events related to activity and actions your users
take while using the Big Interview web application.

### Registering webhooks

Registering webhooks will be done through the admin dashboard and detailed here.
There may be some authentication mechanism per webhook that will enable you to
verify it came from Big Interview.

### Example Webhook Object

This is an example **json** payload that will be **POST**-ed to your registered
webhook endpoint.

```json
{
  "id": "123456789",
  "url": "https://yourapplication.com/webhooks/biginterview",
  "event": "interview.created",
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

### List of Events

The following is a list of events our webhook notification service will send
out.

| Event Name | Object | Description |
|------------|--------|-------------|
| `interview.created` | [**Interview**][interview] | A user created an interview. |
| `interview.updated` | [**Interview**][interview] | An interview has been updated in our system. This might indicate a `completed` status change, among other things. |
| `interview.deleted` | [**Interview**][interview] | A user has deleted their interview. |



[interview]: #the-interview-object
