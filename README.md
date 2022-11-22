# CS 330 Coding Project - A Security Device
Damien Karpen's (A20506154) super awesome CS 330 coding project. This project was extremely tedious for me because I am not an avid coder like most of the class is and my coding skills are extremely lacking. I was/am very annoyed how this project was sprung up at the request of a single student and that it is worth 10% of my grade.

What the program does:

+ The program will generate random numbers in an attempt to find the correct locking or unlocking sequence. In this case, the locking sequence is 061541, and the unlocking sequence is 061544. If either sequence is found, the program will say "unlocked" or "locked" depending on which sequence was found.

Below is the FSM used to create this program. I highly doubt that the FSM is as efficient as it can be, even with the overlap between states (which  realistically is not secure as you want the intruder to be forced back to the beginning to waste their time).

<img width="1236" alt="image" src="https://user-images.githubusercontent.com/118793746/203412630-47bc9913-25c4-4b29-abb1-65b254ed9929.png">

How to build the executable:

+ 

How to run the executable:

+

Generating unit test coverage:

+

Misc. information:

+ In order to create a guess on how long it would take an intruder to get the correct sequence, you just need basic math. There are 6 total digits in the passcode, 5 of which are consistent between both the locking and unlocking sequences (06154), but the final digit has 2 options. The possibilities are 1 (for unlocking) and 4 (for locking). Since the intruder would not want to find the locking sequence, we can remove that possibility from our equation. Each digit can be a number between 0 and 9, or 10 possible numbers. Therefore, there are a total of 10^6 total possible combinations. Assuming that it takes only 1 second to go through each combination (physicially impossible without any tools/software at your disposal), it could take 1,000,000 seconds, or 11.57 days.


