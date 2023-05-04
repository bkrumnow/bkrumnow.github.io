---
layout: project-no-title
page_title: Shepherd
title: Shepherd
permalink: /shepherd/
---

![Shepherd]({{site.url}}/assets/images/shepherd_banner.png)

### Authors: 
[Hugo Jonker, Stefan Karsch, Benjamin Krumnow, and Marc Sleegers](mailto:hugo.jonker*ät*ou.nl;benjamin.krumnow*ät*th-koeln.de)

## About the project
Shepherd is a framework to facilitate post-login studies for researchers. All that a researcher needs to do is to pass a set of credentials and domains to Shepherd. Shepherd connects to each website, finds the login page, submits credentials, evaluates the login success, and logs out. Within each phase, researchers can provide custom modules that Shepherd will execute. 

This project is written in Python and uses Selenium-Webdriver together with Chrome.

[Get the paper here.](https://madweb.work/papers/2020/madweb20-jonker.pdf)


# Contributors
In addition, mulitple individuals have contributed to this project. Our thanks goes out to:
* [Alan Verresen](https://www.alanverresen.com/home/) (Open University Netherlands)
* Jelmer Kalkmann (Open University Netherlands)


# Availability
Shepherd is not publicly available, as it can be used as a cyber weapon. We therefore consider it subject to international embargoes. In specific cases, we might consider sharing under the following conditions: 

1. The proposed project does not violate ethical standards
2. An academic project member in a permanent position takes responsibility and oversees the project. Note that this member must give explicit consent (emails are sufficient)
3. Project members working with Shepherd take best efforts to
  - protect code
  - handle collected data responsibly
  - treat targeted websites fairly, including responsible disclosure (also see [ethical deployment of web bots](https://www.robotstxt.org/guidelines.html))
4. We strongly encourage interested parties to consult their institutional review board
  

# Publications
Shepherd has been used for multiple studies:
* Hugo Jonker, Stefan Karsch, Benjamin Krumnow, and Marc Sleegers. 
  Shepherd: a generic approach to automating website login. 
  In Proc. 2nd NDSS Workshop on Measurements, Attacks, and Defenses for the Web (MADWEB'2020),
  doi: [10.14722/madweb.2020.23010](https://dx.doi.org/10.14722/madweb.2020.23008), 2020.
* Stefano Calzavara, Hugo Jonker, Benjamin Krumnow, and Alvise Rabitti. 
  Measuring web session security at scale.
  In Jour. of Computers & Security,
  doi: [10.1016/j.cose.2021.102472](https://doi.org/10.1016/j.cose.2021.102472), 2021. [Preprint](https://repository.ubn.ru.nl/bitstream/handle/2066/238037/238037pre.pdf?sequence=1)
* Luca Compagna, Hugo Jonker, Benjamin Krumnow, Merve Sahin, and Johannes Krochewski. 
  A preliminary study on the adoption and effectiveness of SameSite cookies as a CSRF defence.
  In Proc. 2nd Workshop on Designing Security for the Web (SecWeb'21),
  doi: [10.1109/EuroSPW54576.2021.00012](https://doi.org/10.1109/EuroSPW54576.2021.00012), 2021. [Preprint](https://www.open.ou.nl/hjo/papers/secweb21.pdf)


# Cite
To refer to our work, please, cite as follows:

### Plain
{% include papers.html selection="madweb20" preprint=false %}

### Bibtex:
```bibtex
@inproceedings{JKKS20,
  author      = {Jonker, Hugo and Karsch, Stefan and Krumnow, Benjamin
  and Sleegers, Marc},
  title       = {Shepherd: a generic approach to automating website login},
  booktitle   = { {Proc.\ 2nd Workshop on Measurements, Attacks and Defenses
  for the Web (MADWEB'20)} },
  publisher   = {IEEE},
  year        = {2020},
  pages       = {1--10},
  doi         = {10.14722/madweb.2020.23008}
}
```