(() => {
const nodes = [{"id":"oral","name":"Indigenous & oral traditions","year":-3400,"date":"Origins prehistory; ongoing","group":"Ancient & oral","type":"tradition","desc":"A reminder that many religious traditions are older than writing and cannot responsibly be assigned a single founding year or a single ancestor. The left-edge placement is schematic, not an origin claim.","row":0},{"id":"sumer","name":"Sumerian religion","year":-3200,"date":"Written evidence c. 3200 BCE onward","group":"Ancient & oral","type":"tradition","desc":"Temple-centered religions of early Mesopotamian city-states. Earlier practice predates surviving writing.","row":1},{"id":"egypt","name":"Ancient Egyptian religion","year":-3100,"date":"c. 3100 BCE onward","group":"Ancient & oral","type":"tradition","desc":"Long-lived Egyptian religious systems centered on divine kingship, temples, cosmic order (ma'at), and afterlife traditions.","row":2},{"id":"pyramid","name":"Pyramid Texts","year":-2400,"date":"c. 2400–2300 BCE","group":"Ancient & oral","type":"text","desc":"Old Kingdom funerary spells inscribed in royal pyramids; among the earliest large bodies of religious writing.","row":3},{"id":"akkad","name":"Akkadian / Babylonian religion","year":-2300,"date":"3rd–1st millennia BCE","group":"Ancient & oral","type":"tradition","desc":"Mesopotamian religious traditions in Akkadian-speaking societies, with substantial continuity and adaptation from Sumerian traditions.","row":1},{"id":"gilgamesh","name":"Epic of Gilgamesh","year":-1800,"date":"Old Babylonian versions c. 1800 BCE; later standard version","group":"Ancient & oral","type":"text","desc":"Mesopotamian epic with themes of kingship, mortality and flood tradition; it developed in multiple textual stages.","row":4},{"id":"bookdead","name":"Egyptian Book of the Dead","year":-1550,"date":"from c. 1550 BCE","group":"Ancient & oral","type":"text","desc":"Modern name for evolving collections of Egyptian funerary spells used especially from the New Kingdom onward.","row":3},{"id":"canaan","name":"Canaanite / Ugaritic religion","year":-1400,"date":"Texts especially c. 1400–1200 BCE","group":"Ancient & oral","type":"tradition","desc":"Northwest Semitic religious traditions known in part from Ugaritic texts; important context for the ancient Levant.","row":2},{"id":"baal","name":"Ugaritic Baal Cycle","year":-1350,"date":"c. 14th–13th century BCE","group":"Ancient & oral","type":"text","desc":"Ugaritic mythic poems concerning Baal and other deities.","row":4},{"id":"greek","name":"Ancient Greek religion","year":-800,"date":"Archaic era c. 800 BCE; older roots","group":"Ancient & oral","type":"tradition","desc":"Plural Greek cultic traditions centered on local sanctuaries, civic ritual, and the Olympian gods.","row":1},{"id":"homer","name":"Homeric epics","year":-750,"date":"c. 8th century BCE","group":"Ancient & oral","type":"text","desc":"The Iliad and Odyssey are not a 'Bible' but became foundational literary-religious reference points in Greek culture.","row":3},{"id":"roman","name":"Roman religion","year":-500,"date":"Archaic Republic onward; older roots","group":"Ancient & oral","type":"tradition","desc":"Roman civic and household religion, later deeply intertwined with Greek and wider Mediterranean traditions.","row":2},{"id":"indoiranian","name":"Indo-Iranian religious background","year":-1800,"date":"2nd millennium BCE (reconstructed)","group":"Iranian","type":"tradition","desc":"A reconstructed cultural-religious background preceding historically attested Vedic and Iranian traditions; not a single organized religion.","row":0},{"id":"zoro","name":"Zoroastrianism","year":-1000,"date":"Zarathustra's date disputed; often around c. 1000 BCE","group":"Iranian","type":"tradition","desc":"Iranian religion associated with Zarathustra (Zoroaster). Scholarly dating is disputed; the Gathas are the oldest Avestan layer.","row":1},{"id":"gathas","name":"Gāthās","year":-1000,"date":"often dated around c. 1000 BCE","group":"Iranian","type":"text","desc":"Old Avestan hymns traditionally attributed to Zarathustra and embedded in the Avesta.","row":2},{"id":"avesta","name":"Avesta","year":-700,"date":"Oral/textual layers over many centuries","group":"Iranian","type":"text","desc":"The Zoroastrian sacred corpus. Its oldest layers are ancient; collection, redaction and manuscript transmission continued much later.","row":3},{"id":"mani","name":"Manichaeism","year":240,"date":"3rd century CE","group":"Iranian","type":"tradition","desc":"Religion founded by Mani in the Sasanian world. Mani grew up in a Judeo-Christian baptist community; his system also engaged Iranian/Zoroastrian and, more modestly, Buddhist traditions while presenting itself as a new universal revelation.","row":1},{"id":"yazidi","name":"Yazidism","year":1100,"date":"Medieval formation; especially 12th century onward","group":"Iranian","type":"tradition","desc":"Distinct Kurdish-speaking religious tradition whose medieval formation drew on several regional currents. No simple direct descent from Zoroastrianism or Islam is established, so this chart does not give it a single parent line.","row":2},{"id":"israelite","name":"Ancient Israelite / Yahwistic religion","year":-1200,"date":"Iron Age, c. 1200 BCE onward","group":"Jewish","type":"tradition","desc":"Religious traditions of ancient Israel and Judah emerging in the wider Canaanite/Levantine world.","row":0},{"id":"firsttemple","name":"First Temple / Judahite Yahwism","year":-950,"date":"1st millennium BCE; temple tradition conventionally 10th–6th c. BCE","group":"Jewish","type":"tradition","desc":"Jerusalem-centered royal and temple religion of Judah, alongside diverse local practice.","row":1},{"id":"torah","name":"Torah / Pentateuch","year":-450,"date":"Composed/redacted over centuries; final form often placed in Persian period","group":"Jewish","type":"text","desc":"The Five Books of Moses. Historical-critical scholarship sees a long process of composition and redaction rather than a single date.","row":4},{"id":"secondtemple","name":"Second Temple Judaism","year":-515,"date":"c. 515 BCE–70 CE","group":"Jewish","type":"tradition","desc":"A diverse Jewish religious world centered on the Second Temple, scripture, law, priesthood and multiple sectarian movements.","row":1},{"id":"tanakh","name":"Hebrew Bible / Tanakh corpus","year":-250,"date":"Texts composed over many centuries; canon formation gradual","group":"Jewish","type":"text","desc":"Collection of Torah, Prophets and Writings. Individual books are much older than the final canonical collection; boundaries developed gradually.","row":5},{"id":"septuagint","name":"Septuagint (Greek Jewish scriptures)","year":-250,"date":"from mid-3rd century BCE; other books later","group":"Jewish","type":"text","desc":"Greek translations of Jewish scriptures beginning with the Pentateuch in Hellenistic Egypt; highly influential in early Christianity.","row":6},{"id":"dss","name":"Dead Sea Scrolls","year":-150,"date":"3rd century BCE–1st century CE","group":"Jewish","type":"text","desc":"Jewish manuscripts including biblical texts, sectarian writings and other works from the Second Temple period.","row":3},{"id":"samaritan","name":"Samaritanism","year":-150,"date":"Israelite roots older; differentiation from Judeans sharpened c. 2nd–1st centuries BCE","group":"Jewish","type":"tradition","desc":"Cognate Israelite tradition centered on Mount Gerizim and the Samaritan Pentateuch. Samarian and Judean Yahwists shared much for centuries; a sharper Jewish–Samaritan separation developed gradually, especially in the Hellenistic/Hasmonean periods.","row":0},{"id":"sampent","name":"Samaritan Pentateuch","year":-150,"date":"distinctive textual form c. 2nd–1st centuries BCE; shared Pentateuchal ancestry older","group":"Jewish","type":"text","row":2,"desc":"The Samaritan form of the Torah/Pentateuch. It shares an older textual ancestry with other ancient Pentateuchal forms while containing distinctive Samaritan readings, especially concerning Mount Gerizim."},{"id":"rabbinic","name":"Rabbinic Judaism","year":70,"date":"Formative period after 70 CE; roots in Second Temple Judaism","group":"Jewish","type":"tradition","desc":"The tradition that became normative Judaism after the Temple's destruction, centered on Torah study, halakhah, synagogue life and rabbinic interpretation.","row":1},{"id":"mishnah","name":"Mishnah","year":200,"date":"c. 200 CE","group":"Jewish","type":"text","desc":"Foundational compilation of rabbinic oral legal traditions, associated with Judah ha-Nasi.","row":4},{"id":"jtalmud","name":"Jerusalem Talmud","year":400,"date":"c. 4th–5th century CE","group":"Jewish","type":"text","desc":"Palestinian rabbinic discussions on the Mishnah, one of the two Talmuds.","row":5},{"id":"btalmud","name":"Babylonian Talmud","year":550,"date":"redaction chiefly c. 5th–6th century CE","group":"Jewish","type":"text","desc":"Babylonian rabbinic discussions on the Mishnah; became especially authoritative in most later Rabbinic Judaism.","row":6},{"id":"karaite","name":"Karaite Judaism","year":750,"date":"emerges c. 8th–9th century CE","group":"Jewish","type":"tradition","desc":"Jewish movement emphasizing the Hebrew Bible and rejecting the binding authority of the rabbinic Oral Torah/Talmud.","row":0},{"id":"kabbalah","name":"Kabbalah / Zohar","year":1280,"date":"Zohar emerges c. late 13th century","group":"Jewish","type":"text","desc":"Medieval Jewish mystical traditions; the Zohar became a central Kabbalistic text.","row":4},{"id":"hasidic","name":"Hasidic Judaism","year":1740,"date":"18th century","group":"Jewish","type":"movement","desc":"Eastern European Jewish revivalist-mystical movement associated with Israel ben Eliezer, the Baal Shem Tov.","row":0},{"id":"reformjud","name":"Reform Judaism","year":1810,"date":"early 19th century","group":"Jewish","type":"movement","desc":"Modern Jewish reform movement that emerged in Central Europe, reshaping liturgy and approaches to law and modernity.","row":2},{"id":"orthjud","name":"Modern Orthodox Judaism","year":1820,"date":"19th-century modern identity; older rabbinic continuity","group":"Jewish","type":"movement","desc":"The label 'Orthodox' developed in modern Europe, while the religious practices and rabbinic structures it defended were much older.","row":1},{"id":"conservativejud","name":"Conservative / Masorti Judaism","year":1886,"date":"late 19th century institutional formation","group":"Jewish","type":"movement","desc":"Modern movement seeking continuity with Jewish law alongside historical scholarship and measured change.","row":3},{"id":"reconstruction","name":"Reconstructionist Judaism","year":1922,"date":"20th century; movement institutionalized later","group":"Jewish","type":"movement","desc":"Movement associated with Mordecai Kaplan, describing Judaism as an evolving religious civilization.","row":0},{"id":"earlychrist","name":"Jesus movement / Early Christianity","year":30,"date":"1st century CE","group":"Christian","type":"tradition","desc":"Began as a Jewish movement in the Second Temple world centered on Jesus of Nazareth; it diversified rapidly and became increasingly Gentile.","row":0},{"id":"paul","name":"Pauline letters","year":50,"date":"c. 50s CE onward","group":"Christian","type":"text","desc":"The earliest surviving Christian writings in the New Testament are generally the authentic letters of Paul.","row":5},{"id":"gospels","name":"Canonical Gospels","year":80,"date":"c. 70–100 CE","group":"Christian","type":"text","desc":"Mark, Matthew, Luke and John were composed in the late 1st century, with scholarly date ranges differing by book.","row":6},{"id":"gnostic","name":"Gnostic / related esoteric movements","year":150,"date":"especially 2nd–3rd centuries CE","group":"Christian","type":"tradition","desc":"A modern umbrella for diverse late-antique groups and texts. Scholars debate whether 'Gnosticism' is a useful single historical category, so the diagram treats this as an overlapping milieu rather than one clean Christian denomination.","row":1},{"id":"nhworks","name":"Nag Hammadi works","year":200,"date":"many works c. 2nd–3rd c.; surviving codices mainly 4th c.","group":"Christian","type":"text","desc":"More than fifty Coptic works preserved in codices found near Nag Hammadi. The physical codices are later than many of the works they transmit.","row":5},{"id":"nicaea","name":"Council of Nicaea","year":325,"date":"325 CE","group":"Christian","type":"event","desc":"Major imperial church council addressing the Arian controversy and producing the Nicene creed's first form. It did not 'choose the Bible.'","row":2},{"id":"aksum","name":"Aksumite / Ethiopian Christianity","year":340,"date":"4th century CE","group":"Christian","type":"tradition","desc":"Christianity became established in the Kingdom of Aksum in the 4th century, associated with King Ezana and Frumentius.","row":3},{"id":"ntcanon","name":"New Testament canon broadly stabilizes","year":367,"date":"4th century; process was gradual","group":"Christian","type":"text","desc":"The 27-book New Testament became increasingly standard in the 4th century, though regional reception varied.","row":6},{"id":"chalcedon","name":"Chalcedonian Christianity","year":451,"date":"Council of Chalcedon, 451 CE","group":"Christian","type":"tradition","desc":"Churches accepting Chalcedon formed the major imperial Chalcedonian stream; those rejecting it became the Oriental Orthodox family.","row":1},{"id":"oriental","name":"Oriental Orthodox churches","year":451,"date":"separation crystallizes after 451 CE","group":"Christian","type":"tradition","desc":"Family including Coptic, Syriac, Armenian, Ethiopian, Eritrean and Malankara Orthodox traditions. These churches accepted earlier ecumenical councils but rejected the Christological definition of Chalcedon (451); they are therefore not descendants of Chalcedonian Christianity.","row":2},{"id":"ethiopian","name":"Ethiopian Orthodox Tewahedo","year":500,"date":"4th-century roots; Oriental Orthodox identity after 451","group":"Christian","type":"tradition","desc":"Ancient Ethiopian church in the Oriental Orthodox family, with a distinctive Geʿez liturgical and biblical tradition.","row":3},{"id":"geezbible","name":"Geʿez / Ethiopian biblical tradition","year":550,"date":"translations and canon tradition developed over centuries","group":"Christian","type":"text","desc":"Ethiopian Orthodox scripture tradition includes books such as 1 Enoch and Jubilees. The present 81-book counting tradition should not be treated as if fixed in one ancient year.","row":5},{"id":"eastchurch","name":"Church of the East","year":410,"date":"Synod of Seleucia-Ctesiphon 410; autocephaly 424; later divergence over Ephesus (431)","group":"Christian","type":"tradition","desc":"East Syriac Christian tradition institutionalized in the Sasanian Empire. Its ecclesiastical autonomy predates the Council of Ephesus; it later developed a distinct dyophysite theological tradition and spread widely across Asia.","row":4},{"id":"eastorth","name":"Eastern Orthodox","year":1054,"date":"East–West separation gradual; 1054 conventional marker","group":"Christian","type":"tradition","desc":"Eastern Chalcedonian churches in communion with Constantinople and other patriarchates. The 1054 'Great Schism' is a conventional milestone, not a one-day birth.","row":0},{"id":"catholic","name":"Roman Catholic","year":1054,"date":"Western Latin church; 1054 conventional separation marker","group":"Christian","type":"tradition","desc":"Western Chalcedonian church centered on communion with the bishop of Rome. Its institutional history long predates 1054.","row":2},{"id":"reformation","name":"Protestant Reformation","year":1517,"date":"from 1517 CE","group":"Christian","type":"movement","desc":"European reform movements challenging late-medieval Western Christianity, conventionally marked by Luther's 1517 theses.","row":1},{"id":"lutheran","name":"Lutheran","year":1520,"date":"1520s","group":"Christian","type":"movement","desc":"Protestant tradition emerging around Martin Luther and allied reformers.","row":0},{"id":"reformed","name":"Reformed / Calvinist","year":1525,"date":"1520s–1530s","group":"Christian","type":"movement","desc":"Protestant family associated with Swiss reforms, including Zwingli and Calvin.","row":2},{"id":"anabaptist","name":"Anabaptist","year":1525,"date":"from 1525","group":"Christian","type":"movement","desc":"Radical Reformation movements emphasizing believers' baptism and voluntary church membership.","row":4},{"id":"anglican","name":"Anglican","year":1534,"date":"English Reformation, 16th century","group":"Christian","type":"movement","desc":"Church of England and related Anglican traditions, shaped by both Catholic continuity and Protestant reform.","row":3},{"id":"trent","name":"Catholic canon at Trent","year":1546,"date":"1546 CE","group":"Christian","type":"text","desc":"The Council of Trent formally defined the Catholic biblical canon in response to Reformation-era disputes.","row":6},{"id":"protbible","name":"Protestant 66-book Bible convention","year":1647,"date":"16th–17th c.; 1647 Westminster Confession is a clear 66-book confessional marker","group":"Christian","type":"text","desc":"Most later Protestant traditions came to use 39 Old Testament books plus the 27-book New Testament as canon. Early Protestant Bibles often still printed the Apocrypha separately, so the modern 66-book convention developed gradually.","row":5},{"id":"baptist","name":"Baptist","year":1609,"date":"early 17th century","group":"Christian","type":"movement","desc":"Protestant family emphasizing believers' baptism and congregational church life.","row":2},{"id":"quaker","name":"Quakers / Friends","year":1652,"date":"mid-17th century","group":"Christian","type":"movement","desc":"Christian movement associated with George Fox, emphasizing the inward light, plain worship and peace testimony.","row":4},{"id":"methodist","name":"Methodism","year":1738,"date":"18th century","group":"Christian","type":"movement","desc":"Revival movement associated with John and Charles Wesley, originally within Anglicanism and later a major Protestant family.","row":3},{"id":"lds","name":"Latter-day Saint movement","year":1830,"date":"Church organized 1830","group":"Christian","type":"movement","desc":"Restorationist movement founded by Joseph Smith; includes The Church of Jesus Christ of Latter-day Saints and other denominations.","row":0},{"id":"bom","name":"Book of Mormon","year":1830,"date":"published 1830","group":"Christian","type":"text","desc":"Foundational scripture of the Latter-day Saint movement, alongside the Bible and other Latter-day Saint scriptures.","row":5},{"id":"miller","name":"Millerite / Adventist movement","year":1831,"date":"1830s–1840s","group":"Christian","type":"movement","desc":"American apocalyptic revival movement associated with William Miller; several later Adventist bodies emerged from its aftermath.","row":2},{"id":"sda","name":"Seventh-day Adventist Church","year":1863,"date":"organized 1863","group":"Christian","type":"movement","desc":"Protestant Adventist denomination that emerged from Sabbatarian Adventism after the Millerite movement; notable for seventh-day Sabbath observance.","row":1},{"id":"biblestudents","name":"Bible Student movement","year":1870,"date":"1870s","group":"Christian","type":"movement","desc":"Restorationist Bible-study movement associated with Charles Taze Russell from the 1870s. It arose in a broader post-Millerite/Adventist environment and later divided into several groups, one stream becoming Jehovah’s Witnesses.","row":3},{"id":"jw","name":"Jehovah's Witnesses","year":1931,"date":"name adopted 1931; roots in 1870s Bible Students","group":"Christian","type":"movement","desc":"Restorationist, nontrinitarian Christian movement that developed from the Bible Student movement and adopted the name Jehovah's Witnesses in 1931.","row":2},{"id":"pentecostal","name":"Pentecostalism","year":1906,"date":"early 20th century; Azusa Street 1906 major marker","group":"Christian","type":"movement","desc":"Global Protestant-charismatic movement emphasizing gifts of the Holy Spirit; multiple revival streams contributed to its formation.","row":4},{"id":"islam","name":"Islam","year":610,"date":"Qur'anic revelations begin c. 610; community in Medina from 622","group":"Islamic","type":"tradition","desc":"Monotheistic religion arising in 7th-century Arabia around the revelations proclaimed by Muhammad. Jewish, Christian and Arabian late-antique traditions form part of the historical environment, but Islam is not shown as a denominational offshoot of Judaism or Christianity.","row":0},{"id":"quran","name":"Qur'an","year":632,"date":"revelations c. 610–632; early codification in 7th century","group":"Islamic","type":"text","desc":"Central scripture of Islam, understood by Muslims as revelation to Muhammad. Written collection and standardization occurred in the first Islamic century.","row":5},{"id":"kharijite","name":"Kharijite movements","year":657,"date":"from First Fitna, 7th century","group":"Islamic","type":"movement","desc":"Early Islamic movements that broke with both Ali and his opponents; later Ibadi tradition has historical connections but is distinct.","row":4},{"id":"shia","name":"Shi'a Islam","year":680,"date":"roots in succession dispute after 632; Karbala 680 pivotal","group":"Islamic","type":"tradition","desc":"Islamic family centered on the authority of Ali and the Imams; developed into several branches.","row":1},{"id":"sunni","name":"Sunni Islam","year":750,"date":"identity crystallizes over 7th–9th centuries","group":"Islamic","type":"tradition","desc":"Largest Islamic tradition, shaped around communal precedent (sunna), hadith and developing schools of law and theology.","row":2},{"id":"ibadi","name":"Ibadi Islam","year":700,"date":"late 7th–8th century","group":"Islamic","type":"tradition","desc":"Distinct early Islamic tradition historically related to moderate Kharijite currents, surviving especially in Oman and parts of North Africa.","row":3},{"id":"sufi","name":"Sufism","year":800,"date":"ascetic/mystical currents from 8th century; orders later","group":"Islamic","type":"movement","desc":"Islamic mystical and devotional traditions found across Sunni and Shi'a settings; organized tariqas became prominent later.","row":4},{"id":"ismaili","name":"Isma'ili Shi'ism","year":765,"date":"late 8th century","group":"Islamic","type":"tradition","desc":"Branch of Shi'a Islam arising from disputes over the succession to Ja'far al-Sadiq.","row":1},{"id":"twelver","name":"Twelver Shi'ism","year":874,"date":"9th century; occultation begins 874","group":"Islamic","type":"tradition","desc":"Largest Shi'a branch, recognizing a line of twelve Imams and the occultation of the twelfth Imam.","row":2},{"id":"hadith","name":"Major Sunni hadith collections","year":850,"date":"especially 9th century","group":"Islamic","type":"text","desc":"Canonical-status Sunni collections such as those of al-Bukhari and Muslim were compiled in the 9th century.","row":5},{"id":"druze","name":"Druze faith","year":1017,"date":"early 11th century","group":"Islamic","type":"tradition","desc":"Distinct religious community that emerged in a Fatimid Isma'ili context and developed a closed esoteric tradition.","row":3},{"id":"shaykhi","name":"Shaykhism","year":1790,"date":"late 18th–early 19th century","group":"Islamic","type":"movement","desc":"Twelver Shi'a school founded around the teachings of Shaykh Ahmad al-Ahsa'i; important background to the Babi movement.","row":2},{"id":"babi","name":"Bábí religion","year":1844,"date":"founded 1844","group":"Islamic","type":"tradition","desc":"New religion founded by the Báb in Qajar Iran, emerging from a Shaykhi Shi'a context.","row":1},{"id":"bahai","name":"Bahá'í Faith","year":1863,"date":"Bahá'u'lláh's declaration 1863; Bábí background from 1844","group":"Islamic","type":"tradition","desc":"Independent world religion founded by Bahá'u'lláh, developing from the Bábí movement while presenting a universal sequence of divine messengers.","row":0},{"id":"ahmadiyya","name":"Ahmadiyya","year":1889,"date":"founded 1889","group":"Islamic","type":"movement","desc":"Islamic revival movement founded by Mirza Ghulam Ahmad in British India; its claims about prophethood are rejected by mainstream Sunni and Shi'a authorities.","row":3},{"id":"indus","name":"Indus Valley religious practices","year":-2500,"date":"c. 2600–1900 BCE; interpretation uncertain","group":"South Asian","type":"tradition","desc":"Archaeological evidence suggests ritual practices, but direct religious continuity from the Indus civilization to Vedic religion or later Hindu traditions is debated; therefore no lineage arrow is shown here.","row":0},{"id":"vedic","name":"Vedic religion","year":-1500,"date":"c. 1500–500 BCE","group":"South Asian","type":"tradition","desc":"Indo-Aryan sacrificial and poetic religious tradition preserved in the Vedas; an important ancestral stream of later Hindu traditions.","row":1},{"id":"rigveda","name":"Rigveda","year":-1200,"date":"core hymns often c. 1500–1200 BCE; dating debated","group":"South Asian","type":"text","desc":"Oldest of the four Vedas, preserving archaic Sanskrit hymns transmitted orally with exceptional precision.","row":5},{"id":"brahmanical","name":"Brahmanical / early Hindu traditions","year":-700,"date":"1st millennium BCE onward","group":"South Asian","type":"tradition","desc":"Evolving ritual, philosophical and social traditions building on Vedic heritage; 'Hinduism' is a later umbrella term for many related traditions.","row":2},{"id":"upanishads","name":"Early Upanishads","year":-650,"date":"roughly 7th–4th centuries BCE for oldest layers","group":"South Asian","type":"text","desc":"Philosophical texts attached to the Vedas exploring self, ultimate reality, ritual and liberation.","row":5},{"id":"sramana","name":"Śramaṇa movements","year":-600,"date":"c. 6th–5th centuries BCE","group":"South Asian","type":"tradition","desc":"Broad ascetic-renunciant milieu in North India that included early Buddhist and Jain communities and interacted with Brahmanical traditions.","row":0},{"id":"jain","name":"Jainism","year":-500,"date":"Mahavira c. 6th–5th century BCE; tradition claims earlier Tirthankaras","group":"South Asian","type":"tradition","desc":"Ancient Indian religion emphasizing nonviolence, asceticism, karma and liberation; Mahavira is the 24th Tirthankara in Jain tradition.","row":1},{"id":"buddha","name":"Buddhism","year":-480,"date":"5th century BCE (historical Buddha dating varies)","group":"South Asian","type":"tradition","desc":"Religion and philosophical tradition arising around Siddhartha Gautama, the Buddha, in northern South Asia.","row":2},{"id":"ramayana","name":"Ramayana","year":-350,"date":"composition over centuries, roughly late 1st millennium BCE–early CE","group":"South Asian","type":"text","desc":"Sanskrit epic centered on Rama; composed and expanded over a long period and retold in many languages.","row":6},{"id":"mahabharata","name":"Mahabharata","year":-250,"date":"composition c. 400 BCE–400 CE","group":"South Asian","type":"text","desc":"Vast Sanskrit epic containing many religious and philosophical layers, including the Bhagavad Gita.","row":6},{"id":"gita","name":"Bhagavad Gita","year":-150,"date":"often c. 2nd century BCE–2nd century CE","group":"South Asian","type":"text","desc":"Dialogue between Krishna and Arjuna embedded in the Mahabharata; foundational across many Hindu traditions.","row":5},{"id":"theravada","name":"Theravāda Buddhism","year":-250,"date":"ancient lineage; Sri Lankan tradition from 3rd c. BCE","group":"South Asian","type":"tradition","desc":"Surviving school of the early Buddhist nikāya traditions, dominant in Sri Lanka and mainland Southeast Asia.","row":3},{"id":"palicanon","name":"Pāli Canon / Tipiṭaka","year":-100,"date":"written down in Sri Lanka c. 1st century BCE; older oral material","group":"South Asian","type":"text","desc":"Theravāda Buddhist canonical collection in Pāli, transmitted orally before being committed to writing.","row":5},{"id":"mahayana","name":"Mahāyāna Buddhism","year":-50,"date":"texts/movements emerge around 1st c. BCE–1st c. CE","group":"South Asian","type":"tradition","desc":"Broad Buddhist movement emphasizing bodhisattva ideals and new sutra traditions; developed gradually, not from one founding event.","row":3},{"id":"vaishnava","name":"Vaiṣṇavism","year":200,"date":"ancient roots; major sectarian formations in early centuries CE","group":"South Asian","type":"tradition","desc":"Hindu traditions centered on Vishnu and his forms, especially Krishna and Rama.","row":1},{"id":"shaiva","name":"Śaivism","year":200,"date":"ancient roots; major sectarian formations in early centuries CE","group":"South Asian","type":"tradition","desc":"Hindu traditions centered on Shiva, with diverse devotional, temple, philosophical and tantric forms.","row":2},{"id":"shakta","name":"Śāktism","year":400,"date":"goddess traditions ancient; distinct tantric forms especially mid-1st millennium CE onward","group":"South Asian","type":"tradition","desc":"Hindu traditions centered on the Goddess (Devi/Shakti), often expressed through Puranic and Tantric traditions.","row":3},{"id":"puranas","name":"Purāṇas","year":450,"date":"many major layers c. 3rd–10th centuries CE","group":"South Asian","type":"text","desc":"Large genre of Hindu mythic, genealogical, cosmological and devotional literature composed and revised over centuries.","row":6},{"id":"tantra","name":"Hindu Tantras / Āgamas","year":600,"date":"especially mid-1st millennium CE onward","group":"South Asian","type":"text","desc":"Sectarian ritual and theological scriptures central to many Shaiva, Shakta and Vaishnava traditions.","row":5},{"id":"vajra","name":"Vajrayāna Buddhism","year":650,"date":"c. 6th–8th centuries CE onward","group":"South Asian","type":"tradition","desc":"Tantric Buddhist traditions developing within Mahayana and spreading strongly to Tibet, the Himalayas and East Asia.","row":3},{"id":"advaita","name":"Advaita Vedānta","year":800,"date":"Śaṅkara c. 8th century CE","group":"South Asian","type":"movement","desc":"Nondual Vedānta school associated especially with Śaṅkara and commentarial traditions on the Upanishads, Bhagavad Gita and Brahma Sutras.","row":0},{"id":"bhakti","name":"Bhakti movements","year":1200,"date":"regional devotional movements from 1st millennium CE; major expansion medieval era","group":"South Asian","type":"movement","desc":"Diverse devotional currents centered on loving devotion to a deity; important across Vaishnava, Shaiva and Shakta contexts.","row":4},{"id":"sikh","name":"Sikhism","year":1500,"date":"Guru Nanak (1469–1539); community forms around turn of 16th c.","group":"South Asian","type":"tradition","desc":"Monotheistic religion founded in Punjab through the Sikh Gurus, emerging in a region shaped by both Indic and Islamic traditions but forming an independent path.","row":1},{"id":"adigranth","name":"Ādi Granth","year":1604,"date":"compiled 1604","group":"South Asian","type":"text","desc":"Scripture compiled by Guru Arjan; later expanded and given final authority as the Guru Granth Sahib.","row":5},{"id":"gurugranth","name":"Guru Granth Sahib","year":1708,"date":"installed as eternal Guru, 1708","group":"South Asian","type":"text","desc":"Central Sikh scripture and eternal Guru, containing hymns of Sikh Gurus and selected other devotional poets.","row":6},{"id":"aryasamaj","name":"Arya Samaj","year":1875,"date":"founded 1875","group":"South Asian","type":"movement","desc":"Hindu reform movement founded by Dayananda Saraswati, emphasizing the authority of the Vedas.","row":2},{"id":"iskcon","name":"ISKCON / Hare Krishna movement","year":1966,"date":"founded 1966","group":"South Asian","type":"movement","desc":"Modern global Gaudiya Vaishnava movement founded by A. C. Bhaktivedanta Swami Prabhupada.","row":3},{"id":"shang","name":"Shang religious tradition / oracle bones","year":-1250,"date":"oracle-bone evidence especially c. 1250–1046 BCE","group":"Chinese & East Asian","type":"tradition","desc":"State divination and ancestor/deity worship documented by oracle-bone inscriptions in late Shang China.","row":0},{"id":"zhou","name":"Zhou ritual religion","year":-1046,"date":"from c. 1046 BCE","group":"Chinese & East Asian","type":"tradition","desc":"Ritual-political tradition of Zhou China, including the Mandate of Heaven and ancestral rites.","row":1},{"id":"confucius","name":"Confucian tradition","year":-500,"date":"Confucius 551–479 BCE","group":"Chinese & East Asian","type":"tradition","desc":"Ethical, ritual and political tradition rooted in Confucius and classical Chinese learning; often functions as philosophy, social ethic and religious tradition.","row":2},{"id":"analects","name":"Analects","year":-350,"date":"material from disciples; compiled over Warring States to Han periods","group":"Chinese & East Asian","type":"text","desc":"Collected sayings and conversations associated with Confucius and his disciples; assembled over generations.","row":5},{"id":"daodejing","name":"Daodejing","year":-350,"date":"often dated c. 4th–3rd century BCE","group":"Chinese & East Asian","type":"text","desc":"Foundational text of philosophical Daoist traditions, traditionally attributed to Laozi.","row":5},{"id":"zhuangzi","name":"Zhuangzi","year":-300,"date":"core chapters c. 4th–3rd century BCE","group":"Chinese & East Asian","type":"text","desc":"Classic Daoist text associated with Zhuang Zhou and later contributors.","row":6},{"id":"daoistph","name":"Classical Daoist thought","year":-350,"date":"Warring States era","group":"Chinese & East Asian","type":"tradition","desc":"Retrospective grouping of traditions associated with texts such as the Daodejing and Zhuangzi.","row":3},{"id":"chinabuddh","name":"Buddhism in China","year":100,"date":"introduced by 1st–2nd centuries CE","group":"Chinese & East Asian","type":"tradition","desc":"Indian and Central Asian Buddhist teachings entered China and developed distinct translation traditions, schools and canons.","row":1},{"id":"religdao","name":"Organized religious Daoism","year":142,"date":"Celestial Masters movement, 2nd century CE","group":"Chinese & East Asian","type":"tradition","desc":"Institutional Daoist religion developed through movements such as the Way of the Celestial Masters, later diversifying into many schools.","row":3},{"id":"pureland","name":"Pure Land Buddhism","year":400,"date":"major East Asian traditions from 4th–6th centuries onward","group":"Chinese & East Asian","type":"movement","desc":"Mahayana devotional traditions centered on Amitabha Buddha and rebirth in the Pure Land.","row":2},{"id":"chan","name":"Chan Buddhism","year":550,"date":"traditional formation c. 6th century CE","group":"Chinese & East Asian","type":"movement","desc":"Chinese meditation-centered Buddhist tradition later transmitted as Zen in Japan, Seon in Korea, and Thiền in Vietnam.","row":1},{"id":"japanbuddh","name":"Buddhism in Japan","year":552,"date":"official introduction conventionally 538 or 552 CE","group":"Chinese & East Asian","type":"tradition","desc":"Buddhist traditions entered Japan through the Korean peninsula and wider East Asian networks in the 6th century and later developed into multiple Japanese schools.","row":4},{"id":"shinto","name":"Shintō","year":700,"date":"indigenous roots much older; Kojiki 712 & Nihon Shoki 720 textual markers","group":"Chinese & East Asian","type":"tradition","desc":"Japanese kami traditions with prehistoric roots; the term and institutional boundaries developed much later. Shintō and Buddhism interacted and blended for centuries, but neither is simply descended from the other.","row":0},{"id":"neoconf","name":"Neo-Confucianism","year":1050,"date":"Song dynasty, especially 11th–12th centuries","group":"Chinese & East Asian","type":"movement","desc":"Renewed Confucian philosophical-religious tradition that responded to and absorbed ideas from Buddhist and Daoist thought.","row":2},{"id":"zen","name":"Zen Buddhism in Japan","year":1200,"date":"major schools established in 12th–13th centuries","group":"Chinese & East Asian","type":"movement","desc":"Japanese developments of Chan lineages, especially Rinzai and Soto.","row":1},{"id":"tenrikyo","name":"Tenrikyō","year":1838,"date":"founded 1838","group":"Chinese & East Asian","type":"tradition","desc":"Japanese new religion founded by Nakayama Miki, with its own scripture and ritual tradition.","row":3},{"id":"caodai","name":"Cao Đài","year":1926,"date":"organized 1926","group":"Chinese & East Asian","type":"tradition","desc":"Vietnamese syncretic religion drawing on Confucian, Daoist, Buddhist, Christian and other sources while forming a distinct institution and revelation tradition.","row":4},{"id":"mandaean","name":"Mandaeism","year":200,"date":"origins debated; texts and communities securely attested in late antiquity","group":"Other / modern","type":"tradition","desc":"Gnostic monotheistic tradition centered on baptism and a distinctive Aramaic literature; historical origins remain debated.","row":0},{"id":"rastafari","name":"Rastafari","year":1930,"date":"Jamaica, 1930s","group":"Other / modern","type":"movement","desc":"Afro-Jamaican religious movement shaped by biblical interpretation, Pan-Africanism and the coronation of Haile Selassie I of Ethiopia.","row":1},{"id":"wicca","name":"Wicca","year":1954,"date":"public emergence in 1950s","group":"Other / modern","type":"tradition","desc":"Modern Pagan religion associated with Gerald Gardner and later diverse Wiccan traditions; it is modern even though it draws symbolically on older sources.","row":2},{"id":"uu","name":"Unitarian Universalism","year":1961,"date":"formed 1961","group":"Other / modern","type":"movement","desc":"Religious association formed by merger of American Unitarian and Universalist bodies; today includes a wide range of theistic and non-theistic beliefs.","row":3}];
const edges = [{"source":"sumer","target":"akkad","type":"influence","label":"cultural continuity/adaptation"},{"source":"egypt","target":"pyramid","type":"text","label":"textual tradition"},{"source":"egypt","target":"bookdead","type":"text","label":"funerary tradition"},{"source":"canaan","target":"baal","type":"text","label":""},{"source":"canaan","target":"israelite","type":"influence","label":"regional continuity/context"},{"source":"greek","target":"homer","type":"text","label":""},{"source":"greek","target":"roman","type":"influence","label":""},{"source":"indoiranian","target":"zoro","type":"influence","label":""},{"source":"zoro","target":"gathas","type":"text","label":""},{"source":"gathas","target":"avesta","type":"text","label":""},{"source":"zoro","target":"mani","type":"influence","label":"Iranian/Zoroastrian concepts and terminology; influence was complex"},{"source":"israelite","target":"firsttemple","type":"lineage","label":""},{"source":"firsttemple","target":"secondtemple","type":"lineage","label":""},{"source":"firsttemple","target":"torah","type":"text","label":"older Israelite/Judahite traditions incorporated into the Pentateuch"},{"source":"secondtemple","target":"tanakh","type":"text","label":""},{"source":"torah","target":"tanakh","type":"text","label":""},{"source":"tanakh","target":"septuagint","type":"text","label":"Greek translations of Hebrew/Jewish scriptures; translation began before a finalized Tanakh canon"},{"source":"secondtemple","target":"septuagint","type":"text","label":""},{"source":"secondtemple","target":"dss","type":"text","label":""},{"source":"israelite","target":"samaritan","type":"lineage","label":"gradual separation"},{"source":"secondtemple","target":"rabbinic","type":"lineage","label":""},{"source":"secondtemple","target":"earlychrist","type":"lineage","label":"Jewish matrix"},{"source":"rabbinic","target":"mishnah","type":"text","label":""},{"source":"mishnah","target":"jtalmud","type":"text","label":""},{"source":"mishnah","target":"btalmud","type":"text","label":""},{"source":"rabbinic","target":"karaite","type":"influence","label":"emerged in opposition to rabbinic authority"},{"source":"rabbinic","target":"kabbalah","type":"text","label":""},{"source":"kabbalah","target":"hasidic","type":"influence","label":""},{"source":"rabbinic","target":"hasidic","type":"lineage","label":""},{"source":"rabbinic","target":"reformjud","type":"lineage","label":""},{"source":"rabbinic","target":"orthjud","type":"lineage","label":""},{"source":"rabbinic","target":"conservativejud","type":"lineage","label":""},{"source":"conservativejud","target":"reconstruction","type":"lineage","label":""},{"source":"earlychrist","target":"paul","type":"text","label":""},{"source":"earlychrist","target":"gospels","type":"text","label":""},{"source":"earlychrist","target":"gnostic","type":"influence","label":"overlapping Christian, Jewish and Platonic late-antique milieus; 'Gnosticism' is a debated umbrella"},{"source":"gnostic","target":"nhworks","type":"text","label":""},{"source":"earlychrist","target":"nicaea","type":"lineage","label":""},{"source":"earlychrist","target":"aksum","type":"lineage","label":""},{"source":"earlychrist","target":"ntcanon","type":"text","label":""},{"source":"septuagint","target":"earlychrist","type":"influence","label":"scriptural inheritance"},{"source":"nicaea","target":"chalcedon","type":"lineage","label":""},{"source":"chalcedon","target":"eastorth","type":"lineage","label":""},{"source":"chalcedon","target":"catholic","type":"lineage","label":""},{"source":"aksum","target":"ethiopian","type":"lineage","label":""},{"source":"oriental","target":"ethiopian","type":"lineage","label":""},{"source":"aksum","target":"geezbible","type":"text","label":""},{"source":"septuagint","target":"geezbible","type":"text","label":"translation/canonical influence"},{"source":"catholic","target":"reformation","type":"lineage","label":"reform/separation"},{"source":"reformation","target":"lutheran","type":"lineage","label":""},{"source":"reformation","target":"reformed","type":"lineage","label":""},{"source":"reformation","target":"anabaptist","type":"lineage","label":""},{"source":"reformation","target":"anglican","type":"lineage","label":""},{"source":"catholic","target":"trent","type":"text","label":""},{"source":"reformation","target":"protbible","type":"text","label":""},{"source":"reformed","target":"baptist","type":"influence","label":""},{"source":"reformation","target":"quaker","type":"lineage","label":""},{"source":"anglican","target":"methodist","type":"lineage","label":""},{"source":"reformation","target":"lds","type":"influence","label":"restorationist Protestant context"},{"source":"reformation","target":"miller","type":"influence","label":""},{"source":"miller","target":"sda","type":"lineage","label":""},{"source":"biblestudents","target":"jw","type":"lineage","label":""},{"source":"methodist","target":"pentecostal","type":"influence","label":"Holiness/revival background"},{"source":"lds","target":"bom","type":"text","label":""},{"source":"rabbinic","target":"islam","type":"influence","label":"Jewish traditions and communities in the late-antique milieu; not a lineage claim"},{"source":"islam","target":"quran","type":"text","label":""},{"source":"islam","target":"kharijite","type":"lineage","label":""},{"source":"islam","target":"shia","type":"lineage","label":""},{"source":"islam","target":"sunni","type":"lineage","label":""},{"source":"kharijite","target":"ibadi","type":"lineage","label":"emerged from early Muḥakkima/Kharijite currents; Ibadis reject identification with later extremist Kharijites"},{"source":"islam","target":"sufi","type":"lineage","label":"mystical currents within Islam"},{"source":"shia","target":"ismaili","type":"lineage","label":""},{"source":"shia","target":"twelver","type":"lineage","label":""},{"source":"sunni","target":"hadith","type":"text","label":""},{"source":"ismaili","target":"druze","type":"lineage","label":""},{"source":"twelver","target":"shaykhi","type":"lineage","label":""},{"source":"shaykhi","target":"babi","type":"lineage","label":""},{"source":"babi","target":"bahai","type":"lineage","label":""},{"source":"islam","target":"ahmadiyya","type":"lineage","label":""},{"source":"indoiranian","target":"vedic","type":"influence","label":""},{"source":"vedic","target":"rigveda","type":"text","label":""},{"source":"vedic","target":"brahmanical","type":"lineage","label":""},{"source":"vedic","target":"upanishads","type":"text","label":""},{"source":"vedic","target":"sramana","type":"influence","label":"shared intellectual environment"},{"source":"sramana","target":"jain","type":"influence","label":"Jainism formed within the wider śramaṇa/renunciant milieu"},{"source":"sramana","target":"buddha","type":"influence","label":"Buddhism formed within the wider śramaṇa/renunciant milieu"},{"source":"brahmanical","target":"ramayana","type":"text","label":""},{"source":"brahmanical","target":"mahabharata","type":"text","label":""},{"source":"mahabharata","target":"gita","type":"text","label":""},{"source":"buddha","target":"theravada","type":"lineage","label":""},{"source":"theravada","target":"palicanon","type":"text","label":""},{"source":"buddha","target":"mahayana","type":"lineage","label":"developed gradually within some Buddhist communities; not a single schism"},{"source":"brahmanical","target":"vaishnava","type":"lineage","label":""},{"source":"brahmanical","target":"shaiva","type":"lineage","label":""},{"source":"brahmanical","target":"shakta","type":"lineage","label":""},{"source":"brahmanical","target":"puranas","type":"text","label":""},{"source":"shaiva","target":"tantra","type":"text","label":""},{"source":"shakta","target":"tantra","type":"text","label":""},{"source":"mahayana","target":"vajra","type":"lineage","label":""},{"source":"upanishads","target":"advaita","type":"influence","label":""},{"source":"gita","target":"advaita","type":"influence","label":""},{"source":"vaishnava","target":"bhakti","type":"lineage","label":""},{"source":"shaiva","target":"bhakti","type":"lineage","label":""},{"source":"sufi","target":"sikh","type":"influence","label":"Punjab's Islamic devotional milieu"},{"source":"bhakti","target":"sikh","type":"influence","label":"Indic devotional milieu"},{"source":"sikh","target":"adigranth","type":"text","label":""},{"source":"adigranth","target":"gurugranth","type":"text","label":""},{"source":"vedic","target":"aryasamaj","type":"influence","label":""},{"source":"vaishnava","target":"iskcon","type":"lineage","label":"Gaudiya Vaiṣṇava lineage; ISKCON founded as a global institution in 1966"},{"source":"shang","target":"zhou","type":"lineage","label":""},{"source":"zhou","target":"confucius","type":"influence","label":""},{"source":"confucius","target":"analects","type":"text","label":""},{"source":"zhou","target":"daoistph","type":"influence","label":""},{"source":"daoistph","target":"daodejing","type":"text","label":""},{"source":"daoistph","target":"zhuangzi","type":"text","label":""},{"source":"mahayana","target":"chinabuddh","type":"influence","label":"Mahāyāna traditions became especially influential in East Asia"},{"source":"chinabuddh","target":"pureland","type":"lineage","label":""},{"source":"chinabuddh","target":"chan","type":"lineage","label":""},{"source":"daoistph","target":"religdao","type":"influence","label":""},{"source":"chinabuddh","target":"japanbuddh","type":"lineage","label":"East Asian transmission to Japan, especially through Korea and traditions shaped in China"},{"source":"confucius","target":"neoconf","type":"lineage","label":""},{"source":"chinabuddh","target":"neoconf","type":"influence","label":""},{"source":"religdao","target":"neoconf","type":"influence","label":""},{"source":"chan","target":"zen","type":"lineage","label":""},{"source":"japanbuddh","target":"zen","type":"lineage","label":""},{"source":"confucius","target":"caodai","type":"influence","label":""},{"source":"religdao","target":"caodai","type":"influence","label":""},{"source":"chinabuddh","target":"caodai","type":"influence","label":""},{"source":"catholic","target":"caodai","type":"influence","label":""},{"source":"ethiopian","target":"rastafari","type":"influence","label":"Ethiopian imperial and biblical symbolism; not institutional descent"},{"source":"protbible","target":"rastafari","type":"influence","label":"biblical interpretation"},{"source":"reformation","target":"uu","type":"influence","label":"Unitarian/Universalist Christian roots"},{"source":"earlychrist","target":"eastchurch","type":"lineage","label":"East Syriac/Sasanian church; institutionalized 410, autocephalous 424"},{"source":"earlychrist","target":"mani","type":"influence","label":"strong Judeo-Christian/Christian background in Mani’s formative environment"},{"source":"buddha","target":"mani","type":"influence","label":"Buddhist contact and terminology; more limited than the Christian background"},{"source":"japanbuddh","target":"shinto","type":"influence","label":"centuries of syncretic interaction; later institutional differentiation"},{"source":"miller","target":"biblestudents","type":"influence","label":"post-Millerite Adventist milieu, including Adventist teachers who influenced Russell"},{"source":"earlychrist","target":"islam","type":"influence","label":"late-antique Christian traditions and communities; not a lineage claim"},{"source":"secondtemple","target":"torah","type":"text","label":"final redaction/transmission commonly associated with Persian/early Second Temple periods"},{"source":"samaritan","target":"sampent","type":"text","label":"community’s scriptural canon"},{"source":"torah","target":"sampent","type":"text","label":"shared Pentateuchal textual ancestry; distinctive Samaritan recension"},{"source":"tanakh","target":"karaite","type":"text","label":"Hebrew Bible is the primary scriptural authority in Karaite Judaism"},{"source":"earlychrist","target":"oriental","type":"lineage","label":"ancient regional churches; separate communion crystallized after rejecting Chalcedon (451)"},{"source":"buddha","target":"chinabuddh","type":"lineage","label":"Buddhist transmission to China via Indian and Central Asian monks/texts from the 1st–2nd centuries CE"},{"source":"brahmanical","target":"advaita","type":"lineage","label":"Vedānta school within the broader Brahmanical/Hindu tradition"},{"source":"brahmanical","target":"aryasamaj","type":"lineage","label":"modern Hindu reform movement"}];
// Corrections from the historical and relationship audit. Keeping these changes
// together makes each judgment visible without hiding it in the base dataset.
const nodeById = new Map(nodes.map(node=>[node.id,node]));
function reviseNode(id, changes) { Object.assign(nodeById.get(id),changes); }
function reviseEdge(source,target,changes) {
  const edge=edges.find(item=>item.source===source&&item.target===target);
  if(edge)Object.assign(edge,changes);
}
function removeEdge(source,target) {
  const index=edges.findIndex(item=>item.source===source&&item.target===target);
  if(index>=0)edges.splice(index,1);
}

reviseNode('ntcanon',{
  name:'Athanasius lists 27-book New Testament',
  date:'Festal Letter 39, 367 CE; reception remained gradual',
  desc:'Athanasius of Alexandria gave the earliest surviving list that exactly matches the present 27-book New Testament. This letter was an important witness, not an instant universal settlement.'
});
reviseNode('kabbalah',{
  name:'Kabbalah',year:1200,date:'medieval forms emerge in the 12th–13th centuries',type:'tradition',
  desc:'Diverse Jewish mystical and interpretive traditions that developed within medieval rabbinic Judaism. The Zohar later became one of their central textual collections.'
});
nodes.push({
  id:'zohar',name:'Zohar',year:1280,date:'main corpus appears in late 13th-century Castile',group:'Jewish',type:'text',row:5,
  desc:'Aramaic collection of mystical Torah commentary produced by a circle of medieval Kabbalists. Its composition and later canonization were gradual.'
});
reviseNode('bhakti',{
  year:600,date:'regional movements from c. 6th century; wider expansion later',
  desc:'Diverse devotional traditions rather than one organization. Tamil Shaiva and Vaishnava poet-saints were prominent from about the 6th century; other regional movements expanded across India in later centuries.'
});
reviseNode('babi',{group:'Bábí & Bahá’í'});
reviseNode('bahai',{group:'Bábí & Bahá’í'});
reviseNode('theravada',{
  date:'Sri Lankan lineage from c. 3rd century BCE; identity developed over time',
  desc:'Buddhist tradition preserved especially in Sri Lanka and later mainland Southeast Asia. Its historical identity developed through early schools and Sri Lankan institutions rather than as one unchanged organization from the Buddha.'
});
nodes.push({
  id:'earlybuddhistschools',name:'Early Buddhist schools',year:-350,date:'communities diversified after the Buddha; chronology debated',group:'South Asian',type:'tradition',row:3,
  desc:'Early Buddhist monastic communities developed multiple schools and transmission lineages over several centuries. Their exact divisions and dates remain debated.'
});
nodes.push({
  id:'koreabuddh',name:'Buddhism in Korea',year:372,date:'introduced in the late 4th century; traditions developed thereafter',group:'Chinese & East Asian',type:'tradition',row:4,
  desc:'Buddhist teachings entered the Korean kingdoms through China and developed distinct Korean traditions. Korean envoys, monks, texts and images were central to the official introduction of Buddhism to Japan.'
});

reviseEdge('earlychrist','nicaea',{type:'event',label:'imperial council convened within the developing Christian church'});
reviseEdge('nicaea','chalcedon',{type:'event',label:'Chalcedon received and interpreted the Nicene conciliar tradition'});
reviseEdge('shaykhi','babi',{type:'influence',label:'emerged in a contested Shaykhi and Twelver Shiʿi milieu; not simple institutional descent'});
reviseEdge('rabbinic','kabbalah',{type:'lineage',label:'medieval Jewish mystical tradition within rabbinic Judaism'});
edges.push({source:'kabbalah',target:'zohar',type:'text',label:'central Kabbalistic textual collection'});
edges.push({source:'sumer',target:'gilgamesh',type:'influence',label:'earlier Sumerian Gilgamesh stories and literary background'});
edges.push({source:'akkad',target:'gilgamesh',type:'text',label:'Old Babylonian Akkadian epic and later Babylonian recensions'});
removeEdge('buddha','theravada');
removeEdge('buddha','mahayana');
edges.push({source:'buddha',target:'earlybuddhistschools',type:'lineage',label:'diverse early communities and teaching lineages'});
edges.push({source:'earlybuddhistschools',target:'theravada',type:'lineage',label:'Sri Lankan transmission through early Buddhist school traditions'});
edges.push({source:'earlybuddhistschools',target:'mahayana',type:'lineage',label:'developed gradually within several early Buddhist communities; not one schism'});
removeEdge('chinabuddh','japanbuddh');
edges.push({source:'chinabuddh',target:'koreabuddh',type:'lineage',label:'transmission to the Korean kingdoms from the late 4th century'});
edges.push({source:'koreabuddh',target:'japanbuddh',type:'lineage',label:'official Japanese introduction through Baekje, conventionally 538 or 552'});
reviseEdge('protbible','rastafari',{source:'baptist',label:'Afro-Jamaican Christian and biblical milieu, including Native Baptist and Revival traditions'});

const references = applyTimelineHistory(nodes, edges);
const groups = ["Ancient & oral", "Iranian", "Jewish", "Christian", "Islamic", "Bábí & Bahá’í", "South Asian", "Chinese & East Asian", "Other / modern"];
// Larger cards keep names readable across several centuries at once.
const rowGap=108, nodeW=480, nodeH=84, groupGap=108;
const minYear=-3500, maxYear=2026, worldW=9200, left=180, right=120;
const minimumYearGap=(nodeW+18)*(maxYear-minYear)/(worldW-left-right);
const layoutRows=new Map();
const groupY={};
let nextGroupY=120;
groups.forEach(group=>{
  const occupiedRows=new Map();
  nodes.filter(node=>node.group===group).sort((a,b)=>a.year-b.year).forEach(node=>{
    const preferred=node.row||0;
    const candidates=[preferred];
    for(let distance=1;distance<=nodes.length;distance++){
      candidates.push(preferred+distance);
      if(preferred-distance>=0)candidates.push(preferred-distance);
    }
    const row=candidates.find(candidate=>(occupiedRows.get(candidate)||[]).every(year=>Math.abs(year-node.year)>=minimumYearGap));
    layoutRows.set(node.id,row);
    if(!occupiedRows.has(row))occupiedRows.set(row,[]);
    occupiedRows.get(row).push(node.year);
  });
  groupY[group]=nextGroupY;
  const maxRow=Math.max(...nodes.filter(node=>node.group===group).map(node=>layoutRows.get(node.id)));
  nextGroupY+=(maxRow+1)*rowGap+groupGap;
});
const svg = document.getElementById('stage');
const viewport = document.getElementById('viewport');
const gridG = document.getElementById('grid');
const axisLabelsG = document.getElementById('axisLabels');
const dateLabels=[], branchLabels=[];
const edgesG = document.getElementById('edges');
const nodesG = document.getElementById('nodes');
const selectedEdgesOverlay = document.getElementById('selectedEdgesOverlay');
const nodeInfo = document.getElementById('nodeInfo');
const nodeInfoContent = document.getElementById('nodeInfoContent');
const closeInfo = document.getElementById('closeInfo');
const helpPanel = document.getElementById('helpPanel');
const helpContent = document.getElementById('helpContent');
const helpTitle = document.getElementById('helpTitle');
const closeHelpButton = document.getElementById('closeHelp');
let helpTrigger=null;
const search = document.getElementById('search');
const groupFilter = document.getElementById('groupFilter');
const status = document.getElementById('status');
const worldH=nextGroupY+40;
const map = new Map(nodes.map(n=>[n.id,n]));
function xFor(y) { return left + ((y-minYear)/(maxYear-minYear))*(worldW-left-right); }
function yFor(n) { return groupY[n.group] + layoutRows.get(n.id)*rowGap; }
function fmtYear(y) {
  if (y < 0) return Math.abs(y) + ' BCE';
  if (y === 0) return '1 BCE/CE';
  return y + ' CE';
}
function esc(s) { return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
function addSVG(tag, attrs, parent) {
  const el=document.createElementNS('http://www.w3.org/2000/svg',tag);
  for (const [k,v] of Object.entries(attrs||{})) el.setAttribute(k,v);
  (parent||svg).appendChild(el); return el;
}
function renderGrid() {
  groups.forEach(g=>{
    const y=groupY[g]-28;
    addSVG('line',{x1:0,y1:y,x2:worldW,y2:y,class:'group-line'},gridG);
    const t=addSVG('text',{x:12,class:'group-label'},axisLabelsG); t.textContent=g;
    branchLabels.push({element:t,y});
  });
  for(let y=-3500;y<=2000;y+=500){
    const x=xFor(y);
    addSVG('line',{x1:x,y1:0,x2:x,y2:worldH,class:'gridline'},gridG);
  }
  const nowX=xFor(2026);
  addSVG('line',{x1:nowX,y1:0,x2:nowX,y2:worldH,stroke:'#6f7f94','stroke-width':1.2,'stroke-dasharray':'3 4'},gridG);
  const addDate=year=>{
    const label=addSVG('g',{},axisLabelsG);
    const text=addSVG('text',{y:20,class:'axis-label','text-anchor':'middle'},label);
    text.textContent=year===maxYear?String(year):fmtYear(year);
    const tick=addSVG('line',{y1:26,y2:30,class:'axis-tick'},label);
    dateLabels.push({element:label,text,tick,year});
  };
  for(let year=minYear;year<=2000;year+=50)addDate(year);
  addDate(maxYear);
}
function updateAxisLabels(size){
  axisLabelsG.querySelector('.axis-background').setAttribute('width',size.width);
  const pixelsPerYear=(worldW-left-right)/(maxYear-minYear)*scale;
  const interval=[50,100,200,500,1000,2000].find(step=>step*pixelsPerYear>=90)||2000;
  const placeDate=label=>{
    const x=tx+xFor(label.year)*scale;
    const visible=x>=0&&x<=size.width&&(label.year===maxYear||label.year%interval===0);
    label.element.style.display=visible?'':'none';
    if(!visible)return null;
    const width=label.text.getComputedTextLength();
    const center=Math.max(width/2+8,Math.min(size.width-width/2-8,x));
    label.text.setAttribute('x',center);
    label.tick.setAttribute('x1',x);label.tick.setAttribute('x2',x);
    return {left:center-width/2,right:center+width/2};
  };
  // Keep the present-day label when it is close to the last regular date.
  const present=placeDate(dateLabels[dateLabels.length-1]);
  let lastRight=-Infinity;
  dateLabels.slice(0,-1).forEach(label=>{
    const box=placeDate(label);
    if(!box)return;
    if(box.left<lastRight+14||(present&&box.right+14>present.left))label.element.style.display='none';
    else lastRight=box.right;
  });
  const visibleBranches=[];
  let lastBaseline=28;
  branchLabels.forEach((label,index)=>{
    const top=ty+label.y*scale;
    const bottom=ty+(branchLabels[index+1]?.y??worldH)*scale;
    const baseline=Math.max(48,top-6);
    const visible=bottom>54&&baseline<size.height-8;
    label.element.style.display=visible?'':'none';
    if(visible){
      lastBaseline=Math.max(baseline,lastBaseline+20);
      visibleBranches.push({element:label.element,baseline:lastBaseline});
    }
  });
  // Keep small adjacent branches named in the full view on narrow screens.
  let nextBaseline=size.height+12;
  visibleBranches.reverse().forEach(label=>{
    label.baseline=Math.min(label.baseline,nextBaseline-20);
    label.element.setAttribute('y',label.baseline);
    nextBaseline=label.baseline;
  });
}
function edgePath(a,b,index) {
  const ac={x:xFor(a.year),y:yFor(a)+nodeH/2};
  const bc={x:xFor(b.year),y:yFor(b)+nodeH/2};
  const deltaX=bc.x-ac.x, deltaY=bc.y-ac.y;
  const facingGap=Math.abs(deltaX)-nodeW;
  // Switch to the outer side when facing ports would make a near-vertical line.
  const nearVertical=Math.abs(deltaY)>nodeH&&facingGap<Math.max(64,Math.min(nodeW*.5,Math.abs(deltaY)*.55));
  const horizontal=facingGap>=8&&!nearVertical;
  const variation=((index%7)-3)*5;

  if(horizontal){
    const direction=deltaX>=0?1:-1;
    const start={x:ac.x+direction*nodeW/2,y:ac.y};
    const end={x:bc.x-direction*nodeW/2,y:bc.y};
    const distance=Math.abs(end.x-start.x);
    const control=Math.max(4,Math.min(360,distance*.42));
    return `M${start.x},${start.y} C${start.x+direction*control},${start.y+variation} ${end.x-direction*control},${end.y+variation} ${end.x},${end.y}`;
  }

  const side=deltaX>=0?-1:1;
  const start={x:ac.x+side*nodeW/2,y:ac.y};
  const end={x:bc.x+side*nodeW/2,y:bc.y};
  const excursion=Math.max(48,Math.min(180,48+Math.abs(deltaY)*.18+Math.abs(variation)));
  const outerX=(side<0?Math.min(start.x,end.x):Math.max(start.x,end.x))+side*excursion;
  return `M${start.x},${start.y} C${outerX},${start.y} ${outerX},${end.y} ${end.x},${end.y}`;
}
function isDirected(e){
  return e.type==='lineage'||e.type==='text';
}
function connectionTitle(e){
  const a=map.get(e.source),b=map.get(e.target);
  const types={lineage:'Historical continuity / descent',within:'Tradition within',text:'Text relationship',influence:'Influence / shared context',event:'Event / context'};
  return `${types[e.type]}: ${a.name}${isDirected(e)?' → ':' — '}${b.name}${e.label?' — '+e.label:''}`;
}
function renderEdges() {
  edges.forEach((e,i)=>{
    const a=map.get(e.source),b=map.get(e.target); if(!a||!b)return;
    const marker=isDirected(e)?`url(#arrow-${e.type})`:'none';
    const p=addSVG('path',{d:edgePath(a,b,i),class:`edge ${e.type}`,'marker-end':marker,'data-type':e.type,'data-i':i,'data-source':e.source,'data-target':e.target},edgesG);
    const title=addSVG('title',{},p); title.textContent=connectionTitle(e);
  });
}
function renderNodes() {
  nodes.forEach(n=>{
    const g=addSVG('g',{class:`node ${n.type}`,transform:`translate(${xFor(n.year)-nodeW/2},${yFor(n)})`,tabindex:'0',role:'button','aria-label':`${n.name}, ${n.date}`,'data-id':n.id},nodesG);
    addSVG('rect',{x:0,y:0,width:nodeW,height:nodeH,rx:10,ry:10},g);
    addSVG('rect',{x:-3,y:-3,width:nodeW+6,height:nodeH+6,rx:13,ry:13,class:'selection-ring','aria-hidden':'true'},g);
    const t=addSVG('text',{x:14,y:34},g);
    fitLabel(t,n.name,nodeW-40);
    const d=addSVG('text',{x:14,y:64,class:'date'},g);
    fitLabel(d,n.shortDate||n.date,nodeW-40);
    const title=addSVG('title',{},g); title.textContent=n.name+' — '+n.date;
    g.addEventListener('pointerdown',event=>event.stopPropagation());
    g.addEventListener('click',()=>selectNode(n.id));
    g.addEventListener('keydown',ev=>{if(ev.key==='Enter'||ev.key===' '){ev.preventDefault();selectNode(n.id);}});
  });
}
function fitLabel(element,label,width){
  element.textContent=label;
  if(element.getComputedTextLength()<=width)return;
  let end=label.length;
  do{element.textContent=label.slice(0,--end).trimEnd()+'…';}
  while(end>0&&element.getComputedTextLength()>width);
}
let selectedId=null;
function renderSelectedEdgeOverlay(){
  selectedEdgesOverlay.replaceChildren();
  if(!selectedId)return;
  const edgeEls=[...document.querySelectorAll('#edges .edge')];
  edges.forEach((e,i)=>{
    if(e.source!==selectedId&&e.target!==selectedId)return;
    const original=edgeEls[i];
    if(!original||original.classList.contains('hidden'))return;
    addSVG('path',{
      d:original.getAttribute('d'),
      class:`selected-edge-glow ${e.type}`,
      'data-i':i
    },selectedEdgesOverlay);
    const p=addSVG('path',{
      d:original.getAttribute('d'),
      class:`selected-edge-overlay ${e.type}`,
      'marker-end':isDirected(e)?'url(#arrow-selected)':'none',
      'data-i':i
    },selectedEdgesOverlay);
    const title=addSVG('title',{},p);
    title.textContent=connectionTitle(e);
  });
}
function applySelectionFocus(){
  const nodeEls=[...document.querySelectorAll('.node')];
  const edgeEls=[...document.querySelectorAll('.edge')];
  nodeEls.forEach(el=>{
    el.classList.remove('selected','connection-neighbor','connection-muted');
    el.removeAttribute('aria-current');
    el.removeAttribute('data-related-to-selection');
  });
  edgeEls.forEach(el=>el.classList.remove('connection-focus','connection-muted'));
  if(!selectedId){
    renderSelectedEdgeOverlay();
    return;
  }
  const neighbors=new Set([selectedId]);
  const connectedEdgeIndexes=new Set();
  edges.forEach((e,i)=>{
    if((e.source===selectedId||e.target===selectedId)&&!edgeEls[i]?.classList.contains('hidden')){
      connectedEdgeIndexes.add(i);
      neighbors.add(e.source); neighbors.add(e.target);
    }
  });
  nodeEls.forEach(el=>{
    if(el.dataset.id===selectedId){
      el.classList.add('selected');
      el.setAttribute('aria-current','true');
    }
    else if(neighbors.has(el.dataset.id)){
      el.classList.add('connection-neighbor');
      el.setAttribute('data-related-to-selection','true');
    }
  });
  edgeEls.forEach((el,i)=>el.classList.add(connectedEdgeIndexes.has(i)?'connection-focus':'connection-muted'));
  renderSelectedEdgeOverlay();
}
function clearSelection(hideInfo=true){
  selectedId=null;
  applySelectionFocus();
  if(hideInfo) nodeInfo.classList.add('hidden');
}
function closeHelp(restoreFocus=false){
  if(helpPanel.hidden)return;
  helpPanel.hidden=true;
  helpTrigger?.setAttribute('aria-pressed','false');
  if(selectedId)nodeInfo.classList.remove('hidden');
  if(restoreFocus)helpTrigger?.focus({preventScroll:true});
  helpTrigger=null;
}
function openHelp(button){
  if(helpTrigger===button&&!helpPanel.hidden){closeHelp(true);return;}
  closeHelp();
  helpTrigger=button;
  const titles={guide:'Connection guide',about:'About dates and connections',sources:'Reference sources'};
  helpTitle.textContent=titles[button.dataset.help];
  helpContent.replaceChildren(document.getElementById(`help-${button.dataset.help}`).content.cloneNode(true));
  if(button.dataset.help==='sources'){
    const list=document.createElement('ul');
    Object.values(references).sort((a,b)=>a[0].localeCompare(b[0])).forEach(([title,url])=>{
      const item=document.createElement('li');
      item.innerHTML=`<a href="${esc(url)}" target="_blank" rel="noopener noreferrer">${esc(title)}</a>`;
      list.appendChild(item);
    });
    helpContent.appendChild(list);
  }
  nodeInfo.classList.add('hidden');
  helpPanel.hidden=false;
  helpPanel.scrollTop=0;
  button.setAttribute('aria-pressed','true');
  closeHelpButton.focus({preventScroll:true});
}
function renderNodeInfo(n) {
  const related=edges.filter(e=>e.source===n.id||e.target===n.id);
  const visibleEdges=new Set([...edgesG.querySelectorAll('.edge:not(.hidden)')].map(el=>Number(el.dataset.i)));
  const visible=edges.filter((e,i)=>visibleEdges.has(i)&&(e.source===n.id||e.target===n.id));
  nodeInfoContent.innerHTML=`<h2>${esc(n.name)}</h2>
    <p class="detail-date">${esc(n.date)}</p>
    <p class="detail-desc">${esc(n.desc)}</p>
    ${n.dateBasis?`<p class="date-basis">${esc(n.dateBasis)}</p>`:''}
    ${referenceLinks(n.sources)}
    <section class="relations" aria-label="Connections">
      <h3>Connections (${visible.length})</h3>
      ${visible.length?`<ul>${visible.map(e=>relationText(e,n)).join('')}</ul>`:`<p>${related.length?'Connections are hidden by the current filters.':'No connections are listed.'}</p>`}
      ${visible.length&&visible.length<related.length?`<p class="relation-kind">${related.length-visible.length} hidden by filters.</p>`:''}
    </section>`;
}
function referenceLinks(ids=[]){
  if(!ids.length)return '';
  return `<p class="reference-links">${ids.map((id,i)=>{
    const [title,url]=references[id];
    return `<a href="${esc(url)}" target="_blank" rel="noopener noreferrer" title="${esc(title)}" aria-label="Source: ${esc(title)}">Source${ids.length>1?' '+(i+1):''}</a>`;
  }).join(' · ')}</p>`;
}
function relationText(e,n){
  const outgoing=e.source===n.id;
  const other=map.get(outgoing?e.target:e.source);
  const labels={lineage:outgoing?'Continuity / descent to':'Continuity / descent from',within:outgoing?'Includes tradition':'Tradition within',text:outgoing?'Text link to':'Text link from',influence:'Influence / shared context',event:'Event / context'};
  return `<li><span class="relation-kind">${labels[e.type]}</span>
    <button class="text-link" type="button" data-node-id="${esc(other.id)}">${esc(other.name)}</button>
    ${e.label?`<p class="relation-desc">${esc(e.label)}</p>`:''}
    ${referenceLinks(e.sources)}</li>`;
}
function selectNode(id) {
  const n=map.get(id); if(!n)return;
  closeHelp();
  selectedId=id;
  nodeInfo.classList.remove('hidden');
  updateFilters();
  nodeInfo.scrollTop=0;
}
const viewPadding=16, maximumScale=2.2;
function getFitScale(bounds,size){
  return Math.min(maximumScale,Math.max(1,size.width-2*viewPadding)/bounds.width,
    Math.max(1,size.height-2*viewPadding)/bounds.height);
}
function constrainView(view,bounds,size){
  const scale=Math.min(maximumScale,Math.max(getFitScale(bounds,size),view.scale));
  const constrainAxis=(offset,start,length,available)=>{
    // Either diagram edge can reach the screen center, but cannot pass it.
    const minimum=available/2-(start+length)*scale;
    const maximum=available/2-start*scale;
    return Math.min(maximum,Math.max(minimum,offset));
  };
  return {scale,tx:constrainAxis(view.tx,bounds.x,bounds.width,size.width),
    ty:constrainAxis(view.ty,bounds.y,bounds.height,size.height)};
}
let scale=1, tx=0, ty=0;
let timelineBounds, previousViewSize;
function viewSize(rect=svg.getBoundingClientRect()){
  const panel=nodeInfo.getBoundingClientRect();
  // On narrow screens, the details cover most of the width. Use the clear
  // area above them so an end-of-timeline box can still be brought into view.
  const covered=panel.height>0&&panel.width>=rect.width*.75?panel.height+16:0;
  return {width:rect.width,height:Math.max(0,rect.height-covered)};
}
function boundedScale(value,size=svg.getBoundingClientRect()){
  return Math.min(maximumScale,Math.max(getFitScale(timelineBounds,viewSize(size)),value));
}
function applyTransform(){
  const size=viewSize();
  if(!timelineBounds||!size.width||!size.height)return;
  ({scale,tx,ty}=constrainView({scale,tx,ty},timelineBounds,size));
  previousViewSize={width:size.width,height:size.height};
  viewport.setAttribute('transform',`translate(${tx} ${ty}) scale(${scale})`);
  updateAxisLabels(size);
  const arrow=document.getElementById('arrow-selected');
  arrow.setAttribute('markerWidth',10/scale);
  arrow.setAttribute('markerHeight',8/scale);
  document.getElementById('zoomLevel').textContent=`${Math.round(scale*100)}%`;
}
function fitAll(){
  const r=viewSize();
  if(!timelineBounds||!r.width||!r.height)return;
  scale=getFitScale(timelineBounds,r);
  tx=r.width/2-(timelineBounds.x+timelineBounds.width/2)*scale;
  ty=r.height/2-(timelineBounds.y+timelineBounds.height/2)*scale;
  applyTransform();
}
function matchingNodes(){
  const q=search.value.trim().toLowerCase();
  return nodes.filter(n=>(groupFilter.value==='all'||n.group===groupFilter.value)&&
    (!q||`${n.name} ${n.desc} ${n.date} ${n.group}`.toLowerCase().includes(q)));
}
function fitNodes(items, reserveDetails=false){
  if(!items.length||listView.classList.contains('active'))return;
  const r=svg.getBoundingClientRect();
  const width=r.width;
  const height=Math.max(100,Math.min(viewSize(r).height,r.height-(reserveDetails?nodeInfo.getBoundingClientRect().height+24:0)));
  const minX=Math.min(...items.map(n=>xFor(n.year)-nodeW/2))-45;
  const maxX=Math.max(...items.map(n=>xFor(n.year)+nodeW/2))+45;
  const minY=Math.min(...items.map(yFor))-45;
  const maxY=Math.max(...items.map(n=>yFor(n)+nodeH))+45;
  scale=Math.min(1.25,(width-24)/(maxX-minX),(height-24)/(maxY-minY));
  tx=width/2-(minX+maxX)/2*scale;
  ty=height/2-(minY+maxY)/2*scale;
  applyTransform();
}
function resetView(){
  closeHelp();
  search.value=''; groupFilter.value='all';
  Object.values(relationshipFilters).forEach(el=>el.checked=true);
  clearSelection(); updateFilters();
  if(!listView.classList.contains('active'))fitAll();
}
function openNode(id){
  setListView(false);
  document.getElementById('searchResults').hidden=true;
  selectNode(id);
  fitNodes([map.get(id)],true);
  diagramArea.scrollIntoView({block:'nearest'});
  closeInfo.focus({preventScroll:true});
}
let dragging=false,lastX=0,lastY=0;
let backgroundTap=null;
const activePointers=new Map();
svg.addEventListener('selectstart',event=>event.preventDefault());
let pinchStartDistance=0,pinchStartScale=1,pinchWorldX=0,pinchWorldY=0;
function pointerDistance() {
  const [a,b]=[...activePointers.values()];
  return Math.hypot(b.x-a.x,b.y-a.y);
}
function pointerMidpoint() {
  const [a,b]=[...activePointers.values()];
  return {x:(a.x+b.x)/2,y:(a.y+b.y)/2};
}
function beginPinch() {
  const rect=svg.getBoundingClientRect();
  const midpoint=pointerMidpoint();
  pinchStartDistance=Math.max(1,pointerDistance());
  pinchStartScale=scale;
  pinchWorldX=(midpoint.x-rect.left-tx)/scale;
  pinchWorldY=(midpoint.y-rect.top-ty)/scale;
  dragging=false;
}
svg.addEventListener('pointerdown',e=>{
  if(e.button!==0||e.target.closest?.('.node'))return;
  activePointers.set(e.pointerId,{x:e.clientX,y:e.clientY});
  if(activePointers.size===1){
    backgroundTap=e.target.closest?.('.edge')?null:{id:e.pointerId,x:e.clientX,y:e.clientY};
  }else backgroundTap=null;
  try{svg.setPointerCapture(e.pointerId)}catch{}
  if(activePointers.size===1){
    dragging=true; lastX=e.clientX; lastY=e.clientY; svg.classList.add('dragging');
  } else if(activePointers.size===2) beginPinch();
});
svg.addEventListener('pointermove',e=>{
  if(!activePointers.has(e.pointerId))return;
  if(backgroundTap&&Math.hypot(e.clientX-backgroundTap.x,e.clientY-backgroundTap.y)>6)backgroundTap=null;
  activePointers.set(e.pointerId,{x:e.clientX,y:e.clientY});
  if(activePointers.size===2){
    const rect=svg.getBoundingClientRect();
    const midpoint=pointerMidpoint();
    scale=boundedScale(pinchStartScale*pointerDistance()/pinchStartDistance,rect);
    tx=midpoint.x-rect.left-pinchWorldX*scale;
    ty=midpoint.y-rect.top-pinchWorldY*scale;
    applyTransform();
    return;
  }
  if(!dragging)return;
  tx+=e.clientX-lastX; ty+=e.clientY-lastY;
  lastX=e.clientX; lastY=e.clientY; applyTransform();
});
function endPointer(e){
  const clearOnTap=e.type==='pointerup'&&backgroundTap?.id===e.pointerId&&
    Math.hypot(e.clientX-backgroundTap.x,e.clientY-backgroundTap.y)<=6;
  backgroundTap=null;
  activePointers.delete(e.pointerId);
  try{svg.releasePointerCapture(e.pointerId)}catch{}
  if(activePointers.size===1){
    const remaining=[...activePointers.values()][0];
    lastX=remaining.x; lastY=remaining.y; dragging=true;
  } else if(activePointers.size===0){
    dragging=false; svg.classList.remove('dragging');
  }
  if(clearOnTap){closeHelp();clearSelection();updateFilters();}
}
svg.addEventListener('pointerup',endPointer);
svg.addEventListener('pointercancel',endPointer);
svg.addEventListener('wheel',e=>{
  e.preventDefault();
  const r=svg.getBoundingClientRect(), mx=e.clientX-r.left,my=e.clientY-r.top;
  const beforeX=(mx-tx)/scale,beforeY=(my-ty)/scale;
  const factor=Math.exp(-e.deltaY*0.0012);
  const newScale=boundedScale(scale*factor,r);
  tx=mx-beforeX*newScale; ty=my-beforeY*newScale; scale=newScale; applyTransform();
},{passive:false});
function zoom(f){
  const r=svg.getBoundingClientRect(),mx=r.width/2,my=r.height/2;
  const bx=(mx-tx)/scale,by=(my-ty)/scale;
  scale=boundedScale(scale*f,r);
  tx=mx-bx*scale;ty=my-by*scale;applyTransform();
}
function updateFilters(){
  const q=search.value.trim().toLowerCase();
  const gf=groupFilter.value;
  let visible=0, matched=0;
  document.querySelectorAll('.node').forEach(el=>{
    const n=map.get(el.dataset.id);
    const groupOK=gf==='all'||n.group===gf;
    el.classList.toggle('hidden',!groupOK);
    const text=(n.name+' '+n.desc+' '+n.date+' '+n.group).toLowerCase();
    const match=!q||text.includes(q);
    el.classList.toggle('dim',groupOK&&!match);
    if(groupOK)visible++; if(groupOK&&match)matched++;
  });
  document.querySelectorAll('.edge').forEach((el,i)=>{
    const e=edges[i], a=map.get(e.source),b=map.get(e.target);
    const groupOK=gf==='all'||(a.group===gf&&b.group===gf);
    const typeOK=relationshipFilters[e.type].checked;
    el.classList.toggle('hidden',!(groupOK&&typeOK));
  });
  if(selectedId){
    const selectedNode=map.get(selectedId);
    if(gf!=='all'&&selectedNode.group!==gf) clearSelection(true);
    else applySelectionFocus();
  }
  const edgeEls=[...document.querySelectorAll('#edges .edge')];
  const highlighted=selectedId ? edges.filter((e,i)=>(e.source===selectedId||e.target===selectedId)&&!edgeEls[i]?.classList.contains('hidden')).length : 0;
  const base=q?`${matched} results in ${visible} boxes`:`${visible} boxes`;
  status.textContent=highlighted?`${base} · ${highlighted} connections highlighted`:base;
  if(selectedId&&!nodeInfo.classList.contains('hidden'))renderNodeInfo(map.get(selectedId));
  renderSelectedEdgeOverlay();
  const matches=matchingNodes(), ids=new Set(matches.map(n=>n.id));
  document.querySelectorAll('#listBody tr').forEach(row=>{row.hidden=!ids.has(row.dataset.id);});
  document.getElementById('listEmpty').hidden=matches.length>0;
  const results=document.getElementById('searchResults');
  results.hidden=!q||document.activeElement!==search;
  results.replaceChildren();
  if(q){
    const count=document.createElement('p');
    count.textContent=matches.length?`${matches.length} results. Select a name to open it.`:'No results. Try another keyword or branch.';
    results.appendChild(count);
    matches.forEach(n=>{
      const button=document.createElement('button');
      button.type='button'; button.className='search-result';
      button.innerHTML=`<strong>${esc(n.name)}</strong><span>${esc(n.group)} · ${esc(n.date)}</span>`;
      button.addEventListener('click',()=>openNode(n.id));
      results.appendChild(button);
    });
  }
}
const relationshipFilters=Object.fromEntries(['lineage','within','influence','text','event'].map(type=>[type,document.getElementById('show'+type[0].toUpperCase()+type.slice(1))]));
[search,groupFilter,...Object.values(relationshipFilters)].forEach(el=>el.addEventListener('input',updateFilters));
groupFilter.addEventListener('change',()=>fitNodes(matchingNodes()));
search.addEventListener('focus',updateFilters);
search.addEventListener('keydown',e=>{
  if(e.key==='Enter'){
    const first=matchingNodes()[0]; if(first){e.preventDefault();openNode(first.id);}
  }
  if(e.key==='ArrowDown'){
    const first=document.querySelector('#searchResults button');
    if(first){e.preventDefault();first.focus();}
  }
});
document.addEventListener('click',e=>{
  if(!e.target.closest('.search-control'))document.getElementById('searchResults').hidden=true;
});
document.addEventListener('keydown',e=>{
  if(e.key==='Escape'){
    if(!helpPanel.hidden){e.preventDefault();closeHelp(true);return;}
    const hadSelection=selectedId;
    document.getElementById('searchResults').hidden=true;
    clearSelection();updateFilters();
    document.getElementById('searchResults').hidden=true;
    if(hadSelection)document.querySelector(`.node[data-id="${hadSelection}"]`)?.focus({preventScroll:true});
  }
});
document.getElementById('fitBtn').addEventListener('click',()=>fitNodes(matchingNodes()));
document.getElementById('resetBtn').addEventListener('click',resetView);
document.getElementById('zoomIn').addEventListener('click',()=>zoom(1.25));
document.getElementById('zoomOut').addEventListener('click',()=>zoom(0.8));
const listView=document.getElementById('listView'),diagramArea=document.getElementById('diagramArea'),toggleList=document.getElementById('toggleList');
document.querySelectorAll('[data-help]').forEach(button=>{
  button.setAttribute('aria-pressed','false');
  button.addEventListener('click',()=>openHelp(button));
});
closeHelpButton.addEventListener('click',()=>closeHelp(true));
closeInfo.addEventListener('click',()=>{
  const previous=selectedId;
  clearSelection(true);updateFilters();
  document.querySelector(`.node[data-id="${previous}"]`)?.focus({preventScroll:true});
});
nodeInfoContent.addEventListener('click',e=>{
  const related=e.target.closest('[data-node-id]');
  if(related)openNode(related.dataset.nodeId);
});
function setListView(on){
  closeHelp();
  listView.classList.toggle('active',on);
  diagramArea.style.display=on?'none':'block';
  toggleList.textContent=on?'Diagram view':'List view';
  toggleList.setAttribute('aria-pressed',String(on));
  document.querySelectorAll('[data-diagram-control]').forEach(el=>{el.hidden=on;});
}
toggleList.addEventListener('click',()=>setListView(!listView.classList.contains('active')));
const tbody=document.getElementById('listBody');
nodes.slice().sort((a,b)=>a.year-b.year).forEach(n=>{
  const tr=document.createElement('tr');
  tr.dataset.id=n.id;
  tr.innerHTML=`<td data-label="Date">${esc(n.date)}</td><td data-label="Name"><button class="text-link" type="button">${esc(n.name)}</button></td><td data-label="Branch">${esc(n.group)}</td><td data-label="Type">${esc(n.type)}</td><td data-label="Notes">${esc(n.desc)}</td>`;
  tr.querySelector('button').addEventListener('click',()=>openNode(n.id));
  tbody.appendChild(tr);
});
renderGrid();renderEdges();renderNodes();
// Include cards and curved links that extend past the time grid. Keep these
// bounds stable when a selection or filter changes.
timelineBounds=viewport.getBBox();
updateFilters();
requestAnimationFrame(fitAll);
function resizeView(){
  const size=viewSize();
  if(!size.width||!size.height)return;
  if(previousViewSize&&size.width===previousViewSize.width&&size.height===previousViewSize.height)return;
  const wasOverview=previousViewSize&&Math.abs(scale-getFitScale(timelineBounds,previousViewSize))<0.000001&&
    Math.abs(tx+(timelineBounds.x+timelineBounds.width/2)*scale-previousViewSize.width/2)<0.01&&
    Math.abs(ty+(timelineBounds.y+timelineBounds.height/2)*scale-previousViewSize.height/2)<0.01;
  if(!previousViewSize||wasOverview){
    fitAll();
  }else{
    // Keep the same center when zoomed in, then apply the new edge limits.
    const centerX=(previousViewSize.width/2-tx)/scale;
    const centerY=(previousViewSize.height/2-ty)/scale;
    scale=Math.max(scale,getFitScale(timelineBounds,size));
    tx=size.width/2-centerX*scale;
    ty=size.height/2-centerY*scale;
    applyTransform();
  }
}
const viewObserver=new ResizeObserver(resizeView);
viewObserver.observe(svg);
viewObserver.observe(nodeInfo);
})();
