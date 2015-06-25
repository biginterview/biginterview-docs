## Interviews

The ability to participate in mock interview sessions is one of the defining
features of the Big Interview application.

### The interview object

The following describes the attributes related to a response containing
interview information.

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | **Integer** | The id for interview object specific to the user being request. |
| `title` | **String** | The title of the interview. |
| `interviewer_name` | **String** | The name of the interviewer asking the first question for the set. |
| `category` | **String** | The category title for this interview. **Use for display purposes only.** |
| `created_at` | **Date** | The date this interview was created at in JSON ISO 8601 format.
| `updated_at` | **Date** | The date this interview was last updated at (last activity) in JSON ISO 8601 format.
| `links.review` | **String** | The redirect path to review a completed or in-progress interview. |
| `links.retake` | **String** | The redirect path to start an entirely new interview with these same questions. **This means a new interview will be created**. |

```json
{
   "id": 95607,
   "title": "Top 10 Questions",
   "interviewer_name": "Jordan",
   "category": "Top 10 Questions: 1",
   "completed": true,
   "created_at": "2015-05-18T16:37:13.000Z",
   "updated_at": "2015-05-25T05:00:00.000Z",
   "links": {
      "review": "/members/mock_interviews/95607/review",
      "retake": "/members/mock_interviews/interview_info/52"
   }
}
```

### List interviews

<h4 class="request-type">
  <span class="label get">GET</span>
  <code>/api/users/{partner_id}/interviews</code>
</h4>

Through this endpoint, you can access information pertaining to these interviews for a specific user.

<div class="alert alert-info">
  This endpoint returns every interview the user has associated with their
  account ordered by most recently updated to least recently updated.
</div>

#### Request

```http
GET /api/users/{partner_id}/interviews HTTP/1.1
Host: {org}.biginterview.com
Accept: application/json
Authorization: {api-key}
```

#### Response

| Code | Description |
|------|-------------|
| 200 | User track progress information was loaded. |
| 404 | User whose progress is being requested does not exist. |

```json
{
   "interviews": [
      {
         "id": 95607,
         "title": "Top 10 Questions",
         "interviewer_name": "Jordan",
         "category": "Top 10 Questions: 1",
         "completed": true,
         "created_at": "2015-05-18T16:37:13.000Z",
         "updated_at": "2015-05-25T05:00:00.000Z",
         "links": {
            "review": "/members/mock_interviews/95607/review",
            "retake": "/members/mock_interviews/interview_info/52"
         }
      },
      {
         "id": 91412,
         "title": "My Best Analytical Interview",
         "interviewer_name": "Mark",
         "category": "Competency/Skillset: Analytical Skills",
         "completed": false,
         "created_at": "2015-04-30T20:44:21.000Z",
         "updated_at": "2015-05-01T21:00:10.000Z",
         "links": {
            "review": "/members/mock_interviews/91412/review",
            "retake": "/members/mock_interviews/interview_info/443"
         }
      }
   ]
}
```

[anon]: #anonymous-users
[user-id]: #user-id
[user-create]: #create-refresh-a-user
