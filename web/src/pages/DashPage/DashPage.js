import { Link, routes } from '@redwoodjs/router';
import { MetaTags } from '@redwoodjs/web';

const DashPage = () => {
  return (
    <>
      <MetaTags
        title="Dash"
        // description="Dash description"
        /* you should un-comment description and add a unique description, 155 characters or less
      You can look at this documentation for best practices : https://developers.google.com/search/docs/advanced/appearance/good-titles-snippets */
      />

      <h1>DashPage</h1>
      <p>
        Find me in <code>./web/src/pages/DashPage/DashPage.js</code>
      </p>
      <p>
        My default route is named <code>dash</code>, link to me with `
        <Link to={routes.dash()}>Dash</Link>`
      </p>
    </>
  );
};

export default DashPage;
