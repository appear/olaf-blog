import Link from 'next/link'
import { GetStaticProps } from 'next'
import styled from '@emotion/styled'

import { Post } from '$types/post'
import { getAllPosts } from '$utils/posts'
import Message from '$shared/Message'

const Container = styled.div``

function IndexPage({ posts = [] }: { posts: Post[] }) {
  return (
    <Container>
      <Message />
      {posts.map((post: any, index: number) => (
        <Link href={`/${post.slug.year}/${post.slug.subject}/${post.slug.title}`} key={index}>
          {post.frontMatter.title}
        </Link>
      ))}
    </Container>
  )
}

export default IndexPage

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts()

  return {
    props: {
      posts,
    },
  }
}
