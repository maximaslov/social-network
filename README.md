To login:

email: free@samuraijs.com
password: free


What tools did I use:

1. The CSS Grid module was used to mark up the application and its adaptive behavior.

2. I used Redux as a state manager.

3. React Router DOM was used to track the URL string and render the components accordingly

4. UseFormik() hook from Formik was used to create forms.

5. To create container components (higher-order) that are connected to the Redux store, the connect function from the React-Redux package was used.

6. The Yup library was used for form validation.

7. The Axios library was used to interact with the server.

8. Also used hooks useState, useEffect, useNavigate.



Instruction

1. You can log in to the site using your username and password. All components are authenticated, data availability is checked, data is entered in the "email" field with a valid address, and a set of characters, and the correctness of the entered data is checked.

2. If the same user logs in and logs out 10 times in a row, the server will ask for a captcha, which I also processed.

3. After logging in, the user has the opportunity to open the message section.

4. It is possible to view a list of all registered users.

5. At each stage, you can subscribe or unsubscribe from him, provided that the login is made in the account.

6. You can go to the profile of each user.

7. You can change the status on your profile page. To do this, just click once on the status with the mouse, make changes to it, then click anywhere with the mouse, or press "Enter" on the keyboard.

8. You can add new posts on your profile page. The text input field also contains validation for the minimum and maximum number of characters. (Only works locally. Data will be lost after the page reload).

9. When trying to go to the profile or messages page, if the user is not authorized, he will be redirected to the account login page.

10. The design is adapted to devices with any screen size.