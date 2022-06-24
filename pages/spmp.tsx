import { NextPage } from 'next';

const spmp: NextPage = () => {
  return (
    <div>
      <h1>Software Project Management Plan</h1>
      <p>
        Below is detailed the project management plan developed for this
        portfolio site. This plan includes the scope of work and performance
        budget.
      </p>
      <h2>Scope of Work</h2>
      <p>
        This scope of works details what is included in this portfolio site.
      </p>
      <h3>Creative Brief</h3>
      <p>
        The creative brief creates a high-level overview of the purpose behind
        this portfolio site.
      </p>
      <h4>What are the goals of the portfolio?</h4>
      <h4>Why the Portfolio is being created?</h4>
      <h4>Who is the target audience?</h4>
      <h4>How will each user type use the portfolio?</h4>
      <h4>How will users find the portfolio?</h4>
      <h4>What are key performance indicators (KPIs)?</h4>
      <h3>Wireframe</h3>
      <p>Use Figma</p>
      <h3>Project Plan</h3>
      <h4>Stakeholders</h4>
      <h4>Team Members and Roles</h4>
      <h4>Users</h4>
      <h5>Add user profile for each user</h5>
      <h4>Product Roadmap</h4>
      <h4>Gantt Chart</h4>
      <h2>Performance Budget</h2>
      <ul>
        <li>Time to First Byte (TTFB)</li>
        <p>Difficult to place good value on</p>
        <li>First Contentful Paint (FCP)</li>
        <p>1.8 seconds or less</p>
        <li>Largest Contentful Paint (LCP)</li>
        <p>2.5 seconds or less</p>
        <li>First Input Delay (FID)</li>
        <p>100 milliseconds or less</p>
        <li>Cumulative Layout Shift (CLS)</li>
        <p>0.1 or less</p>
        <li>Time to Interactive</li>
        <p>Under 5 seconds</p>
        <li>Critical-Path Resources</li>
        <p>Under 170kb (minified)</p>
        <li>Lighthouse Performance Audits</li>
        <p>95 or above for all</p>
      </ul>
    </div>
  );
};

export default spmp;
