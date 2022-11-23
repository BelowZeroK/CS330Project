# CS 330 Coding Project - A Security Device
Damien Karpen's (A20506154) super awesome CS 330 coding project. This project was extremely tedious for me because I am not an avid coder like most of the class is and my coding skills are extremely lacking. Because my coding skills are lacking, I required assistance from others to be able to complete this project. I was/am very annoyed how this project was sprung up at the request of a single student and that it is worth 10% of my grade.

Where the program was created/tested:

+ The program was created using Visual Studios and tested inside of it as well. The completed program was also tested using the web browser. The languages used were JavaScript and HTML.

What the program does:

+ The program will generate random numbers in an attempt to find the correct locking or unlocking sequence. In this case, the unlocking sequence is 061541, and the locking sequence is 061544. If either sequence is found, the program will say "unlocked" or "locked" depending on which sequence was found.

Below is the FSM used to create this program. I highly doubt that the FSM is as efficient as it can be, even with the overlap between states (which  realistically is not secure as you want the intruder to be forced back to the beginning to waste their time).

<img width="1236" alt="image" src="https://user-images.githubusercontent.com/118793746/203412630-47bc9913-25c4-4b29-abb1-65b254ed9929.png">

How to build and run the executable:

  1. Clone the repository to the computer.
  2. Double click the HTML file. This should open up any browser that already on the computer and run the code. Sometimes the program will run perfectly when launching it from Windows Powershell, other times it won't. I have no clue what causes this nor do I know how to fix it. I just recommend going through the file explorer as it consistently works through that. It's about a 50/50 of it working or not working through Powershell
  3. Once the program has started, a pop-up should open with a randomly generated number that will include the 5 digit sequence and a random number after it. This is to prove that the code does indeed work without requiring massive amounts of time.
  4. Press enter until the pop-up says that it locked or unlocked, or if it could not find the proper sequence for either, it will close after going through all the digits. Pressing enter cycles through a single digit.
  5. If the program automatically closes, just refresh the page to have a new number generated and continue through it like in step 4.

Generating unit test coverage:

+ I do not have any unit test coverage as I did not know how to do it.

Misc. information:

+ In order to create a guess on how long it would take an intruder to get the correct sequence, you just need basic math. There are 6 total digits in the passcode, 5 of which are consistent between both the locking and unlocking sequences (06154), but the final digit has 2 options. The possibilities are 1 (for unlocking) and 4 (for locking). Since the intruder would not want to find the locking sequence, we can remove that possibility from our equation. Each digit can be a number between 0 and 9, or 10 possible numbers. Therefore, there are a total of 10^6 total possible combinations. Assuming that it takes only 1 second to go through each combination (physicially impossible without any tools/software at your disposal), it could take 1,000,000 seconds, or 11.57 days.

+ To find how long it would actually take for the program to get the correct sequence to unlock the device I kept refreshing the page, which reruns the program from the beginning until I saw the correct sequence of numbers. Granted every time the program is run, there is a guaranteed chance of the 5 primary digits being in the code generated, so this does reduce the number of tries it takes to get the correct sequence, but this does give a good idea of how many tries it will take.

  + On average, it would take roughly 16 tries, or 368 digits, to get the correct sequence and this is with the guaranteed chance of the primary sequence being in the generated number.
  + The minimum number of tries it took was 8 tries, or 184 digits.
  + The maximum number of tries it took was 26 tries, or 598 digits. 
