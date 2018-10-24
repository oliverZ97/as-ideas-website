---
title: "Aurelia – or how I stopped worrying and learned to love spa development"
titlePicture: "good-news-everyone-there-is-another-javascript-mv-framework-to-learn.jpg"
summary: "Um einen aktuellen Einblick in die Frontend-Entwicklung zu erhalten, verweise ich auf die großartige Zusammenfassung “how it feels to learn JS in 2016“. Jede Woche ein neues Framework, hunderttausende von Paketen auf npmjs.org… Und jetzt noch ein neues Framework?"
author: "Julian Godesa"
authorEmail: "julian.godesa@asideas.de"
date: "2017-01-01T11:00:00.000Z"
---
Aurelia – or how I stopped worrying and learned to love spa development
=======================================================================

![good news everyone. There is a another javascript mv* framework to learn](https://cdn.meme.am/instances/250x250/66344488.jpg)

Um einen aktuellen Einblick in die Frontend-Entwicklung zu erhalten, verweise ich auf die großartige Zusammenfassung “[how it feels to learn JS in 2016](https://hackernoon.com/how-it-feels-to-learn-javascript-in-2016-d3a717dd577f#.ridckjkjd)“. Jede Woche ein neues Framework, hunderttausende von Paketen auf npmjs.org… Und jetzt noch ein neues Framework?

Auf jeden Fall! Aurelia ist laut eigener Webseite ([http://aurelia.io](http://aurelia.io)) ein “JS Client Framework für alle Plattformen, welches einfache Konventionen nutzt und Kreativität unterstützt”. Wir bei AS Ideas haben seit einigen Tagen die zweite Frontend-Anwendung mit Aurelia im produktiven Gebrauch und sind überzeugt. Denn das selbst gesetzte Ziel, Kreativität zu unterstützen und nicht im Weg zu stehen, erfüllt Aurelia voll und ganz. Auch ThoughtWorks ist laut seinem [TechRadar2016](https://www.thoughtworks.com/de/radar/languages-and-frameworks)  der Meinung, dass Aurelia ein Blick wert ist. Dass der Name nicht mit dem obligatorischen Hipster “JS” Kürzel endet ist schon einmal erfrischend.

Hier ein paar Features die wir besonders gut finden:

*   Setzt voll auf ECMAScript 2016
*   Unterstützt Komponenten-Architektur
*   Two-Way Databinding, ohne Dirty-Checking
*   Batch Rendering führt zu hoher FPS
*   Setzt auf Web Standards

Zukunft ist jetzt
-----------------

Aurelia setzt voll auf ECMAScript 2016 und verwendet schon jetzt Features, welche noch nicht in modernen Browsern verfügbar sind. Dank Babel und anderen Transpilern sind wir Frontend Entwickler in der Lage “modernes” JavaScript zu schreiben. Fehlende Features im Client werden durch Polyfills ersetzt. Die Kosten dafür sind die Dateigröße der zu übertragenden Dateien, welche letztendlich die Kunden mit längeren Ladezeiten tragen müssen. Mit der Zeit wird die Notwendigkeit der Polyfills und des Transpilierens jedoch stetig abnehmen da die Browser-Hersteller die beschlossenen Sprachfeatures nach und nach umsetzen werden.

Unsere zweite Anwendung ist ein Backoffice Frontend für die Nutzerverwaltung. Mit Webpack gebaut und inklusive einiger externen Bibliotheken wie lodash und momentjs ist das JavaScript Bundle ca 800KB groß (Aurelia 380KB, Bibliotheken 130KB, Anwendung 290KB). Zugegebenermaßen ist das für eine kleine Anwendung schon recht groß. Durch Komprimierung reduziert sich die zu übertragende Menge jedoch auf schlanke 230KB was meiner Meinung nach vertretbar ist. Andere Frameworks wie zum Beispiel Angular2 (2.0.0-beta.17) bringen ohne Anwendung mehr als 600KB auf die Wage. Trotzdem möchte ich als Entwickler nicht mehr ohne neue Sprachfeatures wie Fat-Arrows, Template Strings und dem Schlüsselwort let arbeiten. Mehr zu neuen Sprachfeatures von JavaScript und ihrer Vorteile kann man unter [https://babeljs.io/docs/learn-es2015](https://babeljs.io/docs/learn-es2015/) erfahren.

Der Einstieg
------------

Eine kurze Tour durch das Framework bietet das Video auf [http://aurelia.io](http://aurelia.io) in dem die wenigen Konzepte und Konventionen an Hand von einem Beispiel Programm erklärt werden.Für einen schnellen produktiven Einsatz hat das Team von Aurelia mehrere [Skeleton-Anwendungen](https://github.com/aurelia/skeleton-navigation) bereitgestellt. Neben der Unterstützung von TypeScript gibt es auch Skeletons, welche Gulp anstelle von Webpack verwenden. An Tests wurde auch gedacht: Karma, Protractor und Jasmine sind vorkonfiguriert und fester Bestandteil der Skeletons.

Wir selbst haben uns für das [Webpack Skeleton](https://github.com/aurelia/skeleton-navigation/tree/master/skeleton-esnext-webpack) entschieden, da wir schon Webpack in anderen Projekten verwendet hatten. Das aktuelle Webpack Skeleton verwendet noch einen Wrapper namens [@easy-webpack](https://github.com/easy-webpack) für einzelne Konfigurationen, was etwas gewöhnungsbedürftig ist. Die Webpack Konfigurationsdatei ist dadurch voll von easy-webpack Funktionsaufrufen und sieht nicht wie eine gewöhnliche Konfiguration aus. Trotzdem ist alles nötige schon vorhanden, wie das Kopieren von Schriften und Bildern, Uglifying und das Bundleing in mehrere Dateien. Für die Verwendung von Sass existiert ein easy-webpack Plugin falls gewünscht.

Konzepte und Konventionen
-------------------------

Im Folgenden möchte ich eine kleine Übersicht über die Konzepte und Konventionen von Aurelia geben. Die hier verwendete Beispiel Anwendung ist unter  [https://gist.run/?id=fbb691c767f64111d9be85f9e2c36d9e](https://gist.run/?id=fbb691c767f64111d9be85f9e2c36d9e) zu finden.

### Bootstrapping

Wie bei den meisten JavaScript Frameworks wird als erstes die Runtime und andere nötigen Artefakte geladen. Danach wird der Bootstrapper des Frameworks gestartet und das Framework übernimmt den Rest. Bei Aurelia ist das nicht anders.

```html
<html>  
<body aurelia-app>  
<script src="…."></script>  
<script>  
System.import(‘aurelia-bootstrapper’);  
</script>  
</body>  
</html>  
```

Aurelia selbst setzt auf “Convention over Configuration”, wobei die Konvention bei Bedarf angepasst werden kann. Falls dem Bootstrapper keine weiteren Informationen mitgegeben werden, so wird das Attribut “aurelia-app” im DOM gesucht und als Platzhalter verwendet. Der Konvention nach wird an dieser Stelle die Komponente “app” versucht zu laden und zu rendern.

Eine Komponente besteht aus einem View und einem View-Model. In unserem Beispiel sind dies die beiden Dateien _app.html_ und _app.js_. Das Binding zwischen View und View-Model übernimmt Aurelia im Hintergrund. Ein explizites Verbinden der Teile zu einer Komponente ist nicht nötig. Das von Angular 1.x bekannte manuelle Verbinden des Templates mit einem Controller und das Verfügbar machen der Komponente innerhalb der Angular Anwendung fällt weg.

### Der View und Bindings

Wie schon erwähnt, verwendet Aurelia Web-Standards, wo es möglich und sinnvoll ist. Jeder View muss in den Template Tags eingeschlossen sein. Das Template-Element ist eines der Grundpfeiler der Web-Component Spezifikation. Dadurch können Inhalte in den DOM geladen werden ohne vom Browser sofort verarbeitet zu werden. Erst wenn das Template explizit geladen wird, werden verwendete JavaScript Blöcke ausgeführt und der DOM mit den Elementen angereichert.

Aurelia unterstützt String-Interpolation in den Templates, wie wir es schon von Angular her kennen. Die verwendete Syntax entspricht der Syntax von ECMAScript 2016 für String-Interpolation. Für das Binding zwischen View und View-Model werden je nach Situation verschiedene Strategien verwendet. Für die Darstellung eines Wertes als Text reicht ein one-way Binding (view-model –> view). Wenn ein input Feld verwendet wird, so verwendet Aurelia two-way Binding (view-model <-> view). Welche Strategie verwendet wird, kann auch explizit angegeben werden.

```html
<template>  
<require from="rainbow"></require>

<h1 rainbow>Sample Binding V <-> VM</h1>

<p>One-way binding (auto): ${message}</p>  
<p>One-way binding (explizit): <em textcontent.one-way="message"></em></p>  
<p>Two-way binding (auto): <input value.bind="formValue">: ${formValue}</p>  
<p>Two-way binding (explizit): <input value.two-way="formValueExplizit">: ${formValueExplizit}</p>

<p>calculated: <em innerhtml.bind="greeting"></em></p>  
<p>Target link: ${formValue ? formValue : ‘missing’}</p>  
</template>  
```

Die meisten html Attribute können gebunden werden. Im obigen Code binden wir mit “_textcontent.bind_” auf den “_textcontent_” des html Elementes. Den Wert des Input Feldes binden wir mit “_value.bind_”. Die Konvention ist ersichtlich: _<attribute>.<bind | one-way | two-way | one-time>_. Die Verwendung von “_.bind_” sagt Aurelia, dass das die beste Binding-Strategie für das Html-Element automatisch gewählt werden soll.

Analog zum Data-Binding werden Event-Handler ebenso auf dem Html-Element registriert. Mehr zum Templating und Bindings kann in der Dokumentation gefunden werden: [http://aurelia.io/hub.html#/doc/article/aurelia/templating/latest/templating-basics/1](http://aurelia.io/hub.html#/doc/article/aurelia/templating/latest/templating-basics/1) .

### Das View-Model / Komponente

Das View-Model enthält keinen Hinweis, dass wir Aurelia verwenden. Es ist ein “plain old JavaScript object”. Der hier verwendete getter greeting() ist ein “computed property”; Änderungen der verwendeten Werte werden im View widergespiegelt. Intern verwendet Aurelia die “observable” Eigenschaft anstelle von Dirty-Checking. Der mit dem Dirty-Checking Konzept von Angular verbundene mentale Overhead sowie die technischen Grenzen des Ansatzes fallen hierdurch weg.

```js
export class App {

message = ‘Hello World!’;  
formValue = ”;  
formValueExplizit = ”;

get greeting() {  
return `<a href="http://${this.formValue}"> ${this.message} ${this.formValueExplizit} </a>`;  
}  
}  
```

Durch diesen einfachen Mechanismus kann ohne Aufwand eine nach Komponenten geteilte Anwendung entworfen werden und so die Komplexität in den einzelnen Komponenten gekapselt werden. Mehr zu Ideen, wie man mit Aurelia größere Anwendungen strukturieren kann findet man auf dem Blog einer der Core-Mitglieder [Ashley Grant](https://aurelia.ninja/2016/04/19/suggestions-for-structuring-a-large-aurelia-application/). Mehr ist nicht nötig um eine Komponente zu erzeugen. Eine Html Datei als View und JavaScript Datei mit demselben Namen und das Framework kümmert sich um das Laden und Verbinden der beiden Teile. In anderen Views kann die Komponente “_app_” nun als neues Html-Element “_<app></app>_” verwendet werden.

### Custom-Attributes

Um einzelne Html Elemente zu dekorieren verwendet Aurelia Custom-Attributes, eine weitere Web-Component Spezifikation. In unserem Beispiel ist das Attribute “_rainbow_” ein solches Custom-Attribute, welches die Textfarbe des dekorierten Elementes wechselt. Im Beispiel registrieren wir den Intervall Zähler erst nachdem das Attribute in den DOM “attached” wurde. Die hier verwendeten LifeCycle Methoden stehen auch den anderen View-Models zur Verfügung. Die Wahl der Namen ist dem Web-Component Lebenszyklus angelehnt. Mit dem Suffix “_CustomAttribute_” teilen wir Aurelia mit, dass dies ein Custom-Attribute ist. Eine weitere Konvention.

```js
export class RainbowCustomAttribute {  
static inject=\[Element\];  
currentIndex = -1;  
colors = \["RED", "ORANGE", "YELLOW", "GREEN", "BLUE", "INDIGO", "VIOLET"\];

constructor(element){  
this.element = element;  
}

attached() {  
this.intervalId = setInterval(() => this.setColor(), 2000);  
}

detached() {  
clearInterval(this.intervalId);  
}

setColor() {  
this.currentIndex = (++this.currentIndex) % this.colors.length;  
this.element.style.color = this.colors\[this.currentIndex\];  
}  
}  
```

Die Zeile “_static inject=\[Element\];_” ist der erste Hinweis, dass hier noch etwas mehr passiert. Durch den Hinweis, dass “_rainbow_” ein Custom-Attribute ist, stellt Aurelia automatisch das verwendete Html-Element dem Attribut zur Verfügung. Im Gegensatz zu Angular 1.x verwendet Aurelia keine Abstraktion (jqlite) um auf dem DOM zuzugreifen sondern stellt das echte Html-Element zur Verfügung. Die Verwendung von nativen Browserfunktionen für die DOM Manipulation führt zu einem enormen Performance-Gewinn. So ist zum Beispiel die Rendering Performance besser im [Vergleich zu React und Angular2](http://www.stefankrause.net/wp/?p=316).

Zusammenfassung
---------------

Innerhalb von zwei Tagen hatten wir unsere zweite Aurelia Anwendung produktionsbereit. Dank des Webpack Skeleton konnten unser Team sich auf die Implementierung der Geschäftslogik kümmern und keine Zeit mit der Integration von Test-Frameworks oder ähnlichem verschwenden. Funktionen wie ein Event-Aggregator, Router, Fetch Client konnten ohne Probleme integriert werden. Lodash oder momentjs sind nur ein “_npm install_” entfernt. Aurelia fügte sich angenehm in das aktuelle Ökosystem heutiger Frontend-Entwicklung ein.

Um einen besseren Eindruck von Aurelia zu erhalten, ist das [Video auf der Webseite](https://vimeo.com/117778145) sehr zu empfehlen. Für einen tieferen Einblick in Themen wie Custom-Attributes, Dependency Injection, Routing, Services, usw. ist das [Contact Manager Tutorial](http://aurelia.io/hub.html#/doc/article/aurelia/framework/latest/contact-manager-tutorial) ein guter Anfang.