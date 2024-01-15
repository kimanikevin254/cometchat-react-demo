# CometChat React Chat App

This repo contains code for a real time chat app that has ben built using React and CometChat's UIKit for React.

The application supports one-to-one chatting, channels, and audio and video calls. With CometChat's UIKit for React, you can customize options such as user prescence, typing status, read receipts, and [more](https://www.cometchat.com/docs/web-shared/conversations-configuration). You can also implement robust moderation and canned conversation starters.

To run the project locally:

1. Clone the repo.

    ```bash
    git clone https://github.com/kimanikevin254/cometchat-react-demo.git
    ```

2. Create a `.env` file in the root folder with the following values which you can obtain from the CometChat dashboard.

    ```bash
    VITE_APP_ID=<YOUR-APP-ID>
    VITE_REGION=<YOUR-APP-REGION>
    VITE_AUTH_KEY=<YOUR-APP-AUTH-KEY>
    ```

3. Install the necessary dependencies.

    ```bash
    npm i
    ```

4. Run the development server.
    ```bash
    npm run dev
    ```
