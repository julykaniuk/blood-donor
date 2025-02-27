import styles from './ArticleDescription.module.css';
import mainImage from '../../../shared/assets/images/0+.png';
import geneticsImage from '../../../shared/assets/images/blood.png';

const ArticleDescription = () => {

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            const headerOffset = 90;
            const elementPosition = section.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    const article = {
        name: "Група крові ",
        overview: "текст текст",
        description: "текс текст",
        frequency: "текс текст",
        compatibility: "текс текст",
        part: "текс текст",
        genetics: "текс текст",
    };

    return (
        <div className={styles.container}>
            <aside className={styles.sidebar}>
                <h2>Зміст</h2>
                <ul>
                    <li>
                        <a onClick={() => scrollToSection('overview')}>Вступ</a>
                    </li>
                    <li>
                        <a onClick={() => scrollToSection('description')}>Опис групи крові </a>
                    </li>
                    <li>
                        <a onClick={() => scrollToSection('frequency')}>Наскільки часто зустрічається</a>
                    </li>
                    <li>
                        <a onClick={() => scrollToSection('compatibility')}>Сумісність при переливанні крові</a>
                    </li>
                    <li>
                        <a onClick={() => scrollToSection('part')}>Роль групи крові у донорстві</a>
                    </li>
                    <li>
                        <a onClick={() => scrollToSection('genetics')}>Генетичні аспекти</a>
                    </li>
                </ul>
            </aside>
            <main className={styles.content}>
                <h1>{article.name}</h1>
                <img src={mainImage} alt="Character Image" className={styles.mainImage}/>

                <section id="overview">
                    <h2>Вступ</h2>
                    <p>{article.overview}</p>
                </section>
                <section id="description">
                    <h2>Опис групи крові </h2>
                    <p>{article.description}</p>
                </section>
                <section id="frequency">
                    <h2>Наскільки часто зустрічається</h2>
                    <p>{article.frequency}</p>
                </section>
                <section id="compatibility">
                    <h2>Сумісність при переливанні крові</h2>
                    <p>{article.compatibility}</p>
                </section>
                <section id="part">
                    <h2>Роль групи крові у донорстві</h2>
                    <p>{article.part}</p>
                </section>
                <section id="genetics">
                    <h2>Генетичні аспекти</h2>
                    <p>{article.genetics}</p>
                </section>
                <img src={geneticsImage} alt="Character Image" className={styles.geneticsImage}/>

            </main>
        </div>
    );
};

export default ArticleDescription;
