import styles from './ArticleDescription.module.css';
import {articles} from "./articles.jsx";
import {useParams} from "react-router-dom";

const ArticleDescription = () => {
    const { id } = useParams();
    const article = articles.find((item) => item.id === id);

    if (!article) {
        return <h2>Групу крові не знайдено</h2>;
    }
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
                <img
                    src={article.mainImage}
                    alt="Main Image"
                    className={styles.mainImage}
                />
                <p className={styles.notes}> Ваша група крові визначається генами, успадкованими від батьків. Незалежно
                    від того, чи ваша група
                    крові рідкісна, поширена чи десь середня, ваші пожертви життєво важливі для порятунку та покращення
                    життя.</p>

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
                <img
                    src={article.geneticsImage}
                    alt="Genetics Image"
                    className={styles.geneticsImage}
                />
            </main>
        </div>
    );
};

export default ArticleDescription;
