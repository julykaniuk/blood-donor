import styles from './ArticleWhy.module.css';

const ArticlePlace = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Де можна здати кров?</h1>
            <p className={styles.description}>
                Якщо ви хочете допомогти людям і стати донором крові, ви можете звернутися до
                <strong> Закарпатської обласної станції переливання крові</strong>. Це основний пункт у
                місті Ужгород, де можна здати кров та допомогти врятувати життя.
            </p>
            <ol className={styles.reasons}>
                <li>
                    <div className={styles.number}>1</div>
                    <div className={styles.text}>
                        <strong>Адреса та контакти</strong>
                        <p>
                             <strong>📍Адреса:</strong> вул. Льва Толстого, 15, Ужгород, Закарпатська область
                             <strong>📞Телефон:</strong> +380 312 64 33 32
                             <strong>🕒Години роботи:</strong> Пн-Пт: 08:00 – 14:00, Сб-Нд: вихідний
                        </p>
                    </div>
                </li>
                <li>
                    <div className={styles.number}>2</div>
                    <div className={styles.text}>
                        <strong>Як стати донором?</strong>
                        <p>
                            Щоб здати кров, потрібно бути віком від 18 до 60 років, мати вагу не менше 50 кг
                            та не мати тимчасових або постійних протипоказань. Важливо не вживати алкоголь
                            за 48 годин до процедури та легко поснідати в день здачі крові.
                        </p>
                    </div>
                </li>
                <li>
                    <div className={styles.number}>3</div>
                    <div className={styles.text}>
                        <strong>Навіщо це потрібно?</strong>
                        <p>
                            Одна донація крові може врятувати до трьох життів. Донорська кров
                            використовується для пацієнтів з важкими хворобами, онкохворих, постраждалих у ДТП
                            та тих, хто проходить складні операції.
                        </p>
                    </div>
                </li>
                <li>
                    <div className={styles.number}>4</div>
                    <div className={styles.text}>
                        <strong>Як дістатися?</strong>
                        <p>
                            Закарпатська обласна станція переливання крові розташована недалеко від центру
                            міста, її легко знайти. До станції можна дістатися пішки або громадським транспортом.
                        </p>
                    </div>
                </li>
            </ol>
            <div className={styles.map}>
                <iframe
                    title="Карта - Закарпатська обласна станція переливання крові"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2664.7943021521895!2d22.290129776558265!3d48.62009817121819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473919b273b3a477%3A0x4e0cd4846531a980!2z0JrQsNGA0LjRhtC60L7QstCw0YAg0KHQstC-0YDRgdC60Lgg0LTQu9GPINCh0LDQtNCw0LzQuCDQptC10LvQtdC90YHQutCw0Y8g0ZbQvdCw!5e0!3m2!1suk!2sua!4v1700000000000"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
        </div>
        </div>
    );
};

export default ArticlePlace;
