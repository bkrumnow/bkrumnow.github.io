---
layout: project-no-title
title: Reliability of OpenWPM
page_title: A case study analysing and strengthening OpenWPM's reliability
permalink: /openwpm-reliability/
---

![How gullible are web measurement tools?]({{site.url}}/assets/images/openwpm_banner.png)


# A case study analysing and strengthening OpenWPM's reliability (CoNEXT'22)

### Authors: 
[Benjamin Krumnow](mailto:benjamin.krumnow*ät*th-koeln.de),
[Hugo Jonker](mailto:hugo.jonker*ät*ou.nl), and
[Stefan Karsch](mailto:stefan.karsch*ät*th-koeln.de)

### Abstract
Automated browsers are widely used to study the web at scale.
Their premise is that they measure what regular browsers would encounter
on the web. In practice, deviations due to detection of automation have
been found. To what extent automated browsers can be improved to reduce
such deviations has so far not been investigated in detail.
In this paper, we investigate this for a specific web automation framework:
OpenWPM, a popular research framework specifically designed to study
web privacy.
We analyse (1) detectability of OpenWPM, (2) resilience
of OpenWPM's data recording, and (3) prevalence of OpenWPM detection.
	

Our analysis (1) reveals OpenWPM is easily detectable. 
Our investigation of OpenWPM's data recording integrity (2) identifies novel
evasion techniques and previously unknown attacks against OpenWPM's instrumentation.
We investigate and develop mitigations to address the identified issues. 
Finally, in a scan of 100,000 sites (3), we observe that OpenWPM is commonly
detected (~14% of front pages). Moreover, we discover integrated
routines in scripts specifically to detect OpenWPM clients.
In conclusion, our case study shows that even the most popular web measurement
framework, OpenWPM, is more gullible than expected, and this gullibility is
rarely accounted for in studies.

* A preprint of our paper will be available for download [here](https://cs.ou.nl/members/hugo/papers/conext22.pdf).

# Data set & source code
We create a hardened version of OpenWPM that fixes the found flaws and detetactability issues from above. We contrast our version (WPM<sub>hide</sub>) with vanilla OpenWPM on 1,487 sites out of the Tranco Top 5k sites, which include bot detection scripts. 
Our findings show that hardening/stealthening affects loaded resources, served cookies and completeness of JavaScript recorders. 
Most prominent is the effect on tracking cookies: we observed an increase from 42% up to 59% of such cookies for WPM<sub>hide</sub>.

* Permalink to the data set of our comparison study: [https://doi.org/10.7910/DVN/REMWXS](https://doi.org/10.7910/DVN/REMWXS).
* Download [OpenWPM<sub>hide</sub>](https://github.com/bkrumnow/OpenWPM/tree/stealth_extension) (tested with OpenWPM v0.20.0).


# Cite
To refer to our work, please, cite as follows:

### Plain
{% include papers.html selection="conext22" preprint=false%}

### Bibtex:
```bibtex
@inproceedings{KJK22,
  author      = {Krumnow, Benjamin and Jonker, Hugo and
  Karsch, Stefan},
  title       = {How gullible are web measurement tools? {A} case study
  analysing and strengthening {OpenWPM}’s reliability},
  booktitle   = {Proc.\ 18th International Conference on emerging Networking
  EXperiments and Technologies {(CoNEXT ’22)}},
  publisher   = { {ACM} },
  year        = {2022},
  address     = {New York, NY, USA},
  pages       = {16},
  doi         = {10.1145/3555050.3569131}
}
```
