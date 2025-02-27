import styles from './ArticleWhy.module.css';
import Card from '../../../shared/ui/card/Card.jsx';
import Op from '../../../shared/assets/images/0+.png';
import On from '../../../shared/assets/images/0-.png';
import Ap from '../../../shared/assets/images/A+.png';
import An from '../../../shared/assets/images/A-.png';
import Bp from '../../../shared/assets/images/B+.png';
import Bn from '../../../shared/assets/images/B-.png';
import ABp from '../../../shared/assets/images/AB+.png';
import ABn from '../../../shared/assets/images/AB-.png';

const ArticleBlood = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Групи крові</h1>
            <p className={styles.description}>
                Групи крові є важливим біологічним маркером, який використовується для визначення сумісності при
                переливанні
                крові та в інших медичних цілях. Система груп крові включає дві основні класифікації: АВО та
                резус-фактор (Rh).
            </p>
            <ol className={styles.reasons}>
                <li>
                    <div className={styles.text}>
                        <strong>Система АВО класифікує кров на чотири основні групи:</strong>
                        <p>Перше і найголовніше — донорство крові рятує життя. Кожна здача крові може допомогти трьом
                            різним пацієнтам, адже з однієї дози виділяють плазму, тромбоцити та еритроцити. Важкі
                            травми, операції, ускладнені пологи, лікування раку — це лише частина випадків, де донорська
                            кров є незамінною.</p>
                        <ol className="Orderedlist">
                            <li className="Listitem">Група O (I):
                                <ul className="unordered-list"><br/>
                                    <li className="Unorderedlist">Антиген: відсутній (на еритроцитах).</li>
                                    <li className="Listitemsub">Антитіла: anti-A та anti-B (в плазмі).</li>
                                    <li className="Listitemsub">Трансфузії: Люди з цією групою можуть отримувати кров
                                        тільки від групи O, але можуть віддавати кров будь-якій групі.
                                    </li>
                                </ul>
                            </li>
                            <li className="Listitem">Група A (II):
                                <ul className="unordered-list"><br/>
                                    <li className="Unorderedlist">Антиген: A (на еритроцитах).</li>
                                    <li className="Listitemsub">Антитіла: anti-B (в плазмі).</li>
                                    <li className="Listitemsub">Трансфузії: Люди з цією групою можуть отримувати кров
                                        від групи A і O, а віддавати — групам A та AB.
                                    </li>
                                </ul>
                            </li>
                            <li className="Listitem">Група B (III):
                                <ul className="Unorderedlist">
                                    <br/>
                                    <li className="Listitemsub">Антиген: B (на еритроцитах).</li>
                                    <li className="Listitemsub">Антитіла: anti-A (в плазмі).</li>
                                    <li className="Listitemsub">Трансфузії: Люди з цією групою можуть отримувати кров
                                        від групи B і O, а віддавати — групам B та AB.
                                    </li>
                                </ul>
                            </li>
                            <li className="Listitem">Група AB (IV):
                                <ul className="Unorderedlist"><br/>
                                    <li className="Listitemsub">Антиген: A і B (на еритроцитах).</li>
                                    <li className="Listitemsub">Антитіла: відсутні.</li>
                                    <li className="Listitemsub">Трансфузії: Люди з цією групою можуть отримувати кров
                                        від будь-якої групи, але віддавати — тільки групі AB.
                                    </li>
                                </ul>
                            </li>
                        </ol>


                    </div>
                </li>
                <li>
                    <div className={styles.text}>
                        <strong>Резус-фактор (Rh)</strong>
                        <p>Регулярне донорство дозволяє створювати необхідні запаси крові для використання під час
                            надзвичайних ситуацій: природних катастроф, епідемій або техногенних аварій. Наявність таких
                            резервів може стати вирішальним фактором у порятунку життя багатьох людей.</p>
                    </div>
                </li>
                <li>
                    <div className={styles.text}>
                        <strong>Сумісність крові </strong>
                        <p>Здавання крові також приносить користь для самого донора. Регулярне донорство сприяє
                            оновленню крові, зменшує ризик серцево-судинних захворювань, а також допомагає контролювати
                            рівень заліза в організмі. Крім того, перед здаванням крові донори проходять медичний огляд,
                            що дозволяє своєчасно виявити можливі проблеми зі здоров’ям.</p>
                    </div>
                </li>

            </ol>

            <div className={styles.imageBlock}>
                <Card
                    image={Op}
                    title="O+"
                    description="Перша позитивна — найпоширеніша група крові"
                />
                <Card
                    image={On}
                    title="O-"
                    description="З першою негативною  донорів часто називають «універсальними донорами»."
                />
                <Card
                    image={Ap}
                    title="A+"
                    description="Друга позитивна група крові є другою за поширеністю"
                />
                <Card
                    image={An}
                    title="A-"
                    description="Друга негативна – універсальний тромбоцитарний тип"
                />
                <Card
                    image={Bp}
                    title="B+"
                    description="Лише 8% донорів мають третю позитивну кров."
                />
                <Card
                    image={Bn}
                    title="B-"
                    description="Лише 2% донорів є третьою негативними, що робить групу крові однією з найрідкісніших"
                />
                <Card
                    image={ABp}
                    title="AB+"
                    description="Близько 2% донорів мають четверту позитивну кров"
                />
                <Card
                    image={ABn}
                    title="AB-"
                    description="Найрідкісніша група крові, на яку припадає лише 1% наших донорів крові."
                />
            </div>
        </div>
    );
};

export default ArticleBlood;
