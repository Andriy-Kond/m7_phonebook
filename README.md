# Getting Started with Create React App and Redux

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Бекенд

Створи свій персональний бекенд для розробки за допомогою UI-сервісу [mockapi.io](mockapi.io). Зареєструйся використовуючи свій обліковий запис GitHub. Створи ресурс `contacts` щоб отримати ендпоінт `/contacts`. Використай конструктор ресурсу та опиши об'єкт контакту як на ілюстрації.
![alt text](api.png)

## Форма Стану

Додай у стан Redux обробку індикатора завантаження та помилки. Для цього зміни форму стану.

    {
      contacts: {
        items: [],
        isLoading: false,
        error: null
      },
      filter: ""
    }

## Операції

Використовуй функцію [createAsyncThunk](https://redux-toolkit.js.org/api/createAsyncThunk) для оголошення асинхронних генераторів екшенів та виконання HTTP-запитів. Обробку екшенів та зміну даних у стані Redux зроби за допомогою [createSlice](https://redux-toolkit.js.org/api/createSlice).

Оголоси наступні операції:

- fetchContacts - одержання масиву контактів (метод GET) запитом. Базовий тип екшену `"contacts/fetchAll"`.
- addContact - додавання контакту (метод POST). Базовий тип екшену `"contacts/addContact"`.
- deleteContact - видалення контакту (метод DELETE). Базовий тип екшену `"contacts/deleteContact"`.
