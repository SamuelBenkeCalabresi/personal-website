import type { NextPage } from "next";
import React from "react";
import { VStack } from "@chakra-ui/react";
import getPosts from "../scripts/fileSystem";
import { Hero, Social, Profile, Meta, PostItem } from "../components";

const Home: NextPage = () => {
  return (
    <>
      <VStack as="main">
        <Hero />
        <Profile />
        <Meta />
        {/*  <div>
          <p>Recently Published</p>
          {posts.map((post) => (
            <PostItem key={post.slug} post={post} />
          ))}
        </div> */}
      </VStack>
    </>
  );
};

export default Home;

export const getStaticProps = () => {
  const posts = getPosts(10);

  return {
    props: {
      posts,
    },
  };
};
