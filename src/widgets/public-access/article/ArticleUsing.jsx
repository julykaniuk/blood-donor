import styles from './ArticleWhy.module.css';
import Card from '../../../shared/ui/card/Card.jsx';
import ArticleWhy1 from '../../../shared/assets/images/ArticleWhy1.png';
import ArticleWhy2 from '../../../shared/assets/images/ArticleWhy2.png';
import ArticleWhy3 from '../../../shared/assets/images/ArticleWhy3.png';

const ArticleUsing = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Як використовується кров?</h1>
            <p className={styles.description}>
                Донорська кров відіграє критично важливу роль у сучасній медицині. Вона використовується для порятунку
                життів у невідкладних ситуаціях,
                лікування хронічних захворювань та підтримки пацієнтів під час складних операцій. Кожна крапля крові
                може стати рятівною для тих,
                хто цього найбільше потребує.
            </p>
            <ol className={styles.reasons}>
                <li>
                    <div className={styles.number}>1</div>
                    <div className={styles.text}>
                        <strong>Переливання при гострих крововтратах</strong>
                        <p>
                            У випадках травм, аварій, військових поранень або хірургічних втручань пацієнти можуть
                            втрачати значний обєм крові.
                            Без негайного переливання їхнє життя опиняється під загрозою. Донорська кров дозволяє
                            відновити нормальний рівень циркуляції та забезпечити стабільність організму.
                        </p>
                    </div>
                </li>
                <li>
                    <div className={styles.number}>2</div>
                    <div className={styles.text}>
                        <strong>Лікування онкологічних захворювань</strong>
                        <p>
                            Пацієнти з лейкемією, лімфомою та іншими видами раку часто проходять хімієтерапію, що
                            призводить до зниження рівня еритроцитів і тромбоцитів.
                            Регулярні переливання допомагають підтримувати їхній стан, запобігаючи ускладненням та
                            покращуючи якість життя.
                        </p>
                    </div>
                </li>
                <li>
                    <div className={styles.number}>3</div>
                    <div className={styles.text}>
                        <strong>Допомога новонародженим та породіллям</strong>
                        <p>
                            Ускладнені пологи можуть спричиняти сильні кровотечі, що ставлять під загрозу життя матері
                            та дитини.
                            Немовлята, які народжуються з анемією або іншими хворобами крові, також часто потребують
                            переливання для стабілізації стану.
                        </p>
                    </div>
                </li>
                <li>
                    <div className={styles.number}>4</div>
                    <div className={styles.text}>
                        <strong>Лікування пацієнтів із хронічними хворобами</strong>
                        <p>
                            Люди з серповидноклітинною анемією, гемофілією та іншими хронічними порушеннями крові
                            залежать від донорської крові.
                            Переливання дозволяють їм жити повноцінним життям, зменшуючи ризик ускладнень та покращуючи
                            загальне самопочуття.
                        </p>
                    </div>
                </li>
            </ol>

    <div className={styles.imageBlock}>
        <Card
            image={ArticleWhy1}
            title="Групи крові"
            description="Ваші еритроцити, тромбоцити та плазма можуть врятувати до трьох життів"
            link="/article"
        />
        <Card
            image={ArticleWhy2}
            title="Попит на кров"
            description="Дізнайтеся про фактори, які впливають на те, скільки кожної групи крові нам потрібно зібрати"
            link="/demand"
        />
        <Card
            image={ArticleWhy3}
            title="Навіщо здавати кров?"
            description="Здача крові рятує життя та допомагає тим, хто цього потребує."
            link="/why"
        />

    </div>
</div>
)
    ;
};

export default ArticleUsing;
