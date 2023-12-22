---
layout: project
title: Fingerprint surface-based detection of web bot detectors
page_title: Fingerprint surface-based detection of web bot detectors
permalink: /fpbotdetection/
---

### Authors: 
[Benjamin Krumnow](mailto:benjamin.krumnow*ät*th-koeln.de),
[Hugo Jonker](mailto:hugo.jonker*ät*ou.nl), and
Gabry Vlot

## About the project
This project aims to explore web bot detection based on properties defered from browser fingerprinting.
We base our research on a reverse analysis of a commercial bot detector. We found that unique properties web clients are used to sufficiently identify bots or frameworks that enable browser automation. We developed a more general approach to find system properties of web bots that allow us to distinguish these from human-controlled web clients. Our developed methodology comprises browser fingerprinting and comparisons of resulting fingerprints of a regular browser with web bot frameworks that belong to the same browser family. The derived fingerprint surfaces of web bots were used to conduct the first measurement of the prevalence of web bot detection in the Web.

On this site, web provide additional materials to our research published at [ESORICS 2019](https://esorics2019.uni.lu/). You can get the paper from [here](https://cs.ou.nl/members/hugo/papers/ESORICS19.pdf). 


### Fingerprint surface of common web bots
To investigate whether a certain version of automation library impacts the a bot' fingerprint, we evaluated a variety of setups. The following provides an overview of the used setups and shows the found deviations. We further share the complete fingerprints as a SQLite database, and our modified version of fingerprintJS2, which we used to collect fingerprints.

* [Fingerprint surfaces](/fpbotdetection/fingerprints.html)
* [Raw data of taken fingerprints (zip)](/assets/files/esorics19/raw_fingerprints.zip)
* [Modified Fingerprintjs2 library on Github](https://github.com/bkrumnow/BrowserBasedBotFP)


### Detecting web bot detection
Based on the found  ,  makes web bots visible to websites, we developed a mechanism to find scripts that attempt to identify web bots. We build a scanner equipped with this mechanism to detect web bot detectors. In our study, we used this bot to scan the Alex Top 1M, which led to the identification of over 127K sites with detectors. Our modified version of the OpenWPM framework can be found under the following link:

* [Find the source code on Github.](https://github.com/bkrumnow/BotDetectionScanner)

## Cite
To refer to our work, please, cite as follows:

### Plain
{% include papers.html selection="esorics19" preprint=false%}

### Bibtex:
```bibtex
@inproceedings{JKV19,
  author        = {Hugo Jonker and Benjamin Krumnow and Gabry Vlot},
  title         = {Fingerprint surface-based detection of web bot detectors},
  booktitle     = {Proc.\ 24th European Symposium on Research in Computer
  Security (ESORICS'19)},
  publisher     = {Springer},
  series        = {LNCS},
  volume        = {11736},
  pages         = {586--605},
  year          = {2019},
  doi           = {10.1007/978-3-030-29962-0_28}
}
```
