# RNContactsDemo
An examle React Native app that demonstrates how access a user's 
phone contacts.

## Requirements

### List Contacts
As a User, I want to see a list of all the contacts on my phone
* Verify I can view the first 10 contacts returned
**[DONE]**

### Create Contacts
As a User, I want to create a contact, so that I can add a new
appointment to my calendar.
* Verify I can launch the phone's **Add Contact Form**
* Verify I can enter the fields in the **Add Contact Form**
* Verify error handling, assuming that I'll need to enter a name

### Edit Contact 
As a User, I want to be able to edit a contact, so that I can update
the contact's details (e.g., email, mobile number, address,...)
* Verify I can open the contact in the phone's **Contact Phone**
* Verify I can edit the contact's details
* Verify the changes are saved in the phone's contacts.
**[DONE]**

### Delete Contact
As a User, I want to be able to delete a contact, so that I can
remove old contacts.
* Verify I can remove contact

### Search Contact
As a User, I want to be able to search for a contact, that I can
use an existing contact instead of adding a duplicate new contact
* Verify that I can type the contact's name and it returns a list of
matching contacts
* Verify that I can select a contact from the search results

### Try fusejs.io
[fusejs.io](https://fusejs.io) is a lightweight javascript fuzzy search
library that would let me search on other fields besides first and last
name such as email, phone, company, ....

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


