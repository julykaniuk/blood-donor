
import mainImageOp from '../../../shared/assets/images/0+.png';
import mainImageOn from '../../../shared/assets/images/0-.png';
import mainImageAp from '../../../shared/assets/images/A+.png';
import mainImageAn from '../../../shared/assets/images/A-.png';
import mainImageBp from '../../../shared/assets/images/B+.png';
import mainImageBn from '../../../shared/assets/images/B-.png';
import mainImageABp from '../../../shared/assets/images/AB+.png';
import mainImageABn from '../../../shared/assets/images/AB-.png';

import mainImagewbd from '../../../shared/assets/images/mainImagewbd.jpg';
import mainImagedt from '../../../shared/assets/images/mainImagedt.jpg';
import mainImagebp from '../../../shared/assets/images/mainImagebp.jpeg';

import geneticsImageOp from '../../../shared/assets/images/blood.png';
import geneticsImageOn from '../../../shared/assets/images/blood_o-.png';
import geneticsImageAp from '../../../shared/assets/images/blood_a+.png';
import geneticsImageAn from '../../../shared/assets/images/blood_a-.png';
import geneticsImageBp from '../../../shared/assets/images/blood_b+.png';
import geneticsImageBn from '../../../shared/assets/images/blood_b-.png';
import geneticsImageABp from '../../../shared/assets/images/blood_ab+.png';
import geneticsImageABn from '../../../shared/assets/images/blood_ab-.png';

import geneticsImage from '../../../shared/assets/images/donation.png';


export const articles = [
    {
        id: "0-positive",
        mainImage: mainImageOp,
        geneticsImage: geneticsImageOp,
        name: "Група крові 0+",
        overview: "Група крові 0 є універсальною для переливання, що означає, що її можна переливати пацієнтам з будь-якою іншою групою крові. Це робить людей з групою крові 0 дуже важливими донорами. Оскільки у них немає антигенів A і B на еритроцитах, їх кров не викликає імунну реакцію у реципієнтів інших груп.",
        description: "Група крові 0 характеризується відсутністю антигенів A та B на поверхні еритроцитів. Це є основною причиною того, чому її кров можна переливати людям з будь-якою іншою групою крові. Проте люди з групою 0 можуть отримувати кров лише від інших донорів з такою ж групою крові.",
        frequency: "Група крові 0 є однією з найпоширеніших у світі. У багатьох країнах, зокрема в Європі та Північній Америці, група 0 становить близько 45% від усіх донорів. Вона є важливою для медичних установ, оскільки часто є необхідною для переливання крові пацієнтам з різними групами.",
        compatibility: "Група крові 0 є універсальним донором, що означає, що її можна переливати всім іншим групам крові. Це робить її надзвичайно важливою для системи переливання крові. Однак люди з групою крові 0 можуть отримувати кров лише від інших людей з групою 0, оскільки на їхніх еритроцитах немає антигенів, які можуть спричинити відторгнення.",
        part: "Група крові 0 відіграє важливу роль у донорстві, оскільки вона може бути використана для переливання пацієнтам з усіма іншими групами крові. Це робить її незамінною в надзвичайних ситуаціях і в медичних установах, де важливо мати запас крові для пацієнтів з різними потребами.",
        genetics: "Група крові 0 є рецесивною. Це означає, що людина може мати цю групу крові лише в тому випадку, якщо вона успадкує по одному рецесивному алелю 0 від кожного з батьків. Якщо один з батьків має групу крові A або B, то дитина може успадкувати ці алелі, і група крові буде відрізнятися."

    },
    {
        id: "0-negative",
        mainImage: mainImageOn,
        geneticsImage: geneticsImageOn,
        name: "Група крові 0-",
        overview: "Група крові 0‑негативна є унікальною завдяки своїй здатності бути універсальним донором для червоних кров'яних клітин. Це означає, що її можна переливати майже всім пацієнтам, що особливо важливо в екстрених ситуаціях, коли точну групу крові пацієнта визначити неможливо.",
        description: "Ця група характеризується відсутністю антигенів A, B, а також Rh‑фактора на поверхні еритроцитів. Відсутність цих антигенів мінімізує ризик імунної реакції під час переливань, роблячи 0‑негативну кров безпечнішою для отримувачів.",
        frequency: "Група крові 0‑негативна зустрічається досить рідко – лише приблизно у 7-10% населення. Саме через її рідкість вона є надзвичайно цінною для системи охорони здоров’я, адже забезпечення достатньої кількості такої крові часто є викликом.",
        compatibility: "Кров 0‑негативної групи завдяки відсутності всіх основних антигенів може бути перелита пацієнтам з будь-якою іншою групою крові, що робить її універсальним донором. Проте, реципієнти з 0‑негативною групою можуть отримувати кров тільки від донорів з такою ж групою, аби уникнути можливих імунних реакцій.",
        part: "Завдяки своїй універсальності, 0‑негативна кров є критично важливою в медичних установах, особливо в екстрених ситуаціях, коли потрібна негайна допомога. Донори з цією групою крові мають особливу відповідальність, оскільки їх кров може врятувати життя багатьом пацієнтам незалежно від їхньої групи крові.",
        genetics: "Успадкування групи крові 0‑негативної відбувається за системою ABO та Rh. Для появи 0‑негативної групи необхідно, щоб дитина отримала рецесивний алель 0 від кожного з батьків, а також два рецесивних Rh‑алеля, що забезпечує відсутність Rh‑фактора на еритроцитах."

    },
    {
        id: "A-positive",
        mainImage: mainImageAp,
        geneticsImage: geneticsImageAp,
        name: "Група крові A+",
        overview: "Група крові А+ є однією з найпоширеніших серед населення. Вона має велике значення як для донорства, так і для отримання переливань, завдяки своїй розповсюдженості та певній універсальності у сумісності з іншими групами.",
        description: "Група крові А характеризується наявністю антигену A на поверхні еритроцитів та антитіл до антигену B в плазмі. Додавання Rh‑позитивного фактора (А+) змінює деякі аспекти сумісності, що потребує особливої уваги під час медичних процедур, зокрема при переливанні крові.",
        frequency: "Група крові А+ є однією з найбільш розповсюджених у світі. В Україні та багатьох інших країнах вона становить значну частину популяції, що робить її важливою для забезпечення потреб лікарень та клінік у донорській крові.",
        compatibility: "Люди з групою А+ можуть отримувати кров від донорів з групами А+ та А‑, а також від донорів групи 0+ та 0‑, якщо враховується сумісність за Rh‑фактором. При цьому кров А+ може бути перелита реципієнтам з групою А+ та AB+, що забезпечує певну універсальність у використанні донорської крові.",
        part: "Донори з групою крові А+ відіграють важливу роль у медичних установах. Їхня кров часто використовується як у планових, так і в екстрених ситуаціях, завдяки широкій сумісності з іншими групами, що дозволяє ефективно задовольняти потреби пацієнтів.",
        genetics: "Успадкування групи крові А+ базується на домінантних алелях, що визначають наявність антигену A, а також на Rh‑факторі. Дитина набуває групу крові А+ тоді, коли від одного або обох батьків вона отримує домінантний алель, що відповідає цій групі. Цей механізм успадкування пояснює розповсюдження групи крові А+ у популяції."

    },
    {
        id: "A-negative",
        mainImage: mainImageAn,
        geneticsImage: geneticsImageAn,
        name: "Група крові A-",
        overview: "Група крові А⁻ є особливою завдяки відсутності Rh‑фактора, що відрізняє її від більш поширених Rh‑позитивних груп. Вона має важливе значення у переливанні крові, особливо для пацієнтів, які потребують крові без Rh‑фактора, адже будь-яка невідповідність може призвести до імунних реакцій." ,
        description: "Група крові А характеризується наявністю антигену А на поверхні еритроцитів і виробленням антитіл проти антигену В. Для групи А⁻ характерна відсутність Rh‑фактора, що створює додаткові умови для сумісності при переливаннях. Саме ця відсутність Rh‑фактора вимагає уважного підбору донорської крові, щоб уникнути імунологічних ускладнень.",
        frequency: "Група крові А⁻ зустрічається рідше порівняно з Rh‑позитивними групами, зазвичай її має близько 6-8% населення. Її рідкість робить запаси такої крові особливо цінними для лікарень, оскільки в надзвичайних ситуаціях її може бути недостатньо.",
        compatibility: "Люди з групою крові А⁻ можуть отримувати кров переважно від донорів з тією ж групою (А⁻) або від донорів групи 0⁻, які не містять ні антигенів, ні Rh‑фактора. Переливання крові від Rh‑позитивних донорів недопустиме для реципієнтів з групою А⁻, оскільки це може викликати імунну реакцію.",
        part: "Донори з групою крові А⁻ відіграють важливу роль у медичній практиці, особливо для пацієнтів з тією ж групою, враховуючи її рідкість. У критичних ситуаціях наявність достатньої кількості А⁻ крові може врятувати життя, адже переливання не сумісної крові може призвести до серйозних ускладнень.",
        genetics: "Успадкування групи крові А⁻ відбувається за домінантними генами для антигену А, але для відсутності Rh‑фактора необхідна комбінація рецесивних алелів. Щоб дитина мала групу крові А⁻, вона повинна отримати алель, що визначає антиген А, від одного або обох батьків, а також рецесивний Rh‑алель від кожного з них. Цей генетичний механізм пояснює, чому А⁻ зустрічається рідше у популяції."

    },
    {
        id: "B-positive",
        mainImage: mainImageBp,
        geneticsImage: geneticsImageBp,
        name: "Група крові B+",
        overview: "Група крові B⁺ характеризується наявністю антигену B на поверхні еритроцитів та позитивним Rh‑фактором. Це одна з розповсюджених груп крові, важлива як для донорства, так і для отримання переливань, адже її специфічна сумісність дозволяє ефективно використовувати донорську кров у багатьох клінічних ситуаціях.",
        description: "У людей з групою крові B⁺ на поверхні еритроцитів присутній антиген B, а в плазмі виробляються антитіла проти антигену A. Наявність Rh‑фактора (позитивного) також впливає на сумісність при переливаннях, тому при виборі донорської крові враховується як ABO, так і Rh‑система.",
        frequency: "Група крові B⁺ зустрічається у меншій частині населення порівняно з групами A⁺ чи 0⁺. У різних регіонах її частка може варіюватися, але зазвичай становить близько 10-20% від загальної кількості донорів. Її розповсюдженість робить її важливою для медичних установ, адже забезпечення її запасів є необхідним для ефективного переливання крові.",
        compatibility: "Люди з групою B⁺ можуть отримувати кров від донорів з групами B⁺ та B⁻, а також від донорів групи 0⁺ та 0⁻, якщо враховується сумісність за Rh‑фактором. Найбезпечніше переливати кров донорів з тією ж групою, проте універсальність групи 0 дозволяє використовувати її кров при дотриманні відповідних правил сумісності.",
        part: "Донори з групою B⁺ відіграють важливу роль у забезпеченні медичних установ кров'ю для різних груп реципієнтів. У планових і екстрених ситуаціях наявність достатнього запасу B⁺ крові є критичною, що робить цих донорів невід'ємною частиною системи охорони здоров’я.",
        genetics: "Успадкування групи крові B⁺ відбувається за принципами системи ABO та Rh. Для появи антигену B дитина повинна отримати домінантний алель, що відповідає цьому антигену, від одного або обох батьків. Додатково, позитивний Rh‑фактор визначається домінантним Rh‑алелем. Цей генетичний механізм пояснює, як група B⁺ передається з покоління в покоління."

    },
    {
        id: "B-negative",
        mainImage: mainImageBn,
        geneticsImage: geneticsImageBn,
        name: "Група крові B-",
        overview: "Група крові B⁻ є однією з рідкісніших серед системи ABO, що робить її особливо цінною для донорства. Відсутність Rh‑фактора ускладнює сумісність при переливаннях, тому запаси B⁻ крові часто є критично важливими для медичних установ.",
        description: "У людей з групою B⁻ на поверхні еритроцитів присутній антиген B, але відсутній Rh‑фактор. Це означає, що в плазмі виробляються антитіла проти антигену A, а також необхідність уважного підбору донорської крові через відсутність Rh‑фактора. Така комбінація забезпечує безпечне переливання лише при точному узгодженні груп крові.",
        frequency: "Група крові B⁻ зустрічається досить рідко – зазвичай її має лише близько 2-3% населення. Рідкість цієї групи підкреслює її важливість у системі охорони здоров’я, адже підтримка достатніх запасів B⁻ крові може бути справжнім викликом для лікарень.",
        compatibility: "Люди з групою B⁻ можуть отримувати кров від донорів, які мають B⁻ або O⁻ групу, адже будь-яка інша група може викликати імунну реакцію. При цьому донорська кров групи B⁻ може бути перелита реципієнтам з групами B⁻ та AB⁻, що робить її важливою для пацієнтів, яким потрібні виключно Rh‑негативні переливання.",
        part: "Донори з групою B⁻ відіграють вирішальну роль у медичних установах, оскільки їх кров є незамінною для реципієнтів, які потребують Rh‑негативної крові. У критичних ситуаціях, коли час є вирішальним, наявність B⁻ крові може врятувати життя, особливо враховуючи її обмежену кількість.",
        genetics: "Успадкування групи крові B⁻ відбувається за принципами системи ABO та Rh. Для появи антигену B дитина повинна отримати домінантний алель від одного з батьків, а для Rh‑негативного фактора необхідно, щоб вона успадкувала рецесивний Rh‑алель від кожного з батьків. Цей генетичний механізм пояснює як появу, так і рідкість групи крові B⁻ у популяції."

    },
    {
        id: "AB-positive",
        mainImage: mainImageABp,
        geneticsImage: geneticsImageABp,
        name: "Група крові AB+",
        overview: "Група крові AB⁺ є унікальною завдяки поєднанню обох антигенів A і B, а також позитивного Rh‑фактора. Ця група часто називається універсальним реципієнтом, оскільки відсутність антитіл до A та B дозволяє отримувати кров від донорів з будь-якою групою.",
        description: "У людей з групою AB⁺ на поверхні еритроцитів присутні як антиген A, так і антиген B. Завдяки цьому вони не виробляють антитіл проти обох антигенів, що робить їх здатними отримувати кров від усіх інших груп за системою ABO. Проте сумісність Rh‑фактора залишається важливою при переливаннях.",
        frequency: "Група крові AB⁺ зустрічається досить рідко, становлячи лише приблизно 3-5% від загальної популяції. Її рідкість підкреслює важливість правильного збереження та обліку цієї крові в медичних установах.",
        compatibility: "Люди з групою AB⁺ можуть отримувати кров від донорів з усіх груп, оскільки не виробляють антитіл до антигенів A і B. Проте при переливанні все одно необхідно враховувати Rh‑фактор, особливо коли донорська кров має Rh‑негативний статус.",
        part: "Хоча AB⁺ є універсальним реципієнтом, вона не може виступати як універсальний донор. Через рідкість цієї групи її донорство є обмеженим, але вона має важливе значення у тих випадках, коли сумісність з іншими групами вже забезпечена.",
        genetics: "Група крові AB⁺ утворюється шляхом успадкування обох домінантних алелей, що відповідають антигенам A і B, а також позитивного Rh‑фактора. Така комбінація дозволяє відсутність природних антитіл до антигенів A і B, що робить цю групу унікальною з точки зору сумісності при переливаннях крові."

    },
    {
        id: "AB-negative",
        mainImage: mainImageABn,
        geneticsImage: geneticsImageABn,
        name: "Група крові AB-",
        overview: "Група крові AB⁻ є рідкісною і має особливу роль у системі переливання крові. Як і AB⁺, вона має антигени A і B на еритроцитах, але без Rh‑фактора. Люди з цією групою крові є універсальними реципієнтами для переливання крові з будь-якої групи ABO, за умови, що донор також має негативний Rh‑фактор.",
        description: "Група AB⁻ має як антиген A, так і антиген B на поверхні еритроцитів, що дозволяє людині з цією групою крові отримувати переливання від донорів з будь-якою іншою групою крові за системою ABO. Однак важливо, щоб донор також мав Rh‑негативну кров, оскільки наявність Rh‑позитивної крові може викликати імунну реакцію.",
        frequency: "Група AB⁻ є однією з найрідкісніших груп крові у світі, її частка складає лише близько 1% від загальної популяції. Це робить цю групу крові надзвичайно важливою в медичних ситуаціях, коли потрібен специфічний тип крові.",
        compatibility: "Люди з групою AB⁻ можуть отримувати кров тільки від донорів з групою AB⁻ або іншими Rh‑негативними групами (A⁻, B⁻, O⁻). Це обмежує доступ до донорської крові, що робить донорство цієї групи особливо важливим для забезпечення необхідних запасів.",
        part: "Люди з групою AB⁻ є важливими донорами для інших, але, з огляду на рідкість цієї групи, їх донорські запаси є обмеженими. Оскільки їхня кров може бути перелита лише іншим людям з групою AB⁻ або Rh‑негативними донорами, вони мають значення у критичних ситуаціях, коли потрібні специфічні типи крові.",
        genetics: "Група крові AB⁻ утворюється в результаті успадкування обох домінантних алелей для антигенів A і B, а також Rh‑негативного алелю. Це означає, що людина з цією групою крові успадковує Rh‑негативний фактор від обох батьків, і навіть якщо один з батьків має Rh‑позитивний статус, у дитини все одно може бути Rh‑негативна група крові."

    },

    {
        id: "whole_blood_donation",
        mainImage: mainImagewbd,
        geneticsImage: geneticsImage,
        name: "Донація цільної крові",
        overview: "Донація цільної крові — це одна з найпоширеніших процедур здачі крові, яка використовується для широкого спектра медичних потреб. Це важливий процес, що допомагає врятувати життя і підтримувати здоров'я людей, які потребують медичного втручання.",
        description: "Цільна кров — це кров, яку здає донор без подальшого розділення на окремі компоненти, такі як еритроцити, тромбоцити або плазма. Процес донації цільної крові займає від 10 до 15 хвилин. Під час цієї процедури донорам зазвичай беруть близько 450 мл крові, яка потім може бути використана для лікування різних захворювань або для хірургічних втручань.\n\nДонація цільної крові має великий вплив на збереження життя, оскільки її використовують для пацієнтів з серйозними травмами, після операцій, при онкологічних захворюваннях та інших критичних станах. Окрім того, кров можна розділити на компоненти, що дозволяє здійснювати переливання за спеціальними показниками. Наприклад, еритроцити використовуються для лікування анемії, а тромбоцити — для підтримки пацієнтів, що страждають від проблем із згортанням крові.",
        frequency: "Донацію цільної крові можна проводити лише кілька разів на рік, оскільки організм потребує часу для відновлення. Зазвичай чоловіки можуть здавати кров кожні 8 тижнів, а жінки — кожні 12 тижнів. Це дозволяє організму відновити нормальний рівень червоних кров'яних тілець, плазми та інших складових. Однак є певні обмеження щодо фізіологічного стану донора, тому кожен бажаючий має пройти медичне обстеження перед процедурою.",
        compatibility: "Перед здачею цільної крові важливо визначити групу крові та резус-фактор донора, щоб запобігти можливим негативним реакціям під час переливання. Для збереження безпеки при переливанні крові важливо, щоб кров донора була сумісною з кров'ю реципієнта. Після здачі цільної крові вона може бути поділена на еритроцити, тромбоцити та плазму, щоб застосовувати її для різних медичних потреб.\n\nЦільна кров може бути використана для пацієнтів, які потребують великого об’єму крові після серйозних операцій, травм, або під час лікування гострих захворювань крові. Донація цільної крові часто використовується у випадках, коли кров потрібна для множинних реципієнтів або для масових ситуацій, таких як катастрофи або аварії.",
        part: "Донація цільної крові є важливою складовою системи медичних переливань. Вона забезпечує життєво необхідну підтримку для пацієнтів, яким потрібно термінове переливання крові в разі травм, операцій, хронічних захворювань або хіміотерапії. Кров, яку здає донор, допомагає підтримувати рівень крові в лікарнях та клініках, а також дозволяє забезпечити лікування тих, хто знаходиться в критичному стані.\n\nДонація також є важливою для наукових досліджень і розвитку нових методів лікування. Вчені використовують донорську кров для вивчення захворювань крові та створення нових лікарських засобів для покращення стану пацієнтів.",
        genetics: "Генетичні аспекти донорства крові також відіграють важливу роль у визначенні сумісності. Кров має різні групи, які зумовлені генетичними факторами, що успадковуються від батьків. Зокрема, групи крові A, B, AB і O, а також резус-фактор (позитивний або негативний) визначають, яку кров можна переливати пацієнтам без ризику відторгнення.\n\nПеред здачею крові донорам проводять тестування для визначення групи крові та резус-фактору. Врахування цих параметрів є важливим для забезпечення максимальної безпеки під час переливань. Під час донорства важливо також звертати увагу на стан здоров'я донора, оскільки деякі захворювання можуть заважати донації."
    },
    {
        id: "platelet_donation",
        mainImage: mainImagedt,
        geneticsImage: geneticsImage,
        name: "Донація тромбоцитів",
        overview: "Донація тромбоцитів — це специфічний тип донорства, який включає здачу лише одного компонента крові, а саме тромбоцитів. Тромбоцити відіграють ключову роль у згортанні крові та загоєнні ран, тому вони є надзвичайно важливими для пацієнтів, які страждають від різних захворювань, пов’язаних із порушенням згортання крові.",
        description: "Тромбоцити — це маленькі клітини крові, які відповідають за згортання крові і зупинку кровотеч. Під час процедури здачі тромбоцитів використовується метод аферезу, при якому кров донора проходить через спеціальний апарат, що відокремлює тромбоцити від інших компонентів крові (еритроцитів і плазми), після чого решта крові повертається до донора.\n\nПроцес здачі тромбоцитів займає більше часу, ніж здача цільної крові — від 1 до 2 годин. Тромбоцити зазвичай використовуються для лікування пацієнтів, що мають порушення згортання крові, таких як хворі на лейкемію, рак крові, або пацієнти, що проходять хіміотерапію, а також для пацієнтів із важкими травмами та опіками, які потребують великої кількості тромбоцитів.",
        frequency: "Донація тромбоцитів має певні обмеження щодо частоти: її можна проводити раз на 2-4 тижні, оскільки після здачі тромбоцитів організму потрібен час для відновлення нормального рівня тромбоцитів. Одночасно з донором може бути здано до 500 мл тромбоцитів, що може допомогти до 3 пацієнтів. Однак, як і в разі з іншими видами донорства, донорам необхідно пройти медичне обстеження перед процедурою для визначення їх здатності до здачі тромбоцитів.",
        compatibility: "Тромбоцити повинні бути сумісні з реципієнтом, тому важливо, щоб донор мав ту ж групу крові, що й пацієнт, хоча в деяких випадках можливе переливання тромбоцитів від донора з іншою групою крові. Перед здачею тромбоцитів також проводиться тестування на резус-фактор. Це важливо, оскільки тромбоцити можуть бути використані для пацієнтів з важкими захворюваннями крові, тому точність сумісності відіграє критичну роль у збереженні життя пацієнта.",
        part: "Донація тромбоцитів є важливою частиною системи медичних переливань і відіграє особливу роль у лікуванні пацієнтів із захворюваннями, що впливають на кров'яні клітини, такими як лейкемія чи інші форми раку. Вона також необхідна для пацієнтів, що зазнали великих травм або опіків і потребують великих кількостей тромбоцитів для нормалізації згортання крові та запобігання кровотечам.",
        genetics: "Генетичні фактори також можуть впливати на успіх донації тромбоцитів. Як і у випадку з іншими видами донорства, резус-фактор і група крові є критичними для забезпечення сумісності між донором і реципієнтом. Вчені також досліджують генетичні фактори, які можуть впливати на здатність організму донора відновлювати рівень тромбоцитів після здачі, а також на ефективність тромбоцитів для пацієнтів з різними захворюваннями.",
    },
    {
        id: "plasma_donation",
        mainImage: mainImagebp,
        geneticsImage:geneticsImage,
        name: "Донація плазми",
        overview: "Донація плазми — це процес здачі рідкої частини крові, яка містить воду, електроліти, білки, гормони та відходи метаболізму. Плазма відіграє важливу роль у транспортуванні поживних речовин, підтримці артеріального тиску і згортанні крові. Плазма часто використовується в медичних процедурах для лікування пацієнтів, які потребують великої кількості рідин або специфічних білків.",
        description: "Плазма — це безбарвна рідина, яка становить близько 55% об’єму крові. Вона містить воду, білки (зокрема альбуміни, антитіла, фактори згортання крові), електроліти, гормони та відходи обміну речовин. Плазма використовується для лікування пацієнтів, які мають розлади згортання крові, потребують трансплантацій органів, а також для лікування опіків, тяжких інфекцій і травм. Вона є основою для виготовлення препаратів, таких як імуноглобуліни, альбуміни та інші лікарські засоби.\n\nПроцес здачі плазми схожий на здачу цільної крові, але з додатковим використанням апарату для аферезу, який дозволяє відокремити плазму від інших компонентів крові. Інші частини крові (еритроцити та тромбоцити) повертаються назад до донора. Здача плазми займає більше часу, ніж здача цільної крові — приблизно 45-60 хвилин.",
        frequency: "Донація плазми зазвичай дозволена не частіше ніж раз на 2 тижні. В організмі донорів плазма відновлюється швидше, ніж еритроцити, тому пацієнти можуть здавати плазму більш часто, ніж цільну кров. Однак для забезпечення здоров’я донора важливо дотримуватися обмежень і проходити медичні обстеження перед кожною процедурою.",
        compatibility: "Плазма має загальні правила сумісності, але менш критична, ніж при здачі еритроцитів чи тромбоцитів. Плазма з різних груп крові може бути використана для пацієнтів, навіть якщо групи донорів і реципієнтів не збігаються. Однак, в деяких випадках для виготовлення специфічних препаратів, таких як імуноглобуліни, використовуються плазми від донорів з певними групами крові.",
        part: "Донація плазми є важливою частиною медичних процедур, оскільки плазма використовуються для виготовлення життєво важливих ліків і препаратів, таких як альбумін для пацієнтів з низьким рівнем білків у крові, та для лікування хворих на гемофілію. Плазма також застосовується при лікуванні опіків, тяжких травм і хірургічних втручаннях, а також у терапії для людей, що мають порушення імунної системи.",
        genetics: "Генетичні фактори мають менший вплив на донорство плазми, ніж на донорство еритроцитів чи тромбоцитів. Однак, для деяких специфічних продуктів з плазми (наприклад, для лікування пацієнтів з певними генетичними дефіцитами), можуть бути використані плазми від донорів з конкретними антитілами або іншими генетичними характеристиками. У загальному ж випадку, сумісність груп крові не є критичною для донорства плазми.",
    }

]