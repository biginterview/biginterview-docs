## Webhooks

Our webhook integration allows you to setup your application to receive
notifications about specific events related to activity and actions your users
take while using the Big Interview web application.

### List of Events

The following is a list of events our webhook notification service will send
out.

| Event Name | Object | Description |
|------------|--------|-------------|
| `interview.created` | [**Interview**][interview] | A user created an interview. |
| `interview.updated` | [**Interview**][interview] | An interview has been updated in our system. This might indicate a `completed` status change, among other things. |
| `interview.deleted` | [**Interview**][interview] | A user has deleted their interview. |

[interview]: #the-interview-object
