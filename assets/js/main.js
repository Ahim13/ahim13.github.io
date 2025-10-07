// Main site JS: i18n and project filters
(function () {
    'use strict';


    const skills = [
        'Unity3D',
        'iOS',
        'Augmented Reality (AR)',
        'Mixed Reality (MR)',
        'Object-Oriented Programming (OOP)',
        'C#',
        'Virtual Reality (VR)',
        'Android',
        'Azure DevOps',
        'Microsoft Azure',
        'WebGL',
        'Microsoft HoloLens',
        'Photon',
        'ARFoundation',
        'Vuforia',
        '.Net',
        'JSON',
        'XML',
        'OpenXR',
        'Meta Quest',
        'XR Interaction Toolkit',
        
    ].sort();


    const skillsHTML = `
        <div class="flex flex-wrap gap-3 text-xs text-[#9db0b9]">
            ${skills.map(skill => `
                <div class="flex gap-3 items-center rounded-lg border border-[#3b4b54] bg-[#1c2327] p-2">
                   ${skill}
                </div>
            `).join('')}
        </div>
`;

    function initI18n() {
        const translations = {
            en: {
                'brand.role': 'Unity/XR Developer',
                'nav.home': 'Home',
                'nav.about': 'About',
                'nav.projects': 'Projects',
                'nav.contact': 'Contact',
                'hero.hi': 'Hi! My name is',
                'hero.name': 'Benjamin Blázsovics',
                'hero.title': 'Full time Unity developer - XR specialist (AR/MR/VR)',
                'hero.viewProjects': 'View Projects',
                'about.title': 'About me',
                'about.getToKnow': 'Get to know me',
                'about.p1': "Hello! I’m Ben, a software developer based in Hungary. I like developing interactive applications / games with eye pleasing user interfaces which are meant to be fun or educational.",
                'about.p2': "I was always an avid gamer which meant that after I graduated from the University of Pécs, I quickly started to pursue game development and found Unity as a tool for that, and since that I have been using Unity for creating a variety of different apps.",
                'skills.title': 'Skills',
                'projects.title': 'Projects',
                'projects.subtitle': 'Here are some of the projects I have worked throughout the years.',
                'filter.all': 'All',
                'filter.ar': 'AR / MR',
                'filter.vr': 'VR',
                'filter.games': 'Games',
                'filter.simulations': 'Simulations',
                'proj.vtg.title': 'Virtual Tour Guide',
                'proj.vtg.desc': 'Wander through the forest with your very own virtual tour guide, while learning the history of Bürgerwald.',
                'proj.med.title': '3D Medical solution',
                'proj.med.desc': 'An Innovative medical solution which is an augmented reality based visualization technology of 3D medical scans and reality that also strengthens the doctor-patient relationship and improves the medical education.',
                'proj.lumi.desc': 'The Lumi software is intended for the conversion of 2D patient imaging into 3D, and for the visualization of 2D and 3D patient imaging, including Augmented Reality, to provide insights in anatomy and pathology in preparation of surgical treatment.',
                'proj.mirror.title': 'Virtual Mirror',
                'proj.mirror.desc': 'Augmented Reality mirror lets users meet and interact with their favourite characters.',
                'proj.dose.desc': 'Build a virtual city in AR using a variety of collectible tiles. A game for kids and adult alike',
                'proj.mdc.title': 'Mecsek Discovery Center',
                'proj.mdc.desc': "Companion application for the Mecsek Discovery Center Exhibition and it's nature trail",
                'proj.at.title': "Anatomy Trainer",
                'proj.at.desc': "The XRC Anatomy Trainer is an immersive Virtual Reality (VR) application that is transforming the way human anatomy is taught and learned.",
                'proj.fw.title': "FWSafeXR",
                'proj.fw.desc': "The FWSafeXR Project harnesses the power of Extended Reality (XR) to deliver realistic, hands-on training for safety and emergency scenarios in the forestry sector.",
                'proj.dd.title': 'Ős-Dráva navigator',
                'proj.dd.desc': 'It provides assistance and explanations for the various educational trails in the Danube-Drava National Park, with text, images, and audio material for each station.',
                'proj.visit': 'Visit website',
                'proj.visitPlay': 'Visit playstore',
                'contact.title': 'Contact',
                'contact.text': "If you are in need of a Unity developer or have a question, send a mail and I’ll get back to you as soon as I can.",
                'contact.cta': 'Get in touch',
                'contact.getInTouch': 'Get in Touch',
                'contact.pitch': 'Ready to bring your VR/AR vision to life? Contact me to discuss your project.',
                'contact.emailMe': 'Email Me',
                'contact.callMe': 'Call Me'
            },
            hu: {
                'brand.role': 'Unity/XR fejlesztő',
                'nav.home': 'Kezdőlap',
                'nav.about': 'Rólam',
                'nav.projects': 'Projektek',
                'nav.contact': 'Kapcsolat',
                'hero.hi': 'Szia! A nevem',
                'hero.name': 'Blázsovics Benjamin',
                'hero.title': 'Főállású Unity fejlesztő - XR specialista (AR/MR/VR)',
                'hero.viewProjects': 'Projektek megtekintése',
                'about.title': 'Rólam',
                'about.getToKnow': 'Ismerj meg',
                'about.p1': 'Szia! Ben vagyok, Magyarországon élő szoftverfejlesztő. Szívesen készítek interaktív alkalmazásokat/játékokat tetszetős felhasználói felületekkel, amelyek szórakoztatóak vagy oktató jellegűek.',
                'about.p2': 'Mindig is lelkes játékos voltam, így a Pécsi Tudományegyetem elvégzése után gyorsan a játékfejlesztés felé fordultam, és ehhez eszközként a Unityt találtam meg. Azóta is különféle alkalmazások készítéséhez használom a Unityt.',
                'skills.title': 'Készségek',
                'projects.title': 'Projektek',
                'projects.subtitle': 'Íme néhány projekt, amelyeken az évek során dolgoztam.',
                'filter.all': 'Összes',
                'filter.ar': 'AR / MR',
                'filter.vr': 'VR',
                'filter.games': 'Játékok',
                'filter.simulations': 'Szimulációk',
                'proj.vtg.title': 'Virtuális túravezető',
                'proj.vtg.desc': 'Barangold be az erdőt saját virtuális túravezetőddel, miközben megismered a Bürgerwald történetét.',
                'proj.med.title': '3D orvosi megoldás',
                'proj.med.desc': 'Innovatív, kiterjesztett valóságon alapuló vizualizációs technológia 3D orvosi felvételek és a valós környezet együttes megjelenítésére, amely erősíti az orvos-beteg kapcsolatot és javítja az orvosi oktatást.',
                'proj.lumi.desc': 'A Lumi szoftver célja a 2D-s betegképalkotás 3D-vé alakítása, valamint a 2D és 3D felvételek vizualizálása – beleértve a kiterjesztett valóságot –, hogy betekintést nyújtson az anatómiába és a kórképekbe a műtéti felkészülés során.',
                'proj.mirror.title': 'Virtuális tükör',
                'proj.mirror.desc': 'Kiterjesztett valóságos tükör, amelyben a felhasználók találkozhatnak és interakcióba léphetnek kedvenc karaktereikkel.',
                'proj.dose.desc': 'Építs virtuális várost AR-ben különféle gyűjthető lapkákkal – gyerekeknek és felnőtteknek egyaránt.',
                'proj.mdc.title': 'Mecsek Discovery Center',
                'proj.mdc.desc': 'Társalkalmazás a Mecsek Discovery Center kiállításához és tanösvényéhez',
                'proj.at.title': "Anatomy Trainer",
                'proj.at.desc': "Az XRC Anatomy Trainer egy immerszív Virtual Reality (VR) alkalmazás, amely forradalmasítja az emberi anatómia oktatásának és tanulásának módját.",
                'proj.fw.title': "FWSafeXR",
                'proj.fw.desc': "Az FWSafeXR projekt az Extended Reality (XR) technológia erejét használja fel, hogy valósághű, gyakorlati képzést nyújtson az erdészeti ágazat biztonsági és vészhelyzeti forgatókönyveiről.",
                'proj.dd.title': 'Ős-Dráva navigátor',
                'proj.dd.desc': 'A Duna-Dráva nemzeti park különböző tanösvényeihez nyújt segíséget valamint magyarázatot, az egyes állomásokhoz, szöveges, képes és hanganyagokkal.',
                'proj.visit': 'Weboldal',
                'proj.visitPlay': 'Play Áruház',
                'contact.title': 'Kapcsolat',
                'contact.text': 'Ha Unity fejlesztőre van szükséged vagy kérdésed van, írj e‑mailt, és amint lehet, válaszolok.',
                'contact.cta': 'Írj üzenetet',
                'contact.getInTouch': 'Lépj kapcsolatba',
                'contact.pitch': 'Készen állsz életre kelteni VR/AR elképzelésed? Vedd fel velem a kapcsolatot, és beszéljünk a projektről.',
                'contact.emailMe': 'Írj e‑mailt',
                'contact.callMe': 'Hívj fel'
            }
        };

        const htmlEl = document.documentElement;
        const btnEN = document.getElementById('btnLangEN');
        const btnHU = document.getElementById('btnLangHU');

        function applyTranslations(lang) {
            const dict = translations[lang] || translations.en;
            document.querySelectorAll('[data-i18n]').forEach(el => {
                const key = el.getAttribute('data-i18n');
                if (dict[key] != null) {
                    if (typeof dict[key] === 'string' && dict[key].indexOf('<span') !== -1) {
                        el.innerHTML = dict[key];
                    } else {
                        el.textContent = dict[key];
                    }
                }
            });
            htmlEl.setAttribute('lang', lang);
            if (btnEN && btnHU) {
                if (lang === 'hu') {
                    btnHU.classList.remove('bg-[#1c2327]');
                    btnHU.classList.add('bg-[#283339]');
                    btnEN.classList.remove('bg-[#283339]');
                    btnEN.classList.add('bg-[#1c2327]');
                } else {
                    btnEN.classList.remove('bg-[#1c2327]');
                    btnEN.classList.add('bg-[#283339]');
                    btnHU.classList.remove('bg-[#283339]');
                    btnHU.classList.add('bg-[#1c2327]');
                }
            }
        }

        function setLang(lang) {
            try {
                localStorage.setItem('lang', lang);
            } catch (_) {
            }
            applyTranslations(lang);
        }

        if (btnEN) btnEN.addEventListener('click', () => setLang('en'));
        if (btnHU) btnHU.addEventListener('click', () => setLang('hu'));

        let saved = 'en';
        try {
            saved = localStorage.getItem('lang') || 'en';
        } catch (_) {
        }
        applyTranslations(saved);
    }

    function initProjectFilters() {
        const filterBar = document.getElementById('projectFilters');
        if (!filterBar) return;
        const buttons = filterBar.querySelectorAll('[data-filter]');
        const cards = document.querySelectorAll('#projects article[data-tags]');

        function setActive(filter) {
            buttons.forEach(btn => {
                const isActive = btn.getAttribute('data-filter') === filter;
                btn.classList.toggle('bg-[#283339]', isActive);
                btn.classList.toggle('bg-[#1c2327]', !isActive);
                btn.classList.toggle('border', !isActive);
                btn.classList.toggle('border-[#3b4b54]', !isActive);
            });
            cards.forEach(card => {
                const tags = (card.getAttribute('data-tags') || '').toLowerCase();
                const show = filter === 'all' || tags.includes(filter);
                card.classList.toggle('hidden', !show);
            });
        }

        buttons.forEach(btn => btn.addEventListener('click', () => setActive(btn.getAttribute('data-filter'))));
        setActive('all');
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function () {
            initI18n();
            initProjectFilters();
        });
    } else {
        initI18n();
        initProjectFilters();
    }

    document.getElementById('skills-container').innerHTML = skillsHTML;
})();
