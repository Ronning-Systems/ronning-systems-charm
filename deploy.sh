#!/usr/bin/env bash
# Build and deploy this Vite app to Google Cloud Run.
#
# Prereqs (one-time):
#   gcloud auth login
#   gcloud config set project <YOUR_PROJECT_ID>
#   gcloud services enable run.googleapis.com artifactregistry.googleapis.com cloudbuild.googleapis.com
#   gcloud artifacts repositories create web --repository-format=docker --location=$REGION
#
# Usage:
#   ./deploy.sh                          # uses defaults below
#   PROJECT_ID=my-proj REGION=us-central1 SERVICE=ronning-systems ./deploy.sh

set -euo pipefail

PROJECT_ID="${PROJECT_ID:-$(gcloud config get-value project 2>/dev/null)}"
REGION="${REGION:-us-central1}"
SERVICE="${SERVICE:-ronning-systems}"
REPO="${REPO:-web}"
IMAGE="${REGION}-docker.pkg.dev/${PROJECT_ID}/${REPO}/${SERVICE}:$(date +%Y%m%d-%H%M%S)"

if [ -z "${PROJECT_ID}" ]; then
  echo "ERROR: PROJECT_ID not set. Run: gcloud config set project <id>" >&2
  exit 1
fi

echo "→ Project: ${PROJECT_ID}"
echo "→ Region:  ${REGION}"
echo "→ Service: ${SERVICE}"
echo "→ Image:   ${IMAGE}"

echo "→ Building container with Cloud Build…"
gcloud builds submit --tag "${IMAGE}" --project "${PROJECT_ID}"

echo "→ Deploying to Cloud Run…"
gcloud run deploy "${SERVICE}" \
  --image "${IMAGE}" \
  --project "${PROJECT_ID}" \
  --region "${REGION}" \
  --platform managed \
  --allow-unauthenticated \
  --port 8080 \
  --cpu 1 --memory 512Mi \
  --min-instances 0 --max-instances 5

URL=$(gcloud run services describe "${SERVICE}" --region "${REGION}" --project "${PROJECT_ID}" --format='value(status.url)')
echo "✓ Deployed: ${URL}"