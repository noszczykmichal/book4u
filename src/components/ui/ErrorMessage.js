import classes from './ErrorMessage.module.css';

function ErrorMessage() {
    return (
        <div className={classes['container']}>
            <p>The API is inaccessible. Make sure you are connected to the internet and try again later.</p>
        </div>
    )
}

export default ErrorMessage