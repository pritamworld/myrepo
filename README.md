# GitHub Webhooks

GitHub Webhooks notify an external service when a specific event (e.g., push, pull request, issue update) happens in a repository.
## Create a Webhook
1. Go to your GitHub repository.
2. Click Settings → Webhooks.
3. Click Add webhook.
4. Set the Payload URL (where GitHub will send the event data).
5. Choose the Content type (application/json or application/x-www-form-urlencoded).
6. Select the events you want to trigger the webhook.
7. Click Add webhook.

## Run the Server

```bash
node server.js
```

## Expose your server to the internet using ngrok

```bash
ngrok http 3000
```

Use the generated <https://xyz.ngrok.io> URL as your Payload URL in the GitHub webhook settings.
## Testing Webhook
1. Push a commit to your GitHub repo.
2. The server should log the event data.
