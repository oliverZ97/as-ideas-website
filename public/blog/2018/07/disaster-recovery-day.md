# Disaster Recovery Day

Wir Entwickler bei Ideas glauben fest an das Mantra [You build it, you run it](https://www.safaribooksonline.com/library/view/programming-amazon-ec2/9781449303617/ch01s03.html). Auch wenn der Spruch von Amazons Chief Technology Officer Werner Vogel mitlerweile mehr als 12 Jahre als ist, beschreibt er immer noch genau die DevOps-Kultur, die wir bei der Ideas Engineering leben. Neben DevOps gehört der "agile" Gedanke von kontinuierlicher Verbesserung und schnellem Feedback zu unser täglichen Arbeit.

Beim Entwickeln von Software geben uns Tests schnelles Feedback. Unser Continious-Intergration-System sendet bei einer fehlgeschlagenen Integration/Deployment Chat- und Email-Nachrichten. Doch was ist mit dem Testen der Build-Infrastruktur, die für moderne Software-Entwicklung nötig ist? 

Um diese Frage klar beantworten zu können, hat sich das Team Enterprise entschieden einen "Disaster-Recovery" Tag durchzuführen. 

## CI/CD Done by team Enterprise

Das Team Enterprise betreut eine größere Software-Platform namens "ContentPool", die aus einem Dutzend Services besteht. Jeder Service hat sein eigenes Repository. Unser CI/CD System [Jenkins](https://jenkins.io/) lauscht auf Änderungen in den Repositories und startet die jeweilige Deployment-Pipeline. Die hohe Testabdeckung gibt uns das Vertrauen jede noch so kleine Änderung automatisch von Jenkins auf Produktion ausrollen zu lassen. Die Integration des Jenkins in unsere Team-Kommunikation durch Mail, HipChat, Slack und Jira gibt uns die nötige Sichtbarkeit. 

![alt text](2.png "Logo Title Text 1")

Die [Build-Pipeline](https://jenkins.io/doc/book/pipeline/#pipeline-concepts) ist für jeden Service in einem Jenkinsfile definiert und besteht grob aus folgenden Schritten:
 * __Test & Build__: Jenkins führt die Unit- und Integrationstests der Anwendung aus und veröffentlicht bei Erfolg ein neues Artefakt bei Artifactory.
 * __Deploy & run end2end:__ Das neue Artefakt wird bei Heroku in die End2End-Umgebung deployed und danach die End2end Tests ausgeführt. 
 * __Deploy integration__: Wenn die End2End Test erfolgreich passiert wurden, wird die Anwendung in die Integrationsumgebung deployed. 
 * __Deploy production__: Als letztes wird die Anwendung in die Produktionsumgebung deployed. 

Wie in jedem anderen Unternehmen kommen und gehen Kollegen. Auch hat sich unsere Firmenstruktur von dedizierten Silo-Teams hin zu cross-funktionalen Teams verändert. Der vom Team Enterprise betreute Jenkins existierte zum Beispiel schon vor der Gründung des Teams. Damals wurde der Jenkins von einem dedizierten Operations-Team betreut. 

Während der letzten Monate haben wir schrittweise unser Wissen über Jenkins, dem Slave-Setup, die Provisionierung und der Ausführung auf AWS als EC2 Instanzen aufgefrischt. In Form von [technischen User Stories](http://rgalen.com/agile-training-news/2013/11/10/technical-user-stories-what-when-and-how) haben wir in jedem Sprint technische Schuld abgebaut und im Gegenzug fehlendens Wissen aufgebaut.  

## Jenkins Setup in great Detail

Jenkins selbst kann als [Docker-Container](https://github.com/jenkinsci/docker/blob/master/README.md) in wenigen Minuten zum Laufen gebracht werden. Für einen produktiven Einsatz reicht diese eine Instanz natürlich nicht aus. 

Unser Jenkins-Setup besteht aus einem Master-Node und mehreren Slaves, die je nach Bedarf hochgefahren werden. Der Jenkins-Master selbst läuft ständig auf einer dedizierten AWS EC2 Instanz mit einem von uns gebautem AMI. Die Slaves hingegen sind von uns provisionierte Docker-Container, welche bei AWS als [Fargate-Container](https://aws.amazon.com/de/fargate/) bei Bedarf gestartet werden. 

Analog zu dem Deployment von einzelnen Services hat auch der Master sowie jeder Slave ein eigenes Repository. Für das Bauen des Master-Nodes verwenden wir Hashicorps [Packer](https://www.packer.io/). Die Provisionierung von der EC2 Instanz übernimmt [Terraform](https://www.terraform.io/) (ebenfalls von Hashicorp). Für das Bauen und Veröffentlichen von den Slave-Docker-Containern existieren Jenkins-Jobs, die vom Master ausgeführt werden. Die neu gebauten Slave-Images werden in Amazons eigener Container-Registry veröffentlicht. Fargate zieht sich die aktuellsten Images, wodurch die Slaves immer auf dem aktuellsten Stand sind.  Wir haben uns entschieden für jeden Deployment-Usecase einen dedizierten Slave zu bauen. So existiert ein Maven-Slave für das Bauen von Java (JDK) Applikationen oder ein Heroku-Slave, welcher für das Deployment des Artefakts auf Heroku vorgesehen ist. 

![alt text](3.png "Jenkins in greater detail")

Ohne spezielle Konfiguration, sowie einer Unmenge an Plugins könnten wir Jenkins nicht verwenden. Diese fragile Konfiguration wird bei jeder Änderung (hint: über ein weiteres Jenkins-Plugin) in ein Backup-Repository von Jenkins selbst geschrieben. Damit wir die Historie über schon gelaufene Jobs nicht verlieren, wird die eingehangene HDD des Jenkins-Master nächtlich in einem S3 Bucket gesichert. 


# D(isaster)-Day - Jenkins ist kaputt

Wir waren uns alle sicher, dass trotz des Wissenstransfers, das CI System unsere größte Schwachstelle ist. Ohne CI System können wir keine Änderungen in Produktion nehmen und wären damit handlungsunfähig. __Was passiert also, wenn eines Morgens Jenkins nicht mehr funktioniert?__

In Absprache mit Kollegen und unserer Product-Ownerin, war es dann soweit. Ein Kollege, der praktischerweise an dem Tag nicht mehr erreichbar war, hat [Chaos-Monkey](https://medium.com/netflix-techblog/the-netflix-simian-army-16e57fbab116) gespielt und unseren Jenkins unbrauchtbar gemacht.

### 9.30 Uhr: Jenkins ist nicht mehr erreichbar

Als erstes haben wir uns bei AWS angemeldet und gesehen, dass die EC2 Instanz nicht mehr läuft. Ein "Start" der Instanz hat leider nicht dazu geführt, dass die Jenkins-Oberfläche über https erreichbar ist. Vielleicht ist der DNS Eintrag bei Route53 nicht richtig? Der Eintrag war korrekt. Bei genauer Untersuchung der laufenden Prozesse der EC2 Instanz hat sich herausgestellt, dass es ein veraltetes / kaputtes AMI war. 

*__ProTip:__ Entwickler sollten Zugriff auf die AmazonServices haben und in der Lage sein, im Notfall sich auch per SSH auf die einzelnen EC2 Instanzen schalten können.* 

### 10:20 Uhr: Ein neuen Master-node bauen

Da eine falsche EC2 Instanz provisioniert war, haben wir als nächstes den manuellen Release-Prozess des Jenkins-Masters gestartet, das Master-Node Repository ausgecheckt und nach Installation von nötiger Software von einer Entwickler-Maschine den Jenkins-Master neu provisioniert. Der Docker-Container wurde gebaut und Packer hat für uns das neue AMI gebaut und bei AWS als neues AMI registriert. Als letztes hat Terraform versucht den von uns gewünschten Zustand (EC2 Instanztyp, Route53 Eintrag, Attached Storage Einstellungen, ... ) herzustellen. Leider schlug dies Fehl, da die alte EC2 Instanz nicht über die API terminiert werden durfte. Nach Anpassung der Einstellung lief auch der letzte Schritt unser Master-Node Provisionierung fehlerfrei durch.

*__ProTip:__ Alle Entwickler sollten wissen, welche Tools verwendet werden und wie diese funktionieren. Das Wissen um Ops-Themen sollte in der Firma breit gestreut sein. Die Entwickler sollten auch befähigt sein (durch Zugriff auf Passwörter, Repo-Zugriffsrechte, ...) diese Ops-Aufgaben durchzuführen* 

### 10:40 Uhr: Jenkins lebt?

Nachdem Terraform die EC2 Instanz korrekt provisioniert hatte, wurden wir vom Jenkins-Setup Wizard begrüßt. Scheinbar wurde beim Provisionieren eine neue Festplatte erstellt und die alten Daten gelöscht. Zur Belohnung haben wir eine Kaffee-Pause eingelegt.
 
### 11:00 Uhr: Kaffee-Pause

*__ProTip:__ Neben gutem Kaffee und anderen Getränken sollte es genügen Rückzugsräume geben, in denen sich Mitarbeiter entspannt über gerade gemachte Erfahrungen austauschen und reflektieren können.* 


### 12:00 Uhr: Backups einspielen

Die Festplatte des Master-Nodes wird regelmäßig auf S3 gespeichert. Das verwendete Script [jenkins-backup-s3](https://github.com/artsy/jenkins-backup-s3) erlaubt laut Dokumentation auch ein Restore. Da mehrere Gigabyte an Daten wiederhergestellt werden müssen, haben wir das Script gestartet und sind in die Mittagspause gegangen. 


### 13:00 Uhr: Wiederherstellung hängt

Das Script lädt als Erstes das Backup-Archiv runter und entpackt dann die Dateien in einem neuen Ordner. Leider brach das Script immer wieder ab. Es stellte sich heraus, dass die Festplatte von der EC2 Instanz zwar richtig gemountet wurde, jedoch wurde das Volume nicht richtig in den Docker-Container gemountet. Nach Neukonfiguration des Containers funktionierte auch das Restore-Script. 

*__ProTip:__ I/O ist langsam! Denke daran, wenn ein Backup wieder eingespielt werden soll.* 


### 18:00 Uhr: let's go home

Aus einem nicht sofort ersichtlichem Grund wurde die Wiederherstellung nach mehreren Stunden abgebrochen. Wir haben uns entschieden das Archiv manuell auf dem Volume zu entpacken und die extra Fehlerquelle 'Restore-Skript' zu umgehen. 

*__ProTip:__ Prozesse startet, in den Hintergrund schieben und die Ausgaben in eine Log-Datei zu schreiben ist auch 2018 immer noch wichtiges Handwerkzeug. Know your commands! Mit Kollegen umbedingt eine [Commandline Challenge](https://cmdchallenge.com/) durchführen* 

### Zweiter Tag, 9:00 Uhr: Jenkins lebt!

Das nächtliche Entpacken wurde zum Glück erfolgreich abgeschlossen. Anstelle des Jenkins-Setup Guides wurde nun auf der Web-Oberfläche die Fehlermeldung "already instance running" ausgegeben. Scheinbar wurde beim Backup eine Art PID Datei mitkopiert, die ein normales Starten des Jenkins-Prozess verhinderte. Nach einem manuellen Neustart des Docker-Containers wurden wir von unser gewohnten Liste an Build-Jobs begrüßt.  

*__ProTip:__ Anstelle einer All-is-better-than-nothing Strategie sollte genau überlegt werden, welche Daten wirklich relevant für ein Wiederherstellen sind, um die Größe des einzuspielenden Backups und damit die Wiederherstellungszeit möglichst klein zu halten.*

### Zweiter Tag: 10:00 Uhr: Disaster Recovery DONE!

Nach mehr als 24h ohne Jenkins lief wieder alles einwandfrei. 

# Lessons learned

Erleben zu können wie ein Team gemeinsam ein Problem professionell löst, ist unbezahlbar. Die Wiederherstellung vom Jenkins war ein solches Erlebnis. Auch wenn wir das angepeilte Ziel von 3 Stunden mehr als nur verfehlt haben, lief der Jenkins am nächsten Tag verlässlich!

Trotz der ausführlichen Dokumentation während der letzten Monate hatten sich immer noch einige Lücken aufgetan. Diese wurden während der Übung ergänzt. Wichtige Todos, die uns im Laufe des Tages eingefallen sind, wurden sofort aufgeschrieben und als weitere technische User-Stories in unser Backlog aufgenommen. 

Die Durchführung der Übung hat gezeigt, dass ein gut eingespieltes Team auch nicht erwartete Probleme lösen kann. Der Tag gibt uns die Sicherheit, dass unsere Disaster-Recovery-Strategie nicht nur in der Theorie, sondern auch in der Praxis funktioniert. 
-*Disaster? No disaster!*
 
