# American Diner UK

# Overview
American Diner UK is a new restaurant establishment aiming to bring the authentic American dining experience to the UK. The diner seeks to create a vibrant, welcoming, and nostalgic atmosphere reminiscent of classic American diners. To achieve this, American Diner UK requires a static website that will serve as its online presence, providing essential information to customers and facilitating reservations.

-----------------------------------
# Objectives
Showcase the Diner Experience: The website should convey the unique atmosphere and offerings of American Diner UK, attracting customers to visit the diner.

User-Friendly Navigation: Ensure the website is easy to navigate, allowing visitors to quickly find information about the diner, contact details, and make reservations.

Responsive Design: The website should be responsive, providing an optimal viewing experience across various devices, including desktops, tablets, and smartphones.

-----------------------------------
# Website Structure
# 1. Home Page
Header: Featuring the American Diner UK logo and navigation menu.

Hero Section: A high-quality image or slideshow showcasing the diner's interior, dishes, and ambiance.

Welcome Message: A brief introduction to American Diner UK, highlighting the unique dining experience and the type of cuisine offered.

Footer: Including brief copyright notice.

# 2. Contact Page
Header: Consistent with the Home page.

Contact Information: Display the diner's address, phone number, and email address.

Google Maps Embed: An interactive map showing the diner's location.

Footer: Consistent with the Home page.

# 3. Reservation Page
Header: Consistent with the Home page.

Reservation Form: A form for customers to book a table, including fields for name, contact information, date, time, and number of guests.

Footer: Consistent with the Home page.

-----------------------------------

# Design Requirements

Color Scheme: Use a color palette that reflects the classic American diner aesthetic, such as reds, whites, and blues.

Typography: Select fonts that are easy to read and evoke a diner feel, such as bold, retro-style fonts for headings and clean, modern fonts for body text.

Imagery: Utilize high-quality images that showcase the diner's interior, food, and overall atmosphere.

Accessibility: Ensure the website meets accessibility standards, providing a good experience for all users, including those with disabilities.

-----------------------------------

# Technical Requirements

Static Website: The site should be built using HTML, CSS, and JavaScript, without the need for a backend server or database.

Responsive Design: Use responsive web design techniques to ensure the website looks and functions well on all devices.

SEO: Implement basic search engine optimization (SEO) practices to help the website rank well in search engine results.

-----------------------------------

# Deliverables
Fully functional static website with Home, Contact, and Reservation pages.

Responsive design ensuring compatibility across various devices and screen sizes.

Source files and documentation for future maintenance and updates.

## Features User Experience
#### How I intended and how it turned out

__Index / Homepage__

![Indexpage as imagined](<Indexpage image.png>) 

![The Index-page on small screen](The_Indexpage_on_small_screen.png)

On the index-page I wanted the User to get some basic photographic tips. I wrote all of the text myself. I also added a link to wikipedia explaining the rule of thirds. Hopefully this will improve the quality of photos for the User, as well as ignite a spark of curiosity regaring the wide world of photography.

__Gallery page__

![Gallerypage as imagined](<Gallerypage image.png>) 

![The Gallery Page on a medium sized screen](The_Gallery_page_Medium_size_screen.png)

On the gallery page I added some of my own photos as examples for the User to explain more in detail how the photos were taken, thus giving the User a larger understanding for and some more tips on how to take good pictures of their pets.

__Contact page__

![IContactpage as imagined](<Contactpage image.png>)

![Subscriptions-form on contact page](Subscribe_to_newsmail_and_contact.png)

On the contact page, the User finds my email and my phonenumber.
They may also subscribe to a weekly email with commersial material.
As the User surely have further questions and a newborn passion for photography, they will be eager to recieve emails with relevant links.
I also assure them their personal data is safe with me.



### Existing Features

- __Navigation Bar__

![navbar](navigation.png)

- Featured on all three pages, the full responsive navigation bar includes links to the Home page, Gallery and Contact page and is identical in each page to allow for easy navigation.

- When the screen size is, and is smaller than 768px the navbar turns into an bar-icon to save space in the header.

- This section will allow the user to easily navigate from page to page across all devices without having to revert back to the previous page via the "back" button.

## Testing 

![menu bar missing and three columns of photos](<The navigation menu is not showing.png>)

I have used Dev-tools in Google Chrome to check how the pages respond to diffrent sizes.
For example I have done a lot of testing to get the gallery-page to work good. 
I also wanted the navigation bar to become an burger-menu for the smaller screen-sizes.
Here we see that the buger nav-toggle is missing, We also see there being three columns of photos, at these smaller sizes I want them to be only two, and on 768px and smaller I want only one column.

I was finally able to solve this by changeing the order of the media-querries from biggest to smallest screen-size within the stylesheet.

![Responsive on all browsers tested](responsive_on_firefox_oprah_edge_chrome.png)
The Webpage is responsive on all web-browsers i have tested it in, even the subscription-form on the contact page is working properly. Microsoft Edge, Firefox, Oprah and Chrome. 

![In this image we see the form working well in all browsers.](<Skärmbild 2024-03-15 194856.png>)

### Functional Testing

|Function|On platform|Works good| Fails|
|--------|-----------|----------|------|
|Logotype to home|browsers *| Yes |      |
|nav Home|browsers * |Yes|      |
|nav Gallery| browsers * |Yes |      |
|nav Contact |browsers *|Yes|      |
|Wiki-link in tips on index |  browsers *|Yes |      |
|<h4>The footer social-media links</h4>|
|X|browsers *|Yes||
|Instagram|browsers *|Yes||
|Facebook|browsers *|Yes||
Browsers *: Google Chrome, Oprah, Firefox, Microsoft Edge.








   
