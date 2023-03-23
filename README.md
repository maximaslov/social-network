# Social Network

A social network is a demonstration single-page application with limited functionality and an amateur design. The main goal of creating this application is to showcase my skills in working with modern technologies and class components.

## To login:

email: free@samuraijs.com
<br/>
password: free
<br/>
## Briefly about the functionality:
<br/>
1.  It is possible to log in to the site using a login and password. Validation occurs at all levels, starting with checking whether the data entered in the "email" field is a valid email address and ending with checking the correctness of the entered data.<br/>
2.  If the same user logs in and out of the account 10 times in a row, the server will request the entry of a captcha, which I also processed.<br/>
3.  After logging in, the user can access the message section.<br/>
4.  It is possible to view a list of all registered users.
5.  Each member can be subscribed or unsubscribed from, provided they have logged into their account.
6.  It is possible to go to the profile page of each user.
7.  The status on the profile page can be changed. To do this, simply click the status once, make changes, then click the mouse in any location or press "Enter" on the keyboard.
8.  New posts can be added on the profile page. The text input field also has validation for the minimum and maximum number of characters. (Only works locally. Data will be lost after page refresh).
9.  When trying to access the profile or message page, if the user is not authorized, they will be redirected to the login page.
10.  If the user does not have a profile photo, a placeholder image with a human silhouette is displayed.
11.  The design is adapted to devices with screens of any size.
<br/>
## Tools used:
<br/>
* The CSS Grid module was used for program layout and adaptive behavior.
* Redux was used as the state manager.
* React Router DOM was used to track the URL and display components accordingly.
* The useFormik hook from Formik was used to create forms.
* The connect function from the React-Redux package was used to create container components that are connected to the Redux store.
* The Axios package was used to send requests to the server.
<br/>
>To correctly launch the project on the local server, in the App.js file replace
"<HashRouter basename={process.env.PUBLIC_URL}></HashRouter>"
on "<BrowserRouter></BrowserRouter>"
