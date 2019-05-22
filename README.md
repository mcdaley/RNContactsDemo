# RNContactsDemo
An examle React Native app that demonstrates how access a user's 
phone contacts.

## Layout
Typically, an App's logic will be built in 3 separate functionalities that
are not dependent on each other. The App here uses the SwitchNavigation
component to organize the App into 3 separate sections, where each the
screens for each section are organized in a sub-directory of src/screens:

* **Auth**      - Screens for authentication, e.g., sign-in, sign-up
* **App**       - Screens for the main app functionality
* **Settings**  - Screens for setting up the user profile and configuration

### Authentication Navigation
The app provides the screens and workflow to implement sign-in and sign-up
for the application. When a user starts the app, the auth-loading screen
will check to see if the user is logged-in by checking for a token using
the async-storage. If the use is logged-in then the user is navigated to 
the Home page, otherwise the user is navigated to the Sign In page.

### App Navigation
Users can navigate to different sections of the app by clicking on the
bottom tabs. Each tab is implemented using **stack navigation**, so users
can drill down on the screens in each tabbed section.

### Settings Navigation
Most apps have a section for managing the user profile. Since settings
navigation is separate from the main app navigation, the settings
navigation is built using the SwitchNavigator. When a user clicks on the
gear then the user is directed to the __Settings__ navigation. The user
can click the **Done** button to navigate back to the __App__ navigation.

### Stack Navigation
The sections of the app are broken down into **stacked** screens, so 
users can drill down to the details of each section.

## To Do
[x] * Centralize styling
* Header Formats
  - Search Window and link to url/uri.
* Add Modal screen
* Do I need to create a higher order component to manage signed-in users?

## To Do
* Figure out how to add the default header to the createBottomTabNavigator
  section. I have added the header styling to the createStackNavigation, which
  is OK for now.

