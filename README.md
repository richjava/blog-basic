# Built.JS Plugin: Blog

## NOTE: Unstable! Still in active development!

A [Built.JS](https://builtjs.com) plugin for a blog, with basic Tailwind styling.

## Installation
```
npm install
```
Then you can run the app using:
```
npm run dev
```

### Pages
- Blog
- Blog Article

### Sections
- blog-seo
- blog-landing
- post-list
- blog-list
- blog-article
- blog-related-articles

---

### Content Types
#### Post
Fields:
- title: String
- content: Portabletext
- image: Image
- tags: Array<Tag>
- createdAt: Date
- author: Author

#### Author
Fields:
- fullName: String
- bio: Portabletext
- position: String
- profileImage: Image
- posts: Array<Post>