---
layout: post_page
comments: true
title:  "Visualize the changes of the Constitutional Referendum with Git/GitHub"
description: "A Proof-of-Concept to visualize the changes to the text of the constitution introduced by the incoming constitutional referendum using Git and GitHub."
image: /assets/posts/visualize-referendum-changes/referendum.jpeg
date:   2020-09-18 16:00:00 UTC
authors:
  - name: Marco Favorito
    url: https://marcofavorito.github.io
identifier: visualize-referendum-changes
permalink: blog/visualize-referendum-changes
canonical_url: 'https://marcofavorito.github.io/blog/visualize-referendum-changes'
---


In Italy, in the 20th and the 21st of September 2020, there will be a 
[constitutional referendum](https://en.wikipedia.org/wiki/2020_Italian_constitutional_referendum)
to change the [Constitution of the Italian Republic](https://en.wikipedia.org/wiki/Constitution_of_Italy) 
about the reduction of the number of eligible members of Parliament.
In particular, for the Chamber of Deputies from 630 to 400 components, and 
for the Senate from 315 to 200.

<p align="center">
  <a href="https://en.wikipedia.org/wiki/2020_Italian_constitutional_referendum">
    <img alt="Referendum." src="/assets/posts/visualize-referendum-changes/referendum.jpeg">
  </a>
</p>
 
As you might expect, all the news and the media talked about it 
more or less incessantly in the few weeks before the voting days. 
However, most people don’t check _what_ changed in the Constitution. 
Of course, it is not a particular issue in this specific case, since 
the changes are quite minimal, and a voter should be more interested 
into the consequences that a reform brings, rather than the actual words, 
that might be too technical to appreciate them. Nevertheless, 
I believe it should be good practice for the “modern citizen”.

I decided to improve the accessibility to the changes and, being a software engineer, 
my first thought was to use the most successful version control system: 
[Git](https://git-scm.com/). The process
of changing the text of the laws might be roughly mapped into 
the famous [Git Workflow](https://nvie.com/posts/a-successful-git-branching-model/):
- on `master`, the current active version of the law; 
- on other `branches`, the work-in-progress for specific topics;
- branching off from topic branches would be like amendments on the associated topic;
- pull requests are proposals to apply the changes to the main text (only on GitHub though).

Nowadays, the development of a reform is discussed in the Parliament; 
however, would be interesting to keep track of all the changes made 
during the discussion, and it would be much easier to analyze and verify 
for all the citizens. It would surely make easier the task of accountability (who did what).

I tested the approach for the incoming referendum. 
[In this repo](https://github.com/marcofavorito/costituzione-della-repubblica-italiana),
you will find the text of the Constitution (in `txt` format) 
and an open [pull request](https://github.com/marcofavorito/costituzione-della-repubblica-italiana/pull/1)
with the changes proposed by the proposed reform (ID `19A06354`).
The changes are taken from the [official source "Gazzetta Ufficiale"](https://www.gazzettaufficiale.it/eli/id/2019/10/12/19A06354/sg).

<p align="center">
  <a href="https://github.com/marcofavorito/costituzione-della-repubblica-italiana/pull/1">
    <img alt="Changes introduced by the 2020's constitutional reform." src="/assets/posts/visualize-referendum-changes/changes.png">
  </a>
</p>

Potential future work:
- automatize the process using NLP techniques to extract the proposed changes;
- define a canonic form for the law text (e.g. each line must have a maximum length etc.)
- being more formal in the namings and formats ([IANAL](https://en.wikipedia.org/wiki/IANAL) :D) 

