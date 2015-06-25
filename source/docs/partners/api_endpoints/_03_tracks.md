## Track Progress

Big Interview currently offers two guided learning tracks to get users started
utilizing all the content the service has to offer. In the app, we display this
information as a progress bar linked to a panel presenting a step-by-step guide
to completing the track:

![App Tracks](/assets/images/api/app_tracks.png)

### The track object

The following describes the attributes related to a response containing track
progress information.

| Parameter | Type | Description |
|-----------|------|-------------|
| `title` | **String** | The title of the track. |
| `progress` | **Float** | The track completion status from `0.00` to `1.00` |
| `tracks` | **Array** | An array of track items. |
| `tracks[n].step` | **Integer** | The step number of this track item. |
| `tracks[n].title` | **String** | The title of this track item. |
| `tracks[n].step` | **String** | The redirect path to send the user to this track item. |
| `tracks[n].completed` | **Boolean** | If the user has completed this step yet has been completed. |

```json
{
  "title": "Fast Track",
  "progress": 1.00,
  "tracks": [
    {
      "step": 1,
      "title": "Tell me about yourself",
      "link": "/members/curriculum?chapter=5",
      "completed": true
    }
  ]
}
```

### List track progress

<h4 class="request-type">
  <span class="label get">GET</span>
  <code>/api/users/{partner_id}/tracks</code>
</h4>

Through this endpoint, you can access the exact same information displayed on
these panels and display it back to users inside your application.

#### Request

```http
GET /api/users/{partner_id}/tracks HTTP/1.1
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
  "tracks": [
    {
      "title": "Fast Track",
      "progress": 1.00,
      "tracks": [
        {
          "step": 1,
          "title": "Tell me about yourself",
          "link": "/members/curriculum?chapter=5",
          "completed": true
        }
      ]
    },
    {
      "title": "Mastery Track",
      "progress": 0.50,
      "tracks": [
        {
          "step": 1,
          "title": "Job Interview Fundamentals",
          "link": "/members/curriculum?chapter=1",
          "completed": true
        },
        {
          "step": 2,
          "title": "Why do you want to work here?",
          "link": "/members/curriculum?chapter=6",
          "completed": false
        }
      ]
    }
  ]
}
```
