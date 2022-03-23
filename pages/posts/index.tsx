import getPosts from "../../scripts/fileSystem";
import PostItem from "../../components/common/PostItem";
import Meta from "../../components/Meta";

const index = ({ posts }) => {
  return (
    <div>
      <Meta title="Blog posts - PressBlog" />
      <p>All Posts</p>
      {posts.map((post) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </div>
  );
};

export default index;

export const getStaticProps = () => {
  const posts = getPosts(false);

  return {
    props: {
      posts,
    },
  };
};
