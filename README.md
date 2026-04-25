# React S3 CloudFront App

A React static site scaffold for AWS S3 hosting with CloudFront delivery.

## Features

- React 18 with Create React App
- Moving object animation
- Ready for deployment to AWS S3 + CloudFront
- GitHub Actions workflow for automated deployment

## Getting Started

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm start
```

### Build for production

```bash
npm run build
```

## Deployment to AWS

### Prerequisites

- AWS account
- S3 bucket created
- CloudFront distribution (optional)

### Configure GitHub Secrets

Add these secrets to your GitHub repository:

| Secret | Description |
|--------|-------------|
| `AWS_ACCESS_KEY_ID` | AWS IAM user access key |
| `AWS_SECRET_ACCESS_KEY` | AWS IAM user secret key |
| `AWS_S3_BUCKET` | S3 bucket name |
| `AWS_CLOUDFRONT_DISTRIBUTION_ID` | CloudFront distribution ID (optional) |

### Deploy

Push to main branch to trigger GitHub Actions deployment.

## Project Structure

```
├── public/           # Static assets (HTML, images, manifest)
├── src/              # React source files
├── .github/
│   └── workflows/    # GitHub Actions workflows
└── package.json      # Dependencies and scripts
```

## License

MIT