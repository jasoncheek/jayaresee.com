import css from 'styled-jsx/css'

export default css.global`

    // /* 7. Single Post
    // /* ---------------------------------------------------------- */

    // .post-template .site-main,
    // .page-template .site-main {
    //     margin-top: 64px;
    //     padding-bottom: 4vw;
    //     background: #fff;
    // }

    // .post-full-header {
    //     position: relative;
    //     margin: 0 auto;
    //     padding: 8rem 170px 50px;
    //     border-top-left-radius: 3px;
    //     border-top-right-radius: 3px;
    // }

    // .post-full-tags {
    //     display: flex;
    //     justify-content: flex-start;
    //     align-items: center;
    //     color: var(--midgrey);
    //     font-size: 1.3rem;
    //     line-height: 1.4em;
    //     font-weight: 600;
    //     text-transform: uppercase;
    // }

    // .post-full-meta-date {
    //     color: var(--midgrey);
    //     font-size: 1.2rem;
    //     font-weight: 400;
    // }

    // @media (max-width: 1170px) {
    //     .post-full-header {
    //         padding: 8rem 11vw 50px;
    //     }
    // }

    // @media (max-width: 800px) {
    //     .post-full-header {
    //         padding-right: 5vw;
    //         padding-left: 5vw;
    //     }
    // }

    // @media (max-width: 500px) {
    //     .post-full-header {
    //         padding: 8rem 0 35px;
    //     }
    // }

    // .post-full-title {
    //     margin: 0 0 0.2em;
    //     color: color(var(--darkgrey) l(-5%));
    // }

    // .post-full-custom-excerpt {
    //     margin: 20px 0 0;
    //     color: var(--midgrey);
    //     font-family: Georgia, serif;
    //     font-size: 1.75rem;
    //     line-height: 1.4em;
    //     font-weight: 300;
    // }

    // .date-divider {
    //     display: inline-block;
    //     margin: 0 6px 1px;
    //     font-weight: 300;
    // }

    // .post-full-image {
    //     display: flex;
    //     flex-direction: column;
    //     align-items: center;
    //     overflow: hidden;
    //     margin: 25px 0 50px;
    //     background: color(var(--lightgrey) l(+10%));
    //     border-radius: 3px;
    // }

    // .post-full-image img {
    //     max-width: 1040px;
    //     width: 100%;
    //     height: auto;
    // }

    // .post-full-content {
    //     position: relative;
    //     margin: 0 auto;
    //     padding: 0 170px 6vw;
    //     min-height: 230px;
    //     font-family: Georgia, serif;
    //     font-size: 2.0rem;
    //     line-height: 1.6em;
    //     background: #fff;
    // }

    // @media (max-width: 1170px) {
    //     .post-full-content {
    //         padding: 0 11vw;
    //     }
    // }
    // @media (max-width: 800px) {
    //     .post-full-content {
    //         padding: 0 5vw;
    //         font-size: 1.8rem;
    //     }
    // }
    // @media (max-width: 500px) {
    //     .post-full-custom-excerpt {
    //         font-size: 1.75rem;
    //         line-height: 1.5em;
    //     }
    // }

    // .no-image .post-full-content {
    //     padding-top: 0;
    // }

    // .no-image .post-full-content:before,
    // .no-image .post-full-content:after {
    //     display: none;
    // }

    // .post-full-content h1,
    // .post-full-content h2,
    // .post-full-content h3,
    // .post-full-content h4,
    // .post-full-content h5,
    // .post-full-content h6,
    // .post-full-content p,
    // .post-full-content ul,
    // .post-full-content ol,
    // .post-full-content dl,
    // .post-full-content pre,
    // .post-full-content blockquote,
    // .post-full-comments,
    // .footnotes {
    //     margin: 0 0 1.5em 0;
    //     min-width: 100%;
    // }
    // @media (max-width: 500px) {
    //     .post-full-content p,
    //     .post-full-content ul,
    //     .post-full-content ol,
    //     .post-full-content dl,
    //     .post-full-content pre,
    //     .post-full-comments,
    //     .footnotes {
    //         margin-bottom: 1.28em;
    //     }
    // }

    // .post-full-content li {
    //     word-break: break-word;
    // }

    // .post-full-content li p {
    //     margin: 0;
    // }

    // .post-full-content a {
    //     color: var(--darkgrey);
    //     word-break: break-word;
    //     box-shadow: var(--darkgrey) 0 -1px 0 inset;
    //     transition: all 0.2s ease-in-out;
    // }

    // .post-full-content a:hover {
    //     color: var(--blue);
    //     text-decoration: none;
    //     box-shadow: var(--blue) 0 -1px 0 inset;
    // }

    // .post-full-content strong,
    // .post-full-content em {
    //     color: color(var(--darkgrey) l(-5%));
    // }

    // .post-full-content small {
    //     display: inline-block;
    //     line-height: 1.6em;
    // }

    // .post-full-content li:first-child {
    //     margin-top: 0;
    // }

    // .post-full-content img,
    // .post-full-content video {
    //     display: block;
    //     margin: 1.5em auto;
    //     max-width: 1040px;
    //     height: auto;
    // }
    // @media (max-width: 1040px) {
    //     .post-full-content img,
    //     .post-full-content video {
    //         width: 100%;
    //     }
    // }


    // /* Full bleed images (#full)
    // Super neat trick courtesy of @JoelDrapper

    // Usage (In Ghost edtior):

    // ![img](/some/image.jpg#full)

    // */
    // .post-full-content img[src$="#full"] {
    //     max-width: none;
    //     width: 100vw;
    // }


    // /* Image captions

    // Usage (In Ghost editor):

    // ![img](/some/image.jpg)
    // <small>Your image caption</small>

    // */
    // .post-full-content img + br + small {
    //     display: block;
    //     margin-top: -3em;
    //     margin-bottom: 1.5em;
    //     text-align: center;
    // }


    // /* Override third party iframe styles */
    // .post-full-content iframe {
    //     margin: 0 auto !important;
    // }

    // .post-full-content blockquote {
    //     margin: 0 0 1.5em;
    //     padding: 0 1.5em;
    //     border-left: #3eb0ef 3px solid;
    // }
    // @media (max-width: 500px) {
    //     .post-full-content blockquote {
    //         padding: 0 1.3em;
    //     }
    // }

    // .post-full-content blockquote p {
    //     margin: 0 0 1em 0;
    //     color: inherit;
    //     font-size: inherit;
    //     line-height: inherit;
    //     font-style: italic;
    // }

    // .post-full-content blockquote p:last-child {
    //     margin-bottom: 0;
    // }

    // .post-full-content code {
    //     padding: 0 5px 2px;
    //     font-size: 0.8em;
    //     line-height: 1em;
    //     font-weight: 400!important;
    //     background: var(--whitegrey);
    //     border-radius: 3px;
    // }

    // .post-full-content p code {
    //     word-break: break-all;
    // }

    // .post-full-content pre {
    //     overflow-x: auto;
    //     margin: 1.5em 0 3em;
    //     padding: 20px;
    //     max-width: 100%;
    //     border: color(var(--darkgrey) l(-10%)) 1px solid;
    //     color: var(--whitegrey);
    //     font-size: 1.4rem;
    //     line-height: 1.5em;
    //     background: color(var(--darkgrey) l(-3%));
    //     border-radius: 5px;
    // }

    // .post-full-content pre ::selection {
    //     color: color(var(--midgrey) l(-25%));
    // }

    // .post-full-content pre code {
    //     padding: 0;
    //     font-size: inherit;
    //     line-height: inherit;
    //     background: transparent;
    // }

    // .post-full-content pre code :not(span) {
    //     color: inherit;
    // }

    // .post-full-content .fluid-width-video-wrapper {
    //     margin: 1.5em 0 3em;
    // }

    // .post-full-content hr {
    //     margin: 2em 0;
    // }

    // .post-full-content hr:after {
    //     content: "";
    //     position: absolute;
    //     top: -15px;
    //     left: 50%;
    //     display: block;
    //     margin-left: -10px;
    //     width: 1px;
    //     height: 30px;
    //     background: color(var(--lightgrey) l(+10%));
    //     box-shadow: #fff 0 0 0 5px;
    //     transform: rotate(45deg);
    // }

    // .post-full-content hr + p {
    //     margin-top: 1.2em;
    // }

    // .post-full-content h1,
    // .post-full-content h2,
    // .post-full-content h3,
    // .post-full-content h4,
    // .post-full-content h5,
    // .post-full-content h6 {
    //     color: color(var(--darkgrey) l(-5%));
    //     font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    // }

    // .post-full-content h1 {
    //     margin: 0.5em 0 0.4em;
    //     font-size: 4.2rem;
    //     line-height: 1.25em;
    //     font-weight: 600;
    // }
    // .post-full-content p + h1 {
    //     margin-top: 0.8em;
    // }
    // @media (max-width: 800px) {
    //     .post-full-content h1 {
    //         font-size: 3.2rem;
    //         line-height: 1.25em;
    //     }
    // }

    // .post-full-content h2 {
    //     margin: 0.5em 0 0.4em;
    //     font-size: 3.2rem;
    //     line-height: 1.25em;
    //     font-weight: 600;
    // }
    // .post-full-content p + h2 {
    //     margin-top: 0.8em;
    // }
    // @media (max-width: 800px) {
    //     .post-full-content h2 {
    //         margin-bottom: 0.3em;
    //         font-size: 2.8rem;
    //         line-height: 1.25em;
    //     }
    // }

    // .post-full-content h3 {
    //     margin: 0.5em 0 0.2em;
    //     font-size: 2.5rem;
    //     line-height: 1.3em;
    //     font-weight: 600;
    // }
    // .post-full-content h2 + h3 {
    //     margin-top: 0.7em;
    // }
    // @media (max-width: 800px) {
    //     .post-full-content h3 {
    //         margin-bottom: 0.3em;
    //         font-size: 2.4rem;
    //         line-height: 1.3em;
    //     }
    // }

    // .post-full-content h4 {
    //     margin: 0.5em 0 0.2em;
    //     font-size: 2.5rem;
    //     font-weight: 600;
    // }
    // .post-full-content h2 + h4 {
    //     margin-top: 0.7em;
    // }
    // .post-full-content h3 + h4 {
    //     margin-top: 0;
    // }
    // @media (max-width: 800px) {
    //     .post-full-content h4 {
    //         margin-bottom: 0.3em;
    //         font-size: 2.4rem;
    //         line-height: 1.3em;
    //     }
    // }

    // .post-full-content h5 {
    //     display: block;
    //     margin: 0.5em 0;
    //     padding: 0.4em 1em 0.9em;
    //     border: 0;
    //     color: var(--blue);
    //     font-family: Georgia,serif;
    //     font-size: 3.2rem;
    //     line-height: 1.35em;
    //     text-align: center;
    // }
    // @media (min-width: 1180px) {
    //     .post-full-content h5 {
    //         max-width: 1060px;
    //         width: 100vw;
    //     }
    // }
    // @media (max-width: 800px) {
    //     .post-full-content h5 {
    //         margin-bottom: 1em;
    //         margin-left: 1.3em;
    //         padding: 0 0 0.5em;
    //         font-size: 2.4rem;
    //         text-align: initial;
    //     }
    // }

    // .post-full-content h6 {
    //     margin: 0.5em 0 0.2em 0;
    //     font-size: 2.0rem;
    //     font-weight: 700;
    // }
    // @media (max-width: 800px) {
    //     .post-full-content h6 {
    //         font-size: 1.8rem;
    //         line-height: 1.4em;
    //     }
    // }

    // .footnotes-sep {
    //     margin-bottom: 30px;
    // }

    // .footnotes {
    //     font-size: 1.5rem;
    // }

    // .footnotes p {
    //     margin: 0;
    // }

    // .footnote-backref {
    //     color: var(--blue) !important;
    //     font-size: 1.2rem;
    //     font-weight: bold;
    //     text-decoration: none !important;
    //     box-shadow: none !important;
    // }

    // /* Some grouped styles for smaller viewports */
    // @media (max-width: 1170px) {
    //     .post-full-image {
    //         margin: 25px -6vw 50px;
    //         border-radius: 0;
    //     }

    //     .post-full-image img {
    //         max-width: 1170px;
    //     }
    // }

    // @media (max-width: 700px) {
    //     .post-full-image {
    //         margin: 25px -5vw;
    //     }
    // }

    // @media (max-width: 500px) {
    //     .post-full-meta {
    //         font-size: 1.2rem;
    //         line-height: 1.3em;
    //     }

    //     .post-full-title {
    //         margin-top: 0.2em;
    //         font-size: 3.3rem;
    //     }

    //     .post-full-image {
    //         margin-top: 5px;
    //         margin-bottom: 5vw;
    //     }

    //     .post-full-content {
    //         padding: 0;
    //     }

    //     .post-full-content:before,
    //     .post-full-content:after {
    //         display: none;
    //     }
    // }

    // /* Tables */
    // .post-full-content table {
    //     display: inline-block;
    //     overflow-x: auto;
    //     margin: 0.5em 0 2.5em;
    //     max-width: 100%;
    //     width: auto;
    //     border-spacing: 0;
    //     border-collapse: collapse;
    //     font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    //     font-size: 1.6rem;
    //     white-space: nowrap;
    //     vertical-align: top;
    // }

    // .post-full-content table {
    //     -webkit-overflow-scrolling: touch;
    //     background: radial-gradient(ellipse at left, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 75%) 0 center, radial-gradient(ellipse at right, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 75%) 100% center;
    //     background-attachment: scroll, scroll;
    //     background-size: 10px 100%, 10px 100%;
    //     background-repeat: no-repeat;
    // }

    // .post-full-content table td:first-child {
    //     background-image: linear-gradient(to right, rgba(255,255,255, 1) 50%, rgba(255,255,255, 0) 100%);
    //     background-size: 20px 100%;
    //     background-repeat: no-repeat;
    // }

    // .post-full-content table td:last-child {
    //     background-image: linear-gradient(to left, rgba(255,255,255, 1) 50%, rgba(255,255,255, 0) 100%);
    //     background-position: 100% 0;
    //     background-size: 20px 100%;
    //     background-repeat: no-repeat;
    // }

    // .post-full-content table th {
    //     color: var(--darkgrey);
    //     font-size: 1.2rem;
    //     font-weight: 700;
    //     letter-spacing: 0.2px;
    //     text-align: left;
    //     text-transform: uppercase;
    //     background-color: color(var(--whitegrey) l(+4%));
    // }

    // .post-full-content table th,
    // .post-full-content table td {
    //     padding: 6px 12px;
    //     border: color(var(--whitegrey) l(-1%) s(-5%)) 1px solid;
    // }


    // /* 7.1. Post Byline
    // /* ---------------------------------------------------------- */

    // .post-full-byline {
    //     display: flex;
    //     justify-content: space-between;
    //     margin: 35px 0 0;
    //     padding-top: 15px;
    //     border-top: 1px solid color(var(--lightgrey) l(+10%));
    // }

    // .post-full-byline-content {
    //     flex-grow: 1;
    //     display: flex;
    //     align-items: flex-start;
    // }

    // .post-full-byline-content .author-list {
    //     justify-content: flex-start;
    //     padding: 0 12px 0 0;
    // }

    // .post-full-byline-meta {
    //     margin: 2px 0 0;
    //     color: color(var(--midgrey) l(+10%));
    //     font-size: 1.2rem;
    //     line-height: 1.2em;
    //     letter-spacing: 0.2px;
    //     text-transform: uppercase;;
    // }

    // .post-full-byline-meta h4 {
    //     margin: 0 0 3px;
    //     font-size: 1.3rem;
    //     line-height: 1.4em;
    //     font-weight: 500;
    // }

    // .post-full-byline-meta h4 a {
    //     color: color(var(--darkgrey) l(+10%));
    // }

    // .post-full-byline-meta h4 a:hover {
    //     color: var(--darkgrey);
    // }

    // .post-full-byline-meta .bull {
    //     display: inline-block;
    //     margin: 0 4px;
    //     opacity: 0.6;
    // }

    // .author-avatar {
    //     display: block;
    //     overflow: hidden;
    //     margin: 0 -4px;
    //     width: 40px;
    //     height: 40px;
    //     border: #fff 2px solid;
    //     border-radius: 100%;
    //     transition: all 0.5s cubic-bezier(0.4, 0.01, 0.165, 0.99) 700ms;
    // }

    // .author-list-item .author-card {
    //     position: absolute;
    //     bottom: 130%;
    //     left: 50%;
    //     z-index: 600;
    //     display: flex;
    //     justify-content: space-between;
    //     margin-left: -200px;
    //     width: 400px;
    //     font-size: 1.4rem;
    //     line-height: 1.5em;
    //     background: white;
    //     border-radius: 3px;
    //     box-shadow: rgba(39,44,49,0.08) 0 12px 26px, rgba(39, 44, 49, 0.06) 1px 3px 8px;
    //     opacity: 0;
    //     transition: all 0.35s cubic-bezier(0.4, 0.01, 0.165, 0.99);
    //     transform: scale(0.98) translateY(15px);
    //     pointer-events: none;
    // }

    // .author-list-item .author-card:before {
    //     content: "";
    //     position: absolute;
    //     top: 100%;
    //     left: 50%;
    //     display: block;
    //     margin-left: -8px;
    //     width: 0;
    //     height: 0;
    //     border-top: 8px solid #fff;
    //     border-right: 8px solid transparent;
    //     border-left: 8px solid transparent;
    // }

    // .author-list-item .author-card.hovered {
    //     opacity: 1.0;
    //     transform: scale(1) translateY(0px);
    //     pointer-events: auto;
    // }

    // .author-card {
    //     padding: 20px 20px 22px;
    // }

    // .author-card .author-info {
    //     flex: 1 1 auto;
    //     padding: 0 0 0 20px;
    // }

    // .author-card .author-info h2 {
    //     margin: 8px 0 0;
    //     font-size: 1.6rem;
    // }

    // .author-card .author-info p {
    //     margin: 4px 0 0;
    //     color: color(var(--midgrey) l(-10%));
    // }

    // .author-card .author-info .bio h2 {
    //     margin-top: 0;
    // }

    // .author-card .author-info .bio p {
    //     margin-top: 0.8em;
    // }

    // .author-card .author-profile-image {
    //     flex: 0 0 60px;
    //     margin: 0;
    //     width: 60px;
    //     height: 60px;
    //     border: none;
    // }

    // .basic-info .avatar-wrapper {
    //     position: relative;
    //     margin: 0;
    //     width: 60px;
    //     height: 60px;
    //     border: none;
    //     background: rgba(229, 239, 245, 0.1);
    // }

    // .basic-info .avatar-wrapper svg {
    //     margin: 0;
    //     width: 60px;
    //     height: 60px;
    //     opacity: 0.15;
    // }

    // @media (max-width: 1170px) {
    //     .author-list-item .author-card {
    //         margin-left: -50px;
    //         width: 430px;
    //     }

    //     .author-list-item .author-card:before {
    //         left: 50px;
    //     }
    // }

    // @media (max-width: 650px) {
    //     .author-list-item .author-card {
    //         display: none;
    //     }
    // }

    // @media (max-width: 500px) {
    //     .author-avatar {
    //         width: 32px;
    //         height: 32px;
    //     }

    //     .post-full-byline-meta {
    //         font-size: 1.2rem;
    //     }

    //     .post-full-byline-meta h4 {
    //         margin-bottom: 2px;
    //         font-size: 1.2rem;
    //     }
    // }

    /* 7.5. Koenig Styles
    /* ---------------------------------------------------------- */

    .post-content {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .post-full-content .kg-image {
        max-width: 100%;
    }

    /* Preventing full-width image overlap with post image.  */
    .post-full-image + .post-full-content .kg-content *:first-child .kg-image {
        width: 100%;
    }

    .post-full-content .kg-width-wide .kg-image {
        max-width: 1040px;
    }

    .post-full-content .kg-width-full .kg-image {
        max-width: 100vw;
    }

    .post-full-content figure {
        margin: 2.5rem 0 2.5rem;
        overflow: auto
    }

    .post-full-content h1 + figure,
    .post-full-content h2 + figure,
    .post-full-content h3 + figure,
    .post-full-content h4 + figure {
        margin-top: 2em;
    }

    .post-full-content figure img {
        margin: 0;
    }

    .post-full-content figcaption {
        margin: 1.0em 0 0;
        color: color(var(--midgrey) l(-10%));
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        font-size: 75%;
        line-height: 1.5em;
        text-align: center;;
    }

    .kg-width-full figcaption {
        padding: 0 1.5em;
    }

    .kg-embed-card {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }

    .kg-embed-card .fluid-width-video-wrapper {
        margin: 0;
    }


    @media (max-width: 1040px) {
        .post-full-content .kg-width-full .kg-image {
            width: 100vw;
        }
    }

    .kg-gallery-container {
        display: flex;
        flex-direction: column;
        max-width: 1040px;
        width: 100vw;
    }

    .kg-gallery-row {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    .kg-gallery-image img {
        display: block;
        margin: 0;
        width: 100%;
        height: 100%;
    }

    .kg-gallery-row:not(:first-of-type) {
        margin: 0.75em 0 0 0;
    }

    .kg-gallery-image:not(:first-of-type) {
        margin: 0 0 0 0.75em;
    }

    .kg-gallery-card + .kg-image-card.kg-width-wide,
    .kg-gallery-card + .kg-gallery-card,
    .kg-image-card.kg-width-wide + .kg-gallery-card,
    .kg-image-card.kg-width-wide + .kg-image-card.kg-width-wide {
        margin: -2.25em 0 3em;
    }

    /* keep existing <pre> styles for code cards with captions */
    .kg-code-card {
        width: 100%;
    }

    .kg-code-card pre {
        margin: 0;
    }

    .kg-bookmark-card {
        width: 100%;
        background: var(--white);
    }

    .kg-card + .kg-bookmark-card {
        margin-top: 0;
    }

    .post-full-content .kg-bookmark-container {
        display: flex;
        min-height: 148px;
        color: var(--darkgrey);
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        text-decoration: none;
        border-radius: 3px;
        box-shadow: 0 2px 5px -1px rgba(0, 0, 0, 0.15), 0 0 1px rgba(0, 0, 0, 0.09);
    }

    .post-full-content .kg-bookmark-container:hover {
        color: var(--darkgrey);
        text-decoration: none;
        box-shadow: 0 2px 5px -1px rgba(0, 0, 0, 0.15), 0 0 1px rgba(0, 0, 0, 0.09);
    }

    .kg-bookmark-content {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        padding: 20px;
    }

    .kg-bookmark-title {
        color: color(var(--midgrey) l(-30%));
        font-size: 1.6rem;
        line-height: 1.5em;
        font-weight: 600;
        transition: color 0.2s ease-in-out;
    }

    .post-full-content .kg-bookmark-container:hover .kg-bookmark-title {
        color: var(--blue);
    }

    .kg-bookmark-description {
        display: -webkit-box;
        overflow-y: hidden;
        margin-top: 12px;
        max-height: 48px;
        color: color(var(--midgrey) l(-10%));
        font-size: 1.5rem;
        line-height: 1.5em;
        font-weight: 400;

        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }

    .kg-bookmark-thumbnail {
        position: relative;
        min-width: 33%;
        max-height: 100%;
    }

    .kg-bookmark-thumbnail img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 0 3px 3px 0;

        object-fit: cover;
    }

    .kg-bookmark-metadata {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        margin-top: 14px;
        color: color(var(--midgrey) l(-10%));
        font-size: 1.5rem;
        font-weight: 400;
    }

    .post-full-content .kg-bookmark-icon {
        margin-right: 8px;
        width: 22px;
        height: 22px;
    }

    .kg-bookmark-author {
        line-height: 1.5em;
    }

    .kg-bookmark-author:after {
        content: "???";
        margin: 0 6px;
    }

    .kg-bookmark-publisher {
        overflow: hidden;
        max-width: 240px;
        line-height: 1.5em;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    @media (max-width: 800px) {
        .post-full-content figure {
            margin: 0.2em 0 1.3em;
        }

        .post-full-content h1 + figure,
        .post-full-content h2 + figure,
        .post-full-content h3 + figure,
        .post-full-content h4 + figure {
            margin-top: 0.9em;
        }
    }

    @media (max-width: 500px) {
        .post-full-content .kg-width-wide,
        .post-full-content .kg-width-full {
            margin-right: -5vw;
            margin-left: -5vw;
        }

        .post-full-content figcaption {
            margin-bottom: 0.4em;
        }

        .post-full-content .kg-bookmark-container {
            flex-direction: column;
        }

        .kg-bookmark-title,
        .kg-bookmark-description,
        .kg-bookmark-metadata {
            font-size: 1.4rem;
            line-height: 1.5em;
        }

        .post-full-content .kg-bookmark-icon {
            width: 18px;
            height: 18px;
        }

        .kg-bookmark-thumbnail {
            order: 1;
            min-height: 160px;
            width: 100%;
        }

        .kg-bookmark-thumbnail img {
            border-radius: 3px 3px 0 0;
        }

        .kg-bookmark-content {
            order: 2;
        }
    }
    
    .post-content div h2,
    .post-content div h3 {
        font-family: -apple-system, BlinkMacSystemFont, 'avenir next', avenir, 'helvetica neue', helvetica, ubuntu, roboto, noto, 'segoe ui', arial, sans-serif;
    }

    .post-content div h2 {
        font-size: 1.5rem
    }

    .post-content div h3 {
        font-size: 1.25rem
    }
    
    .post-content div pre {
        font-size: .875rem;
        margin: 2.5rem 0 2.5rem;
        overflow: auto;
    }
    
    .post-content div ul,
    .post-content div ol {
        margin: 0 0 2rem;
        padding-left: 1.5rem;
    }
    
    .post-content div .kg-bookmark-title {
        font-size: 1.25rem
    }
    
    .post-content div .kg-bookmark-description, 
    .post-content div .kg-bookmark-metadata {
        font-size: 1rem
    }

    .post-full-header div p, .post-content div h2, .post-content div h3, .post-content div p {
        margin: 0 0 1.5rem
    }

    .post-content div h2, .post-content div h3 {
        margin-top: 4rem
    }
    .post-full-content a:link, .post-full-content a:visited {
        color: blue;
        text-decoration: none;
    }
    .post-full-content a:hover, .post-full-content a:active {
        border-bottom: 1px solid
    }
    `