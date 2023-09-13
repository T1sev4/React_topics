import './info.css';
import styles from './info.module.css';

console.log(styles);
// styles это объект в котором хранятся свойства css(значение этих свойств является уникальное название для классов)
// {
//   info: 'info_info__DLd+F',
//   myOtherButton: 'info_myOtherButton__U7yeW'
// }

function Info() {
  return (
    <div className={styles.info}>
      <h1>Hello from the Info component</h1>
      <h2>Heading in the Info component</h2>
      <button className="my-button">Click me in the Info component!</button>
      <button className={styles.myOtherButton}>Button with local css</button>
    </div>
  );
}
export default Info;
