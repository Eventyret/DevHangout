# Backend Layout

### Authentication
* User Registration
* User Login
* JWT Contains userID + Username

### User Profile
* UserID (Not null - PrimaryID)
* First Name
* Last Name
* Avatar *(Optional)* - Fallback to Gravatar
* Email *(Required)*
* Location (Object) *(Optional)*
	* Country
	* CountryCode
* Website *(Optional)*
* Company  *(Optional)*
* Title *(Optional)*
* Supporter *(Boolean)* - Depends on [Donate](#donate)
* Background *(For Donators Only)* 
* Bio *(Optional)*
* Skills (Array of Object) Pushed from its own Table
  * SkillsID
  * UserID -> SkillsID
  * InnerJoin -> Skills -> Skills Name
  ```sql
  SELECT column_name(s)
  FROM table1
  INNER JOIN table2 ON table1.column_name = table2.column_name;
  ```
  * UserSkills Table
  	* UserD
	* SkillsID


### Skills
* All Devicons
* NGFor to display them
* Limited to 5
* Typeahead
* Pushed to user table from Skills table or linked

### Donate
* User can donate with Stripe
* Token is sent from Stripe to Angular
* Angular -> Django ?
* Django -> Stripe -> Handle Token -> Django -> Register User -> Angular -> Display Message
* Angular -> Stripe -> Angular -> Charge Token -> Stripe -> Angular -> Django -> Display Message to user on user update

### Comments & Posts
* User can create a post
* Other users can comment on that post
* Same user can comment on it too
* Users can like and dislike posts

Database
```sql
Posts - Table:
ID - primary key not null 
content - Text - not null 
date -  DateTimeField - not null
UserID - Foreign Key not null

Comments - Table:
ID - primary key not null
comment - Text - not null
date -  DateTimeField - not null
PostID - Foreign key not null
UserID - Foreign Key not null

LikesAndDislikes  - Table:
UserID not null
PostID 
CommentID
isLike - Binary - not null

User Table:
 UserID (Not null - PrimaryID)
* First Name
* Last Name
* Avatar - this will point to a image file 
* Email *(Required)*
* Location 
* Website *(Optional)*
* Company  *(Optional)*
* Title *(Optional)*
* Background image *(For Donators Only)* 
* Bio *(Optional)*
twitterURL
FBURL
LinkedInURL
uTubeURL
instURL
gitHubURL

Education Table:
ID - primary key 
UserID
school
qualification
fieldOdfStudy
dateFrom - 
dateTo  (can be null for present)
description 

Job - Table:
ID - primary key
UserID
jobTitle
Company
Location
dateFrom
dateTo (can be null for present)
description

Donation Table:
UserID
date
amount

Skills - Table:
id - unique primary key
nameOfSkill - var char 

UserToSkills - Table
UserID
SkillID
```
