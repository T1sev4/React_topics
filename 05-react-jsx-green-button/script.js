const App = ({ initialButtonText, initialClassesList }) => {
    const [buttonText, setButtonText] = React.useState(initialButtonText);
    const [classesList, setClassesList] = React.useState('');
    const onButtonClick = () => {
        setButtonText('Hello from React');
        setClassesList(initialClassesList);
    };

    return (
        <div className="app">
            <button className={classesList} onClick={onButtonClick}>
                {buttonText}
            </button>
        </div>
    );
};
const container = document.getElementById('app');
const root = ReactDOM.createRoot(container);
root.render(
    <App initialButtonText="Click me please" initialClassesList="green-btn" />
);
