import { Link, routes } from '@redwoodjs/router';
import { MetaTags } from '@redwoodjs/web';

const LandingPage = () => {
  return (
    <>
      <MetaTags
        title="Landing"
        // description="Landing description"
        /* you should un-comment description and add a unique description, 155 characters or less
      You can look at this documentation for best practices : https://developers.google.com/search/docs/advanced/appearance/good-titles-snippets */
      />

      <h1>HupPup!</h1>
      <Link to={routes.dash()}>Dash</Link>
      <a href="auth0.com">Log In</a>
      <a href="auth0.com">Sign Up</a>
    </>
  );
};

export default LandingPage;
