import styled from 'styled-components'

const Page = styled.div.attrs({
  className: "sans-serif flex flex-column w-100 flex-wrap justify-center center app-height-l pb4",
})`
  max-width: 64rem;
`
const Intro = styled.div.attrs({
  className: "ba w-100 w-40-l mw6 center-ns center-m",
})`
  background: #e9e9e9;
`
  const Header = styled.div.attrs({
    className: "h5 relative tc bb white-90 overflow-hidden",
  })`
    // background-color: #2CB6D3
  `
  const Welcome = styled.div.attrs({
    className: "ph4 ph5-ns pv4 pv5-l center f4 lh-copy mt0",
  })`
    color: #32322e
  `
  const Vignette = styled.div.attrs({
  })`
    display: none;
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-shadow: 0 0 75px rgba(0,0,0,0.5) inset;
  `
  const HeaderImage = styled.img.attrs({
    className: "o-90",
  })`
    // filter: grayscale(100%);
    //mix-blend-mode: multiply
  `
const Work = styled.div.attrs({
  className: "bt b--black center-ns center-m w-100 h-100 w-40-l mw6 bg-black-60 white-90",
})``
  const Heading = styled.h2.attrs({
    className: "f4 mv0 pt4 pb3 ttl",
  })``
  const ProjectHeader = styled.div.attrs({
    className: "cf ph4 pv3 lh-title f6 bg-white-90 w-100 black-80",
  })``
  const Project = styled.div.attrs({
    className: "relative bg-black-80 dim",
  })``
  const ProjectWrap = styled.div.attrs({
    className: "",
  })``
  const ProjectTitle = styled.h3.attrs({
    className: "f5 mv0 pv3 ph4 ttu fw4",
  })``
  const ProjectList = styled.ul.attrs({
    className: "dn ph3 ph5-ns",
  })``
  const ProjectListItem = styled.li.attrs({
    className: "",
  })``
const Activity = styled.div.attrs({
  className: "mw6",
})``
  const ActivityCaption = styled.p.attrs({
    className: "mv0 pb4 f5 lh-copy",
  })``
  const ActivityImage = styled.img.attrs({
    className: "w-100 mb3 o-90",
  })``
  const ActivityInfo = styled.div.attrs({
    className: "pb1 f6 white-50",
  })``
  const ActivityTime = styled.div.attrs({
    className: "f6 white-50",
  })``
const Posts = styled.div.attrs({
  className: "bt bb b--black-90 center-ns center-m w-100 h-100 w-40-l mw6 bg-black-60 white-90",
})``
  const PostsHeader = styled.div.attrs({
    className: "ph4",
  })``
  const PostsHeading = styled.h4.attrs({
    className: "f5 mv0 pv3 ttu fw4",
  })``
  const PostsList = styled.ul.attrs({
    className: "pl0 mv0 list",
  })``
  const PostsListItem = styled.li.attrs({
    className: "bb black-90 f4",
  })``
  const PostsListItemTitle = styled.div.attrs({
    className: ""
  })``
const Links = styled.div.attrs({
  //className: "br2-l br--bottom-l br--right-l tc br-l b--black-90 bg-black-80 white-90 br-l center-ns center-m w-100 w-40-l mw6 ph3 pv3",
  className: "tc b--black-90 bg-black-80 white-90 br-l center-ns center-m w-100 w-40-l mw6 ph3 pv3",
})`
  color: #e9e9e9
`
  const LinksList = styled.ul.attrs({
    className: "list mv0 pl0",
  })``
  const LinksListItem = styled.li.attrs({
    className: "dib pa2 mr3",
  })``

export { 
    Page, 
    Welcome,
    Header,
    Vignette,
    HeaderImage,
    Intro, 
    Heading, 
    Work,
    Project, 
    ProjectWrap, 
    ProjectHeader,
    ProjectTitle,
    ProjectList, 
    ProjectListItem, 
    Activity,
    ActivityCaption,
    ActivityImage,
    ActivityInfo,
    ActivityTime,
    Posts,
    PostsHeader,
    PostsHeading,
    PostsList,
    PostsListItem,
    PostsListItemTitle,
    Links,
    LinksList,
    LinksListItem
}