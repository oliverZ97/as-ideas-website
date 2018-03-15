import md5 from "md5";

const posts = [
    {
        year: "2016",
        month: "06",
        name: "ideas-for-hackathons",
        title: "Ideas for Hackathons",
        titlePicture: "01.png",
        summary: "Hackathons machen enorm viel Spaß und man kann dabei mehr lernen als in mehreren Monaten normaler Arbeit. Wir waren dieses Jahr an zwei Wochenenden bei zwei Hackathons, hatten enorm viel Spaß und haben drei Preise gewonnen.",
        author: "Sebastian Waschnick",
        authorEmail: "Sebastian.Waschnick@asideas.de"
    },
    {
        year: "2016",
        month: "07",
        name: "42-stunden-bei-einem-hackathon",
        title: "42 Stunden bei einem Hackathon",
        titlePicture: "image2.JPG.jpeg",
        summary: "Hey! I’m Sebastian, a newly member of Hackerstolz and a huge fan of Hackathons. This is a short story about my last Hackathon. It was not your most typical Hackathon, as it was kind of a corporate one about new ideas some business units, but you still will get the idea how a Hackathon works.",
        author: "Sebastian Waschnick",
        authorEmail: "Sebastian.Waschnick@asideas.de"
    },
    {
        year: "2016",
        month: "08",
        name: "warum-agil-so-schwer-ist",
        title: "Warum agil so schwer ist",
        titlePicture: "9588038559_a670b73d29_o.jpg",
        summary: "Agil ist doch eigentlich ganz einfach. Ein großes Vorhaben wird in kleine Iterationen unterteilt; es wird immer das wichtigste umgesetzt;  das Schaffen von Wert für den Kunden steht im Vordergrund; Ziele und Fortschritt werden transparent gemacht; das Team organisiert sich selbst und bemüht sich um kontinuierliche Verbesserung.",
        author: "Sascha Korp",
        authorEmail: "sascha.korp@asideas.de"
    },
    {
        year: "2016",
        month: "08",
        name: "social-day-2016-die-arche-hellersdorf",
        title: "Social Day 2016 @ Die Arche Hellersdorf",
        titlePicture: "20160722-084602-20160722-084602-P7220001.jpg",
        summary: "Dieses Jahr hatten wir unseren ersten Social Day, zusammen mit der Axel Springer IT. Mit insgesamt 55 Mitarbeitern sind wir mit einem Bus angereist, um Die Arche in Berlin-Hellersdorf zu unterstützen. Das ganze war freiwillig, jeder konnte sich dazu anmelden, wenn er wollte.",
        author: "Sebastian Waschnick",
        authorEmail: "Sebastian.Waschnick@asideas.de"
    },
    {
        year: "2016",
        month: "08",
        name: "continuously-delivering-infrastructure-part-1-ansible-molecule-and-testinfrastructure",
        title: "Continuously delivering infrastructure – Part 1: Ansible, Molecule and Testinfrastructure",
        titlePicture: "TestAllTheThings.jpg",
        summary: "As part of a centralised system engineer tools and operations team, we often show teams how to set up their continuous integration workflow. Most of the time, this is build in a Java environment with a pipeline made in Jenkins CI and of course some testing frameworks.",
        author: "Sebastian Kornehl",
        authorEmail: "Sebastian.Kornehl@asideas.de"
    },
    {
        year: "2016",
        month: "09",
        name: "bed-con-2016-das-berliner-familientreffen-der-java-community",
        title: "BED-CON 2016 – Das Berliner Familientreffen der Java Community",
        titlePicture: "eingang.jpg",
        summary: "Das jährliche Familientreffen der Berliner Java Community hat wieder stattgefunden – die Berlin Expert Days, kurz einfach BED-CON genannt. Da die Konferenz in Berlin stattfindet und nur zwei Tage geht, gehört sie einfach zu den bequemsten Konferenzen für Berliner. Was man auch den Teilnehmern anmerkt: Bereits beim Ankommen erkennt man, dass dies eine IT-Konferenz ist. Es gibt nur männliche Softwareentwickler, vorzugsweise etwas älter und es wird nur deutsch gesprochen. Der Frauenanteil liegt bei etwa 2-4%. Schade eigentlich, andere Konferenzen zeigen, wie es besser geht.",
        author: "Sebastian Waschnick",
        authorEmail: "Sebastian.Waschnick@asideas.de"
    },
    {
        year: "2016",
        month: "10",
        name: "coderetreat-irgendwer",
        title: "Coderetreat, irgendwer?",
        titlePicture: "Screen-Shot-2016-10-12-at-14.00.52.png",
        summary: "Am 22.10.2016 ist es wieder soweit: Der “Global Day of Coderetreat” findet wieder statt. Und ihr fragt euch jetzt sicherlich, was ist eigentlich ein Coderetreat. Denn so häufig hört man davon noch nicht bzw. den meisten Entwicklern, denen ich davon erzähle, haben noch nie nur von dem Wort gehört. Zeit das zu ändern!",
        author: "Sebastian Waschnick",
        authorEmail: "Sebastian.Waschnick@asideas.de"
    },
    {
        year: "2016",
        month: "10",
        name: "du-programmierst-wie-ein-madchen",
        title: "Du programmierst wie ein Mädchen",
        titlePicture: "20161015_120153_HDR-02.jpg",
        summary: "Und wieder ein weiterer Hackathon, dieses mal waren wir aber als Firma, Sponsor und als Mentoren dort: Der von den Geek Girls Carrots veranstaltete “hack like a girl”. Natürlich auch für Männer. Es geht ja um Inklusion, nicht Exklusion. Insgesamt waren etwa 42 Teilnehmerinnen hier, darunter auch eine Handvoll Männer. Das Thema: Health & Fitness. Gastgeber war Axel Springer, wir haben den Unternehmerclub (ein Penthouse in der Nähe vom Judischen Museum) für die teilnehmenden IT-Nachwuchskräfte zur Verfügung gestellt.",
        author: "Sebastian Waschnick",
        authorEmail: "Sebastian.Waschnick@asideas.de"
    },
    {
        year: "2016",
        month: "10",
        name: "7-reasons-why-you-should-go-to-a-hackathon",
        title: "7 reasons why you should go to a Hackathon",
        titlePicture: "01.jpeg",
        summary: "A hackathon is any event of any duration where people come together to solve problems with digital means and present them to each other. That’s it, really simple. In most cases a hackathon is on two days and you get 24 hours time for the hacking. But why should you even bother to invest two of your precious days? Well, here are at least seven reasons!",
        author: "Sebastian Waschnick",
        authorEmail: "Sebastian.Waschnick@asideas.de"
    },
    {
        year: "2016",
        month: "11",
        name: "paper-prototyping",
        title: "Paper Prototyping",
        titlePicture: "8258201693_302a3d26b0_o.jpg",
        summary: "Prototyping erlaubt es schnell zu sichtbaren Ergebnissen und damit zu frühzeitigem direkten Feedback vom Kunden zu kommen. Dieses Feedback kann dann in einem agilen Loop wieder in den nächsten Prototyp integriert werden. Aber selbst Prototyping benötigt eine gewisse Zeit. Ein initiales Projektsetup muss erstellt werden sowie ein initialer Funktionsumfang erdacht und umgesetzt werden.",
        author: "Marco Böttcher",
        authorEmail: "marco.boettcher@asideas.de"
    },
    {
        year: "2017",
        month: "01",
        name: "aurelia-or-how-i-stopped-worrying-and-learned-to-love-spa-development",
        title: "Aurelia – or how I stopped worrying and learned to love spa development",
        titlePicture: "good-news-everyone-there-is-another-javascript-mv-framework-to-learn.jpg",
        summary: "Um einen aktuellen Einblick in die Frontend-Entwicklung zu erhalten, verweise ich auf die großartige Zusammenfassung “how it feels to learn JS in 2016“. Jede Woche ein neues Framework, hunderttausende von Paketen auf npmjs.org… Und jetzt noch ein neues Framework?",
        author: "Julian Godesa",
        authorEmail: "julian.godesa@asideas.de"
    },
    {
        year: "2018",
        month: "03",
        name: "ideas-engineering-praesentiert-die-ipa",
        title: "Ideas Engineering präsentiert die IPA",
        titlePicture: "ipa3.jpg",
        summary: "Alle zwei bis vier Wochen finden wir uns gemeinsam ein um uns die Geschichte darüber zu erzählen was wir in den vergangenen zwei Wochen gemacht haben. So steht es in der Scrum Bibel. Jedes Team bereitet sich auf diese Zeremonie ausführlich vor, unsere Zuhörer sind aber zumeist aus den eigenen Kreisen.",
        author: "Alexandra Nicolae",
        authorEmail: "alexandra.nicolae@asideas.de"
    },
    {
        year: "2018",
        month: "03",
        name: "immovation-days-bei-immowelt-in-hamburg",
        title: "Immovation Days bei Immowelt in Hamburg",
        titlePicture: "immo1.jpg",
        summary: "Immowelt veranstaltet in regelmäßigen Abständen den 'Immovation Day', einen Tag an dem die Entwickler die Freiheit bekommen, an Projekten zu arbeiten, die sie sich selbst überlegen und ohne Vorgaben umsetzen. Dieses mal mischten wir von AS Ideas mit und bauten Blockchains für Immobilien.",
        author: "Tarek Madany Mamlouk",
        authorEmail: "tarek.madanymamlouk@asideas.de"
    },
    {
        year: "2018",
        month: "03",
        name: "knowledge-transfer-offsite-im-motionlab",
        title: "Knowledge-Transfer-Offsite im MotionLab Berlin",
        titlePicture: "kto00.jpg",
        summary: "Bei AS Ideas generieren wir kontinuierlich Ideen, Prototypen und Wissen. Erfolgskritisch ist dabei, dass wir unsere Initiativen reflektieren und das gewonnene Wissen untereinander teilen. Für einen freien Kopf und frische kreative Energie zogen wir uns diesen März ins Offsite zurück...",
        author: "Tarek Madany Mamlouk",
        authorEmail: "tarek.madanymamlouk@asideas.de"
    }
];

posts.forEach((post) => {
    post.url = `/blog/${post.year}/${post.month}/${post.name}/`;
    post.markdownUrl = `/blog/${post.year}/${post.month}/${post.name}.md`;
    post.authorPictureUrl = `//www.gravatar.com/avatar/${md5(post.authorEmail.toLowerCase())}`;
    post.permalink = "http://axelspringerideas.de" + post.url;
    post.id = md5(post.name);
});

posts.getPost = (params) => {
    for (let post of posts) {
        if (post.year === params.year && post.month === params.month && post.name === params.name) {
            return post;
        }
    }
};

posts.reverse();

export default posts;