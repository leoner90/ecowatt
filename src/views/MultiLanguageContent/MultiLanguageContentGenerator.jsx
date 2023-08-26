import { useSelector } from 'react-redux';
import { faSolarPanel  } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function NavBarContentByLanguage() {
    let curentLanguage = useSelector(state => state.settings.currentLanguage);
    
    let homeLink,solarPanelLink,solarPanelSublink1,solarPanelSublink2,solarPanelSublink3,solarPanelSublink4,solarPanelSublink5,solarPanelSublink6,
    electroSectionLink,electroSectionSublink1,electroSectionSublink2,electroSectionSublink3,electroSectionSublink4,electroSectionSublink5,
    electroSectionSublink6,electroSectionSublink7,   galleryLink, contactsLink;
    switch(curentLanguage) {
        case 'ru':
            homeLink = 'О НАС';
            solarPanelLink = 'СОЛНЕЧНЫЕ ПАНЕЛИ';
            solarPanelSublink1 = "ПРОЕКТИРОВАНИЕ ПАНЕЛЕЙ";
            solarPanelSublink2 = "УСТАНОВКА";
            solarPanelSublink3 = "НАСТРОЙКА ИНВЕРТОРА";
            solarPanelSublink4 = "ПРОВЕРКА СИСТЕМЫ";
            solarPanelSublink5 = "СДАЧА ПРОЕКТА";
            solarPanelSublink6 = "СЕРТИФИЦИРОВАННЫЕ СПЕЦИАЛИСТЫ";

            electroSectionLink = 'ЭЛЕКТРОМОНТАЖНЫЕ РАБОТЫ'; 
            electroSectionSublink1= "ЭЛЕКТРО-ПРОЕКТИРОВАНИЕ";
            electroSectionSublink2= "ЭЛЕКТРОИНСТАЛЯЦИЯ";
            electroSectionSublink3= "ЗАМЕРЫ ИЗОЛЯЦИИ";
            electroSectionSublink4= "СДАЧА В ЭКСПЛУАТАЦИЮ";
            electroSectionSublink5= "ВИДЕОНАБЛЮДЕНИЕ";
            electroSectionSublink6= "УМНЫЙ ДОМ";
            electroSectionSublink7= "МОЛНИЕЗАЩИТА";

           

            galleryLink = 'НАШИ РАБОТЫ';
            contactsLink = 'КОНТАКТЫ';
          
            break;
        default:
            homeLink = 'PAR MUMS';
            solarPanelLink = 'SAULES PANEĻI';
            solarPanelSublink1= "PANEĻU PROJEKTĒŠANA";
            solarPanelSublink2= "MONTAŽA";
            solarPanelSublink3= "INVERTORA IESTATĪŠANA";
            solarPanelSublink4= "SISTĒMAS PĀRBAUDE";
            solarPanelSublink5= "PROJEKTA NODOŠANA";
            solarPanelSublink6= "SERTIFICĒTI SPECIĀLISTI";

            electroSectionLink = 'ELEKTROMONTĀŽAS DARBI';
            electroSectionSublink1= "ELEKTRO-PROJEKTĒŠANA";
            electroSectionSublink2= "ELEKTROINSTALĀCIJA";
            electroSectionSublink3= "ELEKTROMĒRĪJUMI";
            electroSectionSublink4= "NODOŠANA EKSPLUATĀCIJĀ";
            electroSectionSublink5= "VIDEONOVĒROŠANA";
            electroSectionSublink6= "GUDRA MĀJA";
            electroSectionSublink7= "ZIBENSAIZSARDZĪBA";

           
            galleryLink = 'MŪSU DARBI ';
            contactsLink = 'KONTAKTI ';
            break;
    }
    return {
        homeLink, solarPanelLink, solarPanelSublink1, solarPanelSublink2, solarPanelSublink3, solarPanelSublink4, solarPanelSublink5, solarPanelSublink6,
        electroSectionLink, electroSectionSublink1, electroSectionSublink2, electroSectionSublink3, electroSectionSublink4, electroSectionSublink5,
        electroSectionSublink6, electroSectionSublink7, galleryLink, contactsLink
    };
}


function HomePageContentByLanguage() {
    let curentLanguage = useSelector(state => state.settings.currentLanguage);
    let subSlogan, btn, headerLink1 , headerLink2, headerLink3 , electroSectionHeader,
    solarSectionHeader, resultSectionHeader, resultSolarWorksDone, resultElectroWorksDone, resultClientCount,priceTableLeftSidebar ;
    switch(curentLanguage) {
        case 'ru':
            subSlogan = "ЗА БОЛЕЕ ЗЕЛЕНЫЙ МИР";
            btn = 'ПОГОВОРИМ О ВАШЕМ СЛЕДУЮЩЕМ ПРОЕКТЕ ?';
            headerLink1 = "СОЛНЕЧНЫЕ ПАНЕЛИ" ;
            headerLink2 = "ЭЛЕКТРОМОНТАЖНЫЕ РАБОТЫ" ;
            headerLink3 = "КОНТАКТЫ" ;
            electroSectionHeader = "ЭЛЕКТРОМОНТАЖНЫЕ РАБОТЫ";
            solarSectionHeader = "УСТАНОВКА СОЛНЕЧНЫХ ПАНЕЛЕЙ";
            resultSectionHeader = "НАШИ РЕЗУЛЬТАТЫ";
            resultSolarWorksDone = 'СОЛНЕЧНЫХ ПАНЕЛЕЙ УСТАНОВЛЕНО: ';
            resultElectroWorksDone = 'ЭЛЕКТРОМОНТАЖНЫХ РАБОТ ЗАВЕРШЕНО:';
            resultClientCount = 'КОЛИЧЕСТВО КЛИЕНТОВ:';


            priceTableLeftSidebar = "ЦЕНЫ";

            break;
        default:
            subSlogan = "PAR ZAĻĀKU PASAULI";
            btn = 'PARUNĀSIM PAR JŪSU NĀKĀKO PROJEKTU ?';
            headerLink1 = "SAULES PANEĻI" ;
            headerLink2 = "ELEKTROMONTĀŽAS DARBI" ;
            headerLink3 = "KONTAKTI" ;
            electroSectionHeader = "ELEKTROMONTĀŽAS DARBI";
            solarSectionHeader = "SAULES PANEĻU UZSTĀDĪŠANA";
            resultSectionHeader = "MŪSU REZULTĀTI";
            resultSolarWorksDone = 'UZSTĀDĪTIE SAULES PANEĻI: ';
            resultElectroWorksDone = 'ELEKTROMONTĀŽAS DARBI PABEIGTI :';
            resultClientCount = 'KLIENTU SKAITS:';

            priceTableLeftSidebar = "CENAS";

            break;
    }
    return {
        subSlogan, btn, headerLink1 , headerLink2, headerLink3 , electroSectionHeader, 
        solarSectionHeader,resultSectionHeader,resultSolarWorksDone,resultElectroWorksDone,resultClientCount ,priceTableLeftSidebar
    };
}

function ContactsContentByLanguage() {
    let curentLanguage = useSelector(state => state.settings.currentLanguage);
    let phone,mail,address,contactSlotHeader,contactSlotBody,ContactFormHeader;
    switch(curentLanguage) {
        case 'ru':
            ContactFormHeader = 'Контактная информация';
            phone =  `Номер телефона:`;
            mail = 'Э-почта';
            address = 'Юридический Адрес';
            contactSlotHeader = 'Время работы: ';
            contactSlotBody = ' Понедельник - Пятница: с 8:00 до 19:00 \n  Суббота - : Выходной. \n  Воскресенье - Выходной.';
            break;
        default:
            ContactFormHeader = 'Kontaktinformācija';
            phone =  `Telefona numurs:`;
            mail = 'E-pasts:';
            address = 'Juridiskā Adrese:';
            contactSlotHeader = 'Darba Laiks: ';
            contactSlotBody = ' Pirmdiena - Piektdiena: no 8:00 līdz 19:00 \n Sestdiena - Brīvdiena. \n Svētdiena - Brīvdiena.';
            break;
    }
    return {ContactFormHeader, phone, mail, address, contactSlotHeader, contactSlotBody};
}

function GalleryContentByLanguage() {
    let curentLanguage = useSelector(state => state.settings.currentLanguage);
    let GalleryHeader;
    switch(curentLanguage) {
        case 'ru':
            GalleryHeader = 'НАШИ РАБОТЫ';
            break;
        default:
            GalleryHeader = 'MŪSU DARBI';
            break;
    }
    return {GalleryHeader};
}
//****************** ELECTRO PAGES **********************
function ElectroContentByLanguage() {
    let curentLanguage = useSelector(state => state.settings.currentLanguage);
    let ElectroProjectSectionHeader,ElectroProjectSectionBody,ElectroInstalSectionHeader,ElectroInstalSectionBody, ElectroMeasurementSectionHeader,ElectroMeasurementSectionBody,
    ElectroDeploySectionHeader, ElectroDeploySectionBody , ElectroVideoSectionHeader , ElectroVideoSectionBody, ElectroSmartHomeSectionHeader, ElectroSmartHomeSectionBody,
    ElectrolightningSectionHeader , ElectrolightningSectionBody ;
    switch(curentLanguage) {
 

        case 'ru':
            ElectroProjectSectionHeader = "ЭЛЕКТРО-ПРОЕКТИРОВАНИЕ";
            ElectroProjectSectionBody = 
                `
                От грамотного спроектированного внутреннего электроснабжения зависит не только комфорт, но и безопасность в доме, офисе или предприятии. \n

                Проектирование и сборка щитов, является одним из главных составляющих правильного подхода к ремонту вашей квартиры или дома. 
    
                Перед тем как приступать к выполнению электромонтажных работ должно быть, как минимум, представление о всех потребителях в помещениях, особенно силовых мощностью от 1 кВт и выше. 

                На такие потребители как стиральная машинка, посудомойка, бойлер (водонагреватель), 
                варочная поверхность, в обязательном порядке требуется прокладка отдельных кабельных линий, сечение которых соответствует мощности потребителя. 
     
                /l Проектирование щитов
    
                /l Сборка электрощитов
    
                /l План электро-коммуникаций 
                `;

            ElectroInstalSectionHeader = "ЭЛЕКТРОИНСТАЛЯЦИЯ";
            ElectroInstalSectionBody = 
                `
                Электромонтажные работы различной сложности и вида, любой электромонтаж от установки розетки и выключателя до полной замены электропроводки в квартире 
                или загородном доме под ключ.   
                
                Команда профессионалов, все мастера имеют соответствующую квалификацию и многолетний опыт в сфере электромонтажа, 
                а в нашем арсенале все необходимое оборудование и проверенные материалы
                
                /l Установки розеток

                /l Установки выключателей

                /l Монтаж распаечной (распределительной) коробки

                /l Коммутация проводов
                
                /l Демонтажные работы

                /l Установка люстр , светильников и светодиодной ленты

                /l Подключения бытовой техники

                /l Монтаж электрощитового оборудования
                `;

            ElectroMeasurementSectionHeader = "ЗАМЕРЫ ИЗОЛЯЦИИ";
            ElectroMeasurementSectionBody = 
            `
            При работе электроустановок, их изоляционные свойства с течением времени меняются, под действием температурных перепадов, механических воздействий, термического нагрева.

            В изоляционной оболочке токопроводящего проводника появляются микротрещины, в которую может попасть влага и привести к пробою изолирующего слоя, 
            вызвать появление напряжения на корпусе оборудования, утечку электроэнергии или короткое замыкание, что в свою очередь, грозит выходом из строя частей энергосистемы, 
            возгораниями, или поражением электрическим током человека. 
            
            Наши специалисты  выполняют диагностику:
            
            /l Слаботочных цепей

            /l Электропроводки

            /l Заземления

            /l  Проводов и кабельных линий. 

            /l Для обнаружения повреждений и предотвращения аварий, необходимы регулярные испытания и проверки. 

            /l  Мы предоставляем услуги по проведению испытаний и замеров сопротивления изоляции. 
            `;

            ElectroDeploySectionHeader = "СДАЧА В ЭКСПЛУАТАЦИЮ";
            ElectroDeploySectionBody = 
            `
            Получение разрешения на ввод объекта в эксплуатацию является завершающим этапом в процессе осуществления строительства или реконструкции объекта.

            МЫ занимаемся всеми этапами юридического сопровождения строительных проектов, в том числе, сопровождением ввода объектов строительства в эксплуатацию. 

            /l Подготовка документов для ввода объекта в эксплуатацию
            
            /l Разрешение на строительство
            
            Акт, подтверждающий соответствие параметров объекта, в том числе эффективности и требованиям оснащенности объекта приборами учета энергетических ресурсов;
            документы, подтверждающие соответствие объекта полученным техническим условиям (при наличии);
            
            /l Схема расположения объекта и расположение сетей в границах земельного участка;
            
            /l заключение органа государственного строительного надзора  ;
            
            /l технический план.
            
            Для проведения таких работ требуются помощь настоящих профессионалов, имеющих высокую квалификацию. 

            Доверяя нашей компании ввод объекта строительства в эксплуатацию, вы можете быть уверены, что эта процедура пройдет быстро и будет иметь исключительно положительный результат.

            
            `;

            ElectroVideoSectionHeader = "ВИДЕОНАБЛЮДЕНИЕ";
            ElectroVideoSectionBody = 
            `
            Системы видеонаблюдения позволяют в реальном времени предотвращать угрозу вашему бизнесу,
            а также удаленно мониторить происходящее на объекте. Наши специалисты подберут необходимое оборудование по вашим потребностям и осуществят его монтаж.
            
            Основная задача видеонаблюдения в магазине — предотвратить хищение товара и денежных средств. Система видеонаблюдения должна охватывать торговый зал,
            складские помещения и кассовую зону. При установке видеокамер желательно избежать «мёртвых» зон.
            Видеорегистратор устанавливается в помещении с ограниченным доступом. 

            /l Установка внутренней (купольной) камеры
    
            /l  Установка уличной (корпусной) камеры
        
            /l Установка поворотной (PTZ) камеры
            
            /l Установка и подключение видеорегистратора
            
            /l Монтаж трубы гофрированной
            
            /l Монтаж кабеля
            
            /l  Установка блока питания резервированного
            
            /l Настройка системы видеонаблюдения
            
            /l Настройка удаленного Online доступа
            `;

            ElectroSmartHomeSectionHeader = "УМНЫЙ ДОМ";
            ElectroSmartHomeSectionBody = 
            `
            Умный дом — автоматизация инженерных систем. Умный дом самостоятельно контролирует все процессы:

            /l Управление освещением

            /l Освещение и управление шторами

            /l Кондиционирование и вентиляцию

            /l  Обогрев пола, электроснабжение

            /l Системы безопасности

            /l Системы протечек воды 

            /l Управление Аудио-устройствами

            /l  Видеонаблюдение.

            Сценарии настраиваются под вас и вашу семью, а при желании, возможно изменить их в любое удобное время.
            
            Выходя из дома, вам не придется вспоминать
            выключили ли свет или не забыли ли отключить от электропитания какой-то бытовой прибор 

            вы сможете управлять всеми вашими устройствами со смартфона, даже находясь в другой стране.
            `;
 
            ElectrolightningSectionHeader = "МОЛНИЕЗАЩИТА";
            ElectrolightningSectionBody = 
            `
            /l Активная молниезащита - это устройство, которое позволяет защитить объект или объекты в заданном радиусе. 
            Это автономное электронное устройство не требующее питания и обеспечивающее защиту от молний за счет ионизации воздуха, 
            которая происходит, только в момент удара молнии.

            /l Наиболее часто применяются пассивные системы молниезащиты (ПМЗ). 
            Основные отличия пассивной молниезащиты (еще ее называют традиционной или сеткой Фарадея),
            в том, что она защищает только, то место, куда устанавливается проводник или молниеприемник с небольшим радиусом покрытия, достаточным только для защиты здания (объекта).
            
            /l Внутренняя молниезащита или устройство защиты от импульсных перенапряжений в электро-сети, 
            вызванных последствием попадания молнии в существующую молниезащиту или рядом с объектом. 
            Отсекает и уводит на заземление импульсы тока, равные по электро-характеристикам последствию удара молнии 
            при ее растекании по земле или другим конструкциям до момента полного "затухания".

            /l Защитное заземление для электропроводки делают для защиты человека от случайных ударов электрическим током,
             а также для стабильной работы электроприборов. Нормируется в соответствии с ПУЭ до 4 Ом, а так же: для газового котла до 10 Ом,
              для мед.оборудования до 2 Ом, для подстанции до 0,5 Ома.
            `;
                
            break;
        default:
            ElectroProjectSectionHeader = "ELEKTRO-PROJEKTĒŠANA";
            ElectroProjectSectionBody = 
            `${<FontAwesomeIcon className='solarHeaderFontAwesome' icon={faSolarPanel} />}
            No labi izstrādāta iekšējā barošanas avota ir atkarīgs ne tikai komforts, bet arī drošība mājās, birojā vai uzņēmumā.

             Paneļu projektēšana un montāža ir viena no galvenajām pareizās pieejas sastāvdaļām dzīvokļa vai mājas renovācijā.

             Pirms elektroinstalācijas darbu uzsākšanas ir jābūt vismaz priekšstatam par visiem telpās esošajiem patērētājiem,
             īpaši jaudas no 1 kW un vairāk.
            
             Tādiem patērētājiem kā veļas mašīna, trauku mazgājamā mašīna, boileris (ūdens sildītājs),
             plīts virsma, obligāti jāizvelk atsevišķas kabeļu līnijas, kuru šķērsgriezums atbilst patērētāja jaudai.
 
            
             /l Vairoga dizains

             /l Elektrisko paneļu montāža

             /l Elektrisko komunikāciju plāns
            `;

            ElectroInstalSectionHeader = "ELEKTROINSTALĀCIJA";
            ElectroInstalSectionBody = 
            `
            Dažādas sarežģītības un veida elektrodarbi, jebkura elektroinstalācija no kontaktligzdas un slēdža uzstādīšanas līdz pilnīgai elektroinstalācijas nomaiņai dzīvoklī
            vai pabeigti lauku māja.
           
            Profesionāļu komanda, visiem meistariem ir atbilstoša kvalifikācija un ilggadēja pieredze elektromontāžas jomā,
            un mūsu arsenālā viss nepieciešamais aprīkojums un pārbaudīti materiāli
           
            /l  Kontaktligzdas iestatījumi

            /l Pārslēgt iestatījumus

            /l  Sadales (sadales) kārbas montāža

            /l Elektroinstalācija
           
            /l  Demontāžas darbi

            /l Lustru, lampu un LED lentes uzstādīšana

            /l Ierīču savienojumi

            /l Sadales iekārtu uzstādīšana
            `;
            
            ElectroMeasurementSectionHeader = "ELEKTROMĒRĪJUMI";
            ElectroMeasurementSectionBody = 
            `
            Elektroinstalāciju ekspluatācijas laikā to izolācijas īpašības mainās laika gaitā, temperatūras izmaiņu, mehāniskās ietekmes un termiskās apkures ietekmē.
             
             Vadošā vadītāja izolācijas apvalkā parādās mikroplaisas, kurās var iekļūt mitrums un izraisīt izolācijas slāņa noārdīšanos,
             izraisīt sprieguma parādīšanos uz iekārtas korpusa, strāvas noplūdi vai īssavienojumu, kas savukārt draud bojāt energosistēmas daļas,
             aizdegšanās vai elektriskās strāvas trieciens personai.
            
             Mūsu speciālisti diagnosticē:
            
             /l Zemas strāvas ķēdes

             /l Elektroinstalācija

             /l Zemējums

             /l Vadi un kabeļu līnijas.

             /l  Lai atklātu bojājumus un novērstu negadījumus, ir nepieciešamas regulāras pārbaudes un pārbaudes.

             /l Sniedzam pakalpojumus izolācijas pretestības pārbaudei un mērīšanai.
            `;
           
            ElectroDeploySectionHeader = "NODOŠANA EKSPLUATĀCIJĀ";
            ElectroDeploySectionBody = 
            `
            Objekta nodošanas ekspluatācijā atļaujas saņemšana ir noslēdzošais posms objekta būvniecības vai rekonstrukcijas procesā.

            MĒS nodarbojamies ar visiem būvniecības projektu juridiskā atbalsta posmiem, tai skaitā atbalstu būvprojektu nodošanai ekspluatācijā.

            Dokumentu sagatavošana objekta nodošanai ekspluatācijā
            Būvatļauja
           
            Aktu, kas apliecina objekta parametru atbilstību, tai skaitā efektivitāti un prasības objekta aprīkošanai ar enerģijas uzskaites ierīcēm;
            dokumenti, kas apliecina objekta atbilstību saņemtajiem tehniskajiem nosacījumiem (ja tādi ir);
           
            Objekta izvietojums un tīklu izvietojums zemesgabala robežās;
           
            būvuzraudzības valsts institūcijas slēdziens;
           
            tehniskais plāns.
           
            Lai veiktu šādu darbu, nepieciešama reālu profesionāļu ar augstu kvalifikāciju palīdzība.

            Uzticot mūsu uzņēmumam būvlaukuma nodošanu ekspluatācijā, jūs varat būt pārliecināti, ka šī procedūra tiks pabeigta ātri un tai būs īpaši pozitīvs rezultāts.
            `;
           
            ElectroVideoSectionHeader = "VIDEONOVĒROŠANA";
            ElectroVideoSectionBody = 
            `
            Videonovērošanas sistēmas ļauj novērst draudus jūsu biznesam reāllaikā,
            kā arī attālināti uzraudzīt objektā notiekošo. Mūsu speciālisti izvēlēsies nepieciešamo aprīkojumu atbilstoši Jūsu vajadzībām un veiks tā uzstādīšanu.

             Videonovērošanas galvenais uzdevums veikalā ir preču un naudas zādzības novēršana. Videonovērošanas sistēmai jāaptver tirdzniecības telpa,
             noliktavas un kases aparāti. Uzstādot videokameras, vēlams izvairīties no "mirušajām" zonām.
             Videoreģistrators ir uzstādīts telpā ar ierobežotu piekļuvi.

             /l Iekštelpu (kupola) kameras uzstādīšana
    
             /l  Āra (korpusa) kameras uzstādīšana
        
             /l PTZ kameras uzstādīšana
         
             /l   DVR uzstādīšana un pievienošana
           
             /l  Gofrēto cauruļu uzstādīšana
           
             /l  Kabeļu uzstādīšana
           
             /l  Liekas barošanas avota uzstādīšana
            
             /l  Videonovērošanas sistēmas uzstādīšana
           
             /l  Attālās tiešsaistes piekļuves iestatīšana
            `;
            
            ElectroSmartHomeSectionHeader = "GUDRA MĀJA";
            ElectroSmartHomeSectionBody = 
            `
            Gudra māja - inženiersistēmu automatizācija. Gudra māja neatkarīgi kontrolē visus procesus:

            /l Apgaismojuma kontrole

            /l Apgaismojuma un aizkaru kontrole

            /l  Gaisa kondicionēšana un ventilācija

            /l Apsildāmās grīdas, elektroapgāde

            /l  Drošības sistēmas

            /l Ūdens noplūdes sistēmas

            /l  Audio ierīču pārvaldība

            /l  CCTV.

            Scenāriji tiek pielāgoti jums un jūsu ģimenei, un, ja vēlaties, varat tos mainīt jebkurā izdevīgā laikā.
           
            Izejot no mājas, jums nav jāatceras
            vai tika izslēgta gaisma, vai aizmirsuši atvienot no strāvas padeves kādu sadzīves tehniku

            jūs varēsiet vadīt visas savas ierīces no viedtālruņa, pat ja atrodaties citā valstī.
            `;
           
            ElectrolightningSectionHeader = "ZIBENSAIZSARDZĪBA";
            ElectrolightningSectionBody = 
            `
            Aktīvā zibensaizsardzība ir ierīce, kas ļauj aizsargāt objektu vai objektus noteiktā rādiusā.
            Šī ir autonoma elektroniska ierīce, kurai nav nepieciešama strāva un kas nodrošina aizsardzību pret zibeni gaisa jonizācijas dēļ,
            kas notiek tikai zibens spēriena brīdī.
            
            Visbiežāk izmantotās pasīvās zibensaizsardzības sistēmas (PMZ).
            Galvenās pasīvās zibensaizsardzības atšķirības (to sauc arī par tradicionālo vai Faraday sietu),
            ar to, ka tas aizsargā tikai vietu, kur ir uzstādīts zibensnovedējs vai zibensnovedējs ar nelielu pārklājuma rādiusu, kas ir pietiekams tikai ēkas (objekta) aizsardzībai.
            
            Iekšējā zibensaizsardzības vai pārsprieguma aizsardzības ierīce elektrotīklā,
            ko izraisa zibens spēriens esošajā zibens aizsardzībā vai objekta tuvumā.
            Nogriež un noved pie zemes strāvas impulsiem, kas pēc elektriskajām īpašībām ir vienādi ar zibens spēriena sekām
            kad tas izplatās virs zemes vai citām konstrukcijām līdz pilnīgas "novājināšanās" brīdim.
            
            Elektrības vadu aizsargzemējums tiek veikts, lai pasargātu cilvēku no nejaušiem elektriskās strāvas triecieniem,
            kā arī elektroierīču stabilai darbībai. Tas tiek normalizēts saskaņā ar PUE līdz 4 omiem, kā arī: gāzes katlam līdz 10 om,
            medicīnas iekārtām līdz 2 Om, apakšstacijai līdz 0,5 Om.
            `;
           
            break;
    }
    return {ElectroProjectSectionHeader,ElectroProjectSectionBody,ElectroInstalSectionHeader,ElectroInstalSectionBody, ElectroMeasurementSectionHeader,ElectroMeasurementSectionBody,
        ElectroDeploySectionHeader, ElectroDeploySectionBody , ElectroVideoSectionHeader , ElectroVideoSectionBody, ElectroSmartHomeSectionHeader, ElectroSmartHomeSectionBody,
        ElectrolightningSectionHeader, ElectrolightningSectionBody };
}


//****************** SOLAR PAGES **********************
function SolarContentByLanguage() {
    let curentLanguage = useSelector(state => state.settings.currentLanguage);
    let SolarProjectSectionHeader,SolarProjectSectionBody,SolarInstalSectionHeader,SolarInstalSectionBody, SolarInvectorInstallSectionHeader,SolarInvectorInstallSectionBody,
    SolarSystemCheckSectionHeader, SolarSystemCheckSectionBody , SolarDeploySectionHeader, SolarDeploySectionBody, SolarSerteficatsSectionHeader , SolarSerteficatsSectionBody ;
    switch(curentLanguage) {
 
        case 'ru':
            SolarProjectSectionHeader = "ПРОЕКТИРОВАНИЕ ПАНЕЛЕЙ";
            SolarProjectSectionBody = 
                `
                Индивидуальный подход и гибкая ценовая политика, включающая в себя большой практический опыт и наличие нескольких профессиональных монтажных бригад, 
                позволяют сделать наиболее выгодное предложение по осуществлению монтажа солнечных электростанций.

                Все работы, включающие в себя монтаж солнечной электростанции, а именно: подготовку и сборку оборудования, 
                проектирование электросети, запуск и отладку всех систем солнечной электростанции - рассчитываются сугубо индивидуально, 
                каждый проект уникален, как и наш подход к работе!

                Преимущества:
                Снижение затрат на электроэнергию.
                Большая независимость от поставщиков электроэнергии.
                Экологически чистая инвестиция.


                Основные компоненты

                /l 1. Солнечная панель
                /l 2. Инвертор
                /l 3. Центральная сеть


                Вспомогательные компоненты

                /l  1. Распределительные коробки постоянного тока
                /l  2. Шины переменного тока (переключатели)
                /l 3. Пульт управления
                /l 4. Кабели
                /l  5. Монтажные конструкции
                /l 6. Заземление и освещение

           

  
                `;

            SolarInstalSectionHeader = "УСТАНОВКА";
            SolarInstalSectionBody = 
                `
                
                /l 1. Определить примерный объем электроэнергии, который потребуется для поддержания нормальной работы системы. Это поможет понять, какие солнечные панели потребуется для построения системы.

                /l 2. Выбор солнечные панелей, которые обеспечат достаточное количество электроэнергии для поддержания работы системы.

                /l 3. План постановки солнечных панелей: Где и как будут расположены солнечные панели, ориентация, угол наклона и прочие факторы.
                    
                /l 4. Установка солнечных панелей    

                /l 5. Проверка системы: что бы  убедиться в том, что она работает должным образом.


                ШАГИ:
                Консультация

                /l Определение потребления

                /l Предложение решений для солнечных батарей

                /l  Согласование с  заказчиком

                /l Монтаж и настройка солнечных панелей

                /l  Инструктаж клиента по эксплуатации и основам эксплуатации солнечных панелей
                `;

            SolarInvectorInstallSectionHeader = "НАСТРОЙКА ИНВЕРТОРА";
            SolarInvectorInstallSectionBody = 
            `
            
            Инвертор является одним из основных компонентов, без которого не может работать современная солнечная энергетическая система.
            
            Поскольку энергия, производимая солнечными панелями, является постоянным током, нам необходимо каким-то образом преобразовать ее в потребляемый переменный ток (AC) для бытового или коммерческого использования.

            Солнечный инвертор
            Для этой операции используются инверторы. Энергия постоянного тока, генерируемая солнечными панелями,
            поступает в инверторы и становится легко используемой переменным током. Тело не может существовать без мозга. 

            Без инвертора у вас не получится настроить полноценную солнечную электростанцию.

            /l Профессиональная настройка инвертора c учетом запросов клиента

            /l  По латвийским стандартам електросети
            `;

            SolarSystemCheckSectionHeader = "ПРОВЕРКА СИСТЕМЫ";
            SolarSystemCheckSectionBody = 
            `
            /l Проверка электрическое соединение солнечных панелей.

            /l Проверка состояние монтажных опор и креплений.
            
            /l  Проверка состояние проводки.
            
            /l Проверка на предмет повреждений или вторичного износа солнечных панелей.
            
            /l Проверка параметров тока и напряжения при подключении к сети.
            
            /l Проверка герметичности системы.
            
            /l Проверка инвертора на надежность и эффективность работы.
            
            /l  Проверка пожарной безопасности системы.
            `;

            SolarDeploySectionHeader = "СДАЧА ПРОЕКТА";
            SolarDeploySectionBody = 
            `
            /l Подготовка и сдача солнечных электростанций

            /l  Подготовка проекта

            /l  Получение разрешения на макрогенераторы до 11.1 кв. 

            /l Получение разрешения на солнечные станции свыше 11.1 кв .

            /l Подача заявки в latvenergo .

            /l Настройка инвертора согласно латвийскому законодательству.

            /l Сдача инвертора в эксплуатацию.
            `;

            SolarSerteficatsSectionHeader = "СЕРТИФИЦИРОВАННЫЕ СПЕЦИАЛИСТЫ";
            SolarSerteficatsSectionBody = 
            `
            /l Наши сертифицированные специалисты отлично знают все требования и тонкости в установке солнечных панелей.

            /l  Они уже помогли многим клиентам достичь запланированных целей и получать отличные результаты.
            
            /l Наши специалисты имеют сертификаты на установку солнечных панелей.
            
            /l Мы предлагаем сертифицированную проверку, настройку и сдачу инверторов.
            
            /l  Мы надеемся увидеть вас, среди наших довольных клиентов.
            
            
            `;
 
    
                
            break;
        default:
            SolarProjectSectionHeader = "SAULES PANEĻU PROJEKTĒŠANA";
            SolarProjectSectionBody = 
                `
                Individuāla pieeja un elastīga cenu politika, kas ietver plašu praktisko pieredzi un vairāku profesionālu montāžas komandu klātbūtni,
                ļauj izteikt izdevīgāko piedāvājumu saules elektrostaciju uzstādīšanai.

                Visi darbi, ieskaitot saules elektrostacijas uzstādīšanu, proti: iekārtu sagatavošana un montāža,
                elektrotīkla projektēšana, visu saules elektrostacijas sistēmu palaišana un atkļūdošana - tās aprēķina tikai individuāli,
                Katrs projekts ir unikāls, tāpat kā mūsu pieeja darbam!

                Priekšrocības:
                /l  Enerģijas izmaksu samazināšana.
                /l  Lielāka neatkarība no elektroenerģijas piegādātājiem.
                /l  Videi draudzīgs ieguldījums.


                Galvenās sastāvdaļas

                /l 1. Saules panelis
                /l 2. Invertors
                /l 3. Centrālais tīkls


                Palīgkomponenti

                /l 1. Līdzstrāvas sadales kārbas
                /l 2. Maiņstrāvas kopnes (slēdži)
                /l 3. Vadības panelis
                /l 4. Kabeļi
                /l 5. Montāžas konstrukcijas
                /l 6. Zemējums un apgaismojums 
                `;

            SolarInstalSectionHeader = "MONTAŽA";
            SolarInstalSectionBody = 
                `
                /l 1. Nosakiet aptuveno elektroenerģijas daudzumu, kas būs nepieciešams, lai uzturētu normālu sistēmas darbību. Tas palīdzēs saprast, kādi saules paneļi būs nepieciešami, lai izveidotu sistēmu.

                /l 2. Saules paneļu izvēle, kas nodrošinās pietiekami daudz elektrības, lai sistēma darbotos.

                /l 3. Saules paneļu uzstādīšanas plāns: Kur un kā tiks izvietoti saules paneļi, orientācija, slīpuma leņķis un citi faktori.
                   
                /l 4. Saules paneļu uzstādīšana

                /l 5. Sistēmas pārbaude: lai pārliecinātos, ka tā darbojas pareizi.


                DARBĪBAS:
                Konsultācija

                /l  Patēriņa definīcija

                /l Piedāvājiet risinājumus saules paneļiem

                /l Saskaņošana ar klientu

                /l Saules paneļu uzstādīšana un konfigurēšana

                /l Klienta instruktāža par saules paneļu darbību un pamata darbību
                `;

            SolarInvectorInstallSectionHeader = "INVERTORA IESTATĪŠANA";
            SolarInvectorInstallSectionBody = 
            `
                Invertors ir viena no galvenajām sastāvdaļām, bez kuras mūsdienu saules enerģijas sistēma nevar darboties.
                
                Tā kā saules paneļu saražotā enerģija ir līdzstrāva, mums tā kaut kādā veidā jāpārvērš patērētajā maiņstrāvā (AC) dzīvojamai vai komerciālai lietošanai.

                saules invertors
                Šai darbībai tiek izmantoti invertori. Līdzstrāvas jauda, ​​ko ģenerē saules paneļi
                iekļūst invertoros un kļūst viegli lietojams ar maiņstrāvu. Ķermenis nevar pastāvēt bez smadzenēm.

                Bez invertora jūs nevarēsiet izveidot pilnvērtīgu saules elektrostaciju.

                /l Profesionāla invertora iestatīšana

                /l Pielāgots pēc klienta vēlmēm

                /l Atbilstoši Latvijas elektrotīkla standartiem
            `;

            SolarSystemCheckSectionHeader = "SISTĒMAS PĀRBAUDE";
            SolarSystemCheckSectionBody = 
            `
            /l Saules paneļu elektriskā pieslēguma pārbaude.

            /l  Pārbaudiet stiprinājuma balstu un stiprinājumu stāvokli.
            
            /l Elektroinstalācijas stāvokļa pārbaude.
            
            /l Pārbaudiet saules paneļu bojājumus vai sekundāro nodilumu.
            
            /l Strāvas un sprieguma parametru pārbaude, pievienojot tīklam.
            
            /l  Sistēmas hermētiskuma pārbaude.
            
            /l Invertora uzticamības un efektivitātes pārbaude.
            
            /l Sistēmas ugunsdrošības pārbaude.
            `;

            SolarDeploySectionHeader = "PROJEKTA NODOŠANA";
            SolarDeploySectionBody = 
            `
            /l Saules elektrostaciju sagatavošana un nodošana ekspluatācijā

            /l  Projekta sagatavošana

            /l Atļaujas saņemšana makroģeneratoriem līdz 11,1 kv.

            /l Atļaujas saņemšana saules stacijām virs 11,1 kv.

            /l Pieteikuma iesniegšana Latvenergo.

            /l  Invertora iestatīšana atbilstoši Latvijas likumdošanai.

            /l  Invertora nodošana ekspluatācijā.
            `;

            SolarSerteficatsSectionHeader = "SERTIFICĒTI SPECIĀLISTI";
            SolarSerteficatsSectionBody = 
            `
            /l  Mūsu sertificētie speciālisti labi pārzina visas prasības un smalkumus saules paneļu uzstādīšanā.

            /l Viņi jau ir palīdzējuši daudziem klientiem sasniegt plānotos mērķus un iegūt izcilus rezultātus.
        
            /l  Mūsu speciālistiem ir sertifikāti saules paneļu uzstādīšanai.
        
            /l  Piedāvājam invertoru sertificētu testēšanu, regulēšanu un nodošanu ekspluatācijā.
        
            /l  Mēs ceram redzēt jūs starp mūsu apmierinātajiem klientiem.
            `;
           
 
           
            break;
    }
    return {SolarProjectSectionHeader,SolarProjectSectionBody,SolarInstalSectionHeader,SolarInstalSectionBody, SolarInvectorInstallSectionHeader,SolarInvectorInstallSectionBody,
        SolarSystemCheckSectionHeader, SolarSystemCheckSectionBody , SolarDeploySectionHeader, SolarDeploySectionBody, SolarSerteficatsSectionHeader , SolarSerteficatsSectionBody };
}

function MapContentByLanguage() {
    let curentLanguage = useSelector(state => state.settings.currentLanguage);
    let mapSectionHeader,stepsHeader1,stepsHeader2,stepsHeader3,stepsHeader4,clientCountHeader,progressbarHeader1,progressbarHeader2 ;
    switch(curentLanguage) {
        case 'ru':
            mapSectionHeader = 'ДОСТИГАЙТЕ РЕЗУЛЬТАТОВ ВМЕСТЕ С НАМИ!';
            stepsHeader1 = 'ПОЛУЧИТЬ ПРЕДЛОЖЕНИЕ';
            stepsHeader2 =  'ПОДПИСАТЬ КОНТРАКТ';
            stepsHeader3 = 'УСТАНОВКА';
            stepsHeader4 = 'РЕЗУЛЬТАТ';
            clientCountHeader = 'МЫ ПОЗАБОТИЛИСЬ \n  УЖЕ БОЛЕЕ ЧЕМ ОБ 500 \n КЛИЕНТАХ';
            progressbarHeader1 = 'СОЛНЕЧНЫХ ПАНЕЛЕЙ УСТАНОВЛЕНО:';
            progressbarHeader2 = 'ЭЛЕКТРОМОНТАЖНЫХ РАБОТ ЗАВЕРШЕНО:';
            break;
        default:
            mapSectionHeader = 'SASNIEDZ REZULTĀTUS KOPĀ AR MUMS!';
            stepsHeader1 = 'SAŅEMT PIEDĀVĀJUMU';
            stepsHeader2 =  'NOSLĒGT LĪGUMU';
            stepsHeader3 = 'UZSTĀDĪŠANA';
            stepsHeader4 = 'IZBAUDI REZULTĀTU';
            clientCountHeader = 'MĒS PARŪPĒJĀMIES \n JAU VAIRĀK NEKĀ PAR 500 \n KLIENTIEM ';
            progressbarHeader1 = 'UZSTĀDĪTIE SAULES PANEĻI:';
            progressbarHeader2 = 'ELEKTROMONTĀŽAS DARBI PABEIGTI :';
            break;
    }
    return {mapSectionHeader,stepsHeader1,stepsHeader2,stepsHeader3,stepsHeader4,clientCountHeader,progressbarHeader1,progressbarHeader2};
}

function EmailContentByLanguage() {
    let curentLanguage = useSelector(state => state.settings.currentLanguage);
    let contactFormHeader,sendingInProcess, successMsg, sendOneMoreMsg, names, surname, phone, eMail, message, sendBtn;
    switch(curentLanguage) {
        case 'ru':
            contactFormHeader = 'Связаться с нами';
            sendingInProcess = 'Отправка...';
            successMsg = 'Сообщение успешно отправлено';
            sendOneMoreMsg = 'Отправить еще одно ';
            names = 'Имя ';
            surname = 'Фамилия ';
            phone = 'Номер телефона ';
            eMail = 'Э-почта ';
            message = 'Сообщение';
            sendBtn = 'ОТПРАВИТЬ';
          
            break;
        default:
            contactFormHeader = 'Sazināties Ar Mums';
            sendingInProcess = 'Nosūtīšana...';
            successMsg = '  Ziņojums ir veiksmīgi nosūtīts';
            sendOneMoreMsg = ' Nosūtiet vēl vienu  ';
            names = 'Vārds ';
            surname = 'Uzvārds';
            phone = 'Telefona numurs ';
            eMail = 'E-pasts ';
            message = 'Ziņojums ';
            sendBtn = 'NOSŪTĪT';
            break;
    }
    return {contactFormHeader,sendingInProcess, successMsg, sendOneMoreMsg, names, surname, phone, eMail, message, sendBtn};
}

function Prices() {
    let SolarProjectPrice, SolarBuildPrice, SolarInvertorPrice , SolarCheckPrice,SolarObjPassPrice,
    ElectroProjectPrice,ElectroBuildPrice,ElectroMeasurementsPrice,ElectroObjPassPrice ,CctvInstllPrice,smarHomePrice,lightningProtectionPrice;

    //solar
    SolarProjectPrice = 450;
    SolarBuildPrice =150;
    SolarInvertorPrice =150;
    SolarCheckPrice =150;
    SolarObjPassPrice = 200;
 

    //Electro
    ElectroProjectPrice = 450;
    ElectroBuildPrice = 100;
    ElectroMeasurementsPrice = 150;
    ElectroObjPassPrice = 150;
    CctvInstllPrice = 200;
    smarHomePrice = 150;
    lightningProtectionPrice = 250;

    return {SolarProjectPrice, SolarBuildPrice, SolarInvertorPrice , SolarCheckPrice,SolarObjPassPrice,
    ElectroProjectPrice,ElectroBuildPrice,ElectroMeasurementsPrice,ElectroObjPassPrice ,CctvInstllPrice,smarHomePrice,lightningProtectionPrice};
}

export {
    HomePageContentByLanguage,
    ContactsContentByLanguage, 
    GalleryContentByLanguage, 
    ElectroContentByLanguage , 
    SolarContentByLanguage,
    MapContentByLanguage,
    EmailContentByLanguage,
    NavBarContentByLanguage,
    Prices
};


