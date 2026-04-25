import './index.css';
import './App.css';

function App() {
  return (
    <main className="page-shell">
      <div className="moving-object-container">
        <div className="moving-object"></div>
      </div>
      <section className="hero-card">
        <span className="eyebrow">Static Hosting Starter</span>
        <h1>React app ready for AWS S3 and CloudFront.</h1>
        <p className="lead">
          This project is structured for a GitHub repository, built with React,
          and deployed through GitHub Actions to an S3 bucket with optional
          CloudFront cache invalidation.
        </p>

        <div className="callout-grid">
          <article>
            <h2>Frontend</h2>
            <p>React source files live in <code>src/</code>.</p>
          </article>
          <article>
            <h2>Static Assets</h2>
            <p>Manifest, robots, favicon, and logos live in <code>public/</code>.</p>
          </article>
          <article>
            <h2>Deploy</h2>
            <p>
              GitHub Actions builds the app and syncs the output to your S3
              bucket.
            </p>
          </article>
        </div>

        <div className="secret-box">
          <h3>GitHub secrets to configure</h3>
          <p>
            <code>AWS_ACCESS_KEY_ID</code>, <code>AWS_SECRET_ACCESS_KEY</code>,
            <code>AWS_REGION</code>, <code>S3_BUCKET_NAME</code>, and
            <code>CLOUDFRONT_DISTRIBUTION_ID</code>.
          </p>
        </div>
      </section>
    </main>
  );
}

export default App;
