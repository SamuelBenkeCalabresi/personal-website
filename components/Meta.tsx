import Head from "next/head";

const Meta = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="keywords"
        content="Reactm React Native, Samuel Calabresi, blogging, tutorial, teachings"
      />
    </Head>
  );
};

export default Meta;

Meta.defaultProps = {
  title:
    "Samuel Calabresi - Insights on React, React Native and Software Craft",
};
