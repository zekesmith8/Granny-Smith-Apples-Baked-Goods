import { useState } from 'react';
import styles from './App.module.scss';

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className={styles.App}>
            <div>
                <img src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg" />
            </div>
            <div>
                <a href="https://vitejs.dev" target="_blank"></a>
                <a href="https://reactjs.org" target="_blank"></a>
                <a href="https://www.typescriptlang.org/" target="_blank"></a>
                <a href="https://sass-lang.com/" target="_blank"></a>
            </div>
            <div className={styles.card}>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <input type="number" />
            <button>Button</button>
            <p className={styles['read-the-docs']}></p>
        </div>
    );
}

export default App;
