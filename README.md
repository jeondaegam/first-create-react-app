# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


### 2.2 Create React element
- ?????? ???????????? ?????? (never use)
```java script
<script>
	const span = React.createElement("span", {id: "sexy-span", style: {color: "red"}}, "Hello, I'm a  span" );
	const root = document.getElementById("root");
	ReactDOM.render(span, root);
</script>
```

### 2.3 Events in React
- React JS??? ?????????
- ?????? 3?????? ????????? html element??? ???????????? event listener??? ???????????? content??? ?????????.
```java script
	const btn = React.createElement("button", {
        onclick: () => console.log("Im clicked"),
    }, "Click me");
```

### 2.4 Recap
- React JS: interactivity??? ?????????
- ReactDOM: React Element??? ????????? HTML??? ?????????.

### 2.5. CreateElement??? ???????????? ?????? ??????
- JSX : A syntax extention to JavaScript
	- HTML??? ?????? ???????????? ????????? ???????????? ?????? ????????????.
```java script
    // const h3 = React.createElement("h3", {
    //     onMouseEnter: () => console.log("you press Enter"),
    // }, "Hello Im h3");

    const h3 = (<h3 id="title"
        onMouseEnter={() => console.log("you press Enter")}>Hello Im h3</h3>);
```
	- ????????? ?????????, Babel??? JSX ????????? React JS ???????????? ????????? ?????????.

### 2.6 JSX??? rendering??????
- tag(Element) ?????? ???????????? tag??? ???????????????????
	1. ???????????? Element??? function?????? ???????????????.
	2. JSX ???????????? element??? ???????????????.

```java script
		// 1. arrow function  
	    const Button = () =>  (
        <button>Click me</button>);
		
		// 2. inclide element
		const Container = (<div>
        	<H3 />
       		<Button />
        </div>);
		
		 ReactDOM.render(Container, root);

```

- arrow function??? normal funtion
- ?????? ????????? ??????.
```java script
	    const Button = () =>  ( // arrow
        <button>Click me</button>);

		function Button() { // normal
			return (<button>Click me
			</button>);
		} 

``` 


### 3.1 ???????????? ??????????????? ???????????? ????????? ??????
????????? ?????? ????????? ???????????? ??????. ???????????? ?????? ??????..
????????? ?????????????????? ????????? ?????? ??? ????????? ????????????.

?????????????????? ??????????????? ?????? ?????? ???????????? ?????? ?????????.
???????????? ???????????? ??????????????? ?????? ????????????.
