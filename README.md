# Built.is Plugin: Blog

A [Built.js](https://builtjs.com) plugin for a blog, with basic Tailwind styling.

Demo: [https://builtjs-plugin-blog.vercel.app](https://builtjs-plugin-blog.vercel.app/)

## Installation
1. Install dependencies:
```
npm install
```
2. Start the development server:
```
npm run dev
```

### Pages
- Home
- Blog
- Post
  - Blog Article

---

### Content Types
#### Post
Fields:
- title: string
- slug: uid
- content: portabletext
- blurb: text
- image: image
- date: date
- tags: Array<Tag>
- createdAt: Date
- author: Author

#### Author
Fields:
- fullName: string
- profile: Profile
- posts: Array<Post>

#### Profile
Fields:
- title: string
- excerpt: text
- bio: portabletext
- position: string
- profileImage: image

#### Tag
Fields:
- name: string
- slug uid

#### Primary Menu Item
Fields:
- slug uid
- label: string
- url: string