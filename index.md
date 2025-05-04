---
layout: home.njk
title: siddhant shrivastav
---

# siddhant shrivastav [about me](/about){.about-me-nav}

## recent learnings <a href="/articles" class="about-me-nav">read more</a> {.hero-subtitle}

<ul>
{% assign recentArticles = collections.articles | slice: 0, 3 %}
{% for post in recentArticles %}
  <li>
    <a href="{{ post.url }}">{{ post.data.title }}</a> — {{ post.date | date: "%B %d, %Y" }}
  </li>
{% endfor %}
</ul>


<!-- #### recent writings -->
## recent readings {.hero-subtitle}
- Currently reading **Death of Ivan Ilyich** by Leo Tolstoy
- **Norwegian Wood** by Haruki Murakami  
    - Read in Feburary - April 2025
    - *"Norwegian Wood is about someone who is unable to leave their past behind and is trying to move forward."*
- **White Nights** by Fyodor Dostoevsky  
    - Read in May 2025
    - *"White Nights is great and teaches us not to expect things to always go the way we want. We must accept what we can't control and move on."*

