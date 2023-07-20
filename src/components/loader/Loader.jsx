import styles from './Loader.module.scss'
import loaderImg from '../../assets/loader.gif'
import ReactDOM from 'react-dom'

export default function Loader() {
  return ReactDOM.createPortal (
    <div className={styles.wrapper}>
        <div className={styles.loader}>
            <img src={loaderImg} alt="Loading..." />
        </div>
    </div>,
    document.getElementById("loader")
  )
}

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );