---
layout: personal
title: About
---

<div class="floating-text-figure" markdown="1">
  <div class="continuous-text" markdown="1">
# About me

I hold a Ph.D. in [Computer Science](https://cs.ou.nl/) by the Open Universiteit and I am working as an information security
specialist at d-fine. My academic background includes web security and privacy expertise, focusing on web measurements and bot detection.
Additionally, I have been lecturing in the [Web Science programme](https://www.th-koeln.de/en/academics/web-science-masters-program_7228.php)
since 2013.

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
I am happy to be a member of the [Gemüsekoop e.V.](https://www.gemuesekoop.de), and I am voluntarily helping to digitise their processes. If you are interested in sustainable social agriculture and live in Cologne's area, come and [join us](https://www.gemuesekoop.de/mitmachen)!
