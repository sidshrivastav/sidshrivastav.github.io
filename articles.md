---
title: "Articles"
layout: home.njk
---

# all notes <a href="/" class="about-me-nav">go back</a>

<ul>
{% for post in collections.articles %}
  <li>
    <a href="{{ post.url }}">{{ post.data.title }}</a> — {{ post.date | date: "%B %d, %Y" }}
  </li>
{% endfor %}
</ul>