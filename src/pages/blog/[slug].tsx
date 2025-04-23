import Head from 'next/head';

import { Article, SectionComponentProps } from '@/components/Article/Article';
import { RecommendedBlogPosts } from '@/components/RecommendedBlogPosts/RecommendedBlogPosts';
import { client } from '@/lib/client';

export interface IPost {
  _id: string;
  slug: {
    current: string;
  };
  popular: boolean;
  title: string;
  name?: string;
  mainImage: {
    caption: string;
  };
  description: string;
  categories: string[];
  authorImage: {
    caption: string;
  };
  publishedAt: string;
  readTime: string;
  showImageInCard: boolean;
  pageBuilder: SectionComponentProps[];
}

interface IProps {
  post: IPost;
  recommendedPosts: IPost[];
}

const Post = (props: IProps) => {
  const { post, recommendedPosts } = props;

  const fiteredRecommendedPosts = recommendedPosts.filter((recommendedPost) => recommendedPost._id !== post._id);

  return (
    <>
      <Head>
        <title>{post.slug.current}</title>
      </Head>

      <Article post={post} />

      <RecommendedBlogPosts posts={fiteredRecommendedPosts} />
    </>
  );
};

export const getStaticPaths = async () => {
  const query = `*[_type == "post"] { slug { current } }`;

  const posts = await client.fetch(query);
  const paths = posts.map((post: IPost) => ({
    params: { slug: post.slug.current },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async ({ params: { slug } }: { params: { slug: string } }) => {
  const { post, recommendedPosts } = await client.fetch(`{
    'post': *[_type == 'post' && slug.current == '${slug}'][0]
      {
        _id,
        publishedAt,
        slug,
        popular,
        title,
        description,
        readTime,
        mainImage,
        showImageInCard,
        'name': author -> name,
        'authorImage': author -> image,
        'categories': categories[] -> title,
        pageBuilder
      },
    'recommendedPosts': *[_type == 'post'] | order(publishedAt desc)
      {
        _id,
        publishedAt,
        title,
        popular,
        description,
        mainImage,
        showImageInCard,
        'name': author -> name,
        'authorImage': author -> image,
        slug,
        'categories': categories[] -> title,
        readTime
      },
  }`);

  return {
    props: {
      post,
      recommendedPosts,
    },
  };
};

export default Post;
