# Purpose

It's main goal is to send emails build with MJML and converted into HTML to addresses of different email clients so that these emails can be tested. It accomplishes that by using an .MJML file and all its file dependencies, parsing them and preparing them to be served locally, in order for the email to be able to get the images and render correctly.

Often, emails will break when viewed with most Outlook clients. Gmail also has its quirks. Basically, the idea is to send an email you've been working with to as many addresses as possible.

## mailHTML.js

This is where mailHTML comes in. It will ask you for which email you want to send and to what address. The email has to be stored in `./build` and in `.html` format.

## parseMail.js

Emails are static html pages, often with lots of images in them. When building these emails, we use local paths for all images. However, if the paths are left as is, the email will break when you open them. They must be hosted and all img src attributes have to be changed to the correct hosted address.

To make this work quick, parseMail will automagically change all local paths to a localhost path, like `./img/imagename.png` to `http://localhost:port/images/emailname/imagename.png`

## parseMJML.js

After preparing your img tags to point to the right path with parseMail, it's time to convert the MJML file to HTML, so it can be read by your favorit email client.

## serveStatic.js

For the email to work properly when you open them in your client of preference, the images have to be hosted and the server must be online.

This module will do just that. It'll serve the `index.html` file that will be created by `parseHTML.js`. This html file will hold all the images the email needs to work.

## parseHTML.js

As said above, for the local website to work properly, it must point to an `index.html` with all the img tags and all the images the email use.

This script will build this html file and save at `./build`.

## listImages.js

This module supports parseMail and parseHTML by reading all images saved in `./public/images/projectname/` and returning it as either an array of image names or as a string of img elements with the appropriate src attribute.

## mailer.js

This module brings all of the app's functions together and runs them with parameters supplied by the user.

# Required file struture

MJML, HTML and images must be stored at the correct places for Mailer to work correctly. If after cloning this repository you don't see any of these apps, *create them*.

mailer/\
├─ build/\
│  ├─ project1.html\
│  ├─ project2.html\
├─ node_modules/\
├─ public/\
│  ├─ images/\
│  │  ├─ project1/\
│  │  │  ├─ img1.png\
│  │  │  ├─ img2.png\
│  │  ├─ project2/\
│  │  │  ├─ img3.png\
│  │  │  ├─ img4.png\
│  ├─ index.html\
├─ src/\
│  ├─ mailer.js\
│  ├─ getPath.js\
│  ├─ parseMJML.js\
│  ├─ listImages.js\
│  ├─ mailHTML.js\
│  ├─ parseHTML.js\
│  ├─ parseMail.js\
│  ├─ serveStatic.js\
├─ template/\
│  ├─ project1.mjml\
│  ├─ project2.mjml\
├─ .env\
├─ .gitignore\
├─ package-lock.json\
├─ package.json\
├─ README.md \

# Instructions

Grab the MJML file and save it in the appropriate folder like `root/template/NAME.mjml`. Then grab all the images needed for it, create a folder inside `root/public/images/` with the same name as the `.mjml` file like `root/public/images/NAME/allimagefiles.png`

Create a .env file on the root folder and insert the lines `GUSER=youremailaddress.com` and `GPASS=yourpassword`

Run `npm run mailer`, answer the prompts, and voilá.
