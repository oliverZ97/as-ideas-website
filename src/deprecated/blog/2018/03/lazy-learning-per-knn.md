# Lazy Learning per KNN

Künstliche Intelligenz gilt nach und nach immer weniger als Innovation und immer mehr als alltägliches Werkzeug. Um unsere Kunden optimal zu maschinellem Lernen beraten zu können, stellten wir uns die Frage, wie effizient es funktionieren würde, ein Empfehlungssystem für Nachrichtenartikel basierend auf trägem Lernen ("lazy learning") zu schreiben.  

Träges Lernen ist eine Kategorie des maschinellen lernens bei dem das Modell, auf dem die Entscheidungen des Systems beruhen, erst zur Laufzeit generiert wird. Das Modell ist der Testdatensatz selbst, der zur Anfragezeit vorliegt und sich im Laufe der Zeit verändert. Das Training findet daher durch Hinzufügen und Entfernen von Daten statt. 

Das erste Hindernis auf das wir stießen, war ein Mangel an Daten. Wir planten das Verhalten unserer User zu verwenden um gute Verlinkungen von schlechten Verlinkungen zwischen Artikeln zu unterscheiden und dadurch bessere Links generieren zu können. Da wir es allerdings versäumt hatten diese Daten rechtzeitig zu besorgen, mussten wir unseren Prototypen etwas umgestalten. Plan B sah vor per trägem Lernverfahren Ähnlichkeiten zwischen Artikeln zu berechnen und unserem System zu ermöglichen eine Liste der ähnlichsten Artikel zu generieren. Dieses Szenario würde sich zwar nur bedingt als Empfehlungssystem eignen, funktioniert aber gut für Recherchen und zum Vererben von Annotationen bereits existierender Artikel.  

Wir entschieden uns für den KNN (K-Nearest-Neighbors) Algorithmus, der als der einfachste Algorithmus seiner Art bekannt ist. Das Verfahren beinhaltet zwei Aspekte: 

1. Lege eine Metrik für die "Distanz" zweier Elemente fest .
2. Wähle eine sinnvolle Zahl k, sodass aus den k Elementen mit der geringsten Distanz Schlussfolgerungen auf das Anfrageelement gezogen werden können.  

Die Herausforderungen bestehen also darin, ein sinnvolles Distanzmaß und eine sinnvolle Zahl k zu finden. Wählt man beispielsweise die Anzahl der Socken im Kleiderschrank eines Politikers als Distanzmaß und versucht darüber die politische Gesinnung abzuleiten, könnten die Ergebnisse enttäuschend sein, da potentiell keine Korrelation zwischen Socken und Gesinnung besteht. (Hinweis: Wir haben die These, ob Socken und Politik zusammenhängen nicht untersucht, sodass wir weder bestätigen noch widerlegen können, dass dieses Beispiel nicht funktioniert.) Auch ein schlecht gewähltes k kann ein Ergebnis unbrauchbar machen. k=10 macht keinen Sinn, wenn nur 10 Testdaten existieren. Genauso ist k=1 sehr riskant, da man aus einem Cluster von nur 1 Element nur selten repräsentative Rückschlüsse ziehen kann.  

Unsere ursprüngliche Idee für ein Distanzmaß basierend auf Benutzerverhalten war der Korrelationskoeffizient nach Pearson. Dieser Koeffizient gibt ein Maß über die Ähnlichkeit zweier Zahlenreihen, in unserem Fall z.B. die Verweildauer auf einem bestimmten Artikel nachdem der Benutzer von einem anderen Artikel eingesprungen ist. Aus k Benutzerprofilen mit den höchsten Korrelationswerten kann das System dann Rückschlüsse auf einen weiteren Benutzer ziehen, der die entsprechende Seite noch nicht besucht hat. 

![](knn01.jpg)

Die Anwendung von Pearson bleibt jedoch vorerst in unserem Backlog, da wir die passenden Daten nicht rechtzeitig verfügbar hatten sodass wir ein anderes Distanzmaß wählten. Jeder unserer Artikel besitzt bereits eine Liste an "Entitäten", also Schlüsselworte, die den Inhalt beschreiben. Beispiele für Entitäten sind "Schweiz", "Aufnahmestopp" oder "Fußballspieler". Als Ähnlichkeitsmaß zweier Artikel verwendeten wir die Größe der Schnittmenge ihrer jeweiligen Entitäten.  

![](knn05.jpg)

Mathematisch gesehen ist dieser Vergleich so einfach wie er nur sein kann. Was uns einiges an Schweiß gekostet hatte, war die Umsetzung des Verfahrens für echte Artikel aus unserer Datenbank. Wir entschieden uns für eine Implementierung in Python, weil es hier sehr viele Bibliotheken für diese Art von Anwendungsfällen gibt. Bevor die Schnittmengen berechnet werden können, müssen die betrachteten Daten gefiltert und transformiert werden. Da keiner von uns echte Erfahrung mit Python mitbrachte, bereitete uns dieser Teil den größten Aufwand. 

## ![](knn02.jpg) ![](knn03.jpg) ![](knn04.jpg)

Nach 5 Tagen Recherchen, Experimenten und Bastelleien stand der Prototyp dann aber und er funktioniert! Unsere Anwendung berechnet die Distanzen eines Artikels zu allen anderen in unserem Pool und lernt mit jedem neu hinzugefügten Artikel seine Antwort zu verfeinern.  

![](knn00.jpg)

