---
title: "Deploying 11ty Website to AWS"
summary: "I'm using the powerfull static website generator 11ty to create this website without any server side code, and I am using AWS to host my static website on the web. I was using 11ty to build the website on my computer and then I would upload the files manually to my s3 server, recently I discovered a way to automate the process, in this post I'm going to show how. The workflow uses a custom GitHub actions command to transfer files whenever the GitHub repo is updated."
image: /images/Project Images/marbleClock.jpg
imageAlt: "Project Image"
date: Created
created: "12 Oct 2023"
type: "DIY Guide"
tags:
  - "Webmaster"
  - "11ty"
siteUrl: "#"
repoUrl: "#"
---

I'm using the powerfull static website generator 11ty to create this website without any server side code, and I am using AWS to host my static website on the web. I was using 11ty to build the website on my computer and then I would upload the files manually to my s3 server, recently I discovered a way to automate the process, in this post I'm going to show how. The workflow uses a custom GitHub actions command to transfer files whenever the GitHub repo is updated.