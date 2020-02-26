import * as React from "react";
import { NextPage } from "next";
import PropTypes from 'prop-types'

import Layout from "../../components/Layout";
import RenderPost from '../../components/RenderPost';

const WithPostId: NextPage = () => {
  
  return (
    <>
      <Layout title={`Article`}>
        <RenderPost/>
      </Layout>
    </>
  );
};

WithPostId.propTypes = {
  post: PropTypes.string.isRequired,
}
export default WithPostId;
