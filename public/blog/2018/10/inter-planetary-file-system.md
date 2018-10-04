# Das Interplanetary File System (IPFS) 

# ![ipfs](ipfs.jpg)

IPFS ist das Web von morgen!  Das ist zumindest der Claim. Erklärtes Ziel ist es, HTTP abzulösen und die Grundlage für ein besseres Web für uns alle zu schaffen. Kein geringer Anspruch. Was ist dran? Wir wollen es genauer wissen und setzen uns zum Ziel, die Ideas Engineering Website im IPFS Netz zu veröffentlichen! 

 
## Wie funktioniert IPFS 

Im Herzen ist IPFS ein Peer-to-Peer Netzwerk und bringt Konzepte erfolgreicher verteilter Systeme zusammen. Stark inspiriert von BitTorrent, bildet aber geographisch näher zusammenliegende Subnetze und orientiert sich ebenfalls an Git, und ist mit diesem sogar kompatibel. 

Jede Ressource, also auch jede Datei, wird eindeutig identifiziert über einen kryptographischen Hash. Dieser ist für denselben Content immer gleich. Das bedeutet auch, wenn zwei Personen dieselbe Datei veröffentlichen, hat sie denselben Hash und wird vom Netzwerk folglich als identisch betrachtet. Das funktioniert so sogar für die einzelnen Blöcke großer Dateien. Das vermeidet Duplikate, setzt Speicherplatz frei und reduziert Bandbreite. 

Ein Dateiordner, abgebildet als Baumstruktur, hat ebenfalls einen eindeutigen Hash über die Inhalte der Ordnerstruktur. Wird eine Datei aktualisiert, ändert sich der Hash der Datei und der Hash des Ordners. Die alten Versionen sind noch unter den alten Hashwerten verfügbar. Darin gleicht IPFS der Versionierung von Git. Auf den einzelnen Peers wird ein Git Repository zur Speicherung der Daten verwendet. 

Content wird auf den Peers je nach Speicherplatz und Relevanz eine gewisse Zeit gespeichert. Content kann vom Besitzer des Peers aber auch gepinnt werden, also als so wichtig und relevant, der er vom Peer nicht gelöscht wird. Auf diese Weise beteiligen sich die Teilnehmer am “Permanent Web”, das keine relevanten Informationen vergisst. 
 

## Was ist IPNS 

Das Inter-Planetary Name System ermöglicht, die jeweils neueste Version einer Datei oder eines Datenbaums unter einer fixen Adresse verfügbar zu machen. Ein IPNS wird mit dem Private Key des teilenden Peers erzeugt. Nach einem Update kann der Peer den IPNS Hash auf den neuen Content Hash zeigen lassen. Wer es wirklich Menschen lesbar und freundlich haben möchte, kann zudem einen DNSLink in seiner DNS konfiguration einrichten, der auf den IPNS Eintrag verlinkt. 

 
## Bridging the Gap - HTTP Gateway 

Ein HTTP Gateway ist die Brücke von der neuen Web Welt zur alten. Die Web Browser unterstützen nativ das IPFS Protokoll noch nicht und haben es auch noch nicht in die Roadmap aufgenommen. Die Browser können alle Resourcen über ein HTTP Gateway abrufen, wahlweise eines bestimmten Peers oder über das zentrale Gateway in der Form: http://gateway.ipfs.io/ipfs/$hash 
Dieses fischt die Daten aus dem P2P Netz und liefert es über einen HTTP Server an den Browser Client. 


## Ideas Website 

Genug der Theorie. Als Proof of Concept richten wir eine AWS Maschine mit Ubuntu ein, installieren den Referenz Go Daemon und starten unseren Peer. Ach ja, die Ports 4001, 4002 und 8080 sollten in der Security Group auch freigegeben werden. Dann ändern wir noch den HTTP Gateway Port auf 80 und richten komfortabel eine Elastic IP ein. Die Ideas Webseite bringen wir als Zip auf den Server, entpacken und speisen sie in das IPFS Netz ein. Und siehe da: Die Webseite öffnet sich über den Ordner Hash auf dem lokalen und auch dem öffentlichen HTTP Gateway 🙂 

Dann richten wir noch den IPNS ein und beantragen einen Subdomain Eintrag bei unserem DNS Verwalter, die wir dann über AWS Route 53 selbst für die IPNS Weiterleitung konfigurieren können. 
 

## Alles easy? 

Fast. Der erste Aufruf der Webseite dauert vor allem über das öffentliche Gateway sehr lange. Das ist normal, denn das Wissen über den Ort der Webseite und seine Inhalte sind noch nicht im Netz verteilt. Auch macht dies das Betreiben eines Seeder Peers, ähnlich eines Servers, notwendig. Doch ein Vorteil des P2P Ansatzes ist, dass die Performance immer weiter steigt, je mehr die Seite angefragt wird.  

Die Webseite funktioniert allerdings nur in Teilen. Bilder und Schriften fehlen, das Routing auf unseren Blog oder das Impressum führt ins Leere. Hintergrund ist, das die React App auf dem Server Root laufen möchte oder zur Build Zeit wissen muss, in welchem Unterverzeichnis des Server Roots sie laufen wird. Dieser Ordner ist allerdings der Hash Wert des Webseiten Ordners – und erst bekannt, nachdem die Seite in das IPFS Netz eingespeist ist.  

Ein Henne - Ei Problem!  

Die Pfade der Assets sind schnell angepasst, aber das Routing unserer Webseite müsste angepasst werden, was wir erstmal verschieben. 


## Fazit 

Das System funktioniert gut und es lohnt sich das Whitepaper zu lesen! Die Konzeption ist schon beeindruckend. Es ist zukunftsweisend und im gewissen Maße auch Future Proof. Denn viele Implementierungsdetails sind gekapselt und lassen sich austauschen. Beispielsweise nutzt das Protokoll die heute Web Infrastruktur mit TCP/IP, kann aber auch auf beliebig anderen Netzwerkschichten aufsetzen. Auch lassen sich andere P2P Sharing Incentive Systeme implementieren.  

Noch scheint das Netzwerk allerdings wenig genutzt zu werden und es bleibt spannend zu sehen, wer die Early Adopter sein werden. BitTorrent wurde ja bereits zur Verteilung von Linux Distributionen oder von Blizzard zur Verteilung der World of Warcraft, Starcraft 2 und Diablo 3 Clients genutzt! 

Jedenfalls macht es IPFS einfach, auch privaten Nutzern, kleineren Organisationen oder Forschungsgruppen große Datenmengen zuverlässig auszutauschen. Auch die Verbreitung von Videos und Streaming über ein solches P2P System ist naheliegend, nimmt die Performance mit steigendem Interesse an den Inhalten doch zu im Gegensatz zur klassischen HTTP Welt. 

 
## Wer steckt dahinter 

Hinter dem IPFS Projekt steht die Firma Protocol Labs. Die Projekte sind Open Source und die Community wird zur aktiven Beteiligung eingeladen. Die Mission des Unternehmens: “We believe the internet has become humanity's most important technology. We build protocols, systems, and tools to improve how it works. Today, we are focused on how we store, locate, and move information.” 

## Offene Fragen 

lorem ipsum


## Quellen 
- [IPFS Website](https://ipfs.io/) 
- [IPFS Whitepaper](https://github.com/ipfs/papers/raw/master/ipfs-cap2pfs/ipfs-p2p-file-system.pdf) 
- [Protocol Labs](https://protocol.ai) 