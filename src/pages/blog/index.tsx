import Head from 'next/head';

import { BlogTabs } from '@/components/BlogTabs/BlogTabs';
import { Contact } from '@/components/Contact/Contact';
import { HeroBlock } from '@/components/HeroBlock/HeroBlock';
import { PopularBlogPosts } from '@/components/PopularBlogPosts/PopularBlogPosts';
import { client } from '@/lib/client';

import type { IPost } from './[slug]';

interface IProps {
  posts: IPost[];
  total: number;
}

const Blog = (props: IProps) => {
  const { posts } = props;

  const popularPosts = posts.filter((post) => post.popular);

  return (
    <>
      <Head>
        <title>СТАТЬИ // YOUWE</title>
      </Head>

      <HeroBlock
        title="ПОЗНАВАЙ СЕБЯ"
        text="Читай статьи и блоги на тему психологии. Забота о психике - это реальность"
        animation="blog"
      />

      <PopularBlogPosts posts={popularPosts} />

      <BlogTabs posts={posts} />

      {/* <Contact /> */}
    </>
  );
};

export default Blog;

export const getStaticProps = async () => {
  const query = `{
    "posts": *[_type == "post"] | order(publishedAt desc)  {_id, publishedAt, title, popular, description, mainImage, showImageInCard, "name": author->name, "authorImage": author->image, slug, "categories": categories[]->title, readTime},
  }`;
  const { posts } = await client.fetch(query);

  return { props: { posts } };
};
