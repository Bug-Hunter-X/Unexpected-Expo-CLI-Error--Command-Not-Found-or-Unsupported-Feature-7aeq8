This error typically occurs when you try to use a feature or API that's not supported by the version of Expo CLI you're using.  For example, attempting to use a new EAS Build feature with an older version of the CLI will result in this unexpected error. Another scenario is using a command that has been deprecated or removed in a newer version of the CLI. 

Example:
```bash
expo start --web
Error:  Command 'start --web' not found.
```
This suggests the web support command might be deprecated or requires an updated Expo CLI version.