*This is a submission for the [Alibaba Cloud](https://int.alibabacloud.com/m/1000402443/) Challenge: [Build a Web Game](https://dev.to/challenges/alibaba).**

---

## What I Built
This is a classic memory game where a robot shuffles your cards. Each card features the name of an Alibaba Cloud service, such as 
- ECS,
- Function Compute
- OSS
- EBS
- CDN
- ApsaraDB

Your goal is to find matching pairs by clicking to flip the cards.
Cards will automatically flip back after one second. If you flip more than two cards within that second — even if you found a matching pair
— the move is considered invalid. When you successfully match two cards, they will remain face-up and become unclickable. Once you match all the pairs, your completion time will be recorded, and you can enter your name to appear on the top score board. The faster your time, the higher your ranking. 

Enjoy!

---

### Screenshots 

![Screenshot intro](https://raw.githubusercontent.com/olbrichattila/alimemo/refs/heads/main/screenshots/intro.png)

---

![Screenshot game](https://raw.githubusercontent.com/olbrichattila/alimemo/refs/heads/main/screenshots/game.png)

---

## Demo
[https://gamechallange.attilaolbrich.co.uk/](https://gamechallange.attilaolbrich.co.uk/)

---

## Alibaba Cloud Services Implementation

After registering to Alibaba Cloud using the provided link, I unfortunately did not receive the free trial credit, even though this was my first time trying Alibaba Cloud. Despite this, I decided to purchase the necessary services myself, and, due to budget considerations, I opted for a simple and low-cost setup.

I chose Object Storage Service (OSS) to host the static assets of the game. I linked it to a subdomain of my personal website using a CNAME record. For SSL, I manually created a TXT record to verify and issue a certificate via Let's Encrypt.

The game itself is built with ReactJS, while a small Golang HTTP API provides the backend for storing and listing high scores. This backend is deployed on an Elastic Compute Service (ECS) virtual machine, along with a PostgreSQL database, all running inside Docker containers.

In fact, this is the same API I used for another game I submitted here a few days ago (the AliRobo Tunnel Golang WASM game), but with different tables for each game.

---


## Game Development Highlights

This game started as a quick idea — I thought, why not create another one?
Since it’s a simple concept, there were no major hurdles. I built the game in ReactJS, and the whole process, including deployment, was completed in just a few hours.