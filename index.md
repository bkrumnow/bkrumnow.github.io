---
layout: personal
title: About
---

<div class="floating-text-figure" markdown="1">
  <div class="continuous-text" markdown="1">
# About me

I am an external PhD student at the [Department of Computer Science](https://www.ou.nl/en/web/open-universiteit/onderzoek-informatica) of the Open University Netherlands, and I am a research assistant in the [Computer Networks and IT Security](https://blogs.gm.fh-koeln.de/ktds/de/startseite/) lab at the TH Köln in Gummersbach. Since 2013, I have also been a lecturer in the [Web Science programme](https://www.th-koeln.de/en/academics/web-science-masters-program_7228.php). 

My research interest lies mainly in web security and privacy subjects. Specifically, I focus on web measurements related to security and bot detection.

</div>
  <div class="fig-next-to-text" markdown="1">
![Profile picture]({{site.url}}/assets/images/profile.png)
  </div>
<div style="clear:both;"></div>
</div>



# News 

<ul>
  {% for post in site.posts %}
    <li>

      {{post.date| date: "%d.%m.%Y" }} - {{ post.excerpt | remove: '<p>' | remove: '</p>' }}
    </li>
  {% endfor %}
</ul>


# Off-time
I am happy to be a member of the [Gemüsekoop e.V.](https://www.gemuesekoop.de/), and I am voluntarily helping to digitise their processes. If you are interested in sustainable social agriculture and live in Cologne's area, come and [join us](https://www.gemuesekoop.de/mitmachen/)!