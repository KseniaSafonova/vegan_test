
import styles from './App.module.css';

function App() {
  return (
    <>
      <div className={styles.helpUsBlock}>
        <div className={styles.leftBlock}>
          <div className={styles.title}>
            Как вы можете <span>помочь</span> проекту
          </div>
          <div className={styles.description}>
            Vegan Russian - проект, который создан и развивается неравнодушными людьми
          </div>
          <button className={styles.button}>Узнать подробнее</button>
        </div>
        <div className={styles.middleBlock}></div>
        <div className={styles.rightBlock}>
          <div className={styles.item}>
            <div>Мы создали открытую таблицу с продуктами на проверку, в которой может поучавствовать любой(-ая).</div>
            <a href='#' className={styles.moreInformtion}>Подробнее</a>
          </div>
          <div className={styles.item}>
            <div>Также вы можете поддержать проект финансово, так как проекту нужны средства на оплату софта.</div>
            <a href='#' className={styles.moreInformtion}>Подробнее</a>
          </div>
          <div className={styles.item}>
            <span>К нам в команду требуются...</span>
            <div>Чекер/ки, постер/ки, программист/ки, дизайнер/ки и многие другие.</div>
            <a href='#' className={styles.moreInformtion}>Подробнее</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
