0x00. Advanced HTML

Learning Objectives
-------------------

At the end of this project, you are expected to be able to [explain to anyone](https://intranet.hbtn.io/rltoken/XbOWWw9pdcefHtps9fwGUA "explain to anyone"), **without the help of Google**:

-   Which guidelines to follow for HTML
-   How to create the skeleton of an HTML5 page
-   How to use semantic HTML tags to structure a web page
-   Which use cases to use `div` vs `span`
-   The semantic value's of `header`, `main`, `footer`, `article`, `nav`, `section`, `aside`
-   How to use headings (and why it's important to follow the hierarchical order)
-   How to make lists in HTML
-   The differences between medias (SVG, GIF, PNG, JPG)
-   How to structure data in a table
-   How to integrate a video in a webpage
-   How to integrate an audio file in a webpage
-   How to embed external content
-   How to correctly structure an HTML page

Requirements
------------

-   A `README.md` file at the root of the folder of the project is mandatory
-   Your code should be W3C compliant and validate with [W3C-Validator](https://intranet.hbtn.io/rltoken/Iz2PnqOHp2Au30Jb6c-E0w "W3C-Validator")
-   `Techium` will be the name of the company we will use across our webpages.

Sitemap of the project
----------------------

![](https://holbertonintranet.s3.amazonaws.com/uploads/medias/2020/4/4dec2ba9d84a0a55355b1c1e2de4c57854a2d35a.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOUWMNL5ANN%2F20200714%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20200714T011308Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=9891d0564015c16cce098929f82a7ca190240536bbc725acf9dbcbbccf80fd5b)

Wireframe of `Techium` project
------------------------------

![](https://holbertonintranet.s3.amazonaws.com/uploads/medias/2020/4/3e4f9e2b3cb73d1768229e086f5da35337be5c6c.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOUWMNL5ANN%2F20200714%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20200714T011308Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=f0675d76254c75e50982c6a9abddcc7687a2e6e6fac4b4d8859906a705708fb2)

* * * * *

Quiz questions
--------------

Show

* * * * *

Tasks
-----

 Done?\
Help

#### 0\. Create your first webpage mandatory

Create your first HTML file `0-index.html` with:

-   Add the doctype on the first line (without any comment)
-   After the doctype, open and close a `html` tag
-   Add the language tag, specify English for [ISO language code](https://intranet.hbtn.io/rltoken/wSRtPL3ylsFHKeDjg-o0mQ "ISO language code") and add the direction tag (ltr or rtl) on the `html` tag.
-   Open your file in your browser (the page should be blank)

**W3C won't pass - you can ignore it**

**Repo:**

-   GitHub repository: `holbertonschool-web_front_end`
-   Directory: `0x00-html_advanced`
-   File: `0-index.html`

 Done?\
Help

#### 1\. Structure your webpage mandatory

Copy the content of `0-index.html` into `1-index.html`

**Create the head and body sections**

-   inside the `html` tag, create the `head` and `body` tags (empty) in this order

**W3C won't pass - you can ignore it**

**Repo:**

-   GitHub repository: `holbertonschool-web_front_end`
-   Directory: `0x00-html_advanced`
-   File: `1-index.html`

 Done?\
Help

#### 2\. The head - meta charset, viewport, title, description, favicons mandatory

Copy the content of `1-index.html` into `2-index.html`

![](https://holbertonintranet.s3.amazonaws.com/uploads/medias/2019/11/2ba3a0d7878316de5aaa.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOUWMNL5ANN%2F20200714%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20200714T011308Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=ab5f1e3c2fb4f2c72dd2f6d46c57ba1c6e193459fca9393d1cf42604a756d837)

**Meta charset:**

-   add a `meta` tag inside the `head`:
    -   add the `charset` attribute with the value `utf-8`

**Viewport:**

-   add a `meta` tag inside the `head`:
    -   add an attribute `name` on the tag and specify that it is the meta `viewport`
    -   add the key `width` with the value `device-width`
    -   add the key `initial-scale` with the value `1.0`
    -   add the key `viewport-fit` with the value `cover`

**Title:**

-   add the `title` tag just after the meta viewport with value: `Homepage - Techium`

**Description:**

-   add a `meta` tag inside the `head` section
    -   add an attribute `name` on the tag and specify that is the meta `description`
    -   add another attribute called `content`
    -   add the following description: `Techium is a digital agency`

**Favicons:**

-   download the image above to use as a favicon
-   Use the tool at [https://realfavicongenerator.net/](https://intranet.hbtn.io/rltoken/0bI2iwsVRTS-tL4sYnpwhA "https://realfavicongenerator.net/") to generate all the favicon formats
-   take the `favicon.ico` and `favicon.png` and place these at the root of your project directory, so that it is siblings with your `[0-9]+-index.html` files.
-   inside the `head`, create 2 `link` tags with these 3 attributes: `rel`, `type`, and `href`.
    -   the first `link` tag:
        -   rel: `icon`
        -   type: `image/x-icon`
        -   href: `./favicon.ico`
    -   the second `link` tag:
        -   rel: `icon`
        -   type: `image/png`
        -   href: `./favicon.png`

**Repo:**

-   GitHub repository: `holbertonschool-web_front_end`
-   Directory: `0x00-html_advanced`
-   File: `2-index.html`

 Done?\
Help

#### 3\. Simple header, main, footer mandatory

Copy the content of `2-index.html` into `3-index.html`

**Header:**

-   create the `header` of your page between the open and close `body` tag
-   put the text `Header` inside the header

**Main:**

-   create the `main` tag after the `header` tag
    -   put the text `Main content` inside your `main` tags

**Footer:**

-   create the `footer` tag after the `main` tag
    -   put the text `Footer` inside the `footer` tags

**Repo:**

-   GitHub repository: `holbertonschool-web_front_end`
-   Directory: `0x00-html_advanced`
-   File: `3-index.html`

 Done?\
Help

#### 4\. Aside mandatory

Copy the contents of `3-index.html` into `article.html`

-   change the `<title>` to put: `Article - Techium`
-   inside the `main` tags
    -   after the text, create the `aside` tags with text `Aside`

**Repo:**

-   GitHub repository: `holbertonschool-web_front_end`
-   Directory: `0x00-html_advanced`
-   File: `article.html`

 Done?\
Help

#### 5\. Section mandatory

Copy the content of `3-index.html` into `5-index.html`

-   inside your `<main>` section
    -   remove the text in `main`, create these sections:
        1.  create first section and put the text `Hero section` inside
        2.  create second section and put the text `Services section` inside
        3.  create third section and put the text `Works section` inside
        4.  create fourth section and put the text `About section` inside
        5.  create fifth section and put the text `Latest news section` inside
        6.  create sixth section and put the text `Testimonials section` inside
        7.  create seventh section and put the text `Contact section` inside

**Does not need to pass W3C**

**Repo:**

-   GitHub repository: `holbertonschool-web_front_end`
-   Directory: `0x00-html_advanced`
-   File: `5-index.html`

 Done?\
Help

#### 6\. Work, News, Testimonial articles mandatory

Copy the content of `5-index.html` into `6-index.html`

**Work articles:**

-   inside the section `Works section`
    -   add 3 `article` tags
        -   inside each `article` write `Work #` where the hashtag will be the ordered number (1, 2, or 3)

**News articles:**

-   inside the section `Latest news section`
    -   add 3 `article` tags
        -   inside each `article` write `Article #` where the hashtag will be the ordered number (1, 2, or 3)

**Testimonial articles:**

-   inside the section `Testimonials section`
    -   add 3 `article` tags
        -   inside each `article` write `Testimonial #` where the hashtag will be the ordered number (1, 2, or 3)

**W3C won't pass - you can ignore it**

**Repo:**

-   GitHub repository: `holbertonschool-web_front_end`
-   Directory: `0x00-html_advanced`
-   File: `6-index.html`

 Done?\
Help

#### 7\. Navigation mandatory

Copy the content of `6-index.html` into `7-index.html`

-   remove the `Header` text inside the `<header>`
-   create the `nav` tag inside the `header` tag
    -   it should remain empty for now

**Does not need to pass W3C**

**Repo:**

-   GitHub repository: `holbertonschool-web_front_end`
-   Directory: `0x00-html_advanced`
-   File: `7-index.html`

 Done?\
Help

#### 8\. Level 1 headings mandatory

Copy the content of `7-index.html` into `8-index.html`

-   create the level 1 heading inside your `main` before your sections
    -   put text `Homepage` in your heading tag

**Does not need to pass W3C**

**Repo:**

-   GitHub repository: `holbertonschool-web_front_end`
-   Directory: `0x00-html_advanced`
-   File: `8-index.html`

 Done?\
Help

#### 9\. Level 2 headings mandatory

Copy the content of `8-index.html` into `9-index.html`

-   in the `section` tag with the the text `Hero section`, remove the text and create a level 2 heading with text `We help you build your brand!`
-   in the `section` tag with the the text `Services section`, remove the text and create a level 2 heading with text `Services`
-   in the `section` tag with the the text `Works section`, remove the text and create a level 2 heading with text `Works`
-   in the `section` tag with the the text `About section`, remove the text and create a level 2 heading with text `About Us`
-   in the `section` tag with the the text `Latest news section`, remove the text and create a level 2 heading with text `Latest news`
-   in the `section` tag with the the text `Testimonials section`, remove the text and create a level 2 heading with text `Testimonials`
-   in the `section` tag with the the text `Contact section`, remove the text and create a level 2 heading with text `Contact`

**W3C won't pass - you can ignore it**

**Repo:**

-   GitHub repository: `holbertonschool-web_front_end`
-   Directory: `0x00-html_advanced`
-   File: `9-index.html`

 Done?\
Help

#### 10\. Level 3 headings mandatory

Copy the content of `9-index.html` into `10-index.html`

**Services headings:**

-   Inside the section containing the `h2` heading `Services`, add these elements right after the `h2`:
    -   create a level 3 heading with text `Design & Concept`
    -   create a level 3 heading with text `Digital Strategy`
    -   create a level 3 heading with text `Content Strategy`
    -   create a level 3 heading with text `UX Design`
    -   create a level 3 heading with text `Web Development`
    -   create a level 3 heading with text `Social Media`

**Works headings:**

-   Inside the section containing the `h2` heading `Works`:
    -   in the first `article`, replace the text with a level 3 heading with text `Interior Design`
    -   in the second `article`, replace the text with a level 3 heading with text `Web Development`
    -   in the third `article`, replace the text with a level 3 heading with text `Personal Brand`

**About Us headings:**

-   Inside the section containing the `h2` heading `About Us`, after the `h2` heading, create these elements in this order:
    -   a level 3 heading with text `Who are we`
    -   a level 3 heading with text `Our culture`
    -   a level 3 heading with text `How we work`

**Latest news headings:**

-   Inside the section containing the `h2` heading `Latest news`:
    -   in the first `article` replace the text with a level 3 heading with text `Hoc loco tenere se Triarius non potuit.`
    -   in the second `article` replace the text with a level 3 heading with text `Ut alios omittam, hunc appello, quem ille unum secutus est.`
    -   in the third `article` replace the text with a level 3 heading with text `Bestiarum vero nullum iudicium puto.`

**W3C does not need to pass here**

**Repo:**

-   GitHub repository: `holbertonschool-web_front_end`
-   Directory: `0x00-html_advanced`
-   File: `10-index.html`

 Done?\
Help

#### 11\. styleguide mandatory

Copy the content of `3-index.html` into `11-styleguide.html`

-   change the title to `Styleguide - Techium`
-   remove the text from `header`, `main`, and `footer`
-   create a new `<section>` inside your `main` tag
    -   create a `header` in this `section`
        -   in the `header` add a level 2 heading with text `Headings`
    -   after the `header`:
        -   add a level 1 heading with text `Heading level 1`
        -   add a level 2 heading with text `Heading level 2`
        -   add a level 3 heading with text `Heading level 3`
        -   add a level 4 heading with text `Heading level 4`
        -   add a level 5 heading with text `Heading level 5`
        -   add a level 6 heading with text `Heading level 6`

**Repo:**

-   GitHub repository: `holbertonschool-web_front_end`
-   Directory: `0x00-html_advanced`
-   File: `11-styleguide.html`

 Done?\
Help

#### 12\. Paragraphs mandatory

Copy the content of `10-index.html` into `12-index.html`

**About Us paragraphs:**

-   in the `About Us` section
    -   after the first `h3` (who are we) create a paragraph with the text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, omnis expedita! Eum, praesentium cumque accusantium rem, sit quaerat est nisi ratione, deserunt ducimus quidem iste dicta quibusdam atque maxime cum!`
    -   after the second `h3` create a paragraph with the text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, omnis expedita! Eum, praesentium cumque accusantium rem, sit quaerat est nisi ratione, deserunt ducimus quidem iste dicta quibusdam atque maxime cum!`
    -   after the third `h3` create a paragraph with the text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, omnis expedita! Eum, praesentium cumque accusantium rem, sit quaerat est nisi ratione, deserunt ducimus quidem iste dicta quibusdam atque maxime cum!`

**Latest news paragraphs:**

-   in the `Latest news` section
    -   in the first `article`
        -   create a paragraph with text `Career` before the heading
        -   create a paragraph with text `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id Sextilius factum negabat. Quo tandem modo? At eum nihili facit; Quae contraria sunt his, malane?` after the heading
    -   in the second `article`
        -   create a paragraph with text `Digital Life` before the heading
        -   create a paragraph with text `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tum mihi Piso: Quid ergo? Tum ille: Ain tandem? Non autem hoc: igitur ne illud quidem. Sed quod proximum fuit non vidit. Nos commodius agimus. An nisi populari fama?` after the heading
    -   in the third `article`
        -   create a paragraph with text `Social` before the heading
        -   create a paragraph with text `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non igitur bene. Quid enim est a Chrysippo praetermissum in Stoicis? Pugnant Stoici cum Peripateticis. Prioris generis est docilitas, memoria; Apparet statim, quae sint officia, quae actiones.` after the heading

**Contact paragraph:**

-   in the `Contact` section after the heading
    -   create a paragraph with the text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id Sextilius factum negabat. Quo tandem modo? At eum nihili facit; Quae contraria sunt his, malane?`

**Additional paragraphs:**

-   below the level 2 `Services` heading add a paragraph with text `We work with you`
-   below the level 2 `Works` heading add a paragraph with text `Take a look in our portfolio`
-   below the level 2 `About Us` heading add a paragraph with text `Everything about us`
-   below the level 2 `Testimonials` heading add a paragraph with text `We are more than a digital company`
-   below the level 2 `Contact` heading add a paragraph with text `We like to know new people`

**Does not need to pass W3C**

**Repo:**

-   GitHub repository: `holbertonschool-web_front_end`
-   Directory: `0x00-html_advanced`
-   File: `12-index.html`

 Done?\
Help

#### 13\. styleguide paragraphs mandatory

Copy the contents of `11-styleguide.html` into `13-styleguide.html`

-   After the existing section containing `Headings`, create a new `section` in `main`
    -   in this section create a `header`
        -   Inside the header, create a level 2 heading with text `Paragraph`
    -   after the `header` add a level 2 heading with text `Heading with a subtitle`
    -   after the level 2 heading, add a paragraph with text `This is my subtitle`
    -   after the last paragraph, add another paragraph with text: `Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit tempus accumsan.`

**Repo:**

-   GitHub repository: `holbertonschool-web_front_end`
-   Directory: `0x00-html_advanced`
-   File: `13-styleguide.html`

 Done?\
Help

#### 14\. Span mandatory

Copy the contents of `12-index.html` into `14-index.html`

In the very first `<header>`,

-   before the `nav`, create a `span` with the text `Techium`

**Does not need to pass W3C**

**Repo:**

-   GitHub repository: `holbertonschool-web_front_end`
-   Directory: `0x00-html_advanced`
-   File: `14-index.html`

 Done?\
Help

#### 15\. Div mandatory

Copy the contents of `14-index.html` into `15-index.html`

-   Wrap the contents of the `header` element with a `div`
-   Wrap the contents of all `section` elements with a `div`
-   Finally, wrap the contents of the `<footer>` tag with a `div`

**W3C does not need to pass**

**Repo:**

-   GitHub repository: `holbertonschool-web_front_end`
-   Directory: `0x00-html_advanced`
-   File: `15-index.html`

 Done?\
Help

#### 16\. Structure your sections mandatory

Copy the contents of `15-index.html` into `16-index.html`

-   in the `div` in the Services `section`
    -   create a `header` tag that wraps the `h2` and the `p`
    -   create a `div` sibling to the `header` that wraps the rest of the content
-   in the `div` in the Works `section`
    -   create a `header` tag that wraps the `h2` and the `p`
    -   create a `div` sibling to the `header` that wraps the rest of the content
-   in the `div` in the About Us `section`
    -   create a `header` tag that wraps the `h2` and the `p`
    -   create a `div` sibling to the `header` that wraps the rest of the content
-   in the `div` in the Latest news `section`
    -   create a `header` tag that wraps the `h2`
    -   create a `div` sibling to the `header` that wraps the rest of the content
-   in the `div` in the Testimonials `section`
    -   create a `header` tag that wraps the `h2` and the `p`
    -   create a `div` sibling to the `header` that wraps the rest of the content
-   in the `div` in the Contact `section`
    -   create a `header` tag that wraps the `h2` and the first `p`
    -   create a `div` sibling to the `header` that wraps the rest of the content

**W3C does not need to pass**

**Repo:**

-   GitHub repository: `holbertonschool-web_front_end`
-   Directory: `0x00-html_advanced`
-   File: `16-index.html`

 Done?\
Help

#### 17\. Comments mandatory

Copy the content of `16-index.html` into `17-index.html`

-   before the `header` add a line break and a comment saying `Header` to help with scanning your code
-   before the `main` add a line break and a comment saying `Main` to help with scanning your code
-   before the `footer` add a line break and a comment saying `Footer` to help with scanning your code
-   before the `Hero section` add a line break and a comment saying `Hero section`
-   before the `Services section` add a line break and a comment saying `Services section`
-   before the `Works section` add a line break and a comment saying `Works section`
-   before the `About Us section` add a line break and a comment saying `About Us section`
-   before the `Latest news section` add a line break and a comment saying `Latest news section`
-   before the `Testimonials section` add a line break and a comment saying `Testimonials section`
-   before the `Contact section` add a line break and a comment saying `Contact section`

**Does not need to pass W3C**

**Repo:**

-   GitHub repository: `holbertonschool-web_front_end`
-   Directory: `0x00-html_advanced`
-   File: `17-index.html`

 Done?\
Help

#### 18\. link your logo mandatory

Copy the content of `17-index.html` into `18-index.html`

-   in the `header`, wrap the `span` with a link that redirects to the page at the root of your folder (`/`)
-   wrap the link with a `div`

**W3C does not need to pass**

**Repo:**

-   GitHub repository: `holbertonschool-web_front_end`
-   Directory: `0x00-html_advanced`
-   File: `18-index.html`

 Done?\
Help

#### 19\. Create new pages mandatory

Copy the content of `18-index.html` into `about.html`, `latest_news.html` and `contact.html`

-   change the title of `about.html` to replace `Homepage` with `About`
-   change the title of `latest_news.html` to replace `Homepage` with `Latest news`
-   change the title of `contact.html` to replace `Homepage` with `Contact`

**Does not need to pass W3C**

**Repo:**

-   GitHub repository: `holbertonschool-web_front_end`
-   Directory: `0x00-html_advanced`
-   File: `about.html, latest_news.html, contact.html`

 Done?\
Help

#### 20\. Add links mandatory

Copy the content of `18-index.html` into `20-index.html`

-   in your `nav` tags
    -   create a link to `/` with the text `Home`
    -   create an anchor to `services` with the text `Services`
    -   create an anchor to `works` with the text `Works`
    -   create an anchor to `about` with the text `About`
    -   create an anchor to `latest_news` with the text `Latest news`
    -   create an anchor to `testimonials` with the text `Testimonials`
    -   create an anchor to `contact` with the text `Contact`

For now, the anchor links will not work. We will make them work in the CSS project.

**Does not need to pass W3C**

**Repo:**

-   GitHub repository: `holbertonschool-web_front_end`
-   Directory: `0x00-html_advanced`
-   File: `20-index.html`

 Done?\
Help

#### 21\. Add social media links mandatory

Copy the content of `20-index.html` into `21-index.html`

-   in the `div` in the `footer`
    -   remove any text you have
    -   create a link to `https://www.facebook.com/HolbertonSchool/` with the text `Facebook`
    -   create a link to `https://twitter.com/holbertonschool` with the text `Twitter`
    -   create a link to `https://www.instagram.com/holbertonschool/` with the text `Instagram`

**W3C won't pass - you can ignore it**

**Repo:**

-   GitHub repository: `holbertonschool-web_front_end`
-   Directory: `0x00-html_advanced`
-   File: `21-index.html`

 Done?\
Help

#### 22\. "Button" links mandatory

Copy the content of `21-index.html` into `22-index.html`

-   in the Hero `section`, after the heading
    -   create a link to `#` with the text `Get started`
-   in the About Us `section`, after the `div` containing the level 3 headings and paragraphs
    -   create a link to `about.html` with the text `Learn more about us`
-   in the Contact `section`, after the `div` containing the paragraph
    -   create a link to `contact.html` with text `Get in touch`

**Does not need to pass W3C**

**Repo:**

-   GitHub repository: `holbertonschool-web_front_end`
-   Directory: `0x00-html_advanced`
-   File: `22-index.html`

 Done?\
Help

#### 23\. Services, Works, Latest news links mandatory

Copy the content of `22-index.html` into `23-index.html`

-   in the Services `section`
    -   in each level 3 heading, create a link to `#` around the text already in the heading
-   in the Works `section`
    -   in each level 3 heading, create a link to `#` around the text already in the heading
-   in the Latest news `section`
    -   in each level 3 heading, create a link to `#` around the text already in the heading

**Does not need to pass W3C**

**Repo:**

-   GitHub repository: `holbertonschool-web_front_end`
-   Directory: `0x00-html_advanced`
-   File: `23-index.html`

 Done?\
Help

#### 24\. List the links mandatory

Copy the content of `23-index.html` into `24-index.html`

-   in the `nav`
    -   create an unordered list, put each anchor tag (Home, Services, Works, ...) as an individual list item
-   in the `div` in the `footer`
    -   create an unordered list and put each anchor tag (Facebook, Twitter, ...) as an individual list item

**W3C does not need to pass**

**Repo:**

-   GitHub repository: `holbertonschool-web_front_end`
-   Directory: `0x00-html_advanced`
-   File: `24-index.html`

 Done?\
Help

#### 25\. Secondary navigation menu mandatory

Copy the content of `24-index.html` into `25-index.html`

-   inside the `footer`, after the `div`
    -   create a new `div`
    -   in the new `div` create an unordered list with the following links:
        1.  link to `#` with text `Terms of Use`
        2.  link to `#` with text `Privacy Policy`
        3.  link to `#` with text `Cookie Policy`

**Repo:**

-   GitHub repository: `holbertonschool-web_front_end`
-   Directory: `0x00-html_advanced`
-   File: `25-index.html`

 Done?\
Help

#### 26\. Examples of lists for the styleguide mandatory

Copy the content of `13-styleguide.html` into `26-styleguide.html`

**Example of unordered list:**

-   inside `main` after Paragraph `section`, add :
    -   a new line and a comment with text `Lists`
    -   after, create a new `section` with inside:
        -   create a `header` with inside a level 2 heading with the text `Lists`
        -   after the new `header`, create a `div` with inside:
            -   a level 3 heading with text `Unordered`
                -   under it, add an unordered list with these items: `Dolor pulvinar etiam magna etiam.`, `Sagittis adipiscing lorem eleifend.`, `Felis enim feugiat dolore viverra.`

**Example of ordered list:**

-   after previous unordered list, in the same `div`
    -   add a level 3 heading with text `Ordered`
        -   add an ordered list with these items:
            1.  `Dolor pulvinar etiam magna etiam.`
            2.  `Sagittis adipiscing lorem eleifend.`
            3.  `Felis enim feugiat dolore viverra.`

**Example of definition list:**

-   after previous ordered list, in the same `div`
    -   add a heading level 3 with text `Definition`
    -   add a definition list with these items:
        1.  Term: `Definition List title`, Definition: `Definition text.`
        2.  Term: `Startup`, Definition: `A startup company or startup is a company or temporary organization designed to search for a repeatable and scalable business model.`
        3.  Term: `Water`, Definition: `A colorless, transparent, odorless liquid that forms the seas, lakes, rivers, and rain and is the basis of the fluids of living organisms.`

**Repo:**

-   GitHub repository: `holbertonschool-web_front_end`
-   Directory: `0x00-html_advanced`
-   File: `26-styleguide.html`

 Done?\
Help

#### 27\. Separate content mandatory

Copy the content of `25-index.html` into `27-index.html`

-   in the `footer` between the two `div`s:
    -   add a horizontal rule
    -   after the horizontal rule add a paragraph with text `© 2020 Techium, made with ♥ by students at Holberton School.`

**W3C does not need to pass.**

**Repo:**

-   GitHub repository: `holbertonschool-web_front_end`
-   Directory: `0x00-html_advanced`
-   File: `27-index.html`

 Done?\
Help

#### 28\. Horizontal rule example mandatory

Copy the content of `26-styleguide.html` into `28-styleguide.html`

-   in `main` after Lists `section`
    -   add a new line and a comment with the text `Horizontal rule`
    -   create a new `section`
        -   create a `header` and inside it add a level 2 heading with the text `Horizontal rule`
        -   after the `header` create a `div` and put a horizontal rule in it

**Repo:**

-   GitHub repository: `holbertonschool-web_front_end`
-   Directory: `0x00-html_advanced`
-   File: `28-styleguide.html`

 Done?\
Help

#### 29\. Client quotes mandatory

Copy the content of `27-index.html` into `29-index.html`

-   in the Testimonials `section`
    -   in the first `article`
        -   replace the text with a blockquote with text `I am completely blown away. Thanks to Techium, we've just launched our 5th website!` and cite author `Yuri Y.`
    -   in the second `article`
        -   replace the text with a blockquote with text `Thank you so much for your help. Techium company is awesome!` and cite author `Dorrie S.`
    -   in the third `article`
        -   replace the text with a blockquote with text `I love your system. Definitely worth the investment. I'd be lost without Techium company.` and cite author `Sven H.`

**W3C does not need to pass**

**Repo:**

-   GitHub repository: `holbertonschool-web_front_end`
-   Directory: `0x00-html_advanced`
-   File: `29-index.html`

 Done?\
Help

#### 30\. Examples of quotes mandatory

Copy the content of `28-styleguide.html` into `30-styleguide.html`

**Example of inline quote:**

-   inside `main` after Horizontal rule `section`
    -   add a new line and a comment with text `Blockquotes`
    -   create a new `section`
        -   in the `section` create a `header`, in the `header` create a level 2 heading with text `Blockquotes`
        -   after the `header`, create a `div`
            -   in the `div` add a level 3 heading with the text `Inline quote`
            -   add an inline quote with the text `Stay hungry. Stay foolish.`

**Example of blockquote:**

-   after the inline quote `div`, create another `div`
    -   in the new `div` add a level 3 heading with the text `Blockquote`
    -   add a multiline quote with the text `I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that's a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.` and cite `Kanye West, Musician`

**Repo:**

-   GitHub repository: `holbertonschool-web_front_end`
-   Directory: `0x00-html_advanced`
-   File: `30-styleguide.html`

 Done?\
Help

#### 31\. Address and latest news authors mandatory

Copy the content of `29-index.html` into `31-index.html`

-   in the `footer`
    -   right after open `footer` tag, put the following `address`: `234 Washington Street (line-break) Urbana, Illinois`
-   in the Latest news `section`
    -   in the first `article`, after the last paragraph, add the author name in small print: `By Kelly D.`
    -   in the second `article`, after the last paragraph, add the author name in small print: `By William A.`
    -   in the third `article`, after the last paragraph, add the author name in small print: `By Frances J.`

**W3C does not need to pass**

**Repo:**

-   GitHub repository: `holbertonschool-web_front_end`
-   Directory: `0x00-html_advanced`
-   File: `31-index.html`

 Done?\
Help

#### 32\. Typography section - using the correct tags mandatory

Using `30-styleguide.html`

-   inside `main` after the Blockquotes `section`

    -   add a new line and a comment with text `Typography`
    -   create a new `section`

        -   in the section create a `header` and inside it add a level 2 heading with the text `Typography`
        -   after the `header` create a `div`, inside the `div` add this text with the correct HTML tag: `320 Stewart Avenue, Unit 12 (line break) New York City NY 10001`, the city, state, and postal code should be on a separate line
        -   create another `div`, in the new `div` nest this code block using the `pre` HTML tag:

        ```
         <code>
             <h2>My title</h2>
             <p>Proin lacus turpis, feugiat sit amet sollicitudin non, volutpat in libero. Aenean hendrerit ultrices nulla ac lobortis. Vestibulum consectetur nibh vel ante rhoncus faucibus.</p>
         </code>

        ```

        -   create another `div`, in the new `div` add this paragraph of text with the correct HTML tag: `Curabitur sit amet turpis cursus massa mollis highlighted. Duis finibus leo massa, eget dapibus erat finibus sed. Aenean condimentum sapien magna, eleifend highlighted mi consequat ut. Cras nec quam sed sapien ultricies highlighted ut sed metus.` Each occurrence of the word `highlighted` should be highlighted.

**W3C does not need to pass**

**Repo:**

-   GitHub repository: `holbertonschool-web_front_end`
-   Directory: `0x00-html_advanced`
-   File: `32-styleguide.html`

 Done?\
Help

#### 33\. Table mandatory

Copy the content of `32-styleguide.html` into `33-styleguide.html`

-   inside `main` after Typography `section`
    -   add a new line and a comment with text `Table`
    -   create a new `section`
        -   in the `section` create a `header`, in the `header` add a level 2 heading with the text `Table`
        -   after the `header`, create a `table`, reproduce in HTML the visual below

![](https://holbertonintranet.s3.amazonaws.com/uploads/medias/2019/10/1348f88f2d78a5dee5d0.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOUWMNL5ANN%2F20200714%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20200714T011308Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=f1e04be907a5c85e96f6d777e8c930d88494909a79e18236da6907779f1de3aa)

The `<th>` tags containing `Title, Director, Release Date` should have a `scope` attribute set to `col` The `<th>` tags containing the names of the movies should have a `scope` attribute set to `row`

**Due to previous task, does not have to pass W3C**

**Repo:**

-   GitHub repository: `holbertonschool-web_front_end`
-   Directory: `0x00-html_advanced`
-   File: `33-styleguide.html`

 Done?\
Help

#### 34\. Details mandatory

Copy the content of `33-styleguide.html` into `34-styleguide.html`

-   in `main` tag after Table `section`
    -   add a new line and a comment with text `Details`
    -   create a new `section`
        -   create a `header`, in the `header` add a level 2 heading with the text `Details`
        -   after the `header` create a `div`
            -   in the `div` add a level 3 heading with text `Default`
            -   add a details element and specify `Show/Hide me` in the `summary`
            -   add this text after the `summary`: `Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.`
        -   create another `div`
            -   add a level 3 heading with text `Open`
            -   add a details element that is open by default and specify `Always open` in the `summary`
            -   add this text after the `summary`: `Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.`

**Due to earlier task, does not have to pass W3C**

**Repo:**

-   GitHub repository: `holbertonschool-web_front_end`
-   Directory: `0x00-html_advanced`
-   File: `34-styleguide.html`

 Done?\
Help

#### 35\. Replace text logo with image logo mandatory

![](https://holbertonintranet.s3.amazonaws.com/uploads/medias/2019/11/06f32e89f2a82582234e.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOUWMNL5ANN%2F20200714%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20200714T011308Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=df9037a00f6366ba04dd292bd24e9f3e77a66703a78ad2ec888757edec022e13)

Using `31-index.html`

-   in `header`
    -   find the `span` with the name of the website
    -   replace it with the image above
    -   make sure the image is in the same directory as all of your other files and that the file name is `logo-black.png`
    -   alt: `Techium logo`
    -   don't forget to specify width of `160` and height of `40`
-   in `footer`, after the opening tag and before the address
    -   insert the logo image
    -   alt: `Techium logo`
    -   don't forget to specify the width and height (same as in header)

**W3C does not need to pass**

**Repo:**

-   GitHub repository: `holbertonschool-web_front_end`
-   Directory: `0x00-html_advanced`
-   File: `35-index.html`

 Done?\
Help

#### 36\. Add images to your sections mandatory

Copy the content of `35-index.html` into `36-index.html`

You can use image generators to get images for this task. For avatar images you can download them on [UI Faces](https://intranet.hbtn.io/rltoken/Jx8XlGJ1KR3d4NY1UZRK5w "UI Faces"). Just make sure you rename your images to match the task requirements.

**Add three images in the Works section:**

-   in the Works `section`
    -   before the first level 3 heading create a `div`
        -   add `images/pic-work-01.jpg` inside the `div`
        -   alt: empty
    -   before the second level 3 heading create a `div`
        -   add `images/pic-work-02.jpg` inside the `div`
        -   alt: empty
    -   before the third level 3 heading create a `div`
        -   add `images/pic-work-03.jpg` inside the `div`
        -   alt: empty

**Add one image in the About Us section:**

-   in the About Us `section` before the first level 3 heading inside the `div`
    -   add the image `images/pic-about-us.jpg`
        -   alt: empty
        -   width: `460`
        -   height: `447`

**Add three images in the Latest news section:**

-   in the Latest news `section`
    -   in the first `article`, before the first paragraph, create a `div`
        -   in the `div` add the image `images/pic-blog-01.jpg`
        -   alt: empty
        -   width: `305`
        -   height: `205`
    -   in the second `article`, before the first paragraph, create a `div`
        -   in the `div` add the image `images/pic-blog-02.jpg`
        -   alt: empty
        -   width: `305`
        -   height: `205`
    -   in the third `article`, before the first paragraph, create a `div`
        -   in the `div` add the image `images/pic-blog-03.jpg`
        -   alt: empty
        -   width: `305`
        -   height: `205`

**Add three images in the Testimonials section:**

-   in the Testimonials `section`
    -   in the first `article` before the quote, add the image `images/pic-person-01.jpg`
        -   alt: `Yuri Y. avatar`
        -   width: `100px`
        -   height: `100px`
    -   in the second `article` before the quote, add the image `images/pic-person-02.jpg`
        -   alt: `Dorrie S. avatar`
        -   width: `100px`
        -   height: `100px`
    -   in the third `article` before the quote, add the image `images/pic-person-03.jpg`
        -   alt: `Sven H. avatar`
        -   width: `100px`
        -   height: `100px`

**Does not need to pass W3C**

**Repo:**

-   GitHub repository: `holbertonschool-web_front_end`
-   Directory: `0x00-html_advanced`
-   File: `36-index.html`

 Done?\
Help

#### 37\. Social icons mandatory

Using `36-index.html`

-   inside the `footer`

    -   replace the text `Facebook` with the SVG icon code and add width of `25px` and height of `25px` to the SVG tag:

    ```
    <svg viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <title>
    Facebook icon
    </title>
    <path d="M23.998 12c0-6.628-5.372-12-11.999-12C5.372 0 0 5.372 0 12c0 5.988 4.388 10.952 10.124 11.852v-8.384H7.078v-3.469h3.046V9.356c0-3.008 1.792-4.669 4.532-4.669 1.313 0 2.686.234 2.686.234v2.953H15.83c-1.49 0-1.955.925-1.955 1.874V12h3.328l-.532 3.469h-2.796v8.384c5.736-.9 10.124-5.864 10.124-11.853z"/>
    </svg>

    ```

    -   replace the text `Twitter` with the SVG icon code and add width of `25px` and height of `25px` to the SVG tag:

    ```
    <svg viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <title>
    Twitter icon
    </title>
    <path d="M23.954 4.569a10 10 0 0 1-2.825.775 4.958 4.958 0 0 0 2.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 0 0-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 0 0-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 0 1-2.228-.616v.061a4.923 4.923 0 0 0 3.946 4.827 4.996 4.996 0 0 1-2.212.085 4.937 4.937 0 0 0 4.604 3.417 9.868 9.868 0 0 1-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0 0 7.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 0 0 2.46-2.548l-.047-.02z"/>
    </svg>

    ```

    -   replace the text `Instagram` with the SVG icon code and add width of `25px` and height of `25px` to the SVG tag:

    ```
    <svg viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <title>
    Instagram icon
    </title>
    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913a5.885 5.885 0 0 0 1.384 2.126A5.868 5.868 0 0 0 4.14 23.37c.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558a5.898 5.898 0 0 0 2.126-1.384 5.86 5.86 0 0 0 1.384-2.126c.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913a5.89 5.89 0 0 0-1.384-2.126A5.847 5.847 0 0 0 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227a3.81 3.81 0 0 1-.899 1.382 3.744 3.744 0 0 1-1.38.896c-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421a3.716 3.716 0 0 1-1.379-.899 3.644 3.644 0 0 1-.9-1.38c-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 1 0 0-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 0 1-2.88 0 1.44 1.44 0 0 1 2.88 0z"/>
    </svg>

    ```

**W3C does not need to pass**

**Repo:**

-   GitHub repository: `holbertonschool-web_front_end`
-   Directory: `0x00-html_advanced`
-   File: `index.html`

 Done?\
Help

#### 38\. Add a video player in the styleguide mandatory

Copy the content of `34-styleguide.html` into `38-styleguide.html`

-   in `main` after the Details `section`
    -   add a new line and a comment with text `Video`
    -   create a `section`
        -   in the `section` create a `header`, in the `header` add a level 2 heading with the text `Video`
        -   after the `header` add the following video: `https://intranet-projects-files.s3.amazonaws.com/webstack/BigBuckBunny.mp4`
        -   add controls to the video
        -   ensure that the video does a loop
        -   display `https://intranet-projects-files.s3.amazonaws.com/webstack/thumbnail.jpg` when the video is downloading
        -   provide an alternative text: `Sorry, your browser doesn't support HTML5 video`

**Due to an earlier task, does not need to pass W3C**

**Repo:**

-   GitHub repository: `holbertonschool-web_front_end`
-   Directory: `0x00-html_advanced`
-   File: `38-styleguide.html`

 Done?\
Help

#### 39\. Add an audio player in the styleguide mandatory

Copy the content of `38-styleguide.html` into `39-styleguide.html`

-   in `main` after Video `section`
    -   add a new line and a comment with text `Audio`
    -   create a `section`
        -   in the `section` create a `header`, in the `header` add a level 2 heading with the text `Audio`
        -   after the `header` add the following audio file: `https://intranet-projects-files.s3.amazonaws.com/webstack/TroubleChapter8_64kb.mp3`
        -   add controls to the audio player
        -   provide an alternative text: `Sorry, your browser doesn't support audio element`

**Due to an earlier task, does not need to pass W3C**

**Repo:**

-   GitHub repository: `holbertonschool-web_front_end`
-   Directory: `0x00-html_advanced`
-   File: `39-styleguide.html`

 Done?\
Help

#### 40\. Add a iframe example in the styleguide mandatory

Copy the content of `39-styleguide.html` into `styleguide.html`

-   in `main` under Audio `section`
    -   add a new line and a comment with text `Iframe`
    -   create a `section`
        -   in the `section` create a `header`, in the `header` add a level 2 heading with the text `Iframe`
        -   after the `header` add a `div`
            -   inside the `div`, create an `iframe`
                -   title: `Holberton School`
                -   width: `350 px`
                -   height: `200 px`
                -   source: `https://www.youtube.com/embed/41N6bKO-NVI`
                -   fallback text: `Holberton Sally`

**W3C does not need to pass**

And you are done!

**Repo:**

-   GitHub repository: `holbertonschool-web_front_end`
-   Directory: `0x00-html_advanced`
-   File: `styleguide.html`
