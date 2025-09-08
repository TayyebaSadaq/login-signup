# Login and Signup Page
### Pre-requisites
- make a react app
- install firebase for authentication

### Creating the login-signup component
- make a seperate "Authform.js" in "scr/components"
    - this keeps your files clean and organised as you work since with a full stack app you would have multiple components.
- the component "Authform.js" is then going to be called by "App.js" to render the form for users to use

### Authform.js
- component states

    1. email + password -> store user input
    2. isLogin -> boolean to toggle between "login" and "signup"
    3. error -> error messages in authentication
    4. loading -> indicates request is in progress

- handle submit function

    1. check if isLogin (True - log into existing account),(False - creating new account)
    2. alert used for successful login and error messages

### App.js
- call to Authform.js to load the form on screen for users