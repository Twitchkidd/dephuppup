# Itemized Requirements

Starting with the user:

"The app needs ..."

1. 'Sign Up' and 'Log In' buttons on the home page

2. Account page/tab in the dashboard

3. Should see account email and be able to change, but warn about the email used for logging in not changing

4. Able to delete account

5. Sign up should lead to the screen(s) for profile creation, and semi-completeness should be handled, like no really we need that info, refreshing the browser needs to not load in the dashboard without it or something

6. User should be able to input full name, edit later, maybe keep a list though in case the runner wants to remember who it was whose name is now vulgar. Important to keep the edit feature though.

7. Inform user if they have multiple dogs they'll be able to tap add dog later

8. User should be able to input dog's name, bio (hint at age,) and photo

9. Profile page

10. Completing dog profile should create a list of length 1 with a card for the dog, and buttons for add dog and done. Tapping the dog card should go back to editing the dog's info.

11. Users should be able to add, edit, or delete (aww) dogs

12. Completing that should land them in runner select screen land, which will have a temporary screen for it being just me, and the normal one, handling the out of range error in both

13. Runners page with confirmed runners at the top and then by closest

14. Runner pages with info and a schedule meet and greet button, and a CCC input

15. Meet and greet button pops modal with a time picker

16. Runs page where pending meet and greets gp, then later scheduled runs

17. Edit and delete buttons for pending meet and greets

18. Gets  notification when m/g approaching

19. Notification on m + g success/fail

20. Runs page start screen/no upcoming runs state - add run link (button)

21. Runs page add run button

22. History component, expands

23. Summary widgets

24. Add run button/link pops modal

25. Add run modal inputs for time, individual/multiple/all dogs, distance targets, mark as reoccurring, together or seperate, notes

26. Ability to add more runs

27. Show estimated price

28. Notification for run accepted

29. Pending and acceped and rejected and current runs UI representation

30. Notification of run rejected and reason

31. Edit and cancel buttons on run

32. Cancel confirm dialog

33. Edit run flow

34. Notification for edit accept/rej

35. Notification for runner cancelled

36. Notification for runner en route, should link to run page

37. Run page w/ info, link to GPS

38. Notification for the runs are done, which should link to the run page

39. A runs page. If a run is one run, it is its own runs page

40. Edit/cancel buttons on run pages too, if haven't happened yet

41. Ideally, users would enter their card in and on Thursdays, if there was a balance, it'd try and charge it, so the Fridays could be resolution day, but probably how it will happen first is either the user goes to the billing icon -> page and clicks throuugh to the Stripe widget to pay (or pay + load, wink wink!) or are prompted on the next Thursday after accruing a balance

42. A billing icon, with a visual if something has gone awry

43. In the account page, a link to the billing page

44. A billing page with:

45. Current balance/credit

46. Expandable payments/credits history

47. Almost like toasts, but not, but like temporary cards for discounts having been applied that can be dismissed or will disappear

48. And and input for discount codes

49. An etc page with a feedback section and a:

50. Share button!

51. A feedback screen that can be popped from a variety of places, when everything else is there, pop in buttons at the right touch points

And then for the runner:

52. A 'tap for more' if interested in being a runner on the laning page that pops a tooltip explaining to sign up and hit the button

53. Right at ... oh, I guess we start with name, then there needs to be a button for signing up to be a runner leading to a:

54. Screen for signing up to be a runner with info and a text area. Pop a confirm

55. A pending screen with a code entry input or 'sorry nope'

56. A place in the FAQ for what if I want to become a runner?

57. Inputting the code should switch runner over to congrats/profile

58. Profile creation including name, email, bio, photo, address, phone number, and availability, including the ability to mark off blocks as busy

59. Notification and email on meet and greet request

60. Meet and greet requests should show as pending blocks in the schedule

61. Meet and greet confirmation tooltip (oh, there's actually a bunch of info, modal,) on schedule, navigation and pop from email or notification, pop from tap

62. Schedule. List and calendar views would make sense. Page/tab?

63. Reject button should open confirm with req. text area

64. Accept button w/ req text area ... placeholder/default though, should end runner back in schedule with the meet and greet now in a confirmed state

65. Meet and greets should have a 'run page' except there won't be a miles/dog, and the running part might not even happen, but the runner should still see the names, address, number, email, and have a button for sharing location, and handling possible run data, but also have a button for End should pop a confirm

66. Confirm from meet and greet end should ask whether it went well, and if 'no,' then maybe a list of options, from 'just wasn't going to work out,' which should still prompt a text area, to 'aggressive dog' which would immediately flag the user and notify the admin, who would drop everything to call and see if they were okay

67. If 'yes,' it should say 'yay!' and then plop them in their clients list

68. A clients list!

69. Client cards in the clients list should be tappable and go to client pages

70. Client pages should have basic info, relevant info like upcoming runs, maybe total miles ran, a notes text area (no treats or whatever) and a dogs list

71. Dog cards on the dogs list should be tappablle and go to dog pages w/ stats and cute pics

72. It might not be immediately, like, crucial, but all users should have a way to see many cute puppy pictures at any time. Just because.

73. Next to the clients list should be the generate CCC buttton that pops open a tooltip with the code selected and instructions to copy and *then* close, and myabe disable the close button for a few seconds

74. A CCC being used should generate a notification

75. Client page needs a billing widget / summary, when tapped goes to billing page ->

76. Notification email for run requests, appear as pending blocks, and tapping in goes to schedule -> run confirm

77. Unconfirmed appointments should pin a red badge to the schedule tab

78. The run confirm screen should have the info, any relevant info like nearby appointments, and accept and reject buttons

79. Reject should pop the confirm w/ required text area

80. Oh, how about Runners scheduling runs, like if Kason at the park was like, oh, could you run them @ 2:30, thx

81. Accept should pop a toast or something and then the run should appear confirmed on the schule and be on the list

82. Run pages, once confirmed, should have a cancel button with required text field

83. Run pages should have a Start button that then pops a modal that prompts for the GPS link and message text and ok/nvm buttons

84. When a run is started, reurn runner to run screen, make it shiny, and now there's a finish button

85. Finish goes to denoument screen

86. Denoument page should have an input for a link and numerical picker for miles for each run in the set of runs, and confirm and go back buttons

87. Oh, and the text area for the message

88. And GPS panic buttons that reduce to the minimum rate

89. Confirm should pop a summary w/ another confirm, showing amount about to be billed. Are you sure, lol

90. Confirm -> Confirm should toast, pop over to Runs tab

91. A Runs tab/page

92. Discounts

93. Feedback

94. Getting paid

And then for the admin:

95. Request comes in, admin gets notification and email, runner added to runners list

96. Runner pages with info, accept/reject buttons

97. Everything else in 'expanded upon requirements', admin section
