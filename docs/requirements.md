# huppup.app - Requirements

Broadly speaking, a user should be able to:

- Sign up, and account management
- Create and edit their profile
- Select a runner
- Schedule a meet and greet or enter Current Customer Code (CCC)
- Schedule further runs
- Get data on runs
- See runs data
- Pay for runs
- Share the app
- Complain
- See discounts!

... and a runner should be able to:

- Sign up and request verification
- Enter verification code
- Create and edit their profile, including availability
- Get inbound meet and greet requests
- Upgrade clients and generate CCCs
- See client profiles
- See and approve or deny run requests
- Enter run data
- See run data (current run to distance approval and bill or modify)
- See runs data
- Give discounts
- Complain
- Get paid!

... and the admin should be able to:

- Verify runners
- Freeze or ban runners
- See all data
- Unlock or revoke ability to generate CCCs
- Get complaints
- Get paid!

## Exanding upon that:

### HupPup: Dog Running

<!-- Humans, dogs,
training and tech,
for a next level
pet care experience! -->

<!-- Humans and dogs, together, healthy and happy. -->

> Humans and dogs, together, happier, healthier, HupPup!

### Requirements

#### Users

##### Sign up, and account management

- Landing page with sign up/in buttons
- Auth0 page
- An account page where users can see and edit their account email, though sign-in email would remain the same, and be able to delete their accounts

##### Create/edit profile

- Inputs for name, number (or email only), address, dogs names, bios, and a profile page (tab?) (Is a page-aware dashboard layout how to handle tabs?) for editing and adding dogs (aww, and deleting!)

##### Select runner

- Lists runners by closest, which should have some explanation text and placeholders if it’s in range, other if out
- Schedule meet and greet button and code input on card

##### Schedule meet and greet

- Display input for available days in next three weeks, then available times, and a submit button
- Then primary display is the status of the meet and greet, and edit and delete buttons leading to the picker screen again

##### Schedule further runs

- When confirmed, the main screen should be runs, scheduled runs, an add run button, and runs history, and the two data ones should be like widgets that expand or link to pages.
- The add run page should be similar to the schedule meet and greet page, with the addition of adding individual, multiple, or all dogs, together or separate, target miles, notes, and being able to add more or make reoccurring, and edit runs in ‘cart’ ... ooo, and changing mileage/adding dogs should update the price

##### Get run data

- Should receive notification when runs accepted, the runner gets there, and when runs are completed. Implies notifications bell/feed/system
- The page for a run (running set, if multiple) should have its info, status, and the links to the gps if in progress, the links to the maps if completed, and edit/cancel buttons if it hasn’t happened yet

##### Pay for runs

- After the meet and greet, and then after scheduling a run, the user should pass to a billing page, slash Stripe widget, and if that fails, pin a red badge on the billing icon
- The billing icon should pop open the billing page like another tab, and in the account page/tab there should be a little ‘looking for billing?’ link
- The billing page/tab should have payments history, maybe like a last 3 and expand, and current balance/credit, and maybe here’s where discounts can go, so seeing any discounts, a place to enter a discount codes
- Also, how to change card? Need to research services and come back to that part of the design

##### Share the app

- Probably have an eye out for positive, feel-good moments and pause points, and then have a dedicated place for a share button, maybe with feedback?

##### Complain

- Oop, there’s feedback. Also during interactions, there should be buttons to invoke moderation, be it with price, or the data coming back, or on a runner’s page, if someone is going to their page, reporting them might be a reason, so don’t make it overwhelming, but do make it findable.

##### See discounts!

- See billing!

#### Runners

##### Sign up and request verification

- Early in the signup process, there should be a button to switch paths and submit a form or something, or at this point just suggest emailing admin@huppup.app, and then again in the landing and somewhere on the dash … FAQ?

##### Enter verification code

- Once their account is flagged potential runner, they should be sent to whatever screen has the instructions on what to do, and an input box to switch their account over. It could be done with me just flipping a switch, but I like this way

##### Create/edit profile plus availability

- Then they can create their profile, (or a le sorry page) and hopefully we can autofill name and email address, then physical address, picture, bio, and availability, and for this one we’ll need a range of times, and a way to mark blocks as generally unavailable.

##### Get meet and greet requests

- So the user requests meet and greet, and the runner gets a notification and email, and in their schedule it should show it as a possible block, and tapping on anything should bring them to a confirm/reject screen with more information about the user and any message, and maybe possible warnings if there are potential conflicts, and if reject is hit there’s got to be a required text area that pops up for reason and recommendation for further action

##### Upgrade user and generate CCC

- Upon a successful ... okay, well upon an unsuccessful meet and greet, I guess we have to do something there, like the user's account has to be flagged and some sort of, 'whoops, not allowed on HupPup' screen displayed, and the runner needs a button for it that pops open a confirm modal with a required text area.
- Upon a successful meet and greet, though, the runner should have a button to flag that it went well and the user can make further appointments, and the user added to the runner's clients list.
- Maybe on the clients list page/tab, there could be the place for a generate CCC button, and then when it gets used, the client goes on the clients list and can make appointments with HupPup

##### See client profiles

- Already mentioned the clients list, each client should have a page with their info and relevent info to the runner, like upcoming appointments, maybe total miles ran.

##### See and accept or reject run requests

- So a request for a run comes in, the runner should get a notification and email, and it should be visually obvious in the dashboard, a red badge on the schedule tab maybe. Then either by going to the schedule tab and tapping the pending block, or by tapping through in the notification or email, you're either on or brought to the schedule tab/page and a modal is popped with the info and accept/reject buttons. Accept should show some sort of confirmation message, and reject should pop open a required text area for a message to send to the client. Thinking ahead, these should be encrypted and then saved, so if we needed to see if someone actually said something we could, but it wouldn't be just laying around and visible for snooping.

##### Enter run data

- When a runner gets near, they should start sharing their location with Google Maps, and then copy that link and let's see, in the app, there will be a runs list, and maybe you can have it expand and just send in summaries of anything further than two months out so we aren't sending boatloads of data out, but so at the top should be the run that's closest to that moment, and tapping the run brings you to the run's page, where the runner can see the info and start/cancel buttons, and the cancel one should again bring up a modal with a mandatory text area and a button to send it out, I guess you don't need a 'cancel' button there, it'd be confusing since the action is cancelling, so maybe just disabled button and an x on the top of the modal or tap outside to close ... anyway so if they tap start, that brings up the form for inputting the Google Maps link and maybe a place to edit a default en route message, and then sending that in should toggle the run to current, notify the user, and bring the runner back to the run page, which now is shiny or something, and should have a finish button, so the info should be in front of them if anything happens and they need to call the client, please let nothing happen, and like, reminder of the dog's name, the address, and target miles. It's up to the runner to do their best to hit the target and not go over too much. All goes well, we get back, treats are had, water bowls are checked and filled if need be, and Strava has recorded the run, and the runner copies out the share of the run ... there's got to be a smarter way, though, yea? ... for the moment they copy out the share of the run and write a message to go along with it, and then confirm/go back buttons ... possibly here is the panic button for Strava messing up the GPS data, if it looks obviously off it's on the runner to discount the client down to the minimum rate, which doesn't seem fair if I'm thinking in terms of the gig worker, so maybe there could be some sort of appeal system ... and this has been a lot, but it's where the amount of money to change hands is decided, so it's worth the effort.

##### See run data

- See previous paragraph

##### See runs data

- See paragraph on entering run data

##### Give discounts

- So we talked about the 'GPS whoopsie' discount, you should be able to just discount someone in dollars or miles though, so that would be done from the client's page. For the moment, the clients list can be just alphabetical, we'll get to search when we get there. That should be a button on the client's page though, give discount, and then it should pop a modal with, ooo, segmented control or some sort of toggle for miles/dollars, and then inputs and confirm/cancel buttons ... how to display next to a client's balance? Well if there's balance and it's a money discount, that should apply to it, and extra discount should appear as a credit, and if it's miles ... how about it gets converted based on either the price of the average mile for the client's dogs or the base rate if they haven't run yet, and applied that way. Discounts shouldn't be able to be revoked, but any credit on the account should be lost if the account needs to be banned for some reason.

##### Complain

- And about that! Along with there being a flag button on a client's page, there should be a feedback tab/page just like for users.

##### Get paid!

- Real simple with just me, hopefully setting up Stripe goes okay. Hopefully this works. Please let this work. We need to make this work. We're going to make this work. Let's see how we get this to work. Thank you for working, future feature, and successful business!

#### Admin

##### Verify runners

- So a request comes in, admin gets notification, email, and either walks and talks go well or they don't, and then there should be a list of runners for the admin, and unconfirmed ones at the top, and there will be two buttons, one to reject, and it should, again, bring up a required text area for an explanation to keep on record, and then another to accept the runner into the HupPup fold, which will prompt to create a verification code for them, which could be a nickname or an opportunity for a little nudge in the ribs. The status will be pending until it's entered.

##### Freeze or ban runners

- If a complain comes in, the admin should be able to click to the runner's page and click a freeze account button, which should stop them from being able to see anything when logged in, and somehow appointments have to be cancelled and all sorts of stuff, but right now it's JUST ME, so we're going to just move on.

##### See all data

- Yesss, the daaata!

##### Unlock/lock ability to generate CCCs

- Another permission, again, just me right now, build it into the model though.

##### Get complaints

- Notifications and email if either a client or runner complains!

##### Get paid!

- YYYEEEAAAAAHH!!!!!1one!

## Glossary

- CCC: Current Customer Code, for expediting existing customers through the meet and greet process.
